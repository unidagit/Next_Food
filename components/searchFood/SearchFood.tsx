import styles from "./SearchFood.module.css";

interface ISearchProps {
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
}

function SearchFood({ searchText, setSearchText }: ISearchProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <div>
      <input
        value={searchText}
        className={styles.searchInput}
        type="text"
        placeholder={"검색해보세요!"}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchFood;
