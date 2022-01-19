import Head from "next/head";
import Image from "next/image";
import FeaturedPosts from "../components/home/featured-posts";
import DUMMY_DATA from "../data/posts";
import styles from "../styles/Home.module.css";

export default function Home() {
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
      <FeaturedPosts
        posts={DUMMY_DATA.filter((p) => {
          if (p.isFeatured) {
            return true;
          }
          return false;
        })}
      />
    </div>
  );
}
