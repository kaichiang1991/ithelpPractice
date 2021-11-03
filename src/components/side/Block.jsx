import styled from "styled-components"

const StyledBlockContainer = styled.div `
  margin-bottom: 40px;
`

const StyledBlockTitleContainer = styled.div `
  background-color: #00a0e9;
  padding: 6px 12px;

  h3{
    color: #fff;
    margin: 0;
  }
`

const StyledBlockContentContainer = styled.div `
  background-color: #fff;
`

const StyledBlockUl = styled.ul `
  margin: 8px 0;
  padding-left: 32px;
  padding-right: 12px;
  padding-bottom: 12px;

  li{
    color: #303233;
  }

  li::marker{
    color: #ddd;
  }
`

const Block = ({title, list}) => {
  return (
    <StyledBlockContainer>
      <StyledBlockTitleContainer>
        <h3>{title}</h3>
      </StyledBlockTitleContainer>
      <StyledBlockContentContainer>
        <StyledBlockUl>
          {list.map(_list => <li>{_list}</li>)}
        </StyledBlockUl>
      </StyledBlockContentContainer>
    </StyledBlockContainer>
  )
}

export default Block
