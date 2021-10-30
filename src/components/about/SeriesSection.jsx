import { RedEnvelopeOutlined, WifiOutlined } from "@ant-design/icons"
import { Link } from "react-router-dom"
import styled from "styled-components"

const StyledSeriesSection = styled.div `
  display: flex;
  flex-direction: column;
  padding: 8px 0;
  border-bottom: 1px solid #A3ACB3;
`

const StyledSeriesTagContainer = styled.div `
  display: inline-block;
  background-color: #000;
  border-radius: 4px;
  font-weight: 500;
  color: #fff;
  width: 60px;
  padding: 0 8px;
  line-height: 24px;
`

// 系列標籤
const SeriesTag = ({text}) => {
  return (
    <StyledSeriesTagContainer>
      {text}
    </StyledSeriesTagContainer>
  )
}

const StyledTitleContainer = styled.span `
  font-family: "Lato", "PingFang TC", "Helvetica Neue", Helvetica, "微軟正黑體", "新細明體", Arial, sans-serif;

  a{
    color: #23333D;
    font-weight: bold;
  }

  a:hover{
    color: #37c0ff;
  }
`

// 連結的文字
const LinkText = ({link, text}) => {
  return (
    <StyledTitleContainer>
      <Link to={link}>{text}</Link>
    </StyledTitleContainer>
  )
}

const StyledSeriesTitleContainer = styled.div `
  color: #212529;
  font-size: 20px;
`

// 系列標題
const SeriesTitle = ({title, count}) => {
  return (
    <StyledSeriesTitleContainer>
      <LinkText link='/series' text={title} /> 共 {count} 篇
    </StyledSeriesTitleContainer>
  )
}

// 目錄容器
const StyledCategoryContainer = styled.div `
  display: flex;
  justify-content: space-between;
`

const StyledInfoContainer = styled.div `
`

const StyledArticleTagContainer = styled.span `
  color: ${props => props.color};
  border: ${props => `${props.color} 1px solid`};
  border-radius: 12px;
  padding: 2px 4px;
  margin-right: 8px;
`

// 系列標籤
// props: type [rss, subscirbe]
const ArticleTag = ({type, text}) => {
  const Icon = type === 'rss'? WifiOutlined: RedEnvelopeOutlined
  const color = type === 'rss'? '#F34800': '#F17600'
  const style = {color}
  return (
    <StyledArticleTagContainer color={color}>
      <Icon style={style} /> {text}
    </StyledArticleTagContainer>
  )
}

const StyledText = styled.span `
  color: #868e96;
`

const SeriesSection = () => {
  return (
    <StyledSeriesSection>
      <SeriesTag text='系列文' />
      <SeriesTitle title='Half-Stack Developer 養成計畫' count='10' />
      <StyledCategoryContainer>
        <strong>目錄</strong>
        <StyledInfoContainer>
          <ArticleTag type='rss' text='RSS系列文' />
          <ArticleTag type='subscribe' text='訂閱系列文' />
          <StyledText>255 人訂閱</StyledText>
        </StyledInfoContainer>
      </StyledCategoryContainer>
    </StyledSeriesSection>
  )
}

export default SeriesSection
