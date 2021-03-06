import React from 'react';
import {connect} from 'react-redux';
import {Question} from '../Components';
import { Grid } from 'react-flexbox-grid';
import {loadData, calculateTotal, nextQuestion} from '../Actions';

class Quiz extends React.Component {

  constructor() {
    super();
    this.handleClicks = this.handleClicks.bind(this);
  }

  getData() {
    var questions = [];
    fetch("https://s3-ap-southeast-1.amazonaws.com/grow-fit-stage/uploads/quizapp/quiz.json")
    .then(data => data.json())
    .then(data => {
      Object.keys(data).forEach((d, i) => {
        if(i === 0) {
          data[d].active = true;
        } else {
          data[d].active = false;
        }
        data[d].isCorrect = false;
        questions.push(data[d]);
      });
      this.props.loadData(questions);
    });
  }

  handleClicks(e) {
    if(e.target && e.target.type === "button") {
      this.props.next(this.props.questions);
    } else if(e.target && e.target.type === "radio") {
      this.props.answered(e.target.id, this.props.questions);
    }
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return(
      <Grid fluid>
        <h1>Quiz App</h1>
        {
          this.props.currentQuestion !== "result"?
            this.props.questions.map((q,i)=>{
              return q.active? <Question
                                  key={i}
                                  type="button" 
                                  value={q.title}
                                  text={q.text}
                                  options={q.options}
                                  answer={q.answer_id}
                                  id={++i}
                                  onClick={this.handleClicks}
                                >
                              </Question> : null
            })  : <span>You Got: {this.props.result+"/"+this.props.questions.length}</span>
        } 
      </Grid>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadData: (data)=> {
      dispatch(loadData(data));
    },
    next: (data)=> {
      dispatch(nextQuestion(data));
    },
    answered: (answer, questions)=>{
      dispatch(calculateTotal(answer, questions))
    }
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    questions: state.fetch,
    currentQuestion: state.next,
    result: state.total
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Quiz);