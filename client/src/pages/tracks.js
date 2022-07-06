import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Layout } from '../components';
import TrackCard from '../containers/track-card';


/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */

/** TRACKS query to retrieve all tracks */
export const TRACKS = gql`
  query getTracks {
    tracksForHome {
      id
      title
      thumbnail
      length
      modulesCount
      author {
        name
        photo
      }
    }
  }
`;
const Tracks = () => {
  const { loading, error, data } = useQuery(TRACKS);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  return <Layout grid>
    {data?.tracksForHome?.map((track, index) => (
      <TrackCard key={index} track={track} />
    ))}
  </Layout>;
};

export default Tracks;
