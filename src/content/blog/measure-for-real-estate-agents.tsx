import type { PostMeta } from './posts';

export const meta: PostMeta = {
  slug: 'measure-for-real-estate-agents',
  date: '2026-04-30',
  readingTimeMin: 6,
  keywords:
    'real estate measuring app, floor plan for listings, iphone for realtors, measure listings ar, realtor floor plan app',
  tags: ['Real estate', 'Workflow', 'Pro'],
  title: {
    en: "Best Measuring App for Real Estate Agents: A Workflow That Sells Listings",
    ru: "Лучшее приложение для измерений у риелтора: рабочий процесс, который продаёт",
    de: "Beste Mess-App für Immobilienmakler: ein Workflow, der Inserate verkauft",
    fr: "Meilleure app de mesure pour agents immobiliers : un workflow qui vend",
    es: "Mejor app de medición para agentes inmobiliarios: un flujo que vende",
    ja: "不動産エージェント向け最強の計測アプリ：物件を売る業務フロー",
    ko: "부동산 중개인을 위한 최고의 측정 앱: 매물을 파는 워크플로",
    "zh-Hans": "房产经纪人最佳测量应用：能卖出房源的工作流",
    "pt-BR": "Melhor app de medição para corretores: um fluxo que vende imóveis",
    it: "La migliore app di misurazione per agenti immobiliari: un workflow che vende",
    pl: "Najlepsza aplikacja do pomiarów dla agentów nieruchomości: workflow, który sprzedaje",
    tr: "Emlakçılar için en iyi ölçüm uygulaması: ilanları satan bir iş akışı",
    ar: "أفضل تطبيق قياس للوسطاء العقاريين: سير عمل يبيع العقارات"
  },
  excerpt: {
    en: "Listings with floor plans get 30-50% more clicks. Here's how to generate one from your iPhone during the first walkthrough, and why this is now table-stakes for any serious real estate workflow.",
    ru: "Объявления с планировкой получают на 30-50% больше кликов. Как сгенерировать её с iPhone прямо на первом показе, и почему это уже стандарт для любого серьёзного риелтора.",
    de: "Inserate mit Grundrissen erhalten 30-50% mehr Klicks. So erstellen Sie einen direkt mit dem iPhone bei der ersten Begehung – und warum das für jeden seriösen Immobilien-Workflow heute Pflicht ist.",
    fr: "Les annonces avec plan obtiennent 30 à 50% de clics en plus. Voici comment en générer un depuis votre iPhone dès la première visite, et pourquoi c'est désormais incontournable pour tout agent sérieux.",
    es: "Los anuncios con plano reciben entre un 30 y un 50% más de clics. Así puedes generar uno desde tu iPhone durante la primera visita, y por qué hoy es imprescindible para cualquier agente serio.",
    ja: "間取り図付きの物件情報はクリック数が30〜50%増えます。初回内見中にiPhoneで間取り図を作る方法と、なぜこれが今や本格的な不動産業務の必須条件なのかを解説します。",
    ko: "평면도가 있는 매물은 클릭이 30~50% 더 많습니다. 첫 현장 방문 중에 iPhone으로 평면도를 만드는 방법과, 왜 이것이 이제 진지한 부동산 워크플로의 기본 조건인지 설명합니다.",
    "zh-Hans": "带户型图的房源点击量高出 30%-50%。本文教你在第一次看房时用 iPhone 生成户型图，并说明为何这已成为任何专业房产工作流的标配。",
    "pt-BR": "Anúncios com planta baixa recebem de 30% a 50% mais cliques. Veja como gerar uma pelo seu iPhone já na primeira visita e por que isso virou requisito básico para qualquer fluxo imobiliário sério.",
    it: "Gli annunci con planimetria ricevono dal 30 al 50% di clic in più. Ecco come generarne una dal tuo iPhone durante il primo sopralluogo e perché oggi è un requisito di base per qualsiasi workflow immobiliare serio.",
    pl: "Oferty z rzutem mieszkania mają o 30-50% więcej kliknięć. Oto jak wygenerować go z iPhone'a już podczas pierwszej wizyty i dlaczego to dziś standard w każdym poważnym procesie sprzedaży nieruchomości.",
    tr: "Kat planı içeren ilanlar %30-50 daha fazla tıklanma alıyor. İlk gezme sırasında iPhone'unuzdan nasıl bir tane oluşturacağınızı ve bunun neden artık her ciddi emlak iş akışının olmazsa olmazı olduğunu anlatıyoruz.",
    ar: "الإعلانات التي تتضمّن مخططًا للطابق تحصل على نقرات أكثر بنسبة 30-50%. إليك كيفية إنشاء واحد من iPhone أثناء أول معاينة، ولماذا أصبح هذا اليوم شرطًا أساسيًا لأي سير عمل عقاري جاد."
  }
};

export default function Post() {
  return (
    <article className="prose-content">
      <p className="lead">
        Rightmove and Zillow research from 2023-2024 is consistent: property
        listings that include a measured floor plan generate <strong>30-52%
        more clicks</strong> than equivalent listings with photos only. For a
        broker doing 50 listings a year, that translates directly into more
        showings, more offers, and faster sell-through.
      </p>
      <p>
        Yet most agents still write square footage as a single number with
        no visual context. The reason isn't lack of demand, it's because
        ordering a professional floor plan costs €100-300 and adds a week
        to the listing turnaround. With an iPhone Pro and a measuring app,
        you can do this in 4 minutes during the first walkthrough.
      </p>

      <h2>The 4-minute floor plan capture</h2>
      <p>
        Assuming an iPhone with LiDAR (12 Pro or newer) and Ruler AR
        installed:
      </p>
      <ol>
        <li>
          <strong>00:00.</strong> Open Ruler AR → Room Scan. Start in the
          entryway. Walk slowly around the apartment along each wall.
        </li>
        <li>
          <strong>02:30.</strong> Finish the loop. The app has tagged
          walls, doors, windows, and major furniture (sofa, bed, fridge,
          table). Tap Done.
        </li>
        <li>
          <strong>03:00.</strong> The 2D floor plan view opens with
          dimensions on every wall. You can drag furniture if any was
          misplaced.
        </li>
        <li>
          <strong>03:30.</strong> Tap Share → Export PDF. The PDF includes
          the 2D plan, a dimensions table, the 3D model preview, and
          (optionally) photos.
        </li>
        <li>
          <strong>04:00.</strong> Send to your MLS upload queue or paste
          into your listing platform.
        </li>
      </ol>

      <h2>Why a floor plan beats a number</h2>
      <p>
        A "65 m²" label is abstract. A floor plan answers buyers' real
        questions:
      </p>
      <ul>
        <li>Is the master bedroom big enough for a king bed plus side tables?</li>
        <li>Where does the kitchen open onto?</li>
        <li>Is there room for a dining table?</li>
        <li>How big is the second bedroom compared to the first?</li>
        <li>Where can I put my desk that won't be in the bedroom?</li>
      </ul>
      <p>
        These are decisions buyers make before they request a viewing. A
        measured floor plan lets them self-qualify, agents see fewer
        time-wasters and more serious leads.
      </p>

      <h2>The professional touch</h2>
      <p>
        Three things turn a quick scan into a sales tool:
      </p>
      <ol>
        <li>
          <strong>Re-name walls and rooms.</strong> "Bedroom 1" → "Master
          Bedroom (with built-in wardrobes)". Tap any label in the 2D editor
          to edit.
        </li>
        <li>
          <strong>Mark fixed features.</strong> Built-in storage, fireplaces,
          stairs, radiators. These differentiate listings from photos alone.
        </li>
        <li>
          <strong>Add the listing brand.</strong> The PDF export accepts a
          custom header/footer in app settings. Add your agency logo and a
          listing reference number once; every PDF you generate from then on
          carries it.
        </li>
      </ol>

      <h2>For agents without LiDAR iPhones</h2>
      <p>
        The Manual Room Builder still produces a clean orthogonal floor
        plan, but you tap each corner yourself (about 60 seconds per room
        of work). The result is 2D-only (no 3D model), but for listings,
        2D is what platforms accept anyway.
      </p>
      <p>
        Workflow: stand in a corner, tap the floor at your feet. Walk along
        the wall to the next corner, tap. Continue around the room. When
        you close the polygon, the app snaps to right angles and produces
        the plan. Add doors, windows, and major furniture by dragging from
        the toolbox in the 2D editor.
      </p>

      <h2>Privacy concerns</h2>
      <p>
        Listings sometimes show interior photos that buyers find off-putting
        because of personal clutter. A floor plan is the opposite, completely anonymous. No fridge magnets, no photos on walls, no
        personal items. You can publish a plan before the home is staged for
        photography, which speeds up the listing timeline.
      </p>

      <h2>Showings, not just listings</h2>
      <p>
        Keep the PDF on your phone during showings. Buyers love when you
        can answer "how wide is this hall?" or "what's the depth of that
        kitchen counter?" with a real number, and you're holding the
        evidence. It also helps when the buyer wants to know if their
        existing furniture fits.
      </p>

      <h2>Time math</h2>
      <p>
        At 4 minutes per listing, 50 listings/year = 200 minutes total.
        Compare to ordering professional floor plans at €150 each: €7,500
        in fees, plus a week of waiting per listing. The math becomes obvious
        once you've shipped one PDF that closed a deal.
      </p>

      <h2>Bottom line</h2>
      <p>
        Floor plans are now table-stakes for premium listings. The barrier
        used to be cost and time, neither applies anymore. An iPhone Pro,
        a measuring app, and 4 minutes per property gets you a plan that
        outperforms half the professionally-drawn ones on the MLS. The agents
        who adopt this in 2026 will out-list the ones who don't.
      </p>
    </article>
  );
}

export function PostRU() {
  return (
    <article className="prose-content">
      <p className="lead">
        Исследования Rightmove и Zillow за 2023-2024 годы говорят об одном и
        том же: объявления о недвижимости с измеренной планировкой собирают
        <strong> на 30-52% больше кликов</strong>, чем такие же объявления
        только с фотографиями. Для риелтора, который ведёт 50 объектов в год,
        это напрямую означает больше показов, больше предложений и более
        быстрые сделки.
      </p>
      <p>
        Но большинство агентов до сих пор указывают площадь одним числом без
        визуального контекста. Дело не в отсутствии спроса, а в том, что заказ
        профессиональной планировки стоит €100-300 и добавляет неделю к
        подготовке объявления. С iPhone Pro и приложением для измерений вы
        делаете это за 4 минуты прямо на первом показе.
      </p>

      <h2>Создание планировки за 4 минуты</h2>
      <p>
        Допустим, у вас iPhone с LiDAR (12 Pro или новее) и установленный
        Ruler AR:
      </p>
      <ol>
        <li>
          <strong>00:00.</strong> Откройте Ruler AR → Сканирование комнаты.
          Начните от входа. Медленно обойдите квартиру вдоль каждой стены.
        </li>
        <li>
          <strong>02:30.</strong> Завершите обход. Приложение уже разметило
          стены, двери, окна и крупную мебель (диван, кровать, холодильник,
          стол). Нажмите «Готово».
        </li>
        <li>
          <strong>03:00.</strong> Откроется 2D-планировка с размерами на
          каждой стене. Если что-то встало не на место, мебель можно
          перетащить.
        </li>
        <li>
          <strong>03:30.</strong> Нажмите «Поделиться» → «Экспорт PDF». В PDF
          входят 2D-план, таблица размеров, превью 3D-модели и (по желанию)
          фотографии.
        </li>
        <li>
          <strong>04:00.</strong> Отправьте в очередь загрузки на MLS или
          вставьте в свою площадку объявлений.
        </li>
      </ol>

      <h2>Почему планировка лучше одного числа</h2>
      <p>
        Надпись «65 м²» абстрактна. Планировка отвечает на реальные вопросы
        покупателей:
      </p>
      <ul>
        <li>Хватит ли в спальне места для большой кровати и тумбочек?</li>
        <li>Куда выходит кухня?</li>
        <li>Поместится ли обеденный стол?</li>
        <li>Насколько вторая спальня меньше первой?</li>
        <li>Куда поставить рабочий стол, чтобы он не оказался в спальне?</li>
      </ul>
      <p>
        Эти решения покупатели принимают ещё до того, как попросят просмотр.
        Измеренная планировка позволяет им отсеять себя самим, и агент видит
        меньше «туристов» и больше серьёзных лидов.
      </p>

      <h2>Профессиональный штрих</h2>
      <p>
        Три вещи превращают быстрое сканирование в инструмент продаж:
      </p>
      <ol>
        <li>
          <strong>Переименуйте стены и комнаты.</strong> «Спальня 1» →
          «Главная спальня (со встроенными шкафами)». Нажмите на любую
          подпись в 2D-редакторе, чтобы изменить её.
        </li>
        <li>
          <strong>Отметьте постоянные элементы.</strong> Встроенные шкафы,
          камины, лестницы, радиаторы. Именно они отличают объявление лучше,
          чем одни фотографии.
        </li>
        <li>
          <strong>Добавьте брендинг объявления.</strong> Экспорт в PDF
          поддерживает свой колонтитул в настройках приложения. Добавьте
          логотип агентства и номер объекта один раз — и каждый последующий PDF
          будет их нести.
        </li>
      </ol>

      <h2>Для агентов без iPhone с LiDAR</h2>
      <p>
        Ручной конструктор комнат всё равно строит аккуратную прямоугольную
        планировку, но каждый угол вы отмечаете сами (примерно 60 секунд
        работы на комнату). Результат только в 2D (без 3D-модели), но для
        объявлений площадки всё равно принимают 2D.
      </p>
      <p>
        Порядок действий: встаньте в углу, коснитесь пола у своих ног. Пройдите
        вдоль стены к следующему углу, коснитесь. Так обойдите всю комнату.
        Когда вы замкнёте контур, приложение выровняет углы до прямых и построит
        план. Двери, окна и крупную мебель добавьте перетаскиванием из панели
        инструментов в 2D-редакторе.
      </p>

      <h2>Вопросы приватности</h2>
      <p>
        В объявлениях иногда показывают фотографии интерьера, которые отталкивают
        покупателей из-за личного беспорядка. Планировка — полная противоположность,
        она абсолютно анонимна. Никаких магнитов на холодильнике, фото на стенах
        и личных вещей. План можно опубликовать ещё до того, как жильё подготовят
        к фотосъёмке, что ускоряет вывод объявления.
      </p>

      <h2>Не только объявления, но и показы</h2>
      <p>
        Держите PDF в телефоне во время показов. Покупателям нравится, когда на
        вопрос «какой ширины этот коридор?» или «какая глубина у кухонной
        столешницы?» вы отвечаете реальным числом и держите доказательство в
        руках. Это помогает и тогда, когда покупатель хочет понять, поместится
        ли его нынешняя мебель.
      </p>

      <h2>Математика времени</h2>
      <p>
        По 4 минуты на объект, 50 объектов в год = 200 минут всего. Сравните с
        заказом профессиональных планировок по €150 за каждую: €7 500 расходов
        плюс неделя ожидания на каждый объект. Расчёт становится очевидным после
        первого же PDF, который закрыл сделку.
      </p>

      <h2>Итог</h2>
      <p>
        Планировки сегодня — обязательный минимум для премиальных объявлений.
        Раньше барьером были цена и время, теперь ни то, ни другое не работает.
        iPhone Pro, приложение для измерений и 4 минуты на объект дают план,
        который превосходит половину профессионально нарисованных на MLS. Агенты,
        которые внедрят это в 2026 году, обойдут тех, кто не сделал этого.
      </p>
    </article>
  );
}

export function PostDE() {
  return (
    <article className="prose-content">
      <p className="lead">
        Studien von Rightmove und Zillow aus den Jahren 2023-2024 sind eindeutig:
        Immobilieninserate mit einem vermessenen Grundriss erzielen
        <strong> 30-52% mehr Klicks</strong> als vergleichbare Inserate nur mit
        Fotos. Für einen Makler mit 50 Inseraten pro Jahr bedeutet das direkt
        mehr Besichtigungen, mehr Angebote und schnellere Verkäufe.
      </p>
      <p>
        Trotzdem geben die meisten Makler die Quadratmeterzahl nur als einzelne
        Zahl ohne visuellen Kontext an. Der Grund ist nicht fehlende Nachfrage,
        sondern dass ein professioneller Grundriss €100-300 kostet und die
        Bearbeitung um eine Woche verlängert. Mit einem iPhone Pro und einer
        Mess-App schaffen Sie das in 4 Minuten bei der ersten Begehung.
      </p>

      <h2>Der Grundriss in 4 Minuten</h2>
      <p>
        Vorausgesetzt, Sie haben ein iPhone mit LiDAR (12 Pro oder neuer) und
        Ruler AR installiert:
      </p>
      <ol>
        <li>
          <strong>00:00.</strong> Öffnen Sie Ruler AR → Raumscan. Beginnen Sie
          im Eingangsbereich. Gehen Sie langsam an jeder Wand entlang durch die
          Wohnung.
        </li>
        <li>
          <strong>02:30.</strong> Schließen Sie die Runde. Die App hat Wände,
          Türen, Fenster und große Möbel (Sofa, Bett, Kühlschrank, Tisch)
          erkannt. Tippen Sie auf Fertig.
        </li>
        <li>
          <strong>03:00.</strong> Die 2D-Grundrissansicht öffnet sich mit Maßen
          an jeder Wand. Falsch platzierte Möbel können Sie verschieben.
        </li>
        <li>
          <strong>03:30.</strong> Tippen Sie auf Teilen → PDF exportieren. Das
          PDF enthält den 2D-Plan, eine Maßtabelle, die Vorschau des 3D-Modells
          und (optional) Fotos.
        </li>
        <li>
          <strong>04:00.</strong> Senden Sie es an Ihre MLS-Upload-Warteschlange
          oder fügen Sie es in Ihre Inseratsplattform ein.
        </li>
      </ol>

      <h2>Warum ein Grundriss eine Zahl schlägt</h2>
      <p>
        Die Angabe „65 m²" ist abstrakt. Ein Grundriss beantwortet die echten
        Fragen der Käufer:
      </p>
      <ul>
        <li>Ist das Schlafzimmer groß genug für ein Kingsize-Bett plus Nachttische?</li>
        <li>Wohin öffnet sich die Küche?</li>
        <li>Ist Platz für einen Esstisch?</li>
        <li>Wie groß ist das zweite Schlafzimmer im Vergleich zum ersten?</li>
        <li>Wo kann ich meinen Schreibtisch hinstellen, ohne dass er im Schlafzimmer steht?</li>
      </ul>
      <p>
        Diese Entscheidungen treffen Käufer, bevor sie eine Besichtigung
        anfragen. Ein vermessener Grundriss lässt sie sich selbst
        qualifizieren – Makler sehen weniger Zeitverschwender und mehr
        ernsthafte Interessenten.
      </p>

      <h2>Der professionelle Feinschliff</h2>
      <p>
        Drei Dinge machen aus einem schnellen Scan ein Verkaufswerkzeug:
      </p>
      <ol>
        <li>
          <strong>Wände und Räume umbenennen.</strong> „Schlafzimmer 1" →
          „Hauptschlafzimmer (mit Einbauschränken)". Tippen Sie im 2D-Editor auf
          eine beliebige Beschriftung, um sie zu bearbeiten.
        </li>
        <li>
          <strong>Feste Merkmale markieren.</strong> Einbauschränke, Kamine,
          Treppen, Heizkörper. Diese heben ein Inserat besser hervor als Fotos
          allein.
        </li>
        <li>
          <strong>Das Inserat branden.</strong> Der PDF-Export übernimmt eine
          eigene Kopf-/Fußzeile aus den App-Einstellungen. Fügen Sie Ihr
          Agenturlogo und eine Objektnummer einmal hinzu; jedes danach erstellte
          PDF trägt sie.
        </li>
      </ol>

      <h2>Für Makler ohne LiDAR-iPhone</h2>
      <p>
        Der manuelle Raumbaumodus erzeugt weiterhin einen sauberen
        rechtwinkligen Grundriss, doch Sie tippen jede Ecke selbst an (etwa 60
        Sekunden Arbeit pro Raum). Das Ergebnis ist reines 2D (kein 3D-Modell),
        aber für Inserate akzeptieren die Plattformen ohnehin nur 2D.
      </p>
      <p>
        Ablauf: Stellen Sie sich in eine Ecke und tippen Sie auf den Boden zu
        Ihren Füßen. Gehen Sie an der Wand entlang zur nächsten Ecke und tippen
        Sie. So umrunden Sie den Raum. Sobald Sie das Polygon schließen, richtet
        die App die rechten Winkel aus und erstellt den Plan. Türen, Fenster und
        große Möbel fügen Sie per Ziehen aus der Werkzeugleiste im 2D-Editor
        hinzu.
      </p>

      <h2>Datenschutzbedenken</h2>
      <p>
        Inserate zeigen manchmal Innenfotos, die Käufer wegen persönlichem
        Durcheinander abschrecken. Ein Grundriss ist das Gegenteil, völlig anonym.
        Keine Kühlschrankmagnete, keine Fotos an den Wänden, keine persönlichen
        Gegenstände. Sie können einen Plan veröffentlichen, bevor die Wohnung für
        das Fotoshooting hergerichtet ist, was die Inseratserstellung beschleunigt.
      </p>

      <h2>Nicht nur Inserate, auch Besichtigungen</h2>
      <p>
        Behalten Sie das PDF bei Besichtigungen auf dem Handy. Käufer lieben es,
        wenn Sie „Wie breit ist dieser Flur?" oder „Wie tief ist diese
        Küchenarbeitsplatte?" mit einer echten Zahl beantworten können und den
        Beweis in der Hand halten. Es hilft auch, wenn der Käufer wissen will, ob
        seine vorhandenen Möbel passen.
      </p>

      <h2>Die Zeitrechnung</h2>
      <p>
        Bei 4 Minuten pro Inserat sind 50 Inserate pro Jahr = 200 Minuten
        insgesamt. Vergleichen Sie das mit professionellen Grundrissen zu je
        €150: €7.500 an Gebühren plus eine Woche Wartezeit pro Inserat. Die
        Rechnung wird offensichtlich, sobald Sie ein PDF abgeliefert haben, das
        einen Abschluss gebracht hat.
      </p>

      <h2>Fazit</h2>
      <p>
        Grundrisse sind heute Pflicht für Premium-Inserate. Früher waren Kosten
        und Zeit die Hürde, beides gilt nicht mehr. Ein iPhone Pro, eine Mess-App
        und 4 Minuten pro Objekt liefern einen Plan, der die Hälfte der
        professionell gezeichneten im MLS übertrifft. Die Makler, die das 2026
        einführen, werden die übertrumpfen, die es nicht tun.
      </p>
    </article>
  );
}

export function PostFR() {
  return (
    <article className="prose-content">
      <p className="lead">
        Les études de Rightmove et Zillow de 2023-2024 sont unanimes : les
        annonces immobilières incluant un plan coté génèrent
        <strong> 30 à 52% de clics en plus</strong> que des annonces
        équivalentes avec photos seules. Pour un agent qui gère 50 biens par an,
        cela se traduit directement par plus de visites, plus d'offres et des
        ventes plus rapides.
      </p>
      <p>
        Pourtant, la plupart des agents indiquent encore la surface comme un
        simple chiffre, sans contexte visuel. Ce n'est pas faute de demande,
        c'est parce que commander un plan professionnel coûte 100 à 300 € et
        ajoute une semaine au délai de mise en ligne. Avec un iPhone Pro et une
        app de mesure, vous le faites en 4 minutes dès la première visite.
      </p>

      <h2>Le plan en 4 minutes</h2>
      <p>
        En supposant un iPhone doté du LiDAR (12 Pro ou plus récent) et Ruler AR
        installé :
      </p>
      <ol>
        <li>
          <strong>00:00.</strong> Ouvrez Ruler AR → Scan de pièce. Commencez à
          l'entrée. Faites lentement le tour de l'appartement le long de chaque
          mur.
        </li>
        <li>
          <strong>02:30.</strong> Bouclez le parcours. L'app a repéré les murs,
          portes, fenêtres et les gros meubles (canapé, lit, frigo, table).
          Touchez Terminé.
        </li>
        <li>
          <strong>03:00.</strong> La vue du plan 2D s'ouvre avec les dimensions
          sur chaque mur. Vous pouvez déplacer un meuble s'il a été mal placé.
        </li>
        <li>
          <strong>03:30.</strong> Touchez Partager → Exporter en PDF. Le PDF
          contient le plan 2D, un tableau des dimensions, l'aperçu du modèle 3D
          et (en option) des photos.
        </li>
        <li>
          <strong>04:00.</strong> Envoyez-le dans votre file d'envoi MLS ou
          collez-le dans votre plateforme d'annonces.
        </li>
      </ol>

      <h2>Pourquoi un plan vaut mieux qu'un chiffre</h2>
      <p>
        L'étiquette « 65 m² » est abstraite. Un plan répond aux vraies questions
        des acheteurs :
      </p>
      <ul>
        <li>La chambre principale est-elle assez grande pour un grand lit et des tables de chevet ?</li>
        <li>Sur quoi donne la cuisine ?</li>
        <li>Y a-t-il de la place pour une table à manger ?</li>
        <li>Quelle est la taille de la deuxième chambre par rapport à la première ?</li>
        <li>Où puis-je mettre mon bureau pour qu'il ne soit pas dans la chambre ?</li>
      </ul>
      <p>
        Ce sont des décisions que les acheteurs prennent avant de demander une
        visite. Un plan coté leur permet de se qualifier eux-mêmes : l'agent voit
        moins de curieux et plus de prospects sérieux.
      </p>

      <h2>La touche professionnelle</h2>
      <p>
        Trois choses transforment un scan rapide en outil de vente :
      </p>
      <ol>
        <li>
          <strong>Renommez les murs et les pièces.</strong> « Chambre 1 » →
          « Chambre principale (avec placards intégrés) ». Touchez n'importe
          quelle étiquette dans l'éditeur 2D pour la modifier.
        </li>
        <li>
          <strong>Indiquez les éléments fixes.</strong> Rangements intégrés,
          cheminées, escaliers, radiateurs. Ils distinguent une annonce bien
          mieux que les seules photos.
        </li>
        <li>
          <strong>Ajoutez l'identité de l'annonce.</strong> L'export PDF accepte
          un en-tête/pied de page personnalisé dans les réglages de l'app.
          Ajoutez une fois le logo de votre agence et un numéro de référence ;
          chaque PDF généré ensuite les portera.
        </li>
      </ol>

      <h2>Pour les agents sans iPhone LiDAR</h2>
      <p>
        Le constructeur de pièce manuel produit tout de même un plan orthogonal
        propre, mais vous touchez chaque coin vous-même (environ 60 secondes de
        travail par pièce). Le résultat est en 2D uniquement (pas de modèle 3D),
        mais pour les annonces, c'est de toute façon le 2D que les plateformes
        acceptent.
      </p>
      <p>
        Méthode : placez-vous dans un coin, touchez le sol à vos pieds. Longez le
        mur jusqu'au coin suivant, touchez. Faites ainsi le tour de la pièce.
        Quand vous fermez le polygone, l'app aligne les angles droits et produit
        le plan. Ajoutez portes, fenêtres et gros meubles en les faisant glisser
        depuis la boîte à outils de l'éditeur 2D.
      </p>

      <h2>Questions de confidentialité</h2>
      <p>
        Les annonces montrent parfois des photos d'intérieur que les acheteurs
        trouvent rebutantes à cause du désordre personnel. Un plan, c'est tout le
        contraire, totalement anonyme. Pas d'aimants sur le frigo, pas de photos
        aux murs, pas d'effets personnels. Vous pouvez publier un plan avant même
        la mise en scène pour le shooting photo, ce qui accélère la mise en ligne.
      </p>

      <h2>Pas seulement les annonces, aussi les visites</h2>
      <p>
        Gardez le PDF sur votre téléphone pendant les visites. Les acheteurs
        adorent quand vous répondez « quelle est la largeur de ce couloir ? » ou
        « quelle est la profondeur de ce plan de travail ? » par un vrai chiffre,
        preuve en main. C'est aussi utile quand l'acheteur veut savoir si ses
        meubles actuels rentrent.
      </p>

      <h2>Le calcul du temps</h2>
      <p>
        À 4 minutes par annonce, 50 annonces par an = 200 minutes au total.
        Comparez à la commande de plans professionnels à 150 € pièce : 7 500 € de
        frais, plus une semaine d'attente par annonce. Le calcul devient évident
        dès que vous avez livré un PDF qui a conclu une vente.
      </p>

      <h2>En résumé</h2>
      <p>
        Les plans sont désormais incontournables pour les annonces haut de gamme.
        L'obstacle était le coût et le temps, plus aucun des deux ne tient. Un
        iPhone Pro, une app de mesure et 4 minutes par bien vous donnent un plan
        qui surpasse la moitié de ceux dessinés par des pros sur le MLS. Les
        agents qui adoptent cela en 2026 prendront l'avantage sur ceux qui ne le
        font pas.
      </p>
    </article>
  );
}

export function PostES() {
  return (
    <article className="prose-content">
      <p className="lead">
        Los estudios de Rightmove y Zillow de 2023-2024 coinciden: los anuncios
        inmobiliarios que incluyen un plano acotado generan
        <strong> entre un 30 y un 52% más de clics</strong> que anuncios
        equivalentes solo con fotos. Para un agente con 50 propiedades al año,
        eso se traduce directamente en más visitas, más ofertas y ventas más
        rápidas.
      </p>
      <p>
        Aun así, la mayoría de los agentes sigue indicando los metros cuadrados
        como una sola cifra sin contexto visual. No es por falta de demanda, sino
        porque encargar un plano profesional cuesta entre 100 y 300 € y añade una
        semana al plazo de publicación. Con un iPhone Pro y una app de medición,
        lo haces en 4 minutos durante la primera visita.
      </p>

      <h2>El plano en 4 minutos</h2>
      <p>
        Suponiendo un iPhone con LiDAR (12 Pro o posterior) y Ruler AR instalado:
      </p>
      <ol>
        <li>
          <strong>00:00.</strong> Abre Ruler AR → Escaneo de habitación. Empieza
          en la entrada. Recorre el piso despacio siguiendo cada pared.
        </li>
        <li>
          <strong>02:30.</strong> Cierra el recorrido. La app ha etiquetado
          paredes, puertas, ventanas y muebles grandes (sofá, cama, nevera,
          mesa). Toca Listo.
        </li>
        <li>
          <strong>03:00.</strong> Se abre la vista del plano 2D con cotas en cada
          pared. Puedes arrastrar un mueble si quedó mal colocado.
        </li>
        <li>
          <strong>03:30.</strong> Toca Compartir → Exportar PDF. El PDF incluye
          el plano 2D, una tabla de dimensiones, la vista previa del modelo 3D y
          (opcionalmente) fotos.
        </li>
        <li>
          <strong>04:00.</strong> Envíalo a tu cola de subida al MLS o pégalo en
          tu plataforma de anuncios.
        </li>
      </ol>

      <h2>Por qué un plano supera a una cifra</h2>
      <p>
        La etiqueta «65 m²» es abstracta. Un plano responde a las preguntas
        reales de los compradores:
      </p>
      <ul>
        <li>¿Es el dormitorio principal lo bastante grande para una cama de matrimonio y mesitas?</li>
        <li>¿Hacia dónde da la cocina?</li>
        <li>¿Hay espacio para una mesa de comedor?</li>
        <li>¿Cómo es el segundo dormitorio comparado con el primero?</li>
        <li>¿Dónde puedo poner mi escritorio para que no quede en el dormitorio?</li>
      </ul>
      <p>
        Son decisiones que los compradores toman antes de pedir una visita. Un
        plano acotado les permite filtrarse a sí mismos: el agente ve menos
        curiosos y más interesados serios.
      </p>

      <h2>El toque profesional</h2>
      <p>
        Tres cosas convierten un escaneo rápido en una herramienta de venta:
      </p>
      <ol>
        <li>
          <strong>Renombra paredes y habitaciones.</strong> «Dormitorio 1» →
          «Dormitorio principal (con armarios empotrados)». Toca cualquier
          etiqueta en el editor 2D para editarla.
        </li>
        <li>
          <strong>Marca los elementos fijos.</strong> Armarios empotrados,
          chimeneas, escaleras, radiadores. Distinguen un anuncio mucho mejor que
          las fotos por sí solas.
        </li>
        <li>
          <strong>Añade la marca del anuncio.</strong> La exportación a PDF
          admite un encabezado/pie personalizado en los ajustes de la app. Añade
          una vez el logo de tu agencia y un número de referencia; cada PDF que
          generes a partir de entonces los llevará.
        </li>
      </ol>

      <h2>Para agentes sin iPhone con LiDAR</h2>
      <p>
        El Constructor manual de habitaciones igualmente produce un plano
        ortogonal limpio, pero tocas cada esquina tú mismo (unos 60 segundos de
        trabajo por habitación). El resultado es solo 2D (sin modelo 3D), pero
        para los anuncios las plataformas aceptan 2D de todos modos.
      </p>
      <p>
        Método: colócate en una esquina y toca el suelo a tus pies. Camina junto a
        la pared hasta la siguiente esquina y toca. Continúa por toda la
        habitación. Al cerrar el polígono, la app ajusta los ángulos rectos y
        genera el plano. Añade puertas, ventanas y muebles grandes arrastrándolos
        desde la caja de herramientas del editor 2D.
      </p>

      <h2>Cuestiones de privacidad</h2>
      <p>
        Los anuncios a veces muestran fotos de interior que disuaden a los
        compradores por el desorden personal. Un plano es lo contrario, totalmente
        anónimo. Sin imanes en la nevera, sin fotos en las paredes, sin objetos
        personales. Puedes publicar un plano antes de que la vivienda esté
        preparada para el reportaje fotográfico, lo que acelera la publicación.
      </p>

      <h2>No solo anuncios, también visitas</h2>
      <p>
        Lleva el PDF en el teléfono durante las visitas. A los compradores les
        encanta cuando respondes «¿qué ancho tiene este pasillo?» o «¿qué fondo
        tiene esa encimera?» con una cifra real y la prueba en la mano. También
        ayuda cuando el comprador quiere saber si sus muebles actuales caben.
      </p>

      <h2>La cuenta del tiempo</h2>
      <p>
        A 4 minutos por anuncio, 50 anuncios al año = 200 minutos en total.
        Compáralo con encargar planos profesionales a 150 € cada uno: 7.500 € en
        gastos, más una semana de espera por anuncio. La cuenta se vuelve evidente
        en cuanto entregas un PDF que cierra una operación.
      </p>

      <h2>En resumen</h2>
      <p>
        Los planos ya son imprescindibles para los anuncios premium. La barrera
        eran el coste y el tiempo, y ninguno se aplica ya. Un iPhone Pro, una app
        de medición y 4 minutos por propiedad te dan un plano que supera a la
        mitad de los dibujados por profesionales en el MLS. Los agentes que lo
        adopten en 2026 superarán en publicaciones a los que no.
      </p>
    </article>
  );
}

export function PostJA() {
  return (
    <article className="prose-content">
      <p className="lead">
        2023〜2024年のRightmoveとZillowの調査は一貫しています。計測された間取り図を
        含む物件情報は、写真のみの同等の物件情報より
        <strong>クリック数が30〜52%多い</strong>のです。年に50件を扱う仲介業者に
        とって、これは内見の増加、購入申し込みの増加、そして成約までの期間短縮に
        直結します。
      </p>
      <p>
        それでも多くのエージェントは、視覚的な文脈のない単一の数字として床面積を
        記載したままです。理由は需要の不足ではなく、プロの間取り図を発注すると
        100〜300ユーロかかり、掲載までに1週間が加わるからです。iPhone Proと計測
        アプリがあれば、初回の内見中に4分でこれができます。
      </p>

      <h2>4分でできる間取り図の作成</h2>
      <p>
        LiDAR搭載のiPhone（12 Pro以降）にRuler ARをインストールしている前提です。
      </p>
      <ol>
        <li>
          <strong>00:00.</strong> Ruler AR →ルームスキャンを開きます。玄関から
          始め、各壁に沿ってゆっくりと部屋を一周します。
        </li>
        <li>
          <strong>02:30.</strong> 一周を終えます。アプリはすでに壁、ドア、窓、
          そして主要な家具（ソファ、ベッド、冷蔵庫、テーブル）を識別しています。
          完了をタップします。
        </li>
        <li>
          <strong>03:00.</strong> すべての壁に寸法が付いた2D間取り図ビューが
          開きます。家具の位置がずれていれば、ドラッグして直せます。
        </li>
        <li>
          <strong>03:30.</strong> 共有 → PDF書き出しをタップします。PDFには
          2D図面、寸法表、3Dモデルのプレビュー、そして（任意で）写真が含まれます。
        </li>
        <li>
          <strong>04:00.</strong> MLSのアップロードキューに送るか、掲載
          プラットフォームに貼り付けます。
        </li>
      </ol>

      <h2>なぜ数字より間取り図が勝るのか</h2>
      <p>
        「65 m²」というラベルは抽象的です。間取り図は買い手の本当の疑問に答えます。
      </p>
      <ul>
        <li>主寝室はキングサイズのベッドとサイドテーブルが置けるほど広いか？</li>
        <li>キッチンはどこに面しているか？</li>
        <li>ダイニングテーブルを置く余裕はあるか？</li>
        <li>2番目の寝室は1番目と比べてどれくらいの広さか？</li>
        <li>寝室にかからずにデスクを置けるのはどこか？</li>
      </ul>
      <p>
        これらは買い手が内見を申し込む前に下す判断です。計測された間取り図があれば
        買い手は自分で見極められ、エージェントは時間の無駄になる相手が減り、
        本気の見込み客が増えます。
      </p>

      <h2>プロらしい仕上げ</h2>
      <p>
        手早いスキャンを営業ツールに変えるのは3つの要素です。
      </p>
      <ol>
        <li>
          <strong>壁と部屋の名前を変える。</strong>「寝室1」→「主寝室（造り付け
          クローゼット付き）」。2Dエディタで任意のラベルをタップすれば編集できます。
        </li>
        <li>
          <strong>固定設備を記す。</strong>造り付け収納、暖炉、階段、ラジエーター。
          これらは写真だけよりも物件情報を際立たせます。
        </li>
        <li>
          <strong>物件のブランドを加える。</strong>PDF書き出しはアプリ設定でヘッダー
          /フッターのカスタマイズに対応します。代理店のロゴと物件参照番号を一度
          設定すれば、以降に生成するすべてのPDFにそれが入ります。
        </li>
      </ol>

      <h2>LiDAR非搭載のiPhoneを使うエージェントへ</h2>
      <p>
        手動ルームビルダーでもきれいな直交の間取り図ができますが、各コーナーは
        自分でタップします（1部屋あたり約60秒の作業）。結果は2Dのみ（3Dモデル
        なし）ですが、物件情報ではどのみちプラットフォームが受け付けるのは2Dです。
      </p>
      <p>
        手順：コーナーに立ち、足元の床をタップします。壁に沿って次のコーナーまで
        歩き、タップします。そのまま部屋を一周します。多角形を閉じると、アプリが
        直角に整えて図面を作成します。ドア、窓、主要な家具は2Dエディタのツール
        ボックスからドラッグして追加します。
      </p>

      <h2>プライバシーへの配慮</h2>
      <p>
        物件情報には、私物の散らかりが原因で買い手に敬遠される室内写真が載ることが
        あります。間取り図はその逆で、完全に匿名です。冷蔵庫のマグネットも、壁の
        写真も、私物もありません。撮影用に家を整える前に間取り図を公開できるので、
        掲載までの工程が早まります。
      </p>

      <h2>物件情報だけでなく、内見でも</h2>
      <p>
        内見中はPDFを携帯に入れておきましょう。「この廊下の幅は？」や「あのキッチン
        カウンターの奥行きは？」に実際の数字で答え、その証拠を手にしている姿を
        買い手は喜びます。買い手が手持ちの家具が入るか知りたいときにも役立ちます。
      </p>

      <h2>時間の計算</h2>
      <p>
        1物件4分なら、年50件で合計200分です。1枚150ユーロでプロの間取り図を発注する
        場合と比べてみてください。費用は7,500ユーロ、しかも物件ごとに1週間の待ち
        時間が加わります。成約につながったPDFを1枚出した時点で、計算は一目瞭然です。
      </p>

      <h2>結論</h2>
      <p>
        間取り図は今やプレミアム物件の必須条件です。かつての障壁はコストと時間で
        したが、どちらももう当てはまりません。iPhone Pro、計測アプリ、そして1物件
        4分があれば、MLS上のプロが描いた図面の半分を上回る間取り図が手に入ります。
        2026年にこれを取り入れるエージェントは、取り入れないエージェントを掲載で
        圧倒するでしょう。
      </p>
    </article>
  );
}

export function PostKO() {
  return (
    <article className="prose-content">
      <p className="lead">
        2023~2024년 Rightmove와 Zillow의 조사 결과는 일관됩니다. 측정된 평면도가
        포함된 매물은 사진만 있는 동일 매물보다 <strong>클릭이 30~52% 더 많습니다</strong>.
        연간 50건을 다루는 중개인에게 이는 곧 더 많은 방문, 더 많은 제안, 더 빠른
        거래로 직결됩니다.
      </p>
      <p>
        그런데도 대부분의 중개인은 여전히 면적을 시각적 맥락 없이 하나의 숫자로만
        적습니다. 수요가 없어서가 아닙니다. 전문 평면도를 의뢰하면 100~300유로가
        들고 매물 등록까지 일주일이 더 걸리기 때문입니다. iPhone Pro와 측정 앱이
        있으면 첫 현장 방문 중에 4분이면 됩니다.
      </p>

      <h2>4분 만에 만드는 평면도</h2>
      <p>
        LiDAR가 탑재된 iPhone(12 Pro 이상)에 Ruler AR이 설치되어 있다고 가정합니다.
      </p>
      <ol>
        <li>
          <strong>00:00.</strong> Ruler AR → 방 스캔을 엽니다. 현관에서 시작해
          각 벽을 따라 천천히 집을 한 바퀴 돕니다.
        </li>
        <li>
          <strong>02:30.</strong> 한 바퀴를 마칩니다. 앱이 이미 벽, 문, 창문,
          주요 가구(소파, 침대, 냉장고, 테이블)를 인식했습니다. 완료를 탭합니다.
        </li>
        <li>
          <strong>03:00.</strong> 모든 벽에 치수가 표시된 2D 평면도 화면이 열립니다.
          가구가 잘못 놓였다면 끌어서 옮길 수 있습니다.
        </li>
        <li>
          <strong>03:30.</strong> 공유 → PDF 내보내기를 탭합니다. PDF에는 2D 도면,
          치수표, 3D 모델 미리보기, 그리고 (선택적으로) 사진이 포함됩니다.
        </li>
        <li>
          <strong>04:00.</strong> MLS 업로드 대기열로 보내거나 매물 등록
          플랫폼에 붙여넣습니다.
        </li>
      </ol>

      <h2>왜 숫자보다 평면도가 나은가</h2>
      <p>
        "65 m²"라는 표기는 추상적입니다. 평면도는 구매자의 진짜 궁금증에 답합니다.
      </p>
      <ul>
        <li>안방은 킹사이즈 침대와 협탁을 둘 만큼 넓은가?</li>
        <li>주방은 어디로 이어지는가?</li>
        <li>식탁을 놓을 공간이 있는가?</li>
        <li>두 번째 침실은 첫 번째 침실과 비교해 얼마나 큰가?</li>
        <li>책상을 침실에 들어가지 않게 어디에 둘 수 있는가?</li>
      </ul>
      <p>
        이는 구매자가 방문을 요청하기 전에 내리는 판단입니다. 측정된 평면도가 있으면
        구매자가 스스로 걸러내므로, 중개인은 시간만 낭비하는 사람은 줄고 진지한
        잠재 고객은 늘어납니다.
      </p>

      <h2>전문가다운 마무리</h2>
      <p>
        빠른 스캔을 영업 도구로 바꾸는 것은 세 가지입니다.
      </p>
      <ol>
        <li>
          <strong>벽과 방의 이름을 바꾸세요.</strong> "침실 1" → "안방(붙박이장 포함)".
          2D 편집기에서 아무 라벨이나 탭하면 수정할 수 있습니다.
        </li>
        <li>
          <strong>고정 요소를 표시하세요.</strong> 붙박이 수납, 벽난로, 계단,
          라디에이터. 이런 요소는 사진만으로는 어려운 차별화를 만들어 줍니다.
        </li>
        <li>
          <strong>매물 브랜딩을 넣으세요.</strong> PDF 내보내기는 앱 설정에서
          사용자 지정 머리글/바닥글을 지원합니다. 중개사 로고와 매물 참조 번호를
          한 번만 넣으면, 이후 생성하는 모든 PDF에 그대로 들어갑니다.
        </li>
      </ol>

      <h2>LiDAR가 없는 iPhone 사용자를 위해</h2>
      <p>
        수동 방 빌더로도 깔끔한 직각 평면도를 만들 수 있지만, 각 모서리를 직접
        탭해야 합니다(방 하나당 약 60초 작업). 결과물은 2D 전용(3D 모델 없음)이지만,
        매물에는 어차피 플랫폼이 2D를 받습니다.
      </p>
      <p>
        방법: 모서리에 서서 발밑의 바닥을 탭합니다. 벽을 따라 다음 모서리까지
        걸어가서 탭합니다. 이렇게 방을 한 바퀴 돕니다. 다각형을 닫으면 앱이 직각으로
        맞춰 도면을 만듭니다. 문, 창문, 주요 가구는 2D 편집기의 도구상자에서 끌어다
        추가합니다.
      </p>

      <h2>프라이버시 문제</h2>
      <p>
        매물에는 개인 잡동사니 때문에 구매자가 꺼리는 실내 사진이 실리기도 합니다.
        평면도는 그 반대로, 완전히 익명입니다. 냉장고 자석도, 벽의 사진도, 개인
        물품도 없습니다. 사진 촬영을 위해 집을 꾸미기 전에도 평면도를 공개할 수 있어
        매물 등록 일정이 빨라집니다.
      </p>

      <h2>매물뿐 아니라 방문에도</h2>
      <p>
        방문 중에도 PDF를 휴대폰에 두세요. "이 복도는 폭이 얼마인가요?"나 "저 주방
        상판 깊이는요?"에 실제 숫자로 답하며 증거를 손에 들고 있으면 구매자가 아주
        좋아합니다. 구매자가 기존 가구가 들어갈지 알고 싶을 때도 도움이 됩니다.
      </p>

      <h2>시간 계산</h2>
      <p>
        매물당 4분이면 연 50건은 총 200분입니다. 전문 평면도를 건당 150유로에
        의뢰하는 경우와 비교해 보세요. 비용은 7,500유로에, 매물마다 일주일의 대기
        시간이 더해집니다. 거래를 성사시킨 PDF를 한 번 내보내고 나면 계산은
        분명해집니다.
      </p>

      <h2>결론</h2>
      <p>
        평면도는 이제 프리미엄 매물의 기본 조건입니다. 예전의 장벽은 비용과
        시간이었지만, 이제 둘 다 해당되지 않습니다. iPhone Pro, 측정 앱, 그리고
        매물당 4분이면 MLS의 전문가가 그린 도면 절반을 능가하는 평면도를 얻습니다.
        2026년에 이를 도입하는 중개인은 그렇지 않은 중개인을 매물 등록에서 앞설
        것입니다.
      </p>
    </article>
  );
}

export function PostZH() {
  return (
    <article className="prose-content">
      <p className="lead">
        Rightmove 和 Zillow 在 2023-2024 年的研究结论一致：包含实测户型图的房源，
        点击量比仅有照片的同类房源<strong>高出 30%-52%</strong>。对于一年挂 50 套
        房源的经纪人来说，这直接意味着更多看房、更多报价和更快成交。
      </p>
      <p>
        然而大多数经纪人至今仍把建筑面积写成一个孤零零的数字，缺乏视觉参照。原因
        不是没有需求，而是委托制作一份专业户型图要花 100-300 欧元，还会让房源上线
        多等一周。有了 iPhone Pro 和一款测量应用，你在第一次看房时 4 分钟就能搞定。
      </p>

      <h2>4 分钟生成户型图</h2>
      <p>
        假设你有一台带 LiDAR 的 iPhone（12 Pro 或更新机型）并已安装 Ruler AR：
      </p>
      <ol>
        <li>
          <strong>00:00.</strong> 打开 Ruler AR → 房间扫描。从入口处开始，沿着
          每一面墙慢慢绕房间走一圈。
        </li>
        <li>
          <strong>02:30.</strong> 走完一圈。应用已标记好墙体、门、窗以及主要家具
          （沙发、床、冰箱、桌子）。点按完成。
        </li>
        <li>
          <strong>03:00.</strong> 打开 2D 户型图视图，每面墙都标有尺寸。如果有家具
          放错位置，可以拖动调整。
        </li>
        <li>
          <strong>03:30.</strong> 点按分享 → 导出 PDF。PDF 包含 2D 平面图、尺寸
          表、3D 模型预览，以及（可选）照片。
        </li>
        <li>
          <strong>04:00.</strong> 发送到你的 MLS 上传队列，或粘贴到你的房源发布
          平台。
        </li>
      </ol>

      <h2>为什么户型图胜过一个数字</h2>
      <p>
        “65 m²”这样的标签很抽象。户型图能回答买家真正关心的问题：
      </p>
      <ul>
        <li>主卧够不够放一张大号床外加床头柜？</li>
        <li>厨房通向哪里？</li>
        <li>有没有空间放一张餐桌？</li>
        <li>第二间卧室和第一间相比有多大？</li>
        <li>书桌放在哪里才不会占到卧室？</li>
      </ul>
      <p>
        这些都是买家在申请看房之前就会做出的判断。一份实测户型图让他们自我筛选，
        经纪人遇到的浪费时间者更少，认真的潜在客户更多。
      </p>

      <h2>专业的点睛之笔</h2>
      <p>
        让一次快速扫描变成销售工具，靠的是三件事：
      </p>
      <ol>
        <li>
          <strong>重命名墙体和房间。</strong>“卧室 1”→“主卧（带嵌入式衣柜）”。
          在 2D 编辑器中点按任意标签即可编辑。
        </li>
        <li>
          <strong>标注固定设施。</strong>嵌入式储物、壁炉、楼梯、暖气片。这些比
          单纯的照片更能让房源脱颖而出。
        </li>
        <li>
          <strong>加上房源品牌。</strong>PDF 导出支持在应用设置中自定义页眉/页脚。
          只需一次性添加你的中介 logo 和房源编号；此后生成的每一份 PDF 都会带上它们。
        </li>
      </ol>

      <h2>没有 LiDAR iPhone 的经纪人怎么办</h2>
      <p>
        手动房间构建器同样能生成干净的正交户型图，只是每个角都要你自己点按
        （每个房间约 60 秒的工作量）。结果仅为 2D（没有 3D 模型），但对房源来说，
        平台本来接受的也就是 2D。
      </p>
      <p>
        操作流程：站在一个墙角，点按脚下的地面。沿着墙走到下一个角，点按。就这样绕
        房间一圈。当你闭合多边形时，应用会自动对齐成直角并生成平面图。门、窗和主要
        家具则从 2D 编辑器的工具箱中拖出来添加。
      </p>

      <h2>隐私顾虑</h2>
      <p>
        房源有时会放出室内照片，而买家会因个人杂物而反感。户型图恰恰相反，完全匿名。
        没有冰箱贴，没有墙上的照片，没有任何私人物品。你可以在房屋为拍摄布置之前就
        发布户型图，从而加快上线进度。
      </p>

      <h2>不只是房源，看房也用得上</h2>
      <p>
        看房时把 PDF 留在手机里。当你能用真实数字回答“这条走廊有多宽？”或“那块厨房
        台面有多深？”，并把证据握在手上，买家会很喜欢。当买家想知道现有家具放不放
        得下时，这也派得上用场。
      </p>

      <h2>时间账</h2>
      <p>
        每套房源 4 分钟，一年 50 套 = 总共 200 分钟。再对比委托专业户型图，每份
        150 欧元：光费用就是 7,500 欧元，每套还要等上一周。当你交付的某份 PDF 促成
        了一笔成交，这笔账就一目了然了。
      </p>

      <h2>结论</h2>
      <p>
        户型图如今已是高端房源的标配。过去的障碍是成本和时间，如今两者都不再成立。
        一台 iPhone Pro、一款测量应用，再加上每套房 4 分钟，就能得到一份胜过 MLS 上
        一半专业绘制图纸的户型图。在 2026 年率先采用它的经纪人，会在房源量上压过那些
        不用的人。
      </p>
    </article>
  );
}

export function PostPT() {
  return (
    <article className="prose-content">
      <p className="lead">
        As pesquisas da Rightmove e da Zillow de 2023-2024 são consistentes:
        anúncios de imóveis que incluem uma planta baixa medida geram
        <strong> de 30% a 52% mais cliques</strong> do que anúncios equivalentes
        só com fotos. Para um corretor que trabalha 50 imóveis por ano, isso se
        traduz diretamente em mais visitas, mais propostas e vendas mais rápidas.
      </p>
      <p>
        Mesmo assim, a maioria dos corretores ainda informa a metragem como um
        único número, sem contexto visual. O motivo não é falta de demanda, e sim
        que encomendar uma planta profissional custa de 100 a 300 € e adiciona uma
        semana ao prazo de publicação. Com um iPhone Pro e um app de medição, você
        faz isso em 4 minutos durante a primeira visita.
      </p>

      <h2>A planta baixa em 4 minutos</h2>
      <p>
        Supondo um iPhone com LiDAR (12 Pro ou mais recente) e o Ruler AR
        instalado:
      </p>
      <ol>
        <li>
          <strong>00:00.</strong> Abra o Ruler AR → Escanear cômodo. Comece na
          entrada. Percorra o apartamento devagar acompanhando cada parede.
        </li>
        <li>
          <strong>02:30.</strong> Feche o percurso. O app já marcou paredes,
          portas, janelas e os móveis maiores (sofá, cama, geladeira, mesa).
          Toque em Concluir.
        </li>
        <li>
          <strong>03:00.</strong> A vista da planta 2D abre com as medidas em
          cada parede. Se algum móvel ficou no lugar errado, você pode arrastá-lo.
        </li>
        <li>
          <strong>03:30.</strong> Toque em Compartilhar → Exportar PDF. O PDF
          inclui a planta 2D, uma tabela de dimensões, a prévia do modelo 3D e
          (opcionalmente) fotos.
        </li>
        <li>
          <strong>04:00.</strong> Envie para sua fila de upload no MLS ou cole na
          sua plataforma de anúncios.
        </li>
      </ol>

      <h2>Por que uma planta vence um número</h2>
      <p>
        A etiqueta "65 m²" é abstrata. Uma planta responde às perguntas reais dos
        compradores:
      </p>
      <ul>
        <li>O quarto principal é grande o bastante para uma cama de casal mais criados-mudos?</li>
        <li>Para onde a cozinha se abre?</li>
        <li>Há espaço para uma mesa de jantar?</li>
        <li>Qual é o tamanho do segundo quarto comparado ao primeiro?</li>
        <li>Onde posso colocar minha mesa de trabalho sem que fique no quarto?</li>
      </ul>
      <p>
        São decisões que os compradores tomam antes de pedir uma visita. Uma
        planta medida permite que eles se qualifiquem sozinhos: o corretor vê
        menos curiosos e mais leads sérios.
      </p>

      <h2>O toque profissional</h2>
      <p>
        Três coisas transformam um escaneamento rápido em ferramenta de venda:
      </p>
      <ol>
        <li>
          <strong>Renomeie paredes e cômodos.</strong> "Quarto 1" → "Suíte
          principal (com armários embutidos)". Toque em qualquer rótulo no editor
          2D para editá-lo.
        </li>
        <li>
          <strong>Marque os elementos fixos.</strong> Armários embutidos,
          lareiras, escadas, radiadores. Eles destacam um anúncio muito melhor do
          que só as fotos.
        </li>
        <li>
          <strong>Adicione a marca do anúncio.</strong> A exportação em PDF aceita
          um cabeçalho/rodapé personalizado nas configurações do app. Adicione uma
          vez o logo da sua imobiliária e um número de referência; cada PDF gerado
          a partir daí os levará.
        </li>
      </ol>

      <h2>Para corretores sem iPhone com LiDAR</h2>
      <p>
        O Construtor manual de cômodos ainda produz uma planta ortogonal limpa,
        mas você toca cada canto manualmente (cerca de 60 segundos de trabalho por
        cômodo). O resultado é só 2D (sem modelo 3D), mas para anúncios é o 2D que
        as plataformas aceitam de qualquer forma.
      </p>
      <p>
        Fluxo: fique em um canto e toque no chão a seus pés. Caminhe ao longo da
        parede até o próximo canto e toque. Continue ao redor do cômodo. Quando
        você fecha o polígono, o app ajusta os ângulos retos e gera a planta.
        Adicione portas, janelas e móveis maiores arrastando-os da caixa de
        ferramentas do editor 2D.
      </p>

      <h2>Questões de privacidade</h2>
      <p>
        Os anúncios às vezes mostram fotos de interior que afastam os compradores
        por causa da bagunça pessoal. Uma planta é o oposto, totalmente anônima.
        Sem ímãs de geladeira, sem fotos nas paredes, sem objetos pessoais. Você
        pode publicar uma planta antes de o imóvel ser preparado para o ensaio
        fotográfico, o que acelera o cronograma de publicação.
      </p>

      <h2>Não só anúncios, também visitas</h2>
      <p>
        Mantenha o PDF no celular durante as visitas. Os compradores adoram quando
        você responde "qual é a largura deste corredor?" ou "qual é a profundidade
        daquela bancada da cozinha?" com um número real e a prova na mão. Também
        ajuda quando o comprador quer saber se os móveis dele cabem.
      </p>

      <h2>A conta do tempo</h2>
      <p>
        A 4 minutos por anúncio, 50 anúncios por ano = 200 minutos no total.
        Compare com encomendar plantas profissionais a 150 € cada: 7.500 € em
        taxas, mais uma semana de espera por anúncio. A conta fica óbvia assim que
        você entrega um PDF que fechou um negócio.
      </p>

      <h2>Conclusão</h2>
      <p>
        As plantas baixas já são item obrigatório para anúncios premium. A barreira
        era custo e tempo, e nenhum dos dois se aplica mais. Um iPhone Pro, um app
        de medição e 4 minutos por imóvel entregam uma planta que supera metade das
        desenhadas por profissionais no MLS. Os corretores que adotarem isso em
        2026 vão anunciar mais do que os que não adotarem.
      </p>
    </article>
  );
}

export function PostIT() {
  return (
    <article className="prose-content">
      <p className="lead">
        Le ricerche di Rightmove e Zillow del 2023-2024 sono concordi: gli annunci
        immobiliari che includono una planimetria misurata generano
        <strong> dal 30 al 52% di clic in più</strong> rispetto ad annunci
        equivalenti con sole foto. Per un agente che gestisce 50 immobili l'anno,
        questo si traduce direttamente in più visite, più offerte e vendite più
        rapide.
      </p>
      <p>
        Eppure la maggior parte degli agenti indica ancora la metratura come un
        singolo numero senza contesto visivo. Il motivo non è la mancanza di
        domanda, ma il fatto che ordinare una planimetria professionale costa
        100-300 € e aggiunge una settimana ai tempi di pubblicazione. Con un iPhone
        Pro e un'app di misurazione, lo fai in 4 minuti durante il primo
        sopralluogo.
      </p>

      <h2>La planimetria in 4 minuti</h2>
      <p>
        Supponendo un iPhone con LiDAR (12 Pro o più recente) e Ruler AR
        installato:
      </p>
      <ol>
        <li>
          <strong>00:00.</strong> Apri Ruler AR → Scansione stanza. Parti
          dall'ingresso. Percorri lentamente l'appartamento seguendo ogni parete.
        </li>
        <li>
          <strong>02:30.</strong> Chiudi il giro. L'app ha già rilevato pareti,
          porte, finestre e i mobili principali (divano, letto, frigorifero,
          tavolo). Tocca Fine.
        </li>
        <li>
          <strong>03:00.</strong> Si apre la vista della planimetria 2D con le
          quote su ogni parete. Se un mobile è finito nel punto sbagliato, puoi
          trascinarlo.
        </li>
        <li>
          <strong>03:30.</strong> Tocca Condividi → Esporta PDF. Il PDF include la
          planimetria 2D, una tabella delle dimensioni, l'anteprima del modello 3D
          e (facoltativamente) le foto.
        </li>
        <li>
          <strong>04:00.</strong> Invialo alla tua coda di caricamento sul MLS o
          incollalo nella tua piattaforma di annunci.
        </li>
      </ol>

      <h2>Perché una planimetria batte un numero</h2>
      <p>
        L'etichetta "65 m²" è astratta. Una planimetria risponde alle vere domande
        degli acquirenti:
      </p>
      <ul>
        <li>La camera matrimoniale è abbastanza grande per un letto king size e i comodini?</li>
        <li>Dove si affaccia la cucina?</li>
        <li>C'è spazio per un tavolo da pranzo?</li>
        <li>Quanto è grande la seconda camera rispetto alla prima?</li>
        <li>Dove posso mettere la scrivania senza che finisca in camera da letto?</li>
      </ul>
      <p>
        Sono decisioni che gli acquirenti prendono prima di richiedere una visita.
        Una planimetria misurata permette loro di auto-selezionarsi: l'agente vede
        meno perditempo e più contatti seri.
      </p>

      <h2>Il tocco professionale</h2>
      <p>
        Tre cose trasformano una scansione veloce in uno strumento di vendita:
      </p>
      <ol>
        <li>
          <strong>Rinomina pareti e stanze.</strong> "Camera 1" → "Camera padronale
          (con armadi a muro)". Tocca qualsiasi etichetta nell'editor 2D per
          modificarla.
        </li>
        <li>
          <strong>Segna gli elementi fissi.</strong> Armadi a muro, camini, scale,
          termosifoni. Distinguono un annuncio molto meglio delle sole foto.
        </li>
        <li>
          <strong>Aggiungi il brand dell'annuncio.</strong> L'esportazione in PDF
          accetta un'intestazione/piè di pagina personalizzata nelle impostazioni
          dell'app. Aggiungi una volta il logo della tua agenzia e un numero di
          riferimento; ogni PDF generato da quel momento li riporterà.
        </li>
      </ol>

      <h2>Per gli agenti senza iPhone con LiDAR</h2>
      <p>
        Il costruttore di stanze manuale produce comunque una planimetria
        ortogonale pulita, ma tocchi ogni angolo tu stesso (circa 60 secondi di
        lavoro per stanza). Il risultato è solo in 2D (nessun modello 3D), ma per
        gli annunci le piattaforme accettano comunque il 2D.
      </p>
      <p>
        Procedura: mettiti in un angolo e tocca il pavimento ai tuoi piedi. Cammina
        lungo la parete fino all'angolo successivo e tocca. Continua intorno alla
        stanza. Quando chiudi il poligono, l'app allinea gli angoli retti e genera
        la planimetria. Aggiungi porte, finestre e mobili principali trascinandoli
        dalla cassetta degli strumenti dell'editor 2D.
      </p>

      <h2>Questioni di privacy</h2>
      <p>
        Gli annunci a volte mostrano foto degli interni che scoraggiano gli
        acquirenti a causa del disordine personale. Una planimetria è l'opposto,
        del tutto anonima. Niente calamite sul frigo, niente foto alle pareti,
        niente oggetti personali. Puoi pubblicare una planimetria prima ancora che
        la casa sia allestita per il servizio fotografico, accelerando i tempi di
        pubblicazione.
      </p>

      <h2>Non solo annunci, anche visite</h2>
      <p>
        Tieni il PDF sul telefono durante le visite. Agli acquirenti piace quando
        rispondi a "quanto è largo questo corridoio?" o "qual è la profondità di
        quel piano cucina?" con un numero reale, con la prova in mano. Aiuta anche
        quando l'acquirente vuole sapere se i suoi mobili attuali ci stanno.
      </p>

      <h2>Il calcolo del tempo</h2>
      <p>
        A 4 minuti per annuncio, 50 annunci all'anno = 200 minuti in totale.
        Confrontalo con l'ordinare planimetrie professionali a 150 € l'una: 7.500 €
        di spese, più una settimana di attesa per annuncio. Il conto diventa ovvio
        non appena consegni un PDF che ha chiuso una trattativa.
      </p>

      <h2>In sintesi</h2>
      <p>
        Le planimetrie sono ormai irrinunciabili per gli annunci premium. La
        barriera erano costo e tempo, e nessuno dei due vale più. Un iPhone Pro,
        un'app di misurazione e 4 minuti a immobile ti danno una planimetria che
        supera metà di quelle disegnate dai professionisti sul MLS. Gli agenti che
        la adottano nel 2026 supereranno per numero di annunci quelli che non lo
        fanno.
      </p>
    </article>
  );
}

export function PostPL() {
  return (
    <article className="prose-content">
      <p className="lead">
        Badania Rightmove i Zillow z lat 2023-2024 są zgodne: oferty nieruchomości
        zawierające wymiarowany rzut mieszkania generują <strong>o 30-52% więcej
        kliknięć</strong> niż równoważne oferty z samymi zdjęciami. Dla agenta
        prowadzącego 50 ofert rocznie przekłada się to wprost na więcej pokazów,
        więcej ofert kupna i szybszą sprzedaż.
      </p>
      <p>
        A jednak większość agentów wciąż podaje metraż jako jedną liczbę bez
        wizualnego kontekstu. Powodem nie jest brak popytu, lecz to, że zamówienie
        profesjonalnego rzutu kosztuje 100-300 € i wydłuża przygotowanie oferty o
        tydzień. Z iPhonem Pro i aplikacją do pomiarów zrobisz to w 4 minuty
        podczas pierwszej wizyty.
      </p>

      <h2>Rzut mieszkania w 4 minuty</h2>
      <p>
        Zakładając iPhone z LiDAR (12 Pro lub nowszy) z zainstalowanym Ruler AR:
      </p>
      <ol>
        <li>
          <strong>00:00.</strong> Otwórz Ruler AR → Skan pomieszczenia. Zacznij
          przy wejściu. Powoli obejdź mieszkanie wzdłuż każdej ściany.
        </li>
        <li>
          <strong>02:30.</strong> Zamknij pętlę. Aplikacja oznaczyła już ściany,
          drzwi, okna i większe meble (kanapę, łóżko, lodówkę, stół). Dotknij
          Gotowe.
        </li>
        <li>
          <strong>03:00.</strong> Otwiera się widok rzutu 2D z wymiarami na każdej
          ścianie. Jeśli jakiś mebel trafił w złe miejsce, możesz go przeciągnąć.
        </li>
        <li>
          <strong>03:30.</strong> Dotknij Udostępnij → Eksportuj PDF. PDF zawiera
          rzut 2D, tabelę wymiarów, podgląd modelu 3D oraz (opcjonalnie) zdjęcia.
        </li>
        <li>
          <strong>04:00.</strong> Wyślij do swojej kolejki przesyłania na MLS lub
          wklej do swojej platformy ofertowej.
        </li>
      </ol>

      <h2>Dlaczego rzut bije zwykłą liczbę</h2>
      <p>
        Etykieta "65 m²" jest abstrakcyjna. Rzut odpowiada na prawdziwe pytania
        kupujących:
      </p>
      <ul>
        <li>Czy sypialnia główna pomieści duże łóżko i szafki nocne?</li>
        <li>Na co otwiera się kuchnia?</li>
        <li>Czy jest miejsce na stół jadalny?</li>
        <li>Jak duża jest druga sypialnia w porównaniu z pierwszą?</li>
        <li>Gdzie postawić biurko, żeby nie stało w sypialni?</li>
      </ul>
      <p>
        To decyzje, które kupujący podejmują, zanim poproszą o oglądanie.
        Wymiarowany rzut pozwala im samodzielnie się odsiać: agent ma mniej osób
        marnujących czas, a więcej poważnych klientów.
      </p>

      <h2>Profesjonalny szlif</h2>
      <p>
        Trzy rzeczy zamieniają szybki skan w narzędzie sprzedaży:
      </p>
      <ol>
        <li>
          <strong>Zmień nazwy ścian i pomieszczeń.</strong> "Sypialnia 1" →
          "Sypialnia główna (z szafami wnękowymi)". Dotknij dowolnej etykiety w
          edytorze 2D, aby ją edytować.
        </li>
        <li>
          <strong>Zaznacz stałe elementy.</strong> Zabudowy, kominki, schody,
          grzejniki. Wyróżniają one ofertę znacznie lepiej niż same zdjęcia.
        </li>
        <li>
          <strong>Dodaj branding oferty.</strong> Eksport PDF przyjmuje
          niestandardowy nagłówek/stopkę w ustawieniach aplikacji. Dodaj raz logo
          swojego biura i numer referencyjny oferty; każdy kolejny wygenerowany
          PDF będzie je nosił.
        </li>
      </ol>

      <h2>Dla agentów bez iPhone'a z LiDAR</h2>
      <p>
        Ręczny kreator pomieszczeń i tak tworzy czysty, prostokątny rzut, ale każdy
        narożnik dotykasz samodzielnie (około 60 sekund pracy na pomieszczenie).
        Wynik jest tylko 2D (bez modelu 3D), ale przy ofertach platformy i tak
        akceptują 2D.
      </p>
      <p>
        Procedura: stań w narożniku i dotknij podłogi u swoich stóp. Idź wzdłuż
        ściany do kolejnego narożnika i dotknij. Obejdź tak całe pomieszczenie. Gdy
        zamkniesz wielokąt, aplikacja wyrówna kąty proste i utworzy rzut. Drzwi,
        okna i większe meble dodaj, przeciągając je z paska narzędzi w edytorze 2D.
      </p>

      <h2>Kwestie prywatności</h2>
      <p>
        Oferty czasem pokazują zdjęcia wnętrz, które zniechęcają kupujących z
        powodu osobistego bałaganu. Rzut jest przeciwieństwem, całkowicie anonimowy.
        Żadnych magnesów na lodówce, żadnych zdjęć na ścianach, żadnych osobistych
        rzeczy. Rzut możesz opublikować jeszcze zanim mieszkanie zostanie
        przygotowane do sesji zdjęciowej, co przyspiesza publikację oferty.
      </p>

      <h2>Nie tylko oferty, także pokazy</h2>
      <p>
        Miej PDF w telefonie podczas pokazów. Kupujący uwielbiają, gdy na pytanie
        "jak szeroki jest ten korytarz?" albo "jaka jest głębokość tego blatu
        kuchennego?" odpowiadasz realną liczbą, trzymając dowód w ręku. Przydaje
        się też, gdy kupujący chce wiedzieć, czy zmieszczą się jego obecne meble.
      </p>

      <h2>Rachunek czasu</h2>
      <p>
        Po 4 minuty na ofertę, 50 ofert rocznie = łącznie 200 minut. Porównaj to z
        zamawianiem profesjonalnych rzutów po 150 € za sztukę: 7500 € opłat plus
        tydzień oczekiwania na każdą ofertę. Rachunek staje się oczywisty, gdy raz
        wyślesz PDF, który zamknął transakcję.
      </p>

      <h2>Podsumowanie</h2>
      <p>
        Rzuty mieszkań to dziś standard w ofertach premium. Barierą był kiedyś
        koszt i czas, a żadne z nich już nie obowiązuje. iPhone Pro, aplikacja do
        pomiarów i 4 minuty na nieruchomość dają rzut, który bije połowę tych
        rysowanych profesjonalnie na MLS. Agenci, którzy wdrożą to w 2026 roku,
        wyprzedzą ofertami tych, którzy tego nie zrobią.
      </p>
    </article>
  );
}

export function PostTR() {
  return (
    <article className="prose-content">
      <p className="lead">
        Rightmove ve Zillow'un 2023-2024 araştırmaları tutarlı: ölçülmüş bir kat
        planı içeren emlak ilanları, yalnızca fotoğraf içeren benzer ilanlara göre
        <strong> %30-52 daha fazla tıklanma</strong> alıyor. Yılda 50 ilan yöneten
        bir emlakçı için bu, doğrudan daha çok gezme, daha çok teklif ve daha hızlı
        satış demektir.
      </p>
      <p>
        Yine de çoğu emlakçı metrekareyi hâlâ görsel bağlamı olmayan tek bir sayı
        olarak yazıyor. Sebep talep eksikliği değil; profesyonel bir kat planı
        sipariş etmenin 100-300 € tutması ve ilanın yayınlanma süresine bir hafta
        eklemesi. Bir iPhone Pro ve bir ölçüm uygulamasıyla bunu ilk gezme sırasında
        4 dakikada yaparsınız.
      </p>

      <h2>4 dakikada kat planı çıkarma</h2>
      <p>
        LiDAR'lı bir iPhone (12 Pro veya daha yenisi) ve kurulu Ruler AR olduğunu
        varsayalım:
      </p>
      <ol>
        <li>
          <strong>00:00.</strong> Ruler AR → Oda Tarama'yı açın. Girişten başlayın.
          Her duvarı izleyerek daireyi yavaşça dolaşın.
        </li>
        <li>
          <strong>02:30.</strong> Turu tamamlayın. Uygulama duvarları, kapıları,
          pencereleri ve büyük mobilyaları (kanepe, yatak, buzdolabı, masa) zaten
          etiketledi. Bitti'ye dokunun.
        </li>
        <li>
          <strong>03:00.</strong> Her duvarda ölçülerin bulunduğu 2D kat planı
          görünümü açılır. Yanlış yerleştirilmiş bir mobilya varsa sürükleyerek
          düzeltebilirsiniz.
        </li>
        <li>
          <strong>03:30.</strong> Paylaş → PDF'ye Aktar'a dokunun. PDF, 2D planı,
          bir ölçü tablosunu, 3D model önizlemesini ve (isteğe bağlı) fotoğrafları
          içerir.
        </li>
        <li>
          <strong>04:00.</strong> MLS yükleme kuyruğunuza gönderin veya ilan
          platformunuza yapıştırın.
        </li>
      </ol>

      <h2>Kat planı neden bir sayıyı yener</h2>
      <p>
        "65 m²" etiketi soyuttur. Bir kat planı, alıcıların gerçek sorularını
        yanıtlar:
      </p>
      <ul>
        <li>Ebeveyn yatak odası büyük bir yatak ve komodinler için yeterince geniş mi?</li>
        <li>Mutfak nereye açılıyor?</li>
        <li>Yemek masası için yer var mı?</li>
        <li>İkinci yatak odası birinciye kıyasla ne kadar büyük?</li>
        <li>Çalışma masamı yatak odasına girmeyecek şekilde nereye koyabilirim?</li>
      </ul>
      <p>
        Bunlar alıcıların bir gezme talep etmeden önce verdiği kararlardır. Ölçülmüş
        bir kat planı, alıcıların kendilerini elemesini sağlar; emlakçı daha az vakit
        kaybettiren, daha çok ciddi potansiyel müşteri görür.
      </p>

      <h2>Profesyonel dokunuş</h2>
      <p>
        Hızlı bir taramayı bir satış aracına dönüştüren üç şey vardır:
      </p>
      <ol>
        <li>
          <strong>Duvarları ve odaları yeniden adlandırın.</strong> "Yatak Odası 1"
          → "Ebeveyn Yatak Odası (gömme dolaplı)". 2D düzenleyicide herhangi bir
          etikete dokunarak düzenleyin.
        </li>
        <li>
          <strong>Sabit özellikleri işaretleyin.</strong> Gömme dolaplar,
          şömineler, merdivenler, radyatörler. Bunlar bir ilanı yalnızca
          fotoğraflardan çok daha iyi öne çıkarır.
        </li>
        <li>
          <strong>İlan markasını ekleyin.</strong> PDF dışa aktarma, uygulama
          ayarlarında özel bir üst/alt bilgiyi kabul eder. Ofis logonuzu ve bir
          ilan referans numarasını bir kez ekleyin; bundan sonra ürettiğiniz her
          PDF bunları taşır.
        </li>
      </ol>

      <h2>LiDAR'lı iPhone'u olmayan emlakçılar için</h2>
      <p>
        Manuel Oda Oluşturucu yine de temiz, dik açılı bir kat planı üretir, ancak
        her köşeye kendiniz dokunursunuz (oda başına yaklaşık 60 saniyelik iş).
        Sonuç yalnızca 2D'dir (3D model yok), ama ilanlar için platformlar zaten
        2D kabul ediyor.
      </p>
      <p>
        İş akışı: bir köşede durun, ayaklarınızın dibindeki zemine dokunun. Duvar
        boyunca bir sonraki köşeye yürüyün, dokunun. Odanın etrafını böyle dolaşın.
        Çokgeni kapattığınızda uygulama dik açılara hizalar ve planı üretir.
        Kapıları, pencereleri ve büyük mobilyaları 2D düzenleyicideki araç
        kutusundan sürükleyerek ekleyin.
      </p>

      <h2>Gizlilik kaygıları</h2>
      <p>
        İlanlar bazen kişisel dağınıklık yüzünden alıcıları rahatsız eden iç mekân
        fotoğrafları gösterir. Kat planı bunun tam tersi, tamamen anonim. Buzdolabı
        mıknatısı yok, duvarda fotoğraf yok, kişisel eşya yok. Ev fotoğraf çekimi
        için hazırlanmadan önce bir plan yayınlayabilirsiniz; bu da ilan sürecini
        hızlandırır.
      </p>

      <h2>Yalnızca ilanlar değil, gezmeler de</h2>
      <p>
        Gezmeler sırasında PDF'yi telefonunuzda tutun. "Bu koridor ne kadar geniş?"
        ya da "O mutfak tezgâhının derinliği ne kadar?" sorusuna gerçek bir sayıyla,
        kanıt elinizdeyken yanıt verdiğinizde alıcılar buna bayılır. Alıcı mevcut
        mobilyalarının sığıp sığmayacağını öğrenmek istediğinde de işe yarar.
      </p>

      <h2>Zaman hesabı</h2>
      <p>
        İlan başına 4 dakikadan, yılda 50 ilan = toplam 200 dakika. Bunu tanesi
        150 € olan profesyonel kat planı siparişiyle kıyaslayın: 7.500 € ücret,
        artı ilan başına bir hafta bekleme. Bir anlaşmayı kapatan tek bir PDF
        gönderdiğinizde hesap apaçık ortaya çıkar.
      </p>

      <h2>Özet</h2>
      <p>
        Kat planları artık premium ilanlar için olmazsa olmaz. Eskiden engel maliyet
        ve zamandı, ikisi de artık geçerli değil. Bir iPhone Pro, bir ölçüm
        uygulaması ve mülk başına 4 dakika, MLS'teki profesyonelce çizilmiş
        planların yarısını geride bırakan bir plan verir. Bunu 2026'da benimseyen
        emlakçılar, benimsemeyenleri ilan sayısında geride bırakacak.
      </p>
    </article>
  );
}

export function PostAR() {
  return (
    <article className="prose-content">
      <p className="lead">
        أبحاث Rightmove وZillow للفترة 2023-2024 متّسقة: إعلانات العقارات التي
        تتضمّن مخططًا للطابق مع قياسات تحقّق <strong>نقرات أكثر بنسبة 30-52%</strong>
        مقارنةً بإعلانات مماثلة تحتوي على صور فقط. وبالنسبة لوسيط يدير 50 عقارًا في
        السنة، يُترجم هذا مباشرةً إلى مزيد من المعاينات والعروض وسرعة أكبر في البيع.
      </p>
      <p>
        ومع ذلك لا يزال معظم الوسطاء يكتبون المساحة كرقم واحد دون أي سياق بصري.
        السبب ليس غياب الطلب، بل أن طلب مخطط احترافي يكلّف 100-300 € ويضيف أسبوعًا
        إلى مدة إعداد الإعلان. ومع iPhone Pro وتطبيق قياس، يمكنك إنجاز ذلك في 4 دقائق
        أثناء أول معاينة.
      </p>

      <h2>التقاط مخطط الطابق في 4 دقائق</h2>
      <p>
        بافتراض توفّر iPhone مزوّد بتقنية LiDAR (12 Pro أو أحدث) مع تثبيت Ruler AR:
      </p>
      <ol>
        <li>
          <strong>00:00.</strong> افتح Ruler AR ← مسح الغرفة. ابدأ من المدخل. تجوّل
          ببطء في الشقة على طول كل جدار.
        </li>
        <li>
          <strong>02:30.</strong> أكمل الدورة. لقد وسم التطبيق الجدران والأبواب
          والنوافذ والأثاث الكبير (الأريكة، السرير، الثلاجة، الطاولة). اضغط على تم.
        </li>
        <li>
          <strong>03:00.</strong> يُفتح عرض مخطط الطابق ثنائي الأبعاد مع الأبعاد على
          كل جدار. إذا وُضِع أي أثاث في غير موضعه، يمكنك سحبه.
        </li>
        <li>
          <strong>03:30.</strong> اضغط على مشاركة ← تصدير PDF. يتضمّن ملف PDF المخطط
          ثنائي الأبعاد وجدول الأبعاد ومعاينة النموذج ثلاثي الأبعاد و(اختياريًا) الصور.
        </li>
        <li>
          <strong>04:00.</strong> أرسله إلى قائمة الرفع لديك على MLS أو الصقه في منصة
          إعلاناتك.
        </li>
      </ol>

      <h2>لماذا يتفوّق المخطط على الرقم</h2>
      <p>
        عبارة "65 m²" مجرّدة. أما المخطط فيجيب عن الأسئلة الحقيقية للمشترين:
      </p>
      <ul>
        <li>هل غرفة النوم الرئيسية كبيرة بما يكفي لسرير كبير مع طاولتين جانبيتين؟</li>
        <li>إلى أين يطل المطبخ؟</li>
        <li>هل هناك متّسع لطاولة طعام؟</li>
        <li>ما حجم غرفة النوم الثانية مقارنةً بالأولى؟</li>
        <li>أين يمكنني وضع مكتبي بحيث لا يكون داخل غرفة النوم؟</li>
      </ul>
      <p>
        هذه قرارات يتّخذها المشترون قبل أن يطلبوا المعاينة. يتيح المخطط المُقاس لهم أن
        يقيّموا أنفسهم بأنفسهم، فيرى الوسيط عددًا أقل من مضيّعي الوقت ومزيدًا من العملاء
        الجادّين.
      </p>

      <h2>اللمسة الاحترافية</h2>
      <p>
        ثلاثة أمور تحوّل المسح السريع إلى أداة بيع:
      </p>
      <ol>
        <li>
          <strong>أعد تسمية الجدران والغرف.</strong> "غرفة نوم 1" ← "غرفة النوم
          الرئيسية (مع خزائن مدمجة)". اضغط على أي تسمية في المحرّر ثنائي الأبعاد
          لتعديلها.
        </li>
        <li>
          <strong>ميِّز العناصر الثابتة.</strong> الخزائن المدمجة والمواقد والسلالم
          والمشعّات. هذه تميّز الإعلان بشكل أفضل بكثير من الصور وحدها.
        </li>
        <li>
          <strong>أضف هوية الإعلان.</strong> يقبل تصدير PDF رأسًا/تذييلًا مخصصًا في
          إعدادات التطبيق. أضِف شعار مكتبك ورقمًا مرجعيًا للإعلان مرة واحدة؛ وسيحمله
          كل ملف PDF تنشئه بعد ذلك.
        </li>
      </ol>

      <h2>للوسطاء الذين لا يملكون iPhone بتقنية LiDAR</h2>
      <p>
        لا يزال مُنشئ الغرف اليدوي ينتج مخططًا متعامدًا نظيفًا، لكنك تضغط على كل ركن
        بنفسك (نحو 60 ثانية من العمل لكل غرفة). النتيجة ثنائية الأبعاد فقط (دون نموذج
        ثلاثي الأبعاد)، لكن بالنسبة للإعلانات فإن المنصّات تقبل الصيغة ثنائية الأبعاد
        على أي حال.
      </p>
      <p>
        طريقة العمل: قف في أحد الأركان واضغط على الأرض عند قدميك. سِر على طول الجدار
        إلى الركن التالي ثم اضغط. تابِع حول الغرفة. وعند إغلاق المضلّع، يضبط التطبيق
        الزوايا القائمة وينتج المخطط. أضِف الأبواب والنوافذ والأثاث الكبير عبر سحبها من
        صندوق الأدوات في المحرّر ثنائي الأبعاد.
      </p>

      <h2>مخاوف الخصوصية</h2>
      <p>
        تعرض الإعلانات أحيانًا صورًا داخلية ينفر منها المشترون بسبب الفوضى الشخصية.
        المخطط هو النقيض، فهو مجهول الهوية تمامًا. لا مغناطيسات على الثلاجة، ولا صور
        على الجدران، ولا أغراض شخصية. يمكنك نشر مخطط قبل تجهيز المنزل للتصوير
        الفوتوغرافي، ما يسرّع الجدول الزمني للإعلان.
      </p>

      <h2>ليست الإعلانات فحسب، بل المعاينات أيضًا</h2>
      <p>
        احتفظ بملف PDF على هاتفك أثناء المعاينات. يحب المشترون أن تجيب عن "ما عرض هذا
        الممر؟" أو "ما عمق سطح المطبخ ذاك؟" برقم حقيقي وأنت تمسك الدليل بيدك. كما يفيد
        ذلك حين يريد المشتري معرفة ما إذا كان أثاثه الحالي سيتّسع.
      </p>

      <h2>حساب الوقت</h2>
      <p>
        بمعدّل 4 دقائق لكل إعلان، فإن 50 إعلانًا في السنة = 200 دقيقة إجمالًا. قارن
        ذلك بطلب مخططات احترافية بسعر 150 € للواحد: 7,500 € رسومًا، إضافةً إلى أسبوع
        انتظار لكل إعلان. تصبح المعادلة واضحة بمجرد أن تُرسِل ملف PDF واحدًا أبرم صفقة.
      </p>

      <h2>الخلاصة</h2>
      <p>
        أصبحت مخططات الطابق اليوم شرطًا أساسيًا للإعلانات الفاخرة. كان الحاجز هو
        التكلفة والوقت، ولم يعد أيٌّ منهما قائمًا. يمنحك iPhone Pro وتطبيق قياس و4
        دقائق لكل عقار مخططًا يتفوّق على نصف المخططات المرسومة احترافيًا على MLS.
        الوسطاء الذين يتبنّون هذا في 2026 سيتفوّقون في عدد الإعلانات على من لا يفعلون.
      </p>
    </article>
  );
}

export const bodies = {
  ru: PostRU, de: PostDE, fr: PostFR, es: PostES, ja: PostJA, ko: PostKO,
  'zh-Hans': PostZH, 'pt-BR': PostPT, it: PostIT, pl: PostPL, tr: PostTR, ar: PostAR
};
