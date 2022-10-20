export default class Partner {
    id: number;
    name: string;
    gender: string;
    partnerId: number;
    
    constructor(
      id: number = 0,
      name: string = "",
      gender: string = "",
      partnerId: number = 0,
    ) {
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.partnerId = partnerId;
    }
}