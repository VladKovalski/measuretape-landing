import type { PostMeta } from './posts';

export const meta: PostMeta = {
  slug: 'measure-square-footage-iphone',
  date: '2026-05-12',
  readingTimeMin: 5,
  keywords:
    'measure square footage iphone, how to measure room area, square meters app, ar area measurement, room area iphone',
  tags: ['Tutorial', 'Area', 'Renting'],
  title: {
    en: "How to Measure Square Footage With Your iPhone (For Renters and Buyers)",
    ru: "Как измерить площадь комнаты iPhone-ом (для арендаторов и покупателей)",
    de: "Wie misst du Quadratmeter mit dem iPhone (für Mieter und Käufer)",
    fr: "Comment mesurer la surface au sol avec votre iPhone (pour locataires et acheteurs)",
    es: "Cómo medir los metros cuadrados con tu iPhone (para inquilinos y compradores)",
    ja: "iPhoneで部屋の面積を測る方法（借りる人・買う人のために）",
    ko: "iPhone으로 면적 측정하는 방법 (세입자와 구매자를 위한 가이드)",
    "zh-Hans": "如何用 iPhone 测量房间面积（租房与买房必读）",
    "pt-BR": "Como medir a metragem com seu iPhone (para locatários e compradores)",
    it: "Come misurare i metri quadrati con il tuo iPhone (per inquilini e acquirenti)",
    pl: "Jak zmierzyć powierzchnię mieszkania iPhone'em (dla najemców i kupujących)",
    tr: "iPhone ile metrekare nasıl ölçülür (kiracılar ve alıcılar için)",
    ar: "كيفية قياس مساحة الغرفة باستخدام iPhone (للمستأجرين والمشترين)"
  },
  excerpt: {
    en: "Square-footage numbers on rental listings are notoriously wrong. Here's how to verify them in 90 seconds using your iPhone, and what to do when the actual area is 10% smaller than advertised.",
    ru: "Цифры площади в объявлениях аренды и продажи часто врут. Как проверить площадь iPhone-ом за 90 секунд, и что делать, если реальная меньше на 10% от заявленной.",
    de: "Die Quadratmeterangaben in Immobilienanzeigen sind notorisch falsch. So überprüfst du sie in 90 Sekunden mit deinem iPhone und was du tust, wenn die tatsächliche Fläche 10 % kleiner ist als beworben.",
    fr: "Les surfaces annoncées dans les annonces immobilières sont notoirement fausses. Voici comment les vérifier en 90 secondes avec votre iPhone, et quoi faire quand la surface réelle est inférieure de 10 % à celle annoncée.",
    es: "Los metros cuadrados de los anuncios inmobiliarios suelen estar mal. Aquí tienes cómo verificarlos en 90 segundos con tu iPhone y qué hacer cuando la superficie real es un 10 % menor que la anunciada.",
    ja: "賃貸物件に書かれた面積の数字は、よく間違っています。iPhoneを使って90秒で確認する方法と、実際の面積が広告より10%狭かったときの対処法を紹介します。",
    ko: "임대 매물에 적힌 면적 수치는 틀린 경우가 많습니다. iPhone으로 90초 만에 확인하는 방법과, 실제 면적이 광고보다 10% 작을 때 대처하는 법을 알려드립니다.",
    "zh-Hans": "房源广告里的面积数字常常不准。本文教你如何用 iPhone 在 90 秒内核实，以及当实际面积比广告小 10% 时该怎么办。",
    "pt-BR": "Os números de metragem nos anúncios de imóveis costumam estar errados. Veja como verificá-los em 90 segundos com seu iPhone e o que fazer quando a área real é 10% menor que a anunciada.",
    it: "I metri quadrati negli annunci immobiliari sono notoriamente sbagliati. Ecco come verificarli in 90 secondi con il tuo iPhone e cosa fare quando la superficie reale è il 10% più piccola di quella pubblicizzata.",
    pl: "Powierzchnie podawane w ogłoszeniach o wynajmie są notorycznie zawyżone. Oto jak sprawdzić je w 90 sekund iPhone'em i co zrobić, gdy rzeczywista powierzchnia jest o 10% mniejsza niż w ogłoszeniu.",
    tr: "İlanlardaki metrekare rakamları çoğu zaman yanlıştır. iPhone'unuzla bunları 90 saniyede nasıl doğrulayacağınızı ve gerçek alan ilandakinden %10 küçük olduğunda ne yapacağınızı anlatıyoruz.",
    ar: "غالبًا ما تكون أرقام المساحة في إعلانات الإيجار خاطئة. إليك كيفية التحقق منها في 90 ثانية باستخدام iPhone، وماذا تفعل عندما تكون المساحة الفعلية أصغر بنسبة 10% مما هو معلن."
  }
};

export default function Post() {
  return (
    <article className="prose-content">
      <p className="lead">
        A study by ratemyagent.com.au in 2023 found that <strong>27% of
        property listings overstate square footage by more than 5%</strong>.
        For a 60 m² apartment, that's 3 m² of imaginary space, about the
        size of a small bathroom. If you're renting at €25/m²/month, you're
        being asked to pay €75/month for floor that doesn't exist.
      </p>
      <p>
        Here's the 90-second method to verify a listing before you sign.
      </p>

      <h2>The fast method (with LiDAR)</h2>
      <p>
        On any iPhone Pro from 12 onwards (or iPad Pro 2020+):
      </p>
      <ol>
        <li>Open Ruler AR and tap <em>Room Scan</em>.</li>
        <li>Stand in one corner. Walk slowly along each wall.</li>
        <li>When you return to the starting corner, tap <em>Done</em>.</li>
        <li>Read the floor area from the summary screen, accurate to within ±2%.</li>
      </ol>
      <p>
        This takes about 60 seconds for a single room. A full one-bedroom
        apartment takes 3-4 minutes total.
      </p>

      <h2>The reliable method (any iPhone)</h2>
      <p>
        If you don't have a LiDAR iPhone, use the Manual Room Builder:
      </p>
      <ol>
        <li>Open Ruler AR → Tools → Manual Room Builder.</li>
        <li>Stand in a corner, aim the crosshair at the floor at your feet, tap.</li>
        <li>Walk to the next corner along the wall. Tap.</li>
        <li>Continue around the room. The mini-map shows the polygon growing.</li>
        <li>When you reach the starting corner, the "close room" pulse appears. Tap it.</li>
      </ol>
      <p>
        The polygon's area is computed automatically using the Shoelace
        formula. Accuracy depends on AR tracking, typically ±5% for
        rooms under 30 m², which is good enough to catch listing
        misrepresentations.
      </p>

      <h2>What counts as "square footage", and what doesn't</h2>
      <p>
        Listings inflate numbers in three common ways:
      </p>
      <ul>
        <li><strong>Including unusable spaces.</strong> Sloped ceilings, alcoves under 1.5 m high, structural columns. Different jurisdictions handle these differently, UK/AU typically exclude under-1.5m areas; US is laxer.</li>
        <li><strong>Measuring exterior wall-to-wall instead of interior.</strong> A 10 × 10 m exterior box is only ~9.5 × 9.5 m of usable interior space after walls (5 cm of internal partition × ~6 walls = 30 cm of "ghost" wall area).</li>
        <li><strong>Including balconies/terraces at full count.</strong> Many places count outdoor space at 50%, if your listing counts it at 100%, you're getting half what you think.</li>
      </ul>
      <p>
        When you measure with the app, you're measuring <em>interior usable
        floor area</em>. That's the most honest number, and the one that
        matters for furniture planning and pricing comparisons.
      </p>

      <h2>What to do when the numbers don't match</h2>
      <p>
        If your measurement is more than 5% below the listed area, you have
        leverage:
      </p>
      <ul>
        <li>
          <strong>Renting:</strong> Ask for a reduction proportional to the
          discrepancy. €/m² is a transparent calculation, if you're
          paying for 60 m² and the apartment is 56 m², that's 6.7% you can
          push for.
        </li>
        <li>
          <strong>Buying:</strong> Get a professional surveyor before you
          sign anything. A 5% area discrepancy on a €400,000 purchase is
          €20,000, that's worth the €500 surveyor fee.
        </li>
        <li>
          <strong>Insurance:</strong> Wrong square footage means wrong
          coverage. Insurers will pay claims based on actual measured area
          if you have documentation. The app's PDF export with date stamp
          becomes evidence.
        </li>
      </ul>

      <h2>Multi-room measurement</h2>
      <p>
        For full apartments, save each room as a separate project. Total
        area = sum of all rooms minus the overlap (hallway shouldn't be
        counted twice if you measured it as part of the entrance and the
        kitchen). The PDF export totals it automatically when you group
        projects under one folder.
      </p>

      <h2>Convert between units</h2>
      <p>
        The app handles all major units: m², ft², cm², in². Switch in
        Settings → Units. The PDF export labels everything in your chosen
        unit. If you're in the US shopping for a European apartment (or
        vice versa), this saves you the conversion math.
      </p>

      <h2>Bottom line</h2>
      <p>
        Never trust a square-footage number you didn't measure yourself, especially on a rental or purchase listing. The app gives you a
        90-second verification that's accurate within a few percent and
        produces documentation you can use to negotiate. Treat it like a
        spell-check for real estate listings.
      </p>
    </article>
  );
}

export function PostRU() {
  return (
    <article className="prose-content">
      <p className="lead">
        Исследование ratemyagent.com.au за 2023 год показало, что <strong>27%
        объявлений о недвижимости завышают площадь более чем на 5%</strong>.
        Для квартиры в 60 м² это 3 м² воображаемого пространства — примерно
        размер небольшого санузла. Если вы снимаете жильё по 25 €/м² в месяц,
        с вас просят 75 € в месяц за пол, которого не существует.
      </p>
      <p>
        Вот метод на 90 секунд, чтобы проверить объявление, прежде чем
        подписывать договор.
      </p>

      <h2>Быстрый способ (с LiDAR)</h2>
      <p>
        На любом iPhone Pro начиная с 12-го (или iPad Pro 2020 года и новее):
      </p>
      <ol>
        <li>Откройте Ruler AR и нажмите <em>Сканирование комнаты</em>.</li>
        <li>Встаньте в одном углу. Медленно идите вдоль каждой стены.</li>
        <li>Вернувшись в начальный угол, нажмите <em>Готово</em>.</li>
        <li>Посмотрите площадь пола на экране сводки — с точностью до ±2%.</li>
      </ol>
      <p>
        Это занимает около 60 секунд для одной комнаты. На полную
        однокомнатную квартиру уходит 3–4 минуты.
      </p>

      <h2>Надёжный способ (любой iPhone)</h2>
      <p>
        Если у вас нет iPhone с LiDAR, используйте ручной конструктор комнат:
      </p>
      <ol>
        <li>Откройте Ruler AR → Инструменты → Ручной конструктор комнат.</li>
        <li>Встаньте в угол, наведите перекрестие на пол у своих ног, нажмите.</li>
        <li>Идите к следующему углу вдоль стены. Нажмите.</li>
        <li>Обойдите комнату. На мини-карте видно, как растёт многоугольник.</li>
        <li>Когда дойдёте до начального угла, появится пульсация «замкнуть комнату». Нажмите её.</li>
      </ol>
      <p>
        Площадь многоугольника вычисляется автоматически по формуле площади
        Гаусса. Точность зависит от AR-трекинга, обычно ±5% для комнат
        меньше 30 м², чего достаточно, чтобы выявить искажения в объявлениях.
      </p>

      <h2>Что считается «площадью», а что нет</h2>
      <p>
        Объявления завышают цифры тремя типичными способами:
      </p>
      <ul>
        <li><strong>Включают непригодные пространства.</strong> Скошенные потолки, ниши высотой менее 1,5 м, несущие колонны. В разных странах это учитывают по-разному: в Великобритании и Австралии участки ниже 1,5 м обычно исключают; в США правила мягче.</li>
        <li><strong>Измеряют по внешним стенам, а не по внутренним.</strong> Внешний короб 10 × 10 м даёт лишь около 9,5 × 9,5 м полезного внутреннего пространства после стен (5 см внутренней перегородки × ~6 стен = 30 см «призрачной» площади стен).</li>
        <li><strong>Учитывают балконы и террасы по полной.</strong> Во многих местах открытое пространство считают как 50%; если в вашем объявлении его считают как 100%, вы получаете вдвое меньше, чем думаете.</li>
      </ul>
      <p>
        Когда вы измеряете приложением, вы измеряете <em>полезную внутреннюю
        площадь пола</em>. Это самая честная цифра — и именно она важна для
        планировки мебели и сравнения цен.
      </p>

      <h2>Что делать, если цифры не сходятся</h2>
      <p>
        Если ваш замер более чем на 5% меньше заявленной площади, у вас есть
        рычаг для торга:
      </p>
      <ul>
        <li>
          <strong>Аренда:</strong> Попросите снижение цены пропорционально
          расхождению. €/м² — прозрачный расчёт: если вы платите за 60 м², а
          квартира 56 м², это 6,7%, на которые можно надавить.
        </li>
        <li>
          <strong>Покупка:</strong> Перед подписанием чего-либо привлеките
          профессионального оценщика. Расхождение площади в 5% при покупке за
          400 000 € — это 20 000 €, что оправдывает гонорар оценщика в 500 €.
        </li>
        <li>
          <strong>Страхование:</strong> Неверная площадь означает неверное
          покрытие. Страховщики выплачивают по фактической измеренной площади,
          если у вас есть документация. Экспорт в PDF из приложения с отметкой
          даты становится доказательством.
        </li>
      </ul>

      <h2>Измерение нескольких комнат</h2>
      <p>
        Для целых квартир сохраняйте каждую комнату как отдельный проект.
        Общая площадь = сумма всех комнат за вычетом пересечений (прихожую не
        стоит считать дважды, если вы замерили её как часть входа и кухни).
        Экспорт в PDF суммирует всё автоматически, когда вы группируете
        проекты в одну папку.
      </p>

      <h2>Перевод между единицами</h2>
      <p>
        Приложение работает со всеми основными единицами: м², фут², см², дюйм².
        Переключайтесь в Настройках → Единицы. Экспорт в PDF подписывает всё в
        выбранной вами единице. Если вы в США и подбираете европейскую квартиру
        (или наоборот), это избавит вас от пересчётов.
      </p>

      <h2>Итог</h2>
      <p>
        Никогда не доверяйте площади, которую вы не измерили сами, особенно в объявлении об аренде или покупке. Приложение даёт вам
        проверку за 90 секунд с точностью до нескольких процентов и
        формирует документацию, которую можно использовать в переговорах.
        Относитесь к нему как к проверке орфографии для объявлений о
        недвижимости.
      </p>
    </article>
  );
}

export function PostDE() {
  return (
    <article className="prose-content">
      <p className="lead">
        Eine Studie von ratemyagent.com.au aus dem Jahr 2023 ergab, dass <strong>27 %
        der Immobilienanzeigen die Fläche um mehr als 5 % übertreiben</strong>.
        Bei einer 60-m²-Wohnung sind das 3 m² imaginärer Raum, etwa so groß
        wie ein kleines Badezimmer. Wenn du für 25 €/m²/Monat mietest, sollst
        du 75 €/Monat für Fläche zahlen, die es gar nicht gibt.
      </p>
      <p>
        Hier ist die 90-Sekunden-Methode, um eine Anzeige zu prüfen, bevor du
        unterschreibst.
      </p>

      <h2>Die schnelle Methode (mit LiDAR)</h2>
      <p>
        Auf jedem iPhone Pro ab dem 12er (oder iPad Pro ab 2020):
      </p>
      <ol>
        <li>Öffne Ruler AR und tippe auf <em>Raum-Scan</em>.</li>
        <li>Stell dich in eine Ecke. Geh langsam an jeder Wand entlang.</li>
        <li>Wenn du zur Startecke zurückkehrst, tippe auf <em>Fertig</em>.</li>
        <li>Lies die Bodenfläche vom Übersichtsbildschirm ab, genau auf ±2 %.</li>
      </ol>
      <p>
        Das dauert für einen einzelnen Raum etwa 60 Sekunden. Eine komplette
        Zweizimmerwohnung braucht insgesamt 3–4 Minuten.
      </p>

      <h2>Die zuverlässige Methode (jedes iPhone)</h2>
      <p>
        Wenn du kein iPhone mit LiDAR hast, nutze den manuellen Raum-Builder:
      </p>
      <ol>
        <li>Öffne Ruler AR → Werkzeuge → Manueller Raum-Builder.</li>
        <li>Stell dich in eine Ecke, ziele mit dem Fadenkreuz auf den Boden zu deinen Füßen, tippe.</li>
        <li>Geh entlang der Wand zur nächsten Ecke. Tippe.</li>
        <li>Geh so um den Raum herum. Die Mini-Karte zeigt, wie das Polygon wächst.</li>
        <li>Wenn du die Startecke erreichst, erscheint der Puls „Raum schließen". Tippe darauf.</li>
      </ol>
      <p>
        Die Fläche des Polygons wird automatisch mit der Gauß'schen
        Trapezformel berechnet. Die Genauigkeit hängt vom AR-Tracking ab,
        typischerweise ±5 % bei Räumen unter 30 m², was ausreicht, um
        falsche Angaben in Anzeigen aufzudecken.
      </p>

      <h2>Was als „Fläche" zählt und was nicht</h2>
      <p>
        Anzeigen blähen die Zahlen auf drei typische Arten auf:
      </p>
      <ul>
        <li><strong>Unbrauchbare Flächen werden mitgezählt.</strong> Schrägen, Nischen unter 1,5 m Höhe, tragende Säulen. Verschiedene Länder handhaben das unterschiedlich: Großbritannien und Australien schließen Bereiche unter 1,5 m meist aus; die USA sind großzügiger.</li>
        <li><strong>Außenwand zu Außenwand statt innen gemessen.</strong> Ein Außenkasten von 10 × 10 m ergibt nach Abzug der Wände nur etwa 9,5 × 9,5 m nutzbaren Innenraum (5 cm Innenwand × ~6 Wände = 30 cm „Geister"-Wandfläche).</li>
        <li><strong>Balkone/Terrassen werden voll gerechnet.</strong> Vielerorts wird Außenfläche zu 50 % gezählt; wenn deine Anzeige sie zu 100 % rechnet, bekommst du die Hälfte von dem, was du denkst.</li>
      </ul>
      <p>
        Wenn du mit der App misst, misst du die <em>nutzbare Innen-Bodenfläche</em>.
        Das ist die ehrlichste Zahl, und genau die zählt für Möbelplanung und
        Preisvergleiche.
      </p>

      <h2>Was tun, wenn die Zahlen nicht passen</h2>
      <p>
        Wenn deine Messung mehr als 5 % unter der angegebenen Fläche liegt,
        hast du ein Druckmittel:
      </p>
      <ul>
        <li>
          <strong>Mieten:</strong> Verlange eine Reduzierung im Verhältnis zur
          Abweichung. €/m² ist eine transparente Rechnung: Wenn du für 60 m²
          zahlst und die Wohnung 56 m² hat, sind das 6,7 %, die du
          durchsetzen kannst.
        </li>
        <li>
          <strong>Kaufen:</strong> Hol dir einen professionellen Gutachter,
          bevor du irgendetwas unterschreibst. Eine Flächenabweichung von 5 %
          bei einem Kauf von 400.000 € sind 20.000 €, das rechtfertigt das
          Gutachterhonorar von 500 €.
        </li>
        <li>
          <strong>Versicherung:</strong> Falsche Fläche bedeutet falscher
          Versicherungsschutz. Versicherer zahlen Schäden auf Basis der
          tatsächlich gemessenen Fläche aus, wenn du eine Dokumentation hast.
          Der PDF-Export der App mit Datumsstempel wird zum Beweis.
        </li>
      </ul>

      <h2>Mehrere Räume messen</h2>
      <p>
        Speichere bei kompletten Wohnungen jeden Raum als eigenes Projekt.
        Gesamtfläche = Summe aller Räume minus Überschneidungen (der Flur
        sollte nicht doppelt zählen, wenn du ihn als Teil des Eingangs und der
        Küche gemessen hast). Der PDF-Export summiert alles automatisch, wenn
        du die Projekte in einem Ordner gruppierst.
      </p>

      <h2>Zwischen Einheiten umrechnen</h2>
      <p>
        Die App beherrscht alle gängigen Einheiten: m², ft², cm², in². Wechsle
        unter Einstellungen → Einheiten. Der PDF-Export beschriftet alles in
        deiner gewählten Einheit. Wenn du in den USA bist und eine europäische
        Wohnung suchst (oder umgekehrt), erspart dir das die Umrechnerei.
      </p>

      <h2>Fazit</h2>
      <p>
        Vertraue niemals einer Flächenangabe, die du nicht selbst gemessen hast, besonders bei einer Miet- oder Kaufanzeige. Die App gibt dir
        eine 90-Sekunden-Prüfung, die auf wenige Prozent genau ist und eine
        Dokumentation erzeugt, mit der du verhandeln kannst. Sieh es wie eine
        Rechtschreibprüfung für Immobilienanzeigen.
      </p>
    </article>
  );
}

export function PostFR() {
  return (
    <article className="prose-content">
      <p className="lead">
        Une étude de ratemyagent.com.au menée en 2023 a révélé que <strong>27 %
        des annonces immobilières surestiment la surface de plus de 5 %</strong>.
        Pour un appartement de 60 m², cela représente 3 m² d'espace imaginaire,
        soit environ la taille d'une petite salle de bain. Si vous louez à
        25 €/m²/mois, on vous demande de payer 75 €/mois pour un sol qui
        n'existe pas.
      </p>
      <p>
        Voici la méthode en 90 secondes pour vérifier une annonce avant de
        signer.
      </p>

      <h2>La méthode rapide (avec le LiDAR)</h2>
      <p>
        Sur tout iPhone Pro à partir du 12 (ou iPad Pro 2020 et plus récent) :
      </p>
      <ol>
        <li>Ouvrez Ruler AR et touchez <em>Scan de pièce</em>.</li>
        <li>Placez-vous dans un coin. Longez lentement chaque mur.</li>
        <li>Quand vous revenez au coin de départ, touchez <em>Terminé</em>.</li>
        <li>Lisez la surface au sol sur l'écran récapitulatif, précise à ±2 %.</li>
      </ol>
      <p>
        Cela prend environ 60 secondes pour une seule pièce. Un appartement
        deux-pièces complet prend 3 à 4 minutes au total.
      </p>

      <h2>La méthode fiable (n'importe quel iPhone)</h2>
      <p>
        Si vous n'avez pas d'iPhone équipé du LiDAR, utilisez le constructeur
        de pièce manuel :
      </p>
      <ol>
        <li>Ouvrez Ruler AR → Outils → Constructeur de pièce manuel.</li>
        <li>Placez-vous dans un coin, visez le sol à vos pieds avec le réticule, touchez.</li>
        <li>Marchez jusqu'au coin suivant le long du mur. Touchez.</li>
        <li>Faites le tour de la pièce. La mini-carte montre le polygone qui s'agrandit.</li>
        <li>Quand vous atteignez le coin de départ, l'impulsion « fermer la pièce » apparaît. Touchez-la.</li>
      </ol>
      <p>
        La surface du polygone est calculée automatiquement avec la formule du
        lacet (Shoelace). La précision dépend du suivi AR, généralement ±5 %
        pour les pièces de moins de 30 m², ce qui suffit à repérer les fausses
        déclarations des annonces.
      </p>

      <h2>Ce qui compte comme « surface » et ce qui ne compte pas</h2>
      <p>
        Les annonces gonflent les chiffres de trois façons courantes :
      </p>
      <ul>
        <li><strong>Inclure des espaces inutilisables.</strong> Plafonds en pente, alcôves de moins de 1,5 m de haut, colonnes porteuses. Les pays traitent cela différemment : le Royaume-Uni et l'Australie excluent généralement les zones de moins de 1,5 m ; les États-Unis sont plus souples.</li>
        <li><strong>Mesurer de mur extérieur à mur extérieur au lieu de l'intérieur.</strong> Une boîte extérieure de 10 × 10 m ne fait que ~9,5 × 9,5 m d'espace intérieur utilisable une fois les murs déduits (5 cm de cloison interne × ~6 murs = 30 cm de surface murale « fantôme »).</li>
        <li><strong>Compter les balcons/terrasses à 100 %.</strong> Beaucoup d'endroits comptent l'espace extérieur à 50 % ; si votre annonce le compte à 100 %, vous obtenez la moitié de ce que vous croyez.</li>
      </ul>
      <p>
        Quand vous mesurez avec l'application, vous mesurez la <em>surface au
        sol intérieure utilisable</em>. C'est le chiffre le plus honnête, et
        celui qui compte pour l'aménagement des meubles et les comparaisons de
        prix.
      </p>

      <h2>Que faire quand les chiffres ne correspondent pas</h2>
      <p>
        Si votre mesure est inférieure de plus de 5 % à la surface annoncée,
        vous avez un argument :
      </p>
      <ul>
        <li>
          <strong>Location :</strong> Demandez une réduction proportionnelle à
          l'écart. €/m² est un calcul transparent : si vous payez pour 60 m²
          et que l'appartement fait 56 m², ce sont 6,7 % que vous pouvez
          négocier.
        </li>
        <li>
          <strong>Achat :</strong> Faites venir un géomètre professionnel avant
          de signer quoi que ce soit. Un écart de surface de 5 % sur un achat
          de 400 000 € représente 20 000 €, ce qui vaut bien les 500 €
          d'honoraires du géomètre.
        </li>
        <li>
          <strong>Assurance :</strong> Une mauvaise surface signifie une
          mauvaise couverture. Les assureurs indemnisent sur la base de la
          surface réellement mesurée si vous disposez d'une documentation.
          L'export PDF de l'application avec horodatage devient une preuve.
        </li>
      </ul>

      <h2>Mesure de plusieurs pièces</h2>
      <p>
        Pour les appartements entiers, enregistrez chaque pièce comme un projet
        distinct. Surface totale = somme de toutes les pièces moins le
        chevauchement (le couloir ne doit pas être compté deux fois si vous
        l'avez mesuré comme partie de l'entrée et de la cuisine). L'export PDF
        calcule le total automatiquement quand vous regroupez les projets dans
        un même dossier.
      </p>

      <h2>Convertir entre unités</h2>
      <p>
        L'application gère toutes les unités principales : m², ft², cm², in².
        Changez dans Réglages → Unités. L'export PDF étiquette tout dans
        l'unité de votre choix. Si vous êtes aux États-Unis à la recherche d'un
        appartement européen (ou inversement), cela vous épargne les calculs de
        conversion.
      </p>

      <h2>En résumé</h2>
      <p>
        Ne faites jamais confiance à une surface que vous n'avez pas mesurée vous-même, surtout sur une annonce de location ou d'achat. L'application vous offre une
        vérification en 90 secondes, précise à quelques pour cent près, et
        produit une documentation que vous pouvez utiliser pour négocier.
        Considérez-la comme un correcteur orthographique pour les annonces
        immobilières.
      </p>
    </article>
  );
}

export function PostES() {
  return (
    <article className="prose-content">
      <p className="lead">
        Un estudio de ratemyagent.com.au de 2023 reveló que <strong>el 27 % de
        los anuncios inmobiliarios exageran la superficie en más de un 5 %</strong>.
        Para un piso de 60 m², eso son 3 m² de espacio imaginario, más o menos
        el tamaño de un baño pequeño. Si alquilas a 25 €/m²/mes, te están
        pidiendo pagar 75 €/mes por un suelo que no existe.
      </p>
      <p>
        Aquí tienes el método de 90 segundos para verificar un anuncio antes de
        firmar.
      </p>

      <h2>El método rápido (con LiDAR)</h2>
      <p>
        En cualquier iPhone Pro a partir del 12 (o iPad Pro de 2020 en adelante):
      </p>
      <ol>
        <li>Abre Ruler AR y toca <em>Escaneo de habitación</em>.</li>
        <li>Colócate en una esquina. Camina despacio a lo largo de cada pared.</li>
        <li>Cuando vuelvas a la esquina de inicio, toca <em>Listo</em>.</li>
        <li>Lee la superficie del suelo en la pantalla de resumen, con una precisión de ±2 %.</li>
      </ol>
      <p>
        Esto lleva unos 60 segundos para una sola habitación. Un piso de un
        dormitorio completo tarda de 3 a 4 minutos en total.
      </p>

      <h2>El método fiable (cualquier iPhone)</h2>
      <p>
        Si no tienes un iPhone con LiDAR, usa el Constructor manual de
        habitaciones:
      </p>
      <ol>
        <li>Abre Ruler AR → Herramientas → Constructor manual de habitaciones.</li>
        <li>Colócate en una esquina, apunta con la cruz al suelo a tus pies y toca.</li>
        <li>Camina hasta la siguiente esquina a lo largo de la pared. Toca.</li>
        <li>Da la vuelta a la habitación. El minimapa muestra cómo crece el polígono.</li>
        <li>Cuando llegues a la esquina de inicio, aparece el pulso «cerrar habitación». Tócalo.</li>
      </ol>
      <p>
        La superficie del polígono se calcula automáticamente con la fórmula
        del área de Gauss (Shoelace). La precisión depende del seguimiento AR,
        normalmente ±5 % para habitaciones de menos de 30 m², lo bastante
        bueno para detectar tergiversaciones en los anuncios.
      </p>

      <h2>Qué cuenta como «superficie» y qué no</h2>
      <p>
        Los anuncios inflan las cifras de tres formas habituales:
      </p>
      <ul>
        <li><strong>Incluir espacios inutilizables.</strong> Techos inclinados, huecos de menos de 1,5 m de altura, columnas estructurales. Cada país lo trata de forma distinta: Reino Unido y Australia suelen excluir las zonas de menos de 1,5 m; Estados Unidos es más laxo.</li>
        <li><strong>Medir de pared exterior a pared exterior en lugar del interior.</strong> Una caja exterior de 10 × 10 m solo deja unos 9,5 × 9,5 m de espacio interior útil tras descontar las paredes (5 cm de tabique interior × ~6 paredes = 30 cm de superficie de pared «fantasma»).</li>
        <li><strong>Contar balcones/terrazas al 100 %.</strong> En muchos lugares el espacio exterior se cuenta al 50 %; si tu anuncio lo cuenta al 100 %, recibes la mitad de lo que crees.</li>
      </ul>
      <p>
        Cuando mides con la app, mides la <em>superficie útil interior del
        suelo</em>. Es la cifra más honesta y la que importa para planificar
        los muebles y comparar precios.
      </p>

      <h2>Qué hacer cuando los números no cuadran</h2>
      <p>
        Si tu medición está más de un 5 % por debajo de la superficie anunciada,
        tienes margen de negociación:
      </p>
      <ul>
        <li>
          <strong>Alquiler:</strong> Pide una rebaja proporcional a la
          diferencia. €/m² es un cálculo transparente: si pagas por 60 m² y el
          piso tiene 56 m², ese es un 6,7 % que puedes reclamar.
        </li>
        <li>
          <strong>Compra:</strong> Contrata a un tasador profesional antes de
          firmar nada. Una diferencia de superficie del 5 % en una compra de
          400 000 € son 20 000 €, que bien valen los 500 € de honorarios del
          tasador.
        </li>
        <li>
          <strong>Seguro:</strong> Una superficie incorrecta significa una
          cobertura incorrecta. Las aseguradoras pagan los siniestros según la
          superficie realmente medida si tienes documentación. La exportación a
          PDF de la app con marca de fecha se convierte en prueba.
        </li>
      </ul>

      <h2>Medición de varias habitaciones</h2>
      <p>
        Para pisos enteros, guarda cada habitación como un proyecto
        independiente. Superficie total = suma de todas las habitaciones menos
        el solapamiento (el pasillo no debería contarse dos veces si lo mediste
        como parte de la entrada y de la cocina). La exportación a PDF suma todo
        automáticamente cuando agrupas los proyectos en una misma carpeta.
      </p>

      <h2>Convertir entre unidades</h2>
      <p>
        La app maneja todas las unidades principales: m², ft², cm², in². Cambia
        en Ajustes → Unidades. La exportación a PDF etiqueta todo en la unidad
        que elijas. Si estás en Estados Unidos buscando un piso europeo (o al
        revés), esto te ahorra los cálculos de conversión.
      </p>

      <h2>En conclusión</h2>
      <p>
        Nunca te fíes de una cifra de superficie que no hayas medido tú mismo, sobre todo en un anuncio de alquiler o de compra. La app te da una
        verificación en 90 segundos con una precisión de unos pocos puntos
        porcentuales y produce documentación que puedes usar para negociar.
        Trátala como un corrector ortográfico para los anuncios inmobiliarios.
      </p>
    </article>
  );
}

export function PostJA() {
  return (
    <article className="prose-content">
      <p className="lead">
        ratemyagent.com.au が2023年に行った調査によると、<strong>不動産広告の27%が、面積を5%以上水増しして表示している</strong>ことがわかりました。
        60 m² の住戸なら、それは3 m² の架空のスペース、ちょうど小さなバスルームほどの大きさです。
        25 €/m²/月で借りているなら、存在しない床のために月75 €を払わされている計算になります。
      </p>
      <p>
        契約前に物件をチェックする、90秒の確認方法をご紹介します。
      </p>

      <h2>素早い方法（LiDARを使う）</h2>
      <p>
        iPhone 12以降のあらゆるProモデル（または2020年以降のiPad Pro）で：
      </p>
      <ol>
        <li>Ruler AR を開き、<em>部屋スキャン</em>をタップします。</li>
        <li>一つの隅に立ちます。各壁に沿ってゆっくり歩きます。</li>
        <li>開始した隅に戻ったら、<em>完了</em>をタップします。</li>
        <li>サマリー画面で床面積を読み取ります。誤差は±2%以内です。</li>
      </ol>
      <p>
        一部屋ならおよそ60秒で済みます。1ベッドルームの住戸全体でも、合計3〜4分です。
      </p>

      <h2>確実な方法（どのiPhoneでも）</h2>
      <p>
        LiDAR搭載のiPhoneをお持ちでない場合は、手動ルームビルダーを使います：
      </p>
      <ol>
        <li>Ruler AR を開く → ツール → 手動ルームビルダー。</li>
        <li>隅に立ち、足元の床に照準を合わせ、タップします。</li>
        <li>壁に沿って次の隅まで歩きます。タップします。</li>
        <li>部屋を一周します。ミニマップに多角形が広がっていく様子が表示されます。</li>
        <li>開始した隅に到達すると、「部屋を閉じる」パルスが現れます。それをタップします。</li>
      </ol>
      <p>
        多角形の面積は、靴ひも公式（シューレース公式）を使って自動的に計算されます。
        精度はARトラッキングに左右されますが、30 m² 未満の部屋では通常±5%で、
        広告の誇張を見抜くには十分です。
      </p>

      <h2>「面積」に含まれるもの、含まれないもの</h2>
      <p>
        広告は、よくある3つの方法で数字を膨らませます：
      </p>
      <ul>
        <li><strong>使えないスペースを含める。</strong> 傾斜した天井、高さ1.5 m未満のくぼみ、構造柱など。国によって扱いは異なり、イギリスやオーストラリアでは通常1.5 m未満の部分を除外しますが、アメリカはより緩やかです。</li>
        <li><strong>内寸ではなく外壁から外壁まで測る。</strong> 外寸10 × 10 mの箱でも、壁を差し引くと使える内部空間はおよそ9.5 × 9.5 mしかありません（内部間仕切り5 cm × 壁約6枚 = 30 cmの「幽霊」壁面積）。</li>
        <li><strong>バルコニーやテラスを全面積として数える。</strong> 多くの地域では屋外スペースを50%として数えますが、広告が100%として数えているなら、思っているものの半分しか手に入りません。</li>
      </ul>
      <p>
        アプリで測定するとき、あなたが測っているのは<em>使用可能な内部床面積</em>です。
        それが最も正直な数字であり、家具のレイアウトや価格比較で重要になる数字です。
      </p>

      <h2>数字が合わないときにすべきこと</h2>
      <p>
        測定値が表示面積より5%以上小さい場合、あなたには交渉の余地があります：
      </p>
      <ul>
        <li>
          <strong>賃貸：</strong> 差分に比例した値下げを求めましょう。€/m² は透明性のある計算です。
          60 m² 分を支払っているのに住戸が56 m² なら、6.7%分を交渉できます。
        </li>
        <li>
          <strong>購入：</strong> 何かに署名する前に、専門の測量士を入れましょう。
          40万 €の購入で5%の面積差は2万 €。500 €の測量士費用をかける価値があります。
        </li>
        <li>
          <strong>保険：</strong> 面積が間違っていれば、補償も間違っています。
          書類があれば、保険会社は実測面積に基づいて保険金を支払います。
          日付スタンプ付きのアプリのPDFエクスポートが証拠になります。
        </li>
      </ul>

      <h2>複数の部屋の測定</h2>
      <p>
        住戸全体を測る場合は、各部屋を別々のプロジェクトとして保存します。
        合計面積 = すべての部屋の合計から重複分を引いたもの（廊下を玄関とキッチンの一部として測ったなら、二重に数えないように）。
        プロジェクトを一つのフォルダにまとめると、PDFエクスポートが自動的に合計します。
      </p>

      <h2>単位を変換する</h2>
      <p>
        アプリは主要な単位すべてに対応しています：m²、ft²、cm²、in²。
        設定 → 単位 で切り替えます。PDFエクスポートは、選んだ単位ですべてに表示を付けます。
        アメリカからヨーロッパの住戸を探している（またはその逆の）場合、換算の手間が省けます。
      </p>

      <h2>まとめ</h2>
      <p>
        自分で測っていない面積の数字を、特に賃貸や購入の広告では決して信用しないでください。アプリは数パーセント以内の精度で
        90秒の確認を提供し、交渉に使える書類を作成します。
        不動産広告のスペルチェックのようなものだと考えてください。
      </p>
    </article>
  );
}

export function PostKO() {
  return (
    <article className="prose-content">
      <p className="lead">
        ratemyagent.com.au가 2023년에 진행한 조사에 따르면, <strong>부동산 매물의 27%가 면적을 5% 넘게 부풀려 표시</strong>합니다.
        60 m²짜리 아파트라면 3 m²의 가상 공간, 작은 욕실 정도의 크기입니다.
        25 €/m²/월에 임대 중이라면, 존재하지도 않는 바닥에 대해 매달 75 €를 내라는 셈입니다.
      </p>
      <p>
        계약하기 전에 매물을 확인하는 90초 방법을 소개합니다.
      </p>

      <h2>빠른 방법 (LiDAR 사용)</h2>
      <p>
        iPhone 12 이후의 모든 Pro 모델(또는 2020년 이후 iPad Pro)에서:
      </p>
      <ol>
        <li>Ruler AR을 열고 <em>방 스캔</em>을 탭합니다.</li>
        <li>한쪽 모서리에 섭니다. 각 벽을 따라 천천히 걷습니다.</li>
        <li>시작한 모서리로 돌아오면 <em>완료</em>를 탭합니다.</li>
        <li>요약 화면에서 바닥 면적을 확인합니다. 오차는 ±2% 이내입니다.</li>
      </ol>
      <p>
        방 하나에 약 60초가 걸립니다. 침실 하나짜리 아파트 전체는 총 3~4분이면 됩니다.
      </p>

      <h2>확실한 방법 (모든 iPhone)</h2>
      <p>
        LiDAR가 탑재된 iPhone이 없다면, 수동 방 빌더를 사용하세요:
      </p>
      <ol>
        <li>Ruler AR 열기 → 도구 → 수동 방 빌더.</li>
        <li>모서리에 서서, 발밑 바닥에 십자선을 맞추고 탭합니다.</li>
        <li>벽을 따라 다음 모서리까지 걸어갑니다. 탭합니다.</li>
        <li>방을 한 바퀴 돕니다. 미니맵에 다각형이 커지는 모습이 표시됩니다.</li>
        <li>시작한 모서리에 도달하면 "방 닫기" 펄스가 나타납니다. 그것을 탭하세요.</li>
      </ol>
      <p>
        다각형의 면적은 신발끈 공식(Shoelace)으로 자동 계산됩니다.
        정확도는 AR 추적에 따라 달라지며, 30 m² 미만의 방에서는 보통 ±5%로,
        매물의 허위 표시를 잡아내기에 충분합니다.
      </p>

      <h2>무엇이 "면적"에 들어가고, 무엇이 안 들어가는가</h2>
      <p>
        매물은 흔히 세 가지 방법으로 수치를 부풀립니다:
      </p>
      <ul>
        <li><strong>사용할 수 없는 공간을 포함한다.</strong> 경사진 천장, 높이 1.5 m 미만의 벽감, 구조용 기둥 등. 나라마다 처리 방식이 다릅니다. 영국과 호주는 보통 1.5 m 미만 구역을 제외하지만, 미국은 더 느슨합니다.</li>
        <li><strong>내부가 아니라 외벽에서 외벽까지 측정한다.</strong> 외부 치수 10 × 10 m 상자라도 벽을 빼면 사용 가능한 내부 공간은 약 9.5 × 9.5 m뿐입니다(내부 칸막이 5 cm × 벽 약 6개 = 30 cm의 "유령" 벽 면적).</li>
        <li><strong>발코니/테라스를 전부 100%로 계산한다.</strong> 많은 곳에서 실외 공간을 50%로 계산하지만, 매물이 100%로 계산했다면 생각하는 것의 절반만 얻는 셈입니다.</li>
      </ul>
      <p>
        앱으로 측정할 때, 당신이 재는 것은 <em>사용 가능한 내부 바닥 면적</em>입니다.
        이것이 가장 정직한 수치이며, 가구 배치와 가격 비교에 중요한 수치입니다.
      </p>

      <h2>수치가 맞지 않을 때 해야 할 일</h2>
      <p>
        측정값이 표시 면적보다 5% 넘게 작다면, 당신에게는 협상 카드가 있습니다:
      </p>
      <ul>
        <li>
          <strong>임대:</strong> 차이에 비례한 인하를 요구하세요. €/m²는 투명한 계산입니다.
          60 m²에 대해 돈을 내는데 아파트가 56 m²라면, 그건 당신이 밀어붙일 수 있는 6.7%입니다.
        </li>
        <li>
          <strong>구매:</strong> 무언가에 서명하기 전에 전문 감정사를 부르세요.
          40만 €짜리 거래에서 5%의 면적 차이는 2만 €입니다. 500 €의 감정 비용을 들일 가치가 있습니다.
        </li>
        <li>
          <strong>보험:</strong> 면적이 틀리면 보장도 틀립니다.
          문서가 있으면 보험사는 실제 측정 면적을 기준으로 보험금을 지급합니다.
          날짜 도장이 찍힌 앱의 PDF 내보내기가 증거가 됩니다.
        </li>
      </ul>

      <h2>여러 방 측정</h2>
      <p>
        아파트 전체를 잴 때는 각 방을 별도의 프로젝트로 저장하세요.
        총 면적 = 모든 방의 합에서 겹치는 부분을 뺀 값(복도를 현관과 주방의 일부로 측정했다면 두 번 세지 않도록).
        프로젝트를 한 폴더에 묶으면 PDF 내보내기가 자동으로 합산합니다.
      </p>

      <h2>단위 간 변환</h2>
      <p>
        앱은 주요 단위를 모두 지원합니다: m², ft², cm², in².
        설정 → 단위 에서 전환하세요. PDF 내보내기는 선택한 단위로 모든 것에 표시를 붙입니다.
        미국에서 유럽 아파트를 찾고 있다면(또는 그 반대라면), 환산 계산의 수고를 덜어줍니다.
      </p>

      <h2>핵심 정리</h2>
      <p>
        직접 측정하지 않은 면적 수치는, 특히 임대나 구매 매물에서는 절대 믿지 마세요. 앱은 몇 퍼센트 이내의 정확도로
        90초 만에 확인할 수 있게 해주고, 협상에 쓸 수 있는 문서를 만들어 줍니다.
        부동산 매물의 맞춤법 검사기처럼 생각하세요.
      </p>
    </article>
  );
}

export function PostZH() {
  return (
    <article className="prose-content">
      <p className="lead">
        ratemyagent.com.au 在 2023 年的一项研究发现，<strong>27% 的房产挂牌把面积夸大了 5% 以上</strong>。
        对于一套 60 m² 的公寓来说，这就是 3 m² 的虚构空间，差不多是一个小卫生间的大小。
        如果你以 25 €/m²/月 的价格租房，等于被要求为不存在的地面每月多付 75 €。
      </p>
      <p>
        下面是签约前核实房源的 90 秒方法。
      </p>

      <h2>快速方法（使用 LiDAR）</h2>
      <p>
        在 iPhone 12 及之后的任意 Pro 机型（或 2020 年及以后的 iPad Pro）上：
      </p>
      <ol>
        <li>打开 Ruler AR，点按<em>房间扫描</em>。</li>
        <li>站在一个角落。沿着每面墙慢慢走。</li>
        <li>回到起始角落时，点按<em>完成</em>。</li>
        <li>在汇总屏幕上读取地面面积，精度在 ±2% 以内。</li>
      </ol>
      <p>
        扫描一个房间大约需要 60 秒。一套完整的一居室公寓总共需要 3 到 4 分钟。
      </p>

      <h2>可靠方法（任意 iPhone）</h2>
      <p>
        如果你没有配备 LiDAR 的 iPhone，请使用手动房间构建器：
      </p>
      <ol>
        <li>打开 Ruler AR → 工具 → 手动房间构建器。</li>
        <li>站在一个角落，把准星对准脚边的地面，点按。</li>
        <li>沿着墙走到下一个角落。点按。</li>
        <li>绕房间走一圈。小地图会显示多边形不断变大。</li>
        <li>当你回到起始角落时，会出现"闭合房间"的脉动提示。点按它。</li>
      </ol>
      <p>
        多边形的面积会用鞋带公式（Shoelace）自动计算。
        精度取决于 AR 追踪，对于 30 m² 以下的房间通常为 ±5%，
        足以识别出房源中的不实描述。
      </p>

      <h2>什么算作"面积"，什么不算</h2>
      <p>
        房源通常用三种常见方式虚增数字：
      </p>
      <ul>
        <li><strong>把不可用空间也算进去。</strong> 斜屋顶、高度不足 1.5 m 的壁龛、承重柱等。各地处理方式不同：英国和澳大利亚通常排除 1.5 m 以下的区域；美国则更宽松。</li>
        <li><strong>按外墙到外墙测量，而不是内部尺寸。</strong> 一个外部尺寸 10 × 10 m 的盒子，扣除墙体后可用内部空间仅约 9.5 × 9.5 m（内部隔墙 5 cm × 约 6 道墙 = 30 cm 的"幽灵"墙体面积）。</li>
        <li><strong>把阳台/露台按全额计入。</strong> 很多地方把室外空间按 50% 计算；如果你的房源按 100% 计算，你拿到的只有想象中的一半。</li>
      </ul>
      <p>
        用本应用测量时，你量的是<em>室内可用地面面积</em>。
        这是最诚实的数字，也是规划家具和比较价格时最重要的数字。
      </p>

      <h2>数字对不上时该怎么办</h2>
      <p>
        如果你的测量结果比挂牌面积小 5% 以上，你就有谈判筹码：
      </p>
      <ul>
        <li>
          <strong>租房：</strong> 要求按差额比例降价。€/m² 是一种透明的算法：
          如果你为 60 m² 付费，而公寓只有 56 m²，那就有 6.7% 可以争取。
        </li>
        <li>
          <strong>买房：</strong> 在签任何字之前请专业测量师。
          一套 40 万 € 的房产出现 5% 的面积差就是 2 万 €，这值得花 500 € 的测量费。
        </li>
        <li>
          <strong>保险：</strong> 面积错误意味着保额错误。
          只要你有文件，保险公司会按实际测量面积理赔。
          本应用带日期戳的 PDF 导出就成了证据。
        </li>
      </ul>

      <h2>多房间测量</h2>
      <p>
        对于整套公寓，把每个房间保存为单独的项目。
        总面积 = 所有房间之和减去重叠部分（如果你把走廊当作入口和厨房的一部分分别测了，就不要重复计算）。
        当你把多个项目归入同一个文件夹时，PDF 导出会自动汇总。
      </p>

      <h2>单位换算</h2>
      <p>
        本应用支持所有主要单位：m²、ft²、cm²、in²。
        在 设置 → 单位 中切换。PDF 导出会用你选择的单位标注所有内容。
        如果你在美国找欧洲公寓（或者反过来），这能省去你换算的功夫。
      </p>

      <h2>结论</h2>
      <p>
        永远不要相信不是你自己测量的面积数字，尤其是在租房或买房的房源上。本应用让你在 90 秒内完成核实，精度可达几个百分点以内，
        还能生成可用于谈判的文件。
        把它当成房产房源的拼写检查工具。
      </p>
    </article>
  );
}

export function PostPT() {
  return (
    <article className="prose-content">
      <p className="lead">
        Um estudo da ratemyagent.com.au de 2023 constatou que <strong>27% dos
        anúncios de imóveis superestimam a área em mais de 5%</strong>.
        Para um apartamento de 60 m², isso são 3 m² de espaço imaginário, mais
        ou menos o tamanho de um banheiro pequeno. Se você aluga a 25 €/m²/mês,
        estão lhe pedindo para pagar 75 €/mês por um piso que não existe.
      </p>
      <p>
        Aqui está o método de 90 segundos para verificar um anúncio antes de
        assinar.
      </p>

      <h2>O método rápido (com LiDAR)</h2>
      <p>
        Em qualquer iPhone Pro a partir do 12 (ou iPad Pro de 2020 em diante):
      </p>
      <ol>
        <li>Abra o Ruler AR e toque em <em>Escanear ambiente</em>.</li>
        <li>Fique em um canto. Caminhe devagar ao longo de cada parede.</li>
        <li>Quando voltar ao canto inicial, toque em <em>Concluir</em>.</li>
        <li>Leia a área do piso na tela de resumo, com precisão de ±2%.</li>
      </ol>
      <p>
        Isso leva cerca de 60 segundos para um único ambiente. Um apartamento
        de um quarto completo leva de 3 a 4 minutos no total.
      </p>

      <h2>O método confiável (qualquer iPhone)</h2>
      <p>
        Se você não tem um iPhone com LiDAR, use o Construtor manual de
        ambientes:
      </p>
      <ol>
        <li>Abra o Ruler AR → Ferramentas → Construtor manual de ambientes.</li>
        <li>Fique em um canto, mire a mira no piso aos seus pés e toque.</li>
        <li>Caminhe até o próximo canto ao longo da parede. Toque.</li>
        <li>Dê a volta no ambiente. O minimapa mostra o polígono crescendo.</li>
        <li>Quando chegar ao canto inicial, surge a pulsação "fechar ambiente". Toque nela.</li>
      </ol>
      <p>
        A área do polígono é calculada automaticamente com a fórmula do
        cadarço (Shoelace). A precisão depende do rastreamento de AR,
        normalmente ±5% para ambientes com menos de 30 m², o que é suficiente
        para flagrar distorções nos anúncios.
      </p>

      <h2>O que conta como "área" e o que não conta</h2>
      <p>
        Os anúncios inflam os números de três formas comuns:
      </p>
      <ul>
        <li><strong>Incluir espaços inutilizáveis.</strong> Tetos inclinados, nichos com menos de 1,5 m de altura, colunas estruturais. Cada país trata isso de forma diferente: Reino Unido e Austrália costumam excluir áreas abaixo de 1,5 m; os EUA são mais flexíveis.</li>
        <li><strong>Medir de parede externa a parede externa em vez do interior.</strong> Uma caixa externa de 10 × 10 m tem apenas cerca de 9,5 × 9,5 m de espaço interno útil depois das paredes (5 cm de divisória interna × ~6 paredes = 30 cm de área de parede "fantasma").</li>
        <li><strong>Contar varandas/terraços por inteiro.</strong> Muitos lugares contam o espaço externo a 50%; se o seu anúncio o conta a 100%, você recebe metade do que imagina.</li>
      </ul>
      <p>
        Quando você mede com o app, está medindo a <em>área interna útil do
        piso</em>. Esse é o número mais honesto e o que importa para planejar
        os móveis e comparar preços.
      </p>

      <h2>O que fazer quando os números não batem</h2>
      <p>
        Se a sua medição estiver mais de 5% abaixo da área anunciada, você tem
        margem de negociação:
      </p>
      <ul>
        <li>
          <strong>Aluguel:</strong> Peça uma redução proporcional à diferença.
          €/m² é um cálculo transparente: se você paga por 60 m² e o
          apartamento tem 56 m², são 6,7% que você pode reivindicar.
        </li>
        <li>
          <strong>Compra:</strong> Contrate um agrimensor profissional antes de
          assinar qualquer coisa. Uma diferença de área de 5% numa compra de
          400.000 € são 20.000 €, o que vale bem os 500 € de honorários do
          profissional.
        </li>
        <li>
          <strong>Seguro:</strong> Área errada significa cobertura errada. As
          seguradoras pagam sinistros com base na área realmente medida se você
          tiver documentação. A exportação em PDF do app com carimbo de data
          vira prova.
        </li>
      </ul>

      <h2>Medição de vários ambientes</h2>
      <p>
        Para apartamentos inteiros, salve cada ambiente como um projeto
        separado. Área total = soma de todos os ambientes menos a sobreposição
        (o corredor não deve ser contado duas vezes se você o mediu como parte
        da entrada e da cozinha). A exportação em PDF soma tudo automaticamente
        quando você agrupa os projetos em uma mesma pasta.
      </p>

      <h2>Converter entre unidades</h2>
      <p>
        O app lida com todas as unidades principais: m², ft², cm², in². Troque
        em Ajustes → Unidades. A exportação em PDF rotula tudo na unidade que
        você escolher. Se você está nos EUA procurando um apartamento europeu
        (ou vice-versa), isso poupa você das contas de conversão.
      </p>

      <h2>Conclusão</h2>
      <p>
        Nunca confie em um número de área que você não mediu, especialmente em um anúncio de aluguel ou de compra. O app lhe dá uma
        verificação de 90 segundos com precisão de poucos pontos percentuais e
        produz documentação que você pode usar para negociar. Trate-o como um
        corretor ortográfico para anúncios imobiliários.
      </p>
    </article>
  );
}

export function PostIT() {
  return (
    <article className="prose-content">
      <p className="lead">
        Uno studio di ratemyagent.com.au del 2023 ha rilevato che <strong>il 27%
        degli annunci immobiliari sovrastima la superficie di oltre il 5%</strong>.
        Per un appartamento di 60 m², si tratta di 3 m² di spazio immaginario,
        più o meno la dimensione di un piccolo bagno. Se affitti a 25 €/m²/mese,
        ti viene chiesto di pagare 75 €/mese per un pavimento che non esiste.
      </p>
      <p>
        Ecco il metodo da 90 secondi per verificare un annuncio prima di
        firmare.
      </p>

      <h2>Il metodo veloce (con il LiDAR)</h2>
      <p>
        Su qualsiasi iPhone Pro dal 12 in poi (o iPad Pro dal 2020):
      </p>
      <ol>
        <li>Apri Ruler AR e tocca <em>Scansione stanza</em>.</li>
        <li>Mettiti in un angolo. Cammina lentamente lungo ogni parete.</li>
        <li>Quando torni all'angolo di partenza, tocca <em>Fine</em>.</li>
        <li>Leggi la superficie del pavimento nella schermata di riepilogo, con una precisione di ±2%.</li>
      </ol>
      <p>
        Per una singola stanza ci vogliono circa 60 secondi. Un intero
        bilocale richiede in tutto 3-4 minuti.
      </p>

      <h2>Il metodo affidabile (qualsiasi iPhone)</h2>
      <p>
        Se non hai un iPhone con LiDAR, usa il costruttore manuale di stanze:
      </p>
      <ol>
        <li>Apri Ruler AR → Strumenti → Costruttore manuale di stanze.</li>
        <li>Mettiti in un angolo, punta il mirino sul pavimento ai tuoi piedi e tocca.</li>
        <li>Cammina lungo la parete fino all'angolo successivo. Tocca.</li>
        <li>Gira tutta la stanza. La mini-mappa mostra il poligono che cresce.</li>
        <li>Quando raggiungi l'angolo di partenza, compare la pulsazione "chiudi stanza". Toccala.</li>
      </ol>
      <p>
        La superficie del poligono viene calcolata automaticamente con la
        formula dell'area di Gauss (Shoelace). La precisione dipende dal
        tracciamento AR, di norma ±5% per stanze sotto i 30 m², abbastanza
        per smascherare le inesattezze degli annunci.
      </p>

      <h2>Cosa conta come "superficie" e cosa no</h2>
      <p>
        Gli annunci gonfiano i numeri in tre modi comuni:
      </p>
      <ul>
        <li><strong>Includere spazi inutilizzabili.</strong> Soffitti inclinati, nicchie sotto 1,5 m di altezza, colonne strutturali. I vari Paesi le trattano diversamente: Regno Unito e Australia di solito escludono le aree sotto 1,5 m; gli Stati Uniti sono più permissivi.</li>
        <li><strong>Misurare da parete esterna a parete esterna invece che l'interno.</strong> Una scatola esterna di 10 × 10 m offre solo circa 9,5 × 9,5 m di spazio interno utile una volta tolte le pareti (5 cm di tramezzo interno × ~6 pareti = 30 cm di superficie muraria "fantasma").</li>
        <li><strong>Conteggiare balconi/terrazze al 100%.</strong> In molti posti lo spazio esterno si conta al 50%; se il tuo annuncio lo conta al 100%, ottieni la metà di quel che pensi.</li>
      </ul>
      <p>
        Quando misuri con l'app, stai misurando la <em>superficie interna
        calpestabile</em>. È il numero più onesto, e quello che conta per
        disporre i mobili e confrontare i prezzi.
      </p>

      <h2>Cosa fare quando i numeri non tornano</h2>
      <p>
        Se la tua misurazione è inferiore di oltre il 5% alla superficie
        dichiarata, hai potere contrattuale:
      </p>
      <ul>
        <li>
          <strong>Affitto:</strong> Chiedi una riduzione proporzionale alla
          differenza. €/m² è un calcolo trasparente: se paghi per 60 m² e
          l'appartamento è di 56 m², è un 6,7% su cui puoi insistere.
        </li>
        <li>
          <strong>Acquisto:</strong> Chiama un geometra professionista prima di
          firmare qualsiasi cosa. Una differenza di superficie del 5% su un
          acquisto da 400.000 € sono 20.000 €, che valgono bene i 500 € di
          parcella del geometra.
        </li>
        <li>
          <strong>Assicurazione:</strong> Superficie sbagliata significa
          copertura sbagliata. Le assicurazioni liquidano i sinistri in base
          alla superficie effettivamente misurata se hai la documentazione.
          L'esportazione in PDF dell'app con data diventa una prova.
        </li>
      </ul>

      <h2>Misurazione di più stanze</h2>
      <p>
        Per gli appartamenti interi, salva ogni stanza come progetto separato.
        Superficie totale = somma di tutte le stanze meno la sovrapposizione
        (il corridoio non va contato due volte se l'hai misurato come parte
        dell'ingresso e della cucina). L'esportazione in PDF somma tutto
        automaticamente quando raggruppi i progetti in un'unica cartella.
      </p>

      <h2>Convertire tra unità</h2>
      <p>
        L'app gestisce tutte le unità principali: m², ft², cm², in². Cambia in
        Impostazioni → Unità. L'esportazione in PDF etichetta tutto nell'unità
        scelta. Se sei negli Stati Uniti a caccia di un appartamento europeo (o
        viceversa), ti risparmia i calcoli di conversione.
      </p>

      <h2>In conclusione</h2>
      <p>
        Non fidarti mai di una superficie che non hai misurato di persona, soprattutto su un annuncio di affitto o acquisto. L'app ti offre una
        verifica in 90 secondi precisa a pochi punti percentuali e produce una
        documentazione che puoi usare per trattare. Trattala come un correttore
        ortografico per gli annunci immobiliari.
      </p>
    </article>
  );
}

export function PostPL() {
  return (
    <article className="prose-content">
      <p className="lead">
        Badanie ratemyagent.com.au z 2023 roku wykazało, że <strong>27%
        ogłoszeń nieruchomości zawyża powierzchnię o ponad 5%</strong>.
        Dla mieszkania o powierzchni 60 m² to 3 m² wyimaginowanej przestrzeni,
        mniej więcej wielkość małej łazienki. Jeśli wynajmujesz za 25 €/m²/miesiąc,
        każą ci płacić 75 € miesięcznie za podłogę, której nie ma.
      </p>
      <p>
        Oto metoda na 90 sekund, by sprawdzić ogłoszenie, zanim podpiszesz
        umowę.
      </p>

      <h2>Szybka metoda (z LiDAR)</h2>
      <p>
        Na dowolnym iPhonie Pro od 12 wzwyż (lub iPadzie Pro od 2020 roku):
      </p>
      <ol>
        <li>Otwórz Ruler AR i dotknij <em>Skanowanie pomieszczenia</em>.</li>
        <li>Stań w jednym rogu. Idź powoli wzdłuż każdej ściany.</li>
        <li>Gdy wrócisz do rogu startowego, dotknij <em>Gotowe</em>.</li>
        <li>Odczytaj powierzchnię podłogi z ekranu podsumowania, z dokładnością do ±2%.</li>
      </ol>
      <p>
        Jedno pomieszczenie zajmuje około 60 sekund. Pełne mieszkanie z jedną
        sypialnią zajmuje łącznie 3–4 minuty.
      </p>

      <h2>Niezawodna metoda (każdy iPhone)</h2>
      <p>
        Jeśli nie masz iPhone'a z LiDAR, użyj ręcznego kreatora pomieszczeń:
      </p>
      <ol>
        <li>Otwórz Ruler AR → Narzędzia → Ręczny kreator pomieszczeń.</li>
        <li>Stań w rogu, wyceluj celownikiem w podłogę u swoich stóp i dotknij.</li>
        <li>Przejdź wzdłuż ściany do następnego rogu. Dotknij.</li>
        <li>Obejdź pomieszczenie dookoła. Minimapa pokazuje rosnący wielokąt.</li>
        <li>Gdy dojdziesz do rogu startowego, pojawia się pulsacja „zamknij pomieszczenie". Dotknij jej.</li>
      </ol>
      <p>
        Powierzchnia wielokąta jest obliczana automatycznie wzorem
        Gaussa (Shoelace). Dokładność zależy od śledzenia AR, zwykle ±5% dla
        pomieszczeń poniżej 30 m², co wystarczy, by wychwycić zafałszowania w
        ogłoszeniach.
      </p>

      <h2>Co liczy się jako „powierzchnia", a co nie</h2>
      <p>
        Ogłoszenia zawyżają liczby na trzy typowe sposoby:
      </p>
      <ul>
        <li><strong>Wliczanie przestrzeni nieużytkowych.</strong> Skosy, wnęki o wysokości poniżej 1,5 m, słupy konstrukcyjne. Różne kraje traktują to inaczej: Wielka Brytania i Australia zwykle wykluczają obszary poniżej 1,5 m; USA są bardziej liberalne.</li>
        <li><strong>Mierzenie od ściany zewnętrznej do zewnętrznej zamiast wnętrza.</strong> Zewnętrzna bryła 10 × 10 m daje tylko około 9,5 × 9,5 m użytecznej przestrzeni wewnętrznej po odjęciu ścian (5 cm ścianki działowej × ~6 ścian = 30 cm „widmowej" powierzchni ścian).</li>
        <li><strong>Liczenie balkonów/tarasów w pełni.</strong> W wielu miejscach przestrzeń zewnętrzną liczy się jako 50%; jeśli twoje ogłoszenie liczy ją jako 100%, dostajesz połowę tego, co myślisz.</li>
      </ul>
      <p>
        Gdy mierzysz aplikacją, mierzysz <em>użytkową wewnętrzną powierzchnię
        podłogi</em>. To najuczciwsza liczba, a zarazem ta, która liczy się przy
        planowaniu mebli i porównywaniu cen.
      </p>

      <h2>Co zrobić, gdy liczby się nie zgadzają</h2>
      <p>
        Jeśli twój pomiar jest niższy niż podana powierzchnia o więcej niż 5%,
        masz argument przetargowy:
      </p>
      <ul>
        <li>
          <strong>Wynajem:</strong> Poproś o obniżkę proporcjonalną do różnicy.
          €/m² to przejrzyste wyliczenie: jeśli płacisz za 60 m², a mieszkanie
          ma 56 m², to 6,7%, o które możesz powalczyć.
        </li>
        <li>
          <strong>Zakup:</strong> Zatrudnij profesjonalnego rzeczoznawcę, zanim
          cokolwiek podpiszesz. Różnica powierzchni 5% przy zakupie za
          400 000 € to 20 000 €, co z nawiązką usprawiedliwia honorarium
          rzeczoznawcy w wysokości 500 €.
        </li>
        <li>
          <strong>Ubezpieczenie:</strong> Zła powierzchnia oznacza złą ochronę.
          Ubezpieczyciele wypłacają odszkodowania na podstawie faktycznie
          zmierzonej powierzchni, jeśli masz dokumentację. Eksport do PDF z
          aplikacji ze znacznikiem daty staje się dowodem.
        </li>
      </ul>

      <h2>Pomiar wielu pomieszczeń</h2>
      <p>
        W przypadku całych mieszkań zapisuj każde pomieszczenie jako osobny
        projekt. Powierzchnia całkowita = suma wszystkich pomieszczeń minus
        nakładanie się (przedpokoju nie należy liczyć dwa razy, jeśli zmierzyłeś
        go jako część wejścia i kuchni). Eksport do PDF sumuje wszystko
        automatycznie, gdy zgrupujesz projekty w jednym folderze.
      </p>

      <h2>Przeliczanie jednostek</h2>
      <p>
        Aplikacja obsługuje wszystkie główne jednostki: m², ft², cm², in².
        Przełącz w Ustawienia → Jednostki. Eksport do PDF opisuje wszystko w
        wybranej przez ciebie jednostce. Jeśli jesteś w USA i szukasz
        europejskiego mieszkania (albo odwrotnie), oszczędza ci to liczenia
        przeliczników.
      </p>

      <h2>Podsumowanie</h2>
      <p>
        Nigdy nie ufaj powierzchni, której nie zmierzyłeś samodzielnie, zwłaszcza w ogłoszeniu o wynajmie lub sprzedaży. Aplikacja daje ci
        weryfikację w 90 sekund z dokładnością do kilku procent i tworzy
        dokumentację, której możesz użyć do negocjacji. Traktuj ją jak
        sprawdzanie pisowni dla ogłoszeń nieruchomości.
      </p>
    </article>
  );
}

export function PostTR() {
  return (
    <article className="prose-content">
      <p className="lead">
        ratemyagent.com.au'nun 2023'teki bir araştırması, <strong>emlak
        ilanlarının %27'sinin alanı %5'ten fazla abarttığını</strong> ortaya
        koydu. 60 m²'lik bir daire için bu, 3 m²'lik hayali bir alan demek,
        aşağı yukarı küçük bir banyo büyüklüğünde. 25 €/m²/ay üzerinden kiralıyorsanız,
        var olmayan bir zemin için ayda 75 € ödemeniz isteniyor.
      </p>
      <p>
        İşte imzalamadan önce bir ilanı doğrulamanın 90 saniyelik yöntemi.
      </p>

      <h2>Hızlı yöntem (LiDAR ile)</h2>
      <p>
        12 ve sonrası herhangi bir iPhone Pro'da (veya 2020 ve sonrası iPad Pro'da):
      </p>
      <ol>
        <li>Ruler AR'yi açın ve <em>Oda Tarama</em>'ya dokunun.</li>
        <li>Bir köşede durun. Her duvar boyunca yavaşça yürüyün.</li>
        <li>Başlangıç köşesine döndüğünüzde <em>Bitti</em>'ye dokunun.</li>
        <li>Zemin alanını özet ekranından okuyun; ±%2 doğruluktadır.</li>
      </ol>
      <p>
        Tek bir oda için yaklaşık 60 saniye sürer. Tek yatak odalı tam bir
        daire toplamda 3-4 dakika alır.
      </p>

      <h2>Güvenilir yöntem (herhangi bir iPhone)</h2>
      <p>
        LiDAR'lı bir iPhone'unuz yoksa Manuel Oda Oluşturucu'yu kullanın:
      </p>
      <ol>
        <li>Ruler AR'yi açın → Araçlar → Manuel Oda Oluşturucu.</li>
        <li>Bir köşede durun, artı işaretini ayaklarınızın dibindeki zemine yöneltin ve dokunun.</li>
        <li>Duvar boyunca bir sonraki köşeye yürüyün. Dokunun.</li>
        <li>Odanın etrafını dolaşın. Mini harita çokgenin büyüdüğünü gösterir.</li>
        <li>Başlangıç köşesine ulaştığınızda "odayı kapat" titreşimi belirir. Ona dokunun.</li>
      </ol>
      <p>
        Çokgenin alanı, ayakkabı bağı (Shoelace) formülü kullanılarak otomatik
        olarak hesaplanır. Doğruluk AR takibine bağlıdır; 30 m²'nin altındaki
        odalar için genellikle ±%5'tir ve bu, ilanlardaki yanlış beyanları
        yakalamak için yeterlidir.
      </p>

      <h2>"Alan" olarak ne sayılır, ne sayılmaz</h2>
      <p>
        İlanlar rakamları üç yaygın yolla şişirir:
      </p>
      <ul>
        <li><strong>Kullanılamaz alanları dahil etmek.</strong> Eğimli tavanlar, 1,5 m'den alçak nişler, taşıyıcı kolonlar. Ülkeler bunu farklı ele alır: İngiltere ve Avustralya genellikle 1,5 m altındaki alanları hariç tutar; ABD daha esnektir.</li>
        <li><strong>İç yerine dış duvardan dış duvara ölçmek.</strong> 10 × 10 m'lik dış bir kutu, duvarlar düşüldükten sonra yalnızca yaklaşık 9,5 × 9,5 m kullanılabilir iç alan sunar (5 cm iç bölme × ~6 duvar = 30 cm "hayalet" duvar alanı).</li>
        <li><strong>Balkon/terasları tam sayarak hesaplamak.</strong> Birçok yerde dış alan %50 sayılır; ilanınız onu %100 sayıyorsa, düşündüğünüzün yarısını alıyorsunuz.</li>
      </ul>
      <p>
        Uygulamayla ölçtüğünüzde, <em>kullanılabilir iç zemin alanını</em>
        ölçersiniz. Bu en dürüst rakamdır ve mobilya planlaması ile fiyat
        karşılaştırması için önemli olan rakamdır.
      </p>

      <h2>Sayılar tutmadığında ne yapmalı</h2>
      <p>
        Ölçümünüz ilan edilen alanın %5'inden daha fazla altındaysa, elinizde
        bir koz var:
      </p>
      <ul>
        <li>
          <strong>Kiralama:</strong> Farkla orantılı bir indirim isteyin. €/m²
          şeffaf bir hesaptır: 60 m² için ödeme yapıyorsanız ve daire 56 m²
          ise, bu peşinden gidebileceğiniz %6,7'dir.
        </li>
        <li>
          <strong>Satın alma:</strong> Herhangi bir şey imzalamadan önce
          profesyonel bir eksper tutun. 400.000 €'luk bir alımda %5'lik alan
          farkı 20.000 € eder; bu da 500 €'luk eksper ücretine değer.
        </li>
        <li>
          <strong>Sigorta:</strong> Yanlış alan, yanlış teminat demektir.
          Belgeniz varsa sigortacılar tazminatı gerçek ölçülen alana göre öder.
          Uygulamanın tarih damgalı PDF dışa aktarımı kanıt hâline gelir.
        </li>
      </ul>

      <h2>Çok odalı ölçüm</h2>
      <p>
        Tüm daireler için her odayı ayrı bir proje olarak kaydedin. Toplam alan
        = tüm odaların toplamı eksi çakışma (koridoru girişin ve mutfağın
        parçası olarak ölçtüyseniz iki kez sayılmamalı). Projeleri tek bir
        klasörde gruplandırdığınızda PDF dışa aktarımı her şeyi otomatik
        toplar.
      </p>

      <h2>Birimler arası dönüştürme</h2>
      <p>
        Uygulama tüm başlıca birimleri destekler: m², ft², cm², in². Ayarlar →
        Birimler'den değiştirin. PDF dışa aktarımı her şeyi seçtiğiniz birimle
        etiketler. ABD'deyseniz ve Avrupa'da bir daire arıyorsanız (ya da tam
        tersi), bu sizi dönüştürme hesaplarından kurtarır.
      </p>

      <h2>Özetle</h2>
      <p>
        Kendiniz ölçmediğiniz bir alan rakamına asla güvenmeyin, özellikle bir kiralık veya satılık ilanında. Uygulama size birkaç yüzde içinde
        doğru, 90 saniyelik bir doğrulama sunar ve pazarlıkta
        kullanabileceğiniz belgeler üretir. Onu, emlak ilanları için bir yazım
        denetleyicisi gibi düşünün.
      </p>
    </article>
  );
}

export function PostAR() {
  return (
    <article className="prose-content">
      <p className="lead">
        كشفت دراسة أجرتها ratemyagent.com.au عام 2023 أن <strong>27% من إعلانات
        العقارات تبالغ في المساحة بأكثر من 5%</strong>. بالنسبة لشقة مساحتها
        60 m²، فهذا يعني 3 m² من المساحة الوهمية، أي بحجم حمام صغير تقريبًا.
        إذا كنت تستأجر بسعر 25 €/m²/شهريًا، فيُطلب منك دفع 75 € شهريًا مقابل
        أرضية غير موجودة.
      </p>
      <p>
        إليك طريقة الـ 90 ثانية للتحقق من الإعلان قبل التوقيع.
      </p>

      <h2>الطريقة السريعة (مع LiDAR)</h2>
      <p>
        على أي iPhone Pro من الإصدار 12 فما فوق (أو iPad Pro من 2020 فأحدث):
      </p>
      <ol>
        <li>افتح Ruler AR واضغط على <em>مسح الغرفة</em>.</li>
        <li>قف في إحدى الزوايا. امشِ ببطء على طول كل جدار.</li>
        <li>عند عودتك إلى زاوية البداية، اضغط على <em>تم</em>.</li>
        <li>اقرأ مساحة الأرضية من شاشة الملخص، بدقة تصل إلى ±2%.</li>
      </ol>
      <p>
        يستغرق هذا حوالي 60 ثانية للغرفة الواحدة. أما شقة كاملة بغرفة نوم
        واحدة فتستغرق من 3 إلى 4 دقائق إجمالًا.
      </p>

      <h2>الطريقة الموثوقة (أي iPhone)</h2>
      <p>
        إذا لم يكن لديك iPhone مزود بـ LiDAR، فاستخدم منشئ الغرف اليدوي:
      </p>
      <ol>
        <li>افتح Ruler AR ← الأدوات ← منشئ الغرف اليدوي.</li>
        <li>قف في زاوية، وجّه علامة التصويب نحو الأرضية عند قدميك، ثم اضغط.</li>
        <li>امشِ على طول الجدار إلى الزاوية التالية. اضغط.</li>
        <li>دُر حول الغرفة. تُظهر الخريطة المصغّرة المضلّع وهو يكبر.</li>
        <li>عند وصولك إلى زاوية البداية، يظهر نبض «إغلاق الغرفة». اضغط عليه.</li>
      </ol>
      <p>
        تُحسب مساحة المضلّع تلقائيًا باستخدام صيغة الحذاء (Shoelace). تعتمد
        الدقة على تتبّع الواقع المعزز، وعادةً ما تكون ±5% للغرف التي تقل
        مساحتها عن 30 m²، وهو ما يكفي لكشف المغالطات في الإعلانات.
      </p>

      <h2>ما الذي يُحسب «مساحة» وما الذي لا يُحسب</h2>
      <p>
        تضخّم الإعلانات الأرقام بثلاث طرق شائعة:
      </p>
      <ul>
        <li><strong>إدراج المساحات غير القابلة للاستخدام.</strong> الأسقف المائلة، والتجاويف التي يقل ارتفاعها عن 1.5 m، والأعمدة الإنشائية. تتعامل البلدان المختلفة مع ذلك بطرق متباينة؛ فالمملكة المتحدة وأستراليا تستبعدان عادةً المناطق التي يقل ارتفاعها عن 1.5 m، بينما الولايات المتحدة أكثر تساهلًا.</li>
        <li><strong>القياس من الجدار الخارجي إلى الخارجي بدلًا من الداخل.</strong> صندوق خارجي بأبعاد 10 × 10 m لا يوفّر سوى نحو 9.5 × 9.5 m من المساحة الداخلية القابلة للاستخدام بعد خصم الجدران (5 cm من القاطع الداخلي × نحو 6 جدران = 30 cm من مساحة الجدران «الشبحية»).</li>
        <li><strong>احتساب الشرفات/التراسات بالكامل.</strong> تحتسب أماكن كثيرة المساحة الخارجية بنسبة 50%؛ فإذا احتسبها إعلانك بنسبة 100%، فأنت تحصل على نصف ما تظنه.</li>
      </ul>
      <p>
        عندما تقيس باستخدام التطبيق، فأنت تقيس <em>المساحة الأرضية الداخلية
        القابلة للاستخدام</em>. هذا هو الرقم الأكثر صدقًا، وهو الرقم المهم
        لتخطيط الأثاث ومقارنة الأسعار.
      </p>

      <h2>ماذا تفعل عندما لا تتطابق الأرقام</h2>
      <p>
        إذا كان قياسك أقل من المساحة المعلنة بأكثر من 5%، فلديك ورقة ضغط:
      </p>
      <ul>
        <li>
          <strong>الإيجار:</strong> اطلب تخفيضًا متناسبًا مع الفارق. €/m² حساب
          شفاف؛ فإذا كنت تدفع مقابل 60 m² والشقة 56 m²، فذلك 6.7% يمكنك
          المطالبة بها.
        </li>
        <li>
          <strong>الشراء:</strong> استعن بمساح محترف قبل التوقيع على أي شيء.
          فارق مساحة بنسبة 5% في عملية شراء بقيمة 400,000 € يعادل 20,000 €،
          وهو ما يستحق دفع 500 € أتعاب المساح.
        </li>
        <li>
          <strong>التأمين:</strong> المساحة الخاطئة تعني تغطية خاطئة. تدفع
          شركات التأمين المطالبات بناءً على المساحة المقيسة فعليًا إذا كان لديك
          توثيق. ويصبح تصدير التطبيق إلى PDF مع ختم التاريخ دليلًا.
        </li>
      </ul>

      <h2>قياس عدة غرف</h2>
      <p>
        للشقق الكاملة، احفظ كل غرفة كمشروع منفصل. المساحة الإجمالية = مجموع كل
        الغرف مطروحًا منه التداخل (لا ينبغي احتساب الممر مرتين إذا قِسته كجزء من
        المدخل والمطبخ). ويجمع تصدير PDF كل ذلك تلقائيًا عندما تجمع المشاريع في
        مجلد واحد.
      </p>

      <h2>التحويل بين الوحدات</h2>
      <p>
        يتعامل التطبيق مع جميع الوحدات الرئيسية: m² وft² وcm² وin². بدّل من
        الإعدادات ← الوحدات. ويصنّف تصدير PDF كل شيء بالوحدة التي تختارها. إذا
        كنت في الولايات المتحدة تبحث عن شقة أوروبية (أو العكس)، فهذا يوفّر عليك
        عناء حسابات التحويل.
      </p>

      <h2>الخلاصة</h2>
      <p>
        لا تثق أبدًا برقم مساحة لم تقِسه بنفسك، خصوصًا في إعلان إيجار أو شراء. يمنحك التطبيق
        تحققًا في 90 ثانية بدقة في حدود نسبة مئوية قليلة، وينتج توثيقًا يمكنك
        استخدامه في التفاوض. تعامل معه كأنه مدقق إملائي لإعلانات العقارات.
      </p>
    </article>
  );
}

export const bodies = {
  ru: PostRU, de: PostDE, fr: PostFR, es: PostES, ja: PostJA, ko: PostKO,
  'zh-Hans': PostZH, 'pt-BR': PostPT, it: PostIT, pl: PostPL, tr: PostTR, ar: PostAR
};
