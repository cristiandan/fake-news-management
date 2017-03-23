/* eslint-disable import/default */

import React from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

class NewsSiteEditable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            desc: props.desc
        }
        this.render.bind(this);
        this.onChange.bind(this);
    }

    onChange(event) {
        this.setState({ desc: event.target.value });
    }
    
    render() {
        return ( 
                <FormGroup controlId="formControlsTextarea">
                    <ControlLabel>Descriere</ControlLabel>
                    <FormControl componentClass="textarea" value={this.state.desc} onChange={(event) => this.onChange(event)}/>
                    <Button onClick={() => this.props.onClickSave(this.props.index, this.state)} bsStyle="danger">Save</Button>
                </FormGroup>
        );
    }
}

export default NewsSiteEditable;