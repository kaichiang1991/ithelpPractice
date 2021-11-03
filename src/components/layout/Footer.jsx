import { Link } from "react-router-dom"
import styled from "styled-components"

const StyledAppFooter = styled.footer `
  background-color: #343940;
`

// 內容的容器
const StyledContentContainer = styled.div `
  color: #fff;
  padding: 48px 100px 32px;
  font-size: 16px;
  text-align: center;
`

// 連結的容器
const StyledLinkContainer = styled.span `
  margin-right: 16px;

  a{
    color: #fff;
    font-size: 16px;
  }

  a:hover{
    color: #00A0EA;
  }
`

// 連結的文字元件
const LinkText = ({link, text}) => {
  return (
    <StyledLinkContainer>
      <Link to={link}>{text}</Link>
    </StyledLinkContainer>
  )
}

const Footer = () => {
  return (
    <StyledAppFooter>
      <StyledContentContainer>
        <span>電週文化事業版權所有、轉載必究 | Copyright ©</span>
        <LinkText link='/home' text='iThome'/>
        <LinkText link='/commercial' text='刊登廣告'/>
        <LinkText link='/authService' text='授權服務'/>
        <LinkText link='/mail' text='服務信箱'/>
        <LinkText link='/declaration' text='隱私權聲明與會員使用條款'/>
        <LinkText link='/help' text='iT邦幫忙使用說明'/>
      </StyledContentContainer>
    </StyledAppFooter>
  )
}

export default Footer
