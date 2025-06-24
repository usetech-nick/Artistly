"use client";
import MultiSelectDropdown from "@/components/MultiSelectDropdown";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Music2, Upload } from "lucide-react";

export default function OnboardForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const languageOptions = ["English", "Hindi", "Tamil", "Bengali", "Punjabi"];
  const [previewImage, setPreviewImage] = useState(null);

  const onSubmit = (data) => {
    console.log("Form submitted ✅", data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Header Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-blue-600/10 border-b border-gray-700/50">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium mb-6">
              <Music2 className="w-4 h-4 mr-2" />
              Join Our Platform
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
              Artist
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                {" "}
                Onboarding
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Share your talent with the world. Complete your profile to start
              receiving booking requests.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-8">
        <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name Field */}
            <div>
              <label className="block mb-2 font-semibold text-white">
                Name
              </label>
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                className="w-full border border-gray-600/50 bg-gray-700/50 px-4 py-3 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="Enter your full name"
              />
              {errors.name && (
                <p className="text-red-400 text-sm mt-2">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Bio Field */}
            <div>
              <label className="block mb-2 font-semibold text-white">Bio</label>
              <textarea
                {...register("bio")}
                className="w-full border border-gray-600/50 bg-gray-700/50 px-4 py-3 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                rows={4}
                placeholder="Tell us about yourself and your artistic journey..."
              />
            </div>

            {/* Category Multi-Select */}
            <MultiSelectDropdown
              name="category"
              label="Categories"
              options={["DJ", "Singer", "Dancer", "Speaker"]}
              control={control}
              error={errors.category}
            />

            {/* Languages Section */}
            <div>
              <label className="block mb-3 font-semibold text-white">
                Languages Spoken
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {languageOptions.map((lang) => (
                  <label
                    key={lang}
                    className="flex items-center space-x-3 cursor-pointer group"
                  >
                    <input
                      type="checkbox"
                      value={lang}
                      {...register("languages", {
                        validate: (value) =>
                          value.length > 0 || "Select at least one language",
                      })}
                      className="w-4 h-4 text-blue-600 bg-gray-700/50 border-gray-600/50 rounded focus:ring-blue-500 focus:ring-2"
                    />
                    <span className="text-gray-300 group-hover:text-blue-300 transition-colors duration-200">
                      {lang}
                    </span>
                  </label>
                ))}
              </div>
              {errors.languages && (
                <p className="text-red-400 text-sm mt-2">
                  {errors.languages.message}
                </p>
              )}
            </div>

            {/* Profile Image Upload */}
            <div>
              <label className="block mb-2 font-semibold text-white">
                Profile Image (optional)
              </label>
              <div className="relative">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      setPreviewImage(URL.createObjectURL(file));
                    }
                  }}
                  className="hidden"
                  id="profile-image"
                />
                <label
                  htmlFor="profile-image"
                  className="flex items-center justify-center w-full px-4 py-6 bg-gray-700/50 border-2 border-dashed border-gray-600/50 rounded-xl cursor-pointer hover:bg-gray-600/50 hover:border-blue-500/50 transition-all duration-200 group"
                >
                  <div className="text-center">
                    <Upload className="w-8 h-8 text-gray-400 group-hover:text-blue-400 mx-auto mb-2 transition-colors duration-200" />
                    <span className="text-gray-400 group-hover:text-blue-400 transition-colors duration-200">
                      Click to upload or drag and drop
                    </span>
                  </div>
                </label>
              </div>
              {previewImage && (
                <div className="mt-4 flex justify-center">
                  <Image
                    src={previewImage}
                    alt="Preview"
                    className="w-32 h-32 object-cover rounded-xl border border-gray-600/50"
                  />
                </div>
              )}
            </div>

            {/* Fee Range */}
            <div>
              <label className="block mb-2 font-semibold text-white">
                Fee Range
              </label>
              <select
                {...register("feeRange", { required: "Fee range is required" })}
                className="w-full border border-gray-600/50 bg-gray-700/50 px-4 py-3 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 appearance-none cursor-pointer"
              >
                <option value="">Select Range</option>
                <option value="low">Under ₹10,000</option>
                <option value="mid">₹10,000 – ₹19,999</option>
                <option value="high">₹20,000 – ₹29,999</option>
                <option value="premium">₹30,000+</option>
              </select>
              {errors.feeRange && (
                <p className="text-red-400 text-sm mt-2">
                  {errors.feeRange.message}
                </p>
              )}
            </div>

            {/* Location */}
            <div>
              <label className="block mb-2 font-semibold text-white">
                Location
              </label>
              <input
                type="text"
                {...register("location", { required: "Location is required" })}
                className="w-full border border-gray-600/50 bg-gray-700/50 px-4 py-3 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="Enter your city or location"
              />
              {errors.location && (
                <p className="text-red-400 text-sm mt-2">
                  {errors.location.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              Submit Artist Profile
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
