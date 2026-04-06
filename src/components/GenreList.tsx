interface Props {
  onSelectGenre: (genre: string) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const genres = [
    "Action", "Indie", "Adventure", "RPG", "Strategy", 
    "Shooter", "Casual", "Simulation", "Puzzle", "Arcade", 
    "Platformer", "Racing", "Sports", "Fighting"
  ];

  return (
    <aside style={{ width: '200px', padding: '20px' }}>
      <h2>Genres</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {genres.map((genre) => (
          <li key={genre} style={{ marginBottom: '10px' }}>
            <button 
              onClick={() => onSelectGenre(genre.toLowerCase())}
              style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', fontSize: '18px' }}
            >
              {genre}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default GenreList;
