interface ISearchProps {
  handleSearch: (searchParam: string) => void
}

const Search = ({ handleSearch }: ISearchProps) => {

  return (
    <input
      type="text"
      className="searchbox mr-4"
      onChange={(e) => handleSearch(e.target.value)}
      placeholder="Search"
    />
  );
};

export default Search;
