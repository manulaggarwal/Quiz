

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

export const nextQuestion = (data)=>{
    return {
        type: 'NEXT',
        data
    }
}