import type { PostMeta } from './posts';

export const meta: PostMeta = {
  slug: 'plan-renovation-with-iphone',
  date: '2026-04-10',
  readingTimeMin: 6,
  keywords:
    'plan renovation iphone, measure renovation phone, renovation estimate app, home improvement iphone app, material calculator app',
  tags: ['Renovation', 'Tutorial', 'Planning'],
  title: {
    en: 'Plan a Home Renovation Using Just Your iPhone',
    ru: 'Как спланировать ремонт, имея только iPhone',
    de: 'Eine Renovierung mit dem iPhone planen, Schritt für Schritt',
    fr: 'Planifier une rénovation avec votre iPhone, pas à pas',
    es: 'Cómo planificar una reforma con solo tu iPhone'
  },
  excerpt: {
    en: 'A pragmatic workflow for using your iPhone to measure, estimate materials, and price out a renovation before you call a contractor, no special tools, no architect.',
    ru: 'Практичный рабочий процесс: как iPhone-ом обмерить, оценить материалы и просчитать стоимость ремонта до того, как звонить мастеру.'
  }
};

export default function Post() {
  return (
    <article className="prose-content">
      <p className="lead">
        The hardest part of starting a renovation isn't the work, it's the
        unknowns. How many square metres of tile? How much paint? What's a
        reasonable bid for repainting two rooms? With a measuring app on your
        iPhone, you can answer all three before you make a single phone call.
      </p>
      <p>
        This is the workflow we'd use ourselves to scope a small-to-mid
        renovation, a bathroom retile, a one-bedroom paint job, a kitchen
        floor replacement, from "I want to do this" to a ballparked budget,
        in one evening.
      </p>

      <h2>Step 1: Capture every room you'll touch</h2>
      <p>
        Open Ruler AR (or any AR floor-plan app) and scan each affected room.
        Don't skip rooms you think are obvious, the laundry room you walk past
        every day is probably 0.5 m² bigger than you think.
      </p>
      <ul>
        <li>
          On a Pro iPhone, use the LiDAR room scan: walk the perimeter, the app
          builds a 3D model with walls, doors, windows, and furniture identified.
        </li>
        <li>
          Without LiDAR, use the manual room builder: stand in a corner, walk
          along each wall, tap the corners.
        </li>
        <li>
          Either way, save each room as a project. Name them clearly:
          "Bathroom, main", "Kitchen, floor only", "Bedroom 1, paint".
        </li>
      </ul>
      <p>
        Each project gets a PDF with floor plan + wall dimensions + total floor
        area. Keep these, they're the input for everything that follows.
      </p>

      <h2>Step 2: Calculate the material quantities</h2>
      <p>
        Open one of your saved projects. Tap into the material calculator. The app
        already knows the room's dimensions, so it can produce material estimates
        in seconds:
      </p>
      <ul>
        <li>
          <strong>Paint.</strong> Wall area minus door + window cutouts, divided
          by typical coverage (usually 10 m² per litre for one coat). The app
          assumes two coats by default; adjust if your paint is one-coat or
          three-coat.
        </li>
        <li>
          <strong>Floor (tile / laminate / vinyl).</strong> Floor area + 10%
          waste factor for cuts. Bigger waste factor on diagonal lays (15%) and
          herringbone patterns (20%).
        </li>
        <li>
          <strong>Baseboard / skirting.</strong> Wall perimeter minus door
          widths.
        </li>
        <li>
          <strong>Wallpaper.</strong> Wall area divided by roll size (typically
          5 m² per roll), rounded up. Add 10% for pattern matching.
        </li>
        <li>
          <strong>Wall tile.</strong> Tiled wall area minus tile-cutouts for
          fixtures. Adjust based on tile size, large-format tiles have less
          waste than mosaic.
        </li>
      </ul>
      <p>
        Export each estimate as part of the PDF. Now you have material quantities
        you can plug into a price-checking phase.
      </p>

      <h2>Step 3: Price out materials</h2>
      <p>
        Take your quantities to your favourite hardware retailer's app or
        website. Search for products that match your specs (matt-finish wall
        paint, 60×60 cm porcelain tile, etc.) and multiply quantity × unit price
        for each line item.
      </p>
      <p>
        Tip: shop two or three retailers before committing. Prices on identical
        products often vary 30%+ between IKEA, Home Depot/Lowe's, Leroy Merlin,
        B&Q, OBI, or local distributors.
      </p>
      <p>
        Save the cart total per retailer. This is your <strong>materials
        baseline</strong>.
      </p>

      <h2>Step 4: Estimate labour</h2>
      <p>
        Labour is harder to estimate from a phone because rates depend on your
        region, the job type, and the contractor's overhead. But you can ballpark:
      </p>
      <ul>
        <li>
          <strong>Paint a room.</strong> 0.5-1.5 days per room for one painter,
          depending on prep needed.
        </li>
        <li>
          <strong>Tile a bathroom floor (4-6 m²).</strong> 1-2 days for one
          tiler, including waterproofing prep.
        </li>
        <li>
          <strong>Lay laminate or vinyl click flooring.</strong> ~10 m²/day per
          worker.
        </li>
        <li>
          <strong>Replace baseboard.</strong> 4 hours per room if walls are
          square.
        </li>
      </ul>
      <p>
        Multiply by the local labour day rate (search "[your city] painter day
        rate", most regional contractor associations publish this). Add 15% for
        management overhead, taxes, and miscellaneous.
      </p>

      <h2>Step 5: Build the spreadsheet</h2>
      <p>
        On your phone, open Numbers or Excel. Make a row for every line item with
        columns: Quantity, Unit, Unit price, Total. Sum the totals into three
        buckets: <strong>Materials</strong>, <strong>Labour</strong>,
        <strong> Contingency</strong> (15-20% of materials + labour).
      </p>
      <p>
        That total is your <em>self-assessed budget</em>. When you start getting
        bids, you'll know within 10 minutes whether a bid is in the right zone or
        wildly out.
      </p>

      <h2>Step 6: Use the PDF to brief contractors</h2>
      <p>
        Send the per-room PDFs (with floor plan + dimensions + material estimate)
        to every contractor you're getting bids from. This does two things:
      </p>
      <ul>
        <li>
          Sets a professional tone, contractors expect haggling and ambiguity
          from homeowners. A measured PDF says "I've done my homework, please
          quote accordingly".
        </li>
        <li>
          Eliminates the "let me come out and measure" delay. The contractor can
          send a quote the next day instead of next week.
        </li>
      </ul>

      <h2>What you can't do from a phone</h2>
      <p>
        Some things still require a contractor visit:
      </p>
      <ul>
        <li>
          <strong>Hidden plumbing / electrical.</strong> If the renovation
          touches walls with utilities behind them, only a contractor with a
          camera and wire tracer can tell you what's there.
        </li>
        <li>
          <strong>Structural changes.</strong> Removing a wall, adding a window,
          changing load-bearing structure, needs an engineer or architect.
        </li>
        <li>
          <strong>Permits.</strong> Anything beyond cosmetic work in most
          jurisdictions needs municipal sign-off. Phone-measured drawings are a
          good starting point but not a substitute.
        </li>
      </ul>

      <h2>The point</h2>
      <p>
        You don't need to know what you're doing to get a good renovation outcome.
        You just need to know enough to <em>ask the right questions</em>. A
        measured floor plan + a material estimate + a labour ballpark turns "what
        will this cost?" from a mystery into a conversation. Your phone is enough
        to do all three.
      </p>
    </article>
  );
}
