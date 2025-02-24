import { useState } from "react";
import "./RegistrationForm.css";
const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

const handleFormSubmit = (e) => {
e.preventDefault()
const data = {
    name: name,
    email: email,
    password: password,
    phone: phone

}

console.log(data)
}

  return (
    <section className="main">
      <section className="register">
        <form action="" onSubmit={handleFormSubmit}>
          <h2>Sign Up</h2>

          <div className="input-forms">
            <p>Please fill the information to sign up</p>
            <div className="input-div">
              <label htmlFor="">Full Name </label>
              <input type="text" value={name} onChange={(e)=> {setName(e.target.value)}} />
            </div>

            <div className="input-div">
              <label htmlFor=""> Email </label>
              <input type="email" value={email} onChange={(e)=> {setEmail(e.target.value)}} />
            </div>

            <div className="input-div">
              <label htmlFor=""> Password</label>
              <input type="password" value={password} onChange={(e)=> {setPassword(e.target.value)}} />
            </div>

            <div className="input-div">
              <label htmlFor=""> Phone </label>
              <input type="text" value={phone} onChange={(e)=> {setPhone(e.target.value)}} />
            </div>
          </div>

          <p>By creating an account you agree our terms.</p>
          <div className="btn">
            <button type="submit">Submit</button>
          </div>
        </form>
      </section>
    </section>
  );
};

export default RegistrationForm;
