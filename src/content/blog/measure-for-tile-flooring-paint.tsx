import type { PostMeta } from './posts';

export const meta: PostMeta = {
  slug: 'measure-for-tile-flooring-paint',
  date: '2026-04-12',
  readingTimeMin: 5,
  keywords:
    'how to measure for tile, how to measure for flooring, how to measure for paint, material calculator app, renovation material estimate',
  tags: ['Renovation', 'Materials', 'DIY'],
  title: {
    en: "How to Measure for Tile, Flooring, and Paint Using Your iPhone",
    ru: "Как просчитать плитку, пол и краску под ремонт с iPhone",
    de: "Wie du Fliesen, Boden und Farbe mit dem iPhone ausmisst",
    fr: "Comment mesurer pour le carrelage, le sol et la peinture avec votre iPhone",
    es: "Cómo medir para azulejos, suelo y pintura con tu iPhone",
    ja: "iPhoneでタイル・床材・塗料の必要量を測る方法",
    ko: "iPhone으로 타일, 바닥재, 페인트 양을 측정하는 방법",
    "zh-Hans": "如何用 iPhone 测算瓷砖、地板和油漆用量",
    "pt-BR": "Como medir azulejo, piso e tinta usando seu iPhone",
    it: "Come misurare per piastrelle, pavimenti e vernice con il tuo iPhone",
    pl: "Jak obliczyć ilość płytek, podłogi i farby przy użyciu iPhone'a",
    tr: "iPhone ile fayans, zemin ve boya miktarını nasıl ölçersiniz",
    ar: "كيفية حساب البلاط والأرضيات والطلاء باستخدام جهاز iPhone"
  },
  excerpt: {
    en: "A practical guide to converting room dimensions into material quantities, with the exact waste factors, pattern adjustments, and unit conversions for tile, flooring, paint, and wallpaper.",
    ru: "Практический гид: как из размеров комнаты получить количество материала, с конкретными коэффициентами на бой, поправками на узор и переводами для плитки, пола, краски и обоев.",
    de: "Ein praktischer Leitfaden, wie du Raummaße in Materialmengen umrechnest – mit genauen Verschnittfaktoren, Musterzuschlägen und Einheitenumrechnungen für Fliesen, Bodenbeläge, Farbe und Tapete.",
    fr: "Un guide pratique pour convertir les dimensions d'une pièce en quantités de matériaux, avec les taux de perte exacts, les ajustements selon les motifs et les conversions d'unités pour le carrelage, le sol, la peinture et le papier peint.",
    es: "Una guía práctica para convertir las dimensiones de una habitación en cantidades de material, con los factores de desperdicio exactos, ajustes por patrón y conversiones de unidades para azulejos, suelo, pintura y papel pintado.",
    ja: "部屋の寸法を材料の数量に変換するための実践ガイド。タイル・床材・塗料・壁紙について、正確なロス率、柄合わせの補正、単位換算を解説します。",
    ko: "방의 치수를 자재 수량으로 변환하는 실용 가이드. 타일, 바닥재, 페인트, 벽지에 대한 정확한 손실률, 패턴 보정, 단위 환산을 다룹니다.",
    "zh-Hans": "一份实用指南，教你把房间尺寸换算成材料数量，并给出瓷砖、地板、油漆和壁纸的精确损耗系数、花纹调整和单位换算。",
    "pt-BR": "Um guia prático para converter as dimensões do cômodo em quantidades de material, com os fatores de perda exatos, ajustes de padrão e conversões de unidades para azulejo, piso, tinta e papel de parede.",
    it: "Una guida pratica per convertire le dimensioni di una stanza in quantità di materiale, con i fattori di sfrido esatti, gli aggiustamenti per il motivo e le conversioni di unità per piastrelle, pavimenti, vernice e carta da parati.",
    pl: "Praktyczny przewodnik, jak zamienić wymiary pomieszczenia na ilość materiału, z dokładnymi współczynnikami odpadu, korektami na wzór i przeliczeniami jednostek dla płytek, podłogi, farby i tapety.",
    tr: "Oda ölçülerini malzeme miktarlarına dönüştürmek için pratik bir rehber; fayans, zemin, boya ve duvar kağıdı için kesin fire oranları, desen düzeltmeleri ve birim dönüşümleriyle.",
    ar: "دليل عملي لتحويل أبعاد الغرفة إلى كميات من المواد، مع معاملات الهدر الدقيقة وتعديلات النقوش وتحويلات الوحدات للبلاط والأرضيات والطلاء وورق الجدران."
  }
};

export default function Post() {
  return (
    <article className="prose-content">
      <p className="lead">
        Knowing a room is 18 m² doesn't tell you how many boxes of tile to
        buy. Manufacturers package materials in inconvenient units
        (rectangular tiles in m², round paint in litres, wallpaper in
        2.6 m × 0.5 m rolls), and every material has a waste factor that
        varies by how complicated your room shape is. Here's the math, and how the app does it for you.
      </p>

      <h2>Step 1: Get the right base measurement</h2>
      <p>
        For each material, you need a different baseline number:
      </p>
      <table>
        <thead>
          <tr><th>Material</th><th>What to measure</th></tr>
        </thead>
        <tbody>
          <tr><td>Floor tile / laminate / vinyl</td><td>Floor area (m²)</td></tr>
          <tr><td>Wall tile</td><td>Tiled wall area minus fixtures (m²)</td></tr>
          <tr><td>Paint (walls)</td><td>Wall area minus door + window cutouts (m²)</td></tr>
          <tr><td>Paint (ceiling)</td><td>Ceiling area = floor area (m²)</td></tr>
          <tr><td>Wallpaper</td><td>Wall area minus cutouts (m²)</td></tr>
          <tr><td>Baseboard / skirting</td><td>Floor perimeter minus door widths (m)</td></tr>
          <tr><td>Crown moulding</td><td>Ceiling perimeter (m)</td></tr>
        </tbody>
      </table>
      <p>
        Ruler AR's room scan gives you floor area and floor perimeter
        automatically. Wall area requires a small calculation: wall
        perimeter × ceiling height − sum of door areas − sum of window
        areas. The material calculator in the app does this for you.
      </p>

      <h2>Step 2: Apply the right waste factor</h2>
      <p>
        "Waste" is the material you'll cut off, drop, mismatch, or have
        defects in. Add this percentage to your base quantity:
      </p>
      <table>
        <thead>
          <tr><th>Scenario</th><th>Waste factor</th></tr>
        </thead>
        <tbody>
          <tr><td>Square room, large-format tile (60×60 cm)</td><td>+10%</td></tr>
          <tr><td>Standard tile (30×30 cm)</td><td>+10-15%</td></tr>
          <tr><td>Small tile / mosaic</td><td>+15-20%</td></tr>
          <tr><td>Diagonal pattern</td><td>+15%</td></tr>
          <tr><td>Herringbone / chevron</td><td>+20%</td></tr>
          <tr><td>Laminate / vinyl plank</td><td>+10% (straight lay)</td></tr>
          <tr><td>Carpet</td><td>+10-15% (depends on roll width vs room)</td></tr>
          <tr><td>Wallpaper with pattern repeat</td><td>+15-20%</td></tr>
          <tr><td>Solid-colour paint</td><td>+5-10% (touch-ups, second coat)</td></tr>
        </tbody>
      </table>
      <p>
        Add another 5% for irregularly-shaped rooms (alcoves, columns,
        non-rectangular footprint), those generate more cuts.
      </p>

      <h2>Step 3: Convert to manufacturer's units</h2>
      <p>
        Manufacturers don't sell in m². They sell in boxes, tins, rolls.
        Convert:
      </p>
      <h3>Tile</h3>
      <p>
        (Floor area × (1 + waste factor)) ÷ tile size = tiles needed → round
        up to whole boxes.
        <br />
        Example: 18 m² floor + 10% = 19.8 m². Tile size 60×60 cm = 0.36 m².
        19.8 ÷ 0.36 = 55 tiles. Box of 6 = 10 boxes (rounded up from 9.17).
      </p>
      <h3>Laminate / vinyl plank</h3>
      <p>
        Same as tile, except boxes are typically labelled with coverage in
        m². Floor 18 m² + 10% = 19.8 m². Box covers 2.4 m². Need 9 boxes.
      </p>
      <h3>Paint (walls)</h3>
      <p>
        Wall area × number of coats ÷ coverage = litres needed.
        <br />
        Typical coverage: 10 m² per litre for one coat. Two coats is
        standard for fresh painting.
        <br />
        Example: 50 m² wall area × 2 coats ÷ 10 m²/L = 10 L. Sold in 5 L
        tins → 2 tins.
      </p>
      <h3>Wallpaper</h3>
      <p>
        Wall area ÷ roll coverage + 10-20% for pattern match. Standard roll =
        5 m² coverage (10.05 m × 0.53 m). Pattern-repeat rolls need
        additional length for matching.
        <br />
        Example: 30 m² wall area + 15% pattern = 34.5 m² ÷ 5 m²/roll = 7 rolls
        (rounded up from 6.9).
      </p>

      <h2>The material calculator inside the app</h2>
      <p>
        Once you have a saved room project in Ruler AR, the material
        calculator does all of the above automatically:
      </p>
      <ol>
        <li>Open the saved room project.</li>
        <li>Tap Material Calculator.</li>
        <li>Choose a material: paint, floor tile, wallpaper, etc.</li>
        <li>Adjust waste factor if your room is non-standard.</li>
        <li>Pick a unit size (e.g. tile size 30×30 vs 60×60, paint tin 1 L vs 5 L).</li>
        <li>The app outputs both the quantity in m² and the rounded-up package count.</li>
      </ol>
      <p>
        Export the estimate as part of the room's PDF and take it to the
        hardware store. The PDF doubles as your shopping list.
      </p>

      <h2>Pricing the materials</h2>
      <p>
        With your quantities in hand, browse 2-3 retailers for unit prices.
        For each:
      </p>
      <ul>
        <li>Multiply unit price × packages needed = line cost</li>
        <li>Add delivery if not local pickup</li>
        <li>Total for that retailer = comparison number</li>
      </ul>
      <p>
        Hardware retail prices vary by 30-50% on identical products between
        IKEA, Home Depot/Lowe's, Leroy Merlin, B&Q, etc. The 10 minutes of
        comparison shopping with measured numbers usually saves €50-200 on a
        kitchen-sized renovation.
      </p>

      <h2>Common mistakes</h2>
      <ul>
        <li><strong>Forgetting waste factor.</strong> Buying exactly the room area is the #1 reason for second supply runs.</li>
        <li><strong>Wrong unit conversion.</strong> US (gallons) ↔ EU (litres), US (sq ft) ↔ EU (m²). The app converts; doing it by hand introduces errors.</li>
        <li><strong>Mismatched dye lots.</strong> Tile and paint from different production batches can look subtly different. Buy slightly more than you need from one lot rather than coming back for more later.</li>
        <li><strong>Including unusable areas.</strong> Don't tile under the kitchen island if it's permanent. Don't paint behind built-in wardrobes.</li>
      </ul>

      <h2>Bottom line</h2>
      <p>
        Measuring the room is the easy part. Converting m² into "how many
        boxes" is where most DIY budgets blow. With a measured floor plan
        in Ruler AR plus the in-app material calculator, you get
        per-material quantities in 30 seconds, accurate enough to shop
        confidently without buying twice.
      </p>
    </article>
  );
}

export function PostRU() {
  return (
    <article className="prose-content">
      <p className="lead">
        Знание того, что комната занимает 18 м², ещё не говорит вам, сколько
        коробок плитки покупать. Производители фасуют материалы в неудобных
        единицах (прямоугольная плитка — в м², краска — в литрах, обои —
        в рулонах 2,6 м × 0,5 м), и у каждого материала есть запас на бой,
        который зависит от того, насколько сложная у вас форма комнаты.
        Вот вся математика и то, как приложение делает её за вас.
      </p>

      <h2>Шаг 1. Получите правильный базовый замер</h2>
      <p>
        Для каждого материала нужна своя исходная цифра:
      </p>
      <table>
        <thead>
          <tr><th>Материал</th><th>Что измерять</th></tr>
        </thead>
        <tbody>
          <tr><td>Напольная плитка / ламинат / винил</td><td>Площадь пола (м²)</td></tr>
          <tr><td>Настенная плитка</td><td>Площадь облицовки стен за вычетом сантехники (м²)</td></tr>
          <tr><td>Краска (стены)</td><td>Площадь стен за вычетом дверных и оконных проёмов (м²)</td></tr>
          <tr><td>Краска (потолок)</td><td>Площадь потолка = площадь пола (м²)</td></tr>
          <tr><td>Обои</td><td>Площадь стен за вычетом проёмов (м²)</td></tr>
          <tr><td>Плинтус</td><td>Периметр пола за вычетом ширины дверей (м)</td></tr>
          <tr><td>Потолочный карниз</td><td>Периметр потолка (м)</td></tr>
        </tbody>
      </table>
      <p>
        Сканирование комнаты в Ruler AR автоматически даёт площадь пола и его
        периметр. Площадь стен требует небольшого расчёта: периметр стен ×
        высота потолка − сумма площадей дверей − сумма площадей окон.
        Калькулятор материалов в приложении делает это за вас.
      </p>

      <h2>Шаг 2. Примените правильный запас на бой</h2>
      <p>
        «Запас на бой» — это материал, который вы отрежете, уроните, не
        состыкуете или который окажется с дефектом. Добавьте этот процент
        к базовому количеству:
      </p>
      <table>
        <thead>
          <tr><th>Сценарий</th><th>Запас на бой</th></tr>
        </thead>
        <tbody>
          <tr><td>Квадратная комната, крупноформатная плитка (60×60 см)</td><td>+10%</td></tr>
          <tr><td>Стандартная плитка (30×30 см)</td><td>+10-15%</td></tr>
          <tr><td>Мелкая плитка / мозаика</td><td>+15-20%</td></tr>
          <tr><td>Диагональная укладка</td><td>+15%</td></tr>
          <tr><td>«Ёлочка» / шеврон</td><td>+20%</td></tr>
          <tr><td>Ламинат / виниловая плашка</td><td>+10% (прямая укладка)</td></tr>
          <tr><td>Ковролин</td><td>+10-15% (зависит от ширины рулона относительно комнаты)</td></tr>
          <tr><td>Обои с раппортом рисунка</td><td>+15-20%</td></tr>
          <tr><td>Однотонная краска</td><td>+5-10% (подкраска, второй слой)</td></tr>
        </tbody>
      </table>
      <p>
        Добавьте ещё 5% для комнат неправильной формы (ниши, колонны,
        непрямоугольный контур) — они дают больше подрезки.
      </p>

      <h2>Шаг 3. Переведите в единицы производителя</h2>
      <p>
        Производители не продают в м². Они продают коробками, банками,
        рулонами. Переводим:
      </p>
      <h3>Плитка</h3>
      <p>
        (Площадь пола × (1 + запас на бой)) ÷ размер плитки = нужное число
        плиток → округляем вверх до целых коробок.
        <br />
        Пример: 18 м² пола + 10% = 19,8 м². Размер плитки 60×60 см = 0,36 м².
        19,8 ÷ 0,36 = 55 плиток. Коробка по 6 = 10 коробок (округлено вверх с 9,17).
      </p>
      <h3>Ламинат / виниловая плашка</h3>
      <p>
        Так же, как плитка, только на коробках обычно указана площадь покрытия
        в м². Пол 18 м² + 10% = 19,8 м². Коробка покрывает 2,4 м². Нужно 9 коробок.
      </p>
      <h3>Краска (стены)</h3>
      <p>
        Площадь стен × число слоёв ÷ укрывистость = нужное число литров.
        <br />
        Типичная укрывистость: 10 м² на литр в один слой. Два слоя — стандарт
        для свежей покраски.
        <br />
        Пример: 50 м² стен × 2 слоя ÷ 10 м²/л = 10 л. Продаётся в банках по 5 л
        → 2 банки.
      </p>
      <h3>Обои</h3>
      <p>
        Площадь стен ÷ покрытие рулона + 10-20% на подгонку рисунка. Стандартный
        рулон = 5 м² покрытия (10,05 м × 0,53 м). Рулонам с раппортом нужна
        дополнительная длина на стыковку.
        <br />
        Пример: 30 м² стен + 15% на рисунок = 34,5 м² ÷ 5 м²/рулон = 7 рулонов
        (округлено вверх с 6,9).
      </p>

      <h2>Калькулятор материалов внутри приложения</h2>
      <p>
        Как только у вас есть сохранённый проект комнаты в Ruler AR,
        калькулятор материалов делает всё вышеперечисленное автоматически:
      </p>
      <ol>
        <li>Откройте сохранённый проект комнаты.</li>
        <li>Нажмите «Калькулятор материалов».</li>
        <li>Выберите материал: краска, напольная плитка, обои и т. д.</li>
        <li>Скорректируйте запас на бой, если комната нестандартная.</li>
        <li>Задайте размер единицы (например, плитка 30×30 или 60×60, банка краски 1 л или 5 л).</li>
        <li>Приложение выдаёт и количество в м², и округлённое вверх число упаковок.</li>
      </ol>
      <p>
        Экспортируйте смету в составе PDF комнаты и возьмите её в строительный
        магазин. Этот PDF заодно работает списком покупок.
      </p>

      <h2>Расчёт стоимости материалов</h2>
      <p>
        Имея на руках количества, посмотрите цены за единицу в 2-3 магазинах.
        По каждому:
      </p>
      <ul>
        <li>Умножьте цену за единицу × число упаковок = стоимость позиции</li>
        <li>Добавьте доставку, если это не самовывоз</li>
        <li>Итог по этому магазину = число для сравнения</li>
      </ul>
      <p>
        Розничные цены на одинаковые товары различаются на 30-50% между
        IKEA, Home Depot/Lowe's, Leroy Merlin, B&Q и т. д. Эти 10 минут
        сравнения цен с точными числами обычно экономят 50-200 € на ремонте
        размером с кухню.
      </p>

      <h2>Частые ошибки</h2>
      <ul>
        <li><strong>Забыть про запас на бой.</strong> Покупка ровно по площади комнаты — причина №1 повторных поездок за материалом.</li>
        <li><strong>Неверный перевод единиц.</strong> США (галлоны) ↔ ЕС (литры), США (кв. футы) ↔ ЕС (м²). Приложение переводит само; вручную легко наделать ошибок.</li>
        <li><strong>Разные партии красителя.</strong> Плитка и краска из разных производственных партий могут едва заметно отличаться. Лучше взять чуть больше из одной партии, чем докупать позже.</li>
        <li><strong>Учёт непригодных зон.</strong> Не кладите плитку под кухонным островом, если он стационарный. Не красьте за встроенными шкафами.</li>
      </ul>

      <h2>Итог</h2>
      <p>
        Измерить комнату — это простая часть. Перевод м² в «сколько коробок» —
        вот где разлетается большинство бюджетов на самостоятельный ремонт.
        С замеренным планом в Ruler AR и встроенным калькулятором материалов
        вы получаете количества по каждому материалу за 30 секунд — достаточно
        точно, чтобы покупать уверенно и не закупаться дважды.
      </p>
    </article>
  );
}

export function PostDE() {
  return (
    <article className="prose-content">
      <p className="lead">
        Zu wissen, dass ein Raum 18 m² hat, sagt dir noch nicht, wie viele
        Kartons Fliesen du kaufen musst. Hersteller verpacken Materialien in
        unpraktischen Einheiten (rechteckige Fliesen in m², runde Farbe in
        Litern, Tapete in Rollen von 2,6 m × 0,5 m), und jedes Material hat
        einen Verschnittfaktor, der davon abhängt, wie kompliziert deine
        Raumform ist. Hier ist die Rechnung – und wie die App sie für dich erledigt.
      </p>

      <h2>Schritt 1: Hol dir das richtige Grundmaß</h2>
      <p>
        Für jedes Material brauchst du eine andere Ausgangszahl:
      </p>
      <table>
        <thead>
          <tr><th>Material</th><th>Was zu messen ist</th></tr>
        </thead>
        <tbody>
          <tr><td>Bodenfliese / Laminat / Vinyl</td><td>Bodenfläche (m²)</td></tr>
          <tr><td>Wandfliese</td><td>Geflieste Wandfläche abzüglich Einbauten (m²)</td></tr>
          <tr><td>Farbe (Wände)</td><td>Wandfläche abzüglich Tür- und Fensteröffnungen (m²)</td></tr>
          <tr><td>Farbe (Decke)</td><td>Deckenfläche = Bodenfläche (m²)</td></tr>
          <tr><td>Tapete</td><td>Wandfläche abzüglich Öffnungen (m²)</td></tr>
          <tr><td>Sockelleiste</td><td>Bodenumfang abzüglich Türbreiten (m)</td></tr>
          <tr><td>Stuckleiste</td><td>Deckenumfang (m)</td></tr>
        </tbody>
      </table>
      <p>
        Der Raumscan von Ruler AR liefert dir Bodenfläche und Bodenumfang
        automatisch. Die Wandfläche erfordert eine kleine Rechnung: Wandumfang ×
        Deckenhöhe − Summe der Türflächen − Summe der Fensterflächen. Der
        Materialrechner in der App übernimmt das für dich.
      </p>

      <h2>Schritt 2: Wende den richtigen Verschnittfaktor an</h2>
      <p>
        „Verschnitt" ist das Material, das du abschneidest, fallen lässt, nicht
        passend zusammenfügst oder das Mängel aufweist. Schlage diesen
        Prozentsatz auf deine Grundmenge auf:
      </p>
      <table>
        <thead>
          <tr><th>Szenario</th><th>Verschnittfaktor</th></tr>
        </thead>
        <tbody>
          <tr><td>Quadratischer Raum, großformatige Fliese (60×60 cm)</td><td>+10%</td></tr>
          <tr><td>Standardfliese (30×30 cm)</td><td>+10-15%</td></tr>
          <tr><td>Kleine Fliese / Mosaik</td><td>+15-20%</td></tr>
          <tr><td>Diagonalverlegung</td><td>+15%</td></tr>
          <tr><td>Fischgrät / Chevron</td><td>+20%</td></tr>
          <tr><td>Laminat / Vinyldiele</td><td>+10% (gerade Verlegung)</td></tr>
          <tr><td>Teppichboden</td><td>+10-15% (abhängig von Rollenbreite vs. Raum)</td></tr>
          <tr><td>Tapete mit Rapport</td><td>+15-20%</td></tr>
          <tr><td>Einfarbige Farbe</td><td>+5-10% (Ausbesserungen, zweite Schicht)</td></tr>
        </tbody>
      </table>
      <p>
        Schlage weitere 5% für unregelmäßig geformte Räume (Nischen, Säulen,
        nicht rechteckiger Grundriss) auf – sie erzeugen mehr Zuschnitt.
      </p>

      <h2>Schritt 3: Rechne in Herstellereinheiten um</h2>
      <p>
        Hersteller verkaufen nicht in m². Sie verkaufen in Kartons, Dosen,
        Rollen. Rechne um:
      </p>
      <h3>Fliese</h3>
      <p>
        (Bodenfläche × (1 + Verschnittfaktor)) ÷ Fliesengröße = benötigte
        Fliesen → auf ganze Kartons aufrunden.
        <br />
        Beispiel: 18 m² Boden + 10% = 19,8 m². Fliesengröße 60×60 cm = 0,36 m².
        19,8 ÷ 0,36 = 55 Fliesen. Karton à 6 = 10 Kartons (aufgerundet von 9,17).
      </p>
      <h3>Laminat / Vinyldiele</h3>
      <p>
        Wie bei Fliesen, nur dass Kartons üblicherweise mit der Deckung in m²
        beschriftet sind. Boden 18 m² + 10% = 19,8 m². Karton deckt 2,4 m². Du
        brauchst 9 Kartons.
      </p>
      <h3>Farbe (Wände)</h3>
      <p>
        Wandfläche × Anzahl der Anstriche ÷ Ergiebigkeit = benötigte Liter.
        <br />
        Typische Ergiebigkeit: 10 m² pro Liter für einen Anstrich. Zwei
        Anstriche sind Standard bei einem Neuanstrich.
        <br />
        Beispiel: 50 m² Wandfläche × 2 Anstriche ÷ 10 m²/L = 10 L. Verkauft in
        5-L-Dosen → 2 Dosen.
      </p>
      <h3>Tapete</h3>
      <p>
        Wandfläche ÷ Rollendeckung + 10-20% für den Musteransatz. Standardrolle
        = 5 m² Deckung (10,05 m × 0,53 m). Rollen mit Rapport benötigen
        zusätzliche Länge zum Anpassen.
        <br />
        Beispiel: 30 m² Wandfläche + 15% Muster = 34,5 m² ÷ 5 m²/Rolle = 7 Rollen
        (aufgerundet von 6,9).
      </p>

      <h2>Der Materialrechner in der App</h2>
      <p>
        Sobald du ein gespeichertes Raumprojekt in Ruler AR hast, erledigt der
        Materialrechner all das automatisch:
      </p>
      <ol>
        <li>Öffne das gespeicherte Raumprojekt.</li>
        <li>Tippe auf den Materialrechner.</li>
        <li>Wähle ein Material: Farbe, Bodenfliese, Tapete usw.</li>
        <li>Passe den Verschnittfaktor an, falls dein Raum unregelmäßig ist.</li>
        <li>Wähle eine Einheitsgröße (z. B. Fliese 30×30 vs. 60×60, Farbdose 1 L vs. 5 L).</li>
        <li>Die App gibt sowohl die Menge in m² als auch die aufgerundete Packungszahl aus.</li>
      </ol>
      <p>
        Exportiere die Schätzung als Teil des Raum-PDFs und nimm sie mit in den
        Baumarkt. Das PDF dient gleichzeitig als Einkaufsliste.
      </p>

      <h2>Die Materialien bepreisen</h2>
      <p>
        Mit deinen Mengen in der Hand vergleichst du bei 2-3 Händlern die
        Einzelpreise. Für jeden:
      </p>
      <ul>
        <li>Einzelpreis × benötigte Packungen = Positionskosten</li>
        <li>Lieferung hinzurechnen, falls keine Abholung vor Ort</li>
        <li>Summe für diesen Händler = Vergleichswert</li>
      </ul>
      <p>
        Baumarkt-Preise für identische Produkte schwanken um 30-50% zwischen
        IKEA, Home Depot/Lowe's, Leroy Merlin, B&Q usw. Die 10 Minuten
        Preisvergleich mit gemessenen Zahlen sparen meist 50-200 € bei einer
        Renovierung von Küchengröße.
      </p>

      <h2>Häufige Fehler</h2>
      <ul>
        <li><strong>Den Verschnittfaktor vergessen.</strong> Genau die Raumfläche zu kaufen ist Grund Nr. 1 für eine zweite Materialfahrt.</li>
        <li><strong>Falsche Einheitenumrechnung.</strong> USA (Gallonen) ↔ EU (Liter), USA (Quadratfuß) ↔ EU (m²). Die App rechnet um; von Hand schleichen sich Fehler ein.</li>
        <li><strong>Unterschiedliche Chargen.</strong> Fliesen und Farbe aus verschiedenen Produktionschargen können sich leicht unterscheiden. Kaufe lieber etwas mehr aus einer Charge, als später nachzukaufen.</li>
        <li><strong>Unbrauchbare Flächen mitrechnen.</strong> Fliese nicht unter der Kücheninsel, wenn sie fest verbaut ist. Streiche nicht hinter Einbauschränken.</li>
      </ul>

      <h2>Fazit</h2>
      <p>
        Den Raum auszumessen ist der einfache Teil. Das Umrechnen von m² in
        „wie viele Kartons" ist der Punkt, an dem die meisten DIY-Budgets
        platzen. Mit einem gemessenen Grundriss in Ruler AR plus dem
        integrierten Materialrechner bekommst du Mengen pro Material in 30
        Sekunden – genau genug, um sicher einzukaufen, ohne doppelt zu kaufen.
      </p>
    </article>
  );
}

export function PostFR() {
  return (
    <article className="prose-content">
      <p className="lead">
        Savoir qu'une pièce fait 18 m² ne vous dit pas combien de boîtes de
        carrelage acheter. Les fabricants conditionnent les matériaux dans des
        unités peu pratiques (carreaux rectangulaires en m², peinture en
        litres, papier peint en rouleaux de 2,6 m × 0,5 m), et chaque matériau
        a un taux de perte qui varie selon la complexité de la forme de votre
        pièce. Voici les calculs, et comment l'application les fait à votre place.
      </p>

      <h2>Étape 1 : Obtenez la bonne mesure de base</h2>
      <p>
        Pour chaque matériau, il vous faut un chiffre de départ différent :
      </p>
      <table>
        <thead>
          <tr><th>Matériau</th><th>Ce qu'il faut mesurer</th></tr>
        </thead>
        <tbody>
          <tr><td>Carrelage de sol / stratifié / vinyle</td><td>Surface au sol (m²)</td></tr>
          <tr><td>Carrelage mural</td><td>Surface murale carrelée moins les équipements (m²)</td></tr>
          <tr><td>Peinture (murs)</td><td>Surface murale moins les ouvertures portes + fenêtres (m²)</td></tr>
          <tr><td>Peinture (plafond)</td><td>Surface du plafond = surface au sol (m²)</td></tr>
          <tr><td>Papier peint</td><td>Surface murale moins les ouvertures (m²)</td></tr>
          <tr><td>Plinthe</td><td>Périmètre du sol moins la largeur des portes (m)</td></tr>
          <tr><td>Corniche</td><td>Périmètre du plafond (m)</td></tr>
        </tbody>
      </table>
      <p>
        Le scan de pièce de Ruler AR vous donne automatiquement la surface au
        sol et le périmètre du sol. La surface murale demande un petit calcul :
        périmètre des murs × hauteur sous plafond − somme des surfaces de portes
        − somme des surfaces de fenêtres. Le calculateur de matériaux de
        l'application le fait pour vous.
      </p>

      <h2>Étape 2 : Appliquez le bon taux de perte</h2>
      <p>
        La « perte » est le matériau que vous allez couper, faire tomber, mal
        raccorder ou qui présentera des défauts. Ajoutez ce pourcentage à votre
        quantité de base :
      </p>
      <table>
        <thead>
          <tr><th>Scénario</th><th>Taux de perte</th></tr>
        </thead>
        <tbody>
          <tr><td>Pièce carrée, carreau grand format (60×60 cm)</td><td>+10%</td></tr>
          <tr><td>Carreau standard (30×30 cm)</td><td>+10-15%</td></tr>
          <tr><td>Petit carreau / mosaïque</td><td>+15-20%</td></tr>
          <tr><td>Pose en diagonale</td><td>+15%</td></tr>
          <tr><td>Chevrons / point de Hongrie</td><td>+20%</td></tr>
          <tr><td>Stratifié / lame vinyle</td><td>+10% (pose droite)</td></tr>
          <tr><td>Moquette</td><td>+10-15% (selon la largeur du rouleau vs la pièce)</td></tr>
          <tr><td>Papier peint avec raccord de motif</td><td>+15-20%</td></tr>
          <tr><td>Peinture unie</td><td>+5-10% (retouches, deuxième couche)</td></tr>
        </tbody>
      </table>
      <p>
        Ajoutez 5% de plus pour les pièces de forme irrégulière (alcôves,
        colonnes, plan non rectangulaire) : elles génèrent davantage de coupes.
      </p>

      <h2>Étape 3 : Convertissez dans les unités du fabricant</h2>
      <p>
        Les fabricants ne vendent pas en m². Ils vendent en boîtes, en pots, en
        rouleaux. Convertissez :
      </p>
      <h3>Carrelage</h3>
      <p>
        (Surface au sol × (1 + taux de perte)) ÷ taille du carreau = carreaux
        nécessaires → arrondir au nombre entier de boîtes.
        <br />
        Exemple : 18 m² de sol + 10% = 19,8 m². Taille de carreau 60×60 cm =
        0,36 m². 19,8 ÷ 0,36 = 55 carreaux. Boîte de 6 = 10 boîtes (arrondi
        depuis 9,17).
      </p>
      <h3>Stratifié / lame vinyle</h3>
      <p>
        Comme pour le carrelage, sauf que les boîtes indiquent généralement la
        couverture en m². Sol 18 m² + 10% = 19,8 m². La boîte couvre 2,4 m². Il
        faut 9 boîtes.
      </p>
      <h3>Peinture (murs)</h3>
      <p>
        Surface murale × nombre de couches ÷ rendement = litres nécessaires.
        <br />
        Rendement typique : 10 m² par litre pour une couche. Deux couches sont
        la norme pour une peinture neuve.
        <br />
        Exemple : 50 m² de murs × 2 couches ÷ 10 m²/L = 10 L. Vendue en pots de
        5 L → 2 pots.
      </p>
      <h3>Papier peint</h3>
      <p>
        Surface murale ÷ couverture du rouleau + 10-20% pour le raccord de
        motif. Rouleau standard = 5 m² de couverture (10,05 m × 0,53 m). Les
        rouleaux à raccord nécessitent une longueur supplémentaire pour
        l'ajustement.
        <br />
        Exemple : 30 m² de murs + 15% de motif = 34,5 m² ÷ 5 m²/rouleau = 7
        rouleaux (arrondi depuis 6,9).
      </p>

      <h2>Le calculateur de matériaux dans l'application</h2>
      <p>
        Une fois que vous avez un projet de pièce enregistré dans Ruler AR, le
        calculateur de matériaux fait tout ce qui précède automatiquement :
      </p>
      <ol>
        <li>Ouvrez le projet de pièce enregistré.</li>
        <li>Touchez le calculateur de matériaux.</li>
        <li>Choisissez un matériau : peinture, carrelage de sol, papier peint, etc.</li>
        <li>Ajustez le taux de perte si votre pièce est atypique.</li>
        <li>Choisissez une taille d'unité (par ex. carreau 30×30 vs 60×60, pot de peinture 1 L vs 5 L).</li>
        <li>L'application affiche à la fois la quantité en m² et le nombre de paquets arrondi à l'unité supérieure.</li>
      </ol>
      <p>
        Exportez l'estimation dans le PDF de la pièce et apportez-la au magasin
        de bricolage. Le PDF sert aussi de liste de courses.
      </p>

      <h2>Chiffrer les matériaux</h2>
      <p>
        Vos quantités en main, comparez les prix unitaires chez 2-3 enseignes.
        Pour chacune :
      </p>
      <ul>
        <li>Multipliez le prix unitaire × le nombre de paquets nécessaires = coût de la ligne</li>
        <li>Ajoutez la livraison si ce n'est pas du retrait sur place</li>
        <li>Total pour cette enseigne = chiffre de comparaison</li>
      </ul>
      <p>
        Les prix de détail varient de 30-50% sur des produits identiques entre
        IKEA, Home Depot/Lowe's, Leroy Merlin, B&Q, etc. Les 10 minutes de
        comparaison avec des chiffres mesurés font généralement économiser
        50-200 € sur une rénovation de la taille d'une cuisine.
      </p>

      <h2>Erreurs courantes</h2>
      <ul>
        <li><strong>Oublier le taux de perte.</strong> Acheter exactement la surface de la pièce est la raison n° 1 d'un second réapprovisionnement.</li>
        <li><strong>Mauvaise conversion d'unités.</strong> USA (gallons) ↔ UE (litres), USA (pieds carrés) ↔ UE (m²). L'application convertit ; le faire à la main introduit des erreurs.</li>
        <li><strong>Lots de teinte différents.</strong> Le carrelage et la peinture de lots de production différents peuvent légèrement différer. Achetez un peu plus que nécessaire dans un même lot plutôt que de revenir en chercher plus tard.</li>
        <li><strong>Inclure des surfaces inutilisables.</strong> Ne carrelez pas sous l'îlot de cuisine s'il est permanent. Ne peignez pas derrière les armoires encastrées.</li>
      </ul>

      <h2>En résumé</h2>
      <p>
        Mesurer la pièce est la partie facile. Convertir les m² en « combien de
        boîtes » est là où la plupart des budgets bricolage dérapent. Avec un
        plan mesuré dans Ruler AR et le calculateur de matériaux intégré, vous
        obtenez les quantités par matériau en 30 secondes, assez précises pour
        acheter en confiance sans acheter deux fois.
      </p>
    </article>
  );
}

export function PostES() {
  return (
    <article className="prose-content">
      <p className="lead">
        Saber que una habitación tiene 18 m² no te dice cuántas cajas de
        azulejos comprar. Los fabricantes envasan los materiales en unidades
        poco prácticas (azulejos rectangulares en m², pintura en litros, papel
        pintado en rollos de 2,6 m × 0,5 m), y cada material tiene un factor de
        desperdicio que varía según lo complicada que sea la forma de tu
        habitación. Aquí tienes las cuentas, y cómo la app las hace por ti.
      </p>

      <h2>Paso 1: Consigue la medida base correcta</h2>
      <p>
        Para cada material necesitas un número de partida diferente:
      </p>
      <table>
        <thead>
          <tr><th>Material</th><th>Qué medir</th></tr>
        </thead>
        <tbody>
          <tr><td>Azulejo de suelo / laminado / vinilo</td><td>Superficie del suelo (m²)</td></tr>
          <tr><td>Azulejo de pared</td><td>Superficie de pared alicatada menos los sanitarios (m²)</td></tr>
          <tr><td>Pintura (paredes)</td><td>Superficie de pared menos huecos de puertas + ventanas (m²)</td></tr>
          <tr><td>Pintura (techo)</td><td>Superficie del techo = superficie del suelo (m²)</td></tr>
          <tr><td>Papel pintado</td><td>Superficie de pared menos huecos (m²)</td></tr>
          <tr><td>Rodapié / zócalo</td><td>Perímetro del suelo menos el ancho de las puertas (m)</td></tr>
          <tr><td>Moldura de techo</td><td>Perímetro del techo (m)</td></tr>
        </tbody>
      </table>
      <p>
        El escaneo de habitaciones de Ruler AR te da la superficie y el
        perímetro del suelo automáticamente. La superficie de pared requiere un
        pequeño cálculo: perímetro de pared × altura del techo − suma de las
        superficies de puertas − suma de las superficies de ventanas. El
        calculador de materiales de la app lo hace por ti.
      </p>

      <h2>Paso 2: Aplica el factor de desperdicio correcto</h2>
      <p>
        El «desperdicio» es el material que vas a cortar, dejar caer, no encajar
        o que tendrá defectos. Suma este porcentaje a tu cantidad base:
      </p>
      <table>
        <thead>
          <tr><th>Escenario</th><th>Factor de desperdicio</th></tr>
        </thead>
        <tbody>
          <tr><td>Habitación cuadrada, azulejo de gran formato (60×60 cm)</td><td>+10%</td></tr>
          <tr><td>Azulejo estándar (30×30 cm)</td><td>+10-15%</td></tr>
          <tr><td>Azulejo pequeño / mosaico</td><td>+15-20%</td></tr>
          <tr><td>Colocación en diagonal</td><td>+15%</td></tr>
          <tr><td>Espiga / chevron</td><td>+20%</td></tr>
          <tr><td>Laminado / lama vinílica</td><td>+10% (colocación recta)</td></tr>
          <tr><td>Moqueta</td><td>+10-15% (depende del ancho del rollo frente a la habitación)</td></tr>
          <tr><td>Papel pintado con repetición de motivo</td><td>+15-20%</td></tr>
          <tr><td>Pintura de color liso</td><td>+5-10% (retoques, segunda mano)</td></tr>
        </tbody>
      </table>
      <p>
        Añade otro 5% para habitaciones de forma irregular (hornacinas,
        columnas, planta no rectangular): generan más cortes.
      </p>

      <h2>Paso 3: Convierte a las unidades del fabricante</h2>
      <p>
        Los fabricantes no venden en m². Venden en cajas, botes, rollos.
        Convierte:
      </p>
      <h3>Azulejo</h3>
      <p>
        (Superficie del suelo × (1 + factor de desperdicio)) ÷ tamaño del
        azulejo = azulejos necesarios → redondea al alza a cajas enteras.
        <br />
        Ejemplo: 18 m² de suelo + 10% = 19,8 m². Tamaño de azulejo 60×60 cm =
        0,36 m². 19,8 ÷ 0,36 = 55 azulejos. Caja de 6 = 10 cajas (redondeado
        al alza desde 9,17).
      </p>
      <h3>Laminado / lama vinílica</h3>
      <p>
        Igual que el azulejo, salvo que las cajas suelen indicar la cobertura
        en m². Suelo 18 m² + 10% = 19,8 m². La caja cubre 2,4 m². Necesitas 9
        cajas.
      </p>
      <h3>Pintura (paredes)</h3>
      <p>
        Superficie de pared × número de manos ÷ rendimiento = litros necesarios.
        <br />
        Rendimiento típico: 10 m² por litro para una mano. Dos manos es lo
        estándar para una pintura nueva.
        <br />
        Ejemplo: 50 m² de pared × 2 manos ÷ 10 m²/L = 10 L. Se vende en botes de
        5 L → 2 botes.
      </p>
      <h3>Papel pintado</h3>
      <p>
        Superficie de pared ÷ cobertura del rollo + 10-20% para casar el motivo.
        Rollo estándar = 5 m² de cobertura (10,05 m × 0,53 m). Los rollos con
        repetición de motivo necesitan longitud adicional para casarlos.
        <br />
        Ejemplo: 30 m² de pared + 15% de motivo = 34,5 m² ÷ 5 m²/rollo = 7
        rollos (redondeado al alza desde 6,9).
      </p>

      <h2>El calculador de materiales dentro de la app</h2>
      <p>
        Una vez que tienes un proyecto de habitación guardado en Ruler AR, el
        calculador de materiales hace todo lo anterior automáticamente:
      </p>
      <ol>
        <li>Abre el proyecto de habitación guardado.</li>
        <li>Toca el calculador de materiales.</li>
        <li>Elige un material: pintura, azulejo de suelo, papel pintado, etc.</li>
        <li>Ajusta el factor de desperdicio si tu habitación no es estándar.</li>
        <li>Elige un tamaño de unidad (p. ej. azulejo 30×30 vs 60×60, bote de pintura 1 L vs 5 L).</li>
        <li>La app muestra tanto la cantidad en m² como el número de paquetes redondeado al alza.</li>
      </ol>
      <p>
        Exporta la estimación como parte del PDF de la habitación y llévala a la
        tienda de bricolaje. El PDF también te sirve de lista de la compra.
      </p>

      <h2>Poner precio a los materiales</h2>
      <p>
        Con tus cantidades en mano, consulta los precios unitarios en 2-3
        tiendas. Para cada una:
      </p>
      <ul>
        <li>Multiplica precio unitario × paquetes necesarios = coste de la línea</li>
        <li>Añade el envío si no es recogida en tienda</li>
        <li>Total de esa tienda = número de comparación</li>
      </ul>
      <p>
        Los precios de venta varían un 30-50% en productos idénticos entre
        IKEA, Home Depot/Lowe's, Leroy Merlin, B&Q, etc. Esos 10 minutos de
        comparar precios con números medidos suelen ahorrar 50-200 € en una
        reforma del tamaño de una cocina.
      </p>

      <h2>Errores comunes</h2>
      <ul>
        <li><strong>Olvidar el factor de desperdicio.</strong> Comprar exactamente la superficie de la habitación es la causa n.º 1 de un segundo viaje a por material.</li>
        <li><strong>Conversión de unidades incorrecta.</strong> EE. UU. (galones) ↔ UE (litros), EE. UU. (pies cuadrados) ↔ UE (m²). La app convierte; hacerlo a mano introduce errores.</li>
        <li><strong>Lotes de tinte distintos.</strong> El azulejo y la pintura de distintos lotes de producción pueden verse sutilmente diferentes. Compra algo más de lo necesario de un mismo lote en lugar de volver a por más después.</li>
        <li><strong>Incluir zonas inutilizables.</strong> No alicates bajo la isla de cocina si es fija. No pintes detrás de los armarios empotrados.</li>
      </ul>

      <h2>Conclusión</h2>
      <p>
        Medir la habitación es la parte fácil. Convertir los m² en «cuántas
        cajas» es donde se descontrola la mayoría de los presupuestos de
        bricolaje. Con un plano medido en Ruler AR más el calculador de
        materiales integrado, obtienes las cantidades por material en 30
        segundos, lo bastante precisas para comprar con confianza sin comprar
        dos veces.
      </p>
    </article>
  );
}

export function PostJA() {
  return (
    <article className="prose-content">
      <p className="lead">
        部屋が 18 m² だと分かっても、タイルを何箱買えばいいかは分かりません。
        メーカーは材料を扱いにくい単位で梱包しており（長方形タイルは m²、
        塗料はリットル、壁紙は 2.6 m × 0.5 m のロール）、しかも材料ごとに
        ロス率があり、部屋の形が複雑なほど大きくなります。ここではその計算と、
        アプリがどう自動で行うかを解説します。
      </p>

      <h2>ステップ1：正しい基準の数値を求める</h2>
      <p>
        材料ごとに、出発点となる数値が異なります。
      </p>
      <table>
        <thead>
          <tr><th>材料</th><th>測るもの</th></tr>
        </thead>
        <tbody>
          <tr><td>床タイル／ラミネート／ビニル</td><td>床面積（m²）</td></tr>
          <tr><td>壁タイル</td><td>設備を除いたタイル張り壁面積（m²）</td></tr>
          <tr><td>塗料（壁）</td><td>ドア・窓の開口を除いた壁面積（m²）</td></tr>
          <tr><td>塗料（天井）</td><td>天井面積 = 床面積（m²）</td></tr>
          <tr><td>壁紙</td><td>開口を除いた壁面積（m²）</td></tr>
          <tr><td>巾木</td><td>ドア幅を除いた床の周囲長（m）</td></tr>
          <tr><td>廻り縁</td><td>天井の周囲長（m）</td></tr>
        </tbody>
      </table>
      <p>
        Ruler AR の部屋スキャンは、床面積と床の周囲長を自動で算出します。壁面積
        には少し計算が必要です：壁の周囲長 × 天井高 − ドア面積の合計 − 窓面積の
        合計。アプリの材料計算機がこれを代わりに行います。
      </p>

      <h2>ステップ2：正しいロス率を適用する</h2>
      <p>
        「ロス」とは、切り落とし・落下・柄の不一致・不良によって失われる材料です。
        基準数量にこの割合を加算します。
      </p>
      <table>
        <thead>
          <tr><th>状況</th><th>ロス率</th></tr>
        </thead>
        <tbody>
          <tr><td>正方形の部屋、大判タイル（60×60 cm）</td><td>+10%</td></tr>
          <tr><td>標準タイル（30×30 cm）</td><td>+10-15%</td></tr>
          <tr><td>小型タイル／モザイク</td><td>+15-20%</td></tr>
          <tr><td>斜め張り</td><td>+15%</td></tr>
          <tr><td>ヘリンボーン／シェブロン</td><td>+20%</td></tr>
          <tr><td>ラミネート／ビニル床材</td><td>+10%（直線張り）</td></tr>
          <tr><td>カーペット</td><td>+10-15%（ロール幅と部屋の関係による）</td></tr>
          <tr><td>柄リピートのある壁紙</td><td>+15-20%</td></tr>
          <tr><td>単色塗料</td><td>+5-10%（補修、2度塗り）</td></tr>
        </tbody>
      </table>
      <p>
        変形した部屋（アルコーブ、柱、長方形でない平面）にはさらに 5% を加えてください。
        カットが増えるためです。
      </p>

      <h2>ステップ3：メーカーの単位に換算する</h2>
      <p>
        メーカーは m² では売りません。箱、缶、ロールで売ります。換算しましょう：
      </p>
      <h3>タイル</h3>
      <p>
        （床面積 × (1 + ロス率)）÷ タイル寸法 = 必要なタイル枚数 → 箱単位に切り上げ。
        <br />
        例：床 18 m² + 10% = 19.8 m²。タイル寸法 60×60 cm = 0.36 m²。
        19.8 ÷ 0.36 = 55 枚。1箱6枚 = 10 箱（9.17 から切り上げ）。
      </p>
      <h3>ラミネート／ビニル床材</h3>
      <p>
        タイルと同じですが、箱には通常 m² 単位でカバー面積が記載されています。
        床 18 m² + 10% = 19.8 m²。1箱で 2.4 m² をカバー。9 箱必要です。
      </p>
      <h3>塗料（壁）</h3>
      <p>
        壁面積 × 塗り回数 ÷ 塗布効率 = 必要リットル数。
        <br />
        標準的な塗布効率：1回塗りで 1リットルあたり 10 m²。新規塗装では2度塗りが標準です。
        <br />
        例：壁面積 50 m² × 2回塗り ÷ 10 m²/L = 10 L。5 L 缶で販売 → 2 缶。
      </p>
      <h3>壁紙</h3>
      <p>
        壁面積 ÷ ロールのカバー面積 + 柄合わせ分 10-20%。標準ロール = 5 m²
        カバー（10.05 m × 0.53 m）。柄リピートのあるロールは、柄合わせのため
        追加の長さが必要です。
        <br />
        例：壁面積 30 m² + 柄 15% = 34.5 m² ÷ 5 m²/ロール = 7 ロール
        （6.9 から切り上げ）。
      </p>

      <h2>アプリ内蔵の材料計算機</h2>
      <p>
        Ruler AR に保存した部屋プロジェクトがあれば、材料計算機が上記のすべてを
        自動で行います。
      </p>
      <ol>
        <li>保存した部屋プロジェクトを開く。</li>
        <li>材料計算機をタップする。</li>
        <li>材料を選ぶ：塗料、床タイル、壁紙など。</li>
        <li>部屋が標準的でない場合はロス率を調整する。</li>
        <li>単位寸法を選ぶ（例：タイル 30×30 か 60×60、塗料缶 1 L か 5 L）。</li>
        <li>アプリが m² 単位の数量と、切り上げたパッケージ数の両方を出力する。</li>
      </ol>
      <p>
        見積もりを部屋の PDF として書き出し、ホームセンターへ持って行きましょう。
        この PDF は買い物リストも兼ねます。
      </p>

      <h2>材料の費用を見積もる</h2>
      <p>
        数量が手元にあれば、2-3 店舗で単価を比較しましょう。各店舗について：
      </p>
      <ul>
        <li>単価 × 必要パッケージ数 = 品目費用</li>
        <li>店頭受け取りでなければ配送料を加える</li>
        <li>その店舗の合計 = 比較用の数字</li>
      </ul>
      <p>
        同一商品でも小売価格は IKEA、Home Depot/Lowe's、Leroy Merlin、B&Q
        などの間で 30-50% 違います。実測値を使って 10 分比較するだけで、キッチン
        規模の改装なら通常 50-200 ユーロ節約できます。
      </p>

      <h2>よくある失敗</h2>
      <ul>
        <li><strong>ロス率を忘れる。</strong> 部屋の面積ちょうどだけ買うのが、買い足しに走る最大の原因です。</li>
        <li><strong>単位換算の誤り。</strong> 米国（ガロン）↔ 欧州（リットル）、米国（平方フィート）↔ 欧州（m²）。アプリが換算します。手計算ではミスが入り込みます。</li>
        <li><strong>ロット違い。</strong> 生産ロットが異なるタイルや塗料は、微妙に色味が違うことがあります。後から買い足すより、同一ロットから必要量より少し多めに買いましょう。</li>
        <li><strong>使えない部分を含める。</strong> 固定式のキッチンアイランドの下にタイルは張らない。作り付けのクローゼットの裏は塗らない。</li>
      </ul>

      <h2>まとめ</h2>
      <p>
        部屋を測るのは簡単な部分です。m² を「何箱」に換算するところで、DIY 予算の
        大半が崩れます。Ruler AR で実測した間取り図と、アプリ内の材料計算機があれば、
        材料ごとの数量が 30 秒で手に入ります。二度買いせず、自信を持って買い物
        できるだけの精度です。
      </p>
    </article>
  );
}

export function PostKO() {
  return (
    <article className="prose-content">
      <p className="lead">
        방이 18 m²라는 사실만으로는 타일을 몇 박스 사야 할지 알 수 없습니다.
        제조사는 자재를 불편한 단위로 포장하며(직사각형 타일은 m², 페인트는
        리터, 벽지는 2.6 m × 0.5 m 롤), 모든 자재에는 방의 형태가 복잡할수록
        커지는 손실률이 있습니다. 그 계산법과, 앱이 이를 어떻게 대신 처리하는지
        알아봅니다.
      </p>

      <h2>1단계: 올바른 기준 측정값 구하기</h2>
      <p>
        자재마다 출발점이 되는 숫자가 다릅니다:
      </p>
      <table>
        <thead>
          <tr><th>자재</th><th>측정 대상</th></tr>
        </thead>
        <tbody>
          <tr><td>바닥 타일 / 라미네이트 / 비닐</td><td>바닥 면적 (m²)</td></tr>
          <tr><td>벽 타일</td><td>설비를 제외한 타일 시공 벽 면적 (m²)</td></tr>
          <tr><td>페인트 (벽)</td><td>문 + 창 개구부를 제외한 벽 면적 (m²)</td></tr>
          <tr><td>페인트 (천장)</td><td>천장 면적 = 바닥 면적 (m²)</td></tr>
          <tr><td>벽지</td><td>개구부를 제외한 벽 면적 (m²)</td></tr>
          <tr><td>걸레받이</td><td>문 폭을 제외한 바닥 둘레 (m)</td></tr>
          <tr><td>천장 몰딩</td><td>천장 둘레 (m)</td></tr>
        </tbody>
      </table>
      <p>
        Ruler AR의 방 스캔은 바닥 면적과 바닥 둘레를 자동으로 산출합니다. 벽
        면적은 약간의 계산이 필요합니다: 벽 둘레 × 천장 높이 − 문 면적 합계 −
        창 면적 합계. 앱의 자재 계산기가 이를 대신 처리합니다.
      </p>

      <h2>2단계: 올바른 손실률 적용하기</h2>
      <p>
        '손실'은 잘라내거나 떨어뜨리거나 맞물리지 않거나 불량이 나는 자재입니다.
        기준 수량에 이 비율을 더하세요:
      </p>
      <table>
        <thead>
          <tr><th>상황</th><th>손실률</th></tr>
        </thead>
        <tbody>
          <tr><td>정사각형 방, 대형 타일 (60×60 cm)</td><td>+10%</td></tr>
          <tr><td>표준 타일 (30×30 cm)</td><td>+10-15%</td></tr>
          <tr><td>소형 타일 / 모자이크</td><td>+15-20%</td></tr>
          <tr><td>대각선 시공</td><td>+15%</td></tr>
          <tr><td>헤링본 / 셰브런</td><td>+20%</td></tr>
          <tr><td>라미네이트 / 비닐 플랭크</td><td>+10% (직선 시공)</td></tr>
          <tr><td>카펫</td><td>+10-15% (롤 폭과 방 크기에 따라 다름)</td></tr>
          <tr><td>무늬 반복이 있는 벽지</td><td>+15-20%</td></tr>
          <tr><td>단색 페인트</td><td>+5-10% (보수, 두 번째 도장)</td></tr>
        </tbody>
      </table>
      <p>
        불규칙한 형태의 방(벽감, 기둥, 직사각형이 아닌 평면)에는 5%를 추가하세요.
        절단이 더 많이 발생합니다.
      </p>

      <h2>3단계: 제조사 단위로 환산하기</h2>
      <p>
        제조사는 m²로 팔지 않습니다. 박스, 통, 롤로 팝니다. 환산해 보세요:
      </p>
      <h3>타일</h3>
      <p>
        (바닥 면적 × (1 + 손실률)) ÷ 타일 크기 = 필요한 타일 수 → 박스 단위로
        올림.
        <br />
        예: 바닥 18 m² + 10% = 19.8 m². 타일 크기 60×60 cm = 0.36 m².
        19.8 ÷ 0.36 = 55장. 박스당 6장 = 10박스 (9.17에서 올림).
      </p>
      <h3>라미네이트 / 비닐 플랭크</h3>
      <p>
        타일과 동일하지만, 박스에는 보통 m² 단위의 시공 면적이 표시되어 있습니다.
        바닥 18 m² + 10% = 19.8 m². 박스당 2.4 m² 시공. 9박스 필요.
      </p>
      <h3>페인트 (벽)</h3>
      <p>
        벽 면적 × 도장 횟수 ÷ 도포율 = 필요한 리터 수.
        <br />
        일반적인 도포율: 1회 도장 시 리터당 10 m². 새로 칠할 때는 2회 도장이
        표준입니다.
        <br />
        예: 벽 면적 50 m² × 2회 도장 ÷ 10 m²/L = 10 L. 5 L 통으로 판매 → 2통.
      </p>
      <h3>벽지</h3>
      <p>
        벽 면적 ÷ 롤 시공 면적 + 무늬 맞춤용 10-20%. 표준 롤 = 5 m² 시공
        (10.05 m × 0.53 m). 무늬 반복이 있는 롤은 맞춤을 위해 추가 길이가
        필요합니다.
        <br />
        예: 벽 면적 30 m² + 무늬 15% = 34.5 m² ÷ 5 m²/롤 = 7롤
        (6.9에서 올림).
      </p>

      <h2>앱 내장 자재 계산기</h2>
      <p>
        Ruler AR에 저장된 방 프로젝트가 있으면, 자재 계산기가 위 모든 것을
        자동으로 처리합니다:
      </p>
      <ol>
        <li>저장된 방 프로젝트를 엽니다.</li>
        <li>자재 계산기를 탭합니다.</li>
        <li>자재를 선택합니다: 페인트, 바닥 타일, 벽지 등.</li>
        <li>방이 비표준이면 손실률을 조정합니다.</li>
        <li>단위 크기를 선택합니다 (예: 타일 30×30 vs 60×60, 페인트 통 1 L vs 5 L).</li>
        <li>앱이 m² 단위 수량과 올림 처리된 포장 개수를 모두 출력합니다.</li>
      </ol>
      <p>
        견적을 방의 PDF에 포함해 내보내고 철물점에 가져가세요. 이 PDF는 쇼핑
        목록 역할도 합니다.
      </p>

      <h2>자재 가격 산정하기</h2>
      <p>
        수량을 손에 쥐고 2-3개 매장의 단가를 비교하세요. 매장마다:
      </p>
      <ul>
        <li>단가 × 필요한 포장 수 = 품목 비용</li>
        <li>현장 수령이 아니면 배송비를 더함</li>
        <li>해당 매장의 합계 = 비교 수치</li>
      </ul>
      <p>
        동일 제품이라도 소매가는 IKEA, Home Depot/Lowe's, Leroy Merlin, B&Q
        등에서 30-50% 차이가 납니다. 실측값으로 10분 비교 쇼핑하면 주방 규모
        리모델링에서 보통 50-200유로를 절약합니다.
      </p>

      <h2>흔한 실수</h2>
      <ul>
        <li><strong>손실률을 잊는 것.</strong> 방 면적만큼만 정확히 사는 것이 두 번째 자재 구매를 부르는 1순위 원인입니다.</li>
        <li><strong>잘못된 단위 환산.</strong> 미국(갤런) ↔ 유럽(리터), 미국(제곱피트) ↔ 유럽(m²). 앱이 환산해 줍니다. 손으로 하면 오류가 들어갑니다.</li>
        <li><strong>다른 염료 로트.</strong> 생산 로트가 다른 타일과 페인트는 미묘하게 달라 보일 수 있습니다. 나중에 더 사러 가기보다 같은 로트에서 필요량보다 조금 더 사세요.</li>
        <li><strong>사용 불가 영역 포함.</strong> 고정식 주방 아일랜드 아래에는 타일을 깔지 마세요. 붙박이장 뒤는 칠하지 마세요.</li>
      </ul>

      <h2>결론</h2>
      <p>
        방을 재는 것은 쉬운 부분입니다. m²를 '몇 박스'로 환산하는 단계에서 대부분의
        DIY 예산이 무너집니다. Ruler AR로 실측한 평면도와 앱 내장 자재 계산기가
        있으면, 자재별 수량을 30초 만에 얻을 수 있습니다. 두 번 사지 않고
        자신 있게 쇼핑할 만큼 정확합니다.
      </p>
    </article>
  );
}

export function PostZH() {
  return (
    <article className="prose-content">
      <p className="lead">
        知道一个房间是 18 m² 并不能告诉你该买多少箱瓷砖。厂商以不方便的单位
        包装材料（矩形瓷砖按 m²、桶装油漆按升、壁纸按 2.6 m × 0.5 m 的卷），
        而且每种材料都有损耗系数，房间形状越复杂，损耗越大。下面是计算方法，
        以及这款 App 如何替你完成。
      </p>

      <h2>第 1 步：得到正确的基础测量值</h2>
      <p>
        每种材料需要的起始数字都不一样：
      </p>
      <table>
        <thead>
          <tr><th>材料</th><th>测量什么</th></tr>
        </thead>
        <tbody>
          <tr><td>地砖／强化地板／乙烯基</td><td>地面面积（m²）</td></tr>
          <tr><td>墙砖</td><td>贴砖墙面面积减去固定设施（m²）</td></tr>
          <tr><td>油漆（墙面）</td><td>墙面面积减去门窗开口（m²）</td></tr>
          <tr><td>油漆（天花板）</td><td>天花板面积 = 地面面积（m²）</td></tr>
          <tr><td>壁纸</td><td>墙面面积减去开口（m²）</td></tr>
          <tr><td>踢脚线</td><td>地面周长减去门宽（m）</td></tr>
          <tr><td>顶角线</td><td>天花板周长（m）</td></tr>
        </tbody>
      </table>
      <p>
        Ruler AR 的房间扫描会自动给出地面面积和地面周长。墙面面积需要一点小
        计算：墙体周长 × 层高 − 门面积之和 − 窗面积之和。App 里的材料计算器
        会替你完成这一步。
      </p>

      <h2>第 2 步：套用正确的损耗系数</h2>
      <p>
        “损耗”是指你会切掉、摔坏、对不上花纹或出现瑕疵的材料。把这个百分比
        加到基础数量上：
      </p>
      <table>
        <thead>
          <tr><th>场景</th><th>损耗系数</th></tr>
        </thead>
        <tbody>
          <tr><td>方形房间，大尺寸瓷砖（60×60 cm）</td><td>+10%</td></tr>
          <tr><td>标准瓷砖（30×30 cm）</td><td>+10-15%</td></tr>
          <tr><td>小尺寸瓷砖／马赛克</td><td>+15-20%</td></tr>
          <tr><td>斜铺</td><td>+15%</td></tr>
          <tr><td>人字拼／鱼骨拼</td><td>+20%</td></tr>
          <tr><td>强化地板／乙烯基地板</td><td>+10%（直铺）</td></tr>
          <tr><td>地毯</td><td>+10-15%（取决于卷材宽度与房间的关系）</td></tr>
          <tr><td>带花纹循环的壁纸</td><td>+15-20%</td></tr>
          <tr><td>纯色油漆</td><td>+5-10%（补色、第二遍）</td></tr>
        </tbody>
      </table>
      <p>
        对于形状不规则的房间（壁龛、柱子、非矩形轮廓）再加 5%，它们会产生更多
        切割。
      </p>

      <h2>第 3 步：换算成厂商单位</h2>
      <p>
        厂商不按 m² 卖。他们按箱、按桶、按卷卖。换算一下：
      </p>
      <h3>瓷砖</h3>
      <p>
        （地面面积 × (1 + 损耗系数)）÷ 瓷砖尺寸 = 所需瓷砖数 → 向上取整到整箱。
        <br />
        示例：地面 18 m² + 10% = 19.8 m²。瓷砖尺寸 60×60 cm = 0.36 m²。
        19.8 ÷ 0.36 = 55 片。每箱 6 片 = 10 箱（从 9.17 向上取整）。
      </p>
      <h3>强化地板／乙烯基地板</h3>
      <p>
        和瓷砖一样，只是箱子上通常标注的是以 m² 计的覆盖面积。地面 18 m² + 10%
        = 19.8 m²。每箱覆盖 2.4 m²。需要 9 箱。
      </p>
      <h3>油漆（墙面）</h3>
      <p>
        墙面面积 × 涂刷遍数 ÷ 涂布率 = 所需升数。
        <br />
        典型涂布率：单遍每升 10 m²。新墙涂刷以两遍为标准。
        <br />
        示例：墙面面积 50 m² × 2 遍 ÷ 10 m²/L = 10 L。按 5 L 桶销售 → 2 桶。
      </p>
      <h3>壁纸</h3>
      <p>
        墙面面积 ÷ 每卷覆盖面积 + 10-20% 对花余量。标准卷 = 5 m² 覆盖
        （10.05 m × 0.53 m）。带花纹循环的卷需要额外长度来对花。
        <br />
        示例：墙面面积 30 m² + 15% 花纹 = 34.5 m² ÷ 5 m²/卷 = 7 卷
        （从 6.9 向上取整）。
      </p>

      <h2>App 内置的材料计算器</h2>
      <p>
        只要你在 Ruler AR 里有一个保存的房间项目，材料计算器就会自动完成上述
        所有计算：
      </p>
      <ol>
        <li>打开保存的房间项目。</li>
        <li>点按“材料计算器”。</li>
        <li>选择一种材料：油漆、地砖、壁纸等。</li>
        <li>如果你的房间不规则，调整损耗系数。</li>
        <li>选择单位规格（例如瓷砖 30×30 与 60×60、油漆桶 1 L 与 5 L）。</li>
        <li>App 同时输出以 m² 计的数量和向上取整后的包装数量。</li>
      </ol>
      <p>
        把这份估算作为房间 PDF 的一部分导出，带去五金/建材店。这份 PDF 同时
        也是你的购物清单。
      </p>

      <h2>给材料估价</h2>
      <p>
        手里有了数量，就去 2-3 家零售商比单价。对每一家：
      </p>
      <ul>
        <li>单价 × 所需包装数 = 该项费用</li>
        <li>如果不是到店自取，再加上配送费</li>
        <li>该零售商的合计 = 用于比较的数字</li>
      </ul>
      <p>
        相同产品的零售价在 IKEA、Home Depot/Lowe's、Leroy Merlin、B&Q 等之间
        相差 30-50%。用实测数字花 10 分钟比价，通常能在厨房规模的装修上省下
        50-200 欧元。
      </p>

      <h2>常见错误</h2>
      <ul>
        <li><strong>忘记损耗系数。</strong> 只按房间面积刚好购买，是二次采购的头号原因。</li>
        <li><strong>单位换算错误。</strong> 美国（加仑）↔ 欧洲（升）、美国（平方英尺）↔ 欧洲（m²）。App 会换算；手动换算容易出错。</li>
        <li><strong>批次色差。</strong> 不同生产批次的瓷砖和油漆可能看起来略有差异。宁可在同一批次里比所需多买一点，也别日后再去补货。</li>
        <li><strong>把不可用区域算进去。</strong> 如果厨房中岛是固定的，就别在它下面贴砖。别在嵌入式衣柜后面刷漆。</li>
      </ul>

      <h2>结论</h2>
      <p>
        测量房间是简单的部分。把 m² 换算成“多少箱”才是大多数 DIY 预算崩盘的
        地方。有了 Ruler AR 里实测的平面图，再加上 App 内置的材料计算器，你能
        在 30 秒内得到每种材料的数量，精确到足以放心采购，不必买两次。
      </p>
    </article>
  );
}

export function PostPT() {
  return (
    <article className="prose-content">
      <p className="lead">
        Saber que um cômodo tem 18 m² não diz quantas caixas de azulejo
        comprar. Os fabricantes embalam os materiais em unidades pouco práticas
        (azulejos retangulares em m², tinta em litros, papel de parede em rolos
        de 2,6 m × 0,5 m), e cada material tem um fator de perda que varia
        conforme a complexidade do formato do cômodo. Aqui estão as contas, e
        como o app as faz por você.
      </p>

      <h2>Passo 1: Obtenha a medida-base correta</h2>
      <p>
        Para cada material, você precisa de um número de partida diferente:
      </p>
      <table>
        <thead>
          <tr><th>Material</th><th>O que medir</th></tr>
        </thead>
        <tbody>
          <tr><td>Piso de azulejo / laminado / vinílico</td><td>Área do piso (m²)</td></tr>
          <tr><td>Azulejo de parede</td><td>Área de parede revestida menos as louças (m²)</td></tr>
          <tr><td>Tinta (paredes)</td><td>Área de parede menos vãos de porta + janela (m²)</td></tr>
          <tr><td>Tinta (teto)</td><td>Área do teto = área do piso (m²)</td></tr>
          <tr><td>Papel de parede</td><td>Área de parede menos os vãos (m²)</td></tr>
          <tr><td>Rodapé</td><td>Perímetro do piso menos a largura das portas (m)</td></tr>
          <tr><td>Sanca / moldura de teto</td><td>Perímetro do teto (m)</td></tr>
        </tbody>
      </table>
      <p>
        O escaneamento de cômodos do Ruler AR fornece a área e o perímetro do
        piso automaticamente. A área de parede exige um pequeno cálculo:
        perímetro das paredes × pé-direito − soma das áreas de portas − soma das
        áreas de janelas. A calculadora de materiais do app faz isso por você.
      </p>

      <h2>Passo 2: Aplique o fator de perda correto</h2>
      <p>
        "Perda" é o material que você vai cortar, derrubar, não encaixar ou que
        terá defeitos. Some esse percentual à sua quantidade-base:
      </p>
      <table>
        <thead>
          <tr><th>Cenário</th><th>Fator de perda</th></tr>
        </thead>
        <tbody>
          <tr><td>Cômodo quadrado, azulejo grande formato (60×60 cm)</td><td>+10%</td></tr>
          <tr><td>Azulejo padrão (30×30 cm)</td><td>+10-15%</td></tr>
          <tr><td>Azulejo pequeno / mosaico</td><td>+15-20%</td></tr>
          <tr><td>Assentamento na diagonal</td><td>+15%</td></tr>
          <tr><td>Espinha de peixe / chevron</td><td>+20%</td></tr>
          <tr><td>Laminado / régua vinílica</td><td>+10% (assentamento reto)</td></tr>
          <tr><td>Carpete</td><td>+10-15% (depende da largura do rolo vs cômodo)</td></tr>
          <tr><td>Papel de parede com repetição de padrão</td><td>+15-20%</td></tr>
          <tr><td>Tinta de cor lisa</td><td>+5-10% (retoques, segunda demão)</td></tr>
        </tbody>
      </table>
      <p>
        Some mais 5% para cômodos de formato irregular (nichos, colunas, planta
        não retangular): eles geram mais cortes.
      </p>

      <h2>Passo 3: Converta para as unidades do fabricante</h2>
      <p>
        Os fabricantes não vendem em m². Vendem em caixas, latas, rolos.
        Converta:
      </p>
      <h3>Azulejo</h3>
      <p>
        (Área do piso × (1 + fator de perda)) ÷ tamanho do azulejo = azulejos
        necessários → arredonde para cima até caixas inteiras.
        <br />
        Exemplo: 18 m² de piso + 10% = 19,8 m². Tamanho do azulejo 60×60 cm =
        0,36 m². 19,8 ÷ 0,36 = 55 azulejos. Caixa de 6 = 10 caixas (arredondado
        para cima de 9,17).
      </p>
      <h3>Laminado / régua vinílica</h3>
      <p>
        Igual ao azulejo, só que as caixas costumam indicar a cobertura em m².
        Piso 18 m² + 10% = 19,8 m². A caixa cobre 2,4 m². São necessárias 9
        caixas.
      </p>
      <h3>Tinta (paredes)</h3>
      <p>
        Área de parede × número de demãos ÷ rendimento = litros necessários.
        <br />
        Rendimento típico: 10 m² por litro em uma demão. Duas demãos são o
        padrão para uma pintura nova.
        <br />
        Exemplo: 50 m² de parede × 2 demãos ÷ 10 m²/L = 10 L. Vendida em latas
        de 5 L → 2 latas.
      </p>
      <h3>Papel de parede</h3>
      <p>
        Área de parede ÷ cobertura do rolo + 10-20% para casar o padrão. Rolo
        padrão = 5 m² de cobertura (10,05 m × 0,53 m). Rolos com repetição de
        padrão precisam de comprimento adicional para o encaixe.
        <br />
        Exemplo: 30 m² de parede + 15% de padrão = 34,5 m² ÷ 5 m²/rolo = 7 rolos
        (arredondado para cima de 6,9).
      </p>

      <h2>A calculadora de materiais dentro do app</h2>
      <p>
        Quando você tem um projeto de cômodo salvo no Ruler AR, a calculadora de
        materiais faz tudo isso automaticamente:
      </p>
      <ol>
        <li>Abra o projeto de cômodo salvo.</li>
        <li>Toque na Calculadora de Materiais.</li>
        <li>Escolha um material: tinta, piso de azulejo, papel de parede, etc.</li>
        <li>Ajuste o fator de perda se o seu cômodo não for padrão.</li>
        <li>Escolha um tamanho de unidade (ex.: azulejo 30×30 vs 60×60, lata de tinta 1 L vs 5 L).</li>
        <li>O app mostra tanto a quantidade em m² quanto o número de pacotes arredondado para cima.</li>
      </ol>
      <p>
        Exporte a estimativa como parte do PDF do cômodo e leve para a loja de
        material de construção. O PDF também serve como lista de compras.
      </p>

      <h2>Precificando os materiais</h2>
      <p>
        Com suas quantidades em mãos, consulte os preços unitários em 2-3
        varejistas. Para cada um:
      </p>
      <ul>
        <li>Multiplique preço unitário × pacotes necessários = custo do item</li>
        <li>Some o frete se não for retirada na loja</li>
        <li>Total daquele varejista = número de comparação</li>
      </ul>
      <p>
        Os preços de varejo variam de 30-50% em produtos idênticos entre IKEA,
        Home Depot/Lowe's, Leroy Merlin, B&Q, etc. Os 10 minutos de pesquisa de
        preço com números medidos costumam economizar € 50-200 numa reforma do
        tamanho de uma cozinha.
      </p>

      <h2>Erros comuns</h2>
      <ul>
        <li><strong>Esquecer o fator de perda.</strong> Comprar exatamente a área do cômodo é o motivo nº 1 de uma segunda ida à loja.</li>
        <li><strong>Conversão de unidades errada.</strong> EUA (galões) ↔ UE (litros), EUA (pés quadrados) ↔ UE (m²). O app converte; fazer à mão introduz erros.</li>
        <li><strong>Lotes de cor diferentes.</strong> Azulejo e tinta de lotes de produção diferentes podem parecer sutilmente distintos. Compre um pouco mais do que precisa de um mesmo lote em vez de voltar depois para comprar mais.</li>
        <li><strong>Incluir áreas inutilizáveis.</strong> Não assente azulejo sob a ilha da cozinha se ela for fixa. Não pinte atrás de armários embutidos.</li>
      </ul>

      <h2>Resumo</h2>
      <p>
        Medir o cômodo é a parte fácil. Converter m² em "quantas caixas" é onde
        a maioria dos orçamentos de DIY estoura. Com uma planta medida no Ruler
        AR mais a calculadora de materiais do app, você obtém as quantidades por
        material em 30 segundos, precisas o suficiente para comprar com
        confiança sem comprar duas vezes.
      </p>
    </article>
  );
}

export function PostIT() {
  return (
    <article className="prose-content">
      <p className="lead">
        Sapere che una stanza è di 18 m² non ti dice quante scatole di
        piastrelle comprare. I produttori confezionano i materiali in unità
        scomode (piastrelle rettangolari in m², vernice in litri, carta da
        parati in rotoli da 2,6 m × 0,5 m), e ogni materiale ha un fattore di
        sfrido che varia in base a quanto è complessa la forma della stanza.
        Ecco i calcoli, e come ci pensa l'app al posto tuo.
      </p>

      <h2>Passo 1: Ottieni la misura di base corretta</h2>
      <p>
        Per ogni materiale serve un numero di partenza diverso:
      </p>
      <table>
        <thead>
          <tr><th>Materiale</th><th>Cosa misurare</th></tr>
        </thead>
        <tbody>
          <tr><td>Piastrella per pavimento / laminato / vinile</td><td>Superficie del pavimento (m²)</td></tr>
          <tr><td>Piastrella da parete</td><td>Superficie di parete piastrellata meno i sanitari (m²)</td></tr>
          <tr><td>Vernice (pareti)</td><td>Superficie di parete meno i vani di porte + finestre (m²)</td></tr>
          <tr><td>Vernice (soffitto)</td><td>Superficie del soffitto = superficie del pavimento (m²)</td></tr>
          <tr><td>Carta da parati</td><td>Superficie di parete meno i vani (m²)</td></tr>
          <tr><td>Battiscopa</td><td>Perimetro del pavimento meno la larghezza delle porte (m)</td></tr>
          <tr><td>Cornice da soffitto</td><td>Perimetro del soffitto (m)</td></tr>
        </tbody>
      </table>
      <p>
        La scansione della stanza di Ruler AR ti dà superficie e perimetro del
        pavimento automaticamente. La superficie delle pareti richiede un
        piccolo calcolo: perimetro delle pareti × altezza del soffitto − somma
        delle superfici delle porte − somma delle superfici delle finestre. Il
        calcolatore di materiali dell'app lo fa per te.
      </p>

      <h2>Passo 2: Applica il giusto fattore di sfrido</h2>
      <p>
        Lo "sfrido" è il materiale che taglierai, lascerai cadere, non
        combacerai o che presenterà difetti. Aggiungi questa percentuale alla
        tua quantità di base:
      </p>
      <table>
        <thead>
          <tr><th>Scenario</th><th>Fattore di sfrido</th></tr>
        </thead>
        <tbody>
          <tr><td>Stanza quadrata, piastrella grande formato (60×60 cm)</td><td>+10%</td></tr>
          <tr><td>Piastrella standard (30×30 cm)</td><td>+10-15%</td></tr>
          <tr><td>Piastrella piccola / mosaico</td><td>+15-20%</td></tr>
          <tr><td>Posa in diagonale</td><td>+15%</td></tr>
          <tr><td>Spina di pesce / chevron</td><td>+20%</td></tr>
          <tr><td>Laminato / doga in vinile</td><td>+10% (posa dritta)</td></tr>
          <tr><td>Moquette</td><td>+10-15% (dipende dalla larghezza del rotolo rispetto alla stanza)</td></tr>
          <tr><td>Carta da parati con rapporto di disegno</td><td>+15-20%</td></tr>
          <tr><td>Vernice a tinta unita</td><td>+5-10% (ritocchi, seconda mano)</td></tr>
        </tbody>
      </table>
      <p>
        Aggiungi un altro 5% per stanze di forma irregolare (nicchie, colonne,
        pianta non rettangolare): generano più tagli.
      </p>

      <h2>Passo 3: Converti nelle unità del produttore</h2>
      <p>
        I produttori non vendono in m². Vendono in scatole, barattoli, rotoli.
        Converti:
      </p>
      <h3>Piastrelle</h3>
      <p>
        (Superficie del pavimento × (1 + fattore di sfrido)) ÷ dimensione della
        piastrella = piastrelle necessarie → arrotonda per eccesso a scatole
        intere.
        <br />
        Esempio: pavimento 18 m² + 10% = 19,8 m². Dimensione piastrella 60×60 cm
        = 0,36 m². 19,8 ÷ 0,36 = 55 piastrelle. Scatola da 6 = 10 scatole
        (arrotondato per eccesso da 9,17).
      </p>
      <h3>Laminato / doga in vinile</h3>
      <p>
        Come per le piastrelle, solo che le scatole di solito riportano la resa
        in m². Pavimento 18 m² + 10% = 19,8 m². La scatola copre 2,4 m².
        Servono 9 scatole.
      </p>
      <h3>Vernice (pareti)</h3>
      <p>
        Superficie di parete × numero di mani ÷ resa = litri necessari.
        <br />
        Resa tipica: 10 m² per litro per una mano. Due mani sono lo standard per
        una pittura nuova.
        <br />
        Esempio: 50 m² di parete × 2 mani ÷ 10 m²/L = 10 L. Venduta in
        barattoli da 5 L → 2 barattoli.
      </p>
      <h3>Carta da parati</h3>
      <p>
        Superficie di parete ÷ resa del rotolo + 10-20% per la corrispondenza
        del disegno. Rotolo standard = 5 m² di resa (10,05 m × 0,53 m). I rotoli
        con rapporto di disegno richiedono lunghezza aggiuntiva per
        l'allineamento.
        <br />
        Esempio: 30 m² di parete + 15% di disegno = 34,5 m² ÷ 5 m²/rotolo = 7
        rotoli (arrotondato per eccesso da 6,9).
      </p>

      <h2>Il calcolatore di materiali dentro l'app</h2>
      <p>
        Una volta che hai un progetto di stanza salvato in Ruler AR, il
        calcolatore di materiali fa tutto quanto sopra automaticamente:
      </p>
      <ol>
        <li>Apri il progetto di stanza salvato.</li>
        <li>Tocca il Calcolatore di materiali.</li>
        <li>Scegli un materiale: vernice, piastrella per pavimento, carta da parati, ecc.</li>
        <li>Regola il fattore di sfrido se la tua stanza non è standard.</li>
        <li>Scegli una dimensione di unità (es. piastrella 30×30 vs 60×60, barattolo di vernice 1 L vs 5 L).</li>
        <li>L'app fornisce sia la quantità in m² sia il numero di confezioni arrotondato per eccesso.</li>
      </ol>
      <p>
        Esporta la stima come parte del PDF della stanza e portala in ferramenta.
        Il PDF funge anche da lista della spesa.
      </p>

      <h2>Dare un prezzo ai materiali</h2>
      <p>
        Con le tue quantità in mano, confronta i prezzi unitari presso 2-3
        rivenditori. Per ciascuno:
      </p>
      <ul>
        <li>Moltiplica prezzo unitario × confezioni necessarie = costo della voce</li>
        <li>Aggiungi la consegna se non è ritiro in negozio</li>
        <li>Totale per quel rivenditore = numero di confronto</li>
      </ul>
      <p>
        I prezzi al dettaglio variano del 30-50% su prodotti identici tra IKEA,
        Home Depot/Lowe's, Leroy Merlin, B&Q, ecc. I 10 minuti di confronto
        prezzi con numeri misurati fanno di solito risparmiare 50-200 € su una
        ristrutturazione delle dimensioni di una cucina.
      </p>

      <h2>Errori comuni</h2>
      <ul>
        <li><strong>Dimenticare il fattore di sfrido.</strong> Comprare esattamente la superficie della stanza è il motivo n. 1 di un secondo viaggio per il materiale.</li>
        <li><strong>Conversione di unità sbagliata.</strong> USA (galloni) ↔ UE (litri), USA (piedi quadrati) ↔ UE (m²). L'app converte; farlo a mano introduce errori.</li>
        <li><strong>Lotti di colore diversi.</strong> Piastrelle e vernice di lotti di produzione diversi possono apparire leggermente differenti. Compra un po' più del necessario da uno stesso lotto invece di tornare a comprarne altro dopo.</li>
        <li><strong>Includere aree inutilizzabili.</strong> Non piastrellare sotto l'isola della cucina se è fissa. Non dipingere dietro gli armadi a muro.</li>
      </ul>

      <h2>In conclusione</h2>
      <p>
        Misurare la stanza è la parte facile. Convertire i m² in "quante
        scatole" è dove la maggior parte dei budget fai-da-te salta. Con una
        pianta misurata in Ruler AR più il calcolatore di materiali integrato,
        ottieni le quantità per materiale in 30 secondi, abbastanza precise per
        comprare con sicurezza senza comprare due volte.
      </p>
    </article>
  );
}

export function PostPL() {
  return (
    <article className="prose-content">
      <p className="lead">
        Wiedza, że pokój ma 18 m², nie mówi ci, ile pudeł płytek kupić.
        Producenci pakują materiały w niewygodnych jednostkach (płytki
        prostokątne w m², farba w litrach, tapeta w rolkach 2,6 m × 0,5 m), a
        każdy materiał ma współczynnik odpadu, który rośnie wraz ze
        skomplikowaniem kształtu pomieszczenia. Oto matematyka i to, jak
        aplikacja robi ją za ciebie.
      </p>

      <h2>Krok 1: Uzyskaj właściwy pomiar bazowy</h2>
      <p>
        Dla każdego materiału potrzebujesz innej liczby wyjściowej:
      </p>
      <table>
        <thead>
          <tr><th>Materiał</th><th>Co zmierzyć</th></tr>
        </thead>
        <tbody>
          <tr><td>Płytka podłogowa / panel / winyl</td><td>Powierzchnia podłogi (m²)</td></tr>
          <tr><td>Płytka ścienna</td><td>Powierzchnia płytkowanej ściany minus armatura (m²)</td></tr>
          <tr><td>Farba (ściany)</td><td>Powierzchnia ścian minus otwory drzwiowe + okienne (m²)</td></tr>
          <tr><td>Farba (sufit)</td><td>Powierzchnia sufitu = powierzchnia podłogi (m²)</td></tr>
          <tr><td>Tapeta</td><td>Powierzchnia ścian minus otwory (m²)</td></tr>
          <tr><td>Listwa przypodłogowa</td><td>Obwód podłogi minus szerokość drzwi (m)</td></tr>
          <tr><td>Listwa sufitowa</td><td>Obwód sufitu (m)</td></tr>
        </tbody>
      </table>
      <p>
        Skan pomieszczenia w Ruler AR podaje powierzchnię i obwód podłogi
        automatycznie. Powierzchnia ścian wymaga małego obliczenia: obwód ścian
        × wysokość pomieszczenia − suma powierzchni drzwi − suma powierzchni
        okien. Kalkulator materiałów w aplikacji robi to za ciebie.
      </p>

      <h2>Krok 2: Zastosuj właściwy współczynnik odpadu</h2>
      <p>
        „Odpad" to materiał, który odetniesz, upuścisz, źle dopasujesz lub w
        którym wystąpią wady. Dodaj ten procent do ilości bazowej:
      </p>
      <table>
        <thead>
          <tr><th>Scenariusz</th><th>Współczynnik odpadu</th></tr>
        </thead>
        <tbody>
          <tr><td>Kwadratowy pokój, płytka wielkoformatowa (60×60 cm)</td><td>+10%</td></tr>
          <tr><td>Standardowa płytka (30×30 cm)</td><td>+10-15%</td></tr>
          <tr><td>Mała płytka / mozaika</td><td>+15-20%</td></tr>
          <tr><td>Układ po skosie</td><td>+15%</td></tr>
          <tr><td>Jodełka / chevron</td><td>+20%</td></tr>
          <tr><td>Panel / deska winylowa</td><td>+10% (układ prosty)</td></tr>
          <tr><td>Wykładzina dywanowa</td><td>+10-15% (zależnie od szerokości rolki vs pokój)</td></tr>
          <tr><td>Tapeta z raportem wzoru</td><td>+15-20%</td></tr>
          <tr><td>Farba jednolita</td><td>+5-10% (poprawki, druga warstwa)</td></tr>
        </tbody>
      </table>
      <p>
        Dodaj kolejne 5% dla pomieszczeń o nieregularnym kształcie (wnęki,
        słupy, niekwadratowy rzut) — generują więcej cięć.
      </p>

      <h2>Krok 3: Przelicz na jednostki producenta</h2>
      <p>
        Producenci nie sprzedają w m². Sprzedają w pudłach, puszkach, rolkach.
        Przelicz:
      </p>
      <h3>Płytki</h3>
      <p>
        (Powierzchnia podłogi × (1 + współczynnik odpadu)) ÷ rozmiar płytki =
        potrzebne płytki → zaokrąglij w górę do całych pudeł.
        <br />
        Przykład: podłoga 18 m² + 10% = 19,8 m². Rozmiar płytki 60×60 cm =
        0,36 m². 19,8 ÷ 0,36 = 55 płytek. Pudło po 6 = 10 pudeł (zaokrąglone w
        górę z 9,17).
      </p>
      <h3>Panel / deska winylowa</h3>
      <p>
        Tak samo jak płytki, tyle że na pudłach zwykle podane jest pokrycie w
        m². Podłoga 18 m² + 10% = 19,8 m². Pudło pokrywa 2,4 m². Potrzebujesz 9
        pudeł.
      </p>
      <h3>Farba (ściany)</h3>
      <p>
        Powierzchnia ścian × liczba warstw ÷ wydajność = potrzebne litry.
        <br />
        Typowa wydajność: 10 m² na litr na jedną warstwę. Dwie warstwy to
        standard przy świeżym malowaniu.
        <br />
        Przykład: 50 m² ścian × 2 warstwy ÷ 10 m²/L = 10 L. Sprzedawana w
        puszkach 5 L → 2 puszki.
      </p>
      <h3>Tapeta</h3>
      <p>
        Powierzchnia ścian ÷ pokrycie rolki + 10-20% na dopasowanie wzoru.
        Standardowa rolka = 5 m² pokrycia (10,05 m × 0,53 m). Rolki z raportem
        wzoru wymagają dodatkowej długości do dopasowania.
        <br />
        Przykład: 30 m² ścian + 15% wzoru = 34,5 m² ÷ 5 m²/rolkę = 7 rolek
        (zaokrąglone w górę z 6,9).
      </p>

      <h2>Kalkulator materiałów wewnątrz aplikacji</h2>
      <p>
        Gdy masz zapisany projekt pomieszczenia w Ruler AR, kalkulator
        materiałów robi wszystko powyższe automatycznie:
      </p>
      <ol>
        <li>Otwórz zapisany projekt pomieszczenia.</li>
        <li>Stuknij Kalkulator materiałów.</li>
        <li>Wybierz materiał: farba, płytka podłogowa, tapeta itp.</li>
        <li>Dostosuj współczynnik odpadu, jeśli pomieszczenie jest nietypowe.</li>
        <li>Wybierz rozmiar jednostki (np. płytka 30×30 vs 60×60, puszka farby 1 L vs 5 L).</li>
        <li>Aplikacja podaje zarówno ilość w m², jak i zaokrągloną w górę liczbę opakowań.</li>
      </ol>
      <p>
        Wyeksportuj kosztorys jako część PDF pomieszczenia i zabierz do
        marketu budowlanego. Ten PDF służy też za listę zakupów.
      </p>

      <h2>Wycena materiałów</h2>
      <p>
        Mając ilości pod ręką, sprawdź ceny jednostkowe u 2-3 sprzedawców. Dla
        każdego:
      </p>
      <ul>
        <li>Pomnóż cenę jednostkową × potrzebne opakowania = koszt pozycji</li>
        <li>Dodaj dostawę, jeśli to nie odbiór osobisty</li>
        <li>Suma dla danego sprzedawcy = liczba do porównania</li>
      </ul>
      <p>
        Ceny detaliczne identycznych produktów różnią się o 30-50% między IKEA,
        Home Depot/Lowe's, Leroy Merlin, B&Q itd. Te 10 minut porównywania cen z
        wymierzonymi liczbami zwykle oszczędza 50-200 € przy remoncie wielkości
        kuchni.
      </p>

      <h2>Częste błędy</h2>
      <ul>
        <li><strong>Pominięcie współczynnika odpadu.</strong> Kupienie dokładnie powierzchni pomieszczenia to przyczyna nr 1 drugiej wyprawy po materiał.</li>
        <li><strong>Błędne przeliczenie jednostek.</strong> USA (galony) ↔ UE (litry), USA (stopy kwadratowe) ↔ UE (m²). Aplikacja przelicza; robienie tego ręcznie wprowadza błędy.</li>
        <li><strong>Różne partie barwnika.</strong> Płytki i farba z różnych partii produkcyjnych mogą wyglądać subtelnie inaczej. Kup nieco więcej niż potrzebujesz z jednej partii, zamiast wracać po dokupkę później.</li>
        <li><strong>Wliczanie nieużytecznych powierzchni.</strong> Nie układaj płytek pod wyspą kuchenną, jeśli jest stała. Nie maluj za zabudowanymi szafami.</li>
      </ul>

      <h2>Podsumowanie</h2>
      <p>
        Zmierzenie pomieszczenia to łatwa część. Przeliczenie m² na „ile pudeł"
        to moment, w którym sypie się większość budżetów DIY. Z wymierzonym
        rzutem w Ruler AR plus wbudowanym kalkulatorem materiałów otrzymujesz
        ilości dla każdego materiału w 30 sekund, dość dokładne, by kupować
        pewnie i nie kupować dwa razy.
      </p>
    </article>
  );
}

export function PostTR() {
  return (
    <article className="prose-content">
      <p className="lead">
        Bir odanın 18 m² olduğunu bilmek, kaç kutu fayans alacağınızı
        söylemez. Üreticiler malzemeleri kullanışsız birimlerde paketler
        (dikdörtgen fayanslar m² olarak, kova boya litre olarak, duvar kağıdı
        2,6 m × 0,5 m rulolar halinde) ve her malzemenin, oda biçiminin
        karmaşıklığına göre değişen bir fire oranı vardır. İşte hesabı ve
        uygulamanın bunu sizin için nasıl yaptığı.
      </p>

      <h2>1. Adım: Doğru temel ölçümü alın</h2>
      <p>
        Her malzeme için farklı bir başlangıç sayısına ihtiyacınız var:
      </p>
      <table>
        <thead>
          <tr><th>Malzeme</th><th>Ne ölçülmeli</th></tr>
        </thead>
        <tbody>
          <tr><td>Zemin fayansı / laminat / vinil</td><td>Zemin alanı (m²)</td></tr>
          <tr><td>Duvar fayansı</td><td>Fayanslı duvar alanı eksi tesisat (m²)</td></tr>
          <tr><td>Boya (duvarlar)</td><td>Duvar alanı eksi kapı + pencere boşlukları (m²)</td></tr>
          <tr><td>Boya (tavan)</td><td>Tavan alanı = zemin alanı (m²)</td></tr>
          <tr><td>Duvar kağıdı</td><td>Duvar alanı eksi boşluklar (m²)</td></tr>
          <tr><td>Süpürgelik</td><td>Zemin çevresi eksi kapı genişlikleri (m)</td></tr>
          <tr><td>Tavan kornişi</td><td>Tavan çevresi (m)</td></tr>
        </tbody>
      </table>
      <p>
        Ruler AR'ın oda taraması zemin alanını ve zemin çevresini otomatik
        verir. Duvar alanı küçük bir hesap gerektirir: duvar çevresi × tavan
        yüksekliği − kapı alanları toplamı − pencere alanları toplamı.
        Uygulamadaki malzeme hesaplayıcısı bunu sizin için yapar.
      </p>

      <h2>2. Adım: Doğru fire oranını uygulayın</h2>
      <p>
        "Fire", keseceğiniz, düşüreceğiniz, eşleştiremeyeceğiniz veya kusurlu
        çıkacak malzemedir. Bu yüzdeyi temel miktarınıza ekleyin:
      </p>
      <table>
        <thead>
          <tr><th>Senaryo</th><th>Fire oranı</th></tr>
        </thead>
        <tbody>
          <tr><td>Kare oda, büyük format fayans (60×60 cm)</td><td>+%10</td></tr>
          <tr><td>Standart fayans (30×30 cm)</td><td>+%10-15</td></tr>
          <tr><td>Küçük fayans / mozaik</td><td>+%15-20</td></tr>
          <tr><td>Çapraz döşeme</td><td>+%15</td></tr>
          <tr><td>Balıksırtı / chevron</td><td>+%20</td></tr>
          <tr><td>Laminat / vinil plank</td><td>+%10 (düz döşeme)</td></tr>
          <tr><td>Halı</td><td>+%10-15 (rulo genişliğine ve odaya göre değişir)</td></tr>
          <tr><td>Desen tekrarlı duvar kağıdı</td><td>+%15-20</td></tr>
          <tr><td>Düz renk boya</td><td>+%5-10 (rötuşlar, ikinci kat)</td></tr>
        </tbody>
      </table>
      <p>
        Düzensiz biçimli odalar için (girintiler, kolonlar, dikdörtgen olmayan
        taban) %5 daha ekleyin; bunlar daha fazla kesim üretir.
      </p>

      <h2>3. Adım: Üretici birimlerine çevirin</h2>
      <p>
        Üreticiler m² ile satmaz. Kutu, kova, rulo ile satarlar. Çevirin:
      </p>
      <h3>Fayans</h3>
      <p>
        (Zemin alanı × (1 + fire oranı)) ÷ fayans boyutu = gereken fayans →
        tam kutuya yukarı yuvarlayın.
        <br />
        Örnek: 18 m² zemin + %10 = 19,8 m². Fayans boyutu 60×60 cm = 0,36 m².
        19,8 ÷ 0,36 = 55 fayans. 6'lı kutu = 10 kutu (9,17'den yukarı
        yuvarlandı).
      </p>
      <h3>Laminat / vinil plank</h3>
      <p>
        Fayansla aynı, yalnız kutular genellikle kaplama alanını m² olarak
        belirtir. Zemin 18 m² + %10 = 19,8 m². Kutu 2,4 m² kaplar. 9 kutu
        gerekir.
      </p>
      <h3>Boya (duvarlar)</h3>
      <p>
        Duvar alanı × kat sayısı ÷ verim = gereken litre.
        <br />
        Tipik verim: tek katta litre başına 10 m². Yeni boyamada iki kat
        standarttır.
        <br />
        Örnek: 50 m² duvar alanı × 2 kat ÷ 10 m²/L = 10 L. 5 L kovalarda
        satılır → 2 kova.
      </p>
      <h3>Duvar kağıdı</h3>
      <p>
        Duvar alanı ÷ rulo kaplaması + desen eşleştirme için %10-20. Standart
        rulo = 5 m² kaplama (10,05 m × 0,53 m). Desen tekrarlı rulolar
        eşleştirme için ek uzunluk ister.
        <br />
        Örnek: 30 m² duvar alanı + %15 desen = 34,5 m² ÷ 5 m²/rulo = 7 rulo
        (6,9'dan yukarı yuvarlandı).
      </p>

      <h2>Uygulama içindeki malzeme hesaplayıcısı</h2>
      <p>
        Ruler AR'da kayıtlı bir oda projeniz olduğunda, malzeme hesaplayıcısı
        yukarıdakilerin tümünü otomatik yapar:
      </p>
      <ol>
        <li>Kayıtlı oda projesini açın.</li>
        <li>Malzeme Hesaplayıcısı'na dokunun.</li>
        <li>Bir malzeme seçin: boya, zemin fayansı, duvar kağıdı vb.</li>
        <li>Odanız standart değilse fire oranını ayarlayın.</li>
        <li>Bir birim boyutu seçin (ör. fayans 30×30 vs 60×60, boya kovası 1 L vs 5 L).</li>
        <li>Uygulama hem m² cinsinden miktarı hem de yukarı yuvarlanmış paket sayısını verir.</li>
      </ol>
      <p>
        Tahmini, odanın PDF'inin bir parçası olarak dışa aktarın ve yapı
        marketine götürün. PDF aynı zamanda alışveriş listeniz olur.
      </p>

      <h2>Malzemeleri fiyatlandırma</h2>
      <p>
        Miktarlar elinizdeyken 2-3 satıcıda birim fiyatlarına bakın. Her biri
        için:
      </p>
      <ul>
        <li>Birim fiyat × gereken paket sayısı = kalem maliyeti</li>
        <li>Mağazadan teslim değilse teslimatı ekleyin</li>
        <li>O satıcı için toplam = karşılaştırma sayısı</li>
      </ul>
      <p>
        Aynı ürünlerin perakende fiyatları IKEA, Home Depot/Lowe's, Leroy
        Merlin, B&Q vb. arasında %30-50 değişir. Ölçülmüş sayılarla yapılan 10
        dakikalık fiyat karşılaştırması, mutfak boyutunda bir tadilatta
        genellikle 50-200 € tasarruf ettirir.
      </p>

      <h2>Yaygın hatalar</h2>
      <ul>
        <li><strong>Fire oranını unutmak.</strong> Tam oda alanı kadar almak, ikinci kez malzeme almaya gitmenin 1 numaralı nedenidir.</li>
        <li><strong>Yanlış birim dönüşümü.</strong> ABD (galon) ↔ AB (litre), ABD (fit kare) ↔ AB (m²). Uygulama çevirir; elle yapmak hata sokar.</li>
        <li><strong>Farklı renk partileri.</strong> Farklı üretim partilerinden fayans ve boya hafifçe farklı görünebilir. Sonradan tekrar almaya gitmek yerine aynı partiden ihtiyacınızdan biraz fazla alın.</li>
        <li><strong>Kullanılamayan alanları dahil etmek.</strong> Sabitse mutfak adasının altına fayans döşemeyin. Gömme dolapların arkasını boyamayın.</li>
      </ul>

      <h2>Özet</h2>
      <p>
        Odayı ölçmek kolay kısım. m²'yi "kaç kutu"ya çevirmek, çoğu kendin-yap
        bütçesinin patladığı yerdir. Ruler AR'da ölçülmüş bir kat planı ve
        uygulama içi malzeme hesaplayıcısıyla, her malzeme için miktarları 30
        saniyede alırsınız; iki kez almadan güvenle alışveriş edecek kadar
        doğru.
      </p>
    </article>
  );
}

export function PostAR() {
  return (
    <article className="prose-content">
      <p className="lead">
        معرفة أن الغرفة تبلغ 18 م² لا تخبرك بعدد علب البلاط التي ينبغي شراؤها.
        تعبئ الشركات المصنّعة المواد بوحدات غير مريحة (البلاط المستطيل بالمتر
        المربع، والطلاء السائل باللتر، وورق الجدران بلفائف قياس 2.6 م × 0.5 م)،
        ولكل مادة معامل هدر يختلف بحسب مدى تعقيد شكل غرفتك. إليك الحسابات،
        وكيف يقوم بها التطبيق نيابةً عنك.
      </p>

      <h2>الخطوة 1: احصل على القياس الأساسي الصحيح</h2>
      <p>
        لكل مادة تحتاج إلى رقم بداية مختلف:
      </p>
      <table>
        <thead>
          <tr><th>المادة</th><th>ما الذي تقيسه</th></tr>
        </thead>
        <tbody>
          <tr><td>بلاط الأرضيات / الباركيه / الفينيل</td><td>مساحة الأرضية (م²)</td></tr>
          <tr><td>بلاط الجدران</td><td>مساحة الجدار المُبلَّط ناقص التركيبات (م²)</td></tr>
          <tr><td>الطلاء (الجدران)</td><td>مساحة الجدار ناقص فتحات الأبواب + النوافذ (م²)</td></tr>
          <tr><td>الطلاء (السقف)</td><td>مساحة السقف = مساحة الأرضية (م²)</td></tr>
          <tr><td>ورق الجدران</td><td>مساحة الجدار ناقص الفتحات (م²)</td></tr>
          <tr><td>وزرة / إطار أرضي</td><td>محيط الأرضية ناقص عرض الأبواب (م)</td></tr>
          <tr><td>كرنيش السقف</td><td>محيط السقف (م)</td></tr>
        </tbody>
      </table>
      <p>
        يمنحك مسح الغرفة في Ruler AR مساحة الأرضية ومحيطها تلقائيًا. أما مساحة
        الجدار فتتطلب حسابًا بسيطًا: محيط الجدران × ارتفاع السقف − مجموع مساحات
        الأبواب − مجموع مساحات النوافذ. وحاسبة المواد في التطبيق تقوم بذلك نيابةً
        عنك.
      </p>

      <h2>الخطوة 2: طبّق معامل الهدر الصحيح</h2>
      <p>
        "الهدر" هو المادة التي ستقصّها أو تُسقطها أو لا تتطابق أو تظهر بها عيوب.
        أضف هذه النسبة إلى الكمية الأساسية:
      </p>
      <table>
        <thead>
          <tr><th>الحالة</th><th>معامل الهدر</th></tr>
        </thead>
        <tbody>
          <tr><td>غرفة مربعة، بلاط كبير الحجم (60×60 سم)</td><td>+10%</td></tr>
          <tr><td>بلاط قياسي (30×30 سم)</td><td>+10-15%</td></tr>
          <tr><td>بلاط صغير / فسيفساء</td><td>+15-20%</td></tr>
          <tr><td>تركيب قطري</td><td>+15%</td></tr>
          <tr><td>عظمة السمكة / شيفرون</td><td>+20%</td></tr>
          <tr><td>باركيه / لوح فينيل</td><td>+10% (تركيب مستقيم)</td></tr>
          <tr><td>سجاد</td><td>+10-15% (يعتمد على عرض اللفة مقابل الغرفة)</td></tr>
          <tr><td>ورق جدران بنقش متكرر</td><td>+15-20%</td></tr>
          <tr><td>طلاء بلون واحد</td><td>+5-10% (لمسات أخيرة، طبقة ثانية)</td></tr>
        </tbody>
      </table>
      <p>
        أضف 5% أخرى للغرف غير المنتظمة الشكل (الكوّات، الأعمدة، المخطط غير
        المستطيل)، فهي تُنتج قصّات أكثر.
      </p>

      <h2>الخطوة 3: حوّل إلى وحدات الشركة المصنّعة</h2>
      <p>
        لا تبيع الشركات المصنّعة بالمتر المربع. بل تبيع بالعلب والعبوات
        واللفائف. حوّل:
      </p>
      <h3>البلاط</h3>
      <p>
        (مساحة الأرضية × (1 + معامل الهدر)) ÷ حجم البلاطة = عدد البلاطات اللازم
        ← قرّب لأعلى إلى علب كاملة.
        <br />
        مثال: أرضية 18 م² + 10% = 19.8 م². حجم البلاطة 60×60 سم = 0.36 م².
        19.8 ÷ 0.36 = 55 بلاطة. علبة من 6 = 10 علب (قُرّبت لأعلى من 9.17).
      </p>
      <h3>الباركيه / لوح الفينيل</h3>
      <p>
        مثل البلاط، إلا أن العلب عادةً ما تُوسم بالتغطية بالمتر المربع. أرضية
        18 م² + 10% = 19.8 م². العلبة تغطي 2.4 م². تحتاج إلى 9 علب.
      </p>
      <h3>الطلاء (الجدران)</h3>
      <p>
        مساحة الجدار × عدد الطبقات ÷ معدل التغطية = عدد اللترات اللازم.
        <br />
        معدل التغطية النموذجي: 10 م² لكل لتر للطبقة الواحدة. الطبقتان هما المعيار
        للطلاء الجديد.
        <br />
        مثال: 50 م² مساحة جدار × طبقتان ÷ 10 م²/لتر = 10 لتر. يُباع في عبوات
        5 لتر ← عبوتان.
      </p>
      <h3>ورق الجدران</h3>
      <p>
        مساحة الجدار ÷ تغطية اللفة + 10-20% لمطابقة النقش. اللفة القياسية = 5 م²
        تغطية (10.05 م × 0.53 م). تحتاج اللفائف ذات النقش المتكرر إلى طول إضافي
        للمطابقة.
        <br />
        مثال: 30 م² مساحة جدار + 15% نقش = 34.5 م² ÷ 5 م²/لفة = 7 لفائف (قُرّبت
        لأعلى من 6.9).
      </p>

      <h2>حاسبة المواد داخل التطبيق</h2>
      <p>
        بمجرد أن يكون لديك مشروع غرفة محفوظ في Ruler AR، تقوم حاسبة المواد بكل
        ما سبق تلقائيًا:
      </p>
      <ol>
        <li>افتح مشروع الغرفة المحفوظ.</li>
        <li>انقر على حاسبة المواد.</li>
        <li>اختر مادة: طلاء، بلاط أرضيات، ورق جدران، وغيرها.</li>
        <li>عدّل معامل الهدر إذا كانت غرفتك غير قياسية.</li>
        <li>اختر حجم الوحدة (مثلاً بلاطة 30×30 مقابل 60×60، عبوة طلاء 1 لتر مقابل 5 لتر).</li>
        <li>يُخرج التطبيق الكمية بالمتر المربع وعدد العبوات مقرّبًا لأعلى معًا.</li>
      </ol>
      <p>
        صدّر التقدير كجزء من ملف PDF الخاص بالغرفة وخذه إلى متجر مواد البناء.
        يصلح ملف PDF أيضًا كقائمة تسوّق.
      </p>

      <h2>تسعير المواد</h2>
      <p>
        وبالكميات بين يديك، تصفّح أسعار الوحدة لدى 2-3 متاجر. ولكل متجر:
      </p>
      <ul>
        <li>اضرب سعر الوحدة × عدد العبوات اللازمة = تكلفة البند</li>
        <li>أضف التوصيل إن لم يكن استلامًا محليًا</li>
        <li>الإجمالي لذلك المتجر = رقم المقارنة</li>
      </ul>
      <p>
        تتفاوت أسعار التجزئة بنسبة 30-50% على منتجات متطابقة بين IKEA و
        Home Depot/Lowe's و Leroy Merlin و B&Q وغيرها. والعشر دقائق من مقارنة
        الأسعار بأرقام مقيسة توفّر عادةً 50-200 يورو في تجديد بحجم مطبخ.
      </p>

      <h2>الأخطاء الشائعة</h2>
      <ul>
        <li><strong>نسيان معامل الهدر.</strong> شراء مساحة الغرفة بالضبط هو السبب رقم 1 للرحلة الثانية لجلب المواد.</li>
        <li><strong>تحويل خاطئ للوحدات.</strong> الولايات المتحدة (جالون) ↔ أوروبا (لتر)، الولايات المتحدة (قدم مربع) ↔ أوروبا (م²). التطبيق يحوّل؛ والقيام بذلك يدويًا يُدخل أخطاءً.</li>
        <li><strong>اختلاف دفعات الصبغة.</strong> قد يبدو البلاط والطلاء من دفعات إنتاج مختلفة مختلفًا بشكل طفيف. اشترِ أكثر قليلاً مما تحتاج من الدفعة نفسها بدلاً من العودة لشراء المزيد لاحقًا.</li>
        <li><strong>تضمين المناطق غير القابلة للاستخدام.</strong> لا تُبلّط أسفل جزيرة المطبخ إن كانت ثابتة. ولا تطلِ خلف الخزائن المدمجة.</li>
      </ul>

      <h2>الخلاصة</h2>
      <p>
        قياس الغرفة هو الجزء السهل. أما تحويل المتر المربع إلى "كم علبة" فهو
        المكان الذي تنهار فيه معظم ميزانيات الأعمال اليدوية. مع مخطط أرضية مقيس
        في Ruler AR إلى جانب حاسبة المواد داخل التطبيق، تحصل على الكميات لكل مادة
        في 30 ثانية، بدقة كافية للتسوّق بثقة دون الشراء مرتين.
      </p>
    </article>
  );
}

export const bodies = {
  ru: PostRU, de: PostDE, fr: PostFR, es: PostES, ja: PostJA, ko: PostKO,
  'zh-Hans': PostZH, 'pt-BR': PostPT, it: PostIT, pl: PostPL, tr: PostTR, ar: PostAR
};
