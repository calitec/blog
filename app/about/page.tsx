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
      </div>
    </div>
  );
}
