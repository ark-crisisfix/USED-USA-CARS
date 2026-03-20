import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-2xl text-blue-600">
          Used Cars USA
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link href="/catalog" className="text-gray-600 hover:text-blue-600 font-medium">Catalog</Link>
          <Link href="/export-to-ukraine" className="text-gray-600 hover:text-blue-600 font-medium">To Ukraine</Link>
          <Link href="/export-to-uae" className="text-gray-600 hover:text-blue-600 font-medium">To UAE</Link>
          <Link href="/calculator" className="text-gray-600 hover:text-blue-600 font-medium">Calculator</Link>
          <Link href="/how-it-works" className="text-gray-600 hover:text-blue-600 font-medium">How it works</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="/contact" className="hidden lg:inline-flex bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition">
            Get Quote
          </Link>
          {/* Mobile menu button could go here */}
        </div>
      </div>
    </header>
  );
}
