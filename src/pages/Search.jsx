import styled from "styled-components"
import { BiSearchAlt2 } from 'react-icons/bi';


const SearchInput = styled.div`
    input{
        border: none;
        border-bottom: 3px solid;
    }
`;

const Search = () => {

    return (
        <>
            <h1>Search</h1>
            <SearchInput>
                <input placeholder='검색어를 입력해주세요.'></input>
                <BiSearchAlt2 />
            </SearchInput>
        </>
    )
}

export default Search;