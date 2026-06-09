import { useState } from 'react'
import { questions, CATEGORIES, CATEGORY_LABELS } from '../data/engQuestions'
import './EngPage.css'

export default function EngPage() {
  const [activeCategory, setActiveCategory] = useState('all_questions_answers')
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [search, setSearch] = useState('')

  const formatTitle = (id: string) =>
    id.replace(/^js-/, '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())

  const searchTerm = search.trim().toLowerCase()
  const filtered = searchTerm
    ? questions.filter(q =>
        q.id.toLowerCase().includes(searchTerm) ||
        formatTitle(q.id).toLowerCase().includes(searchTerm)
      )
    : questions.filter(q => q.categories.includes(activeCategory))

  const selected = questions.find(q => q.id === selectedId) ?? null

  const handleSearch = (value: string) => {
    setSearch(value)
    const term = value.trim().toLowerCase()
    if (!term) return
    // exact match → select immediately
    const exact = questions.find(q =>
      q.id.toLowerCase() === term ||
      formatTitle(q.id).toLowerCase() === term
    )
    if (exact) { setSelectedId(exact.id); return }
    // single result → auto-select
    const matches = questions.filter(q =>
      q.id.toLowerCase().includes(term) ||
      formatTitle(q.id).toLowerCase().includes(term)
    )
    if (matches.length === 1) setSelectedId(matches[0].id)
  }

  return (
    <div className="eng-layout">
      <aside className="eng-sidebar">
        <input
          className="eng-search"
          type="text"
          placeholder="Search questions..."
          value={search}
          onChange={e => handleSearch(e.target.value)}
          autoComplete="off"
          spellCheck={false}
        />
        <p className="eng-sidebar-heading">Categories</p>
        <ul className="eng-category-list">
          {CATEGORIES.map(cat => (
            <li key={cat}>
              <button
                className={`eng-cat-btn${activeCategory === cat ? ' active' : ''}`}
                onClick={() => {
                  setActiveCategory(cat)
                  setSelectedId(null)
                }}
              >
                {CATEGORY_LABELS[cat]}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      <main className="eng-main">
        <div className="eng-question-list">
          {filtered.map(q => (
            <button
              key={q.id}
              className={`eng-question-item${selectedId === q.id ? ' active' : ''}`}
              onClick={() => setSelectedId(q.id)}
            >
              {formatTitle(q.id)}
            </button>
          ))}
        </div>

        <div className="eng-solution-panel">
          {selected ? (
            <>
              <h2 className="eng-solution-title">{formatTitle(selected.id)}</h2>
              <pre className="eng-code-block"><code>{selected.solution}</code></pre>
            </>
          ) : (
            <p className="eng-placeholder">Select a question to see the solution</p>
          )}
        </div>
      </main>
    </div>
  )
}
