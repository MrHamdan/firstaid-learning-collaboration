import { Container, Grid } from "@mui/material";
import ViewCourseBottom from "components/Shared/ViewCourseBottom";
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
   <ViewCourseBottom />
  </>
 );
};

export default BlogsHome;
