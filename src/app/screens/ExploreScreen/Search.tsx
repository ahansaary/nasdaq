import {useActions} from 'src/business'
import styled from 'styled-components'

const Input = styled.input`
  width: 100%;
  max-width: 400px;
  border: 1px solid #fff;
  padding: 8px 16px;
  margin: 16px 0;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  outline: none;
  z-index: 10;
  transition: max-width 0.3s ease;

  ::placeholder {
    opacity: 0.7;
    color: #fff;
  }

  &:focus {
    background: rgba(255, 255, 255, 0.4);
    max-width: 420px;

    ::placeholder {
      opacity: 0.3;
    }
  }
`

const Search = () => {
  const {searchStocks} = useActions().stocks
  return (
    <Input
      placeholder="Search by ticker or ticker name..."
      onChange={e => searchStocks(e.target.value)}
    />
  )
}

export default Search
