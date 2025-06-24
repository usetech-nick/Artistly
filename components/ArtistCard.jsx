export default function ArtistCard({ artist }) {
  return (
    <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 p-6 rounded-xl hover:bg-gray-700/40 hover:border-blue-500/30 transition-all duration-200 hover:scale-105 group cursor-pointer">
      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-200">
        {artist.name}
      </h3>
      <p className="text-sm text-gray-400 mb-3">
        {artist.category} • {artist.location}
      </p>
      <p className="text-sm font-medium text-gray-300 mb-4">
        {artist.priceRange}
      </p>
      <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800">
        Ask for Quote
      </button>
    </div>
  );
}
