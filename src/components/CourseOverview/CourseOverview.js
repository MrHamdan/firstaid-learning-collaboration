import AboutCourse from './AboutCourse';
import CourseLink from './CourseLink';
import CourseCurriculam from './CourseCurriculam';
import CourseCertificate from './CourseCertificate';
import CourseReview from './CourseReview';
import CourseFaq from './CourseFaq';
import ViewCourseBottom from 'components/Shared/ViewCourseBottom';
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
    )
}

export default CourseOverview;