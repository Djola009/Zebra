import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import 'katex/dist/katex.min.css'

export default function QuestionCard({ q, selected, onSelect }) {
  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div style={{ fontSize: 18, fontWeight: 600 }}>
        <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
{q.prompt}
        </ReactMarkdown>
      </div>
      
      {/* Image if present */}
      {q.image && (
        <div style={{ display: 'flex', justifyContent: 'center', margin: '16px 0' }}>
          <img 
            src={q.image} 
            alt="Diagram" 
            style={{ 
              maxWidth: '100%', 
              height: 'auto', 
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }} 
          />
        </div>
      )}
      
      <div style={{ display: "grid", gap: 8 }}>
        {q.choices.map((c, idx) => (
          <button
            key={idx}
            onClick={() => onSelect(idx)}
            style={{
              textAlign: "left",
              padding: "10px 12px",
              borderRadius: 8,
              border: "1px solid #ccc",
              background: selected === idx ? "#eef6ff" : "white",
              cursor: "pointer",
            }}
          >
            <span style={{fontWeight:600, marginRight:6}}>{String.fromCharCode(65 + idx)}.</span>
            <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>
{typeof c === 'string' ? c : String(c)}
            </ReactMarkdown>
          </button>
        ))}
      </div>
    </div>
  );
}


