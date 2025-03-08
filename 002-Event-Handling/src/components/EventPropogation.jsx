const EventPropagation = () => {

  // Grandparent capture handler (top-down capturing phase)
  const handleGrandParentCapture = () => {
    console.log('Grand Parent Captured');
  };

  // Grandparent bubble handler (bottom-up bubbling phase)
  const handleGrandParentBubble = () => {
    console.log('Grand Parent Bubbled');
  };

  // Parent capture handler
  const handleParentCapture = () => {
    console.log('Parent Captured');
    // If you want to stop the event from reaching the child in the capturing phase, uncomment below
    // event.stopPropagation();
  };

  // Parent bubble handler
  const handleParentBubble = () => {
    console.log('Parent Bubbled');
  };

  // Child capture handler
  const handleChildCapture = () => {
    console.log('Child Captured');
  };

  // Child bubble handler (this one is the most common in normal apps)
  const handleChildBubble = () => {
    console.log('Child Bubbled');
  };

  return (
    <section>
      {/* Grandparent div - listens for both capture and bubble phases */}
      <div
        className="g-div"
        onClickCapture={handleGrandParentCapture} // Capturing phase handler
        onClick={handleGrandParentBubble} // Bubbling phase handler
      >
        {/* Parent div - listens for both capture and bubble phases */}
        <div
          className="p-div"
          onClickCapture={handleParentCapture}
          onClick={handleParentBubble}
        >
          {/* Child button - listens for both capture and bubble phases */}
          <button
            className="c-div"
            onClickCapture={handleChildCapture}
            onClick={handleChildBubble}
          >
            Child Div
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventPropagation;
