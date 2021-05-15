import Head from 'next/head';
import { getFeaturedEvents } from '../helpers/api-util';
import EventList from '../components/events/event-list';

function HomePage(props) {
  return (
    <div>
      <Head>
        <title>NextJS Events</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="NextJS Events" />
        <meta name="keywords" content="NextJS, ReactJS, JavaScript" />
        <meta name="author" content="Ronchi Floyd" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <EventList items={props.events} />
    </div>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
}

export default HomePage;
