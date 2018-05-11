import React from 'react'
import './feeds.css'
import Badge from 'react-bootstrap/lib/Badge'
import Panel from 'react-bootstrap/lib/Panel'
import Answer from './Answer'
import QAnswer from './QAnswer'
import AppActions from '../../actions/AppActions'


export default class Feeds extends React.Component {

  componentDidMount(){
    AppActions.loadFeeds();
  }

  render() {
    const feeds = this.props.feeds;
    const questions = feeds.questions;
    return (
      <div className="feeds">
        {
          questions.map((question, index) => {
            return <div key={index}className="feed">
            
              <Panel>
                <Panel.Heading>
                  <Panel.Title componentClass="h3">{question.questionString}</Panel.Title>
                   <h8>{question.userId}&nbsp;{question.created_date}</h8>
                </Panel.Heading>
                <Panel.Body>{this.getAnswersForQuestion(question)}</Panel.Body>
                <Panel.Footer>
                  <QAnswer questionId={question.questionId}/>
              </Panel.Footer>
              </Panel>
              
            </div>
            
          })
        }
        
      </div>
    );
  }

  getAnswersForQuestion(question) {
    var answers = question.answers;
    return answers.map((answer, index) => {
      return <div>
                <Answer index={index+1} key={index} answer={answer}/>
                <hr/>
              </div>
    })
  }
}

