import { useRef } from "react";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form 
      style={{ width: '100%', margin: '0 20px' }} 
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <input 
        ref={ref}
        type="text" 
        placeholder="Search games..." 
        style={{ 
          width: '100%', 
          borderRadius: '20px', 
          padding: '10px 20px', 
          border: '1px solid var(--border)', 
          background: 'var(--bg-sidebar)', 
          color: 'var(--text-main)' 
        }}
      />
    </form>
  );
};

export default SearchInput;
