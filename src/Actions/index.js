export const loadData = (data)=>{
    return {
        type: 'FETCH',
        data
    }
}

export const nextQuestion = (data)=>{
    return {
        type: 'NEXT',
        data
    }
}

export const calculateTotal = (answer, questions)=>{
    checkAnswer(answer, questions);
    return {
        type: 'TOTAL',
        questions
    }
}

const checkAnswer = (answer, questions)=> {
    for(var i=0;i<questions.length;i++) {
        if(questions[i].active) {
            if(questions[i]["answer_id"] === answer) {
                questions[i].isCorrect = true;
            } else {
                questions[i].isCorrect = false;
            }
        }
    }
}