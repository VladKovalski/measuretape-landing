import type { PostMeta } from './posts';

export const meta: PostMeta = {
  slug: 'best-ar-measure-apps-iphone-2026',
  date: '2026-04-22',
  readingTimeMin: 8,
  keywords:
    'best ar measure app iphone, best tape measure app, ar ruler app comparison, iphone measuring apps 2026',
  tags: ['Comparison', 'Reviews', 'Apps'],
  title: {
    en: "Best AR Measuring Apps for iPhone in 2026: a Hands-On Comparison",
    ru: "Лучшие AR-приложения для измерений на iPhone в 2026: сравнение на практике",
    de: "Die besten AR-Mess-Apps für iPhone 2026: ein Praxisvergleich",
    fr: "Les meilleures applications de mesure AR sur iPhone en 2026 : comparatif terrain",
    es: "Las mejores apps AR de medición para iPhone en 2026: comparativa práctica",
    ja: "2026年 iPhone向けベストAR計測アプリ：実機で徹底比較",
    ko: "2026년 iPhone용 최고의 AR 측정 앱: 실사용 비교",
    "zh-Hans": "2026 年 iPhone 最佳 AR 测量应用：实测对比",
    "pt-BR": "Os melhores apps de medição AR para iPhone em 2026: comparativo prático",
    it: "Le migliori app di misurazione AR per iPhone nel 2026: confronto sul campo",
    pl: "Najlepsze aplikacje pomiarowe AR na iPhone w 2026: praktyczne porównanie",
    tr: "2026'da iPhone için en iyi AR ölçüm uygulamaları: uygulamalı karşılaştırma",
    ar: "أفضل تطبيقات القياس بالواقع المعزز لـ iPhone في 2026: مقارنة عملية"
  },
  excerpt: {
    en: "We tested seven AR measuring apps on the same iPhone in the same rooms. Here's what stood out for accuracy, room scanning, export options, and price.",
    ru: "Мы протестировали семь AR-приложений на одном iPhone в одинаковых условиях. Что выделилось по точности, сканированию комнат, экспорту и цене.",
    de: "Wir haben sieben AR-Mess-Apps auf demselben iPhone in denselben Räumen getestet. Das hat bei Genauigkeit, Raumscan, Exportoptionen und Preis überzeugt.",
    fr: "Nous avons testé sept applications de mesure AR sur le même iPhone dans les mêmes pièces. Voici ce qui s'est démarqué en précision, scan de pièce, options d'export et prix.",
    es: "Probamos siete apps de medición AR en el mismo iPhone y en las mismas habitaciones. Esto es lo que destacó en precisión, escaneo de habitaciones, opciones de exportación y precio.",
    ja: "同じ iPhone を使い、同じ部屋で 7 つの AR 計測アプリを試しました。精度、部屋のスキャン、書き出し機能、価格で際立った点をまとめます。",
    ko: "같은 iPhone과 같은 방에서 7개의 AR 측정 앱을 테스트했습니다. 정확도, 방 스캔, 내보내기 옵션, 가격 면에서 두드러진 점을 정리했습니다.",
    "zh-Hans": "我们在同一部 iPhone、同样的房间里测试了七款 AR 测量应用。下面是它们在精度、房间扫描、导出选项和价格上的突出表现。",
    "pt-BR": "Testamos sete apps de medição AR no mesmo iPhone e nos mesmos ambientes. Veja o que se destacou em precisão, escaneamento de cômodos, opções de exportação e preço.",
    it: "Abbiamo testato sette app di misurazione AR sullo stesso iPhone e nelle stesse stanze. Ecco cosa ha spiccato per precisione, scansione degli ambienti, opzioni di esportazione e prezzo.",
    pl: "Przetestowaliśmy siedem aplikacji pomiarowych AR na tym samym iPhonie i w tych samych pomieszczeniach. Oto co wyróżniło się pod względem dokładności, skanowania pomieszczeń, opcji eksportu i ceny.",
    tr: "Aynı iPhone'da ve aynı odalarda yedi AR ölçüm uygulamasını test ettik. Doğruluk, oda taraması, dışa aktarma seçenekleri ve fiyat açısından öne çıkanları derledik.",
    ar: "اختبرنا سبعة تطبيقات للقياس بالواقع المعزز على نفس جهاز iPhone وفي نفس الغرف. إليك ما تميّز من حيث الدقة ومسح الغرف وخيارات التصدير والسعر."
  }
};

export default function Post() {
  return (
    <article className="prose-content">
      <p className="lead">
        Search "tape measure app" in the App Store and you'll see twenty
        candidates. Most use the same underlying ARKit framework. The interesting
        differences are in how they handle imperfect conditions (low light,
        small dimensions, long distances) and what you can do with the
        measurements once they're captured.
      </p>
      <p>
        We installed seven of the most-downloaded measuring apps on the same
        iPhone 15 Pro and ran the same set of tests in the same three rooms over
        two weeks. Below is what worked, what didn't, and what each app is best
        at.
      </p>

      <h2>How we tested</h2>
      <ul>
        <li>
          <strong>Same hardware.</strong> iPhone 15 Pro (LiDAR + A17 chip), iOS
          18.3, daylight + indoor mixed conditions.
        </li>
        <li>
          <strong>Same baseline.</strong> Every dimension we measured with the
          apps, we also measured with a Bosch GLM 30 laser distance meter (rated
          ±1.5 mm). The laser readings are the ground truth.
        </li>
        <li>
          <strong>Same test set.</strong> Door widths (76 cm), table heights
          (74 cm), wall lengths (4.2 m, 5.6 m), room areas (15 m², 22 m²), and one
          tricky diagonal across 6.8 m.
        </li>
      </ul>

      <h2>The apps tested</h2>
      <p>
        Apple Measure (built-in), Ruler AR, MagicPlan, RoomScan Pro, AR Ruler App,
        AirMeasure, and Tape Measure 3D.
      </p>

      <h2>Accuracy results</h2>
      <p>
        For short distances (under 1 m), all seven apps came in within ±5 mm of
        the laser baseline. AR raycast on a textured surface at close range is
        consistent across implementations, ARKit does the heavy lifting and the
        apps just expose the result.
      </p>
      <p>
        For room-length walls (4-6 m), accuracy diverged. The best apps used
        LiDAR depth readings directly and stayed within ±15 mm. The worst inferred
        depth from camera-only signals and drifted to ±50 mm, fine for furniture
        planning, too loose for any kind of building permit drawing.
      </p>
      <p>
        For the diagonal across 6.8 m of carpet (the hardest test, AR drift
        accumulates with distance), only two apps stayed within 2 cm. Three were
        off by 10 cm or more.
      </p>

      <h2>Standout features by app</h2>

      <h3>Apple Measure (built-in)</h3>
      <p>
        <strong>Best for:</strong> one-off quick measurements when you don't want
        to install anything. <strong>Skip if:</strong> you need to save the
        results, measure area, or do anything beyond linear distance.
      </p>
      <p>
        It's free, it's pre-installed, it works. But there's no project history,
        no PDF export, no angle tool, no room scanner. You measure something,
        screenshot it, and that's it.
      </p>

      <h3>Ruler AR</h3>
      <p>
        <strong>Best for:</strong> the broadest feature set in a free app, AR
        camera measure, manual floor plan builder (works without LiDAR), 3D
        LiDAR room scan, angles, area, level, project folders, PDF export.
        <strong> Skip if:</strong> you want zero ads (the Pro tier removes them).
      </p>
      <p>
        Stood out in our tests for the Touch Mode (places start point at phone
        position, eliminates short-distance raycast error) and the
        adaptive-quality system that automatically reduces session load on warm
        devices. Floor plans exported with measured walls + doors + windows in a
        clean PDF format.
      </p>

      <h3>MagicPlan</h3>
      <p>
        <strong>Best for:</strong> professional floor plans with materials and
        cost estimates. <strong>Skip if:</strong> price-sensitive, the pro
        subscription is significantly higher than competitors.
      </p>
      <p>
        Powerful when you go all-in. Their estimate tool integrates with material
        databases. Overkill for individual rooms; ideal for contractors doing
        multiple jobs per week.
      </p>

      <h3>RoomScan Pro</h3>
      <p>
        <strong>Best for:</strong> very fast manual floor plans by touching the
        phone to walls one at a time. <strong>Skip if:</strong> you want the LiDAR
        flow, they're more focused on the touch-the-wall workflow.
      </p>

      <h3>AR Ruler App / AirMeasure / Tape Measure 3D</h3>
      <p>
        Functional but feature-light. AR camera measure works, angle and area
        tools available. None have a manual non-LiDAR floor plan builder. None
        export PDF. Solid backups if a more featured app feels overwhelming.
      </p>

      <h2>The choice matrix</h2>
      <table>
        <thead>
          <tr>
            <th>You need…</th>
            <th>Use…</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Just measure one thing right now</td>
            <td>Apple Measure (already installed)</td>
          </tr>
          <tr>
            <td>Full room captured, exportable, free</td>
            <td>Ruler AR</td>
          </tr>
          <tr>
            <td>Material estimates + cost roll-up</td>
            <td>MagicPlan</td>
          </tr>
          <tr>
            <td>Floor plan without using AR camera at all</td>
            <td>RoomScan Pro (touch-the-wall workflow)</td>
          </tr>
          <tr>
            <td>Architectural-grade output</td>
            <td>None, use a laser meter + CAD</td>
          </tr>
        </tbody>
      </table>

      <h2>What the App Store star ratings don't tell you</h2>
      <p>
        High star ratings are dominated by people who used the app once and it
        worked. They don't capture how well the app holds up over long sessions,
        whether it crashes on older phones, or whether the export actually
        produces something a contractor can read. We hit two app crashes on
        non-Pro iPhones during testing (older 11 Pro hardware). Both were in apps
        without adaptive performance management, the AR session and an ad SDK
        ran simultaneously and the engine overloaded. Apps that throttle scene
        complexity based on thermal state held up.
      </p>

      <h2>Our pick</h2>
      <p>
        For most people most of the time: <strong>Ruler AR</strong>. Free tier
        covers manual room builder, camera measure, angles, level, area, and PDF
        export. LiDAR scan available on supported hardware. No ads in the Pro
        tier. Adaptive performance keeps it stable on older 4 GB devices.
      </p>
      <p>
        For professionals who measure for a living: <strong>MagicPlan</strong> if
        budget allows, <strong>Ruler Pro</strong> if budget is tight. Both can
        export the floor plan formats that contractors actually want.
      </p>
    </article>
  );
}

export function PostRU() {
  return (
    <article className="prose-content">
      <p className="lead">
        Введите «приложение-рулетка» в App Store — и вы увидите два десятка
        кандидатов. Большинство построены на одном и том же фреймворке ARKit.
        Интересные различия — в том, как они справляются с неидеальными
        условиями (слабый свет, небольшие размеры, большие расстояния) и что
        можно сделать с измерениями после того, как они получены.
      </p>
      <p>
        Мы установили семь самых скачиваемых приложений для измерений на один и
        тот же iPhone 15 Pro и в течение двух недель прогнали одинаковый набор
        тестов в одних и тех же трёх комнатах. Ниже — что сработало, что нет и в
        чём каждое приложение сильнее всего.
      </p>

      <h2>Как мы тестировали</h2>
      <ul>
        <li>
          <strong>Одно и то же железо.</strong> iPhone 15 Pro (LiDAR + чип A17),
          iOS 18.3, смешанные условия: дневной свет и помещение.
        </li>
        <li>
          <strong>Один и тот же эталон.</strong> Каждый размер, измеренный
          приложениями, мы также измеряли лазерным дальномером Bosch GLM 30
          (заявленная точность ±1,5 мм). Показания лазера — это эталон истины.
        </li>
        <li>
          <strong>Один и тот же набор тестов.</strong> Ширина дверей (76 см),
          высота столов (74 см), длина стен (4,2 м, 5,6 м), площади комнат
          (15 м², 22 м²) и одна каверзная диагональ длиной 6,8 м.
        </li>
      </ul>

      <h2>Протестированные приложения</h2>
      <p>
        Apple Measure (встроенное), Ruler AR, MagicPlan, RoomScan Pro, AR Ruler
        App, AirMeasure и Tape Measure 3D.
      </p>

      <h2>Результаты по точности</h2>
      <p>
        На коротких расстояниях (менее 1 м) все семь приложений уложились в
        ±5 мм относительно лазерного эталона. AR-рейкаст по текстурированной
        поверхности на близком расстоянии стабилен во всех реализациях: основную
        работу делает ARKit, а приложения лишь показывают результат.
      </p>
      <p>
        На стенах в длину комнаты (4–6 м) точность разошлась. Лучшие приложения
        использовали данные о глубине от LiDAR напрямую и оставались в пределах
        ±15 мм. Худшие выводили глубину только из сигналов камеры и уходили до
        ±50 мм — нормально для расстановки мебели, но слишком грубо для любых
        чертежей под разрешение на строительство.
      </p>
      <p>
        На диагонали в 6,8 м по ковру (самый сложный тест, AR-дрейф накапливается
        с расстоянием) только два приложения остались в пределах 2 см. Три
        ошиблись на 10 см и более.
      </p>

      <h2>Сильные стороны по приложениям</h2>

      <h3>Apple Measure (встроенное)</h3>
      <p>
        <strong>Лучше всего для:</strong> разовых быстрых измерений, когда ничего
        не хочется устанавливать. <strong>Пропустите, если:</strong> нужно
        сохранять результаты, измерять площадь или делать что-то помимо линейного
        расстояния.
      </p>
      <p>
        Оно бесплатное, предустановлено и работает. Но нет истории проектов,
        экспорта в PDF, инструмента углов, сканера комнат. Вы что-то измеряете,
        делаете скриншот — и на этом всё.
      </p>

      <h3>Ruler AR</h3>
      <p>
        <strong>Лучше всего для:</strong> самого широкого набора функций среди
        бесплатных приложений — измерение AR-камерой, ручной конструктор планов
        (работает без LiDAR), 3D-сканирование комнат через LiDAR, углы, площадь,
        уровень, папки проектов, экспорт в PDF.
        <strong> Пропустите, если:</strong> хотите полностью без рекламы (её
        убирает тариф Pro).
      </p>
      <p>
        В наших тестах выделилось режимом Touch Mode (ставит начальную точку в
        позиции телефона, устраняя ошибку рейкаста на коротких расстояниях) и
        системой адаптивного качества, которая автоматически снижает нагрузку
        сессии на нагревшихся устройствах. Планы экспортируются с измеренными
        стенами + дверями + окнами в аккуратном формате PDF.
      </p>

      <h3>MagicPlan</h3>
      <p>
        <strong>Лучше всего для:</strong> профессиональных планов помещений с
        материалами и сметами. <strong>Пропустите, если:</strong> чувствительны к
        цене — про-подписка заметно дороже конкурентов.
      </p>
      <p>
        Мощное, если вкладываться по полной. Их инструмент сметы интегрируется с
        базами материалов. Избыточно для отдельных комнат; идеально для
        подрядчиков с несколькими объектами в неделю.
      </p>

      <h3>RoomScan Pro</h3>
      <p>
        <strong>Лучше всего для:</strong> очень быстрых ручных планов помещений,
        когда вы по очереди прикладываете телефон к стенам.
        <strong> Пропустите, если:</strong> вам нужен сценарий с LiDAR — здесь
        упор больше на подход «приложи к стене».
      </p>

      <h3>AR Ruler App / AirMeasure / Tape Measure 3D</h3>
      <p>
        Рабочие, но с небогатым функционалом. Измерение AR-камерой работает,
        инструменты углов и площади есть. Ни у одного нет ручного конструктора
        планов без LiDAR. Ни одно не экспортирует в PDF. Надёжные запасные
        варианты, если более функциональное приложение кажется перегруженным.
      </p>

      <h2>Матрица выбора</h2>
      <table>
        <thead>
          <tr>
            <th>Вам нужно…</th>
            <th>Используйте…</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Просто измерить одну вещь прямо сейчас</td>
            <td>Apple Measure (уже установлено)</td>
          </tr>
          <tr>
            <td>Захватить всю комнату, с экспортом, бесплатно</td>
            <td>Ruler AR</td>
          </tr>
          <tr>
            <td>Сметы материалов + свод затрат</td>
            <td>MagicPlan</td>
          </tr>
          <tr>
            <td>План помещения вообще без AR-камеры</td>
            <td>RoomScan Pro (подход «приложи к стене»)</td>
          </tr>
          <tr>
            <td>Результат архитектурного уровня</td>
            <td>Нет такого, используйте лазерный дальномер + CAD</td>
          </tr>
        </tbody>
      </table>

      <h2>О чём не говорят звёздные рейтинги App Store</h2>
      <p>
        Высокие оценки в звёздах задают те, кто воспользовался приложением один
        раз — и оно сработало. Они не отражают, как приложение держится в долгих
        сессиях, падает ли оно на старых телефонах и выдаёт ли экспорт что-то
        пригодное для прочтения подрядчиком. Во время тестов мы поймали два
        падения на iPhone без приставки Pro (старое железо 11 Pro). Оба — в
        приложениях без управления адаптивной производительностью: AR-сессия и
        рекламный SDK работали одновременно, и движок перегружался. Приложения,
        которые снижают сложность сцены по тепловому состоянию, держались.
      </p>

      <h2>Наш выбор</h2>
      <p>
        Для большинства людей в большинстве случаев: <strong>Ruler AR</strong>.
        Бесплатный тариф включает ручной конструктор комнат, измерение камерой,
        углы, уровень, площадь и экспорт в PDF. LiDAR-сканирование доступно на
        поддерживаемом железе. В тарифе Pro нет рекламы. Адаптивная
        производительность сохраняет стабильность на старых устройствах с 4 ГБ.
      </p>
      <p>
        Для профессионалов, которые измеряют ради заработка:
        <strong> MagicPlan</strong>, если позволяет бюджет, и
        <strong> Ruler Pro</strong>, если бюджет ограничен. Оба умеют
        экспортировать форматы планов, которые действительно нужны подрядчикам.
      </p>
    </article>
  );
}

export function PostDE() {
  return (
    <article className="prose-content">
      <p className="lead">
        Suchen Sie im App Store nach „Maßband-App", und Sie sehen zwanzig
        Kandidaten. Die meisten nutzen dasselbe zugrunde liegende ARKit-Framework.
        Die interessanten Unterschiede liegen darin, wie sie mit unperfekten
        Bedingungen umgehen (wenig Licht, kleine Abmessungen, große Entfernungen)
        und was Sie mit den Messwerten anfangen können, sobald sie erfasst sind.
      </p>
      <p>
        Wir haben sieben der meistgeladenen Mess-Apps auf demselben iPhone 15 Pro
        installiert und über zwei Wochen denselben Testparcours in denselben drei
        Räumen durchlaufen. Im Folgenden steht, was funktioniert hat, was nicht
        und worin jede App am besten ist.
      </p>

      <h2>So haben wir getestet</h2>
      <ul>
        <li>
          <strong>Gleiche Hardware.</strong> iPhone 15 Pro (LiDAR + A17-Chip),
          iOS 18.3, gemischte Bedingungen aus Tageslicht und Innenraum.
        </li>
        <li>
          <strong>Gleiche Referenz.</strong> Jede mit den Apps gemessene Strecke
          haben wir zusätzlich mit einem Bosch GLM 30 Laserdistanzmessgerät
          (Genauigkeit ±1,5 mm) gemessen. Die Laserwerte sind die Grundwahrheit.
        </li>
        <li>
          <strong>Gleicher Testsatz.</strong> Türbreiten (76 cm), Tischhöhen
          (74 cm), Wandlängen (4,2 m, 5,6 m), Raumflächen (15 m², 22 m²) und eine
          knifflige Diagonale über 6,8 m.
        </li>
      </ul>

      <h2>Die getesteten Apps</h2>
      <p>
        Apple Measure (vorinstalliert), Ruler AR, MagicPlan, RoomScan Pro, AR
        Ruler App, AirMeasure und Tape Measure 3D.
      </p>

      <h2>Ergebnisse zur Genauigkeit</h2>
      <p>
        Bei kurzen Entfernungen (unter 1 m) lagen alle sieben Apps innerhalb von
        ±5 mm zur Laser-Referenz. AR-Raycast auf einer texturierten Oberfläche im
        Nahbereich ist über alle Implementierungen hinweg konsistent: ARKit macht
        die Schwerarbeit, die Apps geben nur das Ergebnis aus.
      </p>
      <p>
        Bei raumlangen Wänden (4–6 m) gingen die Ergebnisse auseinander. Die
        besten Apps nutzten die LiDAR-Tiefenwerte direkt und blieben innerhalb von
        ±15 mm. Die schlechtesten leiteten die Tiefe nur aus Kamerasignalen ab und
        wichen bis ±50 mm ab — in Ordnung für die Möbelplanung, zu ungenau für
        jede Art von Bauantragszeichnung.
      </p>
      <p>
        Bei der Diagonale über 6,8 m Teppich (der schwierigste Test, da sich
        AR-Drift mit der Entfernung aufsummiert) blieben nur zwei Apps innerhalb
        von 2 cm. Drei lagen 10 cm oder mehr daneben.
      </p>

      <h2>Herausragende Funktionen je App</h2>

      <h3>Apple Measure (vorinstalliert)</h3>
      <p>
        <strong>Am besten für:</strong> einmalige schnelle Messungen, wenn Sie
        nichts installieren möchten. <strong>Überspringen, wenn:</strong> Sie die
        Ergebnisse speichern, Flächen messen oder mehr als nur lineare Entfernung
        machen wollen.
      </p>
      <p>
        Es ist kostenlos, vorinstalliert und funktioniert. Aber es gibt keinen
        Projektverlauf, keinen PDF-Export, kein Winkelwerkzeug, keinen Raumscanner.
        Sie messen etwas, machen ein Screenshot, und das war's.
      </p>

      <h3>Ruler AR</h3>
      <p>
        <strong>Am besten für:</strong> den breitesten Funktionsumfang in einer
        kostenlosen App — AR-Kameramessung, manueller Grundriss-Builder
        (funktioniert ohne LiDAR), 3D-LiDAR-Raumscan, Winkel, Fläche, Wasserwaage,
        Projektordner, PDF-Export.
        <strong> Überspringen, wenn:</strong> Sie gar keine Werbung wollen (der
        Pro-Tarif entfernt sie).
      </p>
      <p>
        In unseren Tests stach es durch den Touch-Modus hervor (setzt den
        Startpunkt an die Telefonposition und eliminiert den Raycast-Fehler bei
        kurzen Distanzen) sowie durch das adaptive Qualitätssystem, das die
        Sitzungslast auf warmen Geräten automatisch senkt. Grundrisse wurden mit
        gemessenen Wänden + Türen + Fenstern in einem sauberen PDF-Format
        exportiert.
      </p>

      <h3>MagicPlan</h3>
      <p>
        <strong>Am besten für:</strong> professionelle Grundrisse mit Materialien
        und Kostenschätzungen. <strong>Überspringen, wenn:</strong> Sie
        preissensibel sind — das Pro-Abo ist deutlich teurer als die Konkurrenz.
      </p>
      <p>
        Mächtig, wenn man voll einsteigt. Ihr Kalkulationstool ist mit
        Materialdatenbanken verknüpft. Übertrieben für einzelne Räume; ideal für
        Handwerker mit mehreren Aufträgen pro Woche.
      </p>

      <h3>RoomScan Pro</h3>
      <p>
        <strong>Am besten für:</strong> sehr schnelle manuelle Grundrisse, indem
        man das Telefon nacheinander an die Wände hält.
        <strong> Überspringen, wenn:</strong> Sie den LiDAR-Ablauf wollen — hier
        liegt der Fokus stärker auf dem „An-die-Wand-tippen"-Workflow.
      </p>

      <h3>AR Ruler App / AirMeasure / Tape Measure 3D</h3>
      <p>
        Funktional, aber funktionsarm. AR-Kameramessung läuft, Winkel- und
        Flächenwerkzeuge sind vorhanden. Keine hat einen manuellen Grundriss-Builder
        ohne LiDAR. Keine exportiert PDF. Solide Ausweichlösungen, falls eine
        funktionsreichere App überwältigend wirkt.
      </p>

      <h2>Die Auswahlmatrix</h2>
      <table>
        <thead>
          <tr>
            <th>Sie brauchen…</th>
            <th>Nehmen Sie…</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Einfach jetzt eine Sache messen</td>
            <td>Apple Measure (bereits installiert)</td>
          </tr>
          <tr>
            <td>Ganzen Raum erfassen, exportierbar, kostenlos</td>
            <td>Ruler AR</td>
          </tr>
          <tr>
            <td>Materialschätzungen + Kostenübersicht</td>
            <td>MagicPlan</td>
          </tr>
          <tr>
            <td>Grundriss ganz ohne AR-Kamera</td>
            <td>RoomScan Pro („An-die-Wand-tippen"-Workflow)</td>
          </tr>
          <tr>
            <td>Ergebnis in Architektenqualität</td>
            <td>Keine, nutzen Sie ein Lasermessgerät + CAD</td>
          </tr>
        </tbody>
      </table>

      <h2>Was die Sternebewertungen im App Store nicht verraten</h2>
      <p>
        Hohe Sternebewertungen werden von Leuten dominiert, die die App einmal
        benutzt haben und bei denen sie funktionierte. Sie erfassen nicht, wie gut
        die App über lange Sitzungen hält, ob sie auf älteren Telefonen abstürzt
        oder ob der Export tatsächlich etwas erzeugt, das ein Handwerker lesen
        kann. Während der Tests hatten wir zwei Abstürze auf iPhones ohne
        Pro-Zusatz (ältere 11 Pro-Hardware). Beide in Apps ohne adaptives
        Leistungsmanagement: Die AR-Sitzung und ein Werbe-SDK liefen gleichzeitig,
        und die Engine wurde überlastet. Apps, die die Szenenkomplexität nach dem
        thermischen Zustand drosseln, hielten durch.
      </p>

      <h2>Unsere Empfehlung</h2>
      <p>
        Für die meisten Menschen in den meisten Fällen: <strong>Ruler AR</strong>.
        Der kostenlose Tarif deckt manuellen Raum-Builder, Kameramessung, Winkel,
        Wasserwaage, Fläche und PDF-Export ab. LiDAR-Scan auf unterstützter
        Hardware verfügbar. Keine Werbung im Pro-Tarif. Die adaptive Leistung hält
        es auf älteren 4-GB-Geräten stabil.
      </p>
      <p>
        Für Profis, die beruflich messen: <strong>MagicPlan</strong>, wenn das
        Budget es zulässt, <strong>Ruler Pro</strong>, wenn das Budget knapp ist.
        Beide können die Grundrissformate exportieren, die Handwerker wirklich
        wollen.
      </p>
    </article>
  );
}

export function PostFR() {
  return (
    <article className="prose-content">
      <p className="lead">
        Cherchez « application mètre ruban » dans l'App Store et vous verrez vingt
        candidates. La plupart reposent sur le même framework ARKit. Les
        différences intéressantes tiennent à la façon dont elles gèrent les
        conditions imparfaites (faible luminosité, petites dimensions, grandes
        distances) et à ce que vous pouvez faire des mesures une fois capturées.
      </p>
      <p>
        Nous avons installé sept des applications de mesure les plus téléchargées
        sur le même iPhone 15 Pro et lancé la même série de tests dans les mêmes
        trois pièces pendant deux semaines. Voici ce qui a fonctionné, ce qui n'a
        pas marché et le point fort de chaque application.
      </p>

      <h2>Notre méthode de test</h2>
      <ul>
        <li>
          <strong>Même matériel.</strong> iPhone 15 Pro (LiDAR + puce A17), iOS
          18.3, conditions mixtes lumière du jour et intérieur.
        </li>
        <li>
          <strong>Même référence.</strong> Chaque dimension mesurée avec les
          applications, nous l'avons aussi mesurée avec un télémètre laser Bosch
          GLM 30 (précision annoncée ±1,5 mm). Les relevés laser font office de
          vérité terrain.
        </li>
        <li>
          <strong>Même jeu de tests.</strong> Largeurs de porte (76 cm), hauteurs
          de table (74 cm), longueurs de mur (4,2 m, 5,6 m), surfaces de pièce
          (15 m², 22 m²) et une diagonale piégeuse de 6,8 m.
        </li>
      </ul>

      <h2>Les applications testées</h2>
      <p>
        Apple Measure (intégrée), Ruler AR, MagicPlan, RoomScan Pro, AR Ruler App,
        AirMeasure et Tape Measure 3D.
      </p>

      <h2>Résultats de précision</h2>
      <p>
        Sur les courtes distances (moins de 1 m), les sept applications sont
        restées à ±5 mm de la référence laser. Le raycast AR sur une surface
        texturée à courte portée est cohérent d'une implémentation à l'autre :
        ARKit fait le gros du travail et les applications ne font qu'afficher le
        résultat.
      </p>
      <p>
        Sur les murs à l'échelle d'une pièce (4–6 m), la précision a divergé. Les
        meilleures applications utilisaient directement les données de profondeur
        LiDAR et restaient à ±15 mm. Les pires déduisaient la profondeur des seuls
        signaux de la caméra et dérivaient jusqu'à ±50 mm — correct pour
        l'aménagement de meubles, trop approximatif pour tout plan déposé en
        permis de construire.
      </p>
      <p>
        Sur la diagonale de 6,8 m de moquette (le test le plus difficile, la
        dérive AR s'accumulant avec la distance), seules deux applications sont
        restées à moins de 2 cm. Trois se sont trompées de 10 cm ou plus.
      </p>

      <h2>Points forts par application</h2>

      <h3>Apple Measure (intégrée)</h3>
      <p>
        <strong>Idéale pour :</strong> des mesures rapides ponctuelles quand vous
        ne voulez rien installer. <strong>À éviter si :</strong> vous devez
        enregistrer les résultats, mesurer une surface ou faire autre chose qu'une
        distance linéaire.
      </p>
      <p>
        Elle est gratuite, préinstallée et fonctionne. Mais pas d'historique de
        projets, pas d'export PDF, pas d'outil d'angle, pas de scanner de pièce.
        Vous mesurez quelque chose, vous faites une capture, et c'est tout.
      </p>

      <h3>Ruler AR</h3>
      <p>
        <strong>Idéale pour :</strong> l'éventail de fonctions le plus large dans
        une application gratuite — mesure par caméra AR, créateur de plan manuel
        (fonctionne sans LiDAR), scan de pièce LiDAR 3D, angles, surface, niveau,
        dossiers de projet, export PDF.
        <strong> À éviter si :</strong> vous voulez zéro publicité (la formule Pro
        les supprime).
      </p>
      <p>
        Elle s'est distinguée dans nos tests par son mode Touch (place le point de
        départ à la position du téléphone, éliminant l'erreur de raycast sur les
        courtes distances) et par son système de qualité adaptative qui réduit
        automatiquement la charge de la session sur les appareils chauds. Les
        plans s'exportent avec murs + portes + fenêtres mesurés dans un format PDF
        soigné.
      </p>

      <h3>MagicPlan</h3>
      <p>
        <strong>Idéale pour :</strong> des plans professionnels avec matériaux et
        estimations de coûts. <strong>À éviter si :</strong> vous êtes sensible au
        prix — l'abonnement pro est nettement plus cher que la concurrence.
      </p>
      <p>
        Puissante quand on s'y investit pleinement. Son outil d'estimation
        s'intègre à des bases de données de matériaux. Surdimensionnée pour des
        pièces isolées ; idéale pour les artisans qui enchaînent plusieurs
        chantiers par semaine.
      </p>

      <h3>RoomScan Pro</h3>
      <p>
        <strong>Idéale pour :</strong> des plans manuels très rapides en touchant
        le téléphone aux murs un par un.
        <strong> À éviter si :</strong> vous voulez le flux LiDAR — ils sont
        davantage centrés sur le flux « toucher le mur ».
      </p>

      <h3>AR Ruler App / AirMeasure / Tape Measure 3D</h3>
      <p>
        Fonctionnelles mais peu fournies. La mesure par caméra AR marche, les
        outils d'angle et de surface sont présents. Aucune n'a de créateur de plan
        manuel sans LiDAR. Aucune n'exporte en PDF. De solides solutions de
        secours si une application plus complète paraît écrasante.
      </p>

      <h2>La matrice de choix</h2>
      <table>
        <thead>
          <tr>
            <th>Vous avez besoin de…</th>
            <th>Utilisez…</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mesurer une seule chose, là, maintenant</td>
            <td>Apple Measure (déjà installée)</td>
          </tr>
          <tr>
            <td>Capturer une pièce entière, exportable, gratuit</td>
            <td>Ruler AR</td>
          </tr>
          <tr>
            <td>Estimations de matériaux + récapitulatif des coûts</td>
            <td>MagicPlan</td>
          </tr>
          <tr>
            <td>Un plan sans utiliser du tout la caméra AR</td>
            <td>RoomScan Pro (flux « toucher le mur »)</td>
          </tr>
          <tr>
            <td>Un rendu de qualité architecturale</td>
            <td>Aucune, utilisez un télémètre laser + CAO</td>
          </tr>
        </tbody>
      </table>

      <h2>Ce que les notes en étoiles de l'App Store ne disent pas</h2>
      <p>
        Les notes élevées sont dominées par des gens qui ont utilisé l'application
        une fois et chez qui elle a marché. Elles ne reflètent pas la tenue de
        l'application sur de longues sessions, ses plantages sur des téléphones
        plus anciens, ni si l'export produit réellement quelque chose qu'un
        artisan peut lire. Pendant nos tests, nous avons eu deux plantages sur des
        iPhone sans la mention Pro (ancien matériel 11 Pro). Les deux dans des
        applications sans gestion de performance adaptative : la session AR et un
        SDK publicitaire tournaient en même temps et le moteur était surchargé.
        Les applications qui réduisent la complexité de la scène selon l'état
        thermique ont tenu.
      </p>

      <h2>Notre choix</h2>
      <p>
        Pour la plupart des gens la plupart du temps : <strong>Ruler AR</strong>.
        La formule gratuite couvre le créateur de pièce manuel, la mesure par
        caméra, les angles, le niveau, la surface et l'export PDF. Scan LiDAR
        disponible sur le matériel compatible. Pas de publicité dans la formule
        Pro. La performance adaptative la garde stable sur les anciens appareils
        de 4 Go.
      </p>
      <p>
        Pour les professionnels qui mesurent pour gagner leur vie :
        <strong> MagicPlan</strong> si le budget le permet,
        <strong> Ruler Pro</strong> si le budget est serré. Les deux savent
        exporter les formats de plan que les artisans réclament vraiment.
      </p>
    </article>
  );
}

export function PostES() {
  return (
    <article className="prose-content">
      <p className="lead">
        Busca «app de cinta métrica» en la App Store y verás veinte candidatas. La
        mayoría usan el mismo framework ARKit por debajo. Las diferencias
        interesantes están en cómo manejan las condiciones imperfectas (poca luz,
        dimensiones pequeñas, distancias largas) y en lo que puedes hacer con las
        mediciones una vez capturadas.
      </p>
      <p>
        Instalamos siete de las apps de medición más descargadas en el mismo
        iPhone 15 Pro y corrimos la misma batería de pruebas en las mismas tres
        habitaciones durante dos semanas. A continuación, qué funcionó, qué no y en
        qué destaca cada app.
      </p>

      <h2>Cómo probamos</h2>
      <ul>
        <li>
          <strong>Mismo hardware.</strong> iPhone 15 Pro (LiDAR + chip A17), iOS
          18.3, condiciones mixtas de luz de día e interior.
        </li>
        <li>
          <strong>Misma referencia.</strong> Cada dimensión que medimos con las
          apps también la medimos con un medidor láser de distancia Bosch GLM 30
          (precisión declarada ±1,5 mm). Las lecturas del láser son la verdad de
          referencia.
        </li>
        <li>
          <strong>Mismo conjunto de pruebas.</strong> Anchos de puerta (76 cm),
          alturas de mesa (74 cm), longitudes de pared (4,2 m, 5,6 m), áreas de
          habitación (15 m², 22 m²) y una diagonal complicada de 6,8 m.
        </li>
      </ul>

      <h2>Las apps probadas</h2>
      <p>
        Apple Measure (integrada), Ruler AR, MagicPlan, RoomScan Pro, AR Ruler
        App, AirMeasure y Tape Measure 3D.
      </p>

      <h2>Resultados de precisión</h2>
      <p>
        En distancias cortas (menos de 1 m), las siete apps quedaron dentro de
        ±5 mm respecto a la referencia láser. El raycast AR sobre una superficie
        con textura a corta distancia es consistente entre implementaciones: ARKit
        hace el trabajo pesado y las apps solo muestran el resultado.
      </p>
      <p>
        En paredes a escala de habitación (4–6 m), la precisión se dispersó. Las
        mejores apps usaban directamente las lecturas de profundidad de LiDAR y se
        mantenían dentro de ±15 mm. Las peores inferían la profundidad solo a
        partir de señales de la cámara y se desviaban hasta ±50 mm — válido para
        planificar muebles, demasiado holgado para cualquier plano de licencia de
        obra.
      </p>
      <p>
        En la diagonal de 6,8 m de moqueta (la prueba más difícil, ya que la
        deriva AR se acumula con la distancia), solo dos apps quedaron dentro de
        2 cm. Tres fallaron por 10 cm o más.
      </p>

      <h2>Funciones destacadas por app</h2>

      <h3>Apple Measure (integrada)</h3>
      <p>
        <strong>Mejor para:</strong> mediciones rápidas puntuales cuando no
        quieres instalar nada. <strong>Sáltatela si:</strong> necesitas guardar
        los resultados, medir área o hacer algo más allá de la distancia lineal.
      </p>
      <p>
        Es gratis, viene preinstalada y funciona. Pero no hay historial de
        proyectos, ni exportación a PDF, ni herramienta de ángulos, ni escáner de
        habitaciones. Mides algo, haces una captura y se acabó.
      </p>

      <h3>Ruler AR</h3>
      <p>
        <strong>Mejor para:</strong> el conjunto de funciones más amplio en una
        app gratuita — medición con cámara AR, constructor manual de planos
        (funciona sin LiDAR), escaneo de habitación 3D con LiDAR, ángulos, área,
        nivel, carpetas de proyecto, exportación a PDF.
        <strong> Sáltatela si:</strong> quieres cero anuncios (el plan Pro los
        elimina).
      </p>
      <p>
        Destacó en nuestras pruebas por el modo Touch (coloca el punto de inicio en
        la posición del teléfono, eliminando el error de raycast en distancias
        cortas) y por el sistema de calidad adaptativa que reduce automáticamente
        la carga de la sesión en dispositivos calientes. Los planos se exportan con
        paredes + puertas + ventanas medidas en un formato PDF limpio.
      </p>

      <h3>MagicPlan</h3>
      <p>
        <strong>Mejor para:</strong> planos profesionales con materiales y
        estimaciones de costes. <strong>Sáltatela si:</strong> eres sensible al
        precio — la suscripción pro es bastante más cara que la competencia.
      </p>
      <p>
        Potente cuando te entregas del todo. Su herramienta de estimación se
        integra con bases de datos de materiales. Excesiva para habitaciones
        sueltas; ideal para contratistas con varios trabajos por semana.
      </p>

      <h3>RoomScan Pro</h3>
      <p>
        <strong>Mejor para:</strong> planos manuales muy rápidos tocando el
        teléfono contra las paredes una a una.
        <strong> Sáltatela si:</strong> quieres el flujo LiDAR — están más
        centrados en el flujo de «tocar la pared».
      </p>

      <h3>AR Ruler App / AirMeasure / Tape Measure 3D</h3>
      <p>
        Funcionales pero con pocas funciones. La medición con cámara AR funciona y
        hay herramientas de ángulo y área. Ninguna tiene un constructor manual de
        planos sin LiDAR. Ninguna exporta a PDF. Buenas alternativas de respaldo si
        una app más completa resulta abrumadora.
      </p>

      <h2>La matriz de elección</h2>
      <table>
        <thead>
          <tr>
            <th>Necesitas…</th>
            <th>Usa…</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Solo medir una cosa ahora mismo</td>
            <td>Apple Measure (ya instalada)</td>
          </tr>
          <tr>
            <td>Capturar la habitación entera, exportable, gratis</td>
            <td>Ruler AR</td>
          </tr>
          <tr>
            <td>Estimaciones de materiales + resumen de costes</td>
            <td>MagicPlan</td>
          </tr>
          <tr>
            <td>Plano sin usar para nada la cámara AR</td>
            <td>RoomScan Pro (flujo de «tocar la pared»)</td>
          </tr>
          <tr>
            <td>Resultado de calidad arquitectónica</td>
            <td>Ninguna, usa un medidor láser + CAD</td>
          </tr>
        </tbody>
      </table>

      <h2>Lo que no te dicen las valoraciones de estrellas de la App Store</h2>
      <p>
        Las valoraciones altas las dominan personas que usaron la app una vez y les
        funcionó. No reflejan cómo aguanta la app en sesiones largas, si se cierra
        en teléfonos antiguos o si la exportación produce realmente algo que un
        contratista pueda leer. Durante las pruebas tuvimos dos cierres en iPhone
        sin el distintivo Pro (hardware antiguo de 11 Pro). Ambos en apps sin
        gestión de rendimiento adaptativo: la sesión AR y un SDK de anuncios
        funcionaban a la vez y el motor se sobrecargaba. Las apps que reducen la
        complejidad de la escena según el estado térmico aguantaron.
      </p>

      <h2>Nuestra elección</h2>
      <p>
        Para la mayoría de la gente la mayor parte del tiempo: <strong>Ruler
        AR</strong>. El plan gratuito cubre el constructor manual de habitaciones,
        la medición con cámara, ángulos, nivel, área y exportación a PDF. Escaneo
        LiDAR disponible en hardware compatible. Sin anuncios en el plan Pro. El
        rendimiento adaptativo lo mantiene estable en dispositivos antiguos de
        4 GB.
      </p>
      <p>
        Para profesionales que miden para ganarse la vida: <strong>MagicPlan</strong>
        si el presupuesto lo permite, <strong>Ruler Pro</strong> si el presupuesto
        es ajustado. Ambas pueden exportar los formatos de plano que los
        contratistas realmente quieren.
      </p>
    </article>
  );
}

export function PostJA() {
  return (
    <article className="prose-content">
      <p className="lead">
        App Store で「メジャーアプリ」を検索すると、20 ほどの候補が並びます。その
        多くは同じ ARKit フレームワークを土台にしています。本当に差が出るのは、
        条件の悪い場面（暗い場所、小さな寸法、長い距離）への対応力と、計測した
        データを取り込んだあとに何ができるかという点です。
      </p>
      <p>
        私たちはダウンロード数の多い計測アプリ 7 本を同じ iPhone 15 Pro に入れ、
        同じ 3 つの部屋で同じ一連のテストを 2 週間かけて実施しました。以下では、
        何がうまくいき、何がダメで、各アプリが何に一番向いているかを紹介します。
      </p>

      <h2>テスト方法</h2>
      <ul>
        <li>
          <strong>同じハードウェア。</strong> iPhone 15 Pro（LiDAR + A17 チップ）、
          iOS 18.3、日中の光と室内が混在する条件。
        </li>
        <li>
          <strong>同じ基準。</strong> アプリで測ったすべての寸法を、Bosch GLM 30
          レーザー距離計（公称精度 ±1.5 mm）でも測定しました。レーザーの値が真の
          基準値です。
        </li>
        <li>
          <strong>同じテストセット。</strong> ドア幅（76 cm）、テーブルの高さ
          （74 cm）、壁の長さ（4.2 m、5.6 m）、部屋の面積（15 m²、22 m²）、そして
          6.8 m の手強い対角線が 1 本。
        </li>
      </ul>

      <h2>テストしたアプリ</h2>
      <p>
        Apple Measure（標準搭載）、Ruler AR、MagicPlan、RoomScan Pro、AR Ruler App、
        AirMeasure、Tape Measure 3D。
      </p>

      <h2>精度の結果</h2>
      <p>
        短い距離（1 m 未満）では、7 本すべてがレーザー基準値に対して ±5 mm 以内に
        収まりました。近距離でテクスチャのある面に対する AR レイキャストは、どの
        実装でも安定しています。重い処理は ARKit が担い、アプリはその結果を表示する
        だけだからです。
      </p>
      <p>
        部屋の幅ほどの壁（4〜6 m）になると、精度に差が出ました。優秀なアプリは
        LiDAR の深度データを直接使い、±15 mm 以内に収まりました。出来の悪いものは
        カメラだけの信号から深度を推定し、±50 mm までずれました。家具の配置検討には
        十分でも、建築確認用の図面にはとても使えません。
      </p>
      <p>
        カーペット上の 6.8 m の対角線（最難関のテスト。AR のドリフトは距離とともに
        累積します）では、2 cm 以内に収まったのはわずか 2 本だけ。3 本は 10 cm 以上も
        外しました。
      </p>

      <h2>アプリ別の際立った機能</h2>

      <h3>Apple Measure（標準搭載）</h3>
      <p>
        <strong>こんな人に：</strong> 何もインストールしたくないときの、一回限りの
        手早い計測に。<strong>避けるべき場合：</strong> 結果を保存したい、面積を
        測りたい、直線距離以外のことをしたいとき。
      </p>
      <p>
        無料で、最初から入っていて、ちゃんと動きます。ただしプロジェクト履歴も、
        PDF 書き出しも、角度ツールも、部屋スキャンもありません。何かを測って
        スクリーンショットを撮る、それで終わりです。
      </p>

      <h3>Ruler AR</h3>
      <p>
        <strong>こんな人に：</strong> 無料アプリの中で最も幅広い機能を求める人に。
        AR カメラ計測、手動の間取り作成（LiDAR なしでも動作）、3D の LiDAR 部屋
        スキャン、角度、面積、水準器、プロジェクトフォルダ、PDF 書き出し。
        <strong> 避けるべき場合：</strong> 広告をまったく出したくないとき
        （Pro プランで広告は消えます）。
      </p>
      <p>
        私たちのテストでは、Touch Mode（開始点をスマホの位置に置き、近距離の
        レイキャスト誤差をなくす）と、本体が熱を持つとセッション負荷を自動的に
        下げる適応品質システムが際立っていました。間取りは、計測済みの壁 + ドア +
        窓を含めて、すっきりとした PDF 形式で書き出せます。
      </p>

      <h3>MagicPlan</h3>
      <p>
        <strong>こんな人に：</strong> 材料と費用見積もりまで含む、プロ向けの間取り
        作成に。<strong>避けるべき場合：</strong> 価格に敏感なとき。プロ向けの
        サブスクは競合よりかなり高めです。
      </p>
      <p>
        本気で使い込むと強力です。見積もりツールは材料データベースと連携します。
        単発の部屋には大げさですが、週に何件もこなす職人には理想的です。
      </p>

      <h3>RoomScan Pro</h3>
      <p>
        <strong>こんな人に：</strong> スマホを壁に 1 枚ずつ当てていく、非常に
        素早い手動の間取り作成に。
        <strong> 避けるべき場合：</strong> LiDAR の流れがほしいとき。こちらは
        「壁に当てる」ワークフローに重きを置いています。
      </p>

      <h3>AR Ruler App / AirMeasure / Tape Measure 3D</h3>
      <p>
        使えますが機能は控えめです。AR カメラ計測は動き、角度と面積のツールも
        あります。どれも LiDAR なしの手動間取り作成は持っていません。どれも PDF
        書き出しはできません。機能の多いアプリが重く感じるなら、手堅い代替候補です。
      </p>

      <h2>選択マトリクス</h2>
      <table>
        <thead>
          <tr>
            <th>必要なもの…</th>
            <th>使うべきアプリ…</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>今すぐ何か 1 つだけ測りたい</td>
            <td>Apple Measure（すでに入っている）</td>
          </tr>
          <tr>
            <td>部屋全体を取り込み、書き出せて、無料</td>
            <td>Ruler AR</td>
          </tr>
          <tr>
            <td>材料の見積もり + 費用の集計</td>
            <td>MagicPlan</td>
          </tr>
          <tr>
            <td>AR カメラをまったく使わずに間取りを作りたい</td>
            <td>RoomScan Pro（「壁に当てる」ワークフロー）</td>
          </tr>
          <tr>
            <td>建築レベルの成果物</td>
            <td>該当なし。レーザー距離計 + CAD を使ってください</td>
          </tr>
        </tbody>
      </table>

      <h2>App Store の星評価が教えてくれないこと</h2>
      <p>
        高い星評価の多くは、一度使ってうまくいった人たちによるものです。長時間の
        セッションでどれだけ持ちこたえるか、古い端末でクラッシュしないか、書き出した
        ものが本当に職人に読める成果物になるかは、そこには表れません。テスト中、
        Pro が付かない iPhone（古い 11 Pro のハード）で 2 回クラッシュしました。
        どちらも適応的なパフォーマンス管理を持たないアプリで起きたもので、AR
        セッションと広告 SDK が同時に動き、エンジンが過負荷になったのです。
        熱状態に応じてシーンの複雑さを抑えるアプリは持ちこたえました。
      </p>

      <h2>私たちのおすすめ</h2>
      <p>
        ほとんどの人にとって、ほとんどの場面で：<strong>Ruler AR</strong>。無料
        プランで手動の部屋作成、カメラ計測、角度、水準器、面積、PDF 書き出しを
        カバーします。LiDAR スキャンは対応ハードで利用可能。Pro プランは広告なし。
        適応パフォーマンスにより、古い 4 GB 端末でも安定します。
      </p>
      <p>
        計測を仕事にするプロには：予算が許すなら <strong>MagicPlan</strong>、
        予算が厳しいなら <strong>Ruler Pro</strong>。どちらも、職人が本当に求める
        間取りの形式で書き出せます。
      </p>
    </article>
  );
}

export function PostKO() {
  return (
    <article className="prose-content">
      <p className="lead">
        App Store에서 「줄자 앱」을 검색하면 스무 개쯤 되는 후보가 나옵니다.
        대부분은 같은 ARKit 프레임워크를 바탕으로 합니다. 흥미로운 차이는 좋지
        않은 조건(어두운 조명, 작은 치수, 먼 거리)을 어떻게 다루는지, 그리고
        측정값을 일단 담은 뒤에 무엇을 할 수 있는지에 있습니다.
      </p>
      <p>
        우리는 다운로드 수가 많은 측정 앱 일곱 개를 같은 iPhone 15 Pro에 설치하고,
        같은 세 개의 방에서 같은 테스트 세트를 2주 동안 진행했습니다. 아래에서
        무엇이 잘 됐고, 무엇이 안 됐으며, 각 앱이 무엇에 가장 알맞은지 살펴봅니다.
      </p>

      <h2>테스트 방법</h2>
      <ul>
        <li>
          <strong>같은 하드웨어.</strong> iPhone 15 Pro(LiDAR + A17 칩), iOS 18.3,
          주광과 실내가 섞인 조건.
        </li>
        <li>
          <strong>같은 기준.</strong> 앱으로 측정한 모든 치수를 Bosch GLM 30
          레이저 거리계(공칭 정밀도 ±1.5 mm)로도 측정했습니다. 레이저 측정값이
          진정한 기준값입니다.
        </li>
        <li>
          <strong>같은 테스트 세트.</strong> 문 너비(76 cm), 테이블 높이(74 cm),
          벽 길이(4.2 m, 5.6 m), 방 면적(15 m², 22 m²), 그리고 까다로운 6.8 m
          대각선 하나.
        </li>
      </ul>

      <h2>테스트한 앱</h2>
      <p>
        Apple Measure(기본 내장), Ruler AR, MagicPlan, RoomScan Pro, AR Ruler App,
        AirMeasure, Tape Measure 3D.
      </p>

      <h2>정확도 결과</h2>
      <p>
        짧은 거리(1 m 미만)에서는 일곱 개 앱 모두 레이저 기준값 대비 ±5 mm 안에
        들어왔습니다. 근거리에서 질감이 있는 표면에 대한 AR 레이캐스트는 구현마다
        일관됩니다. 무거운 작업은 ARKit가 처리하고 앱은 그 결과만 보여 주기
        때문입니다.
      </p>
      <p>
        방 길이만 한 벽(4~6 m)에서는 정확도가 갈렸습니다. 가장 좋은 앱들은 LiDAR
        깊이 값을 직접 사용해 ±15 mm 안에 머물렀습니다. 가장 나쁜 앱들은 카메라
        신호만으로 깊이를 추정해 ±50 mm까지 벗어났습니다. 가구 배치에는 괜찮지만
        어떤 건축 허가 도면에도 쓰기엔 너무 헐겁습니다.
      </p>
      <p>
        카펫을 가로지르는 6.8 m 대각선(가장 어려운 테스트로, AR 드리프트가 거리에
        따라 누적됩니다)에서는 두 개 앱만 2 cm 안에 들어왔습니다. 세 개는 10 cm
        이상 빗나갔습니다.
      </p>

      <h2>앱별 두드러진 기능</h2>

      <h3>Apple Measure(기본 내장)</h3>
      <p>
        <strong>이럴 때 좋음:</strong> 아무것도 설치하고 싶지 않을 때의 일회성
        빠른 측정. <strong>건너뛰세요:</strong> 결과를 저장하거나, 면적을 재거나,
        직선 거리 이상의 작업을 해야 한다면.
      </p>
      <p>
        무료이고, 기본 설치돼 있으며, 작동합니다. 하지만 프로젝트 기록도, PDF
        내보내기도, 각도 도구도, 방 스캐너도 없습니다. 무언가를 측정하고
        스크린샷을 찍으면 그걸로 끝입니다.
      </p>

      <h3>Ruler AR</h3>
      <p>
        <strong>이럴 때 좋음:</strong> 무료 앱 중 가장 폭넓은 기능 세트 — AR
        카메라 측정, 수동 평면도 작성기(LiDAR 없이 작동), 3D LiDAR 방 스캔, 각도,
        면적, 수평계, 프로젝트 폴더, PDF 내보내기.
        <strong> 건너뛰세요:</strong> 광고를 완전히 없애고 싶다면(Pro 등급이
        광고를 제거합니다).
      </p>
      <p>
        우리 테스트에서는 Touch Mode(시작점을 휴대폰 위치에 두어 근거리 레이캐스트
        오차를 없앰)와, 기기가 뜨거워지면 세션 부하를 자동으로 줄이는 적응형 품질
        시스템이 두드러졌습니다. 평면도는 측정된 벽 + 문 + 창문과 함께 깔끔한 PDF
        형식으로 내보내집니다.
      </p>

      <h3>MagicPlan</h3>
      <p>
        <strong>이럴 때 좋음:</strong> 자재와 비용 견적까지 포함하는 전문가용
        평면도. <strong>건너뛰세요:</strong> 가격에 민감하다면 — 프로 구독료가
        경쟁 앱보다 상당히 비쌉니다.
      </p>
      <p>
        제대로 파고들면 강력합니다. 견적 도구가 자재 데이터베이스와 연동됩니다.
        방 하나에는 과하지만, 한 주에 여러 현장을 도는 시공자에게는 이상적입니다.
      </p>

      <h3>RoomScan Pro</h3>
      <p>
        <strong>이럴 때 좋음:</strong> 휴대폰을 벽에 하나씩 대어 만드는 아주 빠른
        수동 평면도.
        <strong> 건너뛰세요:</strong> LiDAR 흐름을 원한다면 — 이 앱은 「벽에 대기」
        방식에 더 집중합니다.
      </p>

      <h3>AR Ruler App / AirMeasure / Tape Measure 3D</h3>
      <p>
        쓸 수는 있지만 기능이 가볍습니다. AR 카메라 측정은 작동하고, 각도와 면적
        도구도 있습니다. 어느 것도 LiDAR 없는 수동 평면도 작성기는 없습니다. 어느
        것도 PDF를 내보내지 못합니다. 기능이 많은 앱이 부담스럽게 느껴진다면 든든한
        대안입니다.
      </p>

      <h2>선택 매트릭스</h2>
      <table>
        <thead>
          <tr>
            <th>필요한 것…</th>
            <th>사용할 것…</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>지금 당장 한 가지만 측정</td>
            <td>Apple Measure(이미 설치됨)</td>
          </tr>
          <tr>
            <td>방 전체를 담고, 내보내기 가능, 무료</td>
            <td>Ruler AR</td>
          </tr>
          <tr>
            <td>자재 견적 + 비용 합산</td>
            <td>MagicPlan</td>
          </tr>
          <tr>
            <td>AR 카메라를 전혀 쓰지 않는 평면도</td>
            <td>RoomScan Pro(「벽에 대기」 방식)</td>
          </tr>
          <tr>
            <td>건축 수준의 결과물</td>
            <td>없음, 레이저 거리계 + CAD를 쓰세요</td>
          </tr>
        </tbody>
      </table>

      <h2>App Store 별점이 알려 주지 않는 것</h2>
      <p>
        높은 별점은 앱을 한 번 써서 잘 작동한 사람들이 주도합니다. 긴 세션에서
        얼마나 버티는지, 오래된 폰에서 충돌하는지, 내보내기가 정말 시공자가 읽을 수
        있는 결과물을 만드는지는 거기에 담기지 않습니다. 테스트 중 Pro가 붙지 않은
        iPhone(오래된 11 Pro 하드웨어)에서 두 번 충돌을 겪었습니다. 둘 다 적응형
        성능 관리가 없는 앱에서였고, AR 세션과 광고 SDK가 동시에 돌면서 엔진이
        과부하됐습니다. 열 상태에 따라 장면 복잡도를 낮추는 앱은 버텼습니다.
      </p>

      <h2>우리의 선택</h2>
      <p>
        대부분의 사람에게, 대부분의 경우: <strong>Ruler AR</strong>. 무료 등급은
        수동 방 작성기, 카메라 측정, 각도, 수평계, 면적, PDF 내보내기를 모두
        포함합니다. LiDAR 스캔은 지원 하드웨어에서 가능합니다. Pro 등급에는 광고가
        없습니다. 적응형 성능 덕분에 오래된 4 GB 기기에서도 안정적입니다.
      </p>
      <p>
        측정으로 먹고사는 전문가에게는: 예산이 허락하면 <strong>MagicPlan</strong>,
        예산이 빠듯하면 <strong>Ruler Pro</strong>. 둘 다 시공자가 실제로 원하는
        평면도 형식으로 내보낼 수 있습니다.
      </p>
    </article>
  );
}

export function PostZH() {
  return (
    <article className="prose-content">
      <p className="lead">
        在 App Store 搜索「卷尺应用」，你会看到二十个候选。它们大多基于同一个
        ARKit 框架。真正有意思的差别在于：它们如何应对不理想的条件（光线昏暗、
        尺寸很小、距离很长），以及测量数据采集之后你能拿它做什么。
      </p>
      <p>
        我们把下载量最高的七款测量应用装在同一部 iPhone 15 Pro 上，在同样的三个
        房间里用同一套测试跑了两周。下面是哪些好用、哪些不行，以及每款应用最擅长
        什么。
      </p>

      <h2>我们如何测试</h2>
      <ul>
        <li>
          <strong>同样的硬件。</strong> iPhone 15 Pro（LiDAR + A17 芯片），iOS
          18.3，白天采光与室内的混合条件。
        </li>
        <li>
          <strong>同样的基准。</strong> 用应用测的每一个尺寸，我们也用 Bosch GLM
          30 激光测距仪（标称精度 ±1.5 mm）测了一遍。激光读数就是真值基准。
        </li>
        <li>
          <strong>同样的测试集。</strong> 门宽（76 cm）、桌高（74 cm）、墙长
          （4.2 m、5.6 m）、房间面积（15 m²、22 m²），以及一条棘手的 6.8 m 对角线。
        </li>
      </ul>

      <h2>受测的应用</h2>
      <p>
        Apple Measure（系统自带）、Ruler AR、MagicPlan、RoomScan Pro、AR Ruler
        App、AirMeasure 和 Tape Measure 3D。
      </p>

      <h2>精度结果</h2>
      <p>
        短距离（1 m 以内）下，七款应用都落在激光基准的 ±5 mm 之内。近距离对带纹理
        表面的 AR 射线投射在各种实现中都很一致：重活由 ARKit 完成，应用只是把结果
        显示出来。
      </p>
      <p>
        到了房间尺度的墙（4–6 m），精度就分化了。最好的应用直接使用 LiDAR 深度
        读数，保持在 ±15 mm 之内。最差的仅凭摄像头信号推断深度，漂移到 ±50 mm——
        摆家具够用，但用于任何报建图纸都太宽松了。
      </p>
      <p>
        在地毯上 6.8 m 的对角线（最难的测试，AR 漂移会随距离累积）中，只有两款应用
        保持在 2 cm 以内。三款偏差达到 10 cm 甚至更多。
      </p>

      <h2>各应用的亮点功能</h2>

      <h3>Apple Measure（系统自带）</h3>
      <p>
        <strong>最适合：</strong> 不想装任何东西时的一次性快速测量。
        <strong>不建议：</strong> 你需要保存结果、测量面积，或做线性距离以外的任何
        事情。
      </p>
      <p>
        免费、预装、能用。但没有项目记录，没有 PDF 导出，没有角度工具，没有房间
        扫描。你测点东西，截个图，就这样了。
      </p>

      <h3>Ruler AR</h3>
      <p>
        <strong>最适合：</strong> 免费应用里功能最全的一款——AR 相机测量、手动
        户型图构建（无需 LiDAR 也能用）、3D LiDAR 房间扫描、角度、面积、水平仪、
        项目文件夹、PDF 导出。
        <strong> 不建议：</strong> 你想要完全没有广告（Pro 档会移除广告）。
      </p>
      <p>
        在我们的测试中，它凭借 Touch Mode（把起点放在手机所在位置，消除短距离射线
        投射误差）和自适应画质系统（在设备发热时自动降低会话负载）而脱颖而出。
        户型图可连同测量好的墙 + 门 + 窗一起导出为干净的 PDF 格式。
      </p>

      <h3>MagicPlan</h3>
      <p>
        <strong>最适合：</strong> 带材料和造价估算的专业户型图。
        <strong>不建议：</strong> 对价格敏感——其专业订阅明显比同类更贵。
      </p>
      <p>
        全身心投入时非常强大。它的估算工具可对接材料数据库。对单个房间是杀鸡用
        牛刀；对每周接多个活的承包商则非常理想。
      </p>

      <h3>RoomScan Pro</h3>
      <p>
        <strong>最适合：</strong> 把手机逐面贴到墙上、非常快速地手动出户型图。
        <strong> 不建议：</strong> 你想要 LiDAR 流程——它们更专注于「贴墙」工作流。
      </p>

      <h3>AR Ruler App / AirMeasure / Tape Measure 3D</h3>
      <p>
        能用，但功能偏少。AR 相机测量可用，角度和面积工具都有。它们都没有无需
        LiDAR 的手动户型图构建。都不能导出 PDF。如果功能更全的应用让你觉得吃不消，
        它们是稳妥的备选。
      </p>

      <h2>选择矩阵</h2>
      <table>
        <thead>
          <tr>
            <th>你需要……</th>
            <th>使用……</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>现在就只量一样东西</td>
            <td>Apple Measure（已经装好）</td>
          </tr>
          <tr>
            <td>捕捉整个房间、可导出、免费</td>
            <td>Ruler AR</td>
          </tr>
          <tr>
            <td>材料估算 + 造价汇总</td>
            <td>MagicPlan</td>
          </tr>
          <tr>
            <td>完全不用 AR 相机也能出户型图</td>
            <td>RoomScan Pro（「贴墙」工作流）</td>
          </tr>
          <tr>
            <td>建筑级别的成果</td>
            <td>没有，请用激光测距仪 + CAD</td>
          </tr>
        </tbody>
      </table>

      <h2>App Store 星级评分不会告诉你的事</h2>
      <p>
        高星评分大多来自只用过一次、而且正好好用的人。它们反映不出应用在长时间
        会话下的稳定性，会不会在旧手机上崩溃，也反映不出导出的东西是不是真能让
        承包商看懂。测试中我们在没有 Pro 后缀的 iPhone（较旧的 11 Pro 硬件）上遇到
        两次崩溃。两次都发生在没有自适应性能管理的应用里：AR 会话和广告 SDK 同时
        运行，引擎过载了。会根据热状态压低场景复杂度的应用则撑住了。
      </p>

      <h2>我们的推荐</h2>
      <p>
        对大多数人、大多数时候：<strong>Ruler AR</strong>。免费档涵盖手动房间
        构建、相机测量、角度、水平仪、面积和 PDF 导出。LiDAR 扫描在支持的硬件上
        可用。Pro 档没有广告。自适应性能让它在较旧的 4 GB 设备上保持稳定。
      </p>
      <p>
        对靠测量谋生的专业人士：预算允许就选 <strong>MagicPlan</strong>，预算紧张
        就选 <strong>Ruler Pro</strong>。两者都能导出承包商真正想要的户型图格式。
      </p>
    </article>
  );
}

export function PostPT() {
  return (
    <article className="prose-content">
      <p className="lead">
        Pesquise «app de trena» na App Store e você verá vinte candidatos. A
        maioria usa o mesmo framework ARKit por baixo. As diferenças interessantes
        estão em como eles lidam com condições imperfeitas (pouca luz, dimensões
        pequenas, distâncias longas) e no que você consegue fazer com as medições
        depois de capturá-las.
      </p>
      <p>
        Instalamos sete dos apps de medição mais baixados no mesmo iPhone 15 Pro e
        rodamos o mesmo conjunto de testes nos mesmos três cômodos durante duas
        semanas. Abaixo está o que funcionou, o que não funcionou e em que cada app
        é melhor.
      </p>

      <h2>Como testamos</h2>
      <ul>
        <li>
          <strong>Mesmo hardware.</strong> iPhone 15 Pro (LiDAR + chip A17), iOS
          18.3, condições mistas de luz do dia e ambiente interno.
        </li>
        <li>
          <strong>Mesma referência.</strong> Cada dimensão que medimos com os apps
          também medimos com um medidor de distância a laser Bosch GLM 30
          (precisão declarada ±1,5 mm). As leituras do laser são a verdade de
          referência.
        </li>
        <li>
          <strong>Mesmo conjunto de testes.</strong> Larguras de porta (76 cm),
          alturas de mesa (74 cm), comprimentos de parede (4,2 m, 5,6 m), áreas de
          cômodo (15 m², 22 m²) e uma diagonal complicada de 6,8 m.
        </li>
      </ul>

      <h2>Os apps testados</h2>
      <p>
        Apple Measure (nativo), Ruler AR, MagicPlan, RoomScan Pro, AR Ruler App,
        AirMeasure e Tape Measure 3D.
      </p>

      <h2>Resultados de precisão</h2>
      <p>
        Em distâncias curtas (menos de 1 m), os sete apps ficaram dentro de ±5 mm
        da referência a laser. O raycast AR sobre uma superfície texturizada a
        curta distância é consistente entre as implementações: o ARKit faz o
        trabalho pesado e os apps apenas exibem o resultado.
      </p>
      <p>
        Em paredes do tamanho de um cômodo (4–6 m), a precisão divergiu. Os
        melhores apps usavam as leituras de profundidade do LiDAR diretamente e
        ficavam dentro de ±15 mm. Os piores inferiam a profundidade apenas a partir
        de sinais da câmera e desviavam até ±50 mm — aceitável para planejar
        móveis, frouxo demais para qualquer planta de alvará de obra.
      </p>
      <p>
        Na diagonal de 6,8 m sobre carpete (o teste mais difícil, pois a deriva do
        AR se acumula com a distância), apenas dois apps ficaram dentro de 2 cm.
        Três erraram por 10 cm ou mais.
      </p>

      <h2>Recursos de destaque por app</h2>

      <h3>Apple Measure (nativo)</h3>
      <p>
        <strong>Melhor para:</strong> medições rápidas e pontuais quando você não
        quer instalar nada. <strong>Pule se:</strong> você precisa salvar os
        resultados, medir área ou fazer algo além da distância linear.
      </p>
      <p>
        É grátis, vem pré-instalado e funciona. Mas não há histórico de projetos,
        nem exportação para PDF, nem ferramenta de ângulo, nem scanner de cômodo.
        Você mede algo, tira uma captura de tela e pronto.
      </p>

      <h3>Ruler AR</h3>
      <p>
        <strong>Melhor para:</strong> o conjunto de recursos mais amplo em um app
        gratuito — medição por câmera AR, construtor manual de planta (funciona sem
        LiDAR), escaneamento 3D do cômodo com LiDAR, ângulos, área, nível, pastas
        de projeto, exportação para PDF.
        <strong> Pule se:</strong> você quer zero anúncios (o plano Pro os remove).
      </p>
      <p>
        Destacou-se em nossos testes pelo Touch Mode (coloca o ponto inicial na
        posição do telefone, eliminando o erro de raycast em distâncias curtas) e
        pelo sistema de qualidade adaptativa que reduz automaticamente a carga da
        sessão em dispositivos aquecidos. As plantas são exportadas com paredes +
        portas + janelas medidas em um formato PDF limpo.
      </p>

      <h3>MagicPlan</h3>
      <p>
        <strong>Melhor para:</strong> plantas profissionais com materiais e
        estimativas de custo. <strong>Pule se:</strong> você é sensível a preço — a
        assinatura pro é bem mais cara que a concorrência.
      </p>
      <p>
        Poderoso quando você se dedica de verdade. A ferramenta de estimativa se
        integra a bancos de dados de materiais. Exagero para cômodos isolados;
        ideal para empreiteiros que fazem vários serviços por semana.
      </p>

      <h3>RoomScan Pro</h3>
      <p>
        <strong>Melhor para:</strong> plantas manuais bem rápidas, encostando o
        telefone nas paredes uma de cada vez.
        <strong> Pule se:</strong> você quer o fluxo com LiDAR — eles são mais
        focados no fluxo de «encostar na parede».
      </p>

      <h3>AR Ruler App / AirMeasure / Tape Measure 3D</h3>
      <p>
        Funcionais, mas com poucos recursos. A medição por câmera AR funciona, e há
        ferramentas de ângulo e área. Nenhum tem construtor manual de planta sem
        LiDAR. Nenhum exporta PDF. Boas alternativas de reserva se um app mais
        completo parecer demais.
      </p>

      <h2>A matriz de escolha</h2>
      <table>
        <thead>
          <tr>
            <th>Você precisa de…</th>
            <th>Use…</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Só medir uma coisa agora mesmo</td>
            <td>Apple Measure (já instalado)</td>
          </tr>
          <tr>
            <td>Capturar o cômodo inteiro, exportável, grátis</td>
            <td>Ruler AR</td>
          </tr>
          <tr>
            <td>Estimativas de materiais + total de custos</td>
            <td>MagicPlan</td>
          </tr>
          <tr>
            <td>Planta sem usar a câmera AR de jeito nenhum</td>
            <td>RoomScan Pro (fluxo de «encostar na parede»)</td>
          </tr>
          <tr>
            <td>Resultado de nível arquitetônico</td>
            <td>Nenhum, use um medidor a laser + CAD</td>
          </tr>
        </tbody>
      </table>

      <h2>O que as avaliações em estrelas da App Store não contam</h2>
      <p>
        As notas altas são dominadas por pessoas que usaram o app uma vez e ele
        funcionou. Elas não captam quão bem o app aguenta em sessões longas, se
        trava em telefones mais antigos ou se a exportação realmente produz algo que
        um empreiteiro consiga ler. Durante os testes tivemos dois travamentos em
        iPhones sem o sufixo Pro (hardware antigo do 11 Pro). Ambos em apps sem
        gerenciamento de desempenho adaptativo: a sessão AR e um SDK de anúncios
        rodavam ao mesmo tempo e o motor sobrecarregava. Apps que reduzem a
        complexidade da cena conforme o estado térmico aguentaram.
      </p>

      <h2>Nossa escolha</h2>
      <p>
        Para a maioria das pessoas na maior parte do tempo: <strong>Ruler
        AR</strong>. O plano gratuito cobre construtor manual de cômodo, medição por
        câmera, ângulos, nível, área e exportação para PDF. Escaneamento LiDAR
        disponível em hardware compatível. Sem anúncios no plano Pro. O desempenho
        adaptativo o mantém estável em dispositivos antigos de 4 GB.
      </p>
      <p>
        Para profissionais que medem para viver: <strong>MagicPlan</strong> se o
        orçamento permitir, <strong>Ruler Pro</strong> se o orçamento for apertado.
        Ambos conseguem exportar os formatos de planta que os empreiteiros
        realmente querem.
      </p>
    </article>
  );
}

export function PostIT() {
  return (
    <article className="prose-content">
      <p className="lead">
        Cerca «app metro» nell'App Store e troverai venti candidate. La maggior
        parte usa lo stesso framework ARKit alla base. Le differenze interessanti
        stanno nel modo in cui gestiscono le condizioni imperfette (poca luce,
        dimensioni piccole, distanze lunghe) e in cosa puoi fare con le misure una
        volta acquisite.
      </p>
      <p>
        Abbiamo installato sette delle app di misurazione più scaricate sullo
        stesso iPhone 15 Pro e abbiamo eseguito la stessa serie di test nelle stesse
        tre stanze per due settimane. Qui sotto trovi cosa ha funzionato, cosa no e
        in cosa eccelle ciascuna app.
      </p>

      <h2>Come abbiamo testato</h2>
      <ul>
        <li>
          <strong>Stesso hardware.</strong> iPhone 15 Pro (LiDAR + chip A17), iOS
          18.3, condizioni miste di luce diurna e interni.
        </li>
        <li>
          <strong>Stesso riferimento.</strong> Ogni dimensione misurata con le app
          l'abbiamo misurata anche con un misuratore laser Bosch GLM 30 (precisione
          dichiarata ±1,5 mm). Le letture del laser sono il valore di riferimento.
        </li>
        <li>
          <strong>Stesso set di test.</strong> Larghezze delle porte (76 cm),
          altezze dei tavoli (74 cm), lunghezze delle pareti (4,2 m, 5,6 m), aree
          delle stanze (15 m², 22 m²) e una diagonale insidiosa di 6,8 m.
        </li>
      </ul>

      <h2>Le app testate</h2>
      <p>
        Apple Measure (integrata), Ruler AR, MagicPlan, RoomScan Pro, AR Ruler App,
        AirMeasure e Tape Measure 3D.
      </p>

      <h2>Risultati di precisione</h2>
      <p>
        Sulle distanze brevi (sotto 1 m), tutte e sette le app sono rientrate entro
        ±5 mm dal riferimento laser. Il raycast AR su una superficie testurizzata a
        breve distanza è coerente tra le varie implementazioni: ARKit fa il lavoro
        pesante e le app si limitano a mostrare il risultato.
      </p>
      <p>
        Sulle pareti grandi quanto una stanza (4–6 m) la precisione si è divisa. Le
        app migliori usavano direttamente le letture di profondità del LiDAR e
        restavano entro ±15 mm. Le peggiori deducevano la profondità dai soli
        segnali della fotocamera e derivavano fino a ±50 mm — accettabile per
        disporre i mobili, troppo approssimativo per qualsiasi disegno da permesso
        edilizio.
      </p>
      <p>
        Sulla diagonale di 6,8 m sulla moquette (il test più difficile, perché la
        deriva AR si accumula con la distanza) solo due app sono rimaste entro 2 cm.
        Tre hanno sbagliato di 10 cm o più.
      </p>

      <h2>Funzioni di spicco per app</h2>

      <h3>Apple Measure (integrata)</h3>
      <p>
        <strong>Ideale per:</strong> misurazioni veloci e occasionali quando non
        vuoi installare nulla. <strong>Da evitare se:</strong> devi salvare i
        risultati, misurare un'area o fare qualcosa oltre alla distanza lineare.
      </p>
      <p>
        È gratuita, è preinstallata e funziona. Ma non c'è cronologia dei progetti,
        né esportazione PDF, né strumento angoli, né scanner della stanza. Misuri
        qualcosa, fai uno screenshot e finisce lì.
      </p>

      <h3>Ruler AR</h3>
      <p>
        <strong>Ideale per:</strong> il set di funzioni più ampio in un'app
        gratuita — misurazione con fotocamera AR, costruttore manuale di planimetria
        (funziona senza LiDAR), scansione 3D della stanza con LiDAR, angoli, area,
        livella, cartelle progetto, esportazione PDF.
        <strong> Da evitare se:</strong> vuoi zero pubblicità (il piano Pro la
        rimuove).
      </p>
      <p>
        Nei nostri test si è distinta per la Touch Mode (mette il punto di partenza
        nella posizione del telefono, eliminando l'errore di raycast sulle distanze
        brevi) e per il sistema di qualità adattiva che riduce automaticamente il
        carico della sessione sui dispositivi caldi. Le planimetrie si esportano con
        pareti + porte + finestre misurate in un formato PDF pulito.
      </p>

      <h3>MagicPlan</h3>
      <p>
        <strong>Ideale per:</strong> planimetrie professionali con materiali e
        preventivi di costo. <strong>Da evitare se:</strong> sei sensibile al
        prezzo — l'abbonamento pro è nettamente più caro della concorrenza.
      </p>
      <p>
        Potente quando ci si butta a fondo. Il suo strumento di preventivo si integra
        con database di materiali. Eccessivo per singole stanze; ideale per artigiani
        che fanno più lavori a settimana.
      </p>

      <h3>RoomScan Pro</h3>
      <p>
        <strong>Ideale per:</strong> planimetrie manuali rapidissime toccando il
        telefono alle pareti una alla volta.
        <strong> Da evitare se:</strong> vuoi il flusso LiDAR — qui ci si concentra
        di più sul flusso «tocca la parete».
      </p>

      <h3>AR Ruler App / AirMeasure / Tape Measure 3D</h3>
      <p>
        Funzionali ma povere di funzioni. La misurazione con fotocamera AR va, gli
        strumenti angolo e area ci sono. Nessuna ha un costruttore manuale di
        planimetria senza LiDAR. Nessuna esporta in PDF. Solide alternative di
        riserva se un'app più completa risulta opprimente.
      </p>

      <h2>La matrice di scelta</h2>
      <table>
        <thead>
          <tr>
            <th>Ti serve…</th>
            <th>Usa…</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Misurare solo una cosa proprio adesso</td>
            <td>Apple Measure (già installata)</td>
          </tr>
          <tr>
            <td>Catturare l'intera stanza, esportabile, gratis</td>
            <td>Ruler AR</td>
          </tr>
          <tr>
            <td>Stime dei materiali + riepilogo costi</td>
            <td>MagicPlan</td>
          </tr>
          <tr>
            <td>Planimetria senza usare affatto la fotocamera AR</td>
            <td>RoomScan Pro (flusso «tocca la parete»)</td>
          </tr>
          <tr>
            <td>Output di livello architettonico</td>
            <td>Nessuna, usa un misuratore laser + CAD</td>
          </tr>
        </tbody>
      </table>

      <h2>Cosa non ti dicono le valutazioni a stelle dell'App Store</h2>
      <p>
        Le valutazioni alte sono dominate da chi ha usato l'app una volta e ha
        funzionato. Non colgono quanto bene l'app regge nelle sessioni lunghe, se va
        in crash su telefoni più vecchi o se l'esportazione produce davvero qualcosa
        che un artigiano riesce a leggere. Durante i test abbiamo avuto due crash su
        iPhone senza il suffisso Pro (vecchio hardware 11 Pro). Entrambi in app senza
        gestione adattiva delle prestazioni: la sessione AR e un SDK pubblicitario
        giravano insieme e il motore andava in sovraccarico. Le app che riducono la
        complessità della scena in base allo stato termico hanno retto.
      </p>

      <h2>La nostra scelta</h2>
      <p>
        Per la maggior parte delle persone nella maggior parte dei casi:
        <strong> Ruler AR</strong>. Il piano gratuito copre il costruttore manuale
        della stanza, la misurazione con fotocamera, gli angoli, la livella, l'area
        e l'esportazione PDF. Scansione LiDAR disponibile su hardware compatibile.
        Nessuna pubblicità nel piano Pro. Le prestazioni adattive lo mantengono
        stabile sui vecchi dispositivi da 4 GB.
      </p>
      <p>
        Per i professionisti che misurano per mestiere: <strong>MagicPlan</strong>
        se il budget lo consente, <strong>Ruler Pro</strong> se il budget è
        limitato. Entrambe sanno esportare i formati di planimetria che gli artigiani
        vogliono davvero.
      </p>
    </article>
  );
}

export function PostPL() {
  return (
    <article className="prose-content">
      <p className="lead">
        Wyszukaj „aplikacja miarka" w App Store, a zobaczysz dwadzieścia
        kandydatek. Większość opiera się na tym samym frameworku ARKit. Ciekawe
        różnice tkwią w tym, jak radzą sobie z niedoskonałymi warunkami (słabe
        światło, małe wymiary, duże odległości) i co można zrobić z pomiarami, gdy
        już zostaną przechwycone.
      </p>
      <p>
        Zainstalowaliśmy siedem najczęściej pobieranych aplikacji pomiarowych na
        tym samym iPhonie 15 Pro i przez dwa tygodnie przeprowadziliśmy ten sam
        zestaw testów w tych samych trzech pomieszczeniach. Poniżej: co zadziałało,
        co nie, i w czym każda aplikacja jest najlepsza.
      </p>

      <h2>Jak testowaliśmy</h2>
      <ul>
        <li>
          <strong>Ten sam sprzęt.</strong> iPhone 15 Pro (LiDAR + układ A17), iOS
          18.3, mieszane warunki: światło dzienne i wnętrze.
        </li>
        <li>
          <strong>Ten sam punkt odniesienia.</strong> Każdy wymiar zmierzony
          aplikacjami zmierzyliśmy również dalmierzem laserowym Bosch GLM 30
          (deklarowana dokładność ±1,5 mm). Odczyty lasera to prawda odniesienia.
        </li>
        <li>
          <strong>Ten sam zestaw testów.</strong> Szerokości drzwi (76 cm),
          wysokości stołów (74 cm), długości ścian (4,2 m, 5,6 m), powierzchnie
          pomieszczeń (15 m², 22 m²) oraz jedna podchwytliwa przekątna 6,8 m.
        </li>
      </ul>

      <h2>Testowane aplikacje</h2>
      <p>
        Apple Measure (wbudowana), Ruler AR, MagicPlan, RoomScan Pro, AR Ruler App,
        AirMeasure i Tape Measure 3D.
      </p>

      <h2>Wyniki dokładności</h2>
      <p>
        Na krótkich dystansach (poniżej 1 m) wszystkie siedem aplikacji zmieściło
        się w ±5 mm względem odniesienia laserowego. Raycast AR na teksturowanej
        powierzchni z bliska jest spójny we wszystkich implementacjach: ARKit
        wykonuje ciężką robotę, a aplikacje jedynie pokazują wynik.
      </p>
      <p>
        Na ścianach długości pomieszczenia (4–6 m) dokładność się rozjechała.
        Najlepsze aplikacje korzystały bezpośrednio z odczytów głębi LiDAR i
        utrzymywały się w ±15 mm. Najgorsze wnioskowały głębię wyłącznie z sygnałów
        kamery i odchylały się aż do ±50 mm — w sam raz do rozmieszczania mebli, za
        luźno do jakiegokolwiek rysunku pod pozwolenie na budowę.
      </p>
      <p>
        Na przekątnej 6,8 m po dywanie (najtrudniejszy test, bo dryf AR kumuluje się
        z odległością) tylko dwie aplikacje zmieściły się w 2 cm. Trzy pomyliły się
        o 10 cm lub więcej.
      </p>

      <h2>Wyróżniające się funkcje według aplikacji</h2>

      <h3>Apple Measure (wbudowana)</h3>
      <p>
        <strong>Najlepsza do:</strong> jednorazowych szybkich pomiarów, gdy nie
        chcesz nic instalować. <strong>Pomiń, jeśli:</strong> musisz zapisać wyniki,
        zmierzyć powierzchnię lub zrobić cokolwiek poza odległością liniową.
      </p>
      <p>
        Jest darmowa, fabrycznie zainstalowana i działa. Ale nie ma historii
        projektów, eksportu do PDF, narzędzia kątów ani skanera pomieszczeń. Mierzysz
        coś, robisz zrzut ekranu i tyle.
      </p>

      <h3>Ruler AR</h3>
      <p>
        <strong>Najlepsza do:</strong> najszerszego zestawu funkcji w darmowej
        aplikacji — pomiar kamerą AR, ręczny kreator rzutu (działa bez LiDAR),
        skanowanie pomieszczenia 3D z LiDAR, kąty, powierzchnia, poziomica, foldery
        projektów, eksport do PDF.
        <strong> Pomiń, jeśli:</strong> chcesz zero reklam (plan Pro je usuwa).
      </p>
      <p>
        W naszych testach wyróżniła się trybem Touch Mode (umieszcza punkt startowy w
        pozycji telefonu, eliminując błąd raycastu na krótkich dystansach) oraz
        systemem adaptacyjnej jakości, który automatycznie zmniejsza obciążenie sesji
        na rozgrzanych urządzeniach. Rzuty eksportowane są ze zmierzonymi ścianami +
        drzwiami + oknami w schludnym formacie PDF.
      </p>

      <h3>MagicPlan</h3>
      <p>
        <strong>Najlepsza do:</strong> profesjonalnych rzutów z materiałami i
        kosztorysami. <strong>Pomiń, jeśli:</strong> jesteś wrażliwy na cenę —
        subskrypcja pro jest znacznie droższa od konkurencji.
      </p>
      <p>
        Potężna, gdy wejdziesz w to na całość. Jej narzędzie kosztorysowe integruje
        się z bazami materiałów. Przesada przy pojedynczych pomieszczeniach; idealna
        dla wykonawców mających po kilka zleceń tygodniowo.
      </p>

      <h3>RoomScan Pro</h3>
      <p>
        <strong>Najlepsza do:</strong> bardzo szybkich ręcznych rzutów przez
        dotykanie telefonem ścian po kolei.
        <strong> Pomiń, jeśli:</strong> chcesz przepływu z LiDAR — tutaj nacisk pada
        bardziej na podejście „dotknij ściany".
      </p>

      <h3>AR Ruler App / AirMeasure / Tape Measure 3D</h3>
      <p>
        Działają, ale są ubogie w funkcje. Pomiar kamerą AR działa, narzędzia kąta i
        powierzchni są dostępne. Żadna nie ma ręcznego kreatora rzutu bez LiDAR.
        Żadna nie eksportuje do PDF. Solidne rozwiązania awaryjne, jeśli bogatsza
        aplikacja wydaje się przytłaczająca.
      </p>

      <h2>Macierz wyboru</h2>
      <table>
        <thead>
          <tr>
            <th>Potrzebujesz…</th>
            <th>Użyj…</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Po prostu zmierzyć jedną rzecz teraz</td>
            <td>Apple Measure (już zainstalowana)</td>
          </tr>
          <tr>
            <td>Przechwycić całe pomieszczenie, z eksportem, za darmo</td>
            <td>Ruler AR</td>
          </tr>
          <tr>
            <td>Kosztorysy materiałów + zestawienie kosztów</td>
            <td>MagicPlan</td>
          </tr>
          <tr>
            <td>Rzut bez używania kamery AR w ogóle</td>
            <td>RoomScan Pro (podejście „dotknij ściany")</td>
          </tr>
          <tr>
            <td>Wynik klasy architektonicznej</td>
            <td>Żadna, użyj dalmierza laserowego + CAD</td>
          </tr>
        </tbody>
      </table>

      <h2>Czego nie powiedzą Ci oceny gwiazdkowe w App Store</h2>
      <p>
        Wysokie oceny zdominowane są przez ludzi, którzy użyli aplikacji raz i im
        zadziałała. Nie pokazują, jak aplikacja trzyma się w długich sesjach, czy
        zawiesza się na starszych telefonach ani czy eksport faktycznie tworzy coś,
        co wykonawca zdoła odczytać. Podczas testów zaliczyliśmy dwa zawieszenia na
        iPhone'ach bez dopisku Pro (starszy sprzęt 11 Pro). Oba w aplikacjach bez
        adaptacyjnego zarządzania wydajnością: sesja AR i reklamowy SDK działały
        jednocześnie, a silnik się przeciążał. Aplikacje, które ograniczają złożoność
        sceny w zależności od stanu termicznego, wytrzymały.
      </p>

      <h2>Nasz wybór</h2>
      <p>
        Dla większości ludzi w większości przypadków: <strong>Ruler AR</strong>.
        Darmowy plan obejmuje ręczny kreator pomieszczeń, pomiar kamerą, kąty,
        poziomicę, powierzchnię i eksport do PDF. Skanowanie LiDAR dostępne na
        obsługiwanym sprzęcie. Brak reklam w planie Pro. Adaptacyjna wydajność
        utrzymuje stabilność na starszych urządzeniach z 4 GB.
      </p>
      <p>
        Dla profesjonalistów, którzy mierzą zawodowo: <strong>MagicPlan</strong>,
        jeśli budżet pozwala, <strong>Ruler Pro</strong>, jeśli budżet jest napięty.
        Obie potrafią eksportować formaty rzutów, których naprawdę chcą wykonawcy.
      </p>
    </article>
  );
}

export function PostTR() {
  return (
    <article className="prose-content">
      <p className="lead">
        App Store'da „mezura uygulaması" diye arayın, yirmi tane aday çıkar.
        Çoğu, temelde aynı ARKit çatısını kullanır. İlginç farklar, kusurlu
        koşullarla (az ışık, küçük ölçüler, uzun mesafeler) nasıl başa çıktıkları
        ve ölçümleri yakaladıktan sonra onlarla neler yapabileceğinizde yatıyor.
      </p>
      <p>
        En çok indirilen ölçüm uygulamalarından yedisini aynı iPhone 15 Pro'ya
        kurduk ve aynı üç odada aynı test setini iki hafta boyunca çalıştırdık.
        Aşağıda neyin işe yaradığını, neyin yaramadığını ve her uygulamanın en iyi
        olduğu konuyu bulacaksınız.
      </p>

      <h2>Nasıl test ettik</h2>
      <ul>
        <li>
          <strong>Aynı donanım.</strong> iPhone 15 Pro (LiDAR + A17 çipi), iOS
          18.3, gün ışığı ve iç mekânın karışık olduğu koşullar.
        </li>
        <li>
          <strong>Aynı referans.</strong> Uygulamalarla ölçtüğümüz her boyutu, bir
          Bosch GLM 30 lazer mesafe ölçerle de ölçtük (belirtilen hassasiyet
          ±1,5 mm). Lazer okumaları gerçek referans değerdir.
        </li>
        <li>
          <strong>Aynı test seti.</strong> Kapı genişlikleri (76 cm), masa
          yükseklikleri (74 cm), duvar uzunlukları (4,2 m, 5,6 m), oda alanları
          (15 m², 22 m²) ve 6,8 m'lik zorlu bir köşegen.
        </li>
      </ul>

      <h2>Test edilen uygulamalar</h2>
      <p>
        Apple Measure (yerleşik), Ruler AR, MagicPlan, RoomScan Pro, AR Ruler App,
        AirMeasure ve Tape Measure 3D.
      </p>

      <h2>Hassasiyet sonuçları</h2>
      <p>
        Kısa mesafelerde (1 m altı) yedi uygulamanın hepsi lazer referansına göre
        ±5 mm içinde kaldı. Yakın mesafede dokulu bir yüzeydeki AR ışın izleme, tüm
        uygulamalarda tutarlı: ağır işi ARKit yapıyor, uygulamalar yalnızca sonucu
        gösteriyor.
      </p>
      <p>
        Oda boyutundaki duvarlarda (4–6 m) hassasiyet ayrıştı. En iyi uygulamalar
        LiDAR derinlik okumalarını doğrudan kullandı ve ±15 mm içinde kaldı. En
        kötüleri derinliği yalnızca kamera sinyallerinden çıkarsadı ve ±50 mm'ye
        kadar saptı — mobilya planlaması için yeterli, ama herhangi bir yapı ruhsatı
        çizimi için fazla gevşek.
      </p>
      <p>
        Halı üzerindeki 6,8 m'lik köşegende (en zor test, çünkü AR sapması mesafeyle
        birikiyor) yalnızca iki uygulama 2 cm içinde kaldı. Üçü 10 cm veya daha fazla
        şaştı.
      </p>

      <h2>Uygulamaya göre öne çıkan özellikler</h2>

      <h3>Apple Measure (yerleşik)</h3>
      <p>
        <strong>Şunun için en iyisi:</strong> hiçbir şey kurmak istemediğinizde tek
        seferlik hızlı ölçümler. <strong>Şu durumda atlayın:</strong> sonuçları
        kaydetmeniz, alan ölçmeniz ya da doğrusal mesafe dışında bir şey yapmanız
        gerekiyorsa.
      </p>
      <p>
        Ücretsiz, önceden yüklü ve çalışıyor. Ama proje geçmişi yok, PDF dışa
        aktarımı yok, açı aracı yok, oda tarayıcısı yok. Bir şey ölçer, ekran
        görüntüsü alırsınız, o kadar.
      </p>

      <h3>Ruler AR</h3>
      <p>
        <strong>Şunun için en iyisi:</strong> ücretsiz bir uygulamadaki en geniş
        özellik seti — AR kamera ölçümü, elle kat planı oluşturucu (LiDAR olmadan
        çalışır), 3D LiDAR oda taraması, açılar, alan, su terazisi, proje klasörleri,
        PDF dışa aktarımı.
        <strong> Şu durumda atlayın:</strong> sıfır reklam istiyorsanız (Pro
        katmanı reklamları kaldırır).
      </p>
      <p>
        Testlerimizde Touch Mode (başlangıç noktasını telefonun konumuna koyup kısa
        mesafe ışın izleme hatasını ortadan kaldırır) ve ısınan cihazlarda oturum
        yükünü otomatik düşüren uyarlanabilir kalite sistemiyle öne çıktı. Kat
        planları, ölçülmüş duvar + kapı + pencerelerle birlikte temiz bir PDF
        biçiminde dışa aktarıldı.
      </p>

      <h3>MagicPlan</h3>
      <p>
        <strong>Şunun için en iyisi:</strong> malzeme ve maliyet tahminleriyle
        profesyonel kat planları. <strong>Şu durumda atlayın:</strong> fiyata
        duyarlıysanız — pro abonelik rakiplerinden belirgin biçimde pahalı.
      </p>
      <p>
        Tam anlamıyla benimseyince güçlü. Tahmin aracı malzeme veri tabanlarıyla
        bütünleşir. Tek tek odalar için aşırı; haftada birden çok iş yapan
        müteahhitler için ideal.
      </p>

      <h3>RoomScan Pro</h3>
      <p>
        <strong>Şunun için en iyisi:</strong> telefonu duvarlara tek tek dokundurarak
        çok hızlı elle kat planları çıkarmak.
        <strong> Şu durumda atlayın:</strong> LiDAR akışını istiyorsanız — onlar
        daha çok „duvara dokun" iş akışına odaklı.
      </p>

      <h3>AR Ruler App / AirMeasure / Tape Measure 3D</h3>
      <p>
        İşlevsel ama özellik bakımından zayıf. AR kamera ölçümü çalışıyor, açı ve
        alan araçları var. Hiçbirinde LiDAR'sız elle kat planı oluşturucu yok.
        Hiçbiri PDF dışa aktarmıyor. Daha donanımlı bir uygulama bunaltıcı geliyorsa
        sağlam yedek seçenekler.
      </p>

      <h2>Seçim matrisi</h2>
      <table>
        <thead>
          <tr>
            <th>İhtiyacınız…</th>
            <th>Kullanın…</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Hemen şimdi sadece bir şey ölçmek</td>
            <td>Apple Measure (zaten yüklü)</td>
          </tr>
          <tr>
            <td>Tüm odayı yakalamak, dışa aktarılabilir, ücretsiz</td>
            <td>Ruler AR</td>
          </tr>
          <tr>
            <td>Malzeme tahminleri + maliyet toplamı</td>
            <td>MagicPlan</td>
          </tr>
          <tr>
            <td>AR kamerayı hiç kullanmadan kat planı</td>
            <td>RoomScan Pro („duvara dokun" iş akışı)</td>
          </tr>
          <tr>
            <td>Mimari düzeyde çıktı</td>
            <td>Yok, bir lazer ölçer + CAD kullanın</td>
          </tr>
        </tbody>
      </table>

      <h2>App Store yıldız puanlarının size söylemedikleri</h2>
      <p>
        Yüksek yıldız puanlarına, uygulamayı bir kez kullanıp işine yaramış kişiler
        hâkimdir. Bunlar uygulamanın uzun oturumlarda ne kadar dayandığını, eski
        telefonlarda çöküp çökmediğini ya da dışa aktarmanın bir müteahhidin
        okuyabileceği bir şey üretip üretmediğini yansıtmaz. Testler sırasında Pro
        eki olmayan iPhone'larda (eski 11 Pro donanımı) iki çökme yaşadık. İkisi de
        uyarlanabilir performans yönetimi olmayan uygulamalardaydı: AR oturumu ile
        bir reklam SDK'sı aynı anda çalışıyor ve motor aşırı yükleniyordu. Sahne
        karmaşıklığını termal duruma göre kısan uygulamalar ise dayandı.
      </p>

      <h2>Bizim tercihimiz</h2>
      <p>
        Çoğu insan için çoğu zaman: <strong>Ruler AR</strong>. Ücretsiz katman elle
        oda oluşturucuyu, kamera ölçümünü, açıları, su terazisini, alanı ve PDF dışa
        aktarımını kapsar. LiDAR taraması desteklenen donanımda mevcut. Pro katmanda
        reklam yok. Uyarlanabilir performans, eski 4 GB cihazlarda kararlı kalmasını
        sağlıyor.
      </p>
      <p>
        Ölçümü meslek edinmiş profesyoneller için: bütçe elveriyorsa
        <strong> MagicPlan</strong>, bütçe kısıtlıysa <strong>Ruler Pro</strong>. İki
        si de müteahhitlerin gerçekten istediği kat planı biçimlerini dışa
        aktarabiliyor.
      </p>
    </article>
  );
}

export function PostAR() {
  return (
    <article className="prose-content">
      <p className="lead">
        ابحث عن «تطبيق شريط قياس» في App Store وسترى عشرين مرشحًا. معظمها يعتمد على
        إطار العمل ARKit نفسه في الأساس. الفروق المثيرة للاهتمام تكمن في كيفية
        تعاملها مع الظروف غير المثالية (الإضاءة الخافتة، الأبعاد الصغيرة، المسافات
        الطويلة) وفيما يمكنك فعله بالقياسات بعد التقاطها.
      </p>
      <p>
        ثبّتنا سبعة من أكثر تطبيقات القياس تنزيلًا على نفس جهاز iPhone 15 Pro،
        وشغّلنا المجموعة نفسها من الاختبارات في الغرف الثلاث نفسها على مدى أسبوعين.
        فيما يلي ما نجح وما لم ينجح، وما الذي يتميز به كل تطبيق.
      </p>

      <h2>كيف اختبرنا</h2>
      <ul>
        <li>
          <strong>العتاد نفسه.</strong> iPhone 15 Pro (LiDAR + شريحة A17)، iOS
          18.3، ظروف مختلطة بين ضوء النهار والإضاءة الداخلية.
        </li>
        <li>
          <strong>المرجع نفسه.</strong> كل بُعد قِسناه بالتطبيقات قِسناه أيضًا
          بجهاز قياس المسافة بالليزر Bosch GLM 30 (دقة معلنة ±1.5 مم). قراءات
          الليزر هي القيمة المرجعية الحقيقية.
        </li>
        <li>
          <strong>مجموعة الاختبار نفسها.</strong> عرض الأبواب (76 سم)، ارتفاع
          الطاولات (74 سم)، أطوال الجدران (4.2 م، 5.6 م)، مساحات الغرف (15 م²،
          22 م²)، وقطر واحد صعب بطول 6.8 م.
        </li>
      </ul>

      <h2>التطبيقات التي اختُبرت</h2>
      <p>
        Apple Measure (المدمج)، Ruler AR، MagicPlan، RoomScan Pro، AR Ruler App،
        AirMeasure، و Tape Measure 3D.
      </p>

      <h2>نتائج الدقة</h2>
      <p>
        في المسافات القصيرة (أقل من 1 م)، جاءت التطبيقات السبعة جميعها ضمن ±5 مم من
        المرجع الليزري. إن إسقاط الأشعة في الواقع المعزز على سطح ذي ملمس على مسافة
        قريبة متسق عبر جميع التطبيقات: فإطار ARKit يقوم بالعمل الثقيل، والتطبيقات
        تكتفي بعرض النتيجة.
      </p>
      <p>
        أما في الجدران بطول الغرفة (4–6 م) فقد تباينت الدقة. استخدمت أفضل التطبيقات
        قراءات العمق من LiDAR مباشرةً وبقيت ضمن ±15 مم. أما الأسوأ فقد استنتجت العمق
        من إشارات الكاميرا وحدها وانحرفت حتى ±50 مم — مقبول لتخطيط الأثاث، لكنه فضفاض
        أكثر من اللازم لأي رسم خاص برخصة بناء.
      </p>
      <p>
        في القطر البالغ 6.8 م فوق السجاد (أصعب اختبار، إذ يتراكم انحراف الواقع
        المعزز مع المسافة)، بقي تطبيقان فقط ضمن 2 سم. وأخطأت ثلاثة بمقدار 10 سم أو
        أكثر.
      </p>

      <h2>أبرز الميزات حسب التطبيق</h2>

      <h3>Apple Measure (المدمج)</h3>
      <p>
        <strong>الأفضل لـ:</strong> القياسات السريعة العابرة حين لا ترغب في تثبيت
        أي شيء. <strong>تجاوزه إذا:</strong> كنت بحاجة إلى حفظ النتائج أو قياس
        المساحة أو فعل أي شيء يتجاوز المسافة الخطية.
      </p>
      <p>
        إنه مجاني ومثبّت مسبقًا ويعمل. لكن لا يوجد سجل للمشاريع، ولا تصدير PDF، ولا
        أداة زوايا، ولا ماسح للغرف. تقيس شيئًا، تلتقط لقطة شاشة، وانتهى الأمر.
      </p>

      <h3>Ruler AR</h3>
      <p>
        <strong>الأفضل لـ:</strong> أوسع مجموعة ميزات في تطبيق مجاني — قياس بكاميرا
        الواقع المعزز، وبنّاء مخططات يدوي (يعمل بدون LiDAR)، ومسح ثلاثي الأبعاد
        للغرفة عبر LiDAR، والزوايا، والمساحة، وميزان الاستواء، ومجلدات المشاريع،
        وتصدير PDF.
        <strong> تجاوزه إذا:</strong> أردت صفر إعلانات (تزيلها الفئة Pro).
      </p>
      <p>
        تميّز في اختباراتنا بوضع Touch Mode (يضع نقطة البداية عند موضع الهاتف، مما
        يلغي خطأ إسقاط الأشعة في المسافات القصيرة) وبنظام الجودة التكيفي الذي يقلّل
        تلقائيًا حِمل الجلسة على الأجهزة الساخنة. وتُصدَّر المخططات مع الجدران
        والأبواب والنوافذ المقيسة بصيغة PDF نظيفة.
      </p>

      <h3>MagicPlan</h3>
      <p>
        <strong>الأفضل لـ:</strong> المخططات الاحترافية مع المواد وتقديرات التكلفة.
        <strong>تجاوزه إذا:</strong> كنت حسّاسًا للسعر — فاشتراك pro أغلى بكثير من
        المنافسين.
      </p>
      <p>
        قوي حين تستثمر فيه بالكامل. وتتكامل أداة التقدير لديه مع قواعد بيانات المواد.
        مبالغ فيه للغرف المنفردة؛ ومثالي للمقاولين الذين يؤدون عدة أعمال في الأسبوع.
      </p>

      <h3>RoomScan Pro</h3>
      <p>
        <strong>الأفضل لـ:</strong> مخططات يدوية سريعة جدًا بلمس الهاتف للجدران واحدًا
        تلو الآخر.
        <strong> تجاوزه إذا:</strong> أردت مسار LiDAR — فهم أكثر تركيزًا على أسلوب
        «المس الجدار».
      </p>

      <h3>AR Ruler App / AirMeasure / Tape Measure 3D</h3>
      <p>
        عملية لكنها فقيرة الميزات. القياس بكاميرا الواقع المعزز يعمل، وأدوات الزاوية
        والمساحة متوفرة. لا يملك أي منها بنّاء مخططات يدويًا بدون LiDAR. ولا يصدّر أي
        منها PDF. بدائل احتياطية موثوقة إذا بدا تطبيق أغنى بالميزات مرهقًا.
      </p>

      <h2>مصفوفة الاختيار</h2>
      <table>
        <thead>
          <tr>
            <th>أنت بحاجة إلى…</th>
            <th>استخدم…</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>قياس شيء واحد فقط الآن</td>
            <td>Apple Measure (مثبّت بالفعل)</td>
          </tr>
          <tr>
            <td>التقاط الغرفة كاملةً، قابل للتصدير، مجانًا</td>
            <td>Ruler AR</td>
          </tr>
          <tr>
            <td>تقديرات المواد + إجمالي التكلفة</td>
            <td>MagicPlan</td>
          </tr>
          <tr>
            <td>مخطط دون استخدام كاميرا الواقع المعزز إطلاقًا</td>
            <td>RoomScan Pro (أسلوب «المس الجدار»)</td>
          </tr>
          <tr>
            <td>مُخرَج بجودة معمارية</td>
            <td>لا يوجد، استخدم جهاز قياس بالليزر + CAD</td>
          </tr>
        </tbody>
      </table>

      <h2>ما لا تخبرك به تقييمات النجوم في App Store</h2>
      <p>
        تهيمن على التقييمات العالية فئة استخدمت التطبيق مرة واحدة فنجح معها. وهي لا
        تعكس مدى صمود التطبيق عبر الجلسات الطويلة، ولا ما إذا كان ينهار على الهواتف
        الأقدم، ولا ما إذا كان التصدير يُنتج فعلًا شيئًا يستطيع المقاول قراءته.
        خلال الاختبار واجهنا انهيارين على أجهزة iPhone بلا لاحقة Pro (عتاد 11 Pro
        الأقدم). كلاهما في تطبيقات بلا إدارة أداء تكيفية: إذ كانت جلسة الواقع المعزز
        وحزمة SDK إعلانية تعملان في آن واحد، فيُثقَل المحرك. أما التطبيقات التي تخفّض
        تعقيد المشهد بحسب الحالة الحرارية فقد صمدت.
      </p>

      <h2>اختيارنا</h2>
      <p>
        لمعظم الناس في معظم الأوقات: <strong>Ruler AR</strong>. تغطي الفئة المجانية
        بنّاء الغرف اليدوي، والقياس بالكاميرا، والزوايا، وميزان الاستواء، والمساحة،
        وتصدير PDF. ومسح LiDAR متاح على العتاد المدعوم. ولا إعلانات في الفئة Pro.
        ويحافظ الأداء التكيفي على استقراره على الأجهزة الأقدم ذات 4 جيجابايت.
      </p>
      <p>
        للمحترفين الذين يقيسون مهنيًا: <strong>MagicPlan</strong> إن سمحت الميزانية،
        و<strong>Ruler Pro</strong> إن كانت الميزانية محدودة. وكلاهما قادر على تصدير
        صِيغ المخططات التي يريدها المقاولون فعلًا.
      </p>
    </article>
  );
}

export const bodies = {
  ru: PostRU, de: PostDE, fr: PostFR, es: PostES, ja: PostJA, ko: PostKO,
  'zh-Hans': PostZH, 'pt-BR': PostPT, it: PostIT, pl: PostPL, tr: PostTR, ar: PostAR
};
