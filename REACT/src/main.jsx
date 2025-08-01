import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc', {
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
  },
})
  .then(res => res.json())
  .then(data => console.log("Raw test success:", data))
  .catch(err => console.error("Raw test error:", err));
