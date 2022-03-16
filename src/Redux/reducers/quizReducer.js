<<<<<<< HEAD
const initialState = {
    quiz: [],
=======
const initialState={
    quiz:[],
    finalAnswers: [],
>>>>>>> 3fc2e37e6ac4b286d4812bf56f2e6e4554eba063
    loading: true,
}

export const quizReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_QUIZ":
            return {
                ...state,
                quiz: action.payload,
                loading: false
            }
        case "SUBMIT_QUIZ":
            return {
                ...state,
                finalAnswers: action.payload,
            }   
        default:
            return state
    }
}