import React from "react";
import ReactDOM from "react-dom";

// function App() {
//   const people = ["hoge", "Boke", "Poke"];

//   return peopleList = people.map(person => <p>{person}</p>)
// }

function Person(props) {
  const handleClick = (e) => console.log(e);

  const handleChange = (e) =>{
    console.log(e.target.value);
  }

  return (
    <input onChange={handleChange} />
  //   <li onClick={handleClick}>
  //   {props.name}
  //   <input value={props.name} />
  // </li>
    
  )
}

function App() {
  const people = ["hoge", "Boke", "Poke"];

  return (
    <ul>
      {/* map returns 3 things the person, the indexValue and the array */}
      {people.map((person, index) => (
        //we will use this index value to set a unique key to each person
        //so we know who is who even if they have the same name.
        //when using API's use the id instead of an index value.
        <React.Fragment key={index}>
          <Person name={person} />
        </React.Fragment>
      ))}
    </ul>
  );
}

const rootNode = document.getElementById("root");
ReactDOM.render(<App />, rootNode);
