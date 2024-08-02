

import Image from "next/image";
import React, { useState, useEffect } from "react";

interface EditModalProps {
  isOpen: boolean;
  ad: Ads | null;
  onClose: () => void;
  onSave: (updatedAd: Ads) => void;
}

interface Ads {
  id: number;
  title: string;
  description: string;
  image: string;
}

const EditModal: React.FC<EditModalProps> = ({ isOpen, ad, onClose, onSave }) => {
  const [formState, setFormState] = useState({
    title: '',
    description: '',
    image: ''
  });

  useEffect(() => {
    if (ad) {
      setFormState({
        title: ad.title,
        description: ad.description,
        image: ad.image
      });
    }
  }, [ad]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    if (ad) {
      const updatedAd = { ...ad, ...formState };
      onSave(updatedAd);
    }
  };

  if (!isOpen || !ad) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-t-lg p-6 w-full max-w-lg">
        <div className="relative mb-4">
          <Image
            src={ad.image}
            height="400"
            width="400"
            className="w-full h-48 object-cover rounded-t-lg"
            alt={ad.title}
          />
        </div>
        <h2 className="text-xl font-bold mb-4">Edit Ad Banner</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Title</label>
            <input
              type="text"
              name="title"
              value={formState.title}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Description</label>
            <textarea
              name="description"
              value={formState.description}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Image URL</label>
            <input
              type="text"
              name="image"
              value={formState.image}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="flex flex-col items-center mt-4">
            <button
              type="button"
              onClick={handleSubmit}
              className="w-full px-4 py-2 bg-gradient-to-r from-purple-400 to-purple-600 text-white rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
