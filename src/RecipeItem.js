import React, {Component} from 'react';
import {Accordion, Panel, Button} from 'react-bootstrap';

class RecipeItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            recipeArray: this.props.recipeArray
        }

        this.handleOnDelete = this.handleOnDelete.bind(this);
    }

    handleOnDelete(index){
        this.props.onDelete(index);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            recipeArray: nextProps.recipeArray
        });
    }

    render() {
        var recipeItem = this.state.recipeArray.map((recipe, index) => {
            var ingredients = recipe.ingredients.map((ingredient) => {
                return <li key={recipe + ingredient}>{ingredient}</li>
            });

            return (
                <Panel key={index} header={recipe.name} eventKey={index}>
                    <ul> {ingredients} </ul>
                    <Button bsStyle="danger" onClick={() => {this.handleOnDelete({index})}}>Delete</Button>
                    <Button>Edit</Button>
                </Panel>
            );
        });

        return (
            <Accordion>
                {recipeItem}
            </Accordion>
        );
    }
}

export default RecipeItem;