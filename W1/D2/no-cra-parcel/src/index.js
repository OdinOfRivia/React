import React from "react";
import ReactDOM from "react-dom";

const name = "Odin ";
const isAuthenticated = true;
const greeting = <h1>Hello {name}</h1>;

const name2 = { hey: ": Object val" };
// when we use obbjects we cannot place them inside child elements
// down bellow it only  worsks because we using .hey to access it

const greeting2 = `and this is my ${name2.hey}`;



// const oi = (
//   <div>
//     <h1>Hey my name is {name}</h1>
//     <p>and this is my {greeting2}</p>
//   </div>
// );

// function sayGreeting() {
//   if (isAuthenticated) {
//     return (
//       <div>
//         <h1>Hey my name is {name}</h1>
//         <p>and this is my {greeting2}</p>
//       </div>
//     )
//   } else {
//     return greeting;
//   }
// }

//if we use arrow funtion, this is how we should do it
// and dont forget paranteces, here they are a must
const sayGreeting = () => <div></div>;

// ReactDOM.render(sayGreeting(), rootNode);

// ReactDOM.render(oi, rootNode);

// const constBtn = (
//   <button style={{ backgroundColor: "blue", color: "white" }}>
//     Press Here
//   </button>
// );
//ReactDOM.render(constBtn, rootNode)

// function Text() {
//   return (
//     <div>
//       <h1>Hey my name is Odin</h1>
//     </div>
//   );
// }

// ReactDOM.render(<div><Text/> <Text/> <Text/> <Text/></div>, rootNode)

//ReactDOM.render(<Header username= "Odin"/>, rootNode)

function Header(props) {
  // if(isAuthenticated){
  //     return <h1>Hello {props.username}</h1>;

  // }else{
  //     return <h1>Not a username</h1>;
  // }

  // if(isAuthenticated){
  //     return <h1>Hello {props.username}</h1>;
  // }
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
    return <div>Login form here...</div>
}

function SignOut() {
    return <button>Sign out</button>
}

const rootNode = document.getElementById("root");

ReactDOM.render(
  <Layout>
    {isAuthenticated ? <Header username="Odin" /> : <Login />}
    {isAuthenticated && <SignOut />}
  </Layout>,
  rootNode
);


