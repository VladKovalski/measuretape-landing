/**
 * Programmatic "How to measure X" pages.
 *
 * Each item generates a landing page at /[locale]/how-to/[slug]/ with
 * full HowTo schema.org JSON-LD, FAQ, and contextual content. Each one
 * targets a specific high-intent search query.
 *
 * To add a new item, append to ITEMS. The page is generated at build time.
 *
 * Translation strategy: titles + per-locale strings are localized.
 * Body content (steps, tips, faq) defaults to EN for unknown locales, * Google still ranks EN content well for cross-locale queries, and
 * locale-specific translations can be added incrementally.
 */

import type { Locale } from '@/i18n';

export interface Step {
  title: string;
  body: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface HowToItem {
  /** URL slug, lowercase, hyphen-separated */
  slug: string;
  /** SEO meta keywords */
  keywords: string;
  /** Difficulty: 1 (one-tap) to 4 (multi-step pro work) */
  difficulty: 1 | 2 | 3 | 4;
  /** Estimated time in minutes */
  timeMin: number;
  /** Display category for tagging / breadcrumb */
  category: 'furniture' | 'appliance' | 'room' | 'fixture' | 'outdoor' | 'body' | 'other';
  /** Per-locale H1 title, falls back to EN */
  title: Partial<Record<Locale, string>>;
  /** Per-locale 1-2 sentence summary used in meta description + list card */
  excerpt: Partial<Record<Locale, string>>;
  /** Hero intro paragraph */
  intro: Partial<Record<Locale, string>>;
  /** Why measure this, bullet points */
  whyMeasure: Partial<Record<Locale, string[]>>;
  /** What you need (tools / app modes) */
  whatYouNeed: Partial<Record<Locale, string[]>>;
  /** Step-by-step instructions, ordered */
  steps: Partial<Record<Locale, Step[]>>;
  /** Mode-specific tips */
  tips: Partial<Record<Locale, string[]>>;
  /** Common mistakes to avoid */
  commonMistakes: Partial<Record<Locale, string[]>>;
  /** 3-5 FAQ items */
  faq: Partial<Record<Locale, FaqItem[]>>;
  /** Related slugs (for cross-linking) */
  related?: string[];
}

// ─────────────────────────────────────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────────────────────────────────────

export function getItem(slug: string): HowToItem | undefined {
  return ITEMS.find((i) => i.slug === slug);
}

export function getTitle(item: HowToItem, locale: Locale): string {
  return item.title[locale] ?? item.title.en ?? item.slug;
}

export function getExcerpt(item: HowToItem, locale: Locale): string {
  return item.excerpt[locale] ?? item.excerpt.en ?? '';
}

export function getIntro(item: HowToItem, locale: Locale): string {
  return item.intro[locale] ?? item.intro.en ?? '';
}

export function getArr<K extends keyof HowToItem>(item: HowToItem, key: K, locale: Locale): unknown[] {
  const obj = item[key] as Partial<Record<Locale, unknown[]>>;
  return (obj?.[locale] ?? obj?.en ?? []) as unknown[];
}

// ─────────────────────────────────────────────────────────────────────────────
// CONTENT (25+ items)
// ─────────────────────────────────────────────────────────────────────────────

export const ITEMS: HowToItem[] = [
  {
    slug: 'sofa',
    keywords: 'how to measure a sofa, measure couch for doorway, sofa dimensions, will my sofa fit',
    difficulty: 2,
    timeMin: 5,
    category: 'furniture',
    title: {
      en: 'How to Measure a Sofa with Your iPhone',
      ru: 'Как измерить диван iPhone-ом',
      de: 'Sofa messen mit dem iPhone',
      fr: 'Comment mesurer un canapé avec votre iPhone',
      es: 'Cómo medir un sofá con tu iPhone'
    },
    excerpt: {
      en: 'The four measurements every sofa needs: width, depth, height, and seat-to-arm clearance. Capture them in 90 seconds with your iPhone before you buy or move.',
      ru: 'Четыре замера, которые нужны на каждый диван: ширина, глубина, высота и расстояние от сиденья до подлокотника. Снимите их iPhone-ом за 90 секунд до покупки или переезда.'
    },
    intro: {
      en: 'Sofas are the #1 returned furniture item. The reason is almost always measurement: either the sofa doesn\'t fit through the buyer\'s door, or it doesn\'t fit the space it was bought for. Your iPhone can capture both sets of dimensions in under two minutes, here\'s how.',
      ru: 'Диваны, самая возвращаемая мебель. Причина почти всегда в замерах: либо не пролез в дверь, либо не вписался в пространство. iPhone снимает обе стороны за две минуты. Вот как.'
    },
    whyMeasure: {
      en: ['Confirm the sofa fits through doorways and corridors before delivery', 'Check the sofa fits the wall space and leaves room for traffic', 'Compare arm height with side tables', 'Document for insurance or resale']
    },
    whatYouNeed: {
      en: ['iPhone (any model from Xs onwards)', 'Ruler AR, Length mode for individual dimensions', 'Optional: Touch Mode for sub-cm precision on the arm width']
    },
    steps: {
      en: [
        { title: 'Width (arm to arm)', body: 'Stand at the front of the sofa. Open Ruler AR → Length mode. Tap the outside of one armrest, then the outside of the other. This is the dimension that has to fit through your doorway.' },
        { title: 'Depth (front to back)', body: 'From the side. Tap the front edge of the seat cushion, then the back of the sofa. Note: cushions slightly compress over time, measure with normal in-use compression, not freshly puffed up.' },
        { title: 'Height (floor to top)', body: 'Stand back. Use Height mode. Tap the floor at the sofa\'s base, then the top of the backrest. Critical for shelves above or windowsill clearance.' },
        { title: 'Seat depth (cushion only)', body: 'Tap the front of the seat cushion, then where the cushion meets the backrest. Determines how deep you sit, matters for tall vs short users.' },
        { title: 'Arm height & seat-to-arm', body: 'Tap the floor at the side, then the top of the armrest. Now do floor to seat. Subtracting gives you elbow-rest height, important for comfort.' }
      ]
    },
    tips: {
      en: ['For L-shaped sofas, measure each section separately and the overall diagonal', 'Modular sofas ship in pieces, measure the largest single piece against your door', 'Compress the cushion 1 cm before measuring depth to get the real "sit" depth']
    },
    commonMistakes: {
      en: ['Measuring just the seat cushion width instead of the outside-of-arm width', 'Forgetting the packed/shipping dimensions are 5-10 cm larger than the in-use dimensions', 'Not measuring the tightest corner of the corridor, sofas turn diagonally through tight halls']
    },
    faq: {
      en: [
        { q: 'How accurate does sofa measurement need to be?', a: 'Within 2 cm for doorway clearance, within 5 cm for room placement. AR camera measurement easily meets both.' },
        { q: 'Should I measure the sofa or the box?', a: 'The box. Sofas ship with protective wrapping that adds 5-10 cm on each dimension. The IKEA spec sheet always lists both.' },
        { q: 'Can I measure a sofa already in a showroom?', a: 'Yes, open Ruler AR and tap the outside of each side. Don\'t need to move furniture; AR works from a stand-back position.' }
      ]
    },
    related: ['couch', 'fridge', 'doorway']
  },

  {
    slug: 'tv',
    keywords: 'how to measure tv for wall mount, measure tv diagonal, tv mount measurement, screen size iphone',
    difficulty: 2,
    timeMin: 3,
    category: 'appliance',
    title: {
      en: 'How to Measure a TV for Wall Mounting',
      ru: 'Как измерить телевизор под настенный кронштейн',
      de: 'TV für Wandhalterung ausmessen',
      fr: 'Comment mesurer une TV pour fixation murale',
      es: 'Cómo medir una TV para soporte de pared'
    },
    excerpt: {
      en: 'TV dimensions, viewing distance, and the correct mount height, all from your iPhone in 3 minutes, before drilling a single hole.',
      ru: 'Размеры телевизора, расстояние просмотра и правильная высота монтажа, всё с iPhone за 3 минуты, до первой дырки в стене.'
    },
    intro: {
      en: 'Wall-mounting a TV requires four numbers: screen diagonal, viewing distance from the seating, eye-level height, and the VESA mounting pattern on the back. The first three are AR measurements; the fourth comes from the TV\'s manual.',
      ru: 'Чтобы повесить телевизор на стену, нужны четыре числа: диагональ экрана, расстояние просмотра от дивана, высота монтажа на уровне глаз и крепление VESA на задней стенке. Первые три, AR-замеры; четвёртое, из инструкции телевизора.'
    },
    whyMeasure: {
      en: ['Get the correct mount height for comfortable viewing', 'Avoid eye strain from a too-high or too-close TV', 'Confirm wall space and clearance', 'Match the mount\'s weight and VESA spec']
    },
    whatYouNeed: {
      en: ['iPhone with Ruler AR', 'Length mode for screen diagonal', 'Height mode for mount placement', 'Optional: bubble level after mounting']
    },
    steps: {
      en: [
        { title: 'Screen diagonal', body: 'Open Ruler AR → Length mode. Tap the upper-left corner of the screen, then the lower-right. The diagonal is how TVs are sold, 55", 65", 75". Compare to the manufacturer\'s spec.' },
        { title: 'Screen width and height', body: 'Tap left edge to right edge for width, top to bottom for height. These tell you the wall footprint the TV will occupy.' },
        { title: 'Viewing distance from sofa', body: 'Walk back to your seating position. Tap your eye level on the wall (or use Height mode). Then measure the distance from there to where the TV will be. For 4K, the comfortable distance is 1.5× to 2× the screen diagonal.' },
        { title: 'Mount height (eye level when seated)', body: 'Sit on your sofa. With Ruler AR open, look at the wall. The center of the TV should be at your eye level. Use Height mode to mark that height on the wall and note the distance from the floor.' },
        { title: 'VESA pattern on back of TV', body: 'Behind the TV are four threaded holes in a rectangular pattern. Measure the horizontal and vertical distance between them, these are usually 200×200 mm, 400×400 mm, or 600×400 mm. The mount must match.' }
      ]
    },
    tips: {
      en: ['For a 55" TV, eye level when seated is typically 105-115 cm from the floor', 'Heavier TVs (over 30 kg) need wall studs, not just drywall anchors, use a stud finder app or knock test', 'If you have natural light from a window, plan TV position so the screen doesn\'t catch glare']
    },
    commonMistakes: {
      en: ['Mounting too high (looking up causes neck strain), eye level when seated is the target', 'Forgetting to account for the TV\'s thickness in viewing distance', 'Ignoring the cable management, the wall plate needs to clear the TV\'s connection ports']
    },
    faq: {
      en: [
        { q: 'What\'s the right viewing distance for a 65" TV?', a: 'For 4K resolution: 1.5-2 m. For 1080p: 2.5-3.5 m. The closer you can sit comfortably, the more immersive, 4K lets you sit closer without seeing pixels.' },
        { q: 'How high should I mount the TV?', a: 'Center of screen at your seated eye level, typically 100-120 cm from the floor depending on sofa height.' },
        { q: 'Can I measure VESA pattern with the AR app?', a: 'Yes, Touch Mode is precise enough for the 200/400/600 mm patterns. Or use a ruler, those numbers are always rounded to standard values.' }
      ]
    },
    related: ['wall', 'desk']
  },

  {
    slug: 'fridge',
    keywords: 'how to measure for refrigerator, fridge cabinet opening, will fridge fit, measure fridge gap',
    difficulty: 2,
    timeMin: 5,
    category: 'appliance',
    title: {
      en: 'How to Measure for a Refrigerator',
      ru: 'Как замерить место под холодильник',
      de: 'Maßnehmen für den Kühlschrank',
      fr: 'Comment mesurer pour un réfrigérateur',
      es: 'Cómo medir el espacio para una nevera'
    },
    excerpt: {
      en: 'Five measurements that prevent an 8% return rate: cabinet opening, doorway clearance, hinge swing, ventilation gap, and connection point positions.',
      ru: 'Пять замеров, которые предотвращают 8% возвратов: проём шкафа, проход в дверь, размах дверцы, вентиляция и положение подключений.'
    },
    intro: {
      en: 'Refrigerators are returned more often than any other large appliance, 8-12% of online orders come back. Almost always because of a measurement that didn\'t happen. Five iPhone measurements before you click "order" prevent the entire problem.',
      ru: 'Холодильники возвращают чаще любой другой крупной техники, 8-12% онлайн-заказов уезжают обратно. Почти всегда из-за того, что замер не делали. Пять замеров iPhone-ом до клика «оформить заказ» полностью устраняют проблему.'
    },
    whyMeasure: {
      en: ['Confirm cabinet opening width × depth × height', 'Verify the box fits through your front door + corridors', 'Check hinge swing clearance for the model\'s door direction', 'Match water/power connection points to the appliance\'s spec sheet', 'Plan ventilation gap for thermal efficiency']
    },
    whatYouNeed: {
      en: ['iPhone with Ruler AR', 'Length and Touch Mode (Touch is better for the back-of-cabinet depth)', 'The model\'s spec PDF from the manufacturer\'s website']
    },
    steps: {
      en: [
        { title: 'Cabinet opening (front)', body: 'Stand facing the gap where the fridge will go. Tap left wall (or cabinet) to right wall for width. Then floor to top of opening for height. Use Touch Mode for higher precision.' },
        { title: 'Cabinet opening (back)', body: 'Tilt the phone into the gap. Tap the back-wall plumbing/electrical against the side wall to measure usable depth. This is where pipes and outlets eat space.' },
        { title: 'Door / corridor clearance', body: 'Measure your front door clear width and the tightest corridor turn. Compare to the fridge\'s packed (shipping) dimensions, not just the unpacked size.' },
        { title: 'Hinge swing clearance', body: 'Note which side the model\'s door hinges on. Stand at the cabinet, point at the side opposite the hinge, measure clearance to the nearest obstacle. Most fridges need 70-80 cm of swing space.' },
        { title: 'Connection points', body: 'Photograph the water line and power outlet positions. Use Length mode to measure their height from the floor and distance from the side wall. Match against the spec sheet, pipes that don\'t reach add a plumber call.' }
      ]
    },
    tips: {
      en: ['Add 2.5 cm to each dimension for ventilation behind the fridge (compressors need airflow)', 'For built-in (integrated) models the cabinet opening must match within 5 mm', 'Doors usually need 90+ degrees of swing for shelves to come out, measure beyond just door clearance']
    },
    commonMistakes: {
      en: ['Measuring fridge dimensions but forgetting the shipping box is bigger', 'Not measuring the back depth, pipes behind the cabinet eat usable space', 'Choosing wrong hinge side, fridges come in left-hinge or right-hinge models, swap costs extra']
    },
    faq: {
      en: [
        { q: 'How much extra room does a fridge need for ventilation?', a: '25-50 mm on top and back, 5 mm on the sides for free-standing models. Built-in models follow the manufacturer\'s specific spec.' },
        { q: 'Should I measure with the doors open or closed?', a: 'Closed for cabinet fit, but check open-door swing separately. The door projecting forward is what blocks neighbouring cabinets.' },
        { q: 'What if my opening is exactly the fridge\'s width?', a: 'Order the smaller model. "Exactly the fridge\'s width" gives you zero tolerance for wall imperfections or movement during install. Always have at least 1 cm of margin.' }
      ]
    },
    related: ['kitchen-cabinet', 'doorway', 'dishwasher']
  },

  {
    slug: 'window-for-blinds',
    keywords: 'how to measure window for blinds, blinds size, measure curtains, window dimensions',
    difficulty: 1,
    timeMin: 4,
    category: 'fixture',
    title: {
      en: 'How to Measure a Window for Blinds, Curtains, or Shades',
      ru: 'Как измерить окно под жалюзи, шторы или рулонные шторы',
      de: 'Fenster für Jalousien oder Vorhänge ausmessen',
      fr: 'Mesurer une fenêtre pour stores ou rideaux',
      es: 'Medir una ventana para persianas o cortinas'
    },
    excerpt: {
      en: 'Inside mount vs outside mount, width tolerance, drop length, three sets of measurements for any window covering, captured in 4 minutes with your iPhone.',
      ru: 'Внутреннее или наружное крепление, допуск по ширине, длина свеса, три комплекта замеров под любые шторы или жалюзи, за 4 минуты с iPhone.'
    },
    intro: {
      en: 'Window covering retailers handle 20%+ returns due to fit issues. The math is simple, but the choice of inside-mount vs outside-mount changes which dimensions you need. Here\'s the workflow for both.',
      ru: 'У продавцов штор и жалюзи 20%+ возвратов из-за размеров. Сама математика простая, но выбор «внутри проёма / поверх проёма» меняет, какие нужны замеры. Вот процесс для обоих вариантов.'
    },
    whyMeasure: {
      en: ['Inside-mount blinds need exact width within 3 mm', 'Outside-mount blinds need to project past the window by 5-10 cm each side', 'Drop length determines floor clearance or pool', 'Window depth matters for inside-mount tilt mechanisms']
    },
    whatYouNeed: {
      en: ['iPhone with Ruler AR', 'Length mode', 'Decide upfront: inside or outside mount']
    },
    steps: {
      en: [
        { title: 'Decide: inside vs outside mount', body: 'Inside mount: covering sits inside the window frame, flush with the wall. Looks clean, blocks less light at the edges. Outside mount: covering hangs in front of the frame on the wall. Better light blockage, wider light gap-free zone.' },
        { title: 'Inside mount, exact window opening', body: 'Tap the inside-left edge of the frame to the inside-right edge for width. Top of frame to sill for height. Measure at three points (top, middle, bottom for width; left, center, right for height), old houses are not square, use the smallest measurement.' },
        { title: 'Outside mount, total coverage area', body: 'Mark on the wall how far past the window you want the covering to extend (typically 5-10 cm each side). Tap the leftmost mark to the rightmost mark. For height: above the frame to your desired drop length.' },
        { title: 'Drop length / floor clearance', body: 'For floor-length curtains: floor to mount point. Subtract 1-2 cm for floor clearance. For sill-length: window top to sill. For below-sill: window top to your desired drop point.' },
        { title: 'Window depth (inside mount)', body: 'Use Touch Mode against the glass. Tap the glass, then the front of the frame. Most inside-mount blinds need 5-10 cm of frame depth for the headrail and tilt mechanism.' }
      ]
    },
    tips: {
      en: ['For sliding doors, always use outside mount, inside mount blocks the track', 'Add 1-2 cm to outside-mount width if you want light-blocking overlap with the wall', 'Photo each measurement in the app, order forms always ask for dimensions you forgot']
    },
    commonMistakes: {
      en: ['Measuring at only one point, windows are rarely perfectly rectangular', 'Forgetting to subtract for inside-mount mounting tolerance, order the actual window width, the manufacturer subtracts', 'Ordering wrong drop length, easier to shorten than to lengthen']
    },
    faq: {
      en: [
        { q: 'Do I order the exact window width for inside mount?', a: 'Yes, the manufacturer subtracts mounting tolerance (~3-5 mm) automatically. Order your measured width.' },
        { q: 'How long should curtains be?', a: 'Three options: just touching floor (formal), 1-3 cm puddle (relaxed), or sill-length (casual rooms). Each looks intentional; in-between looks wrong.' },
        { q: 'Inside or outside mount for blocking light?', a: 'Outside mount blocks more light because the covering extends beyond the window edges. Inside mount always has a small light gap at the edges.' }
      ]
    },
    related: ['doorway', 'wall']
  },

  {
    slug: 'door-frame',
    keywords: 'how to measure a door, door frame size, replace door, doorway dimensions iphone',
    difficulty: 2,
    timeMin: 4,
    category: 'fixture',
    title: {
      en: 'How to Measure a Door (for Replacement or Furniture Clearance)',
      ru: 'Как измерить дверь (для замены или проноса мебели)',
      de: 'Tür messen, für Austausch oder Möbeltransport',
      fr: 'Comment mesurer une porte, remplacement ou passage de meubles',
      es: 'Cómo medir una puerta, reemplazo o paso de muebles'
    },
    excerpt: {
      en: 'Door slab vs door frame vs door rough opening, three different dimensions for three different jobs. Here\'s which one you need for what.',
      ru: 'Полотно двери, коробка, дверной проём, три разных размера для трёх разных задач. Что и для чего нужно.'
    },
    intro: {
      en: 'Replacing a door, ordering a custom one, or just checking if your new sofa fits through, each requires a different measurement. The fastest way to mess this up is measuring the wrong thing. Here\'s a guide to each.',
      ru: 'Заменить дверь, заказать нестандартную или просто проверить, пройдёт ли диван, каждая задача требует своего замера. Самый быстрый способ ошибиться, замерить не то. Гид по каждому.'
    },
    whyMeasure: {
      en: ['Door slab: the moving panel itself, buy a pre-hung or just the slab', 'Door frame: the rectangular surround attached to the wall', 'Rough opening: the hole in the wall after the frame is removed', 'Clear opening: usable width when the door is fully open (for furniture transit)']
    },
    whatYouNeed: {
      en: ['iPhone with Ruler AR', 'Length mode (for all door dimensions)', 'Touch Mode for door slab thickness']
    },
    steps: {
      en: [
        { title: 'Door slab, width', body: 'Door open. Stand at the hinge side. Tap one edge of the door to the other (not including the door frame). Standard interior doors are 60, 70, 80, or 90 cm.' },
        { title: 'Door slab, height', body: 'Tap the bottom edge of the door to the top. Standard interior: 200 cm. Old houses sometimes 190 or 195 cm.' },
        { title: 'Door slab, thickness', body: 'Touch Mode against the door edge. Standard interior: 35-45 mm. Solid-core: 40-50 mm. Critical for handle/hinge selection.' },
        { title: 'Door frame, outer dimensions', body: 'Tap from outside left of the frame to outside right (width). Floor to top of frame (height). This is what you order for "pre-hung door + frame" replacement.' },
        { title: 'Clear opening, usable width', body: 'Open the door all the way to 90°. Tap inside of door (when open) to opposite jamb. This is what a sofa has to fit through, often 5-10 cm less than the slab width because of the door thickness when open.' }
      ]
    },
    tips: {
      en: ['Pre-hung doors include the frame, measure the rough opening', 'For furniture transit, remove the door from its hinges to gain another 5-10 cm of clearance', 'Solid-wood doors are heavier and may need stronger hinges, check existing hinge spec']
    },
    commonMistakes: {
      en: ['Measuring door slab width when you needed clear opening width (or vice versa)', 'Forgetting the threshold, adds 1-2 cm to bottom clearance', 'Old houses: frames are not square. Measure width at top, middle, and bottom, use the smallest']
    },
    faq: {
      en: [
        { q: 'What\'s the difference between door slab width and clear opening?', a: 'Door slab = the moving panel\'s width. Clear opening = the usable passage width when the door is open 90° (subtract the door thickness from the slab width).' },
        { q: 'Does a 90 cm door give 90 cm of clear passage?', a: 'No, about 85 cm. The door slab takes ~4-5 cm of clearance when open.' },
        { q: 'How do I measure a door I want to replace?', a: 'If keeping the frame: measure slab width × height × thickness. If replacing the frame too: measure the rough opening in the wall after removing both.' }
      ]
    },
    related: ['doorway', 'sofa', 'fridge']
  },

  {
    slug: 'room-for-paint',
    keywords: 'how to measure room for paint, paint area calculator, wall paint measurement, how much paint do i need',
    difficulty: 2,
    timeMin: 6,
    category: 'room',
    title: {
      en: 'How to Measure a Room for Paint (And Calculate Exactly How Much You Need)',
      ru: 'Как измерить комнату под покраску (и точно посчитать сколько краски)',
      de: 'Raum für Farbanstrich ausmessen (mit präziser Mengenberechnung)',
      fr: 'Comment mesurer une pièce pour la peinture (et calculer la quantité exacte)',
      es: 'Cómo medir una habitación para pintar (y calcular la cantidad exacta)'
    },
    excerpt: {
      en: 'Wall area minus doors and windows, multiplied by coats, divided by coverage rate. Get the number that tells you exactly how many tins to buy, and never buy too few.',
      ru: 'Площадь стен минус двери и окна, умножить на слои, разделить на покрытие. Получите число, которое скажет, сколько банок купить, и никогда не купите слишком мало.'
    },
    intro: {
      en: 'Buying paint is where DIY budgets blow. Either you buy way too much (waste), or you run out mid-job (second trip, color matching issues). The math is simple: wall area × coats ÷ coverage. The hard part is getting the wall area right, which is where most people fail. Your iPhone solves that in 90 seconds.',
      ru: 'Покупка краски, место, где сыпятся DIY-бюджеты. Либо берёте слишком много (на свалку), либо не хватает посреди работы (вторая поездка, проблемы с подбором цвета). Математика проста: площадь × слои ÷ покрытие. Сложно правильно посчитать площадь, здесь большинство ошибается. iPhone решает за 90 секунд.'
    },
    whyMeasure: {
      en: ['Avoid buying excess paint that goes to waste', 'Avoid running out mid-job and re-mixing colors', 'Get accurate per-room cost for budgeting', 'Compare paint brand pricing on a like-for-like basis']
    },
    whatYouNeed: {
      en: ['iPhone with Ruler AR (LiDAR optional but speeds it up)', 'Room Scan (LiDAR) or Manual Room Builder', 'Material Calculator in the app']
    },
    steps: {
      en: [
        { title: 'Measure the room outline', body: 'Open Ruler AR → Room Scan (LiDAR) or Manual Room Builder (any iPhone). Walk the perimeter; the app builds the floor plan automatically. Save as a project named "Room, Paint".' },
        { title: 'Ceiling height', body: 'Use Height mode. Tap floor to ceiling. Most rooms 240-260 cm. Older houses 280-300 cm. New builds often 240 cm exactly.' },
        { title: 'Subtract doors and windows', body: 'In the saved project, the app already detected doors and windows (LiDAR) or you added them in the manual editor. Each one is excluded from paintable area automatically.' },
        { title: 'Wall area calculation', body: 'Wall area = floor perimeter × ceiling height − sum of door areas − sum of window areas. Tap Material Calculator in the project → Paint. The app calculates it.' },
        { title: 'Set coats and coverage', body: 'Most paints state coverage in m²/L on the tin. Default is 10 m²/L per coat. Two coats is standard for fresh painting; three for going from dark to light. Adjust in the Material Calculator.' }
      ]
    },
    tips: {
      en: ['Always add 5-10% for touch-ups and small mistakes', 'Ceiling and walls use different paint (ceiling is matt to hide imperfections; walls are washable matte/eggshell)', 'Buy from one production batch, color can vary slightly between batches']
    },
    commonMistakes: {
      en: ['Measuring just the floor area, paint covers walls, not floors', 'Forgetting to subtract doors and windows (saves 5-15% of total paint)', 'Using single-coat coverage when two coats are needed, always read the tin']
    },
    faq: {
      en: [
        { q: 'How many litres of paint per coat per 10 m²?', a: 'Roughly 1 litre per 10 m² for one coat on a smooth wall. Textured surfaces (stipple, stucco) use 30-50% more.' },
        { q: 'Do I need two coats?', a: 'Almost always yes. One coat looks streaky and shows brush marks. Exceptions: going from one shade of white to a similar white might work in one coat.' },
        { q: 'How much does ceiling paint cover?', a: 'Same as wall paint (10 m²/L typical). Ceiling area equals floor area for flat ceilings. Vaulted or sloped ceilings: use the actual surface area.' }
      ]
    },
    related: ['wall-for-tile', 'floor', 'how-to-measure-a-room-with-iphone']
  },

  {
    slug: 'floor',
    keywords: 'how to measure floor area, floor for laminate, floor for tile, square footage, room area',
    difficulty: 2,
    timeMin: 5,
    category: 'room',
    title: {
      en: 'How to Measure a Floor for Laminate, Tile, or Vinyl',
      ru: 'Как измерить пол под ламинат, плитку или винил',
      de: 'Boden messen, für Laminat, Fliesen oder Vinyl',
      fr: 'Mesurer un sol, pour stratifié, carrelage ou vinyle',
      es: 'Medir un suelo, para laminado, azulejos o vinilo'
    },
    excerpt: {
      en: 'Floor area plus the right waste factor for your material. Three minutes with your iPhone gives you the number that turns into a shopping list.',
      ru: 'Площадь пола плюс правильный запас на брак под ваш материал. Три минуты с iPhone дают число, которое превращается в список покупок.'
    },
    intro: {
      en: 'Flooring is sold by the m² (or sq ft in the US). The conversion from "I want to redo this room" to "I need to buy 9 boxes" is two steps: measure the floor area, then add a waste factor specific to your material. Both done in under 5 minutes.',
      ru: 'Напольное покрытие продаётся в м². Перевод «хочу переделать эту комнату» в «нужно купить 9 коробок», два шага: измерить площадь и добавить запас на материал. Оба за 5 минут.'
    },
    whyMeasure: {
      en: ['Buy the exact number of boxes/rolls (no second trip)', 'Compare brand pricing per m² apples-to-apples', 'Plan installation pattern (diagonal lay uses more)', 'Document for any warranty or insurance issue']
    },
    whatYouNeed: {
      en: ['iPhone with Ruler AR', 'Room Scan or Manual Room Builder', 'Material Calculator → Flooring']
    },
    steps: {
      en: [
        { title: 'Capture the room shape', body: 'Open Ruler AR. Walk around the room (LiDAR) or tap each corner (Manual). The app computes floor area from the polygon, accurate within 2-5% for typical rooms.' },
        { title: 'Subtract permanent obstacles', body: 'Kitchen island, fireplace, built-in cabinetry, these stay. In the 2D editor, drag them onto the floor plan. The app subtracts their footprint from the floor area.' },
        { title: 'Choose your material and waste factor', body: 'Open Material Calculator → Flooring. Each material has a default waste factor: 10% straight lay, 15% diagonal, 20% herringbone. Adjust based on your specific pattern.' },
        { title: 'Get the quantity', body: 'The app outputs the total m² needed and (if you set a box coverage) the number of boxes to buy. Round up to whole boxes, half-boxes are not sold.' },
        { title: 'Add transitions and trim', body: 'Each doorway needs a transition strip. Each wall needs baseboard/quarter-round. Measure separately: doors × 1 each, baseboard = perimeter − door widths.' }
      ]
    },
    tips: {
      en: ['Buy 2-3 extra boxes of tile from the same lot for future repairs, production batches vary in colour', 'For laminate/vinyl, account for the underlayment separately, sold by the m²', 'Removing old flooring? Measure the subfloor too, if uneven, you may need leveler']
    },
    commonMistakes: {
      en: ['Measuring wall-to-wall instead of usable floor area', 'Forgetting to subtract islands, columns, and built-ins', 'Not adding enough waste for diagonal or herringbone patterns']
    },
    faq: {
      en: [
        { q: 'How much waste should I add for laminate flooring?', a: 'Straight lay: 10%. Diagonal: 15%. For rooms under 10 m², lean toward 12-15%, there\'s less room to absorb cutting mistakes.' },
        { q: 'Should I include the area under permanent cabinets?', a: 'No, flooring doesn\'t go under permanent built-ins. Subtract them from your floor area before calculating quantity.' },
        { q: 'How accurate is the iPhone measurement?', a: 'For rooms under 30 m², within 2-5%, well within the waste factor you\'re adding. Good enough that you won\'t need a second supply trip.' }
      ]
    },
    related: ['room-for-paint', 'wall-for-tile', 'kitchen-cabinet']
  },

  {
    slug: 'wall-for-tile',
    keywords: 'how to measure wall for tile, bathroom tile area, backsplash measurement, wall tile quantity',
    difficulty: 2,
    timeMin: 5,
    category: 'room',
    title: {
      en: 'How to Measure a Wall for Tile (Bathroom, Backsplash, Feature Wall)',
      ru: 'Как измерить стену под плитку (ванная, фартук, акцентная стена)',
      de: 'Wand für Fliesen messen (Bad, Spritzschutz, Akzentwand)',
      fr: 'Mesurer un mur pour le carrelage (salle de bain, crédence, mur d\'accent)',
      es: 'Medir un muro para azulejos (baño, salpicadero, pared decorativa)'
    },
    excerpt: {
      en: 'Wall area, minus fixtures, plus the right waste factor for tile size and pattern. Your iPhone gives you a number you can take straight to the tile shop.',
      ru: 'Площадь стены, минус сантехника и розетки, плюс запас на размер и узор плитки. iPhone даёт число, с которым можно идти в магазин.'
    },
    intro: {
      en: 'Wall tile is harder to measure than floor tile because of the fixtures (mirrors, sinks, electrical outlets, windows) that interrupt the wall surface. Skipping the subtractions wastes money; double-counting them leaves you short. Here\'s the systematic approach.',
      ru: 'Стенную плитку считать сложнее, чем напольную, из-за сантехники, зеркал, окон и розеток. Если их не вычесть, переплатите; если вычесть дважды, не хватит. Систематический подход.'
    },
    whyMeasure: {
      en: ['Get exact tile quantity for the specific area', 'Subtract fixtures correctly (sinks, mirrors, windows)', 'Plan the layout for the smallest visible cut tiles', 'Estimate trim, edge pieces, and grout']
    },
    whatYouNeed: {
      en: ['iPhone with Ruler AR', 'Length mode for individual walls', 'Material Calculator → Wall Tile']
    },
    steps: {
      en: [
        { title: 'Measure each wall separately', body: 'For each wall to be tiled, capture width × height. Walls of a bathroom rarely have the same dimensions. Save each as a separate measurement in one project.' },
        { title: 'Subtract windows, mirrors, sinks', body: 'For each fixture: width × height = area to subtract. In a bathroom: window (typical 60×60 cm), sink (typical 60×40 cm projection), mirror, towel rail, electrical outlets.' },
        { title: 'Sum tileable area', body: 'Total tileable area = sum of (wall width × wall height) − sum of fixture areas. The Material Calculator does this automatically when you add fixtures to the room project.' },
        { title: 'Add waste factor', body: 'Wall tile waste: 10% for large-format (60×60+), 15% for standard (30×30), 20% for mosaic or accent pieces. Add extra 5% for full-bathroom installs (more cuts around fixtures).' },
        { title: 'Plan layout / cuts', body: 'For best appearance, no cut tile should be less than half a full tile. The app\'s 2D layout tool shows you where cuts land, adjust the starting position to optimize.' }
      ]
    },
    tips: {
      en: ['Order 1 extra box for repairs from the same dye lot', 'Edge tiles (bullnose, trim, pencil) are sold separately, measure linear meters of exposed edges', 'Mosaic sheets cover ~30×30 cm each, calculate based on sheet count, not individual tiles']
    },
    commonMistakes: {
      en: ['Measuring just the wall area without subtracting fixtures', 'Forgetting trim/edge tile, exposed edges (around mirrors, at countertop level) need bullnose pieces', 'Buying too little, mosaic and patterned tile is the highest-waste category']
    },
    faq: {
      en: [
        { q: 'Should I tile behind the toilet?', a: 'Yes, all the way down to the floor. The toilet sometimes gets replaced; you want continuous tile underneath. Measure floor-to-ceiling for full coverage.' },
        { q: 'Do I need to subtract small areas like electrical outlets?', a: 'For a single outlet (~5×8 cm = 0.004 m²): not worth subtracting. For larger fixtures (sink at 60×40 cm = 0.24 m²): yes, subtract.' },
        { q: 'How much grout do I need?', a: 'Grout coverage depends on tile size and joint width. 1 kg covers ~5 m² of standard tile with 3 mm joints. The tile retailer will sell you the right grout amount based on your tile choice.' }
      ]
    },
    related: ['floor', 'room-for-paint']
  },

  {
    slug: 'bed',
    keywords: 'how to measure a bed, bed size guide, mattress measurement, bed for room',
    difficulty: 1,
    timeMin: 3,
    category: 'furniture',
    title: {
      en: 'How to Measure a Bed (Frame, Mattress, and Room Fit)',
      ru: 'Как измерить кровать (раму, матрас, вписать в комнату)',
      de: 'Bett ausmessen (Rahmen, Matratze, Raum)',
      fr: 'Comment mesurer un lit (cadre, matelas, intégration pièce)',
      es: 'Cómo medir una cama (estructura, colchón, encaje en habitación)'
    },
    excerpt: {
      en: 'Bed sizes vary wildly between countries, and so do mattresses. Three measurements that prevent ordering the wrong bed for your room or your existing mattress.',
      ru: 'Размеры кроватей сильно отличаются между странами, и матрасов тоже. Три замера, чтобы не заказать кровать не под комнату или не под матрас.'
    },
    intro: {
      en: 'A UK king is smaller than a US king. A US queen is bigger than a UK king. A European 160×200 cm is between them. Before you buy a bed online, measure your room and your existing mattress (if you\'re keeping it) to avoid a country-mismatch problem.',
      ru: 'Британский king меньше американского. Американский queen больше британского king. Европейский 160×200, между ними. До онлайн-заказа кровати замерьте комнату и матрас (если оставляете), чтобы не попасть в нестыковку размеров.'
    },
    whyMeasure: {
      en: ['Avoid buying a bed frame that doesn\'t fit the mattress', 'Confirm room has clearance for the bed + bedside tables', 'Plan headboard height vs window sill or wall art', 'Check stairwell + doorway clearance for delivery']
    },
    whatYouNeed: {
      en: ['iPhone with Ruler AR', 'Length and Height modes', 'Existing mattress dimensions (or sticker on the side)']
    },
    steps: {
      en: [
        { title: 'Mattress width and length', body: 'If keeping the mattress: tap each edge with Length mode. Mattress sizes are standardised in country: US Twin 99×191, US Full 137×191, US Queen 152×203, US King 198×203. UK Single 90×190, UK Double 137×190, UK King 152×200. European: 90, 140, 160, 180 × 200 are standard.' },
        { title: 'Bed footprint (mattress + frame)', body: 'Bed frames typically add 5-15 cm in each direction beyond the mattress. Brass and four-poster frames add more. Measure the frame separately if you have its spec, or budget +10 cm each side.' },
        { title: 'Bed height (mattress + frame)', body: 'Floor to top of mattress when made. Affects headboard height and how you climb in. Standard: 50-60 cm. Platform beds: 30-40 cm. Tall beds with storage drawers: 60-75 cm.' },
        { title: 'Room clearance for bed + bedside tables', body: 'Bed width + 2× bedside table width = total room footprint. Allow 60 cm minimum on each side for table + walking space. So a queen + two tables needs ~270 cm of wall space.' },
        { title: 'Doorway and stairwell delivery', body: 'Beds usually ship in pieces (mattress separate, frame disassembled) but mattresses are often single-piece. Measure your door, stairwell, and corridors for the mattress, not the frame.' }
      ]
    },
    tips: {
      en: ['Bunky boards and bed risers can change mattress height by 10-20 cm, adjust if you have low ceilings', 'Adjustable bed frames need 5-10 cm of clearance behind for tilting', 'King-size mattresses sometimes ship in two halves zip-locked together, measure each half']
    },
    commonMistakes: {
      en: ['Ordering a bed frame based on country naming (UK king ≠ US king)', 'Not measuring room for bedside tables, fancy bed but no room for water glass', 'Forgetting headboard height clearance, affects wall art or window placement']
    },
    faq: {
      en: [
        { q: 'Is a UK king the same as a US king?', a: 'No. UK king is 152×200 cm. US king is 198×203 cm. They are very different. Always measure your existing mattress.' },
        { q: 'How much room do I need around a bed?', a: '60 cm minimum on each side for walking and bedside tables. 90 cm preferred. Less than 60 cm: bedside tables won\'t fit; bed feels cramped.' },
        { q: 'Can my mattress fit through my doorway?', a: 'Mattresses can flex slightly but not fold. Standard interior doors (~80 cm) accommodate twin/full mattresses. Queens (152 cm) and kings (198 cm) need wider doors or removed-door tricks.' }
      ]
    },
    related: ['sofa', 'doorway']
  },

  {
    slug: 'kitchen-cabinet',
    keywords: 'how to measure kitchen cabinets, cabinet sizes, kitchen renovation measurement, custom kitchen',
    difficulty: 3,
    timeMin: 15,
    category: 'fixture',
    title: {
      en: 'How to Measure Kitchen Cabinets for Renovation',
      ru: 'Как замерить кухонные шкафы под ремонт',
      de: 'Küchenschränke für die Renovierung ausmessen',
      fr: 'Comment mesurer des armoires de cuisine pour la rénovation',
      es: 'Cómo medir armarios de cocina para una reforma'
    },
    excerpt: {
      en: 'A complete kitchen renovation measurement protocol, base cabinets, wall cabinets, fillers, appliances, plumbing, electrical. Every dimension a kitchen designer needs.',
      ru: 'Полный протокол замеров для ремонта кухни, нижние и верхние шкафы, заполнители, техника, сантехника, электрика. Всё, что нужно дизайнеру кухни.'
    },
    intro: {
      en: 'Kitchen renovations are the most measurement-intensive home project. A designer needs 30+ specific dimensions before producing a layout. Capture them all in a single 15-minute walkthrough, saves multiple call-backs and speeds up the design timeline.',
      ru: 'Ремонт кухни, самый замероёмкий домашний проект. Дизайнеру нужно 30+ конкретных размеров до создания планировки. Снимите всё за один 15-минутный обход, сэкономит несколько визитов и ускорит дизайн.'
    },
    whyMeasure: {
      en: ['Provide complete data for a designer\'s first proposal', 'Avoid mid-project surprises about plumbing or electrical', 'Compare quotes from multiple kitchen suppliers like-for-like', 'Document existing conditions for permit applications']
    },
    whatYouNeed: {
      en: ['iPhone with Ruler AR (LiDAR strongly preferred, speeds the process 2x)', 'Room Scan and individual Length measurements', 'Photo + Annotation in each captured project']
    },
    steps: {
      en: [
        { title: 'Floor plan (full kitchen scan)', body: 'Open Room Scan. Walk the kitchen perimeter. The app captures walls, doorways, windows. This is your baseline document.' },
        { title: 'Ceiling height (at three points)', body: 'Center of kitchen, near the back wall, near the front. Ceilings sag or angle slightly in older homes, capture variations.' },
        { title: 'Wall lengths between corners', body: 'For each wall run, measure from inside corner to inside corner. Critical for cabinet ordering, even 2 cm off changes which size cabinet fits.' },
        { title: 'Window and door positions', body: 'For each: width, height, distance from corner of wall (left and right), height of sill from floor. Affects upper cabinet height limits.' },
        { title: 'Appliance positions and dimensions', body: 'For each: width × depth × height, distance from corner of wall, height from floor. Mark which can be moved vs. fixed.' },
        { title: 'Plumbing and electrical', body: 'Sink: drain position relative to wall corner and floor. Dishwasher: water supply line position. Stove: gas line + electrical outlet position. Each one constrains the new layout.' },
        { title: 'Existing cabinet dimensions', body: 'If keeping some cabinets: their dimensions (width × depth × height), door swing direction, drawer slide type. Important for partial renovations.' },
        { title: 'Counter heights and depths', body: 'Standard counters: 91 cm height × 64 cm depth. Variations matter, check yours. Note any backsplash height.' }
      ]
    },
    tips: {
      en: ['Take a photo at each measurement step, designers prefer "annotated photos" over "dimensions list" for clarity', 'Note natural light direction, affects which side gets glass-front cabinets', 'If existing cabinets are mid-century or older, dimensions may differ from modern standards by 5-10 cm']
    },
    commonMistakes: {
      en: ['Skipping the appliance dimensions ("they\'ll measure", but designers need them for layout)', 'Not noting the plumbing position, kitchen designers can\'t move it', 'Forgetting the height variations, older homes have non-standard countertops']
    },
    faq: {
      en: [
        { q: 'Do I need to remove existing cabinets to measure?', a: 'No. Measure with them in place. The designer subtracts standard cabinet dimensions when proposing new layouts.' },
        { q: 'How precise do kitchen measurements need to be?', a: 'Within 5 mm. Cabinets are made-to-order, even small errors compound across a 4-meter run.' },
        { q: 'Should I measure the floor too?', a: 'Yes, for any new flooring quote. The kitchen floor area is part of the project budget.' }
      ]
    },
    related: ['fridge', 'dishwasher', 'floor']
  },

  // For brevity, add 15 more items with leaner content
  {
    slug: 'dishwasher',
    keywords: 'how to measure for dishwasher, dishwasher cabinet, dishwasher size, integrated dishwasher',
    difficulty: 2,
    timeMin: 4,
    category: 'appliance',
    title: { en: 'How to Measure for a Dishwasher', ru: 'Как замерить место под посудомойку', de: 'Maßnehmen für die Spülmaschine', fr: 'Mesurer pour un lave-vaisselle', es: 'Medir el espacio para un lavavajillas' },
    excerpt: { en: 'Cabinet opening width is the critical number, but ventilation, water connection, and door clearance also matter. Five quick checks.', ru: 'Главное, ширина проёма шкафа, но вентиляция, подвод воды и размах дверцы тоже важны.' },
    intro: { en: 'Most dishwashers are 60 cm wide (full size) or 45 cm (slim). Cabinets are built to one of these dimensions. The other measurements that get people in trouble: door swing clearance, water line position, and venting height.', ru: 'Большинство посудомоек 60 см (стандарт) или 45 см (slim). Шкафы делают под эти размеры. Часто промахиваются на размахе дверцы, подводе воды и вентиляции.' },
    whyMeasure: { en: ['Confirm cabinet width matches 60 cm or 45 cm spec', 'Door swings 90+ degrees, need front clearance', 'Water and drain lines must reach the appliance', 'Integrated models need exact panel dimensions'] },
    whatYouNeed: { en: ['iPhone with Ruler AR', 'Length mode', 'The model\'s spec PDF'] },
    steps: {
      en: [
        { title: 'Cabinet opening', body: 'Width: side wall to side wall. Most cabinets are 60 cm. Slim cabinets 45 cm. Depth: front of cabinet to back wall. Height: floor to underside of countertop (typically 82 cm).' },
        { title: 'Front clearance', body: 'Door swings down 90°. Tap from front of cabinet to nearest obstacle (island, opposite wall). Need 80+ cm.' },
        { title: 'Water line position', body: 'Photograph the under-sink area. Measure height and distance from wall, must reach the dishwasher\'s rear connection.' },
        { title: 'Drain line', body: 'Most dishwashers drain through a hose into the sink drain. Confirm hose can reach.' },
        { title: 'Power outlet', body: 'Standard 230V outlet near the cabinet, ideally to the side (not behind the dishwasher).' }
      ]
    },
    tips: { en: ['Integrated dishwashers take a cabinet panel, measure panel thickness too', 'New build cabinets are usually exactly 60 cm, older custom cabinets may be 58-62 cm'] },
    commonMistakes: { en: ['Buying full-size when cabinet is slim (45 cm), won\'t fit', 'Forgetting front clearance for door swing'] },
    faq: { en: [
      { q: 'Standard dishwasher size?', a: '60 cm wide × 60 cm deep × 82 cm tall (full size). 45 cm wide (slim). Almost always one of those two.' },
      { q: 'Can a dishwasher fit in any cabinet?', a: 'Only cabinets built to those standard widths. Custom cabinets may need modification.' }
    ] },
    related: ['fridge', 'kitchen-cabinet']
  },

  {
    slug: 'washing-machine',
    keywords: 'how to measure for washing machine, washer cabinet, washer size, laundry room measurement',
    difficulty: 2,
    timeMin: 4,
    category: 'appliance',
    title: { en: 'How to Measure for a Washing Machine', ru: 'Как замерить место под стиральную машину', de: 'Maßnehmen für die Waschmaschine', fr: 'Mesurer pour un lave-linge', es: 'Medir el espacio para una lavadora' },
    excerpt: { en: 'Width, depth, height, hookup positions, door swing, five dimensions for any installation, front-load or top-load.', ru: 'Ширина, глубина, высота, подключения, размах дверцы, пять размеров под любой тип машины.' },
    intro: { en: 'Front-load washers swing the door out (need clearance); top-loaders open upward (need ceiling clearance). Both styles ship in similar boxes around 60×60×85 cm. Here\'s what to measure for each.', ru: 'Фронтальные машины открывают дверцу вперёд (нужен размах); вертикальные, вверх (нужно место над машинкой). Обе в коробках ~60×60×85 см.' },
    whyMeasure: { en: ['Cabinet/alcove fit', 'Hose reach', 'Door swing (front-load)', 'Top clearance (top-load)'] },
    whatYouNeed: { en: ['iPhone with Ruler AR', 'Length mode'] },
    steps: {
      en: [
        { title: 'Cabinet width', body: 'Most washers are 60 cm wide. Some compact models 50 cm. Tap wall to wall.' },
        { title: 'Cabinet depth', body: 'Most washers 55-65 cm deep. Add 5-10 cm clearance for hoses behind.' },
        { title: 'Cabinet height', body: 'Most washers 85 cm tall. If stacking with a dryer, double this and check ceiling.' },
        { title: 'Door swing (front-load)', body: 'Front-load door opens 180°, needs full width of door arc in clear space.' },
        { title: 'Hookups', body: 'Water inlet, drain, electrical, gas (if dryer is gas). Photograph and measure positions.' }
      ]
    },
    tips: { en: ['Top-loaders need 30+ cm of vertical clearance above for the lid to open', 'Stacking kit needed if dryer goes on top of washer'] },
    commonMistakes: { en: ['Forgetting hose reach, usually needs 1-1.5 m', 'Buying full-size when alcove is compact-size only'] },
    faq: { en: [
      { q: 'Standard washer dimensions?', a: 'Full-size: 60×60×85 cm. Compact: 50×50×80 cm. American top-loaders: 70×70×100 cm.' }
    ] },
    related: ['fridge', 'dishwasher']
  },

  {
    slug: 'oven',
    keywords: 'how to measure for oven, oven cabinet, built-in oven measurement, range size',
    difficulty: 2,
    timeMin: 4,
    category: 'appliance',
    title: { en: 'How to Measure for an Oven or Range', ru: 'Как замерить место под духовку или плиту', de: 'Maßnehmen für Ofen oder Herd', fr: 'Mesurer pour un four ou cuisinière', es: 'Medir el espacio para un horno o cocina' },
    excerpt: { en: 'Built-in oven vs freestanding range, different measurement requirements. Both come down to width × depth × height plus connection points.', ru: 'Встроенная духовка против отдельной плиты, разные требования. Оба сводятся к ширине, глубине, высоте и точкам подключения.' },
    intro: { en: 'Single ovens are 60 cm wide. Double ovens are 60 cm wide × 90 cm tall. Ranges (cooktop + oven combined) are 60, 76, or 90 cm wide. Get the cabinet dimensions right, plus ventilation gap and gas/electrical position.', ru: 'Одинарные духовки 60 см. Двойные, 60×90 см. Плиты, 60, 76 или 90 см. Учитывайте размеры шкафа, вентиляцию и подключения.' },
    whyMeasure: { en: ['Cabinet fit (most are 60 cm)', 'Cooktop clearance (for ranges)', 'Hood/exhaust position', 'Gas line or 240V outlet position'] },
    whatYouNeed: { en: ['iPhone with Ruler AR', 'Length mode', 'Touch Mode for cabinet depth'] },
    steps: {
      en: [
        { title: 'Cabinet width', body: 'Wall to wall. Standard 60 cm. Verify with Length mode.' },
        { title: 'Cabinet depth', body: 'Front of cabinet to back wall. Most ovens 55-60 cm deep; need 5 cm more for ventilation.' },
        { title: 'Cabinet height', body: 'Single oven needs ~60 cm height in the cabinet. Double oven ~90 cm. Range (cooktop + oven combo) ~90 cm.' },
        { title: 'Connection point', body: 'Gas: floor or wall? Distance from corner? Electrical: 240V outlet position?' },
        { title: 'Hood/exhaust above', body: 'Hood needs 65-75 cm clearance above the cooktop. Measure ceiling height to determine hood model height.' }
      ]
    },
    tips: { en: ['Wall ovens are usually mounted at chest height, eye level for the oven door window', 'For 90 cm ranges, you need 90 cm wall space + 60 cm clearance each side for safety'] },
    commonMistakes: { en: ['Wrong fuel type, gas connection but electrical model (or vice versa)', 'Hood too low or too high, affects suction efficiency'] },
    faq: { en: [
      { q: 'Standard oven width?', a: '60 cm in EU/UK. Some US ranges 76 cm. Professional models 90 cm.' }
    ] },
    related: ['fridge', 'kitchen-cabinet']
  },

  {
    slug: 'bookshelf',
    keywords: 'how to measure bookshelf, bookshelf dimensions, shelf height measure, ikea billy size',
    difficulty: 1,
    timeMin: 3,
    category: 'furniture',
    title: { en: 'How to Measure for a Bookshelf', ru: 'Как замерить место под книжный шкаф', de: 'Bücherregal ausmessen', fr: 'Mesurer pour une bibliothèque', es: 'Medir para una librería' },
    excerpt: { en: 'Wall space, shelf depth, ceiling height, doorway clearance, bookshelf measurements that prevent a return trip to IKEA.', ru: 'Свободная стена, глубина полки, высота до потолка, проход в дверь, замеры под книжный шкаф.' },
    intro: { en: 'Bookshelves come in fixed dimensions, IKEA Billy is 80 cm wide × 28 cm deep × 202 cm tall, for example. Your job is to make sure those dimensions fit your space, your books, and your doorway.', ru: 'Книжные шкафы имеют фиксированные размеры, IKEA Billy 80×28×202 см. Ваша задача, проверить, что эти размеры влезают в пространство, помещают ваши книги и проходят в дверь.' },
    whyMeasure: { en: ['Wall space fit', 'Doorway clearance for delivery', 'Floor flatness (for tall shelves)', 'Adjacent furniture clearance'] },
    whatYouNeed: { en: ['iPhone with Ruler AR', 'Length and Height modes'] },
    steps: {
      en: [
        { title: 'Wall width available', body: 'Tap left obstacle (wall, other furniture, door frame) to right. This is your max shelf width.' },
        { title: 'Ceiling height', body: 'Floor to ceiling. Tall bookshelves (200+ cm) need to clear when tilted into position, subtract about 2 cm of tilt clearance.' },
        { title: 'Depth (toward room)', body: 'Distance from wall to nearest obstacle (sofa, coffee table, walking path). Most shelves 28-40 cm deep.' },
        { title: 'Doorway for delivery', body: 'Many bookshelves ship in one piece. Compare shipping box dimensions to your front door, hallway, room door.' }
      ]
    },
    tips: { en: ['Floor must be level, wedges or shims fix small slope', 'Anchor tall shelves to the wall, earthquake/child safety'] },
    commonMistakes: { en: ['Forgetting ceiling tilt clearance, bookshelf doesn\'t stand up', 'Buying too-deep shelves for narrow rooms'] },
    faq: { en: [
      { q: 'How deep should a bookshelf be?', a: 'Standard 28-30 cm, fits most books with room to grip. 35-40 cm if storing larger items (boxes, decor).' }
    ] },
    related: ['sofa', 'desk', 'doorway']
  },

  {
    slug: 'desk',
    keywords: 'how to measure for desk, office desk size, computer desk dimensions, ergonomic desk',
    difficulty: 1,
    timeMin: 3,
    category: 'furniture',
    title: { en: 'How to Measure for a Desk', ru: 'Как замерить место под стол', de: 'Schreibtisch ausmessen', fr: 'Mesurer pour un bureau', es: 'Medir para un escritorio' },
    excerpt: { en: 'Width, depth, height, chair clearance, and ergonomic eye-to-screen distance. Five quick measurements for a productive home office.', ru: 'Ширина, глубина, высота, место для кресла, эргономическое расстояние от глаз до экрана. Пять замеров под продуктивный home-офис.' },
    intro: { en: 'A desk that\'s 10 cm too deep crowds the room. 5 cm too tall ruins your wrists. Get it right the first time with five iPhone measurements.', ru: 'Стол на 10 см глубже, теснит комнату. На 5 см выше, портит запястья. С пятью замерами всё встанет на место.' },
    whyMeasure: { en: ['Fit the desk in the room with chair-pull-out clearance', 'Ergonomic height for your body', 'Monitor distance from eyes', 'Cable management clearance behind'] },
    whatYouNeed: { en: ['iPhone with Ruler AR', 'Length and Height modes'] },
    steps: {
      en: [
        { title: 'Wall space', body: 'Tap the wall area where the desk will go (width × ceiling clearance if shelves above).' },
        { title: 'Chair pull-out', body: 'From wall: desk depth + chair depth + 30 cm walk-around space. Total ~120-150 cm.' },
        { title: 'Desk height', body: 'Ergonomic standard: 72-76 cm. If you\'re tall (190+ cm), prefer 76 or adjustable.' },
        { title: 'Monitor distance', body: 'Eye-to-screen: 60-80 cm. Use Height mode to measure your eye level when seated; then ensure the desk is deep enough for that distance.' },
        { title: 'Cable clearance behind', body: 'Need 5-10 cm gap behind for cables. Many desks go flush against wall, check yours.' }
      ]
    },
    tips: { en: ['Sit-stand desks add 20-30 cm of vertical travel, check ceiling clearance with shelves above', 'L-shaped desks need clearance on both legs of the L'] },
    commonMistakes: { en: ['Buying a wide desk for a narrow room, chair can\'t pull out', 'Wrong height, wrist strain over time'] },
    faq: { en: [
      { q: 'Standard desk depth?', a: '60-80 cm. Less than 60 puts the monitor too close. More than 80 wastes floor space.' }
    ] },
    related: ['bookshelf']
  },

  {
    slug: 'rug',
    keywords: 'how to measure for rug, rug size for room, area rug dimensions, carpet area',
    difficulty: 1,
    timeMin: 3,
    category: 'furniture',
    title: { en: 'How to Measure for a Rug or Carpet', ru: 'Как замерить место под ковёр', de: 'Teppich ausmessen', fr: 'Mesurer pour un tapis', es: 'Medir para una alfombra' },
    excerpt: { en: 'Rug under sofa, under bed, in dining room, three different rules for three different placements. Plus the universal "no rug smaller than your sofa" rule.', ru: 'Ковёр под диван, под кровать, в столовой, три правила для трёх ситуаций. Плюс универсальное «ковёр не меньше дивана».' },
    intro: { en: 'A too-small rug makes a room look smaller. A too-big rug runs under doors and walls awkwardly. The right size depends on what the rug is anchoring, sofa, bed, dining table, and each has its own rule.', ru: 'Слишком маленький ковёр уменьшает комнату. Слишком большой неловко заползает под двери. Правильный размер зависит от того, что ковёр якорит, диван, кровать или стол.' },
    whyMeasure: { en: ['Living room: anchor the sofa visually', 'Bedroom: extend past the bed for warmth on feet', 'Dining room: chairs must remain on rug when pulled out', 'Hallway: leave 10-15 cm of floor visible on each side'] },
    whatYouNeed: { en: ['iPhone with Ruler AR', 'Manual Room Builder for irregular shapes'] },
    steps: {
      en: [
        { title: 'Living room, measure sofa + side tables', body: 'Rug should be wider than the sofa and ideally extend under the front legs of chairs/loveseats. Tap from sofa-left edge to right edge.' },
        { title: 'Bedroom, measure bed + 60 cm beyond', body: 'Rug should extend 60-90 cm past the bed on three sides (left, right, and foot). Common: bed + 90 cm each side.' },
        { title: 'Dining, measure table + chair pullout', body: 'Rug must be larger than (table footprint) + (chair depth × 2). Standard: table width + 90 cm on each side.' },
        { title: 'Hallway / runner', body: 'Length: hallway length minus 30-50 cm. Width: hallway width minus 20-30 cm. Don\'t cover the entire floor, leave visible margin.' }
      ]
    },
    tips: { en: ['Layered rugs (small over large) for visual interest', 'Always use rug pads, prevents slipping and protects floor'] },
    commonMistakes: { en: ['Sofa floats off the rug (legs touch wood), rug too small', 'Chair legs slide off the rug edge when pulled, rug too small for dining'] },
    faq: { en: [
      { q: 'How big should a living room rug be?', a: 'Wider than your largest sofa. All-the-way-under preferred; at minimum, sofa\'s front legs on the rug.' }
    ] },
    related: ['sofa', 'bed', 'floor']
  },

  {
    slug: 'ceiling',
    keywords: 'how to measure ceiling height, ceiling area, paint ceiling, light fixture clearance',
    difficulty: 1,
    timeMin: 3,
    category: 'room',
    title: { en: 'How to Measure a Ceiling (Height, Area, Light Clearance)', ru: 'Как измерить потолок (высоту, площадь, место под светильник)', de: 'Decke ausmessen (Höhe, Fläche, Lampenplatz)', fr: 'Comment mesurer un plafond', es: 'Cómo medir un techo' },
    excerpt: { en: 'Ceiling height for furniture clearance, area for paint or tile, fixture position for chandeliers. Three quick iPhone measurements.', ru: 'Высота для мебели, площадь под краску или плитку, место под люстру. Три быстрых замера с iPhone.' },
    intro: { en: 'Ceiling measurements get overlooked because they\'re overhead. But ceiling height determines whether your bookshelf fits, paint quantities, and where chandeliers can hang.', ru: 'Замеры потолка часто забывают, он же сверху. Но высота определяет, влезет ли шкаф, сколько краски, где можно повесить люстру.' },
    whyMeasure: { en: ['Confirm tall furniture clearance', 'Paint or tile area for ceiling', 'Chandelier or pendant clearance (head height)', 'Identify sagging or sloping issues'] },
    whatYouNeed: { en: ['iPhone with Ruler AR', 'Height mode'] },
    steps: {
      en: [
        { title: 'Ceiling height', body: 'Height mode. Tap the floor, then the ceiling. Modern builds 240-260 cm. Older homes 280-320 cm.' },
        { title: 'At multiple points', body: 'Ceilings sometimes slope or sag. Measure center, near each wall, and near load-bearing beams.' },
        { title: 'Ceiling area for paint', body: 'For flat ceilings: equal to floor area. For sloped/vaulted: use the surface area, not the floor projection. Use Manual Room Builder if not flat.' },
        { title: 'Fixture hanging height', body: 'Pendant lights typically 80-100 cm above tables. Chandeliers 200+ cm above floor (head clearance). Measure from ceiling-mount-point to your desired hang height.' }
      ]
    },
    tips: { en: ['Modern lights are deeper, fixture body + light fixture = total drop. Subtract from ceiling height.', 'Vaulted ceilings use more paint per "floor m²" than flat ones'] },
    commonMistakes: { en: ['Assuming flat ceiling area when it\'s sloped', 'Hanging fixtures too low, banging head'] },
    faq: { en: [
      { q: 'Standard ceiling height?', a: '240 cm in modern builds, 260-280 in mid-century, 300+ in older homes.' }
    ] },
    related: ['room-for-paint', 'floor']
  },

  {
    slug: 'closet',
    keywords: 'how to measure closet, walk in closet, closet shelf, wardrobe size, ikea pax',
    difficulty: 2,
    timeMin: 5,
    category: 'fixture',
    title: { en: 'How to Measure a Closet (for Built-in Storage or Wardrobe)', ru: 'Как замерить шкаф или гардеробную (под встроенное хранение или новый шкаф)', de: 'Schrank ausmessen (für Einbaulösung oder neuen Schrank)', fr: 'Mesurer un placard (rangement intégré ou armoire)', es: 'Medir un armario (almacenamiento integrado o armario nuevo)' },
    excerpt: { en: 'Closet width, depth, height, plus door and electrical positions, the data set IKEA, Container Store, and custom designers need.', ru: 'Ширина, глубина, высота, плюс двери и розетки, данные для IKEA, систем хранения и кастомных дизайнеров.' },
    intro: { en: 'A custom closet system can transform 1-2 m² of awkward space into 4× the storage. The catch: it has to fit precisely. Five measurements give a designer everything needed for a first proposal.', ru: 'Кастомная гардеробная превращает 1-2 м² нелепого пространства в 4× больше хранения. Условие: точно вписаться. Пять замеров дают дизайнеру всё для первого предложения.' },
    whyMeasure: { en: ['Internal width × depth × height', 'Door opening dimensions and swing', 'Electrical outlets and light positions', 'Floor evenness and ceiling angle'] },
    whatYouNeed: { en: ['iPhone with Ruler AR (Manual Room Builder for irregular shapes)', 'Length mode'] },
    steps: {
      en: [
        { title: 'Internal width', body: 'Wall to wall, at three heights (top, middle, bottom). Old houses are not square.' },
        { title: 'Internal depth', body: 'Front of opening to back wall. Note any pipes or built-in jutting into the space.' },
        { title: 'Internal height', body: 'Floor to ceiling. Note if there\'s a step or threshold at the entrance.' },
        { title: 'Door opening', body: 'Width and height of the door opening separately from the internal closet. Closets with hinged doors have less usable depth.' },
        { title: 'Electrical and light', body: 'Outlet positions, ceiling light position. Most closet systems work around these, note exact locations.' }
      ]
    },
    tips: { en: ['Walk-in closets benefit from corner systems, measure both diagonal and orthogonal', 'Floor often slopes toward door for drainage, closets aren\'t perfectly square'] },
    commonMistakes: { en: ['Measuring entry door but not internal closet width', 'Skipping the depth check, pipes inside the closet eat usable space'] },
    faq: { en: [
      { q: 'How deep is a typical wardrobe?', a: '55-60 cm, fits a hanger comfortably. Less than 55 cm: cramped. More than 60: wastes interior space.' }
    ] },
    related: ['bed', 'bookshelf']
  },

  {
    slug: 'stairs',
    keywords: 'how to measure stairs, stair tread, stair carpet, stair runner measurement, staircase iphone',
    difficulty: 2,
    timeMin: 5,
    category: 'fixture',
    title: { en: 'How to Measure Stairs (for Carpet, Runner, or Furniture Delivery)', ru: 'Как замерить лестницу (под ковёр, дорожку или доставку мебели)', de: 'Treppe ausmessen (für Teppich, Läufer oder Möbellieferung)', fr: 'Mesurer un escalier (tapis, chemin ou livraison de meubles)', es: 'Medir una escalera (alfombra, pasillera o entrega de muebles)' },
    excerpt: { en: 'Tread depth, riser height, total run length, plus turning clearance for furniture delivery. Three minutes captures everything.', ru: 'Глубина проступи, высота подступёнка, общая длина, плюс размах поворота для мебели. Три минуты на всё.' },
    intro: { en: 'Stairs are the deal-breaker for furniture delivery. They\'re also a finishing problem, the wrong runner length means visible gaps. Five measurements solve both.', ru: 'Лестница, финальное препятствие для мебели. И финишная проблема, неверная длина дорожки оставляет щели. Пять замеров решают всё.' },
    whyMeasure: { en: ['Furniture transit (sofa, fridge, mattress)', 'Carpet runner ordering', 'Tread replacement', 'Stair safety code compliance'] },
    whatYouNeed: { en: ['iPhone with Ruler AR', 'Length and Height modes'] },
    steps: {
      en: [
        { title: 'Tread depth', body: 'Front to back of step (where you put your foot). Standard 25-30 cm.' },
        { title: 'Riser height', body: 'Top of one step to top of next. Standard 18-20 cm.' },
        { title: 'Total run length', body: 'Floor at bottom to floor at top, horizontally. For carpet runner.' },
        { title: 'Turning clearance', body: 'For L-shaped staircases, measure the landing dimensions. Also turn radius, how big a piece can rotate at the corner.' },
        { title: 'Ceiling clearance over stairs', body: 'Head height at midpoint, typically 200+ cm. Important for tall pieces being moved up the stairs.' }
      ]
    },
    tips: { en: ['Stair runners typically install with brackets in the corner of each step', 'Compute runner length: (tread × count) + (riser × count) = total linear runner needed'] },
    commonMistakes: { en: ['Forgetting the landing, furniture transit gets stuck there', 'Wrong tread count, count the actual steps, not by floor count'] },
    faq: { en: [
      { q: 'Standard tread depth?', a: '25-30 cm. Less than 25: feels steep. More than 30: shallow steps.' }
    ] },
    related: ['floor', 'doorway']
  },

  {
    slug: 'doorway',
    keywords: 'how to measure doorway for furniture, doorway clearance, will furniture fit doorway, door opening width',
    difficulty: 1,
    timeMin: 2,
    category: 'fixture',
    title: { en: 'How to Measure a Doorway for Furniture', ru: 'Как замерить дверной проём под мебель', de: 'Türdurchgang für Möbel ausmessen', fr: 'Mesurer une porte pour des meubles', es: 'Medir una puerta para muebles' },
    excerpt: { en: 'The clear opening width with the door open is what matters, not the full frame. Measure that, plus height, plus the diagonal for narrow halls.', ru: 'Главное, ширина прохода при открытой двери, не полная коробка. Замерить её, высоту и диагональ для узких коридоров.' },
    intro: { en: 'Doorways are the #1 reason furniture gets sent back. The single biggest mistake is measuring the door slab width (the moving panel) instead of the clear opening (what you can actually fit through). They differ by 4-5 cm.', ru: 'Дверные проёмы, главная причина возвратов мебели. Главная ошибка, замерить полотно (двигающуюся часть) вместо чистого прохода (через что реально протискиваешься). Разница 4-5 см.' },
    whyMeasure: { en: ['Sofa, bed, fridge clearance', 'Door swing direction matters (some open inward, some outward)', 'Narrow hallway corners may need the diagonal', 'Removing the door from hinges gains 5 cm'] },
    whatYouNeed: { en: ['iPhone with Ruler AR', 'Length mode'] },
    steps: {
      en: [
        { title: 'Clear opening width', body: 'Open the door 90°. From inside-of-door to opposite jamb. This is the ACTUAL passage width.' },
        { title: 'Clear opening height', body: 'Floor to top of frame opening. Watch for thresholds that reduce clearance.' },
        { title: 'Corridor / approach clearance', body: 'On either side of the doorway, measure the corridor width. Furniture has to turn at each corner.' },
        { title: 'Diagonal (if narrow)', body: 'For tight L-shaped corridors: corridor width + corner depth = the max diagonal a piece can navigate. Use Material Calculator → Area to compute.' }
      ]
    },
    tips: { en: ['Remove the door from its hinges to gain another 4-5 cm', 'Remove door handles too, they add 4 cm to the door thickness'] },
    commonMistakes: { en: ['Measuring door slab width instead of clear opening (4-5 cm difference)', 'Forgetting the corridor, sofa enters door but won\'t turn'] },
    faq: { en: [
      { q: 'Standard interior door width?', a: '76-80 cm slab width → 71-75 cm clear opening when 90° open.' }
    ] },
    related: ['sofa', 'fridge', 'door-frame']
  },

  {
    slug: 'person-height',
    keywords: 'how to measure height with iphone, ar height measure, measure tree height, height app',
    difficulty: 1,
    timeMin: 2,
    category: 'body',
    title: { en: 'How to Measure Height with Your iPhone (People, Trees, Buildings)', ru: 'Как измерить высоту с iPhone (люди, деревья, здания)', de: 'Höhe mit dem iPhone messen (Personen, Bäume, Gebäude)', fr: 'Comment mesurer une hauteur avec votre iPhone', es: 'Cómo medir altura con tu iPhone' },
    excerpt: { en: 'AR height measurement uses the ground plane plus your phone\'s position to calculate vertical dimension. Works on people, trees, and buildings up to ~30 m.', ru: 'AR-высота использует плоскость пола плюс положение телефона. Работает на людях, деревьях и зданиях до ~30 м.' },
    intro: { en: 'Apple\'s Measure app auto-detects people\'s height. Third-party AR apps extend this to any vertical object. Here\'s how it works and when accuracy degrades.', ru: 'Apple Measure автодетектит рост людей. Сторонние AR-приложения распространяют это на любой вертикальный объект. Как это работает и где теряется точность.' },
    whyMeasure: { en: ['Person\'s height for ordering custom clothes or harness', 'Tree height for safety / pruning planning', 'Building height for solar / signage', 'Ceiling height (alternative method)'] },
    whatYouNeed: { en: ['iPhone with Ruler AR', 'Height mode', 'Level ground for accuracy'] },
    steps: {
      en: [
        { title: 'Stand on level ground', body: 'AR Height needs a flat reference plane. Stand on level ground, not sloped, not stairs.' },
        { title: 'Open Height mode', body: 'In Ruler AR, switch to Height. The app projects a line on the ground at your phone\'s position.' },
        { title: 'Tap the base', body: 'Aim at the base of the object (where it meets the ground). Tap to anchor.' },
        { title: 'Aim at the top', body: 'Tilt the phone upward, keeping the on-screen crosshair on the top of the object. Tap to capture.' },
        { title: 'Read the height', body: 'The reading appears in your chosen unit (cm, m, ft). Accuracy: ±5% under 10 m, ±10% over.' }
      ]
    },
    tips: { en: ['For trees, measure from outside the drip line for cleanest base detection', 'For buildings, very tall (>20 m) measurements degrade, use a laser tape for precision work'] },
    commonMistakes: { en: ['Sloped ground, AR ground plane gets confused', 'Aiming above the object\'s actual top, picks up background'] },
    faq: { en: [
      { q: 'Can iPhone measure my own height?', a: 'Yes, point the camera at yourself in a mirror, or ask someone to point it at you. Apple Measure auto-detects.' },
      { q: 'How accurate is AR height vs a tape measure?', a: 'Within ±5% for under 5 m. Worse over distance, at 10+ m use a laser distance meter.' }
    ] },
    related: ['ceiling']
  },

  {
    slug: 'parking-spot',
    keywords: 'how to measure parking spot, car width, parking space size, garage measurement',
    difficulty: 1,
    timeMin: 2,
    category: 'outdoor',
    title: { en: 'How to Measure a Parking Spot (Before You Park or Build)', ru: 'Как измерить парковочное место (до того как вставать или строить)', de: 'Parkplatz ausmessen', fr: 'Comment mesurer une place de parking', es: 'Cómo medir una plaza de parking' },
    excerpt: { en: 'Width, length, and door-swing clearance, three measurements that tell you if your car fits, or that help spec a custom garage.', ru: 'Ширина, длина, размах двери, три замера, чтобы понять, влезет ли машина, или спроектировать гараж.' },
    intro: { en: 'Standard parking spots are 2.5 m × 5 m, and many cars are now wider than 2.0 m. For tight commercial garages or your own home, measure before you commit.', ru: 'Стандартное парковочное место 2,5×5 м, но многие машины уже шире 2,0 м. Для тесных коммерческих парковок или собственного гаража, замерьте до решения.' },
    whyMeasure: { en: ['Will your car fit (especially SUVs and pickups)', 'Door swing clearance to neighbouring vehicles', 'Driveway dimensions for new builds', 'EV charging cable reach'] },
    whatYouNeed: { en: ['iPhone with Ruler AR', 'Length mode'] },
    steps: {
      en: [
        { title: 'Width', body: 'Tap each painted line of the parking spot. Standard 2.5 m. Compact spots 2.3 m. Wide (US disabled) 4 m.' },
        { title: 'Length', body: 'Tap front line to back line. Standard 5 m. Long spots (limousines, pickups) 6 m.' },
        { title: 'Door swing', body: 'In width direction, your car door opens about 70-90 cm. Cars wider than spot width - 100 cm: doors will hit neighbouring cars.' }
      ]
    },
    tips: { en: ['Garage spots: also measure ceiling height for roof racks', 'EV: where will the charging cable need to reach? Plan accordingly.'] },
    commonMistakes: { en: ['Forgetting door swing, fits the spot but can\'t exit the car', 'Ignoring ceiling for garages with roof boxes/kayaks'] },
    faq: { en: [
      { q: 'Standard parking spot size?', a: '2.5×5 m (EU/UK). 2.4×5.5 m (US). Both are getting tighter as urban density increases.' }
    ] },
    related: [] as string[]
  },

  {
    slug: 'pet',
    keywords: 'how to measure dog for harness, cat door size, pet measurement, harness sizing',
    difficulty: 1,
    timeMin: 3,
    category: 'body',
    title: { en: 'How to Measure Your Pet (Harness, Crate, Cat Door)', ru: 'Как замерить питомца (шлейка, переноска, кошачья дверца)', de: 'Haustier ausmessen (Geschirr, Box, Katzentür)', fr: 'Comment mesurer votre animal (harnais, caisse, chatière)', es: 'Cómo medir a tu mascota (arnés, transportín, gatera)' },
    excerpt: { en: 'Chest girth, neck, length, three measurements for any pet product order. Plus the cat-door rule of "shoulder width + 2 cm."', ru: 'Обхват груди, шеи, длина, три замера под любой заказ. Плюс правило для кошачьей дверцы: «ширина плеч + 2 см».' },
    intro: { en: 'Pet harnesses are returned more often than human clothes, same fit issue, smaller animal. iPhone makes the three critical measurements quick (when the pet cooperates).', ru: 'Шлейки возвращают чаще, чем человеческую одежду, та же проблема посадки на меньшем животном. iPhone делает три ключевых замера быстро (если животное согласно).' },
    whyMeasure: { en: ['Harness fit (chest girth is the key number)', 'Cat/dog door width', 'Crate sizing for transport', 'Custom bed dimensions'] },
    whatYouNeed: { en: ['iPhone with Ruler AR', 'Length mode (pet may not stand still, Touch mode helps)'] },
    steps: {
      en: [
        { title: 'Chest girth', body: 'Behind the front legs, around the widest part of the rib cage. Length mode: hold one finger at the start, tap on the phone at the wrap-around point.' },
        { title: 'Neck circumference', body: 'Around the base of the neck where a collar sits.' },
        { title: 'Body length', body: 'Base of neck (where collar sits) to base of tail. For harness back-piece sizing.' },
        { title: 'Door / opening width', body: 'For cat doors: shoulder width + 2-3 cm. For dog doors: chest girth ÷ π gives the diameter; add 5-10% safety.' }
      ]
    },
    tips: { en: ['Measure when the pet is relaxed/calm, stress measurements are misleading', 'Long-haired breeds: measure under the fur to get the actual body dimension'] },
    commonMistakes: { en: ['Using the size charts without measuring, breeds vary wildly within "small/medium/large"', 'Forgetting to measure when wearing a winter coat or vest'] },
    faq: { en: [
      { q: 'What\'s the most important pet harness measurement?', a: 'Chest girth. Get it right and the harness fits. Get it wrong and you\'ll return.' }
    ] },
    related: [] as string[]
  },

  {
    slug: 'picture-frame',
    keywords: 'how to measure picture frame, art for wall, frame size, hanging picture iphone',
    difficulty: 1,
    timeMin: 2,
    category: 'fixture',
    title: { en: 'How to Measure for a Picture Frame or Wall Art', ru: 'Как замерить место под картину или раму', de: 'Bilderrahmen oder Wandkunst ausmessen', fr: 'Mesurer pour un cadre ou de l\'art mural', es: 'Medir para un cuadro o arte mural' },
    excerpt: { en: 'Wall space, art height (relative to furniture), and the rule of two-thirds for centered placement.', ru: 'Свободная стена, высота картины относительно мебели, и правило двух третей для центрирования.' },
    intro: { en: 'Hanging art looks intentional when it follows three rules: centered horizontally on the wall, eye level vertically (when standing), and 2/3 the width of the furniture beneath. iPhone makes verifying these instant.', ru: 'Картина выглядит интересно при трёх правилах: центр по горизонтали, на уровне глаз по вертикали, 2/3 ширины мебели снизу. iPhone мгновенно проверяет все три.' },
    whyMeasure: { en: ['Center art on the wall (or above furniture)', 'Hang at correct eye-level height (~145-155 cm to center)', 'Match scale to furniture (2/3 rule)', 'Plan multi-piece gallery walls'] },
    whatYouNeed: { en: ['iPhone with Ruler AR', 'Length and Height modes', 'Bubble level for hanging'] },
    steps: {
      en: [
        { title: 'Wall width', body: 'Tap left edge of wall to right edge.' },
        { title: 'Furniture width (if hanging above)', body: 'Sofa, console, bed width. Art should be 2/3 of this.' },
        { title: 'Eye level marker', body: 'Use Height mode. Mark 145-155 cm on the wall (varies with viewer height). Center of frame goes here.' },
        { title: 'Frame center to top', body: 'On the frame: tap from center to top edge. This tells you how high to drive the nail (eye-level + half height + ~2 cm hanging wire).' }
      ]
    },
    tips: { en: ['For gallery walls: leave 5-10 cm gap between frames', 'Above sofa: leave 15-25 cm gap between art bottom and sofa top'] },
    commonMistakes: { en: ['Hanging too high, art floats far above furniture', 'Center misalignment by even 2-3 cm reads wrong'] },
    faq: { en: [
      { q: 'How high to hang a picture?', a: 'Center of the picture at ~145-155 cm from the floor. Same height for galleries.' }
    ] },
    related: ['wall-for-tile']
  }
];
