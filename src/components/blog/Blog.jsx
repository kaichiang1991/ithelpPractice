import styled from "styled-components"
import Category from "./Category"
import HashTag from "./HashTag"

const StyledBlogContainer = styled.div `
  background-color: #fff;
  border: 1px solid #E5E5E5;
  
  margin-top: 48px;
  padding: 40px 40px 60px 60px;
`

const Blog = ({title}) => {
  return (
    <StyledBlogContainer>
      <Category />
      <h1>{title}</h1>
      <HashTag link='/2017' text='2017鐵人賽'/>
      <HashTag link='/aws' text='aws'/>
      <HashTag link='/vps' text='vps'/>
    </StyledBlogContainer>
  )
}

export default Blog
