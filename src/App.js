import 'antd/dist/antd.css'
import styled from 'styled-components'
import './App.css'
import Container from './components/common/Container'
import DefaultLayout from './components/layout/DefaultLayout'
import Share from './components/share/Share'
import Blog from './components/blog/Blog'
import { useState } from 'react'
import About from './components/about/About'
import Comment from './components/comment/Comment'
import Contest from './components/side/Contest'
import Article from './components/side/Article'

const StyledMainContainer = styled.div `
  background-color: #F2F2F2;
`

const StyledContentContainer = styled(Container) `
  display: flex;
`

const StyledBlogSection = styled.div `
  width: 66.667%;
  padding-right: 20px;
`

const StyledSideSection = styled.div `
  width: 33.333%;
  padding-left: 20px;
`

const App = () => {

  const [title] = useState('把你的親生兒子公諸於世：VPS')

  return (
    <DefaultLayout>
      <StyledMainContainer>
        <StyledContentContainer>
          <StyledBlogSection>
            {/* 分享文章 */}
            <Share />
            {/* Blog 本文 */}
            <Blog title={title}/>
            {/* 相關系列文 */}
            <About />
            {/* 評論 */}
            <Comment />
          </StyledBlogSection>
          <StyledSideSection>
            <Contest />
            <Article title='鐵人賽最新文章' list={[
              'Leetcode: 226. Invert Binary Tree',
              'Day 44. 之後..',
              '更新網格交易機器人',
              '如果你把上一個五年過爛了，就不要對不起下一個五年'
            ]} gotoLink='/contest' goto='前往鐵人賽' />
            <Article title='技術推廣專區' list={[
              '[Day2] 抓取每日收盤價',
              '利用python取得永豐銀行API的Nonce',
              '[Day1] 基本工具安裝',
              '永豐金融API測試員'
            ]} gotoLink='/tech' goto='前往鐵人賽' />
          </StyledSideSection>
        </StyledContentContainer>
      </StyledMainContainer>
    </DefaultLayout>
  )
}

export default App
