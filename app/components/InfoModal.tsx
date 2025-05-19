'use client';

import { useState } from 'react';

export default function InfoModal() {
  const [isOpen, setIsOpen] = useState(true);
  const whatsappNumber = '905401001080';
  const whatsappMessage = encodeURIComponent('Merhaba, FitLife Gym web sitesinden yazıyorum.');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const closeModal = () => {
    setIsOpen(false);
  };

  // Modal kapalıysa hiçbir şey render etme
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-white/30 flex items-center justify-center z-[100] p-4">
      <div className="bg-white text-black rounded-lg shadow-xl w-full max-w-md max-h-[90vh] overflow-auto relative">
        {/* Kapatma butonu */}
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
          aria-label="Kapat"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Modal başlık */}
        <div className="p-6 pb-0">
          <h2 className="text-xl font-bold text-center mb-2">Önemli Bilgilendirme</h2>
        </div>

        {/* Modal içeriği */}
        <div className="p-6">
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="text-2xl mr-3">🚧</div>
              <div>
                <h3 className="font-bold">Demo Sürüm</h3>
                <p className="text-gray-600">
                  Bu site bir demo çalışmasıdır. Gerçek bir spor salonu hizmeti bulunmamaktadır.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-2xl mr-3">🖼️</div>
              <div>
                <h3 className="font-bold">Görseller</h3>
                <p className="text-gray-600">
                  Kullanılan tüm görseller stok fotoğraflardır. Uygun görseller telif hakları gereği 
                  nihai sürümde değiştirilecektir.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-2xl mr-3">📋</div>
              <div>
                <h3 className="font-bold">KVKK ve Yasal Bilgiler</h3>
                <p className="text-gray-600">
                  KVKK ve telif hakları nedeniyle bu sitede yer alan içerikler nihai sürümü temsil
                  etmemektedir.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-2xl mr-3">📱</div>
              <div>
                <h3 className="font-bold">İletişim</h3>
                <p className="text-gray-600">
                  Daha fazla bilgi ve sorularınız için WhatsApp üzerinden iletişime geçebilirsiniz:
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-3 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 mr-2"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp ile İletişim
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Modal alt kısmı */}
        <div className="border-t border-gray-200 p-4 text-center">
          <button
            onClick={closeModal}
            className="bg-black hover:bg-gray-800 text-white py-2 px-8 rounded-lg transition-colors"
          >
            Anladım
          </button>
        </div>
      </div>
    </div>
  );
} 