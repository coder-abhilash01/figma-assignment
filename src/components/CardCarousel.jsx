import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const CardCarousel = () => {
  const [images, setImages] = useState([
     "https://cdn.wallpapersafari.com/14/68/BE9xq5.jpg",
    "https://cdn.wallpapersafari.com/14/68/BE9xq5.jpg",
 "https://cdn.wallpapersafari.com/14/68/BE9xq5.jpg",
    "https://cdn.wallpapersafari.com/14/68/BE9xq5.jpg",
 
  ]);

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImages((prev) => [...prev, URL.createObjectURL(file)]);
  };

  return (
    <div className="flex-1 px-2 rounded-xl flex flex-col gap-8 relative">
      <Carousel
        className="flex-1 flex flex-col justify-between"
        opts={{ align: "start", loop: false }}
      >
        {/* Header section */}
        <div className="relative flex justify-between items-center ml-1 xl:ml-5 px-2 mt-2">
          <Button className="text-white font-semibold px-4 py-2 lg:px-5 lg:py-4 xl:px-8 xl:py-6 text-xs lg:text-[15px] xl:text-lg rounded-2xl">
            Gallery
          </Button>

          <div className="flex items-center gap-2 md:gap-6">
            <label
              htmlFor="add-image"
              className="px-2 py-2 xl:px-4 xl:py-3 rounded-full border border-gray-50/10 shadow-[6px_6px_10px_rgba(0,0,0,0.8),1px_0_10px_rgba(255,255,255,0.6)] backdrop-blur-xl text-[10px] lg:text-xs text-white cursor-pointer font-semibold"
            >
              + ADD IMAGE
            </label>
            <input
              type="file"
              id="add-image"
              className="hidden"
              onChange={handleFile}
            />
            <div className="absolute right-2 top-12 sm:static flex gap-4 lg:gap-4 xl:gap-5 ">
              <CarouselPrevious className="bg-[#262627] xl:p-5 shadow-[2px_1px_12px_rgba(255,255,255,0.2),4px_1px_18px_rgba(0,0,0,0.8)] text-white hover:text-white hover:bg-black active:bg-linear-to-r from-[#314a56] to-[#bcbbbbfb] border-0  cursor-pointer" />
              <CarouselNext className="bg-[#272829] xl:p-5 shadow-[2px_1px_12px_rgba(255,255,255,0.2),4px_1px_18px_rgba(0,0,0,0.8)] text-white hover:text-white hover:bg-black active:bg-linear-to-r from-[#314a56] to-[#bcbbbbfb] border-0 cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Carousel items */}
        <CarouselContent className="flex overflow-visible pt-6 px- py-4">
          {images.map((image, i) => (
            <CarouselItem key={i} className="px-2 sm:px-3 lg:px-3 ">
              <div className="w-full transition-transform duration-400 ease-out hover:-translate-y-3 hover:translate-x-1 hover:scale-102 hover:-rotate-2 relative z-10 ml-1 mt-1  ">
                <img
                  src={image}
                  alt={`img-${i}`}
                  className="w-full h-42 object-cover rounded-xl hover:shadow-lg shadow-black/50"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <style>{`
        [data-slot="carousel-content"] > div {
          display: flex;
        }
        [data-slot="carousel-item"] {
          flex: 0 0 100%;
        }
        @media (min-width: 640px) {
          [data-slot="carousel-item"] {
            flex: 0 0 50%;
          }
        }
        @media (min-width: 1024px) {
          [data-slot="carousel-item"] {
            flex: 0 0 33.33%;
          }
        }
      `}</style>
    </div>
  );
};

export default CardCarousel;
