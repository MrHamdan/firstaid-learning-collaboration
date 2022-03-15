import { Box, Typography } from "@mui/material";
import Link from "next/link";
import blogsBanner from "../../images/blogs-banner.png";

const BlogsBanner = () => {
 return (
  <Box
   sx={{
    background: `url(${blogsBanner.src})`,
    minHeight: "287px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
   }}
  >
   <Box sx={{ textAlign: "center" }}>
    <Typography sx={{ color: "#fff", mb: 2 }}>
     <Link href="/">
      <a style={{ color: "#fff" }}>Home </a>
     </Link>
     / Blogs
    </Typography>
    <Typography
     variant="h2"
     sx={{ color: "#fff", fontWeight: "bold", fontSize: "3em" }}
    >
     Blogs
    </Typography>
   </Box>
  </Box>
 );
};

export default BlogsBanner;
