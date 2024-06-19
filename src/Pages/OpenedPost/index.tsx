import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Header } from "../../components/Header";
import { Container, MainContainer, ProfileButton, TitleContainer } from "./styles";
import { faArrowUpRightFromSquare, faCalendarDay, faChevronLeft, faComment } from "@fortawesome/free-solid-svg-icons";

import DinamicTyping from '../../assets/DinamicTyping.svg'
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";

export function OpenedPost(){
  return (
    <Container>
      <Header />

      <TitleContainer>
        <header>
          <NavLink to={'/'}>
            <FontAwesomeIcon icon={faChevronLeft} />
            <span>VOLTAR</span>
          </NavLink >

          <a href="https://github.com">
            <span>VER NO GITHUB</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </header>

        <h1>JavaScript data types and data structures</h1>

        <footer>
            <ProfileButton>
              <FontAwesomeIcon icon={faGithub} />
              <span>Miqueiasandr</span>
            </ProfileButton>

            <ProfileButton>
              <FontAwesomeIcon icon={faCalendarDay} />
              <span>Há 1 dia</span>
            </ProfileButton>

            <ProfileButton>
              <FontAwesomeIcon icon={faComment} />
              <span>5 Comentários</span>
            </ProfileButton>
          </footer>
      </TitleContainer>

      <MainContainer>
        <p>
          Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.
          Dynamic typing
          JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:
        </p>

        <img src={DinamicTyping} alt="" />
      </MainContainer>
    </Container>
  )
}