"use client";
import React from "react";
import { Eye, Users, MapPin, DollarSign } from "lucide-react";

const ArtistTable = ({ data }) => {
  if (!data || data.length === 0) {
    return (
      <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-12">
        <div className="text-center">
          <div className="w-16 h-16 bg-gray-700/50 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">
            No Artists Yet
          </h3>
          <p className="text-gray-400">
            No artist submissions have been received yet. Check back later for
            updates.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-gray-700/50 border-b border-gray-600/50">
            <tr>
              <th className="text-left px-6 py-4 text-white font-semibold text-sm tracking-wide">
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-gray-400" />
                  <span>Artist Name</span>
                </div>
              </th>
              <th className="text-left px-6 py-4 text-white font-semibold text-sm tracking-wide">
                <div className="flex items-center space-x-2">
                  <span className="w-4 h-4 bg-purple-500/20 rounded text-purple-300 text-xs flex items-center justify-center font-bold">
                    C
                  </span>
                  <span>Category</span>
                </div>
              </th>
              <th className="text-left px-6 py-4 text-white font-semibold text-sm tracking-wide">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span>Location</span>
                </div>
              </th>
              <th className="text-left px-6 py-4 text-white font-semibold text-sm tracking-wide">
                <div className="flex items-center space-x-2">
                  <DollarSign className="w-4 h-4 text-gray-400" />
                  <span>Fee Range</span>
                </div>
              </th>
              <th className="text-left px-6 py-4 text-white font-semibold text-sm tracking-wide">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700/50">
            {data.map((artist, idx) => (
              <tr
                key={idx}
                className="hover:bg-gray-700/30 transition-all duration-200 group"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                      {artist.name?.charAt(0)?.toUpperCase() || "A"}
                    </div>
                    <div>
                      <div className="text-white font-medium">
                        {artist.name}
                      </div>
                      <div className="text-gray-400 text-sm">
                        Professional Artist
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-wrap gap-1">
                    {artist.category?.map((cat, catIdx) => (
                      <span
                        key={catIdx}
                        className="inline-flex items-center px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium border border-purple-500/30"
                      >
                        {cat}
                      </span>
                    )) || (
                      <span className="text-gray-400 text-sm">No category</span>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-gray-300">
                      {artist.location || "Not specified"}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-white font-medium">
                    {artist.feeRange || "Contact for pricing"}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <button className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 text-blue-300 hover:text-blue-200 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 group-hover:bg-blue-600/40">
                    <Eye className="w-4 h-4" />
                    <span>View Details</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Table Footer */}
      <div className="bg-gray-700/30 border-t border-gray-600/50 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-400">
            Showing {data.length} artist{data.length !== 1 ? "s" : ""}
          </div>
          <div className="text-sm text-gray-400">
            Last updated: {new Date().toLocaleDateString()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistTable;
