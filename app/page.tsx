import Head from "next/head";
import Banner from "../components/banner/Banner";
import BestBookSection from "../components/sections/BestBookSection/BestBookSection";
// import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Banner />
      <BestBookSection />
    </div>
  );
}
