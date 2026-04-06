import { useState, useEffect } from 'react'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import SearchInput from './components/SearchInput'
import './App.css'

function App() {
  const [selectedGenre, setSelectedGenre] = useState<any>(null);
  const [searchText, setSearchText] = useState('');
  const [theme, setTheme] = useState('dark');

  // This ensures the CSS variables update globally
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="app-container">
      <header className="navbar">
        <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>GamerClub</h1>
        <div style={{ flex: 1, margin: '0 40px' }}>
          <SearchInput onSearch={setSearchText} />
        </div>
        <button className="theme-toggle-btn" onClick={toggleTheme}>
          {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
        </button>
      </header>
      
      <div className="main-layout">
        <aside className="sidebar">
          <GenreList onSelectGenre={setSelectedGenre} />
        </aside>
        
        <main className="game-content">
          <GameGrid selectedGenre={selectedGenre} searchText={searchText} />
        </main>
      </div>
    </div>
  );
}

export default App;