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
import Block from './components/side/Block'

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
            <Block title='熱門問題' list={[
              '可以幫我解讀一下這些code嗎？',
              'Python 列出所有1～1000中不被2也不被3整除的所有數字，即不是2的倍數也不是3的倍數',
              '可以幫我解讀一下這些code嗎',
              'html 本機圖片無法顯示'
            ]}/>
            <Block title='站方公告' list={['2021 iThome 鐵人賽精彩文章超過2萬篇，預計12月揭曉本屆獲勝鐵人']} />
            <Block title='熱門回答' list={[
              'html 本機圖片無法顯示',
              '請問能安裝 SQL Server 2016 Enterprise先商用，等微軟通知後在付款?',
              '請問VMware 排程 備份有麼經驗',
              'c# asp.mvc 透過foreach在表格中重複放選單取值的問題'
            ]} />
            <Block title='熱門文章' list={[
              '如果你把上一個五年過爛了，就不要對不起下一個五年',
              '盤點清查與檢測掃描 - 安全性檢測之弱點掃描',
              'JavaScript 從 100% 繼續，再多程式語言也不是問題！',
              'JS 44 - 輸入網址就能使用的 RSS 閱讀器'
            ]} />
          </StyledSideSection>
        </StyledContentContainer>
      </StyledMainContainer>
    </DefaultLayout>
  )
}

export default App
