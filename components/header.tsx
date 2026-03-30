import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between max-w-6xl">
        <Link href="/" className="text-xl font-bold hover:text-gray-500 transition-colors">
          블로그
        </Link>

        <nav className="flex items-center gap-6">
          <Link href="/" className="hover:text-gray-500 transition-colors">
            홈
          </Link>
          <Link href="/about" className="hover:text-gray-500 transition-colors">
            소개
          </Link>
        </nav>
      </div>
    </header>
  );
}
