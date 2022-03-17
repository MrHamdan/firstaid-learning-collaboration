import { Box, Container } from "@mui/material";
import { useSelector } from "react-redux"
import Answer from "./Answer";
import QuizResultHeader from "./QuizResultHeader";


const ResultsHome = () => {

    const answer = useSelector(state => state.allQuiz.finalAnswers)
     console.log(answer);
     let correctAnswerArray =[]
        answer.forEach((element) => {
           element.options.forEach((option) => {
                if(option.isCorrect && element.selectedAnswer.isCorrect){
                    correctAnswerArray.push(option.option)
                }
           })
        })
    

    console.log(correctAnswerArray);
  
  return (
      
    <Container sx={{my:1}}>

      <QuizResultHeader answer={answer} correctAnswerArray={correctAnswerArray} ></QuizResultHeader>
      <Answer  answer={answer}/>
        
    </Container>
  )
}

export default ResultsHome