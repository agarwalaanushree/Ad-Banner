'use client'
import Image from "next/image";
import React, { useState } from "react";
import { CardBody, CardContainer } from "@/components/ui/3d-card";
import adData from "@/data/all_ads.json"; 
import { FaEdit, FaDownload } from "react-icons/fa";
import EditModal from "./EditModal";
import LearnMoreModal from "./LearnMoreModal"; 

interface Ads {
  id: number;
  title: string;
  description: string;
  image: string;
}

function Page() {
  const [ads, setAds] = useState<Ads[]>(adData.ads);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLearnMoreOpen, setIsLearnMoreOpen] = useState(false); 
  const [selectedAd, setSelectedAd] = useState<Ads | null>(null);

  const openModal = (ad: Ads) => {
    setSelectedAd(ad);
    setIsModalOpen(true);
  };

  const openLearnMoreModal = (ad: Ads) => {
    setSelectedAd(ad);
    setIsLearnMoreOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedAd(null);
  };

  const closeLearnMoreModal = () => {
    setIsLearnMoreOpen(false);
    setSelectedAd(null);
  };

  const handleSave = (updatedAd: Ads) => {
    const updatedAds = ads.map((ad) =>
      ad.id === updatedAd.id ? updatedAd : ad
    );
    setAds(updatedAds); 
    console.log('Updated Ad Banner Data:', updatedAds);
    closeModal();
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 py-12 pt-36">
      <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
        All Ads ({ads.length}) 
      </h1>
      <div className="flex flex-wrap justify-center">
        {ads.map((ad: Ads) => (
          <CardContainer key={ad.id} className="inter-var m-4 relative">
            <CardBody className="relative flex flex-col justify-between bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl">
              <Image
                src={ad.image}
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 z-0 opacity-90"
                alt={ad.title}
              />
              <div className="relative z-10 flex p-4">
                <div className="w-full">
                  <h2 className="text-2xl font-bold text-black">{ad.title}</h2>
                </div>
              </div>
              <div className="relative z-10 p-4 mt-auto">
                <div className="flex justify-between items-center">
                  <button onClick={() => openLearnMoreModal(ad)} className="px-4 py-2 rounded-xl text-xs font-normal text-black bg-white hover:bg-gray-100">
                    Learn More →
                  </button>
                  <a
                    href={ad.image} 
                    download={ad.title}
                    className="p-2 rounded-xl text-xs font-normal text-black bg-white hover:bg-gray-100 flex items-center"
                  >
                    <FaDownload />
                  </a>
                </div>
              </div>
            </CardBody>
            <button
              onClick={() => openModal(ad)}
              className="absolute top-4 right-4 cursor-pointer text-black"
            >
              <FaEdit />
            </button>
          </CardContainer>
        ))}
      </div>

      <EditModal
        isOpen={isModalOpen}
        ad={selectedAd}
        onClose={closeModal}
        onSave={handleSave} 
      />
      <LearnMoreModal
        isOpen={isLearnMoreOpen}
        ad={selectedAd}
        onClose={closeLearnMoreModal}
      />
    </div>
  );
}

export default Page;
