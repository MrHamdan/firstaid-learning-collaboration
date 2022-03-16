const initialState={
    quiz:[],
    loading: true,
}

export  const quizReducer =(state=initialState, action)=>{
    switch(action.type){
        case "FETCH_QUIZ":
            return {
                ...state,
                quiz: action.payload,
                loading: false
            }
        default:
            return state
    }
}