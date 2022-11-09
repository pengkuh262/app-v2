import "../styles/globals.css";
import { Mulish } from "@next/font/google";

const mulish = Mulish({
  weight: "400",
});

function MyApp({ Component, pageProps }) {
  return (
    <main className={mulish.className}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
