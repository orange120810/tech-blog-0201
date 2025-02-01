// components/NewPostButton.tsx
import Link from 'next/link';

const NewPostButton: React.FC = () => {
  return (
    <Link href="/posts/new" passHref>
      <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-md m-2">
        新規投稿へ
      </button>
    </Link>
  );
};

export default NewPostButton;
