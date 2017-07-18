import React, { Component } from 'react';
import './App.css';
import RecipeItem from './RecipeItem.js';
import {Button} from 'react-bootstrap';
import RecipeModal from './RecipeModal.js';

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
      ],
      showModal: false
    };

    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({
      showModal: true
    })
  }

  render() {
    return (
      <div className="App">
        <RecipeItem recipeArray={this.state.recipeArray} />
        <Button bsStyle="primary" onClick={() => this.openModal()}>Add a Recipe</Button>
        <RecipeModal showModal={this.state.showModal} />
      </div>
    );
  }
}

export default App;
