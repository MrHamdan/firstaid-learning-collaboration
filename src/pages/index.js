import { async } from "@firebase/util";
import Courses from "components/Courses/Courses";
import Hero from "components/Home/Hero";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses } from "Redux/actions/fetchCourses";
import styles from "../styles/Home.module.css";

export default function Home({ courses }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCourses(courses));
  }, [])
  return (
    <div >
      <Hero />
      <Courses courses={courses} />
    </div>
  );
}

export async function getStaticProps() {

  // https://tawsifhye.github.io/data/courses.json

  const res = await fetch('https://tawsifhye.github.io/data/courses.json');
  const courses = await res.json();

  return {
    props: {
      courses
    }
  }
}