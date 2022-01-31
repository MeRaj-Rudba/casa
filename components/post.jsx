import Image from "next/image";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
const Post = ({ post }) => {
  const link = `advertises/${post._id.toString()}`;
  const router = useRouter();
  return (
    <div className="wrapper bg-gray-900 antialiased text-gray-900">
      <div>
        {/* <Image
          src={post.image}
          alt={post.title}
          className="w-full object-cover object-center rounded-lg shadow-md"
          width={500}
          height={300}
        /> */}
        <img
          src={post.image}
          alt={post.title}
          className="w-full object-cover object-center rounded-lg shadow-md"
        />

        <div className="relative px-4 -mt-16  ">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="flex ">
              <span className="bg-purple-500 text-white text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                {post.status}
              </span>
              <div className="ml-2 text-gray-400 uppercase text-xs font-semibold tracking-wider">
                <span className="flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {post.address}
                </span>
              </div>
            </div>

            <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate text-gray-200">
              {post.title}
            </h4>

            <div className="mt-1 text-pink-500">
              <span className="flex  items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 4a1 1 0 000 2 1 1 0 011 1v1H7a1 1 0 000 2h1v3a3 3 0 106 0v-1a1 1 0 10-2 0v1a1 1 0 11-2 0v-3h3a1 1 0 100-2h-3V7a3 3 0 00-3-3z"
                    clipRule="evenodd"
                  />
                </svg>
                {post.price}
                <span className="text-gray-200 text-sm"> /month</span>
              </span>
            </div>

            <button
              onClick={() => router.push("/posts/" + post._id.toString())}
              className="mt-4 text-lg font-semibold text-purple-500 hover:underline"
            >
              Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
