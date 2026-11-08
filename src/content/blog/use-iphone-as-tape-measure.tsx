import type { PostMeta } from './posts';

export const meta: PostMeta = {
  slug: 'use-iphone-as-tape-measure',
  date: '2026-11-08',
  readingTimeMin: 4,
  keywords:
    'iphone tape measure, measure with iphone, how to measure with iphone, iphone measuring app, measure something with iphone',
  tags: ['Tutorial', 'AR'],
  title: {
    en: 'How to Use Your iPhone as a Tape Measure',
    ru: "Как использовать iPhone как рулетку",
    de: "Messen mit iPhone: So nutzt du es als Maßband",
    fr: "Mesurer avec iPhone : l'utiliser comme mètre ruban",
    es: "Medir con iPhone: úsalo como cinta métrica",
    ja: "iPhoneをメジャーとして使う方法",
    ko: "아이폰을 줄자로 쓰는 방법",
    "zh-Hans": "如何把 iPhone 当卷尺用",
    "pt-BR": "Como medir com iPhone: use-o como trena",
    it: "Misurare con iPhone: usalo come metro",
    pl: "Miarka w iPhonie: jak zmierzyć iPhonem",
    tr: "iPhone ile ölçüm: iPhone'u metre gibi kullanın",
    ar: "كيف تستخدم الآيفون كمتر قياس"
  },
  excerpt: {
    en: 'You can measure with the iPhone you already have. Here is how to do it with Apple Measure or a separate app, and when a real tape is still the better choice.',
    ru: "Измерять можно iPhone, который уже есть. Как это сделать в приложении Apple «Рулетка» или в отдельном приложении и когда лучше взять настоящую рулетку.",
    de: "Du kannst mit dem iPhone messen, das du schon hast. So geht es mit Apples Maßband oder einer eigenen App, und wann ein echtes Maßband besser ist.",
    fr: "Vous pouvez mesurer avec l'iPhone que vous avez déjà. Comment faire avec l'app Mesures d'Apple ou une autre app, et quand prendre un vrai mètre.",
    es: "Puedes medir con el iPhone que ya tienes. Cómo hacerlo con la app Medidas de Apple u otra app, y cuándo sigue siendo mejor una cinta métrica de verdad.",
    ja: "手持ちのiPhoneで長さを測れます。Appleの計測アプリと別アプリでのやり方と、本物のメジャーが向く場面を紹介します。",
    ko: "지금 가진 아이폰으로 길이를 잴 수 있습니다. 측정 앱과 별도 앱으로 재는 방법, 실제 줄자가 나은 경우를 알려 드립니다.",
    "zh-Hans": "用你手上的 iPhone 就能测量。介绍用 Apple 测距仪或单独应用的方法，以及什么时候还是真卷尺更好。",
    "pt-BR": "Dá para medir com o iPhone que você já tem. Veja como usar o app Medidas ou um app à parte, e quando uma trena de verdade ainda é a melhor escolha.",
    it: "Puoi misurare con l'iPhone che hai già. Come fare con l'app Metro di Apple o con un'app a parte, e quando un metro vero resta la scelta migliore.",
    pl: "Zmierzysz coś iPhonem, który już masz. Jak to zrobić w aplikacji Miarka od Apple lub osobnej aplikacji i kiedy lepsza jest prawdziwa miarka.",
    tr: "Elinizdeki iPhone ile ölçüm yapabilirsiniz. Ölçü uygulamasıyla ya da ayrı bir uygulamayla nasıl yapılır ve gerçek metre ne zaman daha iyidir.",
    ar: "يمكنك القياس بالآيفون الذي في جيبك. إليك الطريقة بتطبيق «قياس» أو بتطبيق منفصل، ومتى يبقى المتر الحقيقي هو الأفضل."
  }
};

export default function Post() {
  return (
    <article className="prose-content">
      <p className="lead">
        The tape is in the garage and you only want to know whether the shelf
        fits. Your iPhone can give you a good answer in under a minute.
      </p>

      <h2>Option 1: Apple's Measure app</h2>
      <p>
        Every recent iPhone comes with Measure. It is free and needs no setup.
      </p>
      <ol>
        <li>Open Measure and move the phone around until it finds a surface.</li>
        <li>Point the dot at the start and tap the plus button.</li>
        <li>Move the dot to the end and tap the plus button again.</li>
        <li>Read the length on screen.</li>
      </ol>
      <p>
        For one quick measurement, this is often enough. It also has a basic
        level.
      </p>

      <h2>Option 2: A separate measuring app</h2>
      <p>
        A separate app makes sense when you measure often. Ruler AR works the
        same way as Measure, with a few additions:
      </p>
      <ul>
        <li>a history of everything you have measured</li>
        <li>area and angle tools</li>
        <li>centimetres, metres, inches or feet</li>
        <li>Touch Mode, which measures from the phone itself</li>
      </ul>
      <p>
        It is free to download, and length, area, angles and the bubble level
        work without paying. Room scans, height and plan export may need a
        subscription.
      </p>

      <h2>Tips for a number you can trust</h2>
      <ul>
        <li>
          <strong>Use good light.</strong> The phone tracks visible detail, so
          dark rooms and blank walls make it less sure of itself.
        </li>
        <li>
          <strong>Start close.</strong> Hold the phone near the first point
          before you tap.
        </li>
        <li>
          <strong>Move slowly.</strong> Fast movement makes the tracking drift.
        </li>
        <li>
          <strong>Measure twice.</strong> Two readings that agree are worth more
          than one.
        </li>
      </ul>

      <h2>What about a whole room?</h2>
      <p>
        Measuring wall by wall works, but it is slow. On an iPhone with LiDAR
        you can scan the room instead and get a floor plan. Our guide on{' '}
        <a href="../how-to-measure-a-room-with-iphone/">how to measure a room</a>{' '}
        covers both ways.
      </p>

      <h2>When to use a real tape</h2>
      <p>
        Expect to be within a couple of centimetres indoors, up to about 5
        metres. A real tape is still better for anything you are about to cut,
        for long distances outdoors, and for gaps where a few millimetres
        matter.
      </p>
    </article>
  );
}

export function PostRU() {
  return (
    <article className="prose-content">
      <p className="lead">
        Рулетка осталась в гараже, а вам нужно только узнать, встанет ли полка.
        iPhone даст хороший ответ меньше чем за минуту.
      </p>

      <h2>Вариант 1: приложение Apple «Рулетка»</h2>
      <p>
        Оно есть на каждом свежем iPhone. Бесплатно, настройка не нужна.
      </p>
      <ol>
        <li>Откройте «Рулетку» и поводите телефоном, пока он не найдёт поверхность.</li>
        <li>Наведите точку на начало и нажмите кнопку «плюс».</li>
        <li>Переместите точку в конец и снова нажмите «плюс».</li>
        <li>Прочитайте длину на экране.</li>
      </ol>
      <p>
        Для одного быстрого замера этого часто достаточно. Там же есть простой
        уровень.
      </p>

      <h2>Вариант 2: отдельное приложение для измерений</h2>
      <p>
        Отдельное приложение имеет смысл, если вы меряете часто. Ruler AR
        работает так же, как «Рулетка», но с дополнениями:
      </p>
      <ul>
        <li>история всех замеров</li>
        <li>инструменты для площади и углов</li>
        <li>сантиметры, метры, дюймы или футы</li>
        <li>Touch Mode: измерение от самого телефона</li>
      </ul>
      <p>
        Скачать можно бесплатно, длина, площадь, углы и пузырьковый уровень
        работают без оплаты. Сканирование комнат, высота и экспорт плана могут
        требовать подписки.
      </p>

      <h2>Советы, чтобы числу можно было верить</h2>
      <ul>
        <li>
          <strong>Хороший свет.</strong> Телефон отслеживает видимые детали,
          поэтому в тёмных комнатах и у пустых стен он менее уверен.
        </li>
        <li>
          <strong>Начинайте вблизи.</strong> Поднесите телефон к первой точке,
          прежде чем коснуться.
        </li>
        <li>
          <strong>Двигайтесь медленно.</strong> При быстром движении трекинг
          уплывает.
        </li>
        <li>
          <strong>Мерьте дважды.</strong> Два совпавших замера ценнее одного.
        </li>
      </ul>

      <h2>А целая комната?</h2>
      <p>
        Мерить стену за стеной можно, но это долго. На iPhone с LiDAR можно
        отсканировать комнату и получить план этажа. В нашем руководстве{' '}
        <a href="../how-to-measure-a-room-with-iphone/">как измерить комнату</a>{' '}
        разобраны оба способа.
      </p>

      <h2>Когда нужна настоящая рулетка</h2>
      <p>
        В помещении, на расстоянии до 5 метров ждите погрешность в пару
        сантиметров. Настоящая рулетка лучше для всего, что вы собираетесь
        резать, для больших расстояний на улице и для зазоров, где важны
        миллиметры.
      </p>
    </article>
  );
}

export function PostDE() {
  return (
    <article className="prose-content">
      <p className="lead">
        Das Maßband liegt in der Garage, und du willst nur wissen, ob das Regal
        passt. Dein iPhone gibt dir in unter einer Minute eine brauchbare
        Antwort.
      </p>

      <h2>Möglichkeit 1: Apples Maßband-App</h2>
      <p>
        Jedes aktuelle iPhone hat sie an Bord. Sie ist kostenlos und braucht
        keine Einrichtung.
      </p>
      <ol>
        <li>Öffne Maßband und bewege das Telefon, bis es eine Fläche erkennt.</li>
        <li>Richte den Punkt auf den Anfang und tippe auf die Plus-Taste.</li>
        <li>Bewege den Punkt zum Ende und tippe noch einmal auf Plus.</li>
        <li>Lies die Länge auf dem Display ab.</li>
      </ol>
      <p>
        Für eine einzelne schnelle Messung reicht das oft aus. Eine einfache
        Wasserwaage ist auch dabei.
      </p>

      <h2>Möglichkeit 2: Eine eigene Mess-App</h2>
      <p>
        Eine eigene App lohnt sich, wenn du oft misst. Ruler AR funktioniert
        genauso wie Maßband, mit ein paar Extras:
      </p>
      <ul>
        <li>ein Verlauf aller Messungen</li>
        <li>Werkzeuge für Fläche und Winkel</li>
        <li>Zentimeter, Meter, Zoll oder Fuß</li>
        <li>Touch Mode, der vom Telefon selbst aus misst</li>
      </ul>
      <p>
        Der Download ist kostenlos, und Länge, Fläche, Winkel und Wasserwaage
        funktionieren ohne Bezahlung. Raumscans, Höhe und Plan-Export können ein
        Abo erfordern.
      </p>

      <h2>Tipps für eine Zahl, der du trauen kannst</h2>
      <ul>
        <li>
          <strong>Sorge für gutes Licht.</strong> Das Telefon verfolgt sichtbare
          Details, deshalb wird es in dunklen Räumen und an leeren Wänden
          unsicherer.
        </li>
        <li>
          <strong>Starte nah dran.</strong> Halte das Telefon nah an den ersten
          Punkt, bevor du tippst.
        </li>
        <li>
          <strong>Bewege dich langsam.</strong> Bei schnellen Bewegungen driftet
          das Tracking.
        </li>
        <li>
          <strong>Miss zweimal.</strong> Zwei übereinstimmende Werte zählen mehr
          als einer.
        </li>
      </ul>

      <h2>Und ein ganzer Raum?</h2>
      <p>
        Wand für Wand zu messen funktioniert, dauert aber lange. Mit einem
        iPhone mit LiDAR kannst du den Raum stattdessen scannen und bekommst
        einen Grundriss. Unser Ratgeber{' '}
        <a href="../how-to-measure-a-room-with-iphone/">einen Raum messen</a>{' '}
        behandelt beide Wege.
      </p>

      <h2>Wann ein echtes Maßband besser ist</h2>
      <p>
        In Innenräumen und bis etwa 5 Meter darfst du eine Abweichung von ein
        paar Zentimetern erwarten. Ein echtes Maßband ist besser für alles, was
        du gleich zuschneidest, für große Strecken im Freien und für Fugen, bei
        denen wenige Millimeter zählen.
      </p>
    </article>
  );
}

export function PostFR() {
  return (
    <article className="prose-content">
      <p className="lead">
        Le mètre est au garage et vous voulez juste savoir si l'étagère rentre.
        Votre iPhone peut vous donner une bonne réponse en moins d'une minute.
      </p>

      <h2>Option 1 : l'app Mesures d'Apple</h2>
      <p>
        Tous les iPhone récents l'ont. Elle est gratuite et ne demande aucun
        réglage.
      </p>
      <ol>
        <li>Ouvrez Mesures et déplacez le téléphone jusqu'à ce qu'il détecte une surface.</li>
        <li>Placez le point sur le début et touchez le bouton plus.</li>
        <li>Déplacez le point jusqu'à la fin et touchez de nouveau le bouton plus.</li>
        <li>Lisez la longueur à l'écran.</li>
      </ol>
      <p>
        Pour une seule mesure rapide, cela suffit souvent. Elle propose aussi un
        niveau simple.
      </p>

      <h2>Option 2 : une app de mesure séparée</h2>
      <p>
        Une app séparée se justifie si vous mesurez souvent. Ruler AR fonctionne
        comme Mesures, avec quelques ajouts :
      </p>
      <ul>
        <li>un historique de tout ce que vous avez mesuré</li>
        <li>des outils de surface et d'angle</li>
        <li>centimètres, mètres, pouces ou pieds</li>
        <li>Touch Mode, qui mesure à partir du téléphone lui-même</li>
      </ul>
      <p>
        Le téléchargement est gratuit, et la longueur, la surface, les angles et
        le niveau à bulle fonctionnent sans payer. Les scans de pièce, la hauteur
        et l'export du plan peuvent nécessiter un abonnement.
      </p>

      <h2>Conseils pour un chiffre fiable</h2>
      <ul>
        <li>
          <strong>Éclairez bien.</strong> Le téléphone suit les détails visibles,
          donc il est moins sûr de lui dans une pièce sombre ou devant un mur
          uni.
        </li>
        <li>
          <strong>Commencez de près.</strong> Approchez le téléphone du premier
          point avant de toucher.
        </li>
        <li>
          <strong>Bougez lentement.</strong> Un mouvement rapide fait dériver le
          suivi.
        </li>
        <li>
          <strong>Mesurez deux fois.</strong> Deux relevés qui concordent valent
          mieux qu'un seul.
        </li>
      </ul>

      <h2>Et pour une pièce entière ?</h2>
      <p>
        Mesurer mur après mur fonctionne, mais c'est long. Avec un iPhone équipé
        de LiDAR, vous pouvez scanner la pièce et obtenir un plan. Notre guide{' '}
        <a href="../how-to-measure-a-room-with-iphone/">mesurer une pièce</a>{' '}
        présente les deux méthodes.
      </p>

      <h2>Quand prendre un vrai mètre</h2>
      <p>
        Attendez-vous à quelques centimètres d'écart en intérieur, jusqu'à
        environ 5 mètres. Un vrai mètre reste préférable pour tout ce que vous
        allez découper, pour les longues distances en extérieur et pour les
        jeux où quelques millimètres comptent.
      </p>
    </article>
  );
}

export function PostES() {
  return (
    <article className="prose-content">
      <p className="lead">
        La cinta métrica está en el garaje y solo quieres saber si cabe la
        estantería. Tu iPhone puede darte una buena respuesta en menos de un
        minuto.
      </p>

      <h2>Opción 1: la app Medidas de Apple</h2>
      <p>
        Todos los iPhone recientes la incluyen. Es gratis y no necesita ajustes.
      </p>
      <ol>
        <li>Abre Medidas y mueve el teléfono hasta que detecte una superficie.</li>
        <li>Apunta el punto al inicio y toca el botón de más.</li>
        <li>Mueve el punto al final y vuelve a tocar el botón de más.</li>
        <li>Lee la longitud en pantalla.</li>
      </ol>
      <p>
        Para una sola medición rápida, a menudo basta. También tiene un nivel
        sencillo.
      </p>

      <h2>Opción 2: una app de medición aparte</h2>
      <p>
        Una app aparte compensa si mides a menudo. Ruler AR funciona igual que
        Medidas, con algunos añadidos:
      </p>
      <ul>
        <li>un historial de todo lo que has medido</li>
        <li>herramientas de área y de ángulo</li>
        <li>centímetros, metros, pulgadas o pies</li>
        <li>Touch Mode, que mide desde el propio teléfono</li>
      </ul>
      <p>
        Es gratis de descargar, y la longitud, el área, los ángulos y el nivel de
        burbuja funcionan sin pagar. Los escaneos de habitaciones, la altura y la
        exportación del plano pueden requerir una suscripción.
      </p>

      <h2>Consejos para un número fiable</h2>
      <ul>
        <li>
          <strong>Usa buena luz.</strong> El teléfono sigue detalles visibles,
          así que en habitaciones oscuras y ante paredes lisas se siente menos
          seguro.
        </li>
        <li>
          <strong>Empieza de cerca.</strong> Acerca el teléfono al primer punto
          antes de tocar.
        </li>
        <li>
          <strong>Muévete despacio.</strong> Un movimiento rápido hace que el
          seguimiento se desvíe.
        </li>
        <li>
          <strong>Mide dos veces.</strong> Dos lecturas que coinciden valen más
          que una.
        </li>
      </ul>

      <h2>¿Y una habitación entera?</h2>
      <p>
        Medir pared por pared funciona, pero es lento. Con un iPhone con LiDAR
        puedes escanear la habitación y obtener un plano. Nuestra guía{' '}
        <a href="../how-to-measure-a-room-with-iphone/">cómo medir una habitación</a>{' '}
        explica las dos formas.
      </p>

      <h2>Cuándo usar una cinta métrica de verdad</h2>
      <p>
        Espera un error de un par de centímetros en interiores, hasta unos 5
        metros. Una cinta de verdad sigue siendo mejor para todo lo que vayas a
        cortar, para distancias largas al aire libre y para huecos donde unos
        milímetros importan.
      </p>
    </article>
  );
}

export function PostJA() {
  return (
    <article className="prose-content">
      <p className="lead">
        メジャーはガレージの中。でも知りたいのは、棚が入るかどうかだけ。iPhoneなら、1分もかからずに答えが出ます。
      </p>

      <h2>方法1：Appleの「計測」アプリ</h2>
      <p>
        最近のiPhoneにはすべて「計測」が入っています。無料で、設定は不要です。
      </p>
      <ol>
        <li>「計測」を開き、面が見つかるまでiPhoneを動かします。</li>
        <li>点を始点に合わせて、プラスボタンをタップします。</li>
        <li>点を終点まで動かして、もう一度プラスボタンをタップします。</li>
        <li>画面に出た長さを読みます。</li>
      </ol>
      <p>
        1回測るだけなら、これで十分なことが多いです。簡単な水準器もあります。
      </p>

      <h2>方法2：別の計測アプリ</h2>
      <p>
        何度も測るなら、別のアプリが向いています。Ruler ARの使い方は「計測」と同じですが、次の機能が加わります。
      </p>
      <ul>
        <li>測ったものすべての履歴</li>
        <li>面積と角度のツール</li>
        <li>センチ、メートル、インチ、フィート</li>
        <li>iPhone本体から測るTouch Mode</li>
      </ul>
      <p>
        ダウンロードは無料で、長さ、面積、角度、水準器は料金なしで使えます。部屋のスキャン、高さ、間取り図の書き出しには、サブスクリプションが必要な場合があります。
      </p>

      <h2>信頼できる数字を出すコツ</h2>
      <ul>
        <li>
          <strong>明るい場所で測る。</strong>iPhoneは目に見える特徴をたどっています。暗い部屋や何もない壁では、精度が落ちます。
        </li>
        <li>
          <strong>近くから始める。</strong>タップする前に、最初の点にiPhoneを近づけます。
        </li>
        <li>
          <strong>ゆっくり動かす。</strong>速く動かすと、トラッキングがずれます。
        </li>
        <li>
          <strong>2回測る。</strong>2回の結果が合えば、1回よりずっと信頼できます。
        </li>
      </ul>

      <h2>部屋全体を測るなら？</h2>
      <p>
        壁を1枚ずつ測ることもできますが、時間がかかります。LiDAR搭載のiPhoneなら、部屋をスキャンして間取り図を作れます。両方の方法は、
        <a href="../how-to-measure-a-room-with-iphone/">部屋の測り方</a>
        のガイドで紹介しています。
      </p>

      <h2>本物のメジャーを使う場面</h2>
      <p>
        室内で、5メートルほどまでなら、誤差は数センチ程度です。切る前の材料、屋外の長い距離、数ミリが問題になるすき間には、本物のメジャーのほうが確実です。
      </p>
    </article>
  );
}

export function PostKO() {
  return (
    <article className="prose-content">
      <p className="lead">
        줄자는 창고에 있는데 선반이 들어가는지만 알면 됩니다. 아이폰이면 1분 안에 꽤 좋은 답을 얻을 수 있습니다.
      </p>

      <h2>방법 1: Apple 측정 앱</h2>
      <p>
        최근 아이폰에는 모두 측정 앱이 들어 있습니다. 무료이고 설정할 것이 없습니다.
      </p>
      <ol>
        <li>측정 앱을 열고 표면을 찾을 때까지 폰을 움직입니다.</li>
        <li>점을 시작 위치에 맞추고 더하기 버튼을 탭합니다.</li>
        <li>점을 끝 위치로 옮기고 더하기 버튼을 다시 탭합니다.</li>
        <li>화면에 나온 길이를 읽습니다.</li>
      </ol>
      <p>
        한 번 빠르게 재는 정도라면 이것으로 충분할 때가 많습니다. 기본 수평계도 있습니다.
      </p>

      <h2>방법 2: 별도의 측정 앱</h2>
      <p>
        자주 잰다면 별도 앱이 낫습니다. Ruler AR은 측정 앱과 쓰는 방법이 같고, 몇 가지가 더 있습니다.
      </p>
      <ul>
        <li>잰 것을 모두 보여 주는 기록</li>
        <li>면적과 각도 도구</li>
        <li>센티미터, 미터, 인치, 피트</li>
        <li>폰 자체에서 재는 Touch Mode</li>
      </ul>
      <p>
        다운로드는 무료이고, 길이, 면적, 각도, 수평계는 결제 없이 쓸 수 있습니다. 방 스캔, 높이, 도면 내보내기는 구독이 필요할 수 있습니다.
      </p>

      <h2>믿을 만한 숫자를 얻는 요령</h2>
      <ul>
        <li>
          <strong>밝은 곳에서 재세요.</strong> 폰은 눈에 보이는 특징을 따라 위치를 추적합니다. 어두운 방이나 밋밋한 벽에서는 정확도가 떨어집니다.
        </li>
        <li>
          <strong>가까이서 시작하세요.</strong> 탭하기 전에 폰을 첫 번째 점 가까이에 대세요.
        </li>
        <li>
          <strong>천천히 움직이세요.</strong> 빠르게 움직이면 추적이 틀어집니다.
        </li>
        <li>
          <strong>두 번 재세요.</strong> 두 번 같은 값이 나오면 한 번 잰 것보다 믿을 만합니다.
        </li>
      </ul>

      <h2>방 전체는 어떻게 잴까</h2>
      <p>
        벽을 하나씩 재도 되지만 느립니다. LiDAR가 있는 아이폰이라면 방을 스캔해 도면을 만들 수 있습니다. 두 가지 방법은{' '}
        <a href="../how-to-measure-a-room-with-iphone/">방 측정 방법</a>{' '}
        가이드에서 다룹니다.
      </p>

      <h2>실제 줄자를 써야 할 때</h2>
      <p>
        실내에서 약 5미터 이내라면 몇 센티미터 안팎의 오차를 예상하세요. 자르기 직전의 자재, 야외의 먼 거리, 몇 밀리미터가 중요한 틈에는 실제 줄자가 더 낫습니다.
      </p>
    </article>
  );
}

export function PostZH() {
  return (
    <article className="prose-content">
      <p className="lead">
        卷尺在车库里，你只想知道搁架放不放得下。用 iPhone，一分钟内就能得到一个靠谱的答案。
      </p>

      <h2>方法一：Apple 的「测距仪」应用</h2>
      <p>
        近几年的 iPhone 都自带「测距仪」。免费，不用设置。
      </p>
      <ol>
        <li>打开「测距仪」，移动手机，直到它找到一个表面。</li>
        <li>把圆点对准起点，点击加号按钮。</li>
        <li>把圆点移到终点，再点一次加号按钮。</li>
        <li>在屏幕上读出长度。</li>
      </ol>
      <p>
        只是快速量一次的话，这通常就够了。它还带一个基础水平仪。
      </p>

      <h2>方法二：单独的测量应用</h2>
      <p>
        经常要量东西时，单独装一个应用更合适。Ruler AR 的用法和「测距仪」一样，另外多了几样功能：
      </p>
      <ul>
        <li>所有测量结果的历史记录</li>
        <li>面积和角度工具</li>
        <li>厘米、米、英寸或英尺</li>
        <li>从手机本身开始测量的 Touch Mode</li>
      </ul>
      <p>
        免费下载，长度、面积、角度和水平仪不用付费。房间扫描、高度测量和户型图导出可能需要订阅。
      </p>

      <h2>让数字更可靠的几个办法</h2>
      <ul>
        <li>
          <strong>光线要好。</strong>手机靠看得见的细节来追踪，房间太暗或墙面空白时，它就没那么有把握。
        </li>
        <li>
          <strong>从近处开始。</strong>点击前，先把手机靠近第一个点。
        </li>
        <li>
          <strong>动作要慢。</strong>动得太快，追踪会漂移。
        </li>
        <li>
          <strong>量两次。</strong>两次读数一致，比一次读数更可信。
        </li>
      </ul>

      <h2>整个房间怎么量？</h2>
      <p>
        一面墙一面墙地量也行，但很慢。用带 LiDAR 的 iPhone，可以直接扫描房间，得到户型图。我们的
        <a href="../how-to-measure-a-room-with-iphone/">房间测量指南</a>
        介绍了两种做法。
      </p>

      <h2>什么时候用真正的卷尺</h2>
      <p>
        在室内、5 米左右以内，误差大约在几厘米以内。要切割的材料、室外的长距离，以及差几毫米就有影响的缝隙，还是用真正的卷尺更好。
      </p>
    </article>
  );
}

export function PostPT() {
  return (
    <article className="prose-content">
      <p className="lead">
        A trena ficou na garagem e você só quer saber se a prateleira cabe. O
        seu iPhone responde isso bem em menos de um minuto.
      </p>

      <h2>Opção 1: o app Medidas da Apple</h2>
      <p>
        Todo iPhone recente vem com o Medidas. É grátis e não precisa de
        configuração.
      </p>
      <ol>
        <li>Abra o Medidas e mova o celular até ele encontrar uma superfície.</li>
        <li>Aponte o ponto para o início e toque no botão de mais.</li>
        <li>Leve o ponto até o fim e toque no botão de mais de novo.</li>
        <li>Leia o comprimento na tela.</li>
      </ol>
      <p>
        Para uma medida rápida, muitas vezes isso basta. Ele também tem um nível
        simples.
      </p>

      <h2>Opção 2: um app de medição à parte</h2>
      <p>
        Um app separado faz sentido quando você mede com frequência. O Ruler AR
        funciona como o Medidas, com alguns extras:
      </p>
      <ul>
        <li>histórico de tudo o que você mediu</li>
        <li>ferramentas de área e ângulo</li>
        <li>centímetros, metros, polegadas ou pés</li>
        <li>Touch Mode, que mede a partir do próprio celular</li>
      </ul>
      <p>
        O download é grátis, e comprimento, área, ângulos e nível de bolha
        funcionam sem pagar. O escaneamento de cômodos, a altura e a exportação
        de plantas podem exigir assinatura.
      </p>

      <h2>Dicas para uma medida confiável</h2>
      <ul>
        <li>
          <strong>Use boa luz.</strong> O celular acompanha detalhes visíveis,
          então cômodos escuros e paredes lisas deixam o rastreamento menos
          seguro.
        </li>
        <li>
          <strong>Comece de perto.</strong> Segure o celular perto do primeiro
          ponto antes de tocar.
        </li>
        <li>
          <strong>Mova devagar.</strong> Movimentos rápidos fazem o rastreamento
          se desviar.
        </li>
        <li>
          <strong>Meça duas vezes.</strong> Duas leituras iguais valem mais que
          uma.
        </li>
      </ul>

      <h2>E um cômodo inteiro?</h2>
      <p>
        Medir parede por parede funciona, mas é lento. Em um iPhone com LiDAR
        você pode escanear o cômodo e obter uma planta baixa. Nosso guia sobre{' '}
        <a href="../how-to-measure-a-room-with-iphone/">como medir um cômodo</a>{' '}
        mostra os dois jeitos.
      </p>

      <h2>Quando usar uma trena de verdade</h2>
      <p>
        Espere um erro de uns poucos centímetros em ambientes internos, até
        cerca de 5 metros. A trena de verdade ainda é melhor para qualquer coisa
        que você vá cortar, para longas distâncias ao ar livre e para vãos em que
        alguns milímetros fazem diferença.
      </p>
    </article>
  );
}

export function PostIT() {
  return (
    <article className="prose-content">
      <p className="lead">
        Il metro è in garage e vuoi solo sapere se la mensola ci sta. L'iPhone
        può darti una buona risposta in meno di un minuto.
      </p>

      <h2>Opzione 1: l'app Metro di Apple</h2>
      <p>
        Ogni iPhone recente ha già Metro. È gratuita e non richiede nessuna
        configurazione.
      </p>
      <ol>
        <li>Apri Metro e muovi il telefono finché non trova una superficie.</li>
        <li>Porta il puntino sull'inizio e tocca il pulsante più.</li>
        <li>Sposta il puntino sulla fine e tocca di nuovo il pulsante più.</li>
        <li>Leggi la lunghezza sullo schermo.</li>
      </ol>
      <p>
        Per una sola misura veloce spesso basta. Ha anche una livella semplice.
      </p>

      <h2>Opzione 2: un'app di misura a parte</h2>
      <p>
        Un'app a parte ha senso se misuri spesso. Ruler AR funziona come Metro,
        con qualche aggiunta:
      </p>
      <ul>
        <li>una cronologia di tutto ciò che hai misurato</li>
        <li>strumenti per area e angoli</li>
        <li>centimetri, metri, pollici o piedi</li>
        <li>Touch Mode, che misura partendo dal telefono stesso</li>
      </ul>
      <p>
        Si scarica gratis, e lunghezza, area, angoli e livella a bolla
        funzionano senza pagare. Scansione delle stanze, altezza ed esportazione
        delle piante potrebbero richiedere un abbonamento.
      </p>

      <h2>Consigli per una misura affidabile</h2>
      <ul>
        <li>
          <strong>Usa buona luce.</strong> Il telefono segue i dettagli visibili,
          quindi stanze buie e pareti lisce lo rendono meno sicuro.
        </li>
        <li>
          <strong>Parti da vicino.</strong> Tieni il telefono vicino al primo
          punto prima di toccare.
        </li>
        <li>
          <strong>Muoviti piano.</strong> I movimenti veloci fanno derivare il
          tracciamento.
        </li>
        <li>
          <strong>Misura due volte.</strong> Due letture uguali valgono più di
          una.
        </li>
      </ul>

      <h2>E una stanza intera?</h2>
      <p>
        Misurare parete per parete funziona, ma è lento. Con un iPhone dotato di
        LiDAR puoi scansionare la stanza e ottenere una planimetria. La nostra
        guida su{' '}
        <a href="../how-to-measure-a-room-with-iphone/">come misurare una stanza</a>{' '}
        spiega entrambi i modi.
      </p>

      <h2>Quando usare un metro vero</h2>
      <p>
        Aspettati uno scarto di un paio di centimetri in casa, fino a circa 5
        metri. Un metro vero resta meglio per tutto ciò che stai per tagliare,
        per le lunghe distanze all'aperto e per i vani in cui contano pochi
        millimetri.
      </p>
    </article>
  );
}

export function PostPL() {
  return (
    <article className="prose-content">
      <p className="lead">
        Miarka leży w garażu, a ty chcesz tylko wiedzieć, czy półka się zmieści.
        iPhone da ci dobrą odpowiedź w mniej niż minutę.
      </p>

      <h2>Sposób 1: aplikacja Miarka od Apple</h2>
      <p>
        Każdy nowszy iPhone ma Miarkę. Jest darmowa i nie wymaga konfiguracji.
      </p>
      <ol>
        <li>Otwórz Miarkę i poruszaj telefonem, aż znajdzie powierzchnię.</li>
        <li>Ustaw kropkę na początku i dotknij przycisku plus.</li>
        <li>Przesuń kropkę na koniec i znów dotknij przycisku plus.</li>
        <li>Odczytaj długość na ekranie.</li>
      </ol>
      <p>
        Do jednego szybkiego pomiaru często to wystarcza. Ma też prostą
        poziomicę.
      </p>

      <h2>Sposób 2: osobna aplikacja do pomiarów</h2>
      <p>
        Osobna aplikacja ma sens, gdy mierzysz często. Ruler AR działa tak samo
        jak Miarka, ale dodaje kilka rzeczy:
      </p>
      <ul>
        <li>historię wszystkiego, co zmierzyłeś</li>
        <li>narzędzia do powierzchni i kątów</li>
        <li>centymetry, metry, cale lub stopy</li>
        <li>Touch Mode, który mierzy od samego telefonu</li>
      </ul>
      <p>
        Można ją pobrać za darmo, a długość, powierzchnia, kąty i poziomica
        działają bez płacenia. Skanowanie pomieszczeń, wysokość i eksport planów
        mogą wymagać subskrypcji.
      </p>

      <h2>Jak zmierzyć iPhonem, żeby wynik był wiarygodny</h2>
      <ul>
        <li>
          <strong>Zadbaj o światło.</strong> Telefon śledzi widoczne szczegóły,
          więc ciemne pokoje i gładkie ściany obniżają jego pewność.
        </li>
        <li>
          <strong>Zacznij z bliska.</strong> Przed dotknięciem trzymaj telefon
          blisko pierwszego punktu.
        </li>
        <li>
          <strong>Ruszaj się powoli.</strong> Szybkie ruchy powodują dryf
          śledzenia.
        </li>
        <li>
          <strong>Mierz dwa razy.</strong> Dwa zgodne odczyty znaczą więcej niż
          jeden.
        </li>
      </ul>

      <h2>A co z całym pokojem?</h2>
      <p>
        Mierzenie ściana po ścianie działa, ale trwa długo. W iPhonie z LiDAR
        możesz zeskanować pokój i dostać plan. Nasz poradnik{' '}
        <a href="../how-to-measure-a-room-with-iphone/">jak zmierzyć pomieszczenie</a>{' '}
        opisuje oba sposoby.
      </p>

      <h2>Kiedy sięgnąć po prawdziwą miarkę</h2>
      <p>
        Spodziewaj się błędu rzędu kilku centymetrów w pomieszczeniu, do
        około 5 metrów. Prawdziwa miarka jest nadal lepsza do wszystkiego, co
        zaraz utniesz, do dużych odległości na zewnątrz i do wnęk, w których
        liczy się kilka milimetrów.
      </p>
    </article>
  );
}

export function PostTR() {
  return (
    <article className="prose-content">
      <p className="lead">
        Metre garajda kaldı ve siz sadece rafın sığıp sığmayacağını bilmek
        istiyorsunuz. iPhone'unuz bir dakikadan kısa sürede iyi bir cevap
        verebilir.
      </p>

      <h2>Seçenek 1: Apple'ın Ölçü uygulaması</h2>
      <p>
        Her yeni iPhone Ölçü ile gelir. Ücretsizdir ve kurulum gerektirmez.
      </p>
      <ol>
        <li>Ölçü'yü açın ve bir yüzey bulana kadar telefonu hareket ettirin.</li>
        <li>Noktayı başlangıca getirin ve artı düğmesine dokunun.</li>
        <li>Noktayı bitişe getirin ve artı düğmesine tekrar dokunun.</li>
        <li>Uzunluğu ekrandan okuyun.</li>
      </ol>
      <p>
        Tek bir hızlı ölçüm için çoğu zaman bu yeter. Basit bir su terazisi de
        var.
      </p>

      <h2>Seçenek 2: ayrı bir ölçüm uygulaması</h2>
      <p>
        Sık ölçüm yapıyorsanız ayrı bir uygulama mantıklıdır. Ruler AR, Ölçü ile
        aynı şekilde çalışır ve birkaç şey ekler:
      </p>
      <ul>
        <li>ölçtiğiniz her şeyin geçmişi</li>
        <li>alan ve açı araçları</li>
        <li>santimetre, metre, inç veya feet</li>
        <li>Touch Mode: ölçümü telefonun kendisinden yapar</li>
      </ul>
      <p>
        Ücretsiz indirilir; uzunluk, alan, açı ve su terazisi ödeme yapmadan
        çalışır. Oda taraması, yükseklik ve plan dışa aktarma abonelik
        gerektirebilir.
      </p>

      <h2>Güvenebileceğiniz bir sayı için ipuçları</h2>
      <ul>
        <li>
          <strong>İyi ışık kullanın.</strong> Telefon görünen ayrıntıları takip
          eder; karanlık odalar ve düz duvarlar onu daha az emin yapar.
        </li>
        <li>
          <strong>Yakından başlayın.</strong> Dokunmadan önce telefonu ilk
          noktanın yakınında tutun.
        </li>
        <li>
          <strong>Yavaş hareket edin.</strong> Hızlı hareket takibin kaymasına
          yol açar.
        </li>
        <li>
          <strong>İki kez ölçün.</strong> Birbirini tutan iki okuma, tek
          okumadan değerlidir.
        </li>
      </ul>

      <h2>Peki tüm oda?</h2>
      <p>
        Duvar duvar ölçmek işe yarar ama yavaştır. LiDAR'lı bir iPhone'da odayı
        tarayıp kat planı çıkarabilirsiniz. <a href="../how-to-measure-a-room-with-iphone/">Oda nasıl ölçülür</a>{' '}
        rehberimiz iki yolu da anlatıyor.
      </p>

      <h2>Gerçek metre ne zaman gerekir</h2>
      <p>
        İç mekanda, yaklaşık 5 metreye kadar birkaç santimetre sapma bekleyin.
        Keseceğiniz her şey, dışarıdaki uzun mesafeler ve birkaç milimetrenin
        önemli olduğu boşluklar için gerçek metre hâlâ daha iyidir.
      </p>
    </article>
  );
}

export function PostAR() {
  return (
    <article className="prose-content">
      <p className="lead">
        المتر في المخزن وكل ما تريده أن تعرف هل يتسع الرف. يستطيع آيفونك أن يعطيك جوابًا جيدًا في أقل من دقيقة.
      </p>

      <h2>الخيار 1: تطبيق «قياس» من Apple</h2>
      <p>
        يأتي «قياس» مع كل آيفون حديث. وهو مجاني ولا يحتاج إلى إعداد.
      </p>
      <ol>
        <li>افتح «قياس» وحرّك الهاتف حتى يجد سطحًا.</li>
        <li>ضع النقطة على بداية الشيء وانقر زر الزائد.</li>
        <li>انقل النقطة إلى نهايته وانقر زر الزائد مرة أخرى.</li>
        <li>اقرأ الطول على الشاشة.</li>
      </ol>
      <p>
        لقياس سريع واحد يكفي هذا في الغالب. وفيه أيضًا ميزان ماء بسيط.
      </p>

      <h2>الخيار 2: تطبيق قياس منفصل</h2>
      <p>
        يكون التطبيق المنفصل منطقيًا إذا كنت تقيس كثيرًا. يعمل Ruler AR بالطريقة نفسها التي يعمل بها «قياس»، مع بعض الإضافات:
      </p>
      <ul>
        <li>سجل بكل ما قستَه</li>
        <li>أدوات للمساحة والزوايا</li>
        <li>السنتيمتر أو المتر أو البوصة أو القدم</li>
        <li>Touch Mode الذي يقيس من الهاتف نفسه</li>
      </ul>
      <p>
        تنزيله مجاني، ويعمل الطول والمساحة والزوايا وميزان الماء دون دفع. وقد يتطلب مسح الغرف وقياس الارتفاع وتصدير المخطط اشتراكًا.
      </p>

      <h2>نصائح لرقم يمكنك الوثوق به</h2>
      <ul>
        <li>
          <strong>استخدم إضاءة جيدة.</strong> يتتبع الهاتف التفاصيل المرئية، فالغرف المظلمة والجدران الخالية تجعله أقل ثقة.
        </li>
        <li>
          <strong>ابدأ من قريب.</strong> قرّب الهاتف من النقطة الأولى قبل أن تنقر.
        </li>
        <li>
          <strong>تحرّك ببطء.</strong> الحركة السريعة تجعل التتبع ينحرف.
        </li>
        <li>
          <strong>قِس مرتين.</strong> قراءتان متطابقتان أوثق من قراءة واحدة.
        </li>
      </ul>

      <h2>ماذا عن الغرفة كاملة؟</h2>
      <p>
        القياس جدارًا جدارًا ممكن لكنه بطيء. في آيفون مزوّد بـ LiDAR يمكنك مسح الغرفة والحصول على مخطط. وستجد الطريقتين في دليلنا عن{' '}
        <a href="../how-to-measure-a-room-with-iphone/">كيفية قياس غرفة</a>
        .
      </p>

      <h2>متى تستخدم متر قياس حقيقيًا</h2>
      <p>
        توقّع فرقًا في حدود بضعة سنتيمترات داخل المنزل، حتى نحو 5 أمتار. ويبقى المتر الحقيقي أفضل لكل ما أنت على وشك قطعه، وللمسافات الطويلة في الخارج، وللفراغات التي يهمّ فيها بضعة مليمترات.
      </p>
    </article>
  );
}

export const bodies = {
  ru: PostRU, de: PostDE, fr: PostFR, es: PostES, ja: PostJA, ko: PostKO, 'zh-Hans': PostZH, 'pt-BR': PostPT, it: PostIT, pl: PostPL, tr: PostTR, ar: PostAR
};
