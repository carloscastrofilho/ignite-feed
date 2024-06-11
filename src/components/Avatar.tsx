import { ImgHTMLAttributes} from "react";
import estilos from './Avatar.module.css';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    hasBorder?: boolean;
}

export function Avatar( { hasBorder = true, ...props }:AvatarProps) {
    return (
        <img 
        className={ hasBorder ? estilos.avatarWithBorder : estilos.avatar} 
        {...props}
         />
    );
}

// <img src="https://github.com/diego3g.png" />