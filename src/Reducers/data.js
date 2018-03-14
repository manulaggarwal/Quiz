const fetch = (state = [], action = {}) => {
    switch (action.type) {
        case 'FETCH':
            return [
                ...state,
                ...action.data
            ];
        default: return state;
    }
}
export default fetch;