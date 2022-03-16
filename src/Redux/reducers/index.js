import { coursesReducer } from "./coursesReducer";

const { combineReducers } = require("redux");
const { quizReducer } = require("./quizReducer");


const reducer = combineReducers({
    // 
    allQuiz: quizReducer,
    allCourses: coursesReducer,
})

export default reducer;