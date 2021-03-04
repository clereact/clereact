import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Cleveland React</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Cleveland React" />
        <p className="description">Now on Next.js</p>
      </main>

      <Footer />
    </div>
  );
}
