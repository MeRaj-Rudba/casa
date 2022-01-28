import Head from "next/head";
import React, { Fragment } from "react";
import AddDetails from "../../components/details/add-details";
import FeaturedPosts from "../../components/home/featured-posts";
import DUMMY_DATA from "../../data/posts";
import logo from "../../public/images/logo2.png";

export default function AdvertisePage(props) {
  return (
    <div className="bg-gray-900">
      <Head>
        <title>{props.post.title}</title>
        <meta name={props.post.title} content={props.post.details} />
        <link rel="icon" href={logo} />
      </Head>
      <div className="page">
        <AddDetails post={props.post} />
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`http://localhost:5000/post/posts`);
  const posts = await res.json();

  return {
    fallback: "blocking",
    paths: posts.data.map((p) => ({
      params: { addId: p._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const addId = context.params.addId;
  const res = await fetch(`http://localhost:5000/post/posts/${addId}`);
  const post = await res.json();

  return {
    props: {
      post: post.data,
    },
    revalidate: 1,
  };
}
