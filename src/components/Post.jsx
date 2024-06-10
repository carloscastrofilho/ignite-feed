import { format, formatDistance, formatDistanceToNow } from 'date-fns';
import { Avatar } from './Avatar';
import estilos from './Post.module.css';
import { Comment } from './comment';
import { ptBR } from 'date-fns/locale/pt-BR';
import { useState } from 'react';


export function Post({author, publishedAt, content}){
    const [ comments, setComments] = useState(['post muito legal']);
    const [newComentario, setNewComentario] = useState('');
    const publishedDateFormatted = format(publishedAt,"d 'de' LLLL 'ás' HH:mm'h'",{
        locale: ptBR,
    })
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt,{
        locale: ptBR,
        addSuffix: true,
    });

    function handleNewComentarioChange(){
        setNewComentario(event.target.value);
        event.target.setCustomValidaty('')
        
    }

    function handleCreateNewComment() {
        event.preventDefault();
        //
        const newComment = event.target.comment.value ;
        setComments([...comments, newComentario]);
        //comments.push(3);
        //event.target.comment.value = '';
        setNewComentario('');
        
    }

    function deleteCommnet(commentToDeleted){
        const commnetsWitouDeletedOne = comments.filter ( comment => {
            return comment != commentToDeleted;
        } )

        setComments(commnetsWitouDeletedOne);
        console.log( comments)

    }

    function handleNewCommentInvalid(){
        event.target.setCustomValidaty('esse campo é obrigatório!')
    }
    const isNewCommentEmpty = newComentario.length == 0 ;

    return(
        <article className={estilos.post}>
            <header>
                <div className={estilos.autor}>                    
                    <Avatar src={author.avatarUrl} />
                    <div className={estilos.autorInfo}>
                        <strong> {author.name}</strong>
                        <span> {author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}> 
                    {publishedDateRelativeToNow}
                </time>
            </header>
            <div className={estilos.content}>
                {content.map( line =>{
                    if (line.type === "paragraph") {
                        return <p key={line.content}>{line.content}</p>;
                    } else if (line.type === "link"){
                        return <p key={line.content}> <a href="#"> {line.content} </a></p>;
                    }
                } )}
            </div>

            <form onSubmit={handleCreateNewComment} className={estilos.commentForm}>
                <strong> Deixe seu  feedback</strong>
                
                <textarea
                    name="comment"
                    placeholder='Deixe um comentário'
                    onChange={handleNewComentarioChange}
                    value = {newComentario}
                    onInvalid={handleNewCommentInvalid}
                    required
                />
                <footer>
                    <button type="submit"
                        disabled={ isNewCommentEmpty }
                    >
                        Publicar
                    </button>
                </footer>

            </form>
            <div className="commentList">
                {comments.map( comment => {
                    return <Comment 
                        key={comment} 
                        content={comment} 
                        onDeleteComment={deleteCommnet}/>
                })}
            </div>

        
        </article>
    );
}