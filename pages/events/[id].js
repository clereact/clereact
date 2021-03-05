export default function Event({ meetupEvent }) {
  return (
    <div>
      <h1>{meetupEvent.name}</h1>
      <pre>{JSON.stringify(meetupEvent, null, 2)}</pre>
    </div>
  );
}

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch(
    'https://api.meetup.com/Cleveland-React/events?desc=false&page=100&status=upcoming,past',
  );
  const meetupEvents = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = meetupEvents.map((meetupEvent) => ({
    params: { id: meetupEvent.id },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(
    `https://api.meetup.com/Cleveland-React/events/${params.id}`,
  );
  const meetupEvent = await res.json();

  // Pass post data to the page via props
  return { props: { meetupEvent } };
}
