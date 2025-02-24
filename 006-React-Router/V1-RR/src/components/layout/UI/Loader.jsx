import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="flex flex-col items-center">
        {/* Spinning Loader */}
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>

        {/* Loading Text */}
        <p className="mt-4 text-lg font-semibold text-gray-900">
          🎥 Loading Movies...
        </p>
      </div>
    </div>
  );
};

export default Loader;
