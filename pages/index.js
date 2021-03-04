import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';

export async function getStaticProps(context) {
  try {
    const meetups = await Promise.all([
      fetch(
        'https://api.meetup.com/Cleveland-React/events?desc=false&page=100&status=upcoming',
      ),
      fetch(
        'https://api.meetup.com/Cleveland-React/events?desc=true&page=100&status=past',
      ),
    ]);
    // https://api.meetup.com/Cleveland-React/events?desc=false&page=100&status=upcoming
    const upcoming = await meetups[0].json();
    const past = await meetups[1].json();
    return {
      props: {
        meetups: {
          upcoming,
          past,
        },
      }, // will be passed to the page component as props
    };
  } catch (e) {
    console.log(e);
    return { props: {} };
  }
}

export default function Home({ meetups }) {
  console.log(meetups);
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
