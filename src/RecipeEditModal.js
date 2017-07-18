import React, {Component} from 'react';
import {Modal, Button, FormControl, FormGroup, ControlLabel} from 'react-bootstrap';

class RecipeModal extends Component {
    constructor(props) {
        super(props);

        this.recipeIndex = this.props.recipeIndex;

        this.state = {
            recipe: this.props.recipeArrays[this.recipeIndex],
            showEditModal: this.props.showEditModal,
        };

        this.close = this.close.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.onIngredientChange = this.onIngredientChange.bind(this);
        this.onUpdateRecipe = this.onUpdateRecipe.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            recipe: nextProps.recipeArrays[nextProps.recipeIndex],
            showEditModal: nextProps.showEditModal
        });
    }

    close() {
        this.setState({ showEditModal: false});
    }

    onNameChange(e) {
        var recipe = {...this.state.recipe}
        recipe.name = e.target.value;
        this.setState({recipe});
    }

    onIngredientChange(e) {
        var recipe = {...this.state.recipe}
        recipe.ingredients = e.target.value.split(',');
        this.setState({recipe});
    }

    onUpdateRecipe() {
        this.props.onUpdateRecipe(this.state.recipe);
    }

    render() {
        var displayedIngredients = this.state.recipe.ingredients.join(',');

        return (
            <Modal show={this.state.showEditModal} onHide={this.close}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Recipe</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <FormGroup controlId="recipeText">
                            <ControlLabel>Recipe Name</ControlLabel>
                            <FormControl
                                type='text'
                                placeholder="Name"
                                value={this.state.recipe.name}
                                onChange={this.onNameChange}
                            />
                        </FormGroup>
                        <FormGroup controlId = "ingredientText">
                            <ControlLabel>Ingredients</ControlLabel>
                            <FormControl
                                componentClass = 'textarea'
                                placeholder= "List ingredients seperated by a comma"
                                value={displayedIngredients}
                                onChange={this.onIngredientChange}
                            />
                        </FormGroup>
                        <FormControl.Feedback />
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button bsStyle="primary" onClick={this.onUpdateRecipe}>Update Recipe</Button>
                    <Button onClick={this.close}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default RecipeModal;