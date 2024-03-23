import React, { useState } from "react";
import "./Content.css";
import image1 from "../assets/f1.png";
import image2 from "../assets/f2.png";
import image3 from "../assets/f3.png";
import image4 from "../assets/f4.png";
//updated

function Content() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedShape, setSelectedShape] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setSelectedImage(event.target.result);
        setSelectedShape(null);
      };
      reader.readAsDataURL(file);
    } else {
      setSelectedImage(null);
    }
  };

  const handleDesignSelect = (imageSrc) => {
    setSelectedShape(imageSrc);
  };

  return (
    <div className="contentContainer">
      <input
        required
        style={{ display: "none" }}
        type="file"
        id="file"
        onChange={handleFileChange}
      />
      <label htmlFor="file" className="button">
        Choose image
      </label>

      <div className="designRow">
        <label
          className="button2"
          style={{
            backgroundColor: "#BC7AF9",
            marginRight: 20,
          }}
        >
          Choose Design
        </label>
        <img
          src={image1}
          className="image2"
          onClick={() => handleDesignSelect(image1)}
        />
        <img
          src={image2}
          className="image2"
          onClick={() => handleDesignSelect(image2)}
        />
        <img
          src={image3}
          className="image2"
          onClick={() => handleDesignSelect(image3)}
        />
        <img
          src={image4}
          className="image2"
          onClick={() => handleDesignSelect(image4)}
        />
      </div>

      {selectedImage && (
        <div className="selectedImageContainer">
          <img
            id="preview"
            src={selectedImage}
            alt="Preview"
            style={{ width: "300px", height: "300px" }}
            className="image"
          />
          <img
            src={selectedImage}
            alt="Selected Design"
            style={{
              WebkitMaskImage: `url(${selectedShape})`,
              maskImage: `url(${selectedShape})`,
              WebkitMaskSize: "contain",
              maskSize: "contain",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              width: "350px",
              height: "350px",
            }}
          />
        </div>
      )}
    </div>
  );
}

export default Content;
