import React, { useState, useEffect } from 'react';

const CarouselModal = ({ isOpen, onClose }) => {
  const apiUrl = import.meta.env.VITE_API_URL;
  
  // Initial state with predefined images
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch the data from the API
    const fetchImages = async () => {
      try {
        const response = await fetch(`${apiUrl}/home/carousel`);
        if (!response.ok) {
          throw new Error('Failed to fetch images');
        }
        const data = await response.json();
        // alert(data)
        setImages(data.images); // Update the images state (assuming the API returns the images array)
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, [apiUrl]);

  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result.split(',')[1]; // Extract base64 part of the data URL
        if (base64String) {
          resolve(base64String);
        } else {
          reject(new Error('File conversion failed'));
        }
      };
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  // Handle image upload
  const handleImageUpload = async (event) => {
    const files = Array.from(event.target.files);
    try {
      // Convert each file to Base64 and store only the base64 string
      const base64Images = await Promise.all(files.map(fileToBase64));
      setImages((prevImages) => [...prevImages, ...base64Images]);
    } catch (error) {
      console.error('Error converting files to Base64:', error);
    }
  };

  // Handle removing an image
  const handleRemoveImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  // Handle form submission
  const handleSubmit = async () => {
    try {
      // Prepare the data to be sent to the server
      const response = await fetch(`${apiUrl}/home/carousel/`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 'images':images }), // Send the Base64 images array in the correct format
      });

      if (!response.ok) {
        throw new Error('Failed to update images');
      }

      const result = await response.json();
      alert('Updated Carousel Images:', result);
      console.log(result); // Log the server response

    } catch (error) {
      console.error('Error updating images:', error);
    }

    onClose(); // Close modal after saving
  };

  return (
    <dialog className={`modal ${isOpen ? 'modal-open' : ''}`}>
      <div className="modal-box w-11/12 max-w-2xl relative">
        <button onClick={onClose} className="btn btn-sm btn-circle absolute right-2 top-2">✕</button>

        <h3 className="font-bold text-lg mb-4">Edit Carousel Images</h3>

        <div className="mb-4">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            multiple
            className="input input-bordered w-full mb-1"
          />
        </div>

        <div className="grid grid-cols-3 gap-4 mb-4">
          {images.map((image, index) => (
            <div key={index} className="relative">
              <img src={`data:image/png;base64,${image}`} alt={`Carousel Image ${index + 1}`} className="w-full h-auto rounded-md" />
              <button
                className="btn btn-circle btn-error absolute top-2 right-2"
                onClick={() => handleRemoveImage(index)}
              >
                ✕
              </button>
            </div>
          ))}
        </div>

        <div className="flex justify-end">
          <button className="btn btn-primary" onClick={handleSubmit}>Save Changes</button>
        </div>
      </div>
    </dialog>
  );
};

export default CarouselModal;
