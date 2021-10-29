import styled from "styled-components"
import Author from "./Author"
import Category from "./Category"
import HashTag from "./HashTag"
import author from '../../img/author/author.png'
import { FlagFilled, HeartOutlined, MessageFilled } from '@ant-design/icons'
import { useState } from "react"

const StyledBlogContainer = styled.div `
  background-color: #fff;
  border: 1px solid #E5E5E5;
  
  margin-top: 48px;
  padding: 40px 40px 0 60px;
`

// 文章內容的容器
const StyledBlogContentContainer = styled.div `
  padding-top: 60px;

  h2{
    font-size: 24px;
  }

  section{
    margin-bottom: 24px;
  }
`

// 底部容器
const StyledBottomContainer = styled.div `
  margin-top: 60px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
`

// 底部條的容器
const StyledBottomLeftContainer = styled.div `
  display: flex;
`

// Tag 的容器
const StyledTagContainer = styled.span `
  display: flex;
  align-items: center;
  color: ${props => props.color};
  margin-right: 16px;
  cursor: pointer;
`

// 點擊的 Tag
// props: type [comment/follow/report]
const Tag = ({type}) => {
  // 顏色
  const normalColor = '#8F8F8F'
  const hoverColor = type === 'follow'? '#DE0400': '#009EEA'
  const [color, setColor] = useState(normalColor)
  // 圖標
  const Icon = type === 'comment'? MessageFilled: type === 'follow'? HeartOutlined: FlagFilled
  // 文字
  const text = type === 'comment'? '留言': type === 'follow'? '追蹤': '檢舉'

  return (
    <StyledTagContainer color={color} onMouseOver={()=> setColor(hoverColor)} onMouseOut={()=> setColor(normalColor)}>
      <Icon style={{marginRight: 8, color}} /> {text}
    </StyledTagContainer>
  )
}

const StyledBottomRightContainer = styled.div `

`

const Blog = ({title}) => {
  return (
    <StyledBlogContainer>
      <Category />
      <h1>{title}</h1>
      <HashTag link='/2017' text='2017鐵人賽'/>
      <HashTag link='/aws' text='aws'/>
      <HashTag link='/vps' text='vps'/>
      <Author cover={author} />
      {/* 正文 */}
      <StyledBlogContentContainer>
        <h2>{title}</h2>
        <section>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores sapiente aut est perspiciatis! Perspiciatis quaerat eius odit facilis, fuga fugit.
        </section>
        <section>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores sapiente aut est perspiciatis! Perspiciatis quaerat eius odit facilis, fuga fugit.
        </section>
        <section>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores sapiente aut est perspiciatis! Perspiciatis quaerat eius odit facilis, fuga fugit.
        </section>
        <section>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores sapiente aut est perspiciatis! Perspiciatis quaerat eius odit facilis, fuga fugit.
        </section>
        <section>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores sapiente aut est perspiciatis! Perspiciatis quaerat eius odit facilis, fuga fugit.
        </section>
      </StyledBlogContentContainer>
      {/* 底部 */}
      <StyledBottomContainer>
        <StyledBottomLeftContainer>
          <Tag type='comment' />
          <Tag type='follow' />
        </StyledBottomLeftContainer>
        <StyledBottomRightContainer>
          <Tag type='report' />
        </StyledBottomRightContainer>
      </StyledBottomContainer>
    </StyledBlogContainer>
  )
}

export default Blog
