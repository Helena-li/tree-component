import Partner from "./Partner";

export default class FamilyTreeModel {
    id: number;
    name: string;
    gender: string;
    generation: number;
    hasPartner: boolean;
    partner: Partner | undefined;
    children: FamilyTreeModel[] ;
    
    constructor(
      id: number = 0,
      name: string = "",
      gender: string = "",
      generation: number = 0,
      hasPartner: boolean = false,
      children: FamilyTreeModel[]=[],
    ) {
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.hasPartner = hasPartner;
        this.generation = generation;
        this.children = children;
    }
}
    