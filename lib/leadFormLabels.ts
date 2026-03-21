import type { Locale } from "@/lib/i18n";

export type LeadUniversalLabels = {
  subtitle: string;
  nameLabel: string;
  namePh: string;
  contactLabel: string;
  contactPh: string;
  budgetLabel: string;
  budgetPh: string;
  budgetOpts: { value: string; label: string }[];
  destLabel: string;
  destPh: string;
  destOpts: { value: string; label: string }[];
  preferredVehicle: string;
  preferredVehiclePh: string;
  conditionLabel: string;
  conditionOpts: { value: string; label: string }[];
  message: string;
  messagePh: string;
  sending: string;
  footnote: string;
  successTitle: string;
  successBody: string;
  backCatalog: string;
  calcLink: string;
  errorFallback: string;
};

const en: LeadUniversalLabels = {
  subtitle: "Leave your request — we will contact you shortly with options and cost estimates.",
  nameLabel: "Name *",
  namePh: "Your name",
  contactLabel: "Phone / WhatsApp / Telegram *",
  contactPh: "+1 … / @username",
  budgetLabel: "Budget *",
  budgetPh: "Select budget range",
  budgetOpts: [
    { value: "under_10k", label: "Under $10,000" },
    { value: "10k_15k", label: "$10,000–$15,000" },
    { value: "15k_25k", label: "$15,000–$25,000" },
    { value: "25k_40k", label: "$25,000–$40,000" },
    { value: "40k_plus", label: "$40,000+" },
  ],
  destLabel: "Destination *",
  destPh: "Select destination",
  destOpts: [
    { value: "Canada", label: "Canada" },
    { value: "Ukraine", label: "Ukraine" },
    { value: "UAE", label: "UAE" },
    { value: "Other", label: "Other" },
  ],
  preferredVehicle: "Preferred vehicle",
  preferredVehiclePh: "e.g. Toyota Camry / Lexus RX",
  conditionLabel: "Condition preference",
  conditionOpts: [
    { value: "", label: "Prefer not to say" },
    { value: "Clean Title", label: "Clean Title" },
    { value: "Salvage", label: "Salvage" },
    { value: "Repaired", label: "Repaired" },
    { value: "Not Sure", label: "Not Sure" },
  ],
  message: "Message",
  messagePh: "Tell us what you are looking for",
  sending: "Sending…",
  footnote: "We typically respond within one business day.",
  successTitle: "Thank you",
  successBody: "We received your request and will contact you shortly.",
  backCatalog: "Return to cars",
  calcLink: "Open calculator",
  errorFallback: "Something went wrong. Please try again or contact us directly.",
};

const ru: LeadUniversalLabels = {
  subtitle: "Оставьте заявку — свяжемся с вариантами и ориентиром по стоимости.",
  nameLabel: "Имя *",
  namePh: "Как к вам обращаться",
  contactLabel: "Телефон / WhatsApp / Telegram *",
  contactPh: "+380 … / @username",
  budgetLabel: "Бюджет *",
  budgetPh: "Выберите диапазон",
  budgetOpts: [
    { value: "under_10k", label: "До $10,000" },
    { value: "10k_15k", label: "$10,000–$15,000" },
    { value: "15k_25k", label: "$15,000–$25,000" },
    { value: "25k_40k", label: "$25,000–$40,000" },
    { value: "40k_plus", label: "Свыше $40,000" },
  ],
  destLabel: "Направление *",
  destPh: "Выберите направление",
  destOpts: [
    { value: "Canada", label: "Канада" },
    { value: "Ukraine", label: "Украина" },
    { value: "UAE", label: "ОАЭ" },
    { value: "Other", label: "Другое" },
  ],
  preferredVehicle: "Желаемая модель",
  preferredVehiclePh: "напр. Toyota Camry / Lexus RX",
  conditionLabel: "Предпочтение по состоянию",
  conditionOpts: [
    { value: "", label: "Не указано" },
    { value: "Clean Title", label: "Чистый титул" },
    { value: "Salvage", label: "Salvage" },
    { value: "Repaired", label: "После ремонта" },
    { value: "Not Sure", label: "Не уверен(а)" },
  ],
  message: "Сообщение",
  messagePh: "Что ищете, сроки, вопросы",
  sending: "Отправка…",
  footnote: "Обычно отвечаем в течение одного рабочего дня.",
  successTitle: "Спасибо",
  successBody: "Заявка получена — скоро свяжемся.",
  backCatalog: "К каталогу",
  calcLink: "Калькулятор",
  errorFallback: "Не удалось отправить. Попробуйте ещё раз или напишите напрямую.",
};

export function getLeadUniversalLabels(locale: Locale): LeadUniversalLabels {
  return locale === "ru" ? ru : en;
}
