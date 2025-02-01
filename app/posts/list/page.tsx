// app/list-posts/page.tsx
import { supabase } from "@/lib/supabaseClient";
import { Post } from "@/types/post";

// サーバーコンポーネントなので async 関数として記述可能
export default async function ListPostsPage() {
  // Supabase から posts を取得
  const { data: posts, error } = await supabase.from('posts').select('*');

  if (error) {
    console.error("Error fetching posts:", error);
    return <div>Error fetching posts</div>;
  }

  return (
    <div className="container mx-auto p-4">
      {posts && posts.map((post: Post) => (
        <div key={post.id} className="mb-4 p-4 border border-gray-300 rounded-md">
          <h2 className="text-xl font-bold">{post.title}</h2>
          <p className="mt-2 text-gray-700">{post.content}</p>
          <p className="text-right text-gray-700">{new Date(post.created_at).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );
}
