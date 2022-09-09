# KRULY'log
이커머스와 SNS를 통합한 웹 서비스


<br><br>   
# Overview

1. [서비스 개요](#1-서비스-개요)  
2. [프로젝트 소개](#2-프로젝트-소개)   
3. [프로젝트 목표](#3-프로젝트-목표)
4. [프로젝트 기능 설명](#4-프로젝트-기능-설명)
5. [팀원 역할 분담](#5-팀원-역할-분담)
6. [프로젝트 보완점](#6-프로젝트-보완점)


<br><br>   
# 1. 서비스 개요
<img src="https://cdn.discordapp.com/attachments/979000955657945131/1011609164734283848/Snipaste_2022-08-23_21-01-25.png" alt="컬리로그 로고" width="400" >  

**Kurly'log는 이커머스와 SNS를 통합한 서비스입니다.**  

마켓컬리의 후기시스템에서의 사용자경험을 개선하고자 하였습니다. 마켓컬리 내부에 커뮤니티 플랫폼을 형성하여 고객이 소통하는 경험을 할 수 있고, 이를 통해 자체적인 마이크로 인플루언서를 양성하여 자연스럽게 상품의 추천 및 홍보가 가능합니다.
Makes influencer in Market-Kurly using KRULY'log system.


<br><br>     
# 2. 프로젝트 소개

## 🖥 기술 스택  
<p align="center">
<img src="https://cdn.discordapp.com/attachments/979000955657945131/1011748688588181514/skills.png" width="80%">
</p>

<br>  

## 🖋 Infra Architecture  
![image](https://cdn.discordapp.com/attachments/979000955657945131/1011746840506544178/architecture.png)

<br>  

## 📈 FlowChart
[웹으로 보기👉](https://www.figma.com/file/1GyGG6TfHAF3B0meHGpoyZ/%EC%BB%AC%EB%A6%AC-log---%ED%94%8C%EB%A1%9C%EC%9A%B0?node-id=0%3A1)
![image](https://cdn.discordapp.com/attachments/979000955657945131/1011610773681877103/unknown.png)

<br>  

## 🖍 WireFrame
[웹으로 보기👉](https://www.figma.com/file/pSbjxnNH4YSfBlJqjo4fqS/SSAP?node-id=0%3A1)  
![image](https://cdn.discordapp.com/attachments/979000955657945131/1011610853549817937/unknown.png)

<br>  
 
## 📦 ERD
[웹으로 보기👉](https://www.erdcloud.com/d/CbLoq2KQTdoZ6RPnQ)  
![image](https://cdn.discordapp.com/attachments/979000955657945131/1011594777973751829/unknown.png)

<br>  

## ✍🏼 API

[API 문서 보기👉](https://chipped-cookie-c3b.notion.site/API-c91a0d7c2a1d4df5a900039ed8c28ad7)    


<br><br>   
# 3. 프로젝트 목표
- 이미지 미리 보기가 없는 게시판 형태의 기존 후기 시스템을 벗어나서 이미지를 미리 보여주고, 무한 스크롤 형태의 카드로 제작하여 유저들의 **후기 시스템 사용을 편리**하게 합니다.
- 인기 리뷰어 **컬리언서**을 선정하며, **광고 및 홍보 비용 절감과 함께 구매 증가 효과**를 노립니다.
- 리뷰는 **간접 경험**의 중요한 역할을 합니다. 후기 개선 시스템으로 새로운 **상품에 대한 거부감을 절감**시킵니다.
- 컬리log에서 발생하는 구매 관련 데이터로 소비자 성향 파악 등 또 다른 **데이터 베이스 수집**이 가능합니다.


<br><br>   
# 4. 프로젝트 기능 설명
### 기존 후기 UI 개선
1. 상품의 후기를 별점으로 시각화하여 고객의 상품 구입에 도움을 줄 수 있도록 하였습니다.
2. 후기 쓰기를 단순 후기와 컬리log 쓰기로 나누었습니다.
3. 무한스크롤 형태 리뷰 카드와 이미지 미리보기를 가능하게 하였습니다.

### 컬리로그
1. 내 컬리log : 게시글 작성, 수정 및 삭제가 가능합니다. 
2. 인기글/전체글 : 글 미리보기 카드를 캐러셀과 무한스크롤 형태로 보여줍니다.
3. 팔로우 기능

### 컬리언서
1. Best 컬리언서
2. 컬리언서 주간 Best 리뷰
3. 샛별 리뷰 


<br><br>   
# 5. 팀원 역할 분담  
| 이름 | 역할 | 세부 사항 |
|------|----------|-----------|
| 신도희(S) | 백엔드 개발 |  1. DB 설계 및 관리 <br>2. API 구현 <br>3. 배포 <br>4. PPT 작성 |
| 손현주(S) | 백엔드 개발 |  1. DB 설계 및 관리 <br>2. API 구현 <br>3. PPT 작성 <br>4. README 작성 |
| 안민영(A) | 프론트엔드 개발 |1. 와이어 프레임 & 기획<br>2. 구현 <br>- [컬리log 인기글/전체글 - 캐러셀과 무한 스크롤]<br>- [컬리log - 게시글 작성/ 수정(위즈윅)/ 삭제/ 미리보기, 캐러셀 외]<br>- [이미지 업로드 기능]<br>3. 페이지 구조도 작성
| 박진아(P) | 프론트엔드 개발 |1. 와이어 프레임 & 기획<br>2. 구현<br>- [기존 후기 UI 개선 - 무한스크롤/ 후기쓰기 외]<br>- [컬리언서 - best컬리언서, best 리뷰, 샛별리뷰]<br>- [레이아웃 - header, footer]<br>- [상품페이지 - 메인/ 디테일]<br>- [유저 팔로우/ 좋아요 기능]<br>3. 최종 서비스 소개서 작성 


<br><br>   
# 6. 프로젝트 보완점

### 회원가입
현재는 마켓컬리 기존 회원 대상 고객을 전제로 회원가입을 빼고 로그인 기능만 구현되어 있습니다.  
(내 컬리log는 로그인을 해야만 접근이 가능)

### 컬리언서 등급 및 기타 기준 사항
컬리언서라는 별도의 등급이 있는 이상, 전환을 위한 기준이 필요합니다.
