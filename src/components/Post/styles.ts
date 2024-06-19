import styled from "styled-components";

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 2rem;
  height: 16.25rem;
  background-color: ${props => props.theme["base-post"]};
  border-radius: 10px;

  header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    h1 {
      font-size: 1.25rem;
      line-height: 1.6;
      color: ${props => props.theme["base-title"]};
      max-width: 70%;
    }

    span {
      display: flex;
      font-size: 0.875rem;
      line-height: 1.6;
      color: ${props => props.theme["base-span"]}; 
    }
  }

  p {
    margin-top: 1.5rem;
    line-height: 1.6;
    color: ${props => props.theme["base-text"]};
    overflow: hidden;
  }
`