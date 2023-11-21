import Image from "next/image";
import Head from "next/head";
import Dashboard from "../components/Dashboard";
import { useSession } from "next-auth/react";

export default function Home() {

  // const {data:session} = useSession()
  // console.log(session.user.accessToken)
  
  return (
    <div className="">
      <Head>
        <title>On Track - Dashboard</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Dashboard />
    </div>
  );
}
