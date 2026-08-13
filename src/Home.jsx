import { Link } from 'react-router-dom'
import { chapters } from './chapters'

export default function Home() {
  return (
    <div className="home">
      <div className="home-atmosphere" aria-hidden="true" />
      <header className="home-hero">
        <p className="brand">AI Safety Learning</p>
        <h1>Mechanistic Interpretability</h1>
        <p className="lede">
          Seven chapters on how machines learn, how transformers work, and how
          to reverse-engineer what they do inside.
        </p>
      </header>

      <nav className="chapter-menu" aria-label="Chapters">
        <ol>
          {chapters.map((chapter) => (
            <li key={chapter.id}>
              <Link to={`/chapter/${chapter.slug}`} className="chapter-link">
                <span className="chapter-num">{chapter.id}</span>
                <span className="chapter-text">
                  <span className="chapter-title">{chapter.title}</span>
                  <span className="chapter-sub">{chapter.subtitle}</span>
                </span>
                <span className="chapter-arrow" aria-hidden="true">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  )
}
