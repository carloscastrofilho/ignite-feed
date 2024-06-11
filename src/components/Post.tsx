import { format, formatDistanceToNow } from 'date-fns';
import { Avatar } from './Avatar';
import estilos from './Post.module.css';
import { Comment } from './comment';
import { ptBR } from 'date-fns/locale/pt-BR';
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react';

interface Author {
    name: string;
    role: string;
    avatarUrl: string;
}

interface Content {
    type: 'paragraph' | 'link';
    content: string ;
}

export interface PostType{
    id: number;
    author: Author;
    publishedAt: Date;
    content: Content[];    
}

interface PostProps {
    post: PostType;
}

export function Post({ post }:PostProps){

    const [ comments, setComments] = useState(['post muito legal']);
    const [newComentario, setNewComentario] = useState('');

    const publishedDateFormatted = format(post.publishedAt,"d 'de' LLLL 'ás' HH:mm'h'",{
        locale: ptBR,
    })

    const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt,{
        locale: ptBR,
        addSuffix: true,
    });

    function handleNewComentarioChange( event: ChangeEvent<HTMLTextAreaElement>)  {
        setNewComentario(event.target.value);
        event.target.setCustomValidity('')        
    }

    function handleCreateNewComment(event:FormEvent) {
        event.preventDefault();
        //const newComentario = event.target.value ;
        setComments([...comments, newComentario]);
        //comments.push(3);
        //event.target.comment.value = '';
        setNewComentario('');
        
    }

    function deleteCommnet(commentToDeleted:string){
        const commnetsWitouDeletedOne = comments.filter ( comment => {
            return comment != commentToDeleted;
        } )

        setComments(commnetsWitouDeletedOne);

    }

    function handleNewCommentInvalid(event:InvalidEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('esse campo é obrigatório!')
    }
    const isNewCommentEmpty = newComentario.length == 0 ;

    return(
        <article className={estilos.post}>
            <header>
                <div className={estilos.autor}>                    
                    <Avatar src={post.author.avatarUrl} />
                    <div className={estilos.autorInfo}>
                        <strong> {post.author.name}</strong>
                        <span> {post.author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={post.publishedAt.toISOString()}> 
                    {publishedDateRelativeToNow}
                </time>
            </header>
            <div className={estilos.content}>
                {post.content.map( line =>{
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