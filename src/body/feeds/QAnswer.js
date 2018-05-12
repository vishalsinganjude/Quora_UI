import React from 'react'
import Form from 'react-bootstrap/lib/Form'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import FormControl from 'react-bootstrap/lib/FormControl'
import Button from 'react-bootstrap/lib/Button'
import AppAction from '../../actions/AppActions'

export default class QAnswer extends React.Component{
    constructor(){
        super();
        this.handleSubmitClick = this.handleSubmitClick.bind(this);
    }

    handleSubmitClick(){
        const questionId = this.props.questionId;
        const answerSting = this.answerText.value;
        AppAction.addAnsToQue(questionId, answerSting);
        this.answerText.value = "";
        
    }

    render(){
        return(
            <Form inline>
                <FormGroup>
                    <FormControl inputRef={ref =>this.answerText = ref} type="text" placeholder="Type your Answer"/>
                </FormGroup>&nbsp;
                <Button bsStyle="primary"onClick={this.handleSubmitClick}>Submit</Button>
            </Form>
        );
    }
}
