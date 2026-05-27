import type { PostMeta } from './posts';

export const meta: PostMeta = {
  slug: 'how-lidar-works-iphone',
  date: '2026-05-06',
  readingTimeMin: 7,
  keywords:
    'how lidar works iphone, iphone lidar explained, lidar vs arkit, iphone lidar scanner, lidar depth sensor',
  tags: ['Technical', 'LiDAR', 'AR'],
  title: {
    en: 'How LiDAR Works on iPhone (And Why It Matters for Measuring)',
    ru: 'Как работает LiDAR на iPhone (и почему это важно для измерений)',
    de: 'Wie LiDAR auf dem iPhone funktioniert (und warum das fürs Messen zählt)',
    fr: 'Comment fonctionne le LiDAR sur iPhone (et pourquoi c\'est important pour mesurer)',
    es: 'Cómo funciona el LiDAR en iPhone (y por qué importa para medir)'
  },
  excerpt: {
    en: 'A practical explanation of the small black dot next to your camera lens. How the LiDAR sensor measures depth in nanoseconds, what makes it different from camera-only AR, and the specific tasks where it actually changes the game.',
    ru: 'Практическое объяснение маленькой чёрной точки рядом с объективом камеры. Как LiDAR измеряет глубину за наносекунды, чем отличается от чистого AR на камере, и в каких задачах он реально меняет картину.'
  }
};

export default function Post() {
  return (
    <article className="prose-content">
      <p className="lead">
        Apple added a LiDAR sensor to iPhone Pro models in 2020 and to every
        iPad Pro since 2020. It's the small black square next to the rear
        camera lenses. Marketing copy calls it a "Lidar Scanner". Technically
        it's a <em>direct time-of-flight depth sensor</em>. Here's what it
        actually does, why ARKit gets so much faster and more accurate when
        it's present, and which measurement tasks change because of it.
      </p>

      <h2>What LiDAR actually is</h2>
      <p>
        LiDAR stands for "Light Detection and Ranging". The sensor emits an
        invisible infrared laser pulse, then measures how long the pulse
        takes to bounce back. Multiply that round-trip time by half the
        speed of light, and you have the distance to whatever the pulse
        hit.
      </p>
      <p>
        The iPhone's LiDAR fires <strong>576 pulses simultaneously in a
        grid pattern</strong>, 30 times per second. That gives you a depth
        map of 576 points in your environment, updated 30 times per second
        — essentially a 3D depth video stream.
      </p>
      <p>
        Range: about 5 metres indoors, 3 metres outdoors (sunlight saturates
        the sensor). Accuracy: ±1 cm at 1 m, growing to ±5 cm at 5 m.
      </p>

      <h2>What AR without LiDAR does instead</h2>
      <p>
        On non-LiDAR iPhones (iPhone Xs through iPhone 14 standard, iPhone
        15/16/17 standard), depth is <strong>inferred</strong> from camera
        motion and parallax. As you move the phone, the same point in space
        shifts across the camera frame; the apparent shift tells the
        software how far away that point is.
      </p>
      <p>
        This is called "visual-inertial odometry" (VIO). It needs:
      </p>
      <ul>
        <li>Visible texture in the scene (a blank white wall has no features)</li>
        <li>Good lighting (camera shutter must capture sharp frames)</li>
        <li>Motion (you have to move the phone for the math to work)</li>
        <li>~3 seconds to converge after launching</li>
      </ul>
      <p>
        It's clever, it works, but it's brittle. Reflective surfaces, dim
        rooms, and stationary phones all degrade it.
      </p>

      <h2>What changes with LiDAR present</h2>
      <table>
        <thead>
          <tr><th>Behaviour</th><th>Without LiDAR</th><th>With LiDAR</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>AR session startup time</td>
            <td>~3-5 seconds (calibrate by moving phone)</td>
            <td>~0.5 second (depth is read directly)</td>
          </tr>
          <tr>
            <td>Works on blank white walls?</td>
            <td>Struggles — needs texture</td>
            <td>Yes — laser reads depth regardless of visual texture</td>
          </tr>
          <tr>
            <td>Works in pitch darkness?</td>
            <td>No (camera can't see)</td>
            <td>Yes (laser is its own light)</td>
          </tr>
          <tr>
            <td>Accuracy at 3 m</td>
            <td>±15-25 mm</td>
            <td>±5-10 mm</td>
          </tr>
          <tr>
            <td>Captures 3D mesh of environment?</td>
            <td>No</td>
            <td>Yes — Apple's RoomPlan API uses it</td>
          </tr>
          <tr>
            <td>Detects furniture / objects automatically?</td>
            <td>No</td>
            <td>Yes — sofas, beds, fridges, doors, windows tagged</td>
          </tr>
        </tbody>
      </table>

      <h2>What this means for measuring apps</h2>
      <p>
        Three concrete differences:
      </p>
      <ol>
        <li>
          <strong>RoomPlan scanning.</strong> Apple's RoomPlan framework
          (which Ruler AR uses for room scans) only works on LiDAR
          devices. It captures a complete 3D model of the room — walls,
          windows, doors, furniture — in 60-90 seconds of walking. No
          LiDAR, no RoomPlan.
        </li>
        <li>
          <strong>Tap-on-blank-wall accuracy.</strong> When you point your
          camera at a featureless white wall and tap to measure, without
          LiDAR the app guesses where the plane is based on detected edges
          elsewhere. With LiDAR it reads the actual depth at the exact
          pixel you tapped. The difference shows up as ±2-3 cm of
          drift on long walls.
        </li>
        <li>
          <strong>Speed.</strong> Cold-start the app, point at something
          immediately. Non-LiDAR: wait 3-5 seconds for AR to converge.
          LiDAR: read in 0.5 seconds. For a contractor doing 20 measurements
          in a survey, that's 60+ seconds saved per visit.
        </li>
      </ol>

      <h2>Which iPhones have LiDAR</h2>
      <ul>
        <li>iPhone 12 Pro / 12 Pro Max</li>
        <li>iPhone 13 Pro / 13 Pro Max</li>
        <li>iPhone 14 Pro / 14 Pro Max</li>
        <li>iPhone 15 Pro / 15 Pro Max</li>
        <li>iPhone 16 Pro / 16 Pro Max</li>
        <li>iPhone 17 Pro / 17 Pro Max</li>
        <li>iPad Pro (4th gen, 2020) and later</li>
        <li>iPad Air (M2, 2024) and later</li>
      </ul>
      <p>
        Standard (non-Pro) iPhones don't have LiDAR. Apple has indicated this
        is deliberate — LiDAR is a "Pro" differentiator. There are no
        announcements of LiDAR coming to standard iPhones.
      </p>

      <h2>If you don't have LiDAR — what can you still do?</h2>
      <p>
        Pretty much everything except the automatic 3D room scan.
        Camera-based AR measurement still works for distance, height, area,
        and angles. The Manual Room Builder lets you build floor plans by
        walking the perimeter and tapping corners — no LiDAR required, and
        the resulting plan is just as accurate as a LiDAR scan in 2D.
      </p>
      <p>
        The Ruler AR free tier is full-featured on all iPhones from Xs
        onward. LiDAR adds the speed and the 3D scan, but the core
        measurement workflow is hardware-agnostic.
      </p>

      <h2>The future</h2>
      <p>
        Apple's 2024 patents indicate work on combining LiDAR with the
        front-facing camera (TrueDepth sensor) for full-body 3D scanning
        and AR fitness applications. For measurement, expect tighter
        accuracy at longer ranges and possibly outdoor LiDAR (currently
        sunlight-limited to ~3 m). For now: if you measure for a living,
        the Pro models pay back the price difference within a few months
        of professional use.
      </p>
    </article>
  );
}
