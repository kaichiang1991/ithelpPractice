import styled from "styled-components"
import Container from '../common/Container'
import { Link } from 'react-router-dom'
import { SearchOutlined } from '@ant-design/icons'

import whiteLogo from '../../img/logo/white.png'
import blueLogo from '../../img/logo/blue.png'

const StyledAppHeader = styled.header `
`

// 白色 logo 的容器
const WhiteLogoBar = styled(Container) `
  display: ${props => props.show? 'block': 'none'};
  padding: 40px 0 16px;

  img{
    height: 48px;
  }
`

// 藍色 logo 的容器
const BlueLogoBar = styled.div `
  background-color: #00A0EA;
  display: flex;
  justify-content: space-between;

  padding: 0 60px;
`

// 左側導覽的容器
const StyledNavigatorContainer = styled.div `

`

// 連結文字的容器
const StyledLinkContainer = styled.span `
  display: inline-block;
  padding: 0 12px;
  cursor: pointer;
  transition: all .3s;

  :hover, &.active{
    background-color: #34B3ED;
  }

  a{
    color: #fff;
    font-weight: 500;
    font-size: 16px;
    line-height: 48px;
  }
`

// 連結文字
// props: {link, text}
const LinkText = ({link, text}) => {
  return (
    <StyledLinkContainer>
      <Link to={link} >{text}</Link>
    </StyledLinkContainer>
  )
}

// 導覽列搜尋/會員的容器
const StyledSideContainer = styled.div `
  padding: 0 12px;
`

const Header = () => {
  return (
    <StyledAppHeader>
      <WhiteLogoBar show>
        <img src={whiteLogo} alt="" />
      </WhiteLogoBar>
      <BlueLogoBar>
        <StyledNavigatorContainer>
          <LinkText link='/a' text='技術問答' />
          <LinkText link='/a' text='技術文章' />
          <LinkText link='/a' text='iT徵才' />
          <LinkText link='/a' text='Tag' />
          <LinkText link='/a' text='聊天室' />
          <LinkText link='/a' text='鐵人賽' />
          <LinkText link='/a' text='鐵人館' />
        </StyledNavigatorContainer>
        <StyledSideContainer>
          <SearchOutlined style={{color: '#fff', fontSize: 20, marginRight: 4}}/>
          <LinkText link='/login' text='登入/註冊' />
        </StyledSideContainer>
      </BlueLogoBar> 
    </StyledAppHeader>
  )
}

export default Header