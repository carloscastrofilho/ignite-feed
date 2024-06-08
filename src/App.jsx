import { Post } from "./Post";
import { Header } from "./components/Header";

import './global.css';

export function App() {
  return (
    <>
    <Header />
    <h1> fatec</h1>
    <Post 
      autor="Carlos" 
      conteudo="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem quidem corporis architecto similique sequi! Perspiciatis nisi debitis beatae facere quos, veritatis impedit pariatur natus quasi laudantium vero enim cumque temporibus!"
    />
    <Post 
      autor="Mario Silva" 
      conteudo="um post para teste"
    />
    </>
  )
}

