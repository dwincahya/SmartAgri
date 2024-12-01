import React, { useState } from "react";
import reviewlItems from "../assets/data/DataReview";
import { icons } from '../assets/icons';

const imageFiles = import.meta.glob('../assets/image/review/*.{jpg,png}', { eager: true });
const images = Object.fromEntries(
    Object.entries(imageFiles).map(([key, value]) => [key.replace('../assets/image/review/', ''), value.default])
);

const DEFAULT_PLACEHOLDER_IMAGE = 'https://via.placeholder.com/150'; 

const Review = () => {
  const [showAll, setShowAll] = useState(false);
  const topFiveStarReviews = reviewlItems.filter(review => review.rating === 5).slice(0, 3);
  const allReviews = [...reviewlItems].sort((a, b) => b.rating - a.rating);
  const reviewsToShow = showAll ? allReviews : topFiveStarReviews;

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<icons.IoIosStar key={i} className="text-yellow-500 inline-block" />);
      } else {
        stars.push(<icons.IoIosStarOutline key={i} className="text-yellow-500 inline-block" />);
      }
    }
    return stars;
  };

  const getImageSrc = (image) => {
    if (images[image]) {
      return images[image]; 
    }
    return image.startsWith('http') ? image : DEFAULT_PLACEHOLDER_IMAGE; 
  };

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
          {showAll ? 'Semua Ulasan' : 'Ulasan 5 Bintang Teratas'}
        </h2>
        <div className={`overflow-auto ${showAll ? 'md:h-[36rem]' : 'h-auto'} custom-scrollbar`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-5 px-5">
            {reviewsToShow.map((review, index) => (
              <div
                key={index}
                className="rounded-lg shadow-lg p-6 max-w-lg mx-auto"
              >
                <img
                  className="w-16 h-16 rounded-full mx-auto"
                  src={getImageSrc(review.image)}
                  alt={review.name}
                />
                <h3 className="text-xl font-semibold text-center mt-4">
                  {review.name}
                </h3>
                {review.tittle && (
                  <p className="text-gray-500 text-center">{review.tittle}</p>
                )}
                <div className="flex justify-center mb-2 text-2xl">
                  {renderStars(review.rating)}
                </div>
                <p className="text-gray-700 text-center">
                  {review.message}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-green-600 text-white px-5 md:px-20 py-4 rounded-md hover:bg-green-800 transition flex items-center justify-center gap-5 mx-auto"
          >
            {showAll ? <icons.FaAngleDoubleUp /> : <icons.FaAngleDoubleDown />}
            {showAll ? 'Tampilkan Ulasan Teratas' : 'Tampilkan Semua'}
            {showAll ? <icons.FaAngleDoubleUp /> : <icons.FaAngleDoubleDown />}
          </button>
        </div>
      </div>

      <style jsx>{`
        /* Custom scrollbar styles */
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1; 
          border-radius: 40px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #888; 
          border-radius: 100px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #555; 
          cursor: pointer;
        }
      `}</style>
    </section>
  );
};

export default Review;
