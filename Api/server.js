function login (value) {
  console.log(JSON.stringify(value) + '??')
  return fetch('https://nameless-refuge-10092.herokuapp.com/login', {
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
  return fetch('https://nameless-refuge-10092.herokuapp.com/register', {
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
  return fetch('https://nameless-refuge-10092.herokuapp.com/getUser', {
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
  return fetch('https://nameless-refuge-10092.herokuapp.com/updateLevel', {
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

function updatePoints (name, num) {
  return fetch('https://nameless-refuge-10092.herokuapp.com/updatePoints', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: name,
      points: num
    })
  })
}

function getRanking () {
  return fetch('https://nameless-refuge-10092.herokuapp.com/getRanking', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
}

function getPosition (name) {
  return fetch('https://nameless-refuge-10092.herokuapp.com/getPosition', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: name
    })
  })
}

export { login, signin, getUser, updateLevel, getRanking, getPosition, updatePoints }
