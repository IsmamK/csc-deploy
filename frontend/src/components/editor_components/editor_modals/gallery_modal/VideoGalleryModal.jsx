import React, { useEffect, useState } from 'react';
import { HexColorPicker } from 'react-colorful';

const VideoGalleryModal = ({ isOpen, onClose }) => {
  const API_URL = import.meta.env.VITE_API_URL; // Base URL from .env

  const [videoGalleryData, setVideoGalleryData] = useState({
    bgColor: "",
    textColor: "",
    videos: [],
  });

  useEffect(() => {
    fetch(`${API_URL}/video-gallery`)
      .then(res => res.json())
      .then(data => {
        setVideoGalleryData(data);
      });
  }, [API_URL]);

  // Handler for updating simple string fields
  const handleFieldChange = (field, value) => {
    setVideoGalleryData((prevData) => ({ ...prevData, [field]: value }));
  };

  // Handler for updating color fields
  const handleColorChange = (field, value) => {
    setVideoGalleryData((prevData) => ({ ...prevData, [field]: value }));
  };

  // Handler for updating individual video items
  const handleInputChange = (index, field, value) => {
    const updatedVideos = [...videoGalleryData.videos];
    updatedVideos[index][field] = value;
    setVideoGalleryData({ ...videoGalleryData, videos: updatedVideos });
  };

  // Add a new video item
  const addNewVideo = () => {
    setVideoGalleryData({
      ...videoGalleryData,
      videos: [
        ...videoGalleryData.videos,
        { src: "", title: "", description: "" },
      ],
    });
  };

  // Remove a video item
  const handleRemoveVideo = (index) => {
    setVideoGalleryData({
      ...videoGalleryData,
      videos: videoGalleryData.videos.filter((_, i) => i !== index),
    });
  };

  // Save handler with PATCH request
  const handleSave = async () => {
    try {
      const response = await fetch(`${API_URL}/video-gallery/`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(videoGalleryData),
      });

      if (!response.ok) {
        throw new Error('Failed to update video gallery data');
      }

      console.log("Video Gallery Data Saved:", videoGalleryData);
      onClose();
      window.location.reload();
    } catch (error) {
      console.error("Error saving video gallery data:", error);
    }
  };

  return (
    <dialog id="video_gallery_modal" className={`modal ${isOpen ? 'modal-open' : ''}`}>
      <div className="modal-box w-11/12 max-w-5xl relative">
        <button onClick={onClose} className="btn btn-sm btn-circle absolute right-2 top-2">
          ✕
        </button>
        <h3 className="font-bold text-lg mb-4">Edit Video Gallery</h3>

        {/* Background Color Picker */}
        <label className="block mr-2">Background Color:</label>
        <div className="mb-4 hex flex items-center">
          <HexColorPicker
            color={videoGalleryData.bgColor}
            onChange={(color) => handleColorChange('bgColor', color)}
          />
          <input
            type="text"
            value={videoGalleryData.bgColor}
            onChange={(e) => handleColorChange('bgColor', e.target.value)}
            className="input input-bordered w-20 ml-2"
          />
        </div>

        {/* Text Color Picker */}
        <label className="block mr-2">Text Color:</label>
        <div className="mb-4 hex flex items-center">
          <HexColorPicker
            color={videoGalleryData.textColor}
            onChange={(color) => handleColorChange('textColor', color)}
          />
          <input
            type="text"
            value={videoGalleryData.textColor}
            onChange={(e) => handleColorChange('textColor', e.target.value)}
            className="input input-bordered w-20 ml-2"
          />
        </div>

        {/* Video Items Table */}
        <table className="w-full table-fixed border-collapse">
          <thead>
            <tr>
              <th className="border p-2 w-2/5">Video Source</th>
              <th className="border p-2 w-1/5">Title</th>
              <th className="border p-2 w-2/5">Description</th>
              <th className="border p-2 w-1/5">Actions</th>
            </tr>
          </thead>
          <tbody>
            {videoGalleryData.videos.map((video, index) => (
              <tr key={index}>
                <td className="border p-2">
                  <input
                    type="text"
                    value={video.src}
                    onChange={(e) => handleInputChange(index, 'src', e.target.value)}
                    placeholder="Video URL"
                    className="input input-bordered w-full"
                  />
                </td>
                <td className="border p-2">
                  <input
                    type="text"
                    value={video.title}
                    onChange={(e) => handleInputChange(index, 'title', e.target.value)}
                    placeholder="Video Title"
                    className="input input-bordered w-full"
                  />
                </td>
                <td className="border p-2">
                  <input
                    type="text"
                    value={video.description}
                    onChange={(e) => handleInputChange(index, 'description', e.target.value)}
                    placeholder="Video Description"
                    className="input input-bordered w-full"
                  />
                </td>
                <td className="border p-2 text-center">
                  <button
                    onClick={() => handleRemoveVideo(index)}
                    className="btn btn-sm btn-error"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-between mt-4">
          <button onClick={addNewVideo} className="btn btn-primary">+ Add Video</button>
          <button onClick={handleSave} className="btn btn-success text-white">Save Changes</button>
        </div>
      </div>
    </dialog>
  );
};

export default VideoGalleryModal;
