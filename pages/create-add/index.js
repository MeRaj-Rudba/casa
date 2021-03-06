import Head from "next/head";
import React, { Fragment } from "react";
import CreateAddForm from "../../components/create-add/create-add-form";
import { useSession, getSession } from "next-auth/react";
import { connectToDatabase } from "../../lib/db";

export default function CreateAddPage({ user }) {
  const { data: session } = useSession();
  return (
    <div className="page bg-gray-900">
      <Head>
        <title>Create Advertise</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/images/logo2.png" />
      </Head>

      <div className="grid justify-center">
        <CreateAddForm user={user[0]} />
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (session) {
    const client = await connectToDatabase();
    const db = client.db();

    const userData = await db
      .collection("users")
      .find({
        email: session.user.email,
      })
      .toArray();
    client.close();

    return {
      props: {
        user: userData.map((user) => ({
          _id: user._id.toString(),
          email: user.email,
          name: user.name,
          status: user.status,
          gender: user.gender,
          profilePic: user.profilePic,
          posts: user.posts,
        })),
        session: session,
      },
    };
  } else {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }
}
