import '@/styles/globals.css'
import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Layout } from '../components/layout/Layout';
import "remixicon/fonts/remixicon.css";
import "bootstrap/dist/css/bootstrap.css";

export default function App({ Component, pageProps }) {
 
  return (
    <Layout>
      <Toaster />
      <Component {...pageProps} />
    </Layout>
  )
}
