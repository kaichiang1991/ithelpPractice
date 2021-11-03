import { CaretRightFilled, RightOutlined } from "@ant-design/icons"
import { Link } from "react-router-dom"
import styled from "styled-components"
import HashTag from "../blog/HashTag"

const StyledTagListContainer = styled.div `
  margin-bottom: 40px;
`

const StyledTagListTitleContainer = styled.div `
  display: flex;
  justify-content: space-between;
  background-color: #00a0e9;
  padding: 6px 12px;

  h3{
    color: #fff;
    margin: 0;
  }
`

const StyledMoreItemContainer = styled.div `
  span{
    color: #fff;
    font-size: 8px;
  }
`

const StyledTagListContentContainer = styled.div `
  background-color: #fff;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 8px 12px;
`

const TagList = ({title, tags}) => {
  return (
    <StyledTagListContainer>
      <StyledTagListTitleContainer>
        <h3>{title}</h3>
        <StyledMoreItemContainer>
          <Link to='/tags'><span>看更多</span> <CaretRightFilled /></Link>
        </StyledMoreItemContainer>
      </StyledTagListTitleContainer>
      <StyledTagListContentContainer>
        {tags.map((tag, index) => <HashTag link={`/tag${index}`} text={tag}/>)}
      </StyledTagListContentContainer>
    </StyledTagListContainer>
  )
}

export default TagList
