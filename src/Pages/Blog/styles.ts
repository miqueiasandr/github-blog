import styled from "styled-components";

export const BlogContainer = styled.div`
  margin-bottom: 10rem;
  
 
  form {
    display: flex;
    width: 54rem;
    margin: 0.75rem auto 0;
    

    input {
      display: flex;
      flex: 1;

      padding: 0.75rem 1rem;
      border-radius: 6px;
      color: ${props => props.theme["base-text"]};
      background-color: ${props => props.theme["base-input"]};
      outline: 0;
      border: 1px solid ${props => props.theme["base-border"]};

      &::placeholder {
        color: ${props => props.theme["base-label"]};
      }

      &:focus {
        border: 1px solid ${props => props.theme.blue};
      }
    }
  }
`

export const ProfileContainer = styled.div`
  display: flex;
  gap: 2rem;

  margin: -6rem auto 0;
  padding: 2.5rem 2rem;
  border-radius: 10px;
  background-color: ${props => props.theme["base-profile"]};
  width: 54rem;

  
  img {
    height: 148px;
    width: 148px;
    border-radius: 8px;
  }
`

export const Content = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;

width: 100%;

  header {
    display: flex;
    justify-content: space-between;


    h1 {
      font-size: 1.5rem;
      line-height: 1.3;
      color: ${props => props.theme["base-title"]}
    }

    a {
      background-color: transparent;
      border: 0;

      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;

      text-decoration: none;
      color: ${props => props.theme.blue};
      font-size: 0.75rem;
      line-height: 1.6;
      font-weight: bold;
      cursor: pointer;

    }
  }

  p {
      color: ${props => props.theme["base-text"]};
      line-height: 1.6;
    }

  footer {
    display: flex;
    gap: 1.5rem
  }
`
export const ProfileButton = styled.button`
  background: transparent;
  color: ${props => props.theme["base-subtitle"]};
  border: 0;
  line-height: 1.6;
  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: ${props => props.theme["base-label"]};
  }
`
export const TotalPublication = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 54rem;
  margin: 4.5rem auto 0;
  
  p {
    color: ${props => props.theme["base-subtitle"]};
    font-size: 1.125rem;
    font-weight: bold;
    line-height: 1.6;
  }

  span {
    font-size: 0.875rem;
    line-height: 1.6;
    color: ${props => props.theme["base-span"]};

  }
`

export const BlogList = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  margin: 3rem auto 0;
  max-width: 54rem;

  a {
    text-decoration: none;
  }

`

