import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted', formData);

  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#121212', color: '#ffffff' }}>
      <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '400px', padding: '20px', borderRadius: '8px', backgroundColor: '#1e1e1e', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.6)' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px', fontSize: '1.5rem' }}>Contact Us</h2>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: 'none', backgroundColor: '#2a2a2a', color: '#ffffff' }}
            required
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: 'none', backgroundColor: '#2a2a2a', color: '#ffffff' }}
            required
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="message" style={{ display: 'block', marginBottom: '5px' }}>Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: 'none', backgroundColor: '#2a2a2a', color: '#ffffff', resize: 'none' }}
            required
          ></textarea>
        </div>
        <button type="submit" style={{ width: '100%', padding: '10px', borderRadius: '4px', backgroundColor: '#6200ea', color: '#ffffff', border: 'none', cursor: 'pointer', fontSize: '1rem' }}>Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;
