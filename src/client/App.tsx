export function App() {
  const tasks = [
    {
      category: 'SETUP',
      title: 'Git-Repository anlegen',
      description: 'Aus dem Template erstellt und in VS Code geklont.',
    },
    {
      category: 'BACKEND',
      title: 'API testen',
      description: 'GET /api/items im Browser öffnen.',
    },
    {
      category: 'FRONTEND',
      title: 'Oberfläche gestalten',
      description: 'Eigene Farben in style.css festlegen.',
    },
    {
      category: 'DATENBANK',
      title: '',
      description: '',
    },
  ]

  return (
    <main class="mx-auto max-w-2xl p-6">
      <h1 class="text-3xl font-bold text-brand">Einfache Rezepte für After-School-Snacks</h1>
      <p class="mb-6 text-slate-600">Ändere Titel und Thema in src/client/App.tsx.</p>

      <ul class="space-y-3">
        {tasks.map((task, index) => (
          <li key={index} class="rounded-lg border border-slate-200 p-4 shadow-sm">
            {task.category && (
              <span class="text-xs uppercase tracking-wide text-slate-500">
                {task.category}
              </span>
            )}
            {task.title && <h2 class="font-semibold">{task.title}</h2>}
            {task.description && <p class="text-sm text-slate-600">{task.description}</p>}
          </li>
        ))}
      </ul>
    </main>
  )
}
