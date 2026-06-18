import type { PostMeta } from './posts';

export const meta: PostMeta = {
  slug: 'measure-fridge-appliance-fit',
  date: '2026-04-05',
  readingTimeMin: 4,
  keywords:
    'measure fridge fit iphone, will fridge fit kitchen, appliance fit measurement, measure for refrigerator, kitchen appliance dimensions',
  tags: ['Buying guide', 'Appliances', 'Kitchen'],
  title: {
    en: 'Will the Fridge Fit? How to Measure for Appliances Before You Order',
    ru: 'Влезет ли холодильник? Как замерить под бытовую технику до заказа',
    de: 'Passt der Kühlschrank rein? Maßnehmen für Geräte vor der Bestellung',
    fr: 'Le frigo va-t-il rentrer ? Mesurer pour l\'électroménager avant de commander',
    es: '¿Cabrá la nevera? Cómo medir para electrodomésticos antes de pedir'
  },
  excerpt: {
    en: 'Appliance returns cost retailers €50-150 each in restocking and freight. They cost you a day of waiting for the replacement. Five iPhone measurements before you click "order" avoid the whole mess.',
    ru: 'Возврат техники стоит магазину €50-150 на логистику. Вам, день ожидания замены. Пять замеров iPhone-ом до клика «оформить заказ» избавляют от всей этой истории.'
  }
};

export default function Post() {
  return (
    <article className="prose-content">
      <p className="lead">
        Major appliance retailers report 8-12% return rates on
        refrigerators, washing machines, and large ovens. The single most
        common reason: the customer measured the gap, ordered the unit, and
        the delivery driver discovered something didn't fit. Five
        measurements with an AR app before the order eliminates this entire
        category of regret.
      </p>

      <h2>The five appliance measurements you actually need</h2>

      <h3>1. The opening (width × depth × height)</h3>
      <p>
        The cabinet gap or wall recess where the appliance will live.
        Measure each dimension at the front and at the back, these
        sometimes differ because of pipes, plinths, or wall irregularities.
        Use the smallest of each pair as your constraint.
      </p>

      <h3>2. The door / cabinet opening it has to come through</h3>
      <p>
        Same approach as the sofa article: door clear width and height,
        corridor turning radius, stairwell clearance. A fridge that fits the
        kitchen gap but won't come through your front door is a return
        waiting to happen.
      </p>

      <h3>3. Hinge swing clearance</h3>
      <p>
        Most fridges and ovens swing their doors past 90 degrees. Measure
        the clearance from the appliance's right edge to the nearest
        obstacle (wall, cabinet, island). A 90 cm fridge with a 70 cm door
        needs about 70 cm of clear swing space, if there's a wall 50 cm
        away, you'll only be able to open it partway.
      </p>

      <h3>4. Plumbing / power connection points</h3>
      <p>
        For fridges with water dispensers: water line position behind the
        cabinet. For ovens and dishwashers: power outlet height and
        gas/water connections. Measure the position of each from a fixed
        reference (corner of cabinet, edge of floor) so you can match it
        against the appliance's spec sheet.
      </p>

      <h3>5. Ventilation clearance</h3>
      <p>
        Most fridges need 25-50 mm of breathing space behind for heat
        dissipation. Built-in units have different requirements (look for
        "integrated installation" in the spec). The AR app's tape
        measurement in the gap behind the cabinet line, usually impossible
        with a physical tape, is easy: camera tilted into the gap, tap
        both edges.
      </p>

      <h2>Compare to the spec sheet</h2>
      <p>
        Every appliance manufacturer publishes <em>installation
        dimensions</em> in a downloadable spec PDF. The numbers there include:
      </p>
      <ul>
        <li>Product dimensions (width × depth × height)</li>
        <li>Packed dimensions (always larger, includes box)</li>
        <li>Minimum cabinet opening dimensions</li>
        <li>Door swing clearance</li>
        <li>Connection point positions</li>
      </ul>
      <p>
        Your AR-measured gap must be larger than the minimum cabinet
        opening dimensions for the appliance to install. Door swing must
        be smaller than your clearance. Connection points must align.
      </p>

      <h2>The packed-dimension trap</h2>
      <p>
        A 60 cm wide fridge often ships in a 68 cm wide box (padding +
        packaging). If your front door is 65 cm, the box doesn't fit, even though the actual fridge would.
      </p>
      <p>
        Delivery drivers in some regions will unpack at the truck if you
        ask in advance. Check the retailer's policy. Otherwise, your
        bottleneck is the packed dimension.
      </p>

      <h2>Saving the measurements</h2>
      <p>
        Capture all five measurements as a single Ruler AR project named
        "Kitchen appliance opening" (or wherever it's going). Export PDF.
        Reference it when ordering, paste the actual numbers into the
        retailer's chat or your purchase notes. If anything is wrong on
        delivery, you have date-stamped documentation that the issue is
        with the appliance, not your measurements.
      </p>

      <h2>What about built-in / panel-ready appliances?</h2>
      <p>
        These are extra-sensitive, the appliance integrates with cabinetry
        rather than sitting separately. Even 5 mm of cabinet
        misalignment causes visible gaps. For built-ins, also measure:
      </p>
      <ul>
        <li>Cabinet end-panel thickness on both sides</li>
        <li>Top trim depth (if any)</li>
        <li>Plinth (kickplate) height</li>
        <li>Adjacent worktop overhang into the opening</li>
      </ul>
      <p>
        For high-stakes built-in installs (€3,000+ wine fridges, custom
        kitchens), having the installer measure on-site before order is
        worth €100-200 in measurement fees. Use the app's measurements as
        your initial sanity-check before you book that visit.
      </p>

      <h2>Bottom line</h2>
      <p>
        Five measurements, five minutes, one PDF, versus a delivery driver
        carrying the box back to the truck and an extra week of cooking
        without a fridge. The math is obvious. Always measure twice; never
        order once.
      </p>
    </article>
  );
}
