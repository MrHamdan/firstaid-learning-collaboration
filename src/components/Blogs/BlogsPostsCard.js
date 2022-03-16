import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import {
 Button,
 Card,
 CardActions,
 CardContent,
 CardMedia,
 Typography,
} from "@mui/material";
import cover1 from "../../images/blogs-cover-1.png";

const BlogsPostsCard = () => {
 return (
  <Card sx={{ maxWidth: "100%", pb: "1em", mb: 5 }}>
   <CardMedia
    component="img"
    height="300"
    image={cover1.src}
    alt="green iguana"
    sx={{ borderRadius: "8px" }}
   />
   <CardContent>
    <Typography
     gutterBottom
     variant="body1"
     sx={{
      display: "flex",
      alignItems: "center",
      color: "#435770",
      my: { xs: 1, md: 2 },
     }}
    >
     <CalendarMonthIcon />
     <Typography variant="span" sx={{ mt: "2px" }}>
      17 March, 2022
     </Typography>
    </Typography>
    <Typography
     gutterBottom
     variant="h5"
     component="div"
     sx={{ color: "#272D4E", letterSpacing: { xs: "0px", md: "1px" } }}
    >
     How to make a website look more attractive with llustrations
    </Typography>
    <Typography variant="body2" sx={{ color: "#435770" }}>
     Leverage agile frameworks to provide a robust synopsis for high level
     overviews. Iterative approaches to corporate strategy foster collaborative
     thinking to further the overall value proposition.
    </Typography>
   </CardContent>
   <CardActions>
    <Button size="small" sx={{ color: "#ED3B45", fontWeight: "bold" }}>
     Read More
    </Button>
   </CardActions>
  </Card>
 );
};

export default BlogsPostsCard;
