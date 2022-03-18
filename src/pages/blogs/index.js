import BlogsHome from "components/Blogs/BlogsHome";

const blogs = ({ blogsData }) => {
 return (
  <div>
   <BlogsHome blogsData={blogsData} />
  </div>
 );
};

export default blogs;

export async function getStaticProps() {
 const res = await fetch("https://tawsifhye.github.io/data/blogs.json");
 console.log(res);
 const blogsData = await res.json();

 return {
  props: {
   blogsData,
  },
 };
}
