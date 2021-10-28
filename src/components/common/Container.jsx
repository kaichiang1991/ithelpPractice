import styled from "styled-components";

// 左右置中的容器 預設 90% 寬度
// props: {width}
const Container = styled.div `
  margin: 0 auto;
  width: ${props => props.width || '90%'};
`

export default Container