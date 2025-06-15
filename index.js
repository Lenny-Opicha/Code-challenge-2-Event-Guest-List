const form = document.getElementById('guest-form');
const input = document.getElementById('guest-name');
const guestList = document.getElementById('guest-list');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = input.value.trim();
  if (name === '') return;

  const li = document.createElement('li');
  li.textContent = name;

  const confirmBtn = document.createElement('button');
  confirmBtn.textContent = 'Confirm';
  confirmBtn.addEventListener('click', () => {
    li.classList.toggle('confirmed');
  });

  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  removeBtn.addEventListener('click', () => {
    guestList.removeChild(li);
  });

  li.appendChild(confirmBtn);
  li.appendChild(removeBtn);
  guestList.appendChild(li);

  input.value = '';
});
