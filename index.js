const form = document.getElementById('guest-form');
const input = document.getElementById('guest-name');
const guestList = document.getElementById('guest-list');
const categorySelect = document.getElementById('guest-category');
const guestCount = document.getElementById('guest-count');

function updateGuestCount() {
  const count = guestList.children.length;
  guestCount.textContent = `Total Guests: ${count}`;
}

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = input.value.trim();
  const category = categorySelect.value;
  if (name === '') return;

  const li = document.createElement('li');
  li.textContent = name + ' ';

  // Add category tag
  const categoryTag = document.createElement('span');
  categoryTag.textContent = category;
  categoryTag.className = `tag ${category.toLowerCase()}`;
  li.appendChild(categoryTag);

  // Add timestamp
  const timestamp = document.createElement('small');
  const timeNow = new Date().toLocaleTimeString();
  timestamp.textContent = ` — Added at ${timeNow}`;
  li.appendChild(timestamp);

  // Confirm button
  const confirmBtn = document.createElement('button');
  confirmBtn.textContent = 'Confirm';
  confirmBtn.addEventListener('click', () => {
    li.classList.toggle('confirmed');
  });

  // Remove button
  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  removeBtn.addEventListener('click', () => {
    guestList.removeChild(li);
    updateGuestCount();
  });

  // Edit button
  const editBtn = document.createElement('button');
  editBtn.textContent = 'Edit';
  editBtn.addEventListener('click', () => {
    const nameText = li.firstChild.textContent.trim();
    const inputEdit = document.createElement('input');
    inputEdit.type = 'text';
    inputEdit.value = nameText;
    li.insertBefore(inputEdit, li.firstChild);
    li.removeChild(li.firstChild);

    editBtn.textContent = 'Save';
    editBtn.onclick = () => {
      const newName = inputEdit.value.trim();
      if (newName !== '') {
        const newText = document.createTextNode(newName + ' ');
        li.insertBefore(newText, inputEdit);
        li.removeChild(inputEdit);
        editBtn.textContent = 'Edit';
      }
    };
  });

  li.appendChild(confirmBtn);
  li.appendChild(removeBtn);
  li.appendChild(editBtn);
  guestList.appendChild(li);

  input.value = '';
  updateGuestCount();
});
