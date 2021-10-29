import { LikeFilled } from "@ant-design/icons"
import styled from "styled-components"

const StyledLikeContainer = styled.div `
  background-color: #1577F2;
  color: #fff;

  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2px 8px;
  border-radius: 4px;
  width: 72px;

  cursor: pointer;
`

const LikeTag = ({count, setCount}) => {
  return (
    <StyledLikeContainer onClick={()=> setCount(count+1)}>
      <LikeFilled style={{color: '#fff', marginRight: 4}} /> 讚 {count}
    </StyledLikeContainer>
  )
}

export default LikeTag
