import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Üyelik ve Fiyatlandırma | FitLife Gym",
  description: "FitLife Gym üyelik paketleri, fiyatları ve avantajları hakkında bilgi edinin.",
};

const membershipPlans = [
  {
    id: "basic",
    name: "Temel Üyelik",
    price: "299 ₺",
    period: "aylık",
    features: [
      "Fitness ekipmanlarına tam erişim",
      "Soyunma odası ve duş kullanımı",
      "Ücretsiz otopark",
      "FitLife mobil uygulaması",
      "Hafta içi 08:00-22:00 erişim"
    ],
    notIncluded: ["Grup dersleri", "Kişisel antrenör", "Havuz ve sauna", "Beslenme danışmanlığı"],
    popular: false,
    commitment: "12 ay",
    color: "gray"
  },
  {
    id: "standard",
    name: "Standart Üyelik",
    price: "399 ₺",
    period: "aylık",
    features: [
      "Fitness ekipmanlarına tam erişim",
      "Haftalık 5 grup dersi katılımı",
      "Soyunma odası ve duş kullanımı",
      "Havuz ve sauna (haftada 2 kez)",
      "Ücretsiz otopark",
      "FitLife mobil uygulaması",
      "Hafta içi ve cumartesi tüm gün erişim"
    ],
    notIncluded: ["Kişisel antrenör", "Beslenme danışmanlığı"],
    popular: true,
    commitment: "6 ay",
    color: "red"
  },
  {
    id: "premium",
    name: "Premium Üyelik",
    price: "599 ₺",
    period: "aylık",
    features: [
      "Fitness ekipmanlarına tam erişim",
      "Sınırsız grup dersi katılımı",
      "Soyunma odası ve duş kullanımı",
      "Havuz ve sauna (sınırsız)",
      "Ayda 2 kişisel antrenman seansı",
      "Temel beslenme danışmanlığı",
      "Özel dinlenme alanı",
      "Ücretsiz otopark",
      "FitLife mobil uygulaması",
      "7/24 erişim"
    ],
    notIncluded: [],
    popular: false,
    commitment: "3 ay",
    color: "black"
  }
];

const additionalServices = [
  {
    name: "Kişisel Antrenman",
    price: "350 ₺",
    period: "seans",
    description: "Birebir çalışma ile hedeflerinize daha hızlı ulaşın",
    options: [
      { name: "Tek Seans", price: "350 ₺" },
      { name: "5 Seans Paketi", price: "1.600 ₺", discount: "Seans başı 320 ₺" },
      { name: "10 Seans Paketi", price: "3.000 ₺", discount: "Seans başı 300 ₺" }
    ]
  },
  {
    name: "Beslenme Danışmanlığı",
    price: "400 ₺",
    period: "aylık",
    description: "Kişiye özel beslenme planı ve düzenli takip",
    options: [
      { name: "İlk Görüşme", price: "250 ₺" },
      { name: "Aylık Plan ve Takip", price: "400 ₺" },
      { name: "3 Aylık Paket", price: "1.000 ₺", discount: "Ay başı 333 ₺" }
    ]
  },
  {
    name: "Vücut Analizi",
    price: "150 ₺",
    period: "test",
    description: "Detaylı vücut kompozisyonu ölçümü ve değerlendirme",
    options: [
      { name: "Tek Ölçüm", price: "150 ₺" },
      { name: "Aylık Ölçüm (3 Ay)", price: "350 ₺", discount: "Ölçüm başı 116 ₺" }
    ]
  }
];

const membershipBenefits = [
  {
    title: "Kaliteli Ekipman",
    description: "En son teknoloji fitness ekipmanları ile antrenmanlarınızı verimli bir şekilde yapın.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Çeşitli Grup Dersleri",
    description: "Yoga'dan HIIT'e kadar çeşitli grup derslerimizle motivasyonunuzu yüksek tutun.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    title: "Uzman Kadro",
    description: "Deneyimli ve sertifikalı eğitmenlerimiz ile doğru teknik ve motivasyon desteği alın.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    )
  },
  {
    title: "Esnek Saatler",
    description: "Yoğun programınıza uyum sağlayan esnek çalışma saatleri ve 7/24 erişim seçeneği.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Ücretsiz Otopark",
    description: "Geniş ve güvenli otopark alanı ile park sorunu yaşamadan antrenmanlarınıza odaklanın.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Mobil Uygulama",
    description: "FitLife mobil uygulaması ile ders rezervasyonu yapın ve gelişiminizi takip edin.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    )
  }
];

export default function MembershipPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-black to-gray-900 text-white">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src="https://images.pexels.com/photos/3253501/pexels-photo-3253501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="FitLife Gym Üyelik"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Üyelik Paketleri</h1>
          <p className="text-xl max-w-3xl mx-auto text-center">
            Size en uygun üyelik paketini seçin ve sağlıklı yaşam yolculuğunuza hemen başlayın.
          </p>
        </div>
      </section>

      {/* Membership Plans */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Üyelik Seçeneklerimiz</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {membershipPlans.map((plan) => (
              <div 
                key={plan.id} 
                className={`bg-white rounded-lg overflow-hidden shadow-lg border-t-4 ${
                  plan.popular 
                    ? 'border-red-600 transform -translate-y-2 scale-105' 
                    : `border-${plan.color}-500`
                }`}
              >
                {plan.popular && (
                  <div className="bg-red-600 text-white text-center py-1 text-sm font-semibold">
                    En Popüler
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-gray-500">/{plan.period}</span>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm">
                    {plan.commitment} taahhüt ile
                  </p>
                  <hr className="my-6" />
                  <h4 className="font-semibold mb-2">Üyeliğe Dahil:</h4>
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-600">
                        <svg className="h-5 w-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {plan.notIncluded.length > 0 && (
                    <>
                      <h4 className="font-semibold mb-2">Üyeliğe Dahil Değil:</h4>
                      <ul className="space-y-2 mb-6">
                        {plan.notIncluded.map((feature, i) => (
                          <li key={i} className="flex items-center text-gray-500">
                            <svg className="h-5 w-5 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                  
                  <button className={`w-full text-white bg-${plan.popular ? 'red' : plan.color}-600 hover:bg-${plan.popular ? 'red' : plan.color}-700 transition duration-300 px-6 py-3 rounded text-center font-medium`}>
                    Hemen Üye Ol
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10 text-gray-600">
            <p>* Tüm fiyatlarımıza KDV dahildir.</p>
            <p>* Paket koşulları ve fiyatları değişiklik gösterebilir, güncel bilgi için resepsiyonumuza danışabilirsiniz.</p>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Ek Hizmetlerimiz</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2">{service.name}</h3>
                  <div className="mb-4">
                    <span className="text-2xl font-bold">{service.price}</span>
                    <span className="text-gray-500">/{service.period}</span>
                  </div>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <hr className="my-4" />
                  <h4 className="font-semibold mb-4">Seçenekler:</h4>
                  <ul className="space-y-4">
                    {service.options.map((option, i) => (
                      <li key={i} className="flex justify-between">
                        <span className="font-medium">{option.name}</span>
                        <div className="text-right">
                          <span className="font-bold">{option.price}</span>
                          {option.discount && (
                            <p className="text-sm text-green-600">{option.discount}</p>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-6 pb-6">
                  <button className="w-full text-white bg-red-600 hover:bg-red-700 transition duration-300 px-4 py-2 rounded text-sm font-medium">
                    Detaylı Bilgi
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Üyelik Avantajları</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {membershipBenefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md flex">
                <div className="mr-4 text-red-600">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Sıkça Sorulan Sorular</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <details className="bg-white p-6 rounded-lg shadow-md">
              <summary className="font-bold text-lg cursor-pointer">Üyelik sözleşmesini nasıl iptal edebilirim?</summary>
              <div className="mt-4 text-gray-600">
                <p>
                  Üyelik sözleşmenizi iptal etmek için, taahhüt sürenizin dolmasına en az 30 gün kala resepsiyonumuza yazılı başvuru yapmanız gerekmektedir. Taahhüt süreniz dolmadan önce iptal talebinde bulunursanız, kalan süre için bir iptal ücreti uygulanabilir.
                </p>
              </div>
            </details>
            
            <details className="bg-white p-6 rounded-lg shadow-md">
              <summary className="font-bold text-lg cursor-pointer">Üyeliğimi dondurabilir miyim?</summary>
              <div className="mt-4 text-gray-600">
                <p>
                  Evet, üyeliğinizi yılda en fazla 2 kez, toplamda 60 günü aşmayacak şekilde dondurabilirsiniz. Bunun için sağlık raporu veya seyahat belgesi gibi resmi bir belge sunmanız gerekebilir. Dondurma taleplerinizi en az 7 gün öncesinden bildirmeniz gerekmektedir.
                </p>
              </div>
            </details>
            
            <details className="bg-white p-6 rounded-lg shadow-md">
              <summary className="font-bold text-lg cursor-pointer">Paketimi yükseltebilir miyim?</summary>
              <div className="mt-4 text-gray-600">
                <p>
                  Evet, mevcut paketinizi daha yüksek bir pakete herhangi bir zaman yükseltebilirsiniz. Yükseltme işlemi için fiyat farkını ödemeniz yeterlidir. Paket yükseltme işlemi için resepsiyonumuza başvurabilirsiniz.
                </p>
              </div>
            </details>
            
            <details className="bg-white p-6 rounded-lg shadow-md">
              <summary className="font-bold text-lg cursor-pointer">Üyeliğimi başkasına devredebilir miyim?</summary>
              <div className="mt-4 text-gray-600">
                <p>
                  Hayır, üyelikler kişiseldir ve başka birine devredilemez. Her üye kendi adına kayıt yaptırmak ve kendi üyelik sözleşmesini imzalamak zorundadır.
                </p>
              </div>
            </details>
            
            <details className="bg-white p-6 rounded-lg shadow-md">
              <summary className="font-bold text-lg cursor-pointer">Grup derslerine katılmak için ek ücret ödemem gerekiyor mu?</summary>
              <div className="mt-4 text-gray-600">
                <p>
                  Bu, seçtiğiniz üyelik paketine bağlıdır. Temel Üyelik paketinde grup dersleri dahil değildir ve katılım için ek ücret ödemeniz gerekir. Standart Üyelik paketinde haftalık 5 grup dersine, Premium Üyelik paketinde ise sınırsız grup dersine katılabilirsiniz.
                </p>
              </div>
            </details>
          </div>
          
          <div className="text-center mt-10">
            <Link 
              href="/sss" 
              className="inline-flex items-center text-red-600 hover:text-red-700 font-medium"
            >
              Tüm Soruları Görüntüle
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Membership Form */}
      <section className="py-16 bg-gradient-to-r from-black to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Üyelik Başvuru Formu</h2>
            
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block mb-2">
                  Adınız
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-red-500"
                />
              </div>
              
              <div>
                <label htmlFor="lastName" className="block mb-2">
                  Soyadınız
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-red-500"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2">
                  E-posta Adresiniz
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-red-500"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block mb-2">
                  Telefon Numaranız
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-red-500"
                />
              </div>
              
              <div className="md:col-span-2">
                <label htmlFor="membership" className="block mb-2">
                  İlgilendiğiniz Üyelik Paketi
                </label>
                <select
                  id="membership"
                  className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-red-500"
                >
                  <option value="">Seçiniz</option>
                  {membershipPlans.map(plan => (
                    <option key={plan.id} value={plan.id}>
                      {plan.name} ({plan.price}/{plan.period})
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="md:col-span-2">
                <label htmlFor="message" className="block mb-2">
                  Mesajınız (İsteğe bağlı)
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-red-500"
                ></textarea>
              </div>
              
              <div className="md:col-span-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="terms"
                    className="mr-2"
                  />
                  <label htmlFor="terms">
                    <a href="#" className="text-red-400 hover:text-red-300">Üyelik koşulları</a>nı okudum ve kabul ediyorum
                  </label>
                </div>
              </div>
              
              <div className="md:col-span-2 text-center mt-6">
                <button
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 transition duration-300 px-8 py-3 rounded-md text-lg font-medium"
                >
                  Başvuru Gönder
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Free Trial CTA */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Karar vermekte zorlanıyor musunuz?</h2>
          <p className="text-lg text-gray-600 mb-6">
            Tesisimizi ve hizmetlerimizi ücretsiz deneyimleyin.
          </p>
          <Link 
            href="/iletisim" 
            className="inline-block bg-red-600 hover:bg-red-700 transition duration-300 px-6 py-3 rounded text-white font-medium"
          >
            Ücretsiz Deneme Dersi Alın
          </Link>
        </div>
      </section>
    </>
  );
} 