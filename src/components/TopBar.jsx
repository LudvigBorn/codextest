import { CoinIcon } from './Icons';

export default function TopBar({ user }) {
  return (
    <header className="sticky top-0 z-20 border-b border-ink-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <span className="rounded-full border-2 border-ink-300 px-3 py-1 text-sm font-semibold text-ink-900">
            {user.level}
          </span>
          <img
            src={user.avatar}
            alt="Аватар пользователя"
            className="h-11 w-11 rounded-full border-2 border-white object-cover shadow-soft"
          />
          <span className="text-base font-semibold text-ink-900">{user.name}</span>
        </div>
        <div className="flex items-center gap-2 rounded-full border-2 border-ink-200 bg-white px-3 py-1 text-base font-semibold text-ink-900">
          <span>{user.balance}</span>
          <CoinIcon className="h-6 w-6" />
        </div>
      </div>
    </header>
  );
}
