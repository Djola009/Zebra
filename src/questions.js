// Base handcrafted questions
export const QUESTIONS = [
  // Handcrafted 9th-grade style starters
  {
    id: 1,
    grade: 9,
    topic: "algebra-linear",
    difficulty: "medium",
    prompt: "Solve for x: 3x − 7 = 2x + 11",
    choices: ["x = 14", "x = 18", "x = −18", "x = −14", "x = 4"],
    answerIndex: 1,
    explanation: "3x − 7 = 2x + 11 ⇒ x − 7 = 11 ⇒ x = 18.",
  },
  {
    id: 2,
    grade: 9,
    topic: "algebra-quadratic",
    difficulty: "hard",
    prompt: "Find the roots of x² − 5x + 6 = 0",
    choices: ["x = 2 or 3", "x = −2 or −3", "x = 1 or 6", "x = 0 or 6", "No real roots"],
    answerIndex: 0,
    explanation: "(x − 2)(x − 3) = 0 ⇒ x = 2, 3.",
  },
  {
    id: 3,
    grade: 9,
    topic: "geometry-pythagoras",
    difficulty: "medium",
    prompt: "A right triangle has legs 9 cm and 12 cm. What is the hypotenuse?",
    choices: ["15 cm", "13 cm", "21 cm", "√225 cm", "10 cm"],
    answerIndex: 0,
    explanation: "c = √(9²+12²) = √(81+144) = √225 = 15 cm.",
  },
  {
    id: 4,
    grade: 9,
    topic: "geometry-slope",
    difficulty: "medium",
    prompt: "What is the slope of the line through (−2, 5) and (4, −1)?",
    choices: ["−1", "1", "−6/6", "−1/1", "−1 is correct"],
    answerIndex: 0,
    explanation: "m = (−1 − 5)/(4 − (−2)) = −6/6 = −1.",
  },
  {
    id: 5,
    grade: 9,
    topic: "percent-growth",
    difficulty: "medium",
    prompt: "A price increases by 10% from €50, then decreases by 10%. What is the final price?",
    choices: ["€50", "€49.50", "€55", "€45", "€48"],
    answerIndex: 1,
    explanation: "50×1.10=55; 55×0.90=49.5.",
  },
  {
    id: 6,
    grade: 9,
    topic: "probability-dice",
    difficulty: "medium",
    prompt: "Two fair dice are rolled. What is P(sum = 7)?",
    choices: ["1/12", "1/9", "1/6", "1/8", "5/36"],
    answerIndex: 2,
    explanation: "Favorable: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) ⇒ 6/36 = 1/6.",
  },
  {
    id: 7,
    grade: 9,
    topic: "algebra-systems",
    difficulty: "hard",
    prompt: "Solve the system: x + y = 7 and x − y = 1",
    choices: ["(4,3)", "(3,4)", "(5,2)", "(2,5)", "(1,6)"] ,
    answerIndex: 0,
    explanation: "Add equations ⇒ 2x = 8 ⇒ x = 4; then y = 3.",
  },
  {
    id: 8,
    grade: 9,
    topic: "sequences-arithmetic",
    difficulty: "medium",
    prompt: "In an arithmetic sequence a1 = 4, d = 3. Find a10.",
    choices: ["31", "34", "27", "28", "37"],
    answerIndex: 0,
    explanation: "a10 = 4 + 9×3 = 31.",
  },
  {
    id: 9,
    grade: 9,
    topic: "algebra-inequality",
    difficulty: "medium",
    prompt: "Solve: 5(2x − 1) ≤ 3x + 14",
    choices: ["x ≤ 3", "x ≥ 3", "x ≤ 2", "x ≥ 2", "x ≤ 4"],
    answerIndex: 0,
    explanation: "10x − 5 ≤ 3x + 14 ⇒ 7x ≤ 19 ⇒ x ≤ 19/7 ≈ 2.71 ⇒ closest bound x ≤ 3.",
  },
  {
    id: 10,
    grade: 9,
    topic: "geometry-similarity",
    difficulty: "hard",
    prompt: "Two similar triangles have side ratio 3:5. If the smaller perimeter is 24 cm, what is the larger perimeter?",
    choices: ["32 cm", "35 cm", "40 cm", "50 cm", "60 cm"],
    answerIndex: 2,
    explanation: "Scale factor 5/3 ⇒ 24×(5/3) = 40 cm.",
  },
  
  // Visual questions with diagrams
  {
    id: 11,
    grade: 9,
    topic: "geometry-pythagoras",
    difficulty: "medium",
    prompt: "Using the diagram below, find the length of the hypotenuse:",
    image: "./triangle-diagram.svg",
    choices: ["15 cm", "13 cm", "21 cm", "√225 cm", "10 cm"],
    answerIndex: 0,
    explanation: "Using Pythagoras: c = √(9²+12²) = √(81+144) = √225 = 15 cm.",
  },
  {
    id: 12,
    grade: 9,
    topic: "geometry-circle",
    difficulty: "easy",
    prompt: "What is the area of the circle shown below?",
    image: "./circle-diagram.svg",
    choices: ["49π cm²", "14π cm²", "28π cm²", "7π cm²", "154 cm²"],
    answerIndex: 0,
    explanation: "Area = πr² = π × 7² = 49π cm².",
  },
  {
    id: 13,
    grade: 9,
    topic: "geometry-rectangle",
    difficulty: "easy",
    prompt: "Calculate the area of the rectangle shown:",
    image: "./rectangle-diagram.svg",
    choices: ["96 cm²", "40 cm²", "20 cm²", "48 cm²", "80 cm²"],
    answerIndex: 0,
    explanation: "Area = length × width = 12 × 8 = 96 cm².",
  },
  {
    id: 14,
    grade: 9,
    topic: "geometry-slope",
    difficulty: "medium",
    prompt: "Using the graph below, what is the slope of the line?",
    image: "./graph-diagram.svg",
    choices: ["−1", "1", "−6/6", "−1/1", "−1 is correct"],
    answerIndex: 0,
    explanation: "m = (−1 − 5)/(4 − (−2)) = −6/6 = −1.",
  },
];

// Generate simple arithmetic/logic questions to reach a pool of ~50
function generateMoreQuestions(startId, neededCount) {
  const result = []
  let id = startId

  for (let i = 0; i < neededCount; i++) {
    const variant = i % 6
    if (variant === 0) {
      // Linear equation ax + b = c
      const a = 2 + (i % 5)
      const b = 3 + (i % 7)
      const x = 4 + (i % 6)
      const c = a * x + b
      const prompt = `Solve for x: ${a}x + ${b} = ${c}`
      const correct = x
      const choices = [correct - 2, correct - 1, correct, correct + 1, correct + 2]
      result.push({ id: id++, grade: 9, topic: 'algebra-linear', difficulty: 'medium', prompt, choices: choices.map(String), answerIndex: 2, explanation: `${a}x = ${c} − ${b} = ${c - b} ⇒ x = ${(c - b)}/${a} = ${correct}.` })
    } else if (variant === 1) {
      // Quadratic with integer roots (x-p)(x-q)=0
      const p = 2 + (i % 5)
      const q = 3 + ((i + 2) % 5)
      const bq = -(p + q)
      const c = p * q
      const prompt = `Find the roots of x² ${bq >= 0 ? '+ ' + bq : '− ' + Math.abs(bq)}x ${c >= 0 ? '+ ' + c : '− ' + Math.abs(c)} = 0`
      const options = [
        `x = ${p} or ${q}`,
        `x = ${-p} or ${-q}`,
        `x = ${p} or ${-q}`,
        `x = ${-p} or ${q}`,
        `No real roots`,
      ]
      result.push({ id: id++, grade: 9, topic: 'algebra-quadratic', difficulty: 'hard', prompt, choices: options, answerIndex: 0, explanation: `(x − ${p})(x − ${q}) = 0.` })
    } else if (variant === 2) {
      // Pythagoras missing leg
      const a = 8 + (i % 5)
      const b = 15 + (i % 4)
      const c = Math.sqrt(a * a + b * b)
      const rounded = Math.round(c)
      const prompt = `A right triangle has legs ${a} and ${b}. What is the hypotenuse (to nearest integer)?`
      const choices = [rounded - 2, rounded - 1, rounded, rounded + 1, rounded + 2]
      result.push({ id: id++, grade: 9, topic: 'geometry-pythagoras', difficulty: 'medium', prompt, choices: choices.map((n) => `${n}`), answerIndex: 2, explanation: `c = √(${a}² + ${b}²) ≈ ${c.toFixed(2)}.` })
    } else if (variant === 3) {
      // Probability: dice sums
      const target = 5 + (i % 7)
      const favorable = [
        [1, target - 1],
        [2, target - 2],
        [3, target - 3],
        [4, target - 4],
        [5, target - 5],
        [6, target - 6],
      ].filter(([x, y]) => x >= 1 && x <= 6 && y >= 1 && y <= 6).length
      const prob = `${favorable}/36`
      const prompt = `Two dice: P(sum = ${target}) = ?`
      const choices = [`${Math.max(favorable - 2, 0)}/36`, `${Math.max(favorable - 1, 0)}/36`, `${favorable}/36`, `${Math.min(favorable + 1, 36)}/36`, `${Math.min(favorable + 2, 36)}/36`]
      result.push({ id: id++, grade: 9, topic: 'probability-dice', difficulty: 'medium', prompt, choices, answerIndex: 2, explanation: `${favorable} outcomes out of 36.` })
    } else if (variant === 4) {
      // Slope from two points
      const x1 = i
      const y1 = 2 * i - 1
      const x2 = i + 3
      const y2 = 2 * (i + 3) - 1
      const m = (y2 - y1) / (x2 - x1)
      const prompt = `Slope of line through (${x1}, ${y1}) and (${x2}, ${y2})` 
      const choices = [m - 2, m - 1, m, m + 1, m + 2].map(String)
      result.push({ id: id++, grade: 9, topic: 'geometry-slope', difficulty: 'easy', prompt, choices, answerIndex: 2, explanation: `m = (Δy)/(Δx) = ${y2 - y1}/${x2 - x1} = ${m}.` })
    } else {
      // Arithmetic sequence nth term
      const a1 = 5 + (i % 6)
      const d = 2 + (i % 4)
      const n = 10 + (i % 5)
      const an = a1 + (n - 1) * d
      const prompt = `Arithmetic sequence a1=${a1}, d=${d}. Find a${n}.`
      const choices = [an - d, an - 1, an, an + 1, an + d].map(String)
      result.push({ id: id++, grade: 9, topic: 'sequences-arithmetic', difficulty: 'medium', prompt, choices, answerIndex: 2, explanation: `a_n = a1 + (n−1)d = ${an}.` })
    }
  }
  return result
}

// Ensure pool has at least 50 items
if (QUESTIONS.length < 50) {
  const toAdd = 50 - QUESTIONS.length;
  const more = generateMoreQuestions(QUESTIONS.length + 1, toAdd);
  QUESTIONS.push(...more);
}

// Random sampler without replacement
export function getRandomQuestions(count, excludeIds = [], gradeFilter) {
  // Stratified sampling: aim for 4 easy, 4 medium, 2 hard (scaled to count)
  const exclude = new Set(excludeIds)
  const pool = { easy: [], medium: [], hard: [] };
  for (const q of QUESTIONS) {
    if (exclude.has(q.id)) continue
    if (gradeFilter && q.grade && q.grade !== gradeFilter) continue
    const d = q.difficulty || 'medium';
    pool[d] ||= [];
    pool[d].push(q);
  }

  const ratio = { easy: 0.4, medium: 0.4, hard: 0.2 };
  const target = {
    easy: Math.round(count * ratio.easy),
    medium: Math.round(count * ratio.medium),
    hard: count - (Math.round(count * ratio.easy) + Math.round(count * ratio.medium)),
  };

  function draw(arr, n) {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy.slice(0, Math.min(n, copy.length));
  }

  let picked = [
    ...draw(pool.easy, target.easy),
    ...draw(pool.medium, target.medium),
    ...draw(pool.hard, target.hard),
  ];

  // If any bucket fell short, top up from remaining questions regardless of difficulty
  if (picked.length < count) {
    const remaining = QUESTIONS.filter((q) => !picked.includes(q) && !exclude.has(q.id) && (!gradeFilter || !q.grade || q.grade === gradeFilter));
    picked = [...picked, ...draw(remaining, count - picked.length)];
  }

  return picked;
}


// ---------- Per-grade expansion (7–12) ----------
function generateForGrade(grade, startId, count) {
  const out = []
  let id = startId
  function push(obj) { out.push({ grade, ...obj, id: id++ }) }

  for (let i = 0; i < count; i++) {
    const v = (i + grade) % 6
    if (grade <= 8) {
      if (v === 0) {
        const a = 2 + (i % 7), b = 1 + (i % 9), x = 3 + (i % 8); const c = a*x + b
        push({ topic:'algebra-linear', difficulty:'medium', prompt:`Solve for x: ${a}x + ${b} = ${c}`, choices:[String(x-2),String(x-1),String(x),String(x+1),String(x+2)], answerIndex:2, explanation:`${a}x=${c-b} ⇒ x=${(c-b)}/${a}=${x}.` })
      } else if (v === 1) {
        const p = 10 + (i % 20), inc = 5 + (i % 10); const price = (p*(1+inc/100)).toFixed(2)
        push({ topic:'percent', difficulty:'easy', prompt:`Increase €${p} by ${inc}%`, choices:[`€${(p*(1+(inc-2)/100)).toFixed(2)}`,`€${(p*(1+(inc-1)/100)).toFixed(2)}`,`€${price}`,`€${(p*(1+(inc+1)/100)).toFixed(2)}`,`€${(p*(1+(inc+2)/100)).toFixed(2)}`], answerIndex:2, explanation:`€${p}·(1+${inc}/100)=€${price}.` })
      } else if (v === 2) {
        const a = 6 + (i % 7), b = 4 + (i % 6); const area = a*b
        push({ topic:'geometry-area', difficulty:'easy', prompt:`Rectangle ${a} cm × ${b} cm: area?`, choices:[`${area-a}`,`${area-2}`,`${area}`,`${area+2}`,`${area+a}`], answerIndex:2, explanation:`${a}×${b}=${area} cm².` })
      } else if (v === 3) {
        const x1=i, y1=2*i+1, x2=i+3, y2=2*(i+3)+1; const m=(y2-y1)/(x2-x1)
        push({ topic:'geometry-slope', difficulty:'medium', prompt:`Slope through (${x1}, ${y1}) and (${x2}, ${y2})`, choices:[String(m-2),String(m-1),String(m),String(m+1),String(m+2)], answerIndex:2, explanation:`m=Δy/Δx=${y2-y1}/${x2-x1}=${m}.` })
      } else if (v === 4) {
        const a1=3+(i%7), d=2+(i%5), n=10+(i%6), an=a1+(n-1)*d
        push({ topic:'sequences-arithmetic', difficulty:'medium', prompt:`Arithmetic: a1=${a1}, d=${d}. Find a${n}.`, choices:[String(an-d),String(an-1),String(an),String(an+1),String(an+d)], answerIndex:2, explanation:`a_n=a1+(n−1)d=${an}.` })
      } else {
        const t=5+(i%7); const fav=[[1,t-1],[2,t-2],[3,t-3],[4,t-4],[5,t-5],[6,t-6]].filter(([x,y])=>x>=1&&x<=6&&y>=1&&y<=6).length
        push({ topic:'probability-dice', difficulty:'medium', prompt:`Two dice: P(sum=${t})?`, choices:[`${Math.max(fav-2,0)}/36`,`${Math.max(fav-1,0)}/36`,`${fav}/36`,`${Math.min(fav+1,36)}/36`,`${Math.min(fav+2,36)}/36`], answerIndex:2, explanation:`${fav}/36.` })
      }
    } else if (grade <= 10) {
      if (v === 0) {
        const p=2+(i%7), q=3+((i+2)%7); const b=-(p+q), c=p*q
        push({ topic:'algebra-quadratic', difficulty:'hard', prompt:`Roots of x² ${b>=0?'+ '+b:'− '+Math.abs(b)}x ${c>=0?'+ '+c:'− '+Math.abs(c)} = 0`, choices:[`x = ${p} or ${q}`,`x = ${-p} or ${-q}`,`x = ${p} or ${-q}`,`x = ${-p} or ${q}`,`No real roots`], answerIndex:0, explanation:`(x−${p})(x−${q})=0.` })
      } else if (v === 1) {
        const a=9+(i%7), b=12+(i%6); const c=Math.sqrt(a*a+b*b).toFixed(2)
        push({ topic:'geometry-pythagoras', difficulty:'medium', prompt:`Right triangle legs ${a}, ${b}. Hypotenuse (2 d.p.)?`, choices:[String((+c-0.2).toFixed(2)),String((+c-0.1).toFixed(2)),String(c),String((+c+0.1).toFixed(2)),String((+c+0.2).toFixed(2))], answerIndex:2, explanation:`c=√(${a}²+${b}²)≈${c}.` })
      } else if (v === 2) {
        const r=3+(i%8); const area=(Math.PI*r*r).toFixed(2)
        push({ topic:'geometry-circle', difficulty:'medium', prompt:`Circle radius ${r} cm. Area (2 d.p.)?`, choices:[String((+area-1).toFixed(2)),String((+area-0.5).toFixed(2)),String(area),String((+area+0.5).toFixed(2)),String((+area+1).toFixed(2))], answerIndex:2, explanation:`πr²≈${area} cm².` })
      } else if (v === 3) {
        const a1=2+(i%6), r=2+(i%3), n=6+(i%5); const an=a1*Math.pow(r,n-1)
        push({ topic:'sequences-geometric', difficulty:'hard', prompt:`Geometric: a1=${a1}, r=${r}. Find a${n}.`, choices:[String(Math.round(an/r)),String(Math.round(an-1)),String(Math.round(an)),String(Math.round(an+1)),String(Math.round(an*r))], answerIndex:2, explanation:`a_n=a1·r^{n−1}≈${Math.round(an)}.` })
      } else if (v === 4) {
        const per=30+(i%10); const big=Math.round(per*(5/3))
        push({ topic:'geometry-similarity', difficulty:'medium', prompt:`Similar triangles 3:5. Small perimeter ${per}. Large perimeter?`, choices:[String(per+5),String(per+8),String(big),String(per+12),String(per+15)], answerIndex:2, explanation:`×(5/3) ⇒ ${big}.` })
      } else {
        const m=(i%5)-2, b=1+(i%9); const x=4, y=m*x+b
        push({ topic:'functions-linear', difficulty:'medium', prompt:`For y=${m}x+${b}, find y when x=${x}.`, choices:[String(y-2),String(y-1),String(y),String(y+1),String(y+2)], answerIndex:2, explanation:`y=${m}·${x}+${b}=${y}.` })
      }
    } else {
      if (v === 0) {
        const a=2+(i%3), n=3+(i%5); const val=Math.pow(a,n)
        push({ topic:'exponentials', difficulty:'medium', prompt:`Compute ${a}^{${n}}`, choices:[String(val/a),String(val-1),String(val),String(val+1),String(val*a)], answerIndex:2, explanation:`${a}^{${n}}=${val}.` })
      } else if (v === 1) {
        const n=5+(i%5), k=2+(i%3); function C(n,k){let r=1;for(let j=1;j<=k;j++){r=r*(n-j+1)/j}return Math.round(r)}; const val=C(n,k)
        push({ topic:'combinatorics', difficulty:'hard', prompt:`Number of combinations C(${n}, ${k})?`, choices:[String(val-2),String(val-1),String(val),String(val+1),String(val+2)], answerIndex:2, explanation:`C(n,k)=n!/(k!(n−k)!).` })
      } else if (v === 2) {
        const opp=6+(i%5), hyp=10+(i%6); const sin=(opp/hyp).toFixed(2)
        push({ topic:'trigonometry', difficulty:'medium', prompt:`Right triangle: opposite=${opp}, hypotenuse=${hyp}. sinθ? (2 d.p.)`, choices:[String((+sin-0.1).toFixed(2)),String((+sin-0.05).toFixed(2)),String(sin),String((+sin+0.05).toFixed(2)),String((+sin+0.1).toFixed(2))], answerIndex:2, explanation:`sinθ=opp/hyp≈${sin}.` })
      } else if (v === 3) {
        const a1=100+(i%20), r=1+(i%5)/10, n=3+(i%4); const val=(a1*Math.pow(r,n)).toFixed(2)
        push({ topic:'compound-growth', difficulty:'medium', prompt:`Start ${a1}, grow by ×${r} for ${n} years. Value?`, choices:[String((+val-1).toFixed(2)),String(val),String((+val+1).toFixed(2)),String((+val+2).toFixed(2)),String((+val+3).toFixed(2))], answerIndex:1, explanation:`${a1}·${r}^{${n}}≈${val}.` })
      } else if (v === 4) {
        const a=12+(i%20), b=18+(i%20); function gcd(x,y){while(y){[x,y]=[y,x%y]} return x}; const g=gcd(a,b)
        push({ topic:'number-theory', difficulty:'medium', prompt:`Compute gcd(${a}, ${b}).`, choices:[String(g-1),String(g),String(g+1),String(g+2),String(g+3)], answerIndex:1, explanation:`Greatest common divisor.` })
      } else {
        const base=2+(i%4), s=1+(i%5)
        push({ topic:'transformations', difficulty:'hard', prompt:`f(x)=${base}x+${s}. What is f(x−1)?`, choices:[`${base}(x−1)+${s}`,`${base}x+${s-base}`,`${base}x+${s+base}`,`${base}(x+1)+${s}`,`${base}x+${s}`], answerIndex:0, explanation:`Substitute x→x−1.` })
      }
    }
  }
  return out
}

export function ensureGradePool(grade) {
  const existing = QUESTIONS.filter(q => q.grade === grade)
  if (existing.length >= 100) return
  const maxId = QUESTIONS.length ? Math.max(...QUESTIONS.map(q => q.id)) : 0
  const more = generateForGrade(grade, maxId + 1, 100 - existing.length)
  QUESTIONS.push(...more)
}


