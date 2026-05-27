import type { PostMeta } from './posts';

export const meta: PostMeta = {
  slug: 'iphone-measure-vs-apple-measure',
  date: '2026-05-18',
  readingTimeMin: 6,
  keywords:
    'apple measure app vs, iphone measure app comparison, apple measure alternative, better than apple measure, measure app features',
  tags: ['Comparison', 'Apple Measure', 'Apps'],
  title: {
    en: 'Ruler AR vs. Apple Measure: Honest Side-by-Side',
    ru: 'Ruler AR против Apple «Рулетка»: честное сравнение',
    de: 'Ruler AR vs. Apple Maßband: ehrlicher Direktvergleich',
    fr: 'Ruler AR vs. Mesures d\'Apple : comparatif direct et honnête',
    es: 'Ruler AR vs. Apple Medición: comparación directa y honesta'
  },
  excerpt: {
    en: 'Apple\'s built-in Measure app is free and pre-installed. So why install anything else? Here\'s a feature-by-feature breakdown of where Apple stops and where Ruler AR keeps going.',
    ru: 'Встроенное приложение Apple «Рулетка» бесплатно и уже стоит на телефоне. Зачем что-то ещё ставить? Подробное сравнение возможностей: где Apple заканчивается, а Ruler AR продолжает.'
  }
};

export default function Post() {
  return (
    <article className="prose-content">
      <p className="lead">
        Apple's Measure app launched alongside iOS 12 in 2018. It uses the
        same ARKit framework that every third-party measuring app relies on,
        so the raw accuracy is roughly identical. The differences are
        elsewhere — in what you can do with measurements after you take
        them, and which scenarios the app actually handles.
      </p>

      <h2>What Apple Measure does well</h2>
      <ul>
        <li><strong>It's free and pre-installed.</strong> Zero friction for a one-off measurement.</li>
        <li><strong>Decent at single distances.</strong> Tap two points, see the result. Works.</li>
        <li><strong>Auto-detects rectangles.</strong> Point at a picture frame or a piece of paper, it'll highlight the rectangle and offer to measure all sides.</li>
        <li><strong>Auto-detects people's height.</strong> If a person is fully in frame, the app draws a line to the top of their head and reads their height.</li>
        <li><strong>Has a basic level.</strong> Two-axis bubble level, OK for hanging a frame.</li>
      </ul>

      <h2>Where Apple Measure stops</h2>
      <ul>
        <li><strong>No project history.</strong> Every measurement is a screenshot or it's gone.</li>
        <li><strong>No PDF export.</strong> You can share screenshots, not formatted documents.</li>
        <li><strong>No angles.</strong> Just linear distance.</li>
        <li><strong>No area.</strong> You can't draw a polygon for square footage.</li>
        <li><strong>No 3D room scan.</strong> Even on LiDAR iPhones, Apple Measure doesn't use the depth sensor for room scanning.</li>
        <li><strong>No manual floor plan builder.</strong> On non-LiDAR iPhones, there's no fallback workflow.</li>
        <li><strong>No project folders.</strong> No way to group "kitchen measurements" together for a renovation.</li>
        <li><strong>No annotations or notes.</strong> Just naked dimensions.</li>
        <li><strong>No accuracy modes.</strong> No Touch Mode for sub-cm precision; the only AR mode available.</li>
      </ul>

      <h2>What Ruler AR adds</h2>
      <table>
        <thead>
          <tr><th>Capability</th><th>Apple Measure</th><th>Ruler AR</th></tr>
        </thead>
        <tbody>
          <tr><td>Length / distance</td><td>yes</td><td>yes</td></tr>
          <tr><td>Height (auto-detect for people)</td><td>yes</td><td>yes</td></tr>
          <tr><td>Bubble level</td><td>basic</td><td>3 modes (vertical, horizontal, free)</td></tr>
          <tr><td>Angle measurement</td><td>no</td><td>yes — AR protractor</td></tr>
          <tr><td>Area / polygon</td><td>no</td><td>yes — Square mode</td></tr>
          <tr><td>3D LiDAR room scan</td><td>no</td><td>yes — RoomPlan</td></tr>
          <tr><td>Manual floor plan (no LiDAR)</td><td>no</td><td>yes</td></tr>
          <tr><td>Touch Mode (sub-cm precision)</td><td>no</td><td>yes</td></tr>
          <tr><td>Project folders</td><td>no</td><td>yes</td></tr>
          <tr><td>Photo + note annotations</td><td>no</td><td>yes</td></tr>
          <tr><td>PDF export</td><td>no</td><td>yes</td></tr>
          <tr><td>USDZ 3D export</td><td>no</td><td>yes (with LiDAR)</td></tr>
          <tr><td>Material calculator (paint, tile, etc.)</td><td>no</td><td>yes</td></tr>
          <tr><td>Project sharing</td><td>screenshot only</td><td>PDF, 3D, Messages, AirDrop</td></tr>
        </tbody>
      </table>

      <h2>When Apple Measure is enough</h2>
      <ul>
        <li>You just want to know how tall something is, right now, once.</li>
        <li>You don't care about saving the result.</li>
        <li>You don't need angles, area, or any kind of room plan.</li>
        <li>You don't want to install anything.</li>
      </ul>

      <h2>When you'll outgrow Apple Measure within a week</h2>
      <ul>
        <li>You're planning a renovation and need to measure multiple rooms.</li>
        <li>You're shopping for furniture and want to share dimensions with someone else.</li>
        <li>You measure things for a living (contractor, designer, real estate, insurance).</li>
        <li>You want a measured floor plan, not just individual dimensions.</li>
        <li>You want to attach notes and photos to specific measurements.</li>
        <li>You need to send a professional-looking report to a client or contractor.</li>
      </ul>

      <h2>The honest take</h2>
      <p>
        Apple Measure is a fine ten-second tool. It's not designed to scale —
        it's a quick "Settings" app, not a workflow. Ruler AR (and other
        full-featured AR measuring apps) exist because the moment you take
        more than one measurement that matters, you need somewhere to put
        them, a way to share them, and tools beyond linear distance.
      </p>
      <p>
        Keep Apple Measure for one-offs. Install Ruler AR (free, no
        subscription required for the basics) for everything else. The
        moment you need to measure two things in a row, you'll know which
        one to open.
      </p>
    </article>
  );
}
