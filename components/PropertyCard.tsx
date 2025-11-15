import { PropertyProps } from '@/interfaces';

const PropertyCard: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
      {/* Image Container */}
      <div className="relative">
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-48 object-cover"
        />
        
        {/* Discount Badge */}
        {property.discount && (
          <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {property.discount}% OFF
          </div>
        )}
        
        {/* Rating Badge */}
        <div className="absolute top-3 right-3 bg-white bg-opacity-90 backdrop-blur-sm px-2 py-1 rounded-full text-sm font-semibold flex items-center">
          <span className="text-yellow-500 mr-1">★</span>
          {property.rating}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1 text-gray-800">{property.name}</h3>
        
        <p className="text-gray-600 text-sm mb-2 flex items-center">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          {property.address.city}, {property.address.country}
        </p>

        {/* Categories */}
        <div className="flex flex-wrap gap-1 mb-3">
          {property.category.slice(0, 2).map((cat, index) => (
            <span
              key={index}
              className="bg-blue-50 text-blue-600 px-2 py-1 rounded text-xs"
            >
              {cat}
            </span>
          ))}
          {property.category.length > 2 && (
            <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
              +{property.category.length - 2}
            </span>
          )}
        </div>

        {/* Offers */}
        <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
          <span>🛏️ {property.offers.bed} beds</span>
          <span>🚿 {property.offers.shower} showers</span>
          <span>👥 {property.offers.occupants}</span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-gray-800">${property.price}</span>
            <span className="text-gray-600 ml-1">/ night</span>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
