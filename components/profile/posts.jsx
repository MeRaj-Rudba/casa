import React from "react";
import Post from "./post";

const Posts = (props) => {
  if (props.posts) {
    return (
      <div className="max-w-7xl mx-auto p-10  grid justify-center">
        <p className="py-4 font-semibold text-2xl text-gray-200">
          Your Listings
        </p>
        <ul>
          {props.posts.map((p) => (
            <Post key={p._id} post={p} />
          ))}
        </ul>
      </div>
    );
  } else {
    return (
      <div className="max-w-7xl mx-auto p-10  grid justify-center">
        <span></span>
      </div>
    );
  }
};

export default Posts;
