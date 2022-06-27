// import { Link } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";
import axios from "axios";
import { useContext, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { loginCall } from "../apiCalls";
import { AuthContext } from "../context/AuthContext";

function Register() {
  const loading = <CircularProgress />;
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  const history = useHistory();
  const handleClick = async (e) => {
    e.preventDefault();
    if (confirmPassword.current.value !== password.current.value) {
      confirmPassword.current.setCustomValidity("Password don't match");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
        // confirmPassword: confirmPassword.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        history.push("/login");
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <>
      <RegisterStyled>
        <form onSubmit={handleClick}>
          <div className="brand">
            <img src="assets/logo.svg" alt="" />
            <h1>Chat App</h1>
          </div>
          <input
            type="text"
            placeholder="Username"
            required
            name="username"
            min="3"
            ref={username}
          />
          <input
            type="email"
            placeholder="Email"
            required
            name="email"
            ref={email}
          />
          <input
            type="password"
            placeholder="Password"
            required
            name="password"
            ref={password}
            minLength="5"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="password"
            ref={confirmPassword}
          />
          <button type="submit">Register</button>
          <span>
            Already have an account ? <Link to="/login">Login</Link>
          </span>
        </form>
      </RegisterStyled>
    </>
  );
}
const RegisterStyled = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: white;
  flex-wrap: wrap;
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 3rem;
    }
    h1 {
      color: black;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    background-color: #efefef;
    border-radius: 5px;
    padding: 2.5rem 5rem;
    /* height: 80%; */
    @media screen and (max-width: 900px) {
      padding: 2.5rem 4rem;
    }
    input {
      background-color: transparent;
      padding: 0.7rem;
      border: 0.1rem solid darkgray;
      border-radius: 0.4rem;
      color: white;
      width: 100%;
      font-size: 1rem;
      &:focus {
        border: 0.1rem solid black;
        outline: none;
      }
    }
    button {
      background-color: black;
      color: white;
      padding: 1rem 1rem;
      border: none;
      font-weight: bold;
      cursor: pointer;
      border-radius: 5px;
      font-size: 1rem;
      text-transform: uppercase;
      transition: 0.5s ease-in-out;
      &:hover {
        background-color: grey;
      }
    }
    span {
      color: black;
      font-weight: bolder;
    }
  }
`;
export default Register;
