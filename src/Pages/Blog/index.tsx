import { BlogContainer, BlogList, Content,  ProfileButton,  ProfileContainer, TotalPublication } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Post } from "../../components/Post";
import { Header } from "../../components/Header";
import { useForm } from "react-hook-form";
import * as z from 'zod'
import { useContext, useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { IssuesContext } from "../../contexts/IsssuesContext";
import { NavLink } from "react-router-dom";

const searchFormSchema = z.object({
  query: z.string()
})

type SearchFormData = z.infer<typeof searchFormSchema>

interface ProfileType {
  login: string;
  name: string;
  avatar_url: string;
  html_url: string;
  company: string;
  bio: string;
  followers: number;
}



export function Blog(){

  const {takeIssuesInfo, issues} = useContext(IssuesContext)

  const [profile, setProfile] = useState<ProfileType>({} as ProfileType)
  const [query, setQuery] = useState("")

  const {register, handleSubmit, watch} = useForm<SearchFormData>({
    defaultValues: {
      query: ""
    }
  })

  async function takeProfileInfos(){
    const response = await api.get('/users/miqueiasandr')

    const profile = {
      login: response.data.login,
      name: response.data.name,
      avatar_url: response.data.avatar_url,
      html_url: response.data.html_url,
      company: response.data.company,
      bio: response.data.bio,
      followers: response.data.followers,
    }

    setProfile(profile)
  }

  useEffect(() => {
    takeProfileInfos()
    takeIssuesInfo(query)
  }, [])



  async function searchContent() {
    const query = watch('query')
    setQuery(query)
  }

  return (
    <BlogContainer>
      <Header />

      <ProfileContainer>    
        <img src={profile?.avatar_url} alt="" />
       
        <Content>
          <header>
            <h1>{profile?.name}</h1>
            <a target="_blank" href={profile?.html_url}>
              GITHUB 
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </header>

          <p>{profile?.bio}</p>

          <footer>
            <ProfileButton>
              <FontAwesomeIcon icon={faGithub} />
              <span>{profile?.login}</span>
            </ProfileButton>

            <ProfileButton>
              <FontAwesomeIcon icon={faBuilding} />
              <span>{profile?.company}</span>
            </ProfileButton>

            <ProfileButton>
              <FontAwesomeIcon icon={faUserGroup} />
              <span>{profile?.followers} Seguidores</span>
            </ProfileButton>
          </footer>
        </Content>
      </ProfileContainer>

      <TotalPublication>
        <p>Publicações</p>
        <span>{issues.length} publicações</span>
      </TotalPublication>

      <form onChange={searchContent} onSubmit={handleSubmit(() => takeIssuesInfo(query))}>
        <input type="text" placeholder="Buscar conteúdo" value={query}  {...register('query')}/>
      </form>

      <BlogList>
        {issues.map( issue => {
          return (
            <NavLink to={`/post/${issue.number}`}>
              <Post
              key={issue.number}
              issueTitle={issue.issueTitle}
              created_at={issue.created_at}
              body={issue.body}
            />
            </NavLink>
            
          )
        })}
      </BlogList>

    </BlogContainer>
  )
}