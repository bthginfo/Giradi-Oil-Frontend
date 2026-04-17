import React, { useState } from "react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface MasonryGalleryProps {
  images: string[];
}

export const MasonryGallery: React.FC<MasonryGalleryProps> = ({ images }) => {
  // Shuffle images for random order
  const shuffled = React.useMemo(() => {
    const arr = [...images];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }, [images]);

  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  return (
    <>
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {shuffled.map((src, i) => (
          <button
            key={src}
            className="block w-full mb-4 focus:outline-none"
            onClick={() => setLightboxIdx(i)}
            style={{ breakInside: "avoid" }}
            aria-label="Bild vergrößern"
          >
            <ImageWithFallback
              src={src}
              alt="Galeriebild Olivenhain"
              className="w-full rounded-xl object-cover transition-transform hover:scale-105 aspect-auto"
              style={{ aspectRatio: "auto" }}
            />
          </button>
        ))}
      </div>
      {lightboxIdx !== null && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center" onClick={() => setLightboxIdx(null)}>
          <img
            src={shuffled[lightboxIdx]}
            alt="Galeriebild groß"
            className="max-w-full max-h-full rounded-xl shadow-2xl"
            style={{ objectFit: "contain" }}
          />
        </div>
      )}
    </>
  );
};
