import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hakkımızda | FitLife Gym",
  description: "FitLife Gym'in hikayesi, değerleri ve misyonu hakkında bilgi edinin.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-black to-gray-900 text-white">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src="/about-hero.jpg"
            alt="FitLife Gym Hakkımızda"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Hakkımızda</h1>
          <p className="text-xl max-w-3xl mx-auto text-center">
            2010 yılından beri sağlıklı yaşamı destekleyen ve kaliteli hizmet sunan bir spor salonu olarak hizmetinizdeyiz.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Hikayemiz</h2>
              <p className="text-gray-600 mb-4">
                FitLife Gym, 2010 yılında spor tutkunu ve sağlıklı yaşam savunucusu Ahmet Yılmaz tarafından kurulmuştur. Başlangıçta küçük bir stüdyo olarak hizmet veren FitLife, zamanla büyüyerek şehrin en kapsamlı ve modern spor merkezlerinden biri haline gelmiştir.
              </p>
              <p className="text-gray-600 mb-4">
                Kurulduğumuz günden bu yana temel değerlerimiz değişmedi: Kaliteli ekipmanlar, profesyonel eğitmenler ve kişiye özel yaklaşım ile üyelerimize en iyi hizmeti sunmak.
              </p>
              <p className="text-gray-600">
                Bugün, 5000'den fazla üyemizle birlikte büyümeye ve gelişmeye devam ediyoruz. FitLife ailesi olarak, herkesin sağlıklı bir yaşam sürdürmesine yardımcı olmayı amaçlıyoruz.
              </p>
            </div>
            <div className="relative h-96 overflow-hidden rounded-lg shadow-xl">
              <Image 
                src="/about-story.jpg" 
                alt="FitLife Gym&apos;in kuruluş hikayesi" 
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Misyonumuz ve Vizyonumuz</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="inline-flex justify-center items-center w-16 h-16 bg-red-600 text-white rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Misyonumuz</h3>
              <p className="text-gray-600">
                İnsanların yaşam kalitesini artırmak için onlara sağlıklı yaşam alışkanlıkları kazandırmak, sporu hayatlarının bir parçası haline getirmelerine yardımcı olmak ve her bireyin kendi potansiyelini keşfetmesini sağlamak.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="inline-flex justify-center items-center w-16 h-16 bg-red-600 text-white rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Vizyonumuz</h3>
              <p className="text-gray-600">
                Türkiye&apos;nin en güvenilir ve kaliteli spor salonu markası olmak, sürekli yenilenen ekipmanlar ve programlarla sektöre öncülük etmek ve her yaştan bireyin kolayca ulaşabileceği spor imkanları sunmak.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Değerlerimiz</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="inline-flex justify-center items-center w-16 h-16 bg-red-600 text-white rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Topluluk</h3>
              <p className="text-gray-600">
                Birlikte çalışan, birbirini motive eden ve destekleyen bir topluluk oluşturmayı önemsiyoruz.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="inline-flex justify-center items-center w-16 h-16 bg-red-600 text-white rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Kalite</h3>
              <p className="text-gray-600">
                En iyi ekipmanları ve en nitelikli eğitmenleri sunarak kaliteden asla taviz vermiyoruz.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="inline-flex justify-center items-center w-16 h-16 bg-red-600 text-white rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Tutku</h3>
              <p className="text-gray-600">
                Sağlıklı yaşam ve fitness konusundaki tutkumuz, her üyemize ilham veriyor ve motivasyon sağlıyor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Equipment */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Tesisimiz ve Ekipmanlarımız</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Modern Tesisimiz</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  1500 m² spor alanı
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Grup dersleri için 3 özel studio
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Lüks duş ve soyunma odaları
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Sauna ve buhar odası
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Protein bar ve dinlenme alanı
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Ekipmanlarımız</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  En son teknoloji kardiyovasküler ekipmanlar
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Geniş serbest ağırlık bölgesi
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Hammer Strength ve Life Fitness marka makineler
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Fonksiyonel antrenman alanı (TRX, battle ropes, vb.)
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Yoga ve pilates ekipmanları
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-black to-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">FitLife Ailesine Katılın</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Profesyonel ekipmanlarımız ve uzman kadromuzla sağlıklı yaşamınıza katkı sunmaya hazırız.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/uyelik" 
              className="bg-red-600 hover:bg-red-700 transition duration-300 px-8 py-3 rounded-md text-lg font-medium"
            >
              Üyelik Paketleri
            </Link>
            <Link 
              href="/iletisim" 
              className="bg-transparent border border-white hover:bg-white hover:text-black transition duration-300 px-8 py-3 rounded-md text-lg font-medium"
            >
              İletişime Geçin
            </Link>
          </div>
        </div>
      </section>
    </>
  );
} 