import { Minus, Plus } from "phosphor-react";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import styled from "styled-components";

interface Props {
    name: string;
    onPlus?: (value: any) => void;
    onMinus?: (value: any) => void;
}

export function NumberInput({ name, onPlus, onMinus }: Props) {
    const { register, watch, setValue, formState } = useFormContext();

    const value = watch(name)

    useEffect(() => {
        if (!value) {
            setValue(name, 0)
        }
    }, [])

    function handlePlus() {
        if (value == 9) {
            return
        }
        const operation = value + 1
        setValue(name, operation)
        if (onPlus) onPlus(operation)
    }

    function handleMinus() {
        if (value == 0) {
            return
        }
        const operation = value - 1
        setValue(name, operation)
        if (onMinus) onMinus(operation)
    }

    return (
        <NumberInputContainer>
            <InputButton type="button" onClick={() => handleMinus()}>
                <Minus />
            </InputButton>
            <Input type="text"  {...register(name, { valueAsNumber: true })} disabled />
            <InputButton type="button" onClick={() => handlePlus()}>
                <Plus />
            </InputButton>
        </NumberInputContainer>
    )
}


const InputButton = styled.button`
    background: transparent;
    border: 0px;
    color: ${props => props.theme.colors["purple"]};
    &:hover {
        color: ${props => props.theme.colors["purple-dark"]};    
        cursor: pointer;  
    }
`

const Input = styled.input`
    display: flex;
    width: 0.6rem;
    background-color: transparent;
    border: 0px;
`

const NumberInputContainer = styled.div`
    display: flex;
    gap: 0.5rem;
    align-items: center;
    background: ${props => props.theme.colors["base-button"]};
    border-radius: 6px;
    padding: 12px 8px;
    
`