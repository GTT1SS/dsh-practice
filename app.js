const form = document.querySelector('#new-form');
const input = document.querySelector('#new-text');
const list = document.querySelector('#list');
const empty = document.querySelector('#empty');
const clearCompleted = document.querySelector('#clear-completed');

const KEY = 'todo.items';
let items = load();

function load() {
  try {
    return JSON.parse(localStorage.getItem(KEY) ?? '[]');
  } catch {
    return [];
  }
}

function save() {
  localStorage.setItem(KEY, JSON.stringify(items));
}

function render() {
  list.textContent = '';
  for (const [index, item] of items.entries()) {
    const li = document.createElement('li');
    li.className = item.done ? 'done' : '';

    const box = document.createElement('input');
    box.type = 'checkbox';
    box.checked = item.done;
    box.addEventListener('change', () => {
      items[index].done = box.checked;
      save();
      render();
    });

    const text = document.createElement('span');
    text.textContent = item.text;

    const remove = document.createElement('button');
    remove.textContent = '删除';
    remove.addEventListener('click', () => {
      items.splice(index, 1);
      save();
      render();
    });

    li.append(box, text, remove);
    list.append(li);
  }
  empty.hidden = items.length > 0;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const text = input.value.trim();
  if (!text) return;
  items.push({ text, done: false });
  input.value = '';
  save();
  render();
});

clearCompleted.addEventListener('click', () => {
  items = items.filter((item) => !item.done);
  save();
  render();
});

render();
