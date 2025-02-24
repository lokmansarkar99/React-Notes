import { useState } from "react";
import "./RegistrationForm.css";
const RegistrationFormActual = () => {
 const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: ""
 })


const handleChange = (e) => {
const {name, value} = e.target
// setUser((pre) => { ...pre, [name]: value})
   setUser((prev) => ({ ...prev, [name]: value }));
console.log(e)

}

const handleFormSubmit = (e) => {
e.preventDefault()




console.log(user)


}

  return (
    <section className="main">
      <section className="register">
        <form action="" onSubmit={handleFormSubmit}>
          <h2>Sign Up Actual Form</h2>

          <div className="input-forms">
            <p>Please fill the information to sign up</p>
            <div className="input-div">
              <label htmlFor="">Full Name </label>
              <input type="text" id="name" name="name"  value={user.name} onChange={handleChange} />
            </div>

            <div className="input-div">
              <label htmlFor=""> Email </label>
              <input type="email" id="email" name="email" value={user.email} onChange={handleChange} />
            </div>

            <div className="input-div">
              <label htmlFor=""> Password</label>
              <input type="password" name="password" value={user.password} onChange={handleChange} />
            </div>

            <div className="input-div">
              <label htmlFor=""> Phone </label>
              <input type="text" name="phone" value={user.phone} onChange={handleChange} />
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

export default RegistrationFormActual;
