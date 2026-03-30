import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '소개',
  description: '블로그 운영자 소개',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <h1 className="text-4xl font-bold mb-8">소개</h1>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p>
          안녕하세요! 이 블로그를 운영하고 있습니다.
        </p>

        <h2>관심 분야</h2>
        <ul>
          <li>일상 이야기</li>
          <li>유용한 정보 공유</li>
          <li>생활 꿀팁</li>
          <li>새로운 경험과 배움</li>
        </ul>

        <h2>이 블로그는?</h2>
        <p>
          일상에서 경험한 것들, 유용한 정보, 그리고 다양한 이야기를 공유하는 공간입니다.
          실용적이고 도움이 되는 내용을 중심으로 작성하고 있습니다.
        </p>

        <h2>연락처</h2>
        <ul>
          <li>Email: your.email@example.com</li>
          <li>Instagram: <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">@yourusername</a></li>
          <li>Twitter: <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">@yourusername</a></li>
        </ul>
      </div>
    </div>
  );
}
