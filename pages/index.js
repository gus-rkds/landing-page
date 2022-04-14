import Head from "next/head";
import AboutComponent from "../components/AboutComponent";
import ContactComponent from "../components/ContactComponent";
import DownloadComponent from "../components/DownloadComponent";
import ServiceComponent from "../components/ServiceComponent";
import TopContainer from "../components/TopContainer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>FOODO - Landign Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopContainer />
      <ServiceComponent />
      <AboutComponent />
      <DownloadComponent />
      <ContactComponent />

      <footer className="footer">
        <h5>Foodo &copy; gus_rkds</h5>
      </footer>
    </div>
  );
}
