import Image from "next/image";
import React, { Fragment } from "react";

const Profile = () => {
  const imgPath = "/images/bg2.jpg";
  return (
    <Fragment>
      <div className="max-w-7xl mx-auto p-10  grid justify-center">
        <div className="rounded-3xl overflow-hidden shadow-xl max-w-xs my-3 bg-gray-800">
          <img src={imgPath} className="w-full" />
          <div className="flex justify-center mt-8">
            <img
              src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79"
              className="rounded-full border-solid border-purple-600 border-2 -mt-3 my-round-image"
            />
          </div>
          <div className="text-center px-3 pb-6 pt-2">
            <h3 className="text-pink-500 text-lg bold font-sans">John Doe</h3>
            <p className="mt-2 font-sans font-light text-gray-300">
              Hello, i'm from another the other side!
            </p>
          </div>
          <div className="flex justify-center pb-3 text-gray-300">
            <div className="text-center mr-3 border-purple-500 border-r pr-3">
              <h2>34</h2>
              <span className="text-purple-500">Photos</span>
            </div>
            <div className="text-center">
              <h2>42</h2>
              <span className="text-purple-500">Friends</span>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Profile;
