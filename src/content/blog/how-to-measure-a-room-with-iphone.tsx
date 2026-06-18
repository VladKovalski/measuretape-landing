import type { PostMeta } from './posts';

export const meta: PostMeta = {
  slug: 'how-to-measure-a-room-with-iphone',
  date: '2026-05-15',
  readingTimeMin: 7,
  keywords:
    'how to measure a room with iphone, iphone room measurement, ar room scanner, lidar room scan, measuring app tutorial',
  tags: ['Tutorial', 'Room scanning', 'AR'],
  title: {
    en: 'How to Measure a Room with Your iPhone (Step-by-Step Guide)',
    ru: 'Как измерить комнату с помощью iPhone (пошаговая инструкция)',
    de: 'Wie misst du einen Raum mit deinem iPhone (Schritt-für-Schritt)',
    fr: 'Comment mesurer une pièce avec votre iPhone (guide étape par étape)',
    es: 'Cómo medir una habitación con tu iPhone (guía paso a paso)'
  },
  excerpt: {
    en: 'A practical guide to measuring an entire room with your iPhone in under five minutes, using LiDAR for 3D plans, or AR for manual layouts on any device.',
    ru: 'Практическое руководство: как измерить комнату iPhone за пять минут, через LiDAR для 3D-плана или AR для ручной разметки на любом устройстве.'
  }
};

export default function Post() {
  return (
    <article className="prose-content">
      <p className="lead">
        A tape measure is great for one wall at a time. But if you need a full room, every wall, every door, every window, there's a faster way. Your iPhone
        can capture the whole room in under five minutes, give you a measured 2D
        floor plan, export a PDF you can email to a contractor, and (on newer
        models) build a full 3D model you can walk through.
      </p>

      <p>
        This guide walks you through both methods: the <strong>automatic LiDAR
        scan</strong> for iPhones with a depth sensor (12 Pro and newer), and the
        <strong> manual floor plan builder</strong> that works on every iPhone from
        the Xs onward. We'll use the free <em>Ruler AR</em> app for both, but the
        techniques apply to any AR-based measuring app.
      </p>

      <h2>Before you start</h2>
      <p>
        Both methods rely on Apple's ARKit framework, which tracks your phone's
        position in physical space using the camera and motion sensors. To get
        accurate results:
      </p>
      <ul>
        <li>
          <strong>Good lighting.</strong> ARKit needs visible texture to track
          surfaces. A daylit room or evenly lit indoor space works best. In dim
          conditions, the app will prompt you to turn on the flashlight.
        </li>
        <li>
          <strong>Clear floor path.</strong> You'll walk the perimeter of the room.
          Move chairs out of the way before you start, you can put them back after.
        </li>
        <li>
          <strong>Steady hands.</strong> Hold the phone like you're filming a movie:
          two hands, elbows in, slow movements. Jerky motion confuses the tracker
          and ruins accuracy.
        </li>
      </ul>

      <h2>Method 1: LiDAR scan (iPhone 12 Pro and newer)</h2>
      <p>
        If your iPhone has a LiDAR sensor, the small black dot next to the rear
        camera lenses on Pro models, you can use Apple's RoomPlan technology to
        generate a complete 3D floor plan. The phone identifies walls, doors,
        windows, and furniture automatically.
      </p>
      <ol>
        <li>
          <strong>Open the Room Plan tool.</strong> In Ruler AR, tap the
          <em> Tools</em> button and choose <em>Room Scan</em>. Grant camera access
          if prompted.
        </li>
        <li>
          <strong>Stand in a corner of the room.</strong> Face the opposite corner
          diagonally. The app will show a preview of the 3D model being built, start out at chest height, phone in landscape orientation.
        </li>
        <li>
          <strong>Walk slowly along each wall.</strong> Pan the phone in a smooth
          arc to capture the wall from floor to ceiling. Take your time at the
          corners, that's where AR tracking can drift.
        </li>
        <li>
          <strong>Loop the entire room.</strong> When you return to your starting
          corner, the floor plan should be complete. The app will detect doors,
          windows, and major furniture (sofa, bed, table, fridge…) and tag them.
        </li>
        <li>
          <strong>Save and export.</strong> Tap <em>Done</em>. You'll see a 3D
          preview, a 2D floor plan, and dimensions for every wall. From here you can
          export to PDF, share a USDZ 3D model, or copy individual measurements.
        </li>
      </ol>
      <p>
        On a 4×5 m bedroom this takes about 90 seconds. Accuracy is typically ±5 mm
        because LiDAR measures depth directly rather than inferring it from
        camera frames.
      </p>

      <h2>Method 2: Manual floor plan builder (any iPhone Xs or newer)</h2>
      <p>
        No LiDAR? You can still build a clean orthogonal floor plan by walking the
        perimeter and tapping corners. This is slower than the LiDAR scan but
        produces a measured 2D plan that's accurate enough for renovation
        estimates, furniture shopping, and listing photography.
      </p>
      <ol>
        <li>
          <strong>Stand in a corner.</strong> In Ruler AR, open the <em>Tools</em>
          menu and choose <em>Manual Room Builder</em>. Stand in any corner of the
          room, facing the wall you want to start with.
        </li>
        <li>
          <strong>Tap the corner where you're standing.</strong> Aim the on-screen
          crosshair at the floor at the base of the corner and tap. The app marks
          this as your first vertex.
        </li>
        <li>
          <strong>Walk along the wall.</strong> Move to the next corner. The app
          shows a live preview of the wall length growing in real time.
        </li>
        <li>
          <strong>Tap the next corner.</strong> Repeat for every corner of the
          room. The mini-map in the top-right shows the polygon taking shape.
        </li>
        <li>
          <strong>Close the loop.</strong> When you return to your first corner,
          the "Close room" pulse appears. Tap it. The app snaps walls to right
          angles (within ±15°), removes any tiny segments, and produces a clean
          floor plan.
        </li>
      </ol>
      <p>
        Tip: if you make a mistake, long-press a corner to delete it. Or use the
        Undo/Redo buttons at the bottom of the screen. Your work is auto-saved
        every second, even if you minimize the app or the phone locks, the
        in-progress scan survives.
      </p>

      <h2>Capturing doors, windows, and furniture (manual method)</h2>
      <p>
        Manual scans capture the room outline but not the openings. To add them:
      </p>
      <ul>
        <li>
          After closing the room, the 2D editor opens. Drag and drop a door icon
          onto the wall where the door is. Set its width and height.
        </li>
        <li>
          Do the same for each window. Set the sill height (from floor) and the
          opening dimensions.
        </li>
        <li>
          For furniture, use the object library, sofa, bed, table, fridge, etc.
          Drag onto the plan, then rotate and resize.
        </li>
      </ul>

      <h2>Exporting your floor plan</h2>
      <p>
        Every scan you save becomes a project in your library. From any project
        detail screen you can:
      </p>
      <ul>
        <li>
          <strong>Export PDF.</strong> A4 layout with the 2D floor plan, a
          dimensions table for every wall, and an optional material estimate
          (paint, flooring, baseboard, tile, wallpaper).
        </li>
        <li>
          <strong>Share a screenshot.</strong> The 2D plan as a PNG. Works great in
          iMessage and email.
        </li>
        <li>
          <strong>Export 3D (LiDAR only).</strong> USDZ format, opens in macOS
          Quick Look, AR Quick Look on iPhone, or any 3D modeling tool.
        </li>
      </ul>

      <h2>When to use each method</h2>
      <table>
        <thead>
          <tr>
            <th>Goal</th>
            <th>Best method</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Quick area estimate for paint/flooring</td>
            <td>Manual (faster setup, no waiting for AR initialization)</td>
          </tr>
          <tr>
            <td>3D model for contractor / architect</td>
            <td>LiDAR (only method that produces a true 3D scan)</td>
          </tr>
          <tr>
            <td>Real estate listing floor plan</td>
            <td>LiDAR if available, manual fallback</td>
          </tr>
          <tr>
            <td>Insurance documentation</td>
            <td>LiDAR, captures furniture automatically</td>
          </tr>
          <tr>
            <td>Doorway / corridor check before furniture delivery</td>
            <td>Camera Measure (single dimensions, not a whole room)</td>
          </tr>
        </tbody>
      </table>

      <h2>Common mistakes (and how to avoid them)</h2>
      <ul>
        <li>
          <strong>Scanning in low light.</strong> AR tracking degrades fast.
          Either turn on overhead lights or use the in-app flashlight.
        </li>
        <li>
          <strong>Moving too fast.</strong> AR sessions need about 50ms per frame
          to update. If you whip the phone around, tracking falls behind and walls
          end up bent. Walk slowly.
        </li>
        <li>
          <strong>Skipping the corner.</strong> Don't shortcut across the room.
          AR drifts over distance; walking the perimeter resets tracking at every
          corner you tap.
        </li>
        <li>
          <strong>Reflective surfaces.</strong> Mirrors and full-length glass
          windows confuse depth tracking. Cover them with a sheet during the scan
          and add them as objects in post.
        </li>
      </ul>

      <h2>Ready to try it?</h2>
      <p>
        Ruler AR is free on the App Store. The Manual Room Builder works on any
        iPhone Xs or newer; the LiDAR scanner is included on Pro versions of the
        iPhone 12 and up. Open the camera, walk the room, share the PDF, done in
        five minutes.
      </p>
    </article>
  );
}
