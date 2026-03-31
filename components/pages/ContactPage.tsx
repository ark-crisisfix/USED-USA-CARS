import LeadForm from "@/components/LeadForm";
import { getDictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";

export default function ContactPage({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).contact;
  const copy =
    locale === "ru"
      ? {
          channelsTitle: "Основные каналы связи",
          channelsBody: "WhatsApp / Telegram / Email.",
          channelsNote: "Отвечаем в течение 24 часов в рабочие дни.",
          phoneTitle: "Телефон",
          whatsappTitle: "WhatsApp",
          telegramTitle: "Telegram",
          emailTitle: "Email",
        }
      : {
          channelsTitle: "Primary communication channels",
          channelsBody: "WhatsApp / Telegram / Email.",
          channelsNote: "We respond within 24 hours on business days.",
          phoneTitle: "Phone",
          whatsappTitle: "WhatsApp",
          telegramTitle: "Telegram",
          emailTitle: "Email",
        };

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">{t.title}</h1>
          <p className="text-xl text-gray-600">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-full">
              <h2 className="text-2xl font-bold mb-8">{t.touch}</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 text-blue-600 p-3 rounded-lg mr-4">☎</div>
                  <div>
                    <h3 className="font-bold text-gray-900">{copy.phoneTitle}</h3>
                    <p className="text-gray-600 mt-1">+1 672-673-9976</p>
                    <p className="text-gray-600">+778-254-55333</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 text-green-600 p-3 rounded-lg mr-4">W</div>
                  <div>
                    <h3 className="font-bold text-gray-900">{copy.whatsappTitle}</h3>
                    <p className="text-gray-600 mt-1">+380 99 255 7209</p>
                    <p className="text-gray-600">+1 647-241-9742</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-sky-100 text-sky-600 p-3 rounded-lg mr-4">T</div>
                  <div>
                    <h3 className="font-bold text-gray-900">{copy.telegramTitle}</h3>
                    <p className="text-gray-600 mt-1">@ARMAN_TATEVOSYAN</p>
                    <p className="text-gray-600">@Ark_Kan</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-amber-100 text-amber-600 p-3 rounded-lg mr-4">@</div>
                  <div>
                    <h3 className="font-bold text-gray-900">{copy.emailTitle}</h3>
                    <p className="text-gray-600 mt-1">bid@hortham.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">{copy.channelsTitle}</h3>
                <p className="text-sm text-gray-700">
                  {copy.channelsBody}
                  <br />
                  {copy.channelsNote}
                </p>
              </div>
            </div>
          </div>

          <div>
            <LeadForm title={t.formTitle} />
          </div>
        </div>
      </div>
    </div>
  );
}
