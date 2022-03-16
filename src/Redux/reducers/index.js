const { combineReducers } = require("redux");
const { quizReducer } = require("./quizReducer");


const reducer = combineReducers({
    // 
    allQuiz:quizReducer,
})

export default reducer;