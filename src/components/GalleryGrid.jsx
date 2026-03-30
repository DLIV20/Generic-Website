import Image from 'next/image';
import { useState } from 'react';

export default function GalleryGrid({ items }) {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="cursor-pointer group relative overflow-hidden rounded-lg"
            onClick={() => setSelectedImage(item)}
          >
            <Image
              src={item.after || '/placeholder.jpg'}
              alt={item.title}
              width={400}
              height={300}
              className="w-full h-64 object-cover group-hover:scale-110 transition"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
              <p className="text-white font-semibold">{item.title}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <Image
              src={selectedImage.after || '/placeholder.jpg'}
              alt={selectedImage.title}
              width={800}
              height={600}
              className="w-full rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white text-2xl"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
