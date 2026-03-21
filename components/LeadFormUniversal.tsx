"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";
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

const WHATSAPP_NUMBER = "380992557209";
const WHATSAPP_LABEL = "+380 99 255 7209";
const TELEGRAM_USERNAME = "@ARMAN_TATEVOSYAN";
const TELEGRAM_URL = "https://t.me/ARMAN_TATEVOSYAN";
const ORDER_EMAIL = "bid@hortham.com";

type ContactCopy = {
  subtitle: string;
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
};

function getCopy(locale: "en" | "ru"): ContactCopy {
  if (locale === "ru") {
    return {
      subtitle: "Напишите удобным способом: в WhatsApp, Telegram или отправьте email с готовым шаблоном заказа.",
      whatsappTitle: "WhatsApp",
      whatsappBody: "Быстрый контакт для подбора авто, расчета бюджета и уточнения деталей доставки.",
      whatsappCta: "Открыть WhatsApp",
      telegramTitle: "Telegram",
      telegramBody: "Удобно для переписки, фото лотов, ссылок на варианты и пошагового согласования.",
      telegramCta: "Открыть Telegram",
      emailTitle: "Email-заказ",
      emailBody: "Откроется письмо с уже подготовленным шаблоном заказа. Останется только заполнить детали и отправить.",
      emailCta: "Отправить email",
      templateLabel: "Шаблон уже содержит страницу, тип запроса и базовые поля заказа.",
    };
  }

  return {
    subtitle: "Reach out via WhatsApp, Telegram, or send an email using a ready-made order template.",
    whatsappTitle: "WhatsApp",
    whatsappBody: "Fastest way to discuss vehicle options, budget, and shipping details.",
    whatsappCta: "Open WhatsApp",
    telegramTitle: "Telegram",
    telegramBody: "Convenient for chat, lot links, photos, and step-by-step order discussion.",
    telegramCta: "Open Telegram",
    emailTitle: "Order by Email",
    emailBody: "This opens a prefilled email template. You only need to add your details and send it.",
    emailCta: "Send Email",
    templateLabel: "The template already includes the page, inquiry type, and basic order fields.",
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
          "Хочу заказать подбор/покупку автомобиля.",
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
          "I would like to request a car search/purchase.",
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
  className = "",
  preferredVehicleInitial = "",
}: LeadFormUniversalProps) {
  const pathname = usePathname() || "/";
  const locale = getLocaleFromPath(pathname);
  const copy = getCopy(locale);
  const effectiveSubtitle = subtitle ?? copy.subtitle;

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

  const whatsappText = encodeURIComponent(
    locale === "ru"
      ? `Здравствуйте! Интересует заказ авто. Страница: ${pathname}`
      : `Hello! I am interested in ordering a car. Page: ${pathname}`
  );

  const cards = [
    {
      title: copy.whatsappTitle,
      body: copy.whatsappBody,
      value: WHATSAPP_LABEL,
      href: `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappText}`,
      cta: copy.whatsappCta,
      tone: "bg-green-50 border-green-200 text-green-900",
      buttonTone: "bg-green-600 hover:bg-green-700 text-white",
    },
    {
      title: copy.telegramTitle,
      body: copy.telegramBody,
      value: TELEGRAM_USERNAME,
      href: TELEGRAM_URL,
      cta: copy.telegramCta,
      tone: "bg-sky-50 border-sky-200 text-sky-900",
      buttonTone: "bg-sky-600 hover:bg-sky-700 text-white",
    },
    {
      title: copy.emailTitle,
      body: copy.emailBody,
      value: ORDER_EMAIL,
      href: `mailto:${ORDER_EMAIL}?subject=${mailTemplate.subject}&body=${mailTemplate.body}`,
      cta: copy.emailCta,
      tone: "bg-amber-50 border-amber-200 text-amber-900",
      buttonTone: "bg-amber-600 hover:bg-amber-700 text-white",
    },
  ];

  return (
    <div className={`bg-white p-6 rounded-xl shadow-md border border-gray-100 ${className}`}>
      <h3 className={`font-bold text-gray-900 ${compact ? "text-xl mb-2" : "text-2xl mb-2"}`}>{heading}</h3>
      {effectiveSubtitle ? <p className="text-gray-600 text-sm mb-5">{effectiveSubtitle}</p> : null}

      <div className="grid gap-4">
        {cards.map((card) => (
          <div key={card.title} className={`rounded-xl border p-4 ${card.tone}`}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <h4 className="text-lg font-bold">{card.title}</h4>
                <p className="mt-1 text-sm leading-6">{card.body}</p>
                <p className="mt-3 font-semibold">{card.value}</p>
              </div>
              <a
                href={card.href}
                target={card.title === copy.emailTitle ? undefined : "_blank"}
                rel={card.title === copy.emailTitle ? undefined : "noreferrer"}
                className={`shrink-0 rounded-lg px-4 py-2 text-sm font-bold transition-colors ${card.buttonTone}`}
              >
                {card.cta}
              </a>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-4 text-xs text-gray-500">{copy.templateLabel}</p>
    </div>
  );
}
