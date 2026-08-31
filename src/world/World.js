export class World {
  constructor(provinces = []) {
    this.provinces = provinces;
  }

  changeOwner(id, owner) {
    const province = this.provinces.find(p => p.id === id);
    if (province) province.owner = owner;
  }
}
