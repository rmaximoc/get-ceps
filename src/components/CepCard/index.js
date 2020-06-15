import React from 'react';
import { objectOf, string } from 'prop-types';

import { Container } from './styles';

function CepCard({ cep }) {
  return (
    <Container>
      <p>{cep.cep}</p>
      <p>{cep.logradouro}</p>
      <p>{cep.localidade}</p>
    </Container>
  );
}

CepCard.propTypes = {
  cep: objectOf(string).isRequired,
};

export default CepCard;
