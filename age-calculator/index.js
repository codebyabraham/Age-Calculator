function calculateAge() {
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);
  
    if (isNaN(day) || isNaN(month) || isNaN(year)) {
      const resultElement = document.getElementById('result');
      resultElement.innerHTML = 'Please enter valid numbers for day, month, and year.';
      return; 
    }
  
    if (month > 12) {
      const resultElement = document.getElementById('result');
      resultElement.innerHTML = 'Please enter a valid month.';
      return; 
    }
  
    const maxDaysInMonth = new Date(year, month, 0).getDate();
    if (day > maxDaysInMonth) {
      const resultElement = document.getElementById('result');
      resultElement.innerHTML = 'Please enter a valid day for the selected month.';
      return; 
    }
  
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1; 
    const currentDay = currentDate.getDate();
  
    let age = currentYear - year;
    let months = currentMonth - month;
    let days = currentDay - day;
  
    if (currentMonth < month || (currentMonth === month && currentDay < day)) {
      age--;
      months += 12;
    }
  
    if (days < 0) {
      months--;
      const daysInPrevMonth = new Date(currentYear, currentMonth - 1, 0).getDate();
      days += daysInPrevMonth;
    }
  
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `Your age is: ${age} years, ${months} months, and ${days} days`;
  }
  