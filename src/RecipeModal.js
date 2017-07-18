import React, {Component} from 'react';
import {Modal, Button, FormControl, FormGroup, ControlLabel} from 'react-bootstrap';

class RecipeModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showModal: this.props.showModal
        }

        this.close = this.close.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            showModal: nextProps.showModal
        });
    }

    close() {
        this.setState({ showModal: false});
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
                            />
                        </FormGroup>

                        <FormControl.Feedback />
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button bsStyle="primary">Add Recipe</Button>
                    <Button onClick={this.close}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default RecipeModal;