import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | FitLife Gym",
  description: "Fitness, beslenme ve sağlıklı yaşam hakkında bilgi edinebileceğiniz blog yazılarımız.",
};

const blogPosts = [
  {
    id: 1,
    title: "Evde Yapabileceğiniz 5 Etkili Egzersiz",
    slug: "evde-yapabileceginiz-5-etkili-egzersiz",
    excerpt: "Spor salonuna gitmeden evde yapabileceğiniz ve tüm vücudunuzu çalıştıracak etkili egzersizler.",
    image: "https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Egzersiz",
    author: "Mehmet Yılmaz",
    authorImage: "https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "15 Ocak 2023",
    readTime: "5 dakika"
  },
  {
    id: 2,
    title: "Kilo Vermeyi Destekleyen 7 Süper Besin",
    slug: "kilo-vermeyi-destekleyen-7-super-besin",
    excerpt: "Metabolizmanızı hızlandıran ve kilo verme sürecinize destek olacak süper besinleri keşfedin.",
    image: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Beslenme",
    author: "Zeynep Kaya",
    authorImage: "https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "2 Şubat 2023",
    readTime: "7 dakika"
  },
  {
    id: 3,
    title: "Doğru Koşu Tekniği Nasıl Olmalı?",
    slug: "dogru-kosu-teknigi-nasil-olmali",
    excerpt: "Sakatlanma riskinizi azaltacak ve performansınızı artıracak doğru koşu teknikleri.",
    image: "https://images.pexels.com/photos/2803158/pexels-photo-2803158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Egzersiz",
    author: "Ali Özkan",
    authorImage: "https://images.pexels.com/photos/3912944/pexels-photo-3912944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "18 Şubat 2023",
    readTime: "6 dakika"
  },
  {
    id: 4,
    title: "Stres ve Anksiyete ile Mücadelede Yoga",
    slug: "stres-ve-anksiyete-ile-mucadelede-yoga",
    excerpt: "Modern hayatın getirdiği stres ve anksiyete ile baş etmek için yoga nasıl yardımcı olabilir?",
    image: "https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Yoga",
    author: "Ayşe Demir",
    authorImage: "https://images.pexels.com/photos/5384538/pexels-photo-5384538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "5 Mart 2023",
    readTime: "8 dakika"
  },
  {
    id: 5,
    title: "Kas Kütlesi Kazanmak İçin Beslenme İpuçları",
    slug: "kas-kutlesi-kazanmak-icin-beslenme-ipuclari",
    excerpt: "Kas kazanmak ve güçlenmek için uygulamanız gereken temel beslenme stratejileri.",
    image: "https://images.pexels.com/photos/1547248/pexels-photo-1547248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Beslenme",
    author: "Zeynep Kaya",
    authorImage: "https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "20 Mart 2023",
    readTime: "9 dakika"
  },
  {
    id: 6,
    title: "Kardiyo mu, Kuvvet Antrenmanı mı? Hangisi Daha Etkili?",
    slug: "kardiyo-mu-kuvvet-antrenmani-mi",
    excerpt: "Hedeflerinize göre kardiyo ve kuvvet antrenmanlarının etkilerini karşılaştırıyoruz.",
    image: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Egzersiz",
    author: "Kemal Şahin",
    authorImage: "https://images.pexels.com/photos/6456210/pexels-photo-6456210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "8 Nisan 2023",
    readTime: "10 dakika"
  },
  {
    id: 7,
    title: "Doğru Uyku Düzeni Spor Performansını Nasıl Etkiler?",
    slug: "dogru-uyku-duzeni-spor-performansini-nasil-etkiler",
    excerpt: "Kaliteli uykunun antrenman verimliliği ve performans üzerindeki etkileri.",
    image: "https://images.pexels.com/photos/3771069/pexels-photo-3771069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Sağlık",
    author: "Mehmet Yılmaz",
    authorImage: "https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "25 Nisan 2023",
    readTime: "7 dakika"
  },
  {
    id: 8,
    title: "Spor Salonunda Başlangıç İçin 10 Temel Kural",
    slug: "spor-salonunda-baslangic-icin-10-temel-kural",
    excerpt: "Yeni başlayanlar için spor salonunda dikkat edilmesi gereken temel kurallar ve öneriler.",
    image: "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Genel",
    author: "Ali Özkan",
    authorImage: "https://images.pexels.com/photos/3912944/pexels-photo-3912944.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "12 Mayıs 2023",
    readTime: "6 dakika"
  },
  {
    id: 9,
    title: "Metabolizmanızı Hızlandıracak 5 İpucu",
    slug: "metabolizmanizi-hizlandiracak-5-ipucu",
    excerpt: "Metabolizma hızınızı artıracak ve kilo kontrolüne yardımcı olacak pratik öneriler.",
    image: "https://images.pexels.com/photos/1346347/pexels-photo-1346347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: "Beslenme",
    author: "Zeynep Kaya",
    authorImage: "https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "30 Mayıs 2023",
    readTime: "5 dakika"
  }
];

const categories = [
  { name: "Tümü", count: blogPosts.length },
  { name: "Egzersiz", count: blogPosts.filter(post => post.category === "Egzersiz").length },
  { name: "Beslenme", count: blogPosts.filter(post => post.category === "Beslenme").length },
  { name: "Yoga", count: blogPosts.filter(post => post.category === "Yoga").length },
  { name: "Sağlık", count: blogPosts.filter(post => post.category === "Sağlık").length },
  { name: "Genel", count: blogPosts.filter(post => post.category === "Genel").length }
];

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-black to-gray-900 text-white">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src="https://images.pexels.com/photos/3112004/pexels-photo-3112004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="FitLife Gym Blog"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Sağlık ve Fitness Blogu</h1>
          <p className="text-xl max-w-3xl mx-auto text-center">
            Antrenman, beslenme ve sağlıklı yaşam hakkında yararlı bilgiler ve ipuçları.
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <div className="w-full md:w-1/4">
              <div className="sticky top-24">
                <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                  <h3 className="text-xl font-bold mb-4">Kategoriler</h3>
                  <ul className="space-y-2">
                    {categories.map((category, index) => (
                      <li key={index}>
                        <a 
                          href={`#${category.name === "Tümü" ? "" : category.name.toLowerCase()}`} 
                          className="flex justify-between items-center text-gray-700 hover:text-red-600 transition duration-300"
                        >
                          <span>{category.name}</span>
                          <span className="bg-gray-100 text-gray-600 text-sm px-2 py-1 rounded-full">{category.count}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-4">Abone Ol</h3>
                  <p className="text-gray-600 mb-4">
                    En yeni blog yazılarımız için abone olun.
                  </p>
                  <form>
                    <div className="mb-3">
                      <input 
                        type="email" 
                        placeholder="E-posta adresiniz" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
                      />
                    </div>
                    <button 
                      type="submit" 
                      className="w-full bg-red-600 hover:bg-red-700 transition duration-300 text-white px-4 py-2 rounded-md"
                    >
                      Abone Ol
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Blog Posts */}
            <div className="w-full md:w-3/4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts.map((post) => (
                  <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                    <Link href={`/blog/${post.slug}`} className="block">
                      <div className="relative h-48">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                    </Link>
                    <div className="p-6">
                      <div className="flex items-center mb-2">
                        <span className="text-xs font-medium text-white bg-red-600 py-1 px-2 rounded-full">
                          {post.category}
                        </span>
                        <span className="text-xs text-gray-500 ml-2">{post.date} • {post.readTime}</span>
                      </div>
                      <Link href={`/blog/${post.slug}`} className="block">
                        <h2 className="text-xl font-bold mb-2 hover:text-red-600 transition duration-300">{post.title}</h2>
                      </Link>
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
                          <Image
                            src={post.authorImage}
                            alt={post.author}
                            width={32}
                            height={32}
                            className="object-cover"
                          />
                        </div>
                        <span className="text-sm text-gray-700">{post.author}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-12 flex justify-center">
                <nav className="inline-flex rounded-md shadow">
                  <a href="#" className="inline-flex items-center px-3 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                    <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </a>
                  <a href="#" className="inline-flex items-center px-3 py-2 border border-gray-300 bg-red-600 text-sm font-medium text-white hover:bg-red-700">1</a>
                  <a href="#" className="inline-flex items-center px-3 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">2</a>
                  <a href="#" className="inline-flex items-center px-3 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">3</a>
                  <a href="#" className="inline-flex items-center px-3 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                    <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Öne Çıkan Makaleler</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.slice(0, 3).map((post) => (
              <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="relative h-60">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </Link>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <span className="text-xs font-medium text-white bg-red-600 py-1 px-2 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500 ml-2">{post.date}</span>
                  </div>
                  <Link href={`/blog/${post.slug}`} className="block">
                    <h2 className="text-xl font-bold mb-2 hover:text-red-600 transition duration-300">{post.title}</h2>
                  </Link>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <Link 
                    href={`/blog/${post.slug}`} 
                    className="inline-flex items-center text-red-600 hover:text-red-700 font-medium"
                  >
                    Devamını Oku
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-r from-black to-gray-900 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Sağlık ve Fitness Bültenimize Abone Olun</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Haftalık egzersiz rutinleri, beslenme önerileri ve sağlıklı yaşam ipuçları için bültenimize abone olun.
          </p>
          <form className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
            <input 
              type="email" 
              placeholder="E-posta adresinizi girin" 
              className="flex-1 px-4 py-3 rounded-md bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-red-500"
            />
            <button 
              type="submit" 
              className="bg-red-600 hover:bg-red-700 transition duration-300 px-6 py-3 rounded-md font-medium"
            >
              Abone Ol
            </button>
          </form>
          <p className="text-sm text-gray-400 mt-4">
            Gizliliğinize saygı duyuyoruz. E-postanızı asla başkalarıyla paylaşmayacağız.
          </p>
        </div>
      </section>
    </>
  );
} 