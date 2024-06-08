import estilos from './Header.module.css';

import iginiteLogo from "../assets/ignite-logo.svg";

export function Header(){
    return (
        <header className={estilos.header}>
            <img src={iginiteLogo} alt="Logotipo do projeto"/>
            <strong > Ignite Feed</strong>
        </header>
    )
}