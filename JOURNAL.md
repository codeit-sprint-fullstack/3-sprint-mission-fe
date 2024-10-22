# 작업일지

## 2024-10-21

### 🎉 Chore(project): initialize project with CNA

- pnpm create next-app . 로 프로젝트를 생성하였습니다.
- images, styles 등 basic 브랜치 assets을 재사용하였습니다.
- CRA 시 생성된 불필요 파일을 제거하고 기본 디렉토리 구조를 설정하였습니다.

### 🙈 Chore(.gitignore): add React and Node ignores

- .gitignore에 React, NextJS ignore을 추가하였습니다.

### 🐭 Chore(.editorconfig): add editor configuration

- .editorconfig 설정을 추가하였습니다.

### 📝 Docs: add and update documentation

- 주요 변경사항(Mission 5 ~ 7)을 README.md에 수정하였습니다.
- 판다마켓 API 명세(메서드, 요청, 응답 등)를 API.md에 추가하였습니다.
- 작업 이력 기록을 JOURNAL.md에 추가하였습니다.

### 📦️ Chore(code-quality): setup ESLint and Prettier

- Code Quality 향상을 위해 ESLint 설정
- Formatting을 위해 Prettier 설치, 설정
- ESLint와 Prettier 충돌 시 ESLint 규칙 해제를 위해 eslint-config-prettier 설치
- ESM import 순서를 정렬하기 위해 @ianvs/prettier-plugin-sort-imports 설치, 설정
- Tailwind CSS 사용 시 클래스 정렬을 위해 prettier-plugin-tailwindcss 설치, 설정
- CSS 사용 시 속성 정렬을 위해 prettier-plugin-css-order 설치, 설정

## 2024-10-22

### Chore(project): improve directory structure

- NextJS 디렉터리 구성을 FSD(Feature Sliced Design) 패턴을 따르도록 설정
