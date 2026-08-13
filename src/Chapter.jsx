import { Link, useParams, Navigate } from 'react-router-dom'
import { chapters } from './chapters'

export default function Chapter() {
  const { slug } = useParams()
  const index = chapters.findIndex((c) => c.slug === slug)
  if (index === -1) return <Navigate to="/" replace />

  const chapter = chapters[index]
  const prev = chapters[index - 1]
  const next = chapters[index + 1]

  return (
    <div className="chapter-view">
      <header className="chapter-bar">
        <Link to="/" className="bar-brand">
          AI Safety Learning
        </Link>
        <div className="bar-meta">
          <span className="bar-chapter">
            Chapter {chapter.id}
            <span className="bar-sep">·</span>
            {chapter.title}
          </span>
        </div>
        <nav className="bar-nav" aria-label="Chapter navigation">
          {prev ? (
            <Link to={`/chapter/${prev.slug}`} className="bar-btn">
              ← Prev
            </Link>
          ) : (
            <span className="bar-btn disabled">← Prev</span>
          )}
          <Link to="/" className="bar-btn">
            Menu
          </Link>
          {next ? (
            <Link to={`/chapter/${next.slug}`} className="bar-btn">
              Next →
            </Link>
          ) : (
            <span className="bar-btn disabled">Next →</span>
          )}
        </nav>
      </header>

      <iframe
        title={`Chapter ${chapter.id}: ${chapter.title}`}
        src={`/chapters/${chapter.file}`}
        className="chapter-frame"
      />
    </div>
  )
}
