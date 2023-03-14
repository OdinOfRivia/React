

function App() {
    return (
  <div>
    <Card name={dogs[0].name} image={dogs[0].image} />
    <Card name={dogs[1].name} image={dogs[1].image} />
    <Card name={dogs[2].name} image={dogs[2].image} />
    <Card name={dogs[3].name} image={dogs[3].image} />
    <Card name={dogs[4].name} image={dogs[4].image} />
  </div>)
}


ReactDOM.createRoot(document.querySelector('.root')).render(
    <App />
)