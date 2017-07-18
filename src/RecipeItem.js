import React, {Component} from 'react';
import {Accordion, Panel, Button, Well} from 'react-bootstrap';
import './RecipeItem.css';

class RecipeItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            recipeArray: this.props.recipeArray
        }

        this.handleOnDelete = this.handleOnDelete.bind(this);
        this.handleOnEdit = this.handleOnEdit.bind(this);
    }

    handleOnDelete(index){
        this.props.onDelete(index);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            recipeArray: nextProps.recipeArray
        });
    }

    handleOnEdit(index){
        this.props.onEditButton(index);
    }

    render() {
        var recipeItem = this.state.recipeArray.map((recipe, index) => {
            var ingredients = recipe.ingredients.map((ingredient) => {
                return <li className="recipe-header" key={recipe + ingredient}>{ingredient}</li>
            });

            return (
                <Panel key={index} header={recipe.name} eventKey={index}>
                    <ul> {ingredients} </ul>
                    <Button className='delete-btn' bsStyle="danger" onClick={() => {this.handleOnDelete({index})}}>Delete</Button>
                    <Button onClick={() => {this.handleOnEdit({index})}}>Edit</Button>
                </Panel>
            );
        });

        return (
            <Well id='well'>
                <Accordion>
                    {recipeItem}
                </Accordion>
            </Well>
        );
    }
}

export default RecipeItem;