import { FC, useState } from 'react';
import Image from 'next/image';
import { Button } from './ui/Button';

interface CreatePostProps {
  onPost: (text: string) => void;
}

export const CreatePost: FC<CreatePostProps> = ({ onPost }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onPost(text);
      setText('');
    }
  };

  return (
    <div className="border-b border-valentine-light/10 p-4">
      <form onSubmit={handleSubmit} className="flex gap-4">
        <div className="flex-shrink-0">
          <div className="w-10 h-10 rounded-full bg-valentine-light/10 flex items-center justify-center">
            <Image
              src="/heart.svg"
              alt="Profile"
              width={24}
              height={24}
              className="text-valentine-light"
            />
          </div>
        </div>
        <div className="flex-grow">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Share a memory..."
            className="w-full bg-transparent text-valentine-light placeholder-valentine-light/50 resize-none outline-none text-xl min-h-[100px]"
          />
          <div className="flex justify-end mt-2">
            <Button type="submit" disabled={!text.trim()}>
              Post
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}; 