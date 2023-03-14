class Card extends React.Component {
  render() {
    console.log(this.props);

    return (
      <div className="row">
        <div className="col">
          <div className="card medium">


            <div className="card-image">
              <img src={this.props.image} alt="" />
            </div>
            <div className="card-content">
            
              <p>{this.props.name}</p>
            </div>


            
          </div>
        </div>
      </div>
    );
  }
}
