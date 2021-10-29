import { useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import LikeTag from "./LikeTag"

const StyledAuthorContainer = styled.div `
  width: 100%;
  margin-top: 12px;
  padding-bottom: 60px;
  border-bottom: 1px #9C9C9C dotted;

  img{
    height: 66px;
  }
`

// 整個作者資料的區塊
const StyledAuthorInfoSection = styled.div `
  display: flex;
`

// 作者詳細資料的容器
const StyledAuthorInfoContainer = styled.div `
  display: flex;
  flex-direction: column;
  margin-left: 8px;
`

// 作者名
const AuthorName = ({link, name}) => {
  return (
    <Link to={link}>{name}</Link>
  )
}

// 文字共用樣式
const StyledText = styled.p `
  color: #9C9C9C;
  margin: 0;
`

// 時間則文字
const StyledDateText = styled(StyledText) `
  &:hover{
    text-decoration: underline;
  }
`

// 按讚的容器
const StyledLikeContainer = styled.div `
  float: right;
  margin-top: 16px;
`


const Author = ({cover}) => {

  const [likeCount, setLikeCount] = useState(0)

  return (
    <StyledAuthorContainer>
      <StyledAuthorInfoSection>
        <img src={cover} alt="author cover" />
        <StyledAuthorInfoContainer>
          <AuthorName link='/author' name='huli' />
          <StyledDateText>2017-01-08 09:40:09</StyledDateText>
          <StyledText>5170 瀏覽</StyledText>
        </StyledAuthorInfoContainer>
      </StyledAuthorInfoSection>
      <StyledLikeContainer>
        <LikeTag count={likeCount} setCount={setLikeCount}/>
      </StyledLikeContainer>
    </StyledAuthorContainer>
  )
}

export default Author
