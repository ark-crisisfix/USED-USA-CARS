"use client";

import { useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import type { LeadFormType } from "@/lib/types/commerce";
import { getLocaleFromPath } from "@/lib/i18n";

export type LeadFormUniversalProps = {
  heading?: string;
  subtitle?: string;
  formType?: LeadFormType;
  sourceContext?: string;
  destinationPrefill?: string;
  carReferenceId?: string;
  readyCarReferenceId?: string;
  caseReferenceId?: string;
  compact?: boolean;
  submitButtonText?: string;
  className?: string;
  preferredVehicleInitial?: string;
};

type SubmitState = "idle" | "submitting" | "success" | "error";

type ContactCopy = {
  subtitle: string;
  callTitle: string;
  callBody: string;
  callCta: string;
  whatsappTitle: string;
  whatsappBody: string;
  whatsappCta: string;
  telegramTitle: string;
  telegramBody: string;
  telegramCta: string;
  emailTitle: string;
  emailBody: string;
  emailCta: string;
  templateLabel: string;
  formTitle: string;
  formSubtitle: string;
  nameLabel: string;
  contactLabel: string;
  budgetLabel: string;
  destinationLabel: string;
  preferredVehicleLabel: string;
  conditionLabel: string;
  messageLabel: string;
  conditionPlaceholder: string;
  destinationPlaceholder: string;
  otherDestination: string;
  worldwideDestination: string;
  ukraine: string;
  uae: string;
  canada: string;
  send: string;
  sending: string;
  successTitle: string;
  successBody: string;
  errorBody: string;
  footnote: string;
  cleanOption: string;
  salvageOption: string;
  anyOption: string;
};

const WHATSAPP_NUMBER = "380992557209";
const WHATSAPP_LABEL = "+380 99 255 7209";
const CALL_NUMBERS = [
  { label: "+1 672-673-9976", href: "tel:+16726739976" },
  { label: "+778-254-55333", href: "tel:+77825455333" },
] as const;
const TELEGRAM_USERNAME = "@ARMAN_TATEVOSYAN";
const TELEGRAM_URL = "https://t.me/ARMAN_TATEVOSYAN";
const ORDER_EMAIL = "bid@hortham.com";

function getCopy(locale: "en" | "ru"): ContactCopy {
  if (locale === "ru") {
    return {
      subtitle:
        "Выберите удобный способ связи: звонок, WhatsApp, Telegram или заявка ниже. Email с шаблоном заказа тоже доступен.",
      callTitle: "Звонок",
      callBody: "Два прямых номера для обсуждения подбора авто, ставок, логистики и наличия.",
      callCta: "Позвонить",
      whatsappTitle: "WhatsApp",
      whatsappBody: "Быстрый способ обсудить авто, бюджет, доставку и получить ответ без ожидания.",
      whatsappCta: "Открыть WhatsApp",
      telegramTitle: "Telegram",
      telegramBody: "Удобно для переписки, фото, ссылок на варианты и согласования деталей заказа.",
      telegramCta: "Открыть Telegram",
      emailTitle: "Email-заказ",
      emailBody: "Откроется письмо с уже подготовленным шаблоном заказа. Останется только добавить детали.",
      emailCta: "Отправить email",
      templateLabel: "Шаблон email уже содержит страницу, тип запроса и базовую структуру заказа.",
      formTitle: "Или оставьте заявку ниже",
      formSubtitle: "Заявка уйдёт напрямую в CRM. Мы свяжемся с вами после получения.",
      nameLabel: "Имя",
      contactLabel: "Телефон / WhatsApp / Telegram / Email",
      budgetLabel: "Бюджет",
      destinationLabel: "Направление",
      preferredVehicleLabel: "Какой автомобиль интересует",
      conditionLabel: "Предпочтение по состоянию",
      messageLabel: "Комментарий",
      conditionPlaceholder: "Выберите вариант",
      destinationPlaceholder: "Выберите направление",
      otherDestination: "Другое",
      worldwideDestination: "По миру",
      ukraine: "Украина",
      uae: "ОАЭ",
      canada: "Канада",
      send: "Отправить заявку",
      sending: "Отправляем...",
      successTitle: "Заявка принята",
      successBody: "Спасибо. Мы получили ваш запрос и свяжемся с вами в ближайшее время.",
      errorBody: "Не удалось сохранить заявку. Попробуйте ещё раз или напишите нам в WhatsApp / Telegram.",
      footnote: "Поля со звёздочкой обязательны. Прямые контакты выше остаются доступными в любой момент.",
      cleanOption: "Только clean / без серьёзных повреждений",
      salvageOption: "Допустим salvage / repair project",
      anyOption: "Рассмотрю разные варианты",
    };
  }

  return {
    subtitle:
      "Choose the contact method that works best for you: phone, WhatsApp, Telegram, or the inquiry form below. Email with a ready-made template is also available.",
    callTitle: "Call Us",
    callBody: "Two direct phone lines for discussing vehicle sourcing, bidding, shipping, and current inventory.",
    callCta: "Call Now",
    whatsappTitle: "WhatsApp",
    whatsappBody: "The fastest way to discuss vehicle options, budget, shipping, and next steps.",
    whatsappCta: "Open WhatsApp",
    telegramTitle: "Telegram",
    telegramBody: "Convenient for chat, lot links, photos, and step-by-step order coordination.",
    telegramCta: "Open Telegram",
    emailTitle: "Order by Email",
    emailBody: "This opens a prefilled email template. You only need to add your details and send it.",
    emailCta: "Send Email",
    templateLabel: "The email template already includes the page, inquiry type, and the main order fields.",
    formTitle: "Or send us a request below",
    formSubtitle: "This request goes directly into our CRM, and we will follow up after it is received.",
    nameLabel: "Name",
    contactLabel: "Phone / WhatsApp / Telegram / Email",
    budgetLabel: "Budget",
    destinationLabel: "Destination",
    preferredVehicleLabel: "Preferred vehicle",
    conditionLabel: "Condition preference",
    messageLabel: "Comment",
    conditionPlaceholder: "Select an option",
    destinationPlaceholder: "Select destination",
    otherDestination: "Other",
    worldwideDestination: "Worldwide",
    ukraine: "Ukraine",
    uae: "UAE",
    canada: "Canada",
    send: "Send Request",
    sending: "Sending...",
    successTitle: "Request received",
    successBody: "Thank you. We received your inquiry and will get back to you shortly.",
    errorBody: "We could not save your request right now. Please try again or contact us via WhatsApp / Telegram.",
    footnote: "Fields marked with * are required. The direct contact options above remain available at any time.",
    cleanOption: "Clean / no major damage only",
    salvageOption: "Salvage / repair project is acceptable",
    anyOption: "Open to different options",
  };
}

function buildTemplate(params: {
  locale: "en" | "ru";
  pathname: string;
  heading?: string;
  formType: LeadFormType;
  sourceContext?: string;
  destinationPrefill?: string;
  preferredVehicleInitial?: string;
  carReferenceId?: string;
  readyCarReferenceId?: string;
  caseReferenceId?: string;
}) {
  const subjectPrefix = params.locale === "ru" ? "Заказ авто" : "Car order request";
  const subject = `${subjectPrefix}: ${params.heading || params.formType}`;

  const lines =
    params.locale === "ru"
      ? [
          "Здравствуйте,",
          "",
          "Хочу заказать подбор / покупку автомобиля.",
          "",
          "Имя:",
          "Телефон / WhatsApp / Telegram:",
          "Предпочтительный автомобиль:",
          "Бюджет:",
          "Направление доставки:",
          "Предпочтения по состоянию:",
          "Комментарий:",
          "",
          `Страница: ${params.pathname}`,
          `Тип запроса: ${params.formType}`,
          `Контекст: ${params.sourceContext || "-"}`,
          `Предзаполненное направление: ${params.destinationPrefill || "-"}`,
          `Предзаполненный автомобиль: ${params.preferredVehicleInitial || "-"}`,
          `Car reference ID: ${params.carReferenceId || "-"}`,
          `Ready car reference ID: ${params.readyCarReferenceId || "-"}`,
          `Case reference ID: ${params.caseReferenceId || "-"}`,
        ]
      : [
          "Hello,",
          "",
          "I would like to request a car search / purchase.",
          "",
          "Name:",
          "Phone / WhatsApp / Telegram:",
          "Preferred vehicle:",
          "Budget:",
          "Delivery destination:",
          "Condition preference:",
          "Comment:",
          "",
          `Page: ${params.pathname}`,
          `Inquiry type: ${params.formType}`,
          `Context: ${params.sourceContext || "-"}`,
          `Prefilled destination: ${params.destinationPrefill || "-"}`,
          `Prefilled vehicle: ${params.preferredVehicleInitial || "-"}`,
          `Car reference ID: ${params.carReferenceId || "-"}`,
          `Ready car reference ID: ${params.readyCarReferenceId || "-"}`,
          `Case reference ID: ${params.caseReferenceId || "-"}`,
        ];

  return {
    subject: encodeURIComponent(subject),
    body: encodeURIComponent(lines.join("\n")),
  };
}

function buildWhatsAppText(locale: "en" | "ru", pathname: string) {
  return encodeURIComponent(
    locale === "ru"
      ? `Здравствуйте! Интересует заказ авто. Страница: ${pathname}`
      : `Hello! I am interested in ordering a car. Page: ${pathname}`
  );
}

export default function LeadFormUniversal({
  heading = "Contact us",
  subtitle,
  formType = "general",
  sourceContext,
  destinationPrefill,
  carReferenceId,
  readyCarReferenceId,
  caseReferenceId,
  compact,
  submitButtonText,
  className = "",
  preferredVehicleInitial = "",
}: LeadFormUniversalProps) {
  const pathname = usePathname() || "/";
  const router = useRouter();
  const locale = getLocaleFromPath(pathname);
  const copy = getCopy(locale);
  const effectiveSubtitle = subtitle ?? copy.subtitle;
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [formValues, setFormValues] = useState({
    name: "",
    contact: "",
    budget: "",
    destination: destinationPrefill || "",
    preferred_vehicle: preferredVehicleInitial || "",
    condition_preference: "",
    message: "",
    honeypot: "",
  });

  const mailTemplate = useMemo(
    () =>
      buildTemplate({
        locale,
        pathname,
        heading,
        formType,
        sourceContext,
        destinationPrefill,
        preferredVehicleInitial,
        carReferenceId,
        readyCarReferenceId,
        caseReferenceId,
      }),
    [
      locale,
      pathname,
      heading,
      formType,
      sourceContext,
      destinationPrefill,
      preferredVehicleInitial,
      carReferenceId,
      readyCarReferenceId,
      caseReferenceId,
    ]
  );

  const cards = [
    {
      title: copy.callTitle,
      body: copy.callBody,
      href: CALL_NUMBERS[0].href,
      cta: copy.callCta,
      tone: "bg-slate-50 border-slate-200 text-slate-900",
      buttonTone: "bg-slate-900 hover:bg-slate-800 text-white",
      phoneLinks: CALL_NUMBERS,
      value: "",
    },
    {
      title: copy.whatsappTitle,
      body: copy.whatsappBody,
      value: WHATSAPP_LABEL,
      href: `https://wa.me/${WHATSAPP_NUMBER}?text=${buildWhatsAppText(locale, pathname)}`,
      cta: copy.whatsappCta,
      tone: "bg-green-50 border-green-200 text-green-900",
      buttonTone: "bg-green-600 hover:bg-green-700 text-white",
      phoneLinks: undefined,
    },
    {
      title: copy.telegramTitle,
      body: copy.telegramBody,
      value: TELEGRAM_USERNAME,
      href: TELEGRAM_URL,
      cta: copy.telegramCta,
      tone: "bg-sky-50 border-sky-200 text-sky-900",
      buttonTone: "bg-sky-600 hover:bg-sky-700 text-white",
      phoneLinks: undefined,
    },
    {
      title: copy.emailTitle,
      body: copy.emailBody,
      value: ORDER_EMAIL,
      href: `mailto:${ORDER_EMAIL}?subject=${mailTemplate.subject}&body=${mailTemplate.body}`,
      cta: copy.emailCta,
      tone: "bg-amber-50 border-amber-200 text-amber-900",
      buttonTone: "bg-amber-600 hover:bg-amber-700 text-white",
      phoneLinks: undefined,
    },
  ];

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState("submitting");
    setErrorMessage(null);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formValues,
          source_context: sourceContext,
          page_url: pathname,
          form_type: formType,
          ready_car_reference_id: readyCarReferenceId,
          case_reference_id: caseReferenceId,
          car_reference_id: carReferenceId,
        }),
      });

      const data = (await response.json().catch(() => null)) as { message?: string; ok?: boolean } | null;

      if (!response.ok || !data?.ok) {
        setSubmitState("error");
        setErrorMessage(data?.message ?? copy.errorBody);
        return;
      }

        setSubmitState("success");
        setFormValues({
          name: "",
          contact: "",
        budget: "",
        destination: destinationPrefill || "",
        preferred_vehicle: preferredVehicleInitial || "",
        condition_preference: "",
          message: "",
          honeypot: "",
        });
        router.push(locale === "ru" ? "/ru/thank-you" : "/thank-you");
    } catch {
      setSubmitState("error");
      setErrorMessage(copy.errorBody);
    }
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = event.target;
    setFormValues((current) => ({
      ...current,
      [name]: value,
    }));

    if (submitState === "error") {
      setSubmitState("idle");
      setErrorMessage(null);
    }
  }

  return (
    <div className={`rounded-xl border border-gray-100 bg-white p-6 shadow-md ${className}`}>
      <h3 className={`font-bold text-gray-900 ${compact ? "mb-2 text-xl" : "mb-2 text-2xl"}`}>{heading}</h3>
      {effectiveSubtitle ? <p className="mb-5 text-sm text-gray-600">{effectiveSubtitle}</p> : null}

      <div className="grid gap-4">
        {cards.map((card) => (
          <div key={card.title} className={`rounded-xl border p-4 ${card.tone}`}>
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <h4 className="text-lg font-bold">{card.title}</h4>
                <p className="mt-1 text-sm leading-6">{card.body}</p>
                {card.phoneLinks ? (
                  <div className="mt-3 flex flex-wrap gap-3">
                    {card.phoneLinks.map((phone) => (
                      <a key={phone.href} href={phone.href} className="font-semibold underline-offset-2 hover:underline">
                        {phone.label}
                      </a>
                    ))}
                  </div>
                ) : (
                  <p className="mt-3 font-semibold">{card.value}</p>
                )}
              </div>
              <a
                href={card.href}
                target={card.title === copy.emailTitle || card.title === copy.callTitle ? undefined : "_blank"}
                rel={card.title === copy.emailTitle || card.title === copy.callTitle ? undefined : "noreferrer"}
                className={`shrink-0 rounded-lg px-4 py-2 text-center text-sm font-bold transition-colors ${card.buttonTone}`}
              >
                {card.cta}
              </a>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-4 text-xs text-gray-500">{copy.templateLabel}</p>

      <div className="mt-8 rounded-2xl border border-gray-200 bg-gray-50 p-5">
        <div className="mb-5">
          <h4 className="text-lg font-bold text-gray-900">{copy.formTitle}</h4>
          <p className="mt-1 text-sm text-gray-600">{copy.formSubtitle}</p>
        </div>

        {submitState === "error" ? (
          <div className="mb-4 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-900">
            {errorMessage ?? copy.errorBody}
          </div>
        ) : null}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="honeypot"
            value={formValues.honeypot}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />

          <div className="grid gap-4 md:grid-cols-2">
            <label className="block">
              <span className="mb-1 block text-sm font-medium text-gray-700">{copy.nameLabel} *</span>
              <input
                type="text"
                name="name"
                value={formValues.name}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-gray-500"
              />
            </label>

            <label className="block">
              <span className="mb-1 block text-sm font-medium text-gray-700">{copy.contactLabel} *</span>
              <input
                type="text"
                name="contact"
                value={formValues.contact}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-gray-500"
              />
            </label>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <label className="block">
              <span className="mb-1 block text-sm font-medium text-gray-700">{copy.budgetLabel} *</span>
              <input
                type="text"
                name="budget"
                value={formValues.budget}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-gray-500"
              />
            </label>

            <label className="block">
              <span className="mb-1 block text-sm font-medium text-gray-700">{copy.destinationLabel} *</span>
              <select
                name="destination"
                value={formValues.destination}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-gray-500"
              >
                <option value="">{copy.destinationPlaceholder}</option>
                <option value="Ukraine">{copy.ukraine}</option>
                <option value="UAE">{copy.uae}</option>
                <option value="Canada">{copy.canada}</option>
                <option value="Worldwide">{copy.worldwideDestination}</option>
                <option value="Other">{copy.otherDestination}</option>
              </select>
            </label>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <label className="block">
              <span className="mb-1 block text-sm font-medium text-gray-700">{copy.preferredVehicleLabel}</span>
              <input
                type="text"
                name="preferred_vehicle"
                value={formValues.preferred_vehicle}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-gray-500"
              />
            </label>

            <label className="block">
              <span className="mb-1 block text-sm font-medium text-gray-700">{copy.conditionLabel}</span>
              <select
                name="condition_preference"
                value={formValues.condition_preference}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-gray-500"
              >
                <option value="">{copy.conditionPlaceholder}</option>
                <option value="clean">{copy.cleanOption}</option>
                <option value="salvage">{copy.salvageOption}</option>
                <option value="any">{copy.anyOption}</option>
              </select>
            </label>
          </div>

          <label className="block">
            <span className="mb-1 block text-sm font-medium text-gray-700">{copy.messageLabel}</span>
            <textarea
              name="message"
              value={formValues.message}
              onChange={handleChange}
              rows={4}
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-gray-500"
            />
          </label>

          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p className="text-xs text-gray-500">{copy.footnote}</p>
            <button
              type="submit"
              disabled={submitState === "submitting"}
              className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-500"
            >
              {submitState === "submitting" ? copy.sending : submitButtonText ?? copy.send}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
