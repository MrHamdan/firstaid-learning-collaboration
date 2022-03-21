import BlogDetailsHome from "components/BlogDetails/BlogDetailsHome";

const index = ({ blog, allBlogsData }) => {
 return (
  <>
   <BlogDetailsHome blog={blog} allBlogsData={allBlogsData} />
  </>
 );
};

export default index;

export async function getStaticPaths() {
 const res = await fetch("https://tawsifhye.github.io/data/blogs.json");
 const blogs = await res.json();
 const paths = blogs.map((blog) => ({
  params: { id: blog.id.toString() },
 }));
 return { paths, fallback: false };
}

export async function getStaticProps(context) {
 const res = await fetch("https://tawsifhye.github.io/data/blogs.json");
 const blogs = await res.json();
 const blog = blogs.find((blog) => blog.id.toString() === context.params.id);

 const allBlogsRes = await fetch("https://tawsifhye.github.io/data/blogs.json");
 const allBlogsData = await allBlogsRes.json();

 return { props: { blog, allBlogsData } };
}
