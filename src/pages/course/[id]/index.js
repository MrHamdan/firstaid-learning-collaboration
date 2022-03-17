import CourseOverview from "components/CourseOverview/CourseOverview";

const index = ({ course }) => {
    return (
        <>
            <CourseOverview course={course} />
        </>
    );
};

export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const courses = await res.json();
    const paths = courses.map(course => ({
        params: { id: course.id.toString() }
    })
    );
    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const course = await result.json();
    return {
        props: {
            course,
        },
    };
}

export default index;
