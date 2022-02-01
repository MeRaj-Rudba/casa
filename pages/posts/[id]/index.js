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
  const res = await fetch("https://node-casa.herokuapp.com/post/posts");
  const posts = await res.json();

  const paths = posts.map((post) => ({
    params: { id: post._id.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://node-casa.herokuapp.com/post/posts/${params.id}`
  );
  const post = await res.json();

  return { props: { post } };
}
