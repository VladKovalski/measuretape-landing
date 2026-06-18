import type { PostMeta } from './posts';

export const meta: PostMeta = {
  slug: 'measure-square-footage-iphone',
  date: '2026-05-12',
  readingTimeMin: 5,
  keywords:
    'measure square footage iphone, how to measure room area, square meters app, ar area measurement, room area iphone',
  tags: ['Tutorial', 'Area', 'Renting'],
  title: {
    en: 'How to Measure Square Footage With Your iPhone (For Renters and Buyers)',
    ru: 'Как измерить площадь комнаты iPhone-ом (для арендаторов и покупателей)',
    de: 'Wie misst du Quadratmeter mit dem iPhone (für Mieter und Käufer)',
    fr: 'Comment mesurer la surface au sol avec votre iPhone (pour locataires et acheteurs)',
    es: 'Cómo medir los metros cuadrados con tu iPhone (para inquilinos y compradores)'
  },
  excerpt: {
    en: 'Square-footage numbers on rental listings are notoriously wrong. Here\'s how to verify them in 90 seconds using your iPhone, and what to do when the actual area is 10% smaller than advertised.',
    ru: 'Цифры площади в объявлениях аренды и продажи часто врут. Как проверить площадь iPhone-ом за 90 секунд, и что делать, если реальная меньше на 10% от заявленной.'
  }
};

export default function Post() {
  return (
    <article className="prose-content">
      <p className="lead">
        A study by ratemyagent.com.au in 2023 found that <strong>27% of
        property listings overstate square footage by more than 5%</strong>.
        For a 60 m² apartment, that's 3 m² of imaginary space, about the
        size of a small bathroom. If you're renting at €25/m²/month, you're
        being asked to pay €75/month for floor that doesn't exist.
      </p>
      <p>
        Here's the 90-second method to verify a listing before you sign.
      </p>

      <h2>The fast method (with LiDAR)</h2>
      <p>
        On any iPhone Pro from 12 onwards (or iPad Pro 2020+):
      </p>
      <ol>
        <li>Open Ruler AR and tap <em>Room Scan</em>.</li>
        <li>Stand in one corner. Walk slowly along each wall.</li>
        <li>When you return to the starting corner, tap <em>Done</em>.</li>
        <li>Read the floor area from the summary screen, accurate to within ±2%.</li>
      </ol>
      <p>
        This takes about 60 seconds for a single room. A full one-bedroom
        apartment takes 3-4 minutes total.
      </p>

      <h2>The reliable method (any iPhone)</h2>
      <p>
        If you don't have a LiDAR iPhone, use the Manual Room Builder:
      </p>
      <ol>
        <li>Open Ruler AR → Tools → Manual Room Builder.</li>
        <li>Stand in a corner, aim the crosshair at the floor at your feet, tap.</li>
        <li>Walk to the next corner along the wall. Tap.</li>
        <li>Continue around the room. The mini-map shows the polygon growing.</li>
        <li>When you reach the starting corner, the "close room" pulse appears. Tap it.</li>
      </ol>
      <p>
        The polygon's area is computed automatically using the Shoelace
        formula. Accuracy depends on AR tracking, typically ±5% for
        rooms under 30 m², which is good enough to catch listing
        misrepresentations.
      </p>

      <h2>What counts as "square footage", and what doesn't</h2>
      <p>
        Listings inflate numbers in three common ways:
      </p>
      <ul>
        <li><strong>Including unusable spaces.</strong> Sloped ceilings, alcoves under 1.5 m high, structural columns. Different jurisdictions handle these differently, UK/AU typically exclude under-1.5m areas; US is laxer.</li>
        <li><strong>Measuring exterior wall-to-wall instead of interior.</strong> A 10 × 10 m exterior box is only ~9.5 × 9.5 m of usable interior space after walls (5 cm of internal partition × ~6 walls = 30 cm of "ghost" wall area).</li>
        <li><strong>Including balconies/terraces at full count.</strong> Many places count outdoor space at 50%, if your listing counts it at 100%, you're getting half what you think.</li>
      </ul>
      <p>
        When you measure with the app, you're measuring <em>interior usable
        floor area</em>. That's the most honest number, and the one that
        matters for furniture planning and pricing comparisons.
      </p>

      <h2>What to do when the numbers don't match</h2>
      <p>
        If your measurement is more than 5% below the listed area, you have
        leverage:
      </p>
      <ul>
        <li>
          <strong>Renting:</strong> Ask for a reduction proportional to the
          discrepancy. €/m² is a transparent calculation, if you're
          paying for 60 m² and the apartment is 56 m², that's 6.7% you can
          push for.
        </li>
        <li>
          <strong>Buying:</strong> Get a professional surveyor before you
          sign anything. A 5% area discrepancy on a €400,000 purchase is
          €20,000, that's worth the €500 surveyor fee.
        </li>
        <li>
          <strong>Insurance:</strong> Wrong square footage means wrong
          coverage. Insurers will pay claims based on actual measured area
          if you have documentation. The app's PDF export with date stamp
          becomes evidence.
        </li>
      </ul>

      <h2>Multi-room measurement</h2>
      <p>
        For full apartments, save each room as a separate project. Total
        area = sum of all rooms minus the overlap (hallway shouldn't be
        counted twice if you measured it as part of the entrance and the
        kitchen). The PDF export totals it automatically when you group
        projects under one folder.
      </p>

      <h2>Convert between units</h2>
      <p>
        The app handles all major units: m², ft², cm², in². Switch in
        Settings → Units. The PDF export labels everything in your chosen
        unit. If you're in the US shopping for a European apartment (or
        vice versa), this saves you the conversion math.
      </p>

      <h2>Bottom line</h2>
      <p>
        Never trust a square-footage number you didn't measure yourself, especially on a rental or purchase listing. The app gives you a
        90-second verification that's accurate within a few percent and
        produces documentation you can use to negotiate. Treat it like a
        spell-check for real estate listings.
      </p>
    </article>
  );
}
