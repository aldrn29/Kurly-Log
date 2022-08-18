import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Profile from "../public/profile.png";

const Intro = () => {
    const title = 'SSAP의 컬리log';
    const user = 'SSAP';

    return (
        <Wrapper>
            <Header>
                <LogInfo>
                    <span>오늘 15  전체 46</span>
                    <h1>{title}</h1>
                </LogInfo>
                <UserInfo>
                    <div>
                        <Image
                            src={Profile}
                            alt="profile"
                            width={40}
                            height={40}
                        />
                    </div>
                    <UserProfile>
                        <div>{user}</div>
                        <div>20대 1인가구 바쁘다바빠, 팔로워 150명</div>
                    </UserProfile>
                </UserInfo>
            </Header>
            <Introduce>
                <Title>소개</Title>
                <div>맛집 여행을 해요.</div>
            </Introduce>
            <Popular>
                <Title>인기글</Title>
            </Popular>
            <Contents>
                <Title>전체글</Title>
            </Contents>
        </Wrapper>
    );
};

export default Intro;

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    background-color: #f2f2f2;
`;

const Header = styled.div`
    width: 100%;
    height: 40%;
    background: url("/background.jpg");
    background-size: cover;
    color: white;
    display: grid;
    grid-template-rows: 8fr 2fr;
    padding: 0 20px;
`;

const LogInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: end;
`;

const UserInfo = styled.div`
    display: flex;
`;

const UserProfile = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
`;

const Introduce = styled.div`
    height: 100px;
    background: white;
    margin-top: 10px;
    padding: 20px;
`;

const Popular = styled.div`
    height: 200px;
    background: white;
    margin-top: 10px;
    padding: 20px;
`;

const Contents = styled.div`
    height: 500px;
    background: white;
    margin-top: 10px;
    padding: 20px;
`;

const Title = styled.div`
    font-weight: bold;
    margin-bottom: 10px;
`;