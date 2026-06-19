import type { PostMeta } from './posts';

export const meta: PostMeta = {
  slug: 'iphone-measure-vs-apple-measure',
  date: '2026-05-18',
  readingTimeMin: 6,
  keywords:
    'apple measure app vs, iphone measure app comparison, apple measure alternative, better than apple measure, measure app features',
  tags: ['Comparison', 'Apple Measure', 'Apps'],
  title: {
    en: 'Ruler AR vs. Apple Measure: Honest Side-by-Side',
    ru: "Ruler AR против Apple «Рулетка»: честное сравнение",
    de: "Ruler AR vs. Apple Maßband: ehrlicher Direktvergleich",
    fr: "Ruler AR vs. Mesures d'Apple : comparatif direct et honnête",
    es: "Ruler AR vs. Apple Medición: comparación directa y honesta",
    ja: "Ruler AR と Apple「計測」を正直に徹底比較",
    ko: "Ruler AR vs. Apple 측정: 솔직한 정면 비교",
    "zh-Hans": "Ruler AR 与 Apple“测距仪”：诚实的正面对比",
    "pt-BR": "Ruler AR vs. Apple Medidas: comparação direta e honesta",
    it: "Ruler AR vs. Apple Metro: confronto diretto e onesto",
    pl: "Ruler AR vs. Apple Miarka: uczciwe porównanie",
    tr: "Ruler AR vs. Apple Ölçü: dürüst karşılaştırma",
    ar: "Ruler AR مقابل تطبيق القياس من Apple: مقارنة صادقة جنبًا إلى جنب"
  },
  excerpt: {
    en: "Apple's built-in Measure app is free and pre-installed. So why install anything else? Here's a feature-by-feature breakdown of where Apple stops and where Ruler AR keeps going.",
    ru: "Встроенное приложение Apple «Рулетка» бесплатно и уже стоит на телефоне. Зачем что-то ещё ставить? Подробное сравнение возможностей: где Apple заканчивается, а Ruler AR продолжает.",
    de: "Apples eingebautes Maßband ist kostenlos und vorinstalliert. Warum also noch etwas anderes installieren? Hier ein Funktionsvergleich: wo Apple aufhört und Ruler AR weitermacht.",
    fr: "L'app Mesures d'Apple est gratuite et préinstallée. Alors pourquoi en installer une autre ? Voici un comparatif fonction par fonction : là où Apple s'arrête et là où Ruler AR continue.",
    es: "La app Medición de Apple es gratuita y viene preinstalada. ¿Entonces para qué instalar otra cosa? Aquí tienes una comparación función por función de dónde se detiene Apple y dónde sigue Ruler AR.",
    ja: "Apple 標準の「計測」アプリは無料で最初から入っています。なぜ他のアプリを入れる必要があるのでしょう? Apple がどこで止まり、Ruler AR がどこまで進むのかを機能ごとに比較します。",
    ko: "Apple 기본 측정 앱은 무료이고 미리 설치되어 있습니다. 그런데 왜 다른 앱을 설치해야 할까요? Apple이 멈추는 지점과 Ruler AR이 계속 나아가는 지점을 기능별로 정리했습니다.",
    "zh-Hans": "Apple 内置的“测距仪”应用免费且预装在手机里。那为什么还要再装别的? 这里逐项对比 Apple 在哪里止步、Ruler AR 又走得多远。",
    "pt-BR": "O app Medidas integrado da Apple é gratuito e já vem instalado. Então por que instalar outro? Aqui está uma comparação recurso a recurso de onde a Apple para e onde o Ruler AR continua.",
    it: "L'app Metro integrata di Apple è gratuita e preinstallata. Allora perché installare qualcos'altro? Ecco un confronto funzione per funzione di dove si ferma Apple e dove continua Ruler AR.",
    pl: "Wbudowana aplikacja Miarka od Apple jest darmowa i fabrycznie zainstalowana. Po co więc instalować coś jeszcze? Oto porównanie funkcja po funkcji: gdzie Apple się kończy, a Ruler AR jedzie dalej.",
    tr: "Apple'ın yerleşik Ölçü uygulaması ücretsiz ve önceden yüklü geliyor. Peki neden başka bir şey yükleyesiniz? İşte özellik özellik bir karşılaştırma: Apple'ın nerede durduğu ve Ruler AR'ın nereye kadar gittiği.",
    ar: "تطبيق القياس المدمج من Apple مجاني ومثبَّت مسبقًا. فلماذا تثبّت أي شيء آخر؟ إليك مقارنة ميزة بميزة توضح أين تتوقف Apple وأين يواصل Ruler AR."
  }
};

export default function Post() {
  return (
    <article className="prose-content">
      <p className="lead">
        Apple's Measure app launched alongside iOS 12 in 2018. It uses the
        same ARKit framework that every third-party measuring app relies on,
        so the raw accuracy is roughly identical. The differences are
        elsewhere, in what you can do with measurements after you take
        them, and which scenarios the app actually handles.
      </p>

      <h2>What Apple Measure does well</h2>
      <ul>
        <li><strong>It's free and pre-installed.</strong> Zero friction for a one-off measurement.</li>
        <li><strong>Decent at single distances.</strong> Tap two points, see the result. Works.</li>
        <li><strong>Auto-detects rectangles.</strong> Point at a picture frame or a piece of paper, it'll highlight the rectangle and offer to measure all sides.</li>
        <li><strong>Auto-detects people's height.</strong> If a person is fully in frame, the app draws a line to the top of their head and reads their height.</li>
        <li><strong>Has a basic level.</strong> Two-axis bubble level, OK for hanging a frame.</li>
      </ul>

      <h2>Where Apple Measure stops</h2>
      <ul>
        <li><strong>No project history.</strong> Every measurement is a screenshot or it's gone.</li>
        <li><strong>No PDF export.</strong> You can share screenshots, not formatted documents.</li>
        <li><strong>No angles.</strong> Just linear distance.</li>
        <li><strong>No area.</strong> You can't draw a polygon for square footage.</li>
        <li><strong>No 3D room scan.</strong> Even on LiDAR iPhones, Apple Measure doesn't use the depth sensor for room scanning.</li>
        <li><strong>No manual floor plan builder.</strong> On non-LiDAR iPhones, there's no fallback workflow.</li>
        <li><strong>No project folders.</strong> No way to group "kitchen measurements" together for a renovation.</li>
        <li><strong>No annotations or notes.</strong> Just naked dimensions.</li>
        <li><strong>No accuracy modes.</strong> No Touch Mode for sub-cm precision; the only AR mode available.</li>
      </ul>

      <h2>What Ruler AR adds</h2>
      <table>
        <thead>
          <tr><th>Capability</th><th>Apple Measure</th><th>Ruler AR</th></tr>
        </thead>
        <tbody>
          <tr><td>Length / distance</td><td>yes</td><td>yes</td></tr>
          <tr><td>Height (auto-detect for people)</td><td>yes</td><td>yes</td></tr>
          <tr><td>Bubble level</td><td>basic</td><td>3 modes (vertical, horizontal, free)</td></tr>
          <tr><td>Angle measurement</td><td>no</td><td>yes, AR protractor</td></tr>
          <tr><td>Area / polygon</td><td>no</td><td>yes, Square mode</td></tr>
          <tr><td>3D LiDAR room scan</td><td>no</td><td>yes, RoomPlan</td></tr>
          <tr><td>Manual floor plan (no LiDAR)</td><td>no</td><td>yes</td></tr>
          <tr><td>Touch Mode (sub-cm precision)</td><td>no</td><td>yes</td></tr>
          <tr><td>Project folders</td><td>no</td><td>yes</td></tr>
          <tr><td>Photo + note annotations</td><td>no</td><td>yes</td></tr>
          <tr><td>PDF export</td><td>no</td><td>yes</td></tr>
          <tr><td>USDZ 3D export</td><td>no</td><td>yes (with LiDAR)</td></tr>
          <tr><td>Material calculator (paint, tile, etc.)</td><td>no</td><td>yes</td></tr>
          <tr><td>Project sharing</td><td>screenshot only</td><td>PDF, 3D, Messages, AirDrop</td></tr>
        </tbody>
      </table>

      <h2>When Apple Measure is enough</h2>
      <ul>
        <li>You just want to know how tall something is, right now, once.</li>
        <li>You don't care about saving the result.</li>
        <li>You don't need angles, area, or any kind of room plan.</li>
        <li>You don't want to install anything.</li>
      </ul>

      <h2>When you'll outgrow Apple Measure within a week</h2>
      <ul>
        <li>You're planning a renovation and need to measure multiple rooms.</li>
        <li>You're shopping for furniture and want to share dimensions with someone else.</li>
        <li>You measure things for a living (contractor, designer, real estate, insurance).</li>
        <li>You want a measured floor plan, not just individual dimensions.</li>
        <li>You want to attach notes and photos to specific measurements.</li>
        <li>You need to send a professional-looking report to a client or contractor.</li>
      </ul>

      <h2>The honest take</h2>
      <p>
        Apple Measure is a fine ten-second tool. It's not designed to scale, it's a quick "Settings" app, not a workflow. Ruler AR (and other
        full-featured AR measuring apps) exist because the moment you take
        more than one measurement that matters, you need somewhere to put
        them, a way to share them, and tools beyond linear distance.
      </p>
      <p>
        Keep Apple Measure for one-offs. Install Ruler AR (free, no
        subscription required for the basics) for everything else. The
        moment you need to measure two things in a row, you'll know which
        one to open.
      </p>
    </article>
  );
}

export function PostRU() {
  return (
    <article className="prose-content">
      <p className="lead">
        Приложение Apple «Рулетка» вышло вместе с iOS 12 в 2018 году. Оно
        работает на том же фреймворке ARKit, на который опирается любое
        стороннее приложение для измерений, поэтому базовая точность у них
        примерно одинаковая. Разница в другом: в том, что можно сделать с
        замерами после того, как вы их сняли, и какие сценарии приложение
        вообще умеет обрабатывать.
      </p>

      <h2>Что у Apple «Рулетка» получается хорошо</h2>
      <ul>
        <li><strong>Бесплатно и уже установлено.</strong> Ноль трений для разового замера.</li>
        <li><strong>Неплохо справляется с отдельными расстояниями.</strong> Поставьте две точки, увидите результат. Работает.</li>
        <li><strong>Автоматически распознаёт прямоугольники.</strong> Наведите на рамку картины или лист бумаги — приложение подсветит прямоугольник и предложит измерить все стороны.</li>
        <li><strong>Автоматически определяет рост человека.</strong> Если человек попадает в кадр целиком, приложение проводит линию до макушки и показывает его рост.</li>
        <li><strong>Есть простой уровень.</strong> Двухосный пузырьковый уровень — нормально, чтобы повесить рамку.</li>
      </ul>

      <h2>Где Apple «Рулетка» останавливается</h2>
      <ul>
        <li><strong>Нет истории проектов.</strong> Каждый замер — это скриншот, иначе он пропал.</li>
        <li><strong>Нет экспорта в PDF.</strong> Можно поделиться скриншотами, но не оформленными документами.</li>
        <li><strong>Нет углов.</strong> Только линейное расстояние.</li>
        <li><strong>Нет площади.</strong> Нельзя обвести многоугольник, чтобы посчитать квадратные метры.</li>
        <li><strong>Нет 3D-сканирования помещения.</strong> Даже на iPhone с LiDAR Apple «Рулетка» не использует датчик глубины для сканирования комнат.</li>
        <li><strong>Нет ручного построителя планов.</strong> На iPhone без LiDAR нет запасного сценария.</li>
        <li><strong>Нет папок проектов.</strong> Невозможно собрать «замеры кухни» в одну группу под ремонт.</li>
        <li><strong>Нет заметок и пометок.</strong> Только голые размеры.</li>
        <li><strong>Нет режимов точности.</strong> Нет режима Touch для субсантиметровой точности; доступен только AR-режим.</li>
      </ul>

      <h2>Что добавляет Ruler AR</h2>
      <table>
        <thead>
          <tr><th>Возможность</th><th>Apple «Рулетка»</th><th>Ruler AR</th></tr>
        </thead>
        <tbody>
          <tr><td>Длина / расстояние</td><td>да</td><td>да</td></tr>
          <tr><td>Рост (автоопределение людей)</td><td>да</td><td>да</td></tr>
          <tr><td>Пузырьковый уровень</td><td>базовый</td><td>3 режима (вертикальный, горизонтальный, свободный)</td></tr>
          <tr><td>Измерение углов</td><td>нет</td><td>да, AR-транспортир</td></tr>
          <tr><td>Площадь / многоугольник</td><td>нет</td><td>да, режим «Квадрат»</td></tr>
          <tr><td>3D-сканирование с LiDAR</td><td>нет</td><td>да, RoomPlan</td></tr>
          <tr><td>Ручной план помещения (без LiDAR)</td><td>нет</td><td>да</td></tr>
          <tr><td>Режим Touch (точность до миллиметров)</td><td>нет</td><td>да</td></tr>
          <tr><td>Папки проектов</td><td>нет</td><td>да</td></tr>
          <tr><td>Заметки с фото и текстом</td><td>нет</td><td>да</td></tr>
          <tr><td>Экспорт в PDF</td><td>нет</td><td>да</td></tr>
          <tr><td>Экспорт 3D в USDZ</td><td>нет</td><td>да (с LiDAR)</td></tr>
          <tr><td>Калькулятор материалов (краска, плитка и т. д.)</td><td>нет</td><td>да</td></tr>
          <tr><td>Поделиться проектом</td><td>только скриншот</td><td>PDF, 3D, Сообщения, AirDrop</td></tr>
        </tbody>
      </table>

      <h2>Когда Apple «Рулетка» достаточно</h2>
      <ul>
        <li>Вам просто нужно узнать высоту чего-то прямо сейчас и один раз.</li>
        <li>Вам не важно сохранять результат.</li>
        <li>Вам не нужны углы, площадь и какой-либо план помещения.</li>
        <li>Вы не хотите ничего устанавливать.</li>
      </ul>

      <h2>Когда вы перерастёте Apple «Рулетка» за неделю</h2>
      <ul>
        <li>Вы планируете ремонт и нужно обмерить несколько комнат.</li>
        <li>Вы выбираете мебель и хотите поделиться размерами с кем-то ещё.</li>
        <li>Вы измеряете по работе (подрядчик, дизайнер, недвижимость, страхование).</li>
        <li>Вам нужен обмеренный план помещения, а не отдельные размеры.</li>
        <li>Вы хотите прикреплять заметки и фото к конкретным замерам.</li>
        <li>Вам нужно отправить клиенту или подрядчику отчёт профессионального вида.</li>
      </ul>

      <h2>Честный вывод</h2>
      <p>
        Apple «Рулетка» — хороший инструмент на десять секунд. Она не рассчитана на масштаб, это быстрая «настроечная» утилита, а не рабочий процесс. Ruler AR (и другие
        полнофункциональные AR-приложения для измерений) существуют потому,
        что как только вы делаете больше одного важного замера, вам нужно
        куда-то его сохранить, как-то им поделиться и инструменты помимо
        линейного расстояния.
      </p>
      <p>
        Оставьте Apple «Рулетка» для разовых задач. Установите Ruler AR
        (бесплатно, без подписки для базовых функций) для всего остального.
        В тот момент, когда вам понадобится измерить две вещи подряд, вы
        сами поймёте, какое приложение открыть.
      </p>
    </article>
  );
}

export function PostDE() {
  return (
    <article className="prose-content">
      <p className="lead">
        Apples Maßband-App erschien 2018 zusammen mit iOS 12. Sie nutzt
        dasselbe ARKit-Framework, auf das sich jede Mess-App von Drittanbietern
        stützt, deshalb ist die reine Genauigkeit ungefähr identisch. Die
        Unterschiede liegen woanders: in dem, was Sie mit Ihren Messungen
        anfangen können, nachdem Sie sie aufgenommen haben, und in den
        Szenarien, die die App tatsächlich bewältigt.
      </p>

      <h2>Was Apple Maßband gut kann</h2>
      <ul>
        <li><strong>Kostenlos und vorinstalliert.</strong> Null Aufwand für eine einmalige Messung.</li>
        <li><strong>Solide bei einzelnen Distanzen.</strong> Zwei Punkte antippen, Ergebnis sehen. Funktioniert.</li>
        <li><strong>Erkennt Rechtecke automatisch.</strong> Richten Sie es auf einen Bilderrahmen oder ein Blatt Papier, und es hebt das Rechteck hervor und bietet an, alle Seiten zu messen.</li>
        <li><strong>Erkennt die Körpergröße automatisch.</strong> Ist eine Person vollständig im Bild, zeichnet die App eine Linie bis zum Scheitel und liest die Größe ab.</li>
        <li><strong>Hat eine einfache Wasserwaage.</strong> Zweiachsige Libelle, in Ordnung zum Aufhängen eines Rahmens.</li>
      </ul>

      <h2>Wo Apple Maßband aufhört</h2>
      <ul>
        <li><strong>Kein Projektverlauf.</strong> Jede Messung ist ein Screenshot oder sie ist weg.</li>
        <li><strong>Kein PDF-Export.</strong> Sie können Screenshots teilen, keine formatierten Dokumente.</li>
        <li><strong>Keine Winkel.</strong> Nur lineare Distanz.</li>
        <li><strong>Keine Fläche.</strong> Sie können kein Polygon für die Quadratmeterzahl zeichnen.</li>
        <li><strong>Kein 3D-Raumscan.</strong> Selbst auf LiDAR-iPhones nutzt Apple Maßband den Tiefensensor nicht zum Scannen von Räumen.</li>
        <li><strong>Kein manueller Grundriss-Editor.</strong> Auf iPhones ohne LiDAR gibt es keinen Ersatz-Workflow.</li>
        <li><strong>Keine Projektordner.</strong> Keine Möglichkeit, „Küchenmessungen“ für eine Renovierung zu gruppieren.</li>
        <li><strong>Keine Anmerkungen oder Notizen.</strong> Nur nackte Maße.</li>
        <li><strong>Keine Genauigkeitsmodi.</strong> Kein Touch-Modus für Präzision unter dem Zentimeter; nur der AR-Modus ist verfügbar.</li>
      </ul>

      <h2>Was Ruler AR hinzufügt</h2>
      <table>
        <thead>
          <tr><th>Funktion</th><th>Apple Maßband</th><th>Ruler AR</th></tr>
        </thead>
        <tbody>
          <tr><td>Länge / Distanz</td><td>ja</td><td>ja</td></tr>
          <tr><td>Körpergröße (Auto-Erkennung von Personen)</td><td>ja</td><td>ja</td></tr>
          <tr><td>Wasserwaage</td><td>einfach</td><td>3 Modi (vertikal, horizontal, frei)</td></tr>
          <tr><td>Winkelmessung</td><td>nein</td><td>ja, AR-Winkelmesser</td></tr>
          <tr><td>Fläche / Polygon</td><td>nein</td><td>ja, Quadrat-Modus</td></tr>
          <tr><td>3D-LiDAR-Raumscan</td><td>nein</td><td>ja, RoomPlan</td></tr>
          <tr><td>Manueller Grundriss (ohne LiDAR)</td><td>nein</td><td>ja</td></tr>
          <tr><td>Touch-Modus (Präzision unter dem Zentimeter)</td><td>nein</td><td>ja</td></tr>
          <tr><td>Projektordner</td><td>nein</td><td>ja</td></tr>
          <tr><td>Foto- und Notiz-Anmerkungen</td><td>nein</td><td>ja</td></tr>
          <tr><td>PDF-Export</td><td>nein</td><td>ja</td></tr>
          <tr><td>USDZ-3D-Export</td><td>nein</td><td>ja (mit LiDAR)</td></tr>
          <tr><td>Materialrechner (Farbe, Fliesen usw.)</td><td>nein</td><td>ja</td></tr>
          <tr><td>Projekt teilen</td><td>nur Screenshot</td><td>PDF, 3D, Nachrichten, AirDrop</td></tr>
        </tbody>
      </table>

      <h2>Wann Apple Maßband ausreicht</h2>
      <ul>
        <li>Sie wollen nur jetzt und einmalig wissen, wie hoch etwas ist.</li>
        <li>Es ist Ihnen egal, das Ergebnis zu speichern.</li>
        <li>Sie brauchen keine Winkel, keine Fläche und keinerlei Raumplan.</li>
        <li>Sie möchten nichts installieren.</li>
      </ul>

      <h2>Wann Sie Apple Maßband binnen einer Woche entwachsen</h2>
      <ul>
        <li>Sie planen eine Renovierung und müssen mehrere Räume vermessen.</li>
        <li>Sie kaufen Möbel und möchten die Maße mit jemandem teilen.</li>
        <li>Sie messen beruflich (Handwerker, Designer, Immobilien, Versicherung).</li>
        <li>Sie wollen einen vermessenen Grundriss, nicht nur einzelne Maße.</li>
        <li>Sie möchten Notizen und Fotos an bestimmte Messungen anhängen.</li>
        <li>Sie müssen einem Kunden oder Handwerker einen professionell aussehenden Bericht schicken.</li>
      </ul>

      <h2>Die ehrliche Einschätzung</h2>
      <p>
        Apple Maßband ist ein gutes Zehn-Sekunden-Werkzeug. Es ist nicht auf Skalierung ausgelegt, es ist eine schnelle „Einstellungen“-App, kein Workflow. Ruler AR (und andere
        voll ausgestattete AR-Mess-Apps) gibt es, weil Sie in dem Moment, in
        dem Sie mehr als eine wichtige Messung vornehmen, einen Ort dafür
        brauchen, eine Möglichkeit, sie zu teilen, und Werkzeuge jenseits der
        linearen Distanz.
      </p>
      <p>
        Behalten Sie Apple Maßband für Einzelfälle. Installieren Sie Ruler AR
        (kostenlos, für die Grundfunktionen ist kein Abo nötig) für alles
        andere. In dem Moment, in dem Sie zwei Dinge hintereinander messen
        müssen, wissen Sie, welche App Sie öffnen.
      </p>
    </article>
  );
}

export function PostFR() {
  return (
    <article className="prose-content">
      <p className="lead">
        L'app Mesures d'Apple est sortie avec iOS 12 en 2018. Elle utilise le
        même framework ARKit sur lequel s'appuie chaque app de mesure tierce,
        donc la précision brute est à peu près identique. Les différences sont
        ailleurs : dans ce que vous pouvez faire de vos mesures une fois
        prises, et dans les scénarios que l'app gère réellement.
      </p>

      <h2>Ce que Mesures d'Apple fait bien</h2>
      <ul>
        <li><strong>Gratuite et préinstallée.</strong> Aucune friction pour une mesure ponctuelle.</li>
        <li><strong>Correcte pour les distances simples.</strong> Touchez deux points, voyez le résultat. Ça marche.</li>
        <li><strong>Détecte automatiquement les rectangles.</strong> Pointez vers un cadre photo ou une feuille de papier, elle surligne le rectangle et propose d'en mesurer tous les côtés.</li>
        <li><strong>Détecte automatiquement la taille des personnes.</strong> Si une personne est entièrement dans le cadre, l'app trace une ligne jusqu'au sommet de sa tête et lit sa taille.</li>
        <li><strong>Dispose d'un niveau basique.</strong> Niveau à bulle deux axes, suffisant pour accrocher un cadre.</li>
      </ul>

      <h2>Là où Mesures d'Apple s'arrête</h2>
      <ul>
        <li><strong>Pas d'historique de projets.</strong> Chaque mesure est une capture d'écran, sinon elle disparaît.</li>
        <li><strong>Pas d'export PDF.</strong> Vous pouvez partager des captures, pas des documents formatés.</li>
        <li><strong>Pas d'angles.</strong> Seulement de la distance linéaire.</li>
        <li><strong>Pas de surface.</strong> Vous ne pouvez pas tracer un polygone pour calculer une superficie.</li>
        <li><strong>Pas de scan 3D de pièce.</strong> Même sur les iPhone LiDAR, Mesures d'Apple n'utilise pas le capteur de profondeur pour scanner les pièces.</li>
        <li><strong>Pas d'éditeur de plan manuel.</strong> Sur les iPhone sans LiDAR, il n'y a aucune solution de repli.</li>
        <li><strong>Pas de dossiers de projet.</strong> Aucun moyen de regrouper les « mesures de la cuisine » pour une rénovation.</li>
        <li><strong>Pas d'annotations ni de notes.</strong> Juste des dimensions brutes.</li>
        <li><strong>Pas de modes de précision.</strong> Pas de mode Touch pour une précision inférieure au centimètre ; seul le mode AR est disponible.</li>
      </ul>

      <h2>Ce que Ruler AR ajoute</h2>
      <table>
        <thead>
          <tr><th>Fonction</th><th>Mesures d'Apple</th><th>Ruler AR</th></tr>
        </thead>
        <tbody>
          <tr><td>Longueur / distance</td><td>oui</td><td>oui</td></tr>
          <tr><td>Taille (détection automatique des personnes)</td><td>oui</td><td>oui</td></tr>
          <tr><td>Niveau à bulle</td><td>basique</td><td>3 modes (vertical, horizontal, libre)</td></tr>
          <tr><td>Mesure d'angles</td><td>non</td><td>oui, rapporteur AR</td></tr>
          <tr><td>Surface / polygone</td><td>non</td><td>oui, mode Carré</td></tr>
          <tr><td>Scan 3D LiDAR de pièce</td><td>non</td><td>oui, RoomPlan</td></tr>
          <tr><td>Plan manuel (sans LiDAR)</td><td>non</td><td>oui</td></tr>
          <tr><td>Mode Touch (précision sous le centimètre)</td><td>non</td><td>oui</td></tr>
          <tr><td>Dossiers de projet</td><td>non</td><td>oui</td></tr>
          <tr><td>Annotations photo + note</td><td>non</td><td>oui</td></tr>
          <tr><td>Export PDF</td><td>non</td><td>oui</td></tr>
          <tr><td>Export 3D USDZ</td><td>non</td><td>oui (avec LiDAR)</td></tr>
          <tr><td>Calculateur de matériaux (peinture, carrelage, etc.)</td><td>non</td><td>oui</td></tr>
          <tr><td>Partage de projet</td><td>capture seulement</td><td>PDF, 3D, Messages, AirDrop</td></tr>
        </tbody>
      </table>

      <h2>Quand Mesures d'Apple suffit</h2>
      <ul>
        <li>Vous voulez juste savoir la hauteur de quelque chose, maintenant, une seule fois.</li>
        <li>Vous vous fichez de sauvegarder le résultat.</li>
        <li>Vous n'avez besoin ni d'angles, ni de surface, ni d'aucun plan de pièce.</li>
        <li>Vous ne voulez rien installer.</li>
      </ul>

      <h2>Quand vous dépasserez Mesures d'Apple en une semaine</h2>
      <ul>
        <li>Vous planifiez une rénovation et devez mesurer plusieurs pièces.</li>
        <li>Vous faites du shopping de meubles et voulez partager des dimensions avec quelqu'un.</li>
        <li>Vous mesurez pour votre métier (artisan, designer, immobilier, assurance).</li>
        <li>Vous voulez un plan de pièce mesuré, pas seulement des dimensions isolées.</li>
        <li>Vous voulez joindre des notes et des photos à des mesures précises.</li>
        <li>Vous devez envoyer un rapport d'aspect professionnel à un client ou à un artisan.</li>
      </ul>

      <h2>L'avis honnête</h2>
      <p>
        Mesures d'Apple est un bon outil de dix secondes. Elle n'est pas conçue pour passer à l'échelle, c'est une petite app « Réglages », pas un flux de travail. Ruler AR (et les autres
        apps de mesure AR complètes) existent parce qu'à l'instant où vous
        prenez plus d'une mesure qui compte, il vous faut un endroit où les
        ranger, un moyen de les partager, et des outils au-delà de la distance
        linéaire.
      </p>
      <p>
        Gardez Mesures d'Apple pour les coups ponctuels. Installez Ruler AR
        (gratuit, pas d'abonnement nécessaire pour les bases) pour tout le
        reste. À l'instant où vous devrez mesurer deux choses à la suite, vous
        saurez laquelle ouvrir.
      </p>
    </article>
  );
}

export function PostES() {
  return (
    <article className="prose-content">
      <p className="lead">
        La app Medición de Apple llegó junto con iOS 12 en 2018. Usa el mismo
        framework ARKit en el que se apoya cualquier app de medición de
        terceros, así que la precisión bruta es prácticamente idéntica. Las
        diferencias están en otro lado: en lo que puedes hacer con las
        mediciones una vez tomadas y en qué escenarios maneja realmente la app.
      </p>

      <h2>Lo que Medición de Apple hace bien</h2>
      <ul>
        <li><strong>Es gratuita y viene preinstalada.</strong> Cero fricción para una medición puntual.</li>
        <li><strong>Decente con distancias sueltas.</strong> Toca dos puntos, ve el resultado. Funciona.</li>
        <li><strong>Detecta rectángulos automáticamente.</strong> Apunta a un marco o a una hoja de papel y resaltará el rectángulo, ofreciéndote medir todos los lados.</li>
        <li><strong>Detecta la altura de las personas automáticamente.</strong> Si una persona está completa en el encuadre, la app traza una línea hasta la coronilla y lee su estatura.</li>
        <li><strong>Tiene un nivel básico.</strong> Nivel de burbuja de dos ejes, suficiente para colgar un cuadro.</li>
      </ul>

      <h2>Donde Medición de Apple se detiene</h2>
      <ul>
        <li><strong>Sin historial de proyectos.</strong> Cada medición es una captura de pantalla o desaparece.</li>
        <li><strong>Sin exportación a PDF.</strong> Puedes compartir capturas, no documentos con formato.</li>
        <li><strong>Sin ángulos.</strong> Solo distancia lineal.</li>
        <li><strong>Sin área.</strong> No puedes dibujar un polígono para calcular metros cuadrados.</li>
        <li><strong>Sin escaneo 3D de habitaciones.</strong> Incluso en iPhone con LiDAR, Medición de Apple no usa el sensor de profundidad para escanear habitaciones.</li>
        <li><strong>Sin editor de planos manual.</strong> En iPhone sin LiDAR no hay un flujo alternativo.</li>
        <li><strong>Sin carpetas de proyectos.</strong> No hay forma de agrupar las «medidas de la cocina» para una reforma.</li>
        <li><strong>Sin anotaciones ni notas.</strong> Solo dimensiones desnudas.</li>
        <li><strong>Sin modos de precisión.</strong> No hay modo Touch para precisión por debajo del centímetro; solo está disponible el modo AR.</li>
      </ul>

      <h2>Lo que añade Ruler AR</h2>
      <table>
        <thead>
          <tr><th>Capacidad</th><th>Medición de Apple</th><th>Ruler AR</th></tr>
        </thead>
        <tbody>
          <tr><td>Longitud / distancia</td><td>sí</td><td>sí</td></tr>
          <tr><td>Altura (detección automática de personas)</td><td>sí</td><td>sí</td></tr>
          <tr><td>Nivel de burbuja</td><td>básico</td><td>3 modos (vertical, horizontal, libre)</td></tr>
          <tr><td>Medición de ángulos</td><td>no</td><td>sí, transportador AR</td></tr>
          <tr><td>Área / polígono</td><td>no</td><td>sí, modo Cuadrado</td></tr>
          <tr><td>Escaneo 3D con LiDAR</td><td>no</td><td>sí, RoomPlan</td></tr>
          <tr><td>Plano manual (sin LiDAR)</td><td>no</td><td>sí</td></tr>
          <tr><td>Modo Touch (precisión por debajo del centímetro)</td><td>no</td><td>sí</td></tr>
          <tr><td>Carpetas de proyectos</td><td>no</td><td>sí</td></tr>
          <tr><td>Anotaciones con foto y nota</td><td>no</td><td>sí</td></tr>
          <tr><td>Exportación a PDF</td><td>no</td><td>sí</td></tr>
          <tr><td>Exportación 3D a USDZ</td><td>no</td><td>sí (con LiDAR)</td></tr>
          <tr><td>Calculadora de materiales (pintura, azulejos, etc.)</td><td>no</td><td>sí</td></tr>
          <tr><td>Compartir proyecto</td><td>solo captura</td><td>PDF, 3D, Mensajes, AirDrop</td></tr>
        </tbody>
      </table>

      <h2>Cuándo basta con Medición de Apple</h2>
      <ul>
        <li>Solo quieres saber qué altura tiene algo, ahora mismo, una vez.</li>
        <li>No te importa guardar el resultado.</li>
        <li>No necesitas ángulos, área ni ningún tipo de plano de habitación.</li>
        <li>No quieres instalar nada.</li>
      </ul>

      <h2>Cuándo te quedará pequeña Medición de Apple en una semana</h2>
      <ul>
        <li>Estás planeando una reforma y necesitas medir varias habitaciones.</li>
        <li>Estás comprando muebles y quieres compartir dimensiones con otra persona.</li>
        <li>Mides cosas para ganarte la vida (contratista, diseñador, inmobiliaria, seguros).</li>
        <li>Quieres un plano medido, no solo dimensiones sueltas.</li>
        <li>Quieres adjuntar notas y fotos a mediciones concretas.</li>
        <li>Necesitas enviar un informe de aspecto profesional a un cliente o contratista.</li>
      </ul>

      <h2>La opinión honesta</h2>
      <p>
        Medición de Apple es una buena herramienta de diez segundos. No está diseñada para escalar, es una app rápida de «Ajustes», no un flujo de trabajo. Ruler AR (y otras
        apps de medición AR con todas las funciones) existen porque, en el
        momento en que tomas más de una medición que importa, necesitas un
        lugar donde guardarlas, una forma de compartirlas y herramientas más
        allá de la distancia lineal.
      </p>
      <p>
        Quédate con Medición de Apple para casos puntuales. Instala Ruler AR
        (gratis, sin suscripción para lo básico) para todo lo demás. En el
        momento en que necesites medir dos cosas seguidas, sabrás cuál abrir.
      </p>
    </article>
  );
}

export function PostJA() {
  return (
    <article className="prose-content">
      <p className="lead">
        Apple の「計測」アプリは 2018 年に iOS 12 と同時に登場しました。
        サードパーティ製の計測アプリがすべて依存しているのと同じ ARKit
        フレームワークを使っているため、純粋な精度はほぼ同じです。違いは
        別のところにあります。計測した後にその数値で何ができるか、そして
        アプリが実際にどんな場面に対応できるかです。
      </p>

      <h2>Apple「計測」が得意なこと</h2>
      <ul>
        <li><strong>無料で最初から入っている。</strong> 一回限りの計測には手間がかかりません。</li>
        <li><strong>単一の距離はそこそこ正確。</strong> 2 点をタップすれば結果が出ます。ちゃんと使えます。</li>
        <li><strong>長方形を自動検出。</strong> 額縁や紙に向けると長方形をハイライトし、すべての辺の計測を提案します。</li>
        <li><strong>人の身長を自動検出。</strong> 人がフレームに全身入っていると、アプリが頭のてっぺんまで線を引いて身長を読み取ります。</li>
        <li><strong>簡単な水準器がある。</strong> 2 軸の気泡水準器で、額縁を掛ける程度なら十分です。</li>
      </ul>

      <h2>Apple「計測」が止まるところ</h2>
      <ul>
        <li><strong>プロジェクト履歴がない。</strong> 各計測はスクリーンショットを撮らないと消えてしまいます。</li>
        <li><strong>PDF 書き出しがない。</strong> スクリーンショットは共有できますが、整った書類はできません。</li>
        <li><strong>角度がない。</strong> 直線距離だけです。</li>
        <li><strong>面積がない。</strong> 平方メートルを出すための多角形を描けません。</li>
        <li><strong>3D 部屋スキャンがない。</strong> LiDAR 搭載の iPhone でも、Apple「計測」は部屋スキャンに深度センサーを使いません。</li>
        <li><strong>手動の間取り作成がない。</strong> LiDAR 非搭載の iPhone には代替の手順がありません。</li>
        <li><strong>プロジェクトフォルダがない。</strong> リフォーム用に「キッチンの計測」をまとめる方法がありません。</li>
        <li><strong>注釈やメモがない。</strong> 数値だけがむき出しです。</li>
        <li><strong>精度モードがない。</strong> ミリ単位の精度を出す Touch モードがなく、AR モードしか使えません。</li>
      </ul>

      <h2>Ruler AR が加えるもの</h2>
      <table>
        <thead>
          <tr><th>機能</th><th>Apple「計測」</th><th>Ruler AR</th></tr>
        </thead>
        <tbody>
          <tr><td>長さ / 距離</td><td>あり</td><td>あり</td></tr>
          <tr><td>身長(人の自動検出)</td><td>あり</td><td>あり</td></tr>
          <tr><td>気泡水準器</td><td>基本</td><td>3 モード(縦、横、自由)</td></tr>
          <tr><td>角度計測</td><td>なし</td><td>あり、AR 分度器</td></tr>
          <tr><td>面積 / 多角形</td><td>なし</td><td>あり、スクエアモード</td></tr>
          <tr><td>3D LiDAR 部屋スキャン</td><td>なし</td><td>あり、RoomPlan</td></tr>
          <tr><td>手動の間取り(LiDAR なし)</td><td>なし</td><td>あり</td></tr>
          <tr><td>Touch モード(ミリ単位の精度)</td><td>なし</td><td>あり</td></tr>
          <tr><td>プロジェクトフォルダ</td><td>なし</td><td>あり</td></tr>
          <tr><td>写真とメモの注釈</td><td>なし</td><td>あり</td></tr>
          <tr><td>PDF 書き出し</td><td>なし</td><td>あり</td></tr>
          <tr><td>USDZ 3D 書き出し</td><td>なし</td><td>あり(LiDAR あり)</td></tr>
          <tr><td>材料計算機(塗料、タイルなど)</td><td>なし</td><td>あり</td></tr>
          <tr><td>プロジェクトの共有</td><td>スクリーンショットのみ</td><td>PDF、3D、メッセージ、AirDrop</td></tr>
        </tbody>
      </table>

      <h2>Apple「計測」で十分なとき</h2>
      <ul>
        <li>今すぐ一回だけ、何かの高さを知りたいだけ。</li>
        <li>結果を保存することにこだわらない。</li>
        <li>角度も面積も、どんな間取りも必要ない。</li>
        <li>何もインストールしたくない。</li>
      </ul>

      <h2>一週間で Apple「計測」が物足りなくなるとき</h2>
      <ul>
        <li>リフォームを計画していて、複数の部屋を計測する必要がある。</li>
        <li>家具を選んでいて、寸法を誰かと共有したい。</li>
        <li>計測が仕事(施工業者、デザイナー、不動産、保険)。</li>
        <li>個々の寸法ではなく、計測済みの間取りが欲しい。</li>
        <li>特定の計測にメモや写真を添付したい。</li>
        <li>クライアントや業者に、見栄えのする専門的な報告書を送る必要がある。</li>
      </ul>

      <h2>正直な結論</h2>
      <p>
        Apple「計測」は 10 秒で使えるよい道具です。規模を広げる設計ではなく、手早い「設定」アプリであって、ワークフローではありません。Ruler AR(やその他の
        フル機能の AR 計測アプリ)が存在するのは、重要な計測を 2 つ以上
        取った瞬間に、それらを置く場所、共有する手段、そして直線距離を
        超えるツールが必要になるからです。
      </p>
      <p>
        一回限りの用途には Apple「計測」を残しておきましょう。それ以外の
        すべてには Ruler AR(無料、基本機能にサブスクリプション不要)を
        インストールしてください。2 つのものを続けて計測する必要が出た
        瞬間に、どちらを開けばよいか分かります。
      </p>
    </article>
  );
}

export function PostKO() {
  return (
    <article className="prose-content">
      <p className="lead">
        Apple의 측정 앱은 2018년 iOS 12와 함께 출시되었습니다. 모든
        서드파티 측정 앱이 의존하는 것과 동일한 ARKit 프레임워크를
        사용하기 때문에 순수한 정확도는 거의 같습니다. 차이는 다른 곳에
        있습니다. 측정한 뒤 그 값으로 무엇을 할 수 있는지, 그리고 앱이
        실제로 어떤 상황을 처리하는지입니다.
      </p>

      <h2>Apple 측정이 잘하는 것</h2>
      <ul>
        <li><strong>무료이고 미리 설치되어 있다.</strong> 일회성 측정에는 마찰이 전혀 없습니다.</li>
        <li><strong>단일 거리는 무난하다.</strong> 두 점을 탭하면 결과가 나옵니다. 잘 작동합니다.</li>
        <li><strong>사각형을 자동으로 인식한다.</strong> 액자나 종이를 향하면 사각형을 강조하고 모든 변을 측정하도록 제안합니다.</li>
        <li><strong>사람의 키를 자동으로 인식한다.</strong> 사람이 화면에 온전히 들어오면, 앱이 머리 꼭대기까지 선을 그어 키를 읽습니다.</li>
        <li><strong>기본 수평계가 있다.</strong> 2축 기포 수평계로, 액자를 거는 정도에는 충분합니다.</li>
      </ul>

      <h2>Apple 측정이 멈추는 지점</h2>
      <ul>
        <li><strong>프로젝트 기록이 없다.</strong> 모든 측정은 스크린샷을 찍지 않으면 사라집니다.</li>
        <li><strong>PDF 내보내기가 없다.</strong> 스크린샷은 공유할 수 있지만 서식 있는 문서는 안 됩니다.</li>
        <li><strong>각도가 없다.</strong> 직선 거리뿐입니다.</li>
        <li><strong>면적이 없다.</strong> 평방미터를 구하기 위한 다각형을 그릴 수 없습니다.</li>
        <li><strong>3D 룸 스캔이 없다.</strong> LiDAR가 있는 iPhone에서도 Apple 측정은 룸 스캔에 깊이 센서를 사용하지 않습니다.</li>
        <li><strong>수동 평면도 작성기가 없다.</strong> LiDAR가 없는 iPhone에는 대체 워크플로가 없습니다.</li>
        <li><strong>프로젝트 폴더가 없다.</strong> 리모델링을 위해 "주방 측정"을 한데 묶을 방법이 없습니다.</li>
        <li><strong>주석이나 메모가 없다.</strong> 그저 치수만 덩그러니 있습니다.</li>
        <li><strong>정확도 모드가 없다.</strong> 밀리미터 단위 정밀도를 위한 Touch 모드가 없고, AR 모드만 사용할 수 있습니다.</li>
      </ul>

      <h2>Ruler AR이 더하는 것</h2>
      <table>
        <thead>
          <tr><th>기능</th><th>Apple 측정</th><th>Ruler AR</th></tr>
        </thead>
        <tbody>
          <tr><td>길이 / 거리</td><td>예</td><td>예</td></tr>
          <tr><td>키 (사람 자동 인식)</td><td>예</td><td>예</td></tr>
          <tr><td>기포 수평계</td><td>기본</td><td>3가지 모드 (수직, 수평, 자유)</td></tr>
          <tr><td>각도 측정</td><td>아니요</td><td>예, AR 각도기</td></tr>
          <tr><td>면적 / 다각형</td><td>아니요</td><td>예, 스퀘어 모드</td></tr>
          <tr><td>3D LiDAR 룸 스캔</td><td>아니요</td><td>예, RoomPlan</td></tr>
          <tr><td>수동 평면도 (LiDAR 없음)</td><td>아니요</td><td>예</td></tr>
          <tr><td>Touch 모드 (밀리미터 단위 정밀도)</td><td>아니요</td><td>예</td></tr>
          <tr><td>프로젝트 폴더</td><td>아니요</td><td>예</td></tr>
          <tr><td>사진 + 메모 주석</td><td>아니요</td><td>예</td></tr>
          <tr><td>PDF 내보내기</td><td>아니요</td><td>예</td></tr>
          <tr><td>USDZ 3D 내보내기</td><td>아니요</td><td>예 (LiDAR 필요)</td></tr>
          <tr><td>자재 계산기 (페인트, 타일 등)</td><td>아니요</td><td>예</td></tr>
          <tr><td>프로젝트 공유</td><td>스크린샷만</td><td>PDF, 3D, 메시지, AirDrop</td></tr>
        </tbody>
      </table>

      <h2>Apple 측정으로 충분할 때</h2>
      <ul>
        <li>지금 한 번, 무언가의 높이만 알고 싶을 때.</li>
        <li>결과를 저장하는 데 관심이 없을 때.</li>
        <li>각도, 면적, 어떤 종류의 룸 플랜도 필요 없을 때.</li>
        <li>아무것도 설치하고 싶지 않을 때.</li>
      </ul>

      <h2>일주일 안에 Apple 측정이 부족해질 때</h2>
      <ul>
        <li>리모델링을 계획 중이고 여러 방을 측정해야 할 때.</li>
        <li>가구를 사면서 치수를 다른 사람과 공유하고 싶을 때.</li>
        <li>측정이 생업일 때 (시공업자, 디자이너, 부동산, 보험).</li>
        <li>개별 치수가 아니라 측정된 평면도를 원할 때.</li>
        <li>특정 측정에 메모와 사진을 첨부하고 싶을 때.</li>
        <li>클라이언트나 시공업자에게 전문적으로 보이는 보고서를 보내야 할 때.</li>
      </ul>

      <h2>솔직한 평가</h2>
      <p>
        Apple 측정은 10초짜리 좋은 도구입니다. 확장을 위해 설계되지 않았고, 워크플로가 아니라 빠른 "설정" 앱입니다. Ruler AR(그리고 다른
        완전한 기능의 AR 측정 앱)이 존재하는 이유는, 의미 있는 측정을 두
        개 이상 하는 순간 그것을 둘 곳, 공유할 방법, 그리고 직선 거리를
        넘어서는 도구가 필요해지기 때문입니다.
      </p>
      <p>
        일회성 작업에는 Apple 측정을 남겨 두세요. 나머지 모든 것에는
        Ruler AR(무료, 기본 기능에는 구독 불필요)을 설치하세요. 두 가지를
        연달아 측정해야 하는 순간, 어느 쪽을 열어야 할지 알게 될 것입니다.
      </p>
    </article>
  );
}

export function PostZH() {
  return (
    <article className="prose-content">
      <p className="lead">
        Apple 的“测距仪”应用在 2018 年随 iOS 12 一同推出。它使用的是每一款
        第三方测量应用都依赖的同一个 ARKit 框架,所以原始精度大致相同。
        差异在别处:在于你测完之后能用这些数据做什么,以及这款应用究竟能
        应对哪些场景。
      </p>

      <h2>Apple 测距仪做得好的地方</h2>
      <ul>
        <li><strong>免费且预装。</strong> 临时量一下毫无门槛。</li>
        <li><strong>单段距离还不错。</strong> 点两个点,看结果。能用。</li>
        <li><strong>自动识别矩形。</strong> 对准相框或一张纸,它会高亮出矩形并提议测量所有边。</li>
        <li><strong>自动识别人的身高。</strong> 如果一个人完整出现在画面中,应用会画一条线到头顶并读出身高。</li>
        <li><strong>有一个基础水平仪。</strong> 双轴气泡水平仪,挂个相框够用。</li>
      </ul>

      <h2>Apple 测距仪止步的地方</h2>
      <ul>
        <li><strong>没有项目历史。</strong> 每次测量要么截图保存,要么就没了。</li>
        <li><strong>没有 PDF 导出。</strong> 你能分享截图,却分享不了带格式的文档。</li>
        <li><strong>没有角度。</strong> 只有直线距离。</li>
        <li><strong>没有面积。</strong> 你无法绘制多边形来计算平方米。</li>
        <li><strong>没有 3D 房间扫描。</strong> 即便在带 LiDAR 的 iPhone 上,Apple 测距仪也不会用深度传感器扫描房间。</li>
        <li><strong>没有手动平面图工具。</strong> 在不带 LiDAR 的 iPhone 上没有任何备用流程。</li>
        <li><strong>没有项目文件夹。</strong> 无法把“厨房的测量”归到一起做装修。</li>
        <li><strong>没有标注或备注。</strong> 只有光秃秃的尺寸。</li>
        <li><strong>没有精度模式。</strong> 没有用于亚厘米精度的 Touch 模式;只有 AR 模式可用。</li>
      </ul>

      <h2>Ruler AR 增加了什么</h2>
      <table>
        <thead>
          <tr><th>功能</th><th>Apple 测距仪</th><th>Ruler AR</th></tr>
        </thead>
        <tbody>
          <tr><td>长度 / 距离</td><td>有</td><td>有</td></tr>
          <tr><td>身高(自动识别人)</td><td>有</td><td>有</td></tr>
          <tr><td>气泡水平仪</td><td>基础</td><td>3 种模式(垂直、水平、自由)</td></tr>
          <tr><td>角度测量</td><td>无</td><td>有,AR 量角器</td></tr>
          <tr><td>面积 / 多边形</td><td>无</td><td>有,方块模式</td></tr>
          <tr><td>3D LiDAR 房间扫描</td><td>无</td><td>有,RoomPlan</td></tr>
          <tr><td>手动平面图(无 LiDAR)</td><td>无</td><td>有</td></tr>
          <tr><td>Touch 模式(亚厘米精度)</td><td>无</td><td>有</td></tr>
          <tr><td>项目文件夹</td><td>无</td><td>有</td></tr>
          <tr><td>照片 + 备注标注</td><td>无</td><td>有</td></tr>
          <tr><td>PDF 导出</td><td>无</td><td>有</td></tr>
          <tr><td>USDZ 3D 导出</td><td>无</td><td>有(需 LiDAR)</td></tr>
          <tr><td>材料计算器(涂料、瓷砖等)</td><td>无</td><td>有</td></tr>
          <tr><td>项目分享</td><td>仅截图</td><td>PDF、3D、信息、AirDrop</td></tr>
        </tbody>
      </table>

      <h2>什么时候 Apple 测距仪就够用</h2>
      <ul>
        <li>你只是想现在量一次某个东西有多高。</li>
        <li>你不在乎保存结果。</li>
        <li>你不需要角度、面积或任何房间平面图。</li>
        <li>你不想安装任何东西。</li>
      </ul>

      <h2>什么时候你会在一周内用腻 Apple 测距仪</h2>
      <ul>
        <li>你在计划装修,需要测量多个房间。</li>
        <li>你在选家具,想把尺寸分享给别人。</li>
        <li>你靠测量谋生(承包商、设计师、房地产、保险)。</li>
        <li>你想要一份带尺寸的平面图,而不仅仅是零散的尺寸。</li>
        <li>你想给特定的测量附上备注和照片。</li>
        <li>你需要给客户或承包商发一份看起来专业的报告。</li>
      </ul>

      <h2>诚实的评价</h2>
      <p>
        Apple 测距仪是个不错的十秒钟工具。它并非为扩展而设计,是一款快捷的“设置”类应用,而不是一套工作流。Ruler AR(以及其他
        功能齐全的 AR 测量应用)之所以存在,是因为一旦你测了不止一个重要的
        数据,你就需要一个地方存放它们、一种分享它们的方式,以及超越直线
        距离的工具。
      </p>
      <p>
        把 Apple 测距仪留给临时一量。其他所有场景就装 Ruler AR(免费,基础
        功能无需订阅)吧。当你需要接连测量两样东西的那一刻,你就知道该打开
        哪一个了。
      </p>
    </article>
  );
}

export function PostPT() {
  return (
    <article className="prose-content">
      <p className="lead">
        O app Medidas da Apple chegou junto com o iOS 12 em 2018. Ele usa o
        mesmo framework ARKit em que todo app de medição de terceiros se apoia,
        então a precisão bruta é praticamente idêntica. As diferenças estão em
        outro lugar: no que você pode fazer com as medições depois de tirá-las
        e em quais cenários o app realmente dá conta.
      </p>

      <h2>O que o Medidas da Apple faz bem</h2>
      <ul>
        <li><strong>É gratuito e já vem instalado.</strong> Zero fricção para uma medição pontual.</li>
        <li><strong>Razoável em distâncias avulsas.</strong> Toque em dois pontos, veja o resultado. Funciona.</li>
        <li><strong>Detecta retângulos automaticamente.</strong> Aponte para um porta-retratos ou uma folha de papel e ele destaca o retângulo e oferece medir todos os lados.</li>
        <li><strong>Detecta a altura das pessoas automaticamente.</strong> Se uma pessoa estiver inteira no enquadramento, o app traça uma linha até o topo da cabeça e lê a altura.</li>
        <li><strong>Tem um nível básico.</strong> Nível de bolha de dois eixos, suficiente para pendurar um quadro.</li>
      </ul>

      <h2>Onde o Medidas da Apple para</h2>
      <ul>
        <li><strong>Sem histórico de projetos.</strong> Cada medição é uma captura de tela ou desaparece.</li>
        <li><strong>Sem exportação em PDF.</strong> Você pode compartilhar capturas, não documentos formatados.</li>
        <li><strong>Sem ângulos.</strong> Apenas distância linear.</li>
        <li><strong>Sem área.</strong> Você não consegue desenhar um polígono para calcular metros quadrados.</li>
        <li><strong>Sem escaneamento 3D de cômodos.</strong> Mesmo em iPhones com LiDAR, o Medidas da Apple não usa o sensor de profundidade para escanear cômodos.</li>
        <li><strong>Sem editor de planta manual.</strong> Em iPhones sem LiDAR, não há fluxo alternativo.</li>
        <li><strong>Sem pastas de projeto.</strong> Não há como agrupar as "medições da cozinha" para uma reforma.</li>
        <li><strong>Sem anotações ou notas.</strong> Apenas dimensões cruas.</li>
        <li><strong>Sem modos de precisão.</strong> Sem modo Touch para precisão abaixo do centímetro; só o modo AR está disponível.</li>
      </ul>

      <h2>O que o Ruler AR acrescenta</h2>
      <table>
        <thead>
          <tr><th>Recurso</th><th>Medidas da Apple</th><th>Ruler AR</th></tr>
        </thead>
        <tbody>
          <tr><td>Comprimento / distância</td><td>sim</td><td>sim</td></tr>
          <tr><td>Altura (detecção automática de pessoas)</td><td>sim</td><td>sim</td></tr>
          <tr><td>Nível de bolha</td><td>básico</td><td>3 modos (vertical, horizontal, livre)</td></tr>
          <tr><td>Medição de ângulos</td><td>não</td><td>sim, transferidor AR</td></tr>
          <tr><td>Área / polígono</td><td>não</td><td>sim, modo Quadrado</td></tr>
          <tr><td>Escaneamento 3D com LiDAR</td><td>não</td><td>sim, RoomPlan</td></tr>
          <tr><td>Planta manual (sem LiDAR)</td><td>não</td><td>sim</td></tr>
          <tr><td>Modo Touch (precisão abaixo do centímetro)</td><td>não</td><td>sim</td></tr>
          <tr><td>Pastas de projeto</td><td>não</td><td>sim</td></tr>
          <tr><td>Anotações com foto e nota</td><td>não</td><td>sim</td></tr>
          <tr><td>Exportação em PDF</td><td>não</td><td>sim</td></tr>
          <tr><td>Exportação 3D em USDZ</td><td>não</td><td>sim (com LiDAR)</td></tr>
          <tr><td>Calculadora de materiais (tinta, azulejo, etc.)</td><td>não</td><td>sim</td></tr>
          <tr><td>Compartilhamento de projeto</td><td>só captura</td><td>PDF, 3D, Mensagens, AirDrop</td></tr>
        </tbody>
      </table>

      <h2>Quando o Medidas da Apple basta</h2>
      <ul>
        <li>Você só quer saber a altura de algo, agora, uma única vez.</li>
        <li>Você não se importa em salvar o resultado.</li>
        <li>Você não precisa de ângulos, área ou qualquer planta de cômodo.</li>
        <li>Você não quer instalar nada.</li>
      </ul>

      <h2>Quando você vai superar o Medidas da Apple em uma semana</h2>
      <ul>
        <li>Você está planejando uma reforma e precisa medir vários cômodos.</li>
        <li>Você está comprando móveis e quer compartilhar dimensões com outra pessoa.</li>
        <li>Você mede coisas como profissão (empreiteiro, designer, imobiliária, seguros).</li>
        <li>Você quer uma planta medida, não só dimensões avulsas.</li>
        <li>Você quer anexar notas e fotos a medições específicas.</li>
        <li>Você precisa enviar um relatório com aparência profissional a um cliente ou empreiteiro.</li>
      </ul>

      <h2>A avaliação honesta</h2>
      <p>
        O Medidas da Apple é uma boa ferramenta de dez segundos. Ele não foi feito para escalar, é um app rápido de "Ajustes", não um fluxo de trabalho. O Ruler AR (e outros
        apps de medição AR completos) existem porque, no momento em que você
        tira mais de uma medição que importa, você precisa de um lugar para
        guardá-las, de um jeito de compartilhá-las e de ferramentas além da
        distância linear.
      </p>
      <p>
        Mantenha o Medidas da Apple para casos pontuais. Instale o Ruler AR
        (gratuito, sem assinatura para o básico) para todo o resto. No momento
        em que você precisar medir duas coisas seguidas, vai saber qual abrir.
      </p>
    </article>
  );
}

export function PostIT() {
  return (
    <article className="prose-content">
      <p className="lead">
        L'app Metro di Apple è arrivata insieme a iOS 12 nel 2018. Usa lo
        stesso framework ARKit su cui si appoggia ogni app di misurazione di
        terze parti, quindi la precisione grezza è pressoché identica. Le
        differenze sono altrove: in ciò che puoi fare con le misure dopo
        averle prese e negli scenari che l'app gestisce davvero.
      </p>

      <h2>Cosa fa bene Apple Metro</h2>
      <ul>
        <li><strong>È gratuita e preinstallata.</strong> Zero attriti per una misurazione una tantum.</li>
        <li><strong>Discreta sulle distanze singole.</strong> Tocca due punti, vedi il risultato. Funziona.</li>
        <li><strong>Rileva automaticamente i rettangoli.</strong> Punta verso una cornice o un foglio di carta e l'app evidenzia il rettangolo e propone di misurarne tutti i lati.</li>
        <li><strong>Rileva automaticamente l'altezza delle persone.</strong> Se una persona è interamente nell'inquadratura, l'app traccia una linea fino alla sommità della testa e ne legge l'altezza.</li>
        <li><strong>Ha una livella di base.</strong> Livella a bolla a due assi, va bene per appendere una cornice.</li>
      </ul>

      <h2>Dove Apple Metro si ferma</h2>
      <ul>
        <li><strong>Nessuna cronologia dei progetti.</strong> Ogni misura è uno screenshot oppure è persa.</li>
        <li><strong>Nessuna esportazione PDF.</strong> Puoi condividere screenshot, non documenti formattati.</li>
        <li><strong>Nessun angolo.</strong> Solo distanza lineare.</li>
        <li><strong>Nessuna area.</strong> Non puoi disegnare un poligono per i metri quadrati.</li>
        <li><strong>Nessuna scansione 3D delle stanze.</strong> Anche sugli iPhone con LiDAR, Apple Metro non usa il sensore di profondità per scansionare le stanze.</li>
        <li><strong>Nessun editor di planimetrie manuale.</strong> Sugli iPhone senza LiDAR non c'è alcun flusso alternativo.</li>
        <li><strong>Nessuna cartella di progetto.</strong> Nessun modo di raggruppare le "misure della cucina" per una ristrutturazione.</li>
        <li><strong>Nessuna annotazione o nota.</strong> Solo dimensioni nude e crude.</li>
        <li><strong>Nessuna modalità di precisione.</strong> Nessuna modalità Touch per la precisione sotto il centimetro; è disponibile solo la modalità AR.</li>
      </ul>

      <h2>Cosa aggiunge Ruler AR</h2>
      <table>
        <thead>
          <tr><th>Funzionalità</th><th>Apple Metro</th><th>Ruler AR</th></tr>
        </thead>
        <tbody>
          <tr><td>Lunghezza / distanza</td><td>sì</td><td>sì</td></tr>
          <tr><td>Altezza (rilevamento automatico delle persone)</td><td>sì</td><td>sì</td></tr>
          <tr><td>Livella a bolla</td><td>base</td><td>3 modalità (verticale, orizzontale, libera)</td></tr>
          <tr><td>Misurazione degli angoli</td><td>no</td><td>sì, goniometro AR</td></tr>
          <tr><td>Area / poligono</td><td>no</td><td>sì, modalità Quadrato</td></tr>
          <tr><td>Scansione 3D LiDAR delle stanze</td><td>no</td><td>sì, RoomPlan</td></tr>
          <tr><td>Planimetria manuale (senza LiDAR)</td><td>no</td><td>sì</td></tr>
          <tr><td>Modalità Touch (precisione sotto il centimetro)</td><td>no</td><td>sì</td></tr>
          <tr><td>Cartelle di progetto</td><td>no</td><td>sì</td></tr>
          <tr><td>Annotazioni con foto e note</td><td>no</td><td>sì</td></tr>
          <tr><td>Esportazione PDF</td><td>no</td><td>sì</td></tr>
          <tr><td>Esportazione 3D USDZ</td><td>no</td><td>sì (con LiDAR)</td></tr>
          <tr><td>Calcolatore di materiali (vernice, piastrelle, ecc.)</td><td>no</td><td>sì</td></tr>
          <tr><td>Condivisione del progetto</td><td>solo screenshot</td><td>PDF, 3D, Messaggi, AirDrop</td></tr>
        </tbody>
      </table>

      <h2>Quando Apple Metro basta</h2>
      <ul>
        <li>Vuoi solo sapere quanto è alto qualcosa, adesso, una volta sola.</li>
        <li>Non ti interessa salvare il risultato.</li>
        <li>Non ti servono angoli, area o alcun tipo di planimetria.</li>
        <li>Non vuoi installare nulla.</li>
      </ul>

      <h2>Quando supererai Apple Metro nel giro di una settimana</h2>
      <ul>
        <li>Stai pianificando una ristrutturazione e devi misurare più stanze.</li>
        <li>Stai comprando mobili e vuoi condividere le dimensioni con qualcun altro.</li>
        <li>Misuri per lavoro (impresa edile, designer, immobiliare, assicurazioni).</li>
        <li>Vuoi una planimetria misurata, non solo dimensioni isolate.</li>
        <li>Vuoi allegare note e foto a misure specifiche.</li>
        <li>Devi inviare un report dall'aspetto professionale a un cliente o a un'impresa.</li>
      </ul>

      <h2>Il giudizio onesto</h2>
      <p>
        Apple Metro è un buon strumento da dieci secondi. Non è pensata per crescere, è una rapida app delle "Impostazioni", non un flusso di lavoro. Ruler AR (e le altre
        app di misurazione AR complete) esistono perché, nel momento in cui
        prendi più di una misura che conta, ti serve un posto dove metterle,
        un modo per condividerle e strumenti che vanno oltre la distanza
        lineare.
      </p>
      <p>
        Tieni Apple Metro per i casi isolati. Installa Ruler AR (gratuita,
        nessun abbonamento necessario per le funzioni di base) per tutto il
        resto. Nel momento in cui dovrai misurare due cose di fila, saprai
        quale aprire.
      </p>
    </article>
  );
}

export function PostPL() {
  return (
    <article className="prose-content">
      <p className="lead">
        Aplikacja Miarka od Apple pojawiła się wraz z iOS 12 w 2018 roku.
        Korzysta z tego samego frameworka ARKit, na którym opiera się każda
        zewnętrzna aplikacja do pomiarów, więc surowa dokładność jest mniej
        więcej taka sama. Różnice są gdzie indziej: w tym, co możesz zrobić z
        pomiarami po ich wykonaniu i jakie scenariusze aplikacja faktycznie
        obsługuje.
      </p>

      <h2>Co Miarka od Apple robi dobrze</h2>
      <ul>
        <li><strong>Jest darmowa i fabrycznie zainstalowana.</strong> Zero tarcia przy jednorazowym pomiarze.</li>
        <li><strong>Przyzwoita przy pojedynczych odległościach.</strong> Stuknij dwa punkty, zobacz wynik. Działa.</li>
        <li><strong>Automatycznie wykrywa prostokąty.</strong> Wyceluj w ramkę na zdjęcie albo kartkę papieru, a podświetli prostokąt i zaproponuje pomiar wszystkich boków.</li>
        <li><strong>Automatycznie wykrywa wzrost osób.</strong> Jeśli osoba mieści się w całości w kadrze, aplikacja rysuje linię do czubka głowy i odczytuje wzrost.</li>
        <li><strong>Ma podstawową poziomicę.</strong> Dwuosiowa poziomica bąbelkowa, w sam raz do powieszenia ramki.</li>
      </ul>

      <h2>Gdzie Miarka od Apple się zatrzymuje</h2>
      <ul>
        <li><strong>Brak historii projektów.</strong> Każdy pomiar to zrzut ekranu albo przepada.</li>
        <li><strong>Brak eksportu do PDF.</strong> Możesz udostępniać zrzuty ekranu, ale nie sformatowane dokumenty.</li>
        <li><strong>Brak kątów.</strong> Tylko odległość liniowa.</li>
        <li><strong>Brak powierzchni.</strong> Nie narysujesz wielokąta, żeby policzyć metry kwadratowe.</li>
        <li><strong>Brak skanowania 3D pomieszczeń.</strong> Nawet na iPhone'ach z LiDAR-em Miarka od Apple nie używa czujnika głębi do skanowania pomieszczeń.</li>
        <li><strong>Brak ręcznego kreatora rzutów.</strong> Na iPhone'ach bez LiDAR-u nie ma żadnego planu awaryjnego.</li>
        <li><strong>Brak folderów projektów.</strong> Nie da się zgrupować „pomiarów kuchni” na potrzeby remontu.</li>
        <li><strong>Brak adnotacji i notatek.</strong> Tylko nagie wymiary.</li>
        <li><strong>Brak trybów dokładności.</strong> Brak trybu Touch dla precyzji poniżej centymetra; dostępny jest tylko tryb AR.</li>
      </ul>

      <h2>Co dodaje Ruler AR</h2>
      <table>
        <thead>
          <tr><th>Funkcja</th><th>Miarka od Apple</th><th>Ruler AR</th></tr>
        </thead>
        <tbody>
          <tr><td>Długość / odległość</td><td>tak</td><td>tak</td></tr>
          <tr><td>Wzrost (automatyczne wykrywanie osób)</td><td>tak</td><td>tak</td></tr>
          <tr><td>Poziomica bąbelkowa</td><td>podstawowa</td><td>3 tryby (pionowy, poziomy, swobodny)</td></tr>
          <tr><td>Pomiar kątów</td><td>nie</td><td>tak, kątomierz AR</td></tr>
          <tr><td>Powierzchnia / wielokąt</td><td>nie</td><td>tak, tryb Kwadrat</td></tr>
          <tr><td>Skan 3D z LiDAR-em</td><td>nie</td><td>tak, RoomPlan</td></tr>
          <tr><td>Ręczny rzut (bez LiDAR-u)</td><td>nie</td><td>tak</td></tr>
          <tr><td>Tryb Touch (precyzja poniżej centymetra)</td><td>nie</td><td>tak</td></tr>
          <tr><td>Foldery projektów</td><td>nie</td><td>tak</td></tr>
          <tr><td>Adnotacje ze zdjęciem i notatką</td><td>nie</td><td>tak</td></tr>
          <tr><td>Eksport do PDF</td><td>nie</td><td>tak</td></tr>
          <tr><td>Eksport 3D do USDZ</td><td>nie</td><td>tak (z LiDAR-em)</td></tr>
          <tr><td>Kalkulator materiałów (farba, płytki itp.)</td><td>nie</td><td>tak</td></tr>
          <tr><td>Udostępnianie projektu</td><td>tylko zrzut ekranu</td><td>PDF, 3D, Wiadomości, AirDrop</td></tr>
        </tbody>
      </table>

      <h2>Kiedy Miarka od Apple wystarczy</h2>
      <ul>
        <li>Chcesz tylko wiedzieć, jak coś jest wysokie, teraz, jeden raz.</li>
        <li>Nie zależy ci na zapisaniu wyniku.</li>
        <li>Nie potrzebujesz kątów, powierzchni ani żadnego rzutu pomieszczenia.</li>
        <li>Nie chcesz nic instalować.</li>
      </ul>

      <h2>Kiedy w tydzień wyrośniesz z Miarki od Apple</h2>
      <ul>
        <li>Planujesz remont i musisz zmierzyć kilka pomieszczeń.</li>
        <li>Kupujesz meble i chcesz podzielić się wymiarami z kimś innym.</li>
        <li>Mierzysz zawodowo (wykonawca, projektant, nieruchomości, ubezpieczenia).</li>
        <li>Chcesz zmierzony rzut, a nie tylko pojedyncze wymiary.</li>
        <li>Chcesz dołączać notatki i zdjęcia do konkretnych pomiarów.</li>
        <li>Musisz wysłać profesjonalnie wyglądający raport do klienta lub wykonawcy.</li>
      </ul>

      <h2>Szczera ocena</h2>
      <p>
        Miarka od Apple to dobre dziesięciosekundowe narzędzie. Nie jest zaprojektowana z myślą o skali, to szybka aplikacja typu „Ustawienia”, a nie cały proces pracy. Ruler AR (i inne
        w pełni funkcjonalne aplikacje AR do pomiarów) istnieją dlatego, że w
        chwili, gdy wykonasz więcej niż jeden ważny pomiar, potrzebujesz miejsca,
        gdzie je umieścisz, sposobu, by je udostępnić, oraz narzędzi
        wykraczających poza odległość liniową.
      </p>
      <p>
        Zostaw Miarkę od Apple do jednorazowych pomiarów. Zainstaluj Ruler AR
        (za darmo, bez subskrypcji dla podstaw) do wszystkiego innego. W chwili,
        gdy będziesz musiał zmierzyć dwie rzeczy pod rząd, sam będziesz wiedział,
        którą otworzyć.
      </p>
    </article>
  );
}

export function PostTR() {
  return (
    <article className="prose-content">
      <p className="lead">
        Apple'ın Ölçü uygulaması 2018'de iOS 12 ile birlikte çıktı. Her üçüncü
        taraf ölçüm uygulamasının dayandığı aynı ARKit altyapısını kullanıyor,
        bu yüzden ham doğruluk aşağı yukarı aynı. Farklar başka yerde: ölçümleri
        aldıktan sonra onlarla ne yapabileceğinizde ve uygulamanın gerçekten
        hangi senaryoların üstesinden geldiğinde.
      </p>

      <h2>Apple Ölçü'nün iyi yaptığı şeyler</h2>
      <ul>
        <li><strong>Ücretsiz ve önceden yüklü.</strong> Tek seferlik bir ölçüm için sıfır sürtünme.</li>
        <li><strong>Tekil mesafelerde fena değil.</strong> İki noktaya dokun, sonucu gör. İş görüyor.</li>
        <li><strong>Dikdörtgenleri otomatik algılar.</strong> Bir çerçeveye ya da bir kağıda doğrultun, dikdörtgeni vurgular ve tüm kenarları ölçmeyi önerir.</li>
        <li><strong>İnsanların boyunu otomatik algılar.</strong> Bir kişi kareye tamamen sığarsa, uygulama başın tepesine bir çizgi çizer ve boyunu okur.</li>
        <li><strong>Temel bir su terazisi var.</strong> İki eksenli kabarcıklı su terazisi, bir çerçeve asmak için yeterli.</li>
      </ul>

      <h2>Apple Ölçü'nün durduğu yer</h2>
      <ul>
        <li><strong>Proje geçmişi yok.</strong> Her ölçüm ya bir ekran görüntüsüdür ya da kaybolur.</li>
        <li><strong>PDF dışa aktarma yok.</strong> Ekran görüntülerini paylaşabilirsiniz, biçimlendirilmiş belgeleri değil.</li>
        <li><strong>Açı yok.</strong> Yalnızca doğrusal mesafe.</li>
        <li><strong>Alan yok.</strong> Metrekare için bir çokgen çizemezsiniz.</li>
        <li><strong>3D oda taraması yok.</strong> LiDAR'lı iPhone'larda bile Apple Ölçü, oda taraması için derinlik sensörünü kullanmaz.</li>
        <li><strong>Manuel kat planı oluşturucu yok.</strong> LiDAR'sız iPhone'larda yedek bir akış yok.</li>
        <li><strong>Proje klasörleri yok.</strong> Bir tadilat için "mutfak ölçümleri"ni bir arada gruplamanın bir yolu yok.</li>
        <li><strong>Açıklama veya not yok.</strong> Sadece çıplak ölçüler.</li>
        <li><strong>Hassasiyet modları yok.</strong> Santimetre altı hassasiyet için Touch modu yok; yalnızca AR modu mevcut.</li>
      </ul>

      <h2>Ruler AR'ın eklediği şeyler</h2>
      <table>
        <thead>
          <tr><th>Özellik</th><th>Apple Ölçü</th><th>Ruler AR</th></tr>
        </thead>
        <tbody>
          <tr><td>Uzunluk / mesafe</td><td>evet</td><td>evet</td></tr>
          <tr><td>Boy (insanları otomatik algılama)</td><td>evet</td><td>evet</td></tr>
          <tr><td>Kabarcıklı su terazisi</td><td>temel</td><td>3 mod (dikey, yatay, serbest)</td></tr>
          <tr><td>Açı ölçümü</td><td>hayır</td><td>evet, AR iletki</td></tr>
          <tr><td>Alan / çokgen</td><td>hayır</td><td>evet, Kare modu</td></tr>
          <tr><td>3D LiDAR oda taraması</td><td>hayır</td><td>evet, RoomPlan</td></tr>
          <tr><td>Manuel kat planı (LiDAR'sız)</td><td>hayır</td><td>evet</td></tr>
          <tr><td>Touch modu (santimetre altı hassasiyet)</td><td>hayır</td><td>evet</td></tr>
          <tr><td>Proje klasörleri</td><td>hayır</td><td>evet</td></tr>
          <tr><td>Fotoğraf + not açıklamaları</td><td>hayır</td><td>evet</td></tr>
          <tr><td>PDF dışa aktarma</td><td>hayır</td><td>evet</td></tr>
          <tr><td>USDZ 3D dışa aktarma</td><td>hayır</td><td>evet (LiDAR ile)</td></tr>
          <tr><td>Malzeme hesaplayıcı (boya, fayans vb.)</td><td>hayır</td><td>evet</td></tr>
          <tr><td>Proje paylaşımı</td><td>yalnızca ekran görüntüsü</td><td>PDF, 3D, Mesajlar, AirDrop</td></tr>
        </tbody>
      </table>

      <h2>Apple Ölçü ne zaman yeterli</h2>
      <ul>
        <li>Sadece bir şeyin ne kadar yüksek olduğunu, şu anda, bir kez bilmek istiyorsunuz.</li>
        <li>Sonucu kaydetmek umurunuzda değil.</li>
        <li>Açıya, alana ya da herhangi bir oda planına ihtiyacınız yok.</li>
        <li>Hiçbir şey yüklemek istemiyorsunuz.</li>
      </ul>

      <h2>Apple Ölçü'yü bir hafta içinde aşacağınız durumlar</h2>
      <ul>
        <li>Bir tadilat planlıyorsunuz ve birden fazla odayı ölçmeniz gerekiyor.</li>
        <li>Mobilya alıyorsunuz ve ölçüleri başka biriyle paylaşmak istiyorsunuz.</li>
        <li>Geçiminizi ölçüm yaparak sağlıyorsunuz (müteahhit, tasarımcı, emlak, sigorta).</li>
        <li>Tek tek ölçüler değil, ölçülmüş bir kat planı istiyorsunuz.</li>
        <li>Belirli ölçümlere not ve fotoğraf eklemek istiyorsunuz.</li>
        <li>Bir müşteriye veya müteahhide profesyonel görünümlü bir rapor göndermeniz gerekiyor.</li>
      </ul>

      <h2>Dürüst değerlendirme</h2>
      <p>
        Apple Ölçü, on saniyelik iyi bir araç. Ölçeklenmek için tasarlanmadı, hızlı bir "Ayarlar" uygulaması, bir iş akışı değil. Ruler AR (ve diğer
        tam özellikli AR ölçüm uygulamaları) var olmasının nedeni şu: önemli
        olan birden fazla ölçüm aldığınız anda, onları koyacak bir yere, onları
        paylaşacak bir yola ve doğrusal mesafenin ötesinde araçlara ihtiyaç
        duyarsınız.
      </p>
      <p>
        Tek seferlik işler için Apple Ölçü'yü elinizde tutun. Geri kalan her şey
        için Ruler AR'ı (ücretsiz, temel işlevler için abonelik gerekmiyor)
        yükleyin. Üst üste iki şeyi ölçmeniz gereken anda, hangisini açacağınızı
        bileceksiniz.
      </p>
    </article>
  );
}

export function PostAR() {
  return (
    <article className="prose-content">
      <p className="lead">
        أُطلق تطبيق القياس من Apple مع نظام iOS 12 في عام 2018. وهو يستخدم
        إطار عمل ARKit نفسه الذي يعتمد عليه كل تطبيق قياس خارجي، لذا فإن
        الدقة الأساسية متطابقة تقريبًا. الفروق في مكان آخر: في ما يمكنك فعله
        بالقياسات بعد أخذها، وفي السيناريوهات التي يتعامل معها التطبيق فعليًا.
      </p>

      <h2>ما يجيده تطبيق القياس من Apple</h2>
      <ul>
        <li><strong>مجاني ومثبَّت مسبقًا.</strong> لا عوائق إطلاقًا لقياس عابر لمرة واحدة.</li>
        <li><strong>جيد في المسافات المفردة.</strong> انقر على نقطتين، وانظر إلى النتيجة. إنه يعمل.</li>
        <li><strong>يكتشف المستطيلات تلقائيًا.</strong> وجِّهه نحو إطار صورة أو ورقة، فيُبرز المستطيل ويعرض قياس جميع أضلاعه.</li>
        <li><strong>يكتشف طول الأشخاص تلقائيًا.</strong> إذا كان الشخص ظاهرًا بالكامل في الإطار، يرسم التطبيق خطًا حتى أعلى الرأس ويقرأ طوله.</li>
        <li><strong>يحتوي على ميزان أساسي.</strong> ميزان فقاعي ثنائي المحور، مناسب لتعليق إطار.</li>
      </ul>

      <h2>أين يتوقف تطبيق القياس من Apple</h2>
      <ul>
        <li><strong>لا يوجد سجل للمشاريع.</strong> كل قياس إما لقطة شاشة أو يضيع.</li>
        <li><strong>لا يوجد تصدير إلى PDF.</strong> يمكنك مشاركة لقطات الشاشة، وليس مستندات منسَّقة.</li>
        <li><strong>لا توجد زوايا.</strong> مسافة خطية فقط.</li>
        <li><strong>لا توجد مساحة.</strong> لا يمكنك رسم مضلّع لحساب الأمتار المربعة.</li>
        <li><strong>لا يوجد مسح ثلاثي الأبعاد للغرف.</strong> حتى على أجهزة iPhone المزودة بـ LiDAR، لا يستخدم تطبيق القياس من Apple مستشعر العمق لمسح الغرف.</li>
        <li><strong>لا يوجد منشئ مخططات يدوي.</strong> على أجهزة iPhone بدون LiDAR، لا يوجد مسار بديل.</li>
        <li><strong>لا توجد مجلدات للمشاريع.</strong> لا توجد طريقة لتجميع «قياسات المطبخ» معًا من أجل تجديد.</li>
        <li><strong>لا توجد تعليقات أو ملاحظات.</strong> مجرد أبعاد مجردة.</li>
        <li><strong>لا توجد أوضاع دقة.</strong> لا يوجد وضع Touch لدقة أقل من السنتيمتر؛ الوضع الوحيد المتاح هو وضع الواقع المعزز.</li>
      </ul>

      <h2>ما يضيفه Ruler AR</h2>
      <table>
        <thead>
          <tr><th>الإمكانية</th><th>تطبيق القياس من Apple</th><th>Ruler AR</th></tr>
        </thead>
        <tbody>
          <tr><td>الطول / المسافة</td><td>نعم</td><td>نعم</td></tr>
          <tr><td>الطول (الاكتشاف التلقائي للأشخاص)</td><td>نعم</td><td>نعم</td></tr>
          <tr><td>الميزان الفقاعي</td><td>أساسي</td><td>3 أوضاع (رأسي، أفقي، حر)</td></tr>
          <tr><td>قياس الزوايا</td><td>لا</td><td>نعم، منقلة بالواقع المعزز</td></tr>
          <tr><td>المساحة / المضلّع</td><td>لا</td><td>نعم، وضع المربع</td></tr>
          <tr><td>مسح ثلاثي الأبعاد بـ LiDAR</td><td>لا</td><td>نعم، RoomPlan</td></tr>
          <tr><td>مخطط أرضي يدوي (بدون LiDAR)</td><td>لا</td><td>نعم</td></tr>
          <tr><td>وضع Touch (دقة أقل من السنتيمتر)</td><td>لا</td><td>نعم</td></tr>
          <tr><td>مجلدات المشاريع</td><td>لا</td><td>نعم</td></tr>
          <tr><td>تعليقات بالصور والملاحظات</td><td>لا</td><td>نعم</td></tr>
          <tr><td>تصدير إلى PDF</td><td>لا</td><td>نعم</td></tr>
          <tr><td>تصدير ثلاثي الأبعاد بصيغة USDZ</td><td>لا</td><td>نعم (مع LiDAR)</td></tr>
          <tr><td>حاسبة المواد (طلاء، بلاط، إلخ)</td><td>لا</td><td>نعم</td></tr>
          <tr><td>مشاركة المشروع</td><td>لقطة شاشة فقط</td><td>PDF، ثلاثي الأبعاد، الرسائل، AirDrop</td></tr>
        </tbody>
      </table>

      <h2>متى يكفي تطبيق القياس من Apple</h2>
      <ul>
        <li>تريد فقط معرفة ارتفاع شيء ما، الآن، مرة واحدة.</li>
        <li>لا يهمك حفظ النتيجة.</li>
        <li>لا تحتاج إلى زوايا أو مساحة أو أي نوع من مخططات الغرف.</li>
        <li>لا تريد تثبيت أي شيء.</li>
      </ul>

      <h2>متى ستتجاوز تطبيق القياس من Apple خلال أسبوع</h2>
      <ul>
        <li>تخطط لتجديد وتحتاج إلى قياس عدة غرف.</li>
        <li>تتسوق للأثاث وتريد مشاركة الأبعاد مع شخص آخر.</li>
        <li>تقيس الأشياء كمهنة (مقاول، مصمم، عقارات، تأمين).</li>
        <li>تريد مخططًا أرضيًا مقاسًا، لا مجرد أبعاد منفردة.</li>
        <li>تريد إرفاق ملاحظات وصور بقياسات محددة.</li>
        <li>تحتاج إلى إرسال تقرير بمظهر احترافي إلى عميل أو مقاول.</li>
      </ul>

      <h2>الرأي الصادق</h2>
      <p>
        تطبيق القياس من Apple أداة جيدة لعشر ثوانٍ. إنه غير مصمم للتوسّع، فهو تطبيق «إعدادات» سريع، وليس سير عمل. يوجد Ruler AR (وغيره من
        تطبيقات القياس بالواقع المعزز كاملة الميزات) لأنه في اللحظة التي
        تأخذ فيها أكثر من قياس واحد مهم، تحتاج إلى مكان لوضعها، وطريقة
        لمشاركتها، وأدوات تتجاوز المسافة الخطية.
      </p>
      <p>
        احتفظ بتطبيق القياس من Apple للقياسات العابرة. وثبِّت Ruler AR
        (مجاني، لا يتطلب اشتراكًا للأساسيات) لكل شيء آخر. في اللحظة التي
        تحتاج فيها إلى قياس شيئين على التوالي، ستعرف أيهما تفتح.
      </p>
    </article>
  );
}

export const bodies = {
  ru: PostRU, de: PostDE, fr: PostFR, es: PostES, ja: PostJA, ko: PostKO,
  'zh-Hans': PostZH, 'pt-BR': PostPT, it: PostIT, pl: PostPL, tr: PostTR, ar: PostAR
};
