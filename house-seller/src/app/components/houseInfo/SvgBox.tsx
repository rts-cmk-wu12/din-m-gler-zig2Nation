import { PiImageSquareThin } from "react-icons/pi";
import { IoLayersOutline } from "react-icons/io5";
import { PiMapPinThin } from "react-icons/pi";
import { BsHeart } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import React, { useState } from "react";
import Image from "next/image";

export default function SvgBox({
  images,
  floorplan,
}: {
  images: { url: string; name: string }[];
  floorplan: { url: string; name: string };
}) {
  const [showImages, setShowImages] = useState(false); // Tilstand for visning af billeder
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [viewingFloorplan, setViewingFloorplan] = useState(false); // Tilstand for visning af gulvplan

  if (!images || images.length === 0 || !floorplan) {
    return <div>Ingen billeder tilgængelige</div>;
  }

  const handleToggleImages = () => {
    setViewingFloorplan(false); // Skift til visning af husbilleder
    setShowImages(!showImages);
    setCurrentImageIndex(0); // Start fra første billede
  };

  const handleToggleFloorplan = () => {
    setViewingFloorplan(true); // Skift til visning af gulvplanbillede
    setShowImages(true);
  };

  const handleNextImage = () => {
    if (!viewingFloorplan && currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const handlePrevImage = () => {
    if (!viewingFloorplan && currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const handleCloseInformation = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      setShowImages(false);
    }
  };

  const currentImage = viewingFloorplan
    ? floorplan // Hvis vi ser gulvplanen, brug gulvplanbilledet
    : images[currentImageIndex]; // Ellers brug det aktuelle husbillede

  return (
    <div className="flex flex-col gap-5">
      {/* SVG-ikoner */}
      <div className="flex flex-row gap-5">
        <PiImageSquareThin
          className="h-8 w-8 text-[#7B7B7B] cursor-pointer"
          onClick={handleToggleImages}
        />
        <IoLayersOutline
          className="h-8 w-8 text-[#7B7B7B] cursor-pointer"
          onClick={handleToggleFloorplan}
        />
        <PiMapPinThin className="h-8 w-8 text-[#7B7B7B]" />
        <BsHeart className="h-8 w-8 text-[#7B7B7B]" />
      </div>

      {/* Billeder */}
      {showImages && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-70 flex flex-col items-center justify-center z-50"
          onClick={handleCloseInformation}
        >
          <div className="relative">
            {!viewingFloorplan && (
              <>
                {/* Pil til venstre */}
                <IoIosArrowBack
                  className={`absolute left-5 top-1/2 transform -translate-y-1/2 text-white cursor-pointer h-[3em] w-[3em] ${
                    currentImageIndex === 0 ? "opacity-50 pointer-events-none" : ""
                  }`}
                  onClick={handlePrevImage}
                />
                {/* Pil til højre */}
                <IoIosArrowForward
                  className={`absolute right-5 top-1/2 transform -translate-y-1/2 text-white cursor-pointer h-[3em] w-[3em] ${
                    currentImageIndex === images.length - 1
                      ? "opacity-50 pointer-events-none"
                      : ""
                  }`}
                  onClick={handleNextImage}
                />
              </>
            )}
            {/* Billedet */}
            <Image
              src={currentImage.url}
              alt={currentImage.name}
              width={700}
              height={700}
              className="max-w-full max-h-full object-contain rounded-lg shadow-lg select-none"
            />
          </div>
            <div className="flex flex-row gap-7 mt-4">
                <PiImageSquareThin className="h-8 w-8 text-white"/>
                <IoLayersOutline className="h-8 w-8 text-white"/>
                <PiMapPinThin className="h-8 w-8 text-white" />
                <BsHeart className="h-8 w-8 text-white" />
            </div>
        </div>
      )}
    </div>
  );
}
