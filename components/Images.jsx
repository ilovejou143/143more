import React, { useState } from "react";
import Modal from "./Modal";
import data from "../src/data";

const Images = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    description: "",
    image: null,
  });

  const handleImageClick = (title, description, image) => {
    setModalContent({ title, description, image });
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className="d-flex justify-content-between gap-5 flex-wrap mx-5">
        {data.map((image, index) => (
          <img
            key={index}
            src={`${import.meta.env.BASE_URL}${image.src}`}
            alt={image.title}
            onClick={() =>
              handleImageClick(image.title, image.description, image)
            }
          />
        ))}
      </div>
      <Modal
        isOpen={isOpen}
        onClose={handleCloseModal}
        image={modalContent.image}
      />
    </div>
  );
};

export default Images;
