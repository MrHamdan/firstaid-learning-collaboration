import { Box, FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material"


const Question = ({quiz,handleOnChange,index}) => {
  return (
    <Box  sx={{width:"700px"}}>
                   
                    <FormControl sx={{
                        m: 3,
                        width:"100%"
                    }} variant="standard">

                        <RadioGroup >
                            {
                                quiz[index]?.options.map(element => (
                                    <FormControlLabel
                                        sx={{
                                            backgroundColor: ' #f4f4f4',
                                            mt: 4,
                                            display: 'flex',
                                            justifyContent: 'flex-start',
                                            width: '100%',
                                            alignItems: 'center',
                                            borderRadius: '5px',
                                            border: '1px solid #d4d4d4',

                                        }} onChange={() => handleOnChange(element)} key={element.id} value={element.id} control={<Radio />} label={element.option} />
                                ))
                            }

                        </RadioGroup>
                    </FormControl>
                </Box>
  )
}

export default Question