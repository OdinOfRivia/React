class Card extends React.Component {
  //You cant declare variables outside the render method
  render() {
    //variable declaration
    // const x = '1'
    const name = "Rottweiler"
    const imageURL = "https://images.dog.ceo/breeds/saluki/n02091831_304.jpg"

    //JSX  (we can write HTML elements in js)
    return (
      //JSX elements
      <div className="row">
        <div className="col">
            <div className="card medium">
              <div className="card-image">
                    <img src={imageURL}  alt=""/>
              </div>
               <div className="car-content">
                <p>{name}</p>
               </div>
            </div>
        </div>
      </div>
    );
  }
}
