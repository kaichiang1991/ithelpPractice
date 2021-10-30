import { RightCircleFilled } from "@ant-design/icons"
import { Link } from "react-router-dom"
import styled from "styled-components"

const StyledOtherSeriesContainer = styled.div `
  padding-top: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const StyledArticleListContainer = styled.div `
  font-size: 16px;
  margin-bottom: 4px;

  .num{
    font-size: 12px;
    color: #fff;
    background-color: #485056;
    border-radius: 50%;
    height: 22px;
    width: 22px;
    line-height: 22px;
    padding: 2px;
  }
`

const StyledLinkTextContainer = styled.span `
  margin-left: 8px;

  a{
    color: #303233;
  }

  a:hover{
    color: #37c0ff;
  }
`

const LinkText = ({link, text}) => {
  return (
    <StyledLinkTextContainer>
      <Link to={link}>{text}</Link>
    </StyledLinkTextContainer>
  )
}

// 文章列表
const ArticleList = ({num, text}) => {
  return (
    <StyledArticleListContainer>
      <span className='num'>{num}</span>
      <LinkText link={`/${text}`} text={text} />
    </StyledArticleListContainer>
  )
}

// 完整目錄容器
const StyledCategoryContainer = styled.div `
  /* display:  */
  a{
    color: ${props => props.color};
  }

  a:hover{
    color: #37c0ff;
  }
`

const OtherSeries = () => {

  const color = '#00a0e9'

  return (
    <StyledOtherSeriesContainer>
      <ArticleList num='26' text='如果你很懶，那你更應該寫測試：jest' />
      <ArticleList num='27' text='時間停止器：git' />
      <ArticleList num='28' text='俄羅斯不愧是戰鬥民族：nginx' />
      <ArticleList num='29' text='把你的親生兒子公諸於世：VPS' />
      <ArticleList num='30' text='那些來不及說出口的話' />
      <StyledCategoryContainer color={color}>
        <RightCircleFilled style={{color, marginRight: 4}} />
        <Link to='/category'>完整目錄</Link>
      </StyledCategoryContainer>
    </StyledOtherSeriesContainer>
  )
}

export default OtherSeries
