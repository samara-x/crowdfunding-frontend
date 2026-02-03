import { useState } from "react";
import postLogin from "../api/post-login.js";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/use-auth.js";

function LoginForm() {
    const navigate = useNavigate();
    const {auth, setAuth} = useAuth();

    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    });

    const handleChange = (event) => {
        const { id, value } = event.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [id]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (credentials.username && credentials.password) {
            postLogin(credentials.username, credentials.password)
                .then((data) => {
                    window.localStorage.setItem("token", data.token);
                    setAuth({ token: data.token });
                    navigate("/");
                    console.log("Login successful:", data);
                })
                .catch((error) => {
                    console.error("Login failed:", error);
                });
        }
    };

    // if the above is failing or has an error, try replacing with
    // const handleSubmit = (event) => {
    //    event.preventDefault();
    //   if (credentials.username && credentials.password) {
    //        postLogin().then((response) => {
    //            window.localStorage.setItem("token", response.token);
    // https://github.com/SheCodesAus/PlusLessonContent/blob/main/4_JS_and_React/fetch_and_post/fetch_and_post.md#1----the-login-page-
return (
    <form>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" placeholder="Enter username" onChange={handleChange} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" placeholder="Enter password" onChange={handleChange} />
      </div>
      <button type="submit" onClick={handleSubmit}>
        Login
      </button>
    </form>
  );
}

export default LoginForm;