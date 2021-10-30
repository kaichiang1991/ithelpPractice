import { Link } from "react-router-dom"
import styled from "styled-components"

const StyledCommentContainer = styled.div `
  border: 1px solid #EBEEF0;
  background-color: #fff;
  margin-bottom: 40px;
  padding: 0 auto;
  text-align: center;

  h2{
    margin-top: 12px;
  }
`

const StyledLoginToCommentContainer = styled.div `
  background-color: #00a0e9;
  width: 108px;
  margin: 0 auto;
  margin-bottom: 20px;
  padding: 6px 12px;
  border-radius: 4px;
  transition: .2s all;
  cursor: pointer;

  a{
    color: #fff;
  }

  &:hover{
    background-color: #0eb3ff;
  }
`

const LoginToComment = () => {
  return (
    <StyledLoginToCommentContainer>
      <Link to='/login'>立即登入留言 </ Link>
    </StyledLoginToCommentContainer>
  )
}

const Comment = () => {
  return (
    <StyledCommentContainer>
      <h2>尚未有邦友留言</h2>
      <LoginToComment />
    </StyledCommentContainer>
  )
}

export default Comment
