import { Route, Routes } from "react-router";
import { Blog } from "./Pages/Blog";
import { OpenedPost } from "./Pages/OpenedPost";

export function Router(){
  return (
   <Routes>
    <Route path="/" Component={Blog}/>
    <Route path="/post/:issueNumber" Component={OpenedPost}/>
   </Routes>
  )
}