const select = (state = [], action = {}) => {
    switch (action.type) {
        case 'NEXT':
            return [
                ...state
            ];
        default: return state;
    }
}
export default select;