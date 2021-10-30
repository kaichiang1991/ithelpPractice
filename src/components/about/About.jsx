import styled from "styled-components"
import OtherSeries from "./OtherSeries"
import PageSwitch from "./PageSwitch"
import SeriesSection from "./SeriesSection"

const StyledAboutContainer = styled.div `
  background-color: #E9ECEF;
  border: 1px solid #E5E5E5;

  display: flex;
  flex-direction: column;
  padding: 12px 40px;
`

const About = () => {
  return (
    <StyledAboutContainer>
      <PageSwitch />
      <SeriesSection />
      <OtherSeries />
    </StyledAboutContainer>
  )
}

export default About