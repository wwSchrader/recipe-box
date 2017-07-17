import React, { Component } from 'react';
import './App.css';
import RecipeItem from './RecipeItem.js';
import {Button} from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipeArray: [
      {
        name: 'Pumpkin Pie',
        ingredients: ['pumpkin', 'pie-crust', 'whip cream']
      },
      {
        name: 'Hot Chocolate',
        ingredients: ['Coco mix', 'hot water', 'milk']
      },
      {
        name: 'Cesar Salad',
        ingredients: ['chicken strips', 'romaine lettuce', 'cheese', 'cesar salad dressing']
      }
    ]};
  }
  render() {
    return (
      <div className="App">
        <RecipeItem recipeArray={this.state.recipeArray} />
        <Button bsStyle="primary">Add a Recipe</Button>
      </div>
    );
  }
}

export default App;
