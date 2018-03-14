import {combineReducers} from 'redux';
import fetch from './data';
import next from './next';
import select from './select';
import current from './current';

const quizApp = combineReducers({
    fetch,
    next,
    current,
    select
});

export default quizApp;