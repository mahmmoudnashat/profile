import React, { useState } from 'react';
import { Star, ThumbsUp } from 'lucide-react';
import { Product, Review } from '../../types';

interface ProductReviewsProps {
  product: Product;
}

const ProductReviews: React.FC<ProductReviewsProps> = ({ product }) => {
  const [helpfulReviews, setHelpfulReviews] = useState<string[]>([]);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [newReview, setNewReview] = useState({
    rating: 5,
    name: '',
    email: '',
    comment: ''
  });

  const handleHelpfulClick = (reviewId: string) => {
    if (!helpfulReviews.includes(reviewId)) {
      setHelpfulReviews([...helpfulReviews, reviewId]);
    }
  };

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this to your backend
    console.log('New review:', newReview);
    setShowReviewForm(false);
    setNewReview({
      rating: 5,
      name: '',
      email: '',
      comment: ''
    });
  };

  // Calculate average rating
  const averageRating = product.reviews.reduce((acc, review) => acc + review.rating, 0) / product.reviews.length;

  // Rating distribution
  const ratingCounts = [0, 0, 0, 0, 0];
  product.reviews.forEach(review => {
    ratingCounts[5 - review.rating]++;
  });

  return (
    <div>
      <div className="grid md:grid-cols-3 gap-8">
        {/* Rating Summary */}
        <div className="md:col-span-1">
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Customer Reviews</h3>
            
            <div className="flex items-center mb-4">
              <div className="flex mr-2">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={20} 
                    className={i < Math.floor(averageRating) ? "text-yellow-500 fill-yellow-500" : "text-gray-300"} 
                  />
                ))}
              </div>
              <span className="text-lg font-medium">{averageRating.toFixed(1)} out of 5</span>
            </div>
            
            <p className="text-gray-600 mb-6">{product.reviews.length} customer ratings</p>
            
            {/* Rating Bars */}
            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map(rating => {
                const count = ratingCounts[5 - rating];
                const percentage = product.reviews.length ? (count / product.reviews.length) * 100 : 0;
                
                return (
                  <div key={rating} className="flex items-center">
                    <span className="text-sm text-gray-600 w-8">{rating} star</span>
                    <div className="flex-grow mx-3 bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-yellow-500 h-2.5 rounded-full" 
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600 w-8">{count}</span>
                  </div>
                );
              })}
            </div>
            
            <button
              onClick={() => setShowReviewForm(true)}
              className="mt-6 w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition duration-300"
            >
              Write a Review
            </button>
          </div>
        </div>
        
        {/* Reviews List */}
        <div className="md:col-span-2">
          {showReviewForm ? (
            <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Write a Review</h3>
              
              <form onSubmit={handleReviewSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-2">Your Rating</label>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map(rating => (
                      <button
                        key={rating}
                        type="button"
                        onClick={() => setNewReview({...newReview, rating})}
                        className="mr-1"
                      >
                        <Star 
                          size={24} 
                          className={rating <= newReview.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"} 
                        />
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    value={newReview.name}
                    onChange={(e) => setNewReview({...newReview, name: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    value={newReview.email}
                    onChange={(e) => setNewReview({...newReview, email: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="comment" className="block text-gray-700 text-sm font-medium mb-2">Your Review</label>
                  <textarea
                    id="comment"
                    rows={4}
                    value={newReview.comment}
                    onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  ></textarea>
                </div>
                
                <div className="flex gap-3">
                  <button
                    type="submit"
                    className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition duration-300"
                  >
                    Submit Review
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowReviewForm(false)}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-md transition duration-300"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          ) : (
            product.reviews.length > 0 ? (
              <div className="space-y-6">
                {product.reviews.map(review => (
                  <ReviewItem 
                    key={review.id} 
                    review={review} 
                    isHelpful={helpfulReviews.includes(review.id)}
                    onHelpfulClick={() => handleHelpfulClick(review.id)}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-600 mb-4">There are no reviews yet.</p>
                <button
                  onClick={() => setShowReviewForm(true)}
                  className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition duration-300"
                >
                  Be the first to write a review
                </button>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

interface ReviewItemProps {
  review: Review;
  isHelpful: boolean;
  onHelpfulClick: () => void;
}

const ReviewItem: React.FC<ReviewItemProps> = ({ review, isHelpful, onHelpfulClick }) => {
  return (
    <div className="border-b border-gray-200 pb-6">
      <div className="flex justify-between items-start mb-2">
        <h4 className="font-medium text-gray-800">{review.userName}</h4>
        <span className="text-sm text-gray-500">{review.date}</span>
      </div>
      
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={16} 
            className={i < review.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"} 
          />
        ))}
      </div>
      
      <p className="text-gray-700 mb-4">{review.comment}</p>
      
      <button
        onClick={onHelpfulClick}
        disabled={isHelpful}
        className={`flex items-center text-sm ${
          isHelpful 
            ? 'text-green-600 cursor-default' 
            : 'text-gray-600 hover:text-green-600'
        }`}
      >
        <ThumbsUp size={14} className="mr-1" />
        {isHelpful ? 'You found this helpful' : 'Was this helpful?'} 
        <span className="ml-1">({review.helpful + (isHelpful ? 1 : 0)})</span>
      </button>
    </div>
  );
};

export default ProductReviews;