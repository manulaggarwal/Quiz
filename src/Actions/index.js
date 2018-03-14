

export const loadData = (data)=>{
    return {
        type: 'FETCH',
        data
    }
}

export const currentQuestion = (value)=>{
    return {
        type: 'CURRENT',
        value
    }
}

export const nextQuestion = (index,data)=>{

    data[index-1].active = false;
    data[index].active = true;
    
    return {
        type: 'NEXT',
        data
    }
}