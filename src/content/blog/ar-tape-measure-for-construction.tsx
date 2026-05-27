import type { PostMeta } from './posts';

export const meta: PostMeta = {
  slug: 'ar-tape-measure-for-construction',
  date: '2026-04-18',
  readingTimeMin: 7,
  keywords:
    'ar measure construction, iphone for contractors, site survey app, measure for renovation, contractor measuring app',
  tags: ['Construction', 'Pro', 'Workflow'],
  title: {
    en: 'AR Tape Measure for Construction: A Site Survey Workflow That Saves an Hour Per Job',
    ru: 'AR-рулетка на стройке: рабочий процесс обмера, который экономит час на каждом объекте',
    de: 'AR-Maßband auf der Baustelle: Aufmaß-Workflow, der pro Auftrag eine Stunde spart',
    fr: 'Mètre AR pour la construction : un workflow de relevé qui économise une heure par chantier',
    es: 'Cinta métrica AR para construcción: un flujo de relevamiento que ahorra una hora por obra'
  },
  excerpt: {
    en: 'A field-tested workflow for contractors using iPhone for site surveys, punch lists, and change orders. Where AR speeds things up, where it doesn\'t, and how to integrate it into a typical small-job timeline.',
    ru: 'Полевой рабочий процесс для подрядчиков: iPhone для обмера, чек-листов и согласований. Где AR ускоряет, где нет, и как встроить это в типичный график небольшого объекта.'
  }
};

export default function Post() {
  return (
    <article className="prose-content">
      <p className="lead">
        On a typical home renovation site survey — a kitchen remodel, a
        bathroom tear-out, or a few rooms of paint and floor — a tape
        measure and a notebook take 45-60 minutes. The same survey with an
        iPhone AR app and a measured floor plan takes 12-15 minutes. Here's
        the workflow that gets you there, and where the time savings
        actually come from.
      </p>

      <h2>What AR is good at on a job site</h2>
      <ul>
        <li><strong>Room-level dimensions.</strong> 4-6 walls in 60 seconds with LiDAR; 2-3 minutes manual.</li>
        <li><strong>Furniture and fixture positions.</strong> The LiDAR scan auto-tags major items.</li>
        <li><strong>Angles and squareness.</strong> Crucial for retiling, cabinet installation, anywhere "is this wall actually 90°?" matters.</li>
        <li><strong>Photo-anchored notes.</strong> Capture a photo, draw an arrow to a feature, write a measurement next to it. All in one project.</li>
      </ul>

      <h2>What AR is NOT good for</h2>
      <ul>
        <li><strong>Sub-millimetre cabinetry work.</strong> Use a steel rule.</li>
        <li><strong>Long diagonals (over 5 m) outdoors.</strong> Use a laser distance meter — AR drift makes long shots unreliable.</li>
        <li><strong>Tight crawl spaces with no light.</strong> Camera AR fails; LiDAR works but the phone needs to fit in.</li>
        <li><strong>As-built drawings for permit submissions.</strong> Most municipalities require licensed surveyor stamps. The app gives you a starting document, not the final.</li>
      </ul>

      <h2>The 15-minute survey workflow</h2>
      <h3>Minute 0-2: Arrive and stage</h3>
      <p>
        Park, walk in, greet the homeowner. Open Ruler AR. Create a new
        project named after the address. This becomes the folder everything
        lands in.
      </p>

      <h3>Minute 2-7: Room scans</h3>
      <p>
        Walk room by room. For each room with LiDAR: tap Room Scan, walk
        the perimeter, finish. The app builds the floor plan automatically.
        For rooms without enough light (basements, closets), switch to
        Manual Room Builder — tap each corner walking the perimeter.
      </p>
      <p>
        Add each room to the project folder. Most jobs are 3-5 rooms; this
        phase eats about 5 minutes total.
      </p>

      <h3>Minute 7-10: Fixed-feature measurements</h3>
      <p>
        Per room, capture the dimensions that won't be visible in the floor
        plan:
      </p>
      <ul>
        <li>Window head and sill heights (from floor)</li>
        <li>Door clear opening width and height</li>
        <li>Counter height and depth (kitchens)</li>
        <li>Ceiling height (especially if soffit/dropped ceiling)</li>
        <li>Existing pipe positions (under sinks, in shower)</li>
      </ul>
      <p>
        Each measurement saves into the room's project with a thumbnail.
        Annotate any that need explanation ("water shutoff valve" with a
        photo).
      </p>

      <h3>Minute 10-13: Punch list</h3>
      <p>
        Walk through with the homeowner. As they point things out, snap a
        photo in the app, add a note ("damaged tile, replace, ~0.5 m²"),
        and attach it to the relevant room. Every photo gets geolocated to
        its room.
      </p>

      <h3>Minute 13-15: Export and wrap</h3>
      <p>
        Tap Share → Export PDF on the project folder. The app generates a
        consolidated document: cover page, per-room floor plans with
        dimensions, fixed-feature measurements, photos with annotations,
        punch list summary.
      </p>
      <p>
        Email it to yourself before you leave. By the time you're back at
        your truck, the homeowner has the same PDF in their inbox.
      </p>

      <h2>What this enables that a clipboard didn't</h2>
      <ul>
        <li>
          <strong>Same-day quotes.</strong> You can write the estimate from
          the PDF that evening, often with material quantities the app's
          calculator already estimated.
        </li>
        <li>
          <strong>Sub-contractor pre-qualification.</strong> Send the PDF to
          the plumber/electrician/painter before they visit. They show up
          having already scoped the work.
        </li>
        <li>
          <strong>Change-order documentation.</strong> Any mid-job dimension
          change gets photographed and measured in 30 seconds, with photo
          evidence and a timestamp.
        </li>
        <li>
          <strong>Insurance claims.</strong> If something goes wrong (water
          damage, structural surprise), you have measured pre-job
          documentation as evidence of original condition.
        </li>
      </ul>

      <h2>Accuracy in pro context</h2>
      <p>
        For most site-survey work, ±1-2 cm tolerance is acceptable. The app
        delivers that comfortably. For finishing-grade dimensions
        (cabinets, custom millwork, glass shower enclosures), use a steel
        rule or laser tape. The app is for getting the rough numbers fast
        and reliably; precision tools come in at the install phase.
      </p>

      <h2>Hardware recommendation</h2>
      <p>
        Any iPhone Pro from 12 onwards. The LiDAR scanner halves your survey
        time and lets you measure in pitch-dark closets. iPhone 15 Pro and
        newer have noticeably faster AR initialization (≈0.5s vs 1-2s on
        older Pro models). If you're upgrading hardware for work, the Pro
        line earns back the price difference in saved survey time within
        ~15 jobs.
      </p>

      <h2>Pen-and-paper holdouts</h2>
      <p>
        Some contractors still prefer a clipboard because they trust what
        they wrote down. Fair. The hybrid approach works: use the iPhone
        for the floor plan and area numbers (where pen-and-paper is slow
        and error-prone), keep the clipboard for the cabinet sketches and
        custom notes (where the iPhone is overkill). The PDF includes
        space at the bottom for handwritten addenda you scan in later.
      </p>

      <h2>Bottom line</h2>
      <p>
        A site survey that takes an hour with traditional tools takes 15
        minutes with an AR app. On a 50-job year, that's 35-40 hours
        recovered — a full work week. The accuracy is comparable for survey
        purposes. The output (PDF with floor plan + dimensions + photos +
        notes) is more presentable to clients than a hand-drawn sketch.
        Worth the 15 minutes of installing and learning the app.
      </p>
    </article>
  );
}
