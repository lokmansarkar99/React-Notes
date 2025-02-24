

const ClearButton = ({setTask}) => {
      // Clear all tasks
  const handleClearAll = () => {
    setTask([]);
  };
  return (
    <section>
    <button className="clear-btn" onClick={handleClearAll}>
      Clear All
    </button>
  </section>
  )
}

export default ClearButton