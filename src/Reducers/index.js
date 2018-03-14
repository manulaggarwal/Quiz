import {combineReducers} from 'redux';
import fetch from './data';
import next from './next';
import select from './select';

const quizApp = combineReducers({
    fetch,
    next,
    select
});

export default quizApp;