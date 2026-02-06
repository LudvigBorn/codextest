import clsx from 'clsx';
import { OathIcon, TaskListIcon } from './Icons';

const tabs = [
  { id: 'oath', label: 'Обет', icon: OathIcon, active: true },
  { id: 'task', label: 'Задание', icon: TaskListIcon, active: false },
];

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-20 border-t border-ink-200 bg-white">
      <div className="mx-auto grid max-w-xl grid-cols-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              type="button"
              className={clsx(
                'flex h-16 items-center justify-center gap-2 text-base font-semibold transition',
                tab.active
                  ? 'text-ruby-500'
                  : 'text-ink-400 opacity-70'
              )}
              aria-label={tab.label}
            >
              <Icon className="h-6 w-6" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
