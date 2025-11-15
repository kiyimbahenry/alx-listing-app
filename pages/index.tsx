import { useState } from 'react';
import { PROPERTYLISTINGSAMPLE, FILTER_OPTIONS } from '@/constants';
import { PropertyProps } from '@/interfaces';
import Pill from '@/components/Pill';
import PropertyCard from '@/components/PropertyCard';

export default function Home() {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [properties] = useState<PropertyProps[]>(PROPERTYLISTINGSAMPLE);

  const toggleFilter = (filter: string) => {
    setActiveFilters(prev =>
      prev.includes(filter)
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  const filteredProperties = properties.filter(property =>
    activeFilters.length === 0 ||
    property.category.some(cat => activeFilters.includes(cat)) ||
    activeFilters.some(filter => 
      property.name.toLowerCase().includes(filter.toLowerCase())
    )
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-96 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Find your favorite place here!
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              The best prices for over 2 million properties worldwide.
            </p>
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
              Explore Properties
            </button>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">
              Featured Properties
            </h2>
            <div className="text-gray-600">
              Showing {filteredProperties.length} of {properties.length} properties
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-3 overflow-x-auto py-2">
            {FILTER_OPTIONS.map((filter) => (
              <Pill
                key={filter}
                label={filter}
                isActive={activeFilters.includes(filter)}
                onClick={() => toggleFilter(filter)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Properties Listing Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredProperties.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-400 text-6xl mb-4">🏠</div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No properties found
              </h3>
              <p className="text-gray-500">
                Try adjusting your filters to see more results.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProperties.map((property, index) => (
                <PropertyCard key={index} property={property} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
