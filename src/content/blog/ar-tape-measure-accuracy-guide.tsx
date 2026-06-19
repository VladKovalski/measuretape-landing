import type { PostMeta } from './posts';

export const meta: PostMeta = {
  slug: 'ar-tape-measure-accuracy-guide',
  date: '2026-05-08',
  readingTimeMin: 6,
  keywords:
    'ar tape measure accuracy, iphone measure precision, lidar vs arkit accuracy, how accurate is iphone measure app',
  tags: ['Accuracy', 'Tips', 'AR'],
  title: {
    en: "How Accurate Is an iPhone Tape Measure App? A Contractor's Guide",
    ru: "Насколько точна AR-рулетка на iPhone? Гид от строителя",
    de: "Wie genau ist eine iPhone-Maßband-App? Ein Profi-Guide",
    fr: "Quelle précision pour un mètre ruban iPhone ? Le guide d'un artisan",
    es: "¿Qué precisión tiene una app cinta métrica iPhone? Guía profesional",
    ja: "iPhoneのメジャーアプリはどこまで正確か？プロの実践ガイド",
    ko: "iPhone 줄자 앱은 얼마나 정확할까? 전문가 가이드",
    "zh-Hans": "iPhone 卷尺 App 究竟有多准？专业施工指南",
    "pt-BR": "Qual a precisão de um app de trena para iPhone? Guia profissional",
    it: "Quanto è precisa un'app metro per iPhone? La guida di un professionista",
    pl: "Jak dokładna jest aplikacja miarka na iPhone? Poradnik fachowca",
    tr: "iPhone şerit metre uygulaması ne kadar hassas? Usta rehberi",
    ar: "ما مدى دقة تطبيق متر القياس على iPhone؟ دليل المحترفين"
  },
  excerpt: {
    en: 'Realistic accuracy numbers for AR measuring apps, what to expect with LiDAR vs without, when to trust the reading, and the five tricks that cut measurement error in half.',
    ru: 'Реальные числа точности AR-приложений, что ожидать с LiDAR и без, когда доверять показаниям, и пять приёмов, которые уменьшают ошибку вдвое.',
    de: "Realistische Genauigkeitswerte für AR-Mess-Apps, was man mit und ohne LiDAR erwarten kann, wann man der Anzeige trauen sollte und fünf Tricks, die den Messfehler halbieren.",
    fr: "Des chiffres de précision réalistes pour les applis de mesure AR, ce qu'il faut attendre avec ou sans LiDAR, quand se fier à la lecture, et cinq astuces qui divisent l'erreur par deux.",
    es: "Cifras de precisión realistas para apps de medición AR, qué esperar con LiDAR y sin él, cuándo fiarse de la lectura, y los cinco trucos que reducen el error a la mitad.",
    ja: "AR計測アプリの現実的な精度、LiDARあり・なしで何が変わるか、表示値を信頼してよい場面、そして測定誤差を半分に減らす5つのコツ。",
    ko: "AR 측정 앱의 현실적인 정확도, LiDAR가 있을 때와 없을 때의 차이, 측정값을 믿어도 되는 순간, 그리고 오차를 절반으로 줄이는 다섯 가지 요령.",
    "zh-Hans": "AR 测量 App 的真实精度，有无 LiDAR 各能达到什么水平，何时该相信读数，以及把测量误差减半的五个技巧。",
    "pt-BR": "Números realistas de precisão para apps de medição AR, o que esperar com e sem LiDAR, quando confiar na leitura e os cinco truques que reduzem o erro pela metade.",
    it: "Numeri di precisione realistici per le app di misura AR, cosa aspettarsi con e senza LiDAR, quando fidarsi della lettura e i cinque trucchi che dimezzano l'errore.",
    pl: "Realistyczne wartości dokładności aplikacji pomiarowych AR, czego oczekiwać z LiDAR i bez niego, kiedy ufać odczytowi oraz pięć sztuczek, które zmniejszają błąd o połowę.",
    tr: "AR ölçüm uygulamaları için gerçekçi doğruluk değerleri, LiDAR'lı ve LiDAR'sız ne beklemeli, okumaya ne zaman güvenmeli ve ölçüm hatasını yarıya indiren beş püf noktası.",
    ar: "أرقام دقة واقعية لتطبيقات القياس بالواقع المعزز، وما الذي تتوقعه مع LiDAR وبدونه، ومتى تثق بالقراءة، وخمس حيل تقلّص خطأ القياس إلى النصف."
  }
};

export default function Post() {
  return (
    <article className="prose-content">
      <p className="lead">
        Short answer: a modern iPhone with LiDAR will give you measurements within
        ±5 mm over 3 metres. Without LiDAR, expect ±1-2 cm over the same distance.
        That's good enough for furniture shopping, real estate listings, and most
        renovation estimates. It's <em>not</em> good enough for cabinetry or
        millwork, where you still need a steel rule.
      </p>

      <p>
        But "accuracy" is a moving target. The same app on the same phone can be
        off by 5 cm one time and ±2 mm the next, depending on lighting, distance,
        and how the user holds the phone. Here's what's actually going on inside
        the AR session and what you can do to consistently get the most precise
        readings.
      </p>

      <h2>What ARKit is actually doing</h2>
      <p>
        ARKit (the framework all iPhone measuring apps are built on) does two
        things at once. It tracks the phone's 6-degree-of-freedom position in
        space using <em>visual-inertial odometry</em>, the camera reads texture
        features in your environment 60 times per second, and the IMU
        (accelerometer + gyroscope) reads motion 1000 times per second. The two
        signals are fused to estimate where the phone is.
      </p>
      <p>
        Then, when you tap to place a measurement point, the app casts a ray from
        the touch location into 3D space and looks for where that ray intersects
        a detected surface. The intersection point gets a 3D coordinate.
      </p>
      <p>
        The distance between two points is just the Euclidean distance between
        their 3D coordinates. Simple in theory. In practice, every step in that
        chain has error: feature tracking drifts, surface detection is fuzzy,
        raycast hits can land on the wrong plane.
      </p>

      <h2>LiDAR vs no LiDAR: what changes</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>iPhone with LiDAR (12 Pro+)</th>
            <th>iPhone without LiDAR (Xs, 14)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>How depth is measured</td>
            <td>Direct laser time-of-flight</td>
            <td>Inferred from camera parallax + IMU</td>
          </tr>
          <tr>
            <td>Typical accuracy (≤3 m)</td>
            <td>±5 mm</td>
            <td>±10-20 mm</td>
          </tr>
          <tr>
            <td>Accuracy at 5 m</td>
            <td>±10 mm</td>
            <td>±30-50 mm</td>
          </tr>
          <tr>
            <td>Works in pitch darkness</td>
            <td>Yes (laser doesn't need ambient light)</td>
            <td>No (camera tracking fails)</td>
          </tr>
          <tr>
            <td>Initialization time</td>
            <td>~1 second</td>
            <td>~3-5 seconds</td>
          </tr>
        </tbody>
      </table>

      <h2>Five tricks that cut measurement error in half</h2>
      <ol>
        <li>
          <strong>Calibrate by moving the phone first.</strong> Before tapping
          your first point, walk a metre or two around the area you'll be
          measuring. This gives ARKit enough motion to triangulate depth from
          parallax, early measurements right after launching the app are the
          least accurate.
        </li>
        <li>
          <strong>Use Touch Mode for small dimensions.</strong> For anything under
          30 cm, AR raycast has a hard time placing the start point exactly where
          you intend. Touch Mode (in the mode picker) instead places the start
          point at the phone's physical position. Press the phone against the
          starting edge, tap once, move to the end, tap again. No raycast = no
          raycast error.
        </li>
        <li>
          <strong>Tap a textured surface, not a blank wall.</strong> AR plane
          detection works by finding feature points (corners, edges, dots in
          texture). A perfectly white plaster wall has zero features. If you need
          to measure to a blank wall, place a piece of patterned tape or a book
          where you want to anchor, anything with edges.
        </li>
        <li>
          <strong>Cross-check long distances by walking.</strong> AR drift adds up
          over distance. For anything over 4 m, measure half-and-half: pick a
          midpoint, measure from one end to the midpoint, then from the midpoint
          to the far end. The two halves should add up to within a few
          millimetres of a single end-to-end measurement. If they don't, the long
          measurement has drift.
        </li>
        <li>
          <strong>Don't trust the first reading. Take three.</strong> Tap, save,
          move the phone away, come back, re-tap. Repeat three times. If all
          three readings agree within ±3 mm, you have a solid number. If they
          disagree by more than 1 cm, something about the AR session (lighting,
          tracking quality, surface) isn't favourable, change something and
          retry.
        </li>
      </ol>

      <h2>When NOT to use an AR measure</h2>
      <p>
        AR is the wrong tool for:
      </p>
      <ul>
        <li>
          <strong>Cabinetry, doors, drawer fronts.</strong> Anywhere a 1 mm gap
          matters, a steel rule is faster and more reliable.
        </li>
        <li>
          <strong>Diagonal across a room over 5 m.</strong> Use a laser distance
          meter, they're cheap, accurate, and don't drift over long distances.
        </li>
        <li>
          <strong>Outdoors in direct sunlight.</strong> LiDAR is washed out by
          bright IR ambient (sunlight), and camera tracking deals with the same
          issue from shifting shadows. Better in shade or overcast.
        </li>
        <li>
          <strong>Reflective or transparent surfaces.</strong> Mirrors, polished
          marble, and glass return bad depth readings. Cover or avoid them.
        </li>
      </ul>

      <h2>Apple Measure vs third-party AR apps</h2>
      <p>
        Apple's built-in Measure app uses the same ARKit primitives as third-party
        apps, so raw accuracy is similar. The differences are in features:
      </p>
      <ul>
        <li>
          Apple Measure: distance, height (auto-detects a person's height), level.
          That's it.
        </li>
        <li>
          Third-party AR apps (Ruler AR, MagicPlan, RoomScan Pro): the above plus
          angles, area, polygon measurement, 3D room scans, manual floor plan
          builders, project folders, PDF export, calibration modes, photo
          annotations, and so on.
        </li>
      </ul>
      <p>
        For one-off measurements Apple's app is fine. For anything that needs to
        be saved, exported, or measured at higher fidelity (Touch Mode, polygon
        area, accuracy profiles), a dedicated app is more practical.
      </p>

      <h2>Bottom line</h2>
      <p>
        A modern iPhone AR app is accurate enough to replace a tape measure for
        most home and pro-light tasks. With LiDAR, ±5 mm is realistic. Without
        LiDAR, ±1-2 cm is realistic. Use the five tricks above and your readings
        will improve. For finish work, keep a steel rule in your toolbox.
      </p>
    </article>
  );
}

export function PostRU() {
  return (
    <article className="prose-content">
      <p className="lead">
        Короткий ответ: современный iPhone с LiDAR даёт измерения с точностью
        ±5 мм на дистанции 3 метра. Без LiDAR ожидайте ±1-2 см на той же
        дистанции. Этого достаточно для подбора мебели, объявлений о
        недвижимости и большинства ремонтных смет. Этого <em>не</em> хватит для
        корпусной мебели или столярки — там по-прежнему нужна стальная линейка.
      </p>

      <p>
        Но «точность» — величина подвижная. Одно и то же приложение на одном и
        том же телефоне может ошибиться на 5 см в один раз и дать ±2 мм в другой,
        в зависимости от освещения, дистанции и того, как пользователь держит
        телефон. Вот что на самом деле происходит внутри AR-сессии и что вы
        можете сделать, чтобы стабильно получать максимально точные показания.
      </p>

      <h2>Что на самом деле делает ARKit</h2>
      <p>
        ARKit (фреймворк, на котором построены все приложения-рулетки для iPhone)
        делает две вещи одновременно. Он отслеживает положение телефона с шестью
        степенями свободы в пространстве с помощью <em>визуально-инерциальной
        одометрии</em>: камера считывает текстурные признаки окружения 60 раз в
        секунду, а IMU (акселерометр + гироскоп) считывает движение 1000 раз в
        секунду. Два сигнала объединяются, чтобы оценить, где находится телефон.
      </p>
      <p>
        Затем, когда вы касаетесь экрана, чтобы поставить точку измерения,
        приложение пускает луч из точки касания в трёхмерное пространство и ищет,
        где этот луч пересекает обнаруженную поверхность. Точка пересечения
        получает 3D-координату.
      </p>
      <p>
        Расстояние между двумя точками — это просто евклидово расстояние между их
        3D-координатами. В теории всё просто. На практике на каждом шаге этой
        цепочки есть погрешность: трекинг признаков уходит в дрейф, детекция
        поверхностей размыта, луч может попасть не в ту плоскость.
      </p>

      <h2>LiDAR против отсутствия LiDAR: что меняется</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>iPhone с LiDAR (12 Pro+)</th>
            <th>iPhone без LiDAR (Xs, 14)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Как измеряется глубина</td>
            <td>Прямой лазерный замер времени пролёта</td>
            <td>Вычисляется из параллакса камеры + IMU</td>
          </tr>
          <tr>
            <td>Типичная точность (≤3 м)</td>
            <td>±5 мм</td>
            <td>±10-20 мм</td>
          </tr>
          <tr>
            <td>Точность на 5 м</td>
            <td>±10 мм</td>
            <td>±30-50 мм</td>
          </tr>
          <tr>
            <td>Работает в полной темноте</td>
            <td>Да (лазеру не нужен внешний свет)</td>
            <td>Нет (трекинг камеры срывается)</td>
          </tr>
          <tr>
            <td>Время инициализации</td>
            <td>~1 секунда</td>
            <td>~3-5 секунд</td>
          </tr>
        </tbody>
      </table>

      <h2>Пять приёмов, которые вдвое снижают ошибку измерения</h2>
      <ol>
        <li>
          <strong>Сначала откалибруйте, двигая телефоном.</strong> Перед тем как
          поставить первую точку, пройдитесь метр-два вокруг области, которую
          будете измерять. Это даёт ARKit достаточно движения, чтобы
          триангулировать глубину по параллаксу; самые первые измерения сразу
          после запуска приложения наименее точны.
        </li>
        <li>
          <strong>Используйте режим Touch для малых размеров.</strong> Для всего,
          что меньше 30 см, AR-лучу трудно поставить начальную точку именно там,
          где вы хотите. Режим Touch (в выборе режимов) вместо этого ставит
          начальную точку в физическом положении телефона. Прижмите телефон к
          начальной кромке, коснитесь один раз, переместитесь к концу, коснитесь
          снова. Нет луча — нет ошибки луча.
        </li>
        <li>
          <strong>Касайтесь текстурированной поверхности, а не пустой стены.</strong> AR
          распознаёт плоскости, находя опорные точки (углы, кромки, точки в
          текстуре). Идеально белая оштукатуренная стена не имеет ни одной такой
          точки. Если нужно измерить до пустой стены, прикрепите кусок
          узорчатого скотча или положите книгу там, где хотите закрепить точку —
          что угодно с кромками.
        </li>
        <li>
          <strong>Перепроверяйте длинные дистанции пешком.</strong> AR-дрейф
          накапливается с расстоянием. Для всего, что длиннее 4 м, измеряйте
          пополам: выберите середину, измерьте от одного конца до середины, затем
          от середины до дальнего конца. Сумма двух половин должна совпадать с
          единым измерением «из конца в конец» с точностью до нескольких
          миллиметров. Если нет — в длинном измерении есть дрейф.
        </li>
        <li>
          <strong>Не доверяйте первому показанию. Сделайте три.</strong> Коснитесь,
          сохраните, отведите телефон, вернитесь, коснитесь снова. Повторите три
          раза. Если все три показания сходятся в пределах ±3 мм, у вас надёжное
          число. Если они расходятся больше чем на 1 см, что-то в AR-сессии
          (освещение, качество трекинга, поверхность) неблагоприятно — измените
          что-нибудь и повторите.
        </li>
      </ol>

      <h2>Когда НЕ стоит использовать AR-рулетку</h2>
      <p>
        AR — неподходящий инструмент для:
      </p>
      <ul>
        <li>
          <strong>Корпусной мебели, дверей, фасадов ящиков.</strong> Везде, где
          важен зазор в 1 мм, стальная линейка быстрее и надёжнее.
        </li>
        <li>
          <strong>Диагонали комнаты длиннее 5 м.</strong> Используйте лазерный
          дальномер — он дешёвый, точный и не дрейфует на больших дистанциях.
        </li>
        <li>
          <strong>Улицы под прямым солнцем.</strong> LiDAR засвечивается ярким
          ИК-фоном (солнцем), а трекинг камеры страдает от того же из-за
          движущихся теней. Лучше в тени или при облачности.
        </li>
        <li>
          <strong>Отражающих или прозрачных поверхностей.</strong> Зеркала,
          полированный мрамор и стекло дают неверные показания глубины. Закройте
          их или избегайте.
        </li>
      </ul>

      <h2>Apple Measure против сторонних AR-приложений</h2>
      <p>
        Встроенное приложение Apple Measure использует те же примитивы ARKit, что
        и сторонние приложения, поэтому «сырая» точность похожа. Различия — в
        функциях:
      </p>
      <ul>
        <li>
          Apple Measure: расстояние, рост (автоматически определяет рост
          человека), уровень. И всё.
        </li>
        <li>
          Сторонние AR-приложения (Ruler AR, MagicPlan, RoomScan Pro): всё
          вышеперечисленное плюс углы, площадь, измерение многоугольников,
          3D-сканы помещений, ручные конструкторы планов, папки проектов, экспорт
          в PDF, режимы калибровки, аннотации к фотографиям и так далее.
        </li>
      </ul>
      <p>
        Для разовых измерений приложения Apple достаточно. Для всего, что нужно
        сохранить, экспортировать или измерить с большей точностью (режим Touch,
        площадь многоугольника, профили точности), специализированное приложение
        практичнее.
      </p>

      <h2>Итог</h2>
      <p>
        Современное AR-приложение для iPhone достаточно точно, чтобы заменить
        рулетку для большинства домашних и нетяжёлых профессиональных задач. С
        LiDAR реально получить ±5 мм. Без LiDAR реально ±1-2 см. Используйте пять
        приёмов выше — и ваши показания улучшатся. Для чистовых работ держите
        стальную линейку в наборе инструментов.
      </p>
    </article>
  );
}

export function PostDE() {
  return (
    <article className="prose-content">
      <p className="lead">
        Kurze Antwort: Ein modernes iPhone mit LiDAR liefert Messungen mit einer
        Genauigkeit von ±5 mm auf 3 Metern. Ohne LiDAR sollten Sie auf derselben
        Distanz mit ±1-2 cm rechnen. Das reicht für den Möbelkauf,
        Immobilienanzeigen und die meisten Renovierungsschätzungen. Es reicht
        <em> nicht</em> für Schreinerarbeiten oder Innenausbau, wo Sie weiterhin
        einen Stahlmaßstab brauchen.
      </p>

      <p>
        Doch „Genauigkeit" ist ein bewegliches Ziel. Dieselbe App auf demselben
        Telefon kann einmal um 5 cm danebenliegen und beim nächsten Mal ±2 mm
        treffen, je nach Beleuchtung, Distanz und der Art, wie der Nutzer das
        Telefon hält. Hier ist, was in der AR-Sitzung tatsächlich passiert und was
        Sie tun können, um konstant die präzisesten Werte zu erhalten.
      </p>

      <h2>Was ARKit eigentlich tut</h2>
      <p>
        ARKit (das Framework, auf dem alle iPhone-Mess-Apps aufbauen) erledigt
        zwei Dinge gleichzeitig. Es verfolgt die Position des Telefons mit sechs
        Freiheitsgraden im Raum mittels <em>visuell-inertialer Odometrie</em>: Die
        Kamera liest Texturmerkmale Ihrer Umgebung 60-mal pro Sekunde, und die IMU
        (Beschleunigungssensor + Gyroskop) erfasst die Bewegung 1000-mal pro
        Sekunde. Beide Signale werden zusammengeführt, um die Position des
        Telefons zu schätzen.
      </p>
      <p>
        Wenn Sie dann tippen, um einen Messpunkt zu setzen, schickt die App einen
        Strahl von der Berührstelle in den 3D-Raum und sucht, wo dieser Strahl auf
        eine erkannte Oberfläche trifft. Der Schnittpunkt erhält eine
        3D-Koordinate.
      </p>
      <p>
        Der Abstand zwischen zwei Punkten ist einfach die euklidische Distanz
        zwischen ihren 3D-Koordinaten. Theoretisch simpel. In der Praxis steckt in
        jedem Schritt dieser Kette ein Fehler: Das Merkmals-Tracking driftet, die
        Oberflächenerkennung ist unscharf, der Strahl kann auf der falschen Ebene
        landen.
      </p>

      <h2>LiDAR vs. kein LiDAR: Was sich ändert</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>iPhone mit LiDAR (12 Pro+)</th>
            <th>iPhone ohne LiDAR (Xs, 14)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Wie die Tiefe gemessen wird</td>
            <td>Direkte Laser-Laufzeitmessung</td>
            <td>Aus Kameraparallaxe + IMU abgeleitet</td>
          </tr>
          <tr>
            <td>Typische Genauigkeit (≤3 m)</td>
            <td>±5 mm</td>
            <td>±10-20 mm</td>
          </tr>
          <tr>
            <td>Genauigkeit bei 5 m</td>
            <td>±10 mm</td>
            <td>±30-50 mm</td>
          </tr>
          <tr>
            <td>Funktioniert in völliger Dunkelheit</td>
            <td>Ja (der Laser braucht kein Umgebungslicht)</td>
            <td>Nein (das Kamera-Tracking versagt)</td>
          </tr>
          <tr>
            <td>Initialisierungszeit</td>
            <td>~1 Sekunde</td>
            <td>~3-5 Sekunden</td>
          </tr>
        </tbody>
      </table>

      <h2>Fünf Tricks, die den Messfehler halbieren</h2>
      <ol>
        <li>
          <strong>Kalibrieren Sie, indem Sie das Telefon zuerst bewegen.</strong> Bevor
          Sie Ihren ersten Punkt setzen, gehen Sie ein bis zwei Meter um den
          Bereich herum, den Sie messen wollen. Das gibt ARKit genug Bewegung, um
          die Tiefe über die Parallaxe zu triangulieren; die ersten Messungen
          direkt nach dem Start der App sind am ungenauesten.
        </li>
        <li>
          <strong>Nutzen Sie den Touch-Modus für kleine Maße.</strong> Bei allem
          unter 30 cm tut sich der AR-Strahl schwer, den Startpunkt genau dort zu
          setzen, wo Sie ihn haben wollen. Der Touch-Modus (in der Modusauswahl)
          setzt den Startpunkt stattdessen an die physische Position des Telefons.
          Drücken Sie das Telefon gegen die Startkante, tippen Sie einmal, gehen
          Sie zum Ende, tippen Sie erneut. Kein Strahl = kein Strahlfehler.
        </li>
        <li>
          <strong>Tippen Sie auf eine strukturierte Oberfläche, nicht auf eine
          kahle Wand.</strong> Die AR-Flächenerkennung funktioniert, indem sie
          Merkmalspunkte findet (Ecken, Kanten, Punkte in der Textur). Eine
          perfekt weiße verputzte Wand hat null Merkmale. Wenn Sie bis zu einer
          kahlen Wand messen müssen, kleben Sie ein gemustertes Klebeband oder
          legen Sie ein Buch dorthin, wo Sie verankern wollen — irgendetwas mit
          Kanten.
        </li>
        <li>
          <strong>Überprüfen Sie lange Distanzen, indem Sie gehen.</strong> AR-Drift
          summiert sich über die Distanz. Bei allem über 4 m messen Sie in zwei
          Hälften: Wählen Sie einen Mittelpunkt, messen Sie von einem Ende zum
          Mittelpunkt, dann vom Mittelpunkt zum entfernten Ende. Die beiden
          Hälften sollten bis auf wenige Millimeter mit einer einzigen Messung von
          Ende zu Ende übereinstimmen. Wenn nicht, hat die lange Messung Drift.
        </li>
        <li>
          <strong>Vertrauen Sie nicht dem ersten Wert. Nehmen Sie drei.</strong> Tippen,
          speichern, das Telefon wegbewegen, zurückkommen, erneut tippen.
          Wiederholen Sie das dreimal. Wenn alle drei Werte innerhalb von ±3 mm
          übereinstimmen, haben Sie eine solide Zahl. Weichen sie um mehr als 1 cm
          ab, ist an der AR-Sitzung etwas ungünstig (Beleuchtung, Tracking-
          Qualität, Oberfläche) — ändern Sie etwas und versuchen Sie es erneut.
        </li>
      </ol>

      <h2>Wann Sie KEINE AR-Messung verwenden sollten</h2>
      <p>
        AR ist das falsche Werkzeug für:
      </p>
      <ul>
        <li>
          <strong>Schreinerarbeiten, Türen, Schubladenfronten.</strong> Überall,
          wo ein Spalt von 1 mm zählt, ist ein Stahlmaßstab schneller und
          zuverlässiger.
        </li>
        <li>
          <strong>Diagonale durch einen Raum über 5 m.</strong> Verwenden Sie ein
          Laser-Entfernungsmessgerät — sie sind günstig, genau und driften über
          lange Distanzen nicht.
        </li>
        <li>
          <strong>Draußen bei direkter Sonne.</strong> LiDAR wird durch helles
          IR-Umgebungslicht (Sonne) überstrahlt, und das Kamera-Tracking kämpft
          durch wandernde Schatten mit demselben Problem. Besser im Schatten oder
          bei bedecktem Himmel.
        </li>
        <li>
          <strong>Reflektierende oder durchsichtige Oberflächen.</strong> Spiegel,
          polierter Marmor und Glas liefern falsche Tiefenwerte. Decken Sie sie ab
          oder meiden Sie sie.
        </li>
      </ul>

      <h2>Apple Measure vs. AR-Apps von Drittanbietern</h2>
      <p>
        Apples eingebaute Measure-App nutzt dieselben ARKit-Bausteine wie
        Drittanbieter-Apps, daher ist die reine Genauigkeit ähnlich. Die
        Unterschiede liegen in den Funktionen:
      </p>
      <ul>
        <li>
          Apple Measure: Distanz, Höhe (erkennt automatisch die Körpergröße einer
          Person), Wasserwaage. Das war's.
        </li>
        <li>
          AR-Apps von Drittanbietern (Ruler AR, MagicPlan, RoomScan Pro): all das
          plus Winkel, Fläche, Polygonmessung, 3D-Raumscans, manuelle
          Grundriss-Builder, Projektordner, PDF-Export, Kalibriermodi,
          Fotoannotationen und so weiter.
        </li>
      </ul>
      <p>
        Für einmalige Messungen ist Apples App in Ordnung. Für alles, was
        gespeichert, exportiert oder mit höherer Genauigkeit gemessen werden muss
        (Touch-Modus, Polygonfläche, Genauigkeitsprofile), ist eine spezialisierte
        App praktischer.
      </p>

      <h2>Fazit</h2>
      <p>
        Eine moderne iPhone-AR-App ist genau genug, um für die meisten häuslichen
        und leichten Profi-Aufgaben ein Maßband zu ersetzen. Mit LiDAR sind ±5 mm
        realistisch. Ohne LiDAR sind ±1-2 cm realistisch. Nutzen Sie die fünf
        Tricks oben und Ihre Werte werden besser. Für Endarbeiten behalten Sie
        einen Stahlmaßstab in Ihrem Werkzeugkasten.
      </p>
    </article>
  );
}

export function PostFR() {
  return (
    <article className="prose-content">
      <p className="lead">
        Réponse courte : un iPhone récent équipé du LiDAR vous donne des mesures à
        ±5 mm près sur 3 mètres. Sans LiDAR, comptez ±1-2 cm sur la même distance.
        C'est suffisant pour acheter des meubles, rédiger des annonces
        immobilières et établir la plupart des devis de rénovation. Ce n'est
        <em> pas</em> suffisant pour la menuiserie ou l'ébénisterie, où il vous
        faut toujours un réglet en acier.
      </p>

      <p>
        Mais la « précision » est une cible mouvante. La même appli sur le même
        téléphone peut se tromper de 5 cm une fois et atteindre ±2 mm la fois
        suivante, selon l'éclairage, la distance et la façon dont l'utilisateur
        tient le téléphone. Voici ce qui se passe vraiment au cœur de la session
        AR et ce que vous pouvez faire pour obtenir, de manière constante, les
        lectures les plus précises.
      </p>

      <h2>Ce que fait réellement ARKit</h2>
      <p>
        ARKit (le framework sur lequel reposent toutes les applis de mesure pour
        iPhone) fait deux choses à la fois. Il suit la position du téléphone à six
        degrés de liberté dans l'espace grâce à l'<em>odométrie visuelle-
        inertielle</em> : la caméra lit les caractéristiques de texture de votre
        environnement 60 fois par seconde, et l'IMU (accéléromètre + gyroscope)
        lit le mouvement 1000 fois par seconde. Les deux signaux sont fusionnés
        pour estimer où se trouve le téléphone.
      </p>
      <p>
        Ensuite, lorsque vous touchez l'écran pour placer un point de mesure,
        l'appli projette un rayon depuis le point de contact vers l'espace 3D et
        cherche où ce rayon croise une surface détectée. Le point d'intersection
        reçoit une coordonnée 3D.
      </p>
      <p>
        La distance entre deux points n'est que la distance euclidienne entre
        leurs coordonnées 3D. Simple en théorie. En pratique, chaque étape de
        cette chaîne comporte une erreur : le suivi des points dérive, la
        détection de surface est floue, le rayon peut tomber sur le mauvais plan.
      </p>

      <h2>LiDAR ou pas LiDAR : ce qui change</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>iPhone avec LiDAR (12 Pro+)</th>
            <th>iPhone sans LiDAR (Xs, 14)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Comment la profondeur est mesurée</td>
            <td>Temps de vol laser direct</td>
            <td>Déduite de la parallaxe de la caméra + IMU</td>
          </tr>
          <tr>
            <td>Précision typique (≤3 m)</td>
            <td>±5 mm</td>
            <td>±10-20 mm</td>
          </tr>
          <tr>
            <td>Précision à 5 m</td>
            <td>±10 mm</td>
            <td>±30-50 mm</td>
          </tr>
          <tr>
            <td>Fonctionne dans le noir complet</td>
            <td>Oui (le laser n'a pas besoin de lumière ambiante)</td>
            <td>Non (le suivi par caméra échoue)</td>
          </tr>
          <tr>
            <td>Temps d'initialisation</td>
            <td>~1 seconde</td>
            <td>~3-5 secondes</td>
          </tr>
        </tbody>
      </table>

      <h2>Cinq astuces qui divisent l'erreur de mesure par deux</h2>
      <ol>
        <li>
          <strong>Calibrez d'abord en bougeant le téléphone.</strong> Avant de
          placer votre premier point, marchez un mètre ou deux autour de la zone à
          mesurer. Cela donne à ARKit assez de mouvement pour trianguler la
          profondeur par parallaxe ; les toutes premières mesures juste après le
          lancement de l'appli sont les moins précises.
        </li>
        <li>
          <strong>Utilisez le mode Touch pour les petites dimensions.</strong> Pour
          tout ce qui fait moins de 30 cm, le rayon AR a du mal à placer le point
          de départ exactement là où vous le souhaitez. Le mode Touch (dans le
          sélecteur de modes) place plutôt le point de départ à la position
          physique du téléphone. Appuyez le téléphone contre l'arête de départ,
          touchez une fois, déplacez-vous jusqu'à l'autre bout, touchez à nouveau.
          Pas de rayon = pas d'erreur de rayon.
        </li>
        <li>
          <strong>Visez une surface texturée, pas un mur nu.</strong> La détection
          de plans AR fonctionne en trouvant des points de caractéristique (coins,
          arêtes, points dans la texture). Un mur de plâtre parfaitement blanc n'a
          aucun point. Si vous devez mesurer jusqu'à un mur nu, placez un morceau
          de ruban à motifs ou un livre à l'endroit où ancrer — n'importe quoi
          avec des arêtes.
        </li>
        <li>
          <strong>Vérifiez les longues distances en marchant.</strong> La dérive
          AR s'accumule avec la distance. Pour tout ce qui dépasse 4 m, mesurez en
          deux moitiés : choisissez un point milieu, mesurez d'un bout au milieu,
          puis du milieu au bout éloigné. Les deux moitiés devraient correspondre à
          quelques millimètres près à une seule mesure de bout en bout. Sinon, la
          longue mesure présente une dérive.
        </li>
        <li>
          <strong>Ne vous fiez pas à la première lecture. Prenez-en trois.</strong> Touchez,
          enregistrez, éloignez le téléphone, revenez, touchez à nouveau. Répétez
          trois fois. Si les trois lectures concordent à ±3 mm près, vous avez un
          chiffre solide. Si elles divergent de plus d'1 cm, quelque chose dans la
          session AR (éclairage, qualité du suivi, surface) n'est pas favorable —
          changez quelque chose et recommencez.
        </li>
      </ol>

      <h2>Quand NE PAS utiliser une mesure AR</h2>
      <p>
        L'AR est le mauvais outil pour :
      </p>
      <ul>
        <li>
          <strong>Ébénisterie, portes, façades de tiroirs.</strong> Partout où un
          jeu d'1 mm compte, un réglet en acier est plus rapide et plus fiable.
        </li>
        <li>
          <strong>La diagonale d'une pièce au-delà de 5 m.</strong> Utilisez un
          télémètre laser — ils sont bon marché, précis et ne dérivent pas sur les
          longues distances.
        </li>
        <li>
          <strong>En extérieur en plein soleil.</strong> Le LiDAR est saturé par
          un fort rayonnement IR ambiant (le soleil), et le suivi par caméra
          rencontre le même souci à cause des ombres mouvantes. Mieux vaut à
          l'ombre ou par temps couvert.
        </li>
        <li>
          <strong>Surfaces réfléchissantes ou transparentes.</strong> Les miroirs,
          le marbre poli et le verre renvoient de mauvaises lectures de
          profondeur. Couvrez-les ou évitez-les.
        </li>
      </ul>

      <h2>Apple Measure vs applis AR tierces</h2>
      <p>
        L'appli Measure intégrée d'Apple utilise les mêmes primitives ARKit que
        les applis tierces, donc la précision brute est similaire. Les différences
        se situent dans les fonctionnalités :
      </p>
      <ul>
        <li>
          Apple Measure : distance, hauteur (détecte automatiquement la taille
          d'une personne), niveau. C'est tout.
        </li>
        <li>
          Applis AR tierces (Ruler AR, MagicPlan, RoomScan Pro) : tout ce qui
          précède, plus les angles, la surface, la mesure de polygones, les scans
          3D de pièces, les constructeurs de plans manuels, les dossiers de
          projet, l'export PDF, les modes de calibration, les annotations photo,
          et ainsi de suite.
        </li>
      </ul>
      <p>
        Pour des mesures ponctuelles, l'appli d'Apple suffit. Pour tout ce qui
        doit être enregistré, exporté ou mesuré avec une plus grande fidélité
        (mode Touch, surface de polygone, profils de précision), une appli dédiée
        est plus pratique.
      </p>

      <h2>En résumé</h2>
      <p>
        Une appli AR moderne pour iPhone est assez précise pour remplacer un mètre
        ruban dans la plupart des tâches domestiques et semi-professionnelles. Avec
        le LiDAR, ±5 mm est réaliste. Sans LiDAR, ±1-2 cm est réaliste. Appliquez
        les cinq astuces ci-dessus et vos lectures s'amélioreront. Pour les
        finitions, gardez un réglet en acier dans votre boîte à outils.
      </p>
    </article>
  );
}

export function PostES() {
  return (
    <article className="prose-content">
      <p className="lead">
        Respuesta corta: un iPhone moderno con LiDAR te da mediciones con una
        precisión de ±5 mm en 3 metros. Sin LiDAR, espera ±1-2 cm en la misma
        distancia. Es suficiente para comprar muebles, anuncios inmobiliarios y la
        mayoría de los presupuestos de reforma. <em>No</em> es suficiente para
        carpintería o ebanistería, donde sigues necesitando una regla de acero.
      </p>

      <p>
        Pero la «precisión» es un objetivo móvil. La misma app en el mismo
        teléfono puede fallar 5 cm una vez y dar ±2 mm la siguiente, según la
        iluminación, la distancia y cómo sujeta el teléfono el usuario. Esto es lo
        que ocurre realmente dentro de la sesión AR y lo que puedes hacer para
        obtener de forma constante las lecturas más precisas.
      </p>

      <h2>Qué hace realmente ARKit</h2>
      <p>
        ARKit (el framework sobre el que se construyen todas las apps de medición
        para iPhone) hace dos cosas a la vez. Rastrea la posición del teléfono con
        seis grados de libertad en el espacio mediante <em>odometría visual-
        inercial</em>: la cámara lee las características de textura de tu entorno 60
        veces por segundo, y la IMU (acelerómetro + giroscopio) lee el movimiento
        1000 veces por segundo. Las dos señales se fusionan para estimar dónde
        está el teléfono.
      </p>
      <p>
        Luego, cuando tocas para colocar un punto de medición, la app lanza un
        rayo desde el punto de contacto hacia el espacio 3D y busca dónde ese rayo
        intersecta una superficie detectada. El punto de intersección recibe una
        coordenada 3D.
      </p>
      <p>
        La distancia entre dos puntos es simplemente la distancia euclidiana entre
        sus coordenadas 3D. Sencillo en teoría. En la práctica, cada paso de esa
        cadena tiene error: el rastreo de características deriva, la detección de
        superficies es difusa, el rayo puede caer en el plano equivocado.
      </p>

      <h2>LiDAR vs. sin LiDAR: qué cambia</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>iPhone con LiDAR (12 Pro+)</th>
            <th>iPhone sin LiDAR (Xs, 14)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cómo se mide la profundidad</td>
            <td>Tiempo de vuelo láser directo</td>
            <td>Deducida del paralaje de la cámara + IMU</td>
          </tr>
          <tr>
            <td>Precisión típica (≤3 m)</td>
            <td>±5 mm</td>
            <td>±10-20 mm</td>
          </tr>
          <tr>
            <td>Precisión a 5 m</td>
            <td>±10 mm</td>
            <td>±30-50 mm</td>
          </tr>
          <tr>
            <td>Funciona en oscuridad total</td>
            <td>Sí (el láser no necesita luz ambiental)</td>
            <td>No (el rastreo por cámara falla)</td>
          </tr>
          <tr>
            <td>Tiempo de inicialización</td>
            <td>~1 segundo</td>
            <td>~3-5 segundos</td>
          </tr>
        </tbody>
      </table>

      <h2>Cinco trucos que reducen el error de medición a la mitad</h2>
      <ol>
        <li>
          <strong>Calibra moviendo primero el teléfono.</strong> Antes de marcar
          tu primer punto, camina uno o dos metros alrededor de la zona que vas a
          medir. Esto le da a ARKit suficiente movimiento para triangular la
          profundidad por paralaje; las primeras mediciones justo después de abrir
          la app son las menos precisas.
        </li>
        <li>
          <strong>Usa el modo Touch para dimensiones pequeñas.</strong> Para todo
          lo que sea menor de 30 cm, al rayo AR le cuesta colocar el punto de
          inicio justo donde quieres. El modo Touch (en el selector de modos)
          coloca en cambio el punto de inicio en la posición física del teléfono.
          Apoya el teléfono contra el borde inicial, toca una vez, muévete hasta
          el final y toca de nuevo. Sin rayo = sin error de rayo.
        </li>
        <li>
          <strong>Apunta a una superficie con textura, no a una pared lisa.</strong> La
          detección de planos AR funciona encontrando puntos característicos
          (esquinas, bordes, puntos en la textura). Una pared de yeso
          perfectamente blanca no tiene ninguno. Si necesitas medir hasta una
          pared lisa, coloca un trozo de cinta con dibujo o un libro donde quieras
          anclar — cualquier cosa con bordes.
        </li>
        <li>
          <strong>Verifica las distancias largas caminando.</strong> La deriva AR
          se acumula con la distancia. Para todo lo que supere los 4 m, mide por
          mitades: elige un punto medio, mide de un extremo al medio y luego del
          medio al extremo lejano. Las dos mitades deberían sumar, con un margen
          de unos pocos milímetros, lo mismo que una única medición de extremo a
          extremo. Si no, la medición larga tiene deriva.
        </li>
        <li>
          <strong>No te fíes de la primera lectura. Toma tres.</strong> Toca,
          guarda, aleja el teléfono, vuelve y toca de nuevo. Repite tres veces. Si
          las tres lecturas coinciden dentro de ±3 mm, tienes un número sólido. Si
          difieren más de 1 cm, algo de la sesión AR (iluminación, calidad del
          rastreo, superficie) no es favorable — cambia algo y vuelve a intentarlo.
        </li>
      </ol>

      <h2>Cuándo NO usar una medición AR</h2>
      <p>
        El AR es la herramienta equivocada para:
      </p>
      <ul>
        <li>
          <strong>Ebanistería, puertas, frentes de cajón.</strong> Allí donde
          importa una holgura de 1 mm, una regla de acero es más rápida y fiable.
        </li>
        <li>
          <strong>La diagonal de una habitación de más de 5 m.</strong> Usa un
          medidor láser de distancia — son baratos, precisos y no derivan en
          distancias largas.
        </li>
        <li>
          <strong>Al aire libre bajo sol directo.</strong> El LiDAR se satura con
          el fuerte IR ambiental (el sol), y el rastreo por cámara sufre el mismo
          problema por las sombras cambiantes. Mejor a la sombra o con cielo
          nublado.
        </li>
        <li>
          <strong>Superficies reflectantes o transparentes.</strong> Los espejos,
          el mármol pulido y el vidrio devuelven malas lecturas de profundidad.
          Cúbrelos o evítalos.
        </li>
      </ul>

      <h2>Apple Measure vs. apps AR de terceros</h2>
      <p>
        La app Measure integrada de Apple usa las mismas primitivas de ARKit que
        las apps de terceros, así que la precisión bruta es similar. Las
        diferencias están en las funciones:
      </p>
      <ul>
        <li>
          Apple Measure: distancia, altura (detecta automáticamente la estatura de
          una persona), nivel. Y ya está.
        </li>
        <li>
          Apps AR de terceros (Ruler AR, MagicPlan, RoomScan Pro): todo lo
          anterior más ángulos, área, medición de polígonos, escaneos 3D de
          habitaciones, constructores de planos manuales, carpetas de proyecto,
          exportación a PDF, modos de calibración, anotaciones de fotos, etc.
        </li>
      </ul>
      <p>
        Para mediciones puntuales, la app de Apple basta. Para todo lo que haya
        que guardar, exportar o medir con mayor fidelidad (modo Touch, área de
        polígono, perfiles de precisión), una app dedicada es más práctica.
      </p>

      <h2>Conclusión</h2>
      <p>
        Una app AR moderna para iPhone es lo bastante precisa para reemplazar a una
        cinta métrica en la mayoría de tareas domésticas y semiprofesionales. Con
        LiDAR, ±5 mm es realista. Sin LiDAR, ±1-2 cm es realista. Aplica los cinco
        trucos de arriba y tus lecturas mejorarán. Para los acabados, guarda una
        regla de acero en tu caja de herramientas.
      </p>
    </article>
  );
}

export function PostJA() {
  return (
    <article className="prose-content">
      <p className="lead">
        結論から言うと、LiDARを搭載した最新のiPhoneなら、3メートルで誤差±5 mm以内の
        計測ができます。LiDARがなければ、同じ距離で±1〜2 cmを見込んでください。家具
        選びや不動産掲載、たいていのリフォーム見積もりには十分な精度です。ただし、
        1 mmの精度が求められるキャビネット製作や造作工事には<em>不十分</em>で、
        そこではやはりスチール製の定規が必要になります。
      </p>

      <p>
        とはいえ「精度」は一定ではありません。同じiPhoneの同じアプリでも、照明・距離・
        持ち方によって、あるときは5 cmずれ、次は±2 mmに収まる、ということが起こります。
        ここでは、ARセッションの中で実際に何が起きているのか、そして常に最も正確な
        数値を得るために何ができるのかを解説します。
      </p>

      <h2>ARKitが実際にやっていること</h2>
      <p>
        ARKit（iPhoneの計測アプリすべての土台となるフレームワーク）は、2つのことを
        同時に行います。<em>視覚慣性オドメトリ</em>を用いて、空間内での端末の6自由度
        の位置を追跡するのです。カメラは周囲のテクスチャの特徴を毎秒60回読み取り、
        IMU（加速度センサーとジャイロスコープ）は動きを毎秒1000回読み取ります。この
        2つの信号を統合して、端末がどこにあるかを推定します。
      </p>
      <p>
        次に、計測点を置くために画面をタップすると、アプリはタップ位置から3D空間へ
        レイ（光線）を飛ばし、そのレイが検出済みの面と交わる場所を探します。その交点に
        3D座標が割り当てられます。
      </p>
      <p>
        2点間の距離とは、両者の3D座標間のユークリッド距離にすぎません。理論上は単純
        です。しかし実際には、この一連の流れのどのステップにも誤差があります。特徴点の
        追跡はドリフトし、面の検出は曖昧で、レイは別の面に当たってしまうことがあります。
      </p>

      <h2>LiDARあり・なしで何が変わるか</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>LiDAR搭載iPhone（12 Pro以降）</th>
            <th>LiDAR非搭載iPhone（Xs、14）</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>深度の測り方</td>
            <td>レーザーの飛行時間を直接計測</td>
            <td>カメラの視差とIMUから推定</td>
          </tr>
          <tr>
            <td>標準的な精度（≤3 m）</td>
            <td>±5 mm</td>
            <td>±10〜20 mm</td>
          </tr>
          <tr>
            <td>5 mでの精度</td>
            <td>±10 mm</td>
            <td>±30〜50 mm</td>
          </tr>
          <tr>
            <td>真っ暗な場所で使えるか</td>
            <td>はい（レーザーは環境光を必要としません）</td>
            <td>いいえ（カメラの追跡が失敗します）</td>
          </tr>
          <tr>
            <td>初期化時間</td>
            <td>約1秒</td>
            <td>約3〜5秒</td>
          </tr>
        </tbody>
      </table>

      <h2>計測誤差を半分にする5つのコツ</h2>
      <ol>
        <li>
          <strong>まず端末を動かしてキャリブレーションする。</strong> 最初の点を
          タップする前に、計測する範囲の周りを1〜2メートル歩いてください。これで
          ARKitは視差から深度を三角測量するのに十分な動きを得られます。アプリを
          起動した直後の最初の計測がいちばん不正確です。
        </li>
        <li>
          <strong>小さな寸法にはTouchモードを使う。</strong> 30 cm未満のものでは、
          ARのレイは始点を狙った場所ちょうどに置くのが苦手です。Touchモード
          （モード選択にあります）なら、始点を端末の物理的な位置に置きます。端末を
          始点の縁に押し当てて一度タップし、終点まで動かしてもう一度タップします。
          レイがなければレイの誤差もありません。
        </li>
        <li>
          <strong>無地の壁ではなく、模様のある面をタップする。</strong> ARの平面
          検出は、特徴点（角、縁、テクスチャ内の点）を見つけることで機能します。
          真っ白な漆喰の壁には特徴点が一つもありません。無地の壁まで計測する必要が
          あるなら、固定したい位置に模様のあるテープを貼るか本を置いてください ——
          縁のあるものなら何でも構いません。
        </li>
        <li>
          <strong>長い距離は歩いて検算する。</strong> ARのドリフトは距離とともに
          積み重なります。4 mを超えるものは、半分ずつ計測しましょう。中間点を決め、
          一方の端から中間点まで、続いて中間点から遠い端まで測ります。2つの半分は、
          端から端まで一度に測った値と数ミリメートル以内で一致するはずです。一致
          しなければ、その長い計測にはドリフトが生じています。
        </li>
        <li>
          <strong>最初の読みを信用しない。3回測る。</strong> タップして保存し、
          端末をいったん離してから戻り、再びタップします。これを3回繰り返します。
          3つの読みがすべて±3 mm以内で一致すれば、確かな数値です。1 cmを超えて
          ばらつくなら、ARセッションの何か（照明、追跡品質、面）が好ましくないので、
          条件を変えてやり直してください。
        </li>
      </ol>

      <h2>ARの計測を使うべきでない場面</h2>
      <p>
        ARは次の用途には不向きです。
      </p>
      <ul>
        <li>
          <strong>キャビネット、ドア、引き出しの前板。</strong> 1 mmの隙間が
          問題になる場面では、スチール定規のほうが速く信頼できます。
        </li>
        <li>
          <strong>5 mを超える部屋の対角線。</strong> レーザー距離計を使いましょう
          —— 安価で正確、長い距離でもドリフトしません。
        </li>
        <li>
          <strong>直射日光の当たる屋外。</strong> LiDARは強い赤外線の環境光
          （日光）で飛んでしまい、カメラ追跡も移ろう影によって同じ問題に悩まされます。
          日陰や曇天のほうが好ましいです。
        </li>
        <li>
          <strong>反射・透明な面。</strong> 鏡、磨かれた大理石、ガラスは誤った深度
          を返します。覆うか避けてください。
        </li>
      </ul>

      <h2>Apple Measure と サードパーティ製ARアプリの比較</h2>
      <p>
        Apple純正のMeasureアプリは、サードパーティ製アプリと同じARKitの基本機能を
        使っているため、素の精度はほぼ同じです。違いは機能にあります。
      </p>
      <ul>
        <li>
          Apple Measure：距離、身長（人の身長を自動検出）、水準器。それだけです。
        </li>
        <li>
          サードパーティ製ARアプリ（Ruler AR、MagicPlan、RoomScan Pro）：上記に
          加えて、角度、面積、多角形計測、3D室内スキャン、手動の間取り作成、
          プロジェクトフォルダ、PDF書き出し、キャリブレーションモード、写真への
          注釈などがあります。
        </li>
      </ul>
      <p>
        その場限りの計測ならApple純正アプリで十分です。保存・書き出しが必要なもの、
        より高い精度で測りたいもの（Touchモード、多角形の面積、精度プロファイル）には、
        専用アプリのほうが実用的です。
      </p>

      <h2>まとめ</h2>
      <p>
        最新のiPhone向けARアプリは、家庭用や軽いプロ用途の大半でメジャーを置き換え
        られるほど正確です。LiDARがあれば±5 mmが現実的、なければ±1〜2 cmが現実的です。
        上記の5つのコツを使えば、読みは良くなります。仕上げ作業のためには、工具箱に
        スチール定規を入れておきましょう。
      </p>
    </article>
  );
}

export function PostKO() {
  return (
    <article className="prose-content">
      <p className="lead">
        결론부터 말하면, LiDAR가 탑재된 최신 iPhone은 3미터에서 ±5 mm 이내의 측정값을
        제공합니다. LiDAR가 없으면 같은 거리에서 ±1~2 cm를 예상하세요. 가구 쇼핑,
        부동산 매물 등록, 대부분의 리모델링 견적에는 충분합니다. 하지만 1 mm가 중요한
        가구 제작이나 목공 작업에는 <em>충분하지 않으며</em>, 그럴 때는 여전히 강철 자가
        필요합니다.
      </p>

      <p>
        그러나 '정확도'는 고정된 값이 아닙니다. 같은 iPhone의 같은 앱이라도 조명, 거리,
        사용자가 폰을 쥐는 방식에 따라 한 번은 5 cm 어긋나고 다음 번엔 ±2 mm로 맞기도
        합니다. 여기서는 AR 세션 안에서 실제로 무슨 일이 벌어지는지, 그리고 항상 가장
        정밀한 측정값을 얻으려면 무엇을 해야 하는지 설명합니다.
      </p>

      <h2>ARKit이 실제로 하는 일</h2>
      <p>
        ARKit(모든 iPhone 측정 앱이 기반으로 삼는 프레임워크)은 두 가지 일을 동시에
        합니다. <em>시각-관성 오도메트리</em>를 사용해 공간에서 폰의 6자유도 위치를
        추적합니다. 카메라는 주변 환경의 텍스처 특징을 초당 60회 읽고, IMU(가속도계 +
        자이로스코프)는 움직임을 초당 1000회 읽습니다. 이 두 신호를 융합해 폰이 어디에
        있는지 추정합니다.
      </p>
      <p>
        그다음, 측정점을 찍으려고 화면을 탭하면 앱은 탭한 위치에서 3D 공간으로 광선을
        쏘아, 그 광선이 감지된 표면과 교차하는 지점을 찾습니다. 그 교차점에 3D 좌표가
        부여됩니다.
      </p>
      <p>
        두 점 사이의 거리는 그저 두 3D 좌표 간의 유클리드 거리일 뿐입니다. 이론상으론
        간단합니다. 하지만 실제로는 이 과정의 모든 단계에 오차가 있습니다. 특징점 추적은
        드리프트하고, 표면 감지는 흐릿하며, 광선은 엉뚱한 평면에 닿을 수 있습니다.
      </p>

      <h2>LiDAR 유무에 따라 달라지는 점</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>LiDAR 탑재 iPhone (12 Pro 이상)</th>
            <th>LiDAR 미탑재 iPhone (Xs, 14)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>깊이를 측정하는 방식</td>
            <td>레이저 비행 시간 직접 측정</td>
            <td>카메라 시차 + IMU에서 추정</td>
          </tr>
          <tr>
            <td>일반적인 정확도 (≤3 m)</td>
            <td>±5 mm</td>
            <td>±10~20 mm</td>
          </tr>
          <tr>
            <td>5 m에서의 정확도</td>
            <td>±10 mm</td>
            <td>±30~50 mm</td>
          </tr>
          <tr>
            <td>완전한 어둠에서 작동</td>
            <td>예 (레이저는 주변광이 필요 없음)</td>
            <td>아니요 (카메라 추적이 실패함)</td>
          </tr>
          <tr>
            <td>초기화 시간</td>
            <td>약 1초</td>
            <td>약 3~5초</td>
          </tr>
        </tbody>
      </table>

      <h2>측정 오차를 절반으로 줄이는 다섯 가지 요령</h2>
      <ol>
        <li>
          <strong>먼저 폰을 움직여 보정하세요.</strong> 첫 점을 찍기 전에 측정할 구역
          주변을 1~2미터 걸어 다니세요. 그러면 ARKit이 시차로 깊이를 삼각측량할 만큼
          충분한 움직임을 얻습니다. 앱을 켠 직후의 첫 측정값이 가장 부정확합니다.
        </li>
        <li>
          <strong>작은 치수에는 Touch 모드를 쓰세요.</strong> 30 cm 미만에서는 AR
          광선이 시작점을 원하는 위치에 정확히 놓기 어렵습니다. Touch 모드(모드 선택기에
          있음)는 대신 시작점을 폰의 물리적 위치에 놓습니다. 폰을 시작 모서리에 대고 한
          번 탭한 뒤, 끝으로 이동해 다시 탭하세요. 광선이 없으니 광선 오차도 없습니다.
        </li>
        <li>
          <strong>민무늬 벽이 아니라 질감 있는 표면을 탭하세요.</strong> AR 평면 감지는
          특징점(모서리, 가장자리, 텍스처 속 점)을 찾아 작동합니다. 완벽하게 하얀 회벽엔
          특징점이 하나도 없습니다. 민무늬 벽까지 측정해야 한다면, 고정하고 싶은 곳에
          무늬 테이프를 붙이거나 책을 놓으세요 — 가장자리가 있는 것이면 무엇이든
          좋습니다.
        </li>
        <li>
          <strong>긴 거리는 걸어서 교차 검증하세요.</strong> AR 드리프트는 거리에 따라
          쌓입니다. 4 m가 넘는 것은 반씩 나눠 측정하세요. 중간점을 정하고, 한쪽 끝에서
          중간점까지, 다시 중간점에서 먼 끝까지 측정합니다. 두 절반의 합은 끝에서 끝까지
          한 번에 측정한 값과 몇 밀리미터 이내로 일치해야 합니다. 그렇지 않다면 긴
          측정값에 드리프트가 있는 것입니다.
        </li>
        <li>
          <strong>첫 측정값을 믿지 말고 세 번 측정하세요.</strong> 탭하고 저장한 뒤,
          폰을 멀리 치웠다가 다시 와서 탭하세요. 세 번 반복합니다. 세 측정값이 모두 ±3 mm
          이내로 일치하면 믿을 만한 수치입니다. 1 cm 넘게 차이가 나면 AR 세션의 무언가
          (조명, 추적 품질, 표면)가 좋지 않은 것이니, 조건을 바꿔 다시 시도하세요.
        </li>
      </ol>

      <h2>AR 측정을 쓰지 말아야 할 때</h2>
      <p>
        AR은 다음 용도에는 맞지 않습니다.
      </p>
      <ul>
        <li>
          <strong>가구 제작, 문, 서랍 전면.</strong> 1 mm의 틈이 중요한 곳이라면 강철
          자가 더 빠르고 믿을 만합니다.
        </li>
        <li>
          <strong>5 m가 넘는 방의 대각선.</strong> 레이저 거리계를 쓰세요 — 저렴하고
          정확하며 긴 거리에서도 드리프트하지 않습니다.
        </li>
        <li>
          <strong>직사광선이 비치는 야외.</strong> LiDAR는 강한 적외선 환경광(햇빛)에
          묻혀 버리고, 카메라 추적도 움직이는 그림자 때문에 같은 문제를 겪습니다.
          그늘이나 흐린 날이 더 낫습니다.
        </li>
        <li>
          <strong>반사되거나 투명한 표면.</strong> 거울, 광택 대리석, 유리는 잘못된 깊이
          측정값을 반환합니다. 덮거나 피하세요.
        </li>
      </ul>

      <h2>Apple Measure 대 서드파티 AR 앱</h2>
      <p>
        Apple의 기본 Measure 앱은 서드파티 앱과 같은 ARKit 기본 요소를 사용하므로 원시
        정확도는 비슷합니다. 차이는 기능에 있습니다.
      </p>
      <ul>
        <li>
          Apple Measure: 거리, 키(사람의 키를 자동 감지), 수평계. 그게 전부입니다.
        </li>
        <li>
          서드파티 AR 앱(Ruler AR, MagicPlan, RoomScan Pro): 위 기능에 더해 각도, 면적,
          다각형 측정, 3D 방 스캔, 수동 평면도 작성, 프로젝트 폴더, PDF 내보내기, 보정
          모드, 사진 주석 등이 있습니다.
        </li>
      </ul>
      <p>
        일회성 측정에는 Apple 앱으로 충분합니다. 저장하거나 내보내거나 더 높은 정밀도로
        측정해야 하는 것(Touch 모드, 다각형 면적, 정확도 프로필)에는 전용 앱이 더
        실용적입니다.
      </p>

      <h2>핵심 정리</h2>
      <p>
        최신 iPhone AR 앱은 대부분의 가정용 및 가벼운 전문 작업에서 줄자를 대체할 만큼
        정확합니다. LiDAR가 있으면 ±5 mm가 현실적이고, 없으면 ±1~2 cm가 현실적입니다.
        위의 다섯 가지 요령을 쓰면 측정값이 좋아집니다. 마감 작업을 위해서는 공구함에
        강철 자를 챙겨 두세요.
      </p>
    </article>
  );
}

export function PostZH() {
  return (
    <article className="prose-content">
      <p className="lead">
        简短的回答：搭载 LiDAR 的现代 iPhone 在 3 米范围内能给出 ±5 mm 以内的测量结果。
        没有 LiDAR 时，同样的距离请预计 ±1-2 cm。这对挑选家具、发布房产信息和大多数装修
        估价都足够了。但它<em>不</em>足以用于橱柜或细木工，那里你仍然需要一把钢直尺。
      </p>

      <p>
        但"精度"是个会移动的目标。同一台手机上的同一个 App，可能这一次偏差 5 cm，下一次
        却精确到 ±2 mm，这取决于光线、距离以及用户握持手机的方式。下面就讲讲 AR 会话内部
        究竟发生了什么，以及你能做些什么来稳定地获得最精确的读数。
      </p>

      <h2>ARKit 实际在做什么</h2>
      <p>
        ARKit（所有 iPhone 测量 App 所基于的框架）同时做两件事。它用<em>视觉惯性里程计</em>
        追踪手机在空间中六个自由度的位置：摄像头每秒 60 次读取你周围环境的纹理特征，而 IMU
        （加速度计 + 陀螺仪）每秒 1000 次读取运动数据。两路信号被融合，以估算手机的位置。
      </p>
      <p>
        然后，当你点按屏幕放置一个测量点时，App 会从触碰位置向 3D 空间投射一条射线，寻找
        这条射线与已检测表面的交点。该交点会获得一个 3D 坐标。
      </p>
      <p>
        两点之间的距离不过是它们 3D 坐标之间的欧几里得距离。理论上很简单。但实际上，这条链
        的每一步都有误差：特征追踪会漂移，表面检测是模糊的，射线可能落在错误的平面上。
      </p>

      <h2>有无 LiDAR：区别在哪</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>带 LiDAR 的 iPhone（12 Pro 及以上）</th>
            <th>不带 LiDAR 的 iPhone（Xs、14）</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>如何测量深度</td>
            <td>激光飞行时间直接测量</td>
            <td>由摄像头视差 + IMU 推算</td>
          </tr>
          <tr>
            <td>典型精度（≤3 m）</td>
            <td>±5 mm</td>
            <td>±10-20 mm</td>
          </tr>
          <tr>
            <td>5 m 处的精度</td>
            <td>±10 mm</td>
            <td>±30-50 mm</td>
          </tr>
          <tr>
            <td>在全黑环境下能否工作</td>
            <td>能（激光不需要环境光）</td>
            <td>不能（摄像头追踪会失效）</td>
          </tr>
          <tr>
            <td>初始化时间</td>
            <td>约 1 秒</td>
            <td>约 3-5 秒</td>
          </tr>
        </tbody>
      </table>

      <h2>把测量误差减半的五个技巧</h2>
      <ol>
        <li>
          <strong>先移动手机进行校准。</strong> 在点下第一个点之前，绕着要测量的区域走上
          一两米。这给了 ARKit 足够的运动量，以便通过视差对深度进行三角测量；App 刚启动
          后的最初几次测量是最不准的。
        </li>
        <li>
          <strong>小尺寸用 Touch 模式。</strong> 对于任何小于 30 cm 的距离，AR 射线很难
          把起点准确地放在你想要的位置。Touch 模式（在模式选择器里）则把起点放在手机的
          物理位置上。把手机抵在起始边缘，点一下，移到末端，再点一下。没有射线 = 没有
          射线误差。
        </li>
        <li>
          <strong>点按有纹理的表面，而不是空白墙面。</strong> AR 平面检测靠寻找特征点
          （角、边、纹理中的点）来工作。一面纯白的石膏墙没有任何特征点。如果你必须测到一
          面空白墙，就在你想锚定的位置贴一段带花纹的胶带或放一本书 —— 任何带边缘的东西
          都行。
        </li>
        <li>
          <strong>靠步行交叉核对长距离。</strong> AR 漂移会随距离累积。对于任何超过 4 m
          的距离，分两半测：选一个中点，从一端测到中点，再从中点测到远端。两半之和应与一
          次端到端的整体测量在几毫米以内吻合。若不吻合，那个长距离测量就存在漂移。
        </li>
        <li>
          <strong>别信第一次读数，测三次。</strong> 点按、保存、把手机移开、再回来、重新
          点按。重复三次。如果三次读数都在 ±3 mm 以内一致，你就有了一个可靠的数字。如果它
          们相差超过 1 cm，说明 AR 会话的某些方面（光线、追踪质量、表面）不理想 —— 改动
          一下再重试。
        </li>
      </ol>

      <h2>什么时候不该用 AR 测量</h2>
      <p>
        AR 不适合用于：
      </p>
      <ul>
        <li>
          <strong>橱柜、门、抽屉面板。</strong> 凡是 1 mm 缝隙都要紧的地方，钢直尺更快也
          更可靠。
        </li>
        <li>
          <strong>超过 5 m 的房间对角线。</strong> 用激光测距仪 —— 它便宜、准确，而且在
          长距离上不会漂移。
        </li>
        <li>
          <strong>直射阳光下的户外。</strong> LiDAR 会被强烈的红外环境光（阳光）冲掉，而
          摄像头追踪也因移动的阴影而面临同样的问题。在阴凉处或阴天会更好。
        </li>
        <li>
          <strong>反光或透明的表面。</strong> 镜子、抛光大理石和玻璃会返回错误的深度读数。
          把它们遮住或避开。
        </li>
      </ul>

      <h2>Apple Measure 与第三方 AR App 的对比</h2>
      <p>
        Apple 自带的 Measure App 使用与第三方 App 相同的 ARKit 基本能力，因此原始精度
        相近。差别在于功能：
      </p>
      <ul>
        <li>
          Apple Measure：距离、身高（自动检测一个人的身高）、水平仪。仅此而已。
        </li>
        <li>
          第三方 AR App（Ruler AR、MagicPlan、RoomScan Pro）：以上全部，外加角度、面积、
          多边形测量、3D 房间扫描、手动平面图绘制、项目文件夹、PDF 导出、校准模式、照片
          标注等等。
        </li>
      </ul>
      <p>
        一次性的测量用 Apple 的 App 就够了。但凡需要保存、导出或以更高保真度测量的（Touch
        模式、多边形面积、精度配置），专用 App 都更实用。
      </p>

      <h2>结论</h2>
      <p>
        现代 iPhone 的 AR App 已经足够精确，可以在大多数家庭和轻量专业任务中取代卷尺。有
        LiDAR 时，±5 mm 是现实的。没有 LiDAR 时，±1-2 cm 是现实的。用上面的五个技巧，你的
        读数会更好。至于精装收尾的活儿，工具箱里还是要备一把钢直尺。
      </p>
    </article>
  );
}

export function PostPT() {
  return (
    <article className="prose-content">
      <p className="lead">
        Resposta curta: um iPhone moderno com LiDAR dá medições com precisão de
        ±5 mm em 3 metros. Sem LiDAR, espere ±1-2 cm na mesma distância. Isso é
        suficiente para comprar móveis, anúncios imobiliários e a maioria dos
        orçamentos de reforma. <em>Não</em> é suficiente para marcenaria ou
        móveis sob medida, onde você ainda precisa de uma régua de aço.
      </p>

      <p>
        Mas "precisão" é um alvo móvel. O mesmo app no mesmo celular pode errar
        5 cm numa vez e acertar ±2 mm na seguinte, dependendo da iluminação, da
        distância e de como o usuário segura o celular. Eis o que realmente
        acontece dentro da sessão AR e o que você pode fazer para obter, de forma
        consistente, as leituras mais precisas.
      </p>

      <h2>O que o ARKit realmente faz</h2>
      <p>
        O ARKit (o framework sobre o qual todos os apps de medição para iPhone são
        construídos) faz duas coisas ao mesmo tempo. Ele rastreia a posição do
        celular com seis graus de liberdade no espaço usando <em>odometria
        visual-inercial</em>: a câmera lê as características de textura do seu
        ambiente 60 vezes por segundo, e a IMU (acelerômetro + giroscópio) lê o
        movimento 1000 vezes por segundo. Os dois sinais são combinados para
        estimar onde o celular está.
      </p>
      <p>
        Então, quando você toca para colocar um ponto de medição, o app lança um
        raio a partir do ponto de toque para o espaço 3D e procura onde esse raio
        cruza uma superfície detectada. O ponto de interseção recebe uma
        coordenada 3D.
      </p>
      <p>
        A distância entre dois pontos é apenas a distância euclidiana entre suas
        coordenadas 3D. Simples na teoria. Na prática, cada etapa dessa cadeia tem
        erro: o rastreamento de características deriva, a detecção de superfície é
        difusa, o raio pode cair no plano errado.
      </p>

      <h2>LiDAR vs. sem LiDAR: o que muda</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>iPhone com LiDAR (12 Pro+)</th>
            <th>iPhone sem LiDAR (Xs, 14)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Como a profundidade é medida</td>
            <td>Tempo de voo a laser direto</td>
            <td>Inferida da paralaxe da câmera + IMU</td>
          </tr>
          <tr>
            <td>Precisão típica (≤3 m)</td>
            <td>±5 mm</td>
            <td>±10-20 mm</td>
          </tr>
          <tr>
            <td>Precisão a 5 m</td>
            <td>±10 mm</td>
            <td>±30-50 mm</td>
          </tr>
          <tr>
            <td>Funciona no escuro total</td>
            <td>Sim (o laser não precisa de luz ambiente)</td>
            <td>Não (o rastreamento por câmera falha)</td>
          </tr>
          <tr>
            <td>Tempo de inicialização</td>
            <td>~1 segundo</td>
            <td>~3-5 segundos</td>
          </tr>
        </tbody>
      </table>

      <h2>Cinco truques que reduzem o erro de medição pela metade</h2>
      <ol>
        <li>
          <strong>Calibre movendo o celular primeiro.</strong> Antes de marcar seu
          primeiro ponto, ande um ou dois metros ao redor da área que vai medir.
          Isso dá ao ARKit movimento suficiente para triangular a profundidade pela
          paralaxe; as primeiras medições logo após abrir o app são as menos
          precisas.
        </li>
        <li>
          <strong>Use o modo Touch para dimensões pequenas.</strong> Para qualquer
          coisa abaixo de 30 cm, o raio AR tem dificuldade de colocar o ponto
          inicial exatamente onde você quer. O modo Touch (no seletor de modos)
          coloca o ponto inicial na posição física do celular. Encoste o celular na
          borda inicial, toque uma vez, mova até o fim e toque de novo. Sem raio =
          sem erro de raio.
        </li>
        <li>
          <strong>Toque numa superfície com textura, não numa parede lisa.</strong> A
          detecção de planos AR funciona encontrando pontos de característica
          (cantos, arestas, pontos na textura). Uma parede de gesso perfeitamente
          branca tem zero características. Se precisar medir até uma parede lisa,
          coloque um pedaço de fita estampada ou um livro onde quer ancorar —
          qualquer coisa com arestas.
        </li>
        <li>
          <strong>Confira distâncias longas andando.</strong> A deriva do AR se
          acumula com a distância. Para qualquer coisa acima de 4 m, meça pela
          metade: escolha um ponto médio, meça de uma ponta ao ponto médio e depois
          do ponto médio à ponta distante. As duas metades devem somar, com margem
          de poucos milímetros, o mesmo que uma única medição de ponta a ponta. Se
          não somarem, a medição longa tem deriva.
        </li>
        <li>
          <strong>Não confie na primeira leitura. Faça três.</strong> Toque, salve,
          afaste o celular, volte e toque de novo. Repita três vezes. Se as três
          leituras concordarem dentro de ±3 mm, você tem um número sólido. Se
          divergirem por mais de 1 cm, algo na sessão AR (iluminação, qualidade do
          rastreamento, superfície) não está favorável — mude algo e tente de novo.
        </li>
      </ol>

      <h2>Quando NÃO usar uma medição AR</h2>
      <p>
        O AR é a ferramenta errada para:
      </p>
      <ul>
        <li>
          <strong>Marcenaria, portas, frentes de gaveta.</strong> Onde uma folga de
          1 mm importa, uma régua de aço é mais rápida e confiável.
        </li>
        <li>
          <strong>A diagonal de um cômodo acima de 5 m.</strong> Use um medidor de
          distância a laser — eles são baratos, precisos e não derivam em longas
          distâncias.
        </li>
        <li>
          <strong>Ao ar livre sob sol direto.</strong> O LiDAR é ofuscado por forte
          IR ambiente (a luz do sol), e o rastreamento por câmera enfrenta o mesmo
          problema por causa das sombras móveis. Melhor na sombra ou em dias
          nublados.
        </li>
        <li>
          <strong>Superfícies reflexivas ou transparentes.</strong> Espelhos,
          mármore polido e vidro retornam leituras de profundidade ruins. Cubra-os
          ou evite-os.
        </li>
      </ul>

      <h2>Apple Measure vs. apps AR de terceiros</h2>
      <p>
        O app Measure embutido da Apple usa as mesmas primitivas do ARKit que os
        apps de terceiros, então a precisão bruta é parecida. As diferenças estão
        nos recursos:
      </p>
      <ul>
        <li>
          Apple Measure: distância, altura (detecta automaticamente a estatura de
          uma pessoa), nível. É só isso.
        </li>
        <li>
          Apps AR de terceiros (Ruler AR, MagicPlan, RoomScan Pro): tudo isso mais
          ângulos, área, medição de polígonos, escaneamentos 3D de cômodos,
          construtores manuais de plantas, pastas de projeto, exportação em PDF,
          modos de calibração, anotações em fotos e por aí vai.
        </li>
      </ul>
      <p>
        Para medições pontuais, o app da Apple basta. Para tudo que precise ser
        salvo, exportado ou medido com maior fidelidade (modo Touch, área de
        polígono, perfis de precisão), um app dedicado é mais prático.
      </p>

      <h2>Conclusão</h2>
      <p>
        Um app AR moderno para iPhone é preciso o suficiente para substituir uma
        trena na maioria das tarefas domésticas e profissionais leves. Com LiDAR,
        ±5 mm é realista. Sem LiDAR, ±1-2 cm é realista. Use os cinco truques acima
        e suas leituras vão melhorar. Para acabamento, mantenha uma régua de aço na
        sua caixa de ferramentas.
      </p>
    </article>
  );
}

export function PostIT() {
  return (
    <article className="prose-content">
      <p className="lead">
        Risposta breve: un iPhone moderno con LiDAR ti dà misurazioni con una
        precisione di ±5 mm su 3 metri. Senza LiDAR, aspettati ±1-2 cm sulla stessa
        distanza. È abbastanza per l'acquisto di mobili, gli annunci immobiliari e
        la maggior parte dei preventivi di ristrutturazione. <em>Non</em> è
        abbastanza per la falegnameria o i mobili su misura, dove serve ancora un
        righello d'acciaio.
      </p>

      <p>
        Ma la "precisione" è un bersaglio mobile. La stessa app sullo stesso
        telefono può sbagliare di 5 cm una volta e centrare ±2 mm quella dopo, a
        seconda dell'illuminazione, della distanza e di come l'utente tiene il
        telefono. Ecco cosa succede davvero all'interno della sessione AR e cosa
        puoi fare per ottenere in modo costante le letture più precise.
      </p>

      <h2>Cosa fa davvero ARKit</h2>
      <p>
        ARKit (il framework su cui si basano tutte le app di misura per iPhone) fa
        due cose contemporaneamente. Traccia la posizione del telefono con sei
        gradi di libertà nello spazio usando l'<em>odometria visivo-inerziale</em>:
        la fotocamera legge le caratteristiche di texture dell'ambiente 60 volte al
        secondo, e l'IMU (accelerometro + giroscopio) legge il movimento 1000 volte
        al secondo. I due segnali vengono fusi per stimare dove si trova il
        telefono.
      </p>
      <p>
        Poi, quando tocchi lo schermo per posizionare un punto di misura, l'app
        lancia un raggio dal punto di tocco verso lo spazio 3D e cerca dove quel
        raggio interseca una superficie rilevata. Il punto di intersezione riceve
        una coordinata 3D.
      </p>
      <p>
        La distanza tra due punti è semplicemente la distanza euclidea tra le loro
        coordinate 3D. Semplice in teoria. In pratica, ogni passaggio di questa
        catena ha un errore: il tracciamento delle caratteristiche deriva, il
        rilevamento delle superfici è sfocato, il raggio può finire sul piano
        sbagliato.
      </p>

      <h2>LiDAR contro nessun LiDAR: cosa cambia</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>iPhone con LiDAR (12 Pro+)</th>
            <th>iPhone senza LiDAR (Xs, 14)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Come viene misurata la profondità</td>
            <td>Tempo di volo laser diretto</td>
            <td>Dedotta dalla parallasse della fotocamera + IMU</td>
          </tr>
          <tr>
            <td>Precisione tipica (≤3 m)</td>
            <td>±5 mm</td>
            <td>±10-20 mm</td>
          </tr>
          <tr>
            <td>Precisione a 5 m</td>
            <td>±10 mm</td>
            <td>±30-50 mm</td>
          </tr>
          <tr>
            <td>Funziona al buio totale</td>
            <td>Sì (il laser non ha bisogno di luce ambientale)</td>
            <td>No (il tracciamento della fotocamera fallisce)</td>
          </tr>
          <tr>
            <td>Tempo di inizializzazione</td>
            <td>~1 secondo</td>
            <td>~3-5 secondi</td>
          </tr>
        </tbody>
      </table>

      <h2>Cinque trucchi che dimezzano l'errore di misura</h2>
      <ol>
        <li>
          <strong>Calibra muovendo prima il telefono.</strong> Prima di segnare il
          tuo primo punto, cammina un metro o due intorno all'area che vuoi
          misurare. Questo dà ad ARKit abbastanza movimento per triangolare la
          profondità tramite la parallasse; le prime misurazioni subito dopo
          l'avvio dell'app sono le meno precise.
        </li>
        <li>
          <strong>Usa la modalità Touch per le dimensioni piccole.</strong> Per
          tutto ciò che è sotto i 30 cm, il raggio AR fatica a posizionare il punto
          di partenza esattamente dove vuoi. La modalità Touch (nel selettore delle
          modalità) posiziona invece il punto di partenza nella posizione fisica del
          telefono. Appoggia il telefono contro il bordo di partenza, tocca una
          volta, spostati alla fine e tocca di nuovo. Niente raggio = niente errore
          di raggio.
        </li>
        <li>
          <strong>Tocca una superficie con texture, non un muro spoglio.</strong> Il
          rilevamento dei piani AR funziona trovando punti caratteristici (angoli,
          spigoli, punti nella texture). Un muro di gesso perfettamente bianco non
          ha alcun punto. Se devi misurare fino a un muro spoglio, metti un pezzo di
          nastro fantasia o un libro dove vuoi ancorare — qualsiasi cosa con dei
          bordi.
        </li>
        <li>
          <strong>Verifica le lunghe distanze camminando.</strong> La deriva AR si
          accumula con la distanza. Per tutto ciò che supera i 4 m, misura a metà:
          scegli un punto medio, misura da un'estremità al punto medio, poi dal
          punto medio all'estremità lontana. Le due metà dovrebbero sommarsi, entro
          pochi millimetri, a un'unica misurazione da estremità a estremità. Se non
          è così, la misura lunga ha una deriva.
        </li>
        <li>
          <strong>Non fidarti della prima lettura. Falle tre volte.</strong> Tocca,
          salva, allontana il telefono, torna e tocca di nuovo. Ripeti tre volte. Se
          le tre letture concordano entro ±3 mm, hai un numero solido. Se divergono
          di oltre 1 cm, qualcosa nella sessione AR (illuminazione, qualità del
          tracciamento, superficie) non è favorevole — cambia qualcosa e riprova.
        </li>
      </ol>

      <h2>Quando NON usare una misura AR</h2>
      <p>
        L'AR è lo strumento sbagliato per:
      </p>
      <ul>
        <li>
          <strong>Falegnameria, porte, frontali di cassetti.</strong> Ovunque
          conti una fuga di 1 mm, un righello d'acciaio è più veloce e affidabile.
        </li>
        <li>
          <strong>La diagonale di una stanza oltre i 5 m.</strong> Usa un
          distanziometro laser — costa poco, è preciso e non deriva sulle lunghe
          distanze.
        </li>
        <li>
          <strong>All'aperto sotto il sole diretto.</strong> Il LiDAR viene
          accecato dal forte IR ambientale (la luce del sole), e il tracciamento
          della fotocamera soffre dello stesso problema per via delle ombre in
          movimento. Meglio all'ombra o con cielo coperto.
        </li>
        <li>
          <strong>Superfici riflettenti o trasparenti.</strong> Specchi, marmo
          lucidato e vetro restituiscono letture di profondità errate. Coprili o
          evitali.
        </li>
      </ul>

      <h2>Apple Measure contro app AR di terze parti</h2>
      <p>
        L'app Measure integrata di Apple usa le stesse primitive di ARKit delle app
        di terze parti, quindi la precisione grezza è simile. Le differenze sono
        nelle funzioni:
      </p>
      <ul>
        <li>
          Apple Measure: distanza, altezza (rileva automaticamente la statura di una
          persona), livella. Tutto qui.
        </li>
        <li>
          App AR di terze parti (Ruler AR, MagicPlan, RoomScan Pro): tutto quanto
          sopra più angoli, area, misura di poligoni, scansioni 3D delle stanze,
          costruttori manuali di planimetrie, cartelle di progetto, esportazione
          PDF, modalità di calibrazione, annotazioni sulle foto e così via.
        </li>
      </ul>
      <p>
        Per misurazioni occasionali l'app di Apple va bene. Per tutto ciò che deve
        essere salvato, esportato o misurato con maggiore fedeltà (modalità Touch,
        area di poligono, profili di precisione), un'app dedicata è più pratica.
      </p>

      <h2>In sintesi</h2>
      <p>
        Un'app AR moderna per iPhone è abbastanza precisa da sostituire un metro a
        nastro nella maggior parte dei lavori domestici e semi-professionali. Con il
        LiDAR, ±5 mm è realistico. Senza LiDAR, ±1-2 cm è realistico. Usa i cinque
        trucchi qui sopra e le tue letture miglioreranno. Per le finiture, tieni un
        righello d'acciaio nella cassetta degli attrezzi.
      </p>
    </article>
  );
}

export function PostPL() {
  return (
    <article className="prose-content">
      <p className="lead">
        Krótka odpowiedź: nowoczesny iPhone z LiDAR daje pomiary z dokładnością
        ±5 mm na 3 metrach. Bez LiDAR spodziewaj się ±1-2 cm na tej samej
        odległości. To wystarcza do zakupu mebli, ogłoszeń nieruchomości i
        większości kosztorysów remontowych. <em>Nie</em> wystarcza do stolarki czy
        meblarstwa, gdzie wciąż potrzebujesz stalowej linijki.
      </p>

      <p>
        Ale „dokładność" to ruchomy cel. Ta sama aplikacja na tym samym telefonie
        może raz pomylić się o 5 cm, a innym razem trafić w ±2 mm, w zależności od
        oświetlenia, odległości i sposobu, w jaki użytkownik trzyma telefon. Oto co
        naprawdę dzieje się wewnątrz sesji AR i co możesz zrobić, by konsekwentnie
        uzyskiwać najdokładniejsze odczyty.
      </p>

      <h2>Co tak naprawdę robi ARKit</h2>
      <p>
        ARKit (framework, na którym zbudowane są wszystkie aplikacje pomiarowe na
        iPhone) robi dwie rzeczy naraz. Śledzi położenie telefonu o sześciu
        stopniach swobody w przestrzeni za pomocą <em>odometrii wizualno-
        inercyjnej</em>: kamera odczytuje cechy tekstury otoczenia 60 razy na
        sekundę, a IMU (akcelerometr + żyroskop) odczytuje ruch 1000 razy na
        sekundę. Oba sygnały są łączone, by oszacować, gdzie znajduje się telefon.
      </p>
      <p>
        Następnie, gdy dotkniesz ekranu, by ustawić punkt pomiarowy, aplikacja
        wystrzeliwuje promień z miejsca dotyku w przestrzeń 3D i szuka miejsca, w
        którym ten promień przecina wykrytą powierzchnię. Punkt przecięcia
        otrzymuje współrzędną 3D.
      </p>
      <p>
        Odległość między dwoma punktami to po prostu odległość euklidesowa między
        ich współrzędnymi 3D. W teorii proste. W praktyce każdy krok tego łańcucha
        ma błąd: śledzenie cech dryfuje, wykrywanie powierzchni jest rozmyte,
        promień może trafić w niewłaściwą płaszczyznę.
      </p>

      <h2>LiDAR kontra brak LiDAR: co się zmienia</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>iPhone z LiDAR (12 Pro+)</th>
            <th>iPhone bez LiDAR (Xs, 14)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Jak mierzona jest głębia</td>
            <td>Bezpośredni pomiar czasu przelotu lasera</td>
            <td>Wyliczona z paralaksy kamery + IMU</td>
          </tr>
          <tr>
            <td>Typowa dokładność (≤3 m)</td>
            <td>±5 mm</td>
            <td>±10-20 mm</td>
          </tr>
          <tr>
            <td>Dokładność na 5 m</td>
            <td>±10 mm</td>
            <td>±30-50 mm</td>
          </tr>
          <tr>
            <td>Działa w całkowitej ciemności</td>
            <td>Tak (laser nie potrzebuje światła otoczenia)</td>
            <td>Nie (śledzenie kamerą zawodzi)</td>
          </tr>
          <tr>
            <td>Czas inicjalizacji</td>
            <td>~1 sekunda</td>
            <td>~3-5 sekund</td>
          </tr>
        </tbody>
      </table>

      <h2>Pięć sztuczek, które zmniejszają błąd pomiaru o połowę</h2>
      <ol>
        <li>
          <strong>Najpierw skalibruj, poruszając telefonem.</strong> Zanim
          postawisz pierwszy punkt, przejdź metr lub dwa wokół obszaru, który
          będziesz mierzyć. To daje ARKit wystarczająco dużo ruchu, by
          triangulować głębię z paralaksy; pierwsze pomiary tuż po uruchomieniu
          aplikacji są najmniej dokładne.
        </li>
        <li>
          <strong>Do małych wymiarów używaj trybu Touch.</strong> Przy wszystkim
          poniżej 30 cm promień AR ma trudność z umieszczeniem punktu początkowego
          dokładnie tam, gdzie chcesz. Tryb Touch (w wyborze trybów) umieszcza
          punkt początkowy w fizycznym położeniu telefonu. Przyłóż telefon do
          krawędzi początkowej, dotknij raz, przesuń do końca i dotknij ponownie.
          Brak promienia = brak błędu promienia.
        </li>
        <li>
          <strong>Dotykaj powierzchni z teksturą, nie gołej ściany.</strong>
          Wykrywanie płaszczyzn AR działa poprzez znajdowanie punktów
          charakterystycznych (rogi, krawędzie, kropki w teksturze). Idealnie biała
          tynkowana ściana nie ma żadnych. Jeśli musisz mierzyć do gołej ściany,
          przyklej kawałek wzorzystej taśmy lub połóż książkę tam, gdzie chcesz
          zakotwiczyć — cokolwiek z krawędziami.
        </li>
        <li>
          <strong>Sprawdzaj długie odległości, chodząc.</strong> Dryf AR kumuluje
          się wraz z odległością. Przy wszystkim powyżej 4 m mierz na pół: wybierz
          punkt środkowy, zmierz od jednego końca do środka, potem od środka do
          dalekiego końca. Obie połówki powinny zsumować się z dokładnością do kilku
          milimetrów do pojedynczego pomiaru od końca do końca. Jeśli się nie
          zgadzają, długi pomiar ma dryf.
        </li>
        <li>
          <strong>Nie ufaj pierwszemu odczytowi. Zrób trzy.</strong> Dotknij,
          zapisz, odsuń telefon, wróć i dotknij ponownie. Powtórz trzy razy. Jeśli
          wszystkie trzy odczyty zgadzają się w granicach ±3 mm, masz solidną
          liczbę. Jeśli różnią się o ponad 1 cm, coś w sesji AR (oświetlenie,
          jakość śledzenia, powierzchnia) jest niekorzystne — zmień coś i spróbuj
          ponownie.
        </li>
      </ol>

      <h2>Kiedy NIE używać pomiaru AR</h2>
      <p>
        AR to złe narzędzie do:
      </p>
      <ul>
        <li>
          <strong>Stolarki, drzwi, frontów szuflad.</strong> Wszędzie tam, gdzie
          liczy się szczelina 1 mm, stalowa linijka jest szybsza i pewniejsza.
        </li>
        <li>
          <strong>Przekątnej pokoju powyżej 5 m.</strong> Użyj dalmierza laserowego
          — są tanie, dokładne i nie dryfują na długich odległościach.
        </li>
        <li>
          <strong>Na zewnątrz w pełnym słońcu.</strong> LiDAR jest zaślepiany przez
          silne promieniowanie IR otoczenia (słońce), a śledzenie kamerą zmaga się z
          tym samym problemem przez przesuwające się cienie. Lepiej w cieniu lub przy
          zachmurzeniu.
        </li>
        <li>
          <strong>Powierzchni odbijających lub przezroczystych.</strong> Lustra,
          polerowany marmur i szkło zwracają błędne odczyty głębi. Zasłoń je lub ich
          unikaj.
        </li>
      </ul>

      <h2>Apple Measure kontra aplikacje AR innych firm</h2>
      <p>
        Wbudowana aplikacja Apple Measure korzysta z tych samych prymitywów ARKit
        co aplikacje innych firm, więc surowa dokładność jest podobna. Różnice
        tkwią w funkcjach:
      </p>
      <ul>
        <li>
          Apple Measure: odległość, wzrost (automatycznie wykrywa wzrost osoby),
          poziomica. To wszystko.
        </li>
        <li>
          Aplikacje AR innych firm (Ruler AR, MagicPlan, RoomScan Pro): wszystko
          powyższe plus kąty, pole powierzchni, pomiar wielokątów, skany 3D
          pomieszczeń, ręczne kreatory planów, foldery projektów, eksport do PDF,
          tryby kalibracji, adnotacje na zdjęciach i tak dalej.
        </li>
      </ul>
      <p>
        Do jednorazowych pomiarów aplikacja Apple wystarczy. Do wszystkiego, co
        trzeba zapisać, wyeksportować lub zmierzyć z większą dokładnością (tryb
        Touch, pole wielokąta, profile dokładności), dedykowana aplikacja jest
        praktyczniejsza.
      </p>

      <h2>Podsumowanie</h2>
      <p>
        Nowoczesna aplikacja AR na iPhone jest wystarczająco dokładna, by zastąpić
        miarkę w większości domowych i lekko profesjonalnych zadań. Z LiDAR ±5 mm
        jest realne. Bez LiDAR realne jest ±1-2 cm. Użyj pięciu sztuczek powyżej, a
        twoje odczyty się poprawią. Do prac wykończeniowych trzymaj stalową linijkę
        w skrzynce z narzędziami.
      </p>
    </article>
  );
}

export function PostTR() {
  return (
    <article className="prose-content">
      <p className="lead">
        Kısa cevap: LiDAR'lı modern bir iPhone, 3 metrede ±5 mm hassasiyetinde
        ölçümler verir. LiDAR olmadan, aynı mesafede ±1-2 cm bekleyin. Bu; mobilya
        alışverişi, emlak ilanları ve çoğu tadilat keşfi için yeterlidir. Ancak
        1 mm'nin önemli olduğu dolap işleri veya marangozluk için <em>yeterli
        değildir</em>; orada hâlâ çelik bir cetvele ihtiyacınız var.
      </p>

      <p>
        Ama "hassasiyet" hareketli bir hedeftir. Aynı telefondaki aynı uygulama,
        aydınlatmaya, mesafeye ve kullanıcının telefonu tutuşuna bağlı olarak bir
        seferinde 5 cm sapabilir, bir sonrakinde ±2 mm tutturabilir. İşte AR
        oturumunun içinde gerçekte neler olduğu ve en hassas okumaları tutarlı
        biçimde almak için yapabilecekleriniz.
      </p>

      <h2>ARKit aslında ne yapıyor</h2>
      <p>
        ARKit (tüm iPhone ölçüm uygulamalarının üzerine kurulduğu çatı) aynı anda
        iki iş yapar. Telefonun uzaydaki altı serbestlik dereceli konumunu
        <em> görsel-eylemsizlik odometrisi</em> kullanarak izler: kamera çevrenizin
        doku özelliklerini saniyede 60 kez okur, IMU (ivmeölçer + jiroskop) ise
        hareketi saniyede 1000 kez okur. İki sinyal birleştirilerek telefonun nerede
        olduğu tahmin edilir.
      </p>
      <p>
        Sonra, bir ölçüm noktası koymak için ekrana dokunduğunuzda, uygulama dokunma
        konumundan 3D uzaya bir ışın gönderir ve bu ışının algılanan bir yüzeyle
        kesiştiği yeri arar. Kesişim noktası bir 3D koordinat alır.
      </p>
      <p>
        İki nokta arasındaki mesafe, yalnızca 3D koordinatları arasındaki Öklid
        mesafesidir. Teoride basit. Pratikte bu zincirin her adımında bir hata var:
        özellik izleme kayar, yüzey algılama bulanıktır, ışın yanlış düzleme
        düşebilir.
      </p>

      <h2>LiDAR'a karşı LiDAR'sız: ne değişir</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>LiDAR'lı iPhone (12 Pro+)</th>
            <th>LiDAR'sız iPhone (Xs, 14)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Derinlik nasıl ölçülür</td>
            <td>Doğrudan lazer uçuş süresi</td>
            <td>Kamera paralaksı + IMU'dan çıkarılır</td>
          </tr>
          <tr>
            <td>Tipik hassasiyet (≤3 m)</td>
            <td>±5 mm</td>
            <td>±10-20 mm</td>
          </tr>
          <tr>
            <td>5 m'de hassasiyet</td>
            <td>±10 mm</td>
            <td>±30-50 mm</td>
          </tr>
          <tr>
            <td>Zifiri karanlıkta çalışır mı</td>
            <td>Evet (lazerin ortam ışığına ihtiyacı yok)</td>
            <td>Hayır (kamera izleme başarısız olur)</td>
          </tr>
          <tr>
            <td>Başlatma süresi</td>
            <td>~1 saniye</td>
            <td>~3-5 saniye</td>
          </tr>
        </tbody>
      </table>

      <h2>Ölçüm hatasını yarıya indiren beş püf noktası</h2>
      <ol>
        <li>
          <strong>Önce telefonu hareket ettirerek kalibre edin.</strong> İlk
          noktanızı koymadan önce, ölçeceğiniz alanın çevresinde bir-iki metre
          yürüyün. Bu, ARKit'e derinliği paralakstan üçgenlemek için yeterli hareket
          verir; uygulamayı açtıktan hemen sonraki ilk ölçümler en az hassas
          olanlardır.
        </li>
        <li>
          <strong>Küçük boyutlar için Touch modunu kullanın.</strong> 30 cm'nin
          altındaki her şeyde, AR ışını başlangıç noktasını tam istediğiniz yere
          koymakta zorlanır. Touch modu (mod seçicide) bunun yerine başlangıç
          noktasını telefonun fiziksel konumuna koyar. Telefonu başlangıç kenarına
          dayayın, bir kez dokunun, uca gidin, tekrar dokunun. Işın yok = ışın
          hatası yok.
        </li>
        <li>
          <strong>Boş bir duvara değil, dokulu bir yüzeye dokunun.</strong> AR
          düzlem algılama, özellik noktaları (köşeler, kenarlar, dokudaki noktalar)
          bularak çalışır. Kusursuz beyaz bir sıvalı duvarın hiç özelliği yoktur.
          Boş bir duvara ölçmeniz gerekiyorsa, sabitlemek istediğiniz yere desenli
          bir bant parçası yapıştırın ya da bir kitap koyun — kenarları olan herhangi
          bir şey.
        </li>
        <li>
          <strong>Uzun mesafeleri yürüyerek çapraz kontrol edin.</strong> AR kayması
          mesafeyle birikir. 4 m'yi aşan her şey için yarı yarıya ölçün: bir orta
          nokta seçin, bir uçtan orta noktaya, sonra orta noktadan uzak uca ölçün.
          İki yarının toplamı, uçtan uca tek bir ölçümle birkaç milimetre içinde
          uyuşmalıdır. Uyuşmuyorsa, uzun ölçümde kayma vardır.
        </li>
        <li>
          <strong>İlk okumaya güvenmeyin. Üç kez ölçün.</strong> Dokunun, kaydedin,
          telefonu uzaklaştırın, geri gelin, tekrar dokunun. Üç kez tekrarlayın. Üç
          okuma da ±3 mm içinde uyuşuyorsa, sağlam bir sayınız var demektir. 1 cm'den
          fazla ayrışıyorlarsa, AR oturumuyla ilgili bir şey (aydınlatma, izleme
          kalitesi, yüzey) elverişli değildir — bir şeyi değiştirip yeniden deneyin.
        </li>
      </ol>

      <h2>AR ölçümü NE ZAMAN kullanılmamalı</h2>
      <p>
        AR şunlar için yanlış araçtır:
      </p>
      <ul>
        <li>
          <strong>Dolap işleri, kapılar, çekmece önyüzleri.</strong> 1 mm'lik bir
          boşluğun önemli olduğu her yerde, çelik bir cetvel daha hızlı ve daha
          güvenilirdir.
        </li>
        <li>
          <strong>5 m'yi aşan bir oda köşegeni.</strong> Lazer mesafe ölçer kullanın
          — ucuz, hassas ve uzun mesafelerde kaymazlar.
        </li>
        <li>
          <strong>Doğrudan güneş altında dışarıda.</strong> LiDAR güçlü IR ortam
          ışığıyla (güneş) silinir ve kamera izleme de hareket eden gölgeler
          yüzünden aynı sorunu yaşar. Gölgede veya bulutlu havada daha iyidir.
        </li>
        <li>
          <strong>Yansıtıcı veya saydam yüzeyler.</strong> Aynalar, cilalı mermer ve
          cam hatalı derinlik okumaları döndürür. Onları örtün veya kaçının.
        </li>
      </ul>

      <h2>Apple Measure'a karşı üçüncü taraf AR uygulamaları</h2>
      <p>
        Apple'ın yerleşik Measure uygulaması, üçüncü taraf uygulamalarla aynı ARKit
        ilkellerini kullanır, dolayısıyla ham hassasiyet benzerdir. Farklar
        özelliklerdedir:
      </p>
      <ul>
        <li>
          Apple Measure: mesafe, boy (bir kişinin boyunu otomatik algılar), tesviye.
          Hepsi bu.
        </li>
        <li>
          Üçüncü taraf AR uygulamaları (Ruler AR, MagicPlan, RoomScan Pro):
          yukarıdakilerin tümü ile birlikte açılar, alan, çokgen ölçümü, 3D oda
          taramaları, manuel kat planı oluşturucular, proje klasörleri, PDF dışa
          aktarma, kalibrasyon modları, fotoğraf işaretlemeleri vb.
        </li>
      </ul>
      <p>
        Tek seferlik ölçümler için Apple'ın uygulaması yeterli. Kaydedilmesi, dışa
        aktarılması ya da daha yüksek doğrulukla ölçülmesi gereken her şey için
        (Touch modu, çokgen alanı, hassasiyet profilleri) özel bir uygulama daha
        kullanışlıdır.
      </p>

      <h2>Özetle</h2>
      <p>
        Modern bir iPhone AR uygulaması, çoğu ev ve hafif profesyonel iş için şerit
        metreyi yerine koyacak kadar hassastır. LiDAR ile ±5 mm gerçekçidir. LiDAR
        olmadan ±1-2 cm gerçekçidir. Yukarıdaki beş püf noktasını kullanın,
        okumalarınız iyileşecek. İnce işler için alet çantanızda bir çelik cetvel
        bulundurun.
      </p>
    </article>
  );
}

export function PostAR() {
  return (
    <article className="prose-content">
      <p className="lead">
        الإجابة المختصرة: جهاز iPhone حديث مزوّد بـ LiDAR يمنحك قياسات بدقة ±5 ملم
        على مسافة 3 أمتار. بدون LiDAR، توقّع ±1-2 سم على المسافة نفسها. هذا جيد بما
        يكفي لشراء الأثاث وإعلانات العقارات ومعظم تقديرات التجديد. لكنه <em>ليس</em>
        جيدًا بما يكفي لأعمال الخزائن أو النجارة الدقيقة، حيث لا تزال تحتاج إلى مسطرة
        فولاذية.
      </p>

      <p>
        لكن «الدقة» هدف متحرّك. التطبيق نفسه على الهاتف نفسه قد يخطئ بمقدار 5 سم مرة
        ويصيب ±2 ملم في المرة التالية، حسب الإضاءة والمسافة وطريقة إمساك المستخدم
        بالهاتف. إليك ما يحدث فعليًا داخل جلسة الواقع المعزز وما يمكنك فعله للحصول
        باستمرار على أدق القراءات.
      </p>

      <h2>ماذا يفعل ARKit فعليًا</h2>
      <p>
        يقوم ARKit (الإطار البرمجي الذي تُبنى عليه جميع تطبيقات القياس على iPhone)
        بأمرين في آن واحد. فهو يتتبّع موضع الهاتف بست درجات حرّية في الفضاء باستخدام
        <em> القياس البصري-القصوري</em>: تقرأ الكاميرا ملامح ملمس محيطك 60 مرة في
        الثانية، وتقرأ وحدة القياس بالقصور الذاتي (مقياس التسارع + الجيروسكوب) الحركة
        1000 مرة في الثانية. ويُدمج الإشارتان لتقدير مكان الهاتف.
      </p>
      <p>
        ثم، عندما تنقر لوضع نقطة قياس، يُطلق التطبيق شعاعًا من موضع اللمس إلى الفضاء
        ثلاثي الأبعاد ويبحث عن المكان الذي يتقاطع فيه ذلك الشعاع مع سطح مكتشَف.
        وتحصل نقطة التقاطع على إحداثية ثلاثية الأبعاد.
      </p>
      <p>
        المسافة بين نقطتين هي مجرّد المسافة الإقليدية بين إحداثياتهما الثلاثية
        الأبعاد. بسيطة نظريًا. أما عمليًا، فلكل خطوة في هذه السلسلة خطأ: تتبّع الملامح
        ينحرف، واكتشاف الأسطح غير حاد، وقد يرتطم الشعاع بالمستوى الخاطئ.
      </p>

      <h2>LiDAR مقابل غياب LiDAR: ما الذي يتغيّر</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>iPhone مع LiDAR (12 Pro فأحدث)</th>
            <th>iPhone بدون LiDAR (Xs، 14)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>كيف يُقاس العمق</td>
            <td>زمن انتقال الليزر المباشر</td>
            <td>يُستنتج من تزيّح الكاميرا + IMU</td>
          </tr>
          <tr>
            <td>الدقة النموذجية (≤3 م)</td>
            <td>±5 ملم</td>
            <td>±10-20 ملم</td>
          </tr>
          <tr>
            <td>الدقة عند 5 م</td>
            <td>±10 ملم</td>
            <td>±30-50 ملم</td>
          </tr>
          <tr>
            <td>يعمل في الظلام الدامس</td>
            <td>نعم (الليزر لا يحتاج إلى ضوء محيط)</td>
            <td>لا (يفشل تتبّع الكاميرا)</td>
          </tr>
          <tr>
            <td>زمن التهيئة</td>
            <td>~1 ثانية</td>
            <td>~3-5 ثوانٍ</td>
          </tr>
        </tbody>
      </table>

      <h2>خمس حيل تقلّص خطأ القياس إلى النصف</h2>
      <ol>
        <li>
          <strong>عايِر أولًا بتحريك الهاتف.</strong> قبل أن تنقر نقطتك الأولى، تنقّل
          مترًا أو مترين حول المنطقة التي ستقيسها. هذا يمنح ARKit حركة كافية لتثليث
          العمق من التزيّح؛ فالقياسات الأولى مباشرةً بعد تشغيل التطبيق هي الأقل دقة.
        </li>
        <li>
          <strong>استخدم وضع Touch للأبعاد الصغيرة.</strong> لأي شيء أقل من 30 سم،
          يجد شعاع الواقع المعزز صعوبة في وضع نقطة البداية تمامًا حيث تريد. أما وضع
          Touch (في منتقي الأوضاع) فيضع نقطة البداية عند الموضع الفيزيائي للهاتف.
          اضغط الهاتف على الحافة الابتدائية، انقر مرة، انتقل إلى النهاية، وانقر مجددًا.
          لا شعاع = لا خطأ شعاع.
        </li>
        <li>
          <strong>انقر على سطح ذي ملمس، لا على جدار أملس.</strong> يعمل اكتشاف
          المستويات في الواقع المعزز بإيجاد نقاط ملامح (زوايا، حواف، نقاط في الملمس).
          الجدار الجصي الأبيض تمامًا لا يملك أي ملمح. إذا اضطررت للقياس إلى جدار
          أملس، فضع قطعة شريط لاصق مزخرف أو كتابًا حيث تريد التثبيت — أي شيء له حواف.
        </li>
        <li>
          <strong>تحقّق من المسافات الطويلة بالمشي.</strong> ينحراف الواقع المعزز
          يتراكم مع المسافة. لأي شيء يزيد على 4 م، قِس على نصفين: اختر نقطة وسطى، قِس
          من طرف إلى النقطة الوسطى، ثم من النقطة الوسطى إلى الطرف البعيد. ينبغي أن
          يتطابق مجموع النصفين مع قياس واحد من طرف إلى طرف في حدود بضعة مليمترات. وإن
          لم يتطابقا، فالقياس الطويل به انحراف.
        </li>
        <li>
          <strong>لا تثق بالقراءة الأولى. خذ ثلاثًا.</strong> انقر، احفظ، أبعِد
          الهاتف، عُد، وانقر من جديد. كرّر ثلاث مرات. إذا اتفقت القراءات الثلاث في حدود
          ±3 ملم، فلديك رقم موثوق. وإن اختلفت بأكثر من 1 سم، فثمّة أمر في جلسة الواقع
          المعزز (الإضاءة، جودة التتبّع، السطح) غير مواتٍ — غيّر شيئًا وأعِد المحاولة.
        </li>
      </ol>

      <h2>متى يجب ألّا تستخدم قياس الواقع المعزز</h2>
      <p>
        الواقع المعزز أداة خاطئة في:
      </p>
      <ul>
        <li>
          <strong>أعمال الخزائن والأبواب وواجهات الأدراج.</strong> في أي مكان تهم فيه
          فجوة بمقدار 1 ملم، تكون المسطرة الفولاذية أسرع وأكثر موثوقية.
        </li>
        <li>
          <strong>قطر غرفة يتجاوز 5 م.</strong> استخدم مقياس مسافات بالليزر — فهي
          رخيصة ودقيقة ولا تنحرف على المسافات الطويلة.
        </li>
        <li>
          <strong>في الخارج تحت الشمس المباشرة.</strong> يُطمَس LiDAR بالأشعة تحت
          الحمراء المحيطة القوية (ضوء الشمس)، ويواجه تتبّع الكاميرا المشكلة نفسها
          بسبب الظلال المتحركة. الأفضل في الظل أو في الجو الملبّد بالغيوم.
        </li>
        <li>
          <strong>الأسطح العاكسة أو الشفافة.</strong> المرايا والرخام المصقول والزجاج
          تُرجع قراءات عمق سيئة. غطِّها أو تجنّبها.
        </li>
      </ul>

      <h2>Apple Measure مقابل تطبيقات الواقع المعزز من جهات أخرى</h2>
      <p>
        يستخدم تطبيق Measure المدمج من Apple البِنى الأساسية نفسها لـ ARKit التي
        تستخدمها التطبيقات الأخرى، لذا فالدقة الخام متشابهة. الفروق في الميزات:
      </p>
      <ul>
        <li>
          Apple Measure: المسافة، الطول (يكتشف طول الشخص تلقائيًا)، الميزان. هذا كل
          شيء.
        </li>
        <li>
          تطبيقات الواقع المعزز من جهات أخرى (Ruler AR، MagicPlan، RoomScan Pro): كل
          ما سبق إضافةً إلى الزوايا والمساحة وقياس المضلعات ومسوحات الغرف ثلاثية
          الأبعاد ومنشئي المخططات الأرضية اليدويين ومجلدات المشاريع والتصدير إلى PDF
          وأوضاع المعايرة وتعليقات الصور وما إلى ذلك.
        </li>
      </ul>
      <p>
        للقياسات العابرة، يكفي تطبيق Apple. أما لكل ما يحتاج إلى حفظ أو تصدير أو قياس
        بدقة أعلى (وضع Touch، مساحة المضلع، ملفات تعريف الدقة)، فالتطبيق المتخصص أكثر
        عملية.
      </p>

      <h2>الخلاصة</h2>
      <p>
        تطبيق الواقع المعزز الحديث على iPhone دقيق بما يكفي ليحل محل شريط القياس في
        معظم المهام المنزلية والمهنية الخفيفة. مع LiDAR، ±5 ملم أمر واقعي. وبدون
        LiDAR، ±1-2 سم أمر واقعي. استخدم الحيل الخمس أعلاه وستتحسّن قراءاتك. أما
        لأعمال التشطيب، فاحتفظ بمسطرة فولاذية في صندوق عدّتك.
      </p>
    </article>
  );
}

export const bodies = {
  ru: PostRU, de: PostDE, fr: PostFR, es: PostES, ja: PostJA, ko: PostKO,
  'zh-Hans': PostZH, 'pt-BR': PostPT, it: PostIT, pl: PostPL, tr: PostTR, ar: PostAR
};
