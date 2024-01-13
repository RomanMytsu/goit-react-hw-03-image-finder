import { GoSearch } from 'react-icons/go';
import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: rgb(255, 255, 255);
  border-radius: 3px;
  overflow: hidden;
`;

export const SearchBtn = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0px;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  outline: none;

  .button:hover {
    opacity: 1;
  }
`;
export const IconBtn = styled(<GoSearch />)`
  width: 24px;
  height: 24px;
`;

export const LabelBtn = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  color: black;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;

  &:placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
