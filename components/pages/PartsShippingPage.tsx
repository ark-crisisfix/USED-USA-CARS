import Link from "next/link";
import LeadFormUniversal from "@/components/LeadFormUniversal";
import type { Locale } from "@/lib/i18n";
import { localizePath } from "@/lib/i18n";

export default function PartsShippingPage({ locale }: { locale: Locale }) {
  const L = (path: string) => localizePath(path, locale);
  const isRu = locale === "ru";

  const copy = isRu
    ? {
        eyebrow: "Подбор и доставка запчастей",
        title: "Нужны запчасти для американского автомобиля? Подберём, проверим и отправим без хаоса и лишних переплат.",
        subtitle:
          "Если машина уже куплена на аукционе, восстанавливается после ДТП или вы заранее ищете детали для американского авто, мы можем взять подбор и отправку на себя. OEM, б/у, донорские позиции, консолидация и логистика под ваш проект.",
        bullets: [
          "Подбор по VIN, part number, фото и ссылке на лот",
          "Особенно удобно для машин из США и Канады",
          "Отправка отдельно или вместе с автомобилем в одном контейнере",
        ],
        rightTitle: "Когда это особенно полезно",
        rightItems: [
          "авто уже куплено на Copart / IAAI и нужно сразу собрать детали",
          "идёт восстановление американского автомобиля и нужен полный список позиций",
          "нужно найти редкие или дорогие элементы дешевле местного рынка",
          "хотите отправить несколько деталей одной партией без ручного хаоса",
        ],
        stats: [
          { value: "VIN", label: "подбор по машине" },
          { value: "1 партия", label: "можно собрать несколько деталей" },
          { value: "Под ключ", label: "поиск, проверка, отправка" },
        ],
        scenariosTitle: "Что мы можем подобрать",
        scenarios: [
          {
            title: "Кузов и оптика",
            body: "Бамперы, двери, фары, фонари, зеркала, капоты, крылья и другие элементы после аукционных повреждений.",
          },
          {
            title: "Техника и механика",
            body: "Подвеска, блоки управления, радиаторы, моторы, коробки передач, навесное оборудование и другие узлы под конкретный проект.",
          },
          {
            title: "Салон и комплектация",
            body: "Сиденья, пластик, мультимедиа, приборные панели, элементы интерьера и позиции для восстановления комплектации.",
          },
        ],
        processTitle: "Как это работает",
        process: [
          {
            title: "Вы присылаете исходные данные",
            body: "VIN, список деталей, номер детали, ссылку на лот или просто фото повреждений и задачи по машине.",
          },
          {
            title: "Мы собираем варианты",
            body: "Проверяем совместимость, ищем практичные позиции и отбрасываем сомнительные варианты по состоянию и цене.",
          },
          {
            title: "Считаем логистику",
            body: "Показываем, что лучше отправить отдельно, что выгоднее объединить, и где есть смысл грузить запчасти вместе с автомобилем.",
          },
          {
            title: "Подтверждаем и отправляем",
            body: "После согласования собираем заказ, консолидируем позиции и запускаем отправку по вашему направлению.",
          },
        ],
        includedTitle: "Что лучше прислать для быстрого расчёта",
        includedItems: [
          "VIN автомобиля",
          "список деталей или номер детали",
          "ссылку на лот / автомобиль",
          "фото повреждений или нужных узлов",
        ],
        promiseTitle: "Почему это выгодно",
        promiseCards: [
          {
            title: "Меньше переплат",
            body: "Часто дорогие позиции для американских машин можно найти заметно выгоднее, чем искать их локально в рознице.",
          },
          {
            title: "Меньше ошибок по совместимости",
            body: "Подбор по VIN и номеру детали снижает риск заказать не ту позицию и потерять время на возвраты и переделки.",
          },
          {
            title: "Одна точка ответственности",
            body: "Вы не координируете десять продавцов и пересылок вручную. Мы собираем это в понятную рабочую схему.",
          },
        ],
        objectionsTitle: "Что обычно волнует перед заказом",
        objections: [
          {
            title: "А если деталь не подойдёт?",
            body: "Поэтому и нужен подбор по VIN, part number и комплектации, а не покупка наугад по одной фотографии.",
          },
          {
            title: "А если отправка выйдет слишком дорогой?",
            body: "Мы заранее показываем, что выгоднее отправить отдельно, что можно объединить, а что разумнее положить в контейнер с автомобилем.",
          },
          {
            title: "А если нужен не один элемент, а целый набор?",
            body: "Это как раз наш удобный сценарий: собрать несколько позиций, консолидировать их и отправить одной партией.",
          },
        ],
        ctaTitle: "Оставьте заявку на подбор запчастей",
        ctaBody:
          "Напишите, для какой машины нужны детали, и мы вернёмся с практичным предложением по наличию, цене и отправке. Если у вас уже есть VIN или список запчастей, пришлите сразу — это ускорит расчёт.",
        primaryCta: "Оставить заявку",
        secondaryCta: "Смотреть лоты",
        directCta: "Связаться с нами",
        bottomTitle: "Не тратьте дни на хаотичный поиск.",
        bottomBody:
          "Отправьте VIN, список деталей или ссылку на автомобиль, и мы соберём понятное предложение без лишней путаницы.",
        formHeading: "Запрос на подбор и отправку запчастей",
      }
    : {
        eyebrow: "Parts sourcing and shipping",
        title: "Need parts for an American vehicle? We can source, verify, and ship them without guesswork or inflated local pricing.",
        subtitle:
          "If the car has already been bought at auction, is under repair, or you are preparing a US-market vehicle for your destination market, we can handle the parts side for you. OEM, used, donor parts, consolidation, and practical shipping logic.",
        bullets: [
          "Sourcing by VIN, part number, photos, or lot link",
          "Especially useful for US and Canadian vehicles",
          "Ship separately or together with the car in one container",
        ],
        rightTitle: "When this is most useful",
        rightItems: [
          "the car is already bought on Copart / IAAI and you want to line up parts early",
          "you are rebuilding a US vehicle and need a complete shortlist of required items",
          "you want to find expensive or hard-to-source parts below local market pricing",
          "you want several parts consolidated into one practical shipment",
        ],
        stats: [
          { value: "VIN", label: "vehicle-based sourcing" },
          { value: "1 batch", label: "multiple parts can ship together" },
          { value: "Turnkey", label: "search, verification, shipping" },
        ],
        scenariosTitle: "What we can source",
        scenarios: [
          {
            title: "Body and lighting",
            body: "Bumpers, doors, headlights, taillights, mirrors, hoods, fenders, and other items commonly needed after auction damage.",
          },
          {
            title: "Mechanical and technical parts",
            body: "Suspension components, control modules, radiators, engines, transmissions, and other project-specific systems.",
          },
          {
            title: "Interior and trim",
            body: "Seats, dashboard pieces, multimedia units, interior trim, and missing equipment items for a proper rebuild.",
          },
        ],
        processTitle: "How it works",
        process: [
          {
            title: "You send the inputs",
            body: "VIN, part list, part number, lot URL, or photos of damage and required components.",
          },
          {
            title: "We build practical options",
            body: "We check compatibility, shortlist workable parts, and filter out weak options on condition or pricing.",
          },
          {
            title: "We map the shipping logic",
            body: "We show what should ship separately, what should be consolidated, and what makes sense to load with the vehicle.",
          },
          {
            title: "You approve and we move",
            body: "Once approved, we consolidate the order, line up the route, and dispatch the shipment to your destination.",
          },
        ],
        includedTitle: "What to send for a fast quote",
        includedItems: [
          "vehicle VIN",
          "part list or part number",
          "lot URL / vehicle link",
          "photos of damage or required components",
        ],
        promiseTitle: "Why this service works well",
        promiseCards: [
          {
            title: "Lower parts cost",
            body: "Many expensive items for American vehicles can often be sourced below what you would normally pay in local retail channels.",
          },
          {
            title: "Less compatibility risk",
            body: "VIN-based and part-number-based sourcing lowers the chance of buying the wrong component and losing time on rework.",
          },
          {
            title: "One accountable workflow",
            body: "You do not need to manually coordinate multiple sellers, warehouses, and shipments. We turn it into one practical process.",
          },
        ],
        objectionsTitle: "What people usually worry about first",
        objections: [
          {
            title: "What if the part does not fit?",
            body: "That is why the workflow starts with VIN, part number, and compatibility checks instead of random buying from generic listings.",
          },
          {
            title: "What if shipping becomes too expensive?",
            body: "We show what should ship alone, what should be consolidated, and what is smarter to load into the same container as the vehicle.",
          },
          {
            title: "What if I need a full bundle, not one part?",
            body: "That is exactly where this service is strongest: we can consolidate several items into one cleaner and more cost-efficient shipment.",
          },
        ],
        ctaTitle: "Leave a parts request",
        ctaBody:
          "Tell us what vehicle and parts you need, and we will come back with a practical offer on availability, pricing, and shipping. If you already have the VIN or a parts list, send it right away for a faster estimate.",
        primaryCta: "Request parts sourcing",
        secondaryCta: "Browse auction lots",
        directCta: "Contact us directly",
        bottomTitle: "Do not waste days on chaotic parts hunting.",
        bottomBody:
          "Send us the VIN, parts list, or vehicle link, and we will come back with a clear workable option.",
        formHeading: "Parts sourcing and shipping request",
      };

  return (
    <div className="bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.18),_transparent_32%),linear-gradient(135deg,_#0f172a_0%,_#1d4ed8_45%,_#0f766e_100%)] px-4 py-20 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-sky-300 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-emerald-300 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-sky-100">
              {copy.eyebrow}
            </p>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl">{copy.title}</h1>
            <p className="mt-6 max-w-3xl text-xl leading-8 text-blue-100">{copy.subtitle}</p>

            <div className="mt-8 grid max-w-3xl gap-3">
              {copy.bullets.map((bullet) => (
                <div
                  key={bullet}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-sm"
                >
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-300" />
                  <span className="text-sm text-slate-100 md:text-base">{bullet}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#parts-form"
                className="rounded-xl bg-white px-8 py-4 text-center text-lg font-bold text-blue-900 shadow-lg transition hover:bg-gray-100"
              >
                {copy.primaryCta}
              </Link>
              <Link
                href={L("/auction-listings")}
                className="rounded-xl border border-white/20 bg-white/10 px-8 py-4 text-center text-lg font-bold text-white shadow-lg transition hover:bg-white/15"
              >
                {copy.secondaryCta}
              </Link>
            </div>
          </div>

          <div className="rounded-[32px] border border-white/12 bg-slate-950/45 p-6 shadow-2xl backdrop-blur-md">
            <div className="grid grid-cols-3 gap-3">
              {copy.stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                  <div className="text-2xl font-black text-white md:text-3xl">{stat.value}</div>
                  <div className="mt-2 text-xs uppercase tracking-[0.16em] text-sky-100">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-2xl border border-emerald-300/20 bg-emerald-400/10 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-200">{copy.rightTitle}</p>
              <div className="mt-4 grid gap-3">
                {copy.rightItems.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                    <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-300" />
                    <span className="text-sm leading-7 text-slate-100">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-slate-950">{copy.scenariosTitle}</h2>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {copy.scenarios.map((card) => (
              <article key={card.title} className="rounded-[26px] border border-slate-200 bg-slate-50 p-7 shadow-sm">
                <h3 className="text-2xl font-bold text-slate-950">{card.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-3xl font-bold text-slate-950">{copy.processTitle}</h2>
            <div className="mt-8 space-y-5">
              {copy.process.map((step, index) => (
                <div key={step.title} className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-sm font-black text-blue-700">
                    0{index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-950">{step.title}</h3>
                    <p className="mt-2 leading-7 text-slate-600">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[30px] border border-slate-200 bg-gradient-to-br from-slate-950 to-slate-900 p-8 text-white shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">{copy.includedTitle}</p>
            <div className="mt-6 grid gap-4">
              {copy.includedItems.map((item, index) => (
                <div key={item} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-emerald-300/15 text-sm font-black text-emerald-200">
                    0{index + 1}
                  </div>
                  <p className="text-sm leading-7 text-slate-100">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-2xl border border-emerald-300/20 bg-emerald-400/10 p-5">
              <h3 className="text-xl font-bold text-white">{copy.ctaTitle}</h3>
              <p className="mt-3 leading-7 text-slate-200">{copy.ctaBody}</p>
              <Link
                href="#parts-form"
                className="mt-5 inline-flex rounded-xl bg-emerald-300 px-5 py-4 text-base font-bold text-slate-950 transition hover:bg-emerald-200"
              >
                {copy.primaryCta}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-slate-950">{copy.promiseTitle}</h2>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {copy.promiseCards.map((card) => (
              <article key={card.title} className="rounded-[26px] border border-slate-200 bg-slate-50 p-7 shadow-sm">
                <h3 className="text-xl font-bold text-slate-950">{card.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-100 px-4 py-16">
        <div className="mx-auto max-w-6xl rounded-[30px] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold text-slate-950">{copy.objectionsTitle}</h2>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {copy.objections.map((item) => (
              <div key={item.title} className="rounded-[24px] border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-lg font-bold text-slate-950">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-5xl rounded-[30px] border border-slate-200 bg-gradient-to-r from-blue-50 to-emerald-50 p-8 shadow-sm md:p-10">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-slate-950">{copy.bottomTitle}</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">{copy.bottomBody}</p>
          </div>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#parts-form"
              className="rounded-xl bg-slate-900 px-6 py-4 text-center text-base font-bold text-white transition hover:bg-slate-800"
            >
              {copy.primaryCta}
            </Link>
            <Link
              href={L("/contact")}
              className="rounded-xl border border-slate-300 px-6 py-4 text-center text-base font-bold text-slate-900 transition hover:bg-white/70"
            >
              {copy.directCta}
            </Link>
          </div>
        </div>
      </section>

      <section id="parts-form" className="px-4 pb-20">
        <div className="mx-auto max-w-5xl">
          <LeadFormUniversal
            heading={copy.formHeading}
            formType="general"
            sourceContext="parts_shipping_page"
            preferredVehicleInitial={isRu ? "Запчасти для американского автомобиля" : "Parts for a US vehicle"}
          />
        </div>
      </section>
    </div>
  );
}
