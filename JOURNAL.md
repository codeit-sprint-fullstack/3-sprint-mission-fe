---
marp: true
pagination: true
---

# 작업일지

## 2024-12-02

- pnpx create-next-app . 로 nextjs 설치
- .gitignore 추가
- Variable Font(Pretendard, NanumSquareNeo) 설정(tailwind.config.ts, layout.tsx)
- Data Fetching을 위해 swr을 dependencies에 추가
  - 이유 : vercel에서 만들어서 NextJS Caching이 찰떡임
- prettier 및 플러그인(@ianvs/prettier-plugin-sort-imports, prettier-plugin-css-order, prettier-plugin-tailwindcss) devDependencies에 추가
- 프로젝트 디렉터리 설정

## TIL-241202

Where is the best practice to locate prisma in a nextjs app router project? Below is the directory structure.
```
- public
- src
    - app
        - api
        - features
        - fonts
        - hooks
        - lib
        - pages
        - styles
        - types
        layout.tsx
        page.tsx
    - assets
        - icons
        - images
    - components
        - common
        - layout
        - ui
    - pages
        - home
            - ui
.env
.eslintrc.json
.gitignore
.prettierrc
next.config.ts
tailwind.config.ts
tsconfig.json
```
