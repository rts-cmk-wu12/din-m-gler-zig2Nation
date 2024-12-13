import { PiImageSquareThin } from "react-icons/pi";
import { IoLayersOutline } from "react-icons/io5";
import { PiMapPinThin } from "react-icons/pi";
import { BsHeart } from "react-icons/bs";
import MapPosition from "./MapPosition";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import React, { useState, useEffect } from "react";
import Image from "next/image";

interface SvgBoxProps {
  images: { url: string; alt?: string }[];
  floorplan: { url: string; name: string };
  coordinates?: { lat: number; lng: number } | undefined; // Tilføj | undefined
}

export default function SvgBox({ images, floorplan, coordinates }: SvgBoxProps) {
  const [showImages, setShowImages] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [viewingFloorplan, setViewingFloorplan] = useState(false);
  const [mapPosition, setMapPosition] = useState(false);

  const handleToggleImages = () => {
    if (viewingFloorplan) {
      setViewingFloorplan(false);
    }
    setMapPosition(false); 
    setShowImages((prevShowImages) => !prevShowImages);
  };
  
  
  

  const handleToggleFloorplan = () => {
    setViewingFloorplan(true);
    setMapPosition(false);
    setShowImages(true); 
  };
  
  const handleToggleMapPosition = () => {
    setViewingFloorplan(false);
    setShowImages(false);
    setMapPosition(!mapPosition);
  };
  

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => Math.min(prevIndex + 1, images.length - 1));
  };

  const handleCloseImageModal = (event: React.MouseEvent) => {
    if (event.currentTarget === event.target) {
      setShowImages(false);
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-row gap-5">
        <PiImageSquareThin
          className="h-8 w-8 text-[#7B7B7B] cursor-pointer"
          onClick={handleToggleImages}
        />
        <IoLayersOutline
          className="h-8 w-8 text-[#7B7B7B] cursor-pointer"
          onClick={handleToggleFloorplan}
        />
        <PiMapPinThin
          className="h-8 w-8 text-[#7B7B7B] cursor-pointer"
          onClick={handleToggleMapPosition}
        />
        <BsHeart className="h-8 w-8 text-[#7B7B7B]" />
      </div>

      
      {mapPosition && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-70 flex items-center justify-center z-50">
          <MapPosition position={coordinates} />
        </div>
      )}

      
      {showImages && !mapPosition && (
        <div
          className="fixed inset-0 bg-gray-900 bg-opacity-70 flex flex-col items-center justify-center z-50"
          onClick={handleCloseImageModal}
        >
          <IoIosArrowBack
            className={`absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer ${
              currentImageIndex === 0 ? "text-gray-400" : "text-white"
            }`}
            onClick={handlePrevImage}
          />
          <Image
            src={viewingFloorplan ? floorplan.url : images[currentImageIndex].url}
            alt={viewingFloorplan ? floorplan.name : images[currentImageIndex].alt || 'Unknown'}
            width={viewingFloorplan ? 600 : 600}
            height={viewingFloorplan ? 600 : 600}
            className="rounded-lg"
          />
          <IoIosArrowForward
            className={`absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer ${
              currentImageIndex === images.length - 1 ? "text-gray-400" : "text-white"
            }`}
            onClick={handleNextImage}
          />
          <div className="flex flex-row gap-5 mt-4">
            <PiImageSquareThin
              className="h-8 w-8 text-white cursor-pointer"
              onClick={handleToggleImages}
            />
            <IoLayersOutline
              className="h-8 w-8 text-white cursor-pointer"
              onClick={handleToggleFloorplan}
            />
            <PiMapPinThin
              className="h-8 w-8 text-white cursor-pointer"
              onClick={handleToggleMapPosition}
            />
            <BsHeart className="h-8 w-8 text-white" />
          </div>
        </div>
      )}
    </div>
  );
}
