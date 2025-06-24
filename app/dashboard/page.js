import React from "react";
import {
  Users,
  CheckCircle,
  IndianRupee,
  MapPin,
  MoreVertical,
} from "lucide-react";
import artists from "@/lib/data/artists.json";
const submissions = artists;

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">
          Manager Dashboard
        </h1>
        <p className="text-gray-400">
          Manage your artist submissions and bookings
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Total Artists */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm font-medium">Total Artists</p>
              <p className="text-3xl font-bold text-white">
                {submissions.length}
              </p>
            </div>
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-blue-400" />
            </div>
          </div>
        </div>

        {/* Active Bookings */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm font-medium">
                Active Bookings
              </p>
              <p className="text-3xl font-bold text-white">12</p>
            </div>
            <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-400" />
            </div>
          </div>
        </div>

        {/* Revenue */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm font-medium">Revenue</p>
              <p className="text-3xl font-bold text-white">₹25L</p>
            </div>
            <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
              <IndianRupee className="w-6 h-6 text-purple-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden shadow-2xl">
        <div className="bg-gray-800/50 px-6 py-4 border-b border-gray-700/50">
          <h2 className="text-xl font-semibold text-white">
            Artist Submissions
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-700/30 border-b border-gray-700/50">
                {[
                  "Artist",
                  "Categories",
                  "Location",
                  "Fee Range",
                  "Actions",
                ].map((col) => (
                  <th
                    key={col}
                    className="text-left px-6 py-4 text-sm font-semibold text-gray-300 uppercase tracking-wider"
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700/50">
              {submissions.map((artist, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-gray-700/20 transition-all duration-200 group"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                        {artist.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-white font-medium">{artist.name}</p>
                        <p className="text-gray-400 text-sm">
                          Professional Artist
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-1">
                      {artist.category.map((cat, catIdx) => (
                        <span
                          key={catIdx}
                          className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-md text-xs font-medium border border-blue-500/30"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center text-gray-300">
                      <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                      {artist.location}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-green-400 font-semibold">
                      {artist.priceRange}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg">
                        View Details
                      </button>
                      <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-all duration-200">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 text-center">
        <p className="text-gray-500 text-sm">
          Showing {submissions.length} of {submissions.length} artists
        </p>
      </div>
    </div>
  );
};

export default DashboardPage;
