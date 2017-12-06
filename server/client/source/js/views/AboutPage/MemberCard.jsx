import React from 'react';
import { Image, Media } from 'react-bootstrap';

export const MemberCard = props => {
  return (
    <div className='single-profile' >
      <Media>
        <Media.Left className='pull-left'>
          <Image width={ 100 } height={ 100 } className='media-object' src={ props.imgSrc } alt=''  />
        </Media.Left>
        <Media.Body>
          <Media.Heading>
            <h4>{props.name}</h4>
            <h5>{props.position}</h5>
          </Media.Heading>
        </Media.Body>
      </Media>
      <p>{props.about}</p>
    </div>
  );
};
