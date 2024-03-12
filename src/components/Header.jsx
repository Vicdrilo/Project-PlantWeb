import "../styles/Header.css";

export function Header() {
  return (
    <>
      <div className="title-header">
        <h1 className="satisfy-regular text-white">Planting a pine</h1>
      </div>
      <div className="navbar bg-white">
        <ul className="ul">
          <li className="nav-btn hover:bg-fondo">Fitoteca</li>
          <li className="nav-btn hover:bg-fondo">Materiales</li>
          <li className="nav-btn hover:bg-fondo">Consejos</li>
          <li className="nav-btn hover:bg-fondo">Foro</li>
        </ul>
      </div>
    </>
  );
}
