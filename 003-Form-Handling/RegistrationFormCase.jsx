import { useState } from "react";
import "./RegistrationForm.css";
const RegistrationFormCase = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");


const handleChange = (e) => {
const {name, value} = e.target
switch (name) {
    case "name":
        setName(value)
        break;
    case "email":
        setEmail(value)
        break;
    case "password":
        setPassword(value)
        break;
    case "phone":
        setPhone(value)
    default:
        break;
}

}

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
          <h2>Sign Up Case</h2>

          <div className="input-forms">
            <p>Please fill the information to sign up</p>
            <div className="input-div">
              <label htmlFor="">Full Name </label>
              <input type="text" name="name"  value={name} onChange={handleChange} />
            </div>

            <div className="input-div">
              <label htmlFor=""> Email </label>
              <input type="email" name="email" value={email} onChange={handleChange} />
            </div>

            <div className="input-div">
              <label htmlFor=""> Password</label>
              <input type="password" name="password" value={password} onChange={handleChange} />
            </div>

            <div className="input-div">
              <label htmlFor=""> Phone </label>
              <input type="text" name="phone" value={phone} onChange={handleChange} />
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

export default RegistrationFormCase;
