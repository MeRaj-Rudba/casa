import Image from "next/image";
import React, { Fragment, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useSession, signIn, signOut } from "next-auth/react";
const Profile = ({ user }) => {
  const { data: session } = useSession();
  const mandala = "/images/mandala.jpg";
  const maleProfilePic = "/images/male.png";
  const femaleProfilePic = "/images/female.png";

  return (
    <Fragment>
      <div className="max-w-7xl mx-auto p-10  grid justify-center">
        {user ? (
          <div className="rounded-3xl overflow-hidden shadow-xl max-w-xs my-3 bg-gray-800">
            <img src={mandala} className="w-full" />
            <div className="flex justify-center mt-8">
              <img
                src={user.gender === "male" ? maleProfilePic : femaleProfilePic}
                className="rounded-full border-solid border-purple-600 border-2 -mt-3 my-round-image"
              />
            </div>
            <div className="text-center px-3 pb-6 pt-2">
              <h3 className="text-pink-500 text-lg bold font-sans">
                {user.name}
              </h3>
              <p className="mt-2 font-sans font-light text-gray-300">
                {user.status}
              </p>
              <button
                onClick={() => signOut()}
                className="mt-5 bg-purple-600 hover:bg-pink-600 rounded px-3 py-1 text-gray-100"
              >
                Log Out
              </button>
            </div>
            <div className="flex justify-center pb-3 text-gray-300">
              <div className="text-center border-purple-500 ">
                <h2>{user.posts.length}</h2>
                <span className="text-purple-500">Posts</span>
              </div>
            </div>
          </div>
        ) : (
          <h1 className="text-purple-500">No User Found!</h1>
        )}
      </div>
    </Fragment>
  );
};

export default Profile;
