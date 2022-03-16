import {
 Box,
 Button,
 Card,
 CardActions,
 CardContent,
 CardMedia,
 Container,
 Grid,
 Typography,
} from "@mui/material";
import BlogsBanner from "./BlogsBanner";
import BlogsPostsCard from "./BlogsPostsCard";
import BlogsSideBar from "./BlogsSideBar";

const BlogsHome = () => {
 return (
  <>
   <BlogsBanner />
   <Container sx={{ my: 10, maxWidth: { xl: "xl", lg: "lg" } }}>
    <Grid
     container
     spacing={2}
     sx={{ dispaly: "flex", justifyContent: "space-between" }}
    >
     <Grid item xs={12} md={7}>
      <BlogsPostsCard />
     </Grid>
     <Grid item xs={12} md={4}>
      <BlogsSideBar />
     </Grid>
    </Grid>
   </Container>
  </>
 );
};

export default BlogsHome;
