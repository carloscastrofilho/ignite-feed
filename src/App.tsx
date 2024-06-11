import { Post , PostType } from "./components/Post";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";

import estilos from './App.module.css';
import './global.css';''

// autor : { avata_url:"", name:"", role:""}
// publishedAt: Date
// Content: String

const posts:PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name:"Diego Fernandes",
      role: 'Educardor'
    },
    content: [
      {type:'paragraph',content:'Fala galeraa 👋'},
      {type:'paragraph',content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type:'link',content:'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2024-06-09 18:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name:"Mayke Brito",
      role: 'Educardor'
    },
    content: [
      {type:'paragraph',content:'Fala galeraa 👋'},
      {type:'paragraph',content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type:'link',content:'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2024-06-09 17:00:00'),
  },

  {
    id: 3,
    author: {
      avatarUrl: 'https://github.com/carloscastrofilho.png',
      name:"Carlos Filho",
      role: 'Fatec Educador'
    },
    content: [
      {type:'paragraph',content:'Fala galeraas 👋'},
      {type:'paragraph',content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type:'link',content:'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2024-06-09 16:00:00'),
  },
]

export function App() {
  return (
    <>
      <Header />
      <div className={estilos.wrapper}>
        <Sidebar />
        <main>
          { posts.map( post => {
            return (
              <Post 
                 key={post.id}
                 post={post}
            />)
          })}

        </main>
      </div>

    </>
  )
}

