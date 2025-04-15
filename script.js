document.getElementById("age-form").addEventListener("submit", function(e) {
    e.preventDefault();
  
    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value) - 1;
    const year = parseInt(document.getElementById("year").value);
  
    const birthDate = new Date(year, month, day);
    const today = new Date();
  
    if (birthDate > today) {
      document.getElementById("result").textContent = "⛔ Future birth date not allowed!";
      return;
    }
  
    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();
  
    if (ageDays < 0) {
      ageMonths--;
      ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
  
    if (ageMonths < 0) {
      ageYears--;
      ageMonths += 12;
    }
  
    document.getElementById("result").textContent =
      `🎉 You are ${ageYears} year(s), ${ageMonths} month(s), and ${ageDays} day(s) old! 🎈`;
  });
  