import { FC, useState } from 'react';
import { Button } from './ui/Button';

interface PasswordProtectionProps {
  onSuccess: () => void;
  onClose: () => void;
}

// Note: In a real app, you'd want to hash this and store it securely
// For this demo purpose, we'll use a simple string
const CORRECT_PASSWORD = 'iloveyou2024';

export const PasswordProtection: FC<PasswordProtectionProps> = ({ onSuccess, onClose }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      onSuccess();
      localStorage.setItem('valentine_auth', 'true');
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 bg-valentine-primary/30 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-valentine-dark/80 backdrop-blur-md rounded-lg p-8 shadow-xl max-w-md w-full border border-valentine-light/10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-valentine-light">
            Enter Password
          </h2>
          <button
            onClick={onClose}
            className="text-valentine-light/60 hover:text-valentine-light transition-colors"
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-lg bg-valentine-light/10 border border-valentine-light/20 text-valentine-light focus:outline-none focus:border-valentine-light/40"
            placeholder="Enter the secret password"
          />
          {error && (
            <p className="text-valentine-primary text-sm text-center">
              Incorrect password. Try again!
            </p>
          )}
          <div className="flex justify-center">
            <Button type="submit">
              Unlock
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}; 