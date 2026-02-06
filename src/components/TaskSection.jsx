import TaskCard from './TaskCard';
import { FilterIcon } from './Icons';

export default function TaskSection({ section, onComplete }) {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between gap-3 rounded-[24px] border-2 border-ink-200 bg-white px-4 py-3">
        <div className="flex items-center gap-3">
          <span className="rounded-full border-2 border-ink-300 px-3 py-1 text-sm font-semibold text-ink-900">
            {section.progress}
          </span>
          <span className="text-lg font-semibold text-ink-900">{section.label}</span>
        </div>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-ink-200 bg-white text-ink-700 transition hover:bg-ink-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink-900"
          aria-label="Фильтр"
        >
          <FilterIcon className="h-5 w-5" />
        </button>
      </div>
      <div className="space-y-4">
        {section.tasks.map((task) => (
          <TaskCard key={task.id} task={task} onComplete={onComplete} />
        ))}
      </div>
      <div className="h-px w-full bg-ink-200" />
    </section>
  );
}
