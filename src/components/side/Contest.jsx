import { RightCircleFilled } from "@ant-design/icons"
import styled from "styled-components"

const StyledContestContainer = styled.div `
  display: flex;
  flex-direction: column;
  margin: 40px 0 20px;
  border-radius: 12px;

`

const StyledTitleContainer = styled.div `
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: linear-gradient(to left, #03546b 0%, #0594bc 60%, #3ad4ff 100%);
  border-radius: 12px 12px 0 0;

  h2{
    color: #fff;
    padding: 4px 0;
    margin: 0;
  }
`

const StyledContestContentContainer = styled.div `
  background-color: #98e2fe;

  display: flex;
  flex-wrap: wrap;
`

const StyledContestItemContainer = styled.div `
  width: 50%;
  padding: 8px;

`

const StyledContestItem = styled.div `
  background-color: #e1f6ff;
  color: #0e4c63;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;

  strong{
    font-size: 24px;
  }
`

// 項目內容
const ContestItem = ({title, count, unit}) => {
  return (
    <StyledContestItemContainer>
      <StyledContestItem>
        <span>{title}</span>
        <span><strong>{count}</strong> {unit}</span>
      </StyledContestItem>
    </StyledContestItemContainer>
  )
}

const Contest = () => {
  return (
    <StyledContestContainer>
      <StyledTitleContainer>
        <h2>iT 邦幫忙鐵人賽 </h2>
        <RightCircleFilled style={{color: '#fff', fontSize: 20}}/>  
      </StyledTitleContainer>
      <StyledContestContentContainer>
        <ContestItem title='參賽組數' count='1087' unit='組'/>
        <ContestItem title='團體組數' count='52' unit='組'/>
        <ContestItem title='累計文章數' count='20482' unit='篇'/>
        <ContestItem title='完賽人數' count='572' unit='人'/>
      </StyledContestContentContainer>
    </StyledContestContainer>
  )
}

export default Contest
