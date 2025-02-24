import './ToogleSwitch.css';
import { useState } from 'react';

const ToogleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToogleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <div>
      <h1
        className="title"
        style={{ textAlign: 'center', marginBottom: '20px' }}
      >
        Toggle Switch
      </h1>
      <div className="container">
        <div
          className={`toggle-switch ${isOn ? 'on' : 'off'}`}
          onClick={handleToogleSwitch}
        >
          <div className="switch">
            <span className="switch-state">{isOn ? 'ON' : 'OFF'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToogleSwitch;
