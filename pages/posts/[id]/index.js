import Head from "next/head";
import React, { Fragment } from "react";
import AddDetails from "../../../components/details/add-details";

export default function SinglePost({ post }) {
  return (
    <Fragment>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.details} />
        <link rel="icon" href="/images/logo2.png" />
      </Head>
      <div className="bg-gray-900 page">
        <AddDetails post={post} />
      </div>
    </Fragment>
  );
}

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch("http://localhost:5000/post/posts");
  const postsData = await res.json();
  const posts = postsData.data;

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { id: post._id },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(`http://localhost:5000/post/posts/${params.id}`);
  const post = await res.json();

  // Pass post data to the page via props
  return { props: { post } };
}
