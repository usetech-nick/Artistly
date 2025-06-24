import { Music, Users, Headphones, Mic } from "lucide-react";

export default function HomePage() {
  const categories = [
    {
      name: "Singers",
      icon: Music,
      description: "Vocal artists for every genre",
    },
    {
      name: "Dancers",
      icon: Users,
      description: "Professional dance performers",
    },
    {
      name: "DJs",
      icon: Headphones,
      description: "Electronic music specialists",
    },
    {
      name: "Speakers",
      icon: Mic,
      description: "Motivational and keynote speakers",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-blue-600/10"></div>

        <div className="relative max-w-6xl mx-auto px-4 md:px-12 py-20 md:py-32">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium mb-8">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
              Premium Artist Booking Platform
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
              Discover & Book
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                {" "}
                Top Performing
              </span>
              <br />
              Artists
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
              Whether you&apos;re organizing a corporate event, wedding, or
              concert, find the perfect talent to make your event unforgettable.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/artists"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/40 hover:scale-105"
              >
                <span className="relative z-10">Explore Artists</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>

              <a
                href="/onboard"
                className="px-8 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 text-gray-300 rounded-xl font-semibold text-lg hover:bg-gray-700/50 hover:text-white transition-all duration-300 hover:scale-105"
              >
                Join as Artist
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  500+
                </div>
                <div className="text-gray-400 text-sm">
                  Professional Artists
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  1000+
                </div>
                <div className="text-gray-400 text-sm">Events Booked</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  50+
                </div>
                <div className="text-gray-400 text-sm">Cities Covered</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Cards Section */}
      <section className="relative py-20 px-4 md:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Browse by Category
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Find the perfect artist for your event from our diverse range of
              talented performers
            </p>
          </div>

          {/* Category Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, idx) => {
              const Icon = category.icon;
              return (
                <div
                  key={idx}
                  className="group relative bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:bg-gray-700/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 cursor-pointer"
                >
                  {/* Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Icon */}
                  <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                      {category.name}
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {category.description}
                    </p>
                  </div>

                  {/* Hover Arrow */}
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <div className="w-6 h-6 border-2 border-blue-400 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="relative py-20 px-4 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Book Your Perfect Artist?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Join thousands of satisfied clients who found their ideal
              performer through our platform
            </p>
            <a
              href="/artists"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/40 hover:scale-105"
            >
              Start Browsing Artists
              <div className="ml-2 w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
