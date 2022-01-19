import { Fragment } from "react";
import Layouts from "../components/layout/Layouts";
import "../styles/globals.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <Fragment>
      <Layouts>
        <Component {...pageProps} />
      </Layouts>
    </Fragment>
  );
}

export default MyApp;
