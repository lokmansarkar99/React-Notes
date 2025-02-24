import React, { useState } from "react";

const Controlled = () => {
  const [data, setData] = useState("");

  const handleForm = (e) => {
    setData(e.target.value);
    e.preventDefault();
  };

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
          value={data}
          
          
        />
        </label>
        
 </div>

        <button type="submit">Submit</button>
      </form>
      {data}
    </div>
  );
};

export default Controlled;
