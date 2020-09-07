import { ApolloProvider } from "@apollo/client";

import "bootstrap/dist/css/bootstrap.min.css";
import "../public/yensaodatquang/assets/css/style.css";
import MenuApp from "../components/MenuApp/index";
import { useApollo } from "../apollo/client";
import { Footer } from "../components/src/Footer";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { theme, page } from "../config/index";
import { FacebookProvider, CustomChat } from "react-facebook";
export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  const [isOpen, setIsOpen] = useState(false);
  const [innerWidth, setInnerWidth] = useState();

  const toggle = () => setIsOpen(!isOpen);
  const router = useRouter();
  useEffect(() => {
    router.events.on("routeChangeComplete", (url) => {
      setIsOpen(false);
    });
    setInnerWidth(window.innerWidth);
  });
  return (
    <ApolloProvider client={apolloClient}>
      <header>
        <MenuApp isOpen={isOpen} toggle={toggle} innerWidth={innerWidth} />
      </header>
      <main
        style={{
          paddingTop: 60,
          paddingBottom: theme.spacing(4),
          minHeight: "60vh",
          fontFamily: "'Roboto', sans-serif",
          backgroundColor: theme.bgDark,
          color: theme.color,
          textShadow: "1px 1px 1px rgba(0,0,0,0.04)",
        }}
      >
        <Component {...pageProps} />
      </main>
      <footer>
        <Footer />
      </footer>
    </ApolloProvider>
  );
}
