import React, { useContext } from 'react';

import { CepsContext } from '../../context/CepsContext';

import { Container } from './styles';

function Counter() {
  const { allCeps } = useContext(CepsContext);

  return (
    <Container>
      <p>{`Você tem um total de ${allCeps.length}${allCeps.length === 1 ? ' CEP' : ' CEPs'}`}</p>
    </Container>
  );
}

export default Counter;
