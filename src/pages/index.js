import Courses from "components/Courses/Courses";
import Freeresources from "components/Home/Freeresources";
import Hero from "components/Home/Hero";
import TipsSection from "components/Home/TipsSection";
import StudentReviewSection from "components/Shared/StudentReviewSection";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses } from "Redux/actions/fetchCourses";
import styles from "../styles/Home.module.css";

export default function Home({ courses, freeResources }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCourses(courses));
  }, [])
  return (
    <div >
      <Hero />
      <Courses courses={courses} />
      <Freeresources freeResources={freeResources} />
      <TipsSection />
      <StudentReviewSection />
    </div>
  );
}

export async function getStaticProps() {

  // https://tawsifhye.github.io/data/courses.json

  const courseResponse = await fetch('https://tawsifhye.github.io/data/courses.json');
  const courses = await courseResponse.json();

  const freeResouresResponse = await fetch('  https://tawsifhye.github.io/data/freeresources.json');
  const freeResources = await freeResouresResponse.json();


  return {
    props: {
      courses,
      freeResources
    }
  }
}