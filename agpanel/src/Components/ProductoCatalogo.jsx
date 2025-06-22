import React, { useEffect, useState } from "react";
import ProductoCard from "./ProductoCard";
import Paginador from "./Paginador";
import "./Catalogo.css"


const ProductoCatalogo = () => {
  const [productos, setProductos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [marcas, setMarcas] = useState([]);
  const [presentaciones, setPresentaciones] = useState([]);
  const [filtros, setFiltros] = useState({ categoria: "", marca: "", presentacion: "", buscar: "" });

  const [pagina, setPagina] = useState(1);
  const productosPorPagina = 12;

  useEffect(() => {
    fetch("http://127.0.0.1:8000/products/productos/")
      .then(res => res.json())
      .then(data => setProductos(data));
    fetch("http://localhost:8000/core/categoria/").then(res => res.json()).then(setCategorias);
    fetch("http://127.0.0.1:8000/core/marca/").then(res => res.json()).then(setMarcas);
    fetch("http://localhost:8000/core/presentacion/").then(res => res.json()).then(setPresentaciones);
  }, []);

  const handleFiltro = (e) => {
    setFiltros({ ...filtros, [e.target.name]: e.target.value });
    setPagina(1);
  };

  const productosFiltrados = productos.filter(p =>
    (!filtros.categoria || p.categoria === parseInt(filtros.categoria)) &&
    (!filtros.marca || p.marca === parseInt(filtros.marca)) &&
    (!filtros.presentacion || p.presentacion === parseInt(filtros.presentacion)) &&
    (!filtros.buscar || p.nombre.toLowerCase().includes(filtros.buscar.toLowerCase()))
  );

  const inicio = (pagina - 1) * productosPorPagina;
  const paginados = productosFiltrados.slice(inicio, inicio + productosPorPagina);

  return (
    <div className="catalogo">
      <h2>Catálogo de Productos</h2>
      <div className="filtros">
        <input name="buscar" placeholder="Buscar..." onChange={handleFiltro} />
        <select name="categoria" onChange={handleFiltro}>
          <option value="">Categoría</option>
          {categorias.map(c => <option key={c.id} value={c.id}>{c.nombre}</option>)}
        </select>
        <select name="marca" onChange={handleFiltro}>
          <option value="">Marca</option>
          {marcas.map(m => <option key={m.id} value={m.id}>{m.nombre}</option>)}
        </select>
        <select name="presentacion" onChange={handleFiltro}>
          <option value="">Presentación</option>
          {presentaciones.map(p => <option key={p.id} value={p.id}>{p.nombre}</option>)}
        </select>
      </div>

      <div className="grid">
        {paginados.map(producto => (
          <ProductoCard key={producto.id} producto={producto} />
        ))}
      </div>

      <Paginador total={productosFiltrados.length} porPagina={productosPorPagina} pagina={pagina} setPagina={setPagina} />
    </div>
  );
};

export default ProductoCatalogo;
