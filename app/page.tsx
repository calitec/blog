import { getAllPosts } from '@/lib/posts';
import Link from 'next/link';
import { formatDate } from '@/lib/utils';

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">최신 글</h1>
        <p className="text-gray-600 dark:text-gray-400">
          일상, 정보, 그리고 유용한 이야기를 공유합니다
        </p>
      </div>

      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.slug} className="border-b border-gray-200 dark:border-gray-800 pb-8">
            <Link href={`/blog/${post.slug}`} className="group">
              <h2 className="text-2xl font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {post.title}
              </h2>
            </Link>
            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              {post.tags && post.tags.length > 0 && (
                <div className="flex gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {post.description}
            </p>
            <Link
              href={`/blog/${post.slug}`}
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              자세히 읽기 →
            </Link>
          </article>
        ))}
      </div>

      {posts.length === 0 && (
        <div className="text-center py-12 text-gray-500 dark:text-gray-400">
          아직 작성된 글이 없습니다.
        </div>
      )}
    </div>
  );
}
