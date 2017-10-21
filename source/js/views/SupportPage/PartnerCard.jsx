import React from 'react';
import { Row, Col, Image, Thumbnail } from 'react-bootstrap';

export const PartnerCard = props => {
  return (
    <div>
      <Image responsive src={ props.partnerCompanyImg } alt='partners' />
      <h5>{props.partnerCompanyName}</h5>
    </div>
  );
};
