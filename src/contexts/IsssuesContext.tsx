import { ReactNode, createContext, useState } from "react";
import { api } from "../lib/axios";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";

interface IssueType {
  issueTitle: string;
  number: number;
  login: string;
  created_at: string;
  comments:string;
  html_url: string;
  body: string;
  total_count: number;
}

interface IssuesProviderType {
  children: ReactNode
}

interface IssuesContextType {
  issues: IssueType[];
  takeIssuesInfo: (query : string) => Promise<void>;
}

export const IssuesContext = createContext({} as IssuesContextType);
export function IssuesProvider({children} : IssuesProviderType){

  const [issues, setIssues] = useState<IssueType[]>([])

  async function takeIssuesInfo(query : string){
    const response = await api.get(`/search/issues?q="${query}"repo:miqueiasandr/github-blog/`)
  
    const issues = response.data.items.map( (issue : any ) => {

      const publishedDateRelativeToNow = formatDistanceToNow(new Date(issue.created_at), {
        locale: ptBR,
        addSuffix: true
      })

      return {
        issueTitle: issue.title,
        number: issue.number,
        login: issue.user.login,
        created_at: publishedDateRelativeToNow,
        comments: issue.comments,
        html_url: issue.html_url,
        body: issue.body,
        total_count: response.data.total_count,
  
      }
    })

    setIssues(issues)
  }

  return (
    <IssuesContext.Provider value={{issues, takeIssuesInfo}}>
      {children}
    </IssuesContext.Provider>
  )
}