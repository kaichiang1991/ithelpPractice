import 'antd/dist/antd.css'
import styled from 'styled-components'
import './App.css'
import Container from './components/common/Container'
import DefaultLayout from './components/layout/DefaultLayout'
import Blog from './components/blog/Blog'
import { useState } from 'react'

const StyledMainContainer = styled.div `
  background-color: #F2F2F2;
`

const StyledContentContainer = styled(Container) `
  display: flex;
`

const StyledBlogSection = styled.div `
  width: 66.667%;
`

const StyledSideSection = styled.div `
  width: 33.333%;
`

const App = () => {

  const [title] = useState('把你的親生兒子公諸於世：VPS')

  return (
    <DefaultLayout>
      <StyledMainContainer>
        <StyledContentContainer>
          <StyledBlogSection>
            <Blog title={title}/>
          </StyledBlogSection>
          <StyledSideSection>
            Side
          </StyledSideSection>
        </StyledContentContainer>
      </StyledMainContainer>
    </DefaultLayout>
  )
}

export default App
