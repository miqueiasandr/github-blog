import styled from "styled-components";

export const Container = styled.div`
`
export const TitleContainer = styled.div`
  max-width: 54rem;
  padding: 2rem;
  margin: -6rem auto 0;
  background-color: ${props => props.theme["base-profile"]};
  border-radius: 10px;

  header {
    display: flex;
    justify-content: space-between;

    a {
      text-decoration: none;
      background: transparent;
      border: 0;
      color: ${props => props.theme.blue};
      font-size: 0.75rem;
      font-weight: bold;
      line-height: 1.6;
      cursor: pointer;

      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
    }
  }

  h1 {
      font-size: 1.5rem;
      color: ${props => props.theme["base-title"]};
      margin-top: 1.25rem;
    }

  footer {
    display: flex;
    gap: 2rem;

    margin-top: 0.5rem;
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

export const MainContainer = styled.main`
  max-width: 54rem;
  margin: 0 auto;
  padding: 2.5rem 2rem;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  p {
    color: ${props => props.theme["base-text"]};
    line-height: 1.6;
  }
`