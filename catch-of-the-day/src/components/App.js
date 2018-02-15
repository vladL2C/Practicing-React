import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

class App extends React.Component {
  constructor() {
    super();
    //initialState 
    //getInitialState
    this.addFish = this.addFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
    this.addToOrder = this.addToOrder.bind(this);
    this.state = {
      fishes: {},
      order: {}
    };
  }

  addFish(fish) {
    //update our state
    const fishes = {...this.state.fishes};
    //add in our new fish
    const timestamp = Date.now();
    fishes[`fish-${timestamp}`] = fish;
    // set state
    this.setState({ fishes: sampleFishes });
    //this.state.fish1 = fish
  }

  loadSamples() {
    this.setState({ fishes: sampleFishes});
  }

  addToOrder(key) {
    // take a copy of our state
    const order = {...this.state.order};
    //update or add the new number of fish ordered
    order[key] = order[key] + 1 || 1;
    //update our state
    this.setState({ order });
  }

  render() {
    return (
       <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
          <ul className="list-of-fishes">
            {Object.keys(this.state.fishes)
              .map(key => <Fish key={key} index={key} 
                details={this.state.fishes[key]} addToOrder={this.addToOrder}/>)
            }
          </ul>
        </div>
        <Order/>
        <Inventory loadSamples={this.loadSamples} addFish={this.addFish}/>
       </div>
    )
  }
}

export default App;