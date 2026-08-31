export class Economy {
  constructor(country) { this.country = country; }
  dailyUpdate() {
    this.country.money += Math.floor(this.country.population / 100000);
    this.country.food -= Math.floor(this.country.manpower / 50000);
  }
}
