import type { PostMeta } from './posts';

export const meta: PostMeta = {
  slug: 'ar-tape-measure-for-construction',
  date: '2026-04-18',
  readingTimeMin: 7,
  keywords:
    'ar measure construction, iphone for contractors, site survey app, measure for renovation, contractor measuring app',
  tags: ['Construction', 'Pro', 'Workflow'],
  title: {
    en: "AR Tape Measure for Construction: A Site Survey Workflow That Saves an Hour Per Job",
    ru: "AR-рулетка на стройке: рабочий процесс обмера, который экономит час на каждом объекте",
    de: "AR-Maßband auf der Baustelle: Aufmaß-Workflow, der pro Auftrag eine Stunde spart",
    fr: "Mètre AR pour la construction : un workflow de relevé qui économise une heure par chantier",
    es: "Cinta métrica AR para construcción: un flujo de relevamiento que ahorra una hora por obra",
    ja: "建設現場のためのAR メジャー：1件あたり1時間を節約する現地調査ワークフロー",
    ko: "건설 현장을 위한 AR 줄자: 작업당 한 시간을 절약하는 현장 실측 워크플로",
    "zh-Hans": "建筑工地的 AR 卷尺：每个工程节省一小时的现场测量工作流",
    "pt-BR": "Trena AR para construção: um fluxo de levantamento que economiza uma hora por obra",
    it: "Metro AR per l'edilizia: un flusso di rilievo che fa risparmiare un'ora per cantiere",
    pl: "Miara AR na budowie: proces inwentaryzacji, który oszczędza godzinę na każdym zleceniu",
    tr: "İnşaat için AR şerit metre: iş başına bir saat kazandıran saha ölçüm akışı",
    ar: "شريط قياس AR للبناء: سير عمل مسح الموقع يوفر ساعة لكل مهمة"
  },
  excerpt: {
    en: "A field-tested workflow for contractors using iPhone for site surveys, punch lists, and change orders. Where AR speeds things up, where it doesn't, and how to integrate it into a typical small-job timeline.",
    ru: "Полевой рабочий процесс для подрядчиков: iPhone для обмера, чек-листов и согласований. Где AR ускоряет, где нет, и как встроить это в типичный график небольшого объекта.",
    de: "Ein praxiserprobter Workflow für Handwerker, die das iPhone für Aufmaße, Mängellisten und Nachträge nutzen. Wo AR beschleunigt, wo nicht und wie man es in den typischen Ablauf eines kleinen Auftrags einbindet.",
    fr: "Un workflow testé sur le terrain pour les artisans qui utilisent l'iPhone pour les relevés, les listes de réserves et les avenants. Là où l'AR fait gagner du temps, là où elle n'en fait pas, et comment l'intégrer au déroulement type d'un petit chantier.",
    es: "Un flujo de trabajo probado en obra para contratistas que usan el iPhone en relevamientos, listas de pendientes y órdenes de cambio. Dónde la AR acelera, dónde no, y cómo integrarla en el cronograma típico de un trabajo pequeño.",
    ja: "現地調査、不具合リスト、変更指示にiPhoneを使う施工業者向けの、現場で検証済みのワークフロー。ARが効く場面と効かない場面、そして小規模案件の典型的な流れへの組み込み方を解説します。",
    ko: "현장 실측, 하자 목록, 변경 지시에 iPhone을 사용하는 시공업자를 위한 현장 검증 워크플로. AR이 속도를 높이는 지점과 그렇지 않은 지점, 그리고 일반적인 소규모 작업 일정에 통합하는 방법을 다룹니다.",
    "zh-Hans": "面向使用 iPhone 进行现场测量、整改清单和变更单的承包商的实战工作流。AR 在哪些环节能提速、哪些不行，以及如何把它融入典型小型工程的进度安排。",
    "pt-BR": "Um fluxo de trabalho testado em campo para empreiteiros que usam o iPhone em levantamentos, listas de pendências e ordens de mudança. Onde a AR acelera, onde não, e como integrá-la ao cronograma típico de um trabalho pequeno.",
    it: "Un flusso di lavoro testato sul campo per gli artigiani che usano l'iPhone per rilievi, liste di difetti e varianti. Dove l'AR fa risparmiare tempo, dove no, e come integrarla nei tempi tipici di un piccolo cantiere.",
    pl: "Sprawdzony w terenie proces dla wykonawców używających iPhone'a do inwentaryzacji, list usterek i zmian zakresu. Gdzie AR przyspiesza, gdzie nie, i jak wpiąć ją w typowy harmonogram małego zlecenia.",
    tr: "Saha ölçümü, eksik listesi ve değişiklik talepleri için iPhone kullanan müteahhitler için sahada test edilmiş bir iş akışı. AR'nin işi hızlandırdığı ve hızlandırmadığı yerler ve bunu tipik bir küçük iş takvimine nasıl entegre edeceğiniz.",
    ar: "سير عمل مُختبَر ميدانيًا للمقاولين الذين يستخدمون iPhone في مسوحات الموقع وقوائم الإصلاحات وأوامر التغيير. أين تسرّع AR العمل وأين لا، وكيف تدمجها في الجدول الزمني المعتاد لمهمة صغيرة."
  }
};

export default function Post() {
  return (
    <article className="prose-content">
      <p className="lead">
        On a typical home renovation site survey, a kitchen remodel, a
        bathroom tear-out, or a few rooms of paint and floor, a tape
        measure and a notebook take 45-60 minutes. The same survey with an
        iPhone AR app and a measured floor plan takes 12-15 minutes. Here's
        the workflow that gets you there, and where the time savings
        actually come from.
      </p>

      <h2>What AR is good at on a job site</h2>
      <ul>
        <li><strong>Room-level dimensions.</strong> 4-6 walls in 60 seconds with LiDAR; 2-3 minutes manual.</li>
        <li><strong>Furniture and fixture positions.</strong> The LiDAR scan auto-tags major items.</li>
        <li><strong>Angles and squareness.</strong> Crucial for retiling, cabinet installation, anywhere "is this wall actually 90°?" matters.</li>
        <li><strong>Photo-anchored notes.</strong> Capture a photo, draw an arrow to a feature, write a measurement next to it. All in one project.</li>
      </ul>

      <h2>What AR is NOT good for</h2>
      <ul>
        <li><strong>Sub-millimetre cabinetry work.</strong> Use a steel rule.</li>
        <li><strong>Long diagonals (over 5 m) outdoors.</strong> Use a laser distance meter, AR drift makes long shots unreliable.</li>
        <li><strong>Tight crawl spaces with no light.</strong> Camera AR fails; LiDAR works but the phone needs to fit in.</li>
        <li><strong>As-built drawings for permit submissions.</strong> Most municipalities require licensed surveyor stamps. The app gives you a starting document, not the final.</li>
      </ul>

      <h2>The 15-minute survey workflow</h2>
      <h3>Minute 0-2: Arrive and stage</h3>
      <p>
        Park, walk in, greet the homeowner. Open Ruler AR. Create a new
        project named after the address. This becomes the folder everything
        lands in.
      </p>

      <h3>Minute 2-7: Room scans</h3>
      <p>
        Walk room by room. For each room with LiDAR: tap Room Scan, walk
        the perimeter, finish. The app builds the floor plan automatically.
        For rooms without enough light (basements, closets), switch to
        Manual Room Builder, tap each corner walking the perimeter.
      </p>
      <p>
        Add each room to the project folder. Most jobs are 3-5 rooms; this
        phase eats about 5 minutes total.
      </p>

      <h3>Minute 7-10: Fixed-feature measurements</h3>
      <p>
        Per room, capture the dimensions that won't be visible in the floor
        plan:
      </p>
      <ul>
        <li>Window head and sill heights (from floor)</li>
        <li>Door clear opening width and height</li>
        <li>Counter height and depth (kitchens)</li>
        <li>Ceiling height (especially if soffit/dropped ceiling)</li>
        <li>Existing pipe positions (under sinks, in shower)</li>
      </ul>
      <p>
        Each measurement saves into the room's project with a thumbnail.
        Annotate any that need explanation ("water shutoff valve" with a
        photo).
      </p>

      <h3>Minute 10-13: Punch list</h3>
      <p>
        Walk through with the homeowner. As they point things out, snap a
        photo in the app, add a note ("damaged tile, replace, ~0.5 m²"),
        and attach it to the relevant room. Every photo gets geolocated to
        its room.
      </p>

      <h3>Minute 13-15: Export and wrap</h3>
      <p>
        Tap Share → Export PDF on the project folder. The app generates a
        consolidated document: cover page, per-room floor plans with
        dimensions, fixed-feature measurements, photos with annotations,
        punch list summary.
      </p>
      <p>
        Email it to yourself before you leave. By the time you're back at
        your truck, the homeowner has the same PDF in their inbox.
      </p>

      <h2>What this enables that a clipboard didn't</h2>
      <ul>
        <li>
          <strong>Same-day quotes.</strong> You can write the estimate from
          the PDF that evening, often with material quantities the app's
          calculator already estimated.
        </li>
        <li>
          <strong>Sub-contractor pre-qualification.</strong> Send the PDF to
          the plumber/electrician/painter before they visit. They show up
          having already scoped the work.
        </li>
        <li>
          <strong>Change-order documentation.</strong> Any mid-job dimension
          change gets photographed and measured in 30 seconds, with photo
          evidence and a timestamp.
        </li>
        <li>
          <strong>Insurance claims.</strong> If something goes wrong (water
          damage, structural surprise), you have measured pre-job
          documentation as evidence of original condition.
        </li>
      </ul>

      <h2>Accuracy in pro context</h2>
      <p>
        For most site-survey work, ±1-2 cm tolerance is acceptable. The app
        delivers that comfortably. For finishing-grade dimensions
        (cabinets, custom millwork, glass shower enclosures), use a steel
        rule or laser tape. The app is for getting the rough numbers fast
        and reliably; precision tools come in at the install phase.
      </p>

      <h2>Hardware recommendation</h2>
      <p>
        Any iPhone Pro from 12 onwards. The LiDAR scanner halves your survey
        time and lets you measure in pitch-dark closets. iPhone 15 Pro and
        newer have noticeably faster AR initialization (≈0.5s vs 1-2s on
        older Pro models). If you're upgrading hardware for work, the Pro
        line earns back the price difference in saved survey time within
        ~15 jobs.
      </p>

      <h2>Pen-and-paper holdouts</h2>
      <p>
        Some contractors still prefer a clipboard because they trust what
        they wrote down. Fair. The hybrid approach works: use the iPhone
        for the floor plan and area numbers (where pen-and-paper is slow
        and error-prone), keep the clipboard for the cabinet sketches and
        custom notes (where the iPhone is overkill). The PDF includes
        space at the bottom for handwritten addenda you scan in later.
      </p>

      <h2>Bottom line</h2>
      <p>
        A site survey that takes an hour with traditional tools takes 15
        minutes with an AR app. On a 50-job year, that's 35-40 hours
        recovered, a full work week. The accuracy is comparable for survey
        purposes. The output (PDF with floor plan + dimensions + photos +
        notes) is more presentable to clients than a hand-drawn sketch.
        Worth the 15 minutes of installing and learning the app.
      </p>
    </article>
  );
}

export function PostRU() {
  return (
    <article className="prose-content">
      <p className="lead">
        На типичном обмере для ремонта квартиры — переделка кухни, демонтаж
        ванной или покраска и полы в паре комнат — рулетка и блокнот отнимают
        45-60 минут. Тот же обмер с AR-приложением на iPhone и готовым планом
        этажа занимает 12-15 минут. Вот рабочий процесс, который к этому
        приводит, и откуда на самом деле берётся экономия времени.
      </p>

      <h2>В чём AR хорош на объекте</h2>
      <ul>
        <li><strong>Размеры на уровне комнаты.</strong> 4-6 стен за 60 секунд с LiDAR; 2-3 минуты вручную.</li>
        <li><strong>Положение мебели и сантехники.</strong> Скан LiDAR автоматически распознаёт крупные объекты.</li>
        <li><strong>Углы и прямоугольность.</strong> Критично для перекладки плитки, установки шкафов — везде, где важен вопрос «а стена правда под 90°?».</li>
        <li><strong>Заметки, привязанные к фото.</strong> Сделайте снимок, нарисуйте стрелку к детали, впишите рядом размер. Всё в одном проекте.</li>
      </ul>

      <h2>В чём AR НЕ годится</h2>
      <ul>
        <li><strong>Мебельные работы с точностью до долей миллиметра.</strong> Используйте стальную линейку.</li>
        <li><strong>Длинные диагонали (свыше 5 м) на улице.</strong> Используйте лазерный дальномер — дрейф AR делает дальние замеры ненадёжными.</li>
        <li><strong>Тесные технические полости без света.</strong> Камерный AR не работает; LiDAR справляется, но телефон должен туда влезть.</li>
        <li><strong>Исполнительные чертежи для разрешений.</strong> Большинство ведомств требуют печать лицензированного геодезиста. Приложение даёт стартовый документ, а не финальный.</li>
      </ul>

      <h2>Обмер за 15 минут</h2>
      <h3>Минуты 0-2: Приехали и подготовились</h3>
      <p>
        Припарковались, зашли, поздоровались с хозяином. Откройте Ruler AR.
        Создайте новый проект с названием по адресу. Это станет папкой, куда
        всё будет складываться.
      </p>

      <h3>Минуты 2-7: Сканирование комнат</h3>
      <p>
        Идите комната за комнатой. Для каждой комнаты с LiDAR: нажмите Room
        Scan, обойдите периметр, завершите. Приложение само строит план
        этажа. Для комнат без достаточного света (подвалы, кладовки)
        переключитесь на Manual Room Builder и отмечайте каждый угол, обходя
        периметр.
      </p>
      <p>
        Добавляйте каждую комнату в папку проекта. Большинство объектов — это
        3-5 комнат; этот этап съедает около 5 минут в общей сложности.
      </p>

      <h3>Минуты 7-10: Замеры фиксированных элементов</h3>
      <p>
        По каждой комнате зафиксируйте размеры, которых не будет видно на
        плане этажа:
      </p>
      <ul>
        <li>Высота верха и подоконника окна (от пола)</li>
        <li>Чистая ширина и высота дверного проёма</li>
        <li>Высота и глубина столешницы (кухни)</li>
        <li>Высота потолка (особенно при коробе/подвесном потолке)</li>
        <li>Положение существующих труб (под раковинами, в душе)</li>
      </ul>
      <p>
        Каждый замер сохраняется в проект комнаты с миниатюрой. Добавьте
        пометки к тем, что требуют пояснения («водяной запорный вентиль» с
        фото).
      </p>

      <h3>Минуты 10-13: Чек-лист недочётов</h3>
      <p>
        Пройдитесь вместе с хозяином. Когда он на что-то указывает, сделайте
        фото в приложении, добавьте заметку («битая плитка, заменить, ~0,5 м²»)
        и прикрепите её к нужной комнате. Каждое фото привязывается к своей
        комнате.
      </p>

      <h3>Минуты 13-15: Экспорт и завершение</h3>
      <p>
        Нажмите «Поделиться» → «Экспорт PDF» на папке проекта. Приложение
        генерирует сводный документ: титульный лист, планы каждой комнаты с
        размерами, замеры фиксированных элементов, фото с пометками, сводку
        чек-листа.
      </p>
      <p>
        Отправьте его себе на почту, пока не уехали. К тому моменту, как вы
        вернётесь в машину, у хозяина тот же PDF уже в почте.
      </p>

      <h2>Что это даёт, чего не давал планшет с зажимом</h2>
      <ul>
        <li>
          <strong>Сметы в тот же день.</strong> Вы можете составить расчёт по
          PDF в тот же вечер — часто уже с объёмами материалов, которые
          калькулятор приложения прикинул заранее.
        </li>
        <li>
          <strong>Предварительный отбор субподрядчиков.</strong> Отправьте PDF
          сантехнику/электрику/маляру до их визита. Они приедут, уже
          представляя объём работ.
        </li>
        <li>
          <strong>Документация по изменениям.</strong> Любое изменение размера
          по ходу работ фотографируется и замеряется за 30 секунд — с фото-
          доказательством и отметкой времени.
        </li>
        <li>
          <strong>Страховые случаи.</strong> Если что-то пойдёт не так
          (протечка, скрытый дефект конструкции), у вас есть замеренная
          до-ремонтная документация как свидетельство исходного состояния.
        </li>
      </ul>

      <h2>Точность в профессиональном контексте</h2>
      <p>
        Для большинства обмерных работ допуск ±1-2 см приемлем. Приложение
        легко это обеспечивает. Для чистовых размеров (шкафы, столярка на
        заказ, стеклянные душевые ограждения) используйте стальную линейку или
        лазерную рулетку. Приложение нужно, чтобы быстро и надёжно получить
        черновые числа; точные инструменты подключаются на этапе монтажа.
      </p>

      <h2>Рекомендация по технике</h2>
      <p>
        Любой iPhone Pro начиная с 12-го. Сканер LiDAR вдвое сокращает время
        обмера и позволяет мерить в кладовках в кромешной темноте. iPhone 15
        Pro и новее заметно быстрее инициализируют AR (≈0,5 с против 1-2 с на
        старых Pro). Если вы обновляете технику для работы, линейка Pro
        отбивает разницу в цене сэкономленным временем обмера примерно за 15
        объектов.
      </p>

      <h2>Сторонники ручки и бумаги</h2>
      <p>
        Некоторые подрядчики всё ещё предпочитают планшет с зажимом, потому что
        доверяют тому, что записали сами. Справедливо. Гибридный подход
        работает: используйте iPhone для плана этажа и площадей (там, где ручка
        и бумага медленны и подвержены ошибкам), а планшет оставьте для эскизов
        шкафов и особых заметок (там, где iPhone избыточен). В PDF внизу есть
        место для рукописных дополнений, которые вы потом отсканируете.
      </p>

      <h2>Итог</h2>
      <p>
        Обмер, который занимает час традиционными инструментами, с
        AR-приложением занимает 15 минут. При 50 объектах в год это 35-40
        возвращённых часов — целая рабочая неделя. Точность для обмерных целей
        сопоставима. Результат (PDF с планом этажа + размерами + фото +
        заметками) выглядит для клиентов презентабельнее, чем нарисованный от
        руки эскиз. Стоит тех 15 минут, что уйдут на установку и освоение
        приложения.
      </p>
    </article>
  );
}

export function PostDE() {
  return (
    <article className="prose-content">
      <p className="lead">
        Bei einem typischen Aufmaß für die Wohnungssanierung — Küchenumbau,
        Bad-Entkernung oder ein paar Räume Anstrich und Boden — kosten Maßband
        und Notizblock 45-60 Minuten. Dasselbe Aufmaß mit einer iPhone-AR-App
        und einem fertigen Grundriss dauert 12-15 Minuten. Hier ist der
        Workflow, der dorthin führt, und woher die Zeitersparnis wirklich
        kommt.
      </p>

      <h2>Worin AR auf der Baustelle gut ist</h2>
      <ul>
        <li><strong>Maße auf Raumebene.</strong> 4-6 Wände in 60 Sekunden mit LiDAR; 2-3 Minuten manuell.</li>
        <li><strong>Positionen von Möbeln und Sanitär.</strong> Der LiDAR-Scan markiert größere Objekte automatisch.</li>
        <li><strong>Winkel und Rechtwinkligkeit.</strong> Entscheidend beim Neuverfliesen, Schrankeinbau — überall, wo „Ist diese Wand wirklich 90°?" zählt.</li>
        <li><strong>Foto-verankerte Notizen.</strong> Foto aufnehmen, einen Pfeil zum Detail zeichnen, das Maß daneben schreiben. Alles in einem Projekt.</li>
      </ul>

      <h2>Wofür AR NICHT taugt</h2>
      <ul>
        <li><strong>Schreinerarbeiten im Submillimeter-Bereich.</strong> Nimm einen Stahlmaßstab.</li>
        <li><strong>Lange Diagonalen (über 5 m) im Freien.</strong> Nimm einen Laser-Entfernungsmesser, AR-Drift macht weite Messungen unzuverlässig.</li>
        <li><strong>Enge Kriechräume ohne Licht.</strong> Kamera-AR versagt; LiDAR funktioniert, aber das Telefon muss hineinpassen.</li>
        <li><strong>Bestandspläne für Genehmigungsanträge.</strong> Die meisten Behörden verlangen den Stempel eines vereidigten Vermessers. Die App liefert ein Ausgangsdokument, nicht das Endergebnis.</li>
      </ul>

      <h2>Der 15-Minuten-Aufmaß-Workflow</h2>
      <h3>Minute 0-2: Ankommen und vorbereiten</h3>
      <p>
        Parken, hineingehen, den Hausbesitzer begrüßen. Ruler AR öffnen. Ein
        neues Projekt mit dem Namen der Adresse anlegen. Das wird der Ordner,
        in dem alles landet.
      </p>

      <h3>Minute 2-7: Raum-Scans</h3>
      <p>
        Geh Raum für Raum durch. Für jeden Raum mit LiDAR: Room Scan antippen,
        den Umfang abgehen, fertig. Die App erstellt den Grundriss automatisch.
        Für Räume ohne ausreichend Licht (Keller, Abstellkammern) zum Manual
        Room Builder wechseln und beim Abgehen des Umfangs jede Ecke antippen.
      </p>
      <p>
        Füge jeden Raum dem Projektordner hinzu. Die meisten Aufträge umfassen
        3-5 Räume; diese Phase frisst insgesamt etwa 5 Minuten.
      </p>

      <h3>Minute 7-10: Maße fester Elemente</h3>
      <p>
        Erfasse pro Raum die Maße, die im Grundriss nicht sichtbar sein werden:
      </p>
      <ul>
        <li>Sturz- und Brüstungshöhe der Fenster (ab Boden)</li>
        <li>Lichte Breite und Höhe der Türöffnung</li>
        <li>Arbeitsplattenhöhe und -tiefe (Küchen)</li>
        <li>Deckenhöhe (besonders bei Vorbau/abgehängter Decke)</li>
        <li>Lage vorhandener Rohre (unter Spülen, in der Dusche)</li>
      </ul>
      <p>
        Jedes Maß wird mit Vorschaubild im Raum-Projekt gespeichert. Versieh
        alles Erklärungsbedürftige mit einer Notiz („Wasserabsperrventil" mit
        Foto).
      </p>

      <h3>Minute 10-13: Mängelliste</h3>
      <p>
        Geh mit dem Hausbesitzer durch. Wenn er auf etwas zeigt, mach ein Foto
        in der App, füge eine Notiz hinzu („beschädigte Fliese, ersetzen, ~0,5
        m²") und häng sie an den passenden Raum. Jedes Foto wird seinem Raum
        zugeordnet.
      </p>

      <h3>Minute 13-15: Export und Abschluss</h3>
      <p>
        Tippe beim Projektordner auf Teilen → PDF exportieren. Die App
        erzeugt ein zusammengefasstes Dokument: Deckblatt, Grundrisse je Raum
        mit Maßen, Maße fester Elemente, Fotos mit Notizen, Zusammenfassung der
        Mängelliste.
      </p>
      <p>
        Mail es dir selbst, bevor du gehst. Bis du zurück am Wagen bist, hat
        der Hausbesitzer dasselbe PDF im Postfach.
      </p>

      <h2>Was das ermöglicht, was ein Klemmbrett nicht konnte</h2>
      <ul>
        <li>
          <strong>Angebote am selben Tag.</strong> Du kannst den
          Kostenvoranschlag am selben Abend aus dem PDF schreiben — oft schon
          mit Materialmengen, die der Rechner der App vorab geschätzt hat.
        </li>
        <li>
          <strong>Vorqualifizierung von Subunternehmern.</strong> Schick das
          PDF an Installateur/Elektriker/Maler vor ihrem Besuch. Sie kommen,
          den Umfang bereits eingeschätzt.
        </li>
        <li>
          <strong>Nachtrags-Dokumentation.</strong> Jede Maßänderung während
          der Arbeit wird in 30 Sekunden fotografiert und gemessen — mit
          Foto-Beleg und Zeitstempel.
        </li>
        <li>
          <strong>Versicherungsfälle.</strong> Wenn etwas schiefgeht
          (Wasserschaden, statische Überraschung), hast du eine gemessene
          Vorzustands-Dokumentation als Nachweis des Originalzustands.
        </li>
      </ul>

      <h2>Genauigkeit im Profi-Kontext</h2>
      <p>
        Für die meisten Aufmaß-Arbeiten ist eine Toleranz von ±1-2 cm
        akzeptabel. Die App liefert das mühelos. Für Endmaße (Schränke,
        Sonderanfertigungen aus Holz, Glasduschen) nimm einen Stahlmaßstab oder
        ein Laser-Maßband. Die App ist dafür da, die groben Zahlen schnell und
        zuverlässig zu bekommen; Präzisionswerkzeuge kommen in der
        Montagephase zum Einsatz.
      </p>

      <h2>Hardware-Empfehlung</h2>
      <p>
        Jedes iPhone Pro ab dem 12er. Der LiDAR-Scanner halbiert deine
        Aufmaßzeit und lässt dich in stockdunklen Abstellkammern messen. iPhone
        15 Pro und neuer initialisieren AR spürbar schneller (≈0,5 s statt 1-2
        s bei älteren Pro-Modellen). Wenn du Hardware fürs Geschäft erneuerst,
        holt die Pro-Linie den Preisunterschied durch gesparte Aufmaßzeit
        innerhalb von etwa 15 Aufträgen wieder herein.
      </p>

      <h2>Verfechter von Stift und Papier</h2>
      <p>
        Manche Handwerker bevorzugen weiterhin das Klemmbrett, weil sie dem
        vertrauen, was sie selbst notiert haben. Verständlich. Der hybride
        Ansatz funktioniert: Nutze das iPhone für Grundriss und Flächenmaße (wo
        Stift und Papier langsam und fehleranfällig sind), behalte das
        Klemmbrett für Schrankskizzen und spezielle Notizen (wo das iPhone
        überdimensioniert ist). Das PDF hat unten Platz für handschriftliche
        Ergänzungen, die du später einscannst.
      </p>

      <h2>Fazit</h2>
      <p>
        Ein Aufmaß, das mit herkömmlichen Werkzeugen eine Stunde dauert, dauert
        mit einer AR-App 15 Minuten. Bei 50 Aufträgen im Jahr sind das 35-40
        zurückgewonnene Stunden — eine ganze Arbeitswoche. Für Aufmaßzwecke ist
        die Genauigkeit vergleichbar. Das Ergebnis (PDF mit Grundriss + Maßen +
        Fotos + Notizen) ist für Kunden ansehnlicher als eine handgezeichnete
        Skizze. Die 15 Minuten für Installation und Einarbeitung sind es wert.
      </p>
    </article>
  );
}

export function PostFR() {
  return (
    <article className="prose-content">
      <p className="lead">
        Sur un relevé classique de rénovation d'habitation — réfection de
        cuisine, démolition de salle de bains, ou quelques pièces de peinture
        et de sol — un mètre ruban et un carnet prennent 45 à 60 minutes. Le
        même relevé avec une appli AR sur iPhone et un plan d'étage mesuré
        prend 12 à 15 minutes. Voici le workflow qui y mène, et d'où vient
        réellement le gain de temps.
      </p>

      <h2>Ce que l'AR fait bien sur un chantier</h2>
      <ul>
        <li><strong>Cotes à l'échelle de la pièce.</strong> 4 à 6 murs en 60 secondes avec LiDAR ; 2 à 3 minutes en manuel.</li>
        <li><strong>Position du mobilier et des équipements.</strong> Le scan LiDAR étiquette automatiquement les éléments principaux.</li>
        <li><strong>Angles et équerrage.</strong> Crucial pour le recarrelage, la pose de meubles, partout où « ce mur fait-il vraiment 90° ? » compte.</li>
        <li><strong>Notes ancrées sur photo.</strong> Prenez une photo, tracez une flèche vers un détail, écrivez la mesure à côté. Le tout dans un seul projet.</li>
      </ul>

      <h2>Ce pour quoi l'AR n'est PAS faite</h2>
      <ul>
        <li><strong>Menuiserie au submillimètre.</strong> Utilisez un réglet en acier.</li>
        <li><strong>Longues diagonales (plus de 5 m) en extérieur.</strong> Utilisez un télémètre laser, la dérive de l'AR rend les longues portées peu fiables.</li>
        <li><strong>Vides sanitaires exigus sans lumière.</strong> L'AR par caméra échoue ; le LiDAR fonctionne, mais le téléphone doit pouvoir y entrer.</li>
        <li><strong>Plans de récolement pour dépôt de permis.</strong> La plupart des administrations exigent le tampon d'un géomètre agréé. L'appli vous donne un document de départ, pas le document final.</li>
      </ul>

      <h2>Le workflow de relevé en 15 minutes</h2>
      <h3>Minute 0-2 : arriver et s'installer</h3>
      <p>
        Garez-vous, entrez, saluez le propriétaire. Ouvrez Ruler AR. Créez un
        nouveau projet portant le nom de l'adresse. Ce sera le dossier où tout
        atterrit.
      </p>

      <h3>Minute 2-7 : scans de pièces</h3>
      <p>
        Avancez pièce par pièce. Pour chaque pièce avec LiDAR : appuyez sur
        Room Scan, faites le tour du périmètre, terminez. L'appli construit le
        plan d'étage automatiquement. Pour les pièces sans lumière suffisante
        (caves, placards), passez au Manual Room Builder et touchez chaque coin
        en parcourant le périmètre.
      </p>
      <p>
        Ajoutez chaque pièce au dossier du projet. La plupart des chantiers
        comptent 3 à 5 pièces ; cette phase consomme environ 5 minutes au
        total.
      </p>

      <h3>Minute 7-10 : mesures des éléments fixes</h3>
      <p>
        Par pièce, relevez les cotes qui ne seront pas visibles sur le plan
        d'étage :
      </p>
      <ul>
        <li>Hauteur de linteau et d'allège des fenêtres (depuis le sol)</li>
        <li>Largeur et hauteur de passage libre des portes</li>
        <li>Hauteur et profondeur du plan de travail (cuisines)</li>
        <li>Hauteur sous plafond (surtout en cas de retombée/faux plafond)</li>
        <li>Position des tuyaux existants (sous les éviers, dans la douche)</li>
      </ul>
      <p>
        Chaque mesure est enregistrée dans le projet de la pièce avec une
        vignette. Annotez celles qui nécessitent une explication (« vanne
        d'arrêt d'eau » avec photo).
      </p>

      <h3>Minute 10-13 : liste de réserves</h3>
      <p>
        Faites le tour avec le propriétaire. À mesure qu'il pointe des choses,
        prenez une photo dans l'appli, ajoutez une note (« carreau abîmé, à
        remplacer, ~0,5 m² ») et rattachez-la à la pièce concernée. Chaque
        photo est rattachée à sa pièce.
      </p>

      <h3>Minute 13-15 : export et clôture</h3>
      <p>
        Sur le dossier du projet, appuyez sur Partager → Exporter en PDF.
        L'appli génère un document consolidé : page de garde, plans d'étage par
        pièce avec cotes, mesures des éléments fixes, photos annotées, synthèse
        de la liste de réserves.
      </p>
      <p>
        Envoyez-le-vous par e-mail avant de partir. Le temps de revenir à votre
        camionnette, le propriétaire a le même PDF dans sa boîte mail.
      </p>

      <h2>Ce que cela permet et qu'un porte-bloc ne permettait pas</h2>
      <ul>
        <li>
          <strong>Devis le jour même.</strong> Vous pouvez rédiger l'estimation
          à partir du PDF le soir même, souvent avec les quantités de matériaux
          que le calculateur de l'appli a déjà estimées.
        </li>
        <li>
          <strong>Pré-qualification des sous-traitants.</strong> Envoyez le PDF
          au plombier/électricien/peintre avant leur visite. Ils arrivent en
          ayant déjà cerné le travail.
        </li>
        <li>
          <strong>Documentation des avenants.</strong> Tout changement de cote
          en cours de chantier est photographié et mesuré en 30 secondes, avec
          preuve photo et horodatage.
        </li>
        <li>
          <strong>Sinistres d'assurance.</strong> Si quelque chose tourne mal
          (dégât des eaux, mauvaise surprise structurelle), vous disposez d'une
          documentation mesurée d'avant-chantier comme preuve de l'état
          d'origine.
        </li>
      </ul>

      <h2>Précision en contexte professionnel</h2>
      <p>
        Pour l'essentiel des relevés, une tolérance de ±1 à 2 cm est
        acceptable. L'appli l'assure sans peine. Pour les cotes de finition
        (meubles, ébénisterie sur mesure, parois de douche en verre), utilisez
        un réglet en acier ou un mètre laser. L'appli sert à obtenir les chiffres
        bruts vite et de façon fiable ; les outils de précision interviennent à
        la phase de pose.
      </p>

      <h2>Recommandation matérielle</h2>
      <p>
        N'importe quel iPhone Pro à partir du 12. Le scanner LiDAR divise par
        deux votre temps de relevé et vous permet de mesurer dans des placards
        plongés dans le noir. L'iPhone 15 Pro et plus récents initialisent l'AR
        nettement plus vite (≈0,5 s contre 1 à 2 s sur les anciens modèles Pro).
        Si vous renouvelez votre matériel pour le travail, la gamme Pro
        rembourse l'écart de prix en temps de relevé économisé en environ 15
        chantiers.
      </p>

      <h2>Les irréductibles du papier-crayon</h2>
      <p>
        Certains artisans préfèrent encore le porte-bloc parce qu'ils font
        confiance à ce qu'ils ont noté. Légitime. L'approche hybride marche :
        utilisez l'iPhone pour le plan d'étage et les surfaces (là où le
        papier-crayon est lent et source d'erreurs), gardez le porte-bloc pour
        les croquis de meubles et les notes particulières (là où l'iPhone est
        excessif). Le PDF prévoit en bas un espace pour les ajouts manuscrits
        que vous scannez plus tard.
      </p>

      <h2>En résumé</h2>
      <p>
        Un relevé qui prend une heure avec les outils traditionnels prend 15
        minutes avec une appli AR. Sur une année à 50 chantiers, cela fait 35 à
        40 heures récupérées — une semaine de travail entière. La précision est
        comparable pour les besoins du relevé. Le rendu (PDF avec plan d'étage +
        cotes + photos + notes) est plus présentable pour les clients qu'un
        croquis fait à la main. Les 15 minutes d'installation et de prise en
        main de l'appli en valent la peine.
      </p>
    </article>
  );
}

export function PostES() {
  return (
    <article className="prose-content">
      <p className="lead">
        En un relevamiento típico de reforma de vivienda — renovación de
        cocina, desmonte de baño, o un par de habitaciones de pintura y suelo —
        una cinta métrica y una libreta llevan 45-60 minutos. El mismo
        relevamiento con una app AR en el iPhone y un plano acotado lleva 12-15
        minutos. Este es el flujo de trabajo que lo logra, y de dónde sale en
        realidad el ahorro de tiempo.
      </p>

      <h2>En qué es buena la AR en una obra</h2>
      <ul>
        <li><strong>Dimensiones a nivel de habitación.</strong> 4-6 paredes en 60 segundos con LiDAR; 2-3 minutos en manual.</li>
        <li><strong>Posición de muebles y aparatos.</strong> El escaneo LiDAR etiqueta automáticamente los elementos principales.</li>
        <li><strong>Ángulos y escuadría.</strong> Crucial para retejar, montar armarios, en cualquier sitio donde importe «¿esta pared está realmente a 90°?».</li>
        <li><strong>Notas ancladas a foto.</strong> Saca una foto, dibuja una flecha hacia un detalle, escribe la medida al lado. Todo en un mismo proyecto.</li>
      </ul>

      <h2>Para qué NO sirve la AR</h2>
      <ul>
        <li><strong>Carpintería de submilímetro.</strong> Usa un regla de acero.</li>
        <li><strong>Diagonales largas (más de 5 m) en exteriores.</strong> Usa un medidor láser de distancia, la deriva de la AR hace poco fiables las medidas largas.</li>
        <li><strong>Huecos técnicos estrechos sin luz.</strong> La AR por cámara falla; el LiDAR funciona, pero el teléfono tiene que caber.</li>
        <li><strong>Planos de obra terminada para licencias.</strong> La mayoría de los ayuntamientos exigen el sello de un topógrafo colegiado. La app te da un documento de partida, no el definitivo.</li>
      </ul>

      <h2>El flujo de relevamiento en 15 minutos</h2>
      <h3>Minuto 0-2: llegar y prepararse</h3>
      <p>
        Aparca, entra, saluda al propietario. Abre Ruler AR. Crea un proyecto
        nuevo con el nombre de la dirección. Esta será la carpeta donde acaba
        todo.
      </p>

      <h3>Minuto 2-7: escaneo de habitaciones</h3>
      <p>
        Recorre habitación por habitación. Para cada una con LiDAR: pulsa Room
        Scan, recorre el perímetro, finaliza. La app construye el plano
        automáticamente. Para las habitaciones sin luz suficiente (sótanos,
        trasteros), cambia a Manual Room Builder y toca cada esquina mientras
        recorres el perímetro.
      </p>
      <p>
        Añade cada habitación a la carpeta del proyecto. La mayoría de los
        trabajos son 3-5 habitaciones; esta fase se come unos 5 minutos en
        total.
      </p>

      <h3>Minuto 7-10: medidas de elementos fijos</h3>
      <p>
        Por habitación, captura las dimensiones que no se verán en el plano:
      </p>
      <ul>
        <li>Altura de dintel y de alféizar de las ventanas (desde el suelo)</li>
        <li>Ancho y alto de paso libre de las puertas</li>
        <li>Altura y fondo de encimera (cocinas)</li>
        <li>Altura de techo (sobre todo si hay falso techo/cajón)</li>
        <li>Posición de las tuberías existentes (bajo fregaderos, en la ducha)</li>
      </ul>
      <p>
        Cada medida se guarda en el proyecto de la habitación con una
        miniatura. Anota las que necesiten explicación («llave de corte de
        agua» con foto).
      </p>

      <h3>Minuto 10-13: lista de pendientes</h3>
      <p>
        Recorre la vivienda con el propietario. Según va señalando cosas, saca
        una foto en la app, añade una nota («baldosa dañada, sustituir, ~0,5
        m²») y adjúntala a la habitación correspondiente. Cada foto queda
        vinculada a su habitación.
      </p>

      <h3>Minuto 13-15: exportar y cerrar</h3>
      <p>
        En la carpeta del proyecto, pulsa Compartir → Exportar PDF. La app
        genera un documento consolidado: portada, planos por habitación con
        dimensiones, medidas de elementos fijos, fotos con anotaciones, resumen
        de la lista de pendientes.
      </p>
      <p>
        Envíatelo por correo antes de salir. Para cuando vuelvas a la
        furgoneta, el propietario tiene el mismo PDF en su bandeja de entrada.
      </p>

      <h2>Lo que esto permite y un portapapeles no</h2>
      <ul>
        <li>
          <strong>Presupuestos el mismo día.</strong> Puedes redactar el
          presupuesto a partir del PDF esa misma tarde, a menudo con las
          cantidades de material que la calculadora de la app ya estimó.
        </li>
        <li>
          <strong>Precalificación de subcontratistas.</strong> Envía el PDF al
          fontanero/electricista/pintor antes de su visita. Llegan con el
          trabajo ya valorado.
        </li>
        <li>
          <strong>Documentación de órdenes de cambio.</strong> Cualquier cambio
          de medida a mitad de obra se fotografía y mide en 30 segundos, con
          prueba fotográfica y marca de tiempo.
        </li>
        <li>
          <strong>Reclamaciones de seguro.</strong> Si algo sale mal (daño por
          agua, sorpresa estructural), tienes documentación medida previa a la
          obra como prueba del estado original.
        </li>
      </ul>

      <h2>Precisión en contexto profesional</h2>
      <p>
        Para la mayoría del trabajo de relevamiento, una tolerancia de ±1-2 cm
        es aceptable. La app la ofrece de sobra. Para dimensiones de acabado
        (armarios, ebanistería a medida, mamparas de ducha de cristal) usa una
        regla de acero o una cinta láser. La app sirve para obtener los números
        aproximados rápido y de forma fiable; las herramientas de precisión
        entran en la fase de instalación.
      </p>

      <h2>Recomendación de hardware</h2>
      <p>
        Cualquier iPhone Pro a partir del 12. El escáner LiDAR reduce a la
        mitad tu tiempo de relevamiento y te permite medir en trasteros a
        oscuras. El iPhone 15 Pro y posteriores inicializan la AR notablemente
        más rápido (≈0,5 s frente a 1-2 s en modelos Pro más antiguos). Si
        renuevas el equipo para trabajar, la gama Pro recupera la diferencia de
        precio en tiempo de relevamiento ahorrado en unos 15 trabajos.
      </p>

      <h2>Los que se aferran al papel y boli</h2>
      <p>
        Algunos contratistas siguen prefiriendo el portapapeles porque confían
        en lo que han apuntado. Es legítimo. El enfoque híbrido funciona: usa
        el iPhone para el plano y las superficies (donde el papel y boli son
        lentos y propensos a error), reserva el portapapeles para los croquis
        de armarios y notas especiales (donde el iPhone sobra). El PDF deja
        espacio abajo para los añadidos manuscritos que escaneas después.
      </p>

      <h2>Conclusión</h2>
      <p>
        Un relevamiento que lleva una hora con herramientas tradicionales lleva
        15 minutos con una app AR. En un año de 50 trabajos, eso son 35-40 horas
        recuperadas — una semana laboral entera. La precisión es comparable
        para fines de relevamiento. El resultado (PDF con plano + dimensiones +
        fotos + notas) es más presentable para los clientes que un croquis
        dibujado a mano. Merece la pena los 15 minutos de instalar y aprender la
        app.
      </p>
    </article>
  );
}

export function PostJA() {
  return (
    <article className="prose-content">
      <p className="lead">
        一般的な住宅リフォームの現地調査 — キッチン改装、浴室の解体、数部屋の塗装と
        床の張り替え — では、メジャーとノートで45〜60分かかります。同じ調査を
        iPhoneのARアプリと採寸済みの間取り図で行えば、12〜15分で済みます。ここでは
        そこに至るワークフローと、時間短縮が実際にどこから生まれるのかを紹介します。
      </p>

      <h2>現場でARが得意なこと</h2>
      <ul>
        <li><strong>部屋単位の寸法。</strong>LiDARなら4〜6面の壁を60秒で、手動でも2〜3分。</li>
        <li><strong>家具と設備の位置。</strong>LiDARスキャンが主要な物を自動でタグ付けします。</li>
        <li><strong>角度と直角。</strong>タイルの貼り替え、キャビネット設置など、「この壁は本当に90°か?」が問われる場面で不可欠です。</li>
        <li><strong>写真に紐づくメモ。</strong>写真を撮り、対象に矢印を引き、その横に寸法を書き込む。すべて一つのプロジェクトに収まります。</li>
      </ul>

      <h2>ARが向いていないこと</h2>
      <ul>
        <li><strong>サブミリ単位の造作家具作業。</strong>スチール定規を使ってください。</li>
        <li><strong>屋外の長い対角線(5メートル超)。</strong>レーザー距離計を使ってください。ARのドリフトで長距離の計測は信頼できません。</li>
        <li><strong>光のない狭い床下空間。</strong>カメラARは機能しません。LiDARは使えますが、スマホが入る必要があります。</li>
        <li><strong>許認可申請用の竣工図。</strong>多くの自治体は有資格測量士の押印を求めます。アプリが渡すのは出発点となる書類であって、最終版ではありません。</li>
      </ul>

      <h2>15分の調査ワークフロー</h2>
      <h3>0〜2分:到着と準備</h3>
      <p>
        駐車し、入り、施主に挨拶します。Ruler ARを開きます。住所の名前を付けた新規
        プロジェクトを作成します。これがすべてが集まるフォルダになります。
      </p>

      <h3>2〜7分:部屋のスキャン</h3>
      <p>
        部屋ごとに進みます。LiDAR対応の各部屋では、Room Scanをタップし、外周を歩き、
        完了します。アプリが間取り図を自動で作成します。十分な光がない部屋(地下室、
        クローゼット)では、Manual Room Builderに切り替え、外周を歩きながら各角を
        タップします。
      </p>
      <p>
        各部屋をプロジェクトフォルダに追加します。ほとんどの案件は3〜5部屋で、この
        段階で合計約5分かかります。
      </p>

      <h3>7〜10分:固定要素の計測</h3>
      <p>
        部屋ごとに、間取り図には表れない寸法を記録します:
      </p>
      <ul>
        <li>窓の上端と窓台の高さ(床から)</li>
        <li>ドアの有効開口幅と高さ</li>
        <li>カウンターの高さと奥行き(キッチン)</li>
        <li>天井高(特に下がり天井/ふかし天井の場合)</li>
        <li>既存配管の位置(シンク下、シャワー内)</li>
      </ul>
      <p>
        各計測はサムネイル付きで部屋のプロジェクトに保存されます。説明が必要なものには
        注記を付けます(「給水止水栓」を写真とともに)。
      </p>

      <h3>10〜13分:不具合リスト</h3>
      <p>
        施主と一緒に見て回ります。施主が指摘するたびに、アプリで写真を撮り、メモを
        追加し(「破損タイル、要交換、約0.5平方メートル」)、該当する部屋に紐づけます。
        どの写真もその部屋に位置づけられます。
      </p>

      <h3>13〜15分:書き出しと締め</h3>
      <p>
        プロジェクトフォルダで共有 → PDFを書き出すをタップします。アプリが統合
        ドキュメントを生成します:表紙、寸法付きの部屋ごとの間取り図、固定要素の計測、
        注記付き写真、不具合リストの要約。
      </p>
      <p>
        現場を出る前に自分宛にメールしておきます。あなたが車に戻る頃には、施主の
        受信箱にも同じPDFが届いています。
      </p>

      <h2>クリップボードではできなかったこと</h2>
      <ul>
        <li>
          <strong>当日見積もり。</strong>その晩のうちにPDFから見積もりを作成でき、
          アプリの計算機があらかじめ算出した材料数量がついていることも多いです。
        </li>
        <li>
          <strong>下請けの事前準備。</strong>訪問前に配管工/電気工/塗装工へPDFを
          送ります。彼らは作業範囲を把握した状態で来ます。
        </li>
        <li>
          <strong>変更指示の記録。</strong>工事中のどんな寸法変更も30秒で写真撮影と
          計測ができ、写真の証拠とタイムスタンプが残ります。
        </li>
        <li>
          <strong>保険請求。</strong>何か問題が起きた場合(水漏れ、構造上の想定外)、
          着工前に計測した記録が原状の証拠として手元にあります。
        </li>
      </ul>

      <h2>プロの文脈での精度</h2>
      <p>
        ほとんどの現地調査では、±1〜2センチの公差で十分です。アプリはこれを余裕で
        満たします。仕上げ精度の寸法(キャビネット、特注造作、ガラスのシャワー
        ブース)にはスチール定規かレーザーメジャーを使ってください。アプリは概数を
        速く確実に得るためのもので、精密な道具は取り付け工程で登場します。
      </p>

      <h2>ハードウェアの推奨</h2>
      <p>
        12以降のiPhone Proなら何でも。LiDARスキャナーは調査時間を半分にし、真っ暗な
        クローゼットでも計測できます。iPhone 15 Pro以降はARの初期化が目に見えて速く
        (旧Proモデルの1〜2秒に対して約0.5秒)。仕事のために機材を更新するなら、Pro
        ラインは節約できる調査時間で約15件のうちに価格差を取り戻します。
      </p>

      <h2>紙とペンを手放さない人たち</h2>
      <p>
        自分で書いたものを信頼するからと、いまだにクリップボードを好む職人もいます。
        もっともです。ハイブリッドな方法が効きます:間取り図と面積の数値にはiPhoneを
        使い(紙とペンが遅くミスしやすいところ)、キャビネットのスケッチや特別なメモ
        にはクリップボードを残す(iPhoneでは大げさなところ)。PDFには下部に、後で
        スキャンする手書きの補足のためのスペースがあります。
      </p>

      <h2>結論</h2>
      <p>
        従来の道具で1時間かかる現地調査が、ARアプリなら15分で済みます。年間50件なら
        35〜40時間の回収 — まるまる1週間分の労働です。調査目的では精度は同等です。
        成果物(間取り図 + 寸法 + 写真 + メモのPDF)は、手描きのスケッチより顧客に
        見せやすいものです。アプリのインストールと習得にかかる15分の価値はあります。
      </p>
    </article>
  );
}

export function PostKO() {
  return (
    <article className="prose-content">
      <p className="lead">
        일반적인 주택 리모델링 현장 실측 — 주방 개조, 욕실 철거, 또는 몇 개 방의
        도장과 바닥 작업 — 에서는 줄자와 노트로 45~60분이 걸립니다. 같은 실측을
        iPhone AR 앱과 실측 평면도로 하면 12~15분이면 됩니다. 거기에 이르는
        워크플로와 시간 절감이 실제로 어디서 나오는지 소개합니다.
      </p>

      <h2>현장에서 AR이 잘하는 것</h2>
      <ul>
        <li><strong>방 단위 치수.</strong> LiDAR로는 벽 4~6면을 60초에, 수동으로는 2~3분에.</li>
        <li><strong>가구와 설비 위치.</strong> LiDAR 스캔이 주요 항목을 자동으로 태그합니다.</li>
        <li><strong>각도와 직각.</strong> 타일 재시공, 캐비닛 설치 등 "이 벽이 정말 90°인가?"가 중요한 곳마다 필수입니다.</li>
        <li><strong>사진에 고정된 메모.</strong> 사진을 찍고, 대상에 화살표를 그리고, 그 옆에 치수를 적습니다. 모두 하나의 프로젝트 안에서.</li>
      </ul>

      <h2>AR이 맞지 않는 것</h2>
      <ul>
        <li><strong>밀리미터 이하의 가구 제작 작업.</strong> 강철 자를 사용하세요.</li>
        <li><strong>실외의 긴 대각선(5m 초과).</strong> 레이저 거리계를 사용하세요. AR 드리프트 때문에 긴 거리 측정은 신뢰하기 어렵습니다.</li>
        <li><strong>빛이 없는 좁은 점검 공간.</strong> 카메라 AR은 실패합니다. LiDAR는 작동하지만 휴대폰이 들어갈 수 있어야 합니다.</li>
        <li><strong>인허가 제출용 준공 도면.</strong> 대부분의 지자체는 자격을 갖춘 측량사의 날인을 요구합니다. 앱은 출발 문서를 줄 뿐 최종본은 아닙니다.</li>
      </ul>

      <h2>15분 실측 워크플로</h2>
      <h3>0~2분: 도착과 준비</h3>
      <p>
        주차하고, 들어가, 집주인에게 인사합니다. Ruler AR을 엽니다. 주소를 이름으로
        한 새 프로젝트를 만듭니다. 이것이 모든 것이 모이는 폴더가 됩니다.
      </p>

      <h3>2~7분: 방 스캔</h3>
      <p>
        방을 하나씩 돌아봅니다. LiDAR가 되는 각 방에서는 Room Scan을 누르고, 둘레를
        걷고, 완료합니다. 앱이 평면도를 자동으로 만듭니다. 빛이 충분하지 않은 방
        (지하실, 벽장)에서는 Manual Room Builder로 전환해 둘레를 걸으며 각 모서리를
        탭합니다.
      </p>
      <p>
        각 방을 프로젝트 폴더에 추가합니다. 대부분의 작업은 3~5개 방이며, 이 단계는
        전체적으로 약 5분이 걸립니다.
      </p>

      <h3>7~10분: 고정 요소 측정</h3>
      <p>
        방마다 평면도에 보이지 않을 치수를 기록합니다:
      </p>
      <ul>
        <li>창 상단과 창틀 높이(바닥에서)</li>
        <li>문의 유효 개구 폭과 높이</li>
        <li>카운터 높이와 깊이(주방)</li>
        <li>천장 높이(특히 우물천장/내림천장이 있는 경우)</li>
        <li>기존 배관 위치(싱크대 아래, 샤워실 안)</li>
      </ul>
      <p>
        각 측정값은 썸네일과 함께 방의 프로젝트에 저장됩니다. 설명이 필요한 것에는
        주석을 답니다("급수 차단 밸브"를 사진과 함께).
      </p>

      <h3>10~13분: 하자 목록</h3>
      <p>
        집주인과 함께 둘러봅니다. 집주인이 무언가를 가리킬 때마다 앱에서 사진을 찍고,
        메모를 추가하고("손상된 타일, 교체, 약 0.5㎡"), 해당 방에 첨부합니다. 모든
        사진은 그 방에 위치 지정됩니다.
      </p>

      <h3>13~15분: 내보내기와 마무리</h3>
      <p>
        프로젝트 폴더에서 공유 → PDF 내보내기를 누릅니다. 앱이 통합 문서를 생성합니다:
        표지, 치수가 들어간 방별 평면도, 고정 요소 측정값, 주석이 달린 사진, 하자 목록
        요약.
      </p>
      <p>
        떠나기 전에 자신에게 이메일로 보냅니다. 당신이 트럭으로 돌아갈 즈음이면,
        집주인의 받은편지함에도 같은 PDF가 도착해 있습니다.
      </p>

      <h2>클립보드로는 안 됐던 것들</h2>
      <ul>
        <li>
          <strong>당일 견적.</strong> 그날 저녁에 PDF로 견적을 작성할 수 있으며,
          앱의 계산기가 미리 산출한 자재 수량이 함께 있는 경우도 많습니다.
        </li>
        <li>
          <strong>하도급 업체 사전 준비.</strong> 방문 전에 배관공/전기공/도장공에게
          PDF를 보냅니다. 그들은 작업 범위를 이미 파악한 채로 옵니다.
        </li>
        <li>
          <strong>변경 지시 기록.</strong> 작업 중 어떤 치수 변경도 30초 만에 사진과
          측정으로 남기며, 사진 증거와 타임스탬프가 함께 남습니다.
        </li>
        <li>
          <strong>보험 청구.</strong> 무언가 잘못되면(누수, 구조적 의외의 문제),
          착공 전에 측정한 기록이 원래 상태의 증거로 손에 있습니다.
        </li>
      </ul>

      <h2>전문가 맥락에서의 정확도</h2>
      <p>
        대부분의 현장 실측 작업에서는 ±1~2cm 공차가 허용됩니다. 앱은 이를 충분히
        제공합니다. 마감 수준의 치수(캐비닛, 맞춤 목공, 유리 샤워 부스)에는 강철 자나
        레이저 줄자를 사용하세요. 앱은 대략적인 수치를 빠르고 안정적으로 얻기 위한
        것이고, 정밀 도구는 설치 단계에서 등장합니다.
      </p>

      <h2>하드웨어 권장 사항</h2>
      <p>
        12 이후의 iPhone Pro라면 무엇이든. LiDAR 스캐너는 실측 시간을 절반으로
        줄이고 칠흑같이 어두운 벽장에서도 측정할 수 있게 합니다. iPhone 15 Pro와 이후
        모델은 AR 초기화가 눈에 띄게 빠릅니다(구형 Pro 모델의 1~2초에 비해 약 0.5초).
        업무용으로 장비를 교체한다면, Pro 라인은 절약된 실측 시간으로 약 15건 안에
        가격 차이를 회수합니다.
      </p>

      <h2>펜과 종이를 고수하는 사람들</h2>
      <p>
        일부 시공자는 자신이 적은 것을 신뢰하기 때문에 여전히 클립보드를 선호합니다.
        타당합니다. 하이브리드 방식이 통합니다: 평면도와 면적 수치에는 iPhone을 쓰고
        (펜과 종이가 느리고 오류가 잦은 곳), 캐비닛 스케치와 특별한 메모에는
        클립보드를 둡니다(iPhone이 과한 곳). PDF에는 하단에 나중에 스캔할 손글씨
        추가분을 위한 공간이 있습니다.
      </p>

      <h2>결론</h2>
      <p>
        전통적인 도구로 한 시간 걸리는 현장 실측이 AR 앱으로는 15분이면 됩니다. 연간
        50건이면 35~40시간을 되찾는 셈 — 꼬박 한 주의 노동입니다. 실측 목적의
        정확도는 비슷합니다. 결과물(평면도 + 치수 + 사진 + 메모가 든 PDF)은 손으로
        그린 스케치보다 고객에게 보여주기 좋습니다. 앱을 설치하고 익히는 15분의
        가치가 있습니다.
      </p>
    </article>
  );
}

export function PostZH() {
  return (
    <article className="prose-content">
      <p className="lead">
        在一次典型的住宅装修现场测量中 — 厨房改造、卫生间拆除，或几个房间的刷漆和
        铺地 — 用卷尺加笔记本要花45到60分钟。同样的测量，用iPhone的AR应用加一份带
        尺寸的平面图，只需12到15分钟。下面就是实现这一点的工作流，以及时间到底省在
        了哪里。
      </p>

      <h2>AR在工地上擅长什么</h2>
      <ul>
        <li><strong>房间级尺寸。</strong>用LiDAR可在60秒内测出4到6面墙；手动则需2到3分钟。</li>
        <li><strong>家具和器具的位置。</strong>LiDAR扫描会自动标记主要物件。</li>
        <li><strong>角度和方正度。</strong>对重新贴砖、安装橱柜等任何在意"这面墙真的是90°吗?"的场合至关重要。</li>
        <li><strong>锚定在照片上的备注。</strong>拍一张照片，朝某个细节画一个箭头，在旁边写上尺寸。全都在一个项目里。</li>
      </ul>

      <h2>AR不适合做什么</h2>
      <ul>
        <li><strong>亚毫米级的橱柜作业。</strong>请用钢尺。</li>
        <li><strong>户外的长对角线(超过5米)。</strong>请用激光测距仪，AR漂移会让长距离测量变得不可靠。</li>
        <li><strong>没有光的狭窄检修空间。</strong>摄像头AR会失效；LiDAR可用，但手机得能塞进去。</li>
        <li><strong>用于报建的竣工图。</strong>多数主管部门要求持证测量师盖章。应用给你的是一份起步文件，不是最终成果。</li>
      </ul>

      <h2>15分钟测量工作流</h2>
      <h3>第0到2分钟:到场与准备</h3>
      <p>
        停车，进门，问候业主。打开Ruler AR。新建一个以地址命名的项目。这将成为所有
        内容归集的文件夹。
      </p>

      <h3>第2到7分钟:房间扫描</h3>
      <p>
        逐间走过。对每个支持LiDAR的房间:点按Room Scan，沿周边走一圈，完成。应用会
        自动生成平面图。对于光线不足的房间(地下室、储物间),切换到Manual Room
        Builder，沿周边行走时逐个点按每个墙角。
      </p>
      <p>
        把每个房间加入项目文件夹。多数工程是3到5个房间;这一阶段总共大约吃掉5分钟。
      </p>

      <h3>第7到10分钟:固定构件测量</h3>
      <p>
        逐房记录那些在平面图上看不出来的尺寸:
      </p>
      <ul>
        <li>窗户上沿和窗台的高度(从地面算)</li>
        <li>门的净开启宽度和高度</li>
        <li>台面的高度和深度(厨房)</li>
        <li>层高(尤其有吊顶/降板时)</li>
        <li>现有管道的位置(水槽下方、淋浴间内)</li>
      </ul>
      <p>
        每条测量都会带缩略图保存进该房间的项目。给需要说明的加上备注("供水关断阀"
        配照片)。
      </p>

      <h3>第10到13分钟:整改清单</h3>
      <p>
        和业主一起走一遍。业主指出什么，就在应用里拍张照片，加一条备注("瓷砖破损，
        更换，约0.5平方米"),并附到对应的房间。每张照片都会定位到它所属的房间。
      </p>

      <h3>第13到15分钟:导出与收尾</h3>
      <p>
        在项目文件夹上点按分享 → 导出PDF。应用会生成一份汇总文档:封面、各房间带
        尺寸的平面图、固定构件测量、带备注的照片、整改清单摘要。
      </p>
      <p>
        离开前把它发到自己的邮箱。等你回到车上时，业主的收件箱里也有了同一份PDF。
      </p>

      <h2>这带来了夹板做不到的事</h2>
      <ul>
        <li>
          <strong>当天报价。</strong>你可以当晚就根据PDF写出估价，往往还附带应用
          计算器已经估算好的材料用量。
        </li>
        <li>
          <strong>分包商预先摸底。</strong>在水管工/电工/油漆工上门之前把PDF发给
          他们。他们到场时已经了解了工作范围。
        </li>
        <li>
          <strong>变更单记录。</strong>施工中任何尺寸变更都能在30秒内拍照并测量，
          带有照片证据和时间戳。
        </li>
        <li>
          <strong>保险理赔。</strong>万一出了问题(水损、结构性意外),你手上有施工
          前测量好的记录，作为原始状态的证据。
        </li>
      </ul>

      <h2>专业场景下的精度</h2>
      <p>
        对大多数现场测量工作而言，±1到2厘米的公差是可以接受的。应用能轻松达到。对
        于精装级尺寸(橱柜、定制木作、玻璃淋浴房),请用钢尺或激光卷尺。应用是用来又
        快又稳地拿到大致数字的;精密工具在安装阶段才登场。
      </p>

      <h2>硬件建议</h2>
      <p>
        12及以后的任意一款iPhone Pro。LiDAR扫描仪把你的测量时间砍掉一半，还能让你
        在漆黑的储物间里测量。iPhone 15 Pro及更新机型的AR初始化明显更快(约0.5秒，
        而老款Pro机型为1到2秒)。如果你为工作更新设备，Pro系列靠省下的测量时间，大约
        15个工程内就能挣回差价。
      </p>

      <h2>坚持纸笔的人</h2>
      <p>
        有些承包商仍偏爱夹板，因为他们信任自己亲手写下的东西。可以理解。混合做法
        行得通:平面图和面积数字用iPhone(纸笔在这里又慢又易错),橱柜草图和特殊备注
        留给夹板(iPhone在这里大材小用)。PDF底部留有空间，供你日后扫描手写补充。
      </p>

      <h2>总结</h2>
      <p>
        用传统工具要花一小时的现场测量，用AR应用15分钟就能完成。按一年50个工程算，
        那就是省回35到40小时 — 整整一个工作周。就测量目的而言，精度相当。成果(带
        平面图 + 尺寸 + 照片 + 备注的PDF)比手绘草图更能拿得出手给客户。安装并学会
        这款应用花的那15分钟，值。
      </p>
    </article>
  );
}

export function PostPT() {
  return (
    <article className="prose-content">
      <p className="lead">
        Em um levantamento típico de reforma residencial — reforma de cozinha,
        demolição de banheiro, ou alguns cômodos de pintura e piso — uma trena
        e um caderno levam 45 a 60 minutos. O mesmo levantamento com um app de
        AR no iPhone e uma planta baixa medida leva 12 a 15 minutos. Aqui está
        o fluxo de trabalho que leva até lá, e de onde a economia de tempo
        realmente vem.
      </p>

      <h2>No que a AR é boa em uma obra</h2>
      <ul>
        <li><strong>Dimensões no nível do cômodo.</strong> 4 a 6 paredes em 60 segundos com LiDAR; 2 a 3 minutos no manual.</li>
        <li><strong>Posição de móveis e equipamentos.</strong> O escaneamento LiDAR marca automaticamente os itens principais.</li>
        <li><strong>Ângulos e esquadro.</strong> Crucial para reassentar pisos, instalar armários, em qualquer lugar onde "essa parede está mesmo a 90°?" importa.</li>
        <li><strong>Notas ancoradas em foto.</strong> Tire uma foto, desenhe uma seta até um detalhe, escreva a medida ao lado. Tudo em um único projeto.</li>
      </ul>

      <h2>Para o que a AR NÃO serve</h2>
      <ul>
        <li><strong>Marcenaria de submilímetro.</strong> Use uma régua de aço.</li>
        <li><strong>Diagonais longas (acima de 5 m) ao ar livre.</strong> Use um medidor de distância a laser, a deriva da AR torna as medidas longas pouco confiáveis.</li>
        <li><strong>Espaços de inspeção apertados e sem luz.</strong> A AR por câmera falha; o LiDAR funciona, mas o celular precisa caber.</li>
        <li><strong>Desenhos as-built para pedidos de alvará.</strong> A maioria das prefeituras exige o carimbo de um agrimensor habilitado. O app dá um documento de partida, não o final.</li>
      </ul>

      <h2>O fluxo de levantamento em 15 minutos</h2>
      <h3>Minuto 0-2: chegar e se preparar</h3>
      <p>
        Estacione, entre, cumprimente o proprietário. Abra o Ruler AR. Crie um
        projeto novo com o nome do endereço. Essa será a pasta onde tudo cai.
      </p>

      <h3>Minuto 2-7: escaneamento dos cômodos</h3>
      <p>
        Percorra cômodo por cômodo. Para cada cômodo com LiDAR: toque em Room
        Scan, percorra o perímetro, finalize. O app monta a planta baixa
        automaticamente. Para cômodos sem luz suficiente (porões, closets),
        mude para o Manual Room Builder e toque em cada canto percorrendo o
        perímetro.
      </p>
      <p>
        Adicione cada cômodo à pasta do projeto. A maioria dos trabalhos tem 3
        a 5 cômodos; essa fase consome cerca de 5 minutos no total.
      </p>

      <h3>Minuto 7-10: medidas de elementos fixos</h3>
      <p>
        Por cômodo, capture as dimensões que não aparecerão na planta baixa:
      </p>
      <ul>
        <li>Altura do verga e do peitoril das janelas (a partir do piso)</li>
        <li>Largura e altura do vão livre das portas</li>
        <li>Altura e profundidade da bancada (cozinhas)</li>
        <li>Pé-direito (especialmente com forro/teto rebaixado)</li>
        <li>Posição das tubulações existentes (sob pias, no box)</li>
      </ul>
      <p>
        Cada medida é salva no projeto do cômodo com uma miniatura. Anote as
        que precisam de explicação ("registro de água" com foto).
      </p>

      <h3>Minuto 10-13: lista de pendências</h3>
      <p>
        Percorra com o proprietário. À medida que ele aponta as coisas, tire
        uma foto no app, adicione uma nota ("azulejo danificado, trocar, ~0,5
        m²") e anexe ao cômodo correspondente. Cada foto fica vinculada ao seu
        cômodo.
      </p>

      <h3>Minuto 13-15: exportar e encerrar</h3>
      <p>
        Na pasta do projeto, toque em Compartilhar → Exportar PDF. O app gera
        um documento consolidado: capa, plantas baixas por cômodo com
        dimensões, medidas de elementos fixos, fotos com anotações, resumo da
        lista de pendências.
      </p>
      <p>
        Mande para o seu e-mail antes de sair. Quando você voltar à
        caminhonete, o proprietário já tem o mesmo PDF na caixa de entrada.
      </p>

      <h2>O que isso permite e a prancheta não permitia</h2>
      <ul>
        <li>
          <strong>Orçamentos no mesmo dia.</strong> Você pode escrever a
          estimativa a partir do PDF naquela mesma noite, muitas vezes com as
          quantidades de material que a calculadora do app já estimou.
        </li>
        <li>
          <strong>Pré-qualificação de subcontratados.</strong> Envie o PDF ao
          encanador/eletricista/pintor antes da visita. Eles chegam já tendo
          dimensionado o serviço.
        </li>
        <li>
          <strong>Documentação de ordens de mudança.</strong> Qualquer mudança
          de medida no meio da obra é fotografada e medida em 30 segundos, com
          prova fotográfica e carimbo de data e hora.
        </li>
        <li>
          <strong>Sinistros de seguro.</strong> Se algo der errado (dano por
          água, surpresa estrutural), você tem documentação medida de antes da
          obra como prova do estado original.
        </li>
      </ul>

      <h2>Precisão em contexto profissional</h2>
      <p>
        Para a maior parte do trabalho de levantamento, uma tolerância de ±1 a
        2 cm é aceitável. O app entrega isso com folga. Para dimensões de
        acabamento (armários, marcenaria sob medida, boxes de vidro), use uma
        régua de aço ou trena a laser. O app serve para obter os números
        aproximados de forma rápida e confiável; as ferramentas de precisão
        entram na fase de instalação.
      </p>

      <h2>Recomendação de hardware</h2>
      <p>
        Qualquer iPhone Pro a partir do 12. O scanner LiDAR corta seu tempo de
        levantamento pela metade e permite medir em closets totalmente
        escuros. O iPhone 15 Pro e mais novos inicializam a AR
        perceptivelmente mais rápido (≈0,5 s contra 1 a 2 s nos modelos Pro mais
        antigos). Se você está renovando o equipamento para o trabalho, a linha
        Pro recupera a diferença de preço em tempo de levantamento economizado
        em cerca de 15 trabalhos.
      </p>

      <h2>Os fiéis ao papel e caneta</h2>
      <p>
        Alguns empreiteiros ainda preferem a prancheta porque confiam no que
        escreveram. Justo. A abordagem híbrida funciona: use o iPhone para a
        planta baixa e as áreas (onde papel e caneta são lentos e sujeitos a
        erro), mantenha a prancheta para os croquis de armários e notas
        especiais (onde o iPhone é exagero). O PDF inclui espaço na parte de
        baixo para adendos manuscritos que você digitaliza depois.
      </p>

      <h2>Conclusão</h2>
      <p>
        Um levantamento que leva uma hora com ferramentas tradicionais leva 15
        minutos com um app de AR. Em um ano de 50 trabalhos, são 35 a 40 horas
        recuperadas — uma semana de trabalho inteira. A precisão é comparável
        para fins de levantamento. O resultado (PDF com planta baixa +
        dimensões + fotos + notas) é mais apresentável para os clientes do que
        um croqui feito à mão. Vale os 15 minutos de instalar e aprender o app.
      </p>
    </article>
  );
}

export function PostIT() {
  return (
    <article className="prose-content">
      <p className="lead">
        In un tipico rilievo per la ristrutturazione di una casa — rifacimento
        della cucina, demolizione del bagno, o un paio di stanze tra
        tinteggiatura e pavimento — un metro a nastro e un taccuino richiedono
        45-60 minuti. Lo stesso rilievo con un'app AR su iPhone e una
        planimetria quotata richiede 12-15 minuti. Ecco il flusso di lavoro che
        ci porta lì, e da dove arriva davvero il risparmio di tempo.
      </p>

      <h2>In cosa l'AR è brava in cantiere</h2>
      <ul>
        <li><strong>Dimensioni a livello di stanza.</strong> 4-6 pareti in 60 secondi con LiDAR; 2-3 minuti in manuale.</li>
        <li><strong>Posizione di mobili e sanitari.</strong> La scansione LiDAR etichetta automaticamente gli elementi principali.</li>
        <li><strong>Angoli e squadratura.</strong> Cruciale per riposare le piastrelle, montare i mobili, ovunque conti "questa parete è davvero a 90°?".</li>
        <li><strong>Note ancorate alla foto.</strong> Scatta una foto, disegna una freccia verso un dettaglio, scrivi la misura accanto. Tutto in un unico progetto.</li>
      </ul>

      <h2>A cosa l'AR NON serve</h2>
      <ul>
        <li><strong>Lavori di falegnameria al submillimetro.</strong> Usa un righello d'acciaio.</li>
        <li><strong>Lunghe diagonali (oltre 5 m) all'aperto.</strong> Usa un misuratore laser, la deriva dell'AR rende inaffidabili le misure lunghe.</li>
        <li><strong>Vespai stretti e senza luce.</strong> L'AR a fotocamera fallisce; il LiDAR funziona, ma il telefono ci deve entrare.</li>
        <li><strong>Disegni as-built per le pratiche edilizie.</strong> La maggior parte dei comuni richiede il timbro di un geometra abilitato. L'app ti dà un documento di partenza, non quello finale.</li>
      </ul>

      <h2>Il flusso di rilievo in 15 minuti</h2>
      <h3>Minuto 0-2: arrivare e prepararsi</h3>
      <p>
        Parcheggia, entra, saluta il proprietario. Apri Ruler AR. Crea un nuovo
        progetto col nome dell'indirizzo. Diventerà la cartella in cui finisce
        tutto.
      </p>

      <h3>Minuto 2-7: scansione delle stanze</h3>
      <p>
        Procedi stanza per stanza. Per ogni stanza con LiDAR: tocca Room Scan,
        percorri il perimetro, termina. L'app costruisce la planimetria
        automaticamente. Per le stanze senza luce sufficiente (cantine,
        ripostigli), passa al Manual Room Builder e tocca ogni angolo
        percorrendo il perimetro.
      </p>
      <p>
        Aggiungi ogni stanza alla cartella del progetto. La maggior parte dei
        lavori è di 3-5 stanze; questa fase divora circa 5 minuti in totale.
      </p>

      <h3>Minuto 7-10: misure degli elementi fissi</h3>
      <p>
        Per ogni stanza, rileva le dimensioni che non saranno visibili in
        planimetria:
      </p>
      <ul>
        <li>Altezza dell'architrave e del davanzale delle finestre (dal pavimento)</li>
        <li>Larghezza e altezza del vano luce delle porte</li>
        <li>Altezza e profondità del piano di lavoro (cucine)</li>
        <li>Altezza del soffitto (specie con velette/controsoffitto)</li>
        <li>Posizione delle tubazioni esistenti (sotto i lavelli, nella doccia)</li>
      </ul>
      <p>
        Ogni misura viene salvata nel progetto della stanza con una miniatura.
        Annota quelle che richiedono spiegazione ("valvola di intercettazione
        acqua" con foto).
      </p>

      <h3>Minuto 10-13: lista delle riserve</h3>
      <p>
        Fai il giro col proprietario. Man mano che indica le cose, scatta una
        foto nell'app, aggiungi una nota ("piastrella danneggiata, sostituire,
        ~0,5 m²") e collegala alla stanza pertinente. Ogni foto viene associata
        alla sua stanza.
      </p>

      <h3>Minuto 13-15: esportazione e chiusura</h3>
      <p>
        Sulla cartella del progetto, tocca Condividi → Esporta PDF. L'app
        genera un documento consolidato: copertina, planimetrie per stanza con
        quote, misure degli elementi fissi, foto con annotazioni, riepilogo
        della lista delle riserve.
      </p>
      <p>
        Inviatelo via e-mail prima di andartene. Quando torni al furgone, il
        proprietario ha lo stesso PDF nella sua casella di posta.
      </p>

      <h2>Cosa permette che una cartelletta non permetteva</h2>
      <ul>
        <li>
          <strong>Preventivi in giornata.</strong> Puoi redigere il preventivo
          dal PDF la sera stessa, spesso già con le quantità di materiale che
          il calcolatore dell'app ha stimato.
        </li>
        <li>
          <strong>Pre-qualifica dei subappaltatori.</strong> Invia il PDF
          all'idraulico/elettricista/imbianchino prima della visita. Si
          presentano avendo già inquadrato il lavoro.
        </li>
        <li>
          <strong>Documentazione delle varianti.</strong> Qualsiasi modifica di
          quota in corso d'opera viene fotografata e misurata in 30 secondi,
          con prova fotografica e marca temporale.
        </li>
        <li>
          <strong>Sinistri assicurativi.</strong> Se qualcosa va storto (danno
          da acqua, sorpresa strutturale), hai una documentazione misurata
          precedente al lavoro come prova dello stato originario.
        </li>
      </ul>

      <h2>Precisione in contesto professionale</h2>
      <p>
        Per la maggior parte dei rilievi, una tolleranza di ±1-2 cm è
        accettabile. L'app la garantisce con comodità. Per le quote di finitura
        (mobili, ebanisteria su misura, box doccia in vetro) usa un righello
        d'acciaio o un metro laser. L'app serve a ottenere i numeri grezzi in
        fretta e in modo affidabile; gli strumenti di precisione entrano in
        gioco in fase di posa.
      </p>

      <h2>Raccomandazione hardware</h2>
      <p>
        Qualsiasi iPhone Pro dal 12 in poi. Lo scanner LiDAR dimezza il tempo
        di rilievo e ti permette di misurare in ripostigli al buio pesto.
        L'iPhone 15 Pro e successivi inizializzano l'AR in modo
        sensibilmente più rapido (≈0,5 s contro 1-2 s sui modelli Pro più
        vecchi). Se rinnovi l'attrezzatura per lavoro, la linea Pro recupera la
        differenza di prezzo col tempo di rilievo risparmiato in circa 15
        lavori.
      </p>

      <h2>Gli affezionati a carta e penna</h2>
      <p>
        Alcuni artigiani preferiscono ancora la cartelletta perché si fidano di
        ciò che hanno scritto a mano. È legittimo. L'approccio ibrido funziona:
        usa l'iPhone per la planimetria e le superfici (dove carta e penna sono
        lente e soggette a errori), tieni la cartelletta per gli schizzi dei
        mobili e le note particolari (dove l'iPhone è eccessivo). Il PDF prevede
        in fondo uno spazio per le aggiunte scritte a mano che scansioni in
        seguito.
      </p>

      <h2>In conclusione</h2>
      <p>
        Un rilievo che con gli strumenti tradizionali richiede un'ora, con
        un'app AR richiede 15 minuti. Su un anno da 50 lavori, fanno 35-40 ore
        recuperate — un'intera settimana lavorativa. La precisione è
        paragonabile ai fini del rilievo. Il risultato (PDF con planimetria +
        quote + foto + note) è più presentabile per i clienti di uno schizzo
        fatto a mano. Vale i 15 minuti necessari a installare e imparare l'app.
      </p>
    </article>
  );
}

export function PostPL() {
  return (
    <article className="prose-content">
      <p className="lead">
        Przy typowej inwentaryzacji remontu mieszkania — przebudowa kuchni,
        wyburzenie łazienki, albo kilka pomieszczeń do malowania i podłóg —
        miarka i notatnik zajmują 45-60 minut. Ta sama inwentaryzacja z aplikacją
        AR na iPhonie i zwymiarowanym rzutem trwa 12-15 minut. Oto proces, który
        do tego prowadzi, i skąd tak naprawdę bierze się oszczędność czasu.
      </p>

      <h2>W czym AR jest dobre na budowie</h2>
      <ul>
        <li><strong>Wymiary na poziomie pomieszczenia.</strong> 4-6 ścian w 60 sekund z LiDAR; 2-3 minuty ręcznie.</li>
        <li><strong>Położenie mebli i osprzętu.</strong> Skan LiDAR automatycznie oznacza większe elementy.</li>
        <li><strong>Kąty i prostokątność.</strong> Kluczowe przy ponownym kładzeniu płytek, montażu szafek — wszędzie, gdzie liczy się „czy ta ściana naprawdę ma 90°?".</li>
        <li><strong>Notatki zakotwiczone w zdjęciu.</strong> Zrób zdjęcie, narysuj strzałkę do detalu, dopisz obok wymiar. Wszystko w jednym projekcie.</li>
      </ul>

      <h2>Do czego AR się NIE nadaje</h2>
      <ul>
        <li><strong>Stolarka z dokładnością poniżej milimetra.</strong> Użyj stalowej linijki.</li>
        <li><strong>Długie przekątne (ponad 5 m) na zewnątrz.</strong> Użyj dalmierza laserowego, dryf AR sprawia, że długie pomiary są zawodne.</li>
        <li><strong>Ciasne przestrzenie techniczne bez światła.</strong> AR z kamery zawodzi; LiDAR działa, ale telefon musi się tam zmieścić.</li>
        <li><strong>Rysunki powykonawcze do wniosków o pozwolenie.</strong> Większość urzędów wymaga pieczęci uprawnionego geodety. Aplikacja daje dokument wyjściowy, nie końcowy.</li>
      </ul>

      <h2>15-minutowy proces inwentaryzacji</h2>
      <h3>Minuta 0-2: dotarcie i przygotowanie</h3>
      <p>
        Zaparkuj, wejdź, przywitaj się z właścicielem. Otwórz Ruler AR. Utwórz
        nowy projekt nazwany od adresu. To będzie folder, do którego trafia
        wszystko.
      </p>

      <h3>Minuta 2-7: skany pomieszczeń</h3>
      <p>
        Idź pomieszczenie po pomieszczeniu. Dla każdego z LiDAR: dotknij Room
        Scan, obejdź obwód, zakończ. Aplikacja buduje rzut automatycznie. W
        pomieszczeniach bez wystarczającego światła (piwnice, schowki) przełącz
        się na Manual Room Builder i dotykaj każdego narożnika, obchodząc obwód.
      </p>
      <p>
        Dodaj każde pomieszczenie do folderu projektu. Większość zleceń to 3-5
        pomieszczeń; ten etap pochłania łącznie około 5 minut.
      </p>

      <h3>Minuta 7-10: pomiary elementów stałych</h3>
      <p>
        W każdym pomieszczeniu zapisz wymiary, których nie będzie widać na
        rzucie:
      </p>
      <ul>
        <li>Wysokość nadproża i parapetu okien (od podłogi)</li>
        <li>Szerokość i wysokość światła przejścia drzwi</li>
        <li>Wysokość i głębokość blatu (kuchnie)</li>
        <li>Wysokość sufitu (zwłaszcza przy zabudowie/suficie podwieszanym)</li>
        <li>Położenie istniejących rur (pod zlewami, w kabinie prysznicowej)</li>
      </ul>
      <p>
        Każdy pomiar zapisuje się w projekcie pomieszczenia z miniaturą. Opisz
        te, które wymagają wyjaśnienia („zawór odcinający wodę" ze zdjęciem).
      </p>

      <h3>Minuta 10-13: lista usterek</h3>
      <p>
        Przejdź się z właścicielem. Gdy wskazuje różne rzeczy, zrób zdjęcie w
        aplikacji, dodaj notatkę („uszkodzona płytka, wymienić, ~0,5 m²") i
        podepnij ją do odpowiedniego pomieszczenia. Każde zdjęcie jest
        przypisane do swojego pomieszczenia.
      </p>

      <h3>Minuta 13-15: eksport i zakończenie</h3>
      <p>
        Na folderze projektu dotknij Udostępnij → Eksportuj PDF. Aplikacja
        generuje skonsolidowany dokument: stronę tytułową, rzuty poszczególnych
        pomieszczeń z wymiarami, pomiary elementów stałych, zdjęcia z opisami,
        podsumowanie listy usterek.
      </p>
      <p>
        Wyślij go do siebie mailem, zanim wyjdziesz. Zanim wrócisz do
        samochodu, właściciel ma ten sam PDF w skrzynce.
      </p>

      <h2>Co to umożliwia, czego nie dawała podkładka</h2>
      <ul>
        <li>
          <strong>Wyceny tego samego dnia.</strong> Możesz napisać kosztorys na
          podstawie PDF jeszcze tego wieczoru, często już z ilościami
          materiałów, które kalkulator aplikacji wstępnie oszacował.
        </li>
        <li>
          <strong>Wstępne przygotowanie podwykonawców.</strong> Wyślij PDF
          hydraulikowi/elektrykowi/malarzowi przed ich wizytą. Pojawiają się,
          mając już rozeznany zakres prac.
        </li>
        <li>
          <strong>Dokumentacja zmian zakresu.</strong> Każda zmiana wymiaru w
          trakcie prac zostaje sfotografowana i zmierzona w 30 sekund, z
          dowodem fotograficznym i znacznikiem czasu.
        </li>
        <li>
          <strong>Roszczenia ubezpieczeniowe.</strong> Jeśli coś pójdzie nie tak
          (zalanie, strukturalna niespodzianka), masz zmierzoną dokumentację
          sprzed prac jako dowód stanu pierwotnego.
        </li>
      </ul>

      <h2>Dokładność w kontekście zawodowym</h2>
      <p>
        Przy większości prac inwentaryzacyjnych tolerancja ±1-2 cm jest do
        przyjęcia. Aplikacja zapewnia ją z zapasem. Przy wymiarach wykończenia
        (szafki, stolarka na wymiar, szklane kabiny prysznicowe) użyj stalowej
        linijki lub miary laserowej. Aplikacja służy do szybkiego i pewnego
        uzyskania zgrubnych liczb; narzędzia precyzyjne wchodzą do gry na etapie
        montażu.
      </p>

      <h2>Zalecenie sprzętowe</h2>
      <p>
        Dowolny iPhone Pro od 12 wzwyż. Skaner LiDAR skraca czas inwentaryzacji
        o połowę i pozwala mierzyć w schowkach w kompletnej ciemności. iPhone 15
        Pro i nowsze inicjalizują AR zauważalnie szybciej (≈0,5 s wobec 1-2 s w
        starszych modelach Pro). Jeśli wymieniasz sprzęt do pracy, linia Pro
        zwraca różnicę w cenie zaoszczędzonym czasem inwentaryzacji w około 15
        zleceniach.
      </p>

      <h2>Zwolennicy kartki i długopisu</h2>
      <p>
        Niektórzy wykonawcy wciąż wolą podkładkę, bo ufają temu, co sami
        zapisali. Słusznie. Podejście hybrydowe działa: używaj iPhone'a do rzutu
        i powierzchni (gdzie kartka i długopis są wolne i podatne na błędy),
        zostaw podkładkę na szkice szafek i specjalne notatki (gdzie iPhone to
        przesada). PDF ma na dole miejsce na odręczne uzupełnienia, które
        zeskanujesz później.
      </p>

      <h2>Podsumowanie</h2>
      <p>
        Inwentaryzacja, która tradycyjnymi narzędziami trwa godzinę, z aplikacją
        AR trwa 15 minut. Przy 50 zleceniach rocznie to 35-40 odzyskanych godzin
        — cały tydzień pracy. Dokładność do celów inwentaryzacji jest
        porównywalna. Efekt (PDF z rzutem + wymiarami + zdjęciami + notatkami)
        jest bardziej reprezentacyjny dla klientów niż odręczny szkic. Warte
        tych 15 minut na zainstalowanie i opanowanie aplikacji.
      </p>
    </article>
  );
}

export function PostTR() {
  return (
    <article className="prose-content">
      <p className="lead">
        Tipik bir ev tadilatı saha ölçümünde — mutfak yenileme, banyo söküm ya
        da birkaç odanın boya ve zemini — şerit metre ve bir defter 45-60 dakika
        alır. Aynı ölçüm, bir iPhone AR uygulaması ve ölçülü bir kat planıyla
        12-15 dakika sürer. İşte buna ulaştıran iş akışı ve zaman tasarrufunun
        aslında nereden geldiği.
      </p>

      <h2>AR'nin sahada iyi olduğu şeyler</h2>
      <ul>
        <li><strong>Oda düzeyinde ölçüler.</strong> LiDAR ile 60 saniyede 4-6 duvar; elle 2-3 dakika.</li>
        <li><strong>Mobilya ve tesisat konumları.</strong> LiDAR taraması başlıca öğeleri otomatik etiketler.</li>
        <li><strong>Açılar ve diklik.</strong> Yeniden fayans döşemede, dolap montajında, "bu duvar gerçekten 90° mi?" sorusunun önemli olduğu her yerde kritik.</li>
        <li><strong>Fotoğrafa bağlı notlar.</strong> Bir fotoğraf çek, bir ayrıntıya ok çiz, yanına ölçüyü yaz. Hepsi tek bir projede.</li>
      </ul>

      <h2>AR'nin işe YARAMADIĞI yerler</h2>
      <ul>
        <li><strong>Milimetre altı dolap işçiliği.</strong> Çelik cetvel kullan.</li>
        <li><strong>Açık alanda uzun köşegenler (5 m üzeri).</strong> Lazer mesafe ölçer kullan, AR kayması uzun ölçümleri güvenilmez kılar.</li>
        <li><strong>Işıksız dar tesisat boşlukları.</strong> Kamera AR başarısız olur; LiDAR çalışır ama telefonun içeri girmesi gerekir.</li>
        <li><strong>Ruhsat başvuruları için as-built çizimler.</strong> Belediyelerin çoğu lisanslı bir haritacının kaşesini ister. Uygulama sana başlangıç belgesi verir, nihai belgeyi değil.</li>
      </ul>

      <h2>15 dakikalık ölçüm iş akışı</h2>
      <h3>Dakika 0-2: var ve hazırlan</h3>
      <p>
        Park et, içeri gir, ev sahibini selamla. Ruler AR'yi aç. Adresin adıyla
        yeni bir proje oluştur. Bu, her şeyin düştüğü klasör olur.
      </p>

      <h3>Dakika 2-7: oda taramaları</h3>
      <p>
        Oda oda ilerle. LiDAR olan her oda için: Room Scan'e dokun, çevreyi
        dolaş, bitir. Uygulama kat planını otomatik oluşturur. Yeterli ışığı
        olmayan odalar (bodrumlar, gömme dolaplar) için Manual Room Builder'a
        geç ve çevreyi dolaşırken her köşeye dokun.
      </p>
      <p>
        Her odayı proje klasörüne ekle. İşlerin çoğu 3-5 odadır; bu aşama
        toplamda yaklaşık 5 dakika yer.
      </p>

      <h3>Dakika 7-10: sabit öğe ölçümleri</h3>
      <p>
        Her oda için, kat planında görünmeyecek ölçüleri al:
      </p>
      <ul>
        <li>Pencere lento ve denizlik yükseklikleri (zeminden)</li>
        <li>Kapının net geçiş genişliği ve yüksekliği</li>
        <li>Tezgah yüksekliği ve derinliği (mutfaklar)</li>
        <li>Tavan yüksekliği (özellikle asma tavan/alçaltılmış tavan varsa)</li>
        <li>Mevcut boru konumları (evyelerin altında, duşta)</li>
      </ul>
      <p>
        Her ölçüm, odanın projesine küçük resimle kaydedilir. Açıklama gereken
        her şeye not düş ("su vana kesme valfi" fotoğrafla).
      </p>

      <h3>Dakika 10-13: eksik listesi</h3>
      <p>
        Ev sahibiyle birlikte dolaş. O bir şeyleri gösterdikçe, uygulamada bir
        fotoğraf çek, bir not ekle ("hasarlı fayans, değiştir, ~0,5 m²") ve ilgili
        odaya iliştir. Her fotoğraf kendi odasıyla konumlandırılır.
      </p>

      <h3>Dakika 13-15: dışa aktar ve topla</h3>
      <p>
        Proje klasöründe Paylaş → PDF Dışa Aktar'a dokun. Uygulama birleştirilmiş
        bir belge oluşturur: kapak sayfası, ölçülü oda bazlı kat planları, sabit
        öğe ölçümleri, notlu fotoğraflar, eksik listesi özeti.
      </p>
      <p>
        Ayrılmadan önce kendine e-posta at. Sen kamyonetine dönene kadar, ev
        sahibinin gelen kutusunda da aynı PDF olur.
      </p>

      <h2>Bunun, panonun yapamadığı şeyler</h2>
      <ul>
        <li>
          <strong>Aynı gün teklif.</strong> Teklifi o akşam PDF'ten yazabilirsin,
          çoğu zaman uygulamanın hesaplayıcısının önceden tahmin ettiği malzeme
          miktarlarıyla birlikte.
        </li>
        <li>
          <strong>Taşeron ön hazırlığı.</strong> PDF'i ziyaretlerinden önce
          tesisatçıya/elektrikçiye/boyacıya gönder. İşin kapsamını çoktan
          belirlemiş olarak gelirler.
        </li>
        <li>
          <strong>Değişiklik talebi belgeleme.</strong> İş ortasındaki herhangi
          bir ölçü değişikliği 30 saniyede fotoğraflanır ve ölçülür, fotoğraf
          kanıtı ve zaman damgasıyla.
        </li>
        <li>
          <strong>Sigorta talepleri.</strong> Bir şey ters giderse (su hasarı,
          yapısal sürpriz), orijinal durumun kanıtı olarak iş öncesi ölçülmüş
          belgelere sahip olursun.
        </li>
      </ul>

      <h2>Profesyonel bağlamda doğruluk</h2>
      <p>
        Saha ölçüm işlerinin çoğu için ±1-2 cm tolerans kabul edilebilir.
        Uygulama bunu rahatlıkla sağlar. Bitiş kalitesinde ölçüler için (dolaplar,
        özel ahşap işçiliği, cam duş kabinleri) çelik cetvel ya da lazer metre
        kullan. Uygulama, kaba sayıları hızlı ve güvenilir biçimde almak içindir;
        hassas aletler montaj aşamasında devreye girer.
      </p>

      <h2>Donanım önerisi</h2>
      <p>
        12'den itibaren herhangi bir iPhone Pro. LiDAR tarayıcı ölçüm süreni
        yarıya indirir ve zifiri karanlık gömme dolaplarda ölçüm yapmanı sağlar.
        iPhone 15 Pro ve sonrası AR başlatmayı belirgin biçimde daha hızlı yapar
        (eski Pro modellerdeki 1-2 sn'ye karşı ≈0,5 sn). İş için donanım
        yeniliyorsan, Pro hattı fiyat farkını kazanılan ölçüm süresiyle yaklaşık
        15 işte geri kazandırır.
      </p>

      <h2>Kalem kâğıttan vazgeçmeyenler</h2>
      <p>
        Bazı müteahhitler kendi yazdıklarına güvendikleri için hâlâ panoyu
        tercih eder. Haklılar. Melez yaklaşım işe yarar: kat planı ve alan
        sayıları için iPhone'u kullan (kalem kâğıdın yavaş ve hataya açık olduğu
        yer), dolap eskizleri ve özel notlar için panoyu tut (iPhone'un fazla
        kaçtığı yer). PDF'in altında, sonradan tarayacağın el yazısı eklemeler
        için boşluk vardır.
      </p>

      <h2>Sonuç</h2>
      <p>
        Geleneksel aletlerle bir saat süren bir saha ölçümü, AR uygulamasıyla 15
        dakika sürer. Yılda 50 işte bu 35-40 saat geri kazanım demektir — tam bir
        çalışma haftası. Ölçüm amaçları için doğruluk benzerdir. Çıktı (kat planı
        + ölçüler + fotoğraflar + notlar içeren PDF), elle çizilmiş bir eskizden
        müşterilere sunmaya daha uygundur. Uygulamayı kurup öğrenmenin 15
        dakikasına değer.
      </p>
    </article>
  );
}

export function PostAR() {
  return (
    <article className="prose-content">
      <p className="lead">
        في مسح موقع تجديد منزلي نموذجي — تجديد مطبخ، أو هدم حمام، أو بضع غرف من
        الطلاء والأرضيات — يستغرق شريط القياس ودفتر الملاحظات من 45 إلى 60 دقيقة.
        المسح نفسه باستخدام تطبيق AR على iPhone ومخطط طابق مقاس يستغرق من 12 إلى
        15 دقيقة. إليك سير العمل الذي يوصلك إلى ذلك، ومن أين يأتي توفير الوقت
        فعليًا.
      </p>

      <h2>ما تجيده AR في موقع العمل</h2>
      <ul>
        <li><strong>أبعاد على مستوى الغرفة.</strong> من 4 إلى 6 جدران في 60 ثانية باستخدام LiDAR؛ من دقيقتين إلى 3 دقائق يدويًا.</li>
        <li><strong>مواضع الأثاث والتجهيزات.</strong> يضع مسح LiDAR علامات تلقائية على العناصر الرئيسية.</li>
        <li><strong>الزوايا والاستقامة القائمة.</strong> بالغ الأهمية لإعادة التبليط وتركيب الخزائن، وفي أي مكان يهم فيه سؤال «هل هذا الجدار فعلًا بزاوية 90°؟».</li>
        <li><strong>ملاحظات مرتبطة بالصور.</strong> التقط صورة، ارسم سهمًا نحو تفصيلة، واكتب القياس بجانبها. كل ذلك في مشروع واحد.</li>
      </ul>

      <h2>ما لا تصلح له AR</h2>
      <ul>
        <li><strong>أعمال الخزائن بدقة أقل من المليمتر.</strong> استخدم مسطرة فولاذية.</li>
        <li><strong>الأقطار الطويلة (أكثر من 5 أمتار) في الهواء الطلق.</strong> استخدم جهاز قياس مسافات بالليزر، فانحراف AR يجعل القياسات الطويلة غير موثوقة.</li>
        <li><strong>الفراغات الضيقة بلا إضاءة.</strong> AR بالكاميرا يفشل؛ أما LiDAR فيعمل، لكن يجب أن يتسع المكان للهاتف.</li>
        <li><strong>المخططات التنفيذية لطلبات التصاريح.</strong> تشترط معظم البلديات ختم مساح مرخّص. يمنحك التطبيق وثيقة انطلاق، لا الوثيقة النهائية.</li>
      </ul>

      <h2>سير عمل المسح في 15 دقيقة</h2>
      <h3>الدقيقة 0-2: الوصول والتجهيز</h3>
      <p>
        اركن السيارة، ادخل، وحيِّ صاحب المنزل. افتح Ruler AR. أنشئ مشروعًا جديدًا
        باسم العنوان. سيصبح هذا المجلد الذي يُجمع فيه كل شيء.
      </p>

      <h3>الدقيقة 2-7: مسح الغرف</h3>
      <p>
        تنقّل غرفة غرفة. لكل غرفة مزوّدة بـ LiDAR: اضغط على Room Scan، وطُف حول
        المحيط، ثم أنهِ. يبني التطبيق مخطط الطابق تلقائيًا. أما الغرف التي تفتقر
        إلى إضاءة كافية (الأقبية والخزائن)، فبدِّل إلى Manual Room Builder، واضغط
        على كل ركن وأنت تدور حول المحيط.
      </p>
      <p>
        أضف كل غرفة إلى مجلد المشروع. معظم المهام من 3 إلى 5 غرف؛ وتلتهم هذه
        المرحلة نحو 5 دقائق إجمالًا.
      </p>

      <h3>الدقيقة 7-10: قياسات العناصر الثابتة</h3>
      <p>
        لكل غرفة، سجّل الأبعاد التي لن تظهر في مخطط الطابق:
      </p>
      <ul>
        <li>ارتفاع أعتاب النوافذ وعتباتها السفلية (من الأرض)</li>
        <li>عرض فتحة الباب الصافية وارتفاعها</li>
        <li>ارتفاع سطح العمل وعمقه (المطابخ)</li>
        <li>ارتفاع السقف (خصوصًا مع وجود قواطع أو سقف مستعار)</li>
        <li>مواضع الأنابيب الموجودة (تحت الأحواض، داخل الدش)</li>
      </ul>
      <p>
        يُحفظ كل قياس في مشروع الغرفة مع صورة مصغّرة. أضف ملاحظة على ما يحتاج إلى
        شرح («محبس قطع المياه» مع صورة).
      </p>

      <h3>الدقيقة 10-13: قائمة الإصلاحات</h3>
      <p>
        تجوّل مع صاحب المنزل. كلما أشار إلى شيء، التقط صورة في التطبيق، وأضف
        ملاحظة («بلاطة تالفة، استبدال، نحو 0.5 متر مربع»)، وأرفقها بالغرفة
        المعنية. تُربط كل صورة بغرفتها.
      </p>

      <h3>الدقيقة 13-15: التصدير والإنهاء</h3>
      <p>
        على مجلد المشروع، اضغط على مشاركة ← تصدير PDF. ينشئ التطبيق وثيقة موحّدة:
        صفحة غلاف، ومخططات طابق لكل غرفة مع الأبعاد، وقياسات العناصر الثابتة،
        وصورًا مع الملاحظات، وملخص قائمة الإصلاحات.
      </p>
      <p>
        أرسلها إلى بريدك قبل أن تغادر. وحين تعود إلى شاحنتك، يكون لدى صاحب المنزل
        ملف PDF نفسه في بريده الوارد.
      </p>

      <h2>ما يتيحه هذا ولم يتحه لوح المشابك</h2>
      <ul>
        <li>
          <strong>عروض أسعار في اليوم نفسه.</strong> يمكنك كتابة التقدير من ملف
          PDF في المساء نفسه، وغالبًا مع كميات المواد التي قدّرتها حاسبة التطبيق
          مسبقًا.
        </li>
        <li>
          <strong>تأهيل المقاولين من الباطن مسبقًا.</strong> أرسل ملف PDF إلى
          السباك/الكهربائي/الدهّان قبل زيارتهم. فيأتون وقد أدركوا نطاق العمل
          سلفًا.
        </li>
        <li>
          <strong>توثيق أوامر التغيير.</strong> أي تغيير في الأبعاد أثناء العمل
          يُصوَّر ويُقاس في 30 ثانية، مع دليل مصوّر وختم زمني.
        </li>
        <li>
          <strong>مطالبات التأمين.</strong> إذا حدث خطأ ما (تلف بالمياه، مفاجأة
          إنشائية)، يكون لديك توثيق مقاس لما قبل العمل دليلًا على الحالة الأصلية.
        </li>
      </ul>

      <h2>الدقة في السياق المهني</h2>
      <p>
        لمعظم أعمال مسح المواقع، يكون التفاوت بحدود ±1-2 سم مقبولًا. ويوفّر
        التطبيق ذلك بسهولة. أما لأبعاد التشطيب النهائي (الخزائن، الأعمال الخشبية
        المخصّصة، حواجز الدش الزجاجية) فاستخدم مسطرة فولاذية أو شريط ليزر. التطبيق
        مخصص للحصول على الأرقام التقريبية بسرعة وموثوقية؛ وتأتي أدوات الدقة في
        مرحلة التركيب.
      </p>

      <h2>توصية الأجهزة</h2>
      <p>
        أي iPhone Pro من 12 فصاعدًا. يقلّص ماسح LiDAR زمن المسح إلى النصف ويتيح
        لك القياس في خزائن مظلمة تمامًا. ويبدأ iPhone 15 Pro والأحدث تشغيل AR
        أسرع بشكل ملحوظ (نحو 0.5 ثانية مقابل 1-2 ثانية في طُرز Pro الأقدم). إذا
        كنت تجدّد جهازك للعمل، فإن سلسلة Pro تعوّض فرق السعر بما توفّره من زمن مسح
        في نحو 15 مهمة.
      </p>

      <h2>المتمسكون بالقلم والورقة</h2>
      <p>
        لا يزال بعض المقاولين يفضّلون لوح المشابك لأنهم يثقون بما دوّنوه بأنفسهم.
        وهذا منطقي. النهج الهجين ناجح: استخدم iPhone لمخطط الطابق وأرقام المساحات
        (حيث يكون القلم والورقة بطيئين وعرضة للخطأ)، وأبقِ لوح المشابك لرسومات
        الخزائن والملاحظات الخاصة (حيث يكون iPhone مبالغة). يتضمن ملف PDF مساحة في
        الأسفل للإضافات المكتوبة بخط اليد التي تمسحها ضوئيًا لاحقًا.
      </p>

      <h2>الخلاصة</h2>
      <p>
        مسحٌ للموقع يستغرق ساعة بالأدوات التقليدية يستغرق 15 دقيقة بتطبيق AR. على
        مدى عام من 50 مهمة، يعني ذلك استرداد 35-40 ساعة — أسبوع عمل كامل. والدقة
        متقاربة لأغراض المسح. والمخرجات (ملف PDF يضم مخطط الطابق + الأبعاد + الصور
        + الملاحظات) أكثر قابلية للعرض على العملاء من رسم مرسوم باليد. وتستحق
        الدقائق الـ 15 اللازمة لتثبيت التطبيق وتعلّمه.
      </p>
    </article>
  );
}

export const bodies = {
  ru: PostRU, de: PostDE, fr: PostFR, es: PostES, ja: PostJA, ko: PostKO,
  'zh-Hans': PostZH, 'pt-BR': PostPT, it: PostIT, pl: PostPL, tr: PostTR, ar: PostAR
};
