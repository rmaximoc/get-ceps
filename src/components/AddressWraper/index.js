import React, { useState, useContext } from 'react';
import CepCard from '../CepCard';
import api from '../../services/api';

import { CepsContext } from '../../context/CepsContext';

import { Container, Form } from './styles';

function AddressWraper() {
  const [addCep, setAddCep] = useState('');
  const { allCeps, setAllCeps } = useContext(CepsContext);

  function handleSubmit(e) {
    e.preventDefault();
    const inputedCep = api.get(`/${addCep}/json`).then(
      (response) => setAllCeps((prevState) => [...prevState, response.data]),
    );

    setAddCep('');

    return inputedCep;
  }

  return (
    <Container>
      <Form action="submit" onSubmit={handleSubmit}>
        <input type="text" value={addCep} onChange={(e) => setAddCep(e.target.value)} />
        <button type="submit">
          Adicionar
        </button>
      </Form>
      {!!allCeps && allCeps.map((cep) => <CepCard key={cep.cep} cep={cep} />)}
    </Container>
  );
}

export default AddressWraper;
