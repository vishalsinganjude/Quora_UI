import React from 'react'
import Form from 'react-bootstrap/lib/Form'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import FormControl from 'react-bootstrap/lib/FormControl'
import Button from 'react-bootstrap/lib/Button'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import Modal from 'react-bootstrap/lib/Modal'
import AppActions from '../../actions/AppActions'


export default class AddQue extends React.Component{
    constructor(){
        super();
        this.handleSubmitClick = this.handleSubmitClick.bind(this);
    }

    handleSubmitClick(){
      // alert(this.queAddField.value);
        AppActions.hideAddQuePopup();
        const question = this.queAddField.value;
        AppActions.addQue(question)
    }

    handleCancelClick(){
      AppActions.hideAddQuePopup();
    }

    render(){
        let shouldShowDailog = this.props.shouldShowAddQ;
        
        if(shouldShowDailog){
         return(
            <div className="static-modal">
          <Modal.Dialog>
         

            <Modal.Body>
              <FormGroup
                controlId="formBasicText"
              >
                <ControlLabel>Enter your Question.</ControlLabel>
                <FormControl
                  type="text"
                  placeholder="Type your Question."
                  inputRef={(ref) => {this.queAddField = ref}}
                />
              </FormGroup>
              
            </Modal.Body>

            <Modal.Footer>
              <Button onClick={this.handleCancelClick}>Cancel</Button>
              <Button bsStyle="primary" onClick={this.handleSubmitClick}>Submit</Button>
            
            </Modal.Footer>
          </Modal.Dialog>
        </div>
            );
        }

        return null;
    }
}