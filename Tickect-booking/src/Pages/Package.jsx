import React from 'react';
import { Link } from 'react-router-dom';

function Package() {
  const packages = [
    {
      id: 1,
      title: 'Tropical Paradise',
      description: 'Explore the beaches of Bali with luxury resorts and cultural tours.',
      image: 'https://cdn.wallpapersafari.com/28/61/8eJhnc.jpg',
      favoriteThings: ['Snorkeling in crystal waters', 'Spa days at luxury resorts', 'Attending a Balinese dance performance'],
      favoritePlaces: ['Uluwatu Temple', 'Tegalalang Rice Terraces', 'Nusa Dua Beach'],
    },
    {
      id: 2,
      title: 'Mountain Adventure',
      description: 'Trek the Himalayas with guided tours and breathtaking views.',
      image: 'https://www.touristsecrets.com/wp-content/uploads/2023/10/the-magic-mountain-1698416014.jpg',
      favoriteThings: ['High-altitude trekking', 'Meditation in mountain monasteries', 'Wildlife spotting'],
      favoritePlaces: ['Annapurna Base Camp', 'Leh Palace', 'Parvati Valley'],
    },
    {
      id: 3,
      title: 'City Escape',
      description: 'Discover the vibrant culture and history of Rome.',
      image: 'https://iso.500px.com/wp-content/uploads/2014/07/chicago-cits-small.jpg',
      favoriteThings: ['Exploring ancient ruins', 'Savoring authentic Italian pasta', 'Evening walks in piazzas'],
      favoritePlaces: ['Colosseum', 'Pantheon', 'Trastevere neighborhood'],
    },
    {
      id: 4,
      title: 'Desert Safari',
      description: 'Experience the dunes of Dubai with thrilling rides and Bedouin camps.',
      image: 'https://incrediblesphere.com/wp-content/uploads/2023/12/A-captivating-scene-of-a-desert-safari-in-Abu-Dhabi-during-sunset.-The-image-should-showcase-a-convoy-of-4x4-vehicles-dune-bashing-with-golde.webp',
      favoriteThings: ['Dune bashing in 4x4s', 'Camel riding', 'Stargazing in the desert'],
      favoritePlaces: ['Burj Khalifa', 'Desert Conservation Reserve', 'Jumeirah Mosque'],
    },
    {
      id: 5,
      title: 'Coastal Cruise',
      description: 'Sail along the Amalfi Coast with stunning sea views and gourmet dining.',
      image: 'https://www.stpetecoastalcruises.com/wp-content/uploads/2023/03/Contact-Us-Image-Overlay.jpg',
      favoriteThings: ['Cliffside village tours', 'Swimming in the Tyrrhenian Sea', 'Tasting local limoncello'],
      favoritePlaces: ['Positano', 'Ravello Gardens', 'Emerald Grotto'],
    },
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-extrabold text-blue-800 mb-6 text-center">Explore Our Travel Packages</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform animate-fade-in"
          >
            <img src={pkg.image} alt={pkg.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{pkg.title}</h2>
              <p className="text-gray-600 mb-4">{pkg.description}</p>
              <div className="mb-4">
                <h3 className="text-lg font-medium text-gray-700">Favorite Things to Do</h3>
                <ul className="list-disc list-inside text-gray-600 text-sm">
                  {pkg.favoriteThings.map((thing, index) => (
                    <li key={index}>{thing}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-medium text-gray-700">Favorite Places to Visit</h3>
                <ul className="list-disc list-inside text-gray-600 text-sm">
                  {pkg.favoritePlaces.map((place, index) => (
                    <li key={index}>{place}</li>
                  ))}
                </ul>
              </div>
              <Link
                to="/booking"
                className="inline-block px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition"
              >
                Book Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Package;