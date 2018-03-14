import {combineReducers} from 'redux';
import fetch from './data';
import next from './next';
import total from './total';

const quizApp = combineReducers({
    fetch,
    next,
    total
});

export default quizApp;