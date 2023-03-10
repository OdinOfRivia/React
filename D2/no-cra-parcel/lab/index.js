import React from "react";
import ReactDOM from "react-dom";

function myIcons() {
  const icon = {
    Instagram: "fa fa-instagram",
    Facebook: "fa fa-facebook",
    Twitter: "fa fa-twitter",
    LinkedIn: "fa fa-linkedin",
    YouTube: "fa fa-youtube",
    Github: "fa fa-github",
  };

  const elements = Object.entries(icon).map(([iconName, iconFontAwsome], index) => {
      console.log(index);
    return (
      <div className="button" key={iconName}>
        <div className="icon">
          <i className={iconFontAwsome}></i>
        </div>
        <span>{key}</span>
      </div>
    )
  })

  return(
    <div className="wrapper">
        {elements}
    </div>
  )

}

class App extends React.Component {
  render() {
    return myIcons()
  }
}

const rootNode = document.getElementById("root");
ReactDOM.render(<App />, rootNode);
