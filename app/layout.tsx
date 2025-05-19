import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import MobileBottomNavbar from "./components/MobileBottomNavbar";
import HamburgerMenu from "./components/HamburgerMenu";
import InfoModal from "./components/InfoModal";
import WhatsAppButton from "./components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FitLife Gym | Sağlıklı Yaşam Merkezi",
  description: "Modern ekipmanlar, uzman kadro ve çeşitli programlarla sağlıklı ve fit bir yaşam için FitLife Gym",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <InfoModal />
        <WhatsAppButton />
        <header className="bg-black text-white sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold">
              <Link href="/" className="hover:text-red-500 transition duration-300">
                FitLife Gym
              </Link>
            </div>
            
            {/* Mobil hamburger menü */}
            <HamburgerMenu />
            
            {/* Masaüstü navigasyon */}
            <nav className="hidden md:flex flex-wrap justify-center gap-6">
              <Link href="/" className="hover:text-red-500 transition duration-300 px-2 py-1">
                Ana Sayfa
              </Link>
              <Link href="/hakkimizda" className="hover:text-red-500 transition duration-300 px-2 py-1">
                Hakkımızda
              </Link>
              <Link href="/programlar" className="hover:text-red-500 transition duration-300 px-2 py-1">
                Programlar
              </Link>
              <Link href="/antrenorler" className="hover:text-red-500 transition duration-300 px-2 py-1">
                Antrenörler
              </Link>
              <Link href="/uyelik" className="hover:text-red-500 transition duration-300 px-2 py-1">
                Üyelik
              </Link>
              <Link href="/blog" className="hover:text-red-500 transition duration-300 px-2 py-1">
                Blog
              </Link>
              <Link href="/iletisim" className="hover:text-red-500 transition duration-300 px-2 py-1">
                İletişim
              </Link>
            </nav>
            
            {/* Masaüstü butolar */}
            <div className="hidden md:flex gap-2">
              <Link 
                href="/giris" 
                className="bg-transparent border border-white hover:bg-white hover:text-black transition duration-300 px-4 py-2 rounded text-sm"
              >
                Giriş Yap
              </Link>
              <Link 
                href="/kayit" 
                className="bg-red-600 hover:bg-red-700 transition duration-300 px-4 py-2 rounded text-sm"
              >
                Üye Ol
              </Link>
            </div>
          </div>
        </header>

        <main className="min-h-screen pb-16 md:pb-0">
          {children}
        </main>

        <MobileBottomNavbar />

        <footer className="bg-black text-white py-10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">FitLife Gym</h3>
                <p className="text-gray-300">
                  Profesyonel ekipman, uzman kadro ve çeşitli programlarla sağlıklı yaşam için yanınızdayız.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-4">Hızlı Erişim</h4>
                <ul className="space-y-2">
                  <li><Link href="/hakkimizda" className="text-gray-300 hover:text-white">Hakkımızda</Link></li>
                  <li><Link href="/programlar" className="text-gray-300 hover:text-white">Programlar</Link></li>
                  <li><Link href="/antrenorler" className="text-gray-300 hover:text-white">Antrenörler</Link></li>
                  <li><Link href="/sss" className="text-gray-300 hover:text-white">SSS</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4">İçerikler</h4>
                <ul className="space-y-2">
                  <li><Link href="/blog" className="text-gray-300 hover:text-white">Blog</Link></li>
                  <li><Link href="/galeri" className="text-gray-300 hover:text-white">Galeri</Link></li>
                  <li><Link href="/basari-hikayeleri" className="text-gray-300 hover:text-white">Başarı Hikayeleri</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4">İletişim</h4>
                <address className="text-gray-300 not-italic">
                  <p>Fitness Caddesi, No:123</p>
                  <p>Sağlık Mahallesi/İstanbul</p>
                  <p className="mt-2">Tel: (0212) 123 45 67</p>
                  <p>E-posta: info@fitlifegym.com</p>
                </address>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} FitLife Gym. Tüm hakları saklıdır.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
