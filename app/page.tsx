import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  // Öne çıkan programlar
  const featuredPrograms = [
    {
      id: 1,
      title: 'Güç ve Kondisyon',
      description: 'Fiziksel gücünüzü ve dayanıklılığınızı artırmaya yönelik kapsamlı antrenman programı.',
      icon: '💪',
    },
    {
      id: 2,
      title: 'Yoga & Pilates',
      description: 'Esneklik, denge ve zihinsel rahatlama için ideal derslerimizle kendinizi yenileyin.',
      icon: '🧘',
    },
    {
      id: 3,
      title: 'Cardio HIIT',
      description: 'Yüksek yoğunluklu interval antrenmanlarla maksimum kalori yakın ve formunuzu koruyun.',
      icon: '🔥',
    },
    {
      id: 4,
      title: 'Kişisel Antrenman',
      description: 'Uzman eğitmenler eşliğinde kişisel hedeflerinize özel programlarla sonuca ulaşın.',
      icon: '🎯',
    },
  ];

  // Güncel kampanyalar
  const promotions = [
    {
      id: 1,
      title: 'Yeni Üye Özel',
      description: 'İlk ay %50 indirim fırsatıyla hemen başlayın!',
      badge: 'SINIRLI SÜRE',
      color: 'bg-gradient-to-r from-orange-500 to-red-600',
    },
    {
      id: 2,
      title: 'Arkadaşını Getir',
      description: 'Arkadaşınızla üye olun, ikinci kişi %30 indirimli başlasın.',
      badge: 'KAMPANYA',
      color: 'bg-gradient-to-r from-blue-500 to-purple-600',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero.jpg"
            alt="FitLife Gym - Fitness Merkezi"
            fill
            className="object-cover animate-ken-burns blur-[2px]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40 opacity-80"></div>
        </div>

        <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10 text-white">
          <h1 className="text-4xl md:text-6xl font-bold max-w-3xl text-shadow">
            Daha Güçlü, Daha Sağlıklı, <span className="text-red-500">Daha İyi</span> Bir Yaşam
          </h1>
          <p className="mt-6 text-xl md:text-2xl max-w-2xl text-shadow">
            Modern ekipmanlar ve uzman kadromuzla hayalinizdeki forma kavuşun. 
            Sağlıklı yaşam için ilk adımı atın!
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/uyelik"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-md font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-red-500/30"
            >
              Üyelik Başlat
            </Link>
            <Link
              href="/programlar"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded-md font-bold text-lg transition-all duration-300"
            >
              Programları İncele
            </Link>
          </div>
        </div>
      </section>

      {/* Tanıtım özellikleri */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-4 text-2xl text-red-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6.5 6.5L17.5 17.5" />
                  <path d="M17.5 6.5L6.5 17.5" />
                  <circle cx="12" cy="12" r="9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">7/24 Açık</h3>
              <p className="text-gray-600">İstediğiniz saatte antrenman yapabilirsiniz. Size özel çalışma saatleri.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-4 text-2xl text-red-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L3 10h18L12 2z" />
                  <path d="M14 10v10H10v-10" />
                  <path d="M7 14h10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Modern Ekipman</h3>
              <p className="text-gray-600">En son teknoloji ile donatılmış salon ve ekipmanlarla antrenman yapın.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-4 text-2xl text-red-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="5" />
                  <path d="M20 21v-2a7 7 0 0 0-14 0v2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Uzman Eğitmenler</h3>
              <p className="text-gray-600">Sertifikalı ve tecrübeli eğitmenlerimizle hedeflerinize güvenli bir şekilde ulaşın.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Öne Çıkan Programlar */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Öne Çıkan Programlarımız</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              İster yeni başlıyor olun, ister profesyonel olun, hedeflerinize uygun programlarımızla 
              size özel çözümler sunuyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredPrograms.map((program) => (
              <div 
                key={program.id}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="text-4xl mb-4">{program.icon}</div>
                <h3 className="text-xl font-bold mb-3">{program.title}</h3>
                <p className="text-gray-600 mb-6">{program.description}</p>
                <Link
                  href={`/programlar#${program.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-red-600 font-medium hover:text-red-700 flex items-center"
                >
                  Detaylı Bilgi
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/programlar"
              className="inline-block border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-6 py-3 rounded-md font-medium transition-colors duration-300"
            >
              Tüm Programları Görüntüle
            </Link>
          </div>
        </div>
      </section>

      {/* Kampanyalar */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Güncel Kampanyalar</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Size özel hazırladığımız kampanyalarla formunuza kavuşmak için hemen harekete geçin!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {promotions.map((promo) => (
              <div 
                key={promo.id}
                className={`${promo.color} rounded-lg shadow-lg p-8 overflow-hidden relative`}
              >
                <div className="absolute top-3 right-3 bg-black/30 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {promo.badge}
                </div>
                <h3 className="text-2xl font-bold mb-3">{promo.title}</h3>
                <p className="text-white/80 mb-6">{promo.description}</p>
                <Link
                  href="/uyelik"
                  className="inline-block bg-white text-gray-900 hover:bg-gray-100 px-5 py-2 rounded font-medium transition-colors duration-300"
                >
                  Hemen Başvur
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Üyelik Çağrısı */}
      <section className="py-24 bg-cover bg-center relative" style={{backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(/images/hero.jpg)'}}>
        <div className="container mx-auto px-4 text-white text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Hayalinizdeki Vücuda Kavuşmaya Hazır mısınız?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-10">
            FitLife Gym ile dönüşümünüz başlıyor. Hemen üye olun ve profesyonel desteğimizle hedeflerinize ulaşın.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kayit"
              className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-md font-bold text-lg transition-colors duration-300 shadow-lg"
            >
              Hemen Üye Ol
            </Link>
            <Link
              href="/iletisim"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-black px-8 py-4 rounded-md font-bold text-lg transition-colors duration-300"
            >
              Bize Ulaşın
            </Link>
          </div>
        </div>
      </section>

      {/* Başarı Hikayeleri (Mini) */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Başarı Hikayeleri</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Üyelerimizin FitLife Gym ile başardıkları dönüşümleri keşfedin.
            </p>
          </div>

          <div className="flex flex-col md:flex-row p-8 bg-gray-50 rounded-xl shadow-sm">
            <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
              <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-300">
                <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="md:w-2/3 md:pl-8">
              <div className="flex mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <blockquote className="italic text-gray-600 mb-4">
                &quot;FitLife Gym&apos;e katıldıktan sonra sadece fiziksel görünüşüm değil, kendime olan güvenim de tamamen değişti. 
                6 ayda 18 kilo verdim ve hayatımda ilk kez bu kadar enerjik ve mutluyum!&quot;
              </blockquote>
              <p className="font-bold">Ayşe Y.</p>
              <p className="text-sm text-gray-500">3 Aylık Kilo Verme Programı</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/basari-hikayeleri"
              className="inline-flex items-center text-red-600 hover:text-red-700 font-medium"
            >
              Tüm Başarı Hikayelerini Görüntüle
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 