import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchQuiz } from "Redux/actions/quizAction";





const QuizHome = () => {
  const dispatch = useDispatch()


  useEffect(()=>{
    dispatch(fetchQuiz())
  },[dispatch])

  return (
    <div>QuizHome</div>
  )
}

export default QuizHome

