import React, { useState, useEffect } from 'react';

const VideoGallery = () => {
  const API_URL = import.meta.env.VITE_API_URL; // Base URL from .env

  const [videoData, setVideoData] = useState({
    bgColor: "", // Background color
    textColor: "", // Text color
    videos: [
    ]
  });

  useEffect(() => {
    fetch(`${API_URL}/video-gallery`)
      .then(res => res.json())
      .then(data => {
        setVideoData(data);
    
      });
  }, [API_URL]);

  return (
    <div
      className="py-16"
      style={{ backgroundColor: videoData.bgColor, color: videoData.textColor }}
    >
      <h1 className="text-4xl font-bold text-center mb-12">Video Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-6">
        {videoData.videos.map((video, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105"
            style={{ backgroundColor: '#2d3748' }} // Optional: card-specific color
          >
            <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-t-lg"
                src={video.src}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{video.title}</h3>
              <p style={{ color: '#a0aec0' }}>{video.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoGallery;
