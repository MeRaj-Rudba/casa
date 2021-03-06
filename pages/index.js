import Head from "next/head";
import Image from "next/image";
import FeaturedPosts from "../components/home/featured-posts";

export default function Home({ posts }) {
  return (
    <div className="page bg-gray-900">
      <Head>
        <title>Casa</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/images/logo2.png" />
      </Head>
      <h1 className="max-w-7xl mx-auto p-10 pb-0 font-semibold text-3xl text-gray-200">
        Featured
      </h1>
      <FeaturedPosts posts={posts} />
    </div>
  );
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch("https://node-casa.herokuapp.com/post/posts");
  const posts = await res.json();

  const allPosts = JSON.parse(JSON.stringify(posts));
  console.log(allPosts);

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts: allPosts.filter((p) => {
        if (p.isFeatured) {
          return true;
        }
        return false;
      }),
    },
    revalidate: 10,
  };
}
