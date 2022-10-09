import styled from "styled-components"
import Nav from '../components/Nav';
import { BiSearchAlt2 } from 'react-icons/bi';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0.7rem 1.5rem;
`;

const SearchInput = styled.div`
    background-color: white;
    width: 70%;
    padding: 0.7rem 1.2rem;
    border-radius: 2rem;
    display:flex;
    justify-content: center;
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
const HotTopic = styled.div`
    display: flex;

`;

const Search = () => {

    return (
        <Wrapper>
            <h1>Search</h1>
            <SearchInput>
                <input placeholder='검색어를 입력해주세요.'></input>
                <BiSearchAlt2 className='searchIcon' size="20px" />
            </SearchInput>
            <HotTopic>
                <span>인기</span>
                <ul>
                    <li>작은 아씨들 OST</li>
                    <li>NCT DREAM</li>
                    <li>윤하(YOUNHA)</li>
                    <li>Ariana Grande</li>
                    <li>운동</li>
                </ul>
            </HotTopic>
            <Nav />
        </Wrapper>
    )
}

export default Search;