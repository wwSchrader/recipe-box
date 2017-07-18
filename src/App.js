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
    this.addRecipe = this.addRecipe.bind(this);
  }

  openModal() {
    this.setState({
      showModal: true
    });
    console.log(this.state.recipeArray);
  }

  addRecipe(newRecipe) {
    console.log(this.state.recipeArray);
    var recipeArray = this.state.recipeArray.slice();
    recipeArray.push(newRecipe);

    this.setState({
      recipeArray: recipeArray,
      showModal: false
    });
  }

  render() {
    console.log(this.state.recipeArray);
    return (
      <div className="App">
        <RecipeItem recipeArray={this.state.recipeArray} />
        <Button bsStyle="primary" onClick={() => this.openModal()}>Add a Recipe</Button>
        <RecipeModal showModal={this.state.showModal} onAddRecipe={this.addRecipe}/>
      </div>
    );
  }
}

export default App;
