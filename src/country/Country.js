export class Country {
  constructor(data) {
    Object.assign(this, data);
  }

  dailyUpdate() {
    this.money += 1;
    this.food -= Math.floor(this.manpower / 100000);
  }
}
