

import React from "react";
import ReactDOM from "react-dom";

const name = "Odin ";
const isAuthenticated = true;
const greeting = <h1>Hello {name}</h1>;

const name2 = { hey: ": Object val" };

const greeting2 = `and this is my ${name2.hey}`;

const sayGreeting = () => <div></div>;

function Header(props) {
  return <h1>Hello {props.username}</h1>;
}

function Layout(props) {
  console.log(props);
  return (
    <div style={{ backgroundColor: "royalBlue", color: "white" }}>
      {/* //props.children represents what is inbetween the <Layout> tag 
              if we dont use it, we wont see what is inside the <layout>*/}

      {props.children}
    </div>
  );
}

function Login() {
  return <div>Login form here...</div>;
}

function SignOut() {
  return <button>Sign out</button>;
}

const rootNode = document.getElementById("root");

function App(params) {
  return (
    <Layout>
      {isAuthenticated ? (
        <>
          <Header username="Odin2" />
          <SignOut />
        </>
      ) : (
        <Login />
      )}
    </Layout>
  );
}

ReactDOM.render(<App/>,rootNode);








