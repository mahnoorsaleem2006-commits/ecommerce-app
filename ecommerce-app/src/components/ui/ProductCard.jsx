import { Link } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import Badge from './Badge';
import StarRating from './StarRating';

export default function ProductCard({ product }) {
  const { dispatch } = useCart();
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  const addToCart = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_ITEM', product });
  };

  const handleImageError = (e) => {
    console.log('Image failed to load:', product.image);
    e.target.src = 'https://via.placeholder.com/400x400/2563EB/FFFFFF?text=' + product.name.substring(0, 10);
  };

  return (
    <Link to={`/products/${product.id}`} className="group block">
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-gray-200 h-full flex flex-col">
        {/* Image */}
        <div className="relative overflow-hidden bg-gray-50 aspect-square">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={handleImageError}
          />
          {product.badge && (
            <div className="absolute top-3 left-3">
              <Badge label={product.badge} />
            </div>
          )}
          {!product.inStock && (
            <div className="absolute inset-0 bg-white/60 flex items-center justify-center">
              <span className="bg-gray-800 text-white text-xs font-semibold px-3 py-1.5 rounded-full">Out of Stock</span>
            </div>
          )}
          {discount > 0 && (
            <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-lg">
              -{discount}%
            </div>
          )}
        </div>

        {/* Info */}
        <div className="p-4 flex flex-col flex-1">
          <span className="text-xs text-primary-600 font-medium uppercase tracking-wide mb-1">
            {product.category}
          </span>
          <h3 className="text-sm font-semibold text-gray-900 line-clamp-2 mb-2 leading-snug">
            {product.name}
          </h3>
          {product.rating && (
            <StarRating rating={product.rating} reviews={product.reviews} />
          )}

          <div className="mt-auto pt-3 flex items-center justify-between">
            <div>
              <span className="text-lg font-bold text-gray-900">RS {product.price.toLocaleString()}</span>
              {product.originalPrice > product.price && (
                <span className="text-xs text-gray-400 line-through ml-2">RS {product.originalPrice.toLocaleString()}</span>
              )}
            </div>
            <button
              onClick={addToCart}
              disabled={!product.inStock}
              className="bg-primary-600 hover:bg-primary-700 disabled:bg-gray-300 text-white text-xs font-semibold px-3 py-2 rounded-lg transition-colors duration-200 flex items-center gap-1"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Add
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}