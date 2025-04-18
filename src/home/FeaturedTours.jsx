import React from 'react';

const FeaturedTours = () => {
  const tours = [
    {
      id: 1,
      title: 'Tropical Paradise Escape',
      description: 'Explore pristine beaches and crystal waters in this 7-day adventure to a tropical island.',
      price: '$1,299',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      title: 'Mountain Adventure Trek',
      description: 'Embark on a thrilling 5-day trek through majestic mountains with guided tours.',
      price: '$899',
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      title: 'Cultural City Tour',
      description: 'Discover vibrant culture and history in a 4-day city tour with expert guides.',
      price: '$649',
      image: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e206?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-600 mb-12">
          Featured Tours
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <div
              key={tour.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
            >
              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {tour.title}
                </h3>
                <p className="text-gray-600 mb-4">{tour.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-orange-600 font-bold text-lg">
                    {tour.price}
                  </span>
                  <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-full transition duration-300">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTours;