import { POST_URL } from './constants/urls';

async function addToDo(title, body) {
  await fetch(POST_URL, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ body, title }),
  });
}

async function updateNote(title, body, working, id) {
  await fetch(`${POST_URL}/${id}`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ body, title, working }),
  });
}

export { addToDo, updateNote };
