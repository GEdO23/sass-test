export default function Home() {
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
      <div className="home-container">
        <div className="titulo-container">
          <h2>Hello, I am</h2>
          <h1>Gabriel Eringer</h1>
          <p>A young hopeless romantic for UI/UX design</p>
        </div>
        <div className="redes-container">
          <h3>Find me on</h3>
          <ul className="icons-list">
            {icons.map((icon) => (
              <li className="icons-item" key={icon}>
                <a href={icon.href}>
                  <img
                    className="icon"
                    src={icon.src}
                    alt={icon.alt}
                    height={40}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
