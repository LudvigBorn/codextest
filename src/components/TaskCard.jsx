import clsx from 'clsx';
import { CoinIcon, TaskTypeIcon } from './Icons';

const STATE_STYLES = {
  active: {
    button: 'bg-gold-500 text-ink-900',
    icon: 'text-rose-500',
  },
  urgent: {
    button: 'bg-ruby-500 text-white',
    icon: 'text-rose-500',
  },
  completed: {
    button: 'bg-ink-200 text-ink-500',
    icon: 'text-ink-400',
  },
};

export default function TaskCard({ task, onComplete }) {
  const styles = STATE_STYLES[task.state] || STATE_STYLES.active;
  const isCompleted = task.state === 'completed';

  return (
    <button
      type="button"
      onClick={() => onComplete?.(task.id)}
      className={clsx(
        'group flex w-full items-stretch overflow-hidden rounded-[28px] border-2 border-ink-200 bg-white text-left shadow-soft transition',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink-900',
        isCompleted && 'opacity-70'
      )}
      disabled={isCompleted}
    >
      <div className="flex flex-1 gap-4 px-5 py-4">
        <div className="pt-1">
          <TaskTypeIcon className={clsx('h-7 w-7', styles.icon)} />
        </div>
        <div className="flex-1 space-y-1">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-base font-semibold text-ink-900">{task.title}</h3>
            <div className="flex items-center gap-2 text-base font-semibold text-ink-900">
              <span>{task.reward}</span>
              <CoinIcon className="h-6 w-6" />
            </div>
          </div>
          <p className="text-sm text-ink-600 line-clamp-3">{task.description}</p>
        </div>
      </div>
      <div
        className={clsx(
          'flex w-28 items-center justify-center rounded-l-[28px] rounded-r-[24px] text-center text-base font-semibold',
          styles.button
        )}
      >
        Готово
      </div>
    </button>
  );
}
