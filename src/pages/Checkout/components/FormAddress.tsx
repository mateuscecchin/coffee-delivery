import { MapPinLine } from "phosphor-react";
import { FormProvider, useForm } from "react-hook-form";
import styled from "styled-components";
import { TextInput } from "../../../components/TextInput";
import { Section } from "./Section";

export function FormAddress({ methods }: any) {
    return (

        <div>
            <div
                style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
                <TextInput name="cep" placeholder="CEP" style={{ width: 200 }} required />
                <TextInput name="rua" placeholder="Rua" style={{ width: 560 }} required />
                <Flex>
                    <TextInput
                        name="numero"
                        placeholder="Número"
                        style={{ width: 200 }}
                        required
                    />
                    <TextInput
                        name="complemento"
                        placeholder="Complemento"
                        style={{ width: 350 }}
                    />
                </Flex>
                <Flex>
                    <TextInput
                        name="bairro"
                        placeholder="Bairro"
                        style={{ width: 200 }}
                        required
                    />
                    <TextInput
                        name="cidade"
                        placeholder="Cidade"
                        style={{ width: 280 }}
                        required
                    />
                    <TextInput name="uf" placeholder="UF" style={{ width: 60 }} required />
                </Flex>
            </div>
        </div>
    )
}

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.6rem;
`;