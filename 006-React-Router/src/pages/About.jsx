import React from "react";

const About = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20 px-6 text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            About <span className="text-blue-500">PikuFlix</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            PikuFlix is your go-to streaming platform for the best movies from around the world. 
            We bring you high-quality, latest, and classic movies for a seamless watching experience!
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="container mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Why Choose PikuFlix?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">🎥 Latest Movies</h3>
            <p className="text-gray-600">We update our collection frequently with the latest blockbuster hits.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">💎 High-Quality Streaming</h3>
            <p className="text-gray-600">Enjoy your favorite movies in HD and 4K resolution without interruptions.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">📱 Watch Anywhere</h3>
            <p className="text-gray-600">Stream movies anytime, anywhere on any device of your choice.</p>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="container mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {[
            { id: 1, name: "John Doe", role: "Founder & CEO", image: "https://images.unsplash.com/photo-1544168190-79c17527004f?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { id: 2, name: "Sarah Smith", role: "Head of Content", image: "https://plus.unsplash.com/premium_photo-1661505218403-c684557a824d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            { id: 3, name: "Michael Brown", role: "Lead Developer", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
          ].map((member) => (
            <div key={member.id} className="bg-gray-100 p-6 rounded-lg shadow-md">
              <img src={member.image} alt={member.name} className="w-24 h-24 mx-auto rounded-full mb-4" />
              <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
