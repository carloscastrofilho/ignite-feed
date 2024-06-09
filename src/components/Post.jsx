import { format, formatDistance, formatDistanceToNow } from 'date-fns';
import { Avatar } from './Avatar';
import estilos from './Post.module.css';
import { Comment } from './comment';
import { ptBR } from 'date-fns/locale/pt-BR';

export function Post({author, publishedAt, content}){
    const publishedDateFormatted = format(publishedAt,"d 'de' LLLL 'ás' HH:mm'h'",{
        locale: ptBR,
    })
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt,{
        locale: ptBR,
        addSuffix: true,
    });
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
                        return <p>{line.content}</p>;
                    } else if (line.type === "link"){
                        return <p> <a href="#"> {line.content} </a></p>;
                    }
                } )}
            </div>

            <form className={estilos.commentForm}>
                <strong> Deixe seu  feedback</strong>
                
                <textarea 
                    placeholder='Deixe um comentário'
                />
                <footer>
                    <button type="submit">Publicar</button>
                </footer>

            </form>
            <div className="commentList">
                <Comment />
                <Comment />
                <Comment />
                <Comment />
            </div>

        
        </article>
    );
}