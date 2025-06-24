"use client";
import { useState } from "react";
import { Search, Filter, MapPin, DollarSign, Music } from "lucide-react";
import artists from "@/lib/data/artists.json";
import ArtistCard from "@/components/ArtistCard";

export default function ArtistListPage() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredArtists = artists.filter((artist) => {
    const matchCategory = selectedCategory
      ? artist.category === selectedCategory
      : true;
    const matchLocation = selectedLocation
      ? artist.location === selectedLocation
      : true;
    const matchPrice = selectedPriceRange
      ? artist.priceLevel === selectedPriceRange
      : true;
    const matchSearch = searchTerm
      ? artist.name.toLowerCase().includes(searchTerm.toLowerCase())
      : true;
    return matchCategory && matchLocation && matchPrice && matchSearch;
  });

  const clearFilters = () => {
    setSelectedCategory("");
    setSelectedLocation("");
    setSelectedPriceRange("");
    setSearchTerm("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Header Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-blue-600/10 border-b border-gray-700/50">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium mb-6">
              <Music className="w-4 h-4 mr-2" />
              {artists.length}+ Professional Artists Available
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4">
              Browse
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                {" "}
                Artists
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover talented performers for your next event. Filter by
              category, location, and budget to find your perfect match.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Search and Filters Section */}
        <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 mb-8">
          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search artists by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-gray-700/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
          </div>

          {/* Filter Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <span className="text-white font-semibold">Filters</span>
            </div>
            {(selectedCategory ||
              selectedLocation ||
              selectedPriceRange ||
              searchTerm) && (
              <button
                onClick={clearFilters}
                className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-200"
              >
                Clear All
              </button>
            )}
          </div>

          {/* Filter Controls */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Category Filter */}
            <div className="relative">
              <Music className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 appearance-none cursor-pointer"
              >
                <option value="">All Categories</option>
                <option value="Singer">Singer</option>
                <option value="DJ">DJ</option>
                <option value="Dancer">Dancer</option>
                <option value="Speaker">Speaker</option>
              </select>
            </div>

            {/* Location Filter */}
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 appearance-none cursor-pointer"
              >
                <option value="">All Locations</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Delhi">Delhi</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Chennai">Chennai</option>
              </select>
            </div>

            {/* Price Filter */}
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <select
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 appearance-none cursor-pointer"
              >
                <option value="">All Prices</option>
                <option value="low">Under ₹10,000</option>
                <option value="mid">₹10,000 - ₹25,000</option>
                <option value="high">Above ₹25,000</option>
              </select>
            </div>
          </div>

          {/* Active Filters Display */}
          {(selectedCategory ||
            selectedLocation ||
            selectedPriceRange ||
            searchTerm) && (
            <div className="mt-4 flex flex-wrap gap-2">
              {searchTerm && (
                <span className="inline-flex items-center px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm border border-blue-500/30">
                  Search: &apos;{searchTerm}&apos;
                  <button
                    onClick={() => setSearchTerm("")}
                    className="ml-2 hover:text-blue-200"
                  >
                    ×
                  </button>
                </span>
              )}
              {selectedCategory && (
                <span className="inline-flex items-center px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30">
                  Category: {selectedCategory}
                  <button
                    onClick={() => setSelectedCategory("")}
                    className="ml-2 hover:text-purple-200"
                  >
                    ×
                  </button>
                </span>
              )}
              {selectedLocation && (
                <span className="inline-flex items-center px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm border border-green-500/30">
                  Location: {selectedLocation}
                  <button
                    onClick={() => setSelectedLocation("")}
                    className="ml-2 hover:text-green-200"
                  >
                    ×
                  </button>
                </span>
              )}
              {selectedPriceRange && (
                <span className="inline-flex items-center px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm border border-yellow-500/30">
                  Price:{" "}
                  {selectedPriceRange === "low"
                    ? "Under ₹10,000"
                    : selectedPriceRange === "mid"
                    ? "₹10,000 - ₹25,000"
                    : "Above ₹25,000"}
                  <button
                    onClick={() => setSelectedPriceRange("")}
                    className="ml-2 hover:text-yellow-200"
                  >
                    ×
                  </button>
                </span>
              )}
            </div>
          )}
        </div>

        {/* Results Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-white">
              {filteredArtists.length === 0
                ? "No Artists Found"
                : `${filteredArtists.length} Artists Found`}
            </h2>
            <p className="text-gray-400 mt-1">
              {filteredArtists.length === 0
                ? "Try adjusting your filters to see more results"
                : "Showing filtered results based on your preferences"}
            </p>
          </div>
        </div>

        {/* Artists Grid */}
        {filteredArtists.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredArtists.map((artist) => (
              <ArtistCard key={artist.id} artist={artist} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-12 max-w-md mx-auto">
              <div className="w-16 h-16 bg-gray-700/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                No Artists Found
              </h3>
              <p className="text-gray-400 mb-6">
                We couldn't find any artists matching your current filters.
              </p>
              <button
                onClick={clearFilters}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-200 hover:scale-105"
              >
                Clear Filters
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
