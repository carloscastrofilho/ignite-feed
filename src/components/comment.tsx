import { ThumbsUp, Trash } from '@phosphor-icons/react';
import estilos from './comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';

interface CommentProps{
    content: string;
    onDeleteComment: (comment:string) => void;
}

export function Comment({content, onDeleteComment}:CommentProps){
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment(){
        onDeleteComment(content);
    }
    function handleLikeComment(){
        setLikeCount((state) => {
            return state + 3;
        });
    }
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
                        <button onClick={handleDeleteComment} title="Deletear comentário">
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    {/* <button onClick={ ()=> setLikeCount(likeCount+1) }> */}
                    <button onClick={ handleLikeComment }>
                       <ThumbsUp size={20} />
                       Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>

           </div>
       </div>
    );
}