import { RightCircleFilled } from "@ant-design/icons"
import { Link } from "react-router-dom"
import styled from "styled-components"

const StyledArticleContainer = styled.div `
  margin-bottom: 40px;
`

const StyledArticleTitle = styled.div `
  background: linear-gradient(to left, #03546b 0%, #0594bc 60%, #3ad4ff 100%);
  border-radius: 8px 8px 0 0;
  padding: 12px 0 2px 12px;

  h3{
    color: #fff;
    margin: 0;
  }
`

const StyledArticleContentContainer = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: #fff;

`

const StyledArticleUl = styled.ul `
  margin: 8px 0;
  padding-left: 32px;
  padding-right: 12px;

  li{
    color: #303233;
  }

  li::marker{
    color: #ddd;
  }
`

const StyledMoreItemContainer = styled.div `
  text-align: right;
  margin-right: 12px;
  margin-bottom: 8px;

  a{
    color: #654937;
  }
`

// 更多選項
// props: link, text
const MoreItem = ({link, text}) => {
  return (
    <StyledMoreItemContainer>
      <Link to={link}>
        <RightCircleFilled /> {text}
      </Link>
    </StyledMoreItemContainer>
  )
}

// 文章列表
// props: title, list, gotoLink, goto
const Article = ({title, list, gotoLink, goto}) => {
  return (
    <StyledArticleContainer>
      <StyledArticleTitle>
        <h3>{title}</h3>
      </StyledArticleTitle>
      <StyledArticleContentContainer>
        <StyledArticleUl>
          {list.map(_list => <li>{_list}</li>)}
        </StyledArticleUl>
        <MoreItem link={gotoLink} text={goto} />
      </StyledArticleContentContainer>
    </StyledArticleContainer>
  )
}

export default Article
