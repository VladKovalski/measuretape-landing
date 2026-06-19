import type { PostMeta } from './posts';

export const meta: PostMeta = {
  slug: 'things-you-can-measure-iphone',
  date: '2026-04-25',
  readingTimeMin: 5,
  keywords:
    'what can iphone measure, iphone measure tricks, ar measure uses, useful measure app uses, surprising iphone measure',
  tags: ['Listicle', 'Tips', 'Use cases'],
  title: {
    en: "7 Things You Can Measure With Your iPhone You Probably Don't Realize",
    ru: "7 вещей, которые можно измерить iPhone-ом и о которых вы не знали",
    de: "7 Dinge, die du mit dem iPhone messen kannst, wahrscheinlich ohne es zu wissen",
    fr: "7 choses que vous pouvez mesurer avec votre iPhone sans le savoir",
    es: "7 cosas que puedes medir con tu iPhone y probablemente no sabías",
    ja: "iPhoneで測れる、あなたが気づいていない7つのこと",
    ko: "아마 모르고 있을, iPhone으로 측정할 수 있는 7가지",
    "zh-Hans": "你可能没意识到，iPhone 能测量的 7 件事",
    "pt-BR": "7 coisas que você pode medir com o iPhone e provavelmente não imaginava",
    it: "7 cose che puoi misurare con l'iPhone e che probabilmente non immagini",
    pl: "7 rzeczy, które możesz zmierzyć iPhone'em, a o których pewnie nie wiesz",
    tr: "iPhone'unuzla ölçebileceğiniz, muhtemelen farkında olmadığınız 7 şey",
    ar: "7 أشياء يمكنك قياسها بهاتف iPhone ولم تكن تدرك ذلك على الأرجح"
  },
  excerpt: {
    en: "AR measuring apps aren't just for \"how long is this thing\". Once you start looking, your phone replaces a half-dozen tools you didn't realize you needed.",
    ru: "AR-приложения для измерений, это не только «какой длины эта штука». Стоит начать смотреть, и iPhone заменяет полдюжины инструментов, о которых вы не подозревали.",
    de: "AR-Mess-Apps sind nicht nur für „Wie lang ist das hier“ da. Sobald du genauer hinschaust, ersetzt dein Handy ein halbes Dutzend Werkzeuge, von denen du gar nicht wusstest, dass du sie brauchst.",
    fr: "Les apps de mesure en AR ne servent pas qu'à « ça mesure combien, ce truc ». Dès qu'on s'y intéresse, le téléphone remplace une demi-douzaine d'outils dont on ignorait avoir besoin.",
    es: "Las apps de medición en AR no sirven solo para «¿cuánto mide esto?». En cuanto empiezas a fijarte, tu teléfono sustituye media docena de herramientas que ni sabías que necesitabas.",
    ja: "AR計測アプリは「これって何センチ？」だけのものではありません。一度使い始めると、必要だと気づいていなかった半ダースもの道具をiPhoneが代わりにこなしてくれます。",
    ko: "AR 측정 앱은 단지 \"이건 얼마나 길까\"를 위한 것이 아닙니다. 한번 눈여겨보기 시작하면, 필요한 줄도 몰랐던 여섯 가지 도구를 iPhone이 대신해 줍니다.",
    "zh-Hans": "AR 测量应用可不只是用来回答“这东西有多长”。一旦你开始留意，手机就能取代六七种你都没意识到需要的工具。",
    "pt-BR": "Apps de medição em AR não servem só para \"qual o tamanho disso\". Quando você começa a reparar, o celular substitui meia dúzia de ferramentas que nem sabia que precisava.",
    it: "Le app di misurazione in AR non servono solo per «quanto è lungo questo». Appena cominci a farci caso, il telefono sostituisce una mezza dozzina di strumenti che non sapevi di usare.",
    pl: "Aplikacje do pomiarów w AR to nie tylko „jak długie jest to coś”. Gdy zaczniesz się przyglądać, telefon zastępuje pół tuzina narzędzi, o których nie wiedziałeś, że ich potrzebujesz.",
    tr: "AR ölçüm uygulamaları sadece \"bu şey ne kadar uzun\" için değildir. Bir kez fark etmeye başlayınca, telefonunuz ihtiyacınız olduğunu bilmediğiniz yarım düzine aleti yerine koyar.",
    ar: "تطبيقات القياس بالواقع المعزز ليست فقط لمعرفة «كم يبلغ طول هذا الشيء». ما إن تبدأ بالنظر حتى يحل هاتفك محل نصف دزينة من الأدوات لم تكن تدرك أنك بحاجة إليها."
  }
};

export default function Post() {
  return (
    <article className="prose-content">
      <p className="lead">
        Most people install an AR measuring app, measure one thing, and
        forget it's there. Which is a shame, the same app handles a bunch
        of measurements that traditional tools either can't do or do
        badly. Here are seven uses you probably haven't tried.
      </p>

      <h2>1. The angle of a sloped roof</h2>
      <p>
        Hard to do with a tape measure, you need to climb up there. With an
        iPhone, stand at the foot of the wall, point your camera up along
        the roofline, and use the angle tool. The AR protractor reads the
        roof's pitch in degrees without you leaving the ground.
      </p>
      <p>
        Useful for: solar panel quotes (which require pitch within ±2°),
        DIY shingle replacement, comparing real pitch to what an estate
        agent claimed.
      </p>

      <h2>2. Whether your TV is mounted level</h2>
      <p>
        Hold the phone against the side of the TV, switch to bubble level
        mode. The reading tells you whether the TV is plumb to within
        0.5 degrees. The standard wall-mount tolerance is ±2 degrees, if
        you're outside that, the TV will look slightly off no matter how
        carefully you tightened the bracket.
      </p>

      <h2>3. The height of a tree (or a building, or a person)</h2>
      <p>
        AR height measurement uses the ground plane as a reference. Stand
        on level ground, point the camera at the base of the tree, tap to
        anchor, then aim at the top and tap again. The app calculates the
        height from the angle and your phone's position.
      </p>
      <p>
        Accuracy: ±5% on a 10 m tree, ±10% on a 30 m building. Good enough
        for "is this tree too tall for the power lines?" but not for
        engineering purposes.
      </p>

      <h2>4. The exact width of a parking spot before you back in</h2>
      <p>
        From outside the car, point the camera across the parking spot
        between the lane lines. Tap each line. Compare to your car's width
        (usually 1.8-2.0 m for most sedans, 2.0-2.2 m for SUVs). If the
        spot's clear width is under 2.4 m and you have a wider vehicle,
        skip it, you won't have door clearance.
      </p>

      <h2>5. Whether a picture frame is hanging straight</h2>
      <p>
        Press the phone flat against the bottom edge of the frame. Check
        bubble level. Most frames hang with one nail and a wire, they
        always drift slightly off-level over time. A 1-degree tilt looks
        intentionally crooked; the AR level catches it instantly.
      </p>

      <h2>6. The slope of your floor</h2>
      <p>
        Old houses settle. Floors slope. Place the phone flat on the floor
        in different rooms, the level reading tells you exactly how much
        each floor slopes from horizontal. A 1-degree tilt over a 5 m room is
        9 cm of vertical drop, which is enough to make a ball roll. Anything
        over 2 degrees indicates structural issues worth a surveyor's
        opinion.
      </p>

      <h2>7. How long the queue is</h2>
      <p>
        A small absurdity but useful: hold the phone up at the front of the
        queue, switch to AR measure, tap the front person's feet and then
        the back person's feet. Now you know exactly how long the queue is
        and how long you'll wait (people typically advance at 30-40 cm/sec
        in a checkout line). Especially fun at airports.
      </p>

      <h2>Bonus: things you can also measure but probably shouldn't</h2>
      <ul>
        <li>Your dog's height for ordering a custom harness, works, but the dog has to stand still</li>
        <li>The depth of a swimming pool from above the water surface, possible with LiDAR, fails at non-LiDAR (water has no AR features)</li>
        <li>How far the moon is, no. Don't try.</li>
      </ul>

      <h2>The point</h2>
      <p>
        An AR measuring app turns your phone into a tape measure, level,
        protractor, and laser distance meter at once. The traditional tools
        each cost €15-50 and live in a drawer. The app is free and lives in
        your pocket. The next time you'd reach for any of those tools, try
        the app first. After a few weeks, the drawer stays closed.
      </p>
    </article>
  );
}

export function PostRU() {
  return (
    <article className="prose-content">
      <p className="lead">
        Большинство людей устанавливают AR-приложение для измерений, замеряют
        что-то одно и забывают о нём. А зря: то же самое приложение справляется
        с кучей измерений, которые обычные инструменты либо вовсе не делают,
        либо делают плохо. Вот семь способов применения, которые вы наверняка
        ещё не пробовали.
      </p>

      <h2>1. Угол наклона ската крыши</h2>
      <p>
        Рулеткой это сделать сложно, нужно лезть наверх. С iPhone встаньте у
        основания стены, наведите камеру вверх вдоль линии крыши и
        воспользуйтесь инструментом измерения угла. AR-транспортир покажет
        уклон крыши в градусах, а вам даже не придётся отрываться от земли.
      </p>
      <p>
        Пригодится для: расчётов под солнечные панели (где нужен уклон с
        точностью ±2°), самостоятельной замены черепицы, сверки реального
        уклона с тем, что заявил риелтор.
      </p>

      <h2>2. Ровно ли висит телевизор</h2>
      <p>
        Приложите телефон к боковой грани телевизора и переключитесь в режим
        пузырькового уровня. Показания скажут, висит ли телевизор ровно с
        точностью до 0,5 градуса. Стандартный допуск настенного крепления —
        ±2 градуса, и если вы за его пределами, телевизор будет выглядеть чуть
        перекошенным, как бы аккуратно вы ни затягивали кронштейн.
      </p>

      <h2>3. Высота дерева (или здания, или человека)</h2>
      <p>
        AR-измерение высоты использует плоскость земли как опорную. Встаньте на
        ровной поверхности, наведите камеру на основание дерева, коснитесь
        экрана, чтобы поставить точку, затем наведите на верхушку и коснитесь
        ещё раз. Приложение вычислит высоту по углу и положению вашего телефона.
      </p>
      <p>
        Точность: ±5% для дерева высотой 10 м, ±10% для здания в 30 м. Этого
        достаточно для вопроса «не слишком ли это дерево высокое для линий
        электропередачи?», но не для инженерных задач.
      </p>

      <h2>4. Точная ширина парковочного места, прежде чем сдать назад</h2>
      <p>
        Стоя снаружи машины, наведите камеру поперёк парковочного места между
        разметкой. Коснитесь каждой линии. Сравните с шириной своего автомобиля
        (обычно 1,8-2,0 м для большинства седанов, 2,0-2,2 м для внедорожников).
        Если чистая ширина места меньше 2,4 м, а у вас машина пошире, проезжайте
        мимо: открыть дверь будет негде.
      </p>

      <h2>5. Ровно ли висит картина</h2>
      <p>
        Плотно приложите телефон к нижней кромке рамы. Проверьте пузырьковый
        уровень. Большинство рам висят на одном гвозде и проволоке, со временем
        они всегда чуть уходят от горизонта. Наклон в 1 градус выглядит как
        нарочито криво повешенная картина; AR-уровень ловит это мгновенно.
      </p>

      <h2>6. Уклон вашего пола</h2>
      <p>
        Старые дома проседают. Полы кренятся. Положите телефон плашмя на пол в
        разных комнатах, и показания уровня скажут вам, насколько именно каждый
        пол отклоняется от горизонтали. Наклон в 1 градус на комнату длиной 5 м
        — это 9 см перепада по вертикали, чего хватит, чтобы мячик покатился.
        Всё, что больше 2 градусов, говорит о проблемах с конструкцией, ради
        которых стоит позвать специалиста.
      </p>

      <h2>7. Какой длины очередь</h2>
      <p>
        Небольшая нелепость, но штука полезная: поднимите телефон в начале
        очереди, переключитесь в режим AR-измерения, коснитесь ног первого
        человека, а затем последнего. Теперь вы точно знаете, какой длины
        очередь и сколько придётся ждать (на кассе люди обычно продвигаются со
        скоростью 30-40 см/сек). Особенно весело в аэропортах.
      </p>

      <h2>Бонус: что тоже можно измерить, но, наверное, не стоит</h2>
      <ul>
        <li>Рост вашей собаки, чтобы заказать шлейку на заказ, работает, но собака должна стоять смирно</li>
        <li>Глубину бассейна с поверхности воды, возможно с LiDAR, не работает без LiDAR (у воды нет AR-точек привязки)</li>
        <li>Как далеко до Луны, нет. Даже не пытайтесь.</li>
      </ul>

      <h2>Суть</h2>
      <p>
        AR-приложение для измерений превращает ваш телефон в рулетку, уровень,
        транспортир и лазерный дальномер одновременно. Каждый из этих обычных
        инструментов стоит €15-50 и пылится в ящике. Приложение бесплатно и
        всегда в кармане. В следующий раз, когда захочется потянуться за любым
        из этих инструментов, сначала попробуйте приложение. Через пару недель
        ящик так и останется закрытым.
      </p>
    </article>
  );
}

export function PostDE() {
  return (
    <article className="prose-content">
      <p className="lead">
        Die meisten Leute installieren eine AR-Mess-App, messen eine Sache und
        vergessen dann, dass sie da ist. Schade, denn dieselbe App beherrscht
        eine ganze Reihe von Messungen, die herkömmliche Werkzeuge entweder gar
        nicht oder nur schlecht hinbekommen. Hier sind sieben Anwendungen, die
        du wahrscheinlich noch nicht ausprobiert hast.
      </p>

      <h2>1. Der Winkel eines geneigten Dachs</h2>
      <p>
        Mit dem Maßband schwer zu machen, da musst du hochklettern. Mit einem
        iPhone stellst du dich an den Fuß der Wand, richtest die Kamera nach
        oben entlang der Dachkante und nutzt das Winkelwerkzeug. Der
        AR-Winkelmesser liest die Dachneigung in Grad ab, ohne dass du den Boden
        verlassen musst.
      </p>
      <p>
        Nützlich für: Angebote für Solarmodule (die eine Neigung auf ±2° genau
        verlangen), den eigenhändigen Austausch von Dachschindeln, den Vergleich
        der tatsächlichen Neigung mit dem, was der Makler behauptet hat.
      </p>

      <h2>2. Ob dein Fernseher gerade hängt</h2>
      <p>
        Halte das Handy an die Seite des Fernsehers und wechsle in den
        Wasserwaagen-Modus. Die Anzeige sagt dir, ob der Fernseher auf 0,5 Grad
        genau im Lot hängt. Die übliche Toleranz für Wandhalterungen liegt bei
        ±2 Grad, und wenn du darüber liegst, wirkt der Fernseher leicht schief,
        egal wie sorgfältig du die Halterung festgezogen hast.
      </p>

      <h2>3. Die Höhe eines Baums (oder eines Gebäudes oder einer Person)</h2>
      <p>
        Die AR-Höhenmessung nutzt die Bodenebene als Referenz. Stell dich auf
        ebenen Untergrund, richte die Kamera auf den Fuß des Baums, tippe zum
        Festsetzen, ziele dann auf die Spitze und tippe erneut. Die App
        berechnet die Höhe aus dem Winkel und der Position deines Handys.
      </p>
      <p>
        Genauigkeit: ±5% bei einem 10 m hohen Baum, ±10% bei einem 30 m hohen
        Gebäude. Gut genug für „Ist dieser Baum zu hoch für die Stromleitungen?“,
        aber nicht für technische Zwecke.
      </p>

      <h2>4. Die genaue Breite einer Parklücke, bevor du rückwärts einparkst</h2>
      <p>
        Richte vom Auto aus die Kamera quer über die Parklücke zwischen die
        Markierungen. Tippe auf jede Linie. Vergleiche mit der Breite deines
        Autos (meist 1,8-2,0 m bei den meisten Limousinen, 2,0-2,2 m bei SUVs).
        Wenn die freie Breite der Lücke unter 2,4 m liegt und du ein breiteres
        Fahrzeug hast, lass sie aus, sonst bekommst du die Türen nicht auf.
      </p>

      <h2>5. Ob ein Bilderrahmen gerade hängt</h2>
      <p>
        Drücke das Handy flach an die Unterkante des Rahmens. Prüfe die
        Wasserwaage. Die meisten Rahmen hängen an einem Nagel und einem Draht,
        sie verziehen sich mit der Zeit immer leicht aus der Waagerechten. Eine
        Neigung von 1 Grad wirkt absichtlich schief; die AR-Wasserwaage erkennt
        sie sofort.
      </p>

      <h2>6. Das Gefälle deines Bodens</h2>
      <p>
        Alte Häuser setzen sich. Böden geraten in Schieflage. Lege das Handy
        flach auf den Boden in verschiedenen Räumen, und die
        Wasserwaagen-Anzeige sagt dir genau, wie stark jeder Boden von der
        Horizontalen abweicht. Eine Neigung von 1 Grad auf einen 5 m langen Raum
        ergibt 9 cm Höhenunterschied, genug, damit eine Kugel ins Rollen kommt.
        Alles über 2 Grad deutet auf statische Probleme hin, bei denen sich die
        Meinung eines Sachverständigen lohnt.
      </p>

      <h2>7. Wie lang die Schlange ist</h2>
      <p>
        Eine kleine Albernheit, aber nützlich: Halte das Handy am Anfang der
        Schlange hoch, wechsle zur AR-Messung, tippe auf die Füße der vordersten
        Person und dann auf die der hintersten. Jetzt weißt du genau, wie lang
        die Schlange ist und wie lange du warten wirst (an der Kasse rücken die
        Leute typischerweise mit 30-40 cm/sek vor). Besonders unterhaltsam an
        Flughäfen.
      </p>

      <h2>Bonus: Dinge, die du auch messen kannst, aber wohl lieber nicht solltest</h2>
      <ul>
        <li>Die Höhe deines Hundes für ein maßgefertigtes Geschirr, funktioniert, aber der Hund muss still stehen</li>
        <li>Die Tiefe eines Schwimmbeckens von über der Wasseroberfläche, mit LiDAR möglich, scheitert ohne LiDAR (Wasser hat keine AR-Merkmale)</li>
        <li>Wie weit der Mond entfernt ist, nein. Lass es lieber.</li>
      </ul>

      <h2>Der Punkt</h2>
      <p>
        Eine AR-Mess-App verwandelt dein Handy gleichzeitig in Maßband,
        Wasserwaage, Winkelmesser und Laser-Entfernungsmesser. Die
        herkömmlichen Werkzeuge kosten je €15-50 und liegen in einer Schublade.
        Die App ist kostenlos und steckt in deiner Tasche. Wenn du das nächste
        Mal nach einem dieser Werkzeuge greifen würdest, probier zuerst die App.
        Nach ein paar Wochen bleibt die Schublade zu.
      </p>
    </article>
  );
}

export function PostFR() {
  return (
    <article className="prose-content">
      <p className="lead">
        La plupart des gens installent une app de mesure en AR, mesurent une
        seule chose, puis oublient qu'elle est là. Dommage, car la même app
        gère tout un tas de mesures que les outils classiques font mal, voire
        pas du tout. Voici sept usages que vous n'avez probablement jamais
        essayés.
      </p>

      <h2>1. L'angle d'un toit en pente</h2>
      <p>
        Difficile à faire au mètre ruban, il faut grimper là-haut. Avec un
        iPhone, placez-vous au pied du mur, pointez la caméra vers le haut le
        long de la ligne de toit et utilisez l'outil d'angle. Le rapporteur AR
        lit la pente du toit en degrés sans que vous quittiez le sol.
      </p>
      <p>
        Utile pour : les devis de panneaux solaires (qui exigent une pente à ±2°
        près), le remplacement de tuiles en bricolage, la comparaison de la
        pente réelle avec ce qu'a affirmé l'agent immobilier.
      </p>

      <h2>2. Vérifier si votre télé est posée de niveau</h2>
      <p>
        Tenez le téléphone contre le côté de la télé, passez en mode niveau à
        bulle. La mesure vous dit si la télé est d'aplomb à 0,5 degré près. La
        tolérance standard pour un support mural est de ±2 degrés ; si vous
        sortez de cette marge, la télé paraîtra légèrement de travers, même si
        vous avez serré le support avec le plus grand soin.
      </p>

      <h2>3. La hauteur d'un arbre (ou d'un bâtiment, ou d'une personne)</h2>
      <p>
        La mesure de hauteur en AR utilise le plan du sol comme référence.
        Tenez-vous sur un terrain plat, pointez la caméra sur la base de
        l'arbre, touchez l'écran pour fixer le point, visez ensuite le sommet et
        touchez à nouveau. L'app calcule la hauteur à partir de l'angle et de la
        position de votre téléphone.
      </p>
      <p>
        Précision : ±5% sur un arbre de 10 m, ±10% sur un bâtiment de 30 m.
        Suffisant pour « cet arbre est-il trop haut pour les lignes
        électriques ? » mais pas pour des usages techniques.
      </p>

      <h2>4. La largeur exacte d'une place de parking avant d'y reculer</h2>
      <p>
        Depuis l'extérieur de la voiture, pointez la caméra en travers de la
        place, entre les lignes. Touchez chaque ligne. Comparez à la largeur de
        votre voiture (en général 1,8-2,0 m pour la plupart des berlines,
        2,0-2,2 m pour les SUV). Si la largeur utile de la place est inférieure
        à 2,4 m et que votre véhicule est plus large, passez votre chemin : vous
        ne pourrez pas ouvrir les portières.
      </p>

      <h2>5. Vérifier si un cadre est accroché droit</h2>
      <p>
        Plaquez le téléphone contre le bord inférieur du cadre. Vérifiez le
        niveau à bulle. La plupart des cadres tiennent sur un clou et un fil, ils
        finissent toujours par dériver légèrement avec le temps. Une inclinaison
        de 1 degré donne l'air de travers intentionnel ; le niveau AR la repère
        instantanément.
      </p>

      <h2>6. La pente de votre sol</h2>
      <p>
        Les vieilles maisons se tassent. Les sols s'inclinent. Posez le
        téléphone à plat sur le sol dans différentes pièces, la mesure de niveau
        vous dit exactement de combien chaque sol s'écarte de l'horizontale. Une
        inclinaison de 1 degré sur une pièce de 5 m représente 9 cm de
        dénivelé, assez pour faire rouler une balle. Au-delà de 2 degrés, cela
        signale des problèmes structurels qui méritent l'avis d'un expert.
      </p>

      <h2>7. La longueur de la file d'attente</h2>
      <p>
        Une petite absurdité mais bien utile : levez le téléphone en tête de
        file, passez en mesure AR, touchez les pieds de la première personne
        puis ceux de la dernière. Vous savez maintenant exactement la longueur
        de la file et combien de temps vous attendrez (en caisse, les gens
        avancent généralement de 30-40 cm/sec). Particulièrement amusant dans
        les aéroports.
      </p>

      <h2>Bonus : des choses que vous pouvez aussi mesurer mais sans doute à éviter</h2>
      <ul>
        <li>La hauteur de votre chien pour commander un harnais sur mesure, ça marche, mais le chien doit rester immobile</li>
        <li>La profondeur d'une piscine depuis la surface de l'eau, possible avec le LiDAR, impossible sans LiDAR (l'eau n'offre aucun repère AR)</li>
        <li>La distance jusqu'à la Lune, non. N'essayez pas.</li>
      </ul>

      <h2>L'essentiel</h2>
      <p>
        Une app de mesure en AR transforme votre téléphone en mètre ruban,
        niveau, rapporteur et télémètre laser, tout à la fois. Les outils
        classiques coûtent chacun 15-50 € et dorment dans un tiroir. L'app est
        gratuite et tient dans votre poche. La prochaine fois que vous voudrez
        attraper l'un de ces outils, essayez d'abord l'app. Au bout de quelques
        semaines, le tiroir reste fermé.
      </p>
    </article>
  );
}

export function PostES() {
  return (
    <article className="prose-content">
      <p className="lead">
        La mayoría de la gente instala una app de medición en AR, mide una sola
        cosa y se olvida de que la tiene. Y es una lástima, porque esa misma app
        resuelve un montón de mediciones que las herramientas tradicionales no
        pueden hacer o hacen mal. Aquí tienes siete usos que seguramente no has
        probado.
      </p>

      <h2>1. El ángulo de un tejado inclinado</h2>
      <p>
        Difícil de hacer con cinta métrica, tendrías que subirte ahí arriba. Con
        un iPhone, ponte al pie de la pared, apunta la cámara hacia arriba a lo
        largo de la línea del tejado y usa la herramienta de ángulo. El
        transportador AR lee la pendiente del tejado en grados sin que tengas que
        despegarte del suelo.
      </p>
      <p>
        Útil para: presupuestos de paneles solares (que exigen la pendiente con
        precisión de ±2°), cambiar tú mismo las tejas, comparar la pendiente real
        con la que aseguró el agente inmobiliario.
      </p>

      <h2>2. Si tu televisor está colgado nivelado</h2>
      <p>
        Apoya el teléfono contra el lateral del televisor y cambia al modo nivel
        de burbuja. La lectura te dice si el televisor está a plomo con una
        precisión de 0,5 grados. La tolerancia estándar de un soporte de pared es
        de ±2 grados; si te sales de ahí, el televisor se verá ligeramente
        torcido por más cuidado que pongas al apretar el soporte.
      </p>

      <h2>3. La altura de un árbol (o de un edificio, o de una persona)</h2>
      <p>
        La medición de altura en AR usa el plano del suelo como referencia.
        Ponte sobre un terreno llano, apunta la cámara a la base del árbol, toca
        para fijar el punto, luego apunta a la copa y toca de nuevo. La app
        calcula la altura a partir del ángulo y de la posición de tu teléfono.
      </p>
      <p>
        Precisión: ±5% en un árbol de 10 m, ±10% en un edificio de 30 m.
        Suficiente para «¿este árbol es demasiado alto para los cables
        eléctricos?», pero no para fines de ingeniería.
      </p>

      <h2>4. El ancho exacto de una plaza de aparcamiento antes de entrar marcha atrás</h2>
      <p>
        Desde fuera del coche, apunta la cámara cruzando la plaza entre las
        líneas. Toca cada línea. Compáralo con el ancho de tu coche (normalmente
        1,8-2,0 m en la mayoría de los sedanes, 2,0-2,2 m en los SUV). Si el
        ancho libre de la plaza es menor de 2,4 m y tienes un vehículo más ancho,
        sáltala: no tendrás espacio para abrir las puertas.
      </p>

      <h2>5. Si un cuadro está colgado recto</h2>
      <p>
        Aprieta el teléfono plano contra el borde inferior del marco. Comprueba
        el nivel de burbuja. La mayoría de los marcos cuelgan de un clavo y un
        alambre, y siempre acaban desviándose un poco con el tiempo. Una
        inclinación de 1 grado parece torcida a propósito; el nivel AR la detecta
        al instante.
      </p>

      <h2>6. La inclinación de tu suelo</h2>
      <p>
        Las casas viejas se asientan. Los suelos se inclinan. Coloca el teléfono
        plano sobre el suelo en distintas habitaciones, y la lectura del nivel te
        dice exactamente cuánto se desvía cada suelo de la horizontal. Una
        inclinación de 1 grado en una habitación de 5 m son 9 cm de desnivel,
        suficiente para que ruede una pelota. Cualquier valor por encima de 2
        grados indica problemas estructurales que merecen la opinión de un
        perito.
      </p>

      <h2>7. Cuánto mide la cola</h2>
      <p>
        Una pequeña tontería, pero útil: levanta el teléfono al principio de la
        cola, cambia a medición AR, toca los pies de la primera persona y luego
        los de la última. Ya sabes exactamente cuánto mide la cola y cuánto vas a
        esperar (en una caja la gente suele avanzar a 30-40 cm/seg).
        Especialmente divertido en los aeropuertos.
      </p>

      <h2>Extra: cosas que también puedes medir pero probablemente no deberías</h2>
      <ul>
        <li>La altura de tu perro para encargar un arnés a medida, funciona, pero el perro tiene que quedarse quieto</li>
        <li>La profundidad de una piscina desde la superficie del agua, posible con LiDAR, falla sin LiDAR (el agua no ofrece puntos de referencia AR)</li>
        <li>A qué distancia está la Luna, no. No lo intentes.</li>
      </ul>

      <h2>La idea</h2>
      <p>
        Una app de medición en AR convierte tu teléfono en cinta métrica, nivel,
        transportador y medidor láser de distancia a la vez. Cada una de esas
        herramientas tradicionales cuesta entre 15 y 50 € y vive en un cajón. La
        app es gratis y vive en tu bolsillo. La próxima vez que vayas a echar
        mano de cualquiera de esas herramientas, prueba primero la app. Al cabo
        de unas semanas, el cajón se queda cerrado.
      </p>
    </article>
  );
}

export function PostJA() {
  return (
    <article className="prose-content">
      <p className="lead">
        多くの人はAR計測アプリを入れて、一度だけ何かを測り、その存在を忘れてしまいます。
        もったいない話です。同じアプリが、従来の道具ではできない、あるいはうまくできない
        さまざまな計測をこなしてくれるのですから。ここでは、あなたがまだ試したことのなさそうな
        7つの使い方を紹介します。
      </p>

      <h2>1. 傾斜した屋根の角度</h2>
      <p>
        メジャーでやるのは大変で、屋根まで登らなければなりません。iPhoneなら、壁の足元に立ち、
        カメラを屋根のラインに沿って上に向け、角度ツールを使うだけ。AR分度器が、地面を離れることなく
        屋根の勾配を度数で読み取ってくれます。
      </p>
      <p>
        役立つ場面：ソーラーパネルの見積もり（勾配を±2°の精度で求められます）、DIYでの屋根材の
        張り替え、不動産業者が主張した勾配と実際の勾配との照合など。
      </p>

      <h2>2. テレビが水平に取り付けられているか</h2>
      <p>
        テレビの側面に端末を当て、水準器モードに切り替えます。表示を見れば、テレビが0.5度以内の
        精度で水平かどうかが分かります。壁掛け金具の標準的な許容範囲は±2度で、それを外れると、
        どれだけ丁寧に金具を締めても、テレビはわずかに傾いて見えてしまいます。
      </p>

      <h2>3. 木（あるいは建物、あるいは人）の高さ</h2>
      <p>
        ARの高さ計測は地面を基準面として使います。平らな地面に立ち、木の根元にカメラを向けて
        タップして固定し、続いて頂点に向けてもう一度タップします。アプリが角度と端末の位置から
        高さを計算します。
      </p>
      <p>
        精度：高さ10 mの木で±5%、30 mの建物で±10%。「この木は電線に対して高すぎないか？」を
        判断するには十分ですが、工学的な用途には向きません。
      </p>

      <h2>4. バックで入れる前に、駐車スペースの正確な幅</h2>
      <p>
        車の外から、区画線の間を横切るようにカメラを向けます。それぞれの線をタップします。自分の
        車幅と比べてみましょう（多くのセダンでだいたい1.8-2.0 m、SUVで2.0-2.2 m）。スペースの
        有効幅が2.4 m未満で、車幅が広めなら、見送りましょう。ドアを開ける余裕がありません。
      </p>

      <h2>5. 額縁がまっすぐ掛かっているか</h2>
      <p>
        端末を額縁の下端に平らに押し当てます。水準器を確認します。たいていの額縁は釘1本とワイヤーで
        掛かっていて、時間とともに必ず少しずつ傾いていきます。1度の傾きはわざと斜めにしたように
        見えますが、ARの水準器なら一瞬で見抜きます。
      </p>

      <h2>6. 床の傾き</h2>
      <p>
        古い家は沈下します。床は傾きます。いくつかの部屋で端末を床に平らに置けば、水準器の表示が、
        それぞれの床が水平からどれだけ傾いているかを正確に教えてくれます。5 mの部屋で1度の傾きは
        垂直方向に9 cmの落差にあたり、ボールが転がるには十分です。2度を超えるものは構造上の問題を
        示しており、専門家の意見を仰ぐ価値があります。
      </p>

      <h2>7. 行列の長さ</h2>
      <p>
        ちょっとばかげていますが役に立ちます。行列の先頭で端末を掲げ、AR計測に切り替えて、先頭の人の
        足元をタップし、続いて最後尾の人の足元をタップします。これで行列の長さと、どれくらい待つかが
        正確に分かります（レジの列では、人はだいたい毎秒30-40 cmずつ進みます）。空港だと特に面白い
        です。
      </p>

      <h2>おまけ：測れるけれど、やめておいた方がよさそうなもの</h2>
      <ul>
        <li>オーダーメイドのハーネスを注文するための犬の身長、できますが、犬がじっとしている必要があります</li>
        <li>水面の上からのプールの深さ、LiDARなら可能ですが、LiDARなしだと失敗します（水にはARの特徴点がありません）</li>
        <li>月までの距離、無理です。やめておきましょう。</li>
      </ul>

      <h2>要するに</h2>
      <p>
        AR計測アプリは、あなたの端末をメジャー、水準器、分度器、レーザー距離計に一度に変えてくれます。
        従来の道具はそれぞれ15-50ユーロして、引き出しの中で眠っています。アプリは無料で、ポケットの中に
        あります。次にそれらの道具に手を伸ばそうとしたら、まずアプリを試してみてください。数週間もすれば、
        引き出しは閉まったままになります。
      </p>
    </article>
  );
}

export function PostKO() {
  return (
    <article className="prose-content">
      <p className="lead">
        대부분의 사람들은 AR 측정 앱을 설치하고, 무언가 하나를 재본 뒤, 그 존재를
        잊어버립니다. 안타까운 일입니다. 같은 앱이 전통적인 도구로는 아예 할 수 없거나
        형편없이 하는 여러 측정을 거뜬히 해내기 때문이죠. 여기 아마 아직 시도해 보지
        않았을 일곱 가지 활용법을 소개합니다.
      </p>

      <h2>1. 경사진 지붕의 각도</h2>
      <p>
        줄자로 하기는 어렵습니다. 거기까지 올라가야 하니까요. iPhone이라면 벽 아래쪽에
        서서 카메라를 지붕 선을 따라 위로 향하고 각도 도구를 사용하면 됩니다. AR 각도기가
        땅에서 발을 떼지 않고도 지붕의 경사를 도 단위로 읽어 줍니다.
      </p>
      <p>
        유용한 곳: 태양광 패널 견적(경사를 ±2° 이내로 요구합니다), DIY 지붕재 교체, 실제
        경사와 부동산 중개인이 말한 경사를 비교할 때 등.
      </p>

      <h2>2. TV가 수평으로 설치되었는지</h2>
      <p>
        휴대폰을 TV 옆면에 대고 수평계 모드로 전환하세요. 표시값을 보면 TV가 0.5도 이내로
        수직인지 알 수 있습니다. 벽걸이 거치대의 표준 허용 오차는 ±2도이며, 이 범위를
        벗어나면 브래킷을 아무리 꼼꼼히 조였더라도 TV가 살짝 비뚤어져 보입니다.
      </p>

      <h2>3. 나무의 높이(또는 건물, 또는 사람)</h2>
      <p>
        AR 높이 측정은 지면을 기준면으로 사용합니다. 평평한 땅에 서서 카메라를 나무 밑동에
        향하고 탭하여 고정한 다음, 꼭대기를 겨냥해 다시 탭하세요. 앱이 각도와 휴대폰의
        위치를 바탕으로 높이를 계산합니다.
      </p>
      <p>
        정확도: 높이 10 m 나무에서 ±5%, 30 m 건물에서 ±10%. "이 나무가 전선에 비해 너무
        높은가?" 정도를 판단하기에는 충분하지만 공학적 용도로는 적합하지 않습니다.
      </p>

      <h2>4. 후진 주차하기 전에 주차 공간의 정확한 너비</h2>
      <p>
        차 밖에서 차선 사이로 주차 공간을 가로질러 카메라를 향하세요. 각 선을 탭합니다. 자기
        차 너비와 비교해 보세요(대부분의 세단은 보통 1.8-2.0 m, SUV는 2.0-2.2 m). 공간의
        유효 너비가 2.4 m 미만인데 차가 더 넓다면 그냥 지나치세요. 문을 열 공간이 없습니다.
      </p>

      <h2>5. 액자가 똑바로 걸렸는지</h2>
      <p>
        휴대폰을 액자 아래 모서리에 평평하게 대세요. 수평계를 확인합니다. 대부분의 액자는 못
        하나와 철사로 걸려 있어서 시간이 지나면 늘 조금씩 수평에서 벗어납니다. 1도 기울어지면
        일부러 비뚤게 건 것처럼 보이는데, AR 수평계는 이를 즉시 잡아냅니다.
      </p>

      <h2>6. 바닥의 기울기</h2>
      <p>
        오래된 집은 가라앉습니다. 바닥은 기웁니다. 여러 방에서 휴대폰을 바닥에 평평하게 놓으면,
        수평계 표시값이 각 바닥이 수평에서 정확히 얼마나 기울었는지 알려 줍니다. 5 m 방에서
        1도 기울어지면 수직으로 9 cm 차이가 나는데, 공이 굴러갈 정도입니다. 2도를 넘으면 구조적
        문제를 시사하므로 전문가의 의견을 들어볼 만합니다.
      </p>

      <h2>7. 줄이 얼마나 긴지</h2>
      <p>
        조금 엉뚱하지만 유용합니다. 줄 맨 앞에서 휴대폰을 들고 AR 측정으로 전환한 뒤, 맨 앞
        사람의 발을 탭하고 이어서 맨 뒤 사람의 발을 탭하세요. 이제 줄이 정확히 얼마나 긴지,
        얼마나 기다리게 될지 알 수 있습니다(계산대 줄에서 사람들은 보통 초당 30-40 cm씩
        움직입니다). 공항에서 특히 재미있습니다.
      </p>

      <h2>보너스: 측정할 수는 있지만 아마 하지 않는 게 나은 것들</h2>
      <ul>
        <li>맞춤 하네스를 주문하기 위한 강아지의 키, 됩니다, 다만 강아지가 가만히 서 있어야 합니다</li>
        <li>수면 위에서 재는 수영장의 깊이, LiDAR로는 가능하지만 LiDAR가 없으면 실패합니다(물에는 AR 특징점이 없습니다)</li>
        <li>달까지의 거리, 안 됩니다. 시도하지 마세요.</li>
      </ul>

      <h2>핵심</h2>
      <p>
        AR 측정 앱은 휴대폰을 줄자, 수평계, 각도기, 레이저 거리계로 한꺼번에 바꿔 줍니다.
        전통적인 도구들은 각각 15-50유로씩 하고 서랍 속에 처박혀 있습니다. 앱은 무료이고
        주머니 속에 있습니다. 다음에 그 도구들 중 하나에 손을 뻗으려 할 때, 먼저 앱을 써
        보세요. 몇 주만 지나면 서랍은 계속 닫힌 채로 있게 됩니다.
      </p>
    </article>
  );
}

export function PostZH() {
  return (
    <article className="prose-content">
      <p className="lead">
        大多数人装了一个 AR 测量应用，测了一样东西，然后就忘了它的存在。这挺可惜的，因为同一个
        应用能搞定一大堆传统工具要么做不了、要么做得很糟的测量。下面这七种用法，你多半还没试过。
      </p>

      <h2>1. 斜屋顶的角度</h2>
      <p>
        用卷尺很难做到，你得爬上去。用 iPhone，只要站在墙脚下，把摄像头沿着屋顶线往上对，再用角度
        工具就行。AR 量角器会把屋顶坡度以度数读出来，你连地都不用离开。
      </p>
      <p>
        适用于：太阳能板报价（要求坡度精确到 ±2°）、自己动手更换瓦片、把真实坡度和房产中介所说的
        对比一下。
      </p>

      <h2>2. 电视有没有挂正</h2>
      <p>
        把手机贴在电视侧面，切换到气泡水平仪模式。读数会告诉你电视是否在 0.5 度以内保持水平。墙挂
        支架的标准容差是 ±2 度，一旦超出这个范围，无论你把支架拧得多仔细，电视看起来都会有点歪。
      </p>

      <h2>3. 一棵树（或一栋楼，或一个人）的高度</h2>
      <p>
        AR 高度测量以地面作为参照面。站在平整的地面上，把摄像头对准树的根部，点击锚定，再对准树顶
        点一下。应用就会根据角度和手机的位置算出高度。
      </p>
      <p>
        精度：10 m 高的树为 ±5%，30 m 高的楼为 ±10%。用来判断“这棵树会不会高得碰到电线？”足够了，
        但不适合工程用途。
      </p>

      <h2>4. 倒车入位前，车位的确切宽度</h2>
      <p>
        在车外，把摄像头横着对准两条车位线之间的车位。分别点一下每条线。再和自己车的宽度比一比
        （大多数轿车通常是 1.8-2.0 m，SUV 是 2.0-2.2 m）。如果车位净宽不足 2.4 m，而你的车又比较宽，
        那就别停了，你没空间开车门。
      </p>

      <h2>5. 画框挂得正不正</h2>
      <p>
        把手机平贴在画框的下边缘，看气泡水平仪。大多数画框都是用一颗钉子加一根线挂着的，时间一长
        总会稍微跑偏。1 度的倾斜看起来就像故意挂歪的，而 AR 水平仪一眼就能发现。
      </p>

      <h2>6. 你家地板的坡度</h2>
      <p>
        老房子会下沉，地板会倾斜。把手机平放在不同房间的地板上，水平仪读数会准确告诉你每块地板偏离
        水平多少。在 5 m 长的房间里倾斜 1 度，垂直方向就有 9 cm 的落差，足以让一个球滚起来。超过 2 度
        就说明存在结构问题，值得请测量师看看。
      </p>

      <h2>7. 队伍有多长</h2>
      <p>
        有点无厘头但很实用：在队伍最前面举起手机，切换到 AR 测量，点一下最前面那人的脚，再点一下最后
        那人的脚。现在你就清楚队伍到底有多长、要等多久了（在结账队里，人们通常以每秒 30-40 cm 的速度
        前进）。在机场尤其好玩。
      </p>

      <h2>附赠：还能测、但多半不该测的东西</h2>
      <ul>
        <li>你家狗的身高，用来订做定制胸背带，可以，但狗得乖乖站着不动</li>
        <li>从水面上方测游泳池的深度，有 LiDAR 可以，没有 LiDAR 就不行（水面没有 AR 特征点）</li>
        <li>月亮有多远，不行。别试了。</li>
      </ul>

      <h2>重点</h2>
      <p>
        一个 AR 测量应用，能把你的手机一次变成卷尺、水平仪、量角器和激光测距仪。那些传统工具每件
        都要 15-50 欧元，还常年躺在抽屉里。这个应用是免费的，就装在你口袋里。下次你想伸手去拿那些
        工具时，先试试这个应用。几周之后，抽屉就一直关着了。
      </p>
    </article>
  );
}

export function PostPT() {
  return (
    <article className="prose-content">
      <p className="lead">
        A maioria das pessoas instala um app de medição em AR, mede uma coisa e
        esquece que ele existe. Uma pena, porque o mesmo app dá conta de um
        monte de medições que as ferramentas tradicionais não fazem ou fazem
        mal. Aqui vão sete usos que você provavelmente ainda não experimentou.
      </p>

      <h2>1. O ângulo de um telhado inclinado</h2>
      <p>
        Difícil de fazer com trena, você teria que subir lá. Com um iPhone,
        fique no pé da parede, aponte a câmera para cima ao longo da linha do
        telhado e use a ferramenta de ângulo. O transferidor em AR lê a
        inclinação do telhado em graus sem que você saia do chão.
      </p>
      <p>
        Útil para: orçamentos de painéis solares (que exigem a inclinação com
        precisão de ±2°), troca de telhas por conta própria, comparar a
        inclinação real com a que o corretor afirmou.
      </p>

      <h2>2. Se a sua TV está nivelada na parede</h2>
      <p>
        Encoste o telefone na lateral da TV e mude para o modo nível de bolha. A
        leitura diz se a TV está no prumo com precisão de 0,5 grau. A tolerância
        padrão de um suporte de parede é de ±2 graus; se você passar disso, a TV
        vai parecer levemente torta por mais cuidado que você tenha tido ao
        apertar o suporte.
      </p>

      <h2>3. A altura de uma árvore (ou de um prédio, ou de uma pessoa)</h2>
      <p>
        A medição de altura em AR usa o plano do chão como referência. Fique em
        terreno plano, aponte a câmera para a base da árvore, toque para fixar o
        ponto, depois mire o topo e toque de novo. O app calcula a altura a
        partir do ângulo e da posição do seu telefone.
      </p>
      <p>
        Precisão: ±5% numa árvore de 10 m, ±10% num prédio de 30 m. Suficiente
        para "essa árvore está alta demais para a rede elétrica?", mas não para
        fins de engenharia.
      </p>

      <h2>4. A largura exata de uma vaga antes de entrar de ré</h2>
      <p>
        De fora do carro, aponte a câmera atravessando a vaga, entre as linhas.
        Toque em cada linha. Compare com a largura do seu carro (geralmente
        1,8-2,0 m na maioria dos sedãs, 2,0-2,2 m nos SUVs). Se a largura livre
        da vaga for menor que 2,4 m e você tiver um veículo mais largo, deixe
        para lá: não vai ter espaço para abrir as portas.
      </p>

      <h2>5. Se um quadro está pendurado reto</h2>
      <p>
        Encoste o telefone reto na borda inferior do quadro. Confira o nível de
        bolha. A maioria dos quadros fica presa por um prego e um arame, e
        sempre acaba saindo um pouco do nível com o tempo. Uma inclinação de 1
        grau parece torta de propósito; o nível em AR pega isso na hora.
      </p>

      <h2>6. A inclinação do seu piso</h2>
      <p>
        Casas antigas assentam. Os pisos pendem. Coloque o telefone reto no piso
        de cômodos diferentes, e a leitura do nível diz exatamente o quanto cada
        piso desvia da horizontal. Uma inclinação de 1 grau num cômodo de 5 m dá
        9 cm de desnível, o suficiente para uma bola rolar. Qualquer coisa acima
        de 2 graus indica problemas estruturais que merecem a opinião de um
        perito.
      </p>

      <h2>7. O tamanho da fila</h2>
      <p>
        Uma pequena bobagem, mas útil: levante o telefone no início da fila, mude
        para a medição em AR, toque nos pés da primeira pessoa e depois nos da
        última. Agora você sabe exatamente o tamanho da fila e quanto vai
        esperar (no caixa, as pessoas costumam avançar a 30-40 cm/s).
        Especialmente divertido em aeroportos.
      </p>

      <h2>Bônus: coisas que você também pode medir mas provavelmente não deveria</h2>
      <ul>
        <li>A altura do seu cachorro para encomendar uma coleira sob medida, funciona, mas o cachorro tem que ficar parado</li>
        <li>A profundidade de uma piscina a partir da superfície da água, possível com LiDAR, falha sem LiDAR (a água não tem pontos de referência AR)</li>
        <li>A que distância está a Lua, não. Não tente.</li>
      </ul>

      <h2>A ideia</h2>
      <p>
        Um app de medição em AR transforma seu telefone em trena, nível,
        transferidor e medidor de distância a laser ao mesmo tempo. Cada uma
        dessas ferramentas tradicionais custa de € 15 a € 50 e vive numa gaveta.
        O app é grátis e vive no seu bolso. Da próxima vez que você for pegar
        qualquer uma dessas ferramentas, experimente o app primeiro. Depois de
        algumas semanas, a gaveta fica fechada.
      </p>
    </article>
  );
}

export function PostIT() {
  return (
    <article className="prose-content">
      <p className="lead">
        La maggior parte delle persone installa un'app di misurazione in AR,
        misura una cosa e si dimentica che esiste. Un peccato, perché la stessa
        app se la cava con un sacco di misurazioni che gli strumenti tradizionali
        non riescono a fare o fanno male. Ecco sette usi che probabilmente non
        hai ancora provato.
      </p>

      <h2>1. L'angolo di un tetto spiovente</h2>
      <p>
        Difficile da fare con il metro, dovresti arrampicarti lassù. Con un
        iPhone, mettiti ai piedi del muro, punta la fotocamera verso l'alto lungo
        la linea del tetto e usa lo strumento angolo. Il goniometro in AR legge
        la pendenza del tetto in gradi senza che tu debba staccarti da terra.
      </p>
      <p>
        Utile per: preventivi di pannelli solari (che richiedono la pendenza con
        precisione di ±2°), sostituzione fai-da-te delle tegole, confronto tra la
        pendenza reale e quella dichiarata dall'agente immobiliare.
      </p>

      <h2>2. Se il televisore è montato in piano</h2>
      <p>
        Appoggia il telefono al lato del televisore e passa alla modalità livella
        a bolla. La lettura ti dice se il televisore è a piombo con una precisione
        di 0,5 gradi. La tolleranza standard di un supporto a parete è di ±2
        gradi; se sei fuori da quel margine, il televisore sembrerà leggermente
        storto per quanta cura tu ci abbia messo nello stringere la staffa.
      </p>

      <h2>3. L'altezza di un albero (o di un edificio, o di una persona)</h2>
      <p>
        La misurazione dell'altezza in AR usa il piano del terreno come
        riferimento. Mettiti su terreno pianeggiante, punta la fotocamera alla
        base dell'albero, tocca per fissare il punto, poi mira alla cima e tocca
        di nuovo. L'app calcola l'altezza a partire dall'angolo e dalla posizione
        del telefono.
      </p>
      <p>
        Precisione: ±5% su un albero di 10 m, ±10% su un edificio di 30 m.
        Sufficiente per "questo albero è troppo alto per le linee elettriche?",
        ma non per scopi ingegneristici.
      </p>

      <h2>4. La larghezza esatta di un posto auto prima di entrare in retromarcia</h2>
      <p>
        Da fuori dall'auto, punta la fotocamera attraverso il posto, tra le
        strisce. Tocca ciascuna linea. Confronta con la larghezza della tua auto
        (di solito 1,8-2,0 m per la maggior parte delle berline, 2,0-2,2 m per i
        SUV). Se la larghezza utile del posto è inferiore a 2,4 m e hai un veicolo
        più largo, lascia perdere: non avrai spazio per aprire le portiere.
      </p>

      <h2>5. Se un quadro è appeso dritto</h2>
      <p>
        Premi il telefono di piatto contro il bordo inferiore della cornice.
        Controlla la livella a bolla. La maggior parte delle cornici è appesa con
        un chiodo e un filo, e con il tempo finiscono sempre per spostarsi un po'
        dall'orizzontale. Un'inclinazione di 1 grado sembra storta di proposito;
        la livella in AR la coglie all'istante.
      </p>

      <h2>6. La pendenza del tuo pavimento</h2>
      <p>
        Le case vecchie si assestano. I pavimenti pendono. Appoggia il telefono di
        piatto sul pavimento in stanze diverse, e la lettura della livella ti dice
        esattamente quanto ciascun pavimento si discosta dall'orizzontale.
        Un'inclinazione di 1 grado su una stanza di 5 m equivale a 9 cm di
        dislivello, abbastanza per far rotolare una pallina. Tutto ciò che supera
        i 2 gradi indica problemi strutturali che meritano il parere di un
        geometra.
      </p>

      <h2>7. Quanto è lunga la fila</h2>
      <p>
        Una piccola assurdità ma utile: alza il telefono all'inizio della fila,
        passa alla misurazione in AR, tocca i piedi della prima persona e poi
        quelli dell'ultima. Ora sai esattamente quanto è lunga la fila e quanto
        aspetterai (alla cassa le persone avanzano di solito a 30-40 cm/sec).
        Particolarmente divertente negli aeroporti.
      </p>

      <h2>Bonus: cose che puoi misurare ma probabilmente non dovresti</h2>
      <ul>
        <li>L'altezza del tuo cane per ordinare una pettorina su misura, funziona, ma il cane deve stare fermo</li>
        <li>La profondità di una piscina dalla superficie dell'acqua, possibile con il LiDAR, fallisce senza LiDAR (l'acqua non ha punti di riferimento AR)</li>
        <li>Quanto è lontana la Luna, no. Non provarci.</li>
      </ul>

      <h2>Il punto</h2>
      <p>
        Un'app di misurazione in AR trasforma il telefono in metro, livella,
        goniometro e distanziometro laser tutto insieme. Gli strumenti
        tradizionali costano ciascuno 15-50 € e vivono in un cassetto. L'app è
        gratuita e vive in tasca. La prossima volta che staresti per prendere uno
        di quegli strumenti, prova prima l'app. Dopo qualche settimana, il
        cassetto resta chiuso.
      </p>
    </article>
  );
}

export function PostPL() {
  return (
    <article className="prose-content">
      <p className="lead">
        Większość ludzi instaluje aplikację do pomiarów w AR, mierzy jedną rzecz
        i zapomina, że ją ma. Szkoda, bo ta sama aplikacja radzi sobie z mnóstwem
        pomiarów, których tradycyjne narzędzia albo w ogóle nie potrafią wykonać,
        albo robią to kiepsko. Oto siedem zastosowań, których pewnie jeszcze nie
        próbowałeś.
      </p>

      <h2>1. Kąt nachylenia spadzistego dachu</h2>
      <p>
        Miarką trudno to zrobić, musiałbyś się tam wspiąć. Z iPhone'em stań u
        podstawy ściany, skieruj aparat w górę wzdłuż linii dachu i użyj narzędzia
        kąta. Kątomierz AR odczyta nachylenie dachu w stopniach, a ty nawet nie
        oderwiesz się od ziemi.
      </p>
      <p>
        Przydatne przy: wycenach paneli słonecznych (które wymagają nachylenia z
        dokładnością ±2°), samodzielnej wymianie dachówek, porównaniu rzeczywistego
        nachylenia z tym, co twierdził pośrednik nieruchomości.
      </p>

      <h2>2. Czy telewizor wisi równo</h2>
      <p>
        Przyłóż telefon do boku telewizora i przełącz na tryb poziomicy z
        pęcherzykiem. Odczyt powie ci, czy telewizor jest w pionie z dokładnością
        do 0,5 stopnia. Standardowa tolerancja uchwytu ściennego to ±2 stopnie, a
        jeśli z niej wyjdziesz, telewizor będzie wyglądał na lekko przekrzywiony,
        choćbyś dokręcał uchwyt jak najstaranniej.
      </p>

      <h2>3. Wysokość drzewa (albo budynku, albo osoby)</h2>
      <p>
        Pomiar wysokości w AR wykorzystuje płaszczyznę gruntu jako punkt
        odniesienia. Stań na równym podłożu, skieruj aparat na podstawę drzewa,
        dotknij, by ustawić punkt, następnie wyceluj w wierzchołek i dotknij
        ponownie. Aplikacja obliczy wysokość na podstawie kąta i położenia twojego
        telefonu.
      </p>
      <p>
        Dokładność: ±5% przy drzewie o wysokości 10 m, ±10% przy budynku o
        wysokości 30 m. W zupełności wystarczy na pytanie „czy to drzewo nie jest
        za wysokie dla linii energetycznych?”, ale nie do celów inżynieryjnych.
      </p>

      <h2>4. Dokładna szerokość miejsca parkingowego, zanim wjedziesz tyłem</h2>
      <p>
        Stojąc obok samochodu, skieruj aparat w poprzek miejsca, między liniami.
        Dotknij każdej linii. Porównaj z szerokością swojego auta (zwykle 1,8-2,0
        m w większości sedanów, 2,0-2,2 m w SUV-ach). Jeśli wolna szerokość
        miejsca jest mniejsza niż 2,4 m, a masz szersze auto, odpuść sobie: nie
        będziesz miał jak otworzyć drzwi.
      </p>

      <h2>5. Czy obraz wisi prosto</h2>
      <p>
        Przyłóż telefon płasko do dolnej krawędzi ramy. Sprawdź poziomicę.
        Większość obrazów wisi na jednym gwoździu i drucie, więc z czasem zawsze
        lekko schodzą z poziomu. Przechylenie o 1 stopień wygląda jak celowo
        przekrzywione; poziomica AR wychwyci to natychmiast.
      </p>

      <h2>6. Spadek twojej podłogi</h2>
      <p>
        Stare domy osiadają. Podłogi się przechylają. Połóż telefon płasko na
        podłodze w różnych pomieszczeniach, a odczyt poziomicy powie ci dokładnie,
        o ile każda podłoga odchyla się od poziomu. Przechylenie o 1 stopień na
        pomieszczeniu długości 5 m to 9 cm różnicy w pionie, czyli tyle, że
        piłeczka się potoczy. Wszystko powyżej 2 stopni wskazuje na problemy
        konstrukcyjne, przy których warto zasięgnąć opinii rzeczoznawcy.
      </p>

      <h2>7. Jak długa jest kolejka</h2>
      <p>
        Drobna niedorzeczność, ale bywa przydatna: unieś telefon na początku
        kolejki, przełącz na pomiar AR, dotknij stóp pierwszej osoby, a potem
        ostatniej. Teraz wiesz dokładnie, jak długa jest kolejka i ile będziesz
        czekać (przy kasie ludzie zwykle przesuwają się z prędkością 30-40 cm/s).
        Szczególnie zabawne na lotniskach.
      </p>

      <h2>Bonus: rzeczy, które też da się zmierzyć, ale chyba nie warto</h2>
      <ul>
        <li>Wzrost twojego psa, by zamówić szelki na miarę, działa, ale pies musi stać nieruchomo</li>
        <li>Głębokość basenu znad powierzchni wody, możliwa z LiDAR, nie wychodzi bez LiDAR (woda nie ma punktów odniesienia AR)</li>
        <li>Jak daleko jest Księżyc, nie. Nawet nie próbuj.</li>
      </ul>

      <h2>Sedno</h2>
      <p>
        Aplikacja do pomiarów w AR zamienia twój telefon naraz w miarkę,
        poziomicę, kątomierz i dalmierz laserowy. Każde z tych tradycyjnych
        narzędzi kosztuje 15-50 € i leży w szufladzie. Aplikacja jest darmowa i
        siedzi w twojej kieszeni. Następnym razem, gdy chciałbyś sięgnąć po
        którekolwiek z tych narzędzi, spróbuj najpierw aplikacji. Po kilku
        tygodniach szuflada pozostaje zamknięta.
      </p>
    </article>
  );
}

export function PostTR() {
  return (
    <article className="prose-content">
      <p className="lead">
        Çoğu insan bir AR ölçüm uygulaması kurar, tek bir şey ölçer ve orada
        olduğunu unutur. Yazık, çünkü aynı uygulama, geleneksel aletlerin ya hiç
        yapamadığı ya da kötü yaptığı bir sürü ölçümün üstesinden gelir. İşte
        muhtemelen henüz denemediğiniz yedi kullanım.
      </p>

      <h2>1. Eğimli bir çatının açısı</h2>
      <p>
        Şeritmetreyle yapması zor, oraya tırmanmanız gerekir. iPhone ile duvarın
        dibinde durun, kamerayı çatı çizgisi boyunca yukarı doğrultun ve açı
        aracını kullanın. AR açıölçer, çatının eğimini siz yerden ayrılmadan
        derece cinsinden okur.
      </p>
      <p>
        Şunlar için faydalı: güneş paneli teklifleri (±2° hassasiyetinde eğim
        ister), kendin yap kiremit değişimi, gerçek eğimi emlakçının iddia
        ettiğiyle karşılaştırma.
      </p>

      <h2>2. Televizyonunuz düz mü asılmış</h2>
      <p>
        Telefonu televizyonun yanına dayayın, su terazisi moduna geçin. Okuma
        size televizyonun 0,5 derece hassasiyetinde şakulde olup olmadığını
        söyler. Duvar montaj aparatının standart toleransı ±2 derecedir; bunun
        dışına çıkarsanız, aparatı ne kadar özenle sıkarsanız sıkın televizyon
        biraz eğri görünür.
      </p>

      <h2>3. Bir ağacın (ya da bir binanın, ya da bir kişinin) yüksekliği</h2>
      <p>
        AR yükseklik ölçümü, zemin düzlemini referans olarak kullanır. Düz bir
        zeminde durun, kamerayı ağacın dibine doğrultun, sabitlemek için dokunun,
        ardından tepeye nişan alıp tekrar dokunun. Uygulama, yüksekliği açıdan ve
        telefonunuzun konumundan hesaplar.
      </p>
      <p>
        Hassasiyet: 10 m'lik bir ağaçta ±5%, 30 m'lik bir binada ±10%. "Bu ağaç
        elektrik hatları için fazla mı yüksek?" sorusuna yeter ama mühendislik
        amaçları için uygun değildir.
      </p>

      <h2>4. Geri geri girmeden önce park yerinin tam genişliği</h2>
      <p>
        Arabanın dışından, kamerayı çizgilerin arasında park yerini boydan boya
        doğrultun. Her çizgiye dokunun. Arabanızın genişliğiyle karşılaştırın
        (çoğu sedanda genelde 1,8-2,0 m, SUV'larda 2,0-2,2 m). Yerin net
        genişliği 2,4 m'nin altındaysa ve aracınız daha genişse, geçin gitsin:
        kapıları açacak yeriniz olmaz.
      </p>

      <h2>5. Bir tablo düzgün asılmış mı</h2>
      <p>
        Telefonu çerçevenin alt kenarına düz bastırın. Su terazisini kontrol
        edin. Tabloların çoğu tek bir çivi ve telle asılıdır, zamanla hep biraz
        düzlüklerinden kayarlar. 1 derecelik bir eğim kasıtlı çarpık gibi
        görünür; AR terazisi bunu anında yakalar.
      </p>

      <h2>6. Zemininizin eğimi</h2>
      <p>
        Eski evler oturur. Zeminler eğilir. Telefonu farklı odalarda zemine düz
        koyun, terazi okuması her zeminin yataydan tam olarak ne kadar saptığını
        söyler. 5 m'lik bir odada 1 derecelik eğim, dikeyde 9 cm düşüş demektir
        ki bir topu yuvarlamaya yeter. 2 dereceyi aşan her şey, bir eksperin
        görüşünü almaya değer yapısal sorunlara işaret eder.
      </p>

      <h2>7. Sıra ne kadar uzun</h2>
      <p>
        Küçük bir saçmalık ama işe yarar: telefonu sıranın başında kaldırın, AR
        ölçüme geçin, en öndeki kişinin ayaklarına, sonra en arkadakinin
        ayaklarına dokunun. Artık sıranın tam olarak ne kadar uzun olduğunu ve ne
        kadar bekleyeceğinizi biliyorsunuz (kasa sırasında insanlar genelde
        saniyede 30-40 cm ilerler). Havalimanlarında özellikle eğlenceli.
      </p>

      <h2>Ekstra: ölçebileceğiniz ama muhtemelen ölçmemeniz gereken şeyler</h2>
      <ul>
        <li>Özel tasma sipariş etmek için köpeğinizin boyu, işe yarar ama köpeğin kımıldamadan durması gerekir</li>
        <li>Su yüzeyinin üstünden bir havuzun derinliği, LiDAR ile mümkün, LiDAR olmadan başarısız olur (suyun AR referans noktası yoktur)</li>
        <li>Ay'ın ne kadar uzakta olduğu, hayır. Denemeyin.</li>
      </ul>

      <h2>Asıl mesele</h2>
      <p>
        Bir AR ölçüm uygulaması, telefonunuzu aynı anda şeritmetreye, su
        terazisine, açıölçere ve lazer mesafe ölçere dönüştürür. Geleneksel
        aletlerin her biri 15-50 € tutar ve bir çekmecede yatar. Uygulama ücretsiz
        ve cebinizde duruyor. Bir dahaki sefere o aletlerden birine uzanmak
        istediğinizde, önce uygulamayı deneyin. Birkaç hafta sonra çekmece kapalı
        kalır.
      </p>
    </article>
  );
}

export function PostAR() {
  return (
    <article className="prose-content">
      <p className="lead">
        معظم الناس يثبّتون تطبيق قياس بالواقع المعزز، يقيسون شيئًا واحدًا، ثم
        ينسون وجوده. وهذا أمر مؤسف، فالتطبيق نفسه يتولى مجموعة من القياسات التي
        إما لا تستطيع الأدوات التقليدية القيام بها أو تؤديها بشكل سيئ. إليك سبعة
        استخدامات لم تجربها على الأرجح بعد.
      </p>

      <h2>1. زاوية سطح مائل</h2>
      <p>
        يصعب فعل ذلك بشريط القياس، فعليك أن تتسلق إلى هناك. مع iPhone، قف عند
        أسفل الجدار، ووجّه الكاميرا إلى الأعلى على امتداد خط السطح، واستخدم أداة
        الزاوية. تقرأ المنقلة بالواقع المعزز ميل السطح بالدرجات دون أن تغادر مكانك
        على الأرض.
      </p>
      <p>
        مفيد في: عروض أسعار الألواح الشمسية (التي تتطلب ميلًا بدقة ±2°)، استبدال
        القرميد بنفسك، ومقارنة الميل الحقيقي بما ادّعاه الوكيل العقاري.
      </p>

      <h2>2. ما إذا كان تلفازك مثبتًا بشكل مستوٍ</h2>
      <p>
        ضع الهاتف على جانب التلفاز، وانتقل إلى وضع ميزان الفقاعة. تخبرك القراءة بما
        إذا كان التلفاز عموديًا بدقة 0.5 درجة. التفاوت القياسي لحامل الجدار هو ±2
        درجة، وإن تجاوزت ذلك، سيبدو التلفاز مائلًا قليلًا مهما أحكمت ربط الحامل
        بعناية.
      </p>

      <h2>3. ارتفاع شجرة (أو مبنى، أو شخص)</h2>
      <p>
        يستخدم قياس الارتفاع بالواقع المعزز مستوى الأرض كمرجع. قف على أرض مستوية،
        ووجّه الكاميرا إلى قاعدة الشجرة، وانقر للتثبيت، ثم صوّب نحو القمة وانقر مرة
        أخرى. يحسب التطبيق الارتفاع من الزاوية ومن موضع هاتفك.
      </p>
      <p>
        الدقة: ±5% لشجرة بارتفاع 10 أمتار، و±10% لمبنى بارتفاع 30 مترًا. كافٍ
        لسؤال «هل هذه الشجرة أطول من اللازم بالنسبة لخطوط الكهرباء؟» لكنه لا يصلح
        للأغراض الهندسية.
      </p>

      <h2>4. العرض الدقيق لموقف السيارة قبل أن تدخل بالرجوع للخلف</h2>
      <p>
        من خارج السيارة، وجّه الكاميرا عرضيًا عبر الموقف بين الخطوط. انقر على كل
        خط. قارن ذلك بعرض سيارتك (عادة 1.8-2.0 متر لمعظم سيارات السيدان، و2.0-2.2
        متر لسيارات الدفع الرباعي). إذا كان العرض الصافي للموقف أقل من 2.4 متر
        وسيارتك أعرض، فتجاوزه: لن تجد مجالًا لفتح الأبواب.
      </p>

      <h2>5. ما إذا كان إطار الصورة معلقًا باستقامة</h2>
      <p>
        اضغط الهاتف بشكل مسطح على الحافة السفلية للإطار. تحقق من ميزان الفقاعة.
        معظم الإطارات تُعلّق بمسمار واحد وسلك، وهي تنحرف دائمًا قليلًا عن الاستواء
        مع مرور الوقت. الميل بمقدار درجة واحدة يبدو مائلًا عن قصد؛ والميزان بالواقع
        المعزز يكتشفه على الفور.
      </p>

      <h2>6. انحدار أرضيتك</h2>
      <p>
        تهبط البيوت القديمة. وتنحدر الأرضيات. ضع الهاتف بشكل مسطح على الأرض في غرف
        مختلفة، فتخبرك قراءة الميزان بمقدار انحراف كل أرضية عن الأفق بالضبط. الميل
        بمقدار درجة واحدة على غرفة طولها 5 أمتار يعني فرقًا رأسيًا قدره 9 سم، وهو
        كافٍ لجعل كرة تتدحرج. وأي قيمة تتجاوز درجتين تشير إلى مشكلات إنشائية تستحق
        رأي خبير معاينة.
      </p>

      <h2>7. كم طول الطابور</h2>
      <p>
        طرافة صغيرة لكنها مفيدة: ارفع الهاتف في مقدمة الطابور، وانتقل إلى القياس
        بالواقع المعزز، وانقر على قدمَي أول شخص ثم على قدمَي آخر شخص. الآن تعرف
        بالضبط كم يبلغ طول الطابور وكم ستنتظر (في طابور الدفع يتقدّم الناس عادة
        بمعدل 30-40 سم في الثانية). ممتع بشكل خاص في المطارات.
      </p>

      <h2>إضافة: أشياء يمكنك قياسها أيضًا لكن من الأفضل ألا تفعل</h2>
      <ul>
        <li>طول كلبك لطلب طوق مخصص، ينجح، لكن على الكلب أن يقف ثابتًا</li>
        <li>عمق مسبح من فوق سطح الماء، ممكن مع LiDAR، ويفشل بدون LiDAR (الماء لا يملك نقاط مرجعية للواقع المعزز)</li>
        <li>كم يبعد القمر، لا. لا تحاول.</li>
      </ul>

      <h2>الخلاصة</h2>
      <p>
        يحوّل تطبيق القياس بالواقع المعزز هاتفك إلى شريط قياس وميزان ومنقلة وجهاز
        قياس مسافة بالليزر في آنٍ واحد. كل أداة من هذه الأدوات التقليدية تكلّف
        15-50 يورو وتقبع في درج. التطبيق مجاني ويقبع في جيبك. في المرة القادمة التي
        تهمّ فيها بمدّ يدك إلى أيٍّ من تلك الأدوات، جرّب التطبيق أولًا. بعد بضعة
        أسابيع، يبقى الدرج مغلقًا.
      </p>
    </article>
  );
}

export const bodies = {
  ru: PostRU, de: PostDE, fr: PostFR, es: PostES, ja: PostJA, ko: PostKO,
  'zh-Hans': PostZH, 'pt-BR': PostPT, it: PostIT, pl: PostPL, tr: PostTR, ar: PostAR
};
