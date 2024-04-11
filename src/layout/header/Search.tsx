import { styled } from 'styled-components';

interface ISearchProps {
  handleSearch: (searchParam: string) => void
}

const Search = ({ handleSearch }: ISearchProps) => {

  return (
    <SearchInput
      type="text"
      className="searchbox"
      onChange={(e) => handleSearch(e.target.value)}
      placeholder="Search"
    />
  );
};

export default Search;


const SearchInput = styled.input({
  width: "100%",
  border: "1px solid #c2c2c2",
  borderRadius: "5px",
  padding: "5px",
  paddingLeft: "10px",
  color: "#172b4d",
  ":focus": {
    outline: "none"
  }
})
