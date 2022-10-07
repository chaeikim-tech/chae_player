import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Nav from "../components/Nav"

const Wrapper = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(4, [col] 100px ) ;
    grid-template-rows: repeat(3, [row] auto  );
    background-color: #fff;
    color: #444;
`;

const Box = styled.div`
    background-color: #444;
    color: #fff;
    border-radius: 5px;
    padding: 20px;
    font-size: 150%;
`;

const MyPage = styled(Box)`
    grid-column: col / span 4;
    grid-row: row;
`;

const PaidServiceLeft = styled(Box)`
    grid-column: col / span 2;
    grid-row: row 2 ;
`;

const PaidServiceRight = styled(Box)`
    grid-column: col 3/ span 2;
    grid-row: row 2 ;
`;

const NoticeMenu1 = styled(Box)`
    grid-column: col / span 2;
    grid-row: row 3;
`;

const NoticeMenu2 = styled(Box)`
grid-column: col 3 / span 2;
    grid-row: row 3;
`;

const NoticeMenu3 = styled(Box)`
grid-column: col / span 2;
    grid-row: row 4;
`;

const NoticeMenu4 = styled(Box)`
grid-column: col 3 / span 2;
    grid-row: row 4;
`;

const Setting = () => {
    return (
        <Wrapper>
            <Header />
            <MyPage>1</MyPage>
            <PaidServiceLeft>이용권 구매</PaidServiceLeft>
            <PaidServiceRight>CHAE 라운지</PaidServiceRight>
            <MyPage>스페셜 기프트</MyPage>
            <NoticeMenu1>설정</NoticeMenu1>
            <NoticeMenu2>이벤트</NoticeMenu2>
            <NoticeMenu3>공지사항</NoticeMenu3>
            <NoticeMenu4>고객센터</NoticeMenu4>
            <Nav />
        </Wrapper>

    )
}

export default Setting;