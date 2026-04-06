import useGames from "../hooks/useGames";
import styles from "./GameGrid.module.css";

interface Props {
  selectedGenre: string | null;
  searchText: string;
}

const GameGrid = ({ selectedGenre, searchText }: Props) => {
  const { games, error, isLoading } = useGames(selectedGenre, searchText);

  if (error) return <p style={{ color: 'red', textAlign: 'center' }}>Error loading games: {error}</p>;

  return (
    <div className={styles.grid}>
      {isLoading && <p style={{ color: '#888', gridColumn: '1 / -1', textAlign: 'center' }}>Loading the club's inventory...</p>}
      
      {!isLoading && games.map((game) => (
        <div key={game.id} className={styles.card}>
          <img src={game.background_image} alt={game.name} className={styles.image} />
          <div className={styles.info}>
            <h3 className={styles.title}>{game.name}</h3>
            {/* 32x32 Platform Placeholder */}
            <div className={styles.platformBox}>PC</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GameGrid;