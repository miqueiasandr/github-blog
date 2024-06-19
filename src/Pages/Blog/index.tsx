import { BlogContainer, BlogList, Content,  ProfileButton,  ProfileContainer, TotalPublication } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Post } from "../../components/Post";
import { Header } from "../../components/Header";
import { useForm } from "react-hook-form";
import { useState } from "react";

interface FormInputs {
  query: string;
}

export function Blog(){

  const {register, handleSubmit} = useForm<FormInputs>()

  const [query, setQuery] = useState<FormInputs>()

  return (
    <BlogContainer>
      <Header />

      <ProfileContainer>    
        <img src="https://github.com/miqueiasandr.png" alt="" />
       
        <Content>
          <header>
            <h1>Miqueias Andrade</h1>
            <button>
              GITHUB 
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </button>
          </header>

          <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.
          </p>

          <footer>
            <ProfileButton>
              <FontAwesomeIcon icon={faGithub} />
              <span>Miqueiasandr</span>
            </ProfileButton>

            <ProfileButton>
              <FontAwesomeIcon icon={faBuilding} />
              <span>Rocketseat</span>
            </ProfileButton>

            <ProfileButton>
              <FontAwesomeIcon icon={faUserGroup} />
              <span>0 Seguidores</span>
            </ProfileButton>
          </footer>
        </Content>
      </ProfileContainer>

      <TotalPublication>
        <p>Publicações</p>
        <span>6 publicações</span>
      </TotalPublication>

      <form>
        <input type="text" placeholder="Buscar conteúdo" {...register('query')}/>
      </form>

      <BlogList>
        <Post />
        <Post />
        <Post />
        <Post />
      </BlogList>

    </BlogContainer>
  )
}