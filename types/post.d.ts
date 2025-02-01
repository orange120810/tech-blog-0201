// post.d.ts など、型定義用のファイルに記述することが多いです
export interface Post {
    id: number;            // 投稿の一意な識別子
    title: string;         // 投稿のタイトル
    content: string;       // 投稿の内容
    created_at: Date;       // 作成日時
  }
  