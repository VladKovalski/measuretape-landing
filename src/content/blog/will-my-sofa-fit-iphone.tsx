import type { PostMeta } from './posts';

export const meta: PostMeta = {
  slug: 'will-my-sofa-fit-iphone',
  date: '2026-05-22',
  readingTimeMin: 5,
  keywords:
    'will my sofa fit, measure sofa for doorway, measure couch iphone, furniture fit measurement, how to measure sofa for doorway',
  tags: ['Buying guide', 'Furniture', 'Practical'],
  title: {
    en: "Will My Sofa Fit? How to Measure With Your iPhone Before You Buy",
    ru: "Влезет ли диван? Как проверить iPhone-ом до покупки",
    de: "Passt mein Sofa? So misst du mit dem iPhone vor dem Kauf",
    fr: "Mon canapé va-t-il rentrer ? Mesurer avec votre iPhone avant d'acheter",
    es: "¿Cabrá mi sofá? Cómo medir con tu iPhone antes de comprar",
    ja: "ソファは入る？ 購入前にiPhoneで測る方法",
    ko: "소파가 들어갈까? 구매 전 iPhone으로 측정하는 법",
    "zh-Hans": "沙发放得下吗？买之前用 iPhone 量一量",
    "pt-BR": "Será que meu sofá cabe? Como medir com o iPhone antes de comprar",
    it: "Il divano ci entra? Come misurare con l'iPhone prima di comprare",
    pl: "Czy moja sofa się zmieści? Jak zmierzyć iPhone'em przed zakupem",
    tr: "Koltuğum sığar mı? Satın almadan önce iPhone ile nasıl ölçülür",
    ar: "هل ستتسع الأريكة؟ كيف تقيس بهاتف iPhone قبل الشراء"
  },
  excerpt: {
    en: "The four measurements every sofa buyer needs, doorway width, hallway turning radius, stairwell clearance, room footprint, and how to capture them in five minutes with your iPhone.",
    ru: "Четыре замера, которые нужны перед покупкой дивана, дверь, поворот в коридоре, лестница, место в комнате, и как снять их iPhone-ом за пять минут.",
    de: "Die vier Maße, die jeder Sofa-Käufer braucht, Türbreite, Wenderadius im Flur, Treppenhausfreiraum, Stellfläche im Raum, und wie du sie in fünf Minuten mit dem iPhone erfasst.",
    fr: "Les quatre mesures dont tout acheteur de canapé a besoin, largeur de porte, rayon de braquage du couloir, dégagement de la cage d'escalier, emprise au sol, et comment les relever en cinq minutes avec votre iPhone.",
    es: "Las cuatro medidas que necesita todo comprador de sofá, ancho de la puerta, radio de giro del pasillo, hueco de la escalera, espacio en la habitación, y cómo tomarlas en cinco minutos con tu iPhone.",
    ja: "ソファを買う人に必要な4つの測定、出入口の幅、廊下の回転半径、階段の余裕、部屋の設置スペース、そしてそれをiPhoneで5分で測る方法。",
    ko: "소파를 사는 사람이라면 꼭 필요한 네 가지 측정, 문 너비, 복도 회전 반경, 계단 여유 공간, 방 설치 공간, 그리고 iPhone으로 5분 만에 재는 법.",
    "zh-Hans": "每位沙发买家都需要的四项测量，门洞宽度、走廊转弯半径、楼梯间净空、房间占地，以及如何用 iPhone 在五分钟内全部量好。",
    "pt-BR": "As quatro medidas que todo comprador de sofá precisa, largura da porta, raio de curva do corredor, vão da escada, espaço no cômodo, e como tirá-las em cinco minutos com o seu iPhone.",
    it: "Le quattro misure che servono a chi compra un divano, larghezza della porta, raggio di curva del corridoio, spazio della tromba delle scale, ingombro nella stanza, e come rilevarle in cinque minuti con l'iPhone.",
    pl: "Cztery wymiary potrzebne każdemu kupującemu sofę, szerokość drzwi, promień skrętu w korytarzu, prześwit klatki schodowej, miejsce w pokoju, oraz jak zmierzyć je iPhone'em w pięć minut.",
    tr: "Her koltuk alıcısının ihtiyaç duyduğu dört ölçü, kapı genişliği, koridor dönüş yarıçapı, merdiven boşluğu, odadaki yerleşim alanı, ve bunları iPhone ile beş dakikada nasıl ölçeceğiniz.",
    ar: "القياسات الأربعة التي يحتاجها كل من يشتري أريكة، عرض الباب، نصف قطر الدوران في الممر، خلوص بئر الدرج، مساحة الغرفة، وكيفية أخذها في خمس دقائق بهاتف iPhone."
  }
};

export default function Post() {
  return (
    <article className="prose-content">
      <p className="lead">
        Every furniture shop has the same return rate: about 4% of sofas come
        back because they don't fit through the buyer's front door. Most of
        those returns could be prevented with five minutes of measurement
        before the purchase. Here's the checklist, and how to capture it
        with your iPhone.
      </p>

      <h2>The four measurements that matter</h2>
      <p>
        A sofa has to navigate four pinch points between the truck and your
        living room:
      </p>
      <ol>
        <li><strong>Front door opening</strong>, width and height</li>
        <li><strong>Hallway turning radius</strong>, the tightest corner the sofa has to round</li>
        <li><strong>Stairwell clearance</strong> (if you're not on the ground floor)</li>
        <li><strong>Final room footprint</strong>, where the sofa will sit, relative to existing furniture</li>
      </ol>

      <h2>1. Front door</h2>
      <p>
        Stand in the doorway. Open Ruler AR (or any AR measuring app), select
        <em> length mode</em>, and tap the inside of one door jamb, then the
        other. That's your door's <strong>clear width</strong>, the actual
        passable dimension, not the frame-to-frame width.
      </p>
      <p>
        Repeat top-to-bottom for door height. A standard interior door is
        80 cm × 200 cm but vintage homes and apartment doors vary wildly. Sofas
        wider than your clear width need to come in on their side or upright.
      </p>

      <h2>2. Hallway turning radius</h2>
      <p>
        If the front door opens straight into a hallway, the sofa needs to
        turn. Measure the corridor width at the turn (point your phone across
        the corridor and tap each wall). Then measure the corner depth, from the corner of the wall to the opposite parallel wall.
      </p>
      <p>
        The rule of thumb: <strong>your sofa's diagonal (length × depth via Pythagoras) must be
        less than the corridor width plus the corner depth.</strong> The app's area
        tool lets you draw the corner footprint as a polygon and read the
        diagonal directly.
      </p>

      <h2>3. Stairwell clearance</h2>
      <p>
        Stairwell measurement is where AR really earns its keep. Hold the
        phone perpendicular to the stairs, midway up, and use the Height tool
        to capture vertical clearance. Then horizontal width at the same
        point. Repeat at the top of the flight where the ceiling can angle
        inward.
      </p>
      <p>
        Spiral stairs and tight L-shaped landings are the killer here.
        The Manual Room Builder can capture the landing footprint in
        30 seconds, sketch the polygon by tapping corners and use the area
        tool to verify the diagonal.
      </p>

      <h2>4. Room footprint</h2>
      <p>
        Walk into the destination room. Note where the sofa is going. Measure
        the wall length where it'll sit, then the clearance from the wall to
        any existing furniture, doorways, or radiators. Most sofas need
        15-30 cm of breathing room on the back if it's near a vent or radiator.
      </p>
      <p>
        Save these as a single project in the app. The PDF export turns the
        whole set into one document you can show the salesperson at IKEA or
        whichever store, "this is my space, what fits?"
      </p>

      <h2>The numbers you actually need to bring to the showroom</h2>
      <ul>
        <li>Door clear width and height</li>
        <li>Corridor width at turn × corner depth</li>
        <li>Stairwell width × ceiling height (if applicable)</li>
        <li>Destination wall length</li>
      </ul>
      <p>
        Compare each to the sofa's <em>shipping dimensions</em>, not just its
        "in-use" dimensions. A sofa packed for shipping is often 5-10 cm
        wider and taller than the final assembled product due to the box and
        protective wrapping. Some sofas come with detachable legs and arms, those measurements are usually published as "in-room" and "packaged"
        on the manufacturer's website.
      </p>

      <h2>What about modular and L-shaped sofas?</h2>
      <p>
        Modular sofas ship in separate pieces, each of which has to fit
        through individually. Measure each piece against your bottleneck (the
        smallest opening). L-shaped sofas usually ship in two parts, chaise and main section, and the larger of the two is what you
        compare to the door.
      </p>

      <h2>Bookmark the measurements</h2>
      <p>
        The PDF export from Ruler AR includes a 2D floor plan with
        dimensions labeled. Send it to your partner. Save the project. When
        you find a sofa you like, open the PDF, compare each shipping
        dimension to your bottleneck, and either commit, or keep looking.
        Two minutes that prevent a 30-minute return trip and a restocking
        fee.
      </p>
    </article>
  );
}

export function PostRU() {
  return (
    <article className="prose-content">
      <p className="lead">
        В любом мебельном магазине показатель возвратов одинаков: около 4%
        диванов возвращают, потому что они не проходят во входную дверь
        покупателя. Большинство таких возвратов можно предотвратить пятью
        минутами замеров до покупки. Вот чек-лист и как снять его с помощью
        iPhone.
      </p>

      <h2>Четыре замера, которые действительно важны</h2>
      <p>
        От грузовика до гостиной диван должен пройти четыре узких места:
      </p>
      <ol>
        <li><strong>Проём входной двери</strong>, ширина и высота</li>
        <li><strong>Радиус поворота в коридоре</strong>, самый тесный угол, который дивану предстоит обогнуть</li>
        <li><strong>Просвет на лестнице</strong> (если вы живёте не на первом этаже)</li>
        <li><strong>Итоговое место в комнате</strong>, где встанет диван, относительно уже стоящей мебели</li>
      </ol>

      <h2>1. Входная дверь</h2>
      <p>
        Встаньте в дверном проёме. Откройте Ruler AR (или любое AR-приложение
        для замеров), выберите
        <em> режим длины</em> и коснитесь внутренней стороны одного косяка, затем
        другого. Это <strong>чистая ширина</strong> вашей двери, реальный
        проходной размер, а не расстояние от рамы до рамы.
      </p>
      <p>
        Повторите сверху вниз, чтобы получить высоту двери. Стандартная
        межкомнатная дверь — 80 cm × 200 cm, но в старых домах и квартирах
        двери сильно различаются. Диваны шире вашей чистой ширины придётся
        вносить на боку или стоймя.
      </p>

      <h2>2. Радиус поворота в коридоре</h2>
      <p>
        Если входная дверь выходит прямо в коридор, дивану нужно повернуть.
        Измерьте ширину коридора в месте поворота (наведите телефон поперёк
        коридора и коснитесь каждой стены). Затем измерьте глубину угла, от
        угла стены до противоположной параллельной стены.
      </p>
      <p>
        Правило большого пальца: <strong>диагональ дивана (длина × глубина по
        теореме Пифагора) должна быть меньше, чем ширина коридора плюс глубина
        угла.</strong> Инструмент площади в приложении позволяет начертить
        контур угла как многоугольник и сразу считать диагональ.
      </p>

      <h2>3. Просвет на лестнице</h2>
      <p>
        Замер лестницы — это где AR по-настоящему отрабатывает своё. Держите
        телефон перпендикулярно лестнице, на середине пролёта, и инструментом
        Высота снимите вертикальный просвет. Затем горизонтальную ширину в той
        же точке. Повторите наверху пролёта, где потолок может уходить внутрь.
      </p>
      <p>
        Винтовые лестницы и тесные Г-образные площадки — вот главная беда.
        Manual Room Builder снимет контур площадки за 30 секунд, набросайте
        многоугольник касаниями по углам и инструментом площади проверьте
        диагональ.
      </p>

      <h2>4. Место в комнате</h2>
      <p>
        Зайдите в комнату назначения. Отметьте, куда встанет диван. Измерьте
        длину стены, у которой он будет стоять, затем зазор от стены до уже
        имеющейся мебели, дверных проёмов или радиаторов. Большинству диванов
        нужно 15-30 cm воздуха сзади, если рядом вентиляция или радиатор.
      </p>
      <p>
        Сохраните всё это одним проектом в приложении. Экспорт в PDF превращает
        весь набор в один документ, который можно показать продавцу в IKEA или
        любом другом магазине: «вот моё пространство, что подойдёт?»
      </p>

      <h2>Цифры, которые действительно нужно взять в шоурум</h2>
      <ul>
        <li>Чистая ширина и высота двери</li>
        <li>Ширина коридора на повороте × глубина угла</li>
        <li>Ширина лестницы × высота потолка (если применимо)</li>
        <li>Длина стены в месте установки</li>
      </ul>
      <p>
        Сравнивайте каждую цифру с <em>транспортными габаритами</em> дивана, а
        не только с его «рабочими» размерами. Упакованный для перевозки диван
        часто на 5-10 cm шире и выше готового собранного изделия из-за коробки
        и защитной упаковки. У некоторых диванов снимаются ножки и подлокотники,
        такие размеры обычно публикуют как «в комнате» и «в упаковке» на сайте
        производителя.
      </p>

      <h2>А что с модульными и угловыми диванами?</h2>
      <p>
        Модульные диваны приезжают отдельными частями, и каждая должна пройти по
        отдельности. Измерьте каждую часть относительно вашего узкого места
        (самого маленького проёма). Угловые диваны обычно приезжают в двух
        частях, кушетка и основная секция, и сравнивать с дверью нужно бо́льшую
        из двух.
      </p>

      <h2>Сохраните замеры в закладки</h2>
      <p>
        Экспорт в PDF из Ruler AR включает 2D-план этажа с подписанными
        размерами. Отправьте его партнёру. Сохраните проект. Когда найдёте
        понравившийся диван, откройте PDF, сравните каждый транспортный габарит
        со своим узким местом и либо решайтесь, либо ищите дальше. Две минуты,
        которые избавят от 30-минутной поездки на возврат и платы за возврат
        товара.
      </p>
    </article>
  );
}

export function PostDE() {
  return (
    <article className="prose-content">
      <p className="lead">
        Jedes Möbelgeschäft kennt dieselbe Rücksendequote: Etwa 4% der Sofas
        kommen zurück, weil sie nicht durch die Haustür des Käufers passen. Die
        meisten dieser Rücksendungen ließen sich mit fünf Minuten Messen vor dem
        Kauf vermeiden. Hier ist die Checkliste, und wie du sie mit dem iPhone
        erfasst.
      </p>

      <h2>Die vier Maße, auf die es ankommt</h2>
      <p>
        Ein Sofa muss zwischen dem Lkw und deinem Wohnzimmer vier Engstellen
        meistern:
      </p>
      <ol>
        <li><strong>Türöffnung der Haustür</strong>, Breite und Höhe</li>
        <li><strong>Wenderadius im Flur</strong>, die engste Ecke, um die das Sofa herum muss</li>
        <li><strong>Freiraum im Treppenhaus</strong> (falls du nicht im Erdgeschoss wohnst)</li>
        <li><strong>Endgültige Stellfläche im Raum</strong>, wo das Sofa stehen wird, im Verhältnis zu vorhandenen Möbeln</li>
      </ol>

      <h2>1. Haustür</h2>
      <p>
        Stell dich in den Türrahmen. Öffne Ruler AR (oder eine beliebige
        AR-Mess-App), wähle
        <em> den Längenmodus</em> und tippe auf die Innenseite des einen
        Türpfostens, dann des anderen. Das ist die <strong>lichte Breite</strong>
        deiner Tür, das tatsächlich durchgängige Maß, nicht die Breite von Rahmen
        zu Rahmen.
      </p>
      <p>
        Wiederhole das von oben nach unten für die Türhöhe. Eine
        Standard-Innentür misst 80 cm × 200 cm, aber in Altbauten und Wohnungen
        variieren die Türen stark. Sofas, die breiter als deine lichte Breite
        sind, müssen hochkant oder auf der Seite hineingetragen werden.
      </p>

      <h2>2. Wenderadius im Flur</h2>
      <p>
        Wenn die Haustür direkt in einen Flur führt, muss das Sofa um die Ecke.
        Miss die Flurbreite an der Kurve (richte dein Handy quer über den Flur
        und tippe auf jede Wand). Miss dann die Ecktiefe, von der Wandecke bis
        zur gegenüberliegenden parallelen Wand.
      </p>
      <p>
        Die Faustregel: <strong>Die Diagonale deines Sofas (Länge × Tiefe per
        Pythagoras) muss kleiner sein als die Flurbreite plus die
        Ecktiefe.</strong> Mit dem Flächenwerkzeug der App kannst du die
        Eckfläche als Polygon zeichnen und die Diagonale direkt ablesen.
      </p>

      <h2>3. Freiraum im Treppenhaus</h2>
      <p>
        Beim Vermessen des Treppenhauses spielt AR seine Stärke richtig aus.
        Halte das Handy senkrecht zur Treppe, auf halber Höhe, und erfasse mit
        dem Höhen-Werkzeug den lichten Abstand nach oben. Dann die horizontale
        Breite an derselben Stelle. Wiederhole das am oberen Ende des Laufs, wo
        die Decke nach innen abknicken kann.
      </p>
      <p>
        Wendeltreppen und enge L-förmige Podeste sind hier der Killer. Der Manual
        Room Builder erfasst die Podestfläche in 30 Sekunden, skizziere das
        Polygon durch Antippen der Ecken und prüfe die Diagonale mit dem
        Flächenwerkzeug.
      </p>

      <h2>4. Stellfläche im Raum</h2>
      <p>
        Geh in den Zielraum. Merk dir, wohin das Sofa kommt. Miss die Länge der
        Wand, an der es stehen soll, dann den Abstand von der Wand zu vorhandenen
        Möbeln, Türöffnungen oder Heizkörpern. Die meisten Sofas brauchen
        15-30 cm Luft an der Rückseite, wenn ein Lüftungsgitter oder Heizkörper
        in der Nähe ist.
      </p>
      <p>
        Speichere all das als ein einziges Projekt in der App. Der PDF-Export
        macht aus dem ganzen Satz ein Dokument, das du dem Verkäufer bei IKEA
        oder einem anderen Geschäft zeigen kannst: „Das ist mein Raum, was passt
        rein?"
      </p>

      <h2>Die Zahlen, die du wirklich in den Showroom mitnehmen musst</h2>
      <ul>
        <li>Lichte Breite und Höhe der Tür</li>
        <li>Flurbreite an der Kurve × Ecktiefe</li>
        <li>Treppenhausbreite × Deckenhöhe (falls relevant)</li>
        <li>Wandlänge am Zielort</li>
      </ul>
      <p>
        Vergleiche jede Zahl mit den <em>Versandmaßen</em> des Sofas, nicht nur
        mit den „Gebrauchsmaßen". Ein für den Versand verpacktes Sofa ist wegen
        Karton und Schutzfolie oft 5-10 cm breiter und höher als das fertig
        montierte Produkt. Manche Sofas haben abnehmbare Beine und Armlehnen,
        diese Maße werden auf der Website des Herstellers meist als „im Raum" und
        „verpackt" angegeben.
      </p>

      <h2>Was ist mit modularen und L-förmigen Sofas?</h2>
      <p>
        Modulare Sofas werden in einzelnen Teilen geliefert, von denen jedes
        einzeln durchpassen muss. Miss jedes Teil gegen deinen Engpass (die
        kleinste Öffnung). L-förmige Sofas kommen meist in zwei Teilen,
        Récamiere und Hauptteil, und das größere der beiden ist das, was du mit
        der Tür vergleichst.
      </p>

      <h2>Speicher dir die Maße ab</h2>
      <p>
        Der PDF-Export von Ruler AR enthält einen 2D-Grundriss mit beschrifteten
        Maßen. Schick ihn deinem Partner. Speichere das Projekt. Wenn du ein Sofa
        findest, das dir gefällt, öffne das PDF, vergleiche jedes Versandmaß mit
        deinem Engpass und entscheide dich entweder, oder such weiter. Zwei
        Minuten, die dir eine 30-minütige Rückfahrt und eine Wiedereinlagerungs­gebühr
        ersparen.
      </p>
    </article>
  );
}

export function PostFR() {
  return (
    <article className="prose-content">
      <p className="lead">
        Tous les magasins de meubles affichent le même taux de retour : environ
        4% des canapés reviennent parce qu'ils ne passent pas la porte d'entrée
        de l'acheteur. La plupart de ces retours pourraient être évités avec
        cinq minutes de mesures avant l'achat. Voici la liste, et comment la
        relever avec votre iPhone.
      </p>

      <h2>Les quatre mesures qui comptent</h2>
      <p>
        Un canapé doit franchir quatre points de pincement entre le camion et
        votre salon :
      </p>
      <ol>
        <li><strong>L'ouverture de la porte d'entrée</strong>, largeur et hauteur</li>
        <li><strong>Le rayon de braquage du couloir</strong>, l'angle le plus serré que le canapé doit contourner</li>
        <li><strong>Le dégagement de la cage d'escalier</strong> (si vous n'êtes pas au rez-de-chaussée)</li>
        <li><strong>L'emprise finale dans la pièce</strong>, là où le canapé se posera, par rapport aux meubles existants</li>
      </ol>

      <h2>1. Porte d'entrée</h2>
      <p>
        Placez-vous dans l'embrasure. Ouvrez Ruler AR (ou n'importe quelle appli
        de mesure AR), sélectionnez
        <em> le mode longueur</em>, et touchez l'intérieur d'un montant de porte,
        puis l'autre. C'est la <strong>largeur de passage</strong> de votre
        porte, la dimension réellement franchissable, et non la largeur de cadre
        à cadre.
      </p>
      <p>
        Répétez de haut en bas pour la hauteur de porte. Une porte intérieure
        standard mesure 80 cm × 200 cm, mais dans les logements anciens et les
        appartements, les portes varient énormément. Les canapés plus larges que
        votre largeur de passage doivent entrer sur le côté ou debout.
      </p>

      <h2>2. Rayon de braquage du couloir</h2>
      <p>
        Si la porte d'entrée donne directement sur un couloir, le canapé doit
        tourner. Mesurez la largeur du couloir au virage (pointez votre téléphone
        en travers du couloir et touchez chaque mur). Mesurez ensuite la
        profondeur de l'angle, du coin du mur jusqu'au mur parallèle opposé.
      </p>
      <p>
        La règle générale : <strong>la diagonale de votre canapé (longueur ×
        profondeur via Pythagore) doit être inférieure à la largeur du couloir
        plus la profondeur de l'angle.</strong> L'outil de surface de l'appli
        vous permet de dessiner l'emprise de l'angle en polygone et de lire la
        diagonale directement.
      </p>

      <h2>3. Dégagement de la cage d'escalier</h2>
      <p>
        C'est dans la mesure de l'escalier que l'AR montre vraiment sa valeur.
        Tenez le téléphone perpendiculaire aux marches, à mi-hauteur, et utilisez
        l'outil Hauteur pour relever le dégagement vertical. Puis la largeur
        horizontale au même endroit. Recommencez en haut de la volée, là où le
        plafond peut s'incliner vers l'intérieur.
      </p>
      <p>
        Les escaliers en colimaçon et les paliers en L serrés sont le vrai
        cauchemar. Le Manual Room Builder peut relever l'emprise du palier en
        30 secondes, esquissez le polygone en touchant les coins et utilisez
        l'outil de surface pour vérifier la diagonale.
      </p>

      <h2>4. Emprise dans la pièce</h2>
      <p>
        Entrez dans la pièce de destination. Repérez où va le canapé. Mesurez la
        longueur du mur où il se posera, puis le dégagement entre le mur et les
        meubles existants, les portes ou les radiateurs. La plupart des canapés
        ont besoin de 15-30 cm de respiration à l'arrière s'ils sont près d'une
        bouche d'aération ou d'un radiateur.
      </p>
      <p>
        Enregistrez tout cela en un seul projet dans l'appli. L'export PDF
        transforme l'ensemble en un document que vous pouvez montrer au vendeur
        chez IKEA ou dans n'importe quel magasin : « voici mon espace, qu'est-ce
        qui rentre ? »
      </p>

      <h2>Les chiffres à vraiment apporter en showroom</h2>
      <ul>
        <li>Largeur et hauteur de passage de la porte</li>
        <li>Largeur du couloir au virage × profondeur de l'angle</li>
        <li>Largeur de l'escalier × hauteur de plafond (le cas échéant)</li>
        <li>Longueur du mur de destination</li>
      </ul>
      <p>
        Comparez chacun aux <em>dimensions d'expédition</em> du canapé, pas
        seulement à ses dimensions « en usage ». Un canapé emballé pour
        l'expédition est souvent 5-10 cm plus large et plus haut que le produit
        final assemblé, à cause du carton et de l'emballage de protection.
        Certains canapés ont des pieds et accoudoirs détachables, ces mesures
        sont généralement publiées comme « en pièce » et « emballé » sur le site
        du fabricant.
      </p>

      <h2>Et pour les canapés modulaires et en L ?</h2>
      <p>
        Les canapés modulaires sont livrés en pièces séparées, chacune devant
        passer individuellement. Mesurez chaque pièce par rapport à votre goulot
        d'étranglement (la plus petite ouverture). Les canapés en L sont
        généralement livrés en deux parties, méridienne et section principale, et
        c'est la plus grande des deux que vous comparez à la porte.
      </p>

      <h2>Mettez les mesures en favoris</h2>
      <p>
        L'export PDF de Ruler AR comprend un plan 2D avec les dimensions
        annotées. Envoyez-le à votre partenaire. Enregistrez le projet. Quand
        vous trouvez un canapé qui vous plaît, ouvrez le PDF, comparez chaque
        dimension d'expédition à votre goulot d'étranglement, et soit vous vous
        décidez, soit vous continuez à chercher. Deux minutes qui vous évitent un
        aller-retour de 30 minutes et des frais de retour.
      </p>
    </article>
  );
}

export function PostES() {
  return (
    <article className="prose-content">
      <p className="lead">
        Toda tienda de muebles tiene la misma tasa de devoluciones: alrededor del
        4% de los sofás vuelven porque no pasan por la puerta de entrada del
        comprador. La mayoría de esas devoluciones podrían evitarse con cinco
        minutos de mediciones antes de comprar. Aquí tienes la lista, y cómo
        tomarla con tu iPhone.
      </p>

      <h2>Las cuatro medidas que importan</h2>
      <p>
        Un sofá tiene que sortear cuatro puntos críticos entre el camión y tu
        salón:
      </p>
      <ol>
        <li><strong>El hueco de la puerta de entrada</strong>, ancho y alto</li>
        <li><strong>El radio de giro del pasillo</strong>, la esquina más cerrada que el sofá tiene que rodear</li>
        <li><strong>El hueco de la escalera</strong> (si no vives en la planta baja)</li>
        <li><strong>El espacio final en la habitación</strong>, donde irá el sofá, en relación con los muebles existentes</li>
      </ol>

      <h2>1. Puerta de entrada</h2>
      <p>
        Colócate en el umbral. Abre Ruler AR (o cualquier app de medición AR),
        selecciona
        <em> el modo longitud</em> y toca la cara interior de una jamba, luego la
        otra. Ese es el <strong>ancho libre</strong> de tu puerta, la dimensión
        realmente transitable, no el ancho de marco a marco.
      </p>
      <p>
        Repite de arriba abajo para la altura de la puerta. Una puerta interior
        estándar mide 80 cm × 200 cm, pero en casas antiguas y pisos las puertas
        varían muchísimo. Los sofás más anchos que tu ancho libre tienen que
        entrar de lado o de pie.
      </p>

      <h2>2. Radio de giro del pasillo</h2>
      <p>
        Si la puerta de entrada da directamente a un pasillo, el sofá tiene que
        girar. Mide el ancho del pasillo en el giro (apunta el teléfono a lo
        ancho del pasillo y toca cada pared). Luego mide la profundidad de la
        esquina, desde la esquina de la pared hasta la pared paralela opuesta.
      </p>
      <p>
        La regla general: <strong>la diagonal de tu sofá (largo × fondo mediante
        Pitágoras) debe ser menor que el ancho del pasillo más la profundidad de
        la esquina.</strong> La herramienta de área de la app te permite dibujar
        el contorno de la esquina como un polígono y leer la diagonal
        directamente.
      </p>

      <h2>3. Hueco de la escalera</h2>
      <p>
        Medir la escalera es donde la AR demuestra de verdad su valía. Sujeta el
        teléfono perpendicular a la escalera, a media altura, y usa la
        herramienta Altura para captar el hueco vertical. Luego el ancho
        horizontal en el mismo punto. Repite en lo alto del tramo, donde el techo
        puede inclinarse hacia dentro.
      </p>
      <p>
        Las escaleras de caracol y los rellanos estrechos en forma de L son lo
        más temible aquí. El Manual Room Builder puede captar el contorno del
        rellano en 30 segundos, dibuja el polígono tocando las esquinas y usa la
        herramienta de área para verificar la diagonal.
      </p>

      <h2>4. Espacio en la habitación</h2>
      <p>
        Entra en la habitación de destino. Anota dónde irá el sofá. Mide la
        longitud de la pared donde se colocará, luego la distancia desde la pared
        hasta los muebles existentes, las puertas o los radiadores. La mayoría de
        los sofás necesitan 15-30 cm de aire por detrás si están cerca de una
        rejilla de ventilación o un radiador.
      </p>
      <p>
        Guarda todo esto como un único proyecto en la app. La exportación a PDF
        convierte el conjunto en un solo documento que puedes enseñar al vendedor
        de IKEA o de la tienda que sea: «este es mi espacio, ¿qué cabe?»
      </p>

      <h2>Los números que de verdad tienes que llevar al showroom</h2>
      <ul>
        <li>Ancho libre y alto de la puerta</li>
        <li>Ancho del pasillo en el giro × profundidad de la esquina</li>
        <li>Ancho de la escalera × altura del techo (si procede)</li>
        <li>Longitud de la pared de destino</li>
      </ul>
      <p>
        Compara cada uno con las <em>dimensiones de envío</em> del sofá, no solo
        con sus dimensiones «en uso». Un sofá embalado para el envío suele ser
        5-10 cm más ancho y más alto que el producto final montado, por la caja y
        el embalaje protector. Algunos sofás llevan patas y brazos desmontables,
        esas medidas suelen publicarse como «en la sala» y «embalado» en la web
        del fabricante.
      </p>

      <h2>¿Y los sofás modulares y en forma de L?</h2>
      <p>
        Los sofás modulares se envían en piezas separadas, y cada una tiene que
        pasar por separado. Mide cada pieza frente a tu cuello de botella (la
        abertura más pequeña). Los sofás en L suelen enviarse en dos partes,
        chaise longue y sección principal, y la mayor de las dos es la que
        comparas con la puerta.
      </p>

      <h2>Guarda las medidas en marcadores</h2>
      <p>
        La exportación a PDF de Ruler AR incluye un plano 2D con las dimensiones
        etiquetadas. Envíaselo a tu pareja. Guarda el proyecto. Cuando encuentres
        un sofá que te guste, abre el PDF, compara cada dimensión de envío con tu
        cuello de botella y, o te decides, o sigues buscando. Dos minutos que
        evitan un viaje de devolución de 30 minutos y una tarifa de reposición.
      </p>
    </article>
  );
}

export function PostJA() {
  return (
    <article className="prose-content">
      <p className="lead">
        どの家具店でも返品率はほぼ同じです。ソファのおよそ4%は、購入者の玄関ドアを
        通らないという理由で戻ってきます。こうした返品のほとんどは、購入前のたった
        5分間の採寸で防げます。ここではそのチェックリストと、iPhoneでの測り方を
        紹介します。
      </p>

      <h2>本当に重要な4つの測定</h2>
      <p>
        ソファはトラックからあなたのリビングまでに、4つの難所を通り抜けなければ
        なりません。
      </p>
      <ol>
        <li><strong>玄関ドアの開口部</strong>、幅と高さ</li>
        <li><strong>廊下の回転半径</strong>、ソファが曲がらなければならない最もきつい角</li>
        <li><strong>階段の余裕</strong>（1階に住んでいない場合）</li>
        <li><strong>最終的な部屋の設置スペース</strong>、既存の家具に対してソファが置かれる位置</li>
      </ol>

      <h2>1. 玄関ドア</h2>
      <p>
        ドアの前に立ちます。Ruler AR（または任意のAR計測アプリ）を開き、
        <em> 長さモード</em>を選び、片側のドア枠の内側をタップし、次にもう片側を
        タップします。それがドアの<strong>有効幅</strong>、つまり実際に通れる寸法で
        あり、枠から枠までの幅ではありません。
      </p>
      <p>
        同じように上から下まで測ってドアの高さを出します。標準的な室内ドアは
        80 cm × 200 cm ですが、古い住宅や集合住宅のドアは大きくばらつきます。
        有効幅より広いソファは、横向きか縦向きで運び入れる必要があります。
      </p>

      <h2>2. 廊下の回転半径</h2>
      <p>
        玄関ドアがそのまま廊下に出る場合、ソファは曲がる必要があります。曲がり角での
        廊下の幅を測ります（廊下を横切るように携帯を向けて、両側の壁をタップします）。
        次に角の奥行きを、壁の角から向かい合う平行な壁まで測ります。
      </p>
      <p>
        目安となるルール：<strong>ソファの対角線（長さ × 奥行きをピタゴラスで計算）は、
        廊下の幅に角の奥行きを足したものより短くなければなりません。</strong>
        アプリの面積ツールを使えば、角の設置面を多角形として描き、対角線をそのまま
        読み取れます。
      </p>

      <h2>3. 階段の余裕</h2>
      <p>
        階段の採寸こそ、ARが本領を発揮する場面です。携帯を階段に対して垂直に、
        中ほどの高さで持ち、Heightツールで垂直方向の余裕を測ります。次に同じ位置で
        水平方向の幅を測ります。天井が内側に傾くことのある階段の上部でも繰り返します。
      </p>
      <p>
        らせん階段や狭いL字の踊り場が、ここでの最大の難関です。Manual Room Builder
        なら踊り場の設置面を30秒で測れます。角をタップして多角形をスケッチし、面積
        ツールで対角線を確認しましょう。
      </p>

      <h2>4. 部屋の設置スペース</h2>
      <p>
        目的の部屋に入ります。ソファをどこに置くか確認します。ソファを置く壁の長さを
        測り、次に壁から既存の家具やドア、ラジエーターまでの空きを測ります。多くの
        ソファは、通気口やラジエーターの近くなら背面に 15-30 cm の余裕が必要です。
      </p>
      <p>
        これらをアプリ内で1つのプロジェクトとして保存します。PDFエクスポートを使えば、
        一式を1つの書類にまとめ、IKEAでもほかの店でも販売員に見せられます。「これが
        うちの空間です。何が入りますか？」
      </p>

      <h2>ショールームに実際に持っていくべき数字</h2>
      <ul>
        <li>ドアの有効幅と高さ</li>
        <li>曲がり角での廊下の幅 × 角の奥行き</li>
        <li>階段の幅 × 天井の高さ（該当する場合）</li>
        <li>設置先の壁の長さ</li>
      </ul>
      <p>
        それぞれをソファの<em>配送時の寸法</em>と比べてください。「使用時」の寸法だけで
        なくです。配送用に梱包されたソファは、箱と保護材のせいで完成品より 5-10 cm
        幅も高さも大きいことがよくあります。脚やアームが取り外せるソファもあり、その
        場合の寸法は通常、メーカーのサイトで「室内」と「梱包時」として公開されています。
      </p>

      <h2>モジュール式やL字型のソファは？</h2>
      <p>
        モジュール式のソファは別々のパーツで届き、それぞれが個別に通らなければなりません。
        各パーツをあなたのボトルネック（最も狭い開口部）と照らし合わせて測ります。
        L字型のソファは通常2つのパーツ、シェーズと本体部分で届き、ドアと比べるのは
        2つのうち大きいほうです。
      </p>

      <h2>測定値をブックマークしておく</h2>
      <p>
        Ruler AR からの PDF エクスポートには、寸法が記入された2D間取り図が含まれます。
        パートナーに送りましょう。プロジェクトを保存します。気に入ったソファを見つけたら
        PDF を開き、各配送寸法をあなたのボトルネックと比べて、決めるか、探し続けるかを
        判断します。30分の返品往復と返品手数料を防ぐ、たった2分です。
      </p>
    </article>
  );
}

export function PostKO() {
  return (
    <article className="prose-content">
      <p className="lead">
        어느 가구점이든 반품률은 거의 같습니다. 소파의 약 4%는 구매자의 현관문을
        통과하지 못해 되돌아옵니다. 이런 반품 대부분은 구매 전 5분의 측정으로 막을 수
        있습니다. 여기 그 체크리스트와, iPhone으로 재는 방법을 소개합니다.
      </p>

      <h2>정말 중요한 네 가지 측정</h2>
      <p>
        소파는 트럭에서 거실까지 네 개의 병목 구간을 통과해야 합니다.
      </p>
      <ol>
        <li><strong>현관문 개구부</strong>, 너비와 높이</li>
        <li><strong>복도 회전 반경</strong>, 소파가 돌아야 하는 가장 좁은 모서리</li>
        <li><strong>계단 여유 공간</strong> (1층이 아니라면)</li>
        <li><strong>최종 방 설치 공간</strong>, 기존 가구를 기준으로 소파가 놓일 자리</li>
      </ol>

      <h2>1. 현관문</h2>
      <p>
        문틀에 서세요. Ruler AR(또는 어떤 AR 측정 앱이든)을 열고
        <em> 길이 모드</em>를 선택한 뒤, 한쪽 문설주 안쪽을 탭하고 이어서 반대쪽을
        탭합니다. 그것이 문의 <strong>유효 폭</strong>, 즉 실제로 통과할 수 있는 치수이며,
        문틀에서 문틀까지의 폭이 아닙니다.
      </p>
      <p>
        같은 방식으로 위에서 아래로 측정해 문 높이를 구합니다. 표준 실내문은
        80 cm × 200 cm 이지만, 오래된 주택이나 아파트의 문은 편차가 큽니다. 유효 폭보다
        넓은 소파는 옆으로 눕히거나 세워서 들여와야 합니다.
      </p>

      <h2>2. 복도 회전 반경</h2>
      <p>
        현관문이 바로 복도로 이어진다면 소파는 방향을 틀어야 합니다. 꺾이는 지점에서
        복도 너비를 측정하세요(복도를 가로질러 휴대폰을 향하게 하고 양쪽 벽을 탭합니다).
        그런 다음 모서리 깊이를, 벽 모서리에서 맞은편 평행한 벽까지 측정합니다.
      </p>
      <p>
        기본 원칙: <strong>소파의 대각선(길이 × 깊이를 피타고라스로 계산)이 복도 너비에
        모서리 깊이를 더한 값보다 짧아야 합니다.</strong> 앱의 면적 도구를 쓰면 모서리
        설치 면을 다각형으로 그려 대각선을 바로 읽을 수 있습니다.
      </p>

      <h2>3. 계단 여유 공간</h2>
      <p>
        계단 측정이야말로 AR이 진가를 발휘하는 곳입니다. 계단 중간 높이에서 휴대폰을
        계단과 수직으로 들고 Height 도구로 수직 여유를 측정하세요. 그다음 같은 지점에서
        수평 너비를 측정합니다. 천장이 안쪽으로 기울 수 있는 계단 윗부분에서도 반복합니다.
      </p>
      <p>
        나선 계단과 좁은 L자 층계참이 여기서 가장 골치 아픈 부분입니다. Manual Room
        Builder로 층계참 설치 면을 30초 만에 측정할 수 있습니다. 모서리를 탭해 다각형을
        그리고 면적 도구로 대각선을 확인하세요.
      </p>

      <h2>4. 방 설치 공간</h2>
      <p>
        놓을 방으로 들어가세요. 소파를 어디에 둘지 정합니다. 소파가 놓일 벽의 길이를
        측정하고, 그다음 벽에서 기존 가구나 출입구, 라디에이터까지의 간격을 측정하세요.
        대부분의 소파는 통풍구나 라디에이터 근처라면 뒤쪽에 15-30 cm 의 여유가 필요합니다.
      </p>
      <p>
        이 모두를 앱에서 하나의 프로젝트로 저장하세요. PDF 내보내기를 쓰면 전체 세트가
        하나의 문서가 되어, IKEA든 어느 매장이든 판매원에게 보여 줄 수 있습니다. “이게 제
        공간이에요. 뭐가 들어가나요?”
      </p>

      <h2>매장에 실제로 가져가야 할 숫자</h2>
      <ul>
        <li>문 유효 폭과 높이</li>
        <li>꺾이는 지점의 복도 너비 × 모서리 깊이</li>
        <li>계단 너비 × 천장 높이 (해당하는 경우)</li>
        <li>설치할 곳의 벽 길이</li>
      </ul>
      <p>
        각 수치를 소파의 <em>배송 치수</em>와 비교하세요. 단순히 “사용 시” 치수가 아닙니다.
        배송용으로 포장된 소파는 상자와 보호 포장 때문에 완성된 조립품보다 폭과 높이가
        5-10 cm 더 큰 경우가 많습니다. 다리와 팔걸이를 분리할 수 있는 소파도 있는데, 그
        치수는 보통 제조사 웹사이트에 “실내”와 “포장 시”로 공개됩니다.
      </p>

      <h2>모듈형과 L자형 소파는?</h2>
      <p>
        모듈형 소파는 별도의 조각으로 배송되며, 각 조각이 개별적으로 통과해야 합니다.
        각 조각을 당신의 병목(가장 좁은 개구부)과 비교해 측정하세요. L자형 소파는 보통 두
        부분, 셰이즈와 본체 부분으로 배송되며, 문과 비교하는 것은 둘 중 더 큰 쪽입니다.
      </p>

      <h2>측정값을 북마크해 두기</h2>
      <p>
        Ruler AR의 PDF 내보내기에는 치수가 표기된 2D 평면도가 포함됩니다. 파트너에게
        보내세요. 프로젝트를 저장하세요. 마음에 드는 소파를 찾으면 PDF를 열어 각 배송
        치수를 당신의 병목과 비교하고, 결정하거나 계속 찾아보세요. 30분짜리 반품 왕복과
        재입고 수수료를 막아 주는 단 2분입니다.
      </p>
    </article>
  );
}

export function PostZH() {
  return (
    <article className="prose-content">
      <p className="lead">
        每家家具店的退货率都差不多：约有 4% 的沙发被退回，因为它们进不了买家的入户门。
        这些退货中的大多数，只要在购买前花五分钟量一量就能避免。这就是清单，以及如何用
        iPhone 把它量下来。
      </p>

      <h2>真正重要的四项测量</h2>
      <p>
        从货车到你的客厅，沙发要闯过四个卡脖子的地方：
      </p>
      <ol>
        <li><strong>入户门开口</strong>，宽度和高度</li>
        <li><strong>走廊转弯半径</strong>，沙发必须绕过的最窄拐角</li>
        <li><strong>楼梯间净空</strong>（如果你不住在一楼）</li>
        <li><strong>房间最终占地</strong>，沙发将摆放的位置，相对于已有的家具</li>
      </ol>

      <h2>1. 入户门</h2>
      <p>
        站在门口。打开 Ruler AR（或任意一款 AR 测量应用），选择
        <em> 长度模式</em>，先点一侧门框内侧，再点另一侧。那就是门的
        <strong>净宽</strong>，也就是实际能通过的尺寸，而不是框到框的宽度。
      </p>
      <p>
        同样从上到下测一遍，得到门的高度。标准的室内门是 80 cm × 200 cm，但老房子和
        公寓的门差别极大。比净宽更宽的沙发，得侧着或竖着搬进来。
      </p>

      <h2>2. 走廊转弯半径</h2>
      <p>
        如果入户门直接通向走廊，沙发就得转弯。在转弯处测量走廊宽度（把手机横对走廊，
        分别点两侧墙面）。然后测量拐角进深，从墙角到对面平行墙面的距离。
      </p>
      <p>
        经验法则：<strong>你沙发的对角线（用勾股定理算出的长 × 深）必须小于走廊宽度
        加上拐角进深。</strong>应用的面积工具可以让你把拐角占地画成一个多边形，并直接
        读出对角线。
      </p>

      <h2>3. 楼梯间净空</h2>
      <p>
        楼梯测量正是 AR 真正发挥价值的地方。把手机垂直于楼梯，在中段位置，用 Height
        工具测出竖向净空。然后在同一点测水平宽度。在楼梯顶端、天花板可能向内倾斜的地方
        再测一遍。
      </p>
      <p>
        旋转楼梯和狭窄的 L 形平台才是这里的大麻烦。Manual Room Builder 能在 30 秒内把
        平台占地量下来，点击各个角画出多边形，再用面积工具核对对角线。
      </p>

      <h2>4. 房间占地</h2>
      <p>
        走进目标房间。想好沙发要放在哪里。测量它将靠放的那面墙的长度，然后测量墙面到
        已有家具、门洞或暖气片之间的间隙。如果靠近通风口或暖气片，大多数沙发背后需要
        15-30 cm 的活动空间。
      </p>
      <p>
        把这些在应用里保存为一个项目。PDF 导出会把整套数据变成一份文件，你可以拿给
        IKEA 或随便哪家店的销售看：“这是我的空间，什么能放得下？”
      </p>

      <h2>你真正该带去展厅的数字</h2>
      <ul>
        <li>门的净宽和高度</li>
        <li>转弯处走廊宽度 × 拐角进深</li>
        <li>楼梯宽度 × 天花板高度（如适用）</li>
        <li>目标墙面长度</li>
      </ul>
      <p>
        把每一项都和沙发的<em>运输尺寸</em>对比，而不只是它的“使用”尺寸。为运输打包的
        沙发，因为纸箱和保护包装，往往比最终组装好的成品宽 5-10 cm、高 5-10 cm。有些
        沙发的脚和扶手可以拆卸，这些尺寸通常会在厂商网站上分别标为“室内”和“打包”。
      </p>

      <h2>模块化和 L 形沙发怎么办？</h2>
      <p>
        模块化沙发以独立部件发货，每一件都得单独通过。把每一件都和你的瓶颈（最小的开口）
        对比测量。L 形沙发通常分两部分发货，贵妃位和主体部分，要拿去和门对比的是两者中
        较大的那一件。
      </p>

      <h2>把测量值收藏起来</h2>
      <p>
        Ruler AR 的 PDF 导出包含一张标注了尺寸的 2D 平面图。发给你的另一半。保存这个
        项目。当你看中一款沙发时，打开 PDF，把每个运输尺寸和你的瓶颈对比，然后要么下定
        决心，要么继续找。这两分钟，能省下一趟 30 分钟的退货往返和一笔补货费。
      </p>
    </article>
  );
}

export function PostPT() {
  return (
    <article className="prose-content">
      <p className="lead">
        Toda loja de móveis tem a mesma taxa de devolução: cerca de 4% dos sofás
        voltam porque não passam pela porta de entrada do comprador. A maioria
        dessas devoluções poderia ser evitada com cinco minutos de medições antes
        da compra. Aqui está a lista, e como capturá-la com o seu iPhone.
      </p>

      <h2>As quatro medidas que importam</h2>
      <p>
        Um sofá precisa vencer quatro pontos de aperto entre o caminhão e a sua
        sala:
      </p>
      <ol>
        <li><strong>A abertura da porta de entrada</strong>, largura e altura</li>
        <li><strong>O raio de curva do corredor</strong>, a esquina mais apertada que o sofá tem de contornar</li>
        <li><strong>O vão da escada</strong> (se você não estiver no térreo)</li>
        <li><strong>O espaço final no cômodo</strong>, onde o sofá vai ficar, em relação aos móveis existentes</li>
      </ol>

      <h2>1. Porta de entrada</h2>
      <p>
        Fique no vão da porta. Abra o Ruler AR (ou qualquer app de medição AR),
        selecione
        <em> o modo comprimento</em> e toque na face interna de um batente da
        porta, depois no outro. Essa é a <strong>largura livre</strong> da sua
        porta, a dimensão realmente transitável, e não a largura de batente a
        batente.
      </p>
      <p>
        Repita de cima para baixo para a altura da porta. Uma porta interna padrão
        mede 80 cm × 200 cm, mas em casas antigas e apartamentos as portas variam
        muitíssimo. Sofás mais largos que a sua largura livre precisam entrar de
        lado ou em pé.
      </p>

      <h2>2. Raio de curva do corredor</h2>
      <p>
        Se a porta de entrada dá direto num corredor, o sofá precisa virar. Meça a
        largura do corredor na curva (aponte o telefone atravessando o corredor e
        toque em cada parede). Depois meça a profundidade da esquina, do canto da
        parede até a parede paralela oposta.
      </p>
      <p>
        A regra prática: <strong>a diagonal do seu sofá (comprimento ×
        profundidade via Pitágoras) precisa ser menor que a largura do corredor
        mais a profundidade da esquina.</strong> A ferramenta de área do app
        permite desenhar o contorno da esquina como um polígono e ler a diagonal
        diretamente.
      </p>

      <h2>3. Vão da escada</h2>
      <p>
        Medir a escada é onde a AR realmente mostra seu valor. Segure o telefone
        perpendicular à escada, na metade do lance, e use a ferramenta Altura para
        capturar o vão vertical. Depois a largura horizontal no mesmo ponto.
        Repita no topo do lance, onde o teto pode se inclinar para dentro.
      </p>
      <p>
        Escadas em espiral e patamares apertados em L são o terror aqui. O Manual
        Room Builder captura o contorno do patamar em 30 segundos, esboce o
        polígono tocando os cantos e use a ferramenta de área para verificar a
        diagonal.
      </p>

      <h2>4. Espaço no cômodo</h2>
      <p>
        Entre no cômodo de destino. Defina onde o sofá vai ficar. Meça o
        comprimento da parede onde ele vai encostar, depois a folga entre a parede
        e os móveis existentes, portas ou radiadores. A maioria dos sofás precisa
        de 15-30 cm de respiro na parte de trás se estiver perto de uma saída de
        ar ou radiador.
      </p>
      <p>
        Salve tudo isso como um único projeto no app. A exportação em PDF
        transforma o conjunto inteiro em um documento que você pode mostrar ao
        vendedor da IKEA ou de qualquer loja: "este é o meu espaço, o que cabe?"
      </p>

      <h2>Os números que você de fato precisa levar ao showroom</h2>
      <ul>
        <li>Largura livre e altura da porta</li>
        <li>Largura do corredor na curva × profundidade da esquina</li>
        <li>Largura da escada × altura do teto (se aplicável)</li>
        <li>Comprimento da parede de destino</li>
      </ul>
      <p>
        Compare cada um com as <em>dimensões de transporte</em> do sofá, não só
        com as dimensões "em uso". Um sofá embalado para transporte costuma ser
        5-10 cm mais largo e mais alto que o produto final montado, por causa da
        caixa e da embalagem de proteção. Alguns sofás têm pés e braços
        removíveis, essas medidas geralmente são publicadas como "no ambiente" e
        "embalado" no site do fabricante.
      </p>

      <h2>E os sofás modulares e em L?</h2>
      <p>
        Sofás modulares são enviados em peças separadas, e cada uma precisa passar
        individualmente. Meça cada peça em relação ao seu gargalo (a menor
        abertura). Sofás em L geralmente vêm em duas partes, chaise e seção
        principal, e é a maior das duas que você compara com a porta.
      </p>

      <h2>Salve as medidas nos favoritos</h2>
      <p>
        A exportação em PDF do Ruler AR inclui uma planta 2D com as dimensões
        marcadas. Envie para o seu parceiro. Salve o projeto. Quando encontrar um
        sofá que goste, abra o PDF, compare cada dimensão de transporte com o seu
        gargalo e então decida, ou continue procurando. Dois minutos que evitam
        uma viagem de devolução de 30 minutos e uma taxa de reposição.
      </p>
    </article>
  );
}

export function PostIT() {
  return (
    <article className="prose-content">
      <p className="lead">
        Ogni negozio di mobili ha lo stesso tasso di reso: circa il 4% dei divani
        torna indietro perché non passa dalla porta d'ingresso dell'acquirente.
        La maggior parte di questi resi si potrebbe evitare con cinque minuti di
        misurazioni prima dell'acquisto. Ecco la checklist, e come rilevarla con
        il tuo iPhone.
      </p>

      <h2>Le quattro misure che contano</h2>
      <p>
        Un divano deve superare quattro strozzature tra il camion e il tuo
        soggiorno:
      </p>
      <ol>
        <li><strong>L'apertura della porta d'ingresso</strong>, larghezza e altezza</li>
        <li><strong>Il raggio di curva del corridoio</strong>, l'angolo più stretto che il divano deve aggirare</li>
        <li><strong>Lo spazio della tromba delle scale</strong> (se non sei al piano terra)</li>
        <li><strong>L'ingombro finale nella stanza</strong>, dove starà il divano, rispetto ai mobili esistenti</li>
      </ol>

      <h2>1. Porta d'ingresso</h2>
      <p>
        Mettiti nel vano della porta. Apri Ruler AR (o una qualsiasi app di
        misurazione AR), seleziona
        <em> la modalità lunghezza</em> e tocca il lato interno di uno stipite,
        poi dell'altro. Quella è la <strong>larghezza utile</strong> della tua
        porta, la dimensione realmente percorribile, non la larghezza da telaio a
        telaio.
      </p>
      <p>
        Ripeti dall'alto in basso per l'altezza della porta. Una porta interna
        standard misura 80 cm × 200 cm, ma nelle case d'epoca e negli appartamenti
        le porte variano moltissimo. I divani più larghi della tua larghezza utile
        devono entrare di lato o in piedi.
      </p>

      <h2>2. Raggio di curva del corridoio</h2>
      <p>
        Se la porta d'ingresso dà direttamente su un corridoio, il divano deve
        girare. Misura la larghezza del corridoio alla curva (punta il telefono
        attraverso il corridoio e tocca ogni parete). Poi misura la profondità
        dell'angolo, dallo spigolo della parete fino alla parete parallela
        opposta.
      </p>
      <p>
        La regola pratica: <strong>la diagonale del tuo divano (lunghezza ×
        profondità con Pitagora) deve essere minore della larghezza del corridoio
        più la profondità dell'angolo.</strong> Lo strumento area dell'app ti
        permette di disegnare l'ingombro dell'angolo come poligono e leggere la
        diagonale direttamente.
      </p>

      <h2>3. Spazio della tromba delle scale</h2>
      <p>
        È nella misurazione delle scale che l'AR mostra davvero il suo valore.
        Tieni il telefono perpendicolare alle scale, a metà rampa, e usa lo
        strumento Altezza per rilevare lo spazio verticale. Poi la larghezza
        orizzontale nello stesso punto. Ripeti in cima alla rampa, dove il
        soffitto può inclinarsi verso l'interno.
      </p>
      <p>
        Le scale a chiocciola e i pianerottoli stretti a L sono la vera insidia
        qui. Il Manual Room Builder può rilevare l'ingombro del pianerottolo in
        30 secondi, traccia il poligono toccando gli angoli e usa lo strumento
        area per verificare la diagonale.
      </p>

      <h2>4. Ingombro nella stanza</h2>
      <p>
        Entra nella stanza di destinazione. Decidi dove va il divano. Misura la
        lunghezza della parete dove appoggerà, poi la distanza dalla parete ai
        mobili esistenti, alle porte o ai termosifoni. La maggior parte dei
        divani ha bisogno di 15-30 cm di respiro sul retro se è vicino a una
        bocchetta d'aria o a un termosifone.
      </p>
      <p>
        Salva tutto questo come un unico progetto nell'app. L'esportazione in PDF
        trasforma l'intero set in un documento che puoi mostrare al commesso da
        IKEA o in qualsiasi negozio: «questo è il mio spazio, cosa ci entra?»
      </p>

      <h2>I numeri che davvero devi portare in showroom</h2>
      <ul>
        <li>Larghezza utile e altezza della porta</li>
        <li>Larghezza del corridoio alla curva × profondità dell'angolo</li>
        <li>Larghezza della scala × altezza del soffitto (se applicabile)</li>
        <li>Lunghezza della parete di destinazione</li>
      </ul>
      <p>
        Confronta ciascuno con le <em>dimensioni di spedizione</em> del divano, non
        solo con quelle "in uso". Un divano imballato per la spedizione è spesso
        5-10 cm più largo e più alto del prodotto finale assemblato, a causa della
        scatola e dell'imballaggio protettivo. Alcuni divani hanno gambe e
        braccioli smontabili, queste misure di solito vengono pubblicate come "in
        ambiente" e "imballato" sul sito del produttore.
      </p>

      <h2>E i divani modulari e a L?</h2>
      <p>
        I divani modulari arrivano in pezzi separati, ciascuno dei quali deve
        passare singolarmente. Misura ogni pezzo rispetto al tuo collo di
        bottiglia (l'apertura più piccola). I divani a L di solito arrivano in due
        parti, chaise longue e sezione principale, ed è la più grande delle due
        quella che confronti con la porta.
      </p>

      <h2>Metti le misure tra i preferiti</h2>
      <p>
        L'esportazione in PDF di Ruler AR include una pianta 2D con le dimensioni
        annotate. Mandala al tuo partner. Salva il progetto. Quando trovi un
        divano che ti piace, apri il PDF, confronta ogni dimensione di spedizione
        con il tuo collo di bottiglia e poi decidi, oppure continua a cercare. Due
        minuti che ti evitano un viaggio di reso di 30 minuti e una commissione di
        rimagazzinaggio.
      </p>
    </article>
  );
}

export function PostPL() {
  return (
    <article className="prose-content">
      <p className="lead">
        Każdy sklep meblowy ma ten sam wskaźnik zwrotów: około 4% sof wraca,
        ponieważ nie mieszczą się w drzwiach wejściowych kupującego. Większości
        tych zwrotów można by uniknąć dzięki pięciu minutom pomiarów przed
        zakupem. Oto lista kontrolna i sposób, jak zmierzyć to iPhone'em.
      </p>

      <h2>Cztery pomiary, które naprawdę się liczą</h2>
      <p>
        Sofa musi pokonać cztery wąskie gardła między ciężarówką a Twoim salonem:
      </p>
      <ol>
        <li><strong>Otwór drzwi wejściowych</strong>, szerokość i wysokość</li>
        <li><strong>Promień skrętu w korytarzu</strong>, najciaśniejszy narożnik, który sofa musi pokonać</li>
        <li><strong>Prześwit klatki schodowej</strong> (jeśli nie mieszkasz na parterze)</li>
        <li><strong>Ostateczne miejsce w pokoju</strong>, gdzie stanie sofa, względem istniejących mebli</li>
      </ol>

      <h2>1. Drzwi wejściowe</h2>
      <p>
        Stań w futrynie. Otwórz Ruler AR (lub dowolną aplikację do pomiarów AR),
        wybierz
        <em> tryb długości</em> i dotknij wewnętrznej strony jednego ościeżnicy,
        a następnie drugiej. To jest <strong>szerokość w świetle</strong> Twoich
        drzwi, czyli rzeczywisty wymiar do przejścia, a nie szerokość od ramy do
        ramy.
      </p>
      <p>
        Powtórz od góry do dołu, aby uzyskać wysokość drzwi. Standardowe drzwi
        wewnętrzne mają 80 cm × 200 cm, ale w starym budownictwie i mieszkaniach
        drzwi bardzo się różnią. Sofy szersze niż Twoja szerokość w świetle
        trzeba wnosić bokiem lub na sztorc.
      </p>

      <h2>2. Promień skrętu w korytarzu</h2>
      <p>
        Jeśli drzwi wejściowe prowadzą prosto do korytarza, sofa musi skręcić.
        Zmierz szerokość korytarza na zakręcie (skieruj telefon w poprzek
        korytarza i dotknij każdej ze ścian). Następnie zmierz głębokość narożnika,
        od narożnika ściany do przeciwległej równoległej ściany.
      </p>
      <p>
        Zasada kciuka: <strong>przekątna Twojej sofy (długość × głębokość według
        Pitagorasa) musi być mniejsza niż szerokość korytarza plus głębokość
        narożnika.</strong> Narzędzie pola w aplikacji pozwala narysować obrys
        narożnika jako wielokąt i odczytać przekątną bezpośrednio.
      </p>

      <h2>3. Prześwit klatki schodowej</h2>
      <p>
        To właśnie przy pomiarach schodów AR naprawdę pokazuje swoją wartość.
        Trzymaj telefon prostopadle do schodów, w połowie biegu, i użyj narzędzia
        Wysokość, aby zmierzyć prześwit w pionie. Potem szerokość w poziomie w tym
        samym miejscu. Powtórz na szczycie biegu, gdzie sufit może opadać do
        wewnątrz.
      </p>
      <p>
        Schody kręte i ciasne półpiętra w kształcie litery L to tutaj prawdziwy
        problem. Manual Room Builder może zmierzyć obrys spocznika w 30 sekund,
        naszkicuj wielokąt, dotykając narożników, i użyj narzędzia pola, aby
        sprawdzić przekątną.
      </p>

      <h2>4. Miejsce w pokoju</h2>
      <p>
        Wejdź do docelowego pokoju. Ustal, gdzie stanie sofa. Zmierz długość
        ściany, przy której będzie stać, a potem odstęp od ściany do istniejących
        mebli, drzwi czy grzejników. Większość sof potrzebuje 15-30 cm luzu z
        tyłu, jeśli stoi blisko kratki wentylacyjnej lub grzejnika.
      </p>
      <p>
        Zapisz to wszystko jako jeden projekt w aplikacji. Eksport do PDF zamienia
        cały zestaw w jeden dokument, który możesz pokazać sprzedawcy w IKEA albo
        dowolnym innym sklepie: „to jest moja przestrzeń, co się zmieści?"
      </p>

      <h2>Liczby, które naprawdę musisz zabrać do salonu</h2>
      <ul>
        <li>Szerokość w świetle i wysokość drzwi</li>
        <li>Szerokość korytarza na zakręcie × głębokość narożnika</li>
        <li>Szerokość schodów × wysokość sufitu (jeśli dotyczy)</li>
        <li>Długość ściany docelowej</li>
      </ul>
      <p>
        Porównaj każdą z <em>wymiarami transportowymi</em> sofy, nie tylko z jej
        wymiarami „w użyciu". Sofa zapakowana do transportu jest często 5-10 cm
        szersza i wyższa od gotowego, złożonego produktu z powodu pudła i folii
        ochronnej. Niektóre sofy mają odkręcane nóżki i podłokietniki, takie
        wymiary są zwykle podawane jako „w pomieszczeniu" i „zapakowane" na stronie
        producenta.
      </p>

      <h2>A co z sofami modułowymi i narożnymi?</h2>
      <p>
        Sofy modułowe są wysyłane w osobnych częściach, a każda z nich musi przejść
        osobno. Zmierz każdą część względem swojego wąskiego gardła (najmniejszego
        otworu). Sofy narożne zwykle przyjeżdżają w dwóch częściach, szezlong i
        sekcja główna, a tą, którą porównujesz z drzwiami, jest większa z dwóch.
      </p>

      <h2>Zapisz pomiary w zakładkach</h2>
      <p>
        Eksport do PDF z Ruler AR zawiera rzut 2D z opisanymi wymiarami. Wyślij go
        partnerowi. Zapisz projekt. Gdy znajdziesz sofę, która Ci się spodoba,
        otwórz PDF, porównaj każdy wymiar transportowy ze swoim wąskim gardłem i
        albo się zdecyduj, albo szukaj dalej. Dwie minuty, które oszczędzą Ci
        30-minutowej podróży ze zwrotem i opłaty za przyjęcie towaru z powrotem.
      </p>
    </article>
  );
}

export function PostTR() {
  return (
    <article className="prose-content">
      <p className="lead">
        Her mobilya mağazasında iade oranı aynıdır: koltukların yaklaşık %4'ü,
        alıcının giriş kapısından geçmediği için geri döner. Bu iadelerin çoğu,
        satın almadan önce beş dakikalık ölçümle önlenebilir. İşte kontrol listesi
        ve bunu iPhone ile nasıl ölçeceğiniz.
      </p>

      <h2>Önemli olan dört ölçü</h2>
      <p>
        Bir koltuğun, kamyondan oturma odanıza kadar dört dar noktayı geçmesi
        gerekir:
      </p>
      <ol>
        <li><strong>Giriş kapısı açıklığı</strong>, genişlik ve yükseklik</li>
        <li><strong>Koridor dönüş yarıçapı</strong>, koltuğun dönmesi gereken en dar köşe</li>
        <li><strong>Merdiven boşluğu</strong> (zemin katta değilseniz)</li>
        <li><strong>Odadaki nihai yerleşim alanı</strong>, koltuğun mevcut mobilyalara göre duracağı yer</li>
      </ol>

      <h2>1. Giriş kapısı</h2>
      <p>
        Kapı boşluğunda durun. Ruler AR'ı (ya da herhangi bir AR ölçüm
        uygulamasını) açın,
        <em> uzunluk modunu</em> seçin ve bir kapı pervazının iç tarafına, sonra
        diğerine dokunun. İşte bu, kapınızın <strong>net genişliğidir</strong>,
        yani gerçekte geçilebilen ölçüdür, kasadan kasaya genişlik değil.
      </p>
      <p>
        Kapı yüksekliği için yukarıdan aşağıya tekrarlayın. Standart bir iç kapı
        80 cm × 200 cm'dir, ancak eski evlerde ve dairelerde kapılar çok değişir.
        Net genişliğinizden daha geniş koltukların yan yatırılarak veya dik tutularak
        içeri alınması gerekir.
      </p>

      <h2>2. Koridor dönüş yarıçapı</h2>
      <p>
        Giriş kapısı doğrudan bir koridora açılıyorsa, koltuğun dönmesi gerekir.
        Dönüşteki koridor genişliğini ölçün (telefonu koridor boyunca karşıya
        doğrultup her iki duvara dokunun). Sonra köşe derinliğini, duvar köşesinden
        karşıdaki paralel duvara kadar ölçün.
      </p>
      <p>
        Pratik kural: <strong>koltuğunuzun köşegeni (Pisagor ile uzunluk ×
        derinlik), koridor genişliği artı köşe derinliğinden küçük olmalıdır.</strong>
        Uygulamanın alan aracı, köşe yerleşimini bir çokgen olarak çizmenize ve
        köşegeni doğrudan okumanıza olanak tanır.
      </p>

      <h2>3. Merdiven boşluğu</h2>
      <p>
        Merdiven ölçümü, AR'ın gerçekten değerini gösterdiği yerdir. Telefonu
        merdivene dik tutarak, kolun ortasında, dikey boşluğu yakalamak için
        Yükseklik aracını kullanın. Sonra aynı noktada yatay genişliği ölçün.
        Tavanın içe doğru eğilebileceği merdiven kolunun üst ucunda tekrarlayın.
      </p>
      <p>
        Burada asıl belayı döner merdivenler ve dar L biçimli sahanlıklar
        çıkarır. Manual Room Builder, sahanlık yerleşimini 30 saniyede yakalayabilir,
        köşelere dokunarak çokgeni çizin ve köşegeni doğrulamak için alan aracını
        kullanın.
      </p>

      <h2>4. Odadaki yerleşim alanı</h2>
      <p>
        Hedef odaya girin. Koltuğun nereye gideceğini belirleyin. Duracağı
        duvarın uzunluğunu ölçün, sonra duvardan mevcut mobilyalara, kapı
        açıklıklarına veya radyatörlere olan boşluğu ölçün. Bir havalandırma ya da
        radyatör yakınındaysa, çoğu koltuk arkasında 15-30 cm nefes alacak boşluğa
        ihtiyaç duyar.
      </p>
      <p>
        Bunların tümünü uygulamada tek bir proje olarak kaydedin. PDF dışa aktarma,
        bütün seti IKEA'daki veya hangi mağaza olursa olsun satış görevlisine
        gösterebileceğiniz tek bir belgeye dönüştürür: "işte benim alanım, buraya
        ne sığar?"
      </p>

      <h2>Showroom'a gerçekten götürmeniz gereken sayılar</h2>
      <ul>
        <li>Kapı net genişliği ve yüksekliği</li>
        <li>Dönüşteki koridor genişliği × köşe derinliği</li>
        <li>Merdiven genişliği × tavan yüksekliği (varsa)</li>
        <li>Hedef duvar uzunluğu</li>
      </ul>
      <p>
        Her birini koltuğun yalnızca "kullanımdaki" ölçüleriyle değil,
        <em> sevkiyat ölçüleriyle</em> karşılaştırın. Sevkiyat için paketlenmiş bir
        koltuk, kutu ve koruyucu ambalaj nedeniyle genellikle monte edilmiş son
        üründen 5-10 cm daha geniş ve daha yüksektir. Bazı koltukların ayakları ve
        kolçakları sökülebilir; bu ölçüler genellikle üreticinin web sitesinde "oda
        içi" ve "paketli" olarak yayımlanır.
      </p>

      <h2>Modüler ve L biçimli koltuklar ne olacak?</h2>
      <p>
        Modüler koltuklar ayrı parçalar halinde gönderilir ve her birinin tek tek
        geçmesi gerekir. Her parçayı dar boğazınıza (en küçük açıklık) göre ölçün. L
        biçimli koltuklar genellikle iki parça halinde, şezlong ve ana bölüm olarak
        gelir; kapıyla karşılaştıracağınız, ikisinden büyük olanıdır.
      </p>

      <h2>Ölçüleri yer imlerine ekleyin</h2>
      <p>
        Ruler AR'ın PDF dışa aktarımı, ölçüleri etiketlenmiş bir 2D kat planı
        içerir. Eşinize gönderin. Projeyi kaydedin. Beğendiğiniz bir koltuk
        bulduğunuzda PDF'i açın, her sevkiyat ölçüsünü dar boğazınızla
        karşılaştırın ve ya karar verin ya da aramaya devam edin. 30 dakikalık bir
        iade yolculuğunu ve bir stoklama ücretini önleyen iki dakika.
      </p>
    </article>
  );
}

export function PostAR() {
  return (
    <article className="prose-content">
      <p className="lead">
        كل متجر أثاث لديه المعدل نفسه للإرجاع: نحو 4% من الأرائك تُعاد لأنها لا تمر
        من باب المنزل الأمامي للمشتري. يمكن منع معظم هذه الإرجاعات بخمس دقائق من
        القياس قبل الشراء. إليك القائمة، وكيفية أخذها بهاتف iPhone.
      </p>

      <h2>القياسات الأربعة التي تهم</h2>
      <p>
        على الأريكة أن تتجاوز أربع نقاط ضيقة بين الشاحنة وغرفة معيشتك:
      </p>
      <ol>
        <li><strong>فتحة الباب الأمامي</strong>، العرض والارتفاع</li>
        <li><strong>نصف قطر الدوران في الممر</strong>، أضيق زاوية يجب أن تدور حولها الأريكة</li>
        <li><strong>خلوص بئر الدرج</strong> (إذا لم تكن في الطابق الأرضي)</li>
        <li><strong>مساحة الوضع النهائية في الغرفة</strong>، حيث ستستقر الأريكة، بالنسبة إلى الأثاث الموجود</li>
      </ol>

      <h2>1. الباب الأمامي</h2>
      <p>
        قف في إطار الباب. افتح Ruler AR (أو أي تطبيق قياس بالواقع المعزز)، واختر
        <em> وضع الطول</em>، ثم انقر على الجانب الداخلي لإحدى قائمتي الباب، ثم
        الأخرى. ذلك هو <strong>العرض الصافي</strong> لبابك، أي البُعد الذي يمكن
        المرور منه فعلًا، لا العرض من إطار إلى إطار.
      </p>
      <p>
        كرّر من الأعلى إلى الأسفل لقياس ارتفاع الباب. الباب الداخلي القياسي
        80 cm × 200 cm، لكن أبواب المنازل القديمة والشقق تتفاوت بشدة. الأرائك
        الأعرض من عرضك الصافي يجب إدخالها على جانبها أو منتصبة.
      </p>

      <h2>2. نصف قطر الدوران في الممر</h2>
      <p>
        إذا كان الباب الأمامي يفتح مباشرة على ممر، فعلى الأريكة أن تدور. قِس عرض
        الممر عند المنعطف (وجّه هاتفك عبر الممر وانقر على كل جدار). ثم قِس عمق
        الزاوية، من ركن الجدار إلى الجدار الموازي المقابل.
      </p>
      <p>
        القاعدة العامة: <strong>قطر أريكتك (الطول × العمق عبر فيثاغورس) يجب أن يكون
        أقل من عرض الممر مضافًا إليه عمق الزاوية.</strong> تتيح لك أداة المساحة في
        التطبيق رسم مساحة وضع الزاوية كمضلّع وقراءة القطر مباشرة.
      </p>

      <h2>3. خلوص بئر الدرج</h2>
      <p>
        قياس الدرج هو حيث يثبت الواقع المعزز جدارته حقًا. أمسك الهاتف عموديًا على
        الدرج، عند منتصف الارتفاع، واستخدم أداة Height لالتقاط الخلوص الرأسي. ثم
        العرض الأفقي عند النقطة نفسها. كرّر عند أعلى المجرى حيث قد يميل السقف إلى
        الداخل.
      </p>
      <p>
        الدرج الحلزوني والبسطات الضيقة على شكل حرف L هي المعضلة الكبرى هنا. يستطيع
        Manual Room Builder التقاط مساحة وضع البسطة في 30 ثانية، ارسم المضلّع
        بالنقر على الأركان واستخدم أداة المساحة للتحقق من القطر.
      </p>

      <h2>4. مساحة الوضع في الغرفة</h2>
      <p>
        ادخل إلى الغرفة المقصودة. حدّد أين ستوضع الأريكة. قِس طول الجدار الذي
        ستستقر عنده، ثم الخلوص من الجدار إلى أي أثاث موجود أو أبواب أو مشعّات. تحتاج
        معظم الأرائك إلى 15-30 cm من المساحة للتنفّس في الخلف إذا كانت قرب فتحة
        تهوية أو مشعّ.
      </p>
      <p>
        احفظ كل هذا كمشروع واحد في التطبيق. يحوّل تصدير PDF المجموعة كاملةً إلى
        مستند واحد يمكنك أن تُريه للبائع في IKEA أو في أي متجر: «هذه مساحتي، ما الذي
        يتسع لها؟»
      </p>

      <h2>الأرقام التي تحتاج فعلًا إلى أخذها إلى صالة العرض</h2>
      <ul>
        <li>العرض الصافي للباب وارتفاعه</li>
        <li>عرض الممر عند المنعطف × عمق الزاوية</li>
        <li>عرض الدرج × ارتفاع السقف (إن وُجد)</li>
        <li>طول جدار الوجهة</li>
      </ul>
      <p>
        قارن كل رقم بـ<em>أبعاد الشحن</em> للأريكة، لا بأبعادها «أثناء الاستخدام»
        فحسب. الأريكة المعبأة للشحن غالبًا ما تكون أعرض وأعلى بمقدار 5-10 cm من
        المنتج النهائي المجمَّع بسبب الصندوق والتغليف الواقي. بعض الأرائك تأتي
        بأرجل ومساند قابلة للفك، وعادةً ما تُنشر تلك القياسات بصفتها «داخل الغرفة»
        و«معبأة» على موقع الشركة المصنّعة.
      </p>

      <h2>وماذا عن الأرائك المعيارية وأرائك حرف L؟</h2>
      <p>
        الأرائك المعيارية تُشحن في قطع منفصلة، وكل قطعة عليها أن تمر على حدة. قِس كل
        قطعة بالنسبة إلى عنق الزجاجة لديك (أصغر فتحة). الأرائك على شكل حرف L تُشحن
        عادةً في جزأين، الاستلقاء والقسم الرئيسي، والأكبر من الاثنين هو ما تقارنه
        بالباب.
      </p>

      <h2>احفظ القياسات في المفضلة</h2>
      <p>
        يتضمن تصدير PDF من Ruler AR مخططًا أرضيًا ثنائي الأبعاد بأبعاد موسومة.
        أرسله إلى شريكك. احفظ المشروع. عندما تجد أريكة تعجبك، افتح ملف PDF، وقارن كل
        بُعد شحن بعنق الزجاجة لديك، ثم إما أن تحسم الأمر أو تواصل البحث. دقيقتان
        تجنّبانك رحلة إرجاع مدتها 30 دقيقة ورسوم إعادة التخزين.
      </p>
    </article>
  );
}

export const bodies = {
  ru: PostRU, de: PostDE, fr: PostFR, es: PostES, ja: PostJA, ko: PostKO,
  'zh-Hans': PostZH, 'pt-BR': PostPT, it: PostIT, pl: PostPL, tr: PostTR, ar: PostAR
};
