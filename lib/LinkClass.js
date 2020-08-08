export default class Link {
  constructor(csv) {
    this.timestamp = csv['timestamp'];
    this.category = csv['category'];
    this.type = csv['type'];
    this.title = csv['title'];
    this.desc = csv['desc'];
    this.url = csv['url'];
  }
}
