import React, { Fragment } from "react";

import Post from "../post";

const FeaturedPosts = ({ posts }) => {
  return (
    <Fragment>
      <ul className="max-w-7xl mx-auto p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {posts.map((post, idx) => (
          <Post key={post._id} post={post} />
        ))}
      </ul>
    </Fragment>
  );
};

export default FeaturedPosts;
