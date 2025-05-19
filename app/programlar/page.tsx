import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programlar ve Sınıflar | FitLife Gym",
  description: "FitLife Gym'de sunduğumuz tüm programlar, grup dersleri ve kişisel antrenman seçenekleri.",
};

const programsData = [
  {
    id: "fitness",
    title: "Fitness",
    description: "Genel vücut şekillendirme ve kuvvet çalışmaları",
    image: "https://images.pexels.com/photos/703016/pexels-photo-703016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    schedule: [
      { day: "Pazartesi", time: "08:00 - 21:00" },
      { day: "Salı", time: "08:00 - 21:00" },
      { day: "Çarşamba", time: "08:00 - 21:00" },
      { day: "Perşembe", time: "08:00 - 21:00" },
      { day: "Cuma", time: "08:00 - 21:00" },
      { day: "Cumartesi", time: "09:00 - 20:00" },
      { day: "Pazar", time: "10:00 - 18:00" },
    ]
  },
  {
    id: "yoga",
    title: "Yoga",
    description: "Zihin ve beden uyumu için yoga derslerimiz",
    image: "https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    schedule: [
      { day: "Pazartesi", time: "10:00, 18:00" },
      { day: "Çarşamba", time: "10:00, 18:00" },
      { day: "Cuma", time: "10:00, 17:00" },
      { day: "Cumartesi", time: "11:00" },
    ]
  },
  {
    id: "pilates",
    title: "Pilates",
    description: "Core kuvvetlendirme ve vücut dengesini sağlama",
    image: "https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    schedule: [
      { day: "Salı", time: "11:00, 19:00" },
      { day: "Perşembe", time: "11:00, 19:00" },
      { day: "Cumartesi", time: "13:00" },
    ]
  },
  {
    id: "zumba",
    title: "Zumba",
    description: "Eğlenceli dans hareketleriyle kalori yakma",
    image: "https://images.pexels.com/photos/3775566/pexels-photo-3775566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    schedule: [
      { day: "Pazartesi", time: "19:00" },
      { day: "Çarşamba", time: "19:00" },
      { day: "Cuma", time: "19:00" },
    ]
  },
  {
    id: "spinning",
    title: "Spinning",
    description: "Yüksek tempolu bisiklet dersleri",
    image: "https://images.pexels.com/photos/3757957/pexels-photo-3757957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    schedule: [
      { day: "Salı", time: "07:30, 18:30" },
      { day: "Perşembe", time: "07:30, 18:30" },
      { day: "Cumartesi", time: "10:00" },
    ]
  },
  {
    id: "crossfit",
    title: "Crossfit",
    description: "Fonksiyonel fitness ve yüksek yoğunluklu antrenman",
    image: "https://images.pexels.com/photos/28080/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    schedule: [
      { day: "Pazartesi", time: "07:00, 18:00" },
      { day: "Salı", time: "18:00" },
      { day: "Çarşamba", time: "07:00, 18:00" },
      { day: "Perşembe", time: "18:00" },
      { day: "Cuma", time: "07:00, 17:00" },
    ]
  },
];

const personalTrainingData = [
  {
    title: "Bireysel Antrenman",
    description: "Birebir çalışmalarla hedeflerinize daha hızlı ulaşın",
    features: [
      "Kişiselleştirilmiş antrenman programı",
      "Birebir antrenör desteği",
      "Detaylı vücut analizi",
      "Beslenme danışmanlığı",
      "Esnek zamanlama"
    ]
  },
  {
    title: "Küçük Grup Antrenmanı",
    description: "2-4 kişilik gruplarla motivasyon dolu çalışmalar",
    features: [
      "Arkadaşlarınızla birlikte antrenman yapma fırsatı",
      "Ekonomik birebir antrenman alternatifi",
      "Grup motivasyonu",
      "Kişiye özel ilgi",
      "Esnek zamanlama"
    ]
  },
  {
    title: "Performans Antrenmanı",
    description: "Sporculara ve atletlere özel antrenman programları",
    features: [
      "Spor dalına özel çalışmalar",
      "Performans testleri",
      "Periyodizasyon planlaması",
      "Sakatlık önleme çalışmaları",
      "Spor beslenmesi danışmanlığı"
    ]
  },
];

const specialProgramsData = [
  {
    title: "Kilo Verme Programı",
    description: "Etkili ve sağlıklı kilo verme için özel program",
    duration: "8-12 Hafta",
    features: [
      "Metabolizmayı hızlandıran egzersizler",
      "Düzenli vücut ölçümleri",
      "Beslenme planı",
      "Haftalık takip görüşmeleri"
    ]
  },
  {
    title: "Kas Kazanma Programı",
    description: "Kas kütlenizi artırmanız için tasarlanmış program",
    duration: "12-16 Hafta",
    features: [
      "Hipertrofi odaklı antrenmanlar",
      "Progresif yüklenme teknikleri",
      "Kas gelişimine özel beslenme planı",
      "Takviye önerileri"
    ]
  },
  {
    title: "Hamilelik Sonrası Fitness",
    description: "Doğum sonrası formunuza güvenle kavuşun",
    duration: "12 Hafta",
    features: [
      "Pelvik taban egzersizleri",
      "Kademeli ilerleyen program",
      "Anne-bebek egzersizleri",
      "Diyetisyen desteği"
    ]
  },
  {
    title: "Yaşlı Sağlığı Programı",
    description: "İleri yaş grubu için özel hazırlanmış egzersizler",
    duration: "Sürekli",
    features: [
      "Eklem dostu hareketler",
      "Denge ve koordinasyon çalışmaları",
      "Düşük yoğunluklu kardiyovasküler egzersizler",
      "Fizyoterapist gözetimi"
    ]
  }
];

export default function ProgramsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-black to-gray-900 text-white">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src="https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="FitLife Gym Programlar"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Programlar ve Sınıflar</h1>
          <p className="text-xl max-w-3xl mx-auto text-center">
            Her seviyeye ve hedefe uygun programlarımızla size en uygun fitness deneyimini yaşayın.
          </p>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <nav className="flex flex-wrap justify-center gap-4 text-lg">
            <a href="#grup-dersleri" className="px-4 py-2 hover:text-red-600 transition duration-300">Grup Dersleri</a>
            <a href="#kisisel-antrenman" className="px-4 py-2 hover:text-red-600 transition duration-300">Kişisel Antrenman</a>
            <a href="#ozel-programlar" className="px-4 py-2 hover:text-red-600 transition duration-300">Özel Programlar</a>
            <a href="#program-takvimi" className="px-4 py-2 hover:text-red-600 transition duration-300">Program Takvimi</a>
          </nav>
        </div>
      </section>

      {/* Group Classes */}
      <section id="grup-dersleri" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Grup Dersleri</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programsData.map((program) => (
              <div key={program.id} id={program.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative h-60">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2">{program.title}</h3>
                  <p className="text-gray-600 mb-4">
                    {program.description}
                  </p>
                  <button className="text-white bg-red-600 hover:bg-red-700 transition duration-300 px-4 py-2 rounded text-sm">
                    Rezervasyon Yap
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Training */}
      <section id="kisisel-antrenman" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Kişisel Antrenman Seçenekleri</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {personalTrainingData.map((training, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-3">{training.title}</h3>
                <p className="text-gray-600 mb-6">{training.description}</p>
                <h4 className="font-semibold mb-2">Özellikler:</h4>
                <ul className="space-y-2 text-gray-600 mb-6">
                  {training.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <svg className="h-5 w-5 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="text-white bg-red-600 hover:bg-red-700 transition duration-300 px-4 py-2 rounded text-sm">
                  Detaylı Bilgi
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/antrenorler" 
              className="inline-flex items-center text-red-600 hover:text-red-700 font-medium"
            >
              Antrenörlerimizi Tanıyın
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Special Programs */}
      <section id="ozel-programlar" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Özel Programlar</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {specialProgramsData.map((program, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                <p className="text-gray-500 mb-4">Süre: {program.duration}</p>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <h4 className="font-semibold mb-2">Program İçeriği:</h4>
                <ul className="space-y-2 text-gray-600 mb-6">
                  {program.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <svg className="h-5 w-5 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="text-white bg-red-600 hover:bg-red-700 transition duration-300 px-4 py-2 rounded text-sm">
                  Program Danışmanına Ulaşın
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Weekly Schedule */}
      <section id="program-takvimi" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Haftalık Program Takvimi</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-md">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="py-3 px-4 text-left">Program</th>
                  <th className="py-3 px-4 text-left">Pazartesi</th>
                  <th className="py-3 px-4 text-left">Salı</th>
                  <th className="py-3 px-4 text-left">Çarşamba</th>
                  <th className="py-3 px-4 text-left">Perşembe</th>
                  <th className="py-3 px-4 text-left">Cuma</th>
                  <th className="py-3 px-4 text-left">Cumartesi</th>
                  <th className="py-3 px-4 text-left">Pazar</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {programsData.map((program, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="py-3 px-4 font-medium">{program.title}</td>
                    {['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar'].map((day, i) => {
                      const scheduleForDay = program.schedule.find(s => s.day === day);
                      return (
                        <td key={i} className="py-3 px-4">
                          {scheduleForDay ? scheduleForDay.time : '-'}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-8 text-center text-gray-600">
            <p>* Ders saatlerinde değişiklik olabilir, lütfen güncel bilgi için resepsiyonu arayınız.</p>
            <p>* Grup derslerine katılım için önceden rezervasyon yapılması gerekmektedir.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-black to-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Hemen Başlayın</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Size en uygun programı seçin ve sağlıklı yaşam yolculuğunuza bugün başlayın.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/iletisim" 
              className="bg-red-600 hover:bg-red-700 transition duration-300 px-8 py-3 rounded-md text-lg font-medium"
            >
              Ücretsiz Deneme Dersi
            </Link>
            <Link 
              href="/uyelik" 
              className="bg-transparent border border-white hover:bg-white hover:text-black transition duration-300 px-8 py-3 rounded-md text-lg font-medium"
            >
              Üyelik Paketleri
            </Link>
          </div>
        </div>
      </section>
    </>
  );
} 