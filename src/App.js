import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Logo from './component/Logo';
import Recipes from './component/Recipes';

class App extends Component {
  constructor() {
    super();

    this.state = {
      pop: ""
    }
  }

  closePop = () => {
    this.setState({pop: ""})
  }

  popup = (data) => {
    console.log(data);
    this.setState({
      pop: <div className="popup-page">
      <p style={{float: "right", margin: "10px", fontSize: "30px", cursor: "pointer"}} onClick={this.closePop}>X</p>
      <div className="content">
        <div className="left">
         <p>Recipe:</p>
         <img className="newImage" src={data.image} />
         <p>Details:</p>
         <div className="newDet">
         Pizza (Italian: [ˈpittsa], Neapolitan: [ˈpittsə]) is a savory dish of Italian origin consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients (such as anchovies, mushrooms, onions, olives, pineapple, meat, etc.) which is then baked at a high temperature, traditionally in a wood-fired oven.[1] A small pizza is sometimes called a pizzetta. A person who makes pizza is known as a pizzaiolo.
         </div>
        </div>
        <div className="right">
          <p>Title:</p>
          <div>{data.name}</div>
          <p>Label:</p>
          <div>{data.label}</div>
          <p>Add Comments</p>
          <textarea>
          
          </textarea>
        </div>
      </div>
    </div>
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.pop}
        <Logo/>
        <Recipes popupPage={this.popup}/>
      </div>
    );
  }
}

export default App;
