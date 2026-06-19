import type { PostMeta } from './posts';

export const meta: PostMeta = {
  slug: 'plan-renovation-with-iphone',
  date: '2026-04-10',
  readingTimeMin: 6,
  keywords:
    'plan renovation iphone, measure renovation phone, renovation estimate app, home improvement iphone app, material calculator app',
  tags: ['Renovation', 'Tutorial', 'Planning'],
  title: {
    en: "Plan a Home Renovation Using Just Your iPhone",
    ru: "Как спланировать ремонт, имея только iPhone",
    de: "Eine Renovierung mit dem iPhone planen, Schritt für Schritt",
    fr: "Planifier une rénovation avec votre iPhone, pas à pas",
    es: "Cómo planificar una reforma con solo tu iPhone",
    ja: "iPhone だけで自宅のリフォームを計画する",
    ko: "iPhone 하나로 집 리모델링 계획 세우기",
    "zh-Hans": "只用一部 iPhone 规划家庭装修",
    "pt-BR": "Planeje uma reforma usando apenas o seu iPhone",
    it: "Pianifica una ristrutturazione usando solo il tuo iPhone",
    pl: "Zaplanuj remont, mając przy sobie tylko iPhone",
    tr: "Yalnızca iPhone'unuzla bir ev tadilatını planlayın",
    ar: "خطّط لتجديد منزلك باستخدام جهاز iPhone فقط"
  },
  excerpt: {
    en: "A pragmatic workflow for using your iPhone to measure, estimate materials, and price out a renovation before you call a contractor, no special tools, no architect.",
    ru: "Практичный рабочий процесс: как iPhone-ом обмерить, оценить материалы и просчитать стоимость ремонта до того, как звонить мастеру.",
    de: "Ein praxisnaher Ablauf, um mit dem iPhone zu messen, Materialien abzuschätzen und eine Renovierung zu kalkulieren, bevor Sie einen Handwerker anrufen, ganz ohne Spezialwerkzeug und ohne Architekt.",
    fr: "Une méthode concrète pour utiliser votre iPhone afin de mesurer, estimer les matériaux et chiffrer une rénovation avant d'appeler un artisan, sans outil spécial ni architecte.",
    es: "Un flujo de trabajo práctico para usar tu iPhone y medir, estimar materiales y calcular el coste de una reforma antes de llamar a un profesional, sin herramientas especiales ni arquitecto.",
    ja: "業者に電話する前に、iPhone で採寸し、材料を見積もり、リフォーム費用を割り出すための実践的な手順。専用の道具も建築士も必要ありません。",
    ko: "시공업체에 전화하기 전에 iPhone으로 치수를 재고, 자재를 산정하고, 리모델링 비용을 가늠하는 실용적인 워크플로. 특별한 도구도, 건축가도 필요 없습니다.",
    "zh-Hans": "在联系装修师傅之前，用 iPhone 测量、估算材料并算出装修预算的实用流程，不需要专业工具，也不需要建筑师。",
    "pt-BR": "Um fluxo de trabalho prático para usar o iPhone e medir, estimar materiais e orçar uma reforma antes de chamar um profissional, sem ferramentas especiais e sem arquiteto.",
    it: "Un metodo pratico per usare l'iPhone e misurare, stimare i materiali e calcolare il costo di una ristrutturazione prima di chiamare un artigiano, senza attrezzi speciali e senza architetto.",
    pl: "Praktyczny sposób na to, by za pomocą iPhone'a zmierzyć pomieszczenia, oszacować materiały i wyliczyć koszt remontu, zanim zadzwonisz do wykonawcy, bez specjalnych narzędzi i bez architekta.",
    tr: "Bir ustaya telefon etmeden önce iPhone'unuzla ölçüm yapmak, malzeme tahmini çıkarmak ve tadilat maliyetini hesaplamak için pratik bir yöntem; özel alet de mimar da gerekmez.",
    ar: "طريقة عملية لاستخدام جهاز iPhone في القياس وتقدير المواد وحساب تكلفة التجديد قبل الاتصال بأي مقاول، دون أدوات خاصة ودون مهندس معماري."
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

export function PostRU() {
  return (
    <article className="prose-content">
      <p className="lead">
        Самое сложное в начале ремонта, это не сама работа, а неизвестность.
        Сколько квадратных метров плитки? Сколько краски? Какова разумная цена за
        перекраску двух комнат? С приложением для измерений на iPhone вы ответите
        на все три вопроса ещё до того, как сделаете первый звонок.
      </p>
      <p>
        Это тот рабочий процесс, который мы и сами использовали бы, чтобы оценить
        небольшой или средний ремонт, перекладку плитки в ванной, покраску
        однокомнатной квартиры, замену пола на кухне, пройти путь от «хочу это
        сделать» до прикинутого бюджета за один вечер.
      </p>

      <h2>Шаг 1: Зафиксируйте каждую комнату, которой коснётся ремонт</h2>
      <p>
        Откройте Ruler AR (или любое AR-приложение для планов помещений) и
        отсканируйте каждую затронутую комнату. Не пропускайте комнаты, которые
        кажутся очевидными, постирочная, мимо которой вы проходите каждый день,
        наверняка на 0,5 м² больше, чем вам кажется.
      </p>
      <ul>
        <li>
          На iPhone Pro используйте сканирование комнаты с LiDAR: обойдите по
          периметру, и приложение построит 3D-модель с распознанными стенами,
          дверями, окнами и мебелью.
        </li>
        <li>
          Без LiDAR используйте ручное построение комнаты: встаньте в углу,
          пройдите вдоль каждой стены, отмечайте углы касанием.
        </li>
        <li>
          В любом случае сохраняйте каждую комнату как проект. Называйте их чётко:
          «Ванная, основная», «Кухня, только пол», «Спальня 1, покраска».
        </li>
      </ul>
      <p>
        К каждому проекту прилагается PDF с планом помещения, размерами стен и
        общей площадью пола. Сохраните их, это исходные данные для всего, что
        последует дальше.
      </p>

      <h2>Шаг 2: Рассчитайте количество материалов</h2>
      <p>
        Откройте один из сохранённых проектов. Перейдите в калькулятор материалов.
        Приложение уже знает размеры комнаты, поэтому может выдать расчёт
        материалов за секунды:
      </p>
      <ul>
        <li>
          <strong>Краска.</strong> Площадь стен минус вырезы под двери и окна,
          делённая на типичный расход (обычно 10 м² на литр в один слой). По
          умолчанию приложение считает два слоя; измените, если ваша краска в один
          или три слоя.
        </li>
        <li>
          <strong>Пол (плитка / ламинат / винил).</strong> Площадь пола плюс 10%
          на отходы при подрезке. Больше запас при диагональной укладке (15%) и
          узоре «ёлочка» (20%).
        </li>
        <li>
          <strong>Плинтус.</strong> Периметр стен минус ширина дверных проёмов.
        </li>
        <li>
          <strong>Обои.</strong> Площадь стен, делённая на размер рулона (обычно
          5 м² на рулон), с округлением вверх. Добавьте 10% на подгонку рисунка.
        </li>
        <li>
          <strong>Настенная плитка.</strong> Площадь облицовываемой стены минус
          вырезы под сантехнику. Корректируйте по размеру плитки, у крупного
          формата меньше отходов, чем у мозаики.
        </li>
      </ul>
      <p>
        Экспортируйте каждый расчёт как часть PDF. Теперь у вас есть количество
        материалов, которое можно подставить на этапе проверки цен.
      </p>

      <h2>Шаг 3: Посчитайте стоимость материалов</h2>
      <p>
        Возьмите свои объёмы и откройте приложение или сайт любимого строительного
        магазина. Найдите товары под ваши характеристики (матовая краска для стен,
        керамогранит 60×60 см и т. д.) и умножьте количество × цену за единицу по
        каждой позиции.
      </p>
      <p>
        Совет: сравните два-три магазина, прежде чем определиться. На одни и те же
        товары цены нередко различаются на 30%+ между IKEA, Home Depot/Lowe's,
        Leroy Merlin, B&Q, OBI или местными поставщиками.
      </p>
      <p>
        Сохраните итог корзины по каждому магазину. Это ваша <strong>базовая
        стоимость материалов</strong>.
      </p>

      <h2>Шаг 4: Оцените работу</h2>
      <p>
        Стоимость работы оценить со смартфона сложнее, потому что расценки зависят
        от региона, типа работ и накладных расходов исполнителя. Но прикинуть
        можно:
      </p>
      <ul>
        <li>
          <strong>Покраска комнаты.</strong> 0,5-1,5 дня на комнату для одного
          маляра, в зависимости от объёма подготовки.
        </li>
        <li>
          <strong>Плитка на полу ванной (4-6 м²).</strong> 1-2 дня для одного
          плиточника, включая гидроизоляцию.
        </li>
        <li>
          <strong>Укладка ламината или винилового пола.</strong> ~10 м² в день на
          одного работника.
        </li>
        <li>
          <strong>Замена плинтуса.</strong> 4 часа на комнату, если стены ровные.
        </li>
      </ul>
      <p>
        Умножьте на местную дневную ставку (поищите «[ваш город] стоимость работы
        маляра в день», большинство региональных объединений мастеров публикуют
        это). Добавьте 15% на управление, налоги и прочие расходы.
      </p>

      <h2>Шаг 5: Составьте таблицу</h2>
      <p>
        На телефоне откройте Numbers или Excel. Сделайте строку для каждой позиции
        со столбцами: Количество, Единица, Цена за единицу, Итого. Сведите итоги в
        три блока: <strong>Материалы</strong>, <strong>Работа</strong>,
        <strong> Резерв</strong> (15-20% от материалов + работы).
      </p>
      <p>
        Этот итог, ваш <em>самостоятельно рассчитанный бюджет</em>. Когда начнут
        поступать предложения, за 10 минут вы поймёте, попадает ли цена в нужный
        диапазон или сильно выходит за него.
      </p>

      <h2>Шаг 6: Используйте PDF для брифа исполнителям</h2>
      <p>
        Отправьте PDF по каждой комнате (с планом помещения, размерами и расчётом
        материалов) каждому исполнителю, у которого запрашиваете цену. Это даёт
        две вещи:
      </p>
      <ul>
        <li>
          Задаёт профессиональный тон, исполнители привыкли к торгу и
          неопределённости со стороны заказчиков. Обмерянный PDF говорит: «Я
          подготовился, прошу считать соответственно».
        </li>
        <li>
          Убирает задержку «давайте я приеду и обмеряю». Исполнитель может прислать
          смету уже на следующий день, а не через неделю.
        </li>
      </ul>

      <h2>Что нельзя сделать со смартфона</h2>
      <p>
        Кое-что всё же требует выезда специалиста:
      </p>
      <ul>
        <li>
          <strong>Скрытые трубы / проводка.</strong> Если ремонт затрагивает стены
          с коммуникациями внутри, только специалист с камерой и трассоискателем
          скажет, что там находится.
        </li>
        <li>
          <strong>Конструктивные изменения.</strong> Снос стены, добавление окна,
          изменение несущих конструкций, нужен инженер или архитектор.
        </li>
        <li>
          <strong>Разрешения.</strong> Всё, что выходит за рамки косметического
          ремонта, в большинстве регионов требует согласования с муниципалитетом.
          Чертежи, сделанные по обмерам с телефона, хорошая отправная точка, но не
          замена.
        </li>
      </ul>

      <h2>Суть</h2>
      <p>
        Чтобы получить хороший результат ремонта, не обязательно во всём
        разбираться. Достаточно знать ровно столько, чтобы <em>задавать правильные
        вопросы</em>. Обмерянный план помещения, расчёт материалов и прикидка по
        работе превращают вопрос «сколько это будет стоить?» из загадки в разговор.
        Вашего телефона хватит, чтобы сделать всё три.
      </p>
    </article>
  );
}

export function PostDE() {
  return (
    <article className="prose-content">
      <p className="lead">
        Das Schwierigste am Start einer Renovierung ist nicht die Arbeit, sondern
        das Ungewisse. Wie viele Quadratmeter Fliesen? Wie viel Farbe? Was ist ein
        fairer Preis, um zwei Räume neu zu streichen? Mit einer Mess-App auf dem
        iPhone beantworten Sie alle drei Fragen, bevor Sie zum Hörer greifen.
      </p>
      <p>
        Genau diesen Ablauf würden wir selbst nutzen, um eine kleine bis mittlere
        Renovierung einzuschätzen, ein neues Bad-Fliesenbild, das Streichen einer
        Zweizimmerwohnung, einen neuen Küchenboden, vom „Das will ich machen" bis
        zum groben Budget, an einem einzigen Abend.
      </p>

      <h2>Schritt 1: Erfassen Sie jeden Raum, den Sie anfassen</h2>
      <p>
        Öffnen Sie Ruler AR (oder eine beliebige AR-Grundriss-App) und scannen Sie
        jeden betroffenen Raum. Überspringen Sie keine vermeintlich
        offensichtlichen Räume, die Waschküche, an der Sie täglich vorbeigehen, ist
        wahrscheinlich 0,5 m² größer, als Sie denken.
      </p>
      <ul>
        <li>
          Auf einem Pro iPhone nutzen Sie den LiDAR-Raumscan: gehen Sie den Umfang
          ab, und die App erstellt ein 3D-Modell mit erkannten Wänden, Türen,
          Fenstern und Möbeln.
        </li>
        <li>
          Ohne LiDAR nutzen Sie den manuellen Raum-Builder: stellen Sie sich in
          eine Ecke, gehen Sie an jeder Wand entlang und tippen Sie die Ecken an.
        </li>
        <li>
          So oder so, speichern Sie jeden Raum als Projekt. Benennen Sie sie klar:
          „Bad, Haupt", „Küche, nur Boden", „Schlafzimmer 1, Anstrich".
        </li>
      </ul>
      <p>
        Zu jedem Projekt gibt es ein PDF mit Grundriss, Wandmaßen und gesamter
        Bodenfläche. Bewahren Sie diese auf, sie sind die Grundlage für alles, was
        folgt.
      </p>

      <h2>Schritt 2: Berechnen Sie die Materialmengen</h2>
      <p>
        Öffnen Sie eines Ihrer gespeicherten Projekte. Tippen Sie in den
        Materialrechner. Die App kennt die Raummaße bereits und liefert daher in
        Sekunden Materialschätzungen:
      </p>
      <ul>
        <li>
          <strong>Farbe.</strong> Wandfläche abzüglich Tür- und Fensterausschnitte,
          geteilt durch die typische Ergiebigkeit (meist 10 m² pro Liter bei einem
          Anstrich). Standardmäßig rechnet die App mit zwei Anstrichen; passen Sie
          an, wenn Ihre Farbe ein- oder dreischichtig ist.
        </li>
        <li>
          <strong>Boden (Fliese / Laminat / Vinyl).</strong> Bodenfläche plus 10%
          Verschnitt für Zuschnitte. Größerer Verschnitt bei diagonaler Verlegung
          (15%) und Fischgrätmuster (20%).
        </li>
        <li>
          <strong>Sockelleiste / Fußleiste.</strong> Wandumfang abzüglich
          Türbreiten.
        </li>
        <li>
          <strong>Tapete.</strong> Wandfläche geteilt durch die Rollengröße (meist
          5 m² pro Rolle), aufgerundet. Plus 10% für den Musterversatz.
        </li>
        <li>
          <strong>Wandfliese.</strong> Zu fliesende Wandfläche abzüglich
          Aussparungen für Armaturen. Passen Sie nach Fliesengröße an,
          Großformatfliesen haben weniger Verschnitt als Mosaik.
        </li>
      </ul>
      <p>
        Exportieren Sie jede Schätzung als Teil des PDF. Jetzt haben Sie
        Materialmengen, die Sie in eine Preisprüfung einsetzen können.
      </p>

      <h2>Schritt 3: Materialpreise ermitteln</h2>
      <p>
        Nehmen Sie Ihre Mengen und gehen Sie in die App oder auf die Website Ihres
        bevorzugten Baumarkts. Suchen Sie Produkte, die zu Ihren Vorgaben passen
        (matte Wandfarbe, Feinsteinzeug 60×60 cm usw.) und multiplizieren Sie pro
        Position Menge × Stückpreis.
      </p>
      <p>
        Tipp: Vergleichen Sie zwei oder drei Anbieter, bevor Sie sich festlegen.
        Bei identischen Produkten unterscheiden sich die Preise oft um 30%+
        zwischen IKEA, Home Depot/Lowe's, Leroy Merlin, B&Q, OBI oder lokalen
        Händlern.
      </p>
      <p>
        Speichern Sie die Warenkorbsumme pro Anbieter. Das ist Ihre
        <strong> Materialbasis</strong>.
      </p>

      <h2>Schritt 4: Arbeitskosten abschätzen</h2>
      <p>
        Arbeitskosten lassen sich vom Telefon aus schwerer schätzen, weil die Sätze
        von Ihrer Region, der Art der Arbeit und den Gemeinkosten des Handwerkers
        abhängen. Aber eine Größenordnung geht:
      </p>
      <ul>
        <li>
          <strong>Einen Raum streichen.</strong> 0,5-1,5 Tage pro Raum für einen
          Maler, je nach nötiger Vorbereitung.
        </li>
        <li>
          <strong>Einen Badboden fliesen (4-6 m²).</strong> 1-2 Tage für einen
          Fliesenleger, inklusive Abdichtung.
        </li>
        <li>
          <strong>Laminat oder Vinyl-Klickboden verlegen.</strong> ~10 m² pro Tag
          und Arbeiter.
        </li>
        <li>
          <strong>Sockelleiste erneuern.</strong> 4 Stunden pro Raum, wenn die
          Wände gerade sind.
        </li>
      </ul>
      <p>
        Multiplizieren Sie mit dem lokalen Tagessatz (suchen Sie „[Ihre Stadt]
        Maler Tagessatz", die meisten regionalen Handwerksverbände veröffentlichen
        das). Schlagen Sie 15% für Organisation, Steuern und Sonstiges auf.
      </p>

      <h2>Schritt 5: Bauen Sie die Tabelle</h2>
      <p>
        Öffnen Sie auf dem Telefon Numbers oder Excel. Legen Sie für jede Position
        eine Zeile mit den Spalten an: Menge, Einheit, Stückpreis, Gesamt. Fassen
        Sie die Summen in drei Bereichen zusammen: <strong>Material</strong>,
        <strong>Arbeit</strong>, <strong> Puffer</strong> (15-20% von Material +
        Arbeit).
      </p>
      <p>
        Diese Summe ist Ihr <em>selbst geschätztes Budget</em>. Wenn die Angebote
        eintrudeln, erkennen Sie binnen 10 Minuten, ob ein Angebot im richtigen
        Bereich liegt oder völlig daneben.
      </p>

      <h2>Schritt 6: Briefen Sie Handwerker mit dem PDF</h2>
      <p>
        Schicken Sie die PDFs pro Raum (mit Grundriss, Maßen und Materialschätzung)
        an jeden Handwerker, von dem Sie ein Angebot einholen. Das bewirkt zweierlei:
      </p>
      <ul>
        <li>
          Es setzt einen professionellen Ton, Handwerker erwarten von Eigentümern
          Feilschen und Unklarheiten. Ein vermessenes PDF sagt: „Ich habe meine
          Hausaufgaben gemacht, bitte entsprechend kalkulieren".
        </li>
        <li>
          Es spart die Verzögerung „Ich komme erst mal vorbei und messe nach". Der
          Handwerker kann das Angebot schon am nächsten Tag schicken statt erst in
          der nächsten Woche.
        </li>
      </ul>

      <h2>Was vom Telefon aus nicht geht</h2>
      <p>
        Manches erfordert weiterhin einen Vor-Ort-Termin:
      </p>
      <ul>
        <li>
          <strong>Verdeckte Sanitär- / Elektroleitungen.</strong> Wenn die
          Renovierung Wände mit Leitungen dahinter betrifft, kann nur ein
          Handwerker mit Kamera und Leitungssucher sagen, was dort liegt.
        </li>
        <li>
          <strong>Bauliche Änderungen.</strong> Eine Wand entfernen, ein Fenster
          einsetzen, tragende Strukturen verändern, braucht einen Ingenieur oder
          Architekten.
        </li>
        <li>
          <strong>Genehmigungen.</strong> Alles über rein kosmetische Arbeiten
          hinaus braucht in den meisten Gegenden die Freigabe der Behörde. Mit dem
          Telefon vermessene Zeichnungen sind ein guter Ausgangspunkt, aber kein
          Ersatz.
        </li>
      </ul>

      <h2>Der Punkt</h2>
      <p>
        Sie müssen kein Profi sein, um ein gutes Renovierungsergebnis zu erzielen.
        Sie müssen nur genug wissen, um <em>die richtigen Fragen zu stellen</em>.
        Ein vermessener Grundriss, eine Materialschätzung und eine grobe
        Arbeitskalkulation verwandeln „Was kostet das?" von einem Rätsel in ein
        Gespräch. Ihr Telefon reicht, um alle drei zu erledigen.
      </p>
    </article>
  );
}

export function PostFR() {
  return (
    <article className="prose-content">
      <p className="lead">
        Le plus dur quand on lance une rénovation, ce n'est pas les travaux, ce
        sont les inconnues. Combien de mètres carrés de carrelage ? Combien de
        peinture ? Quel est un prix raisonnable pour repeindre deux pièces ? Avec
        une appli de mesure sur votre iPhone, vous répondez aux trois avant même de
        passer un seul appel.
      </p>
      <p>
        C'est la méthode que nous utiliserions nous-mêmes pour cadrer une
        rénovation petite à moyenne, recarreler une salle de bain, repeindre un
        deux-pièces, remplacer un sol de cuisine, en partant de « je veux faire
        ça » pour arriver à un budget estimé, en une seule soirée.
      </p>

      <h2>Étape 1 : Relevez chaque pièce concernée</h2>
      <p>
        Ouvrez Ruler AR (ou n'importe quelle appli de plan en AR) et scannez chaque
        pièce concernée. Ne sautez pas les pièces que vous croyez évidentes, la
        buanderie devant laquelle vous passez chaque jour fait sans doute 0,5 m² de
        plus que vous ne le pensez.
      </p>
      <ul>
        <li>
          Sur un iPhone Pro, utilisez le scan de pièce LiDAR : faites le tour du
          périmètre, et l'appli construit un modèle 3D avec murs, portes, fenêtres
          et meubles identifiés.
        </li>
        <li>
          Sans LiDAR, utilisez le constructeur de pièce manuel : placez-vous dans
          un coin, longez chaque mur, touchez les angles.
        </li>
        <li>
          Dans tous les cas, enregistrez chaque pièce comme un projet. Nommez-les
          clairement : « Salle de bain, principale », « Cuisine, sol uniquement »,
          « Chambre 1, peinture ».
        </li>
      </ul>
      <p>
        Chaque projet donne un PDF avec plan + dimensions des murs + surface totale
        au sol. Gardez-les, ce sont les données d'entrée de tout ce qui suit.
      </p>

      <h2>Étape 2 : Calculez les quantités de matériaux</h2>
      <p>
        Ouvrez l'un de vos projets enregistrés. Entrez dans le calculateur de
        matériaux. L'appli connaît déjà les dimensions de la pièce, elle produit
        donc des estimations de matériaux en quelques secondes :
      </p>
      <ul>
        <li>
          <strong>Peinture.</strong> Surface des murs moins les découpes de portes
          et fenêtres, divisée par le rendement habituel (en général 10 m² par
          litre pour une couche). Par défaut, l'appli compte deux couches ;
          ajustez si votre peinture est en une ou trois couches.
        </li>
        <li>
          <strong>Sol (carrelage / stratifié / vinyle).</strong> Surface au sol +
          10% de chute pour les coupes. Chute plus élevée en pose diagonale (15%)
          et en motif chevron (20%).
        </li>
        <li>
          <strong>Plinthe.</strong> Périmètre des murs moins la largeur des portes.
        </li>
        <li>
          <strong>Papier peint.</strong> Surface des murs divisée par la taille du
          rouleau (souvent 5 m² par rouleau), arrondie au supérieur. Ajoutez 10%
          pour le raccord de motif.
        </li>
        <li>
          <strong>Carrelage mural.</strong> Surface murale à carreler moins les
          découpes pour les équipements. Ajustez selon le format des carreaux, les
          grands formats génèrent moins de chute que la mosaïque.
        </li>
      </ul>
      <p>
        Exportez chaque estimation dans le PDF. Vous avez maintenant des quantités
        de matériaux à injecter dans une phase de vérification des prix.
      </p>

      <h2>Étape 3 : Chiffrez les matériaux</h2>
      <p>
        Reportez vos quantités dans l'appli ou le site de votre enseigne de
        bricolage préférée. Cherchez les produits qui correspondent à vos critères
        (peinture murale mate, carrelage en grès cérame 60×60 cm, etc.) et
        multipliez quantité × prix unitaire pour chaque ligne.
      </p>
      <p>
        Astuce : comparez deux ou trois enseignes avant de vous décider. Sur des
        produits identiques, les prix varient souvent de 30%+ entre IKEA, Home
        Depot/Lowe's, Leroy Merlin, B&Q, OBI ou des distributeurs locaux.
      </p>
      <p>
        Enregistrez le total du panier par enseigne. C'est votre <strong>budget
        matériaux de référence</strong>.
      </p>

      <h2>Étape 4 : Estimez la main-d'œuvre</h2>
      <p>
        La main-d'œuvre est plus difficile à estimer depuis un téléphone, car les
        tarifs dépendent de votre région, du type de travaux et des frais généraux
        de l'artisan. Mais on peut donner un ordre de grandeur :
      </p>
      <ul>
        <li>
          <strong>Peindre une pièce.</strong> 0,5-1,5 jour par pièce pour un
          peintre, selon la préparation nécessaire.
        </li>
        <li>
          <strong>Carreler un sol de salle de bain (4-6 m²).</strong> 1-2 jours
          pour un carreleur, étanchéité comprise.
        </li>
        <li>
          <strong>Poser du stratifié ou un sol vinyle à clipser.</strong> ~10 m²
          par jour et par ouvrier.
        </li>
        <li>
          <strong>Remplacer les plinthes.</strong> 4 heures par pièce si les murs
          sont droits.
        </li>
      </ul>
      <p>
        Multipliez par le tarif journalier local (cherchez « tarif journalier
        peintre [votre ville] », la plupart des fédérations d'artisans régionales
        le publient). Ajoutez 15% pour la gestion, les taxes et les divers.
      </p>

      <h2>Étape 5 : Montez le tableur</h2>
      <p>
        Sur votre téléphone, ouvrez Numbers ou Excel. Créez une ligne par poste
        avec les colonnes : Quantité, Unité, Prix unitaire, Total. Additionnez les
        totaux en trois blocs : <strong>Matériaux</strong>,
        <strong>Main-d'œuvre</strong>, <strong> Marge de sécurité</strong> (15-20%
        des matériaux + main-d'œuvre).
      </p>
      <p>
        Ce total, c'est votre <em>budget auto-estimé</em>. Quand les devis
        commenceront à arriver, vous saurez en 10 minutes si un devis est dans la
        bonne fourchette ou complètement à côté.
      </p>

      <h2>Étape 6 : Servez-vous du PDF pour briefer les artisans</h2>
      <p>
        Envoyez les PDF par pièce (avec plan + dimensions + estimation des
        matériaux) à chaque artisan dont vous voulez un devis. Cela fait deux
        choses :
      </p>
      <ul>
        <li>
          Cela donne un ton professionnel, les artisans s'attendent à du
          marchandage et à du flou de la part des particuliers. Un PDF mesuré dit :
          « J'ai fait mes devoirs, merci de chiffrer en conséquence ».
        </li>
        <li>
          Cela supprime le délai du « laissez-moi venir mesurer ». L'artisan peut
          envoyer un devis dès le lendemain au lieu de la semaine suivante.
        </li>
      </ul>

      <h2>Ce qu'on ne peut pas faire depuis un téléphone</h2>
      <p>
        Certaines choses nécessitent toujours la visite d'un artisan :
      </p>
      <ul>
        <li>
          <strong>Plomberie / électricité cachées.</strong> Si la rénovation touche
          des murs avec des réseaux derrière, seul un artisan muni d'une caméra et
          d'un détecteur de câbles peut dire ce qui s'y trouve.
        </li>
        <li>
          <strong>Modifications structurelles.</strong> Abattre un mur, ajouter une
          fenêtre, toucher à une structure porteuse, cela exige un ingénieur ou un
          architecte.
        </li>
        <li>
          <strong>Permis.</strong> Tout ce qui dépasse les travaux esthétiques
          nécessite, dans la plupart des juridictions, un accord municipal. Des
          plans mesurés au téléphone sont un bon point de départ, mais pas un
          substitut.
        </li>
      </ul>

      <h2>L'essentiel</h2>
      <p>
        Vous n'avez pas besoin de tout maîtriser pour obtenir une bonne rénovation.
        Il suffit d'en savoir assez pour <em>poser les bonnes questions</em>. Un
        plan mesuré, une estimation des matériaux et un ordre de grandeur de la
        main-d'œuvre transforment « combien ça va coûter ? » d'une énigme en une
        conversation. Votre téléphone suffit pour faire les trois.
      </p>
    </article>
  );
}

export function PostES() {
  return (
    <article className="prose-content">
      <p className="lead">
        Lo más difícil al empezar una reforma no es el trabajo, son las
        incógnitas. ¿Cuántos metros cuadrados de azulejo? ¿Cuánta pintura? ¿Cuál es
        un precio razonable por repintar dos habitaciones? Con una app de medición
        en tu iPhone respondes a las tres antes de hacer una sola llamada.
      </p>
      <p>
        Este es el flujo que usaríamos nosotros mismos para dimensionar una reforma
        pequeña o mediana, retejar un baño, pintar un piso de un dormitorio,
        cambiar el suelo de la cocina, pasando de «quiero hacer esto» a un
        presupuesto aproximado, en una sola tarde.
      </p>

      <h2>Paso 1: Captura cada habitación que vayas a tocar</h2>
      <p>
        Abre Ruler AR (o cualquier app de planos en AR) y escanea cada habitación
        afectada. No te saltes las que crees evidentes, el lavadero por el que pasas
        cada día seguramente tiene 0,5 m² más de lo que piensas.
      </p>
      <ul>
        <li>
          En un iPhone Pro, usa el escaneo de habitaciones con LiDAR: recorre el
          perímetro y la app crea un modelo 3D con paredes, puertas, ventanas y
          muebles identificados.
        </li>
        <li>
          Sin LiDAR, usa el constructor manual de habitaciones: ponte en una
          esquina, recorre cada pared y toca las esquinas.
        </li>
        <li>
          En cualquier caso, guarda cada habitación como un proyecto. Nómbralas con
          claridad: «Baño, principal», «Cocina, solo suelo», «Dormitorio 1,
          pintura».
        </li>
      </ul>
      <p>
        Cada proyecto genera un PDF con plano + dimensiones de las paredes +
        superficie total del suelo. Guárdalos, son los datos de partida para todo
        lo que viene después.
      </p>

      <h2>Paso 2: Calcula las cantidades de material</h2>
      <p>
        Abre uno de tus proyectos guardados. Entra en la calculadora de materiales.
        La app ya conoce las dimensiones de la habitación, así que produce
        estimaciones de material en segundos:
      </p>
      <ul>
        <li>
          <strong>Pintura.</strong> Superficie de paredes menos los huecos de
          puertas y ventanas, dividida por el rendimiento típico (normalmente 10 m²
          por litro a una mano). Por defecto la app cuenta dos manos; ajústalo si tu
          pintura es de una o tres manos.
        </li>
        <li>
          <strong>Suelo (azulejo / laminado / vinilo).</strong> Superficie del suelo
          + 10% de merma por los cortes. Más merma en colocación diagonal (15%) y
          patrón de espiga (20%).
        </li>
        <li>
          <strong>Rodapié / zócalo.</strong> Perímetro de las paredes menos el ancho
          de las puertas.
        </li>
        <li>
          <strong>Papel pintado.</strong> Superficie de paredes dividida por el
          tamaño del rollo (normalmente 5 m² por rollo), redondeando hacia arriba.
          Añade un 10% para casar el dibujo.
        </li>
        <li>
          <strong>Azulejo de pared.</strong> Superficie de pared a alicatar menos
          los recortes para los sanitarios. Ajusta según el tamaño del azulejo, los
          formatos grandes generan menos merma que el mosaico.
        </li>
      </ul>
      <p>
        Exporta cada estimación dentro del PDF. Ahora tienes cantidades de material
        que puedes llevar a una fase de comprobación de precios.
      </p>

      <h2>Paso 3: Pon precio a los materiales</h2>
      <p>
        Lleva tus cantidades a la app o la web de tu tienda de bricolaje favorita.
        Busca productos que encajen con tus especificaciones (pintura mate para
        paredes, porcelánico de 60×60 cm, etc.) y multiplica cantidad × precio
        unitario por cada partida.
      </p>
      <p>
        Consejo: compara dos o tres tiendas antes de decidirte. En productos
        idénticos, los precios suelen variar un 30%+ entre IKEA, Home Depot/Lowe's,
        Leroy Merlin, B&Q, OBI o distribuidores locales.
      </p>
      <p>
        Guarda el total del carrito por tienda. Esa es tu <strong>base de
        materiales</strong>.
      </p>

      <h2>Paso 4: Estima la mano de obra</h2>
      <p>
        La mano de obra es más difícil de estimar desde el móvil porque las tarifas
        dependen de tu región, el tipo de trabajo y los gastos generales del
        profesional. Pero puedes aproximar:
      </p>
      <ul>
        <li>
          <strong>Pintar una habitación.</strong> 0,5-1,5 días por habitación para
          un pintor, según la preparación necesaria.
        </li>
        <li>
          <strong>Alicatar el suelo de un baño (4-6 m²).</strong> 1-2 días para un
          alicatador, incluida la impermeabilización.
        </li>
        <li>
          <strong>Colocar laminado o suelo vinílico de clic.</strong> ~10 m² al día
          por operario.
        </li>
        <li>
          <strong>Cambiar el rodapié.</strong> 4 horas por habitación si las paredes
          están a escuadra.
        </li>
      </ul>
      <p>
        Multiplica por la tarifa diaria local (busca «precio día pintor [tu
        ciudad]», la mayoría de las asociaciones regionales de gremios lo publican).
        Añade un 15% para gestión, impuestos y varios.
      </p>

      <h2>Paso 5: Monta la hoja de cálculo</h2>
      <p>
        En tu móvil, abre Numbers o Excel. Crea una fila por cada partida con las
        columnas: Cantidad, Unidad, Precio unitario, Total. Suma los totales en tres
        bloques: <strong>Materiales</strong>, <strong>Mano de obra</strong>,
        <strong> Imprevistos</strong> (15-20% de materiales + mano de obra).
      </p>
      <p>
        Ese total es tu <em>presupuesto autoestimado</em>. Cuando empiecen a
        llegarte presupuestos, en 10 minutos sabrás si uno está en la zona correcta
        o totalmente fuera.
      </p>

      <h2>Paso 6: Usa el PDF para informar a los profesionales</h2>
      <p>
        Envía los PDF por habitación (con plano + dimensiones + estimación de
        material) a cada profesional al que pidas presupuesto. Esto consigue dos
        cosas:
      </p>
      <ul>
        <li>
          Marca un tono profesional, los profesionales esperan regateo y
          ambigüedad por parte de los propietarios. Un PDF medido dice: «He hecho los
          deberes, presupuesta en consecuencia».
        </li>
        <li>
          Elimina el retraso del «déjame ir a medir». El profesional puede mandar el
          presupuesto al día siguiente en lugar de la semana que viene.
        </li>
      </ul>

      <h2>Lo que no puedes hacer desde el móvil</h2>
      <p>
        Algunas cosas siguen requiriendo la visita de un profesional:
      </p>
      <ul>
        <li>
          <strong>Fontanería / electricidad ocultas.</strong> Si la reforma afecta a
          paredes con instalaciones detrás, solo un profesional con cámara y
          detector de cables puede decirte qué hay ahí.
        </li>
        <li>
          <strong>Cambios estructurales.</strong> Quitar una pared, abrir una
          ventana, tocar una estructura de carga, requiere un ingeniero o
          arquitecto.
        </li>
        <li>
          <strong>Licencias.</strong> Todo lo que vaya más allá del trabajo estético
          necesita, en la mayoría de las jurisdicciones, el visto bueno municipal.
          Los planos medidos con el móvil son un buen punto de partida, pero no un
          sustituto.
        </li>
      </ul>

      <h2>La clave</h2>
      <p>
        No necesitas saber de todo para conseguir un buen resultado en una reforma.
        Solo necesitas saber lo suficiente para <em>hacer las preguntas
        correctas</em>. Un plano medido, una estimación de materiales y una
        aproximación de mano de obra convierten «¿cuánto costará esto?» de un
        misterio en una conversación. Tu móvil basta para hacer las tres cosas.
      </p>
    </article>
  );
}

export function PostJA() {
  return (
    <article className="prose-content">
      <p className="lead">
        リフォームを始めるときに一番難しいのは作業そのものではなく、わからないことの多さ
        です。タイルは何平方メートル必要？ ペンキはどれくらい？ 2部屋を塗り直す妥当な見積額
        は？ iPhone の計測アプリがあれば、一本も電話をかける前にこの3つすべてに答えられます。
      </p>
      <p>
        これは、私たち自身が小規模から中規模のリフォームを見積もるときに使う手順です。
        浴室のタイル張り替え、1ベッドルームの塗装、キッチンの床の張り替えなど、「やりたい」
        から「だいたいの予算」まで、一晩で進めます。
      </p>

      <h2>ステップ 1: 手を入れる部屋をすべて記録する</h2>
      <p>
        Ruler AR（または任意の AR 間取りアプリ）を開き、対象となる各部屋をスキャンします。
        当たり前に思える部屋も飛ばさないこと。毎日通り過ぎる洗濯室は、思っているより
        0.5 m² 広いものです。
      </p>
      <ul>
        <li>
          Pro の iPhone なら LiDAR の部屋スキャンを使います。周囲を歩くだけで、壁・ドア・窓
          ・家具を認識した 3D モデルをアプリが作成します。
        </li>
        <li>
          LiDAR がない場合は手動の部屋作成を使います。隅に立ち、各壁に沿って歩いて、角を
          タップします。
        </li>
        <li>
          いずれの場合も、各部屋をプロジェクトとして保存します。わかりやすい名前を付けましょう。
          「浴室・メイン」「キッチン・床のみ」「寝室1・塗装」のように。
        </li>
      </ul>
      <p>
        各プロジェクトには、間取り図＋壁の寸法＋床面積の合計が入った PDF が付きます。
        これらは後続のすべての入力データになるので、保存しておきましょう。
      </p>

      <h2>ステップ 2: 必要な材料の数量を計算する</h2>
      <p>
        保存済みのプロジェクトを開きます。材料計算機に入ります。アプリはすでに部屋の寸法を
        把握しているので、数秒で材料の見積もりを出せます。
      </p>
      <ul>
        <li>
          <strong>ペンキ。</strong> 壁面積からドアと窓の開口部を引き、標準的な塗布量（通常は
          1回塗りで1リットルあたり 10 m²）で割ります。アプリは初期設定で2回塗りを前提とします。
          1回塗りや3回塗りの場合は調整してください。
        </li>
        <li>
          <strong>床（タイル / ラミネート / ビニル）。</strong> 床面積に、切断によるロス10% を
          加えます。斜め張り（15%）やヘリンボーン柄（20%）ではロスが大きくなります。
        </li>
        <li>
          <strong>巾木。</strong> 壁の周囲長からドアの幅を引いたものです。
        </li>
        <li>
          <strong>壁紙。</strong> 壁面積をロール寸法（通常は1ロールあたり 5 m²）で割り、切り
          上げます。柄合わせのために10% を加えます。
        </li>
        <li>
          <strong>壁タイル。</strong> タイルを張る壁面積から、設備のための切り抜き分を引きます。
          タイルのサイズに応じて調整します。大判タイルはモザイクよりロスが少なくなります。
        </li>
      </ul>
      <p>
        各見積もりを PDF の一部として書き出します。これで、価格チェックの段階に流し込める材料
        数量が手に入りました。
      </p>

      <h2>ステップ 3: 材料の価格を出す</h2>
      <p>
        数量を持って、お気に入りのホームセンターのアプリやサイトを開きます。仕様に合う商品
        （マット仕上げの壁用塗料、60×60 cm の磁器質タイルなど）を探し、各項目ごとに数量 × 単価
        を掛けます。
      </p>
      <p>
        ヒント：決める前に2〜3店舗を比較しましょう。同じ商品でも、IKEA、Home Depot/Lowe's、
        Leroy Merlin、B&Q、OBI、地元の販売店の間で価格が 30% 以上ばらつくことがよくあります。
      </p>
      <p>
        店舗ごとにカートの合計を保存します。これがあなたの<strong>材料費の基準額</strong>です。
      </p>

      <h2>ステップ 4: 人件費を見積もる</h2>
      <p>
        人件費は、料金が地域・作業の種類・職人の諸経費に左右されるため、スマホからの見積もりが
        難しい部分です。それでもおおよその見当はつけられます。
      </p>
      <ul>
        <li>
          <strong>部屋を塗装する。</strong> 塗装工1人で1部屋あたり 0.5〜1.5 日、必要な下準備に
          応じます。
        </li>
        <li>
          <strong>浴室の床にタイルを張る（4〜6 m²）。</strong> 防水の下準備を含め、タイル工
          1人で 1〜2 日。
        </li>
        <li>
          <strong>ラミネートやビニルのクリック式床材を敷く。</strong> 作業員1人あたり1日約 10 m²。
        </li>
        <li>
          <strong>巾木を交換する。</strong> 壁が直角に出ていれば1部屋あたり4時間。
        </li>
      </ul>
      <p>
        地域の日当（「[あなたの街] 塗装工 日当」で検索。多くの地域の業者団体が公表しています）を
        掛けます。管理費・税・雑費として15% を加えます。
      </p>

      <h2>ステップ 5: 表を作る</h2>
      <p>
        スマホで Numbers または Excel を開きます。項目ごとに行を作り、列は「数量」「単位」
        「単価」「合計」とします。合計を3つの区分にまとめます。<strong>材料費</strong>、
        <strong>人件費</strong>、<strong> 予備費</strong>（材料費＋人件費の15〜20%）。
      </p>
      <p>
        この合計が、あなたの<em>自己査定の予算</em>です。見積もりが届き始めたら、それが妥当な
        範囲内か、大きく外れているかが10分でわかります。
      </p>

      <h2>ステップ 6: PDF を使って業者に依頼内容を伝える</h2>
      <p>
        部屋ごとの PDF（間取り図＋寸法＋材料見積もり付き）を、見積もりを取る各業者に送ります。
        これには2つの効果があります。
      </p>
      <ul>
        <li>
          プロらしいトーンになります。業者は施主からの値切りやあいまいさを想定しています。
          採寸された PDF は「下調べは済んでいます。それを前提に見積もってください」と伝えます。
        </li>
        <li>
          「では一度測りに伺います」という遅れをなくします。業者は来週ではなく翌日には見積もり
          を送れます。
        </li>
      </ul>

      <h2>スマホではできないこと</h2>
      <p>
        いくつかのことは、やはり業者の訪問が必要です。
      </p>
      <ul>
        <li>
          <strong>隠れた配管・電気。</strong> リフォームが背後に設備のある壁にかかる場合、何が
          あるかを教えてくれるのは、カメラとケーブル探知機を持った業者だけです。
        </li>
        <li>
          <strong>構造の変更。</strong> 壁の撤去、窓の増設、耐力構造の変更には、技術者または
          建築士が必要です。
        </li>
        <li>
          <strong>許認可。</strong> ほとんどの自治体では、表面的な工事を超えるものには行政の
          承認が必要です。スマホで採寸した図面はよい出発点ですが、代わりにはなりません。
        </li>
      </ul>

      <h2>要点</h2>
      <p>
        よいリフォームの結果を得るために、すべてを知っている必要はありません。<em>適切な質問を
        する</em>のに十分なだけ知っていればよいのです。採寸した間取り図、材料の見積もり、人件費
        のおおよその見当があれば、「これはいくらかかる？」という謎が会話に変わります。3つすべて
        を行うのに、あなたのスマホで十分です。
      </p>
    </article>
  );
}

export function PostKO() {
  return (
    <article className="prose-content">
      <p className="lead">
        리모델링을 시작할 때 가장 어려운 건 작업 자체가 아니라 모르는 것들입니다. 타일은 몇
        제곱미터? 페인트는 얼마나? 방 두 개를 다시 칠하는 데 합리적인 견적은 얼마? iPhone의
        측정 앱만 있으면 전화 한 통 걸기 전에 이 세 가지에 모두 답할 수 있습니다.
      </p>
      <p>
        이것은 우리 자신이 소규모에서 중간 규모의 리모델링 범위를 잡을 때 쓰는 방식입니다.
        욕실 타일 재시공, 방 한 칸짜리 집 도장, 주방 바닥 교체 등 「하고 싶다」에서
        대략적인 예산까지, 하룻저녁에 끝냅니다.
      </p>

      <h2>1단계: 손댈 모든 방을 기록하세요</h2>
      <p>
        Ruler AR(또는 AR 평면도 앱이라면 무엇이든)을 열고 영향을 받는 각 방을 스캔하세요.
        뻔해 보이는 방도 건너뛰지 마세요. 매일 지나치는 세탁실은 아마 생각보다 0.5 m² 더
        넓을 겁니다.
      </p>
      <ul>
        <li>
          Pro iPhone에서는 LiDAR 방 스캔을 사용하세요. 둘레를 따라 걸으면 앱이 벽, 문, 창,
          가구를 인식한 3D 모델을 만듭니다.
        </li>
        <li>
          LiDAR가 없다면 수동 방 만들기를 사용하세요. 한쪽 모서리에 서서 각 벽을 따라 걸으며
          모서리를 탭하세요.
        </li>
        <li>
          어느 쪽이든 각 방을 프로젝트로 저장하세요. 이름은 명확하게 「욕실, 메인」, 「주방,
          바닥만」, 「침실 1, 도장」처럼 지으세요.
        </li>
      </ul>
      <p>
        각 프로젝트에는 평면도 + 벽 치수 + 전체 바닥 면적이 담긴 PDF가 함께 생깁니다. 이후
        모든 작업의 입력 자료이니 잘 보관하세요.
      </p>

      <h2>2단계: 자재 수량을 계산하세요</h2>
      <p>
        저장된 프로젝트 중 하나를 여세요. 자재 계산기로 들어가세요. 앱은 이미 방의 치수를 알고
        있으므로 몇 초 만에 자재 추정치를 만들어 냅니다.
      </p>
      <ul>
        <li>
          <strong>페인트.</strong> 벽 면적에서 문과 창 개구부를 뺀 뒤, 일반적인 도포량(보통
          1회 도장 시 리터당 10 m²)으로 나눕니다. 앱은 기본적으로 2회 도장을 가정합니다.
          1회 또는 3회 도장이라면 조정하세요.
        </li>
        <li>
          <strong>바닥(타일 / 라미네이트 / 비닐).</strong> 바닥 면적에 절단 로스 10%를
          더합니다. 대각선 시공(15%)이나 헤링본 패턴(20%)은 로스가 더 큽니다.
        </li>
        <li>
          <strong>걸레받이.</strong> 벽 둘레에서 문 폭을 뺀 길이입니다.
        </li>
        <li>
          <strong>벽지.</strong> 벽 면적을 롤 크기(보통 롤당 5 m²)로 나누고 올림 처리합니다.
          무늬 맞춤을 위해 10%를 더하세요.
        </li>
        <li>
          <strong>벽 타일.</strong> 타일을 붙일 벽 면적에서 설비용 절개분을 뺍니다. 타일 크기에
          따라 조정하세요. 대형 타일은 모자이크보다 로스가 적습니다.
        </li>
      </ul>
      <p>
        각 추정치를 PDF에 포함해 내보내세요. 이제 가격 확인 단계에 넣을 수 있는 자재 수량이
        준비되었습니다.
      </p>

      <h2>3단계: 자재 가격을 산정하세요</h2>
      <p>
        수량을 들고 즐겨 찾는 철물·자재 매장의 앱이나 웹사이트로 가세요. 사양에 맞는 제품(무광
        벽용 페인트, 60×60 cm 포세린 타일 등)을 찾아 항목마다 수량 × 단가를 곱하세요.
      </p>
      <p>
        팁: 결정하기 전에 두세 곳을 비교하세요. 동일한 제품이라도 IKEA, Home Depot/Lowe's,
        Leroy Merlin, B&Q, OBI, 또는 지역 유통업체 간 가격이 30% 이상 차이 나는 경우가 흔합니다.
      </p>
      <p>
        매장별로 장바구니 합계를 저장하세요. 이것이 당신의 <strong>자재 기준 금액</strong>입니다.
      </p>

      <h2>4단계: 인건비를 추정하세요</h2>
      <p>
        인건비는 단가가 지역, 작업 종류, 시공자의 간접비에 따라 달라지기 때문에 휴대폰으로
        추정하기가 더 어렵습니다. 그래도 대략적인 가늠은 가능합니다.
      </p>
      <ul>
        <li>
          <strong>방 도장.</strong> 필요한 사전 작업에 따라 도장공 1명 기준 방 한 칸당
          0.5~1.5일.
        </li>
        <li>
          <strong>욕실 바닥 타일 시공(4~6 m²).</strong> 방수 사전 작업 포함, 타일공 1명 기준
          1~2일.
        </li>
        <li>
          <strong>라미네이트 또는 클릭식 비닐 바닥 시공.</strong> 작업자 1명당 하루 약 10 m².
        </li>
        <li>
          <strong>걸레받이 교체.</strong> 벽이 직각이면 방 한 칸당 4시간.
        </li>
      </ul>
      <p>
        지역 일당(「[당신의 도시] 도장공 일당」으로 검색하세요. 대부분의 지역 시공자 협회가
        공개합니다)을 곱하세요. 관리비, 세금, 기타 비용으로 15%를 더하세요.
      </p>

      <h2>5단계: 표를 만드세요</h2>
      <p>
        휴대폰에서 Numbers나 Excel을 여세요. 항목마다 행을 만들고 열은 수량, 단위, 단가,
        합계로 두세요. 합계를 세 묶음으로 정리하세요. <strong>자재</strong>,
        <strong>인건비</strong>, <strong> 예비비</strong>(자재 + 인건비의 15~20%).
      </p>
      <p>
        이 합계가 당신의 <em>자가 산정 예산</em>입니다. 견적이 들어오기 시작하면, 그 견적이
        적정 범위에 있는지 크게 벗어났는지 10분 안에 알 수 있습니다.
      </p>

      <h2>6단계: PDF로 시공자에게 설명하세요</h2>
      <p>
        방별 PDF(평면도 + 치수 + 자재 추정치 포함)를 견적을 받을 모든 시공자에게 보내세요.
        이렇게 하면 두 가지 효과가 있습니다.
      </p>
      <ul>
        <li>
          전문적인 분위기를 만듭니다. 시공자는 집주인이 흥정과 모호함을 보일 거라 예상합니다.
          측정된 PDF는 「제가 미리 알아봤으니 그에 맞게 견적을 주세요」라고 말합니다.
        </li>
        <li>
          「가서 한번 재 보겠습니다」라는 지연을 없앱니다. 시공자는 다음 주가 아니라 다음 날
          견적을 보낼 수 있습니다.
        </li>
      </ul>

      <h2>휴대폰으로 할 수 없는 것</h2>
      <p>
        어떤 일은 여전히 시공자의 방문이 필요합니다.
      </p>
      <ul>
        <li>
          <strong>숨겨진 배관 / 전기.</strong> 리모델링이 뒤에 설비가 있는 벽에 닿는다면, 그
          안에 무엇이 있는지는 카메라와 배선 탐지기를 갖춘 시공자만 알려 줄 수 있습니다.
        </li>
        <li>
          <strong>구조 변경.</strong> 벽 철거, 창 추가, 내력 구조 변경에는 기술사나 건축사가
          필요합니다.
        </li>
        <li>
          <strong>허가.</strong> 대부분의 관할 구역에서 표면적인 공사를 넘어서는 일은 지자체의
          승인이 필요합니다. 휴대폰으로 측정한 도면은 좋은 출발점이지만 대체물은 아닙니다.
        </li>
      </ul>

      <h2>핵심</h2>
      <p>
        좋은 리모델링 결과를 얻기 위해 모든 걸 알 필요는 없습니다. <em>올바른 질문을 할</em>
        만큼만 알면 됩니다. 측정된 평면도, 자재 추정치, 인건비 가늠은 「이게 얼마나 들까?」를
        수수께끼에서 대화로 바꿔 줍니다. 세 가지 모두 당신의 휴대폰만으로 충분히 할 수 있습니다.
      </p>
    </article>
  );
}

export function PostZH() {
  return (
    <article className="prose-content">
      <p className="lead">
        开始装修最难的部分不是干活，而是那些未知数。要多少平方米的瓷砖？要多少油漆？重新粉刷
        两个房间，多少报价才算合理？只要 iPhone 上有一款测量应用，你在打第一个电话之前就能把
        这三件事都搞清楚。
      </p>
      <p>
        这就是我们自己用来评估中小型装修的流程，比如浴室重新贴砖、一居室刷漆、更换厨房地板，
        从「我想做这个」到一个大致预算，一个晚上就能搞定。
      </p>

      <h2>第 1 步：把每个要动的房间都记录下来</h2>
      <p>
        打开 Ruler AR（或任何 AR 户型图应用），扫描每一个受影响的房间。别跳过你觉得理所当然的
        房间，那个你每天路过的洗衣房，多半比你以为的还要大上 0.5 m²。
      </p>
      <ul>
        <li>
          在 Pro 版 iPhone 上，使用 LiDAR 房间扫描：沿着周边走一圈，应用就会生成一个 3D 模型，
          并识别出墙壁、门、窗和家具。
        </li>
        <li>
          没有 LiDAR 时，使用手动建房功能：站在一个角落，沿每面墙走，逐个点选墙角。
        </li>
        <li>
          无论用哪种方式，都把每个房间存为一个项目。命名要清晰：「浴室，主」、「厨房，仅地面」、
          「卧室 1，刷漆」。
        </li>
      </ul>
      <p>
        每个项目都会生成一份 PDF，包含户型图、墙体尺寸和地面总面积。保存好它们，这是后续一切
        工作的输入数据。
      </p>

      <h2>第 2 步：计算材料用量</h2>
      <p>
        打开你保存的某个项目。点进材料计算器。应用已经知道房间尺寸，所以能在几秒内给出材料
        估算：
      </p>
      <ul>
        <li>
          <strong>油漆。</strong> 墙面面积减去门窗开口，再除以典型涂布率（通常单层每升 10 m²）。
          应用默认按两遍计算；如果你的油漆是一遍或三遍，请相应调整。
        </li>
        <li>
          <strong>地面（瓷砖 / 强化地板 / 乙烯基地板）。</strong> 地面面积加上 10% 的切割损耗。
          斜铺（15%）和人字纹（20%）的损耗更大。
        </li>
        <li>
          <strong>踢脚线。</strong> 墙体周长减去门洞宽度。
        </li>
        <li>
          <strong>墙纸。</strong> 墙面面积除以每卷尺寸（通常每卷 5 m²），向上取整。再加 10%
          用于对花。
        </li>
        <li>
          <strong>墙砖。</strong> 要贴砖的墙面面积，减去为洁具预留的开口。按瓷砖规格调整，
          大尺寸瓷砖的损耗比马赛克小。
        </li>
      </ul>
      <p>
        把每份估算都导出到 PDF 里。现在你有了可以带进比价环节的材料用量。
      </p>

      <h2>第 3 步：为材料定价</h2>
      <p>
        拿着你的用量，打开你常去的建材零售商的应用或网站。搜索符合你规格的产品（哑光墙面漆、
        60×60 cm 抛光砖等），逐项把用量 × 单价相乘。
      </p>
      <p>
        小贴士：下决定前先比较两三家商家。同一款产品，在 IKEA、Home Depot/Lowe's、Leroy
        Merlin、B&Q、OBI 或本地经销商之间的价格常常相差 30% 以上。
      </p>
      <p>
        按商家保存购物车合计。这就是你的<strong>材料基准价</strong>。
      </p>

      <h2>第 4 步：估算人工</h2>
      <p>
        人工更难用手机估算，因为单价取决于你所在的地区、工种以及承包商的管理成本。但你可以
        做个大致估计：
      </p>
      <ul>
        <li>
          <strong>粉刷一个房间。</strong> 一名油漆工每个房间 0.5-1.5 天，视所需的准备工作而定。
        </li>
        <li>
          <strong>给浴室地面贴砖（4-6 m²）。</strong> 一名瓷砖工 1-2 天，含防水准备。
        </li>
        <li>
          <strong>铺设强化地板或乙烯基锁扣地板。</strong> 每名工人每天约 10 m²。
        </li>
        <li>
          <strong>更换踢脚线。</strong> 若墙体方正，每个房间 4 小时。
        </li>
      </ul>
      <p>
        乘以当地的人工日工价（搜索「[你所在城市] 油漆工 日工价」，多数地区的承包商协会都会
        公布）。再加 15% 作为管理、税费和杂项。
      </p>

      <h2>第 5 步：做出表格</h2>
      <p>
        在手机上打开 Numbers 或 Excel。为每个项目建一行，列设为：数量、单位、单价、合计。把
        合计汇总成三块：<strong>材料</strong>、<strong>人工</strong>、
        <strong> 备用金</strong>（材料 + 人工的 15-20%）。
      </p>
      <p>
        这个总额就是你的<em>自评预算</em>。等报价开始进来，你 10 分钟内就能判断某份报价是落在
        合理区间，还是离谱地偏高。
      </p>

      <h2>第 6 步：用 PDF 向承包商交底</h2>
      <p>
        把每个房间的 PDF（含户型图、尺寸和材料估算）发给每一位你要找报价的承包商。这样做有
        两个好处：
      </p>
      <ul>
        <li>
          奠定专业的基调，承包商往往预期业主会讨价还价、表述含糊。一份带测量数据的 PDF 在说：
          「我已经做足功课，请据此报价」。
        </li>
        <li>
          省去「让我先上门量一下」的拖延。承包商第二天就能发报价，而不是等到下周。
        </li>
      </ul>

      <h2>手机做不到的事</h2>
      <p>
        有些事仍然需要承包商上门：
      </p>
      <ul>
        <li>
          <strong>隐蔽的水电。</strong> 如果装修涉及背后藏有管线的墙体，只有带着摄像头和测线仪
          的承包商才能告诉你里面有什么。
        </li>
        <li>
          <strong>结构改动。</strong> 拆墙、加窗、改动承重结构，需要工程师或建筑师。
        </li>
        <li>
          <strong>许可。</strong> 在多数辖区，超出表面装饰的任何工程都需要市政审批。手机测量的
          图纸是不错的起点，但不能替代它。
        </li>
      </ul>

      <h2>关键所在</h2>
      <p>
        要想得到一个好的装修结果，你并不需要样样精通。你只需要懂得够多，足以<em>问出正确的
        问题</em>。一张测量好的户型图，加上材料估算，再加上人工的大致估值，就能把「这要花多少
        钱？」从一个谜团变成一场对话。这三件事，只用你的手机就够了。
      </p>
    </article>
  );
}

export function PostPT() {
  return (
    <article className="prose-content">
      <p className="lead">
        A parte mais difícil de começar uma reforma não é o trabalho, são as
        incógnitas. Quantos metros quadrados de piso? Quanta tinta? Qual é um preço
        razoável para repintar dois cômodos? Com um app de medição no seu iPhone,
        você responde às três antes de fazer uma única ligação.
      </p>
      <p>
        Este é o fluxo que nós mesmos usaríamos para dimensionar uma reforma
        pequena ou média, retrocar o revestimento de um banheiro, pintar um
        apartamento de um quarto, trocar o piso da cozinha, indo de "quero fazer
        isso" até um orçamento aproximado, em uma única noite.
      </p>

      <h2>Passo 1: Registre cada cômodo que você vai mexer</h2>
      <p>
        Abra o Ruler AR (ou qualquer app de planta em AR) e escaneie cada cômodo
        afetado. Não pule os cômodos que parecem óbvios, a área de serviço pela qual
        você passa todo dia provavelmente é 0,5 m² maior do que você imagina.
      </p>
      <ul>
        <li>
          Em um iPhone Pro, use o escaneamento de cômodo por LiDAR: percorra o
          perímetro e o app monta um modelo 3D com paredes, portas, janelas e móveis
          identificados.
        </li>
        <li>
          Sem LiDAR, use o construtor manual de cômodo: fique em um canto, ande ao
          longo de cada parede e toque nos cantos.
        </li>
        <li>
          De qualquer forma, salve cada cômodo como um projeto. Nomeie com clareza:
          "Banheiro, principal", "Cozinha, só o piso", "Quarto 1, pintura".
        </li>
      </ul>
      <p>
        Cada projeto gera um PDF com planta + dimensões das paredes + área total de
        piso. Guarde esses arquivos, eles são a entrada de tudo o que vem a seguir.
      </p>

      <h2>Passo 2: Calcule as quantidades de material</h2>
      <p>
        Abra um dos seus projetos salvos. Entre na calculadora de materiais. O app
        já conhece as dimensões do cômodo, então produz estimativas de material em
        segundos:
      </p>
      <ul>
        <li>
          <strong>Tinta.</strong> Área das paredes menos os recortes de portas e
          janelas, dividida pelo rendimento típico (geralmente 10 m² por litro em
          uma demão). O app assume duas demãos por padrão; ajuste se a sua tinta for
          de uma ou três demãos.
        </li>
        <li>
          <strong>Piso (cerâmica / laminado / vinílico).</strong> Área do piso + 10%
          de perda para os cortes. Perda maior em assentamento diagonal (15%) e em
          padrão espinha de peixe (20%).
        </li>
        <li>
          <strong>Rodapé.</strong> Perímetro das paredes menos a largura das portas.
        </li>
        <li>
          <strong>Papel de parede.</strong> Área das paredes dividida pelo tamanho do
          rolo (normalmente 5 m² por rolo), arredondada para cima. Some 10% para o
          casamento do estampado.
        </li>
        <li>
          <strong>Revestimento de parede.</strong> Área de parede a revestir menos os
          recortes para os pontos hidráulicos. Ajuste conforme o tamanho da peça,
          peças de grande formato geram menos perda do que pastilhas.
        </li>
      </ul>
      <p>
        Exporte cada estimativa como parte do PDF. Agora você tem quantidades de
        material para levar a uma fase de pesquisa de preços.
      </p>

      <h2>Passo 3: Precifique os materiais</h2>
      <p>
        Leve suas quantidades para o app ou o site da sua loja de materiais
        favorita. Procure produtos que combinem com as suas especificações (tinta
        fosca para parede, porcelanato 60×60 cm etc.) e multiplique quantidade ×
        preço unitário em cada item.
      </p>
      <p>
        Dica: compare duas ou três lojas antes de fechar. Em produtos idênticos, os
        preços costumam variar 30%+ entre IKEA, Home Depot/Lowe's, Leroy Merlin,
        B&Q, OBI ou distribuidores locais.
      </p>
      <p>
        Salve o total do carrinho por loja. Essa é a sua <strong>base de
        materiais</strong>.
      </p>

      <h2>Passo 4: Estime a mão de obra</h2>
      <p>
        A mão de obra é mais difícil de estimar pelo celular porque os valores
        dependem da sua região, do tipo de serviço e dos custos fixos do
        profissional. Mas dá para fazer uma estimativa:
      </p>
      <ul>
        <li>
          <strong>Pintar um cômodo.</strong> 0,5-1,5 dia por cômodo para um pintor,
          dependendo do preparo necessário.
        </li>
        <li>
          <strong>Revestir o piso de um banheiro (4-6 m²).</strong> 1-2 dias para um
          assentador, incluindo o preparo da impermeabilização.
        </li>
        <li>
          <strong>Assentar laminado ou piso vinílico de clique.</strong> ~10 m²/dia
          por trabalhador.
        </li>
        <li>
          <strong>Trocar o rodapé.</strong> 4 horas por cômodo se as paredes forem
          retas.
        </li>
      </ul>
      <p>
        Multiplique pela diária local (pesquise "diária de pintor [sua cidade]", a
        maioria das associações regionais de profissionais publica isso). Some 15%
        para gestão, impostos e diversos.
      </p>

      <h2>Passo 5: Monte a planilha</h2>
      <p>
        No celular, abra o Numbers ou o Excel. Crie uma linha para cada item com as
        colunas: Quantidade, Unidade, Preço unitário, Total. Some os totais em três
        blocos: <strong>Materiais</strong>, <strong>Mão de obra</strong>,
        <strong> Reserva</strong> (15-20% de materiais + mão de obra).
      </p>
      <p>
        Esse total é o seu <em>orçamento autoestimado</em>. Quando os orçamentos
        começarem a chegar, em 10 minutos você saberá se um deles está na faixa certa
        ou totalmente fora.
      </p>

      <h2>Passo 6: Use o PDF para orientar os profissionais</h2>
      <p>
        Envie os PDFs por cômodo (com planta + dimensões + estimativa de material) a
        cada profissional de quem você vai pedir orçamento. Isso faz duas coisas:
      </p>
      <ul>
        <li>
          Define um tom profissional, os profissionais esperam pechincha e
          ambiguidade dos donos do imóvel. Um PDF medido diz "fiz meu dever de casa,
          favor orçar de acordo".
        </li>
        <li>
          Elimina o atraso do "deixa eu ir aí medir". O profissional pode mandar o
          orçamento no dia seguinte em vez de na semana que vem.
        </li>
      </ul>

      <h2>O que você não consegue fazer pelo celular</h2>
      <p>
        Algumas coisas ainda exigem a visita de um profissional:
      </p>
      <ul>
        <li>
          <strong>Hidráulica / elétrica ocultas.</strong> Se a reforma mexe em
          paredes com instalações por trás, só um profissional com câmera e detector
          de fios pode dizer o que há ali.
        </li>
        <li>
          <strong>Mudanças estruturais.</strong> Remover uma parede, abrir uma
          janela, alterar estrutura portante, exige um engenheiro ou arquiteto.
        </li>
        <li>
          <strong>Licenças.</strong> Na maioria das jurisdições, tudo o que vai além
          do acabamento estético precisa de aprovação municipal. Desenhos medidos pelo
          celular são um bom ponto de partida, mas não substituem isso.
        </li>
      </ul>

      <h2>O ponto</h2>
      <p>
        Você não precisa entender de tudo para conseguir um bom resultado de reforma.
        Basta saber o suficiente para <em>fazer as perguntas certas</em>. Uma planta
        medida, uma estimativa de material e uma noção da mão de obra transformam
        "quanto isso vai custar?" de um mistério em uma conversa. Seu celular basta
        para fazer as três coisas.
      </p>
    </article>
  );
}

export function PostIT() {
  return (
    <article className="prose-content">
      <p className="lead">
        La parte più difficile quando si avvia una ristrutturazione non è il lavoro,
        sono le incognite. Quanti metri quadri di piastrelle? Quanta vernice? Qual è
        un prezzo ragionevole per ritinteggiare due stanze? Con un'app di misurazione
        sul tuo iPhone rispondi a tutte e tre prima di fare una sola telefonata.
      </p>
      <p>
        Questo è il metodo che useremmo noi stessi per inquadrare una
        ristrutturazione piccola o media, rifare le piastrelle di un bagno, tinteggiare
        un bilocale, sostituire il pavimento della cucina, passando da «voglio farlo»
        a un budget di massima, in una sola serata.
      </p>

      <h2>Passo 1: Rileva ogni stanza che toccherai</h2>
      <p>
        Apri Ruler AR (o una qualsiasi app per planimetrie in AR) e scansiona ogni
        stanza interessata. Non saltare le stanze che ti sembrano ovvie, la lavanderia
        davanti a cui passi ogni giorno è probabilmente 0,5 m² più grande di quanto
        pensi.
      </p>
      <ul>
        <li>
          Su un iPhone Pro usa la scansione della stanza con LiDAR: percorri il
          perimetro e l'app costruisce un modello 3D con pareti, porte, finestre e
          mobili riconosciuti.
        </li>
        <li>
          Senza LiDAR usa il costruttore manuale della stanza: mettiti in un angolo,
          cammina lungo ogni parete e tocca gli angoli.
        </li>
        <li>
          In entrambi i casi, salva ogni stanza come un progetto. Dai nomi chiari:
          «Bagno, principale», «Cucina, solo pavimento», «Camera 1, tinteggiatura».
        </li>
      </ul>
      <p>
        Ogni progetto genera un PDF con planimetria + dimensioni delle pareti +
        superficie totale del pavimento. Conservali, sono i dati di partenza per tutto
        ciò che segue.
      </p>

      <h2>Passo 2: Calcola le quantità di materiale</h2>
      <p>
        Apri uno dei progetti salvati. Entra nel calcolatore di materiali. L'app
        conosce già le dimensioni della stanza, quindi produce stime di materiale in
        pochi secondi:
      </p>
      <ul>
        <li>
          <strong>Vernice.</strong> Superficie delle pareti meno gli intagli di porte
          e finestre, diviso per la resa tipica (di solito 10 m² al litro per una mano).
          L'app considera due mani per impostazione predefinita; regola se la tua
          vernice è a una o tre mani.
        </li>
        <li>
          <strong>Pavimento (piastrelle / laminato / vinile).</strong> Superficie del
          pavimento + 10% di sfrido per i tagli. Sfrido maggiore con posa diagonale
          (15%) e motivo a spina di pesce (20%).
        </li>
        <li>
          <strong>Battiscopa.</strong> Perimetro delle pareti meno la larghezza delle
          porte.
        </li>
        <li>
          <strong>Carta da parati.</strong> Superficie delle pareti diviso la misura
          del rotolo (di solito 5 m² al rotolo), arrotondata per eccesso. Aggiungi il
          10% per l'allineamento del disegno.
        </li>
        <li>
          <strong>Piastrelle da parete.</strong> Superficie della parete da
          piastrellare meno gli intagli per i sanitari. Regola in base al formato delle
          piastrelle, i grandi formati hanno meno sfrido del mosaico.
        </li>
      </ul>
      <p>
        Esporta ogni stima come parte del PDF. Ora hai quantità di materiale da
        inserire in una fase di verifica dei prezzi.
      </p>

      <h2>Passo 3: Quantifica il prezzo dei materiali</h2>
      <p>
        Porta le tue quantità nell'app o sul sito del tuo rivenditore di ferramenta
        preferito. Cerca prodotti che corrispondano alle tue specifiche (pittura murale
        opaca, gres porcellanato 60×60 cm, ecc.) e moltiplica quantità × prezzo
        unitario per ogni voce.
      </p>
      <p>
        Suggerimento: confronta due o tre rivenditori prima di decidere. Su prodotti
        identici i prezzi variano spesso del 30%+ tra IKEA, Home Depot/Lowe's, Leroy
        Merlin, B&Q, OBI o distributori locali.
      </p>
      <p>
        Salva il totale del carrello per rivenditore. Questa è la tua <strong>base
        materiali</strong>.
      </p>

      <h2>Passo 4: Stima la manodopera</h2>
      <p>
        La manodopera è più difficile da stimare dal telefono perché le tariffe
        dipendono dalla tua zona, dal tipo di lavoro e dai costi generali dell'artigiano.
        Ma puoi fare una stima di massima:
      </p>
      <ul>
        <li>
          <strong>Tinteggiare una stanza.</strong> 0,5-1,5 giorni a stanza per un
          imbianchino, a seconda della preparazione necessaria.
        </li>
        <li>
          <strong>Piastrellare il pavimento di un bagno (4-6 m²).</strong> 1-2 giorni
          per un piastrellista, inclusa la preparazione dell'impermeabilizzazione.
        </li>
        <li>
          <strong>Posare laminato o pavimento vinilico a incastro.</strong> ~10 m² al
          giorno per operaio.
        </li>
        <li>
          <strong>Sostituire il battiscopa.</strong> 4 ore a stanza se le pareti sono
          a squadra.
        </li>
      </ul>
      <p>
        Moltiplica per la tariffa giornaliera locale (cerca «tariffa giornaliera
        imbianchino [la tua città]», la maggior parte delle associazioni di categoria
        regionali la pubblica). Aggiungi il 15% per gestione, tasse e varie.
      </p>

      <h2>Passo 5: Costruisci il foglio di calcolo</h2>
      <p>
        Sul telefono apri Numbers o Excel. Crea una riga per ogni voce con le colonne:
        Quantità, Unità, Prezzo unitario, Totale. Somma i totali in tre blocchi:
        <strong>Materiali</strong>, <strong>Manodopera</strong>,
        <strong> Imprevisti</strong> (15-20% di materiali + manodopera).
      </p>
      <p>
        Quel totale è il tuo <em>budget autostimato</em>. Quando inizieranno ad
        arrivare i preventivi, in 10 minuti capirai se un preventivo è nella fascia
        giusta o completamente fuori.
      </p>

      <h2>Passo 6: Usa il PDF per istruire gli artigiani</h2>
      <p>
        Invia i PDF per stanza (con planimetria + dimensioni + stima dei materiali) a
        ogni artigiano da cui vuoi un preventivo. Questo ottiene due cose:
      </p>
      <ul>
        <li>
          Imposta un tono professionale, gli artigiani si aspettano dai proprietari
          contrattazioni e vaghezza. Un PDF misurato dice «ho fatto i compiti, ti prego
          di preventivare di conseguenza».
        </li>
        <li>
          Elimina il ritardo del «fammi venire a misurare». L'artigiano può mandare un
          preventivo il giorno dopo invece della settimana successiva.
        </li>
      </ul>

      <h2>Cosa non puoi fare dal telefono</h2>
      <p>
        Alcune cose richiedono ancora la visita di un artigiano:
      </p>
      <ul>
        <li>
          <strong>Idraulica / impianto elettrico nascosti.</strong> Se la
          ristrutturazione tocca pareti con impianti dietro, solo un artigiano con
          telecamera e cercafili può dirti cosa c'è lì.
        </li>
        <li>
          <strong>Modifiche strutturali.</strong> Abbattere una parete, aprire una
          finestra, intervenire su strutture portanti, serve un ingegnere o un
          architetto.
        </li>
        <li>
          <strong>Permessi.</strong> Tutto ciò che va oltre i lavori estetici richiede,
          nella maggior parte delle giurisdizioni, il via libera del comune. I disegni
          misurati col telefono sono un buon punto di partenza, ma non un sostituto.
        </li>
      </ul>

      <h2>Il punto</h2>
      <p>
        Non devi sapere tutto per ottenere un buon risultato da una ristrutturazione.
        Ti basta sapere abbastanza da <em>fare le domande giuste</em>. Una planimetria
        misurata, una stima dei materiali e un ordine di grandezza della manodopera
        trasformano «quanto costerà?» da mistero a conversazione. Il tuo telefono basta
        per fare tutte e tre le cose.
      </p>
    </article>
  );
}

export function PostPL() {
  return (
    <article className="prose-content">
      <p className="lead">
        Najtrudniejsze w rozpoczęciu remontu nie jest sama praca, lecz niewiadome.
        Ile metrów kwadratowych płytek? Ile farby? Jaka jest rozsądna wycena
        ponownego pomalowania dwóch pokoi? Mając na iPhonie aplikację do pomiarów,
        odpowiesz na wszystkie trzy pytania, zanim wykonasz choć jeden telefon.
      </p>
      <p>
        To metoda, której sami byśmy użyli do oszacowania małego lub średniego
        remontu, przełożenia płytek w łazience, malowania kawalerki, wymiany podłogi
        w kuchni, przechodząc od „chcę to zrobić" do orientacyjnego budżetu w jeden
        wieczór.
      </p>

      <h2>Krok 1: Zarejestruj każde pomieszczenie, którego dotkniesz</h2>
      <p>
        Otwórz Ruler AR (albo dowolną aplikację AR do rzutów pomieszczeń) i
        zeskanuj każde pomieszczenie objęte remontem. Nie pomijaj tych, które
        wydają się oczywiste, pralnia, którą mijasz codziennie, jest pewnie o 0,5 m²
        większa, niż ci się wydaje.
      </p>
      <ul>
        <li>
          Na iPhonie Pro użyj skanowania pomieszczenia z LiDAR: przejdź po obwodzie,
          a aplikacja zbuduje model 3D z rozpoznanymi ścianami, drzwiami, oknami i
          meblami.
        </li>
        <li>
          Bez LiDAR użyj ręcznego kreatora pomieszczenia: stań w narożniku, idź
          wzdłuż każdej ściany i stukaj w narożniki.
        </li>
        <li>
          Tak czy inaczej, zapisz każde pomieszczenie jako projekt. Nazywaj je
          jasno: „Łazienka, główna", „Kuchnia, tylko podłoga", „Sypialnia 1,
          malowanie".
        </li>
      </ul>
      <p>
        Do każdego projektu powstaje PDF z rzutem, wymiarami ścian i całkowitą
        powierzchnią podłogi. Zachowaj je, to dane wejściowe do wszystkiego, co
        nastąpi później.
      </p>

      <h2>Krok 2: Oblicz ilości materiałów</h2>
      <p>
        Otwórz jeden z zapisanych projektów. Wejdź do kalkulatora materiałów.
        Aplikacja zna już wymiary pomieszczenia, więc w kilka sekund wyliczy
        zapotrzebowanie na materiały:
      </p>
      <ul>
        <li>
          <strong>Farba.</strong> Powierzchnia ścian minus otwory drzwi i okien,
          podzielona przez typową wydajność (zwykle 10 m² na litr przy jednej
          warstwie). Domyślnie aplikacja liczy dwie warstwy; zmień, jeśli twoja farba
          jest jedno- lub trójwarstwowa.
        </li>
        <li>
          <strong>Podłoga (płytki / panele / winyl).</strong> Powierzchnia podłogi +
          10% zapasu na docinki. Większy zapas przy układaniu na skos (15%) i we
          wzór jodełki (20%).
        </li>
        <li>
          <strong>Listwa przypodłogowa.</strong> Obwód ścian minus szerokości drzwi.
        </li>
        <li>
          <strong>Tapeta.</strong> Powierzchnia ścian podzielona przez rozmiar rolki
          (zwykle 5 m² na rolkę), zaokrąglona w górę. Dodaj 10% na dopasowanie wzoru.
        </li>
        <li>
          <strong>Płytki ścienne.</strong> Powierzchnia ściany do oflisowania minus
          wycięcia pod osprzęt. Dostosuj do rozmiaru płytki, duże formaty dają mniej
          odpadu niż mozaika.
        </li>
      </ul>
      <p>
        Wyeksportuj każde wyliczenie jako część PDF. Masz teraz ilości materiałów,
        które możesz wykorzystać na etapie sprawdzania cen.
      </p>

      <h2>Krok 3: Wyceń materiały</h2>
      <p>
        Weź swoje ilości do aplikacji lub na stronę ulubionego marketu budowlanego.
        Wyszukaj produkty zgodne z twoimi parametrami (matowa farba ścienna, gres
        60×60 cm itp.) i pomnóż ilość × cenę jednostkową dla każdej pozycji.
      </p>
      <p>
        Wskazówka: porównaj dwa-trzy sklepy, zanim się zdecydujesz. Na identyczne
        produkty ceny często różnią się o ponad 30% między IKEA, Home Depot/Lowe's,
        Leroy Merlin, B&Q, OBI a lokalnymi dystrybutorami.
      </p>
      <p>
        Zapisz sumę koszyka dla każdego sklepu. To twoja <strong>baza
        materiałowa</strong>.
      </p>

      <h2>Krok 4: Oszacuj robociznę</h2>
      <p>
        Robociznę trudniej oszacować z telefonu, bo stawki zależą od regionu, rodzaju
        prac i kosztów ogólnych wykonawcy. Ale orientacyjnie możesz przyjąć:
      </p>
      <ul>
        <li>
          <strong>Pomalowanie pokoju.</strong> 0,5-1,5 dnia na pokój dla jednego
          malarza, zależnie od potrzebnego przygotowania.
        </li>
        <li>
          <strong>Wyłożenie podłogi łazienki płytkami (4-6 m²).</strong> 1-2 dni dla
          jednego glazurnika, wraz z przygotowaniem hydroizolacji.
        </li>
        <li>
          <strong>Ułożenie paneli lub winylu na click.</strong> ok. 10 m² dziennie na
          jednego pracownika.
        </li>
        <li>
          <strong>Wymiana listew przypodłogowych.</strong> 4 godziny na pokój, jeśli
          ściany są równe.
        </li>
      </ul>
      <p>
        Pomnóż przez lokalną dniówkę (wyszukaj „[twoje miasto] malarz dniówka",
        większość regionalnych zrzeszeń rzemieślniczych to publikuje). Dodaj 15% na
        organizację, podatki i wydatki różne.
      </p>

      <h2>Krok 5: Zbuduj arkusz</h2>
      <p>
        Na telefonie otwórz Numbers lub Excel. Zrób wiersz dla każdej pozycji z
        kolumnami: Ilość, Jednostka, Cena jednostkowa, Razem. Zsumuj wartości w trzy
        bloki: <strong>Materiały</strong>, <strong>Robocizna</strong>,
        <strong> Rezerwa</strong> (15-20% materiałów + robocizny).
      </p>
      <p>
        Ta suma to twój <em>samodzielnie oszacowany budżet</em>. Gdy zaczną
        napływać oferty, w 10 minut ocenisz, czy oferta mieści się w odpowiednim
        przedziale, czy zupełnie z niego wypada.
      </p>

      <h2>Krok 6: Wykorzystaj PDF do brief'u dla wykonawców</h2>
      <p>
        Wyślij PDF-y dla poszczególnych pomieszczeń (z rzutem + wymiarami +
        szacunkiem materiałów) do każdego wykonawcy, od którego chcesz wyceny. Daje to
        dwie rzeczy:
      </p>
      <ul>
        <li>
          Nadaje profesjonalny ton, wykonawcy spodziewają się po właścicielach
          targowania i niejasności. Zmierzony PDF mówi: „odrobiłem pracę domową,
          proszę wycenić odpowiednio".
        </li>
        <li>
          Eliminuje zwłokę „muszę przyjechać i pomierzyć". Wykonawca może przysłać
          wycenę następnego dnia, a nie za tydzień.
        </li>
      </ul>

      <h2>Czego nie zrobisz z telefonu</h2>
      <p>
        Niektóre rzeczy nadal wymagają wizyty wykonawcy:
      </p>
      <ul>
        <li>
          <strong>Ukryta hydraulika / instalacja elektryczna.</strong> Jeśli remont
          dotyka ścian z instalacjami w środku, tylko wykonawca z kamerą i
          wykrywaczem przewodów powie ci, co tam jest.
        </li>
        <li>
          <strong>Zmiany konstrukcyjne.</strong> Wyburzenie ściany, dodanie okna,
          ingerencja w konstrukcję nośną, wymaga inżyniera lub architekta.
        </li>
        <li>
          <strong>Pozwolenia.</strong> W większości jurysdykcji wszystko poza pracami
          kosmetycznymi wymaga zgody urzędu. Rysunki zmierzone telefonem to dobry punkt
          wyjścia, ale nie zastępstwo.
        </li>
      </ul>

      <h2>Sedno</h2>
      <p>
        Nie musisz znać się na wszystkim, aby uzyskać dobry efekt remontu.
        Wystarczy wiedzieć tyle, by <em>zadać właściwe pytania</em>. Zmierzony rzut,
        szacunek materiałów i orientacyjna robocizna zmieniają pytanie „ile to będzie
        kosztować?" z zagadki w rozmowę. Twój telefon wystarczy, aby zrobić wszystkie
        trzy rzeczy.
      </p>
    </article>
  );
}

export function PostTR() {
  return (
    <article className="prose-content">
      <p className="lead">
        Bir tadilata başlamanın en zor yanı işin kendisi değil, bilinmeyenlerdir.
        Kaç metrekare fayans? Ne kadar boya? İki odayı yeniden boyatmak için makul bir
        teklif nedir? iPhone'unuzdaki bir ölçüm uygulamasıyla, tek bir telefon bile
        açmadan üçünün de yanıtını verebilirsiniz.
      </p>
      <p>
        Bu, küçük ile orta ölçekli bir tadilatı kapsamlandırmak için kendimizin de
        kullanacağı yöntem; bir banyonun fayansını yenilemek, bir artı bir daireyi
        boyatmak, mutfak zeminini değiştirmek, „bunu yapmak istiyorum"dan kabaca bir
        bütçeye, tek bir akşamda.
      </p>

      <h2>Adım 1: Dokunacağınız her odayı kaydedin</h2>
      <p>
        Ruler AR'ı (veya herhangi bir AR kat planı uygulamasını) açın ve etkilenen
        her odayı tarayın. Bariz sandığınız odaları atlamayın, her gün önünden
        geçtiğiniz çamaşır odası muhtemelen düşündüğünüzden 0,5 m² daha büyüktür.
      </p>
      <ul>
        <li>
          Pro bir iPhone'da LiDAR oda taramasını kullanın: çevreyi yürüyün, uygulama
          duvarları, kapıları, pencereleri ve mobilyaları tanımlayarak bir 3D model
          oluştursun.
        </li>
        <li>
          LiDAR yoksa elle oda oluşturucuyu kullanın: bir köşede durun, her duvar
          boyunca yürüyün ve köşelere dokunun.
        </li>
        <li>
          Her iki durumda da her odayı bir proje olarak kaydedin. Net adlandırın:
          „Banyo, ana", „Mutfak, yalnızca zemin", „Yatak odası 1, boya".
        </li>
      </ul>
      <p>
        Her proje için kat planı + duvar ölçüleri + toplam taban alanı içeren bir PDF
        oluşur. Bunları saklayın, sonraki her şeyin girdisi onlardır.
      </p>

      <h2>Adım 2: Malzeme miktarlarını hesaplayın</h2>
      <p>
        Kayıtlı projelerinizden birini açın. Malzeme hesaplayıcısına girin. Uygulama
        odanın ölçülerini zaten bildiği için saniyeler içinde malzeme tahmini
        üretebilir:
      </p>
      <ul>
        <li>
          <strong>Boya.</strong> Duvar alanından kapı ve pencere boşlukları çıkarılır,
          tipik verime bölünür (genellikle tek kat için litre başına 10 m²). Uygulama
          varsayılan olarak iki kat varsayar; boyanız tek katsa veya üç katsa
          ayarlayın.
        </li>
        <li>
          <strong>Zemin (fayans / laminat / vinil).</strong> Taban alanı + kesimler
          için %10 fire payı. Çapraz döşemede (%15) ve balıksırtı desende (%20) fire
          payı daha yüksek.
        </li>
        <li>
          <strong>Süpürgelik.</strong> Duvar çevresinden kapı genişlikleri çıkarılır.
        </li>
        <li>
          <strong>Duvar kâğıdı.</strong> Duvar alanı rulo boyuna (genellikle rulo
          başına 5 m²) bölünür, yukarı yuvarlanır. Desen eşleştirmesi için %10 ekleyin.
        </li>
        <li>
          <strong>Duvar fayansı.</strong> Fayanslanacak duvar alanından armatürler
          için açılan boşluklar çıkarılır. Fayans boyutuna göre ayarlayın, büyük
          ebatlı fayanslar mozaiğe göre daha az fire verir.
        </li>
      </ul>
      <p>
        Her tahmini PDF'in bir parçası olarak dışa aktarın. Artık fiyat kontrol
        aşamasına aktarabileceğiniz malzeme miktarlarına sahipsiniz.
      </p>

      <h2>Adım 3: Malzeme fiyatını çıkarın</h2>
      <p>
        Miktarlarınızı en sevdiğiniz yapı market uygulamasına veya web sitesine
        taşıyın. Özelliklerinize uyan ürünleri arayın (mat duvar boyası, 60×60 cm
        porselen fayans vb.) ve her kalem için miktar × birim fiyatı çarpın.
      </p>
      <p>
        İpucu: karar vermeden önce iki üç mağazayı karşılaştırın. Aynı ürünlerde
        fiyatlar IKEA, Home Depot/Lowe's, Leroy Merlin, B&Q, OBI veya yerel
        distribütörler arasında sıkça %30'dan fazla değişir.
      </p>
      <p>
        Mağaza başına sepet toplamını kaydedin. Bu sizin <strong>malzeme
        temelinizdir</strong>.
      </p>

      <h2>Adım 4: İşçiliği tahmin edin</h2>
      <p>
        İşçiliği telefondan tahmin etmek daha zordur, çünkü ücretler bölgenize, işin
        türüne ve ustanın genel giderlerine bağlıdır. Yine de kabaca öngörebilirsiniz:
      </p>
      <ul>
        <li>
          <strong>Bir odayı boyamak.</strong> Gereken hazırlığa göre bir boyacı için
          oda başına 0,5-1,5 gün.
        </li>
        <li>
          <strong>Bir banyo zeminini fayanslamak (4-6 m²).</strong> Su yalıtımı
          hazırlığı dâhil, bir fayans ustası için 1-2 gün.
        </li>
        <li>
          <strong>Laminat veya tıklamalı vinil zemin döşemek.</strong> İşçi başına
          günde ~10 m².
        </li>
        <li>
          <strong>Süpürgeliği değiştirmek.</strong> Duvarlar düzgünse oda başına 4
          saat.
        </li>
      </ul>
      <p>
        Yerel günlük işçilik ücretiyle çarpın („[şehriniz] boyacı günlük ücret" diye
        arayın, çoğu bölgesel usta birliği bunu yayımlar). Yönetim, vergi ve çeşitli
        giderler için %15 ekleyin.
      </p>

      <h2>Adım 5: Tabloyu oluşturun</h2>
      <p>
        Telefonunuzda Numbers veya Excel'i açın. Her kalem için bir satır oluşturun;
        sütunlar: Miktar, Birim, Birim fiyat, Toplam. Toplamları üç kovaya toplayın:
        <strong>Malzeme</strong>, <strong>İşçilik</strong>,
        <strong> Beklenmedik gider</strong> (malzeme + işçiliğin %15-20'si).
      </p>
      <p>
        Bu toplam, sizin <em>kendi belirlediğiniz bütçeniz</em>. Teklifler gelmeye
        başladığında, bir teklifin doğru aralıkta mı yoksa tamamen dışında mı
        olduğunu 10 dakika içinde anlarsınız.
      </p>

      <h2>Adım 6: Ustaları bilgilendirmek için PDF'i kullanın</h2>
      <p>
        Oda bazlı PDF'leri (kat planı + ölçüler + malzeme tahmini ile) teklif
        alacağınız her ustaya gönderin. Bu iki işe yarar:
      </p>
      <ul>
        <li>
          Profesyonel bir ton belirler, ustalar ev sahiplerinden pazarlık ve
          belirsizlik bekler. Ölçülmüş bir PDF „ödevimi yaptım, buna göre fiyat verin"
          der.
        </li>
        <li>
          „Gelip bir ölçeyim" gecikmesini ortadan kaldırır. Usta, gelecek hafta yerine
          ertesi gün teklif gönderebilir.
        </li>
      </ul>

      <h2>Telefondan yapamayacaklarınız</h2>
      <p>
        Bazı şeyler hâlâ bir ustanın yerinde görmesini gerektirir:
      </p>
      <ul>
        <li>
          <strong>Gizli tesisat / elektrik.</strong> Tadilat, arkasında tesisat olan
          duvarlara dokunuyorsa, orada ne olduğunu yalnızca kameralı ve kablo bulucu
          cihazlı bir usta söyleyebilir.
        </li>
        <li>
          <strong>Yapısal değişiklikler.</strong> Bir duvarı kaldırmak, pencere
          eklemek, taşıyıcı yapıyı değiştirmek, bir mühendis ya da mimar gerektirir.
        </li>
        <li>
          <strong>İzinler.</strong> Çoğu yargı bölgesinde, görsel işlerin ötesindeki
          her şey belediye onayı gerektirir. Telefonla ölçülmüş çizimler iyi bir
          başlangıç noktasıdır ama yerine geçmez.
        </li>
      </ul>

      <h2>Özetle</h2>
      <p>
        İyi bir tadilat sonucu almak için her şeyi bilmeniz gerekmez. Yalnızca
        <em>doğru soruları sormaya</em> yetecek kadar bilmeniz yeter. Ölçülmüş bir kat
        planı, bir malzeme tahmini ve kabaca bir işçilik öngörüsü, „bunun maliyeti ne
        olacak?"u bir gizemden bir sohbete dönüştürür. Telefonunuz üçünü de yapmaya
        yeter.
      </p>
    </article>
  );
}

export function PostAR() {
  return (
    <article className="prose-content">
      <p className="lead">
        أصعب ما في بدء أعمال التجديد ليس العمل نفسه، بل المجهولات. كم متراً مربعاً من
        البلاط؟ كم كمية الطلاء؟ ما السعر المعقول لإعادة طلاء غرفتين؟ مع تطبيق قياس على
        جهاز iPhone، يمكنك الإجابة عن الأسئلة الثلاثة قبل أن تجري مكالمة واحدة.
      </p>
      <p>
        هذه هي الطريقة التي نستخدمها نحن أنفسنا لتحديد نطاق تجديد صغير إلى متوسط، إعادة
        تبليط حمّام، طلاء شقة بغرفة نوم واحدة، استبدال أرضية مطبخ، بدءاً من «أريد القيام
        بهذا» وصولاً إلى ميزانية تقريبية، في مساء واحد.
      </p>

      <h2>الخطوة 1: سجّل كل غرفة ستعمل بها</h2>
      <p>
        افتح Ruler AR (أو أي تطبيق مخططات بالواقع المعزز) وامسح كل غرفة معنية. لا تتجاوز
        الغرف التي تظنها بديهية، فغرفة الغسيل التي تمرّ بها كل يوم ربما تكون أكبر بمقدار
        0.5 م² مما تتصور.
      </p>
      <ul>
        <li>
          على iPhone من فئة Pro، استخدم مسح الغرفة بتقنية LiDAR: امشِ على طول المحيط،
          فيبني التطبيق نموذجاً ثلاثي الأبعاد مع التعرف على الجدران والأبواب والنوافذ
          والأثاث.
        </li>
        <li>
          من دون LiDAR، استخدم منشئ الغرفة اليدوي: قف في إحدى الزوايا، وامشِ بمحاذاة كل
          جدار، وانقر على الزوايا.
        </li>
        <li>
          في كلتا الحالتين، احفظ كل غرفة كمشروع. سمِّها بوضوح: «الحمّام، الرئيسي»،
          «المطبخ، الأرضية فقط»، «غرفة النوم 1، طلاء».
        </li>
      </ul>
      <p>
        يحصل كل مشروع على ملف PDF يضم المخطط الأرضي + أبعاد الجدران + إجمالي مساحة
        الأرضية. احتفظ بها، فهي المدخلات لكل ما يلي.
      </p>

      <h2>الخطوة 2: احسب كميات المواد</h2>
      <p>
        افتح أحد مشاريعك المحفوظة. ادخل إلى حاسبة المواد. يعرف التطبيق أبعاد الغرفة
        مسبقاً، لذا يستطيع إنتاج تقديرات للمواد في ثوانٍ:
      </p>
      <ul>
        <li>
          <strong>الطلاء.</strong> مساحة الجدران مطروحاً منها فتحات الأبواب والنوافذ،
          مقسومة على معدل التغطية المعتاد (عادة 10 م² لكل لتر لطبقة واحدة). يفترض
          التطبيق طبقتين افتراضياً؛ عدّل إذا كان طلاؤك بطبقة واحدة أو ثلاث طبقات.
        </li>
        <li>
          <strong>الأرضية (بلاط / باركيه / فينيل).</strong> مساحة الأرضية + 10% هدر
          للقصّ. هدر أكبر في التركيب القطري (15%) ونمط عظم السمكة (20%).
        </li>
        <li>
          <strong>وزرة الأرضية.</strong> محيط الجدران مطروحاً منه عرض الأبواب.
        </li>
        <li>
          <strong>ورق الجدران.</strong> مساحة الجدران مقسومة على حجم اللفة (عادة 5 م²
          لكل لفة)، مع التقريب لأعلى. أضف 10% لمطابقة النقشة.
        </li>
        <li>
          <strong>بلاط الجدران.</strong> مساحة الجدار المراد تبليطه مطروحاً منها فتحات
          التركيبات. عدّل بحسب حجم البلاط، فالبلاط كبير الحجم يكون هدره أقل من الفسيفساء.
        </li>
      </ul>
      <p>
        صدّر كل تقدير كجزء من ملف PDF. أصبح لديك الآن كميات مواد يمكنك إدخالها في مرحلة
        فحص الأسعار.
      </p>

      <h2>الخطوة 3: حدّد سعر المواد</h2>
      <p>
        خذ كمياتك إلى تطبيق أو موقع متجر مواد البناء المفضل لديك. ابحث عن منتجات تطابق
        مواصفاتك (طلاء جدران مطفأ، بلاط بورسلان 60×60 سم، إلخ) واضرب الكمية × سعر الوحدة
        لكل بند.
      </p>
      <p>
        نصيحة: قارن متجرين أو ثلاثة قبل أن تقرر. كثيراً ما تتفاوت الأسعار على منتجات
        متطابقة بنسبة 30%+ بين IKEA وHome Depot/Lowe's وLeroy Merlin وB&Q وOBI أو
        الموزعين المحليين.
      </p>
      <p>
        احفظ إجمالي السلة لكل متجر. هذا هو <strong>أساس تكلفة المواد</strong> لديك.
      </p>

      <h2>الخطوة 4: قدّر العمالة</h2>
      <p>
        يصعب تقدير العمالة من الهاتف لأن الأسعار تعتمد على منطقتك ونوع العمل والمصاريف
        العامة للمقاول. لكن يمكنك وضع تقدير تقريبي:
      </p>
      <ul>
        <li>
          <strong>طلاء غرفة.</strong> 0.5-1.5 يوم للغرفة لدهان واحد، بحسب التحضير
          المطلوب.
        </li>
        <li>
          <strong>تبليط أرضية حمّام (4-6 م²).</strong> 1-2 يوم لمبلّط واحد، بما في ذلك
          تحضير العزل المائي.
        </li>
        <li>
          <strong>تركيب باركيه أو أرضية فينيل بنظام النقر.</strong> ~10 م² في اليوم لكل
          عامل.
        </li>
        <li>
          <strong>استبدال وزرة الأرضية.</strong> 4 ساعات للغرفة إذا كانت الجدران
          مستقيمة.
        </li>
      </ul>
      <p>
        اضرب في أجرة اليوم المحلية للعمالة (ابحث عن «[مدينتك] أجرة دهان في اليوم»، إذ
        تنشر معظم جمعيات المقاولين الإقليمية ذلك). أضف 15% للإدارة والضرائب والمصاريف
        المتنوعة.
      </p>

      <h2>الخطوة 5: ابنِ جدول البيانات</h2>
      <p>
        على هاتفك، افتح Numbers أو Excel. أنشئ صفاً لكل بند بالأعمدة: الكمية، الوحدة،
        سعر الوحدة، الإجمالي. اجمع الإجماليات في ثلاثة أقسام: <strong>المواد</strong>،
        <strong>العمالة</strong>، <strong> احتياطي الطوارئ</strong> (15-20% من المواد +
        العمالة).
      </p>
      <p>
        هذا الإجمالي هو <em>ميزانيتك المقدَّرة ذاتياً</em>. عندما تبدأ العروض بالوصول،
        ستعرف خلال 10 دقائق ما إذا كان العرض ضمن النطاق الصحيح أم بعيداً تماماً عنه.
      </p>

      <h2>الخطوة 6: استخدم ملف PDF لإحاطة المقاولين</h2>
      <p>
        أرسل ملفات PDF لكل غرفة (مع المخطط الأرضي + الأبعاد + تقدير المواد) إلى كل مقاول
        تطلب منه عرض سعر. يحقق هذا أمرين:
      </p>
      <ul>
        <li>
          يضع نبرة احترافية، فالمقاولون يتوقعون من أصحاب المنازل المساومة والغموض. ملف
          PDF مزوّد بالقياسات يقول: «لقد أنجزت واجبي، فضلاً سعّر تبعاً لذلك».
        </li>
        <li>
          يلغي تأخير «دعني آتي وأقيس». يستطيع المقاول إرسال عرض السعر في اليوم التالي
          بدلاً من الأسبوع المقبل.
        </li>
      </ul>

      <h2>ما لا يمكنك فعله من الهاتف</h2>
      <p>
        لا تزال بعض الأمور تتطلب زيارة مقاول:
      </p>
      <ul>
        <li>
          <strong>السباكة / الكهرباء المخفية.</strong> إذا كان التجديد يمسّ جدراناً
          خلفها مرافق، فلا يستطيع أحد إخبارك بما بداخلها سوى مقاول مزود بكاميرا وجهاز
          تتبّع الأسلاك.
        </li>
        <li>
          <strong>التغييرات الإنشائية.</strong> إزالة جدار، أو إضافة نافذة، أو تغيير
          عنصر حامل، يحتاج إلى مهندس أو معماري.
        </li>
        <li>
          <strong>التصاريح.</strong> أي عمل يتجاوز التجميل في معظم الولايات القضائية
          يحتاج إلى موافقة بلدية. الرسومات المقيسة بالهاتف نقطة انطلاق جيدة لكنها ليست
          بديلاً.
        </li>
      </ul>

      <h2>الخلاصة</h2>
      <p>
        لست بحاجة إلى إتقان كل شيء للحصول على نتيجة تجديد جيدة. يكفي أن تعرف ما يكفي
        لكي <em>تطرح الأسئلة الصحيحة</em>. مخطط أرضي مقيس، وتقدير للمواد، وتقدير تقريبي
        للعمالة، يحوّل سؤال «كم سيكلف هذا؟» من لغز إلى محادثة. هاتفك يكفي للقيام بالثلاثة
        جميعاً.
      </p>
    </article>
  );
}

export const bodies = {
  ru: PostRU, de: PostDE, fr: PostFR, es: PostES, ja: PostJA, ko: PostKO,
  'zh-Hans': PostZH, 'pt-BR': PostPT, it: PostIT, pl: PostPL, tr: PostTR, ar: PostAR
};
