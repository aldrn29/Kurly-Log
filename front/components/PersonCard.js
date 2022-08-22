import React from "react";
import Image from "next/image";
import styled from "styled-components";
import gold from "../public/GoldMedal.png";
import silver from "../public/SilverMedal.png";
import bronze from "../public/BronzeMedal.png";

const medalList = [gold, silver, bronze];

const PersonCard = () => {
    return (
        <PersonContainer>
            <Profile>
                <MedalWrapper>
                    <Image
                        src={medalList[0]}
                        alt="medal"
                        width={50}
                        height={60}
                    />
                </MedalWrapper>
                <ProfileImg></ProfileImg>
            </Profile>
            <PersonContent>
                <PersonName>민규엄마</PersonName>
                <Introduce>50대 / 4인가구 / 아침걱정</Introduce>
                <HashTagWrapper>
                    <HashTag># 요리레시피</HashTag>
                    <HashTag># 후기요정</HashTag>
                </HashTagWrapper>
            </PersonContent>
            <PersonData>
                <DataWrapper>
                    {" "}
                    <DataTitle>팔로워</DataTitle>
                    <DataCount>555</DataCount>
                    <DataTitle>리뷰글</DataTitle>
                    <DataCount>55</DataCount>
                    <DataTitle>좋아요</DataTitle>
                    <DataCount>135</DataCount>
                </DataWrapper>
            </PersonData>
        </PersonContainer>
    );
};

export default PersonCard;

const PersonContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1.5fr 3fr 1fr;
    padding: 8px;
    margin: 5px 0;
    background-color: rgb(244, 244, 244);
`;

const Profile = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const MedalWrapper = styled.div`
    width: 30px;
    height: 30px;
    left: 500px;
`;

const ProfileImg = styled.div`
    width: 70px;
    height: 70px;
    background-color: gray;
    background: url("https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg");
    background-size: cover;
`;

const PersonContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding-left: 20px;
`;

const PersonName = styled.div`
    font-weight: 800;
    font-size: 20px;
    color: #5f0080;
`;

const Introduce = styled.div`
    font-size: 12px;
    padding: 2px 0;
    color: gray;
`;

const HashTagWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2px 0;
`;

const HashTag = styled.div`
    width: 80px;
    height: 22px;
    line-height: 22px;
    border-radius: 14px;
    background-color: #5f0080;
    color: white;
    font-size: 10px;
    text-align: center;
    margin: 0 2px;
`;

const PersonData = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
`;

const DataWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const DataTitle = styled.div`
    font-weight: 700;
    font-size: 14px;
    color: #5f0080;
    margin: 0 2px;
`;

const DataCount = styled.div`
    font-weight: 400;
    font-size: 13px;
    color: gray;
`;
