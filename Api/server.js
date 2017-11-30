function login (value) {
  console.log(JSON.stringify(value) + '??')
  return fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: value.name,
      password: value.password
    })
  })
}

function signin (value) {
  return fetch('http://localhost:3000/register', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: value.name,
      password: value.password
    })
  })
}

function getUser (value) {
  return fetch('http://localhost:3000/getUser', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: value
    })
  })
}

function updateLevel (name, num) {
  return fetch('http://localhost:3000/updateLevel', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: name,
      level: num
    })
  })
}

export { login, signin, getUser, updateLevel }
