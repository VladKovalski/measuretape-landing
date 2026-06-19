import type { PostMeta } from './posts';

export const meta: PostMeta = {
  slug: 'how-lidar-works-iphone',
  date: '2026-05-06',
  readingTimeMin: 7,
  keywords:
    'how lidar works iphone, iphone lidar explained, lidar vs arkit, iphone lidar scanner, lidar depth sensor',
  tags: ['Technical', 'LiDAR', 'AR'],
  title: {
    en: "How LiDAR Works on iPhone (And Why It Matters for Measuring)",
    ru: "Как работает LiDAR на iPhone (и почему это важно для измерений)",
    de: "Wie LiDAR auf dem iPhone funktioniert (und warum das fürs Messen zählt)",
    fr: "Comment fonctionne le LiDAR sur iPhone (et pourquoi c'est important pour mesurer)",
    es: "Cómo funciona el LiDAR en iPhone (y por qué importa para medir)",
    ja: "iPhoneのLiDARの仕組み（そして測定でなぜ重要なのか）",
    ko: "iPhone의 LiDAR 작동 원리 (그리고 측정에 왜 중요한가)",
    "zh-Hans": "iPhone 上的 LiDAR 如何工作（以及为什么它对测量很重要）",
    "pt-BR": "Como o LiDAR funciona no iPhone (e por que isso importa para medir)",
    it: "Come funziona il LiDAR su iPhone (e perché conta per misurare)",
    pl: "Jak działa LiDAR w iPhone (i dlaczego ma znaczenie przy pomiarach)",
    tr: "iPhone'da LiDAR Nasıl Çalışır (ve Ölçüm İçin Neden Önemlidir)",
    ar: "كيف يعمل LiDAR على iPhone (ولماذا يهم في القياس)"
  },
  excerpt: {
    en: "A practical explanation of the small black dot next to your camera lens. How the LiDAR sensor measures depth in nanoseconds, what makes it different from camera-only AR, and the specific tasks where it actually changes the game.",
    ru: "Практическое объяснение маленькой чёрной точки рядом с объективом камеры. Как LiDAR измеряет глубину за наносекунды, чем отличается от чистого AR на камере, и в каких задачах он реально меняет картину.",
    de: "Eine praktische Erklärung des kleinen schwarzen Punkts neben deinem Kameraobjektiv. Wie der LiDAR-Sensor Tiefe in Nanosekunden misst, was ihn von reinem Kamera-AR unterscheidet und bei welchen Aufgaben er wirklich den Unterschied macht.",
    fr: "Une explication pratique du petit point noir à côté de l'objectif de votre appareil photo. Comment le capteur LiDAR mesure la profondeur en nanosecondes, ce qui le distingue de l'AR basée uniquement sur la caméra, et les tâches précises où il change vraiment la donne.",
    es: "Una explicación práctica del pequeño punto negro junto al objetivo de tu cámara. Cómo el sensor LiDAR mide la profundidad en nanosegundos, qué lo diferencia del AR basado solo en la cámara y las tareas concretas en las que realmente marca la diferencia.",
    ja: "カメラレンズの隣にある小さな黒い点をわかりやすく解説します。LiDARセンサーがどのようにナノ秒単位で深度を測定するのか、カメラのみのARと何が違うのか、そして実際に状況を一変させる具体的な作業について。",
    ko: "카메라 렌즈 옆에 있는 작은 검은 점에 대한 실용적인 설명입니다. LiDAR 센서가 어떻게 나노초 단위로 깊이를 측정하는지, 카메라만 사용하는 AR과 무엇이 다른지, 그리고 실제로 판도를 바꾸는 구체적인 작업들을 다룹니다.",
    "zh-Hans": "对相机镜头旁那个小黑点的实用讲解。LiDAR 传感器如何在纳秒内测量深度，它与仅依赖相机的 AR 有何不同，以及它真正改变局面的具体场景。",
    "pt-BR": "Uma explicação prática sobre o pequeno ponto preto ao lado da lente da câmera. Como o sensor LiDAR mede a profundidade em nanossegundos, o que o diferencia do AR apenas por câmera e as tarefas específicas em que ele realmente muda o jogo.",
    it: "Una spiegazione pratica del piccolo punto nero accanto all'obiettivo della fotocamera. Come il sensore LiDAR misura la profondità in nanosecondi, cosa lo distingue dall'AR basata solo sulla fotocamera e le attività specifiche in cui fa davvero la differenza.",
    pl: "Praktyczne wyjaśnienie małej czarnej kropki obok obiektywu aparatu. Jak czujnik LiDAR mierzy głębię w nanosekundach, czym różni się od AR opartego wyłącznie na kamerze i w jakich konkretnych zadaniach naprawdę zmienia zasady gry.",
    tr: "Kamera lensinin yanındaki o küçük siyah noktanın pratik bir açıklaması. LiDAR sensörünün derinliği nanosaniyeler içinde nasıl ölçtüğü, yalnızca kameraya dayalı AR'dan onu ayıran şey ve gerçekten oyunu değiştirdiği belirli görevler.",
    ar: "شرح عملي للنقطة السوداء الصغيرة بجوار عدسة الكاميرا. كيف يقيس مستشعر LiDAR العمق في أجزاء من المليار من الثانية، وما الذي يميزه عن الواقع المعزز المعتمد على الكاميرا وحدها، والمهام المحددة التي يُحدث فيها فرقًا حقيقيًا."
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
        map of 576 points in your environment, updated 30 times per second, essentially a 3D depth video stream.
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
            <td>Struggles, needs texture</td>
            <td>Yes, laser reads depth regardless of visual texture</td>
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
            <td>Yes, Apple's RoomPlan API uses it</td>
          </tr>
          <tr>
            <td>Detects furniture / objects automatically?</td>
            <td>No</td>
            <td>Yes, sofas, beds, fridges, doors, windows tagged</td>
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
          devices. It captures a complete 3D model of the room, walls,
          windows, doors, furniture, in 60-90 seconds of walking. No
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
        is deliberate, LiDAR is a "Pro" differentiator. There are no
        announcements of LiDAR coming to standard iPhones.
      </p>

      <h2>If you don't have LiDAR, what can you still do?</h2>
      <p>
        Pretty much everything except the automatic 3D room scan.
        Camera-based AR measurement still works for distance, height, area,
        and angles. The Manual Room Builder lets you build floor plans by
        walking the perimeter and tapping corners, no LiDAR required, and
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

export function PostRU() {
  return (
    <article className="prose-content">
      <p className="lead">
        Apple добавила датчик LiDAR в модели iPhone Pro в 2020 году и во все
        iPad Pro начиная с 2020 года. Это маленький чёрный квадратик рядом с
        задними объективами камеры. В маркетинговых материалах его называют
        «сканером Lidar». Технически это <em>прямой датчик глубины на основе
        времени пролёта света</em>. Вот что он делает на самом деле, почему
        ARKit становится намного быстрее и точнее при его наличии и какие
        задачи по измерению благодаря ему меняются.
      </p>

      <h2>Что такое LiDAR на самом деле</h2>
      <p>
        LiDAR расшифровывается как «Light Detection and Ranging» (обнаружение
        и измерение расстояния с помощью света). Датчик испускает невидимый
        инфракрасный лазерный импульс, а затем измеряет, сколько времени уходит
        на возвращение этого импульса. Умножьте время прохождения туда и обратно
        на половину скорости света — и вы получите расстояние до того, во что
        попал импульс.
      </p>
      <p>
        LiDAR в iPhone выпускает <strong>576 импульсов одновременно по сетке</strong>,
        30 раз в секунду. Это даёт карту глубины из 576 точек вашего окружения,
        обновляемую 30 раз в секунду, по сути 3D-видеопоток глубины.
      </p>
      <p>
        Дальность: около 5 метров в помещении, 3 метра на улице (солнечный свет
        перегружает датчик). Точность: ±1 см на 1 м, увеличиваясь до ±5 см на 5 м.
      </p>

      <h2>Что делает AR без LiDAR вместо этого</h2>
      <p>
        На iPhone без LiDAR (от iPhone Xs до обычного iPhone 14, обычные iPhone
        15/16/17) глубина <strong>вычисляется</strong> по движению камеры и
        параллаксу. Когда вы двигаете телефон, одна и та же точка в пространстве
        смещается в кадре камеры; видимое смещение подсказывает программе, как
        далеко находится эта точка.
      </p>
      <p>
        Это называется «визуально-инерциальная одометрия» (VIO). Для неё нужны:
      </p>
      <ul>
        <li>Видимая текстура в сцене (у пустой белой стены нет особенностей)</li>
        <li>Хорошее освещение (затвор камеры должен снимать чёткие кадры)</li>
        <li>Движение (чтобы расчёты работали, телефон нужно перемещать)</li>
        <li>~3 секунды на сходимость после запуска</li>
      </ul>
      <p>
        Это умно и работает, но хрупко. Отражающие поверхности, тёмные комнаты и
        неподвижный телефон ухудшают результат.
      </p>

      <h2>Что меняется при наличии LiDAR</h2>
      <table>
        <thead>
          <tr><th>Поведение</th><th>Без LiDAR</th><th>С LiDAR</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>Время запуска AR-сессии</td>
            <td>~3-5 секунд (калибровка движением телефона)</td>
            <td>~0,5 секунды (глубина считывается напрямую)</td>
          </tr>
          <tr>
            <td>Работает на пустых белых стенах?</td>
            <td>С трудом, нужна текстура</td>
            <td>Да, лазер считывает глубину независимо от визуальной текстуры</td>
          </tr>
          <tr>
            <td>Работает в полной темноте?</td>
            <td>Нет (камера ничего не видит)</td>
            <td>Да (лазер сам себе источник света)</td>
          </tr>
          <tr>
            <td>Точность на 3 м</td>
            <td>±15-25 мм</td>
            <td>±5-10 мм</td>
          </tr>
          <tr>
            <td>Захватывает 3D-сетку окружения?</td>
            <td>Нет</td>
            <td>Да, это использует API RoomPlan от Apple</td>
          </tr>
          <tr>
            <td>Автоматически распознаёт мебель / объекты?</td>
            <td>Нет</td>
            <td>Да, помечает диваны, кровати, холодильники, двери, окна</td>
          </tr>
        </tbody>
      </table>

      <h2>Что это значит для приложений для измерений</h2>
      <p>
        Три конкретных отличия:
      </p>
      <ol>
        <li>
          <strong>Сканирование RoomPlan.</strong> Фреймворк RoomPlan от Apple
          (который Ruler AR использует для сканирования комнат) работает только
          на устройствах с LiDAR. Он захватывает полную 3D-модель комнаты — стены,
          окна, двери, мебель — за 60-90 секунд ходьбы. Нет LiDAR — нет RoomPlan.
        </li>
        <li>
          <strong>Точность при касании пустой стены.</strong> Когда вы наводите
          камеру на ровную белую стену и касаетесь, чтобы измерить, без LiDAR
          приложение угадывает положение плоскости по краям, обнаруженным в других
          местах. С LiDAR оно считывает реальную глубину в той самой точке, по
          которой вы коснулись. Разница проявляется как смещение ±2-3 см на длинных
          стенах.
        </li>
        <li>
          <strong>Скорость.</strong> Запустите приложение из выключенного состояния
          и сразу наведите на что-нибудь. Без LiDAR: ждите 3-5 секунд, пока AR
          сойдётся. С LiDAR: считывание за 0,5 секунды. Для подрядчика, делающего
          20 измерений за осмотр, это экономит более 60 секунд за визит.
        </li>
      </ol>

      <h2>В каких iPhone есть LiDAR</h2>
      <ul>
        <li>iPhone 12 Pro / 12 Pro Max</li>
        <li>iPhone 13 Pro / 13 Pro Max</li>
        <li>iPhone 14 Pro / 14 Pro Max</li>
        <li>iPhone 15 Pro / 15 Pro Max</li>
        <li>iPhone 16 Pro / 16 Pro Max</li>
        <li>iPhone 17 Pro / 17 Pro Max</li>
        <li>iPad Pro (4-го поколения, 2020) и новее</li>
        <li>iPad Air (M2, 2024) и новее</li>
      </ul>
      <p>
        В обычных (не Pro) iPhone нет LiDAR. Apple дала понять, что это сделано
        намеренно — LiDAR является отличительной чертой «Pro». Никаких анонсов о
        появлении LiDAR в обычных iPhone нет.
      </p>

      <h2>Если у вас нет LiDAR, что вы всё равно можете делать?</h2>
      <p>
        Практически всё, кроме автоматического 3D-сканирования комнаты. Измерения
        в AR на основе камеры по-прежнему работают для расстояния, высоты, площади
        и углов. Ручной конструктор комнат позволяет строить планы этажей, обходя
        периметр и касаясь углов, без необходимости в LiDAR, и получившийся план в
        2D так же точен, как и сканирование с LiDAR.
      </p>
      <p>
        Бесплатная версия Ruler AR полнофункциональна на всех iPhone начиная с Xs.
        LiDAR добавляет скорость и 3D-сканирование, но базовый процесс измерения не
        зависит от железа.
      </p>

      <h2>Будущее</h2>
      <p>
        Патенты Apple 2024 года указывают на работу над объединением LiDAR с
        фронтальной камерой (датчиком TrueDepth) для полноразмерного 3D-сканирования
        тела и AR-приложений для фитнеса. Для измерений ждите более высокой точности
        на больших расстояниях и, возможно, уличного LiDAR (сейчас ограничен солнечным
        светом до ~3 м). А пока: если вы измеряете профессионально, модели Pro окупают
        разницу в цене за несколько месяцев профессионального использования.
      </p>
    </article>
  );
}

export function PostDE() {
  return (
    <article className="prose-content">
      <p className="lead">
        Apple hat 2020 einen LiDAR-Sensor in die iPhone-Pro-Modelle und seit
        2020 in jedes iPad Pro eingebaut. Es ist das kleine schwarze Quadrat
        neben den hinteren Kameraobjektiven. Im Marketing heißt es „Lidar
        Scanner". Technisch ist es ein <em>direkter Tiefensensor nach dem
        Time-of-Flight-Prinzip</em>. Hier steht, was er wirklich tut, warum
        ARKit mit ihm so viel schneller und genauer wird und welche
        Messaufgaben sich dadurch verändern.
      </p>

      <h2>Was LiDAR wirklich ist</h2>
      <p>
        LiDAR steht für „Light Detection and Ranging". Der Sensor sendet einen
        unsichtbaren Infrarot-Laserimpuls aus und misst dann, wie lange der
        Impuls für den Rückweg braucht. Multipliziere diese Hin- und Rückweg-Zeit
        mit der halben Lichtgeschwindigkeit, und du hast die Entfernung zu dem,
        was der Impuls getroffen hat.
      </p>
      <p>
        Das LiDAR des iPhone feuert <strong>576 Impulse gleichzeitig in einem
        Rastermuster</strong> ab, 30 Mal pro Sekunde. Das ergibt eine Tiefenkarte
        mit 576 Punkten deiner Umgebung, 30 Mal pro Sekunde aktualisiert, im
        Grunde ein 3D-Tiefen-Videostream.
      </p>
      <p>
        Reichweite: etwa 5 Meter drinnen, 3 Meter draußen (Sonnenlicht übersteuert
        den Sensor). Genauigkeit: ±1 cm bei 1 m, ansteigend auf ±5 cm bei 5 m.
      </p>

      <h2>Was AR ohne LiDAR stattdessen macht</h2>
      <p>
        Auf iPhones ohne LiDAR (iPhone Xs bis iPhone 14 Standard, iPhone
        15/16/17 Standard) wird die Tiefe aus Kamerabewegung und Parallaxe
        <strong>abgeleitet</strong>. Wenn du das Telefon bewegst, verschiebt sich
        derselbe Punkt im Raum über das Kamerabild; die scheinbare Verschiebung
        verrät der Software, wie weit dieser Punkt entfernt ist.
      </p>
      <p>
        Das nennt man „visuell-inertiale Odometrie" (VIO). Sie braucht:
      </p>
      <ul>
        <li>Sichtbare Textur in der Szene (eine leere weiße Wand hat keine Merkmale)</li>
        <li>Gute Beleuchtung (der Kameraverschluss muss scharfe Bilder einfangen)</li>
        <li>Bewegung (du musst das Telefon bewegen, damit die Rechnung aufgeht)</li>
        <li>~3 Sekunden zum Konvergieren nach dem Start</li>
      </ul>
      <p>
        Es ist clever, es funktioniert, aber es ist anfällig. Reflektierende
        Oberflächen, dunkle Räume und ein stillgehaltenes Telefon verschlechtern es.
      </p>

      <h2>Was sich mit vorhandenem LiDAR ändert</h2>
      <table>
        <thead>
          <tr><th>Verhalten</th><th>Ohne LiDAR</th><th>Mit LiDAR</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>Startzeit der AR-Sitzung</td>
            <td>~3-5 Sekunden (Kalibrierung durch Bewegen des Telefons)</td>
            <td>~0,5 Sekunden (Tiefe wird direkt gelesen)</td>
          </tr>
          <tr>
            <td>Funktioniert auf leeren weißen Wänden?</td>
            <td>Schwierig, braucht Textur</td>
            <td>Ja, der Laser liest die Tiefe unabhängig von der visuellen Textur</td>
          </tr>
          <tr>
            <td>Funktioniert in völliger Dunkelheit?</td>
            <td>Nein (die Kamera sieht nichts)</td>
            <td>Ja (der Laser ist seine eigene Lichtquelle)</td>
          </tr>
          <tr>
            <td>Genauigkeit bei 3 m</td>
            <td>±15-25 mm</td>
            <td>±5-10 mm</td>
          </tr>
          <tr>
            <td>Erfasst ein 3D-Netz der Umgebung?</td>
            <td>Nein</td>
            <td>Ja, Apples RoomPlan-API nutzt es</td>
          </tr>
          <tr>
            <td>Erkennt Möbel / Objekte automatisch?</td>
            <td>Nein</td>
            <td>Ja, Sofas, Betten, Kühlschränke, Türen, Fenster werden markiert</td>
          </tr>
        </tbody>
      </table>

      <h2>Was das für Mess-Apps bedeutet</h2>
      <p>
        Drei konkrete Unterschiede:
      </p>
      <ol>
        <li>
          <strong>RoomPlan-Scannen.</strong> Apples RoomPlan-Framework (das
          Ruler AR für Raumscans nutzt) funktioniert nur auf LiDAR-Geräten. Es
          erfasst ein vollständiges 3D-Modell des Raums — Wände, Fenster, Türen,
          Möbel — in 60-90 Sekunden Gehen. Kein LiDAR, kein RoomPlan.
        </li>
        <li>
          <strong>Genauigkeit beim Tippen auf eine leere Wand.</strong> Wenn du
          die Kamera auf eine merkmalslose weiße Wand richtest und zum Messen
          tippst, rät die App ohne LiDAR anhand von anderswo erkannten Kanten,
          wo die Fläche liegt. Mit LiDAR liest sie die tatsächliche Tiefe genau
          an dem Pixel, das du angetippt hast. Der Unterschied zeigt sich als
          Abweichung von ±2-3 cm bei langen Wänden.
        </li>
        <li>
          <strong>Geschwindigkeit.</strong> Starte die App aus dem kalten Zustand
          und richte sie sofort auf etwas. Ohne LiDAR: warte 3-5 Sekunden, bis
          AR konvergiert. Mit LiDAR: gelesen in 0,5 Sekunden. Für einen
          Handwerker, der bei einer Begehung 20 Messungen macht, sind das über
          60 gesparte Sekunden pro Besuch.
        </li>
      </ol>

      <h2>Welche iPhones LiDAR haben</h2>
      <ul>
        <li>iPhone 12 Pro / 12 Pro Max</li>
        <li>iPhone 13 Pro / 13 Pro Max</li>
        <li>iPhone 14 Pro / 14 Pro Max</li>
        <li>iPhone 15 Pro / 15 Pro Max</li>
        <li>iPhone 16 Pro / 16 Pro Max</li>
        <li>iPhone 17 Pro / 17 Pro Max</li>
        <li>iPad Pro (4. Generation, 2020) und neuer</li>
        <li>iPad Air (M2, 2024) und neuer</li>
      </ul>
      <p>
        Standard-iPhones (Nicht-Pro) haben kein LiDAR. Apple hat angedeutet, dass
        das Absicht ist — LiDAR ist ein „Pro"-Unterscheidungsmerkmal. Es gibt keine
        Ankündigungen, dass LiDAR in Standard-iPhones kommt.
      </p>

      <h2>Wenn du kein LiDAR hast, was geht trotzdem?</h2>
      <p>
        So gut wie alles außer dem automatischen 3D-Raumscan. Kamerabasiertes
        AR-Messen funktioniert weiterhin für Distanz, Höhe, Fläche und Winkel. Der
        manuelle Raumplaner lässt dich Grundrisse erstellen, indem du den Umfang
        abläufst und Ecken antippst — kein LiDAR nötig — und der resultierende Plan
        ist in 2D genauso genau wie ein LiDAR-Scan.
      </p>
      <p>
        Die kostenlose Version von Ruler AR ist auf allen iPhones ab dem Xs voll
        funktionsfähig. LiDAR bringt die Geschwindigkeit und den 3D-Scan, aber der
        zentrale Mess-Workflow ist hardwareunabhängig.
      </p>

      <h2>Die Zukunft</h2>
      <p>
        Apples Patente von 2024 deuten auf Arbeiten hin, LiDAR mit der Frontkamera
        (TrueDepth-Sensor) für Ganzkörper-3D-Scans und AR-Fitness-Anwendungen zu
        kombinieren. Beim Messen ist mit höherer Genauigkeit auf größeren Distanzen
        und möglicherweise mit Outdoor-LiDAR zu rechnen (derzeit durch Sonnenlicht
        auf ~3 m begrenzt). Für den Moment: Wenn du beruflich misst, holen die
        Pro-Modelle den Preisunterschied innerhalb weniger Monate professioneller
        Nutzung wieder herein.
      </p>
    </article>
  );
}

export function PostFR() {
  return (
    <article className="prose-content">
      <p className="lead">
        Apple a ajouté un capteur LiDAR aux modèles iPhone Pro en 2020 et à
        chaque iPad Pro depuis 2020. C'est le petit carré noir à côté des
        objectifs de la caméra arrière. Le marketing l'appelle un « scanner
        Lidar ». Techniquement, c'est un <em>capteur de profondeur à temps de
        vol direct</em>. Voici ce qu'il fait vraiment, pourquoi ARKit devient
        bien plus rapide et précis lorsqu'il est présent, et quelles tâches de
        mesure changent grâce à lui.
      </p>

      <h2>Ce qu'est vraiment le LiDAR</h2>
      <p>
        LiDAR signifie « Light Detection and Ranging » (détection et mesure de
        distance par la lumière). Le capteur émet une impulsion laser infrarouge
        invisible, puis mesure le temps que met cette impulsion à revenir.
        Multipliez ce temps d'aller-retour par la moitié de la vitesse de la
        lumière, et vous obtenez la distance jusqu'à ce que l'impulsion a touché.
      </p>
      <p>
        Le LiDAR de l'iPhone tire <strong>576 impulsions simultanément selon une
        grille</strong>, 30 fois par seconde. Cela vous donne une carte de
        profondeur de 576 points de votre environnement, actualisée 30 fois par
        seconde, en somme un flux vidéo de profondeur en 3D.
      </p>
      <p>
        Portée : environ 5 mètres à l'intérieur, 3 mètres à l'extérieur (la
        lumière du soleil sature le capteur). Précision : ±1 cm à 1 m, atteignant
        ±5 cm à 5 m.
      </p>

      <h2>Ce que fait l'AR sans LiDAR à la place</h2>
      <p>
        Sur les iPhone sans LiDAR (de l'iPhone Xs à l'iPhone 14 standard, iPhone
        15/16/17 standard), la profondeur est <strong>déduite</strong> du
        mouvement de la caméra et de la parallaxe. Quand vous déplacez le
        téléphone, le même point dans l'espace se décale dans l'image de la
        caméra ; ce décalage apparent indique au logiciel à quelle distance se
        trouve ce point.
      </p>
      <p>
        Cela s'appelle l'« odométrie visuelle-inertielle » (VIO). Elle a besoin :
      </p>
      <ul>
        <li>D'une texture visible dans la scène (un mur blanc nu n'a aucun repère)</li>
        <li>D'un bon éclairage (l'obturateur de la caméra doit capturer des images nettes)</li>
        <li>De mouvement (vous devez bouger le téléphone pour que le calcul fonctionne)</li>
        <li>D'environ 3 secondes pour converger après le lancement</li>
      </ul>
      <p>
        C'est astucieux, ça marche, mais c'est fragile. Les surfaces réfléchissantes,
        les pièces sombres et un téléphone immobile dégradent tous le résultat.
      </p>

      <h2>Ce qui change avec un LiDAR présent</h2>
      <table>
        <thead>
          <tr><th>Comportement</th><th>Sans LiDAR</th><th>Avec LiDAR</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>Temps de démarrage de la session AR</td>
            <td>~3-5 secondes (calibrage en bougeant le téléphone)</td>
            <td>~0,5 seconde (la profondeur est lue directement)</td>
          </tr>
          <tr>
            <td>Fonctionne sur des murs blancs nus ?</td>
            <td>Difficilement, il faut de la texture</td>
            <td>Oui, le laser lit la profondeur indépendamment de la texture visuelle</td>
          </tr>
          <tr>
            <td>Fonctionne dans l'obscurité totale ?</td>
            <td>Non (la caméra ne voit rien)</td>
            <td>Oui (le laser est sa propre source de lumière)</td>
          </tr>
          <tr>
            <td>Précision à 3 m</td>
            <td>±15-25 mm</td>
            <td>±5-10 mm</td>
          </tr>
          <tr>
            <td>Capture un maillage 3D de l'environnement ?</td>
            <td>Non</td>
            <td>Oui, l'API RoomPlan d'Apple l'utilise</td>
          </tr>
          <tr>
            <td>Détecte les meubles / objets automatiquement ?</td>
            <td>Non</td>
            <td>Oui, canapés, lits, réfrigérateurs, portes, fenêtres sont étiquetés</td>
          </tr>
        </tbody>
      </table>

      <h2>Ce que cela signifie pour les apps de mesure</h2>
      <p>
        Trois différences concrètes :
      </p>
      <ol>
        <li>
          <strong>Le scan RoomPlan.</strong> Le framework RoomPlan d'Apple (que
          Ruler AR utilise pour les scans de pièce) ne fonctionne que sur les
          appareils équipés de LiDAR. Il capture un modèle 3D complet de la pièce —
          murs, fenêtres, portes, meubles — en 60-90 secondes de marche. Pas de
          LiDAR, pas de RoomPlan.
        </li>
        <li>
          <strong>La précision en touchant un mur nu.</strong> Quand vous pointez
          votre caméra vers un mur blanc sans relief et touchez pour mesurer, sans
          LiDAR l'app devine l'emplacement du plan à partir d'arêtes détectées
          ailleurs. Avec LiDAR, elle lit la profondeur réelle au pixel exact que
          vous avez touché. La différence se traduit par une dérive de ±2-3 cm sur
          les longs murs.
        </li>
        <li>
          <strong>La vitesse.</strong> Lancez l'app à froid, pointez immédiatement
          vers quelque chose. Sans LiDAR : attendez 3-5 secondes que l'AR converge.
          Avec LiDAR : lecture en 0,5 seconde. Pour un artisan qui réalise 20 mesures
          lors d'un relevé, cela représente plus de 60 secondes économisées par visite.
        </li>
      </ol>

      <h2>Quels iPhone ont le LiDAR</h2>
      <ul>
        <li>iPhone 12 Pro / 12 Pro Max</li>
        <li>iPhone 13 Pro / 13 Pro Max</li>
        <li>iPhone 14 Pro / 14 Pro Max</li>
        <li>iPhone 15 Pro / 15 Pro Max</li>
        <li>iPhone 16 Pro / 16 Pro Max</li>
        <li>iPhone 17 Pro / 17 Pro Max</li>
        <li>iPad Pro (4e génération, 2020) et plus récent</li>
        <li>iPad Air (M2, 2024) et plus récent</li>
      </ul>
      <p>
        Les iPhone standard (non Pro) n'ont pas de LiDAR. Apple a laissé entendre
        que c'est délibéré — le LiDAR est un élément différenciateur « Pro ». Aucune
        annonce ne prévoit l'arrivée du LiDAR sur les iPhone standard.
      </p>

      <h2>Si vous n'avez pas de LiDAR, que pouvez-vous quand même faire ?</h2>
      <p>
        À peu près tout, sauf le scan 3D automatique de la pièce. La mesure AR
        basée sur la caméra fonctionne toujours pour la distance, la hauteur, la
        surface et les angles. Le Constructeur de pièce manuel vous permet de créer
        des plans en parcourant le périmètre et en touchant les coins, sans LiDAR,
        et le plan obtenu est tout aussi précis qu'un scan LiDAR en 2D.
      </p>
      <p>
        La version gratuite de Ruler AR est complète sur tous les iPhone à partir
        du Xs. Le LiDAR ajoute la vitesse et le scan 3D, mais le flux de mesure
        principal est indépendant du matériel.
      </p>

      <h2>L'avenir</h2>
      <p>
        Les brevets d'Apple de 2024 indiquent des travaux pour combiner le LiDAR
        avec la caméra avant (capteur TrueDepth) pour le scan 3D du corps entier
        et des applications de fitness en AR. Pour la mesure, attendez-vous à une
        précision accrue sur de plus longues distances et peut-être à un LiDAR
        d'extérieur (actuellement limité à ~3 m par la lumière du soleil). Pour
        l'instant : si vous mesurez pour gagner votre vie, les modèles Pro
        rentabilisent la différence de prix en quelques mois d'usage professionnel.
      </p>
    </article>
  );
}

export function PostES() {
  return (
    <article className="prose-content">
      <p className="lead">
        Apple añadió un sensor LiDAR a los modelos iPhone Pro en 2020 y a todos
        los iPad Pro desde 2020. Es el pequeño cuadrado negro junto a los
        objetivos de la cámara trasera. El marketing lo llama «escáner Lidar».
        Técnicamente es un <em>sensor de profundidad de tiempo de vuelo directo</em>.
        Esto es lo que realmente hace, por qué ARKit se vuelve mucho más rápido y
        preciso cuando está presente y qué tareas de medición cambian gracias a él.
      </p>

      <h2>Qué es realmente el LiDAR</h2>
      <p>
        LiDAR significa «Light Detection and Ranging» (detección y medición de
        distancias con luz). El sensor emite un pulso láser infrarrojo invisible y
        luego mide cuánto tarda el pulso en rebotar de vuelta. Multiplica ese
        tiempo de ida y vuelta por la mitad de la velocidad de la luz y obtienes la
        distancia hasta lo que el pulso golpeó.
      </p>
      <p>
        El LiDAR del iPhone dispara <strong>576 pulsos simultáneamente en un patrón
        de cuadrícula</strong>, 30 veces por segundo. Eso te da un mapa de
        profundidad de 576 puntos de tu entorno, actualizado 30 veces por segundo,
        básicamente un flujo de vídeo de profundidad en 3D.
      </p>
      <p>
        Alcance: unos 5 metros en interiores, 3 metros en exteriores (la luz solar
        satura el sensor). Precisión: ±1 cm a 1 m, aumentando hasta ±5 cm a 5 m.
      </p>

      <h2>Qué hace en cambio el AR sin LiDAR</h2>
      <p>
        En los iPhone sin LiDAR (desde el iPhone Xs hasta el iPhone 14 estándar,
        iPhone 15/16/17 estándar), la profundidad se <strong>infiere</strong> a
        partir del movimiento de la cámara y la paralaje. Cuando mueves el
        teléfono, el mismo punto en el espacio se desplaza por el encuadre de la
        cámara; ese desplazamiento aparente le indica al software a qué distancia
        está ese punto.
      </p>
      <p>
        Esto se llama «odometría visual-inercial» (VIO). Necesita:
      </p>
      <ul>
        <li>Textura visible en la escena (una pared blanca lisa no tiene rasgos)</li>
        <li>Buena iluminación (el obturador de la cámara debe captar imágenes nítidas)</li>
        <li>Movimiento (tienes que mover el teléfono para que el cálculo funcione)</li>
        <li>Unos 3 segundos para converger tras el inicio</li>
      </ul>
      <p>
        Es ingenioso y funciona, pero es frágil. Las superficies reflectantes, las
        habitaciones poco iluminadas y un teléfono inmóvil lo degradan todo.
      </p>

      <h2>Qué cambia con LiDAR presente</h2>
      <table>
        <thead>
          <tr><th>Comportamiento</th><th>Sin LiDAR</th><th>Con LiDAR</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>Tiempo de inicio de la sesión AR</td>
            <td>~3-5 segundos (calibrar moviendo el teléfono)</td>
            <td>~0,5 segundos (la profundidad se lee directamente)</td>
          </tr>
          <tr>
            <td>¿Funciona en paredes blancas lisas?</td>
            <td>Con dificultad, necesita textura</td>
            <td>Sí, el láser lee la profundidad sin importar la textura visual</td>
          </tr>
          <tr>
            <td>¿Funciona en oscuridad total?</td>
            <td>No (la cámara no ve nada)</td>
            <td>Sí (el láser es su propia fuente de luz)</td>
          </tr>
          <tr>
            <td>Precisión a 3 m</td>
            <td>±15-25 mm</td>
            <td>±5-10 mm</td>
          </tr>
          <tr>
            <td>¿Captura una malla 3D del entorno?</td>
            <td>No</td>
            <td>Sí, la API RoomPlan de Apple la usa</td>
          </tr>
          <tr>
            <td>¿Detecta muebles / objetos automáticamente?</td>
            <td>No</td>
            <td>Sí, etiqueta sofás, camas, neveras, puertas, ventanas</td>
          </tr>
        </tbody>
      </table>

      <h2>Qué significa esto para las apps de medición</h2>
      <p>
        Tres diferencias concretas:
      </p>
      <ol>
        <li>
          <strong>Escaneo con RoomPlan.</strong> El framework RoomPlan de Apple
          (que Ruler AR usa para escanear habitaciones) solo funciona en
          dispositivos con LiDAR. Captura un modelo 3D completo de la habitación —
          paredes, ventanas, puertas, muebles — en 60-90 segundos caminando. Sin
          LiDAR, no hay RoomPlan.
        </li>
        <li>
          <strong>Precisión al tocar una pared lisa.</strong> Cuando apuntas la
          cámara a una pared blanca sin rasgos y tocas para medir, sin LiDAR la app
          adivina dónde está el plano basándose en bordes detectados en otros
          sitios. Con LiDAR lee la profundidad real en el píxel exacto que tocaste.
          La diferencia aparece como una deriva de ±2-3 cm en paredes largas.
        </li>
        <li>
          <strong>Velocidad.</strong> Abre la app en frío y apunta a algo de
          inmediato. Sin LiDAR: espera 3-5 segundos a que el AR converja. Con LiDAR:
          lectura en 0,5 segundos. Para un instalador que hace 20 mediciones en una
          inspección, eso supone más de 60 segundos ahorrados por visita.
        </li>
      </ol>

      <h2>Qué iPhone tienen LiDAR</h2>
      <ul>
        <li>iPhone 12 Pro / 12 Pro Max</li>
        <li>iPhone 13 Pro / 13 Pro Max</li>
        <li>iPhone 14 Pro / 14 Pro Max</li>
        <li>iPhone 15 Pro / 15 Pro Max</li>
        <li>iPhone 16 Pro / 16 Pro Max</li>
        <li>iPhone 17 Pro / 17 Pro Max</li>
        <li>iPad Pro (4.ª generación, 2020) y posteriores</li>
        <li>iPad Air (M2, 2024) y posteriores</li>
      </ul>
      <p>
        Los iPhone estándar (no Pro) no tienen LiDAR. Apple ha dado a entender que
        es deliberado — el LiDAR es un elemento diferenciador «Pro». No hay anuncios
        de que el LiDAR vaya a llegar a los iPhone estándar.
      </p>

      <h2>Si no tienes LiDAR, ¿qué puedes hacer igualmente?</h2>
      <p>
        Prácticamente todo excepto el escaneo 3D automático de la habitación. La
        medición AR basada en la cámara sigue funcionando para distancia, altura,
        área y ángulos. El Constructor de habitaciones manual te permite crear planos
        recorriendo el perímetro y tocando las esquinas, sin necesidad de LiDAR, y el
        plano resultante es tan preciso como un escaneo LiDAR en 2D.
      </p>
      <p>
        La versión gratuita de Ruler AR es completa en todos los iPhone desde el Xs
        en adelante. El LiDAR añade la velocidad y el escaneo 3D, pero el flujo de
        medición principal es independiente del hardware.
      </p>

      <h2>El futuro</h2>
      <p>
        Las patentes de Apple de 2024 indican trabajos para combinar el LiDAR con la
        cámara frontal (sensor TrueDepth) para el escaneo 3D de cuerpo completo y
        aplicaciones de fitness en AR. Para la medición, espera mayor precisión a
        distancias más largas y posiblemente LiDAR para exteriores (actualmente
        limitado a ~3 m por la luz solar). Por ahora: si mides para ganarte la vida,
        los modelos Pro amortizan la diferencia de precio en unos pocos meses de uso
        profesional.
      </p>
    </article>
  );
}

export function PostJA() {
  return (
    <article className="prose-content">
      <p className="lead">
        Appleは2020年にiPhone ProモデルへLiDARセンサーを搭載し、2020年以降のすべての
        iPad Proにも搭載しました。背面カメラのレンズの隣にある小さな黒い四角形がそれです。
        マーケティングでは「Lidarスキャナ」と呼ばれていますが、技術的には
        <em>ダイレクト・タイム・オブ・フライト方式の深度センサー</em>です。本記事では、
        それが実際に何をするのか、なぜ搭載されているとARKitがこれほど高速で正確になるのか、
        そしてそれによってどの測定作業が変わるのかを解説します。
      </p>

      <h2>LiDARとは実際に何か</h2>
      <p>
        LiDARは「Light Detection and Ranging」（光による検出と測距）の略です。
        センサーは目に見えない赤外線レーザーパルスを発射し、そのパルスが跳ね返ってくるまでの
        時間を測定します。その往復時間に光速の半分を掛けると、パルスが当たった対象までの
        距離が得られます。
      </p>
      <p>
        iPhoneのLiDARは<strong>グリッド状に576個のパルスを同時に</strong>、毎秒30回発射します。
        これにより周囲の576点からなる深度マップが得られ、毎秒30回更新されます。
        本質的には3Dの深度ビデオストリームです。
      </p>
      <p>
        到達範囲：屋内で約5メートル、屋外で3メートル（太陽光がセンサーを飽和させます）。
        精度：1 mで±1 cm、5 mでは±5 cmまで広がります。
      </p>

      <h2>LiDARのないARはその代わりに何をするか</h2>
      <p>
        LiDARを搭載していないiPhone（iPhone Xsから通常のiPhone 14、通常のiPhone 15/16/17）では、
        深度はカメラの動きと視差から<strong>推定</strong>されます。スマートフォンを動かすと、
        空間内の同じ点がカメラのフレーム内でずれます。その見かけ上のずれが、その点までの
        距離をソフトウェアに伝えます。
      </p>
      <p>
        これは「視覚慣性オドメトリ」（VIO）と呼ばれます。これには次が必要です：
      </p>
      <ul>
        <li>シーン内に見えるテクスチャ（真っ白な壁には特徴がありません）</li>
        <li>十分な明るさ（カメラのシャッターが鮮明なフレームを捉える必要があります）</li>
        <li>動き（計算が成立するにはスマートフォンを動かす必要があります）</li>
        <li>起動後、収束するまで約3秒</li>
      </ul>
      <p>
        巧妙で、ちゃんと機能しますが、もろいものです。反射する面、暗い部屋、止まったままの
        スマートフォンは、いずれも精度を低下させます。
      </p>

      <h2>LiDARがあると何が変わるか</h2>
      <table>
        <thead>
          <tr><th>挙動</th><th>LiDARなし</th><th>LiDARあり</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>ARセッションの起動時間</td>
            <td>約3-5秒（スマートフォンを動かして調整）</td>
            <td>約0.5秒（深度を直接読み取り）</td>
          </tr>
          <tr>
            <td>真っ白な壁で機能するか？</td>
            <td>苦手、テクスチャが必要</td>
            <td>はい、レーザーは視覚的なテクスチャに関係なく深度を読み取ります</td>
          </tr>
          <tr>
            <td>真っ暗な中で機能するか？</td>
            <td>いいえ（カメラが見えません）</td>
            <td>はい（レーザーが自前の光源です）</td>
          </tr>
          <tr>
            <td>3 mでの精度</td>
            <td>±15-25 mm</td>
            <td>±5-10 mm</td>
          </tr>
          <tr>
            <td>環境の3Dメッシュを取得するか？</td>
            <td>いいえ</td>
            <td>はい、AppleのRoomPlan APIがこれを利用します</td>
          </tr>
          <tr>
            <td>家具・物体を自動で検出するか？</td>
            <td>いいえ</td>
            <td>はい、ソファ、ベッド、冷蔵庫、ドア、窓にタグが付きます</td>
          </tr>
        </tbody>
      </table>

      <h2>これは測定アプリにとって何を意味するか</h2>
      <p>
        具体的な違いは3つです：
      </p>
      <ol>
        <li>
          <strong>RoomPlanスキャン。</strong> AppleのRoomPlanフレームワーク
          （Ruler ARが部屋のスキャンに使用しています）はLiDAR搭載デバイスでのみ動作します。
          歩いて60-90秒で、部屋の完全な3Dモデル——壁、窓、ドア、家具——を取得します。
          LiDARがなければRoomPlanもありません。
        </li>
        <li>
          <strong>真っ白な壁をタップしたときの精度。</strong>
          特徴のない白い壁にカメラを向けてタップして測定する場合、LiDARがなければアプリは
          他の場所で検出したエッジをもとに面の位置を推測します。LiDARがあれば、タップした
          まさにそのピクセルの実際の深度を読み取ります。その差は、長い壁では±2-3 cmの
          ずれとして現れます。
        </li>
        <li>
          <strong>速度。</strong> アプリをコールドスタートして、すぐに何かに向けます。
          LiDARなし：ARが収束するまで3-5秒待ちます。LiDARあり：0.5秒で読み取り。
          1回の調査で20回の測定を行う業者にとっては、訪問1回あたり60秒以上の節約になります。
        </li>
      </ol>

      <h2>どのiPhoneにLiDARがあるか</h2>
      <ul>
        <li>iPhone 12 Pro / 12 Pro Max</li>
        <li>iPhone 13 Pro / 13 Pro Max</li>
        <li>iPhone 14 Pro / 14 Pro Max</li>
        <li>iPhone 15 Pro / 15 Pro Max</li>
        <li>iPhone 16 Pro / 16 Pro Max</li>
        <li>iPhone 17 Pro / 17 Pro Max</li>
        <li>iPad Pro（第4世代、2020年）以降</li>
        <li>iPad Air（M2、2024年）以降</li>
      </ul>
      <p>
        通常の（Proではない）iPhoneにはLiDARがありません。Appleはこれが意図的なものであり、
        LiDARは「Pro」の差別化要素だと示唆しています。LiDARが通常のiPhoneに搭載されるという
        発表はありません。
      </p>

      <h2>LiDARがなくても、まだ何ができるか</h2>
      <p>
        自動の3D部屋スキャンを除けば、ほぼすべてが可能です。カメラベースのAR測定は、距離、高さ、
        面積、角度について引き続き機能します。手動ルームビルダーを使えば、周囲を歩いて角を
        タップするだけで間取り図を作成でき、LiDARは不要です。出来上がる図面は2Dでは
        LiDARスキャンと同じくらい正確です。
      </p>
      <p>
        Ruler ARの無料版は、Xs以降のすべてのiPhoneでフル機能を備えています。LiDARは速度と
        3Dスキャンを追加しますが、中核となる測定ワークフローはハードウェアに依存しません。
      </p>

      <h2>これから</h2>
      <p>
        Appleの2024年の特許は、全身の3Dスキャンやフィットネス向けのARアプリケーションのために、
        LiDARを前面カメラ（TrueDepthセンサー）と組み合わせる取り組みを示しています。測定に
        ついては、より長い距離でのいっそう高い精度、そしておそらく屋外LiDAR（現在は太陽光に
        より約3 mに制限）が期待できます。今のところ、測定を仕事にしているなら、Proモデルは
        プロとして数か月使ううちに価格差を取り戻してくれます。
      </p>
    </article>
  );
}

export function PostKO() {
  return (
    <article className="prose-content">
      <p className="lead">
        Apple은 2020년에 iPhone Pro 모델에, 그리고 2020년 이후 모든 iPad Pro에
        LiDAR 센서를 추가했습니다. 후면 카메라 렌즈 옆에 있는 작은 검은색 사각형이
        바로 그것입니다. 마케팅에서는 "Lidar 스캐너"라고 부르지만, 기술적으로는
        <em>다이렉트 비행시간(ToF) 방식의 깊이 센서</em>입니다. 이 글에서는 그것이
        실제로 무엇을 하는지, 왜 그것이 있을 때 ARKit이 훨씬 빠르고 정확해지는지,
        그리고 그로 인해 어떤 측정 작업이 달라지는지를 설명합니다.
      </p>

      <h2>LiDAR란 실제로 무엇인가</h2>
      <p>
        LiDAR는 "Light Detection and Ranging"(빛을 이용한 탐지 및 거리 측정)의
        약자입니다. 센서는 보이지 않는 적외선 레이저 펄스를 쏜 다음, 그 펄스가 다시
        돌아오는 데 걸리는 시간을 측정합니다. 이 왕복 시간에 빛의 속도의 절반을 곱하면,
        펄스가 부딪힌 대상까지의 거리를 알 수 있습니다.
      </p>
      <p>
        iPhone의 LiDAR는 <strong>격자 패턴으로 576개의 펄스를 동시에</strong> 초당
        30번 쏩니다. 이를 통해 주변 환경의 576개 지점으로 이루어진 깊이 맵을 초당
        30번 갱신하며 얻을 수 있는데, 본질적으로는 3D 깊이 영상 스트림입니다.
      </p>
      <p>
        도달 범위: 실내에서 약 5미터, 실외에서 3미터(햇빛이 센서를 포화시킵니다).
        정확도: 1 m에서 ±1 cm이며, 5 m에서는 ±5 cm까지 커집니다.
      </p>

      <h2>LiDAR가 없는 AR은 대신 무엇을 하는가</h2>
      <p>
        LiDAR가 없는 iPhone(iPhone Xs부터 일반 iPhone 14, 일반 iPhone 15/16/17)에서는
        깊이를 카메라의 움직임과 시차로부터 <strong>추정</strong>합니다. 휴대폰을
        움직이면 공간 속 같은 지점이 카메라 화면 안에서 이동하는데, 이 겉보기 이동량이
        그 지점이 얼마나 멀리 있는지를 소프트웨어에 알려줍니다.
      </p>
      <p>
        이를 "시각-관성 주행 거리 측정"(VIO)이라고 합니다. 여기에는 다음이 필요합니다:
      </p>
      <ul>
        <li>장면에 보이는 텍스처(아무것도 없는 흰 벽에는 특징이 없습니다)</li>
        <li>좋은 조명(카메라 셔터가 선명한 프레임을 포착해야 합니다)</li>
        <li>움직임(계산이 성립하려면 휴대폰을 움직여야 합니다)</li>
        <li>실행 후 수렴하기까지 약 3초</li>
      </ul>
      <p>
        영리하고 작동하기는 하지만, 취약합니다. 반사면, 어두운 방, 정지된 휴대폰은 모두
        성능을 떨어뜨립니다.
      </p>

      <h2>LiDAR가 있으면 무엇이 달라지는가</h2>
      <table>
        <thead>
          <tr><th>동작</th><th>LiDAR 없음</th><th>LiDAR 있음</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>AR 세션 시작 시간</td>
            <td>약 3-5초(휴대폰을 움직여 보정)</td>
            <td>약 0.5초(깊이를 직접 읽음)</td>
          </tr>
          <tr>
            <td>아무것도 없는 흰 벽에서 작동하나?</td>
            <td>어려움, 텍스처가 필요함</td>
            <td>예, 레이저는 시각적 텍스처와 무관하게 깊이를 읽습니다</td>
          </tr>
          <tr>
            <td>완전한 어둠 속에서 작동하나?</td>
            <td>아니요(카메라가 볼 수 없음)</td>
            <td>예(레이저 자체가 광원입니다)</td>
          </tr>
          <tr>
            <td>3 m에서의 정확도</td>
            <td>±15-25 mm</td>
            <td>±5-10 mm</td>
          </tr>
          <tr>
            <td>환경의 3D 메시를 캡처하나?</td>
            <td>아니요</td>
            <td>예, Apple의 RoomPlan API가 이를 사용합니다</td>
          </tr>
          <tr>
            <td>가구 / 사물을 자동으로 감지하나?</td>
            <td>아니요</td>
            <td>예, 소파, 침대, 냉장고, 문, 창문에 태그가 붙습니다</td>
          </tr>
        </tbody>
      </table>

      <h2>이것이 측정 앱에 의미하는 바</h2>
      <p>
        구체적인 차이는 세 가지입니다:
      </p>
      <ol>
        <li>
          <strong>RoomPlan 스캔.</strong> Apple의 RoomPlan 프레임워크(Ruler AR이
          방 스캔에 사용합니다)는 LiDAR 기기에서만 작동합니다. 걸어 다니며 60-90초
          만에 방의 완전한 3D 모델 — 벽, 창문, 문, 가구 — 을 캡처합니다. LiDAR가
          없으면 RoomPlan도 없습니다.
        </li>
        <li>
          <strong>아무것도 없는 벽을 탭할 때의 정확도.</strong> 특징 없는 흰 벽에
          카메라를 향하고 탭하여 측정할 때, LiDAR가 없으면 앱은 다른 곳에서 감지한
          모서리를 바탕으로 평면의 위치를 추측합니다. LiDAR가 있으면 탭한 바로 그
          픽셀의 실제 깊이를 읽습니다. 그 차이는 긴 벽에서 ±2-3 cm의 오차로
          나타납니다.
        </li>
        <li>
          <strong>속도.</strong> 앱을 처음부터 실행하고 곧바로 무언가를 향합니다.
          LiDAR 없음: AR이 수렴할 때까지 3-5초 기다립니다. LiDAR 있음: 0.5초 만에
          읽습니다. 한 번 조사에서 20번 측정하는 시공자에게는 방문 한 번당 60초
          이상을 절약하는 셈입니다.
        </li>
      </ol>

      <h2>어떤 iPhone에 LiDAR가 있는가</h2>
      <ul>
        <li>iPhone 12 Pro / 12 Pro Max</li>
        <li>iPhone 13 Pro / 13 Pro Max</li>
        <li>iPhone 14 Pro / 14 Pro Max</li>
        <li>iPhone 15 Pro / 15 Pro Max</li>
        <li>iPhone 16 Pro / 16 Pro Max</li>
        <li>iPhone 17 Pro / 17 Pro Max</li>
        <li>iPad Pro(4세대, 2020) 및 이후 모델</li>
        <li>iPad Air(M2, 2024) 및 이후 모델</li>
      </ul>
      <p>
        일반(비 Pro) iPhone에는 LiDAR가 없습니다. Apple은 이것이 의도적인 것이며
        LiDAR가 "Pro" 차별화 요소임을 시사했습니다. LiDAR가 일반 iPhone에 탑재된다는
        발표는 없습니다.
      </p>

      <h2>LiDAR가 없다면 여전히 무엇을 할 수 있나?</h2>
      <p>
        자동 3D 방 스캔을 제외하면 거의 모든 것이 가능합니다. 카메라 기반 AR 측정은
        거리, 높이, 면적, 각도에 대해 여전히 작동합니다. 수동 룸 빌더를 사용하면 둘레를
        걸으며 모서리를 탭하는 것만으로 평면도를 만들 수 있으며, LiDAR가 필요하지
        않습니다. 그렇게 만들어진 도면은 2D에서는 LiDAR 스캔만큼이나 정확합니다.
      </p>
      <p>
        Ruler AR 무료 버전은 Xs 이후의 모든 iPhone에서 모든 기능을 제공합니다. LiDAR는
        속도와 3D 스캔을 더해 주지만, 핵심 측정 워크플로는 하드웨어에 구애받지 않습니다.
      </p>

      <h2>앞으로</h2>
      <p>
        Apple의 2024년 특허는 전신 3D 스캔과 AR 피트니스 애플리케이션을 위해 LiDAR를
        전면 카메라(TrueDepth 센서)와 결합하려는 작업을 보여줍니다. 측정 측면에서는 더
        긴 거리에서의 더 높은 정확도와 어쩌면 실외 LiDAR(현재 햇빛으로 인해 약 3 m로
        제한됨)를 기대할 수 있습니다. 지금으로서는, 측정을 생업으로 한다면 Pro 모델은
        몇 달의 전문적인 사용만으로 가격 차이를 회수해 줍니다.
      </p>
    </article>
  );
}

export function PostZH() {
  return (
    <article className="prose-content">
      <p className="lead">
        Apple 在 2020 年为 iPhone Pro 机型加入了 LiDAR 传感器，并为 2020 年起的每一台
        iPad Pro 配备了它。它就是后置摄像头镜头旁边那个小小的黑色方块。营销文案称之为
        “Lidar 扫描仪”。从技术上讲，它是一个<em>直接飞行时间深度传感器</em>。下面就来说说
        它到底在做什么、为什么有了它 ARKit 会快得多、准得多，以及哪些测量任务因它而改变。
      </p>

      <h2>LiDAR 到底是什么</h2>
      <p>
        LiDAR 是 “Light Detection and Ranging”（光探测与测距）的缩写。传感器发出一道看不见的
        红外激光脉冲，然后测量脉冲反弹回来所需的时间。把这个往返时间乘以光速的一半，你就
        得到了脉冲所击中之物的距离。
      </p>
      <p>
        iPhone 的 LiDAR <strong>以网格模式同时发射 576 道脉冲</strong>，每秒 30 次。这就给你
        一张由周围环境 576 个点构成的深度图，每秒更新 30 次，本质上就是一段 3D 深度视频流。
      </p>
      <p>
        测距范围：室内约 5 米，室外 3 米（阳光会使传感器饱和）。精度：1 m 处为 ±1 cm，到
        5 m 处增大到 ±5 cm。
      </p>

      <h2>没有 LiDAR 的 AR 改用什么方式</h2>
      <p>
        在没有 LiDAR 的 iPhone 上（从 iPhone Xs 到标准版 iPhone 14、标准版 iPhone
        15/16/17），深度是通过摄像头运动和视差<strong>推断</strong>出来的。当你移动手机时，
        空间中的同一个点会在摄像头画面里发生位移；这种表观位移会告诉软件这个点有多远。
      </p>
      <p>
        这被称为“视觉惯性里程计”（VIO）。它需要：
      </p>
      <ul>
        <li>场景中可见的纹理（一面空白的白墙没有任何特征）</li>
        <li>良好的光照（摄像头快门必须捕捉到清晰的画面）</li>
        <li>运动（你必须移动手机，计算才能成立）</li>
        <li>启动后约 3 秒才能收敛</li>
      </ul>
      <p>
        这很巧妙，也确实有效，但很脆弱。反光表面、昏暗的房间和静止不动的手机都会让它的
        表现变差。
      </p>

      <h2>有了 LiDAR 会发生什么变化</h2>
      <table>
        <thead>
          <tr><th>行为表现</th><th>没有 LiDAR</th><th>有 LiDAR</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>AR 会话启动时间</td>
            <td>约 3-5 秒（移动手机进行校准）</td>
            <td>约 0.5 秒（直接读取深度）</td>
          </tr>
          <tr>
            <td>能在空白白墙上工作吗？</td>
            <td>很吃力，需要纹理</td>
            <td>可以，激光读取深度，与视觉纹理无关</td>
          </tr>
          <tr>
            <td>能在一片漆黑中工作吗？</td>
            <td>不能（摄像头看不见）</td>
            <td>可以（激光自带光源）</td>
          </tr>
          <tr>
            <td>3 m 处的精度</td>
            <td>±15-25 mm</td>
            <td>±5-10 mm</td>
          </tr>
          <tr>
            <td>能捕捉环境的 3D 网格吗？</td>
            <td>不能</td>
            <td>可以，Apple 的 RoomPlan API 会用到它</td>
          </tr>
          <tr>
            <td>能自动识别家具 / 物体吗？</td>
            <td>不能</td>
            <td>可以，会为沙发、床、冰箱、门、窗打上标签</td>
          </tr>
        </tbody>
      </table>

      <h2>这对测量类 App 意味着什么</h2>
      <p>
        有三点具体差异：
      </p>
      <ol>
        <li>
          <strong>RoomPlan 扫描。</strong> Apple 的 RoomPlan 框架（Ruler AR 用它来扫描房间）
          只在配备 LiDAR 的设备上工作。它能在走动 60-90 秒的时间里捕捉到房间完整的 3D 模型——
          墙壁、窗户、门、家具。没有 LiDAR，就没有 RoomPlan。
        </li>
        <li>
          <strong>点击空白墙面的精度。</strong> 当你把摄像头对准一面毫无特征的白墙并点击测量时，
          没有 LiDAR 的话，App 会根据在别处检测到的边缘来猜测平面所在的位置。有了 LiDAR，它会
          读取你点击的那个像素处的真实深度。这个差异在长墙上会表现为 ±2-3 cm 的漂移。
        </li>
        <li>
          <strong>速度。</strong> 冷启动 App，立刻对准某个物体。没有 LiDAR：要等 3-5 秒让
          AR 收敛。有 LiDAR：0.5 秒就能读取。对于一次勘测要做 20 次测量的施工人员来说，
          这相当于每次上门节省 60 秒以上。
        </li>
      </ol>

      <h2>哪些 iPhone 配备 LiDAR</h2>
      <ul>
        <li>iPhone 12 Pro / 12 Pro Max</li>
        <li>iPhone 13 Pro / 13 Pro Max</li>
        <li>iPhone 14 Pro / 14 Pro Max</li>
        <li>iPhone 15 Pro / 15 Pro Max</li>
        <li>iPhone 16 Pro / 16 Pro Max</li>
        <li>iPhone 17 Pro / 17 Pro Max</li>
        <li>iPad Pro（第 4 代，2020 年）及更新机型</li>
        <li>iPad Air（M2，2024 年）及更新机型</li>
      </ul>
      <p>
        标准版（非 Pro）iPhone 没有 LiDAR。Apple 已暗示这是有意为之——LiDAR 是“Pro”的差异化
        卖点。目前没有任何关于 LiDAR 将进入标准版 iPhone 的消息。
      </p>

      <h2>如果你没有 LiDAR，还能做些什么？</h2>
      <p>
        除了自动 3D 房间扫描之外，几乎所有功能都能用。基于摄像头的 AR 测量在距离、高度、
        面积和角度方面仍然有效。手动房间构建器让你只需沿着周边走动并点击各个角，就能搭建
        平面图，无需 LiDAR，而得到的平面图在 2D 上与 LiDAR 扫描一样精确。
      </p>
      <p>
        Ruler AR 免费版在 Xs 及以后的所有 iPhone 上功能齐全。LiDAR 增加了速度和 3D 扫描，
        但核心测量流程与硬件无关。
      </p>

      <h2>未来展望</h2>
      <p>
        Apple 2024 年的专利表明，他们正在研究把 LiDAR 与前置摄像头（TrueDepth 传感器）结合，
        用于全身 3D 扫描和 AR 健身应用。在测量方面，可以预期更远距离上更高的精度，以及可能
        出现的户外 LiDAR（目前受阳光限制约 3 m）。就目前而言：如果你靠测量谋生，Pro 机型
        会在几个月的专业使用中收回其差价。
      </p>
    </article>
  );
}

export function PostPT() {
  return (
    <article className="prose-content">
      <p className="lead">
        A Apple adicionou um sensor LiDAR aos modelos iPhone Pro em 2020 e a todo
        iPad Pro desde 2020. É o pequeno quadrado preto ao lado das lentes da
        câmera traseira. O marketing o chama de "scanner Lidar". Tecnicamente, é
        um <em>sensor de profundidade de tempo de voo direto</em>. Aqui está o que
        ele realmente faz, por que o ARKit fica muito mais rápido e preciso quando
        ele está presente e quais tarefas de medição mudam por causa dele.
      </p>

      <h2>O que o LiDAR realmente é</h2>
      <p>
        LiDAR significa "Light Detection and Ranging" (detecção e medição de
        distância por luz). O sensor emite um pulso de laser infravermelho
        invisível e então mede quanto tempo o pulso leva para voltar. Multiplique
        esse tempo de ida e volta por metade da velocidade da luz e você terá a
        distância até aquilo que o pulso atingiu.
      </p>
      <p>
        O LiDAR do iPhone dispara <strong>576 pulsos simultaneamente em um padrão
        de grade</strong>, 30 vezes por segundo. Isso lhe dá um mapa de profundidade
        de 576 pontos do seu ambiente, atualizado 30 vezes por segundo,
        essencialmente um fluxo de vídeo de profundidade em 3D.
      </p>
      <p>
        Alcance: cerca de 5 metros em ambientes internos, 3 metros ao ar livre (a
        luz do sol satura o sensor). Precisão: ±1 cm a 1 m, aumentando para ±5 cm a 5 m.
      </p>

      <h2>O que o AR sem LiDAR faz em vez disso</h2>
      <p>
        Em iPhones sem LiDAR (do iPhone Xs ao iPhone 14 padrão, iPhone 15/16/17
        padrão), a profundidade é <strong>inferida</strong> a partir do movimento
        da câmera e da paralaxe. Conforme você move o telefone, o mesmo ponto no
        espaço se desloca pelo quadro da câmera; esse deslocamento aparente diz ao
        software a que distância esse ponto está.
      </p>
      <p>
        Isso se chama "odometria visual-inercial" (VIO). Ela precisa de:
      </p>
      <ul>
        <li>Textura visível na cena (uma parede branca lisa não tem características)</li>
        <li>Boa iluminação (o obturador da câmera precisa capturar quadros nítidos)</li>
        <li>Movimento (você tem que mover o telefone para que o cálculo funcione)</li>
        <li>Cerca de 3 segundos para convergir após o lançamento</li>
      </ul>
      <p>
        É engenhoso, funciona, mas é frágil. Superfícies reflexivas, ambientes
        escuros e um telefone parado degradam tudo isso.
      </p>

      <h2>O que muda com o LiDAR presente</h2>
      <table>
        <thead>
          <tr><th>Comportamento</th><th>Sem LiDAR</th><th>Com LiDAR</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>Tempo de inicialização da sessão AR</td>
            <td>~3-5 segundos (calibrar movendo o telefone)</td>
            <td>~0,5 segundo (a profundidade é lida diretamente)</td>
          </tr>
          <tr>
            <td>Funciona em paredes brancas lisas?</td>
            <td>Tem dificuldade, precisa de textura</td>
            <td>Sim, o laser lê a profundidade independentemente da textura visual</td>
          </tr>
          <tr>
            <td>Funciona na escuridão total?</td>
            <td>Não (a câmera não enxerga)</td>
            <td>Sim (o laser é sua própria fonte de luz)</td>
          </tr>
          <tr>
            <td>Precisão a 3 m</td>
            <td>±15-25 mm</td>
            <td>±5-10 mm</td>
          </tr>
          <tr>
            <td>Captura uma malha 3D do ambiente?</td>
            <td>Não</td>
            <td>Sim, a API RoomPlan da Apple a utiliza</td>
          </tr>
          <tr>
            <td>Detecta móveis / objetos automaticamente?</td>
            <td>Não</td>
            <td>Sim, sofás, camas, geladeiras, portas, janelas são rotulados</td>
          </tr>
        </tbody>
      </table>

      <h2>O que isso significa para apps de medição</h2>
      <p>
        Três diferenças concretas:
      </p>
      <ol>
        <li>
          <strong>Escaneamento com RoomPlan.</strong> O framework RoomPlan da Apple
          (que o Ruler AR usa para escanear cômodos) só funciona em dispositivos com
          LiDAR. Ele captura um modelo 3D completo do cômodo — paredes, janelas,
          portas, móveis — em 60-90 segundos de caminhada. Sem LiDAR, sem RoomPlan.
        </li>
        <li>
          <strong>Precisão ao tocar em uma parede lisa.</strong> Quando você aponta
          a câmera para uma parede branca sem características e toca para medir, sem
          LiDAR o app adivinha onde está o plano com base em bordas detectadas em
          outros lugares. Com LiDAR, ele lê a profundidade real no pixel exato em que
          você tocou. A diferença aparece como um desvio de ±2-3 cm em paredes longas.
        </li>
        <li>
          <strong>Velocidade.</strong> Abra o app do zero e aponte para algo
          imediatamente. Sem LiDAR: espere 3-5 segundos para o AR convergir. Com
          LiDAR: leitura em 0,5 segundo. Para um profissional que faz 20 medições em
          uma vistoria, isso representa mais de 60 segundos economizados por visita.
        </li>
      </ol>

      <h2>Quais iPhones têm LiDAR</h2>
      <ul>
        <li>iPhone 12 Pro / 12 Pro Max</li>
        <li>iPhone 13 Pro / 13 Pro Max</li>
        <li>iPhone 14 Pro / 14 Pro Max</li>
        <li>iPhone 15 Pro / 15 Pro Max</li>
        <li>iPhone 16 Pro / 16 Pro Max</li>
        <li>iPhone 17 Pro / 17 Pro Max</li>
        <li>iPad Pro (4ª geração, 2020) e posteriores</li>
        <li>iPad Air (M2, 2024) e posteriores</li>
      </ul>
      <p>
        iPhones padrão (não Pro) não têm LiDAR. A Apple deu a entender que isso é
        proposital — o LiDAR é um diferencial "Pro". Não há anúncios de que o LiDAR
        chegará aos iPhones padrão.
      </p>

      <h2>Se você não tem LiDAR, o que ainda pode fazer?</h2>
      <p>
        Praticamente tudo, exceto o escaneamento 3D automático do cômodo. A medição
        AR baseada na câmera continua funcionando para distância, altura, área e
        ângulos. O Construtor Manual de Cômodos permite criar plantas baixas
        percorrendo o perímetro e tocando nos cantos, sem necessidade de LiDAR, e a
        planta resultante é tão precisa quanto um escaneamento LiDAR em 2D.
      </p>
      <p>
        A versão gratuita do Ruler AR é completa em todos os iPhones a partir do Xs.
        O LiDAR adiciona a velocidade e o escaneamento 3D, mas o fluxo de medição
        principal independe do hardware.
      </p>

      <h2>O futuro</h2>
      <p>
        As patentes da Apple de 2024 indicam trabalho para combinar o LiDAR com a
        câmera frontal (sensor TrueDepth) para escaneamento 3D de corpo inteiro e
        aplicações de fitness em AR. Para medição, espere maior precisão em distâncias
        maiores e possivelmente LiDAR para ambientes externos (atualmente limitado a
        ~3 m pela luz solar). Por enquanto: se você mede para viver, os modelos Pro
        recuperam a diferença de preço em poucos meses de uso profissional.
      </p>
    </article>
  );
}

export function PostIT() {
  return (
    <article className="prose-content">
      <p className="lead">
        Apple ha aggiunto un sensore LiDAR ai modelli iPhone Pro nel 2020 e a ogni
        iPad Pro dal 2020. È il piccolo quadrato nero accanto agli obiettivi della
        fotocamera posteriore. Il marketing lo chiama "scanner Lidar". Tecnicamente
        è un <em>sensore di profondità a tempo di volo diretto</em>. Ecco cosa fa
        davvero, perché ARKit diventa molto più veloce e preciso quando è presente
        e quali attività di misurazione cambiano grazie a esso.
      </p>

      <h2>Cos'è davvero il LiDAR</h2>
      <p>
        LiDAR sta per "Light Detection and Ranging" (rilevamento e misurazione della
        distanza tramite la luce). Il sensore emette un impulso laser a infrarossi
        invisibile, poi misura quanto tempo impiega l'impulso a rimbalzare indietro.
        Moltiplica questo tempo di andata e ritorno per metà della velocità della
        luce e ottieni la distanza da ciò che l'impulso ha colpito.
      </p>
      <p>
        Il LiDAR dell'iPhone spara <strong>576 impulsi simultaneamente secondo uno
        schema a griglia</strong>, 30 volte al secondo. Questo ti dà una mappa di
        profondità di 576 punti dell'ambiente, aggiornata 30 volte al secondo,
        sostanzialmente un flusso video di profondità in 3D.
      </p>
      <p>
        Portata: circa 5 metri al chiuso, 3 metri all'aperto (la luce solare satura
        il sensore). Precisione: ±1 cm a 1 m, fino a ±5 cm a 5 m.
      </p>

      <h2>Cosa fa invece l'AR senza LiDAR</h2>
      <p>
        Sugli iPhone senza LiDAR (dall'iPhone Xs all'iPhone 14 standard, iPhone
        15/16/17 standard), la profondità viene <strong>dedotta</strong> dal
        movimento della fotocamera e dalla parallasse. Mentre muovi il telefono, lo
        stesso punto nello spazio si sposta nel fotogramma della fotocamera; questo
        spostamento apparente dice al software quanto è lontano quel punto.
      </p>
      <p>
        Questa tecnica si chiama "odometria visivo-inerziale" (VIO). Richiede:
      </p>
      <ul>
        <li>Texture visibile nella scena (un muro bianco vuoto non ha caratteristiche)</li>
        <li>Buona illuminazione (l'otturatore della fotocamera deve catturare fotogrammi nitidi)</li>
        <li>Movimento (devi muovere il telefono perché i calcoli funzionino)</li>
        <li>Circa 3 secondi per convergere dopo l'avvio</li>
      </ul>
      <p>
        È ingegnosa, funziona, ma è fragile. Le superfici riflettenti, gli ambienti
        poco illuminati e un telefono fermo la peggiorano tutti.
      </p>

      <h2>Cosa cambia con il LiDAR presente</h2>
      <table>
        <thead>
          <tr><th>Comportamento</th><th>Senza LiDAR</th><th>Con LiDAR</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>Tempo di avvio della sessione AR</td>
            <td>~3-5 secondi (calibrazione muovendo il telefono)</td>
            <td>~0,5 secondi (la profondità viene letta direttamente)</td>
          </tr>
          <tr>
            <td>Funziona su muri bianchi vuoti?</td>
            <td>Con difficoltà, serve texture</td>
            <td>Sì, il laser legge la profondità indipendentemente dalla texture visiva</td>
          </tr>
          <tr>
            <td>Funziona nel buio totale?</td>
            <td>No (la fotocamera non vede)</td>
            <td>Sì (il laser è la sua stessa fonte di luce)</td>
          </tr>
          <tr>
            <td>Precisione a 3 m</td>
            <td>±15-25 mm</td>
            <td>±5-10 mm</td>
          </tr>
          <tr>
            <td>Cattura una mesh 3D dell'ambiente?</td>
            <td>No</td>
            <td>Sì, l'API RoomPlan di Apple la utilizza</td>
          </tr>
          <tr>
            <td>Rileva mobili / oggetti automaticamente?</td>
            <td>No</td>
            <td>Sì, divani, letti, frigoriferi, porte, finestre vengono etichettati</td>
          </tr>
        </tbody>
      </table>

      <h2>Cosa significa per le app di misurazione</h2>
      <p>
        Tre differenze concrete:
      </p>
      <ol>
        <li>
          <strong>Scansione con RoomPlan.</strong> Il framework RoomPlan di Apple
          (che Ruler AR usa per le scansioni delle stanze) funziona solo sui
          dispositivi con LiDAR. Cattura un modello 3D completo della stanza —
          pareti, finestre, porte, mobili — in 60-90 secondi di camminata. Niente
          LiDAR, niente RoomPlan.
        </li>
        <li>
          <strong>Precisione toccando un muro vuoto.</strong> Quando punti la
          fotocamera verso un muro bianco senza dettagli e tocchi per misurare,
          senza LiDAR l'app indovina dove si trova il piano in base a bordi
          rilevati altrove. Con il LiDAR legge la profondità reale esattamente nel
          pixel che hai toccato. La differenza si manifesta come una deriva di
          ±2-3 cm sui muri lunghi.
        </li>
        <li>
          <strong>Velocità.</strong> Avvia l'app da freddo e punta subito verso
          qualcosa. Senza LiDAR: aspetta 3-5 secondi che l'AR converga. Con LiDAR:
          lettura in 0,5 secondi. Per un installatore che fa 20 misurazioni in un
          sopralluogo, sono oltre 60 secondi risparmiati per visita.
        </li>
      </ol>

      <h2>Quali iPhone hanno il LiDAR</h2>
      <ul>
        <li>iPhone 12 Pro / 12 Pro Max</li>
        <li>iPhone 13 Pro / 13 Pro Max</li>
        <li>iPhone 14 Pro / 14 Pro Max</li>
        <li>iPhone 15 Pro / 15 Pro Max</li>
        <li>iPhone 16 Pro / 16 Pro Max</li>
        <li>iPhone 17 Pro / 17 Pro Max</li>
        <li>iPad Pro (4ª generazione, 2020) e successivi</li>
        <li>iPad Air (M2, 2024) e successivi</li>
      </ul>
      <p>
        Gli iPhone standard (non Pro) non hanno il LiDAR. Apple ha lasciato intendere
        che è una scelta deliberata — il LiDAR è un elemento distintivo "Pro". Non ci
        sono annunci sull'arrivo del LiDAR sugli iPhone standard.
      </p>

      <h2>Se non hai il LiDAR, cosa puoi comunque fare?</h2>
      <p>
        Praticamente tutto, tranne la scansione 3D automatica della stanza. La
        misurazione AR basata sulla fotocamera funziona ancora per distanza, altezza,
        area e angoli. Il Costruttore di stanze manuale ti permette di creare
        planimetrie percorrendo il perimetro e toccando gli angoli, senza bisogno di
        LiDAR, e la planimetria risultante è precisa quanto una scansione LiDAR in 2D.
      </p>
      <p>
        La versione gratuita di Ruler AR è completa su tutti gli iPhone a partire dal
        Xs. Il LiDAR aggiunge la velocità e la scansione 3D, ma il flusso di
        misurazione principale è indipendente dall'hardware.
      </p>

      <h2>Il futuro</h2>
      <p>
        I brevetti Apple del 2024 indicano lavori per combinare il LiDAR con la
        fotocamera frontale (sensore TrueDepth) per la scansione 3D del corpo intero
        e applicazioni di fitness in AR. Per la misurazione, aspettati una precisione
        maggiore su distanze più lunghe e forse un LiDAR per esterni (attualmente
        limitato a ~3 m dalla luce solare). Per ora: se misuri per lavoro, i modelli
        Pro ripagano la differenza di prezzo in pochi mesi di uso professionale.
      </p>
    </article>
  );
}

export function PostPL() {
  return (
    <article className="prose-content">
      <p className="lead">
        Apple dodał czujnik LiDAR do modeli iPhone Pro w 2020 roku oraz do każdego
        iPada Pro od 2020 roku. To mały czarny kwadrat obok obiektywów tylnego
        aparatu. Marketing nazywa go „skanerem Lidar". Technicznie jest to
        <em> czujnik głębi działający na zasadzie bezpośredniego pomiaru czasu
        przelotu</em>. Oto co naprawdę robi, dlaczego dzięki niemu ARKit działa
        znacznie szybciej i dokładniej oraz które zadania pomiarowe zmieniają się
        za jego sprawą.
      </p>

      <h2>Czym tak naprawdę jest LiDAR</h2>
      <p>
        LiDAR to skrót od „Light Detection and Ranging" (wykrywanie i pomiar
        odległości za pomocą światła). Czujnik wysyła niewidzialny impuls lasera
        podczerwonego, a następnie mierzy, ile czasu zajmuje temu impulsowi powrót.
        Pomnóż ten czas tam i z powrotem przez połowę prędkości światła, a otrzymasz
        odległość do tego, w co trafił impuls.
      </p>
      <p>
        LiDAR w iPhonie wysyła <strong>576 impulsów jednocześnie w układzie
        siatki</strong>, 30 razy na sekundę. Daje to mapę głębi złożoną z 576 punktów
        otoczenia, odświeżaną 30 razy na sekundę — w istocie strumień wideo głębi 3D.
      </p>
      <p>
        Zasięg: około 5 metrów w pomieszczeniach, 3 metry na zewnątrz (światło
        słoneczne nasyca czujnik). Dokładność: ±1 cm przy 1 m, rosnąca do ±5 cm
        przy 5 m.
      </p>

      <h2>Co zamiast tego robi AR bez LiDAR</h2>
      <p>
        W iPhone'ach bez LiDAR (od iPhone'a Xs po standardowego iPhone'a 14,
        standardowe iPhone 15/16/17) głębia jest <strong>wnioskowana</strong> z
        ruchu aparatu i paralaksy. Gdy poruszasz telefonem, ten sam punkt w
        przestrzeni przesuwa się w kadrze aparatu; to pozorne przesunięcie informuje
        oprogramowanie, jak daleko znajduje się ten punkt.
      </p>
      <p>
        Nazywa się to „odometrią wizyjno-inercyjną" (VIO). Wymaga ona:
      </p>
      <ul>
        <li>Widocznej tekstury w scenie (pusta biała ściana nie ma żadnych cech)</li>
        <li>Dobrego oświetlenia (migawka aparatu musi uchwycić ostre klatki)</li>
        <li>Ruchu (musisz poruszać telefonem, aby obliczenia zadziałały)</li>
        <li>Około 3 sekund na zbieżność po uruchomieniu</li>
      </ul>
      <p>
        To sprytne i działa, ale jest delikatne. Powierzchnie odbijające światło,
        słabo oświetlone pomieszczenia i nieruchomy telefon — wszystko to pogarsza
        działanie.
      </p>

      <h2>Co zmienia obecność LiDAR</h2>
      <table>
        <thead>
          <tr><th>Zachowanie</th><th>Bez LiDAR</th><th>Z LiDAR</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>Czas uruchomienia sesji AR</td>
            <td>~3-5 sekund (kalibracja przez poruszanie telefonem)</td>
            <td>~0,5 sekundy (głębia odczytywana bezpośrednio)</td>
          </tr>
          <tr>
            <td>Działa na pustych białych ścianach?</td>
            <td>Z trudem, potrzebuje tekstury</td>
            <td>Tak, laser odczytuje głębię niezależnie od tekstury wizualnej</td>
          </tr>
          <tr>
            <td>Działa w całkowitej ciemności?</td>
            <td>Nie (aparat nic nie widzi)</td>
            <td>Tak (laser jest własnym źródłem światła)</td>
          </tr>
          <tr>
            <td>Dokładność przy 3 m</td>
            <td>±15-25 mm</td>
            <td>±5-10 mm</td>
          </tr>
          <tr>
            <td>Tworzy siatkę 3D otoczenia?</td>
            <td>Nie</td>
            <td>Tak, korzysta z tego API RoomPlan firmy Apple</td>
          </tr>
          <tr>
            <td>Automatycznie wykrywa meble / obiekty?</td>
            <td>Nie</td>
            <td>Tak, oznacza sofy, łóżka, lodówki, drzwi, okna</td>
          </tr>
        </tbody>
      </table>

      <h2>Co to oznacza dla aplikacji pomiarowych</h2>
      <p>
        Trzy konkretne różnice:
      </p>
      <ol>
        <li>
          <strong>Skanowanie RoomPlan.</strong> Framework RoomPlan firmy Apple
          (którego Ruler AR używa do skanowania pomieszczeń) działa wyłącznie na
          urządzeniach z LiDAR. W 60-90 sekund chodzenia tworzy kompletny model 3D
          pomieszczenia — ściany, okna, drzwi, meble. Bez LiDAR nie ma RoomPlan.
        </li>
        <li>
          <strong>Dokładność po dotknięciu pustej ściany.</strong> Gdy skierujesz
          aparat na pozbawioną cech białą ścianę i dotkniesz, aby zmierzyć, bez
          LiDAR aplikacja zgaduje położenie płaszczyzny na podstawie krawędzi
          wykrytych gdzie indziej. Z LiDAR odczytuje rzeczywistą głębię dokładnie w
          tym pikselu, którego dotknąłeś. Różnica objawia się jako odchylenie
          ±2-3 cm na długich ścianach.
        </li>
        <li>
          <strong>Szybkość.</strong> Uruchom aplikację „na zimno" i od razu skieruj
          na coś. Bez LiDAR: czekaj 3-5 sekund, aż AR osiągnie zbieżność. Z LiDAR:
          odczyt w 0,5 sekundy. Dla wykonawcy robiącego 20 pomiarów podczas obmiaru
          to ponad 60 zaoszczędzonych sekund na każdej wizycie.
        </li>
      </ol>

      <h2>Które iPhone'y mają LiDAR</h2>
      <ul>
        <li>iPhone 12 Pro / 12 Pro Max</li>
        <li>iPhone 13 Pro / 13 Pro Max</li>
        <li>iPhone 14 Pro / 14 Pro Max</li>
        <li>iPhone 15 Pro / 15 Pro Max</li>
        <li>iPhone 16 Pro / 16 Pro Max</li>
        <li>iPhone 17 Pro / 17 Pro Max</li>
        <li>iPad Pro (4. generacji, 2020) i nowsze</li>
        <li>iPad Air (M2, 2024) i nowsze</li>
      </ul>
      <p>
        Standardowe (nie Pro) iPhone'y nie mają LiDAR. Apple zasugerował, że jest to
        celowe — LiDAR to wyróżnik linii „Pro". Nie ma żadnych zapowiedzi pojawienia
        się LiDAR w standardowych iPhone'ach.
      </p>

      <h2>Jeśli nie masz LiDAR, co nadal możesz zrobić?</h2>
      <p>
        Niemal wszystko poza automatycznym skanowaniem pomieszczenia w 3D. Pomiar AR
        oparty na aparacie nadal działa dla odległości, wysokości, powierzchni i
        kątów. Ręczny kreator pomieszczeń pozwala tworzyć rzuty kondygnacji,
        obchodząc obwód i dotykając narożników — bez potrzeby LiDAR — a powstały
        rzut jest w 2D równie dokładny jak skan LiDAR.
      </p>
      <p>
        Darmowa wersja Ruler AR jest w pełni funkcjonalna na wszystkich iPhone'ach
        od modelu Xs wzwyż. LiDAR dodaje szybkość i skan 3D, ale podstawowy proces
        pomiaru jest niezależny od sprzętu.
      </p>

      <h2>Przyszłość</h2>
      <p>
        Patenty Apple z 2024 roku wskazują na prace nad połączeniem LiDAR z aparatem
        przednim (czujnikiem TrueDepth) do skanowania 3D całego ciała i aplikacji
        fitness w AR. W przypadku pomiarów spodziewaj się większej dokładności na
        dłuższych dystansach i być może LiDAR do zastosowań na zewnątrz (obecnie
        ograniczonego przez światło słoneczne do ~3 m). Na razie: jeśli mierzysz
        zawodowo, modele Pro zwracają różnicę w cenie w ciągu kilku miesięcy
        profesjonalnego użytkowania.
      </p>
    </article>
  );
}

export function PostTR() {
  return (
    <article className="prose-content">
      <p className="lead">
        Apple, 2020 yılında iPhone Pro modellerine ve 2020'den itibaren her iPad
        Pro'ya bir LiDAR sensörü ekledi. Arka kamera lenslerinin yanındaki o küçük
        siyah karedir. Pazarlama metinleri ona "Lidar Tarayıcı" diyor. Teknik
        olarak ise bir <em>doğrudan uçuş süresi derinlik sensörü</em>dür. İşte
        gerçekte ne yaptığı, var olduğunda ARKit'in neden çok daha hızlı ve hassas
        hale geldiği ve onun sayesinde hangi ölçüm görevlerinin değiştiği.
      </p>

      <h2>LiDAR gerçekte nedir</h2>
      <p>
        LiDAR, "Light Detection and Ranging" (ışıkla algılama ve mesafe ölçme)
        ifadesinin kısaltmasıdır. Sensör, görünmez bir kızılötesi lazer darbesi
        yayar ve ardından darbenin geri sekmesinin ne kadar sürdüğünü ölçer. Bu
        gidiş-dönüş süresini ışık hızının yarısıyla çarpın; darbenin çarptığı şeye
        olan mesafeyi elde edersiniz.
      </p>
      <p>
        iPhone'un LiDAR'ı <strong>ızgara deseninde aynı anda 576 darbe</strong>
        gönderir, saniyede 30 kez. Bu, çevrenizdeki 576 noktadan oluşan ve saniyede
        30 kez güncellenen bir derinlik haritası verir — esasen 3D bir derinlik
        video akışı.
      </p>
      <p>
        Menzil: kapalı alanda yaklaşık 5 metre, açık alanda 3 metre (güneş ışığı
        sensörü doyurur). Hassasiyet: 1 m'de ±1 cm, 5 m'de ±5 cm'ye kadar artar.
      </p>

      <h2>LiDAR olmadan AR bunun yerine ne yapar</h2>
      <p>
        LiDAR'sız iPhone'larda (iPhone Xs'ten standart iPhone 14'e, standart iPhone
        15/16/17), derinlik kamera hareketinden ve paralakstan
        <strong> çıkarsanır</strong>. Telefonu hareket ettirdikçe, uzaydaki aynı
        nokta kamera karesinde kayar; bu görünür kayma, yazılıma o noktanın ne kadar
        uzakta olduğunu söyler.
      </p>
      <p>
        Buna "görsel-ataletsel odometri" (VIO) denir. Şunlara ihtiyaç duyar:
      </p>
      <ul>
        <li>Sahnede görünür doku (boş beyaz bir duvarın hiçbir özelliği yoktur)</li>
        <li>İyi aydınlatma (kamera deklanşörü net kareler yakalamalıdır)</li>
        <li>Hareket (hesabın işlemesi için telefonu hareket ettirmeniz gerekir)</li>
        <li>Başlatmadan sonra yakınsamak için ~3 saniye</li>
      </ul>
      <p>
        Akıllıca bir yöntem, işe yarıyor, ama kırılgan. Yansıtıcı yüzeyler, loş
        odalar ve sabit duran bir telefonun tümü onu bozar.
      </p>

      <h2>LiDAR varken neler değişir</h2>
      <table>
        <thead>
          <tr><th>Davranış</th><th>LiDAR olmadan</th><th>LiDAR ile</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>AR oturumu başlatma süresi</td>
            <td>~3-5 saniye (telefonu hareket ettirerek kalibre edin)</td>
            <td>~0,5 saniye (derinlik doğrudan okunur)</td>
          </tr>
          <tr>
            <td>Boş beyaz duvarlarda çalışır mı?</td>
            <td>Zorlanır, dokuya ihtiyaç duyar</td>
            <td>Evet, lazer görsel dokudan bağımsız olarak derinliği okur</td>
          </tr>
          <tr>
            <td>Zifiri karanlıkta çalışır mı?</td>
            <td>Hayır (kamera göremez)</td>
            <td>Evet (lazer kendi ışık kaynağıdır)</td>
          </tr>
          <tr>
            <td>3 m'de hassasiyet</td>
            <td>±15-25 mm</td>
            <td>±5-10 mm</td>
          </tr>
          <tr>
            <td>Ortamın 3D ağını yakalar mı?</td>
            <td>Hayır</td>
            <td>Evet, Apple'ın RoomPlan API'si bunu kullanır</td>
          </tr>
          <tr>
            <td>Mobilyaları / nesneleri otomatik algılar mı?</td>
            <td>Hayır</td>
            <td>Evet, kanepeler, yataklar, buzdolapları, kapılar, pencereler etiketlenir</td>
          </tr>
        </tbody>
      </table>

      <h2>Bunun ölçüm uygulamaları için anlamı</h2>
      <p>
        Üç somut fark:
      </p>
      <ol>
        <li>
          <strong>RoomPlan taraması.</strong> Apple'ın RoomPlan çerçevesi (Ruler
          AR'ın oda taramaları için kullandığı) yalnızca LiDAR'lı cihazlarda
          çalışır. 60-90 saniyelik bir yürüyüşle odanın eksiksiz bir 3D modelini —
          duvarlar, pencereler, kapılar, mobilyalar — yakalar. LiDAR yoksa RoomPlan
          da yok.
        </li>
        <li>
          <strong>Boş duvara dokunma hassasiyeti.</strong> Kameranızı özelliksiz
          beyaz bir duvara doğrultup ölçmek için dokunduğunuzda, LiDAR olmadan
          uygulama düzlemin yerini başka yerlerde algılanan kenarlara dayanarak
          tahmin eder. LiDAR ile dokunduğunuz tam pikseldeki gerçek derinliği okur.
          Bu fark, uzun duvarlarda ±2-3 cm'lik bir kayma olarak ortaya çıkar.
        </li>
        <li>
          <strong>Hız.</strong> Uygulamayı sıfırdan başlatın ve hemen bir şeye
          doğrultun. LiDAR'sız: AR'ın yakınsaması için 3-5 saniye bekleyin. LiDAR'lı:
          0,5 saniyede okur. Bir keşifte 20 ölçüm yapan bir ustabaşı için bu, ziyaret
          başına 60 saniyeden fazla tasarruf demektir.
        </li>
      </ol>

      <h2>Hangi iPhone'larda LiDAR var</h2>
      <ul>
        <li>iPhone 12 Pro / 12 Pro Max</li>
        <li>iPhone 13 Pro / 13 Pro Max</li>
        <li>iPhone 14 Pro / 14 Pro Max</li>
        <li>iPhone 15 Pro / 15 Pro Max</li>
        <li>iPhone 16 Pro / 16 Pro Max</li>
        <li>iPhone 17 Pro / 17 Pro Max</li>
        <li>iPad Pro (4. nesil, 2020) ve sonrası</li>
        <li>iPad Air (M2, 2024) ve sonrası</li>
      </ul>
      <p>
        Standart (Pro olmayan) iPhone'larda LiDAR yoktur. Apple bunun bilinçli
        olduğunu ima etti — LiDAR bir "Pro" farklılaştırıcısıdır. LiDAR'ın standart
        iPhone'lara geleceğine dair hiçbir duyuru yok.
      </p>

      <h2>LiDAR'ınız yoksa yine de neler yapabilirsiniz?</h2>
      <p>
        Otomatik 3D oda taraması dışında neredeyse her şey. Kamera tabanlı AR ölçümü
        mesafe, yükseklik, alan ve açılar için hâlâ çalışır. Manuel Oda Oluşturucu,
        çevreyi yürüyerek ve köşelere dokunarak kat planları oluşturmanıza olanak
        tanır; LiDAR gerekmez ve ortaya çıkan plan 2D'de bir LiDAR taraması kadar
        hassastır.
      </p>
      <p>
        Ruler AR ücretsiz sürümü, Xs'ten itibaren tüm iPhone'larda tam özelliklidir.
        LiDAR hızı ve 3D taramayı ekler, ancak temel ölçüm iş akışı donanımdan
        bağımsızdır.
      </p>

      <h2>Gelecek</h2>
      <p>
        Apple'ın 2024 patentleri, tam vücut 3D taraması ve AR fitness uygulamaları
        için LiDAR'ı ön kamerayla (TrueDepth sensörü) birleştirme çalışmalarına işaret
        ediyor. Ölçüm için, daha uzun menzillerde daha sıkı hassasiyet ve muhtemelen
        açık hava LiDAR'ı (şu anda güneş ışığı nedeniyle ~3 m ile sınırlı) bekleyin.
        Şimdilik: ölçüm yaparak geçiniyorsanız, Pro modeller fiyat farkını birkaç ay
        profesyonel kullanımla geri öder.
      </p>
    </article>
  );
}

export function PostAR() {
  return (
    <article className="prose-content">
      <p className="lead">
        أضافت Apple مستشعر LiDAR إلى طرازات iPhone Pro في عام 2020 وإلى كل iPad Pro
        منذ عام 2020. إنه المربع الأسود الصغير بجوار عدسات الكاميرا الخلفية. تسميه
        النصوص التسويقية "ماسح Lidar". لكنه من الناحية التقنية
        <em> مستشعر عمق مباشر يعمل بزمن الطيران</em>. إليك ما يفعله فعليًا، ولماذا
        يصبح ARKit أسرع وأدق بكثير عند وجوده، وأي مهام القياس تتغير بسببه.
      </p>

      <h2>ما هو LiDAR في الحقيقة</h2>
      <p>
        LiDAR هو اختصار لـ "Light Detection and Ranging" (الكشف وقياس المسافة
        باستخدام الضوء). يُطلق المستشعر نبضة ليزر بالأشعة تحت الحمراء غير مرئية، ثم
        يقيس المدة التي تستغرقها النبضة للارتداد عائدة. اضرب زمن الذهاب والعودة هذا
        في نصف سرعة الضوء، فتحصل على المسافة إلى ما اصطدمت به النبضة.
      </p>
      <p>
        يُطلق LiDAR في iPhone <strong>576 نبضة في وقت واحد بنمط شبكي</strong>، 30
        مرة في الثانية. وهذا يمنحك خريطة عمق من 576 نقطة في محيطك، تُحدَّث 30 مرة في
        الثانية، أي في جوهرها بثًا مرئيًا للعمق ثلاثي الأبعاد.
      </p>
      <p>
        المدى: نحو 5 أمتار في الداخل، و3 أمتار في الخارج (ضوء الشمس يُشبع المستشعر).
        الدقة: ±1 سم عند 1 م، وتزداد إلى ±5 سم عند 5 م.
      </p>

      <h2>ماذا يفعل الواقع المعزز دون LiDAR بدلًا من ذلك</h2>
      <p>
        في أجهزة iPhone بلا LiDAR (من iPhone Xs حتى iPhone 14 العادي، وiPhone
        15/16/17 العادي)، يُستنتَج العمق <strong>استنتاجًا</strong> من حركة الكاميرا
        واختلاف المنظر. عندما تحرّك الهاتف، تنزاح النقطة نفسها في الفضاء عبر إطار
        الكاميرا؛ هذا الانزياح الظاهري يُخبر البرنامج بمدى بُعد تلك النقطة.
      </p>
      <p>
        يُسمى هذا "قياس المسافة البصري بالقصور الذاتي" (VIO). وهو يحتاج إلى:
      </p>
      <ul>
        <li>نسيج مرئي في المشهد (الجدار الأبيض الفارغ لا توجد به أي ملامح)</li>
        <li>إضاءة جيدة (يجب أن تلتقط مصراع الكاميرا إطارات حادة)</li>
        <li>حركة (عليك تحريك الهاتف كي تعمل الحسابات)</li>
        <li>نحو 3 ثوانٍ للتقارب بعد التشغيل</li>
      </ul>
      <p>
        إنه ذكي وفعّال، لكنه هش. فالأسطح العاكسة والغرف المعتمة والهاتف الثابت كلها
        تُضعِف أداءه.
      </p>

      <h2>ما الذي يتغير عند وجود LiDAR</h2>
      <table>
        <thead>
          <tr><th>السلوك</th><th>دون LiDAR</th><th>مع LiDAR</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>زمن بدء جلسة الواقع المعزز</td>
            <td>نحو 3-5 ثوانٍ (المعايرة بتحريك الهاتف)</td>
            <td>نحو 0.5 ثانية (يُقرأ العمق مباشرة)</td>
          </tr>
          <tr>
            <td>هل يعمل على الجدران البيضاء الفارغة؟</td>
            <td>يتعثر، يحتاج إلى نسيج</td>
            <td>نعم، يقرأ الليزر العمق بصرف النظر عن النسيج المرئي</td>
          </tr>
          <tr>
            <td>هل يعمل في الظلام الدامس؟</td>
            <td>لا (الكاميرا لا ترى)</td>
            <td>نعم (الليزر مصدر ضوئه الخاص)</td>
          </tr>
          <tr>
            <td>الدقة عند 3 م</td>
            <td>±15-25 مم</td>
            <td>±5-10 مم</td>
          </tr>
          <tr>
            <td>هل يلتقط شبكة ثلاثية الأبعاد للمحيط؟</td>
            <td>لا</td>
            <td>نعم، تستخدمه واجهة RoomPlan من Apple</td>
          </tr>
          <tr>
            <td>هل يكتشف الأثاث / الأجسام تلقائيًا؟</td>
            <td>لا</td>
            <td>نعم، تُوسَم الأرائك والأسرّة والثلاجات والأبواب والنوافذ</td>
          </tr>
        </tbody>
      </table>

      <h2>ماذا يعني هذا لتطبيقات القياس</h2>
      <p>
        ثلاثة فروق ملموسة:
      </p>
      <ol>
        <li>
          <strong>مسح RoomPlan.</strong> إطار عمل RoomPlan من Apple (الذي يستخدمه
          Ruler AR لمسح الغرف) لا يعمل إلا على الأجهزة المزودة بـ LiDAR. فهو يلتقط
          نموذجًا ثلاثي الأبعاد كاملًا للغرفة — الجدران والنوافذ والأبواب والأثاث —
          خلال 60-90 ثانية من المشي. لا LiDAR، لا RoomPlan.
        </li>
        <li>
          <strong>الدقة عند النقر على جدار فارغ.</strong> عندما توجّه الكاميرا نحو
          جدار أبيض خالٍ من الملامح وتنقر للقياس، يخمّن التطبيق دون LiDAR موضع
          المستوى استنادًا إلى حواف مكتشَفة في مواضع أخرى. أما مع LiDAR فيقرأ العمق
          الفعلي عند البكسل ذاته الذي نقرت عليه. ويظهر الفارق في صورة انحراف بمقدار
          ±2-3 سم على الجدران الطويلة.
        </li>
        <li>
          <strong>السرعة.</strong> شغّل التطبيق من البداية ووجّهه نحو شيء ما فورًا.
          دون LiDAR: انتظر 3-5 ثوانٍ حتى يتقارب الواقع المعزز. مع LiDAR: قراءة في
          0.5 ثانية. وبالنسبة لمقاول يجري 20 قياسًا في معاينة واحدة، فهذا يوفّر أكثر
          من 60 ثانية لكل زيارة.
        </li>
      </ol>

      <h2>أي أجهزة iPhone تحتوي على LiDAR</h2>
      <ul>
        <li>iPhone 12 Pro / 12 Pro Max</li>
        <li>iPhone 13 Pro / 13 Pro Max</li>
        <li>iPhone 14 Pro / 14 Pro Max</li>
        <li>iPhone 15 Pro / 15 Pro Max</li>
        <li>iPhone 16 Pro / 16 Pro Max</li>
        <li>iPhone 17 Pro / 17 Pro Max</li>
        <li>iPad Pro (الجيل الرابع، 2020) وما بعده</li>
        <li>iPad Air (M2، 2024) وما بعده</li>
      </ul>
      <p>
        أجهزة iPhone العادية (غير Pro) لا تحتوي على LiDAR. وقد أشارت Apple إلى أن
        هذا مقصود — فـ LiDAR عنصر تمييز خاص بطرازات "Pro". ولا توجد أي إعلانات عن
        قدوم LiDAR إلى أجهزة iPhone العادية.
      </p>

      <h2>إذا لم يكن لديك LiDAR، فماذا لا يزال بإمكانك فعله؟</h2>
      <p>
        كل شيء تقريبًا باستثناء المسح ثلاثي الأبعاد التلقائي للغرفة. فالقياس بالواقع
        المعزز المعتمد على الكاميرا لا يزال يعمل للمسافة والارتفاع والمساحة والزوايا.
        ويتيح لك منشئ الغرف اليدوي بناء مخططات الطوابق بالمشي حول المحيط والنقر على
        الزوايا، دون الحاجة إلى LiDAR، ويكون المخطط الناتج دقيقًا في الأبعاد الثنائية
        تمامًا كمسح LiDAR.
      </p>
      <p>
        النسخة المجانية من Ruler AR كاملة الميزات على جميع أجهزة iPhone بدءًا من Xs
        فصاعدًا. يضيف LiDAR السرعة والمسح ثلاثي الأبعاد، لكن سير عمل القياس الأساسي
        لا يعتمد على العتاد.
      </p>

      <h2>المستقبل</h2>
      <p>
        تشير براءات اختراع Apple لعام 2024 إلى عمل على الجمع بين LiDAR والكاميرا
        الأمامية (مستشعر TrueDepth) للمسح ثلاثي الأبعاد للجسم كاملًا وتطبيقات اللياقة
        بالواقع المعزز. أما للقياس، فتوقّع دقة أعلى على مسافات أطول، وربما LiDAR
        للأماكن الخارجية (المحدود حاليًا بنحو 3 م بسبب ضوء الشمس). أما الآن: إذا كنت
        تقيس لكسب رزقك، فإن طرازات Pro تسترد فارق السعر خلال أشهر قليلة من الاستخدام
        الاحترافي.
      </p>
    </article>
  );
}

export const bodies = {
  ru: PostRU, de: PostDE, fr: PostFR, es: PostES, ja: PostJA, ko: PostKO,
  'zh-Hans': PostZH, 'pt-BR': PostPT, it: PostIT, pl: PostPL, tr: PostTR, ar: PostAR
};
