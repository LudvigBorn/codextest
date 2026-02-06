import { useState } from 'react';
import BottomNav from './components/BottomNav';
import TaskSection from './components/TaskSection';
import TopBar from './components/TopBar';
import { taskSections, userProfile } from './data/mockData';

// App holds state to keep UI components stateless and future backend-ready.
export default function App() {
  const [sections, setSections] = useState(taskSections);

  const handleComplete = (taskId) => {
    setSections((prev) =>
      prev.map((section) => ({
        ...section,
        tasks: section.tasks.map((task) =>
          task.id === taskId ? { ...task, state: 'completed' } : task
        ),
      }))
    );
  };

  return (
    <div className="min-h-screen bg-ink-50 pb-20">
      <TopBar user={userProfile} />
      <main className="mx-auto flex max-w-xl flex-col gap-6 px-4 py-6">
        {sections.map((section) => (
          <TaskSection
            key={section.id}
            section={section}
            onComplete={handleComplete}
          />
        ))}
      </main>
      <BottomNav />
    </div>
  );
}
