import estilos from './Avatar.module.css';

export function Avatar({ hasBorder = true, src}){
    return (
        <img 
        className={ hasBorder ? estilos.avatarWithBorder : estilos.avatar} 
        src={src} />
    );
}

// <img src="https://github.com/diego3g.png" />