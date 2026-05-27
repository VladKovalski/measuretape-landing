#!/usr/bin/env node
/**
 * For every generated HTML page in out/, produce a sibling index.md file
 * with the page's main content extracted as Markdown.
 *
 * AI agents (ChatGPT browse, Claude web, Perplexity) prefer markdown when
 * they can detect it — less noise, faster to parse, easier to cite.
 *
 * Pattern (Vercel/Stripe/Anthropic-style):
 *   /any/page/         → human-friendly HTML
 *   /any/page/index.md → clean markdown for AI agents to fetch
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const outDir = path.join(root, 'out');

function html2md(html) {
  let s = html;
  s = s.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '');
  s = s.replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '');
  s = s.replace(/<template[^>]*>[\s\S]*?<\/template>/gi, '');
  s = s.replace(/<h1[^>]*>([\s\S]*?)<\/h1>/gi, (_, t) => `\n# ${stripTags(t)}\n\n`);
  s = s.replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, (_, t) => `\n## ${stripTags(t)}\n\n`);
  s = s.replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, (_, t) => `\n### ${stripTags(t)}\n\n`);
  s = s.replace(/<h4[^>]*>([\s\S]*?)<\/h4>/gi, (_, t) => `\n#### ${stripTags(t)}\n\n`);
  s = s.replace(/<ul[^>]*>/gi, '\n').replace(/<\/ul>/gi, '\n');
  s = s.replace(/<ol[^>]*>/gi, '\n').replace(/<\/ol>/gi, '\n');
  s = s.replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, (_, t) => `- ${stripTags(t).trim()}\n`);
  s = s.replace(/<(strong|b)[^>]*>([\s\S]*?)<\/\1>/gi, (_, _tag, t) => `**${stripTags(t).trim()}**`);
  s = s.replace(/<(em|i)[^>]*>([\s\S]*?)<\/\1>/gi, (_, _tag, t) => `*${stripTags(t).trim()}*`);
  s = s.replace(/<a [^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi, (_, href, t) => {
    const text = stripTags(t).trim();
    if (!text) return '';
    if (href.startsWith('#')) return text;
    return `[${text}](${href})`;
  });
  s = s.replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, (_, t) => `\n${stripTags(t).trim()}\n\n`);
  s = s.replace(/<br\s*\/?>/gi, '\n');
  s = s.replace(/<blockquote[^>]*>([\s\S]*?)<\/blockquote>/gi, (_, t) => `\n> ${stripTags(t).trim()}\n\n`);

  s = s.replace(/<table[^>]*>([\s\S]*?)<\/table>/gi, (_, t) => {
    const rows = [];
    const trRegex = /<tr[^>]*>([\s\S]*?)<\/tr>/gi;
    let m;
    while ((m = trRegex.exec(t)) !== null) {
      const cells = [];
      const cellRegex = /<t[hd][^>]*>([\s\S]*?)<\/t[hd]>/gi;
      let cm;
      while ((cm = cellRegex.exec(m[1])) !== null) {
        cells.push(stripTags(cm[1]).trim());
      }
      if (cells.length) rows.push(cells);
    }
    if (rows.length === 0) return '';
    let md = '\n';
    rows.forEach((row, i) => {
      md += '| ' + row.join(' | ') + ' |\n';
      if (i === 0) md += '|' + row.map(() => '---').join('|') + '|\n';
    });
    return md + '\n';
  });

  s = stripTags(s);
  // Decode named + numeric (decimal & hex) HTML entities
  s = s
    .replace(/&#x([0-9a-fA-F]+);/g, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, dec) => String.fromCodePoint(parseInt(dec, 10)))
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&nbsp;/g, ' ')
    .replace(/&mdash;/g, '—').replace(/&ndash;/g, '–').replace(/&hellip;/g, '…')
    .replace(/&times;/g, '×').replace(/&deg;/g, '°')
    .replace(/&ldquo;/g, '“').replace(/&rdquo;/g, '”')
    .replace(/&lsquo;/g, '‘').replace(/&rsquo;/g, '’');
  s = s.replace(/\n{3,}/g, '\n\n');
  s = s.replace(/[ \t]+/g, ' ');
  s = s.replace(/^[ \t]+/gm, '');
  return s.trim();
}

function stripTags(s) { return s.replace(/<[^>]*>/g, ''); }
function extractTitle(html) { const m = html.match(/<title>([^<]+)<\/title>/); return m ? m[1].trim() : ''; }
function extractDescription(html) { const m = html.match(/<meta name="description" content="([^"]+)"/); return m ? m[1].trim() : ''; }
function extractCanonical(html) { const m = html.match(/<link rel="canonical" href="([^"]+)"/); return m ? m[1].trim() : ''; }
function extractMain(html) {
  const m = html.match(/<main[^>]*>([\s\S]*?)<\/main>/);
  if (m) return m[1];
  const a = html.match(/<article[^>]*>([\s\S]*?)<\/article>/);
  if (a) return a[1];
  const b = html.match(/<body[^>]*>([\s\S]*?)<\/body>/);
  return b ? b[1] : html;
}

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (e.name === '_next') continue;
      walk(full);
    } else if (e.name === 'index.html') {
      generateMarkdown(full);
    }
  }
}

function generateMarkdown(htmlPath) {
  const html = fs.readFileSync(htmlPath, 'utf8');
  const title = extractTitle(html);
  const description = extractDescription(html);
  const canonical = extractCanonical(html);
  if (!title) return;
  const mainHtml = extractMain(html);
  const body = html2md(mainHtml);
  if (body.length < 100) return;

  const frontmatter =
    `---\n` +
    `title: ${title.replace(/[\r\n]/g, ' ')}\n` +
    (description ? `description: ${description.replace(/[\r\n]/g, ' ')}\n` : '') +
    (canonical ? `canonical: ${canonical}\n` : '') +
    `source: ${canonical || htmlPath.replace(outDir, '')}\n` +
    `---\n\n`;

  const mdPath = path.join(path.dirname(htmlPath), 'index.md');
  fs.writeFileSync(mdPath, frontmatter + body + '\n');
}

console.log('Generating per-page markdown snapshots…');
walk(outDir);

let count = 0;
function countMd(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    if (e.isDirectory() && e.name !== '_next') countMd(path.join(dir, e.name));
    else if (e.name === 'index.md') count++;
  }
}
countMd(outDir);
console.log(`✓ generated ${count} index.md files`);
