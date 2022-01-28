import { Fragment } from "react";
import Layouts from "../components/layout/Layouts";
import "../styles/globals.css";
import { UserProvider } from "../components/context/UserContext";
import { SessionProvider } from "next-auth/react";
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <Fragment>
      <SessionProvider session={session}>
        <UserProvider>
          <Layouts>
            <Component {...pageProps} />
          </Layouts>
        </UserProvider>
      </SessionProvider>
    </Fragment>
  );
}

export default MyApp;
