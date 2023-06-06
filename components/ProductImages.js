import styled from "styled-components";
import {useState} from "react";
import Image from "next/image";
const IMage = styled(Image)`
    max-width: 100%;
    max-height: 100%;
  `;
const BigImage = styled(Image)`
  max-width: 100%;
  max-height: 200px;
`;
const ImageButtons = styled.div`
    display: flex;
    gap: 10px;
    flex-grow: 0;
    margin-top: 10px;
  `;
const ImageButton = styled.div`
    border: 2px solid #ccc;
    ${props => props.active ? `
      border-color: #ccc;
    ` : `
      border-color: transparent;
    `}
    height: 60px;
    padding: 5px;
    cursor: pointer;
    border-radius: 5px;
  `;
const BigImageWrapper = styled.div`
  text-align: center;
`;

export default function ProductImages({images}) {
  const [activeImage,setActiveImage] = useState(images?.[0]);
  return (
    <>
      <BigImageWrapper>
        <BigImage width={ 500 } height={ 200 } quality={100} style={{objectFit:"contain"}} src={activeImage} />
      </BigImageWrapper>
      <ImageButtons>
        {images.map(image => (
          <ImageButton
            key={image}
            active={image===activeImage}
            onClick={() => setActiveImage(image)}>
            <IMage width={80} height={ 60 } style={{objectFit:"contain"}} src={image} alt=""/>
          </ImageButton>
        ))}
      </ImageButtons>
    </>
  );
}