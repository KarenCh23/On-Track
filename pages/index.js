import Image from 'next/image';
import Head from "next/head";
import Dashboard from "../components/Dashboard";

export default function Home() {
  return (
   
     <div className="">
      <Head>
        <title>On Track - Dashboard</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Dashboard />
    </div>
 

     
    
  )
}
