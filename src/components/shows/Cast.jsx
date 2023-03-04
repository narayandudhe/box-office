import React from 'react';
import IMAGE_NOT_FOUND from '../../images/download.jfif';

const Cast = ({ cast }) => {
  return (
    <div>
      {cast.map(({ person, character, voice }) => (
        <div key={person.id}>
          <div>
            <img src={person.image ? person.image.medium : IMAGE_NOT_FOUND} />
          </div>
          <div>
            {person.name} | {character.name} | {voice && '| voiceover'}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cast;
