const EventProps = () => {
  const handleWelcomeUser = name => {
    alert(`Welcome ${name}`);
  };
  const handleHover = () => {
    alert('Hovered');
  };

  return (
    <div>
      <WelcomeUser
        onclick={() => {
          handleWelcomeUser('Lokman');
        }}
        onMouseEnter={handleHover}
      />
    </div>
  );
};

export default EventProps;

export const WelcomeUser = ({ onclick, onMouseEnter }) => {
  const handleGreeting = () => {
    alert('Hello From greeting');
    onclick();
  };
  return (
    <div>
      <button onClick={onclick}>Click Me</button>
      <button onMouseEnter={onMouseEnter}>Hover</button>
      <button onClick={handleGreeting}>Greeting</button>
    </div>
  );
};
