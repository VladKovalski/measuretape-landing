import type { PostMeta } from './posts';

export const meta: PostMeta = {
  slug: 'things-you-can-measure-iphone',
  date: '2026-04-25',
  readingTimeMin: 5,
  keywords:
    'what can iphone measure, iphone measure tricks, ar measure uses, useful measure app uses, surprising iphone measure',
  tags: ['Listicle', 'Tips', 'Use cases'],
  title: {
    en: '7 Things You Can Measure With Your iPhone You Probably Don\'t Realize',
    ru: '7 вещей, которые можно измерить iPhone-ом и о которых вы не знали',
    de: '7 Dinge, die du mit dem iPhone messen kannst, wahrscheinlich ohne es zu wissen',
    fr: '7 choses que vous pouvez mesurer avec votre iPhone sans le savoir',
    es: '7 cosas que puedes medir con tu iPhone y probablemente no sabías'
  },
  excerpt: {
    en: 'AR measuring apps aren\'t just for "how long is this thing". Once you start looking, your phone replaces a half-dozen tools you didn\'t realize you needed.',
    ru: 'AR-приложения для измерений, это не только «какой длины эта штука». Стоит начать смотреть, и iPhone заменяет полдюжины инструментов, о которых вы не подозревали.'
  }
};

export default function Post() {
  return (
    <article className="prose-content">
      <p className="lead">
        Most people install an AR measuring app, measure one thing, and
        forget it's there. Which is a shame, the same app handles a bunch
        of measurements that traditional tools either can't do or do
        badly. Here are seven uses you probably haven't tried.
      </p>

      <h2>1. The angle of a sloped roof</h2>
      <p>
        Hard to do with a tape measure, you need to climb up there. With an
        iPhone, stand at the foot of the wall, point your camera up along
        the roofline, and use the angle tool. The AR protractor reads the
        roof's pitch in degrees without you leaving the ground.
      </p>
      <p>
        Useful for: solar panel quotes (which require pitch within ±2°),
        DIY shingle replacement, comparing real pitch to what an estate
        agent claimed.
      </p>

      <h2>2. Whether your TV is mounted level</h2>
      <p>
        Hold the phone against the side of the TV, switch to bubble level
        mode. The reading tells you whether the TV is plumb to within
        0.5 degrees. The standard wall-mount tolerance is ±2 degrees, if
        you're outside that, the TV will look slightly off no matter how
        carefully you tightened the bracket.
      </p>

      <h2>3. The height of a tree (or a building, or a person)</h2>
      <p>
        AR height measurement uses the ground plane as a reference. Stand
        on level ground, point the camera at the base of the tree, tap to
        anchor, then aim at the top and tap again. The app calculates the
        height from the angle and your phone's position.
      </p>
      <p>
        Accuracy: ±5% on a 10 m tree, ±10% on a 30 m building. Good enough
        for "is this tree too tall for the power lines?" but not for
        engineering purposes.
      </p>

      <h2>4. The exact width of a parking spot before you back in</h2>
      <p>
        From outside the car, point the camera across the parking spot
        between the lane lines. Tap each line. Compare to your car's width
        (usually 1.8-2.0 m for most sedans, 2.0-2.2 m for SUVs). If the
        spot's clear width is under 2.4 m and you have a wider vehicle,
        skip it, you won't have door clearance.
      </p>

      <h2>5. Whether a picture frame is hanging straight</h2>
      <p>
        Press the phone flat against the bottom edge of the frame. Check
        bubble level. Most frames hang with one nail and a wire, they
        always drift slightly off-level over time. A 1-degree tilt looks
        intentionally crooked; the AR level catches it instantly.
      </p>

      <h2>6. The slope of your floor</h2>
      <p>
        Old houses settle. Floors slope. Place the phone flat on the floor
        in different rooms, the level reading tells you exactly how much
        each floor slopes from horizontal. A 1-degree tilt over a 5 m room is
        9 cm of vertical drop, which is enough to make a ball roll. Anything
        over 2 degrees indicates structural issues worth a surveyor's
        opinion.
      </p>

      <h2>7. How long the queue is</h2>
      <p>
        A small absurdity but useful: hold the phone up at the front of the
        queue, switch to AR measure, tap the front person's feet and then
        the back person's feet. Now you know exactly how long the queue is
        and how long you'll wait (people typically advance at 30-40 cm/sec
        in a checkout line). Especially fun at airports.
      </p>

      <h2>Bonus: things you can also measure but probably shouldn't</h2>
      <ul>
        <li>Your dog's height for ordering a custom harness, works, but the dog has to stand still</li>
        <li>The depth of a swimming pool from above the water surface, possible with LiDAR, fails at non-LiDAR (water has no AR features)</li>
        <li>How far the moon is, no. Don't try.</li>
      </ul>

      <h2>The point</h2>
      <p>
        An AR measuring app turns your phone into a tape measure, level,
        protractor, and laser distance meter at once. The traditional tools
        each cost €15-50 and live in a drawer. The app is free and lives in
        your pocket. The next time you'd reach for any of those tools, try
        the app first. After a few weeks, the drawer stays closed.
      </p>
    </article>
  );
}
