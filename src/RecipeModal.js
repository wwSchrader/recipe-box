import React, {Component} from 'react';
import {Modal, Button, FormControl, FormGroup, ControlLabel} from 'react-bootstrap';

class RecipeModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showModal: this.props.showModal
        }

        this.close = this.close.bind(this);
        this.onAddRecipe = this.onAddRecipe.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.onIngredientChange = this.onIngredientChange.bind(this);

        this.name = '';
        this.ingredients = '';
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            showModal: nextProps.showModal
        });
    }

    close() {
        this.setState({ showModal: false});
    }

    onNameChange(e) {
        this.name = e.target.value;
    }

    onIngredientChange(e) {
        this.ingredients = e.target.value;
    }

    onAddRecipe() {
        this.props.onAddRecipe({
            name: this.name,
            ingredients: this.ingredients.split(',')
        });
    }

    render() {
        return (
            <Modal show={this.state.showModal} onHide={this.close}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Recipe</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <FormGroup controlId="recipeText">
                            <ControlLabel>Recipe Name</ControlLabel>
                            <FormControl
                                type='text'
                                placeholder="Name"
                                onChange={this.onNameChange}
                            />
                        </FormGroup>
                        <FormGroup controlId = "ingredientText">
                            <ControlLabel>Ingredients</ControlLabel>
                            <FormControl
                                componentClass = 'textarea'
                                placeholder= "List ingredients seperated by a comma"
                                onChange={this.onIngredientChange}
                            />
                        </FormGroup>
                        <FormControl.Feedback />
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button bsStyle="primary" onClick={this.onAddRecipe}>Add Recipe</Button>
                    <Button onClick={this.close}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default RecipeModal;