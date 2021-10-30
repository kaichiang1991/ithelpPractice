import { FacebookOutlined, GooglePlusOutlined, TwitterOutlined } from "@ant-design/icons"
import styled from "styled-components"

const StyledSharedContainer = styled.div `
  display: flex;
  flex-direction: column;
  width: 32px;

  position: absolute;
  top: 88px;
  left: -40px;
`

// Icon 的容器
// props: {color, hoverColor}
const StyledShareBlockContainer = styled.div `
  background-color: ${props => props.color};
  padding: 4px;

  &:hover{
    background-color: ${props => props.hoverColor};
  }
`

const Share = () => {
  const style = {color: '#fff', fontSize: 24}
  return (
    <StyledSharedContainer>
      <StyledShareBlockContainer color='#4da7de' hoverColor='#61bbf2'><TwitterOutlined style={style}/></StyledShareBlockContainer>
      <StyledShareBlockContainer color='#3e5b98' hoverColor='#526fac'><FacebookOutlined style={style}/></StyledShareBlockContainer>
      <StyledShareBlockContainer color='#d93e2d' hoverColor='#ed5241'><GooglePlusOutlined style={style}/></StyledShareBlockContainer>
    </StyledSharedContainer>
  )
}

export default Share
