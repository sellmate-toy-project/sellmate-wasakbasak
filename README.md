# Sellmate Toy Project 01

## 프로젝트명: wasakbasak

_2022-03-02 ~ 2022-06-01_

[디자인](https://www.figma.com/file/QZEtmqqBH8ukX9IaTRfHqt/WB?node-id=0%3A1)

## 백엔드 환경구성 가이드

python v3.9 설치
pip 설치

```
> cd backend
> pip install -r requirements.txt
> uvicorn main:app --reload
```

## 프론트엔드 환경구성

1. react & typescript 설치

```
> npx create-react-app@latest frontend --template typescript
// create-react-app 버전 문제로 @latest 붙은 최신 버전 받아야 정상 동작

> npm i --save react react-dom styled-components typescript
> npm i --save-dev @types/react @types/react-dom @types/node
> npm i -D @types/styled-components
```

2. mui 설치(react UI framework)

```
> npm install @mui/material @emotion/react @emotion/styled
```

react >= 17.0.0 및 react-dom >= 17.0.0 에서 적용

> 실서버
> > - 프론트엔드 : http://jisangdev.iptime.org:805
> > - 백엔드 : http://jisangdev.iptime.org:805/api/
> 
> 로컬
> > - 프론트엔드 : localhost:3000
> > - 백엔드 : localhost:8000

<!--
host : jisangdev.iptime.org
id : sellmate
pw : tofhdnstlwkr1!

포트정보

Minio 버킷
http : 9000

SSH
ssh : 10022

FrontDeploy 테스트
http : 2000

Jenkins
http : 8080

Mysql
mysql : 3306
schema : wasakbasak 
----
프론트 : localhost:3000
백엔드 : localhost:8000
api 문서 : localhost:8000/docs
mysql
ip : localhost
port : 33060
id : root
pw : password1!
-->
