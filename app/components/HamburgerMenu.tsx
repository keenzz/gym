'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const menuItems = [
    { name: 'Ana Sayfa', href: '/' },
    { name: 'Hakkımızda', href: '/hakkimizda' },
    { name: 'Programlar', href: '/programlar' },
    { name: 'Antrenörler', href: '/antrenorler' },
    { name: 'Üyelik', href: '/uyelik' },
    { name: 'Blog', href: '/blog' },
    { name: 'İletişim', href: '/iletisim' }
  ];

  return (
    <div className="md:hidden">
      {/* Hamburger Icon */}
      <button 
        onClick={toggleMenu} 
        className="flex items-center p-2 focus:outline-none"
        aria-label="Menü"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor" 
          className="w-6 h-6"
        >
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Açılır Menü */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-95 flex flex-col">
          <div className="flex justify-between items-center p-4 border-b border-gray-800">
            <div className="text-2xl font-bold">
              <Link href="/" onClick={closeMenu}>
                FitLife Gym
              </Link>
            </div>
            <button 
              onClick={closeMenu} 
              className="p-2 focus:outline-none"
              aria-label="Menüyü Kapat"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <nav className="flex flex-col items-center justify-center flex-grow py-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`py-4 text-xl ${
                  pathname === item.href ? 'text-red-500 font-bold' : 'text-white hover:text-red-500'
                } transition duration-300`}
                onClick={closeMenu}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          <div className="flex justify-center gap-4 p-6 border-t border-gray-800">
            <Link
              href="/giris"
              className="bg-transparent border border-white hover:bg-white hover:text-black transition duration-300 px-6 py-2 rounded text-sm"
              onClick={closeMenu}
            >
              Giriş Yap
            </Link>
            <Link
              href="/kayit"
              className="bg-red-600 hover:bg-red-700 transition duration-300 px-6 py-2 rounded text-sm"
              onClick={closeMenu}
            >
              Üye Ol
            </Link>
          </div>
        </div>
      )}
    </div>
  );
} 