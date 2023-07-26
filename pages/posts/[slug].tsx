import { getAllPosts, getPostBySlug } from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHtml";

const Post = ({ post }: any) => {
  return (
    <main>
      <h1>{post.title}</h1>
      <span>{post.date}</span>
      <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
    </main>
  );
};

export default Post;

export async function getStaticProps({ params }: any) {
  const post = getPostBySlug(params.slug, [
    "categories",
    "date",
    "description",
    "slug",
    "tags",
    "title",
    "id",
    "content",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
