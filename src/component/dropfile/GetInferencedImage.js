import React, { useEffect, useState } from "react";
import { useGetInferenceImageQuery } from "../../services/inferenceservices";
import { imagebaseURL } from "../../constant/constants";
import "./getImages.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const GetInferencedImages = () => {
  const { data, error, isLoading } = useGetInferenceImageQuery();
  const [imageData, setImageData] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };
  return (
    <div>
      <ToastContainer />

      <div className="ImageDataContainer">
        {data && data.length
          ? data.map((image, key) => {
              return (
                <div
                  className="ImageContainer"
                  onClick={() => handleImageClick(image)}
                >
                  <p className="name">{image.name}</p>
                  <img
                    src={imagebaseURL + image.img_file}
                    alt={key}
                    className="image"
                  />
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default GetInferencedImages;