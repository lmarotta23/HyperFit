/* ---------------------------------------------------------------
   1. BASELINE LIFTS  (edit weights here — not editable in-app)
--------------------------------------------------------------- */
const BASELINES = {
  barbellCurls:              { label: 'Barbell Curls', weight: 70 },
  barbellSquat:               { label: 'Barbell Squat', weight: 245 },
  barbellBentOverRow:         { label: 'Barbell Bent-Over Row', weight: 175 },
  barbellRDL:                 { label: 'Barbell RDL', weight: 175 },
  cablePullover:               { label: 'Cable Pullover', weight: 110 },
  deadlift:                    { label: 'Deadlift', weight: 275 },
  dumbbellCurls:               { label: 'Dumbbell Curls', weight: 40 },
  dumbbellGobletSquat:         { label: 'Dumbbell Goblet Squat', weight: 100 },
  dumbbellLunges:              { label: 'Dumbbell Lunges', weight: 40 },
  dumbbellRows:                { label: 'Dumbbell Rows', weight: 85 },
  flatBarbellBench:            { label: 'Flat Barbell Bench', weight: 225 },
  flatDumbbellBench:           { label: 'Flat Dumbbell Bench', weight: 100 },
  hammerCurls:                 { label: 'Hammer Curls', weight: 45 },
  inclineBarbellBench:         { label: 'Incline Barbell Bench', weight: 205 },
  inclineDumbbellBench:        { label: 'Incline Dumbbell Bench', weight: 90 },
  latPulldownRow:              { label: 'Lat Pulldown / Row', weight: 180 },
  seatedDumbbellLateralRaises: { label: 'Seated Dumbbell Lateral Raises', weight: 20 },
  seatedDumbbellShoulderPress: { label: 'Seated Dumbbell Shoulder Press', weight: 60 },
  seatedRearDeltFlies:         { label: 'Seated Rear Delt Flies (Machine)', weight: 100 },
  standingBarbellShoulderPress:{ label: 'Standing Barbell Shoulder Press', weight: 95 },
  standingDumbbellLateralRaises:{ label: 'Standing Dumbbell Lateral Raises', weight: 40 },
  tricepsPushdownRope:         { label: 'Triceps Pushdowns (Rope)', weight: 70 },
};

/* ---------------------------------------------------------------
   2. WORKOUT TEMPLATES  (edit exercises here — not editable in-app)
   "baseline" points to a key above, or null if there's no baseline
   lift to compare against (e.g. bodyweight moves).
--------------------------------------------------------------- */
const WORKOUTS = [
  {
    id: 'back-bi-abs',
    name: 'Back, Bi, and Abs',
    exercises: [
      { name: 'Pull-Ups', setsReps: '2x10', baseline: null },
      { name: 'Abs', setsReps: '3x20', baseline: null },
      { name: 'Deadlifts', setsReps: '3x5-6', baseline: 'deadlift' },
      { name: 'Dumbbell Curls', setsReps: '3x10', baseline: 'dumbbellCurls' },
      { name: 'Lat Pull Down', setsReps: '3x10', baseline: 'latPulldownRow' },
      { name: 'Rear Delt Flies', setsReps: '3x12-15', baseline: 'seatedRearDeltFlies' },
      { name: 'Hammer Curls', setsReps: '3x10', baseline: 'hammerCurls' },
      { name: 'Cable Pull Overs', setsReps: '3x10-12', baseline: 'cablePullover' },
      { name: 'Cable Rows', setsReps: '3x10', baseline: 'latPulldownRow' },
    ],
  },
  {
    id: 'chest-shoulder-tri',
    name: 'Chest, Shoulder, and Tri',
    exercises: [
      { name: 'Pull-Ups', setsReps: '2x10', baseline: null },
      { name: 'Lateral Raises', setsReps: '3x10-15', baseline: 'standingDumbbellLateralRaises' },
      { name: 'Tricep Press / Kickbacks / Pushdown', setsReps: '3x10', baseline: 'tricepsPushdownRope' },
      { name: 'Dumbbell Flat Bench', setsReps: '3x7-8', baseline: 'flatDumbbellBench' },
      { name: 'Dumbbell Incline Bench', setsReps: '3x7-8', baseline: 'inclineDumbbellBench' },
      { name: 'Seated Lateral Raises', setsReps: '3x20', baseline: 'seatedDumbbellLateralRaises' },
      { name: 'Dips', setsReps: '3x10', baseline: null },
    ],
  },
  {
    id: 'legs-abs',
    name: 'Legs and Abs',
    exercises: [
      { name: 'Pull-Ups', setsReps: '2x10', baseline: null },
      { name: 'Goblet Squat', setsReps: '3x10-12', baseline: 'dumbbellGobletSquat' },
      { name: 'Hanging Raises', setsReps: '3x20', baseline: null },
      { name: 'Barbell Squat', setsReps: '3x5', baseline: 'barbellSquat' },
      { name: 'Barbell / Dumbbell RDLs', setsReps: '3x10-12', baseline: 'barbellRDL' },
      { name: 'Calf Raises', setsReps: '3x20', baseline: null },
      { name: 'Explosive Glute Ham (25lb plate)', setsReps: '2x15', baseline: null },
    ],
  },
  {
    id: 'back-bi-deadlift',
    name: 'Back, Bi, and Deadlift',
    exercises: [
      { name: 'Pull-Ups', setsReps: '2x10', baseline: null },
      { name: 'Deadlift', setsReps: '3x5-6', baseline: 'deadlift' },
      { name: 'Hammer Curls', setsReps: '3x10', baseline: 'hammerCurls' },
      { name: 'Cable Pullover', setsReps: '3x10-12', baseline: 'cablePullover' },
      { name: 'Barbell Bent Over Rows', setsReps: '3x10', baseline: 'barbellBentOverRow' },
      { name: 'Barbell Curls', setsReps: '3x10', baseline: 'barbellCurls' },
      { name: 'Rear Delt Flies', setsReps: '3x10-12', baseline: 'seatedRearDeltFlies' },
      { name: 'Dumbbell Rows', setsReps: '3x10', baseline: 'dumbbellRows' },
    ],
  },
  {
    id: 'chest-shoulder-tri-abs',
    name: 'Chest, Shoulder, Tri, and Abs',
    exercises: [
      { name: 'Pull-Ups', setsReps: '2x10', baseline: null },
      { name: 'Tricep Kick Backs', setsReps: '3x10', baseline: 'tricepsPushdownRope' },
      { name: 'Barbell Flat Bench', setsReps: '3x3-5', baseline: 'flatBarbellBench' },
      { name: 'Barbell Incline Bench', setsReps: '3x3-5', baseline: 'inclineBarbellBench' },
      { name: 'Hanging Leg Raises', setsReps: '3x20', baseline: null },
      { name: 'Dips', setsReps: '3x10-12', baseline: null },
      { name: 'Tricep Push Down', setsReps: '3x10', baseline: 'tricepsPushdownRope' },
    ],
  },
];

/* ---------------------------------------------------------------
   3. STATUS MESSAGE POOLS  (randomized, compared vs. baseline only)
--------------------------------------------------------------- */
const STRONGER_MSGS = [
  "New territory — you're getting stronger.",
  "Above baseline. Strength is trending up.",
  "That's a new high. Keep stacking these.",
  "Stronger than your baseline today.",
  "Progress. That beats your baseline mark.",
];

const SAME_MSGS = [
  "Right at baseline — staying fit and strong.",
  "Holding steady. Consistency is strength.",
  "Matched your baseline. Solid work.",
  "On mark. That's your baseline, locked in.",
  "Steady as your baseline — well maintained.",
];

const WEAKER_MSGS = [
  "Below baseline today — that's alright, recovery counts too.",
  "A lighter day. Listen to your body.",
  "Under your baseline — no big deal, log it and move on.",
  "Below mark today. Tomorrow's a new lift.",
  "Off baseline — could be fatigue, sleep, or just an off day.",
];

/* ---------------------------------------------------------------
   4. STORAGE HELPERS
--------------------------------------------------------------- */
const STORAGE_KEY = 'hyperfit-logs';

function loadLogs() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  } catch (e) {
    return {};
  }
}

function saveLogs(logs) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(logs));
}

function getDayLog(dateStr) {
  const logs = loadLogs();
  return logs[dateStr] || null;
}

function setDayWorkout(dateStr, workoutId) {
  const logs = loadLogs();
  const existing = logs[dateStr] || { workoutId: null, exercises: {} };
  existing.workoutId = workoutId;
  logs[dateStr] = existing;
  saveLogs(logs);
}

function setExerciseValue(dateStr, exerciseName, field, value) {
  const logs = loadLogs();
  const day = logs[dateStr] || { workoutId: null, exercises: {} };
  const entry = day.exercises[exerciseName] || { weight: '', notes: '' };
  entry[field] = value;
  day.exercises[exerciseName] = entry;
  logs[dateStr] = day;
  saveLogs(logs);
}

/* ---------------------------------------------------------------
   5. DATE HELPERS
--------------------------------------------------------------- */
function todayStr() {
  return formatDateKey(new Date());
}

function formatDateKey(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

function formatDisplayDate(dateStr) {
  const [y, m, d] = dateStr.split('-').map(Number);
  const dateObj = new Date(y, m - 1, d);
  return dateObj.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
}

const MONTH_NAMES = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const DOW_NAMES = ['S','M','T','W','T','F','S'];

/* ---------------------------------------------------------------
   6. APP STATE
--------------------------------------------------------------- */
let activeTab = 'today';
let calendarViewYear = new Date().getFullYear();
let calendarViewMonth = new Date().getMonth(); // 0-indexed
let dayLogReturnTo = 'today'; // 'today' or 'calendar' — where the back arrow (if any) goes

const mainEl = document.getElementById('app-main');
const headerDateEl = document.getElementById('header-date');

/* ---------------------------------------------------------------
   7. TAB NAVIGATION
--------------------------------------------------------------- */
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => switchTab(btn.dataset.tab));
});

function switchTab(tab) {
  activeTab = tab;
  document.querySelectorAll('.tab-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.tab === tab);
  });

  if (tab === 'today') {
    headerDateEl.textContent = formatDisplayDate(todayStr());
    renderDayLog(todayStr(), { showBack: false });
  } else if (tab === 'baseline') {
    headerDateEl.textContent = '';
    renderBaseline();
  } else if (tab === 'calendar') {
    headerDateEl.textContent = '';
    renderCalendar();
  }
}

/* ---------------------------------------------------------------
   8. TODAY / DAY LOG VIEW  (shared by Today tab + Calendar day tap)
--------------------------------------------------------------- */
function renderDayLog(dateStr, opts) {
  opts = opts || {};
  const day = getDayLog(dateStr);
  const view = document.createElement('div');
  view.className = 'view';

  if (opts.showBack) {
    const backRow = document.createElement('div');
    backRow.className = 'back-row';
    const backBtn = document.createElement('button');
    backBtn.className = 'link-btn';
    backBtn.textContent = '← Back to Calendar';
    backBtn.addEventListener('click', renderCalendar);
    backRow.appendChild(backBtn);
    view.appendChild(backRow);
  }

  if (!day || !day.workoutId) {
    view.appendChild(buildWorkoutPicker(dateStr, opts));
  } else {
    view.appendChild(buildExerciseEntry(dateStr, day.workoutId, opts));
  }

  mainEl.innerHTML = '';
  mainEl.appendChild(view);
}

function buildWorkoutPicker(dateStr, opts) {
  const wrap = document.createElement('div');

  const header = document.createElement('div');
  header.className = 'day-header';
  header.innerHTML = `<div><div class="day-title headline">${formatDisplayDate(dateStr)}</div></div>`;
  wrap.appendChild(header);

  const prompt = document.createElement('div');
  prompt.className = 'picker-prompt';
  prompt.textContent = 'Which workout are you doing?';
  wrap.appendChild(prompt);

  const picker = document.createElement('div');
  picker.className = 'workout-picker';

  WORKOUTS.forEach(w => {
    const btn = document.createElement('button');
    btn.className = 'workout-picker-btn';
    btn.innerHTML = `${w.name}<span class="wp-sub">${w.exercises.length} exercises</span>`;
    btn.addEventListener('click', () => {
      setDayWorkout(dateStr, w.id);
      renderDayLog(dateStr, opts);
    });
    picker.appendChild(btn);
  });

  wrap.appendChild(picker);
  return wrap;
}

function buildExerciseEntry(dateStr, workoutId, opts) {
  const workout = WORKOUTS.find(w => w.id === workoutId);
  const day = getDayLog(dateStr);
  const wrap = document.createElement('div');

  const header = document.createElement('div');
  header.className = 'day-header';
  header.innerHTML = `
    <div>
      <div class="day-title headline">${formatDisplayDate(dateStr)}</div>
      <div class="workout-name">${workout.name}</div>
    </div>
  `;
  const changeBtn = document.createElement('button');
  changeBtn.className = 'link-btn';
  changeBtn.textContent = 'Change';
  changeBtn.addEventListener('click', () => {
    setDayWorkout(dateStr, null);
    renderDayLog(dateStr, opts);
  });
  header.appendChild(changeBtn);
  wrap.appendChild(header);

  const list = document.createElement('div');
  list.className = 'exercise-list';

  workout.exercises.forEach(ex => {
    const saved = (day.exercises && day.exercises[ex.name]) || { weight: '', notes: '' };
    const card = document.createElement('div');
    card.className = 'exercise-card';

    const baselineInfo = ex.baseline ? BASELINES[ex.baseline] : null;

    card.innerHTML = `
      <div class="exercise-name">${ex.name}</div>
      <div class="exercise-setsreps">${ex.setsReps}</div>
      ${baselineInfo ? `<div class="exercise-baseline">Baseline: ${baselineInfo.weight} lb</div>` : ''}
      <div class="exercise-inputs">
        <input type="number" inputmode="decimal" class="weight-input" placeholder="lb" value="${saved.weight || ''}">
        <input type="text" class="notes-input" placeholder="Notes (optional)" value="${saved.notes || ''}">
      </div>
      <div class="status-msg"></div>
    `;

    const weightInput = card.querySelector('.weight-input');
    const notesInput = card.querySelector('.notes-input');
    const statusEl = card.querySelector('.status-msg');

    function refreshStatus() {
      const val = parseFloat(weightInput.value);
      if (!baselineInfo || isNaN(val) || weightInput.value === '') {
        statusEl.classList.remove('visible');
        return;
      }
      let pool, cls;
      if (val > baselineInfo.weight) { pool = STRONGER_MSGS; cls = 'status-stronger'; }
      else if (val === baselineInfo.weight) { pool = SAME_MSGS; cls = 'status-same'; }
      else { pool = WEAKER_MSGS; cls = 'status-weaker'; }
      const msg = pool[Math.floor(Math.random() * pool.length)];
      statusEl.textContent = msg;
      statusEl.className = 'status-msg visible ' + cls;
    }

    weightInput.addEventListener('input', () => {
      setExerciseValue(dateStr, ex.name, 'weight', weightInput.value);
    });
    weightInput.addEventListener('change', refreshStatus);
    notesInput.addEventListener('input', () => {
      setExerciseValue(dateStr, ex.name, 'notes', notesInput.value);
    });

    if (saved.weight) refreshStatus();

    list.appendChild(card);
  });

  wrap.appendChild(list);
  return wrap;
}

/* ---------------------------------------------------------------
   9. BASELINE TAB (read-only, alphabetical)
--------------------------------------------------------------- */
function renderBaseline() {
  const view = document.createElement('div');
  view.className = 'view';

  const title = document.createElement('h2');
  title.className = 'headline';
  title.textContent = 'Baseline Lifts';
  title.style.marginBottom = '14px';
  view.appendChild(title);

  const list = document.createElement('div');
  list.className = 'baseline-list';

  const sorted = Object.values(BASELINES).sort((a, b) => a.label.localeCompare(b.label));
  sorted.forEach(b => {
    const row = document.createElement('div');
    row.className = 'baseline-row';
    row.innerHTML = `<span class="bl-name">${b.label}</span><span class="bl-weight">${b.weight} lb</span>`;
    list.appendChild(row);
  });

  view.appendChild(list);
  mainEl.innerHTML = '';
  mainEl.appendChild(view);
}

/* ---------------------------------------------------------------
   10. CALENDAR TAB
--------------------------------------------------------------- */
function renderCalendar() {
  activeTab = 'calendar';
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.toggle('active', b.dataset.tab === 'calendar'));

  const view = document.createElement('div');
  view.className = 'view';

  const nav = document.createElement('div');
  nav.className = 'calendar-nav';
  nav.innerHTML = `
    <button class="cal-arrow" id="cal-prev">‹</button>
    <div class="headline">${MONTH_NAMES[calendarViewMonth]} ${calendarViewYear}</div>
    <button class="cal-arrow" id="cal-next">›</button>
  `;
  view.appendChild(nav);

  const grid = document.createElement('div');
  grid.className = 'calendar-grid';

  DOW_NAMES.forEach(d => {
    const el = document.createElement('div');
    el.className = 'calendar-dow';
    el.textContent = d;
    grid.appendChild(el);
  });

  const firstOfMonth = new Date(calendarViewYear, calendarViewMonth, 1);
  const startOffset = firstOfMonth.getDay();
  const daysInMonth = new Date(calendarViewYear, calendarViewMonth + 1, 0).getDate();
  const logs = loadLogs();
  const todayKey = todayStr();

  for (let i = 0; i < startOffset; i++) {
    const empty = document.createElement('div');
    empty.className = 'calendar-day empty';
    grid.appendChild(empty);
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const dateObj = new Date(calendarViewYear, calendarViewMonth, d);
    const dateKey = formatDateKey(dateObj);
    const cell = document.createElement('div');
    cell.className = 'calendar-day';
    if (dateKey === todayKey) cell.classList.add('today');

    const hasLog = logs[dateKey] && logs[dateKey].workoutId;
    cell.innerHTML = `<span>${d}</span>${hasLog ? '<span class="cal-dot"></span>' : ''}`;

    cell.addEventListener('click', () => {
      renderDayLog(dateKey, { showBack: true });
    });

    grid.appendChild(cell);
  }

  view.appendChild(grid);
  mainEl.innerHTML = '';
  mainEl.appendChild(view);

  document.getElementById('cal-prev').addEventListener('click', () => {
    calendarViewMonth--;
    if (calendarViewMonth < 0) { calendarViewMonth = 11; calendarViewYear--; }
    renderCalendar();
  });
  document.getElementById('cal-next').addEventListener('click', () => {
    calendarViewMonth++;
    if (calendarViewMonth > 11) { calendarViewMonth = 0; calendarViewYear++; }
    renderCalendar();
  });
}

/* ---------------------------------------------------------------
   11. INIT
--------------------------------------------------------------- */
switchTab('today');