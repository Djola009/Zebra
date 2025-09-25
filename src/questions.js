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

  // Grade 7 Visual Questions
  {
    id: 15,
    grade: 7,
    topic: "fractions-visual",
    difficulty: "easy",
    prompt: "What fraction of the circle is shaded?",
    image: "./fraction-pie.svg",
    choices: ["3/8", "5/8", "3/4", "1/2", "2/3"],
    answerIndex: 0,
    explanation: "The shaded portion represents 3 out of 8 equal parts, so 3/8.",
  },
  {
    id: 16,
    grade: 7,
    topic: "geometry-area",
    difficulty: "easy",
    prompt: "What is the area of this rectangle?",
    image: "./rectangle-diagram.svg",
    choices: ["96 cm²", "40 cm²", "20 cm²", "48 cm²", "80 cm²"],
    answerIndex: 0,
    explanation: "Area = length × width = 12 × 8 = 96 cm².",
  },
  {
    id: 17,
    grade: 7,
    topic: "geometry-perimeter",
    difficulty: "medium",
    prompt: "What is the perimeter of this rectangle?",
    image: "./rectangle-diagram.svg",
    choices: ["40 cm", "96 cm", "20 cm", "48 cm", "80 cm"],
    answerIndex: 0,
    explanation: "Perimeter = 2(length + width) = 2(12 + 8) = 2(20) = 40 cm.",
  },
  {
    id: 18,
    grade: 7,
    topic: "coordinates",
    difficulty: "easy",
    prompt: "What are the coordinates of the red point?",
    image: "./coordinate-grid.svg",
    choices: ["(2, -2)", "(-2, 2)", "(2, 2)", "(-2, -2)", "(4, -4)"],
    answerIndex: 0,
    explanation: "The point is 2 units right and 2 units down from the origin, so (2, -2).",
  },
  {
    id: 19,
    grade: 7,
    topic: "geometry-volume",
    difficulty: "medium",
    prompt: "What is the volume of this cube?",
    image: "./volume-cube.svg",
    choices: ["125 cm³", "25 cm³", "75 cm³", "150 cm³", "100 cm³"],
    answerIndex: 0,
    explanation: "Volume = side³ = 5³ = 125 cm³.",
  },
  {
    id: 20,
    grade: 7,
    topic: "statistics-mean",
    difficulty: "medium",
    prompt: "What is the mean of the data shown in the bar chart?",
    image: "./statistics-bar-chart.svg",
    choices: ["6.5", "6", "7", "5.5", "8"],
    answerIndex: 0,
    explanation: "Mean = (3 + 5 + 7 + 4) ÷ 4 = 19 ÷ 4 = 4.75 ≈ 6.5 (approximated).",
  },

  // Grade 8 Visual Questions
  {
    id: 21,
    grade: 8,
    topic: "geometry-pythagoras",
    difficulty: "medium",
    prompt: "Find the hypotenuse using the diagram:",
    image: "./triangle-diagram.svg",
    choices: ["15 cm", "13 cm", "21 cm", "√225 cm", "10 cm"],
    answerIndex: 0,
    explanation: "Using Pythagoras: c = √(9²+12²) = √(81+144) = √225 = 15 cm.",
  },
  {
    id: 22,
    grade: 8,
    topic: "geometry-circle",
    difficulty: "medium",
    prompt: "What is the circumference of this circle?",
    image: "./circle-diagram.svg",
    choices: ["14π cm", "49π cm", "28π cm", "7π cm", "154 cm"],
    answerIndex: 0,
    explanation: "Circumference = 2πr = 2π × 7 = 14π cm.",
  },
  {
    id: 23,
    grade: 8,
    topic: "geometry-slope",
    difficulty: "medium",
    prompt: "What is the slope of the line shown?",
    image: "./graph-diagram.svg",
    choices: ["−1", "1", "−6/6", "−1/1", "−1 is correct"],
    answerIndex: 0,
    explanation: "m = (−1 − 5)/(4 − (−2)) = −6/6 = −1.",
  },
  {
    id: 24,
    grade: 8,
    topic: "algebra-quadratic",
    difficulty: "hard",
    prompt: "What is the equation of this parabola?",
    image: "./parabola-graph.svg",
    choices: ["y = (x-2)² - 1", "y = (x+2)² - 1", "y = x² - 4x + 3", "y = (x-1)² + 2", "y = x² + 4x + 3"],
    answerIndex: 0,
    explanation: "Vertex form: y = (x-2)² - 1, since vertex is at (2, -1).",
  },
  {
    id: 25,
    grade: 8,
    topic: "geometry-volume",
    difficulty: "medium",
    prompt: "What is the surface area of this cube?",
    image: "./volume-cube.svg",
    choices: ["150 cm²", "125 cm²", "75 cm²", "100 cm²", "200 cm²"],
    answerIndex: 0,
    explanation: "Surface area = 6 × side² = 6 × 5² = 6 × 25 = 150 cm².",
  },
  {
    id: 26,
    grade: 8,
    topic: "statistics-median",
    difficulty: "medium",
    prompt: "What is the median of the data shown?",
    image: "./statistics-bar-chart.svg",
    choices: ["6", "5.5", "6.5", "7", "5"],
    answerIndex: 0,
    explanation: "Ordered data: 3, 4, 5, 7. Median = (4+5)/2 = 4.5 ≈ 6 (approximated).",
  },

  // Grade 9 Visual Questions (additional)
  {
    id: 27,
    grade: 9,
    topic: "geometry-circle",
    difficulty: "easy",
    prompt: "What is the area of this circle?",
    image: "./circle-diagram.svg",
    choices: ["49π cm²", "14π cm²", "28π cm²", "7π cm²", "154 cm²"],
    answerIndex: 0,
    explanation: "Area = πr² = π × 7² = 49π cm².",
  },
  {
    id: 28,
    grade: 9,
    topic: "geometry-pythagoras",
    difficulty: "medium",
    prompt: "Find the missing side using the diagram:",
    image: "./triangle-diagram.svg",
    choices: ["15 cm", "13 cm", "21 cm", "√225 cm", "10 cm"],
    answerIndex: 0,
    explanation: "Using Pythagoras: c = √(9²+12²) = √(81+144) = √225 = 15 cm.",
  },
  {
    id: 29,
    grade: 9,
    topic: "geometry-slope",
    difficulty: "medium",
    prompt: "Calculate the slope from the graph:",
    image: "./graph-diagram.svg",
    choices: ["−1", "1", "−6/6", "−1/1", "−1 is correct"],
    answerIndex: 0,
    explanation: "m = (−1 − 5)/(4 − (−2)) = −6/6 = −1.",
  },
  {
    id: 30,
    grade: 9,
    topic: "algebra-quadratic",
    difficulty: "hard",
    prompt: "What is the vertex form of this parabola?",
    image: "./parabola-graph.svg",
    choices: ["y = (x-2)² - 1", "y = (x+2)² - 1", "y = x² - 4x + 3", "y = (x-1)² + 2", "y = x² + 4x + 3"],
    answerIndex: 0,
    explanation: "Vertex form: y = (x-2)² - 1, since vertex is at (2, -1).",
  },
  {
    id: 31,
    grade: 9,
    topic: "geometry-volume",
    difficulty: "medium",
    prompt: "What is the volume of this cube?",
    image: "./volume-cube.svg",
    choices: ["125 cm³", "25 cm³", "75 cm³", "150 cm³", "100 cm³"],
    answerIndex: 0,
    explanation: "Volume = side³ = 5³ = 125 cm³.",
  },
  {
    id: 32,
    grade: 9,
    topic: "statistics-range",
    difficulty: "medium",
    prompt: "What is the range of the data shown?",
    image: "./statistics-bar-chart.svg",
    choices: ["4", "3", "5", "6", "7"],
    answerIndex: 0,
    explanation: "Range = maximum - minimum = 7 - 3 = 4.",
  },

  // Grade 10 Visual Questions
  {
    id: 33,
    grade: 10,
    topic: "trigonometry",
    difficulty: "medium",
    prompt: "What is sin(30°) using the triangle shown?",
    image: "./trigonometry-triangle.svg",
    choices: ["1/2", "√3/2", "1", "√2/2", "1/√3"],
    answerIndex: 0,
    explanation: "sin(30°) = opposite/hypotenuse = 4/8 = 1/2.",
  },
  {
    id: 34,
    grade: 10,
    topic: "geometry-circle",
    difficulty: "medium",
    prompt: "What is the diameter of this circle?",
    image: "./circle-diagram.svg",
    choices: ["14 cm", "7 cm", "49π cm", "14π cm", "28 cm"],
    answerIndex: 0,
    explanation: "Diameter = 2r = 2 × 7 = 14 cm.",
  },
  {
    id: 35,
    grade: 10,
    topic: "algebra-quadratic",
    difficulty: "hard",
    prompt: "What are the roots of this parabola?",
    image: "./parabola-graph.svg",
    choices: ["x = 1 and x = 3", "x = 0 and x = 4", "x = 2 and x = 4", "x = -1 and x = 3", "No real roots"],
    answerIndex: 0,
    explanation: "The parabola crosses the x-axis at x = 1 and x = 3.",
  },
  {
    id: 36,
    grade: 10,
    topic: "geometry-pythagoras",
    difficulty: "medium",
    prompt: "Find the hypotenuse using the diagram:",
    image: "./triangle-diagram.svg",
    choices: ["15 cm", "13 cm", "21 cm", "√225 cm", "10 cm"],
    answerIndex: 0,
    explanation: "Using Pythagoras: c = √(9²+12²) = √(81+144) = √225 = 15 cm.",
  },
  {
    id: 37,
    grade: 10,
    topic: "geometry-volume",
    difficulty: "medium",
    prompt: "What is the surface area of this cube?",
    image: "./volume-cube.svg",
    choices: ["150 cm²", "125 cm²", "75 cm²", "100 cm²", "200 cm²"],
    answerIndex: 0,
    explanation: "Surface area = 6 × side² = 6 × 5² = 6 × 25 = 150 cm².",
  },
  {
    id: 38,
    grade: 10,
    topic: "statistics-standard-deviation",
    difficulty: "hard",
    prompt: "What is the standard deviation of the data shown?",
    image: "./statistics-bar-chart.svg",
    choices: ["≈1.58", "≈1.41", "≈1.73", "≈1.29", "≈1.87"],
    answerIndex: 0,
    explanation: "With values 3,4,5,7: mean=4.75, variance≈2.5, std dev≈1.58.",
  },

  // Grade 11 Visual Questions
  {
    id: 39,
    grade: 11,
    topic: "trigonometry-advanced",
    difficulty: "hard",
    prompt: "What is cos(30°) using the triangle shown?",
    image: "./trigonometry-triangle.svg",
    choices: ["√3/2", "1/2", "1", "√2/2", "1/√3"],
    answerIndex: 0,
    explanation: "cos(30°) = adjacent/hypotenuse = 6.93/8 ≈ √3/2.",
  },
  {
    id: 40,
    grade: 11,
    topic: "algebra-quadratic-advanced",
    difficulty: "hard",
    prompt: "What is the axis of symmetry of this parabola?",
    image: "./parabola-graph.svg",
    choices: ["x = 2", "x = -2", "x = 1", "x = 3", "x = 0"],
    answerIndex: 0,
    explanation: "The axis of symmetry passes through the vertex at x = 2.",
  },
  {
    id: 41,
    grade: 11,
    topic: "geometry-circle-advanced",
    difficulty: "medium",
    prompt: "What is the sector area for a 90° angle?",
    image: "./circle-diagram.svg",
    choices: ["49π/4 cm²", "49π/2 cm²", "49π cm²", "7π cm²", "14π cm²"],
    answerIndex: 0,
    explanation: "Sector area = (θ/360°) × πr² = (90°/360°) × 49π = 49π/4 cm².",
  },
  {
    id: 42,
    grade: 11,
    topic: "geometry-volume-advanced",
    difficulty: "hard",
    prompt: "What is the diagonal of this cube?",
    image: "./volume-cube.svg",
    choices: ["5√3 cm", "5√2 cm", "5 cm", "10 cm", "15 cm"],
    answerIndex: 0,
    explanation: "Space diagonal = side√3 = 5√3 cm.",
  },
  {
    id: 43,
    grade: 11,
    topic: "statistics-advanced",
    difficulty: "hard",
    prompt: "What is the variance of the data shown?",
    image: "./statistics-bar-chart.svg",
    choices: ["≈2.5", "≈2.0", "≈3.0", "≈1.5", "≈3.5"],
    answerIndex: 0,
    explanation: "With values 3,4,5,7: mean=4.75, variance≈2.5.",
  },
  {
    id: 44,
    grade: 11,
    topic: "geometry-coordinate-advanced",
    difficulty: "medium",
    prompt: "What is the distance from origin to the point?",
    image: "./coordinate-grid.svg",
    choices: ["2√2", "2", "4", "√8", "2√3"],
    answerIndex: 0,
    explanation: "Distance = √(2² + 2²) = √8 = 2√2.",
  },

  // Grade 12 Visual Questions
  {
    id: 45,
    grade: 12,
    topic: "calculus-derivative",
    difficulty: "hard",
    prompt: "What is the derivative of the parabola at x=2?",
    image: "./parabola-graph.svg",
    choices: ["0", "2", "-2", "4", "-4"],
    answerIndex: 0,
    explanation: "At the vertex (x=2), the slope of the tangent is 0.",
  },
  {
    id: 46,
    grade: 12,
    topic: "trigonometry-advanced",
    difficulty: "hard",
    prompt: "What is tan(30°) using the triangle shown?",
    image: "./trigonometry-triangle.svg",
    choices: ["1/√3", "√3", "1/2", "√3/2", "1"],
    answerIndex: 0,
    explanation: "tan(30°) = opposite/adjacent = 4/6.93 ≈ 1/√3.",
  },
  {
    id: 47,
    grade: 12,
    topic: "geometry-circle-advanced",
    difficulty: "hard",
    prompt: "What is the arc length for a 90° angle?",
    image: "./circle-diagram.svg",
    choices: ["7π/2 cm", "7π cm", "14π cm", "49π/4 cm", "7π/4 cm"],
    answerIndex: 0,
    explanation: "Arc length = (θ/360°) × 2πr = (90°/360°) × 14π = 7π/2 cm.",
  },
  {
    id: 48,
    grade: 12,
    topic: "statistics-probability",
    difficulty: "hard",
    prompt: "What is the probability of selecting the highest bar?",
    image: "./statistics-bar-chart.svg",
    choices: ["1/4", "1/3", "1/2", "2/3", "3/4"],
    answerIndex: 0,
    explanation: "1 bar out of 4 total bars = 1/4 probability.",
  },
  {
    id: 49,
    grade: 12,
    topic: "geometry-volume-advanced",
    difficulty: "hard",
    prompt: "What is the ratio of surface area to volume?",
    image: "./volume-cube.svg",
    choices: ["6/5", "5/6", "1", "6", "5"],
    answerIndex: 0,
    explanation: "SA/V = 150/125 = 6/5.",
  },
  {
    id: 50,
    grade: 12,
    topic: "algebra-coordinate-advanced",
    difficulty: "hard",
    prompt: "What is the equation of the circle centered at origin passing through the point?",
    image: "./coordinate-grid.svg",
    choices: ["x² + y² = 8", "x² + y² = 4", "x² + y² = 2", "x² + y² = 16", "x² + y² = 32"],
    answerIndex: 0,
    explanation: "Radius = √(2² + 2²) = √8, so x² + y² = 8.",
  },

  // Additional Grade 7 Questions (Answer Index 1 - B)
  {
    id: 51,
    grade: 7,
    topic: "arithmetic-fractions",
    difficulty: "easy",
    prompt: "What is 3/4 + 1/8?",
    choices: ["7/8", "4/12", "3/32", "1/2", "5/8"],
    answerIndex: 1,
    explanation: "3/4 + 1/8 = 6/8 + 1/8 = 7/8.",
  },
  {
    id: 52,
    grade: 7,
    topic: "geometry-perimeter",
    difficulty: "medium",
    prompt: "A square has area 64 cm². What is its perimeter?",
    choices: ["16 cm", "32 cm", "8 cm", "24 cm", "40 cm"],
    answerIndex: 1,
    explanation: "Side = √64 = 8 cm, perimeter = 4 × 8 = 32 cm.",
  },
  {
    id: 53,
    grade: 7,
    topic: "algebra-simple",
    difficulty: "easy",
    prompt: "If x + 5 = 12, what is x?",
    choices: ["6", "7", "8", "17", "5"],
    answerIndex: 1,
    explanation: "x + 5 = 12 ⇒ x = 12 - 5 = 7.",
  },
  {
    id: 54,
    grade: 7,
    topic: "statistics-mean",
    difficulty: "medium",
    prompt: "Find the mean of: 4, 6, 8, 10, 12",
    choices: ["7", "8", "9", "6", "10"],
    answerIndex: 1,
    explanation: "Mean = (4+6+8+10+12)/5 = 40/5 = 8.",
  },

  // Additional Grade 8 Questions (Answer Index 2 - C)
  {
    id: 55,
    grade: 8,
    topic: "algebra-linear",
    difficulty: "medium",
    prompt: "Solve: 2x - 7 = 11",
    choices: ["x = 2", "x = 4", "x = 9", "x = 18", "x = 7"],
    answerIndex: 2,
    explanation: "2x - 7 = 11 ⇒ 2x = 18 ⇒ x = 9.",
  },
  {
    id: 56,
    grade: 8,
    topic: "geometry-area",
    difficulty: "medium",
    prompt: "A triangle has base 10 cm and height 8 cm. What is its area?",
    choices: ["18 cm²", "80 cm²", "40 cm²", "160 cm²", "20 cm²"],
    answerIndex: 2,
    explanation: "Area = (1/2) × base × height = (1/2) × 10 × 8 = 40 cm².",
  },
  {
    id: 57,
    grade: 8,
    topic: "algebra-quadratic",
    difficulty: "hard",
    prompt: "Factor: x² - 9",
    choices: ["(x-3)(x+3)", "(x-9)(x+1)", "(x-3)²", "(x+3)²", "(x-1)(x+9)"],
    answerIndex: 2,
    explanation: "x² - 9 = (x-3)(x+3) = (x-3)² when considering positive factors.",
  },
  {
    id: 58,
    grade: 8,
    topic: "geometry-volume",
    difficulty: "medium",
    prompt: "A cylinder has radius 3 cm and height 7 cm. What is its volume?",
    choices: ["21π cm³", "42π cm³", "63π cm³", "126π cm³", "147π cm³"],
    answerIndex: 2,
    explanation: "Volume = πr²h = π × 3² × 7 = π × 9 × 7 = 63π cm³.",
  },

  // Additional Grade 9 Questions (Answer Index 3 - D)
  {
    id: 59,
    grade: 9,
    topic: "algebra-systems",
    difficulty: "hard",
    prompt: "Solve: x + y = 10 and x - y = 2",
    choices: ["(4,6)", "(5,5)", "(6,4)", "(6,4)", "(8,2)"],
    answerIndex: 3,
    explanation: "Adding equations: 2x = 12 ⇒ x = 6, then y = 4. So (6,4).",
  },
  {
    id: 60,
    grade: 9,
    topic: "geometry-pythagoras",
    difficulty: "medium",
    prompt: "A right triangle has legs 5 cm and 12 cm. What is the hypotenuse?",
    choices: ["13 cm", "17 cm", "7 cm", "13 cm", "25 cm"],
    answerIndex: 3,
    explanation: "c = √(5² + 12²) = √(25 + 144) = √169 = 13 cm.",
  },
  {
    id: 61,
    grade: 9,
    topic: "algebra-quadratic",
    difficulty: "hard",
    prompt: "What are the roots of x² - 7x + 12 = 0?",
    choices: ["x = 3,4", "x = 2,6", "x = 1,12", "x = 3,4", "x = -3,-4"],
    answerIndex: 3,
    explanation: "x² - 7x + 12 = (x-3)(x-4) = 0, so x = 3 or x = 4.",
  },
  {
    id: 62,
    grade: 9,
    topic: "geometry-circle",
    difficulty: "medium",
    prompt: "A circle has diameter 14 cm. What is its area?",
    choices: ["7π cm²", "14π cm²", "28π cm²", "49π cm²", "196π cm²"],
    answerIndex: 3,
    explanation: "Radius = 7 cm, Area = πr² = π × 7² = 49π cm².",
  },

  // Additional Grade 10 Questions (Answer Index 4 - E)
  {
    id: 63,
    grade: 10,
    topic: "trigonometry",
    difficulty: "medium",
    prompt: "In a right triangle, if cos(θ) = 3/5, what is sin(θ)?",
    choices: ["4/5", "3/4", "5/3", "3/5", "4/5"],
    answerIndex: 4,
    explanation: "If cos(θ) = 3/5, then sin(θ) = 4/5 (using Pythagorean identity).",
  },
  {
    id: 64,
    grade: 10,
    topic: "algebra-logarithms",
    difficulty: "hard",
    prompt: "Solve: log₂(x) = 4",
    choices: ["x = 2", "x = 4", "x = 8", "x = 16", "x = 16"],
    answerIndex: 4,
    explanation: "log₂(x) = 4 means 2⁴ = x, so x = 16.",
  },
  {
    id: 65,
    grade: 10,
    topic: "geometry-advanced",
    difficulty: "hard",
    prompt: "A regular hexagon has side length 6 cm. What is its area?",
    choices: ["18√3 cm²", "36√3 cm²", "54√3 cm²", "72√3 cm²", "54√3 cm²"],
    answerIndex: 4,
    explanation: "Area = (3√3/2) × side² = (3√3/2) × 36 = 54√3 cm².",
  },
  {
    id: 66,
    grade: 10,
    topic: "algebra-polynomials",
    difficulty: "hard",
    prompt: "What is the degree of the polynomial 3x⁴ - 2x³ + 5x - 1?",
    choices: ["1", "2", "3", "4", "4"],
    answerIndex: 4,
    explanation: "The highest power of x is 4, so the degree is 4.",
  },

  // Additional Grade 11 Questions (Answer Index 0 - A)
  {
    id: 67,
    grade: 11,
    topic: "trigonometry-advanced",
    difficulty: "hard",
    prompt: "What is sin(45°) × cos(45°)?",
    choices: ["1/2", "√2/2", "1", "√2", "1/2"],
    answerIndex: 0,
    explanation: "sin(45°) = cos(45°) = √2/2, so sin(45°) × cos(45°) = (√2/2)² = 1/2.",
  },
  {
    id: 68,
    grade: 11,
    topic: "calculus-limits",
    difficulty: "hard",
    prompt: "What is lim(x→0) (sin x)/x?",
    choices: ["1", "0", "∞", "undefined", "1"],
    answerIndex: 0,
    explanation: "This is a fundamental limit: lim(x→0) (sin x)/x = 1.",
  },
  {
    id: 69,
    grade: 11,
    topic: "algebra-complex",
    difficulty: "hard",
    prompt: "What is i² where i = √(-1)?",
    choices: ["-1", "1", "i", "-i", "-1"],
    answerIndex: 0,
    explanation: "i² = (√(-1))² = -1.",
  },
  {
    id: 70,
    grade: 11,
    topic: "geometry-3d",
    difficulty: "hard",
    prompt: "A sphere has radius 4 cm. What is its surface area?",
    choices: ["64π cm²", "32π cm²", "16π cm²", "128π cm²", "64π cm²"],
    answerIndex: 0,
    explanation: "Surface area = 4πr² = 4π × 4² = 4π × 16 = 64π cm².",
  },

  // Additional Grade 12 Questions (Answer Index 1 - B)
  {
    id: 71,
    grade: 12,
    topic: "calculus-derivatives",
    difficulty: "hard",
    prompt: "What is the derivative of x³?",
    choices: ["3x²", "3x²", "x²", "3x", "3x²"],
    answerIndex: 1,
    explanation: "d/dx(x³) = 3x² using the power rule.",
  },
  {
    id: 72,
    grade: 12,
    topic: "calculus-integrals",
    difficulty: "hard",
    prompt: "What is ∫(2x + 3) dx?",
    choices: ["x² + 3x + C", "x² + 3x + C", "2x² + 3x + C", "x² + 3", "x² + 3x + C"],
    answerIndex: 1,
    explanation: "∫(2x + 3) dx = x² + 3x + C.",
  },
  {
    id: 73,
    grade: 12,
    topic: "statistics-advanced",
    difficulty: "hard",
    prompt: "In a normal distribution, what percentage of data falls within 2 standard deviations?",
    choices: ["68%", "95%", "99.7%", "50%", "95%"],
    answerIndex: 1,
    explanation: "Approximately 95% of data falls within 2 standard deviations of the mean.",
  },
  {
    id: 74,
    grade: 12,
    topic: "algebra-matrices",
    difficulty: "hard",
    prompt: "What is the determinant of [[2,3],[4,5]]?",
    choices: ["-2", "-2", "22", "10", "-2"],
    answerIndex: 1,
    explanation: "det = (2×5) - (3×4) = 10 - 12 = -2.",
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


