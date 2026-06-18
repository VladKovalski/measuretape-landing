import type { PostMeta } from './posts';

export const meta: PostMeta = {
  slug: 'will-my-sofa-fit-iphone',
  date: '2026-05-22',
  readingTimeMin: 5,
  keywords:
    'will my sofa fit, measure sofa for doorway, measure couch iphone, furniture fit measurement, how to measure sofa for doorway',
  tags: ['Buying guide', 'Furniture', 'Practical'],
  title: {
    en: 'Will My Sofa Fit? How to Measure With Your iPhone Before You Buy',
    ru: 'Влезет ли диван? Как проверить iPhone-ом до покупки',
    de: 'Passt mein Sofa? So misst du mit dem iPhone vor dem Kauf',
    fr: 'Mon canapé va-t-il rentrer ? Mesurer avec votre iPhone avant d\'acheter',
    es: '¿Cabrá mi sofá? Cómo medir con tu iPhone antes de comprar'
  },
  excerpt: {
    en: 'The four measurements every sofa buyer needs, doorway width, hallway turning radius, stairwell clearance, room footprint, and how to capture them in five minutes with your iPhone.',
    ru: 'Четыре замера, которые нужны перед покупкой дивана, дверь, поворот в коридоре, лестница, место в комнате, и как снять их iPhone-ом за пять минут.'
  }
};

export default function Post() {
  return (
    <article className="prose-content">
      <p className="lead">
        Every furniture shop has the same return rate: about 4% of sofas come
        back because they don't fit through the buyer's front door. Most of
        those returns could be prevented with five minutes of measurement
        before the purchase. Here's the checklist, and how to capture it
        with your iPhone.
      </p>

      <h2>The four measurements that matter</h2>
      <p>
        A sofa has to navigate four pinch points between the truck and your
        living room:
      </p>
      <ol>
        <li><strong>Front door opening</strong>, width and height</li>
        <li><strong>Hallway turning radius</strong>, the tightest corner the sofa has to round</li>
        <li><strong>Stairwell clearance</strong> (if you're not on the ground floor)</li>
        <li><strong>Final room footprint</strong>, where the sofa will sit, relative to existing furniture</li>
      </ol>

      <h2>1. Front door</h2>
      <p>
        Stand in the doorway. Open Ruler AR (or any AR measuring app), select
        <em> length mode</em>, and tap the inside of one door jamb, then the
        other. That's your door's <strong>clear width</strong>, the actual
        passable dimension, not the frame-to-frame width.
      </p>
      <p>
        Repeat top-to-bottom for door height. A standard interior door is
        80 cm × 200 cm but vintage homes and apartment doors vary wildly. Sofas
        wider than your clear width need to come in on their side or upright.
      </p>

      <h2>2. Hallway turning radius</h2>
      <p>
        If the front door opens straight into a hallway, the sofa needs to
        turn. Measure the corridor width at the turn (point your phone across
        the corridor and tap each wall). Then measure the corner depth, from the corner of the wall to the opposite parallel wall.
      </p>
      <p>
        The rule of thumb: <strong>your sofa's diagonal (length × depth via Pythagoras) must be
        less than the corridor width plus the corner depth.</strong> The app's area
        tool lets you draw the corner footprint as a polygon and read the
        diagonal directly.
      </p>

      <h2>3. Stairwell clearance</h2>
      <p>
        Stairwell measurement is where AR really earns its keep. Hold the
        phone perpendicular to the stairs, midway up, and use the Height tool
        to capture vertical clearance. Then horizontal width at the same
        point. Repeat at the top of the flight where the ceiling can angle
        inward.
      </p>
      <p>
        Spiral stairs and tight L-shaped landings are the killer here.
        The Manual Room Builder can capture the landing footprint in
        30 seconds, sketch the polygon by tapping corners and use the area
        tool to verify the diagonal.
      </p>

      <h2>4. Room footprint</h2>
      <p>
        Walk into the destination room. Note where the sofa is going. Measure
        the wall length where it'll sit, then the clearance from the wall to
        any existing furniture, doorways, or radiators. Most sofas need
        15-30 cm of breathing room on the back if it's near a vent or radiator.
      </p>
      <p>
        Save these as a single project in the app. The PDF export turns the
        whole set into one document you can show the salesperson at IKEA or
        whichever store, "this is my space, what fits?"
      </p>

      <h2>The numbers you actually need to bring to the showroom</h2>
      <ul>
        <li>Door clear width and height</li>
        <li>Corridor width at turn × corner depth</li>
        <li>Stairwell width × ceiling height (if applicable)</li>
        <li>Destination wall length</li>
      </ul>
      <p>
        Compare each to the sofa's <em>shipping dimensions</em>, not just its
        "in-use" dimensions. A sofa packed for shipping is often 5-10 cm
        wider and taller than the final assembled product due to the box and
        protective wrapping. Some sofas come with detachable legs and arms, those measurements are usually published as "in-room" and "packaged"
        on the manufacturer's website.
      </p>

      <h2>What about modular and L-shaped sofas?</h2>
      <p>
        Modular sofas ship in separate pieces, each of which has to fit
        through individually. Measure each piece against your bottleneck (the
        smallest opening). L-shaped sofas usually ship in two parts, chaise and main section, and the larger of the two is what you
        compare to the door.
      </p>

      <h2>Bookmark the measurements</h2>
      <p>
        The PDF export from Ruler AR includes a 2D floor plan with
        dimensions labeled. Send it to your partner. Save the project. When
        you find a sofa you like, open the PDF, compare each shipping
        dimension to your bottleneck, and either commit, or keep looking.
        Two minutes that prevent a 30-minute return trip and a restocking
        fee.
      </p>
    </article>
  );
}
