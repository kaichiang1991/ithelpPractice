import styled from "styled-components"
import Category from "./Category"

const StyledBlogContainer = styled.div `
  background-color: #fff;
  border: 1px solid #E5E5E5;
  
  margin-top: 48px;
  padding: 40px 40px 60px 60px;
`

const Blog = () => {
  return (
    <StyledBlogContainer>
      <Category />
      Blog
    </StyledBlogContainer>
  )
}

export default Blog
