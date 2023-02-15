import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import AppLayout from "../components/layout";
import "@/styles/global.css";
import "@/styles/owl.carousel.min.css";
import "@/styles/style.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>신초이 | Cho-I Shin | 풀스택 개발자 Fullstack Developer</title>
      </Head>
      <ThemeProvider theme={theme}>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </ThemeProvider>
    </>
  );
}
