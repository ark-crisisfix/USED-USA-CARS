import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Used Cars USA</h3>
            <p className="text-gray-400">Buy cars directly from US auctions with global delivery. Save up to 40%.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><Link href="/catalog" className="hover:text-white transition">Auction Catalog</Link></li>
              <li><Link href="/export-to-ukraine" className="hover:text-white transition">Delivery to Ukraine</Link></li>
              <li><Link href="/export-to-uae" className="hover:text-white transition">Delivery to UAE</Link></li>
              <li><Link href="/calculator" className="hover:text-white transition">Cost Calculator</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/how-it-works" className="hover:text-white transition">How It Works</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition">Pricing</Link></li>
              <li><Link href="/cases" className="hover:text-white transition">Cases & Reviews</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">SEO</h4>
            <ul className="space-y-2">
              <li><Link href="/used-cars-usa" className="hover:text-white transition">Used Cars USA</Link></li>
              <li><Link href="/used-cars-canada" className="hover:text-white transition">Used Cars Canada</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Used Cars USA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
