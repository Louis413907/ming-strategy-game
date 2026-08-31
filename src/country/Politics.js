export class Politics {
  constructor(country) { this.country = country; }
  update() {
    if (this.country.corruption > 80) this.country.stability -= 1;
  }
}
