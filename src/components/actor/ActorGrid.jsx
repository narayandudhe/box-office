import React from 'react';
import IMAGE_NOT_FOUND from '../../images/download.jfif';
import ActorCard from './ActorCard';

const ActorGrid = ({ data }) => {
  return (
    <div>
      {data.map(({ person }) => (
        <ActorCard
          key={person.id}
          id={person.id}
          name={person.name}
          image={person.image ? person.image.medium : IMAGE_NOT_FOUND}
          country={person.country ? person.country.name : null}
          birthday={person.birthday}
          deathday={person.deathday}
          gender={person.gender}
        />
      ))}
    </div>
  );
};

export default ActorGrid;
