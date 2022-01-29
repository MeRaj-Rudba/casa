import React from "react";

const Post = (props) => {
  return (
    <li className="flex items-center rounded-full overflow-hidden shadow-xl max-w-xs my-3 bg-gray-800">
      <img
        className="object-cover w-12 h-12 mr-2  rounded-full"
        src={props.post.image}
        alt={props.post.title}
      />
      <div className="text-white  p-4">
        {props.post.title} -{" "}
        {props.post.isFeatured ? (
          <span className="bg-green-600 text-white text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
            Featured
          </span>
        ) : (
          <span className="bg-red-600 text-white text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
            Not Featured
          </span>
        )}
      </div>
    </li>
  );
};

export default Post;
