import { getAllPosts } from "../lib/api";
import PostType from "../interfaces/post";
import Link from "next/link";
import cloneNodes from "tailwindcss";

type Props = {
  allPosts: PostType[];
};

const Home = ({ allPosts }: Props) => {
  console.log(cloneNodes, "clonenode");
  return (
    <div className="p-3">
      <header>
        <h1 className="text-xl">heewon blog</h1>
      </header>
      <main>
        {allPosts.length ? (
          <ul>
            {allPosts.map((post) => (
              <li key={post.id}>
                <Link as={`/posts/${post.slug}`} href="/posts/[slug]">
                  {post.categories?.length
                    ? post.categories.map((category, idx) => (
                        <span key={category + idx}>{category}</span>
                      ))
                    : null}
                  <section>
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                  </section>
                  <b>{post.date}</b>
                  <ul>
                    {post.tags.map((tag, idx) => (
                      <li key={tag + idx}>{tag}</li>
                    ))}
                  </ul>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <div>포스팅 해주세요</div>
        )}
      </main>
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "categories",
    "date",
    "description",
    "slug",
    "tags",
    "title",
    "id",
  ]);

  return {
    props: { allPosts },
  };
};

/**
 * 1. getStaticProps를 불러서 posts 데이터를 조작해 리스트를 뿌려준다
 * 2. 클릭 했을 때 고유한 slug 페이지로 넘어갈 수 있도록 한다 getpath
 * 3. 넘어 갔을 때 데이터를 기반으로 화면에 보여준다
 */
