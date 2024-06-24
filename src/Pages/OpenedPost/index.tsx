import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Header } from "../../components/Header";
import { Container, MainContainer, ProfileButton, TitleContainer } from "./styles";
import { faArrowUpRightFromSquare, faCalendarDay, faChevronLeft, faComment } from "@fortawesome/free-solid-svg-icons";
import ReactMarkdown from 'react-markdown'

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { NavLink, useParams } from "react-router-dom";
import { api } from "../../lib/axios";
import { useEffect, useState } from "react";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";

interface issueType {
  issueTitle: string;
  login: string;
  created_at: string;
  comments:string;
  html_url: string;
  body: string;
}

export function OpenedPost(){

  const [issue, setIssue] = useState<issueType>()

  const {issueNumber} = useParams()

  async function getIssueInformations(){
    const response = await api.get(`https://api.github.com/repos/miqueiasandr/github-blog/issues/${issueNumber}`)

      const publishedDateRelativeToNow = formatDistanceToNow(new Date(response.data.created_at), {
      locale: ptBR,
      addSuffix: true
    })


    const issue = {
      html_url: response.data.html_url,
      issueTitle: response.data.title,
      login: response.data.user.login,
      created_at: publishedDateRelativeToNow,
      comments: response.data.comments,
      body: response.data.body,
    }

    console.log(issue.created_at)


    setIssue(issue)
  }

  useEffect(()=>{
    getIssueInformations()
  },[])


  return (
    <Container>
      <Header />

      <TitleContainer>
        <header>
          <NavLink to={'/'}>
            <FontAwesomeIcon icon={faChevronLeft} />
            <span>VOLTAR</span>
          </NavLink >

          <a href={issue?.html_url}>
            <span>VER NO GITHUB</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </header>

        <h1>{issue?.issueTitle}</h1>

        <footer>
            <ProfileButton>
              <FontAwesomeIcon icon={faGithub} />
              <span>{issue?.login}</span>
            </ProfileButton>

            <ProfileButton>
              <FontAwesomeIcon icon={faCalendarDay} />
              <span>{issue?.created_at}</span>
            </ProfileButton>

            <ProfileButton>
              <FontAwesomeIcon icon={faComment} />
              <span>{issue?.comments} Comentários</span>
            </ProfileButton>
          </footer>
      </TitleContainer>

      <MainContainer>
        <p>
          <ReactMarkdown>
            {issue?.body}
          </ReactMarkdown>
        </p>

      </MainContainer>
    </Container>
  )
}