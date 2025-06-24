"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Music, Settings, User } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/artists", label: "Explore Artists" },
  { href: "/onboard", label: "Join as Artist" },
  { href: "/dashboard", label: "Dashboard" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full bg-gray-900/95 backdrop-blur-lg border-b border-gray-700/50 shadow-xl px-6 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo/Brand */}
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Music className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-white">ArtistHub</span>
        </div>

        {/* Navigation Links */}
        <ul className="flex items-center space-x-1">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group ${
                  pathname === href
                    ? "text-white bg-blue-600 shadow-lg shadow-blue-600/25"
                    : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                }`}
              >
                {label}
                {pathname === href && (
                  <div className="absolute inset-0 bg-blue-500/20 rounded-lg blur-sm -z-10"></div>
                )}
                <div
                  className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-blue-400 transition-all duration-300 ${
                    pathname === href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></div>
              </Link>
            </li>
          ))}
        </ul>

        {/* Right side - Profile/Settings */}
        <div className="flex items-center space-x-3">
          <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-200">
            <Settings className="w-5 h-5" />
          </button>
          <div className="w-8 h-8 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full flex items-center justify-center border-2 border-gray-600 hover:border-blue-500 transition-all duration-200 cursor-pointer">
            <User className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>
    </nav>
  );
}
