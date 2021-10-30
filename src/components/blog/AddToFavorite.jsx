import { CaretUpFilled, StarOutlined } from "@ant-design/icons"
import styled from "styled-components"

const StyledFavoriteContainer = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20px;
  font-size: 20px;
  position: absolute;
  left: 20px;
  top: 36px;

  div{
    margin-bottom: 12px;
  }
`

const AddToFavorite = () => {
  return (
    <StyledFavoriteContainer>
      <CaretUpFilled />
      <div className="num">1</div>
      <StarOutlined />
    </StyledFavoriteContainer>
  )
}

export default AddToFavorite