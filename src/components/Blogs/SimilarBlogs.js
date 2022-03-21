import { Box, Button, CardMedia, Container, Typography } from "@mui/material"
import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Link from "next/link";
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
const SimilarBlogs = ({blogsData}) => {
    console.log(blogsData);
  return (
    <Box>
        <Container  sx={{
     maxWidth: { xl: "xl", lg: 'lg' },
    }}>
                <Typography variant="h4" sx={{ mr: 1, color: '#272D4E',fontSize: '55px',fontWeight: '900' }}>Similar Blogs {blogsData.length}</Typography>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {blogsData.slice(0,3).map((blog, index) => (
                        <Grid item xs={2} sm={4} md={4} key={index}>
                            <Item sx={{boxShadow:"none"}}>
                            <CardMedia
                                    component="img"
                                    height="240"
                                    image={blog?.featureImg1}
                                    alt="green iguana"
                                    sx={{borderRadius: "8px",mb:1}}
                                />
                             <Box sx={{display: 'flex',my:2}}>
                                <Typography sx={{fontWeight: 'bold',fontSize:"13.49px",color:'#333333'}}>DEVELOPMENT</Typography>     
                                <Typography  sx={{fontSize:"13.49px",color:'#999999',pl:2}}>23 September 2020</Typography>     
                            </Box>   
                                <Box sx={{textAlign: 'left'}}>
                                <Typography sx={{fontWeight:'900',fontSize:'26.98px',color:'#272D4E',fontFamily:'Circular Std'}}>{blog.mainTitle}</Typography>
                                <Typography sx={{fontWeight:'400',fontSize:'15.98px',color:'#435770',fontFamily:'Manrope',my:3}}>{blog.summary.slice(0,150)}</Typography>
                                <Link href="/"><a style={{
                    textDecoration: "none",
                    color: "red",
                  }}>Read more</a></Link>
                                </Box>
                            </Item>
                        </Grid>
                        ))}
                    </Grid>
                 </Box>
        </Container>
    </Box>
  )
}

export default SimilarBlogs