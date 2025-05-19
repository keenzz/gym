import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Antrenörler | FitLife Gym",
  description: "Uzman antrenör kadromuz ve onların uzmanlık alanları hakkında bilgi edinin.",
};

const trainersData = [
  {
    id: 1,
    name: "Mehmet Yılmaz",
    title: "Baş Antrenör",
    image: "https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    specialties: ["Vücut Geliştirme", "Fonksiyonel Antrenman", "Kuvvet ve Kondisyon"],
    experience: "15 yıl",
    certifications: ["NASM CPT", "CrossFit Level 2", "TRX Master Trainer"],
    education: "Spor Bilimleri Fakültesi - Beden Eğitimi ve Spor Öğretmenliği",
    bio: "Mehmet, 15 yıllık deneyimi ile fitness ve vücut geliştirme alanlarında uzmanlaşmış bir antrenördür. Birçok vücut geliştirme yarışmasında derece almış ve profesyonel sporculara koçluk yapmıştır. Kişiye özel programlar hazırlamada ve motivasyon sağlamada uzmanlaşmıştır."
  },
  {
    id: 2,
    name: "Ayşe Demir",
    title: "Pilates ve Yoga Uzmanı",
    image: "https://images.pexels.com/photos/5384538/pexels-photo-5384538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    specialties: ["Pilates", "Yoga", "Zihin-Beden Egzersizleri"],
    experience: "10 yıl",
    certifications: ["PMA Certified Pilates Teacher", "Yoga Alliance RYT-500", "Pre/Post Natal Fitness"],
    education: "Fizyoterapi ve Rehabilitasyon Bölümü",
    bio: "Ayşe, pilates ve yoga alanlarında uzmanlaşmış, fizyoterapi geçmişi ile hareket kalitesine öncelik veren bir eğitmendir. Hamile kadınlar ve rehabilitasyon gerektiren özel durumlar için tasarlanmış programlar konusunda deneyimlidir."
  },
  {
    id: 3,
    name: "Kemal Şahin",
    title: "CrossFit ve Fonksiyonel Antrenman Uzmanı",
    image: "https://images.pexels.com/photos/6456210/pexels-photo-6456210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    specialties: ["CrossFit", "HIIT", "Olimpik Kaldırışlar"],
    experience: "8 yıl",
    certifications: ["CrossFit Level 3 Trainer", "USAW Sports Performance Coach", "Functional Movement Specialist"],
    education: "Spor Bilimleri Fakültesi - Antrenörlük Eğitimi",
    bio: "Kemal, yüksek yoğunluklu interval antrenmanlar ve CrossFit konusunda uzmanlaşmış, enerji dolu bir koçtur. Özellikle sporcu performansını arttırma ve fonksiyonel fitness üzerine odaklanmaktadır."
  },
  {
    id: 4,
    name: "Zeynep Kaya",
    title: "Beslenme Uzmanı ve Fitness Koçu",
    image: "https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    specialties: ["Beslenme Danışmanlığı", "Kilo Yönetimi", "Fitness Programlama"],
    experience: "7 yıl",
    certifications: ["Diyetisyen", "ACE Certified Personal Trainer", "Precision Nutrition Level 2"],
    education: "Beslenme ve Diyetetik Bölümü",
    bio: "Zeynep, beslenme ve fitness alanlarındaki uzmanlığını birleştirerek, danışanlarına hem fiziksel aktivite hem de beslenme programları sunmaktadır. Özellikle kilo vermek ve sağlıklı bir yaşam tarzı geliştirmek isteyenlerle çalışmada başarılıdır."
  },
  {
    id: 5,
    name: "Ali Özkan",
    title: "Performans Antrenörü",
    image: "https://images.pexels.com/photos/3912944/pexels-photo-3912944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    specialties: ["Sporcu Performansı", "Atletik Antrenman", "Rehabilitasyon"],
    experience: "12 yıl",
    certifications: ["CSCS (Certified Strength and Conditioning Specialist)", "EXOS Performance Specialist", "TPI Fitness Professional"],
    education: "Egzersiz Fizyolojisi Yüksek Lisans",
    bio: "Ali, profesyonel ve amatör sporcularla çalışma konusunda geniş deneyime sahip bir performans antrenörüdür. Sakatlık sonrası rehabilitasyon ve performans geliştirme konularında uzmanlaşmıştır."
  },
  {
    id: 6,
    name: "Elif Yıldız",
    title: "Grup Dersleri Koordinatörü",
    image: "https://images.pexels.com/photos/3768915/pexels-photo-3768915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    specialties: ["Zumba", "Dans Fitness", "Aerobik"],
    experience: "9 yıl",
    certifications: ["Zumba Fitness Instructor", "Les Mills Body Combat", "AFAA Group Fitness Instructor"],
    education: "Modern Dans ve Performans Sanatları",
    bio: "Elif, enerji dolu ve motive edici tarzıyla grup derslerinde öne çıkan bir eğitmendir. Dans geçmişini fitness ile birleştirerek eğlenceli ve etkili antrenmanlar tasarlamaktadır."
  }
];

export default function TrainersPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-black to-gray-900 text-white">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src="https://images.pexels.com/photos/6456303/pexels-photo-6456303.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="FitLife Gym Antrenörler"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Antrenör Kadromuz</h1>
          <p className="text-xl max-w-3xl mx-auto text-center">
            Uzman eğitmenlerimiz, hedeflerinize ulaşmanızda size rehberlik etmek için burada.
          </p>
        </div>
      </section>

      {/* Trainers Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainersData.map((trainer) => (
              <div key={trainer.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-80">
                  <Image
                    src={trainer.image}
                    alt={trainer.name}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-1">{trainer.name}</h2>
                  <h3 className="text-red-600 font-medium mb-4">{trainer.title}</h3>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Uzmanlık Alanları:</h4>
                    <div className="flex flex-wrap gap-2">
                      {trainer.specialties.map((specialty, index) => (
                        <span 
                          key={index} 
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{trainer.bio}</p>
                  
                  <button className="text-white bg-red-600 hover:bg-red-700 transition duration-300 px-4 py-2 rounded text-sm">
                    Randevu Al
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Trainers */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Neden Antrenörlerimiz?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="inline-flex justify-center items-center w-16 h-16 bg-red-600 text-white rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Sertifikalı Uzmanlar</h3>
              <p className="text-gray-600">
                Tüm antrenörlerimiz, alanlarında uluslararası geçerliliğe sahip sertifikalara ve geniş deneyime sahiptir.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="inline-flex justify-center items-center w-16 h-16 bg-red-600 text-white rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Sürekli Eğitim</h3>
              <p className="text-gray-600">
                Antrenörlerimiz, fitness dünyasındaki en son trendleri ve bilimsel gelişmeleri takip etmek için sürekli eğitimlerine devam ederler.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="inline-flex justify-center items-center w-16 h-16 bg-red-600 text-white rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Kişisel İlgi</h3>
              <p className="text-gray-600">
                Her üyemizin ihtiyaçları farklıdır. Antrenörlerimiz, kişiselleştirilmiş antrenman ve beslenme programları ile size özel yaklaşım sunarlar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trainer Details Accordion */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Antrenörlerimiz Hakkında Daha Fazla Bilgi</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {trainersData.map((trainer) => (
              <details key={trainer.id} className="bg-white p-6 rounded-lg shadow-md group">
                <summary className="list-none flex justify-between items-center cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden relative">
                      <Image 
                        src={trainer.image} 
                        alt={trainer.name} 
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div>
                      <h3 className="font-bold">{trainer.name}</h3>
                      <p className="text-red-600">{trainer.title}</p>
                    </div>
                  </div>
                  <svg className="w-5 h-5 transition-transform group-open:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="mt-4 pt-4 border-t">
                  <div className="mb-3">
                    <span className="font-semibold">Deneyim:</span> {trainer.experience}
                  </div>
                  <div className="mb-3">
                    <span className="font-semibold">Eğitim:</span> {trainer.education}
                  </div>
                  <div className="mb-3">
                    <span className="font-semibold">Sertifikalar:</span>
                    <ul className="list-disc list-inside ml-2 mt-1">
                      {trainer.certifications.map((cert, i) => (
                        <li key={i} className="text-gray-600">{cert}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-4">
                    <button className="text-white bg-red-600 hover:bg-red-700 transition duration-300 px-4 py-2 rounded text-sm">
                      {trainer.name} ile Randevu Al
                    </button>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Ekibimize Katılın</h2>
            <p className="text-gray-600 mb-6 text-center">
              FitLife Gym, tutkulu ve deneyimli fitness profesyonellerini ekibine katmaktan mutluluk duyar. Siz de ekibimizin bir parçası olmak isterseniz, özgeçmişinizi gönderin.
            </p>
            <div className="text-center">
              <Link 
                href="/iletisim?subject=Kariyer"
                className="inline-flex items-center text-red-600 hover:text-red-700 font-medium"
              >
                Kariyer Fırsatları Hakkında Bilgi Alın
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-black to-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Uzman Antrenörlerimizle Tanışın</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Ücretsiz tanışma dersinizi rezerve edin ve antrenörlerimizin rehberliğinde fitness yolculuğunuza başlayın.
          </p>
          <Link 
            href="/iletisim"
            className="bg-red-600 hover:bg-red-700 transition duration-300 px-8 py-3 rounded-md text-lg font-medium"
          >
            Ücretsiz Danışma Randevusu Alın
          </Link>
        </div>
      </section>
    </>
  );
} 