// src/components/NotFound.jsx
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Sparkles, Home, Palette, Heart } from "lucide-react";
import "./NotFound.css";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="notfound-container">
      <div className="content">
        <div className="title">
          <h1 className="glow-text">404</h1>
          <div className="blur-text">404</div>
        </div>

        <div className="icons">
          <Sparkles className="icon icon1" />
          <Palette className="icon icon2" />
          <Heart className="icon icon3" />
        </div>

        <h2 className="subtitle">¡Oops! Esta página se ha desvanecido</h2>
        <p className="text">Como el maquillaje al final del día...</p>
        <p className="description">
          La página que buscas no existe, pero no te preocupes. Tenemos miles de productos de belleza esperándote en nuestra tienda.
        </p>

        <div className="buttons">
          <Link to="/">
            <button className="btn primary">
              <Home className="btn-icon" /> Volver al Inicio
            </button>
          </Link>
          <button className="btn outline">
            <Palette className="btn-icon" /> Ver Catálogo
          </button>
        </div>

        <div className="quote">
          "La belleza comienza en el momento en que decides ser tú misma"
        </div>
      </div>

      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default NotFound;