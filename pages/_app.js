import 'bootstrap/dist/css/bootstrap.css';
import '/styles/globals.css';
import Head from "next/head";
import Header from "../Components/Header";
import React from "react";
import Footer from "../Components/Footer";
import {BrowserRouter} from "react-router-dom";


function MyApp({ Component, pageProps }) {

  return (
      <div>
          <Head>
              <link rel="icon" href="/favicon.ico"></link>
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js"></script>
              <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js"/>
              <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.6.1/font/bootstrap-icons.css"></link>
              <title>Arefmrp</title>
          </Head>
         <Header></Header>
            <Component {...pageProps} />
         <Footer></Footer>
      </div>

      );
}

export default MyApp
