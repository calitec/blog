# Next.js 블로그

Next.js 14, TypeScript, Tailwind CSS로 만든 개인 블로그입니다.

## ✨ 특징

- 📝 **마크다운 지원**: `.md` 파일로 간편하게 글 작성
- 🎨 **다크모드**: 시스템 설정에 따라 자동 전환
- 🚀 **SEO 최적화**: 메타데이터, sitemap, robots.txt 자동 생성
- 💅 **반응형 디자인**: 모바일부터 데스크톱까지 최적화
- ⚡ **빠른 성능**: Next.js SSG로 빠른 페이지 로딩
- 📊 **Google Analytics**: 트래픽 분석 지원

## 🛠 기술 스택

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Markdown**: gray-matter, remark, rehype
- **Deployment**: Vercel

## 🚀 시작하기

### 1. 설치

\`\`\`bash
npm install
\`\`\`

### 2. 환경 변수 설정

\`\`\`.env.local
NEXT_PUBLIC_SITE_URL=http://localhost:3000
\`\`\`

### 3. 개발 서버 실행

\`\`\`bash
npm run dev
\`\`\`

브라우저에서 [http://localhost:3000](http://localhost:3000) 접속

## 📝 글 작성하기

1. `posts` 폴더에 `.md` 파일 생성
2. Front Matter 작성:

\`\`\`markdown
---
title: "글 제목"
date: "2026-02-05"
description: "글 설명"
tags: ["태그1", "태그2"]
---

여기에 본문 내용을 작성하세요.
\`\`\`

3. 개발 서버에서 자동으로 반영됨

## 📂 프로젝트 구조

\`\`\`
.
├── app/                    # Next.js App Router
│   ├── layout.tsx         # 루트 레이아웃
│   ├── page.tsx           # 홈페이지
│   ├── blog/[slug]/       # 블로그 글 상세
│   ├── about/             # 소개 페이지
│   ├── sitemap.ts         # Sitemap 생성
│   └── robots.ts          # Robots.txt
├── components/            # React 컴포넌트
│   ├── header.tsx
│   ├── footer.tsx
│   └── theme-toggle.tsx
├── lib/                   # 유틸리티 함수
│   ├── posts.ts           # 블로그 포스트 처리
│   └── utils.ts
├── posts/                 # 마크다운 블로그 글
└── public/                # 정적 파일

## 🚢 배포하기

### Vercel (추천)

1. GitHub에 코드 푸시
2. [vercel.com](https://vercel.com)에서 Import
3. 자동 배포 완료!

### 수동 빌드

\`\`\`bash
npm run build
npm run start
\`\`\`

## 📄 라이선스

MIT License

## 🤝 기여

이슈와 PR은 언제나 환영합니다!
