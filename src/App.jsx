import { useEffect, useMemo, useState } from 'react'
import QuestionCard from './components/QuestionCard.jsx'
import { getRandomQuestions, ensureGradePool } from './questions.js'
import confetti from 'canvas-confetti'

export default function App() {
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState(null)
  const [score, setScore] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [grade, setGrade] = useState(null)
  const [playerName, setPlayerName] = useState('')
  const [leaderboard, setLeaderboard] = useState([])

  // Load leaderboard on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('zebra_leaderboard')
      if (saved) {
        setLeaderboard(JSON.parse(saved))
      }
    } catch {}
  }, [])

  const questions = useMemo(() => {
    try {
      if (grade) { ensureGradePool(grade) }
      const histRaw = localStorage.getItem('zebra_recent_history')
      const history = histRaw ? JSON.parse(histRaw) : []
      const exclude = Array.isArray(history)
        ? history.flat().filter((v, i, a) => a.indexOf(v) === i)
        : []
      return getRandomQuestions(10, exclude, grade || 9)
    } catch {
      return getRandomQuestions(10, [], grade || 9)
    }
  }, [grade])

  const q = questions[index]
  const total = questions.length
  const isCorrect = submitted && selected === q.answerIndex
  const [finished, setFinished] = useState(false)
  const [perTopic, setPerTopic] = useState({})
  const [started, setStarted] = useState(false)
  const [welcomeShown, setWelcomeShown] = useState(false)

  function submit() {
    if (submitted || selected == null) return
    setSubmitted(true)
    if (selected === q.answerIndex) setScore((s) => s + 1)
    setPerTopic((prev) => {
      const topic = q.topic || 'general'
      const entry = prev[topic] || { correct: 0, total: 0 }
      return {
        ...prev,
        [topic]: { correct: entry.correct + (selected === q.answerIndex ? 1 : 0), total: entry.total + 1 },
      }
    })
  }

  function next() {
    if (index + 1 < total) {
      setIndex((i) => i + 1)
      setSelected(null)
      setSubmitted(false)
    } else {
      const finalScore = score + (isCorrect ? 1 : 0)
      setScore(finalScore)
      setFinished(true)
      
      // Save score to leaderboard
      if (finalScore > 0) {
        const newEntry = {
          name: playerName || 'Anonymous',
          score: finalScore,
          total: total,
          grade: grade || 9,
          date: new Date().toISOString().split('T')[0]
        }
        const updated = [...leaderboard, newEntry]
          .sort((a, b) => (b.score / b.total) - (a.score / a.total))
          .slice(0, 20) // Keep top 20
        setLeaderboard(updated)
        try {
          localStorage.setItem('zebra_leaderboard', JSON.stringify(updated))
        } catch {}
      }
      
      // Persist history of last 3 sets to avoid repeating next time
      try {
        const ids = questions.map((qq) => qq.id)
        const histRaw = localStorage.getItem('zebra_recent_history')
        const history = histRaw ? JSON.parse(histRaw) : []
        const nextHistory = [ids, ...(Array.isArray(history) ? history : [])].slice(0, 3)
        localStorage.setItem('zebra_recent_history', JSON.stringify(nextHistory))
        localStorage.removeItem('zebra_recent_ids')
      } catch {}
    }
  }

  useEffect(() => {
    if (!finished) return
    // Confetti intensity scales with score percentage
    const pct = total > 0 ? score / total : 0
    const bursts = Math.max(2, Math.round(6 * pct))
    const particleCount = Math.round(120 * pct) + 80
    const spread = 45 + Math.round(15 * pct)
    const ticks = 150 + Math.round(100 * pct)
    let count = 0
    const interval = setInterval(() => {
      confetti({
        particleCount,
        spread,
        startVelocity: 45 + Math.round(20 * pct),
        gravity: 1,
        ticks,
        origin: { x: Math.random() * 0.6 + 0.2, y: Math.random() * 0.2 + 0.1 },
        scalar: 0.9 + 0.4 * pct,
      })
      count++
      if (count >= bursts) clearInterval(interval)
    }, 400)
    return () => clearInterval(interval)
  }, [finished, score, total])

  function outsiderPerspective() {
    // Build strengths by accuracy, require at least 1 attempt
    const entries = Object.entries(perTopic)
      .map(([topic, { correct, total }]) => ({ topic, correct, total, acc: total ? correct / total : 0 }))
      .filter((e) => e.total > 0)
      .sort((a, b) => b.acc - a.acc)
    if (!entries.length) return "You worked through the set thoughtfully."
    const top = entries[0]
    const good = top.acc >= 0.8 ? "excellent" : top.acc >= 0.6 ? "strong" : "growing"
    const topicName = top.topic.replace(/-/g, ' ')
    const follow = entries.length > 1 ? ` You also show promise in ${entries[1].topic.replace(/-/g, ' ')}.` : ''
    return `From the outside, you look ${good} at ${topicName}.${follow}`
  }

  if (finished) {
    return (
      <div style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', padding: 16 }}>
        <div style={{ textAlign: 'center' }}>
          <img
            src={score / total >= 0.6 ? './zebra-happy.svg' : './zebra-sad.svg'}
            alt={score / total >= 0.6 ? 'Happy zebra' : 'Sad zebra'}
            style={{ width: 200, height: 'auto', marginBottom: 12 }}
          />
          <div style={{ fontSize: 26, fontWeight: 800, marginBottom: 8 }}>All done!</div>
          <div style={{ fontSize: 18, marginBottom: 8 }}>You scored <strong>{score}</strong> out of <strong>{total}</strong>.</div>
          <div style={{ fontSize: 16, color: '#374151', marginBottom: 24 }}>{outsiderPerspective()}</div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 8 }}>
          <button
            onClick={() => window.location.reload()}
            style={{ padding: '10px 14px', borderRadius: 8, border: 'none', background: '#2563eb', color: 'white', cursor: 'pointer' }}
          >
            Try another set
          </button>
            <button
              onClick={() => { try { localStorage.removeItem('zebra_recent_ids') } catch {} ; window.location.reload() }}
              style={{ padding: '10px 14px', borderRadius: 8, border: '1px solid #cbd5e1', background: 'white', color: '#0f172a', cursor: 'pointer' }}
            >
              Reset pool
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Start screen - name and grade selection
  if (!welcomeShown) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 16 }}>
        <div style={{ textAlign: 'center', maxWidth: 500 }}>
          <img src="./zebra-welcome.svg" alt="Zebra" style={{ width: 180, height: 'auto', marginBottom: 20 }} />
          <div style={{ fontSize: 28, fontWeight: 800, marginBottom: 8 }}>Welcome!</div>
          <div style={{ fontSize: 16, color: '#374151', marginBottom: 24 }}>
            Let's get you set up for the Zebra Stripes Math Challenge
          </div>
          
          {/* Name input */}
          <div style={{ marginBottom: 20 }}>
            <input
              type="text"
              placeholder="Enter your name (or leave blank for anonymous)"
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              style={{
                padding: '12px 16px',
                borderRadius: 8,
                border: '1px solid #d1d5db',
                fontSize: 16,
                width: '100%',
                textAlign: 'center',
                maxWidth: '400px'
              }}
            />
          </div>
          
          {/* Grade selection */}
          <div style={{ marginBottom: 24 }}>
            <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 12 }}>Select your grade:</div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 8, flexWrap: 'wrap' }}>
              {[7,8,9,10,11,12].map((g) => (
                <button key={g}
                  onClick={() => setGrade(g)}
                  style={{ 
                    padding: '10px 16px', 
                    borderRadius: 8, 
                    border: grade===g? '2px solid #2563eb':'1px solid #cbd5e1', 
                    background: grade===g? '#eef2ff':'white', 
                    cursor: 'pointer',
                    fontSize: 14,
                    fontWeight: grade===g? 600: 400
                  }}>
                  Grade {g}
                </button>
              ))}
            </div>
          </div>
          
          <button
            onClick={() => setWelcomeShown(true)}
            disabled={grade === null}
            style={{ 
              padding: '12px 24px', 
              borderRadius: 8, 
              border: 'none', 
              background: grade === null ? '#9ca3af' : '#16a34a', 
              color: 'white', 
              cursor: grade === null ? 'not-allowed' : 'pointer',
              fontSize: 16,
              fontWeight: 600
            }}
          >
            Continue
          </button>
          
          {grade === null && (
            <div style={{ marginTop: 12, fontSize: 14, color: '#ef4444', fontWeight: 500 }}>
              Please select a grade to continue
            </div>
          )}
        </div>
      </div>
    )
  }

  // Welcome screen - leaderboard and quiz info
  if (!started) {
    return (
      <div style={{ minHeight: '100vh', padding: 16, position: 'relative' }}>
        {/* Left side - Leaderboard (fixed position) */}
        {leaderboard.length > 0 && (
          <div style={{ position: 'fixed', left: 16, top: 16, width: '200px', zIndex: 10 }}>
            <div style={{ background: '#f8fafc', borderRadius: 8, padding: 12 }}>
              <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 8 }}>🏆 Leaderboard</div>
              <div style={{ display: 'grid', gap: 2, fontSize: 12 }}>
                {leaderboard.slice(0, 8).map((entry, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontWeight: i < 3 ? 600 : 400 }}>
                      {i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : `${i + 1}.`} {entry.name}
                    </span>
                    <span style={{ color: '#6b7280' }}>
                      {entry.score}/{entry.total}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        
        {/* Center - Main content */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ textAlign: 'center', maxWidth: 600 }}>
            <img src="./zebra-welcome.svg" alt="Zebra" style={{ width: 220, height: 'auto', marginBottom: 12 }} />
            <div style={{ fontSize: 30, fontWeight: 800, marginBottom: 10 }}>Zebra Stripes Math Challenge</div>
            
            <div style={{ fontSize: 16, color: '#374151', marginBottom: 20 }}>
              Welcome{playerName ? `, ${playerName}` : ''}! You're set for Grade {grade}.
              You will get 10 questions chosen at random from a pool of 50+ with a mix of easy, medium, and hard.
              Take your time and enjoy the puzzles.
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'center', gap: 8 }}>
              <button
                onClick={() => setStarted(true)}
                style={{ padding: '10px 16px', borderRadius: 8, border: 'none', background: '#16a34a', color: 'white', cursor: 'pointer' }}
              >
                Start quiz
              </button>
              <button
                onClick={() => { try { localStorage.removeItem('zebra_recent_ids') } catch {} }}
                style={{ padding: '10px 16px', borderRadius: 8, border: '1px solid #cbd5e1', background: 'white', color: '#0f172a', cursor: 'pointer' }}
              >
                Reset pool
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div style={{ maxWidth: 720, margin: '40px auto', padding: 16 }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <div style={{ fontSize: 22, fontWeight: 700 }}>Zebra Stripes Math Challenge</div>
        <div>
          Q {index + 1}/{total} • Score {score}
        </div>
      </header>

      <QuestionCard q={q} selected={selected} onSelect={setSelected} />

      <div style={{ marginTop: 16, display: 'flex', gap: 8 }}>
        {!submitted ? (
          <button
            onClick={submit}
            disabled={selected == null}
            style={{
              padding: '10px 14px',
              borderRadius: 8,
              border: 'none',
              background: selected == null ? '#ddd' : '#2563eb',
              color: 'white',
              cursor: selected == null ? 'not-allowed' : 'pointer',
            }}
          >
            Submit
          </button>
        ) : (
          <button
            onClick={next}
            style={{
              padding: '10px 14px',
              borderRadius: 8,
              border: 'none',
              background: '#16a34a',
              color: 'white',
              cursor: 'pointer',
            }}
          >
            {index + 1 < total ? 'Next' : 'Finish'}
          </button>
        )}
      </div>

      {submitted && (
        <div
          style={{
            marginTop: 16,
            padding: 12,
            borderRadius: 8,
            background: isCorrect ? '#ecfdf5' : '#fef2f2',
            border: `1px solid ${isCorrect ? '#10b981' : '#ef4444'}`,
          }}
        >
          <div style={{ fontWeight: 700, marginBottom: 6 }}>
            {isCorrect ? 'Correct!' : `Incorrect. Correct answer: ${String.fromCharCode(65 + q.answerIndex)}.`}
          </div>
          <div>{q.explanation}</div>
        </div>
      )}
    </div>
  )
}
