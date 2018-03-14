const nextQuestion = (questions) => {
    for(var i=0;i<questions.length;i++) {
        if(questions[i].active) {
            questions[i].active = false;
            if((i + 1) !== questions.length) {
                questions[i+1].active = true;
                break;
            }
        }
    }
    return questions;
}

const next = (state = [], action = {}) => {
    switch (action.type) {
        case 'NEXT':
            return nextQuestion(action.data);
        
        default: return state;
    }
}
export default next;