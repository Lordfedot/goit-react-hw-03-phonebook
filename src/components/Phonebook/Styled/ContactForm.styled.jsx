import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 40%;
`;

export const Input = styled.input`
  margin-left: 5px;
  border: 1px solid black;
`;
export const Button = styled.button`
  background-color: #5a5ac2;
  color: black;
  border: none;
  border-radius: 4px;

  width: 150px;
  height: 40px;

  &:hover,
  &:focus {
    border: 1px solid #103b0b6a;
    background-color: #3737ad;
    color: red;
  }
`;
