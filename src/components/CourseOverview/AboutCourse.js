import { useState, useEffect } from "react";
import { Box, Typography, Paper, Grid, Container } from "@mui/material";
import Image from "next/image";
import detailBg from "../../Images/detailbackground.png";
import { FaStar } from "react-icons/fa";
import { styled } from "@mui/material/styles";
import certificateIcon from "../../Images/certificateicon.png";
import documentIcon from "../../Images/documenticon.png";
import clockIcon from "../../Images/clockicon.png";
import supportIcon from "../../Images/supporticon.png";
import PrimaryButton from "components/Shared/PrimaryButton";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, addCupon } from "../../Redux/actions/cartAction";
import Link from "next/link";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

// { xl: '800.89px', xs: '1400px', md: '1450px' }

const Styles = {
  detailBackground: {
    backgroundImage: `url(${detailBg.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  },
};

const AboutCourse = ({ course }) => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { id, title, coverImage, enrolledStudents, rating } = course;
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    const added = cart.find((item) => item.id === course.id);
    if (added) {
      setIsAdded(true);
    }
  }, [cart, course]);

  const handleAddToCart = (course) => {
    course = {
      ...course,
      quantity: 1,
    };
    const newCart = [...cart, course];
    dispatch(addToCart(newCart));
    dispatch(addCupon(false));
    setIsAdded(true);
  };

  return (
    <>
      <Box sx={{ ...Styles.detailBackground }}>
        <Container maxWidth="xl" sx={{ padding: "50px 0px" }}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} xl={6} md={12}>
                <Item
                  sx={{
                    backgroundColor: "transparent",
                    textAlign: "left",
                    boxShadow: "0",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "36px",
                      fontStyle: "normal",
                      fontWeight: "500",
                      color: "white",
                      lineHeight: "145%",
                    }}
                  >
                    {course.title}
                  </Typography>
                  <Typography sx={{ margin: "50px 0px" }}>
                    <span
                      style={{
                        fontSize: "16px",
                        fontStyle: "normal",
                        fontWeight: "400",
                        color: "white",
                        lineHeight: "32px",
                        marginRight: "20px",
                      }}
                    >
                      {course.rating}{" "}
                      <FaStar
                        style={{
                          color: "#FFB300",
                        }}
                      />
                    </span>{" "}
                    <span
                      style={{
                        fontSize: "16px",
                        fontStyle: "normal",
                        fontWeight: "400",
                        color: "white",
                        lineHeight: "32px",
                        marginTop: "50px",
                        marginBottom: "29px",
                        marginRight: "20px",
                      }}
                    >
                      (50 REVIEWS)
                    </span>{" "}
                    <span
                      style={{
                        fontSize: "16px",
                        fontStyle: "normal",
                        fontWeight: "400",
                        color: "white",
                        lineHeight: "32px",
                        marginTop: "50px",
                        marginBottom: "29px",
                        marginRight: "20px",
                      }}
                    >
                      6245 STUDENTS
                    </span>
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontStyle: "normal",
                      fontWeight: "400",
                      color: "white",
                      lineHeight: "145%",
                    }}
                  >
                    We are a company who is best known for offering awarding
                    body accredited courses for anyone who wishes to take their
                    professional life to the next level.
                  </Typography>
                </Item>
              </Grid>
              <Grid item xs={12} xl={6} md={12}>
                <Item sx={{ backgroundColor: "transparent", boxShadow: "0" }}>
                  <Image src={course.coverImage} width={589} height={425} />
                </Item>
              </Grid>
              <Grid
                item
                xs={12}
                xl={6}
                md={12}
                sx={{ marginTop: { xs: "120px", xl: "0px" } }}
              >
                <Item sx={{ backgroundColor: "transparent", boxShadow: "0" }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} xl={6} md={6}>
                      <Item
                        sx={{ backgroundColor: "transparent", boxShadow: "0" }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: { xs: "center", xl: "left" },
                          }}
                        >
                          <Box>
                            <Image src={certificateIcon} />
                          </Box>
                          <Box sx={{ textAlign: "left", marginLeft: "30px" }}>
                            <span
                              style={{
                                fontStyle: "normal",
                                fontSize: "16px",
                                fontWeight: "400",
                                lineHeight: "26px",
                                color: "rgba(76, 112, 138, 0.9)",
                              }}
                            >
                              You will Get
                            </span>{" "}
                            <br />{" "}
                            <span
                              style={{
                                fontStyle: "normal",
                                fontSize: "18px",
                                fontWeight: "500",
                                lineHeight: "26px",
                                color: "rgba(26, 60, 85, 0.9)",
                              }}
                            >
                              Certificate of Completion
                            </span>
                          </Box>
                        </Box>
                      </Item>
                    </Grid>
                    <Grid item xs={12} xl={6} md={6}>
                      <Item
                        sx={{ backgroundColor: "transparent", boxShadow: "0" }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            justifyContent: { xs: "center", xl: "left" },
                          }}
                        >
                          <Box>
                            <Image src={documentIcon} />
                          </Box>
                          <Box sx={{ textAlign: "left", marginLeft: "30px" }}>
                            <span
                              style={{
                                fontStyle: "normal",
                                fontSize: "16px",
                                fontWeight: "400",
                                lineHeight: "26px",
                                color: "rgba(76, 112, 138, 0.9)",
                              }}
                            >
                              Renewal Requirements
                            </span>{" "}
                            <br />{" "}
                            <span
                              style={{
                                fontStyle: "normal",
                                fontSize: "18px",
                                fontWeight: "500",
                                lineHeight: "26px",
                                color: "rgba(26, 60, 85, 0.9)",
                              }}
                            >
                              Check with your Employer
                            </span>
                          </Box>
                        </Box>
                      </Item>
                    </Grid>
                    <Grid item xs={12} xl={6} md={6}>
                      <Item
                        sx={{ backgroundColor: "transparent", boxShadow: "0" }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            justifyContent: { xs: "center", xl: "left" },
                          }}
                        >
                          <Box>
                            <Image src={clockIcon} />
                          </Box>
                          <Box sx={{ textAlign: "left", marginLeft: "30px" }}>
                            <span
                              style={{
                                fontStyle: "normal",
                                fontSize: "16px",
                                fontWeight: "400",
                                lineHeight: "26px",
                                color: "rgba(76, 112, 138, 0.9)",
                              }}
                            >
                              Course Duration
                            </span>{" "}
                            <br />{" "}
                            <span
                              style={{
                                fontStyle: "normal",
                                fontSize: "18px",
                                fontWeight: "500",
                                lineHeight: "26px",
                                color: "rgba(26, 60, 85, 0.9)",
                              }}
                            >
                              4 Hours 32 Minutes
                            </span>
                          </Box>
                        </Box>
                      </Item>
                    </Grid>
                    <Grid item xs={12} xl={6} md={6}>
                      <Item
                        sx={{ backgroundColor: "transparent", boxShadow: "0" }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            justifyContent: { xs: "center", xl: "left" },
                          }}
                        >
                          <Box>
                            <Image src={supportIcon} />
                          </Box>
                          <Box sx={{ textAlign: "left", marginLeft: "30px" }}>
                            <span
                              style={{
                                fontStyle: "normal",
                                fontSize: "16px",
                                fontWeight: "400",
                                lineHeight: "26px",
                                color: "rgba(76, 112, 138, 0.9)",
                              }}
                            >
                              Support
                            </span>{" "}
                            <br />{" "}
                            <span
                              style={{
                                fontStyle: "normal",
                                fontSize: "18px",
                                fontWeight: "500",
                                lineHeight: "26px",
                                color: "rgba(26, 60, 85, 0.9)",
                              }}
                            >
                              24/7 Customer Support
                            </span>
                          </Box>
                        </Box>
                      </Item>
                    </Grid>
                  </Grid>
                </Item>
              </Grid>
              <Grid item xs={12} xl={6} md={12} sx={{ marginTop: "90px" }}>
                <Item sx={{ backgroundColor: "transparent", boxShadow: "0" }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-around",
                    }}
                  >
                    <Box sx={{ textAlign: "left" }}>
                      <Typography
                        sx={{
                          fonWeight: 500,
                          fontSize: "26.88px",
                          lineHeight: "115.4%",
                          alignItems: "center",
                          textDecorationLine: "line-through",
                          color: "#595959",
                          fontStyle: "normal",
                        }}
                      >
                        ${course?.regularPrice}.00
                      </Typography>{" "}
                      <br />{" "}
                      <span
                        style={{
                          fontStyle: "normal",
                          fontWeight: "700",
                          fontSize: "16px",
                          color: "#EA2E10",
                        }}
                      >
                        75% off
                      </span>
                    </Box>
                    <Box>
                      <span
                        style={{
                          fontStyle: "normal",
                          fontWeight: "700",
                          fontSize: "44.8px",
                          lineHeight: "115.4%",
                          color: "#EA2E10",
                        }}
                      >
                        £
                        {parseFloat(
                          course?.regularPrice - course?.regularPrice * 0.75
                        ).toFixed(2)}
                      </span>
                    </Box>
                    <Box>
                      {!isAdded ? (
                        <Link
                        href="/cart"
                        style={{ textDecoration: "none" }}
                        passHref
                      >
                        <PrimaryButton onClick={() => handleAddToCart(course)}>
                          BUY NOW
                        </PrimaryButton>
                        </Link>
                      ) : (
                        <Link
                          href="/cart"
                          style={{ textDecoration: "none" }}
                          passHref
                        >
                          <PrimaryButton>Added</PrimaryButton>
                        </Link>
                      )}
                    </Box>
                  </Box>
                </Item>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};
export default AboutCourse;
