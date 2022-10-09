import styled from "styled-components"
import Nav from '../components/Nav';
import { BiSearchAlt2 } from 'react-icons/bi';

const Wrapper = styled.div`
    background-color: #0C2D48;
    color:#B1D4E0;
    padding: 1rem 2rem;
    height: 100vh;
    overflow: hidden;
`;

const SearchInput = styled.div`
    background-color: white;
    width: 70%;
    padding: 0.7rem 1.2rem;
    border-radius: 2rem;
    display:flex;
    align-items:center;
    input{
        border: none;
        width: 100%;
        &:focus {
            outline: none;
        }
    }
    .searchIcon{
        cursor: pointer;
        color:#74cce9;
    }
`;

const Search = () => {

    return (
        <Wrapper>
            <h1>Search</h1>
            <SearchInput>
                <input placeholder='검색어를 입력해주세요.'></input>
                <BiSearchAlt2 className='searchIcon' size="20px" />
            </SearchInput>
            <Nav />
        </Wrapper>
    )
}

export default Search;