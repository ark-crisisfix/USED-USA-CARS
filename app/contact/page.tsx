import LeadForm from '@/components/LeadForm';

export const metadata = {
  title: 'Contact Us - Used Cars USA',
  description: 'Contact our team to get a quote, ask questions about buying from USA auctions, or discuss export to your country.',
};

export default function ContactPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Contact Us</h1>
          <p className="text-xl text-gray-600">
            Have questions about importing a car? Ready to start looking for your next vehicle? We are here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-full">
              <h2 className="text-2xl font-bold mb-8">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 text-blue-600 p-3 rounded-lg mr-4">
                    📞
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Phone & WhatsApp</h3>
                    <p className="text-gray-600 mt-1">+1 (555) 123-4567</p>
                    <p className="text-sm text-gray-500 mt-1">Available 9 AM - 6 PM EST</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 text-blue-600 p-3 rounded-lg mr-4">
                    ✉️
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Email</h3>
                    <p className="text-gray-600 mt-1">export@used-cars-usa.com</p>
                    <p className="text-sm text-gray-500 mt-1">We typically reply within 2 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 text-blue-600 p-3 rounded-lg mr-4">
                    📍
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Head Office</h3>
                    <p className="text-gray-600 mt-1">100 Auction Way, Suite 400</p>
                    <p className="text-gray-600">Miami, FL 33101, USA</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-2">Regional Representatives</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-600">Ukraine (Kyiv)</span>
                    <span className="font-medium">+380 44 123 4567</span>
                  </div>
                  <div className="flex justify-between border-b pb-2">
                    <span className="text-gray-600">UAE (Dubai)</span>
                    <span className="font-medium">+971 4 123 4567</span>
                  </div>
                  <div className="flex justify-between pb-2">
                    <span className="text-gray-600">Poland (Warsaw)</span>
                    <span className="font-medium">+48 22 123 4567</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <LeadForm title="Send us a message" />
          </div>
        </div>
      </div>
    </div>
  );
}
