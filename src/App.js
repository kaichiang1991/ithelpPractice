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
          </StyledSideSection>
        </StyledContentContainer>
      </StyledMainContainer>
    </DefaultLayout>
  )
}

export default App
