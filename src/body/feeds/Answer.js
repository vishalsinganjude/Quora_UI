

import React from 'react'
import Button from 'react-bootstrap/lib/Button'
import Badge from 'react-bootstrap/lib/Badge'
import AppAction from '../../actions/AppActions'

export default class Answer extends React.Component{
    constructor(props)
    {
        super(props);
        this.handelUpVoteClick = this.handelUpVoteClick.bind(this);
        this.handelDownVoteClick = this.handelDownVoteClick.bind(this);
    }

    handelUpVoteClick(){
        const answerId = this.props.answer.answerId
        AppAction.addUpvote(answerId);
    }

    handelDownVoteClick(){
        const answerId = this.props.answer.answerId
        AppAction.addDownvote(answerId);
    }

    render(){
        let answer = this.props.answer;
        
        return(
            <div>
                <p>
                {/* {this.props.index}&nbsp;:&nbsp; */}
                {/* {answer.answerString}<br/> */}
                {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<h8>{answer.userId}</h8><br/> */}
                {/* <span class="glyphicon glyphicon-thumbs-up"onClick={this.handelUpVoteClick}>&nbsp;<Badge>{answer.upvoteCount}</Badge></span>&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;  */}
                {/* &nbsp;&nbsp;<Button bsStyle="success" bsSize="small" onClick={this.handelUpVoteClick}>Upvotes&nbsp;<Badge>{answer.upvoteCount}</Badge></Button> */}
                {/* <span class="glyphicon glyphicon-thumbs-down"onClick={this.handelDownVoteClick}>&nbsp;<Badge>{answer.upvoteCount}</Badge></span>&nbsp;&nbsp;  */}
                {/* &nbsp;&nbsp;<Button bsStyle="danger" bsSize="small" onClick={this.handelDownVoteClick}>Downvotes&nbsp;<Badge>{answer.downvoteCount}</Badge></Button> */}

                {this.props.index}&nbsp;:&nbsp;
                {answer.answerString}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<h10>{answer.userId}</h10><br/>
                <font size="+1">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="glyphicon glyphicon-thumbs-up text-success"  onClick={this.handelUpVoteClick}>&nbsp;</span>
                </font>
                {answer.upvoteCount}

                <font size="+1">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="glyphicon glyphicon-thumbs-down text-danger"onClick={this.handelDownVoteClick}>&nbsp;</span>
                </font>
                {answer.downvoteCount}
                
                {/* <hr/> */}
                </p>
            </div>
        );
    }

}