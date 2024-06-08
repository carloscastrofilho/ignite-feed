import estilos from "./Sidebar.module.css";

export function Sidebar(){
    return (
        <aside className={estilos.sidebar}>
            <img className={estilos.cover} src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?q=60&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="foto" />
            <div className={estilos.profile} >
                <strong> Carlos Filho</strong>
                <span> web developer</span>
            </div>
            <footer>
                <a href="#"> Editar seu Perfil</a>
            </footer>
        </aside>
    );
}