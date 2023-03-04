import {useParams} from 'react-router-dom'

const ShowShows = () => {
    const {showId}=useParams();
  return (
    <div>
      hello {showId}
    </div>
  )
}

export default ShowShows
