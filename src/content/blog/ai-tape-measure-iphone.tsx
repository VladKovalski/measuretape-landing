import type { PostMeta } from './posts';

export const meta: PostMeta = {
  slug: 'ai-tape-measure-iphone',
  date: '2026-11-08',
  readingTimeMin: 4,
  keywords:
    'ai tape measure, ai ruler, ai measuring tape, ai ruler camera, tape measure ai, iphone measuring app',
  tags: ['Explainer', 'AR'],
  title: {
    en: 'AI Tape Measure on iPhone: What the AI Actually Does',
    ru: "AI-рулетка на iPhone: что на самом деле делает AI",
    de: "KI-Maßband fürs iPhone: Was die KI wirklich tut",
    fr: "Mètre ruban IA sur iPhone : ce que fait l'IA",
    es: "Cinta métrica con IA en iPhone: qué hace la IA",
    ja: "iPhoneのメジャーアプリ：AIは何をしているか",
    ko: "아이폰 줄자 앱: AI가 실제로 하는 일",
    "zh-Hans": "iPhone 测量 App：AI 到底做了什么",
    "pt-BR": "Trena com IA no iPhone: o que a IA faz de fato",
    it: "Metro con IA su iPhone: cosa fa davvero l'IA",
    pl: "Miarka iPhone z AI: co naprawdę robi AI",
    tr: "iPhone'da yapay zekâlı metre: YZ ne yapıyor",
    ar: "تطبيق متر قياس للآيفون: ماذا يفعل الذكاء الاصطناعي"
  },
  excerpt: {
    en: 'AI ruler apps do not guess a length from a photo. Here is what the AI does on an iPhone, how close the numbers get, and when to use a real tape.',
    ru: "AI-рулетки не угадывают длину по фото. Что AI делает на iPhone, насколько точны замеры и когда нужна обычная рулетка.",
    de: "Messen mit iPhone: KI-Maßband-Apps raten keine Länge aus einem Foto. Was die KI leistet, wie genau die Werte sind und wann ein echtes Maßband besser ist.",
    fr: "Pour mesurer avec iPhone, les apps de mètre IA ne devinent pas la longueur sur photo. Ce que fait l'IA, sa précision et quand prendre un vrai mètre.",
    es: "Para medir con iPhone, las apps con IA no adivinan la longitud por una foto. Qué hace la IA, qué precisión tiene y cuándo usar una cinta de verdad.",
    ja: "AIメジャーアプリは写真から長さを推測しません。iPhoneでAIが何をするか、誤差はどのくらいか、本物のメジャーを使う場面を説明します。",
    ko: "AI 줄자 앱은 사진만 보고 길이를 짐작하지 않습니다. 아이폰에서 AI가 하는 일, 오차 정도, 실제 줄자를 써야 할 때를 설명합니다.",
    "zh-Hans": "AI 卷尺应用不是看照片猜长度。本文说明 iPhone 上的 AI 做了什么、数字能准到什么程度，以及什么时候该用真卷尺。",
    "pt-BR": "Apps de trena com IA não adivinham o comprimento por uma foto. Veja o que a IA faz no iPhone, a margem de erro e quando usar uma trena de verdade.",
    it: "Le app metro con IA non indovinano la lunghezza da una foto. Cosa fa l'IA su iPhone, quanto si avvicinano i numeri e quando usare un metro vero.",
    pl: "Aplikacje-miarki z AI nie zgadują długości ze zdjęcia. Co robi AI w iPhonie, jak blisko prawdy są wyniki i kiedy sięgnąć po prawdziwą miarkę.",
    tr: "Yapay zekâlı metre uygulamaları uzunluğu fotoğraftan tahmin etmez. iPhone'da YZ'nin ne yaptığı, sayıların ne kadar yaklaştığı ve gerçek metrenin yeri.",
    ar: "تطبيقات المتر بالذكاء الاصطناعي لا تخمّن الطول من صورة. إليك ما يفعله الذكاء الاصطناعي على الآيفون، وما دقة الأرقام، ومتى تستخدم متر قياس حقيقيًا."
  }
};

export default function Post() {
  return (
    <article className="prose-content">
      <p className="lead">
        Search the App Store for a tape measure and half the apps say AI. That
        word covers a few different things, and only some of them affect the
        number on your screen.
      </p>

      <h2>Where the number comes from</h2>
      <p>
        An iPhone measuring app does not look at a picture and guess. It uses
        Apple's ARKit, which combines the camera with the motion sensors to work
        out where the phone is in the room. When you tap two points, the app
        finds where those points sit in 3D and calculates the distance between
        them.
      </p>
      <p>
        That is geometry, not guesswork. On an iPhone with LiDAR, a depth sensor
        adds direct distance readings, so the position of each point is more
        reliable.
      </p>

      <h2>Where machine learning does help</h2>
      <ul>
        <li>
          <strong>Finding surfaces.</strong> The software spots floors, walls and
          tables so your tap lands on the real surface.
        </li>
        <li>
          <strong>Recognizing a room.</strong> Apple's RoomPlan identifies walls,
          doors, windows and furniture during a LiDAR scan and labels them on the
          plan.
        </li>
        <li>
          <strong>Ignoring bad readings.</strong> Tracking gets shaky in poor
          light or on blank walls. Good apps warn you instead of showing a wrong
          number.
        </li>
      </ul>

      <h2>How close it gets</h2>
      <p>
        Indoors, in good light and within about 5 metres, expect to be within a
        couple of centimetres. LiDAR models tend to do better. Results get worse
        on plain white walls, shiny surfaces, long distances and in the dark.
      </p>
      <p>
        That is fine for checking whether a sofa fits or working out how much
        paint to buy. If you are about to cut a worktop, measure it again with a
        real tape.
      </p>

      <h2>How to get a better result</h2>
      <ul>
        <li>Move the phone around for a few seconds before your first tap.</li>
        <li>Turn on the lights, or use the flashlight in a dim room.</li>
        <li>Hold the phone close to each point when you tap it.</li>
        <li>Measure twice. If the numbers differ, take a third reading.</li>
      </ul>

      <h2>Should you pay for an AI ruler?</h2>
      <p>
        For a quick length, you may not need to. Apple's built-in Measure app is
        free and handles simple jobs. A separate app earns its place when you
        want saved measurements, angles, area, or a floor plan.
      </p>
      <p>
        Ruler AR is free to download, and length, area, angles and the bubble
        level work without paying. Room scans, height and plan export may need a
        subscription.
      </p>
    </article>
  );
}

export function PostRU() {
  return (
    <article className="prose-content">
      <p className="lead">
        Откройте App Store и поищите рулетку: половина приложений называет себя
        AI. Под этим словом скрывается несколько разных вещей, и лишь часть из
        них влияет на число на экране.
      </p>

      <h2>Откуда берётся число</h2>
      <p>
        Приложение для измерений на iPhone не смотрит на картинку и не гадает.
        Оно использует Apple ARKit: тот объединяет данные камеры и датчиков
        движения и определяет, где телефон находится в комнате. Когда вы
        касаетесь двух точек, приложение находит их положение в 3D и считает
        расстояние между ними.
      </p>
      <p>
        Это геометрия, а не догадки. На iPhone с LiDAR датчик глубины добавляет
        прямые измерения расстояния, поэтому положение каждой точки определяется
        надёжнее.
      </p>

      <h2>Где помогает машинное обучение</h2>
      <ul>
        <li>
          <strong>Поиск поверхностей.</strong> Программа находит пол, стены и
          столы, чтобы ваше касание попало на настоящую поверхность.
        </li>
        <li>
          <strong>Распознавание комнаты.</strong> Apple RoomPlan определяет
          стены, двери, окна и мебель во время LiDAR-скана и подписывает их на
          плане.
        </li>
        <li>
          <strong>Отсев плохих данных.</strong> При слабом свете или на пустых
          стенах трекинг становится нестабильным. Хорошие приложения
          предупреждают об этом, а не показывают неверное число.
        </li>
      </ul>

      <h2>Насколько это точно</h2>
      <p>
        В помещении, при хорошем свете и на расстоянии до 5 метров ждите
        погрешность в пару сантиметров. На моделях с LiDAR обычно лучше. Хуже
        результат на гладких белых стенах, блестящих поверхностях, больших
        расстояниях и в темноте.
      </p>
      <p>
        Чтобы проверить, встанет ли диван, или прикинуть, сколько нужно краски,
        этого хватает. Если собираетесь резать столешницу, перемерьте её
        настоящей рулеткой.
      </p>

      <h2>Как получить результат лучше</h2>
      <ul>
        <li>Несколько секунд поводите телефоном по комнате, прежде чем коснуться первой точки.</li>
        <li>Включите свет, а в тёмной комнате фонарик.</li>
        <li>Подносите телефон близко к каждой точке, когда касаетесь её.</li>
        <li>Мерьте дважды. Если числа расходятся, сделайте третий замер.</li>
      </ul>

      <h2>Стоит ли платить за AI-рулетку?</h2>
      <p>
        Для быстрого замера длины, возможно, не нужно. Встроенное приложение
        Apple «Рулетка» бесплатно и справляется с простыми задачами. Отдельное
        приложение оправдывает себя, когда нужны сохранённые замеры, углы,
        площадь или план этажа.
      </p>
      <p>
        Ruler AR можно скачать бесплатно, длина, площадь, углы и пузырьковый
        уровень работают без оплаты. Сканирование комнат, высота и экспорт плана
        могут требовать подписки.
      </p>
    </article>
  );
}

export function PostDE() {
  return (
    <article className="prose-content">
      <p className="lead">
        Wer im App Store nach einem Maßband sucht, sieht, dass sich die Hälfte
        der Apps KI nennt. Das Wort steht für mehrere Dinge, und nur einige
        davon beeinflussen die Zahl auf deinem Display.
      </p>

      <h2>Woher die Zahl kommt</h2>
      <p>
        Eine Mess-App für das iPhone schaut nicht auf ein Bild und rät. Sie
        nutzt Apples ARKit, das die Kamera mit den Bewegungssensoren verbindet
        und so ermittelt, wo sich das Telefon im Raum befindet. Wenn du zwei
        Punkte antippst, bestimmt die App deren Lage im 3D-Raum und berechnet den
        Abstand dazwischen.
      </p>
      <p>
        Das ist Geometrie, kein Raten. Bei einem iPhone mit LiDAR liefert ein
        Tiefensensor zusätzlich direkte Abstandswerte, sodass die Position jedes
        Punkts verlässlicher ist.
      </p>

      <h2>Wo maschinelles Lernen wirklich hilft</h2>
      <ul>
        <li>
          <strong>Flächen finden.</strong> Die Software erkennt Böden, Wände und
          Tische, damit dein Tipp auf der echten Oberfläche landet.
        </li>
        <li>
          <strong>Einen Raum erkennen.</strong> Apples RoomPlan erkennt bei einem
          LiDAR-Scan Wände, Türen, Fenster und Möbel und beschriftet sie im
          Plan.
        </li>
        <li>
          <strong>Schlechte Messwerte aussortieren.</strong> Bei wenig Licht
          oder auf leeren Wänden wird das Tracking unsicher. Gute Apps warnen
          dich, statt eine falsche Zahl anzuzeigen.
        </li>
      </ul>

      <h2>Wie genau es wird</h2>
      <p>
        In Innenräumen, bei gutem Licht und bis etwa 5 Meter darfst du eine
        Abweichung von ein paar Zentimetern erwarten. Modelle mit LiDAR schneiden
        meist besser ab. Schlechter wird es an glatten weißen Wänden, auf
        glänzenden Flächen, über große Entfernungen und im Dunkeln.
      </p>
      <p>
        Das reicht, um zu prüfen, ob ein Sofa passt, oder um die Farbmenge
        abzuschätzen. Wenn du gleich eine Arbeitsplatte zusägst, miss sie noch
        einmal mit einem echten Maßband nach.
      </p>

      <h2>So wird das Ergebnis besser</h2>
      <ul>
        <li>Bewege das Telefon ein paar Sekunden durch den Raum, bevor du den ersten Punkt antippst.</li>
        <li>Schalte das Licht ein oder nutze in einem dunklen Raum die Taschenlampe.</li>
        <li>Halte das Telefon nah an jeden Punkt, wenn du ihn antippst.</li>
        <li>Miss zweimal. Weichen die Werte ab, miss ein drittes Mal.</li>
      </ul>

      <h2>Lohnt sich eine KI-Maßband-App?</h2>
      <p>
        Für eine schnelle Länge brauchst du vielleicht keine. Apples
        eingebautes Maßband ist kostenlos und erledigt einfache Aufgaben. Eine
        eigene App lohnt sich, wenn du Messungen speichern, Winkel oder Flächen
        messen oder einen Grundriss erstellen willst.
      </p>
      <p>
        Ruler AR ist kostenlos zu laden, und Länge, Fläche, Winkel und
        Wasserwaage funktionieren ohne Bezahlung. Raumscans, Höhe und Plan-Export
        können ein Abo erfordern.
      </p>
    </article>
  );
}

export function PostFR() {
  return (
    <article className="prose-content">
      <p className="lead">
        Cherchez un mètre ruban dans l'App Store et la moitié des apps se disent
        dotées d'IA. Ce mot recouvre plusieurs choses différentes, et seules
        certaines influencent le chiffre affiché à l'écran.
      </p>

      <h2>D'où vient le chiffre</h2>
      <p>
        Une app de mesure pour iPhone ne regarde pas une image pour deviner. Elle
        s'appuie sur ARKit d'Apple, qui combine la caméra et les capteurs de
        mouvement pour savoir où se trouve le téléphone dans la pièce. Quand vous
        touchez deux points, l'app repère leur position en 3D et calcule la
        distance qui les sépare.
      </p>
      <p>
        C'est de la géométrie, pas de la devinette. Sur un iPhone avec LiDAR, un
        capteur de profondeur ajoute des mesures de distance directes, et la
        position de chaque point est donc plus fiable.
      </p>

      <h2>Où l'apprentissage automatique aide vraiment</h2>
      <ul>
        <li>
          <strong>Trouver les surfaces.</strong> Le logiciel repère les sols, les
          murs et les tables pour que votre touche tombe sur la vraie surface.
        </li>
        <li>
          <strong>Reconnaître une pièce.</strong> RoomPlan d'Apple identifie les
          murs, les portes, les fenêtres et les meubles pendant un scan LiDAR et
          les nomme sur le plan.
        </li>
        <li>
          <strong>Écarter les mauvaises mesures.</strong> Le suivi devient
          instable avec peu de lumière ou sur des murs unis. Les bonnes apps vous
          avertissent au lieu d'afficher un chiffre faux.
        </li>
      </ul>

      <h2>Quelle précision attendre</h2>
      <p>
        En intérieur, avec une bonne lumière et jusqu'à environ 5 mètres,
        attendez-vous à quelques centimètres d'écart. Les modèles avec LiDAR font
        en général mieux. Les résultats se dégradent sur les murs blancs unis, les
        surfaces brillantes, les longues distances et dans le noir.
      </p>
      <p>
        C'est suffisant pour vérifier qu'un canapé passe ou pour estimer la
        quantité de peinture. Si vous allez découper un plan de travail, mesurez
        de nouveau avec un vrai mètre.
      </p>

      <h2>Comment obtenir un meilleur résultat</h2>
      <ul>
        <li>Déplacez le téléphone dans la pièce pendant quelques secondes avant de toucher le premier point.</li>
        <li>Allumez la lumière, ou la lampe torche dans une pièce sombre.</li>
        <li>Tenez le téléphone près de chaque point quand vous le touchez.</li>
        <li>Mesurez deux fois. Si les chiffres diffèrent, faites une troisième mesure.</li>
      </ul>

      <h2>Faut-il payer pour un mètre IA ?</h2>
      <p>
        Pour une longueur rapide, peut-être pas. L'app Mesures intégrée d'Apple
        est gratuite et suffit pour les cas simples. Une app séparée se justifie
        quand vous voulez enregistrer vos mesures, relever des angles ou des
        surfaces, ou obtenir un plan.
      </p>
      <p>
        Ruler AR se télécharge gratuitement, et la longueur, la surface, les
        angles et le niveau à bulle fonctionnent sans payer. Les scans de pièce,
        la hauteur et l'export du plan peuvent nécessiter un abonnement.
      </p>
    </article>
  );
}

export function PostES() {
  return (
    <article className="prose-content">
      <p className="lead">
        Busca una cinta métrica en la App Store y la mitad de las apps dicen
        llevar IA. Esa palabra abarca varias cosas distintas, y solo algunas
        afectan al número que ves en pantalla.
      </p>

      <h2>De dónde sale el número</h2>
      <p>
        Una app de medición para iPhone no mira una imagen y adivina. Usa ARKit
        de Apple, que combina la cámara con los sensores de movimiento para saber
        dónde está el teléfono en la habitación. Cuando tocas dos puntos, la app
        calcula dónde están en 3D y mide la distancia entre ellos.
      </p>
      <p>
        Eso es geometría, no suposiciones. En un iPhone con LiDAR, un sensor de
        profundidad aporta lecturas directas de distancia, así que la posición de
        cada punto es más fiable.
      </p>

      <h2>Dónde ayuda de verdad el aprendizaje automático</h2>
      <ul>
        <li>
          <strong>Encontrar superficies.</strong> El software detecta suelos,
          paredes y mesas para que tu toque caiga sobre la superficie real.
        </li>
        <li>
          <strong>Reconocer una habitación.</strong> RoomPlan de Apple identifica
          paredes, puertas, ventanas y muebles durante un escaneo LiDAR y los
          etiqueta en el plano.
        </li>
        <li>
          <strong>Descartar lecturas malas.</strong> El seguimiento se vuelve
          inestable con poca luz o ante paredes lisas. Las buenas apps te avisan
          en lugar de mostrar un número equivocado.
        </li>
      </ul>

      <h2>Qué precisión tiene</h2>
      <p>
        En interiores, con buena luz y hasta unos 5 metros, espera un error de un
        par de centímetros. Los modelos con LiDAR suelen funcionar mejor. Los
        resultados empeoran con paredes blancas lisas, superficies brillantes,
        distancias largas y a oscuras.
      </p>
      <p>
        Es suficiente para ver si cabe un sofá o calcular cuánta pintura comprar.
        Si vas a cortar una encimera, vuelve a medirla con una cinta métrica de
        verdad.
      </p>

      <h2>Cómo conseguir un mejor resultado</h2>
      <ul>
        <li>Mueve el teléfono por la habitación unos segundos antes de tocar el primer punto.</li>
        <li>Enciende la luz, o usa la linterna en una habitación oscura.</li>
        <li>Acerca el teléfono a cada punto cuando lo toques.</li>
        <li>Mide dos veces. Si los números difieren, haz una tercera medición.</li>
      </ul>

      <h2>¿Merece la pena pagar por una cinta con IA?</h2>
      <p>
        Para una longitud rápida, quizá no haga falta. La app Medidas integrada
        de Apple es gratis y resuelve lo sencillo. Una app aparte compensa cuando
        quieres guardar medidas, medir ángulos o áreas, u obtener un plano.
      </p>
      <p>
        Ruler AR es gratis de descargar, y la longitud, el área, los ángulos y el
        nivel de burbuja funcionan sin pagar. Los escaneos de habitaciones, la
        altura y la exportación del plano pueden requerir una suscripción.
      </p>
    </article>
  );
}

export function PostJA() {
  return (
    <article className="prose-content">
      <p className="lead">
        App Storeでメジャーアプリを探すと、約半数のアプリが「AI」をうたっています。この言葉はいくつかの違うものを指していて、画面に出る数字に関わるのはその一部だけです。
      </p>

      <h2>数字はどこから来るのか</h2>
      <p>
        iPhoneの計測アプリは、写真を見て長さを推測するわけではありません。AppleのARKitを使い、カメラとモーションセンサーを組み合わせて、部屋の中でiPhoneがどこにあるかを割り出します。2つの点をタップすると、アプリはその点が3D空間のどこにあるかを求め、間の距離を計算します。
      </p>
      <p>
        これは推測ではなく幾何学です。LiDAR搭載のiPhoneでは、深度センサーが距離を直接読み取るため、各点の位置がより確実になります。
      </p>

      <h2>機械学習が役立つ場面</h2>
      <ul>
        <li>
          <strong>面の検出。</strong>床、壁、テーブルを見つけるので、タップした場所が実際の面に乗ります。
        </li>
        <li>
          <strong>部屋の認識。</strong>AppleのRoomPlanは、LiDARスキャン中に壁、ドア、窓、家具を識別し、間取り図にラベルを付けます。
        </li>
        <li>
          <strong>不正確な読み取りの除外。</strong>暗い場所や何もない壁ではトラッキングが不安定になります。よくできたアプリは、間違った数字を出す代わりに警告します。
        </li>
      </ul>

      <h2>どこまで近づけるか</h2>
      <p>
        室内で、明るく、5メートル以内なら、誤差は数センチ程度と考えてください。LiDAR搭載モデルのほうが良い傾向があります。真っ白な壁、光沢のある面、長い距離、暗い場所では精度が落ちます。
      </p>
      <p>
        ソファが入るか確かめたり、塗料の量を見積もったりするには十分です。カウンタートップを切る前には、本物のメジャーでもう一度測ってください。
      </p>

      <h2>精度を上げるには</h2>
      <ul>
        <li>最初のタップの前に、数秒間iPhoneを動かして周りを読み込ませる。</li>
        <li>照明をつける。暗い部屋ではライトを使う。</li>
        <li>各点をタップするときは、iPhoneをその点に近づける。</li>
        <li>2回測る。数字が違ったら、3回目を測る。</li>
      </ul>

      <h2>AIメジャーにお金を払うべきか</h2>
      <p>
        ちょっと長さを測るだけなら、必要ないかもしれません。Apple標準の「計測」アプリは無料で、簡単な作業ならこなせます。測定の保存、角度、面積、間取り図が必要になったら、別のアプリの出番です。
      </p>
      <p>
        Ruler ARはダウンロード無料で、長さ、面積、角度、水準器は料金なしで使えます。部屋のスキャン、高さ、間取り図の書き出しには、サブスクリプションが必要な場合があります。
      </p>
    </article>
  );
}

export function PostKO() {
  return (
    <article className="prose-content">
      <p className="lead">
        App Store에서 줄자 앱을 찾아보면 절반쯤은 AI라고 적혀 있습니다. 이 말은 서로 다른 여러 가지를 가리키고, 화면에 나오는 숫자에 영향을 주는 것은 그중 일부뿐입니다.
      </p>

      <h2>숫자는 어디서 나올까</h2>
      <p>
        아이폰 측정 앱은 사진을 보고 길이를 짐작하지 않습니다. Apple의 ARKit으로 카메라와 모션 센서를 합쳐 폰이 방 안 어디에 있는지 파악합니다. 두 점을 탭하면 앱이 그 점들이 3D 공간의 어디에 있는지 찾아 사이의 거리를 계산합니다.
      </p>
      <p>
        이것은 짐작이 아니라 기하학입니다. LiDAR가 있는 아이폰에서는 깊이 센서가 거리를 직접 읽어 주므로 각 점의 위치가 더 믿을 만합니다.
      </p>

      <h2>머신러닝이 도움이 되는 부분</h2>
      <ul>
        <li>
          <strong>면 찾기.</strong> 바닥, 벽, 탁자를 찾아서 탭한 곳이 실제 표면에 놓이게 합니다.
        </li>
        <li>
          <strong>방 인식.</strong> Apple의 RoomPlan은 LiDAR 스캔 중에 벽, 문, 창문, 가구를 알아보고 도면에 표시합니다.
        </li>
        <li>
          <strong>잘못된 값 걸러내기.</strong> 조명이 어둡거나 벽이 밋밋하면 추적이 불안정해집니다. 좋은 앱은 틀린 숫자를 보여 주는 대신 경고를 띄웁니다.
        </li>
      </ul>

      <h2>얼마나 정확할까</h2>
      <p>
        실내에서 밝은 조명, 약 5미터 이내라면 몇 센티미터 안팎의 오차를 예상하세요. LiDAR 모델이 대체로 더 낫습니다. 무늬 없는 흰 벽, 반짝이는 표면, 먼 거리, 어두운 곳에서는 결과가 나빠집니다.
      </p>
      <p>
        소파가 들어갈지 보거나 페인트를 얼마나 살지 계산하기에는 충분합니다. 작업대 상판을 자르기 직전이라면 실제 줄자로 다시 재세요.
      </p>

      <h2>더 정확하게 재려면</h2>
      <ul>
        <li>첫 탭 전에 몇 초 동안 폰을 움직여 주변을 인식시키세요.</li>
        <li>불을 켜거나, 어두운 방에서는 손전등을 쓰세요.</li>
        <li>각 점을 탭할 때는 폰을 그 점 가까이에 두세요.</li>
        <li>두 번 재세요. 숫자가 다르면 한 번 더 재세요.</li>
      </ul>

      <h2>AI 줄자에 돈을 내야 할까</h2>
      <p>
        길이 하나만 빨리 재려면 필요 없을 수 있습니다. Apple의 기본 측정 앱은 무료이고 간단한 일은 해냅니다. 측정값 저장, 각도, 면적, 도면이 필요해지면 별도 앱이 제값을 합니다.
      </p>
      <p>
        Ruler AR은 다운로드가 무료이고, 길이, 면적, 각도, 수평계는 결제 없이 쓸 수 있습니다. 방 스캔, 높이, 도면 내보내기는 구독이 필요할 수 있습니다.
      </p>
    </article>
  );
}

export function PostZH() {
  return (
    <article className="prose-content">
      <p className="lead">
        在 App Store 搜卷尺，一半的应用都写着 AI。这个词其实指好几种不同的东西，真正影响屏幕上那个数字的只是其中一部分。
      </p>

      <h2>数字是怎么来的</h2>
      <p>
        iPhone 上的测量应用并不是看着照片猜长度。它用 Apple 的 ARKit，把相机和运动传感器结合起来，算出手机在房间里的位置。你点击两个点，应用就找出这两个点在 3D 空间中的位置，再算出它们之间的距离。
      </p>
      <p>
        这是几何计算，不是猜测。在带 LiDAR 的 iPhone 上，深度传感器会直接读取距离，每个点的位置更可靠。
      </p>

      <h2>机器学习真正帮上忙的地方</h2>
      <ul>
        <li>
          <strong>识别表面。</strong>软件能认出地板、墙和桌面，让你点击的位置落在真实的表面上。
        </li>
        <li>
          <strong>识别房间。</strong>Apple 的 RoomPlan 会在 LiDAR 扫描时识别墙、门、窗和家具，并在户型图上标注。
        </li>
        <li>
          <strong>忽略不可靠的读数。</strong>光线差或墙面空白时，追踪会不稳。好的应用会提醒你，而不是给出一个错误的数字。
        </li>
      </ul>

      <h2>能准到什么程度</h2>
      <p>
        在室内、光线好、5 米左右以内，误差大约在几厘米以内。带 LiDAR 的机型往往更好。白墙、反光表面、距离太远或光线太暗时，结果会变差。
      </p>
      <p>
        用来看沙发放不放得下，或者估算要买多少油漆，这样足够了。如果马上要切台面，请再用真正的卷尺量一遍。
      </p>

      <h2>怎样量得更准</h2>
      <ul>
        <li>第一次点击前，先把手机移动几秒钟。</li>
        <li>把灯打开，房间太暗就用手电筒。</li>
        <li>点击每个点时，让手机靠近那个点。</li>
        <li>量两次。如果两次不一样，再量第三次。</li>
      </ul>

      <h2>AI 卷尺值得付费吗</h2>
      <p>
        只是快速量个长度，可能不需要。Apple 自带的「测距仪」应用免费，简单的活够用。需要保存测量结果、测角度、测面积或生成户型图时，另装一个应用才有意义。
      </p>
      <p>
        Ruler AR 可以免费下载，长度、面积、角度和水平仪不用付费。房间扫描、高度测量和户型图导出可能需要订阅。
      </p>
    </article>
  );
}

export function PostPT() {
  return (
    <article className="prose-content">
      <p className="lead">
        Procure trena na App Store e metade dos apps diz que usa IA. A palavra
        cobre coisas bem diferentes, e só algumas delas afetam o número que
        aparece na sua tela.
      </p>

      <h2>De onde vem o número</h2>
      <p>
        Um app de medição para iPhone não olha uma imagem e chuta. Ele usa o
        ARKit, da Apple, que combina a câmera com os sensores de movimento para
        descobrir onde o celular está no ambiente. Quando você toca em dois
        pontos, o app encontra a posição de cada um em 3D e calcula a distância
        entre eles.
      </p>
      <p>
        Isso é geometria, não palpite. Em um iPhone com LiDAR, um sensor de
        profundidade acrescenta leituras diretas de distância, e a posição de
        cada ponto fica mais confiável.
      </p>

      <h2>Onde o aprendizado de máquina ajuda</h2>
      <ul>
        <li>
          <strong>Encontrar superfícies.</strong> O software identifica pisos,
          paredes e mesas para que o seu toque caia na superfície real.
        </li>
        <li>
          <strong>Reconhecer um cômodo.</strong> O RoomPlan, da Apple, identifica
          paredes, portas, janelas e móveis durante um escaneamento com LiDAR e
          os nomeia na planta.
        </li>
        <li>
          <strong>Ignorar leituras ruins.</strong> O rastreamento fica instável
          com pouca luz ou em paredes lisas. Bons apps avisam você em vez de
          mostrar um número errado.
        </li>
      </ul>

      <h2>Qual é a margem de erro</h2>
      <p>
        Em ambientes internos, com boa luz e a até cerca de 5 metros, espere um
        erro de uns poucos centímetros. Modelos com LiDAR costumam se sair
        melhor. O resultado piora em paredes brancas lisas, superfícies
        brilhantes, distâncias longas e no escuro.
      </p>
      <p>
        Isso basta para ver se um sofá cabe ou para calcular quanta tinta
        comprar. Se vai cortar uma bancada, meça de novo com uma trena de
        verdade.
      </p>

      <h2>Como conseguir um resultado melhor</h2>
      <ul>
        <li>Mova o celular por alguns segundos antes do primeiro toque.</li>
        <li>Acenda as luzes, ou use a lanterna em um cômodo escuro.</li>
        <li>Chegue com o celular perto de cada ponto na hora de tocar.</li>
        <li>Meça duas vezes. Se os números forem diferentes, faça uma terceira leitura.</li>
      </ul>

      <h2>Vale pagar por uma trena com IA?</h2>
      <p>
        Para uma medida rápida, talvez não. O app Medidas, que já vem no iPhone,
        é grátis e resolve o simples. Um app separado compensa quando você quer
        medidas salvas, ângulos, área ou uma planta baixa.
      </p>
      <p>
        O Ruler AR tem download grátis, e comprimento, área, ângulos e nível de
        bolha funcionam sem pagar. O escaneamento de cômodos, a altura e a
        exportação de plantas podem exigir assinatura.
      </p>
    </article>
  );
}

export function PostIT() {
  return (
    <article className="prose-content">
      <p className="lead">
        Cerca un metro sull'App Store e metà delle app dice di usare l'IA. La
        parola copre cose diverse, e solo alcune influiscono sul numero che
        vedi sullo schermo.
      </p>

      <h2>Da dove arriva il numero</h2>
      <p>
        Un'app di misura per iPhone non guarda una foto e tira a indovinare.
        Usa ARKit di Apple, che unisce la fotocamera e i sensori di movimento
        per capire dove si trova il telefono nella stanza. Quando tocchi due
        punti, l'app trova dove stanno in 3D e calcola la distanza tra loro.
      </p>
      <p>
        È geometria, non una stima a occhio. Su un iPhone con LiDAR, un sensore
        di profondità aggiunge letture dirette della distanza, quindi la
        posizione di ogni punto è più affidabile.
      </p>

      <h2>Dove aiuta il machine learning</h2>
      <ul>
        <li>
          <strong>Trovare le superfici.</strong> Il software riconosce pavimenti,
          pareti e tavoli, così il tocco cade sulla superficie reale.
        </li>
        <li>
          <strong>Riconoscere una stanza.</strong> RoomPlan di Apple identifica
          pareti, porte, finestre e mobili durante una scansione LiDAR e li
          etichetta sulla pianta.
        </li>
        <li>
          <strong>Scartare le letture sbagliate.</strong> Con poca luce o su
          pareti lisce il tracciamento diventa instabile. Le app fatte bene ti
          avvisano invece di mostrare un numero sbagliato.
        </li>
      </ul>

      <h2>Quanto si avvicina</h2>
      <p>
        In casa, con buona luce e fino a circa 5 metri, aspettati uno scarto di
        un paio di centimetri. I modelli con LiDAR tendono a fare meglio. I
        risultati peggiorano su pareti bianche lisce, superfici lucide, grandi
        distanze e al buio.
      </p>
      <p>
        Va bene per vedere se un divano ci sta o per calcolare quanta vernice
        comprare. Se stai per tagliare un piano di lavoro, misura di nuovo con
        un metro vero.
      </p>

      <h2>Come ottenere un risultato migliore</h2>
      <ul>
        <li>Muovi il telefono per qualche secondo prima del primo tocco.</li>
        <li>Accendi le luci, o usa la torcia in una stanza buia.</li>
        <li>Tieni il telefono vicino a ogni punto quando lo tocchi.</li>
        <li>Misura due volte. Se i numeri sono diversi, fai una terza lettura.</li>
      </ul>

      <h2>Vale la pena pagare per un metro con IA?</h2>
      <p>
        Per una misura veloce, forse no. L'app Metro già presente sull'iPhone è
        gratuita e basta per i lavori semplici. Un'app a parte ha senso quando
        vuoi misure salvate, angoli, area o una planimetria.
      </p>
      <p>
        Ruler AR si scarica gratis, e lunghezza, area, angoli e livella a bolla
        funzionano senza pagare. Scansione delle stanze, altezza ed esportazione
        delle piante potrebbero richiedere un abbonamento.
      </p>
    </article>
  );
}

export function PostPL() {
  return (
    <article className="prose-content">
      <p className="lead">
        Wpisz w App Store „miarka” i połowa aplikacji twierdzi, że ma AI. To
        słowo oznacza kilka różnych rzeczy i tylko część z nich wpływa na liczbę
        widoczną na ekranie.
      </p>

      <h2>Skąd bierze się wynik</h2>
      <p>
        Aplikacja do pomiarów na iPhone'a nie ogląda zdjęcia i nie zgaduje.
        Korzysta z ARKit od Apple, który łączy obraz z aparatu z czujnikami ruchu,
        by ustalić, gdzie w pomieszczeniu znajduje się telefon. Gdy dotykasz
        dwóch punktów, aplikacja ustala ich położenie w 3D i liczy odległość
        między nimi.
      </p>
      <p>
        To geometria, a nie zgadywanie. W iPhonie z LiDAR czujnik głębi dodaje
        bezpośrednie odczyty odległości, więc położenie każdego punktu jest
        pewniejsze.
      </p>

      <h2>Gdzie pomaga uczenie maszynowe</h2>
      <ul>
        <li>
          <strong>Rozpoznawanie powierzchni.</strong> Oprogramowanie wykrywa
          podłogi, ściany i stoły, żeby dotknięcie trafiło w prawdziwą
          powierzchnię.
        </li>
        <li>
          <strong>Rozpoznawanie pomieszczenia.</strong> RoomPlan od Apple
          wykrywa podczas skanu LiDAR ściany, drzwi, okna i meble i opisuje je
          na planie.
        </li>
        <li>
          <strong>Odrzucanie złych odczytów.</strong> Śledzenie traci stabilność
          przy słabym świetle i na gładkich ścianach. Dobre aplikacje ostrzegają,
          zamiast pokazywać błędną liczbę.
        </li>
      </ul>

      <h2>Jak blisko prawdy to jest</h2>
      <p>
        W pomieszczeniu, przy dobrym świetle i do około 5 metrów spodziewaj się
        błędu rzędu kilku centymetrów. Modele z LiDAR zwykle wypadają lepiej.
        Wynik pogarsza się na gładkich białych ścianach, błyszczących
        powierzchniach, przy dużych odległościach i po ciemku.
      </p>
      <p>
        To wystarczy, żeby sprawdzić, czy zmieści się kanapa, albo policzyć, ile
        kupić farby. Jeśli zaraz utniesz blat, zmierz go jeszcze raz prawdziwą
        miarką.
      </p>

      <h2>Jak uzyskać lepszy wynik</h2>
      <ul>
        <li>Przed pierwszym dotknięciem poruszaj telefonem przez kilka sekund.</li>
        <li>Zapal światło albo w ciemnym pokoju użyj latarki.</li>
        <li>Przy dotykaniu każdego punktu trzymaj telefon blisko niego.</li>
        <li>Mierz dwa razy. Jeśli liczby się różnią, zrób trzeci pomiar.</li>
      </ul>

      <h2>Czy warto płacić za miarkę z AI?</h2>
      <p>
        Przy szybkim pomiarze niekoniecznie. Wbudowana w iPhone'a aplikacja
        Miarka jest darmowa i radzi sobie z prostymi zadaniami. Osobna aplikacja
        się opłaca, gdy chcesz zapisywać pomiary, mierzyć kąty i powierzchnię
        albo robić plan pomieszczenia.
      </p>
      <p>
        Ruler AR można pobrać za darmo, a długość, powierzchnia, kąty i
        poziomica działają bez płacenia. Skanowanie pomieszczeń, wysokość i
        eksport planów mogą wymagać subskrypcji.
      </p>
    </article>
  );
}

export function PostTR() {
  return (
    <article className="prose-content">
      <p className="lead">
        App Store'da şerit metre arayın, uygulamaların yarısı yapay zekâ
        kullandığını söyler. Bu söz birkaç farklı şeyi kapsıyor ve yalnızca
        bazıları ekrandaki sayıyı etkiliyor.
      </p>

      <h2>Sayı nereden geliyor</h2>
      <p>
        iPhone için bir ölçüm uygulaması bir fotoğrafa bakıp tahmin yürütmez.
        Apple'ın ARKit'ini kullanır; ARKit kamerayı hareket sensörleriyle
        birleştirip telefonun odada nerede olduğunu bulur. İki noktaya
        dokunduğunuzda uygulama bu noktaların 3B'de nerede durduğunu bulur ve
        aralarındaki mesafeyi hesaplar.
      </p>
      <p>
        Bu geometridir, tahmin değil. LiDAR'lı bir iPhone'da derinlik sensörü
        doğrudan mesafe okumaları ekler, böylece her noktanın konumu daha
        güvenilir olur.
      </p>

      <h2>Makine öğrenmesi nerede işe yarıyor</h2>
      <ul>
        <li>
          <strong>Yüzeyleri bulmak.</strong> Yazılım zemin, duvar ve masaları
          fark eder; dokunuşunuz gerçek yüzeye denk gelir.
        </li>
        <li>
          <strong>Odayı tanımak.</strong> Apple'ın RoomPlan'ı LiDAR taraması
          sırasında duvarları, kapıları, pencereleri ve mobilyaları tanır ve
          planda etiketler.
        </li>
        <li>
          <strong>Kötü okumaları yok saymak.</strong> Az ışıkta veya düz
          duvarlarda takip kararsızlaşır. İyi uygulamalar yanlış sayı göstermek
          yerine sizi uyarır.
        </li>
      </ul>

      <h2>Ne kadar yaklaşıyor</h2>
      <p>
        İç mekanda, iyi ışıkta ve yaklaşık 5 metreye kadar birkaç santimetre
        sapma bekleyin. LiDAR'lı modeller genelde daha iyi sonuç verir. Düz
        beyaz duvarlarda, parlak yüzeylerde, uzun mesafelerde ve karanlıkta
        sonuçlar kötüleşir.
      </p>
      <p>
        Bir koltuğun sığıp sığmadığına bakmak ya da ne kadar boya alacağınızı
        hesaplamak için bu yeterli. Bir tezgâhı kesmek üzereyseniz gerçek bir
        metreyle tekrar ölçün.
      </p>

      <h2>Daha iyi sonuç nasıl alınır</h2>
      <ul>
        <li>İlk dokunuştan önce telefonu birkaç saniye etrafta gezdirin.</li>
        <li>Işıkları açın ya da loş odada el fenerini kullanın.</li>
        <li>Her noktaya dokunurken telefonu o noktaya yakın tutun.</li>
        <li>İki kez ölçün. Sayılar farklıysa üçüncü bir okuma yapın.</li>
      </ul>

      <h2>Yapay zekâlı metre için para vermeli mi</h2>
      <p>
        Hızlı bir uzunluk için gerekmeyebilir. Apple'ın yerleşik Ölçü uygulaması
        ücretsizdir ve basit işleri görür. Kayıtlı ölçümler, açı, alan ya da kat
        planı istediğinizde ayrı bir uygulama yerini hak eder.
      </p>
      <p>
        Ruler AR ücretsiz indirilir; uzunluk, alan, açı ve su terazisi ödeme
        yapmadan çalışır. Oda taraması, yükseklik ve plan dışa aktarma abonelik
        gerektirebilir.
      </p>
    </article>
  );
}

export function PostAR() {
  return (
    <article className="prose-content">
      <p className="lead">
        ابحث في App Store عن متر قياس وستجد أن نصف التطبيقات تقول إنها بالذكاء الاصطناعي. هذه الكلمة تشمل عدة أشياء مختلفة، ولا يؤثر في الرقم الذي تراه على الشاشة منها إلا بعضها.
      </p>

      <h2>من أين يأتي الرقم</h2>
      <p>
        تطبيق القياس على الآيفون لا ينظر إلى صورة ثم يخمّن. إنه يستخدم ARKit من Apple، الذي يجمع بين الكاميرا وحساسات الحركة ليعرف أين يقع الهاتف داخل الغرفة. عندما تنقر نقطتين، يحدد التطبيق موضعهما في الفضاء ثلاثي الأبعاد ويحسب المسافة بينهما.
      </p>
      <p>
        هذه هندسة وليست تخمينًا. وفي آيفون المزوّد بـ LiDAR يضيف حساس العمق قراءات مباشرة للمسافة، فيصبح موضع كل نقطة أوثق.
      </p>

      <h2>أين يفيد تعلّم الآلة فعلًا</h2>
      <ul>
        <li>
          <strong>إيجاد الأسطح.</strong> يتعرف البرنامج على الأرضيات والجدران والطاولات، فتقع نقرتك على السطح الحقيقي.
        </li>
        <li>
          <strong>التعرف على الغرفة.</strong> يحدد RoomPlan من Apple الجدران والأبواب والنوافذ والأثاث أثناء مسح LiDAR ويضع لها أسماء على المخطط.
        </li>
        <li>
          <strong>تجاهل القراءات السيئة.</strong> يصبح التتبع مضطربًا في الإضاءة الضعيفة أو أمام الجدران الخالية. التطبيقات الجيدة تنبّهك بدل أن تعرض رقمًا خاطئًا.
        </li>
      </ul>

      <h2>إلى أي مدى يقترب من الحقيقة</h2>
      <p>
        داخل المنزل، في إضاءة جيدة وعلى مسافة تصل إلى نحو 5 أمتار، توقّع فرقًا في حدود بضعة سنتيمترات. وتميل طرازات LiDAR إلى نتائج أفضل. تسوء النتائج على الجدران البيضاء الخالية من التفاصيل والأسطح اللامعة والمسافات الطويلة وفي الظلام.
      </p>
      <p>
        هذا كافٍ لمعرفة هل تتسع الأريكة أو لتقدير كمية الدهان. أما إذا كنت على وشك قطع سطح مطبخ، فقِسه مرة أخرى بمتر حقيقي.
      </p>

      <h2>كيف تحصل على نتيجة أفضل</h2>
      <ul>
        <li>حرّك الهاتف حولك بضع ثوانٍ قبل أول نقرة.</li>
        <li>شغّل الأضواء، أو استخدم المصباح في الغرفة المعتمة.</li>
        <li>قرّب الهاتف من كل نقطة عندما تنقرها.</li>
        <li>قِس مرتين. وإذا اختلف الرقمان فخذ قراءة ثالثة.</li>
      </ul>

      <h2>هل تدفع مقابل متر بالذكاء الاصطناعي؟</h2>
      <p>
        لقياس سريع للطول قد لا تحتاج إلى ذلك. تطبيق «قياس» المدمج من Apple مجاني ويؤدي المهام البسيطة. ويكون للتطبيق المنفصل مكانه حين تريد حفظ القياسات أو الزوايا أو المساحة أو مخطط غرفة.
      </p>
      <p>
        Ruler AR تنزيله مجاني، ويعمل الطول والمساحة والزوايا وميزان الماء دون دفع. وقد يتطلب مسح الغرف وقياس الارتفاع وتصدير المخطط اشتراكًا.
      </p>
    </article>
  );
}

export const bodies = {
  ru: PostRU, de: PostDE, fr: PostFR, es: PostES, ja: PostJA, ko: PostKO, 'zh-Hans': PostZH, 'pt-BR': PostPT, it: PostIT, pl: PostPL, tr: PostTR, ar: PostAR
};
