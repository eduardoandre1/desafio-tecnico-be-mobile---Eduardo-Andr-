import { Box } from './style.Searchbar';

export default function SearchBar({searchName,setSearchName}) {
  return (
    <Box>
      <input
        placeholder="Pesquisar"
        value={searchName}
        onChange={(input) => setSearchName(input.target.value)}
      />
      <img
        src="https://th.bing.com/th/id/OIP.J-NC5zdHendWhPtlgsY0LgHaHa?rs=1&pid=ImgDetMain"
        alt=""
      />
    </Box>
  );
}

