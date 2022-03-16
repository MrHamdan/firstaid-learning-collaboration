import {
 Box,
 Divider,
 Grid,
 IconButton,
 InputBase,
 Paper,
 Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";
import popularBlogsImg from "../../images/blogs-cover-1.png";

const BlogsSideBar = () => {
 return (
  <>
   <Box
    sx={{
     backgroundColor: "#F0F0F0",
     height: "231px",
     display: "flex",
     justifyContent: "center",
     alignItems: "center",
     borderRadius: "8px",
     mb: 5,
    }}
   >
    <Typography>Image AD</Typography>
   </Box>
   <Box
    sx={{
     backgroundColor: "#F0F0F0",
     p: 3,
     borderRadius: "8px",
    }}
   >
    <Typography variant="h6" sx={{ color: "#272D4E", fontWeight: "bold" }}>
     Search Topic
    </Typography>
    <Paper
     component="form"
     sx={{
      p: "2px 4px",
      display: "flex",
      alignItems: "center",
      width: "100%",
      mt: 2,
      boxShadow: "none",
     }}
    >
     <InputBase
      sx={{ ml: 1, flex: 1 }}
      placeholder="Enter topic name"
      inputProps={{ "aria-label": "Enter topic name" }}
     />
     <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
     <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
      <SearchIcon />
     </IconButton>
    </Paper>
   </Box>
   {/* popular blogs section here */}
   <Box
    sx={{
     border: "1px solid rgba(0, 0, 0, 0.08)",
     my: 4,
     p: 3,
     borderRadius: "8px",
    }}
   >
    <Typography variant="h6" sx={{ color: "#272D4E", fontWeight: "bold" }}>
     Popular Blogs
    </Typography>

    {Array.from(Array(6)).map((_, index) => (
     <Grid
      key={index}
      container
      spacing={2}
      sx={{ alignItems: "center", my: 2 }}
     >
      <Grid item xs={2} sx={{ height: "100" }}>
       <Box
        sx={{
         height: "50px",
         background: `url(${popularBlogsImg.src})`,
         backgroundPosition: "center",
         backgroundSize: "cover",
         borderRadius: "5px",
        }}
       ></Box>
      </Grid>
      <Grid item xs={10}>
       <Typography>How to become a professional bookkeeper</Typography>
      </Grid>
     </Grid>
    ))}
   </Box>
  </>
 );
};

export default BlogsSideBar;
