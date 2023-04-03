import styled from "styled-components"

export function TextCustom({ label, value, bold }: any) {
    const Text = bold ? Bold : Regular
    return (
        <Flex>
            <Text>
                {label}
            </Text>
            <Text>
                {value}
            </Text>
        </Flex>
    )
}


const Flex = styled.div`
    display: flex;
    width: 370px;
    flex: 1;
    justify-content: space-between;
`

const Regular = styled.p`
      color: ${props => props.theme.colors["base-text"]};
      font-weight: 400;
      font-size: 14px;
      line-height: 18.2px;
`
const Bold = styled.p`
      color: ${props => props.theme.colors["base-subtitle"]};
      font-weight: 700;
      font-size: 20px;
`
