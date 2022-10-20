export default class FamilyMember {
  id: number;
  name: string;
  children: number[];
  gender: string;
  parents: number[]
  
  constructor(
    id: number = 0,
    name: string = "",
    gender: string = "",
    children: [],
    parents: [],
  ) {
      this.id = id;
      this.name = name;
      this.gender = gender;
      this.children = children;
      this.parents = parents;
  }
}
  