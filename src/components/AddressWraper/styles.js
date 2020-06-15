import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 600px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: 20px auto;
  font-family: 'Roboto', sans-serif;

  input {
    height: 60px;
    width: 490px;
    border: 1px solid rgba(0, 0, 0, .2);
    border-radius: 6px 0 0 6px;
    font-size: 28px;
  }

  button {
    height: 64px;
    width: 100px;
    border: none;
    border-radius: 0px 6px 6px 0;
    background: #f58120
  }
`;

export const Form = styled.form`
  display: flex;
`;
