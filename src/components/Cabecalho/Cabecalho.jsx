import { Link } from "react-router-dom";
import style from './Cabecalho.module.scss';

export default function Cabecalho() {
    return (
    <header className={style.cabecalhoContainer}>
        <h1 className={style.cabecalhoTitulo}>Portifolio</h1>
        <ul className={style.linksList}>
            <li className={style.linksItem}>
                <Link to='/' className={style.link}>About</Link>
            </li>
            <li className={style.linksItem}>
                <Link to='/portfolio' className={style.link}>Portfolio</Link>
            </li>
            <li className={style.linksItem}>
                <Link to='/contact' className={style.link}>Contact</Link>
            </li>
        </ul>
    </header>
    )
}
