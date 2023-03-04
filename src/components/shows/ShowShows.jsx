import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getShowById } from '../../misc/config';

const useShowById = showId => {
  const [showData, setshowData] = useState(null);
  const [showError, setshowError] = useState(null);
  useEffect(() => {
    async function fetchdata() {
      try {
        const data = await getShowById(showId);
        setshowData(data);
      } catch (error) {
        setshowError(error);
      }
    }
    fetchdata();
  }, [showId]);
  return { showData, showError };
};
const ShowShows = () => {
  const { showId } = useParams();
  const { showData, showError } = useShowById(showId);

  if (showError) {
    return <div>Error occured when loading</div>;
  }
  if (showData) {
    return <div>data is {showData.name}</div>;
  }

  return <div>hello is loading </div>;
};

export default ShowShows;
