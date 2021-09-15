import "./SignIn.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { signIn } from "../../services/users";
import Layout from "../../components/Layout/Layout";
import { Link } from 'react-router-dom'

const SignIn = (props) => {
  const history = useHistory();

  const [form, setForm] = useState({
    email: "",
    password: "",
    isError: false,
    errorMsg: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onSignIn = async (e) => {
    e.preventDefault();
    const { setUser } = props;
    try {
      const user = await signIn(form);
      setUser(user);
      history.push("/items");
    } catch (error) {
      console.error(error);
      setForm({
        isError: true,
        errorMsg: "Invalid Credentials",
        email: "",
        password: "",
      });
    }
  };

  const renderError = () => {
    const toggleForm = form.isError ? "danger" : "";
    if (form.isError) {
      return (
        <button className="sign-in-button" type="submit" className={toggleForm}>
          {form.errorMsg}
        </button>
      );
    } else {
      return <button className="sign-in-button" type="submit">Sign In</button>;
    }
  };

  const { email, password } = form;

  return (
    <Layout>
      <div className="sign-in">
        <div className="form-container">
          <form onSubmit={onSignIn}>
            <div className="sign-in-email">
              <label>Email</label>
              <br/>
              <input
                required
                type="text"
                name="email"
                value={email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Password</label>
              <br/>
              <input
                required
                name="password"
                value={password}
                type="password"
                onChange={handleChange}
              />
            </div>
            {renderError()}
          </form>
          <Link className="sign-up-link" to="/sign-up">Don't have an account?</Link>
        </div>
      </div>
    </Layout>
  );
};

export default SignIn;
