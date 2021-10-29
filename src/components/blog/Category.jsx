import styled from "styled-components"

const StyledTagContainer = styled.span `
  background-color: #4989DC;
  color: #fff;
  border: #0075D9 solid 1px;
  border-radius: 12px;

  padding: 2px 8px;
  margin-right: 4px;
`

// 系列 tag
const Tag = ({text}) => {
  return (
    <StyledTagContainer>
      {text}
    </StyledTagContainer>
  )
}

const StyledSeriesTitle = styled.span `
  color: #8A979C;

  span{
    color: #000;
  }
`

// 系列 title
const SeriesTitle = ({series, num}) => {
  return (
    <StyledSeriesTitle>
      <span>{series}</span>系列  第<span>{num}</span>篇
    </StyledSeriesTitle>
  )
}

const StyledCategoryContainer = styled.h4 `
  
`

const Category = () => {
  return (
    <StyledCategoryContainer>
      <Tag text='</> Modern Web'/>
      <SeriesTitle series='Half-Stack Developer 養成計畫' num='15'/>
    </StyledCategoryContainer>
  )
}

export default Category
