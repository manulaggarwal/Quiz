const current = (state = [], action = {}) => {
    switch (action.type) {
        case 'CURRENT':
            return action.value
        default: return "1";
    }
}
export default current;