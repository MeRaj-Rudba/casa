import React from "react";

const AddDetails = (props) => {
  return (
    <div className="max-w-7xl mx-auto p-10  grid justify-center">
      <div className="max-w-md  bg-gray-800 shadow-lg rounded-lg my-20">
        <div className="flex justify-center md:justify-end ">
          <img
            className="w-full object-cover object-center rounded-t-lg shadow-md"
            src={props.post.image}
          />
        </div>
        <div className="mt-4 py-4 px-8">
          <h2 className="text-white  text-3xl font-semibold">
            {props.post.title}
          </h2>

          <div className="grid gap-1">
            <p className="text-purple-500 flex gap-1 mb-4">
              {" "}
              <span className="italic">By</span> {props.post.creator}
            </p>
            <p className="text-gray-400 flex gap-1 mb-2">
              <span className="bg-purple-500 text-white text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                {props.post.status}
              </span>
            </p>
            <p className="text-gray-400 flex gap-1">
              <span className="flex  items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1 text-pink-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                {props.post.address}
              </span>
            </p>
            <p className="text-gray-400 flex gap-1">
              <span className="flex  items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1 text-pink-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z"
                    clipRule="evenodd"
                  />
                </svg>
                {props.post.category}
              </span>
            </p>

            <p className="text-gray-400 flex gap-1">
              <span className="flex  items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1 text-pink-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 4a1 1 0 000 2 1 1 0 011 1v1H7a1 1 0 000 2h1v3a3 3 0 106 0v-1a1 1 0 10-2 0v1a1 1 0 11-2 0v-3h3a1 1 0 100-2h-3V7a3 3 0 00-3-3z"
                    clipRule="evenodd"
                  />
                </svg>
                {props.post.price}
                <span className=" text-sm">
                  {" "}
                  <span className="text-pink-500">/</span>month
                </span>
              </span>
            </p>

            <p className="text-gray-400 flex gap-1">
              <span className="flex  items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1 text-pink-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                {props.post.contact}
              </span>
            </p>
          </div>

          <p className="mt-4  text-gray-50 italic ">{props.post.details}</p>
        </div>
        <div className="mb-4 flex justify-end mt-4 py-4 px-8">
          {/* <button className="mt-2 text-lg font-semibold text-purple-500 hover:underline">
            Rent
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default AddDetails;
