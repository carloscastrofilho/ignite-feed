import { ThumbsUp, Trash } from '@phosphor-icons/react';
import estilos from './comment.module.css';
import { Avatar } from './Avatar';

export function Comment(){
    return (
       <div className={estilos.comment}>
        <Avatar hasBorder={false} src="https://github.com/diego3g.png" alt=""/>

           <div className={estilos.commentBox}>
                <div className={estilos.commentContent}>
                    <header>
                        <div className={estilos.autorAndTime}>
                            <strong>Diego Fernandes</strong>
                            <time title="08 de junho às 10:15h" dateTime="2024-06-08 10:15:30">Cerca de 1h atrás</time>
                        </div>
                        <button title="deletar comentario">
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>Muito bom Devon, parabéns</p>
                </div>
                <footer>
                    <button>
                       <ThumbsUp size={20} />
                       Aplaudir <span>20</span>
                    </button>
                </footer>

           </div>
       </div>
    );
}