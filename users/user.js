export default class User {
  static id = 0
  name
  email

  constructor(name, email) {
    this.name = name
    this.email = email
    this.id = id++
  }
}

