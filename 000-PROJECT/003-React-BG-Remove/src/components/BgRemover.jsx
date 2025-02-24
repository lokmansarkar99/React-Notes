import { useState } from 'react';
import axios from 'axios';

const BgRemover = () => {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) {
      alert('No file selected.');
      return;
    }
    setImage(file);
    setResult(null); // Clear previous result
  };

  const removeBackground = async () => {
    if (!image) return alert('Please upload an image first.');
    setLoading(true);

    const formData = new FormData();
    formData.append('image_file', image);

    try {
      const response = await axios({
        method: 'POST',
        url: 'https://background-remover.p.rapidapi.com/remove-background',
        headers: {
          'x-rapidapi-key': '71c8ecf161msh54666a03a28f32ep1c6416jsn5d23ba30e9d7',
          'x-rapidapi-host': 'background-remover.p.rapidapi.com',
        },
        data: formData,
      });

      setResult(response.data.result_b64);
    } catch (error) {
      console.error('Error removing background:', error);
      alert('Failed to remove background. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={removeBackground} disabled={loading}>
        {loading ? 'Processing...' : 'Remove Background'}
      </button>

      {result && (
        <div>
          <h2>Result:</h2>
          <img src={`data:image/png;base64,${result}`} alt="Background Removed" />
        </div>
      )}
    </div>
  );
};

export default BgRemover;
