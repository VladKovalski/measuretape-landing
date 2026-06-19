import type { PostMeta } from './posts';

export const meta: PostMeta = {
  slug: 'how-to-measure-a-room-with-iphone',
  date: '2026-05-15',
  readingTimeMin: 7,
  keywords:
    'how to measure a room with iphone, iphone room measurement, ar room scanner, lidar room scan, measuring app tutorial',
  tags: ['Tutorial', 'Room scanning', 'AR'],
  title: {
    en: "How to Measure a Room with Your iPhone (Step-by-Step Guide)",
    ru: "Как измерить комнату с помощью iPhone (пошаговая инструкция)",
    de: "Wie misst du einen Raum mit deinem iPhone (Schritt-für-Schritt)",
    fr: "Comment mesurer une pièce avec votre iPhone (guide étape par étape)",
    es: "Cómo medir una habitación con tu iPhone (guía paso a paso)",
    ja: "iPhoneで部屋を測る方法（ステップ・バイ・ステップ・ガイド）",
    ko: "iPhone로 방을 측정하는 방법 (단계별 가이드)",
    "zh-Hans": "如何用 iPhone 测量房间（分步指南）",
    "pt-BR": "Como medir um cômodo com seu iPhone (guia passo a passo)",
    it: "Come misurare una stanza con il tuo iPhone (guida passo passo)",
    pl: "Jak zmierzyć pokój za pomocą iPhone'a (przewodnik krok po kroku)",
    tr: "iPhone ile Bir Odayı Nasıl Ölçersiniz (Adım Adım Kılavuz)",
    ar: "كيفية قياس غرفة باستخدام iPhone (دليل خطوة بخطوة)"
  },
  excerpt: {
    en: "A practical guide to measuring an entire room with your iPhone in under five minutes, using LiDAR for 3D plans, or AR for manual layouts on any device.",
    ru: "Практическое руководство: как измерить комнату iPhone за пять минут, через LiDAR для 3D-плана или AR для ручной разметки на любом устройстве.",
    de: "Eine praktische Anleitung, um einen ganzen Raum mit deinem iPhone in unter fünf Minuten zu vermessen – mit LiDAR für 3D-Pläne oder AR für manuelle Grundrisse auf jedem Gerät.",
    fr: "Un guide pratique pour mesurer une pièce entière avec votre iPhone en moins de cinq minutes, avec le LiDAR pour les plans 3D ou la réalité augmentée pour les plans manuels sur n'importe quel appareil.",
    es: "Una guía práctica para medir una habitación entera con tu iPhone en menos de cinco minutos, usando LiDAR para planos 3D o AR para planos manuales en cualquier dispositivo.",
    ja: "iPhoneで部屋全体を5分以内で測る実践ガイド。LiDARで3Dプランを、ARでどんな端末でも手動の間取りを作成できます。",
    ko: "iPhone로 방 전체를 5분 안에 측정하는 실용 가이드입니다. LiDAR로 3D 도면을, AR로 어떤 기기에서든 수동 평면도를 만들 수 있습니다.",
    "zh-Hans": "一份实用指南：用 iPhone 在五分钟内测量整个房间，使用 LiDAR 生成 3D 平面图，或在任何设备上用 AR 手动绘制布局。",
    "pt-BR": "Um guia prático para medir um cômodo inteiro com seu iPhone em menos de cinco minutos, usando LiDAR para plantas 3D ou AR para plantas manuais em qualquer dispositivo.",
    it: "Una guida pratica per misurare un'intera stanza con il tuo iPhone in meno di cinque minuti, usando il LiDAR per le piante 3D o l'AR per le planimetrie manuali su qualsiasi dispositivo.",
    pl: "Praktyczny przewodnik, jak zmierzyć cały pokój za pomocą iPhone'a w niecałe pięć minut – z LiDAR dla planów 3D lub z AR dla ręcznych rzutów na dowolnym urządzeniu.",
    tr: "iPhone'unuzla bir odanın tamamını beş dakikadan kısa sürede ölçmek için pratik bir kılavuz: 3D planlar için LiDAR ya da herhangi bir cihazda elle çizim için AR.",
    ar: "دليل عملي لقياس غرفة كاملة باستخدام iPhone في أقل من خمس دقائق، باستخدام LiDAR لمخططات ثلاثية الأبعاد أو AR للمخططات اليدوية على أي جهاز."
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

export function PostRU() {
  return (
    <article className="prose-content">
      <p className="lead">
        Рулетка хороша, когда нужно измерить одну стену за раз. Но если вам нужна целая комната — каждая стена, каждая дверь, каждое окно, — есть способ быстрее. Ваш iPhone
        способен снять всю комнату менее чем за пять минут, дать измеренный 2D-план
        этажа, экспортировать PDF, который можно отправить подрядчику по почте, и (на новых
        моделях) построить полноценную 3D-модель, по которой можно «пройтись».
      </p>

      <p>
        Это руководство проведёт вас через оба метода: <strong>автоматическое
        сканирование LiDAR</strong> для iPhone с датчиком глубины (12 Pro и новее) и
        <strong> ручной конструктор плана этажа</strong>, который работает на любом iPhone
        начиная с Xs. Для обоих способов мы используем бесплатное приложение <em>Ruler AR</em>, но
        приёмы применимы к любому приложению для измерений на базе AR.
      </p>

      <h2>Прежде чем начать</h2>
      <p>
        Оба метода опираются на фреймворк Apple ARKit, который отслеживает положение
        вашего телефона в физическом пространстве с помощью камеры и датчиков движения. Чтобы получить
        точный результат:
      </p>
      <ul>
        <li>
          <strong>Хорошее освещение.</strong> ARKit нужна видимая текстура, чтобы отслеживать
          поверхности. Лучше всего подходит комната при дневном свете или равномерно освещённое
          помещение. В сумраке приложение предложит включить вспышку.
        </li>
        <li>
          <strong>Свободный проход по полу.</strong> Вы будете обходить комнату по периметру.
          Отодвиньте стулья перед началом — вернуть их на место можно потом.
        </li>
        <li>
          <strong>Уверенные руки.</strong> Держите телефон так, словно снимаете фильм:
          двумя руками, локти прижаты, движения медленные. Резкие движения сбивают трекер
          и портят точность.
        </li>
      </ul>

      <h2>Метод 1: сканирование LiDAR (iPhone 12 Pro и новее)</h2>
      <p>
        Если у вашего iPhone есть датчик LiDAR — маленькая чёрная точка рядом с
        объективами задней камеры на моделях Pro, — вы можете использовать технологию Apple RoomPlan, чтобы
        сгенерировать полный 3D-план этажа. Телефон автоматически распознаёт стены, двери,
        окна и мебель.
      </p>
      <ol>
        <li>
          <strong>Откройте инструмент Room Plan.</strong> В Ruler AR нажмите кнопку
          <em> Инструменты</em> и выберите <em>Сканирование комнаты</em>. Дайте доступ к камере,
          если будет запрошено.
        </li>
        <li>
          <strong>Встаньте в углу комнаты.</strong> Повернитесь к противоположному углу
          по диагонали. Приложение покажет предпросмотр строящейся 3D-модели; начните на уровне груди, телефон в горизонтальной ориентации.
        </li>
        <li>
          <strong>Медленно двигайтесь вдоль каждой стены.</strong> Ведите телефон плавной
          дугой, чтобы захватить стену от пола до потолка. Не спешите на
          углах — именно там трекинг AR может «уплывать».
        </li>
        <li>
          <strong>Обойдите всю комнату.</strong> Когда вернётесь к стартовому
          углу, план этажа будет готов. Приложение распознает двери,
          окна и крупную мебель (диван, кровать, стол, холодильник…) и пометит их.
        </li>
        <li>
          <strong>Сохраните и экспортируйте.</strong> Нажмите <em>Готово</em>. Вы увидите 3D-
          предпросмотр, 2D-план этажа и размеры каждой стены. Отсюда можно
          экспортировать в PDF, поделиться 3D-моделью USDZ или скопировать отдельные измерения.
        </li>
      </ol>
      <p>
        Для спальни 4×5 м это занимает около 90 секунд. Точность обычно ±5 мм,
        потому что LiDAR измеряет глубину напрямую, а не выводит её из
        кадров камеры.
      </p>

      <h2>Метод 2: ручной конструктор плана этажа (любой iPhone Xs или новее)</h2>
      <p>
        Нет LiDAR? Вы всё равно можете построить аккуратный ортогональный план этажа, обходя
        периметр и отмечая углы. Это медленнее, чем сканирование LiDAR, но
        даёт измеренный 2D-план, достаточно точный для оценки ремонта,
        покупки мебели и съёмки для объявлений.
      </p>
      <ol>
        <li>
          <strong>Встаньте в углу.</strong> В Ruler AR откройте меню <em>Инструменты</em>
          и выберите <em>Ручной конструктор комнаты</em>. Встаньте в любом углу
          комнаты лицом к стене, с которой хотите начать.
        </li>
        <li>
          <strong>Коснитесь угла, в котором стоите.</strong> Наведите экранное
          перекрестие на пол у основания угла и коснитесь. Приложение отметит
          это как первую вершину.
        </li>
        <li>
          <strong>Идите вдоль стены.</strong> Перейдите к следующему углу. Приложение
          в реальном времени показывает, как растёт длина стены.
        </li>
        <li>
          <strong>Коснитесь следующего угла.</strong> Повторите для каждого угла
          комнаты. Мини-карта в правом верхнем углу показывает, как складывается многоугольник.
        </li>
        <li>
          <strong>Замкните контур.</strong> Когда вернётесь к первому углу,
          появится пульсирующая кнопка «Закрыть комнату». Нажмите её. Приложение выровняет стены до прямых
          углов (в пределах ±15°), уберёт крошечные сегменты и построит аккуратный
          план этажа.
        </li>
      </ol>
      <p>
        Совет: если ошиблись, нажмите и удерживайте угол, чтобы удалить его. Или используйте
        кнопки «Отменить»/«Повторить» внизу экрана. Ваша работа автоматически сохраняется
        каждую секунду — даже если вы свернёте приложение или телефон заблокируется,
        незавершённое сканирование сохранится.
      </p>

      <h2>Добавление дверей, окон и мебели (ручной метод)</h2>
      <p>
        Ручное сканирование фиксирует контур комнаты, но не проёмы. Чтобы добавить их:
      </p>
      <ul>
        <li>
          После закрытия комнаты откроется 2D-редактор. Перетащите значок двери
          на стену, где она находится. Задайте её ширину и высоту.
        </li>
        <li>
          Сделайте то же для каждого окна. Задайте высоту подоконника (от пола) и
          размеры проёма.
        </li>
        <li>
          Для мебели используйте библиотеку объектов — диван, кровать, стол, холодильник и т. д.
          Перетащите на план, затем поверните и измените размер.
        </li>
      </ul>

      <h2>Экспорт плана этажа</h2>
      <p>
        Каждое сохранённое сканирование становится проектом в вашей библиотеке. С экрана
        деталей любого проекта вы можете:
      </p>
      <ul>
        <li>
          <strong>Экспортировать PDF.</strong> Макет A4 с 2D-планом этажа,
          таблицей размеров каждой стены и опциональной оценкой материалов
          (краска, напольное покрытие, плинтус, плитка, обои).
        </li>
        <li>
          <strong>Поделиться скриншотом.</strong> 2D-план в формате PNG. Отлично работает в
          iMessage и электронной почте.
        </li>
        <li>
          <strong>Экспортировать 3D (только LiDAR).</strong> Формат USDZ, открывается в macOS
          Quick Look, AR Quick Look на iPhone или в любом инструменте 3D-моделирования.
        </li>
      </ul>

      <h2>Когда какой метод использовать</h2>
      <table>
        <thead>
          <tr>
            <th>Цель</th>
            <th>Лучший метод</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Быстрая оценка площади под покраску/напольное покрытие</td>
            <td>Ручной (быстрая настройка, не нужно ждать инициализации AR)</td>
          </tr>
          <tr>
            <td>3D-модель для подрядчика / архитектора</td>
            <td>LiDAR (единственный метод, дающий настоящее 3D-сканирование)</td>
          </tr>
          <tr>
            <td>План этажа для объявления о недвижимости</td>
            <td>LiDAR при наличии, ручной как запасной вариант</td>
          </tr>
          <tr>
            <td>Документация для страховой</td>
            <td>LiDAR — автоматически фиксирует мебель</td>
          </tr>
          <tr>
            <td>Проверка дверного проёма / коридора перед доставкой мебели</td>
            <td>Измерение камерой (отдельные размеры, а не вся комната)</td>
          </tr>
        </tbody>
      </table>

      <h2>Частые ошибки (и как их избежать)</h2>
      <ul>
        <li>
          <strong>Сканирование при слабом свете.</strong> Трекинг AR быстро ухудшается.
          Либо включите верхний свет, либо используйте встроенную вспышку.
        </li>
        <li>
          <strong>Слишком быстрые движения.</strong> AR-сессии нужно около 50 мс на кадр
          для обновления. Если резко водить телефоном, трекинг отстаёт, и стены
          получаются кривыми. Двигайтесь медленно.
        </li>
        <li>
          <strong>Срезание угла.</strong> Не идите наискосок через комнату.
          AR накапливает погрешность на расстоянии; обход по периметру сбрасывает трекинг на каждом
          угле, который вы отмечаете.
        </li>
        <li>
          <strong>Отражающие поверхности.</strong> Зеркала и стеклянные окна во всю стену
          сбивают отслеживание глубины. Накройте их простынёй во время сканирования
          и добавьте как объекты позже.
        </li>
      </ul>

      <h2>Готовы попробовать?</h2>
      <p>
        Ruler AR бесплатен в App Store. Ручной конструктор комнаты работает на любом
        iPhone Xs или новее; сканер LiDAR есть в версиях Pro
        iPhone 12 и выше. Откройте камеру, обойдите комнату, поделитесь PDF — готово за
        пять минут.
      </p>
    </article>
  );
}

export function PostDE() {
  return (
    <article className="prose-content">
      <p className="lead">
        Ein Maßband ist großartig, um eine Wand nach der anderen zu messen. Aber wenn du einen ganzen Raum brauchst, jede Wand, jede Tür, jedes Fenster, gibt es einen schnelleren Weg. Dein iPhone
        kann den ganzen Raum in unter fünf Minuten erfassen, dir einen vermessenen 2D-
        Grundriss liefern, ein PDF exportieren, das du einem Handwerker mailen kannst, und (bei neueren
        Modellen) ein vollständiges 3D-Modell bauen, durch das du gehen kannst.
      </p>

      <p>
        Diese Anleitung führt dich durch beide Methoden: den <strong>automatischen LiDAR-
        Scan</strong> für iPhones mit Tiefensensor (12 Pro und neuer) und den
        <strong> manuellen Grundriss-Builder</strong>, der auf jedem iPhone ab dem
        Xs funktioniert. Wir verwenden für beides die kostenlose App <em>Ruler AR</em>, aber die
        Techniken gelten für jede AR-basierte Mess-App.
      </p>

      <h2>Bevor du beginnst</h2>
      <p>
        Beide Methoden beruhen auf Apples ARKit-Framework, das die Position deines Telefons
        im physischen Raum mithilfe von Kamera und Bewegungssensoren verfolgt. Für
        genaue Ergebnisse:
      </p>
      <ul>
        <li>
          <strong>Gute Beleuchtung.</strong> ARKit braucht sichtbare Textur, um
          Oberflächen zu verfolgen. Ein tageslichthelle Raum oder ein gleichmäßig beleuchteter Innenraum
          eignet sich am besten. Bei schwachem Licht fordert dich die App auf, die Taschenlampe einzuschalten.
        </li>
        <li>
          <strong>Freier Weg am Boden.</strong> Du gehst den Umfang des Raumes ab.
          Räume Stühle vorher beiseite, du kannst sie danach wieder hinstellen.
        </li>
        <li>
          <strong>Ruhige Hände.</strong> Halte das Telefon, als würdest du einen Film drehen:
          beide Hände, Ellbogen eng am Körper, langsame Bewegungen. Ruckartige Bewegungen verwirren den Tracker
          und ruinieren die Genauigkeit.
        </li>
      </ul>

      <h2>Methode 1: LiDAR-Scan (iPhone 12 Pro und neuer)</h2>
      <p>
        Wenn dein iPhone einen LiDAR-Sensor hat, den kleinen schwarzen Punkt neben den hinteren
        Kameralinsen der Pro-Modelle, kannst du Apples RoomPlan-Technologie nutzen, um
        einen vollständigen 3D-Grundriss zu erzeugen. Das Telefon erkennt Wände, Türen,
        Fenster und Möbel automatisch.
      </p>
      <ol>
        <li>
          <strong>Öffne das Room-Plan-Werkzeug.</strong> Tippe in Ruler AR auf die
          <em> Tools</em>-Taste und wähle <em>Raumscan</em>. Gewähre den Kamerazugriff,
          falls du gefragt wirst.
        </li>
        <li>
          <strong>Stell dich in eine Ecke des Raumes.</strong> Blicke diagonal zur gegenüberliegenden
          Ecke. Die App zeigt eine Vorschau des entstehenden 3D-Modells; beginne auf Brusthöhe, Telefon im Querformat.
        </li>
        <li>
          <strong>Geh langsam an jeder Wand entlang.</strong> Schwenke das Telefon in einem sanften
          Bogen, um die Wand vom Boden bis zur Decke zu erfassen. Nimm dir an den
          Ecken Zeit, dort kann das AR-Tracking abdriften.
        </li>
        <li>
          <strong>Umrunde den ganzen Raum.</strong> Wenn du zur Startecke
          zurückkehrst, sollte der Grundriss vollständig sein. Die App erkennt Türen,
          Fenster und größere Möbel (Sofa, Bett, Tisch, Kühlschrank…) und markiert sie.
        </li>
        <li>
          <strong>Speichern und exportieren.</strong> Tippe auf <em>Fertig</em>. Du siehst eine 3D-
          Vorschau, einen 2D-Grundriss und die Maße jeder Wand. Von hier aus kannst du
          als PDF exportieren, ein USDZ-3D-Modell teilen oder einzelne Maße kopieren.
        </li>
      </ol>
      <p>
        Bei einem 4×5 m großen Schlafzimmer dauert das etwa 90 Sekunden. Die Genauigkeit liegt typischerweise bei ±5 mm,
        weil LiDAR die Tiefe direkt misst, anstatt sie aus
        Kamerabildern abzuleiten.
      </p>

      <h2>Methode 2: Manueller Grundriss-Builder (jedes iPhone Xs oder neuer)</h2>
      <p>
        Kein LiDAR? Du kannst trotzdem einen sauberen rechtwinkligen Grundriss erstellen, indem du den
        Umfang abgehst und Ecken antippst. Das ist langsamer als der LiDAR-Scan, liefert aber
        einen vermessenen 2D-Plan, der genau genug ist für Renovierungs-
        kostenschätzungen, Möbelkauf und Inseratsfotos.
      </p>
      <ol>
        <li>
          <strong>Stell dich in eine Ecke.</strong> Öffne in Ruler AR das Menü <em>Tools</em>
          und wähle <em>Manueller Raum-Builder</em>. Stell dich in eine beliebige Ecke des
          Raumes, mit Blick auf die Wand, mit der du beginnen möchtest.
        </li>
        <li>
          <strong>Tippe auf die Ecke, in der du stehst.</strong> Richte das
          Fadenkreuz auf dem Bildschirm auf den Boden am Fuß der Ecke und tippe. Die App markiert
          dies als deinen ersten Eckpunkt.
        </li>
        <li>
          <strong>Geh an der Wand entlang.</strong> Bewege dich zur nächsten Ecke. Die App
          zeigt in Echtzeit eine Vorschau der wachsenden Wandlänge.
        </li>
        <li>
          <strong>Tippe auf die nächste Ecke.</strong> Wiederhole das für jede Ecke des
          Raumes. Die Mini-Karte oben rechts zeigt das entstehende Polygon.
        </li>
        <li>
          <strong>Schließe den Umriss.</strong> Wenn du zur ersten Ecke zurückkehrst,
          erscheint der pulsierende Hinweis „Raum schließen". Tippe darauf. Die App richtet die Wände rechtwinklig
          aus (innerhalb ±15°), entfernt winzige Segmente und erzeugt einen sauberen
          Grundriss.
        </li>
      </ol>
      <p>
        Tipp: Wenn du einen Fehler machst, halte eine Ecke gedrückt, um sie zu löschen. Oder nutze die
        Rückgängig-/Wiederholen-Tasten unten am Bildschirm. Deine Arbeit wird automatisch
        jede Sekunde gespeichert, selbst wenn du die App minimierst oder das Telefon sich sperrt,
        der laufende Scan bleibt erhalten.
      </p>

      <h2>Türen, Fenster und Möbel erfassen (manuelle Methode)</h2>
      <p>
        Manuelle Scans erfassen den Raumumriss, aber nicht die Öffnungen. So fügst du sie hinzu:
      </p>
      <ul>
        <li>
          Nach dem Schließen des Raumes öffnet sich der 2D-Editor. Zieh ein Türsymbol per Drag-and-drop
          auf die Wand, an der die Tür ist. Lege Breite und Höhe fest.
        </li>
        <li>
          Mach dasselbe für jedes Fenster. Lege die Brüstungshöhe (vom Boden) und die
          Öffnungsmaße fest.
        </li>
        <li>
          Für Möbel nutze die Objektbibliothek, Sofa, Bett, Tisch, Kühlschrank usw.
          Zieh sie auf den Plan, dann drehe und skaliere sie.
        </li>
      </ul>

      <h2>Deinen Grundriss exportieren</h2>
      <p>
        Jeder gespeicherte Scan wird zu einem Projekt in deiner Bibliothek. Aus jedem Projekt-
        Detailbildschirm kannst du:
      </p>
      <ul>
        <li>
          <strong>PDF exportieren.</strong> A4-Layout mit dem 2D-Grundriss, einer
          Maßtabelle für jede Wand und einer optionalen Materialschätzung
          (Farbe, Bodenbelag, Sockelleiste, Fliesen, Tapete).
        </li>
        <li>
          <strong>Einen Screenshot teilen.</strong> Den 2D-Plan als PNG. Funktioniert hervorragend in
          iMessage und E-Mail.
        </li>
        <li>
          <strong>3D exportieren (nur LiDAR).</strong> USDZ-Format, öffnet sich in macOS
          Quick Look, AR Quick Look auf dem iPhone oder jedem 3D-Modellierungstool.
        </li>
      </ul>

      <h2>Wann welche Methode</h2>
      <table>
        <thead>
          <tr>
            <th>Ziel</th>
            <th>Beste Methode</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Schnelle Flächenschätzung für Farbe/Bodenbelag</td>
            <td>Manuell (schnellere Einrichtung, kein Warten auf AR-Initialisierung)</td>
          </tr>
          <tr>
            <td>3D-Modell für Handwerker / Architekt</td>
            <td>LiDAR (einzige Methode, die einen echten 3D-Scan liefert)</td>
          </tr>
          <tr>
            <td>Grundriss für ein Immobilieninserat</td>
            <td>LiDAR, falls verfügbar, sonst manuell</td>
          </tr>
          <tr>
            <td>Dokumentation für die Versicherung</td>
            <td>LiDAR, erfasst Möbel automatisch</td>
          </tr>
          <tr>
            <td>Türdurchgang / Flur vor einer Möbellieferung prüfen</td>
            <td>Kameramessung (einzelne Maße, nicht ein ganzer Raum)</td>
          </tr>
        </tbody>
      </table>

      <h2>Häufige Fehler (und wie du sie vermeidest)</h2>
      <ul>
        <li>
          <strong>Scannen bei wenig Licht.</strong> Das AR-Tracking verschlechtert sich schnell.
          Schalte entweder das Deckenlicht ein oder nutze die App-Taschenlampe.
        </li>
        <li>
          <strong>Zu schnelle Bewegung.</strong> AR-Sitzungen brauchen etwa 50 ms pro Bild
          für die Aktualisierung. Wenn du das Telefon herumreißt, hinkt das Tracking hinterher und Wände
          werden krumm. Geh langsam.
        </li>
        <li>
          <strong>Die Ecke auslassen.</strong> Nimm keine Abkürzung quer durch den Raum.
          AR driftet über Distanz; das Abgehen des Umfangs setzt das Tracking an jeder
          Ecke zurück, die du antippst.
        </li>
        <li>
          <strong>Reflektierende Flächen.</strong> Spiegel und bodentiefe Glasfenster
          verwirren das Tiefen-Tracking. Decke sie während des Scans mit einem Tuch ab
          und füge sie nachträglich als Objekte hinzu.
        </li>
      </ul>

      <h2>Bereit, es auszuprobieren?</h2>
      <p>
        Ruler AR ist kostenlos im App Store. Der manuelle Raum-Builder funktioniert auf jedem
        iPhone Xs oder neuer; der LiDAR-Scanner ist in den Pro-Versionen des
        iPhone 12 und höher enthalten. Öffne die Kamera, geh den Raum ab, teile das PDF, fertig in
        fünf Minuten.
      </p>
    </article>
  );
}

export function PostFR() {
  return (
    <article className="prose-content">
      <p className="lead">
        Un mètre ruban est parfait pour mesurer un mur à la fois. Mais s'il vous faut une pièce entière, chaque mur, chaque porte, chaque fenêtre, il existe un moyen plus rapide. Votre iPhone
        peut capturer toute la pièce en moins de cinq minutes, vous donner un plan
        d'étage 2D coté, exporter un PDF à envoyer par e-mail à un artisan, et (sur les
        modèles plus récents) construire un modèle 3D complet dans lequel vous pouvez vous déplacer.
      </p>

      <p>
        Ce guide vous présente les deux méthodes : le <strong>scan LiDAR
        automatique</strong> pour les iPhone dotés d'un capteur de profondeur (12 Pro et plus récents), et le
        <strong> constructeur de plan d'étage manuel</strong> qui fonctionne sur tous les iPhone à partir
        du Xs. Nous utiliserons l'application gratuite <em>Ruler AR</em> pour les deux, mais les
        techniques s'appliquent à toute application de mesure basée sur l'AR.
      </p>

      <h2>Avant de commencer</h2>
      <p>
        Les deux méthodes reposent sur le framework ARKit d'Apple, qui suit la position
        de votre téléphone dans l'espace physique à l'aide de la caméra et des capteurs de mouvement. Pour obtenir
        des résultats précis :
      </p>
      <ul>
        <li>
          <strong>Un bon éclairage.</strong> ARKit a besoin de texture visible pour suivre
          les surfaces. Une pièce éclairée à la lumière du jour ou un espace intérieur uniformément éclairé
          convient le mieux. En cas de faible luminosité, l'application vous invitera à allumer le flash.
        </li>
        <li>
          <strong>Un sol dégagé.</strong> Vous allez parcourir le périmètre de la pièce.
          Écartez les chaises avant de commencer, vous pourrez les remettre après.
        </li>
        <li>
          <strong>Des mains stables.</strong> Tenez le téléphone comme si vous filmiez :
          à deux mains, coudes serrés, mouvements lents. Les mouvements brusques perturbent le suivi
          et ruinent la précision.
        </li>
      </ul>

      <h2>Méthode 1 : scan LiDAR (iPhone 12 Pro et plus récents)</h2>
      <p>
        Si votre iPhone dispose d'un capteur LiDAR, le petit point noir à côté des
        objectifs de la caméra arrière sur les modèles Pro, vous pouvez utiliser la technologie RoomPlan d'Apple pour
        générer un plan d'étage 3D complet. Le téléphone identifie automatiquement les murs, les portes,
        les fenêtres et les meubles.
      </p>
      <ol>
        <li>
          <strong>Ouvrez l'outil Room Plan.</strong> Dans Ruler AR, appuyez sur le bouton
          <em> Outils</em> et choisissez <em>Scan de pièce</em>. Accordez l'accès à la caméra
          si on vous le demande.
        </li>
        <li>
          <strong>Placez-vous dans un coin de la pièce.</strong> Faites face au coin opposé
          en diagonale. L'application affichera un aperçu du modèle 3D en cours de construction ; commencez à hauteur de poitrine, téléphone en mode paysage.
        </li>
        <li>
          <strong>Avancez lentement le long de chaque mur.</strong> Balayez le téléphone selon un
          arc régulier pour capturer le mur du sol au plafond. Prenez votre temps dans les
          coins, c'est là que le suivi AR peut dériver.
        </li>
        <li>
          <strong>Faites le tour de toute la pièce.</strong> Lorsque vous revenez au coin de
          départ, le plan d'étage devrait être complet. L'application détectera les portes,
          les fenêtres et les meubles principaux (canapé, lit, table, réfrigérateur…) et les étiquettera.
        </li>
        <li>
          <strong>Enregistrez et exportez.</strong> Appuyez sur <em>Terminé</em>. Vous verrez un aperçu 3D,
          un plan d'étage 2D et les dimensions de chaque mur. À partir de là, vous pouvez
          exporter en PDF, partager un modèle 3D USDZ ou copier des mesures individuelles.
        </li>
      </ol>
      <p>
        Pour une chambre de 4×5 m, cela prend environ 90 secondes. La précision est généralement de ±5 mm
        car le LiDAR mesure la profondeur directement plutôt que de la déduire des
        images de la caméra.
      </p>

      <h2>Méthode 2 : constructeur de plan d'étage manuel (tout iPhone Xs ou plus récent)</h2>
      <p>
        Pas de LiDAR ? Vous pouvez tout de même créer un plan d'étage orthogonal net en parcourant le
        périmètre et en touchant les coins. C'est plus lent que le scan LiDAR mais
        cela produit un plan 2D coté, assez précis pour des estimations de
        rénovation, l'achat de meubles et les photos d'annonces.
      </p>
      <ol>
        <li>
          <strong>Placez-vous dans un coin.</strong> Dans Ruler AR, ouvrez le menu <em>Outils</em>
          et choisissez <em>Constructeur de pièce manuel</em>. Placez-vous dans n'importe quel coin de la
          pièce, face au mur par lequel vous voulez commencer.
        </li>
        <li>
          <strong>Touchez le coin où vous vous tenez.</strong> Visez le
          réticule à l'écran sur le sol à la base du coin et touchez. L'application marque
          cela comme votre premier sommet.
        </li>
        <li>
          <strong>Longez le mur.</strong> Déplacez-vous vers le coin suivant. L'application
          affiche en temps réel un aperçu de la longueur du mur qui augmente.
        </li>
        <li>
          <strong>Touchez le coin suivant.</strong> Répétez pour chaque coin de la
          pièce. La mini-carte en haut à droite montre le polygone qui prend forme.
        </li>
        <li>
          <strong>Fermez la boucle.</strong> Lorsque vous revenez à votre premier coin,
          la pulsation « Fermer la pièce » apparaît. Touchez-la. L'application aligne les murs sur des angles
          droits (à ±15° près), supprime les minuscules segments et produit un plan d'étage net.
        </li>
      </ol>
      <p>
        Astuce : si vous faites une erreur, appuyez longuement sur un coin pour le supprimer. Ou utilisez les
        boutons Annuler/Rétablir en bas de l'écran. Votre travail est enregistré automatiquement
        chaque seconde, même si vous réduisez l'application ou que le téléphone se verrouille,
        le scan en cours est préservé.
      </p>

      <h2>Capturer les portes, fenêtres et meubles (méthode manuelle)</h2>
      <p>
        Les scans manuels capturent le contour de la pièce mais pas les ouvertures. Pour les ajouter :
      </p>
      <ul>
        <li>
          Après avoir fermé la pièce, l'éditeur 2D s'ouvre. Glissez-déposez une icône de porte
          sur le mur où se trouve la porte. Définissez sa largeur et sa hauteur.
        </li>
        <li>
          Faites de même pour chaque fenêtre. Définissez la hauteur d'allège (depuis le sol) et les
          dimensions de l'ouverture.
        </li>
        <li>
          Pour les meubles, utilisez la bibliothèque d'objets, canapé, lit, table, réfrigérateur, etc.
          Glissez-les sur le plan, puis faites-les pivoter et redimensionnez-les.
        </li>
      </ul>

      <h2>Exporter votre plan d'étage</h2>
      <p>
        Chaque scan enregistré devient un projet dans votre bibliothèque. Depuis l'écran de
        détail de n'importe quel projet, vous pouvez :
      </p>
      <ul>
        <li>
          <strong>Exporter en PDF.</strong> Mise en page A4 avec le plan d'étage 2D, un
          tableau de dimensions pour chaque mur et une estimation de matériaux optionnelle
          (peinture, revêtement de sol, plinthe, carrelage, papier peint).
        </li>
        <li>
          <strong>Partager une capture d'écran.</strong> Le plan 2D en PNG. Idéal dans
          iMessage et par e-mail.
        </li>
        <li>
          <strong>Exporter en 3D (LiDAR uniquement).</strong> Format USDZ, s'ouvre dans macOS
          Quick Look, AR Quick Look sur iPhone, ou tout outil de modélisation 3D.
        </li>
      </ul>

      <h2>Quand utiliser chaque méthode</h2>
      <table>
        <thead>
          <tr>
            <th>Objectif</th>
            <th>Meilleure méthode</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Estimation rapide de surface pour peinture/revêtement de sol</td>
            <td>Manuel (mise en route plus rapide, pas d'attente d'initialisation AR)</td>
          </tr>
          <tr>
            <td>Modèle 3D pour artisan / architecte</td>
            <td>LiDAR (seule méthode produisant un véritable scan 3D)</td>
          </tr>
          <tr>
            <td>Plan d'étage pour une annonce immobilière</td>
            <td>LiDAR si disponible, manuel en repli</td>
          </tr>
          <tr>
            <td>Documentation d'assurance</td>
            <td>LiDAR, capture les meubles automatiquement</td>
          </tr>
          <tr>
            <td>Vérification d'une porte / d'un couloir avant une livraison de meubles</td>
            <td>Mesure caméra (dimensions isolées, pas une pièce entière)</td>
          </tr>
        </tbody>
      </table>

      <h2>Erreurs courantes (et comment les éviter)</h2>
      <ul>
        <li>
          <strong>Scanner en faible luminosité.</strong> Le suivi AR se dégrade vite.
          Allumez le plafonnier ou utilisez le flash intégré à l'application.
        </li>
        <li>
          <strong>Aller trop vite.</strong> Les sessions AR ont besoin d'environ 50 ms par image
          pour se mettre à jour. Si vous agitez le téléphone, le suivi prend du retard et les murs
          finissent tordus. Avancez lentement.
        </li>
        <li>
          <strong>Sauter un coin.</strong> Ne coupez pas à travers la pièce.
          L'AR dérive sur la distance ; parcourir le périmètre réinitialise le suivi à chaque
          coin que vous touchez.
        </li>
        <li>
          <strong>Surfaces réfléchissantes.</strong> Les miroirs et les fenêtres en verre
          toute hauteur perturbent le suivi de profondeur. Couvrez-les d'un drap pendant le scan
          et ajoutez-les ensuite comme objets.
        </li>
      </ul>

      <h2>Prêt à essayer ?</h2>
      <p>
        Ruler AR est gratuit sur l'App Store. Le constructeur de pièce manuel fonctionne sur tout
        iPhone Xs ou plus récent ; le scanner LiDAR est inclus sur les versions Pro de
        l'iPhone 12 et au-delà. Ouvrez la caméra, parcourez la pièce, partagez le PDF, terminé en
        cinq minutes.
      </p>
    </article>
  );
}

export function PostES() {
  return (
    <article className="prose-content">
      <p className="lead">
        Una cinta métrica es genial para una pared a la vez. Pero si necesitas una habitación completa, cada pared, cada puerta, cada ventana, hay una forma más rápida. Tu iPhone
        puede capturar toda la habitación en menos de cinco minutos, darte un plano
        2D acotado, exportar un PDF que puedes enviar por correo a un contratista y (en los
        modelos más nuevos) construir un modelo 3D completo por el que puedes desplazarte.
      </p>

      <p>
        Esta guía te explica ambos métodos: el <strong>escaneo LiDAR
        automático</strong> para iPhone con sensor de profundidad (12 Pro y posteriores), y el
        <strong> constructor de planos manual</strong> que funciona en cualquier iPhone desde el
        Xs en adelante. Usaremos la app gratuita <em>Ruler AR</em> para ambos, pero las
        técnicas se aplican a cualquier app de medición basada en AR.
      </p>

      <h2>Antes de empezar</h2>
      <p>
        Ambos métodos se basan en el framework ARKit de Apple, que rastrea la posición
        de tu teléfono en el espacio físico mediante la cámara y los sensores de movimiento. Para obtener
        resultados precisos:
      </p>
      <ul>
        <li>
          <strong>Buena iluminación.</strong> ARKit necesita textura visible para rastrear
          superficies. Una habitación con luz de día o un espacio interior uniformemente iluminado
          funciona mejor. Con poca luz, la app te pedirá que enciendas la linterna.
        </li>
        <li>
          <strong>Suelo despejado.</strong> Recorrerás el perímetro de la habitación.
          Aparta las sillas antes de empezar, puedes volver a colocarlas después.
        </li>
        <li>
          <strong>Pulso firme.</strong> Sujeta el teléfono como si estuvieras grabando una película:
          con las dos manos, codos pegados, movimientos lentos. Los movimientos bruscos confunden el rastreador
          y arruinan la precisión.
        </li>
      </ul>

      <h2>Método 1: escaneo LiDAR (iPhone 12 Pro y posteriores)</h2>
      <p>
        Si tu iPhone tiene un sensor LiDAR, el pequeño punto negro junto a las lentes
        de la cámara trasera en los modelos Pro, puedes usar la tecnología RoomPlan de Apple para
        generar un plano 3D completo. El teléfono identifica paredes, puertas,
        ventanas y muebles automáticamente.
      </p>
      <ol>
        <li>
          <strong>Abre la herramienta Room Plan.</strong> En Ruler AR, toca el botón
          <em> Herramientas</em> y elige <em>Escaneo de habitación</em>. Concede el acceso a la cámara
          si te lo pide.
        </li>
        <li>
          <strong>Colócate en una esquina de la habitación.</strong> Mira en diagonal hacia la esquina
          opuesta. La app mostrará una vista previa del modelo 3D que se va construyendo; empieza a la altura del pecho, con el teléfono en horizontal.
        </li>
        <li>
          <strong>Camina despacio por cada pared.</strong> Mueve el teléfono en un arco
          suave para capturar la pared del suelo al techo. Tómate tu tiempo en las
          esquinas, ahí es donde el rastreo AR puede desviarse.
        </li>
        <li>
          <strong>Rodea toda la habitación.</strong> Cuando vuelvas a la esquina de
          partida, el plano debería estar completo. La app detectará puertas,
          ventanas y muebles grandes (sofá, cama, mesa, nevera…) y los etiquetará.
        </li>
        <li>
          <strong>Guarda y exporta.</strong> Toca <em>Hecho</em>. Verás una vista previa 3D,
          un plano 2D y las dimensiones de cada pared. Desde aquí puedes
          exportar a PDF, compartir un modelo 3D USDZ o copiar medidas individuales.
        </li>
      </ol>
      <p>
        En un dormitorio de 4×5 m esto tarda unos 90 segundos. La precisión suele ser de ±5 mm
        porque el LiDAR mide la profundidad directamente en lugar de deducirla de los
        fotogramas de la cámara.
      </p>

      <h2>Método 2: constructor de planos manual (cualquier iPhone Xs o posterior)</h2>
      <p>
        ¿Sin LiDAR? Aún puedes crear un plano ortogonal limpio recorriendo el
        perímetro y tocando las esquinas. Es más lento que el escaneo LiDAR pero
        produce un plano 2D acotado, lo bastante preciso para presupuestos de
        reforma, compra de muebles y fotos de anuncios.
      </p>
      <ol>
        <li>
          <strong>Colócate en una esquina.</strong> En Ruler AR, abre el menú <em>Herramientas</em>
          y elige <em>Constructor de habitación manual</em>. Colócate en cualquier esquina de la
          habitación, mirando a la pared por la que quieres empezar.
        </li>
        <li>
          <strong>Toca la esquina donde estás.</strong> Apunta con la
          retícula de la pantalla al suelo, en la base de la esquina, y toca. La app marca
          esto como tu primer vértice.
        </li>
        <li>
          <strong>Camina junto a la pared.</strong> Avanza hasta la siguiente esquina. La app
          muestra en tiempo real una vista previa de la longitud de la pared que crece.
        </li>
        <li>
          <strong>Toca la siguiente esquina.</strong> Repite para cada esquina de la
          habitación. El minimapa de la parte superior derecha muestra el polígono tomando forma.
        </li>
        <li>
          <strong>Cierra el contorno.</strong> Cuando vuelvas a tu primera esquina,
          aparece el pulso «Cerrar habitación». Tócalo. La app ajusta las paredes a ángulos
          rectos (dentro de ±15°), elimina los segmentos diminutos y produce un plano limpio.
        </li>
      </ol>
      <p>
        Consejo: si te equivocas, mantén pulsada una esquina para eliminarla. O usa los
        botones Deshacer/Rehacer de la parte inferior de la pantalla. Tu trabajo se guarda automáticamente
        cada segundo, aunque minimices la app o el teléfono se bloquee,
        el escaneo en curso se conserva.
      </p>

      <h2>Capturar puertas, ventanas y muebles (método manual)</h2>
      <p>
        Los escaneos manuales capturan el contorno de la habitación pero no las aberturas. Para añadirlas:
      </p>
      <ul>
        <li>
          Tras cerrar la habitación, se abre el editor 2D. Arrastra y suelta un icono de puerta
          sobre la pared donde está la puerta. Define su ancho y alto.
        </li>
        <li>
          Haz lo mismo con cada ventana. Define la altura del alféizar (desde el suelo) y las
          dimensiones de la abertura.
        </li>
        <li>
          Para los muebles, usa la biblioteca de objetos, sofá, cama, mesa, nevera, etc.
          Arrástralos al plano y luego gíralos y cambia su tamaño.
        </li>
      </ul>

      <h2>Exportar tu plano</h2>
      <p>
        Cada escaneo que guardas se convierte en un proyecto en tu biblioteca. Desde la pantalla de
        detalle de cualquier proyecto puedes:
      </p>
      <ul>
        <li>
          <strong>Exportar PDF.</strong> Diseño A4 con el plano 2D, una
          tabla de dimensiones para cada pared y una estimación opcional de materiales
          (pintura, suelo, rodapié, azulejo, papel pintado).
        </li>
        <li>
          <strong>Compartir una captura.</strong> El plano 2D como PNG. Funciona genial en
          iMessage y por correo.
        </li>
        <li>
          <strong>Exportar 3D (solo LiDAR).</strong> Formato USDZ, se abre en macOS
          Quick Look, AR Quick Look en iPhone, o cualquier herramienta de modelado 3D.
        </li>
      </ul>

      <h2>Cuándo usar cada método</h2>
      <table>
        <thead>
          <tr>
            <th>Objetivo</th>
            <th>Mejor método</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Estimación rápida de superficie para pintura/suelo</td>
            <td>Manual (configuración más rápida, sin esperar la inicialización de AR)</td>
          </tr>
          <tr>
            <td>Modelo 3D para contratista / arquitecto</td>
            <td>LiDAR (único método que produce un escaneo 3D real)</td>
          </tr>
          <tr>
            <td>Plano para un anuncio inmobiliario</td>
            <td>LiDAR si está disponible, manual como alternativa</td>
          </tr>
          <tr>
            <td>Documentación para el seguro</td>
            <td>LiDAR, captura los muebles automáticamente</td>
          </tr>
          <tr>
            <td>Comprobar puerta / pasillo antes de una entrega de muebles</td>
            <td>Medición con cámara (medidas sueltas, no una habitación entera)</td>
          </tr>
        </tbody>
      </table>

      <h2>Errores comunes (y cómo evitarlos)</h2>
      <ul>
        <li>
          <strong>Escanear con poca luz.</strong> El rastreo AR se degrada rápido.
          Enciende las luces del techo o usa la linterna de la app.
        </li>
        <li>
          <strong>Moverte demasiado rápido.</strong> Las sesiones AR necesitan unos 50 ms por fotograma
          para actualizarse. Si agitas el teléfono, el rastreo se queda atrás y las paredes
          salen torcidas. Camina despacio.
        </li>
        <li>
          <strong>Saltarte la esquina.</strong> No cruces en atajo por la habitación.
          El AR se desvía con la distancia; recorrer el perímetro reinicia el rastreo en cada
          esquina que tocas.
        </li>
        <li>
          <strong>Superficies reflectantes.</strong> Los espejos y las ventanas de cristal
          de suelo a techo confunden el rastreo de profundidad. Cúbrelos con una sábana durante el escaneo
          y añádelos como objetos después.
        </li>
      </ul>

      <h2>¿Listo para probarlo?</h2>
      <p>
        Ruler AR es gratis en la App Store. El constructor de habitación manual funciona en cualquier
        iPhone Xs o posterior; el escáner LiDAR está incluido en las versiones Pro del
        iPhone 12 y superiores. Abre la cámara, recorre la habitación, comparte el PDF, listo en
        cinco minutos.
      </p>
    </article>
  );
}

export function PostJA() {
  return (
    <article className="prose-content">
      <p className="lead">
        メジャーは一度に一つの壁を測るには最適です。でも部屋全体、すべての壁、すべてのドア、すべての窓が必要なら、もっと速い方法があります。あなたのiPhoneは
        部屋全体を5分以内で取り込み、寸法入りの2D間取り図を作成し、業者にメールで送れるPDFを書き出し、（新しい
        モデルでは）中を歩き回れる完全な3Dモデルまで作れます。
      </p>

      <p>
        このガイドでは両方の方法を説明します。深度センサー搭載のiPhone（12 Pro以降）向けの<strong>自動LiDAR
        スキャン</strong>と、Xs以降のすべてのiPhoneで動作する<strong>手動の間取り図ビルダー</strong>です。どちらも無料アプリの<em>Ruler AR</em>を使いますが、その
        手法はARベースの計測アプリ全般に当てはまります。
      </p>

      <h2>始める前に</h2>
      <p>
        どちらの方法もAppleのARKitフレームワークに基づいており、カメラとモーションセンサーを使って物理空間内での
        端末の位置を追跡します。正確な結果を得るには：
      </p>
      <ul>
        <li>
          <strong>十分な明るさ。</strong> ARKitは面を追跡するために見える質感を必要とします。
          昼光の差す部屋や均一に照らされた室内が最適です。暗い条件では、
          アプリがフラッシュライトを点けるよう促します。
        </li>
        <li>
          <strong>床に障害物がないこと。</strong> 部屋の外周を歩きます。
          始める前に椅子をどけておきましょう。後で戻せます。
        </li>
        <li>
          <strong>手を安定させること。</strong> 映画を撮るように端末を持ちます。
          両手で、ひじを締めて、ゆっくり動かします。乱暴な動きはトラッカーを混乱させ、
          精度を台無しにします。
        </li>
      </ul>

      <h2>方法1：LiDARスキャン（iPhone 12 Pro以降）</h2>
      <p>
        iPhoneにLiDARセンサー、Proモデルの背面カメラレンズの隣にある小さな黒い点、
        があれば、AppleのRoomPlan技術を使って完全な3D間取り図を
        生成できます。端末は壁、ドア、
        窓、家具を自動的に識別します。
      </p>
      <ol>
        <li>
          <strong>Room Planツールを開きます。</strong> Ruler ARで
          <em> ツール</em>ボタンをタップし、<em>部屋スキャン</em>を選びます。求められたらカメラへの
          アクセスを許可します。
        </li>
        <li>
          <strong>部屋の隅に立ちます。</strong> 対角の隅に向かって構えます。
          アプリが構築中の3Dモデルのプレビューを表示します。胸の高さから始め、端末は横向きにします。
        </li>
        <li>
          <strong>各壁に沿ってゆっくり歩きます。</strong> 端末をなめらかな弧を描くように振り、
          床から天井まで壁を取り込みます。隅では時間をかけてください。
          そこでARトラッキングがずれやすいからです。
        </li>
        <li>
          <strong>部屋を一周します。</strong> スタートした隅に戻ると、
          間取り図が完成しているはずです。アプリはドア、
          窓、主要な家具（ソファ、ベッド、テーブル、冷蔵庫…）を検出してタグ付けします。
        </li>
        <li>
          <strong>保存して書き出します。</strong> <em>完了</em>をタップします。3D
          プレビュー、2D間取り図、各壁の寸法が表示されます。ここから
          PDFへの書き出し、USDZの3Dモデルの共有、個別の計測値のコピーができます。
        </li>
      </ol>
      <p>
        4×5 mの寝室なら約90秒で済みます。精度は通常±5 mmです。
        LiDARはカメラのフレームから推定するのではなく、深度を直接
        測定するためです。
      </p>

      <h2>方法2：手動の間取り図ビルダー（iPhone Xs以降ならどれでも）</h2>
      <p>
        LiDARがない？それでも外周を歩いて隅をタップすれば、きれいな直交の間取り図を
        作れます。LiDARスキャンより遅いものの、リフォームの見積もり、
        家具の買い物、物件写真に十分な精度の寸法入り2Dプランが
        できあがります。
      </p>
      <ol>
        <li>
          <strong>隅に立ちます。</strong> Ruler ARで<em>ツール</em>メニューを開き、
          <em>手動部屋ビルダー</em>を選びます。始めたい壁に向かって、
          部屋のどこかの隅に立ちます。
        </li>
        <li>
          <strong>立っている隅をタップします。</strong> 画面上の
          十字線を隅の足元の床に合わせてタップします。アプリはこれを
          最初の頂点として記録します。
        </li>
        <li>
          <strong>壁に沿って歩きます。</strong> 次の隅へ移動します。アプリは
          壁の長さが伸びていく様子をリアルタイムでプレビュー表示します。
        </li>
        <li>
          <strong>次の隅をタップします。</strong> 部屋のすべての隅で繰り返します。
          右上のミニマップに多角形が形になっていく様子が表示されます。
        </li>
        <li>
          <strong>ループを閉じます。</strong> 最初の隅に戻ると、
          「部屋を閉じる」の脈動が現れます。タップします。アプリは壁を直角
          （±15°以内）に揃え、ごく小さなセグメントを取り除き、きれいな間取り図を作ります。
        </li>
      </ol>
      <p>
        ヒント：間違えたら、隅を長押しして削除します。または画面下部の
        元に戻す/やり直しボタンを使います。作業は毎秒自動保存されるので、
        アプリを最小化しても端末がロックされても、
        進行中のスキャンは残ります。
      </p>

      <h2>ドア、窓、家具を取り込む（手動の方法）</h2>
      <p>
        手動スキャンは部屋の輪郭は取り込みますが、開口部は取り込みません。追加するには：
      </p>
      <ul>
        <li>
          部屋を閉じると、2Dエディタが開きます。ドアのアイコンを
          ドアのある壁にドラッグ＆ドロップします。幅と高さを設定します。
        </li>
        <li>
          各窓も同様に行います。窓台の高さ（床から）と
          開口部の寸法を設定します。
        </li>
        <li>
          家具にはオブジェクトライブラリ、ソファ、ベッド、テーブル、冷蔵庫などを使います。
          プランにドラッグし、回転させてサイズを変更します。
        </li>
      </ul>

      <h2>間取り図を書き出す</h2>
      <p>
        保存したスキャンはどれもライブラリ内のプロジェクトになります。どのプロジェクトの
        詳細画面からでも次のことができます：
      </p>
      <ul>
        <li>
          <strong>PDFを書き出す。</strong> A4レイアウトに2D間取り図、
          各壁の寸法表、任意の材料見積もり
          （ペンキ、床材、巾木、タイル、壁紙）を含みます。
        </li>
        <li>
          <strong>スクリーンショットを共有する。</strong> 2DプランをPNGで。
          iMessageやメールで快適に使えます。
        </li>
        <li>
          <strong>3Dを書き出す（LiDARのみ）。</strong> USDZ形式で、macOSの
          Quick Look、iPhoneのAR Quick Look、または任意の3Dモデリングツールで開けます。
        </li>
      </ul>

      <h2>どちらの方法をいつ使うか</h2>
      <table>
        <thead>
          <tr>
            <th>目的</th>
            <th>最適な方法</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ペンキ/床材のための面積のざっくり見積もり</td>
            <td>手動（準備が速く、ARの初期化を待たない）</td>
          </tr>
          <tr>
            <td>業者/建築家向けの3Dモデル</td>
            <td>LiDAR（真の3Dスキャンを作る唯一の方法）</td>
          </tr>
          <tr>
            <td>不動産掲載用の間取り図</td>
            <td>使えるならLiDAR、なければ手動</td>
          </tr>
          <tr>
            <td>保険の記録</td>
            <td>LiDAR、家具を自動で取り込む</td>
          </tr>
          <tr>
            <td>家具配送前のドア/廊下のチェック</td>
            <td>カメラ計測（部屋全体ではなく単一寸法）</td>
          </tr>
        </tbody>
      </table>

      <h2>よくある失敗（とその避け方）</h2>
      <ul>
        <li>
          <strong>暗い場所でのスキャン。</strong> ARトラッキングはすぐに劣化します。
          天井の照明を点けるか、アプリ内のフラッシュライトを使いましょう。
        </li>
        <li>
          <strong>動きが速すぎる。</strong> ARセッションは更新に1フレームあたり約50 msを
          必要とします。端末を振り回すとトラッキングが追いつかず、壁が
          ゆがみます。ゆっくり歩きましょう。
        </li>
        <li>
          <strong>隅を飛ばす。</strong> 部屋を横切ってショートカットしないでください。
          ARは距離とともにずれます。外周を歩くと、タップする隅ごとに
          トラッキングがリセットされます。
        </li>
        <li>
          <strong>反射する面。</strong> 鏡や全面ガラスの窓は
          深度トラッキングを混乱させます。スキャン中はシーツで覆い、
          後からオブジェクトとして追加しましょう。
        </li>
      </ul>

      <h2>試してみませんか？</h2>
      <p>
        Ruler ARはApp Storeで無料です。手動部屋ビルダーは
        iPhone Xs以降ならどれでも動作し、LiDARスキャナーは
        iPhone 12以降のProバージョンに搭載されています。カメラを開き、部屋を歩き、PDFを共有、
        5分で完了です。
      </p>
    </article>
  );
}

export function PostKO() {
  return (
    <article className="prose-content">
      <p className="lead">
        줄자는 한 번에 벽 하나를 재기에는 좋습니다. 하지만 방 전체, 모든 벽, 모든 문, 모든 창이 필요하다면 더 빠른 방법이 있습니다. iPhone은
        방 전체를 5분 이내에 담아내고, 치수가 표시된 2D 평면도를 만들고,
        업자에게 이메일로 보낼 수 있는 PDF를 내보내며, (최신
        모델에서는) 걸어 다닐 수 있는 완전한 3D 모델까지 만들 수 있습니다.
      </p>

      <p>
        이 가이드는 두 가지 방법을 모두 안내합니다. 깊이 센서가 있는 iPhone(12 Pro 이상)을 위한 <strong>자동 LiDAR
        스캔</strong>과, Xs 이후 모든 iPhone에서 작동하는 <strong>수동 평면도 빌더</strong>입니다. 둘 다 무료 앱 <em>Ruler AR</em>를 사용하지만, 이
        기법은 AR 기반 측정 앱 어디에나 적용됩니다.
      </p>

      <h2>시작하기 전에</h2>
      <p>
        두 방법 모두 Apple의 ARKit 프레임워크에 의존하며, 카메라와 모션 센서를 사용해 물리 공간에서
        기기의 위치를 추적합니다. 정확한 결과를 얻으려면:
      </p>
      <ul>
        <li>
          <strong>좋은 조명.</strong> ARKit는 표면을 추적하기 위해 보이는 질감이 필요합니다.
          햇빛이 드는 방이나 고르게 밝은 실내가 가장 좋습니다. 어두운
          환경에서는 앱이 손전등을 켜라고 안내합니다.
        </li>
        <li>
          <strong>걸리적거리지 않는 바닥.</strong> 방의 둘레를 걷게 됩니다.
          시작 전에 의자를 치워 두세요. 끝나고 다시 놓으면 됩니다.
        </li>
        <li>
          <strong>안정된 손.</strong> 영화를 촬영하듯 기기를 잡으세요.
          두 손으로, 팔꿈치를 붙이고, 느리게 움직입니다. 거친 움직임은 추적기를 혼란스럽게 하고
          정확도를 망칩니다.
        </li>
      </ul>

      <h2>방법 1: LiDAR 스캔 (iPhone 12 Pro 이상)</h2>
      <p>
        iPhone에 LiDAR 센서, 즉 Pro 모델의 후면 카메라 렌즈 옆에 있는 작은 검은 점이
        있다면, Apple의 RoomPlan 기술로 완전한 3D 평면도를
        생성할 수 있습니다. 기기가 벽, 문,
        창, 가구를 자동으로 식별합니다.
      </p>
      <ol>
        <li>
          <strong>Room Plan 도구를 엽니다.</strong> Ruler AR에서
          <em> 도구</em> 버튼을 누르고 <em>방 스캔</em>을 선택합니다. 요청되면 카메라
          접근을 허용합니다.
        </li>
        <li>
          <strong>방의 한 모서리에 섭니다.</strong> 대각선 맞은편 모서리를
          바라봅니다. 앱이 만들어지는 3D 모델의 미리 보기를 보여줍니다. 가슴 높이에서 시작하고, 기기는 가로 방향으로 둡니다.
        </li>
        <li>
          <strong>각 벽을 따라 천천히 걷습니다.</strong> 기기를 부드러운 호를 그리듯
          움직여 바닥부터 천장까지 벽을 담습니다. 모서리에서는 시간을
          들이세요. 그곳에서 AR 추적이 흔들릴 수 있습니다.
        </li>
        <li>
          <strong>방 전체를 한 바퀴 돕니다.</strong> 시작한 모서리로 돌아오면
          평면도가 완성되어 있어야 합니다. 앱이 문,
          창, 주요 가구(소파, 침대, 테이블, 냉장고…)를 감지해 태그를 붙입니다.
        </li>
        <li>
          <strong>저장하고 내보냅니다.</strong> <em>완료</em>를 누릅니다. 3D
          미리 보기, 2D 평면도, 각 벽의 치수가 표시됩니다. 여기서
          PDF로 내보내거나, USDZ 3D 모델을 공유하거나, 개별 측정값을 복사할 수 있습니다.
        </li>
      </ol>
      <p>
        4×5 m 침실이라면 약 90초가 걸립니다. 정확도는 보통 ±5 mm입니다.
        LiDAR가 카메라 프레임에서 추론하는 대신 깊이를 직접
        측정하기 때문입니다.
      </p>

      <h2>방법 2: 수동 평면도 빌더 (iPhone Xs 이상이면 모두)</h2>
      <p>
        LiDAR가 없나요? 그래도 둘레를 걸으며 모서리를 탭하면 깔끔한 직교
        평면도를 만들 수 있습니다. LiDAR 스캔보다 느리지만,
        리모델링 견적, 가구 구매, 매물 사진에 충분히 정확한 치수가 표시된 2D 평면도를
        만들어 줍니다.
      </p>
      <ol>
        <li>
          <strong>모서리에 섭니다.</strong> Ruler AR에서 <em>도구</em> 메뉴를 열고
          <em>수동 방 빌더</em>를 선택합니다. 시작하려는 벽을 바라보며,
          방의 아무 모서리에나 섭니다.
        </li>
        <li>
          <strong>서 있는 모서리를 탭합니다.</strong> 화면의
          십자선을 모서리 밑부분의 바닥에 맞추고 탭합니다. 앱이 이를
          첫 번째 꼭짓점으로 표시합니다.
        </li>
        <li>
          <strong>벽을 따라 걷습니다.</strong> 다음 모서리로 이동합니다. 앱이
          늘어나는 벽 길이를 실시간으로 미리 보여 줍니다.
        </li>
        <li>
          <strong>다음 모서리를 탭합니다.</strong> 방의 모든 모서리에서 반복합니다.
          오른쪽 위 미니맵에 다각형이 만들어지는 모습이 표시됩니다.
        </li>
        <li>
          <strong>고리를 닫습니다.</strong> 첫 번째 모서리로 돌아오면
          "방 닫기" 펄스가 나타납니다. 탭하세요. 앱이 벽을 직각
          (±15° 이내)으로 맞추고, 아주 작은 세그먼트를 제거하여 깔끔한 평면도를 만듭니다.
        </li>
      </ol>
      <p>
        팁: 실수했다면 모서리를 길게 눌러 삭제합니다. 또는 화면 하단의
        실행 취소/다시 실행 버튼을 사용하세요. 작업은 매초 자동 저장되므로,
        앱을 최소화하거나 기기가 잠겨도
        진행 중인 스캔은 보존됩니다.
      </p>

      <h2>문, 창, 가구 담기 (수동 방법)</h2>
      <p>
        수동 스캔은 방의 윤곽은 담지만 개구부는 담지 않습니다. 추가하려면:
      </p>
      <ul>
        <li>
          방을 닫으면 2D 편집기가 열립니다. 문 아이콘을
          문이 있는 벽으로 끌어다 놓습니다. 너비와 높이를 설정합니다.
        </li>
        <li>
          각 창에 대해서도 똑같이 합니다. 창틀 높이(바닥부터)와
          개구부 치수를 설정합니다.
        </li>
        <li>
          가구는 오브젝트 라이브러리, 소파, 침대, 테이블, 냉장고 등을 사용합니다.
          평면도로 끌어다 놓은 뒤 회전하고 크기를 조정합니다.
        </li>
      </ul>

      <h2>평면도 내보내기</h2>
      <p>
        저장한 스캔은 모두 라이브러리의 프로젝트가 됩니다. 어느 프로젝트의
        상세 화면에서든 다음을 할 수 있습니다:
      </p>
      <ul>
        <li>
          <strong>PDF 내보내기.</strong> A4 레이아웃에 2D 평면도,
          각 벽의 치수표, 그리고 선택적 자재 견적
          (페인트, 바닥재, 걸레받이, 타일, 벽지)이 들어갑니다.
        </li>
        <li>
          <strong>스크린샷 공유.</strong> 2D 평면도를 PNG로. iMessage와
          이메일에서 잘 작동합니다.
        </li>
        <li>
          <strong>3D 내보내기 (LiDAR 전용).</strong> USDZ 형식으로, macOS의
          Quick Look, iPhone의 AR Quick Look, 또는 모든 3D 모델링 도구에서 열립니다.
        </li>
      </ul>

      <h2>어떤 방법을 언제 쓸까</h2>
      <table>
        <thead>
          <tr>
            <th>목표</th>
            <th>최적 방법</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>페인트/바닥재를 위한 빠른 면적 견적</td>
            <td>수동 (설정이 빠르고 AR 초기화를 기다릴 필요 없음)</td>
          </tr>
          <tr>
            <td>업자/건축가용 3D 모델</td>
            <td>LiDAR (진정한 3D 스캔을 만드는 유일한 방법)</td>
          </tr>
          <tr>
            <td>부동산 매물용 평면도</td>
            <td>가능하면 LiDAR, 없으면 수동</td>
          </tr>
          <tr>
            <td>보험 문서</td>
            <td>LiDAR, 가구를 자동으로 담음</td>
          </tr>
          <tr>
            <td>가구 배송 전 문/복도 확인</td>
            <td>카메라 측정 (방 전체가 아닌 단일 치수)</td>
          </tr>
        </tbody>
      </table>

      <h2>흔한 실수 (그리고 피하는 법)</h2>
      <ul>
        <li>
          <strong>어두운 곳에서 스캔하기.</strong> AR 추적이 빠르게 나빠집니다.
          천장 조명을 켜거나 앱 내 손전등을 사용하세요.
        </li>
        <li>
          <strong>너무 빠르게 움직이기.</strong> AR 세션은 갱신에 프레임당 약 50ms가
          필요합니다. 기기를 마구 휘두르면 추적이 뒤처지고 벽이
          휘어집니다. 천천히 걸으세요.
        </li>
        <li>
          <strong>모서리 건너뛰기.</strong> 방을 가로질러 질러가지 마세요.
          AR는 거리가 멀어질수록 흔들립니다. 둘레를 걸으면 탭하는 모서리마다
          추적이 재설정됩니다.
        </li>
        <li>
          <strong>반사 표면.</strong> 거울과 전면 유리창은
          깊이 추적을 혼란스럽게 합니다. 스캔하는 동안 천으로 덮고
          나중에 오브젝트로 추가하세요.
        </li>
      </ul>

      <h2>시도해 볼 준비가 되셨나요?</h2>
      <p>
        Ruler AR는 App Store에서 무료입니다. 수동 방 빌더는
        iPhone Xs 이상이면 모두 작동하고, LiDAR 스캐너는
        iPhone 12 이상의 Pro 버전에 포함되어 있습니다. 카메라를 열고, 방을 걷고, PDF를 공유하면,
        5분 안에 끝납니다.
      </p>
    </article>
  );
}

export function PostZH() {
  return (
    <article className="prose-content">
      <p className="lead">
        卷尺一次量一面墙很好用。但如果你要测一整个房间，每面墙、每扇门、每扇窗，有更快的办法。你的 iPhone
        能在五分钟内捕捉整个房间，给你一份带尺寸的 2D
        平面图，导出可以邮件发给装修师傅的 PDF，而且（在较新
        机型上）还能构建一个可以走进去的完整 3D 模型。
      </p>

      <p>
        本指南带你了解两种方法：面向带深度传感器的 iPhone（12 Pro 及更新机型）的<strong>自动 LiDAR
        扫描</strong>，以及适用于 Xs 及之后所有 iPhone 的<strong>手动平面图构建器</strong>。两者我们都使用免费的 <em>Ruler AR</em> 应用，但这些
        技巧适用于任何基于 AR 的测量应用。
      </p>

      <h2>开始之前</h2>
      <p>
        两种方法都依赖 Apple 的 ARKit 框架，它利用摄像头和运动传感器追踪
        手机在物理空间中的位置。要获得准确结果：
      </p>
      <ul>
        <li>
          <strong>良好的光线。</strong> ARKit 需要可见的纹理来追踪
          表面。采光充足的房间或均匀照明的室内空间效果最好。光线昏暗时，
          应用会提示你打开手电筒。
        </li>
        <li>
          <strong>地面通畅。</strong> 你将沿房间周边走一圈。
          开始前先把椅子挪开，结束后可以放回去。
        </li>
        <li>
          <strong>双手稳定。</strong> 像拍电影一样拿手机：
          双手、夹紧手肘、缓慢移动。猛烈的动作会扰乱追踪器，
          毁掉精度。
        </li>
      </ul>

      <h2>方法一：LiDAR 扫描（iPhone 12 Pro 及更新机型）</h2>
      <p>
        如果你的 iPhone 有 LiDAR 传感器，也就是 Pro 机型后置
        摄像头镜头旁那个小黑点，你就可以用 Apple 的 RoomPlan 技术
        生成完整的 3D 平面图。手机会自动识别墙、门、
        窗和家具。
      </p>
      <ol>
        <li>
          <strong>打开 Room Plan 工具。</strong> 在 Ruler AR 中点按
          <em> 工具</em>按钮并选择<em>房间扫描</em>。如有提示，请授予相机
          访问权限。
        </li>
        <li>
          <strong>站在房间的一个角落。</strong> 沿对角线面向对面的
          角落。应用会显示正在构建的 3D 模型预览；从胸口高度开始，手机横向放置。
        </li>
        <li>
          <strong>沿每面墙缓慢行走。</strong> 以平滑的弧线移动手机，
          从地面到天花板捕捉整面墙。在角落处放慢节奏，
          那里 AR 追踪容易漂移。
        </li>
        <li>
          <strong>绕房间走一圈。</strong> 当你回到起始
          角落时，平面图应该已经完成。应用会检测门、
          窗和大型家具（沙发、床、桌子、冰箱……）并加以标注。
        </li>
        <li>
          <strong>保存并导出。</strong> 点按<em>完成</em>。你会看到一个 3D
          预览、一份 2D 平面图，以及每面墙的尺寸。从这里你可以
          导出为 PDF、分享 USDZ 3D 模型，或复制单个测量值。
        </li>
      </ol>
      <p>
        在 4×5 米的卧室里，这大约需要 90 秒。精度通常为 ±5 毫米，
        因为 LiDAR 直接测量深度，而不是从摄像头画面中
        推算。
      </p>

      <h2>方法二：手动平面图构建器（任意 iPhone Xs 或更新机型）</h2>
      <p>
        没有 LiDAR？你仍然可以通过沿周边行走并点按角落，构建出整洁的正交
        平面图。这比 LiDAR 扫描慢，但能产出一份带尺寸的 2D
        平面图，精度足以用于装修
        估算、选购家具和房源拍摄。
      </p>
      <ol>
        <li>
          <strong>站在一个角落。</strong> 在 Ruler AR 中打开<em>工具</em>
          菜单并选择<em>手动房间构建器</em>。站在房间任意一个角落，
          面向你想开始的那面墙。
        </li>
        <li>
          <strong>点按你所站的角落。</strong> 将屏幕上的
          十字准星对准角落底部的地面并点按。应用会把
          这里标记为你的第一个顶点。
        </li>
        <li>
          <strong>沿墙行走。</strong> 移动到下一个角落。应用会
          实时预览不断增长的墙长。
        </li>
        <li>
          <strong>点按下一个角落。</strong> 对房间的每个角落重复这样做。
          右上角的小地图会显示多边形逐渐成形。
        </li>
        <li>
          <strong>闭合回路。</strong> 当你回到第一个角落时，
          会出现“闭合房间”的脉动提示。点按它。应用会把墙对齐到直
          角（在 ±15° 以内），去掉极小的线段，生成整洁的平面图。
        </li>
      </ol>
      <p>
        提示：如果出错，长按某个角落即可删除。或使用屏幕底部的
        撤销/重做按钮。你的工作每秒自动保存，即使你最小化应用或手机锁屏，
        进行中的扫描也会保留。
      </p>

      <h2>捕捉门、窗和家具（手动方法）</h2>
      <p>
        手动扫描会捕捉房间轮廓，但不会捕捉开口。要添加它们：
      </p>
      <ul>
        <li>
          闭合房间后，2D 编辑器会打开。把门图标拖放
          到门所在的墙上。设置它的宽度和高度。
        </li>
        <li>
          对每扇窗做同样的操作。设置窗台高度（从地面起）和
          开口尺寸。
        </li>
        <li>
          对于家具，使用对象库，沙发、床、桌子、冰箱等。
          拖到平面图上，再旋转和调整大小。
        </li>
      </ul>

      <h2>导出你的平面图</h2>
      <p>
        你保存的每次扫描都会成为图库中的一个项目。从任意项目的
        详情界面，你都可以：
      </p>
      <ul>
        <li>
          <strong>导出 PDF。</strong> A4 版式，包含 2D 平面图、
          每面墙的尺寸表，以及可选的材料估算
          （油漆、地板、踢脚线、瓷砖、壁纸）。
        </li>
        <li>
          <strong>分享截图。</strong> 以 PNG 形式分享 2D 平面图。在
          iMessage 和邮件中都很好用。
        </li>
        <li>
          <strong>导出 3D（仅限 LiDAR）。</strong> USDZ 格式，可在 macOS
          Quick Look、iPhone 上的 AR Quick Look，或任何 3D 建模工具中打开。
        </li>
      </ul>

      <h2>何时使用哪种方法</h2>
      <table>
        <thead>
          <tr>
            <th>目标</th>
            <th>最佳方法</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>为油漆/地板做快速面积估算</td>
            <td>手动（设置更快，无需等待 AR 初始化）</td>
          </tr>
          <tr>
            <td>给装修师傅/建筑师的 3D 模型</td>
            <td>LiDAR（唯一能生成真正 3D 扫描的方法）</td>
          </tr>
          <tr>
            <td>房产挂牌用平面图</td>
            <td>有 LiDAR 则用 LiDAR，否则用手动</td>
          </tr>
          <tr>
            <td>保险存档</td>
            <td>LiDAR，自动捕捉家具</td>
          </tr>
          <tr>
            <td>家具配送前检查门口/走廊</td>
            <td>相机测量（单个尺寸，而非整个房间）</td>
          </tr>
        </tbody>
      </table>

      <h2>常见错误（以及如何避免）</h2>
      <ul>
        <li>
          <strong>在弱光下扫描。</strong> AR 追踪会迅速变差。
          请打开顶灯，或使用应用内的手电筒。
        </li>
        <li>
          <strong>移动太快。</strong> AR 会话每帧约需 50 毫秒
          来更新。如果你猛甩手机，追踪会跟不上，墙
          会变弯。请缓慢行走。
        </li>
        <li>
          <strong>抄近路跳过角落。</strong> 不要斜穿房间。
          AR 会随距离漂移；沿周边行走会在你点按的每个角落
          重置追踪。
        </li>
        <li>
          <strong>反射表面。</strong> 镜子和落地玻璃窗会
          扰乱深度追踪。扫描时用布盖住它们，
          之后再作为对象添加。
        </li>
      </ul>

      <h2>准备好试试了吗？</h2>
      <p>
        Ruler AR 在 App Store 上免费。手动房间构建器适用于任意
        iPhone Xs 或更新机型；LiDAR 扫描仪包含在
        iPhone 12 及以上的 Pro 版本中。打开相机，走一圈房间，分享 PDF，
        五分钟搞定。
      </p>
    </article>
  );
}

export function PostPT() {
  return (
    <article className="prose-content">
      <p className="lead">
        Uma trena é ótima para uma parede de cada vez. Mas se você precisa de um cômodo inteiro, cada parede, cada porta, cada janela, há um jeito mais rápido. Seu iPhone
        consegue capturar o cômodo todo em menos de cinco minutos, entregar uma planta
        2D com medidas, exportar um PDF para enviar por e-mail a um empreiteiro e (nos
        modelos mais novos) construir um modelo 3D completo por onde você pode caminhar.
      </p>

      <p>
        Este guia mostra os dois métodos: a <strong>varredura LiDAR
        automática</strong> para iPhones com sensor de profundidade (12 Pro e mais recentes) e o
        <strong> construtor de planta manual</strong> que funciona em todos os iPhones a partir
        do Xs. Usaremos o app gratuito <em>Ruler AR</em> para ambos, mas as
        técnicas valem para qualquer app de medição baseado em AR.
      </p>

      <h2>Antes de começar</h2>
      <p>
        Os dois métodos dependem do framework ARKit da Apple, que rastreia a posição
        do seu telefone no espaço físico usando a câmera e os sensores de movimento. Para obter
        resultados precisos:
      </p>
      <ul>
        <li>
          <strong>Boa iluminação.</strong> O ARKit precisa de textura visível para rastrear
          superfícies. Um cômodo com luz natural ou um ambiente interno bem iluminado
          funciona melhor. Em condições escuras, o app vai pedir que você ligue a lanterna.
        </li>
        <li>
          <strong>Chão livre.</strong> Você vai percorrer o perímetro do cômodo.
          Afaste as cadeiras antes de começar, dá para colocá-las de volta depois.
        </li>
        <li>
          <strong>Mãos firmes.</strong> Segure o telefone como se estivesse filmando:
          com as duas mãos, cotovelos junto ao corpo, movimentos lentos. Movimentos bruscos confundem o rastreador
          e arruínam a precisão.
        </li>
      </ul>

      <h2>Método 1: varredura LiDAR (iPhone 12 Pro e mais recentes)</h2>
      <p>
        Se o seu iPhone tem um sensor LiDAR, o pontinho preto ao lado das lentes da
        câmera traseira nos modelos Pro, você pode usar a tecnologia RoomPlan da Apple para
        gerar uma planta 3D completa. O telefone identifica paredes, portas,
        janelas e móveis automaticamente.
      </p>
      <ol>
        <li>
          <strong>Abra a ferramenta Room Plan.</strong> No Ruler AR, toque no botão
          <em> Ferramentas</em> e escolha <em>Varredura de cômodo</em>. Conceda acesso à câmera
          se for solicitado.
        </li>
        <li>
          <strong>Posicione-se em um canto do cômodo.</strong> Vire-se para o canto oposto
          na diagonal. O app mostrará uma prévia do modelo 3D sendo construído; comece na altura do peito, telefone na horizontal.
        </li>
        <li>
          <strong>Caminhe devagar ao longo de cada parede.</strong> Movimente o telefone em um
          arco suave para capturar a parede do chão ao teto. Vá com calma nos
          cantos, é ali que o rastreamento AR pode desviar.
        </li>
        <li>
          <strong>Dê a volta no cômodo inteiro.</strong> Quando voltar ao canto
          inicial, a planta deve estar completa. O app vai detectar portas,
          janelas e móveis grandes (sofá, cama, mesa, geladeira…) e marcá-los.
        </li>
        <li>
          <strong>Salve e exporte.</strong> Toque em <em>Concluído</em>. Você verá uma prévia 3D,
          uma planta 2D e as dimensões de cada parede. A partir daqui você pode
          exportar para PDF, compartilhar um modelo 3D USDZ ou copiar medidas individuais.
        </li>
      </ol>
      <p>
        Em um quarto de 4×5 m isso leva cerca de 90 segundos. A precisão costuma ser de ±5 mm
        porque o LiDAR mede a profundidade diretamente, em vez de inferi-la dos
        quadros da câmera.
      </p>

      <h2>Método 2: construtor de planta manual (qualquer iPhone Xs ou mais recente)</h2>
      <p>
        Sem LiDAR? Você ainda pode construir uma planta ortogonal limpa percorrendo o
        perímetro e tocando nos cantos. É mais lento que a varredura LiDAR, mas
        produz uma planta 2D com medidas, precisa o bastante para orçamentos de
        reforma, compra de móveis e fotos de anúncios.
      </p>
      <ol>
        <li>
          <strong>Posicione-se em um canto.</strong> No Ruler AR, abra o menu <em>Ferramentas</em>
          e escolha <em>Construtor de cômodo manual</em>. Fique em qualquer canto do
          cômodo, de frente para a parede pela qual quer começar.
        </li>
        <li>
          <strong>Toque no canto onde você está.</strong> Mire a
          mira na tela no chão, na base do canto, e toque. O app marca
          isso como seu primeiro vértice.
        </li>
        <li>
          <strong>Caminhe ao longo da parede.</strong> Vá até o próximo canto. O app
          mostra em tempo real uma prévia do comprimento da parede aumentando.
        </li>
        <li>
          <strong>Toque no próximo canto.</strong> Repita para cada canto do
          cômodo. O minimapa no canto superior direito mostra o polígono tomando forma.
        </li>
        <li>
          <strong>Feche o contorno.</strong> Quando voltar ao primeiro canto,
          aparece a pulsação "Fechar cômodo". Toque nela. O app alinha as paredes em ângulos
          retos (dentro de ±15°), remove os segmentos minúsculos e produz uma planta limpa.
        </li>
      </ol>
      <p>
        Dica: se cometer um erro, mantenha pressionado um canto para apagá-lo. Ou use os
        botões Desfazer/Refazer na parte de baixo da tela. Seu trabalho é salvo automaticamente
        a cada segundo, mesmo que você minimize o app ou o telefone bloqueie,
        a varredura em andamento é preservada.
      </p>

      <h2>Capturando portas, janelas e móveis (método manual)</h2>
      <p>
        Varreduras manuais capturam o contorno do cômodo, mas não as aberturas. Para adicioná-las:
      </p>
      <ul>
        <li>
          Depois de fechar o cômodo, o editor 2D abre. Arraste e solte um ícone de porta
          sobre a parede onde fica a porta. Defina a largura e a altura.
        </li>
        <li>
          Faça o mesmo para cada janela. Defina a altura do peitoril (a partir do chão) e as
          dimensões da abertura.
        </li>
        <li>
          Para móveis, use a biblioteca de objetos, sofá, cama, mesa, geladeira etc.
          Arraste para a planta, depois gire e redimensione.
        </li>
      </ul>

      <h2>Exportando sua planta</h2>
      <p>
        Cada varredura que você salva vira um projeto na sua biblioteca. Em qualquer tela de
        detalhe de projeto você pode:
      </p>
      <ul>
        <li>
          <strong>Exportar PDF.</strong> Layout A4 com a planta 2D, uma
          tabela de dimensões para cada parede e uma estimativa de materiais opcional
          (tinta, piso, rodapé, azulejo, papel de parede).
        </li>
        <li>
          <strong>Compartilhar uma captura de tela.</strong> A planta 2D em PNG. Funciona muito bem no
          iMessage e por e-mail.
        </li>
        <li>
          <strong>Exportar 3D (somente LiDAR).</strong> Formato USDZ, abre no macOS
          Quick Look, AR Quick Look no iPhone, ou em qualquer ferramenta de modelagem 3D.
        </li>
      </ul>

      <h2>Quando usar cada método</h2>
      <table>
        <thead>
          <tr>
            <th>Objetivo</th>
            <th>Melhor método</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Estimativa rápida de área para tinta/piso</td>
            <td>Manual (configuração mais rápida, sem esperar a inicialização do AR)</td>
          </tr>
          <tr>
            <td>Modelo 3D para empreiteiro / arquiteto</td>
            <td>LiDAR (único método que produz uma varredura 3D de verdade)</td>
          </tr>
          <tr>
            <td>Planta para anúncio de imóvel</td>
            <td>LiDAR se disponível, manual como alternativa</td>
          </tr>
          <tr>
            <td>Documentação de seguro</td>
            <td>LiDAR, captura os móveis automaticamente</td>
          </tr>
          <tr>
            <td>Conferir porta / corredor antes de uma entrega de móveis</td>
            <td>Medição por câmera (medidas isoladas, não o cômodo inteiro)</td>
          </tr>
        </tbody>
      </table>

      <h2>Erros comuns (e como evitá-los)</h2>
      <ul>
        <li>
          <strong>Escanear com pouca luz.</strong> O rastreamento AR degrada rápido.
          Acenda as luzes do teto ou use a lanterna do app.
        </li>
        <li>
          <strong>Mover-se rápido demais.</strong> As sessões de AR precisam de cerca de 50 ms por quadro
          para atualizar. Se você balançar o telefone, o rastreamento fica para trás e as paredes
          saem tortas. Caminhe devagar.
        </li>
        <li>
          <strong>Pular o canto.</strong> Não corte caminho atravessando o cômodo.
          O AR desvia com a distância; percorrer o perímetro reinicia o rastreamento em cada
          canto que você toca.
        </li>
        <li>
          <strong>Superfícies reflexivas.</strong> Espelhos e janelas de vidro
          de piso a teto confundem o rastreamento de profundidade. Cubra-os com um lençol durante a varredura
          e adicione-os como objetos depois.
        </li>
      </ul>

      <h2>Pronto para testar?</h2>
      <p>
        O Ruler AR é gratuito na App Store. O Construtor de cômodo manual funciona em qualquer
        iPhone Xs ou mais recente; o scanner LiDAR está incluído nas versões Pro do
        iPhone 12 em diante. Abra a câmera, percorra o cômodo, compartilhe o PDF, pronto em
        cinco minutos.
      </p>
    </article>
  );
}

export function PostIT() {
  return (
    <article className="prose-content">
      <p className="lead">
        Un metro a nastro è perfetto per una parete alla volta. Ma se ti serve una stanza intera, ogni parete, ogni porta, ogni finestra, c'è un modo più rapido. Il tuo iPhone
        può catturare l'intera stanza in meno di cinque minuti, darti una piantina
        2D quotata, esportare un PDF da inviare via email a un artigiano e (sui
        modelli più recenti) costruire un modello 3D completo in cui muoverti.
      </p>

      <p>
        Questa guida ti accompagna in entrambi i metodi: la <strong>scansione LiDAR
        automatica</strong> per gli iPhone con sensore di profondità (12 Pro e successivi) e il
        <strong> costruttore di piantine manuale</strong> che funziona su ogni iPhone a partire
        dall'Xs. Per entrambi useremo l'app gratuita <em>Ruler AR</em>, ma le
        tecniche valgono per qualsiasi app di misurazione basata sull'AR.
      </p>

      <h2>Prima di iniziare</h2>
      <p>
        Entrambi i metodi si basano sul framework ARKit di Apple, che traccia la posizione
        del telefono nello spazio fisico usando la fotocamera e i sensori di movimento. Per ottenere
        risultati precisi:
      </p>
      <ul>
        <li>
          <strong>Buona illuminazione.</strong> ARKit ha bisogno di texture visibile per tracciare
          le superfici. Una stanza con luce naturale o un ambiente interno illuminato in modo uniforme
          va meglio. In condizioni di scarsa luce, l'app ti chiederà di accendere la torcia.
        </li>
        <li>
          <strong>Pavimento sgombro.</strong> Camminerai lungo il perimetro della stanza.
          Sposta le sedie prima di iniziare, potrai rimetterle a posto dopo.
        </li>
        <li>
          <strong>Mani ferme.</strong> Tieni il telefono come se stessi girando un film:
          con due mani, gomiti vicini al corpo, movimenti lenti. I movimenti bruschi confondono il tracker
          e rovinano la precisione.
        </li>
      </ul>

      <h2>Metodo 1: scansione LiDAR (iPhone 12 Pro e successivi)</h2>
      <p>
        Se il tuo iPhone ha un sensore LiDAR, il piccolo punto nero accanto agli obiettivi
        della fotocamera posteriore sui modelli Pro, puoi usare la tecnologia RoomPlan di Apple per
        generare una piantina 3D completa. Il telefono individua pareti, porte,
        finestre e mobili automaticamente.
      </p>
      <ol>
        <li>
          <strong>Apri lo strumento Room Plan.</strong> In Ruler AR, tocca il pulsante
          <em> Strumenti</em> e scegli <em>Scansione stanza</em>. Concedi l'accesso alla fotocamera
          se richiesto.
        </li>
        <li>
          <strong>Mettiti in un angolo della stanza.</strong> Guarda in diagonale verso l'angolo
          opposto. L'app mostrerà un'anteprima del modello 3D in costruzione; parti all'altezza del petto, telefono in orizzontale.
        </li>
        <li>
          <strong>Cammina lentamente lungo ogni parete.</strong> Muovi il telefono con un
          arco fluido per catturare la parete dal pavimento al soffitto. Prenditi il tuo tempo agli
          angoli, è lì che il tracciamento AR può andare alla deriva.
        </li>
        <li>
          <strong>Fai il giro dell'intera stanza.</strong> Quando torni all'angolo di
          partenza, la piantina dovrebbe essere completa. L'app rileverà porte,
          finestre e i mobili principali (divano, letto, tavolo, frigorifero…) e li etichetterà.
        </li>
        <li>
          <strong>Salva ed esporta.</strong> Tocca <em>Fine</em>. Vedrai un'anteprima 3D,
          una piantina 2D e le dimensioni di ogni parete. Da qui puoi
          esportare in PDF, condividere un modello 3D USDZ o copiare singole misure.
        </li>
      </ol>
      <p>
        Per una camera da letto di 4×5 m ci vogliono circa 90 secondi. La precisione è in genere di ±5 mm
        perché il LiDAR misura la profondità direttamente, anziché dedurla dai
        fotogrammi della fotocamera.
      </p>

      <h2>Metodo 2: costruttore di piantine manuale (qualsiasi iPhone Xs o successivo)</h2>
      <p>
        Niente LiDAR? Puoi comunque creare una piantina ortogonale pulita camminando lungo il
        perimetro e toccando gli angoli. È più lento della scansione LiDAR ma
        produce una piantina 2D quotata, abbastanza precisa per preventivi di
        ristrutturazione, acquisto di mobili e foto per annunci.
      </p>
      <ol>
        <li>
          <strong>Mettiti in un angolo.</strong> In Ruler AR, apri il menu <em>Strumenti</em>
          e scegli <em>Costruttore stanza manuale</em>. Mettiti in un angolo qualsiasi della
          stanza, rivolto verso la parete da cui vuoi iniziare.
        </li>
        <li>
          <strong>Tocca l'angolo in cui ti trovi.</strong> Punta il
          mirino sullo schermo verso il pavimento alla base dell'angolo e tocca. L'app segna
          questo come il tuo primo vertice.
        </li>
        <li>
          <strong>Cammina lungo la parete.</strong> Spostati verso l'angolo successivo. L'app
          mostra in tempo reale un'anteprima della lunghezza della parete che cresce.
        </li>
        <li>
          <strong>Tocca l'angolo successivo.</strong> Ripeti per ogni angolo della
          stanza. La mini-mappa in alto a destra mostra il poligono che prende forma.
        </li>
        <li>
          <strong>Chiudi il contorno.</strong> Quando torni al primo angolo,
          compare il pulsante pulsante "Chiudi stanza". Toccalo. L'app allinea le pareti ad angoli
          retti (entro ±15°), rimuove i segmenti minuscoli e produce una piantina pulita.
        </li>
      </ol>
      <p>
        Suggerimento: se sbagli, tieni premuto su un angolo per eliminarlo. Oppure usa i
        pulsanti Annulla/Ripeti in fondo allo schermo. Il tuo lavoro viene salvato automaticamente
        ogni secondo, anche se riduci a icona l'app o il telefono si blocca,
        la scansione in corso viene conservata.
      </p>

      <h2>Catturare porte, finestre e mobili (metodo manuale)</h2>
      <p>
        Le scansioni manuali catturano il contorno della stanza ma non le aperture. Per aggiungerle:
      </p>
      <ul>
        <li>
          Dopo aver chiuso la stanza, si apre l'editor 2D. Trascina e rilascia un'icona porta
          sulla parete dove si trova la porta. Imposta larghezza e altezza.
        </li>
        <li>
          Fai lo stesso per ogni finestra. Imposta l'altezza del davanzale (dal pavimento) e le
          dimensioni dell'apertura.
        </li>
        <li>
          Per i mobili, usa la libreria di oggetti, divano, letto, tavolo, frigorifero, ecc.
          Trascinali sulla piantina, poi ruotali e ridimensionali.
        </li>
      </ul>

      <h2>Esportare la tua piantina</h2>
      <p>
        Ogni scansione che salvi diventa un progetto nella tua libreria. Da qualsiasi schermata
        di dettaglio del progetto puoi:
      </p>
      <ul>
        <li>
          <strong>Esportare PDF.</strong> Layout A4 con la piantina 2D, una
          tabella delle dimensioni per ogni parete e una stima dei materiali opzionale
          (vernice, pavimento, battiscopa, piastrelle, carta da parati).
        </li>
        <li>
          <strong>Condividere uno screenshot.</strong> La piantina 2D in PNG. Funziona benissimo in
          iMessage e via email.
        </li>
        <li>
          <strong>Esportare in 3D (solo LiDAR).</strong> Formato USDZ, si apre in macOS
          Quick Look, AR Quick Look su iPhone, o in qualsiasi strumento di modellazione 3D.
        </li>
      </ul>

      <h2>Quando usare ciascun metodo</h2>
      <table>
        <thead>
          <tr>
            <th>Obiettivo</th>
            <th>Metodo migliore</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Stima rapida dell'area per vernice/pavimento</td>
            <td>Manuale (avvio più rapido, nessuna attesa per l'inizializzazione AR)</td>
          </tr>
          <tr>
            <td>Modello 3D per artigiano / architetto</td>
            <td>LiDAR (unico metodo che produce una vera scansione 3D)</td>
          </tr>
          <tr>
            <td>Piantina per un annuncio immobiliare</td>
            <td>LiDAR se disponibile, manuale come ripiego</td>
          </tr>
          <tr>
            <td>Documentazione assicurativa</td>
            <td>LiDAR, cattura i mobili automaticamente</td>
          </tr>
          <tr>
            <td>Verifica di porta / corridoio prima di una consegna di mobili</td>
            <td>Misurazione con fotocamera (singole misure, non un'intera stanza)</td>
          </tr>
        </tbody>
      </table>

      <h2>Errori comuni (e come evitarli)</h2>
      <ul>
        <li>
          <strong>Scansionare con poca luce.</strong> Il tracciamento AR peggiora in fretta.
          Accendi le luci del soffitto o usa la torcia integrata nell'app.
        </li>
        <li>
          <strong>Muoversi troppo velocemente.</strong> Le sessioni AR hanno bisogno di circa 50 ms per fotogramma
          per aggiornarsi. Se agiti il telefono, il tracciamento resta indietro e le pareti
          risultano storte. Cammina lentamente.
        </li>
        <li>
          <strong>Saltare l'angolo.</strong> Non tagliare attraverso la stanza.
          L'AR va alla deriva con la distanza; percorrere il perimetro reimposta il tracciamento a ogni
          angolo che tocchi.
        </li>
        <li>
          <strong>Superfici riflettenti.</strong> Specchi e finestre in vetro
          a tutta altezza confondono il tracciamento della profondità. Coprili con un lenzuolo durante la scansione
          e aggiungili come oggetti in seguito.
        </li>
      </ul>

      <h2>Pronto a provarlo?</h2>
      <p>
        Ruler AR è gratuito sull'App Store. Il Costruttore stanza manuale funziona su qualsiasi
        iPhone Xs o successivo; lo scanner LiDAR è incluso nelle versioni Pro di
        iPhone 12 e seguenti. Apri la fotocamera, percorri la stanza, condividi il PDF, fatto in
        cinque minuti.
      </p>
    </article>
  );
}

export function PostPL() {
  return (
    <article className="prose-content">
      <p className="lead">
        Miarka świetnie sprawdza się przy mierzeniu jednej ściany naraz. Ale jeśli potrzebujesz całego pokoju, każdej ściany, każdych drzwi, każdego okna, jest szybszy sposób. Twój iPhone
        potrafi uchwycić cały pokój w niecałe pięć minut, dać ci zwymiarowany rzut
        2D, wyeksportować PDF, który wyślesz mailem do wykonawcy, a (w nowszych
        modelach) zbudować pełny model 3D, po którym możesz się przejść.
      </p>

      <p>
        Ten przewodnik przeprowadzi cię przez obie metody: <strong>automatyczne skanowanie
        LiDAR</strong> dla iPhone'ów z czujnikiem głębi (12 Pro i nowsze) oraz
        <strong> ręczny kreator rzutu</strong>, który działa na każdym iPhonie począwszy od
        Xs. Do obu użyjemy darmowej aplikacji <em>Ruler AR</em>, ale te
        techniki dotyczą każdej aplikacji do pomiarów opartej na AR.
      </p>

      <h2>Zanim zaczniesz</h2>
      <p>
        Obie metody opierają się na frameworku Apple ARKit, który śledzi położenie
        telefonu w przestrzeni fizycznej za pomocą aparatu i czujników ruchu. Aby uzyskać
        dokładne wyniki:
      </p>
      <ul>
        <li>
          <strong>Dobre oświetlenie.</strong> ARKit potrzebuje widocznej tekstury, by śledzić
          powierzchnie. Najlepiej sprawdza się pokój w świetle dziennym lub równomiernie oświetlone
          wnętrze. Przy słabym świetle aplikacja poprosi o włączenie latarki.
        </li>
        <li>
          <strong>Wolna droga po podłodze.</strong> Będziesz obchodzić pokój dookoła.
          Odsuń krzesła przed rozpoczęciem, potem możesz je z powrotem ustawić.
        </li>
        <li>
          <strong>Pewne ręce.</strong> Trzymaj telefon, jakbyś kręcił film:
          dwiema rękami, łokcie przy sobie, powolne ruchy. Szarpane ruchy mylą system śledzenia
          i psują dokładność.
        </li>
      </ul>

      <h2>Metoda 1: skanowanie LiDAR (iPhone 12 Pro i nowsze)</h2>
      <p>
        Jeśli twój iPhone ma czujnik LiDAR, mała czarna kropka obok obiektywów
        tylnego aparatu w modelach Pro, możesz użyć technologii Apple RoomPlan, aby
        wygenerować kompletny rzut 3D. Telefon automatycznie rozpoznaje ściany, drzwi,
        okna i meble.
      </p>
      <ol>
        <li>
          <strong>Otwórz narzędzie Room Plan.</strong> W Ruler AR dotknij przycisku
          <em> Narzędzia</em> i wybierz <em>Skan pokoju</em>. Udziel dostępu do aparatu,
          jeśli pojawi się prośba.
        </li>
        <li>
          <strong>Stań w rogu pokoju.</strong> Zwróć się po przekątnej w stronę przeciwległego
          rogu. Aplikacja pokaże podgląd budowanego modelu 3D; zacznij na wysokości klatki piersiowej, telefon w orientacji poziomej.
        </li>
        <li>
          <strong>Idź powoli wzdłuż każdej ściany.</strong> Przesuwaj telefon płynnym
          łukiem, aby uchwycić ścianę od podłogi po sufit. Nie spiesz się w
          rogach, to tam śledzenie AR może dryfować.
        </li>
        <li>
          <strong>Obejdź cały pokój.</strong> Gdy wrócisz do rogu
          startowego, rzut powinien być gotowy. Aplikacja wykryje drzwi,
          okna i duże meble (sofa, łóżko, stół, lodówka…) i je oznaczy.
        </li>
        <li>
          <strong>Zapisz i wyeksportuj.</strong> Dotknij <em>Gotowe</em>. Zobaczysz podgląd 3D,
          rzut 2D i wymiary każdej ściany. Stąd możesz
          wyeksportować do PDF, udostępnić model 3D USDZ lub skopiować pojedyncze pomiary.
        </li>
      </ol>
      <p>
        W sypialni 4×5 m zajmuje to około 90 sekund. Dokładność wynosi zwykle ±5 mm,
        ponieważ LiDAR mierzy głębię bezpośrednio, zamiast wnioskować ją z
        klatek aparatu.
      </p>

      <h2>Metoda 2: ręczny kreator rzutu (dowolny iPhone Xs lub nowszy)</h2>
      <p>
        Brak LiDAR? Nadal możesz zbudować czysty, ortogonalny rzut, obchodząc
        obwód i dotykając rogów. To wolniejsze niż skan LiDAR, ale
        daje zwymiarowany rzut 2D, wystarczająco dokładny do kosztorysów
        remontowych, zakupu mebli i zdjęć do ogłoszeń.
      </p>
      <ol>
        <li>
          <strong>Stań w rogu.</strong> W Ruler AR otwórz menu <em>Narzędzia</em>
          i wybierz <em>Ręczny kreator pokoju</em>. Stań w dowolnym rogu
          pokoju, zwrócony w stronę ściany, od której chcesz zacząć.
        </li>
        <li>
          <strong>Dotknij rogu, w którym stoisz.</strong> Wyceluj
          celownik na ekranie w podłogę u podstawy rogu i dotknij. Aplikacja zaznaczy
          to jako twój pierwszy wierzchołek.
        </li>
        <li>
          <strong>Idź wzdłuż ściany.</strong> Przejdź do następnego rogu. Aplikacja
          pokazuje na żywo podgląd rosnącej długości ściany.
        </li>
        <li>
          <strong>Dotknij następnego rogu.</strong> Powtórz dla każdego rogu
          pokoju. Mini-mapa w prawym górnym rogu pokazuje, jak powstaje wielokąt.
        </li>
        <li>
          <strong>Zamknij kontur.</strong> Gdy wrócisz do pierwszego rogu,
          pojawia się pulsujący przycisk „Zamknij pokój". Dotknij go. Aplikacja wyrówna ściany do kątów
          prostych (w granicach ±15°), usunie maleńkie odcinki i utworzy czysty rzut.
        </li>
      </ol>
      <p>
        Wskazówka: jeśli popełnisz błąd, przytrzymaj róg, aby go usunąć. Albo użyj
        przycisków Cofnij/Ponów na dole ekranu. Twoja praca jest zapisywana automatycznie
        co sekundę, nawet jeśli zminimalizujesz aplikację lub telefon się zablokuje,
        rozpoczęty skan przetrwa.
      </p>

      <h2>Dodawanie drzwi, okien i mebli (metoda ręczna)</h2>
      <p>
        Skany ręczne uchwycają obrys pokoju, ale nie otwory. Aby je dodać:
      </p>
      <ul>
        <li>
          Po zamknięciu pokoju otwiera się edytor 2D. Przeciągnij i upuść ikonę drzwi
          na ścianę, na której są drzwi. Ustaw ich szerokość i wysokość.
        </li>
        <li>
          Zrób to samo dla każdego okna. Ustaw wysokość parapetu (od podłogi) i
          wymiary otworu.
        </li>
        <li>
          Do mebli użyj biblioteki obiektów, sofa, łóżko, stół, lodówka itd.
          Przeciągnij na rzut, a następnie obróć i zmień rozmiar.
        </li>
      </ul>

      <h2>Eksport rzutu</h2>
      <p>
        Każdy zapisany skan staje się projektem w twojej bibliotece. Z ekranu
        szczegółów dowolnego projektu możesz:
      </p>
      <ul>
        <li>
          <strong>Wyeksportować PDF.</strong> Układ A4 z rzutem 2D,
          tabelą wymiarów dla każdej ściany i opcjonalnym kosztorysem materiałów
          (farba, podłoga, listwa przypodłogowa, płytki, tapeta).
        </li>
        <li>
          <strong>Udostępnić zrzut ekranu.</strong> Rzut 2D jako PNG. Świetnie sprawdza się w
          iMessage i poczcie e-mail.
        </li>
        <li>
          <strong>Wyeksportować 3D (tylko LiDAR).</strong> Format USDZ, otwiera się w macOS
          Quick Look, AR Quick Look na iPhonie lub w dowolnym narzędziu do modelowania 3D.
        </li>
      </ul>

      <h2>Kiedy używać której metody</h2>
      <table>
        <thead>
          <tr>
            <th>Cel</th>
            <th>Najlepsza metoda</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Szybkie oszacowanie powierzchni pod farbę/podłogę</td>
            <td>Ręczna (szybsze przygotowanie, bez czekania na inicjalizację AR)</td>
          </tr>
          <tr>
            <td>Model 3D dla wykonawcy / architekta</td>
            <td>LiDAR (jedyna metoda dająca prawdziwy skan 3D)</td>
          </tr>
          <tr>
            <td>Rzut do ogłoszenia o nieruchomości</td>
            <td>LiDAR, jeśli dostępny, ręczny jako rozwiązanie awaryjne</td>
          </tr>
          <tr>
            <td>Dokumentacja ubezpieczeniowa</td>
            <td>LiDAR, automatycznie uchwyca meble</td>
          </tr>
          <tr>
            <td>Sprawdzenie drzwi / korytarza przed dostawą mebli</td>
            <td>Pomiar aparatem (pojedyncze wymiary, nie cały pokój)</td>
          </tr>
        </tbody>
      </table>

      <h2>Częste błędy (i jak ich unikać)</h2>
      <ul>
        <li>
          <strong>Skanowanie przy słabym świetle.</strong> Śledzenie AR szybko się pogarsza.
          Włącz górne światło albo użyj latarki w aplikacji.
        </li>
        <li>
          <strong>Zbyt szybkie ruchy.</strong> Sesje AR potrzebują około 50 ms na klatkę,
          aby się zaktualizować. Jeśli będziesz machać telefonem, śledzenie zostanie w tyle, a ściany
          wyjdą krzywe. Idź powoli.
        </li>
        <li>
          <strong>Pomijanie rogu.</strong> Nie idź na skróty przez pokój.
          AR dryfuje wraz z odległością; obchodzenie obwodu resetuje śledzenie przy każdym
          rogu, którego dotykasz.
        </li>
        <li>
          <strong>Powierzchnie odbijające.</strong> Lustra i przeszklenia od podłogi
          do sufitu mylą śledzenie głębi. Zasłoń je prześcieradłem podczas skanowania
          i dodaj je jako obiekty później.
        </li>
      </ul>

      <h2>Gotowy, żeby spróbować?</h2>
      <p>
        Ruler AR jest darmowy w App Store. Ręczny kreator pokoju działa na każdym
        iPhonie Xs lub nowszym; skaner LiDAR jest dołączony w wersjach Pro
        iPhone'a 12 i nowszych. Otwórz aparat, obejdź pokój, udostępnij PDF, gotowe w
        pięć minut.
      </p>
    </article>
  );
}

export function PostTR() {
  return (
    <article className="prose-content">
      <p className="lead">
        Şerit metre, tek seferde bir duvar için harikadır. Ama bütün bir oda gerekiyorsa, her duvar, her kapı, her pencere, daha hızlı bir yol var. iPhone'unuz
        bütün odayı beş dakikadan kısa sürede yakalayabilir, size ölçülü bir 2B
        kat planı verebilir, bir ustaya e-postayla gönderebileceğiniz bir PDF dışa aktarabilir ve (yeni
        modellerde) içinde gezinebileceğiniz eksiksiz bir 3B model oluşturabilir.
      </p>

      <p>
        Bu kılavuz sizi her iki yöntemde de adım adım götürür: derinlik sensörlü iPhone'lar (12 Pro ve sonrası) için <strong>otomatik LiDAR
        taraması</strong> ve Xs'ten itibaren her iPhone'da çalışan
        <strong> manuel kat planı oluşturucu</strong>. İkisi için de ücretsiz <em>Ruler AR</em> uygulamasını kullanacağız, ancak
        teknikler AR tabanlı her ölçüm uygulamasına uygulanır.
      </p>

      <h2>Başlamadan önce</h2>
      <p>
        Her iki yöntem de Apple'ın ARKit çerçevesine dayanır; bu çerçeve, kamerayı ve hareket sensörlerini kullanarak
        telefonunuzun fiziksel mekândaki konumunu izler. Doğru
        sonuçlar almak için:
      </p>
      <ul>
        <li>
          <strong>İyi aydınlatma.</strong> ARKit, yüzeyleri izlemek için görünür dokuya ihtiyaç
          duyar. Gün ışığı alan bir oda veya eşit aydınlatılmış bir iç mekân
          en iyisidir. Loş koşullarda uygulama, el fenerini açmanız için sizi uyarır.
        </li>
        <li>
          <strong>Açık zemin.</strong> Odanın çevresini dolaşacaksınız.
          Başlamadan önce sandalyeleri çekin, sonra geri koyabilirsiniz.
        </li>
        <li>
          <strong>Sabit eller.</strong> Telefonu film çekiyormuş gibi tutun:
          iki elle, dirsekler içeride, yavaş hareketlerle. Ani hareketler izleyiciyi şaşırtır
          ve doğruluğu bozar.
        </li>
      </ul>

      <h2>Yöntem 1: LiDAR taraması (iPhone 12 Pro ve sonrası)</h2>
      <p>
        iPhone'unuzda bir LiDAR sensörü varsa, Pro modellerdeki arka kamera
        lenslerinin yanındaki küçük siyah nokta, eksiksiz bir 3B kat planı oluşturmak için Apple'ın RoomPlan teknolojisini
        kullanabilirsiniz. Telefon duvarları, kapıları,
        pencereleri ve mobilyaları otomatik olarak tanır.
      </p>
      <ol>
        <li>
          <strong>Room Plan aracını açın.</strong> Ruler AR'da
          <em> Araçlar</em> düğmesine dokunun ve <em>Oda Taraması</em>'nı seçin. İstenirse kamera
          erişimini verin.
        </li>
        <li>
          <strong>Odanın bir köşesinde durun.</strong> Çapraz olarak karşı köşeye
          bakın. Uygulama, oluşturulan 3B modelin bir önizlemesini gösterir; göğüs hizasından başlayın, telefon yatay konumda olsun.
        </li>
        <li>
          <strong>Her duvar boyunca yavaşça yürüyün.</strong> Duvarı zeminden tavana kadar
          yakalamak için telefonu yumuşak bir yay çizerek hareket ettirin. Köşelerde
          acele etmeyin, AR izlemenin kayabileceği yer orasıdır.
        </li>
        <li>
          <strong>Tüm odayı dolaşın.</strong> Başlangıç köşesine geri
          döndüğünüzde kat planı tamamlanmış olmalı. Uygulama kapıları,
          pencereleri ve büyük mobilyaları (kanepe, yatak, masa, buzdolabı…) algılar ve etiketler.
        </li>
        <li>
          <strong>Kaydedin ve dışa aktarın.</strong> <em>Bitti</em>'ye dokunun. Bir 3B
          önizleme, bir 2B kat planı ve her duvarın ölçülerini görürsünüz. Buradan
          PDF'ye dışa aktarabilir, bir USDZ 3B modeli paylaşabilir veya tek tek ölçümleri kopyalayabilirsiniz.
        </li>
      </ol>
      <p>
        4×5 m'lik bir yatak odasında bu yaklaşık 90 saniye sürer. Doğruluk genellikle ±5 mm'dir
        çünkü LiDAR, derinliği kamera karelerinden çıkarmak yerine doğrudan
        ölçer.
      </p>

      <h2>Yöntem 2: manuel kat planı oluşturucu (Xs veya sonrası herhangi bir iPhone)</h2>
      <p>
        LiDAR yok mu? Yine de çevreyi dolaşıp köşelere dokunarak temiz, dik açılı bir kat
        planı oluşturabilirsiniz. Bu, LiDAR taramasından daha yavaştır ancak
        tadilat tahminleri, mobilya alışverişi ve ilan fotoğrafçılığı için yeterince
        doğru, ölçülü bir 2B plan üretir.
      </p>
      <ol>
        <li>
          <strong>Bir köşede durun.</strong> Ruler AR'da <em>Araçlar</em> menüsünü açın
          ve <em>Manuel Oda Oluşturucu</em>'yu seçin. Başlamak istediğiniz duvara
          bakacak şekilde odanın herhangi bir köşesinde durun.
        </li>
        <li>
          <strong>Durduğunuz köşeye dokunun.</strong> Ekrandaki
          artı nişanını köşenin tabanındaki zemine doğrultun ve dokunun. Uygulama
          bunu ilk köşeniz olarak işaretler.
        </li>
        <li>
          <strong>Duvar boyunca yürüyün.</strong> Bir sonraki köşeye geçin. Uygulama
          büyüyen duvar uzunluğunun canlı bir önizlemesini gösterir.
        </li>
        <li>
          <strong>Bir sonraki köşeye dokunun.</strong> Odanın her köşesi için tekrarlayın.
          Sağ üstteki mini harita, şekillenen çokgeni gösterir.
        </li>
        <li>
          <strong>Döngüyü kapatın.</strong> İlk köşenize döndüğünüzde,
          "Odayı kapat" titreşimi belirir. Ona dokunun. Uygulama duvarları dik
          açılara (±15° içinde) hizalar, küçük segmentleri kaldırır ve temiz bir kat planı üretir.
        </li>
      </ol>
      <p>
        İpucu: Hata yaparsanız, silmek için bir köşeye uzun basın. Ya da ekranın
        altındaki Geri Al/Yinele düğmelerini kullanın. Çalışmanız her saniye otomatik olarak
        kaydedilir, uygulamayı küçültseniz veya telefon kilitlense bile,
        devam eden tarama korunur.
      </p>

      <h2>Kapıları, pencereleri ve mobilyaları yakalama (manuel yöntem)</h2>
      <p>
        Manuel taramalar oda hatlarını yakalar ama açıklıkları yakalamaz. Bunları eklemek için:
      </p>
      <ul>
        <li>
          Odayı kapattıktan sonra 2B düzenleyici açılır. Bir kapı simgesini
          kapının bulunduğu duvara sürükleyip bırakın. Genişliğini ve yüksekliğini ayarlayın.
        </li>
        <li>
          Her pencere için aynısını yapın. Denizlik yüksekliğini (zeminden) ve
          açıklık boyutlarını ayarlayın.
        </li>
        <li>
          Mobilya için nesne kitaplığını kullanın, kanepe, yatak, masa, buzdolabı vb.
          Plana sürükleyin, ardından döndürün ve yeniden boyutlandırın.
        </li>
      </ul>

      <h2>Kat planınızı dışa aktarma</h2>
      <p>
        Kaydettiğiniz her tarama, kitaplığınızda bir projeye dönüşür. Herhangi bir projenin
        ayrıntı ekranından şunları yapabilirsiniz:
      </p>
      <ul>
        <li>
          <strong>PDF dışa aktarma.</strong> 2B kat planı, her duvar için bir
          ölçü tablosu ve isteğe bağlı bir malzeme tahmini
          (boya, döşeme, süpürgelik, fayans, duvar kağıdı) içeren A4 düzeni.
        </li>
        <li>
          <strong>Ekran görüntüsü paylaşma.</strong> 2B planı PNG olarak.
          iMessage ve e-postada harika çalışır.
        </li>
        <li>
          <strong>3B dışa aktarma (yalnızca LiDAR).</strong> USDZ biçimi, macOS
          Quick Look'ta, iPhone'da AR Quick Look'ta veya herhangi bir 3B modelleme aracında açılır.
        </li>
      </ul>

      <h2>Hangi yöntemi ne zaman kullanmalı</h2>
      <table>
        <thead>
          <tr>
            <th>Amaç</th>
            <th>En iyi yöntem</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Boya/döşeme için hızlı alan tahmini</td>
            <td>Manuel (daha hızlı kurulum, AR başlatmayı beklemek yok)</td>
          </tr>
          <tr>
            <td>Usta / mimar için 3B model</td>
            <td>LiDAR (gerçek bir 3B tarama üreten tek yöntem)</td>
          </tr>
          <tr>
            <td>Emlak ilanı kat planı</td>
            <td>Varsa LiDAR, yoksa manuel</td>
          </tr>
          <tr>
            <td>Sigorta belgelendirmesi</td>
            <td>LiDAR, mobilyaları otomatik yakalar</td>
          </tr>
          <tr>
            <td>Mobilya teslimatından önce kapı / koridor kontrolü</td>
            <td>Kamera Ölçümü (tek ölçüler, bütün bir oda değil)</td>
          </tr>
        </tbody>
      </table>

      <h2>Sık yapılan hatalar (ve bunlardan kaçınmanın yolu)</h2>
      <ul>
        <li>
          <strong>Loş ışıkta tarama.</strong> AR izleme hızla bozulur.
          Ya tavan ışıklarını açın ya da uygulama içi el fenerini kullanın.
        </li>
        <li>
          <strong>Çok hızlı hareket etmek.</strong> AR oturumlarının güncellenmesi için kare başına yaklaşık 50 ms
          gerekir. Telefonu hızlıca savurursanız izleme geride kalır ve duvarlar
          eğri çıkar. Yavaş yürüyün.
        </li>
        <li>
          <strong>Köşeyi atlamak.</strong> Odanın içinden kestirme yapmayın.
          AR mesafeyle birlikte kayar; çevreyi dolaşmak, dokunduğunuz her köşede
          izlemeyi sıfırlar.
        </li>
        <li>
          <strong>Yansıtıcı yüzeyler.</strong> Aynalar ve tam boy cam
          pencereler derinlik izlemeyi şaşırtır. Tarama sırasında bunları bir çarşafla örtün
          ve sonradan nesne olarak ekleyin.
        </li>
      </ul>

      <h2>Denemeye hazır mısınız?</h2>
      <p>
        Ruler AR, App Store'da ücretsizdir. Manuel Oda Oluşturucu, Xs veya sonrası
        herhangi bir iPhone'da çalışır; LiDAR tarayıcı,
        iPhone 12 ve sonrasının Pro sürümlerinde bulunur. Kamerayı açın, odayı dolaşın, PDF'yi paylaşın, beş
        dakikada tamam.
      </p>
    </article>
  );
}

export function PostAR() {
  return (
    <article className="prose-content">
      <p className="lead">
        شريط القياس رائع لقياس جدار واحد في كل مرة. لكن إذا كنت بحاجة إلى غرفة كاملة، كل جدار وكل باب وكل نافذة، فهناك طريقة أسرع. يستطيع iPhone
        التقاط الغرفة بأكملها في أقل من خمس دقائق، ومنحك مخطط أرضية ثنائي الأبعاد
        بالقياسات، وتصدير ملف PDF يمكنك إرساله بالبريد الإلكتروني إلى مقاول، و(في الطُرز
        الأحدث) بناء نموذج ثلاثي الأبعاد كامل يمكنك التجول داخله.
      </p>

      <p>
        يرشدك هذا الدليل عبر الطريقتين: <strong>المسح التلقائي بتقنية
        LiDAR</strong> لأجهزة iPhone المزودة بمستشعر عمق (12 Pro والأحدث)، و
        <strong> منشئ مخطط الأرضية اليدوي</strong> الذي يعمل على كل iPhone بدءًا من
        Xs فصاعدًا. سنستخدم تطبيق <em>Ruler AR</em> المجاني في الحالتين، لكن
        هذه الأساليب تنطبق على أي تطبيق قياس قائم على الواقع المعزز.
      </p>

      <h2>قبل أن تبدأ</h2>
      <p>
        تعتمد الطريقتان على إطار عمل ARKit من Apple، الذي يتتبع موضع
        هاتفك في الفضاء المادي باستخدام الكاميرا ومستشعرات الحركة. للحصول على
        نتائج دقيقة:
      </p>
      <ul>
        <li>
          <strong>إضاءة جيدة.</strong> يحتاج ARKit إلى نسيج مرئي لتتبع
          الأسطح. الأفضل غرفة مضاءة بضوء النهار أو مساحة داخلية مضاءة بالتساوي.
          في الظروف المعتمة، سيطلب منك التطبيق تشغيل الكشاف.
        </li>
        <li>
          <strong>أرضية خالية للمرور.</strong> ستمشي حول محيط الغرفة.
          أبعِد الكراسي قبل أن تبدأ، ويمكنك إعادتها بعد ذلك.
        </li>
        <li>
          <strong>يدان ثابتتان.</strong> أمسك الهاتف كأنك تصور فيلمًا:
          بكلتا يديك، ومرفقاك مضمومان، وبحركات بطيئة. تربك الحركات المتشنجة نظام التتبع
          وتفسد الدقة.
        </li>
      </ul>

      <h2>الطريقة 1: المسح بتقنية LiDAR (iPhone 12 Pro والأحدث)</h2>
      <p>
        إذا كان هاتف iPhone لديك يحتوي على مستشعر LiDAR، تلك النقطة السوداء الصغيرة بجانب عدسات
        الكاميرا الخلفية في طُرز Pro، فيمكنك استخدام تقنية RoomPlan من Apple
        لإنشاء مخطط أرضية ثلاثي الأبعاد كامل. يتعرف الهاتف على الجدران والأبواب
        والنوافذ والأثاث تلقائيًا.
      </p>
      <ol>
        <li>
          <strong>افتح أداة Room Plan.</strong> في Ruler AR، اضغط على زر
          <em> الأدوات</em> واختر <em>مسح الغرفة</em>. امنح الوصول إلى الكاميرا
          إذا طُلب منك ذلك.
        </li>
        <li>
          <strong>قف في إحدى زوايا الغرفة.</strong> واجِه الزاوية المقابلة
          قطريًا. سيعرض التطبيق معاينة للنموذج ثلاثي الأبعاد أثناء بنائه؛ ابدأ على ارتفاع الصدر، والهاتف في الوضع الأفقي.
        </li>
        <li>
          <strong>امشِ ببطء على طول كل جدار.</strong> حرّك الهاتف في قوس
          سلس لالتقاط الجدار من الأرضية إلى السقف. خذ وقتك عند
          الزوايا، فهناك قد ينحرف تتبع الواقع المعزز.
        </li>
        <li>
          <strong>درْ حول الغرفة بالكامل.</strong> عندما تعود إلى زاوية
          البداية، يفترض أن يكون مخطط الأرضية مكتملًا. سيكتشف التطبيق الأبواب
          والنوافذ والأثاث الكبير (أريكة، سرير، طاولة، ثلاجة…) ويضع عليها وسومًا.
        </li>
        <li>
          <strong>احفظ وصدّر.</strong> اضغط <em>تم</em>. سترى معاينة ثلاثية الأبعاد
          ومخطط أرضية ثنائي الأبعاد وأبعاد كل جدار. من هنا يمكنك
          التصدير إلى PDF، أو مشاركة نموذج ثلاثي الأبعاد بصيغة USDZ، أو نسخ قياسات فردية.
        </li>
      </ol>
      <p>
        في غرفة نوم بمساحة 4×5 م يستغرق ذلك نحو 90 ثانية. الدقة عادةً ±5 مم
        لأن LiDAR يقيس العمق مباشرةً بدلًا من استنتاجه من
        إطارات الكاميرا.
      </p>

      <h2>الطريقة 2: منشئ مخطط الأرضية اليدوي (أي iPhone Xs أو أحدث)</h2>
      <p>
        لا يوجد LiDAR؟ ما زال بإمكانك بناء مخطط أرضية متعامد ونظيف بالمشي حول
        المحيط والنقر على الزوايا. هذا أبطأ من المسح بتقنية LiDAR لكنه
        ينتج مخططًا ثنائي الأبعاد بالقياسات، دقيقًا بما يكفي لتقديرات
        التجديد، وشراء الأثاث، وتصوير الإعلانات العقارية.
      </p>
      <ol>
        <li>
          <strong>قف في إحدى الزوايا.</strong> في Ruler AR، افتح قائمة <em>الأدوات</em>
          واختر <em>منشئ الغرفة اليدوي</em>. قف في أي زاوية من
          الغرفة، مواجهًا الجدار الذي تريد البدء به.
        </li>
        <li>
          <strong>انقر على الزاوية التي تقف فيها.</strong> وجّه
          الشعيرات على الشاشة نحو الأرضية عند قاعدة الزاوية وانقر. يحدد التطبيق
          هذه كأول رأس لديك.
        </li>
        <li>
          <strong>امشِ على طول الجدار.</strong> انتقل إلى الزاوية التالية. يعرض التطبيق
          معاينة حية لطول الجدار وهو يزداد في الوقت الفعلي.
        </li>
        <li>
          <strong>انقر على الزاوية التالية.</strong> كرر ذلك لكل زاوية في
          الغرفة. تُظهر الخريطة المصغّرة في أعلى اليمين المضلّع وهو يتشكّل.
        </li>
        <li>
          <strong>أغلق الحلقة.</strong> عندما تعود إلى زاويتك الأولى،
          يظهر نبض «إغلاق الغرفة». انقر عليه. يحاذي التطبيق الجدران إلى زوايا
          قائمة (ضمن ±15°)، ويزيل أي مقاطع صغيرة جدًا، وينتج مخطط أرضية نظيفًا.
        </li>
      </ol>
      <p>
        نصيحة: إذا ارتكبت خطأً، اضغط مطولًا على زاوية لحذفها. أو استخدم
        زرَّي التراجع/الإعادة في أسفل الشاشة. يُحفظ عملك تلقائيًا
        كل ثانية، حتى إذا صغّرت التطبيق أو قُفل الهاتف،
        يبقى المسح قيد التنفيذ محفوظًا.
      </p>

      <h2>التقاط الأبواب والنوافذ والأثاث (الطريقة اليدوية)</h2>
      <p>
        تلتقط عمليات المسح اليدوية مخطط الغرفة لكن ليس الفتحات. لإضافتها:
      </p>
      <ul>
        <li>
          بعد إغلاق الغرفة، يُفتح محرر ثنائي الأبعاد. اسحب أيقونة باب وأفلتها
          على الجدار الذي يوجد فيه الباب. حدّد عرضه وارتفاعه.
        </li>
        <li>
          افعل الشيء نفسه لكل نافذة. حدّد ارتفاع العتبة (من الأرضية) و
          أبعاد الفتحة.
        </li>
        <li>
          للأثاث، استخدم مكتبة الكائنات، أريكة، سرير، طاولة، ثلاجة، إلخ.
          اسحبها إلى المخطط، ثم دوّرها وغيّر حجمها.
        </li>
      </ul>

      <h2>تصدير مخطط الأرضية الخاص بك</h2>
      <p>
        يصبح كل مسح تحفظه مشروعًا في مكتبتك. من شاشة تفاصيل
        أي مشروع يمكنك:
      </p>
      <ul>
        <li>
          <strong>تصدير PDF.</strong> تخطيط بحجم A4 يحتوي على مخطط الأرضية ثنائي الأبعاد، وجدول
          أبعاد لكل جدار، وتقدير اختياري للمواد
          (دهان، أرضيات، ألواح قاعدية، بلاط، ورق جدران).
        </li>
        <li>
          <strong>مشاركة لقطة شاشة.</strong> المخطط ثنائي الأبعاد بصيغة PNG. يعمل بشكل رائع في
          iMessage والبريد الإلكتروني.
        </li>
        <li>
          <strong>تصدير ثلاثي الأبعاد (LiDAR فقط).</strong> صيغة USDZ، تُفتح في
          Quick Look على macOS، وAR Quick Look على iPhone، أو أي أداة نمذجة ثلاثية الأبعاد.
        </li>
      </ul>

      <h2>متى تستخدم كل طريقة</h2>
      <table>
        <thead>
          <tr>
            <th>الهدف</th>
            <th>أفضل طريقة</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>تقدير سريع للمساحة للدهان/الأرضيات</td>
            <td>يدوية (إعداد أسرع، دون انتظار تهيئة الواقع المعزز)</td>
          </tr>
          <tr>
            <td>نموذج ثلاثي الأبعاد لمقاول / مهندس معماري</td>
            <td>LiDAR (الطريقة الوحيدة التي تنتج مسحًا ثلاثي الأبعاد حقيقيًا)</td>
          </tr>
          <tr>
            <td>مخطط أرضية لإعلان عقاري</td>
            <td>LiDAR إن توفّر، واليدوية كبديل</td>
          </tr>
          <tr>
            <td>توثيق التأمين</td>
            <td>LiDAR، يلتقط الأثاث تلقائيًا</td>
          </tr>
          <tr>
            <td>فحص المدخل / الممر قبل توصيل الأثاث</td>
            <td>القياس بالكاميرا (أبعاد مفردة، وليس غرفة كاملة)</td>
          </tr>
        </tbody>
      </table>

      <h2>أخطاء شائعة (وكيفية تجنبها)</h2>
      <ul>
        <li>
          <strong>المسح في إضاءة خافتة.</strong> يتدهور تتبع الواقع المعزز بسرعة.
          إما أن تشغّل أضواء السقف أو تستخدم الكشاف داخل التطبيق.
        </li>
        <li>
          <strong>التحرك بسرعة كبيرة.</strong> تحتاج جلسات الواقع المعزز إلى نحو 50 مللي ثانية لكل إطار
          لتحديثها. إذا حرّكت الهاتف بعنف، يتأخر التتبع وتأتي الجدران
          منحنية. امشِ ببطء.
        </li>
        <li>
          <strong>تخطّي الزاوية.</strong> لا تختصر الطريق عبر الغرفة.
          ينحرف الواقع المعزز مع المسافة؛ والمشي حول المحيط يعيد ضبط التتبع عند كل
          زاوية تنقر عليها.
        </li>
        <li>
          <strong>الأسطح العاكسة.</strong> تربك المرايا والنوافذ الزجاجية الممتدة من الأرض إلى السقف
          تتبع العمق. غطّها بملاءة أثناء المسح
          وأضِفها ككائنات لاحقًا.
        </li>
      </ul>

      <h2>هل أنت مستعد للتجربة؟</h2>
      <p>
        تطبيق Ruler AR مجاني على App Store. يعمل منشئ الغرفة اليدوي على أي
        iPhone Xs أو أحدث؛ ويتوفر ماسح LiDAR في إصدارات Pro من
        iPhone 12 وما فوق. افتح الكاميرا، وتجوّل في الغرفة، وشارك ملف PDF، وينتهي الأمر في
        خمس دقائق.
      </p>
    </article>
  );
}

export const bodies = {
  ru: PostRU, de: PostDE, fr: PostFR, es: PostES, ja: PostJA, ko: PostKO,
  'zh-Hans': PostZH, 'pt-BR': PostPT, it: PostIT, pl: PostPL, tr: PostTR, ar: PostAR
};
