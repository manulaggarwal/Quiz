import React from 'react';
import {connect} from 'react-redux';
import {Question} from '../Components';
import { Grid } from 'react-flexbox-grid';
import {loadData, currentQuestion, nextQuestion} from '../Actions';

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
    //  this.props.history.push("/1");
      this.props.loadData(questions);
    });
  }

  componentDidMount() {
    this.getData();
  }

  handleClicks(e) {
    var index = 0;
    if (e && e.target && e.target.type === "button") {
      this.props.questions.forEach((el,i)=>{
        if(el.active) {
          index = i;
        }
      });
      this.props.next(index+1, this.props.questions);
    }
  }

  render() {
    console.log(this.props)
    return(
      <Grid fluid>
        <h1>Quiz App</h1>
        {
          this.props.questions.map((q,i)=>{
            if(q.active) {
              return <Question
                key={i}
                type="button" 
                value={q.title}
                text={q.text}
                options={q.options}
                answer={q.answer_id}
                id={++i}
                onClick={this.handleClicks}
                >
              </Question>
            }
          })
        } 
      </Grid>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loadData: (data)=> {
      dispatch(loadData(data))
    //  dispatch(currentQuestion(window.location.pathname.slice(1) !== "" ? window.location.pathname.slice(-1): "1"))
    },
    next: (index, data)=> {
      dispatch(nextQuestion(index, data));
    }
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    questions: state && state.fetch,
    currentQuestion: state.current || ''
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Quiz);