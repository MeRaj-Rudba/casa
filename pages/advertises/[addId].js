// import { ObjectId } from "mongodb";
import Head from "next/head";
import React, { Fragment } from "react";
import AddDetails from "../../components/details/add-details";
// import { connectToDatabase } from "../../lib/db";

export default function AdvertisePage(props) {
  return (
    <div className="bg-gray-900">
      <Head>
        <title>{props.post.title}</title>
        <meta name="description" content={props.post.details} />
        <link rel="icon" href="/images/logo2.png" />
      </Head>
      <div className="page">
        <AddDetails post={props.post} />
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  // const client = await connectToDatabase();
  // const db = client.db();
  // const postData = await db.collection("posts").find().toArray();

  // const posts = JSON.parse(JSON.stringify(postData));

  const res = await fetch(`http://localhost:5000/post/posts`);
  const posts = await res.json();

  const paths = posts.data.map((p) => ({
    params: { addId: p._id },
  }));
  // console.log("Paths", paths);

  return {
    fallback: "blocking",
    paths: paths,
  };
}

export async function getStaticProps(context) {
  const addId = context.params.addId;
  // const client = await connectToDatabase();
  // const db = client.db();
  // const postData = await db
  //   .collection("posts")
  //   .find({
  //     _id: ObjectId(addId),
  //   })
  //   .toArray();

  // const posts = JSON.parse(JSON.stringify(postData));
  // const post = posts[0];

  const res = await fetch(`http://localhost:5000/post/posts/${addId}`);
  const post = await res.json();

  return {
    props: {
      // post: post,
      post: post.data,
    },
    revalidate: 1,
  };
}
