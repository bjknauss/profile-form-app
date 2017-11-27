import faker from 'faker'

faker.seed(12345);

let status = [
  'active',
  'pending',
  'inactive'
];

let randomStatus = () => {
  let index = faker.random.number() % status.length;
  return status[index];
}

let randomAge = () => {
let age = faker.random.number() % 80
return age + 18
}

let init = () => {
  let data = {
    users: [],
    comments: []
  }

  for(let i = 0; i < 20; i++){
    let u = {
      id: faker.random.uuid(),
      username: faker.internet.userName(),
      age: randomAge(),
      status: randomStatus()
    }
    data.users.push(u)
  }

  for (let user of data.users){
    for(let i = 0; i < 5; i++){
      let c = {
        id: faker.random.uuid(),
        userId: user.id,
        text: faker.lorem.paragraph()
      }
      data.comments.push(c)
    }
  }

  return data;
}

let mock = init()
export const Users = mock.users
export const Comments = mock.comments