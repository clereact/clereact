import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import Link from 'next/link';

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
  return (
    <div className="container">
      <Head>
        <title>Cleveland React</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Cleveland React</h1>
        <p className="description">Now on Next.js</p>

        <h2>Upcoming events</h2>
        <ul className="divide-y divide-gray-200">
          {meetups.upcoming.map((meetup) => {
            return (
              <li className="py-4" key={meetup.id}>
                <Link href={`/events/${meetup.id}`}>
                  <a>{meetup.name}</a>
                </Link>
              </li>
            );
          })}
        </ul>
        <h2>Past Events</h2>
        <ul className="divide-y divide-gray-200">
          {meetups.past.map((meetup) => {
            return (
              <li className="py-4" key={meetup.id}>
                <Link href={`/events/${meetup.id}`}>
                  <a>{meetup.name}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </main>

      <Footer />
    </div>
  );
}
