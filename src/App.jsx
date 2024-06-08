import { Post } from "./Post";
import { Header } from "./components/Header";

import  estilos from './App.module.css';
import './global.css';
import { Sidebar } from "./components/Sidebar";

export function App() {
  return (
    <>
    <Header />
    <div className={estilos.wrapper}>
      <Sidebar />
      <main>

    <Post 
      autor="Carlos" 
      conteudo="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem quidem corporis architecto similique sequi! Perspiciatis nisi debitis beatae facere quos, veritatis impedit pariatur natus quasi laudantium vero enim cumque temporibus!"
    />
    <Post 
      autor="Mario Silva" 
      conteudo="um post para teste"
    />
      </main>
    </div>
   
    </>
  )
}

