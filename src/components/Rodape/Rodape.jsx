import style from './Rodape.module.scss';

export default function Rodape() {
    const icons = [
        {
            href: "https://www.linkedin.com/in/gabriel-eringer-de-oliveira-0ba641246/",
            src: "/public/linkedin.png",
            alt: "Linkedin",
        },
        {
            href: "https://www.instagram.com/gabs.eringer_/?next=%2F",
            src: "/public/instagram.png",
            alt: "Instagram",
        },
        {
            href: "https://github.com/GEdO23",
            src: "/public/github.png",
            alt: "Github",
        },
    ];
    return (
    <>
        <nav className={style.redesContainer}>
            <ul>
                <p>Links</p>
            </ul>
            <ul className={style.iconList}>
            {icons.map((icon) => (
                <li className={style.iconItem} key={icon}>
                    <a href={icon.href} className={style.iconLink}>
                        <img
                        className={style.icon}
                        src={icon.src}
                        alt={icon.alt}
                        height={40}
                        />
                    </a>
                </li>
            ))}
            </ul>
        </nav>
    </>
    );
}
