# Sellmate Toy Project 01

## 프로젝트명: wasakbasak

_2022-03-02 ~ 2022-06-01_

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
> npx-create-react-app@latest frontend --template typescript
// create-react-app 버전 문제로 @latest 붙은 최신 버전 받아야 정상 동작

> npm i --save react react-dom typescript
> npm i --save-dev @types/react @types/react-dom @types/node
```

2. mui 설치(react UI framework)

```
> npm install @mui/material @emotion/react @emotion/styled
```
react >= 17.0.0 및 react-dom >= 17.0.0 에서 적용
