// ==================== Question 2: DOM Tasks ====================

// 1. Toggle image visibility
document.querySelector('#task1 img').addEventListener('click', function () {
    this.classList.toggle('hidden');
  });
  
  // 2. Background and text color changes
  const colorText = document.querySelector('#task2 p');
  colorText.addEventListener('click', () => colorText.classList.toggle('pink-bg'));
  colorText.addEventListener('dblclick', () => colorText.style.color = 'purple');
  
  // 3. Text cloning and bolding
  const input = document.querySelector('#task3 input');
  const output = document.querySelector('#task3 p');
  const clearBtn = document.getElementById('clearBtn');
  const boldBtn = document.getElementById('boldBtn');
  
  input.addEventListener('input', e => {
    if (e.inputType === 'deleteContentBackward') {
      output.textContent = output.textContent.slice(0, -1);
    } else {
      output.textContent += e.data || '';
    }
  });
  
  clearBtn.addEventListener('click', () => {
    input.value = '';
    output.textContent = '';
    input.focus();
  
    if (!document.getElementById('boldBtn')) {
      const btn = document.createElement('button');
      btn.id = 'boldBtn';
      btn.textContent = 'Bold First Half';
      btn.addEventListener('click', boldFirstHalf);
      document.querySelector('#task3').appendChild(btn);
    }
  });
  
  function boldFirstHalf() {
    const text = output.textContent;
    const half = Math.floor(text.length / 2);
    output.innerHTML = `<strong>${text.slice(0, half)}</strong>${text.slice(half)}`;
    this.remove();
  }
  
  boldBtn.addEventListener('click', boldFirstHalf);
  
  // 4. List behavior
  const list = document.querySelector('#task4 ul');
  
  list.addEventListener('mouseover', e => {
    if (e.target.tagName === 'LI') {
      const items = [...list.children];
      if (e.target === items[0] || e.target === items[items.length - 1]) {
        e.target.style.backgroundColor = 'pink';
      }
    }
  });
  
  list.addEventListener('mouseout', e => {
    if (e.target.tagName === 'LI') e.target.style.backgroundColor = '';
  });
  
  list.addEventListener('click', e => {
    if (e.target.tagName === 'LI') {
      const newItem = document.createElement('li');
      newItem.textContent = 'New Item';
      e.target.after(newItem);
    }
  });
  
  // 5. Load content from local file
  document.querySelector('#task5 h4').addEventListener('click', function () {
    fetch('wikipedia.html')
      .then(res => {
        if (!res.ok) throw new Error('Failed to load file');
        return res.text();
      })
      .then(html => {
        const doc = new DOMParser().parseFromString(html, 'text/html');
        this.parentNode.innerHTML = doc.body.innerHTML;
      })
      .catch(err => {
        console.error(err);
        this.parentNode.innerHTML += '<p>Error loading content.</p>';
      });
  });
  
  // 6. Currency conversion using API
  const form = document.getElementById('currencyForm');
  const result = document.getElementById('result');
  const API_KEY = 'YOUR_API_KEY_HERE'; // Replace with your real key
  
  form.addEventListener('submit', e => {
    e.preventDefault();
  
    const amount = parseFloat(document.getElementById('amount').value);
    const base = document.getElementById('baseCurrency').value;
    const target = document.getElementById('targetCurrency').value;
  
    if (!amount || isNaN(amount)) return result.textContent = 'Enter a valid number';
    if (!base || !target) return result.textContent = 'Select both currencies';
  
    fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=${API_KEY}&base_currency=${base}&currencies=${target}`)
      .then(res => {
        if (!res.ok) throw new Error('Bad response');
        return res.json();
      })
      .then(data => {
        const rate = data.data[target];
        const converted = (amount * rate).toFixed(2);
        result.innerHTML = `
          <p>${amount} ${base} = ${converted} ${target}</p>
          <p>Rate: 1 ${base} = ${rate.toFixed(6)} ${target}</p>
        `;
      })
      .catch(err => {
        console.error(err);
        result.textContent = 'Conversion failed. Try again.';
      });
  });
  
