import { isEmail } from "validator";
import { useState } from "react";
import { loginUser } from "../utils/LoginUtil";
import { useNavigate } from "react-router-dom";
const LoginScreen = () => {
  const navigateto = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const credentialsValidator = ({ email, password }) => {
    if (isEmail(email) && password?.length > 8) {
      return true;
    } else {
      return false;
    }
  };
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (!credentialsValidator(credentials)) {
        return;
      }
      await loginUser({ ...credentials });
      navigateto("/to-do");
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="screen">
        <h1 className="ui heading center">Login</h1>
        <div>
          <form className="ui form" onSubmit={handleSubmit}>
            <div className="field">
              <label>Email</label>
              <input
                type="text"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                value={credentials.email}
              />
            </div>
            <div className="field">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                value={credentials.password}
              />
            </div>
            <button className="ui button" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginScreen;
