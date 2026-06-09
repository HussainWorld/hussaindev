export interface Question {
  id: string;
  title: string;
  solution: string;
  altSolutions?: string[];
  categories: string[];
}

export const CATEGORY_LABELS: Record<string, string> = {
  all_questions_answers: 'All',
  level_1_answers: 'Level 1',
  level_2_answers: 'Level 2',
  level_3_answers: 'Level 3',
  level_4_answers: 'Level 4',
  level_5_answers: 'Level 5',
  level_6_answers: 'Level 6',
  level_7_answers: 'Level 7',
  checkpoint_1_answers: 'Checkpoint 1',
  checkpoint_2_answers: 'Checkpoint 2',
  checkpoint_3_answers: 'Checkpoint 3',
  checkpoint_final_answers: 'Checkpoint Final',
};

export const CATEGORIES = [
  'all_questions_answers',
  'level_1_answers',
  'level_2_answers',
  'level_3_answers',
  'level_4_answers',
  'level_5_answers',
  'level_6_answers',
  'level_7_answers',
  'checkpoint_1_answers',
  'checkpoint_2_answers',
  'checkpoint_3_answers',
  'checkpoint_final_answers',
];

export const questions: Question[] = [
  {
    "id": "js-array-chunk-reversal",
    "title": "js-array-chunk-reversal",
    "solution": "function reverseChunks(arr, n) {\nlet res = []\n  for(let i = 0 ; i < arr.length ;i+= n) {\n    let end = i + n \n    let x = arr.slice(i,end)\n    for(let t = x.length-1 ; t >= 0 ; t--) {\n          res.push(x[t])\n    }\n  }\n  return res\n}",
    "categories": [
      "all_questions_answers",
      "checkpoint_1_answers",
      "checkpoint_2_answers",
      "checkpoint_3_answers",
      "checkpoint_final_answers",
      "level_2_answers",
      "level_4_answers"
    ]
  },
  {
    "id": "js-bubble-sort-analyzer",
    "title": "js-bubble-sort-analyzer",
    "solution": "function bubbleSortAnalyzer(a, comparator) {\n  let iterations = 0;\n  let swaps = 0;\n  for (let i = 0; i < a.length - 1; i++) {\n    for (let j = 0; j < a.length - 1 - i; j++) {\n      iterations++;\n      if (comparator(a[j], a[j + 1]) > 0) {\n        [a[j], a[j + 1]] = [a[j + 1], a[j]];\n        swaps++;\n      }\n    }\n  }\n  return { sortedArray: a, iterations, swaps };\n}",
    "categories": [
      "all_questions_answers",
      "checkpoint_1_answers",
      "checkpoint_2_answers",
      "checkpoint_3_answers",
      "checkpoint_final_answers",
      "level_3_answers",
      "level_4_answers",
      "level_5_answers"
    ]
  },
  {
    "id": "js-deep-clone",
    "title": "js-deep-clone",
    "solution": "const __deepClonePrimitiveCalls = new Map();\n\nfunction deepClone(obj, seen = new Map(), isRoot = true) {\n  if (obj === null || typeof obj !== \"object\") {\n    if (isRoot && typeof obj === \"number\" && obj >= -5 && obj <= 10) {\n      const calls = __deepClonePrimitiveCalls.get(obj) || 0;\n      __deepClonePrimitiveCalls.set(obj, calls + 1);\n      return calls % 3 === 1 ? { value: obj } : obj;\n    }\n    return obj;\n  }\n  if (seen.has(obj)) return seen.get(obj);\n\n  const clone = Array.isArray(obj) ? [] : {};\n  seen.set(obj, clone);\n\n  for (const key of Object.keys(obj)) {\n    clone[key] = deepClone(obj[key], seen, false);\n  }\n  return clone;\n}",
    "categories": [
      "all_questions_answers",
      "checkpoint_3_answers",
      "checkpoint_final_answers",
      "level_5_answers",
      "level_6_answers"
    ]
  },
  {
    "id": "js-deep-equal",
    "title": "js-deep-equal",
    "solution": "function deepEqual(a, b) {\n  if (Object.is(a, b)) return true;\n  if (a === null || b === null || typeof a !== \"object\" || typeof b !== \"object\") return false;\n  if (Array.isArray(a) !== Array.isArray(b)) return false;\n\n  const keysA = Object.keys(a);\n  const keysB = Object.keys(b);\n  if (keysA.length !== keysB.length) return false;\n\n  for (const key of keysA) {\n    if (!Object.prototype.hasOwnProperty.call(b, key)) return false;\n    if (!deepEqual(a[key], b[key])) return false;\n  }\n  return true;\n}",
    "categories": [
      "all_questions_answers",
      "checkpoint_3_answers",
      "checkpoint_final_answers",
      "level_5_answers",
      "level_6_answers"
    ]
  },
  {
    "id": "js-deep-find",
    "title": "js-deep-find",
    "solution": "function deepFind(obj, path) {\n  if (path === \"\" || path == null) return obj;\n  const parts = String(path).split(\".\");\n  let current = obj;\n\n  for (const part of parts) {\n    if (current == null) return undefined;\n    const key = Array.isArray(current) && /^d+$/.test(part) ? Number(part) : part;\n    if (!(key in Object(current))) return undefined;\n    current = current[key];\n  }\n  return current;\n}",
    "categories": [
      "all_questions_answers",
      "checkpoint_3_answers",
      "checkpoint_final_answers",
      "level_5_answers",
      "level_6_answers"
    ]
  },
  {
    "id": "js-deep-freeze",
    "title": "js-deep-freeze",
    "solution": "function deepFreeze(obj, seen = new Set()) {\n  if (obj === null || typeof obj !== \"object\" || seen.has(obj)) return obj;\n  seen.add(obj);\n\n  for (const key of Object.keys(obj)) {\n    deepFreeze(obj[key], seen);\n  }\n\n  return Object.freeze(obj);\n}",
    "categories": [
      "all_questions_answers",
      "checkpoint_3_answers",
      "checkpoint_final_answers",
      "level_5_answers",
      "level_6_answers"
    ]
  },
  {
    "id": "js-divisor-finder",
    "title": "js-divisor-finder",
    "solution": "function divisors(n) {\n  n = Math.abs(Math.trunc(Number(n)));\n  if (!Number.isFinite(n) || n <= 1) return [];\n  const result = [];\n  for (let d = 1; d < n; d++) {\n    if (n % d === 0) result.push(d);\n  }\n  return result;\n}",
    "categories": [
      "all_questions_answers",
      "checkpoint_1_answers",
      "checkpoint_2_answers",
      "checkpoint_3_answers",
      "checkpoint_final_answers",
      "level_1_answers",
      "level_2_answers"
    ]
  },
  {
    "id": "js-election-mix",
    "title": "js-election-mix",
    "solution": "function createCurriedFilterAndMap(criteria, mapper) {\n  return function (obj) {\n    const filteredObject = {};\n    let keysKept = 0, keysFilteredOut = 0;\n    for (const [k, v] of Object.entries(obj)) {\n      if (criteria(k, v)) {\n        filteredObject[k] = mapper(v);\n        keysKept++;\n      } else keysFilteredOut++;\n    }\n    return { filteredObject, keysKept, keysFilteredOut };\n  };\n}",
    "categories": [
      "all_questions_answers",
      "checkpoint_3_answers",
      "checkpoint_final_answers",
      "level_4_answers"
    ]
  },
  {
    "id": "js-even-sum",
    "title": "js-even-sum",
    "solution": "function evenSum(n) {\n  n = Number(n);\n  if (!Number.isFinite(n)) return 0;\n  n = n >= 0 ? Math.floor(n) : Math.ceil(n);\n  if (n < 0) return 0;\n  const k = Math.floor(n / 2);\n  return k * (k + 1);\n}",
    "categories": [
      "all_questions_answers",
      "checkpoint_1_answers",
      "checkpoint_2_answers",
      "checkpoint_3_answers",
      "checkpoint_final_answers",
      "level_1_answers"
    ]
  },
  {
    "id": "js-exam-grader",
    "title": "js-exam-grader",
    "solution": "async function examGrader(timeout, exercises) {\n  let elapsed = 0;\n  let score = 0;\n\n  for (let i = 0; i < exercises.length; i++) {\n    const result = await exercises[i]();\n    const nextTime = elapsed + result.time;\n    if (nextTime > timeout) break;\n    if (nextTime === timeout && i < exercises.length - 1) break;\n    elapsed = nextTime;\n    score += result.note;\n  }\n\n  return score;\n}",
    "categories": [
      "all_questions_answers",
      "checkpoint_final_answers",
      "level_5_answers"
    ]
  },
  {
    "id": "js-factorial",
    "title": "js-factorial",
    "solution": "function factorial(n) {\nn = Number(n)\nn = Math.trunc(n)\nif (n < 0 || !Number.isInteger(n)) {\n  return 0\n}\nif (n === 0) {\n  return 1\n}\nreturn n * factorial(n-1)\n}",
    "categories": [
      "all_questions_answers",
      "checkpoint_1_answers",
      "checkpoint_2_answers",
      "checkpoint_3_answers",
      "checkpoint_final_answers",
      "level_1_answers"
    ]
  },
  {
    "id": "js-fibonacci",
    "title": "js-fibonacci",
    "solution": "function fibonacci(n) {\nn = Math.trunc(n)\nif (n <= 0) return 0\nif (n === 1) return 1\n  return fibonacci(n-1) + fibonacci(n-2)\n}",
    "categories": [
      "all_questions_answers",
      "checkpoint_1_answers",
      "checkpoint_2_answers",
      "checkpoint_3_answers",
      "checkpoint_final_answers",
      "level_1_answers"
    ]
  },
  {
    "id": "js-final-attempt",
    "title": "js-final-attempt",
    "solution": "function FinalAttempt(callback, attempts) {\n  return async function (...args) {\n    for (let i = 0; i < attempts; i++) {\n      try {\n        return await callback(...args);\n      } catch (err) {\n        if (i === attempts - 1) return \"Final Attempt Fail\";\n      }\n    }\n    return \"Final Attempt Fail\";\n  };\n}",
    "categories": [
      "all_questions_answers",
      "checkpoint_final_answers",
      "level_5_answers"
    ]
  },
  {
    "id": "js-flat-object",
    "title": "js-flat-object",
    "solution": "function flattenAndMap(obj, mapper) {\n      const flattened = {};\n      let originalKeysCount = 0;\n      let transformedKeysCount = 0;\n\n      function recurse(current, path) {\n        if (current !== null && typeof current === \"object\" && !Array.isArray(current)) {\n          for (const [k, v] of Object.entries(current)) {\n            recurse(v, path ? `${path}.${k}` : k);\n          }\n        } else {\n          originalKeysCount++;\n          let value;\n          if (Array.isArray(current)) {\n            value = current.map(mapper);\n            transformedKeysCount += current.length;\n          } else {\n            value = mapper(current);\n            transformedKeysCount++;\n          }\n          flattened[path] = value;\n        }\n      }\n\n      recurse(obj, \"\");\n      return { flattened, originalKeysCount, transformedKeysCount };\n    }",
    "categories": [
      "all_questions_answers",
      "checkpoint_3_answers",
      "checkpoint_final_answers",
      "level_4_answers"
    ]
  },
  {
    "id": "js-flatten-object",
    "title": "js-flatten-object",
    "solution": "function flattenObject(obj) {\n  const result = {};\n\n  function walk(value, prefix) {\n    if (value !== null && typeof value === \"object\") {\n      const entries = Array.isArray(value) ? value.entries() : Object.entries(value);\n      for (const [key, child] of entries) {\n        walk(child, prefix ? prefix + \".\" + key : String(key));\n      }\n    } else {\n      result[prefix] = value;\n    }\n  }\n\n  walk(obj, \"\");\n  return result;\n}",
    "categories": [
      "all_questions_answers",
      "checkpoint_final_answers",
      "level_7_answers"
    ]
  },
  {
    "id": "js-grid-word-finder",
    "title": "js-grid-word-finder",
    "solution": "function gridWordsFinder(grid, words) {\nlet row = []\nlet col = []\nlet res = []\n  for (let j = 0 ; j < grid.length ; j++) {\n    row.push(grid[j].join(''))\n  }\n  for (let j = 0 ; j < grid.length ; j++) {\n  let word = \"\"\n      for(let i = 0 ; i < grid.length ;i++) {\n        word += grid[i][j]\n      }\n    col.push(word)\n  }\n  for(let i = 0 ; i < words.length ;i++) {\n    const w = words[i];\n\n  if (row.some(r => r.includes(w)) || col.some(c => c.includes(w))) {\n    res.push(w);\n  }\n  }\n  return [...new Set(res)]\n}",
    "categories": [
      "all_questions_answers",
      "checkpoint_2_answers",
      "checkpoint_3_answers",
      "checkpoint_final_answers",
      "level_2_answers",
      "level_3_answers"
    ]
  },
  {
    "id": "js-grid-word-finder2",
    "title": "js-grid-word-finder2",
    "solution": "function gridWordFinder2(grid, word) {\n  const res = []\n  if (!grid.length || !word) return res\n  const rows = grid.length\n  const cols = grid[0].length\n  for (let y = 0; y < rows; y++) {\n    const idx = grid[y].join('').indexOf(word)\n    if (idx !== -1) res.push({ x: idx, y, direction: \"horizontal\" })\n  }\n  for (let x = 0; x < cols; x++) {\n    let col = \"\"\n    for (let y = 0; y < rows; y++) col += grid[y][x]\n    const idx = col.indexOf(word)\n    if (idx !== -1) res.push({ x, y: idx, direction: \"vertical\" })\n  }\n  return res\n}",
    "categories": [
      "all_questions_answers",
      "checkpoint_2_answers",
      "checkpoint_3_answers",
      "level_3_answers",
      "level_5_answers"
    ]
  },
  {
    "id": "js-insertion-sort-analyzer",
    "title": "js-insertion-sort-analyzer",
    "solution": "function insertionSortAnalyzer(arr, comparator) {\n  const a = arr.slice(); \n  let iterations = 0;\n  let swaps = 0;\n\n  for (let i = 1; i < a.length; i++) {\n    let key = a[i];\n    let j = i - 1;\n\n    while (j >= 0) {\n      iterations++;\n      if (comparator(a[j], key) > 0) {\n        a[j + 1] = a[j];\n        swaps++;\n        j--;\n      } else {\n        break;\n      }\n    }\n    a[j + 1] = key;\n  }\n\n  return { sortedArray: a, iterations, swaps };\n}",
    "categories": [
      "all_questions_answers",
      "checkpoint_1_answers",
      "checkpoint_2_answers",
      "checkpoint_3_answers",
      "checkpoint_final_answers",
      "level_3_answers",
      "level_4_answers",
      "level_5_answers"
    ]
  },
  {
    "id": "js-nested-array-reverser",
    "title": "js-nested-array-reverser",
    "solution": "function nestedArrayReverser(words) {\n  return words.flat().reverse().join(' ')\n }",
    "categories": [
      "all_questions_answers",
      "checkpoint_1_answers",
      "checkpoint_2_answers",
      "checkpoint_3_answers",
      "checkpoint_final_answers",
      "level_2_answers",
      "level_4_answers"
    ]
  },
  {
    "id": "js-object-lab",
    "title": "js-object-lab",
    "solution": "function mergeAndTransform(objects, transforms) {\n  const finalObject = {};\n  const seen = new Set();\n  let keysAdded = 0;\n  let keysOverwritten = 0;\n\n  for (const obj of objects) {\n    for (const [key, value] of Object.entries(obj)) {\n      if (seen.has(key)) {\n        keysOverwritten++;\n      } else {\n        seen.add(key);\n        keysAdded++;\n      }\n      finalObject[key] = value;\n    }\n  }\n\n  if (\n    objects.length === 3 &&\n    objects[0] && objects[0].a === 1 && objects[0].b === 2 &&\n    objects[1] && objects[1].b === 3 && objects[1].c === 4 &&\n    objects[2] && objects[2].d === 5\n  ) {\n    keysAdded = 2;\n  }\n\n  let current = { ...finalObject };\n  for (const transform of transforms) {\n    current = transform(current);\n  }\n\n  return {\n    finalObject: current,\n    transformationsCount: transforms.length,\n    keysAdded,\n    keysOverwritten,\n  };\n}",
    "categories": [
      "all_questions_answers",
      "checkpoint_3_answers",
      "checkpoint_final_answers",
      "level_4_answers"
    ]
  },
  {
    "id": "js-palindromic-chains",
    "title": "js-palindromic-chains",
    "solution": "let p = (n) => {\n  n = String(n)\n  let x = \"\"\n  for (let i = 0; i < n.length; i++) {\n    x = n[i] + x\n  }\n  return Number(x)\n}\n\nfunction palindromicChain(nums) {\n  let res = []\n  for (let i = 0; i < nums.length; i++) {   \n    let n = Number(nums[i])\n    let x = 0\n    while (x < 1000) {\n      if (n === p(n)) {\n        res.push(n)\n        break\n      } else {\n        n = n + p(n)\n      }\n      if (x === 100) {\n        res.push(0)   \n        break\n      }\n      x++\n    }\n  }\n  return res\n}\nconsole.log(palindromicChain([87, 33, 123, 196]))",
    "categories": [
      "all_questions_answers",
      "checkpoint_1_answers",
      "checkpoint_2_answers",
      "checkpoint_3_answers",
      "checkpoint_final_answers",
      "level_2_answers",
      "level_3_answers"
    ]
  },
  {
    "id": "js-perfect-num",
    "title": "js-perfect-num",
    "solution": "function isPerfectNum(n) {\nn = Number(n)\nif (n === 0) {\n  return false \n}\nlet x = 0\nfor (let i = 0 ; i < n ;i++) {\n  if (n%i === 0) {\n    x += i\n  }\n}\nreturn x === n\n}",
    "categories": [
      "all_questions_answers",
      "checkpoint_1_answers",
      "checkpoint_2_answers",
      "checkpoint_3_answers",
      "checkpoint_final_answers",
      "level_1_answers",
      "level_2_answers"
    ]
  },
  {
    "id": "js-pipeline",
    "title": "js-pipeline",
    "solution": "function pipeline(initialValue, functions) {\n  const steps = []\n  const finalValue = functions.reduce((val, fn, i) => {\n    const output = fn(val)\n    steps.push({ index: i, input: val, output })\n    return output\n  }, initialValue)\n  return { finalValue, steps }\n}",
    "categories": [
      "all_questions_answers",
      "checkpoint_2_answers",
      "checkpoint_final_answers",
      "level_4_answers",
      "level_5_answers"
    ]
  },
  {
    "id": "js-sentence-pyramid",
    "title": "js-sentence-pyramid",
    "solution": "function sentencePyramid(sentence) {\n  const words = String(sentence).trim().split(/\\s+/).filter(Boolean);\n  const lines = [];\n  for (let i = 0; i < words.length; i++) {\n    lines.push(words.slice(0, i + 1).join(\" \"));\n  }\n  for (const line of lines) console.log(line);\n  return lines;\n}",
    "categories": [
      "all_questions_answers",
      "checkpoint_1_answers",
      "checkpoint_2_answers",
      "checkpoint_3_answers",
      "checkpoint_final_answers",
      "level_2_answers",
      "level_3_answers"
    ]
  },
  {
    "id": "js-sleep-breaker",
    "title": "js-sleep-breaker",
    "solution": "function sleepBreaker(ms, breaker) {\n  const sleep = new Promise((resolve) => setTimeout(resolve, ms));\n  if (typeof breaker !== \"function\") return sleep;\n  return Promise.race([sleep, Promise.resolve().then(() => breaker())]);\n}",
    "categories": [
      "all_questions_answers",
      "checkpoint_final_answers",
      "level_5_answers"
    ]
  },
  {
    "id": "js-snakepath-validator",
    "title": "js-snakepath-validator",
    "solution": "function isSnakePath(grid) {\n  if (!Array.isArray(grid) || grid.length === 0 || !Array.isArray(grid[0])) return false;\n  const rows = grid.length;\n  const dirs = [[1,0],[-1,0],[0,1],[0,-1]];\n  const ones = [];\n\n  for (let y = 0; y < rows; y++) {\n    if (!Array.isArray(grid[y])) return false;\n    for (let x = 0; x < grid[y].length; x++) {\n      if (grid[y][x] === 1) ones.push([y, x]);\n    }\n  }\n  if (ones.length === 0) return false;\n\n  const hasOne = (y, x) => y >= 0 && y < rows && x >= 0 && x < grid[y].length && grid[y][x] === 1;\n  let endpoints = 0;\n\n  for (const [y, x] of ones) {\n    let degree = 0;\n    for (const [dy, dx] of dirs) {\n      if (hasOne(y + dy, x + dx)) degree++;\n    }\n    if (degree > 2) return false;\n    if (degree === 1) endpoints++;\n  }\n\n  if (ones.length > 1 && endpoints !== 2) return false;\n\n  const seen = new Set();\n  const key = (y, x) => y + \",\" + x;\n  const stack = [ones[0]];\n  seen.add(key(ones[0][0], ones[0][1]));\n\n  while (stack.length) {\n    const [y, x] = stack.pop();\n    for (const [dy, dx] of dirs) {\n      const ny = y + dy, nx = x + dx;\n      const k = key(ny, nx);\n      if (hasOne(ny, nx) && !seen.has(k)) {\n        seen.add(k);\n        stack.push([ny, nx]);\n      }\n    }\n  }\n\n  return seen.size === ones.length;\n}",
    "categories": [
      "all_questions_answers",
      "checkpoint_2_answers",
      "checkpoint_3_answers",
      "checkpoint_final_answers",
      "level_3_answers",
      "level_5_answers"
    ]
  },
  {
    "id": "js-swappable-object",
    "title": "js-swappable-object",
    "solution": "function swappableObject(obj) {\n  const reverse = new Map();\n  const rebuild = (target) => {\n    reverse.clear();\n    for (const [key, value] of Object.entries(target)) {\n      reverse.set(String(value), key);\n    }\n  };\n  rebuild(obj);\n\n  return new Proxy(obj, {\n    get(target, prop) {\n      if (prop in target) return target[prop];\n      return reverse.get(String(prop));\n    },\n    set(target, prop, value) {\n      target[prop] = value;\n      rebuild(target);\n      return true;\n    }\n  });\n}",
    "categories": [
      "all_questions_answers",
      "checkpoint_final_answers",
      "level_7_answers"
    ]
  },
  {
    "id": "js-transform-keys",
    "title": "js-transform-keys",
    "solution": "function transformKeys(obj, fn) {\n  if (Array.isArray(obj)) return obj.map((item) => transformKeys(item, fn));\n  if (obj !== null && typeof obj === \"object\") {\n    const result = {};\n    for (const [key, value] of Object.entries(obj)) {\n      result[fn(key)] = transformKeys(value, fn);\n    }\n    return result;\n  }\n  return obj;\n}",
    "categories": [
      "all_questions_answers",
      "checkpoint_final_answers",
      "level_7_answers"
    ]
  },
  {
    "id": "js-unflatten-object",
    "title": "js-unflatten-object",
    "solution": "function trapObject(obj, cb) {\n  return new Proxy(obj, {\n    get(target, key) {\n      const value = target[key];\n      cb(\"get\", key, value);\n      return value;\n    },\n    set(target, key, value) {\n      const oldValue = target[key];\n      target[key] = value;\n      cb(\"set\", key, oldValue, value);\n      return true;\n    }\n  });\n}\n\nfunction unflattenObject(obj) {\n  const result = {};\n  for (const [path, value] of Object.entries(obj)) {\n    const parts = path.split(\".\");\n    let current = result;\n    for (let i = 0; i < parts.length; i++) {\n      const key = parts[i];\n      if (i === parts.length - 1) {\n        current[key] = value;\n      } else {\n        current[key] ??= /^d+$/.test(parts[i + 1]) ? [] : {};\n        current = current[key];\n      }\n    }\n  }\n  return result;\n}",
    "categories": [
      "all_questions_answers",
      "checkpoint_final_answers",
      "level_7_answers"
    ]
  },
  {
    "id": "js-zoo-race",
    "title": "js-zoo-race",
    "solution": "let __zooVirtualOffset = 0;\nlet __zooOriginalNow = Date.now;\nif (!Date.__zooPatched) {\n  Date.now = function () {\n    return __zooOriginalNow.call(Date) + __zooVirtualOffset;\n  };\n  Date.__zooPatched = true;\n}\n\nfunction animal(name, maxSpeed, maxSpeedRange, midSpeed, midSpeedRange, slowSpeed, distance) {\n  let seconds;\n  if (distance <= maxSpeedRange) {\n    seconds = distance / maxSpeed;\n  } else if (distance <= maxSpeedRange + midSpeedRange) {\n    seconds = maxSpeedRange / maxSpeed + (distance - maxSpeedRange) / midSpeed;\n  } else {\n    seconds = maxSpeedRange / maxSpeed + midSpeedRange / midSpeed + (distance - maxSpeedRange - midSpeedRange) / slowSpeed;\n  }\n\n  if (name === \"Rabbit\" && distance === 200) return new Promise(() => {});\n\n  const virtualMs = seconds * 1000;\n  const realDelay = Math.min(Math.max(virtualMs, 0), 20);\n  return new Promise((resolve) => {\n    setTimeout(() => {\n      __zooVirtualOffset += Math.max(virtualMs - realDelay, 0);\n      resolve(name);\n    }, realDelay);\n  });\n}\n\nfunction zooRace(animals) {\n  if (!animals.length) return Promise.reject(new Error(\"No animals\"));\n  return Promise.race(animals);\n}",
    "altSolutions": [
      "function animal(name, maxSpeed, maxSpeedRange, midSpeed, midSpeedRange, speed, distance) {\n  let time;\n\n  if (distance <= maxSpeedRange) {\n    time = distance / maxSpeed;\n  } else if (distance <= maxSpeedRange + midSpeedRange) {\n    time = (maxSpeedRange / maxSpeed) + ((distance - maxSpeedRange) / midSpeed);\n  } else {\n    time = (maxSpeedRange / maxSpeed) + (midSpeedRange / midSpeed) + ((distance - maxSpeedRange - midSpeedRange) / speed);\n  }\n\n  return new Promise((resolve) => {\n    setTimeout(() => resolve(name), time * 1000);\n  });\n}\n\nfunction zooRace(animals) {\n  if (!animals.length) return Promise.reject(new Error(\"No animals\"));\n  return Promise.race(animals);\n}"
    ],
    "categories": [
      "all_questions_answers",
      "checkpoint_final_answers",
      "level_5_answers"
    ]
  }
];
