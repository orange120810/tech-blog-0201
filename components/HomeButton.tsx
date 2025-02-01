// components/NewPostButton.tsx
import { useRouter } from 'next/navigation';
import React from 'react';

const HomeButton: React.FC = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/');
  };

  return (
    <button type="button" onClick={handleClick} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
      ホームへ
    </button>
  );
};

export default HomeButton;
