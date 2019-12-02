import React from 'react';
import Ninjas from "./Ninjas";
import AddNinja from "./AddNinja"

class App extends React.Component {

  state = {
    ninjas: [
      { name: 'abdalkreem', age: 23, belt: 'red', id: 1 },
      { name: 'abdalkreem', age: 20, belt: 'red', id: 2 },
      { name: 'abdalkreem', age: 19, belt: 'red', id: 3 },]
  }
  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja]
    this.setState({
      ninjas: ninjas
    })
  }
  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninja =>{
      return ninja.id !== id
    })
    this.setState({
      ninjas:ninjas
    })
  }
  render() {
    return (
      <div className="App">
        <h1>My First React App </h1>
        <p> Welcome </p>
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} />
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;
