let calendarSettings = {
    date: moment().set("date", 1),
    today: moment(),
};

const incrementMonth = () => {
    calendarSettings.date.add(1, "Months");
    console.log(`incremented to ${calendarSettings.date}`);
    displayCalendar(calendarSettings);
};

const decrementMonth = () => {
    calendarSettings.date.subtract(1, "Months");
    console.log(`decremented to ${calendarSettings.date}`);
    displayCalendar(calendarSettings);
};

const displayCalendar = (calendarSettings) => {
    const calendar = document.querySelector(".calendar-grid");

    const calendarTitle = calendarSettings.date.format("MMMM YYYY");
    const daysInMonth = calendarSettings.date.endOf("Month").date();
    const firstDay = calendarSettings.date.startOf("Month").isoWeekday();

    calendar.innerHTML = "";
    calendar.innerHTML = `
                          <div class="calendar-nav"><a onClick="decrementMonth()">&lt; </a></div>
                          <div class="calendar-title">${calendarTitle}</div>
                          <div class="calendar-nav calendar-nav__right"><a onClick="incrementMonth()"> &gt;</a></div>
                          <div class="calendar-dayname">Пн</div>
                          <div class="calendar-dayname">Вт</div>
                          <div class="calendar-dayname">Ср</div>
                          <div class="calendar-dayname">Чт</div>
                          <div class="calendar-dayname">Пт</div>
                          <div class="calendar-dayname">Сб</div>
                          <div class="calendar-dayname">Вс</div>
                          `;
    for (let day = 1; day < firstDay; day++) {
        let calendarDay = document.createElement("div");
        calendarDay.classList.add("calendar-day");
        calendar.appendChild(calendarDay);
    }
    for (let day = 1; day <= daysInMonth; day++) {
        let calendarDay = document.createElement("div");
        calendarDay.classList.add("calendar-day");
        if (
            calendarSettings.today.month() == calendarSettings.date.month() &&
            calendarSettings.today.year() == calendarSettings.date.year()
        ) {
            if (calendarSettings.today.date() == day) {
                calendarDay.classList.add("current-day");
            }
        }
        calendarDay.innerHTML = day;
        calendar.appendChild(calendarDay);
    }
    const daysOver7 = (firstDay + daysInMonth - 1) % 7;
    if (daysOver7) {
        for (let day = 0; day < 7 - daysOver7; day++) {
            let calendarDay = document.createElement("div");
            calendarDay.classList.add("calendar-day");
            calendar.appendChild(calendarDay);
        }
    }

    const sel = '.calendar-day';
    let event = document.createElement('button');
    event.setAttribute("class", "button_event");
    event.innerHTML = "3";
    document.querySelector(sel).append(event);



};

displayCalendar(calendarSettings);