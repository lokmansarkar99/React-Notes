

const UnControlled = () => {



  const handleSubmit = (e) => {
    e.preventDefault()
    const value = document.querySelector("#inputName").value
    console.log(value)
  }

  return (
    <div>
      <form action="" style={{ padding: "20px" }} onSubmit={handleSubmit}>
 <div>
 <label htmlFor="" style={{ fontSize: "20px" }}>
          Name:
          <input
          style={{
            padding: "10px 10px 10px 10px",
            margin: "10px",
            width: "60%",
            border: "none",
            borderBottom: "3px solid black",
            backgroundColor: "pink",
            borderRadius: "5px",
            outline: "none"
          }}
          type="text"
          id="inputName"
          
          
        />
        </label>
        
 </div>

        <button type="submit">Submit</button>
      </form>
    
    </div>
  );
};

export default UnControlled;
