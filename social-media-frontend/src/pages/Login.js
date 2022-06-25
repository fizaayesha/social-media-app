// import { Link } from "react-router-dom";
import React, { useContext, useRef } from "react";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContext";
import { loginCall } from "./apiCalls";
function Login() {
  const username = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);
  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { username: username.current.value, password: password.current.value },
      dispatch
    );
    // console.log(username);
  };
  console.log(user);
  return (
    <>
      <LoginStyled>
        <form onSubmit={handleClick}>
          <div className="brand">
            <img src="Assets/orprofile.webp" alt="" />
            <h1>Chat App</h1>
          </div>
          <input
            type="text"
            required
            placeholder="Username"
            name="username"
            min="3"
            ref={username}
          />
          <input
            type="password"
            required
            placeholder="Password"
            name="password"
            minLength="5"
            ref={password}
          />
          <button type="submit">Login</button>
          <span>Create new Account ?</span>
        </form>
      </LoginStyled>
    </>
  );
}
const LoginStyled = styled.div`
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
      height: 4.5rem;
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
    @media screen and (max-width: 900px) {
      padding: 2.5rem 4rem;
    }
    input {
      background-color: transparent;
      padding: 0.7rem;
      border: 0.1rem solid darkgray;
      border-radius: 0.4rem;
      color: black;
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
      color: white;
      * {
        color: #4e0eff;
        text-transform: none;
        font-weight: bold;
      }
    }
  }
`;
export default Login;
