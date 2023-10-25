import { Link } from "react-router-dom";

export default function Cabecalho() {
  return (
    <header className="cabecalho-container">
        <h1 className="cabecalho-titulo">Portifolio</h1>
        <ul className="links-list">
            <li className="links-item">
                <Link to='/' className="link">About</Link>
            </li>
            <li className="links-item">
                <Link to='/portfolio' className="link">Portfolio</Link>
            </li>
            <li className="links-item">
                <Link to='/contact' className="link">Contact</Link>
            </li>
        </ul>
    </header>
  )
}
