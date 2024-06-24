import { PostContainer } from "./styles";
import ReactMarkdown from 'react-markdown'

interface PostProps {
  issueTitle?: string;
  created_at?: string;
  body?: string;
  number ?: number;
  login?: string;
  comments?: string;
  html_url?: string;
}

export function Post({ issueTitle, created_at, body } : PostProps){

  return (
    <PostContainer>
      <header>
        <h1>{issueTitle}</h1>
        <span>{created_at}</span>
      </header>

      <p>
        <ReactMarkdown>{body}</ReactMarkdown>
      </p>
    </PostContainer>
  )
}