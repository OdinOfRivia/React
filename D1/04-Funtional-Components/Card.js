function Card(props) {

  // we can also do this just remmeber to remove props from the params in the img/p tag
  //funtion Card(name, image)

    return (
      <div className="row">
      <div className="col">
        <div className="card medium">
          <div className="card-image">
            <img src={props.image} alt="" />
          </div>
          <div className="card-content">
            <p>{props.name}</p>
          </div>
        </div>
      </div>
    </div>
  )

}
