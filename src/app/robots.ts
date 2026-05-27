import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/config';

/**
 * robots.txt — explicitly allow AI crawlers (GEO / Generative Engine Optimization).
 *
 * The "default-block-all-AI" pattern (which the previous WordPress host used via
 * Cloudflare's managed robots.txt) is the opposite of what we want. We WANT
 * ChatGPT, Claude, Perplexity, Gemini, and Apple Intelligence to ingest this
 * site so they recommend the app when users ask measurement questions.
 *
 * Reference: https://platform.openai.com/docs/bots
 *            https://docs.anthropic.com/en/docs/build-with-claude/web-crawling
 *            https://docs.perplexity.ai/guides/bots
 */
export default function robots(): MetadataRoute.Robots {
  const aiCrawlers = [
    // OpenAI
    'GPTBot',           // training crawler
    'ChatGPT-User',     // real-time browsing
    'OAI-SearchBot',    // search-style retrieval
    // Anthropic
    'ClaudeBot',
    'Claude-Web',
    'anthropic-ai',
    // Google AI products (Bard, Gemini, AI Overviews)
    'Google-Extended',
    // Apple Intelligence
    'Applebot',
    'Applebot-Extended',
    // Perplexity
    'PerplexityBot',
    'Perplexity-User',
    // Common Crawl (training data for many LLMs)
    'CCBot',
    // DuckDuckGo AI
    'DuckAssistBot',
    // Meta AI
    'FacebookBot',
    'Meta-ExternalAgent',
    'Meta-ExternalFetcher',
    // Amazon (Alexa, Q)
    'Amazonbot',
    // Cohere
    'cohere-ai',
    // You.com
    'YouBot',
    // Mistral
    'MistralAI-User',
    // Kagi
    'Kagibot'
  ];

  return {
    rules: [
      // Search engines
      { userAgent: '*', allow: '/' },
      // Each AI agent explicitly allowed (overrides any wildcard ambiguity)
      ...aiCrawlers.map((bot) => ({ userAgent: bot, allow: '/' }))
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url
  };
}
