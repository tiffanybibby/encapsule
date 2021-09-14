import "./SignIn.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { signIn } from "../../services/users";
import Layout from "../../components/Layout/Layout";

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
        <button type="submit" className={toggleForm}>
          {form.errorMsg}
        </button>
      );
    } else {
      return <button type="submit">Sign In</button>;
    }
  };

  const { email, password } = form;

  return (
    <Layout>
      <div className="sign-in">
        <div className="form-container">
          <h3>Sign In</h3>
          <form onSubmit={onSignIn}>
            <label>Email</label>
            <input
              required
              type="text"
              name="email"
              value={email}
              placeholder="Enter Email"
              onChange={handleChange}
            />
            <label>Password</label>
            <input
              required
              name="password"
              value={password}
              type="password"
              placeholder="Password"
              onChange={handleChange}
            />
            {renderError()}
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default SignIn;
