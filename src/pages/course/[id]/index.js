import CourseOverview from "components/CourseOverview/CourseOverview";

const index = ({ course }) => {
    return (
        <>
            <CourseOverview course={course} />
        </>
    );
};

export async function getStaticPaths() {
    const res = await fetch('https://tawsifhye.github.io/data/courses.json');
    const courses = await res.json();
    const paths = courses.map(course => ({
        params: { id: course.id.toString() }
    })
    );
    return { paths, fallback: false };
}

export async function getStaticProps(context) {
    const res = await fetch('https://tawsifhye.github.io/data/courses.json');
    const courses = await res.json();
    const course = courses.find(course => course.id.toString() === context.params.id);
    return { props: { course } };
}

export default index;
