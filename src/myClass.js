export default class Foo {
  constructor(div) {
    div.innerText = 'abs';
  }
  async find() {
    return await this.query.find(); 
  }
}

