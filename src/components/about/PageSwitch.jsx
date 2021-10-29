import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons"
import { Link } from "react-router-dom"
import styled from "styled-components"

const StyledPageSwitch = styled.div `
  display: flex;
`

const StyledPageSelectContainer = styled.div `
  display: flex;
  align-items: top;

  width: 50%;
  text-align: ${props => props.type === 'left'? 'left': 'right'};

  &:last-child{
    border-left: 1px solid #A3ACB3;
    flex-direction: row-reverse;
  }
`

const StyledContentContainer = styled.div `
  display: flex;
  flex-direction: column;

  /* 上下一篇 */
  span{
    color: #818A92;
  }
`

const StyledArticleContainer = styled.span `
  a{
    color: #23333D;
  }

  a:hover{
    color: #00A0EA;
  }
`

// 連結的文字
const LinkText = ({link, text}) => {
  return (
    <StyledArticleContainer>
      <Link to={link}>{text}</Link>
    </StyledArticleContainer>
  )
}

// 單頁連結的元件
const SinglePage = ({type, link, text}) => {
  // 使用箭頭
  const marginType = type === 'left'? 'marginRight': 'marginLeft'
  const style = { fontSize: 32, [marginType]: 8, color: '#818A92' }
  const Arrow = type === 'left'? LeftCircleOutlined: RightCircleOutlined
  
  // 文字
  const tagText = type === 'left'? '上一篇': '下一篇'

  return (
    <StyledPageSelectContainer type={type}>
      <Arrow style={style} />
      <StyledContentContainer>
        <span>{tagText}</span>
        <LinkText link={link} text={text} />
      </StyledContentContainer>
    </StyledPageSelectContainer>
  )
}

// 切換頁面的元件
const PageSwitch = () => {
  return (
    <StyledPageSwitch>
      <SinglePage type='left' link='/pre' text='俄羅斯不愧是戰鬥民族：nginx' />
      <SinglePage type='right' link='/post' text='那些來不及說出口的話' />
    </StyledPageSwitch>
  )
}

export default PageSwitch
