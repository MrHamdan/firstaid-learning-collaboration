import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import logo from "../../images/footer-logo.png";

const Footer = () => {
 return (
  <Box sx={{ background: "#332727", color: "#fff", py: 8 }}>
   <Container sx={{ maxWidth: { xl: "xl", lg: "lg" } }}>
    <Grid container spacing={2}>
     <Grid item xs={4}>
      <Image src={logo} alt="logo" />
      <Typography sx={{ my: 2 }}>
       Beaufort House, 15 St Botolph <br /> Street, London EC3A 7BB
      </Typography>
     </Grid>
     <Grid item xs={2}></Grid>
     <Grid item xs={2}></Grid>
     <Grid item xs={4}></Grid>
    </Grid>
   </Container>
  </Box>
 );
};

export default Footer;
