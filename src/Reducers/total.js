const calculateTotal = (action) => {
    let total = 0
    for(var i=0;i<action.questions.length;i++) {
        if(action.questions[i].isCorrect) {
            total++;
        }
    }
    return total;
}

const total = (state = [], action = {}) => {
    switch (action.type) {
        case 'TOTAL':
            return calculateTotal(action)
        default: return state;
    }
}
export default total;