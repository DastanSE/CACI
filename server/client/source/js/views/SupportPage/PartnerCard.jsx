import React from 'react';
import { Image } from 'react-bootstrap';

export const PartnerCard = props => {
  return (
    <div className='partner-card'>
      <Image responsive src={ props.partnerCompanyImg } alt='partners' />
      <h5>{props.partnerCompanyName}</h5>
    </div>
  );
};
