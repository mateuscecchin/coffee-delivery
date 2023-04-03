import { InputHTMLAttributes } from "react";
import { useFormContext } from "react-hook-form";
import styled from "styled-components";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

export function TextInput({ name, style, ...rest }: TextInputProps) {
  const { register } = useFormContext();

  return (
    <Input {...register(name)} style={style} {...rest} />
  );
}

const Input = styled.input`
  display: flex;
  width: 100%;
  outline: none;
  height: 3rem;
  padding: 0.8rem;

  border-radius: 6px;
  border: 2px solid ${(props) => props.theme.colors["base-button"]};
  background-color: ${(props) => props.theme.colors["base-input"]};


  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  color: ${(props) => props.theme.colors["base-text"]};

  
  &:focus-within {
    border: 2px solid ${(props) => props.theme.colors["yellow-dark"]};
  }
`;
