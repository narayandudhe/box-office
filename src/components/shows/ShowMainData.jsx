import React from 'react';
import IMAGE_NOT_FOUND from '../../images/download.jfif';

const ShowMainData = ({ image, name, rating, genres, summary }) => {
  console.log(rating);
  return (
    <div>
      <img src={image ? image.original : IMAGE_NOT_FOUND} name={name} />
      <div>
        <h1>{name}</h1>
        <div>{rating.average || 'N/A'}</div>
        <div dangerouslySetInnerHTML={{ __html: summary }} />
        <div>
          Geners:
          <div>
            {genres.map(genera => (
              <span key={genera}>{genera}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowMainData;
