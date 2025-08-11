import React, { useRef } from "react";
import "./AddProduct.css";

const ImageUpload = ({ file, onFileChange }) => {
  const inputRef = useRef();

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      onFileChange(e.target.files[0]);
    }
  };

  return (
    <div className="photoUploadBox">
      <label>Product Photo</label>
      <div
        className="uploadArea"
        onClick={() => inputRef.current.click()}
      >
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
        {file ? (
          <img
            src={URL.createObjectURL(file)}
            alt="preview"
            className="imgPreview"
          />
        ) : (
          <>
            <div style={{ fontSize: 30, marginBottom: 8 }}>📤</div>
            <div>Click to upload or drag and drop</div>
            <button
              type="button"
              className="browseBtn"
              onClick={(e) => {
                e.stopPropagation();
                inputRef.current.click();
              }}
            >
              Browse File
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ImageUpload;