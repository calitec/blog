# Code Rules

## 언어
- 컴포넌트, 변수, 함수명: 영어
- 주석: 한국어

## 파일명
- 컴포넌트: kebab-case (`post-card.tsx`)
- 유틸 함수: camelCase (`formatDate.ts`)

## 컴포넌트
- 함수형 컴포넌트만 사용
- props 타입은 파일 상단에 `interface`로 정의

## 스타일
- Tailwind CSS 클래스만 사용 (인라인 style 금지)
- 반응형은 모바일 퍼스트 (`sm:`, `md:`, `lg:` 순서)

## 타입
- `any` 사용 금지
- 타입 추론 가능한 경우 명시 생략
