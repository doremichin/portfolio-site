import styled from 'styled-components'

export default function CoupleImages({ item }) {
  return (
    <ImageBox>
      <Front href={item.url || '#;'}>
        <img src={item.imageUrl[0]} alt="" />
      </Front>
      <Back href={item.url || '#;'}>
        <img src={item.imageUrl[1]} alt="" />
      </Back>
    </ImageBox>
  )
}

const ImageBox = styled.div`
  position: relative;
`;
export const Image = styled.div`
  width: 550px;
  height: 320px;
  background-color: #999;
  margin-right: 30px;
  overflow: hidden;
  border-radius: 4px;
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.2);
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .isTablet &{
    margin-bottom: 30px;
  }
`;
const Front = styled(Image)`
  
`;
const Back = styled(Image)`

`;
