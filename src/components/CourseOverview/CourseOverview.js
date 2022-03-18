<<<<<<< HEAD
import AboutCourse from './AboutCourse';
import CourseLink from './CourseLink';
import CourseCurriculam from './CourseCurriculam';
import CourseCertificate from './CourseCertificate';
import CourseReview from './CourseReview';
import CourseFaq from './CourseFaq';
import ViewCourseBottom from './ViewCourseBottom';
const CourseOverview = ({ course }) => {
    return (
        <>
            <AboutCourse course={course} />
            <CourseLink />
            <CourseCurriculam />
            <CourseCertificate />
            <CourseReview />
            <CourseFaq />
            <ViewCourseBottom />
        </>
    )
}
=======
import AboutCourse from "./AboutCourse";
import CourseLink from "./CourseLink";
import CourseCurriculam from "./CourseCurriculam";
import CourseCertificate from "./CourseCertificate";
import CourseReview from "./CourseReview";
import CourseFaq from "./CourseFaq";
import ViewCourseBottom from "./ViewCourseBottom";
const CourseOverview = () => {
 return (
  <>
   <AboutCourse />
   <CourseLink />
   <CourseCurriculam />
   <CourseCertificate />
   <CourseReview />
   <CourseFaq />
   <ViewCourseBottom />
  </>
 );
};
>>>>>>> db4228d71a86596e4688617337f613954d90c98e

export default CourseOverview;
