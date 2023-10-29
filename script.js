function isPrime(number) {
    if (number <= 1) return false;
    if (number <= 3) return true;
    if (number % 2 === 0 || number % 3 === 0) return false;
    for (let i = 5; i * i <= number; i += 6) {
      if (number % i === 0 || number % (i + 2) === 0) return false;
    }
    return true;
  }
  
  function getPrimesInRange(start, end) {
    const primes = [];
    for (let number = start; number <= end; number++) {
      if (isPrime(number)) {
        primes.push(number);
      }
    }
    return primes;
  }
  
  function showResults() {
    const start = parseInt(document.getElementById('start').value);
    const end = parseInt(document.getElementById('end').value);
    const startTime = performance.now();
    const primes = getPrimesInRange(start, end);
    const endTime = performance.now();
    const timeAllInstances = endTime - startTime;
  
    const averageTime = timeAllInstances / (primes.length || 1);
  
    document.getElementById('timeAllInstances').innerText = timeAllInstances.toFixed(2) + ' ms';
    document.getElementById('averageTime').innerText = averageTime.toFixed(2) + ' ms';
  }
  
  function showDetails() {
    const start = parseInt(document.getElementById('start').value);
    const end = parseInt(document.getElementById('end').value);
    const primes = getPrimesInRange(start, end);
    const timeSingleCheckTab = document.getElementById('timeSingleCheckTab').getElementsByTagName('table')[0];
    const timePrimeCheckTab = document.getElementById('timePrimeCheckTab').getElementsByTagName('table')[0];
  
    timeSingleCheckTab.innerHTML = '<tr><th>Number</th><th>Time (ms)</th></tr>';
    timePrimeCheckTab.innerHTML = '<tr><th>Prime Number</th><th>Time (ms)</th></tr>';
  
    for (let number = start; number <= end; number++) {
      const startTime = performance.now();
      isPrime(number);
      const endTime = performance.now();
      const time = endTime - startTime;
  
      const singleCheckRow = document.createElement('tr');
      singleCheckRow.innerHTML = `<td>${number}</td><td>${time.toFixed(2)}</td>`;
      timeSingleCheckTab.appendChild(singleCheckRow);
  
      if (primes.includes(number)) {
        const primeCheckRow = document.createElement('tr');
        primeCheckRow.innerHTML = `<td>${number}</td><td>${time.toFixed(2)}</td>`;
        timePrimeCheckTab.appendChild(primeCheckRow);
      }
    }
  
    openTab('timeSingleCheckTab', document.getElementsByClassName('tablink')[0]);
  
    const popup = document.getElementById('popup');
    popup.style.display = 'block';
  }
  
  function openTab(tabName, tabButton) {
    const tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    const tablinks = document.getElementsByClassName("tablink");
    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "#f2f2f2";
    }
    document.getElementById(tabName).style.display = "block";
    tabButton.style.backgroundColor = "#ddd";
  }
  
  function closePopup() {
    document.getElementById('popup').style.display = 'none';
  }
  