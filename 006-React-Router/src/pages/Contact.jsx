import React from "react";

const Contact = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100 flex flex-col items-center justify-center py-12 px-4">
      {/* Contact Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Get in Touch</h1>
        <p className="text-lg text-gray-600 mt-2">
          Have questions? We’d love to hear from you!
        </p>
      </div>

      {/* Contact Info Section */}
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-6 shadow-md rounded-lg text-center">
          <h3 className="text-xl font-semibold text-gray-900">📍 Address</h3>
          <p className="text-gray-600">123 Movie Street, Hollywood, USA</p>
        </div>
        <div className="bg-white p-6 shadow-md rounded-lg text-center">
          <h3 className="text-xl font-semibold text-gray-900">📞 Phone</h3>
          <p className="text-gray-600">+1 234 567 890</p>
        </div>
        <div className="bg-white p-6 shadow-md rounded-lg text-center">
          <h3 className="text-xl font-semibold text-gray-900">📧 Email</h3>
          <p className="text-gray-600">support@pikuflix.com</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-900 text-center mb-6">Send Us a Message</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium">Your Name</label>
            <input
              type="text"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Your Email</label>
            <input
              type="email"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Your Message</label>
            <textarea
              rows="4"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your message..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Google Map (Optional) */}
      <div className="w-full max-w-4xl mt-10">
        <iframe
          className="w-full h-64 rounded-lg shadow-md"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093745!2d144.95592831550457!3d-37.817209742014566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4826f77fdf%3A0x506f1af1683a5a99!2sMelbourne%2C%20Victoria%2C%20Australia!5e0!3m2!1sen!2sus!4v1648732931392!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
