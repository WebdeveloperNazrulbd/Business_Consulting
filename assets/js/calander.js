// Calendar js

// ==============================
// CALENDAR + TIME SLOT FULL JS
// ==============================

// Days
const DAYS = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

// Month Names
const MONTHS_LONG = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

// ==============================
// DEFAULT SELECTED DATE
// ==============================

let selected = {
  year: 2026,
  month: 3, // April
  day: 13
};

// ==============================
// ELEMENTS
// ==============================

const monthSel = document.getElementById('monthSel');
const yearSel = document.getElementById('yearSel');

const calGrid = document.getElementById('calGrid');

const timePanelTitle =
  document.getElementById('timePanelTitle');

const dateInput =
  document.querySelector('.cal-date-input');

// ==============================
// AUTO GENERATE YEARS
// ==============================

yearSel.innerHTML = '';

for (let y = 2025; y <= 2035; y++) {

  const option = document.createElement('option');

  option.value = y;
  option.textContent = y;

  if (y === selected.year) {
    option.selected = true;
  }

  yearSel.appendChild(option);
}

// ==============================
// UPDATE TITLE + INPUT
// ==============================

function updateTitle() {

  const date = new Date(
    selected.year,
    selected.month,
    selected.day
  );

  const dayName =
    date.toLocaleDateString('en-US', {
      weekday: 'long'
    });

  timePanelTitle.textContent =
    `${dayName}, ${MONTHS_LONG[selected.month]} ${selected.day}`;

  const mm =
    String(selected.month + 1).padStart(2, '0');

  const dd =
    String(selected.day).padStart(2, '0');

  dateInput.value =
    `${mm}/${dd}/${selected.year}`;
}

// ==============================
// RENDER CALENDAR
// ==============================

function renderCalendar() {

  calGrid.innerHTML = '';

  // ==========================
  // DAY HEADERS
  // ==========================

  DAYS.forEach(day => {

    const header = document.createElement('div');

    header.className = 'cal-day-header';

    header.textContent = day;

    calGrid.appendChild(header);
  });

  const year = selected.year;
  const month = selected.month;

  // First day
  const firstDay =
    new Date(year, month, 1).getDay();

  // Convert Sunday first -> Monday first
  const startOffset =
    (firstDay + 6) % 7;

  // Days count
  const daysInMonth =
    new Date(year, month + 1, 0).getDate();

  const daysInPrevMonth =
    new Date(year, month, 0).getDate();

  // ==========================
  // PREVIOUS MONTH DAYS
  // ==========================

  for (let i = startOffset - 1; i >= 0; i--) {

    const day = document.createElement('div');

    day.className =
      'cal-day other-month';

    day.textContent =
      daysInPrevMonth - i;

    calGrid.appendChild(day);
  }

  // ==========================
  // CURRENT MONTH DAYS
  // ==========================

  for (let d = 1; d <= daysInMonth; d++) {

    const day = document.createElement('div');

    let className = 'cal-day';

    // Selected Day
    if (
      d === selected.day &&
      month === selected.month &&
      year === selected.year
    ) {
      className += ' selected';
    }

    day.className = className;

    day.textContent = d;

    // Click Event
    day.addEventListener('click', () => {

      selected.day = d;

      renderCalendar();

      updateTitle();
    });

    calGrid.appendChild(day);
  }

  // ==========================
  // NEXT MONTH FILLERS
  // ==========================

  const totalCells =
    startOffset + daysInMonth;

  const remainingCells =
    (7 - (totalCells % 7)) % 7;

  for (let d = 1; d <= remainingCells; d++) {

    const day = document.createElement('div');

    day.className =
      'cal-day other-month';

    day.textContent = d;

    calGrid.appendChild(day);
  }
}

// ==============================
// PREVIOUS MONTH BUTTON
// ==============================

document
  .getElementById('prevMonth')
  .addEventListener('click', () => {

    let currentMonth =
      parseInt(monthSel.value);

    let currentYear =
      parseInt(yearSel.value);

    // Decrease Month
    currentMonth--;

    // January -> December
    if (currentMonth < 0) {

      currentMonth = 11;

      currentYear--;
    }

    // Update Selected
    selected.month = currentMonth;
    selected.year = currentYear;

    // Update Dropdowns
    monthSel.value = currentMonth;
    yearSel.value = currentYear;

    // Refresh
    renderCalendar();

    updateTitle();
  });

// ==============================
// NEXT MONTH BUTTON
// ==============================

document
  .getElementById('nextMonth')
  .addEventListener('click', () => {

    let currentMonth =
      parseInt(monthSel.value);

    let currentYear =
      parseInt(yearSel.value);

    // Increase Month
    currentMonth++;

    // December -> January
    if (currentMonth > 11) {

      currentMonth = 0;

      currentYear++;
    }

    // Update Selected
    selected.month = currentMonth;
    selected.year = currentYear;

    // Update Dropdowns
    monthSel.value = currentMonth;
    yearSel.value = currentYear;

    // Refresh
    renderCalendar();

    updateTitle();
  });

// ==============================
// MONTH DROPDOWN CHANGE
// ==============================

monthSel.addEventListener('change', () => {

  selected.month =
    parseInt(monthSel.value);

  renderCalendar();

  updateTitle();
});

// ==============================
// YEAR DROPDOWN CHANGE
// ==============================

yearSel.addEventListener('change', () => {

  selected.year =
    parseInt(yearSel.value);

  renderCalendar();

  updateTitle();
});

// ==============================
// TIME SLOT SELECT
// ==============================

document
  .getElementById('timeSlots')
  .addEventListener('click', e => {

    const slot =
      e.target.closest('.time-slot');

    if (!slot) return;

    document
      .querySelectorAll('.time-slot')
      .forEach(s => {
        s.classList.remove('selected');
      });

    slot.classList.add('selected');
  });

// ==============================
// INITIAL LOAD
// ==============================

monthSel.value = selected.month;

yearSel.value = selected.year;

updateTitle();

renderCalendar();





