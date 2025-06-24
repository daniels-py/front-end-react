// src/components/Login.jsx
import React, { useState } from 'react';
import './Login.css'; // Importamos los estilos

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // Función que se ejecuta al enviar el formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:8000/users/api/auth/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || 'Login failed');
      }

      const data = await response.json();

      // Guardamos el token JWT en localStorage
      localStorage.setItem('access', data.access);
      localStorage.setItem('refresh', data.refresh);

      // Redirige o muestra éxito
      alert('Login exitoso');
      // window.location.href = "/dashboard";

    } catch (error) {
      setErrorMsg(error.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="login-form-wrapper">
          <h3>Start your journey</h3>
          <h2>Sign In to InsideBox</h2>

          <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input
              type="email"
              placeholder="example@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label>Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {errorMsg && <p className="error">{errorMsg}</p>}

            <button type="submit">Sign In</button>
          </form>

          <div className="or-divider">or sign in with</div>
          <div className="social-buttons">
            <button className="fb">f</button>
            <button className="google">G</button>
            <button className="apple"></button>
          </div>

          <p className="signin-footer">
            Don't have an account? <a href="#">Sign up</a>
          </p>
        </div>
      </div>

      <div className="login-right">
        {/* Imagen de fondo o fondo decorativo */}
      </div>
    </div>
  );
};

export default Login;
