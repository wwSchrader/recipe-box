import React, { Component } from 'react';
import './App.css';
import RecipeItem from './RecipeItem.js';
import {Button} from 'react-bootstrap';
import RecipeModal from './RecipeModal.js';
import RecipeEditModal from './RecipeEditModal.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipeArray: JSON.parse(localStorage.getItem('recipeArray')) ||
        [
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
      showModal: false,
      showEditModal: false,
      recipeToEdit: 0
    };

    this.openModal = this.openModal.bind(this);
    this.addRecipe = this.addRecipe.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
    this.onEditButtonPress = this.onEditButtonPress.bind(this);
  }

  getInitialState() {

  }

  openModal() {
    this.setState({
      showModal: true
    });
  }

  addRecipe(newRecipe) {
    var recipeArray = this.state.recipeArray.slice();
    recipeArray.push(newRecipe);

    this.setState({
      recipeArray: recipeArray,
      showModal: false
    }, () => {
      localStorage.setItem('recipeArray', JSON.stringify(this.state.recipeArray))
    });
  }

  onDelete(index) {
    var recipeArray = this.state.recipeArray.slice();
    recipeArray.splice(index.index, 1);
    this.setState({
      recipeArray: recipeArray
    }, () => {
      localStorage.setItem('recipeArray', JSON.stringify(this.state.recipeArray))
    });
  }

  onUpdate(updatedRecipe) {
    var recipeArray = this.state.recipeArray.slice();
    recipeArray.splice(this.state.recipeToEdit, 1, updatedRecipe);
    this.setState({
      recipeArray: recipeArray,
      showEditModal: false
    }, () => {
      localStorage.setItem('recipeArray', JSON.stringify(this.state.recipeArray))
    });
  }

  onEditButtonPress(index) {
    this.setState({
      showEditModal: true,
      recipeToEdit: index.index
    });
  }

  render() {
    return (
      <div className="App">
        <RecipeItem
          recipeArray={this.state.recipeArray}
          onDelete={this.onDelete}
          onEditButton={this.onEditButtonPress}/>
        <Button
          bsStyle="primary"
          onClick={() => this.openModal()}>Add a Recipe</Button>
        <RecipeModal
          showModal={this.state.showModal}
          onAddRecipe={this.addRecipe}/>
        <RecipeEditModal
          showEditModal={this.state.showEditModal}
          onUpdateRecipe={this.onUpdate}
          recipeIndex={this.state.recipeToEdit}
          recipeArrays={this.state.recipeArray}/>
      </div>
    );
  }
}

export default App;
