import React, {Component} from 'react';
import {Accordion, Panel} from 'react-bootstrap';

class RecipeItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            recipeArray: this.props.recipeArray
        }
    }
    render() {
        var recipeItem = this.state.recipeArray.map((recipe, index) => {
            var ingredients = recipe.ingredients.map((ingredient) => {
                return <li key={recipe + ingredient}>{ingredient}</li>
            });

            return (
                <Panel key={index} header={recipe.name} eventKey={index}>
                    <ul> {ingredients} </ul>
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