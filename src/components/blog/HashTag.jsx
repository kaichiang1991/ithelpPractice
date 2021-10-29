import { Link } from "react-router-dom"
import styled from "styled-components"

const StyledHashTagContainer = styled.div `
  display: inline-block;
  padding: 2px 4px;
  margin-right: 8px;

  background-color: #E8F0F2;

  a{
    color: #567A89;
  }

  a:hover{
    color: #A1B4BB;
  }
`

const HashTag = ({link, text}) => {
  return (
    <StyledHashTagContainer>
      <Link to={link}>{text}</Link>    
    </StyledHashTagContainer>
  )
}

export default HashTag
