import styled from "styled-components";

import Cover from '../../assets/Cover.svg'


export const HeaderContainer = styled.div`

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

background-image: url(${Cover});
background-repeat: no-repeat;
background-size: cover;
height: 296px;

img {
  margin-top: -5rem;
  cursor: pointer;
}

`