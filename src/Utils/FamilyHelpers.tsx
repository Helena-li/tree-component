import FamilyMember from "../Models/FamilyMember";
import FamilyTree from "../Models/FamilyTreeModel";

export function TransferFamilyTree(familyItems: FamilyMember[], rootParents: FamilyMember[]) : FamilyTree | undefined {

    if(rootParents.length!==2) return;

    if(!(familyItems.some(x=>x.id===rootParents[0].id) && familyItems.some(x=>x.id===rootParents[1].id))){
        return ;
    }

    let tree = transferMemebrToTree(rootParents, familyItems, 1);
    
    return tree;
}

function transferMemebrToTree (member: FamilyMember[], familyItems: FamilyMember[], generation: number) : FamilyTree|undefined{
    let familyTree = new FamilyTree ();
    
    if(member.length ===1){
        familyTree.id = member[0].id;
        familyTree.name = member[0].name;
        familyTree.gender = member[0].gender;
        familyTree.generation = generation;
        familyTree.hasPartner = false;

        return familyTree;
    }

    if(member.length ===2){
        familyTree.id = member[0].id;
        familyTree.name = member[0].name;
        familyTree.gender = member[0].gender;
        familyTree.generation = generation;
        familyTree.hasPartner = true;
        familyTree.partner = {
            id: member[1].id,
            name: member[1].name,
            gender: member[1].gender,
            partnerId: member[0].id
        }

        if(member[0].children.length>0){
           const children = getChildren(member[0].children, familyItems);

           children.forEach(x=>{
            const childWithPartner = findPartner(x, familyItems);

            const item = transferMemebrToTree(childWithPartner, familyItems, generation+1);

            !!item && familyTree.children.push(item);
           })
        }

        return familyTree;
    }

    console.log("Wrong family numbers, when transfer member to tree", member);
    return;
}

function getChildren (children: number[], familyItems: FamilyMember[]) : FamilyMember[]{
    let childrenItems: FamilyMember[] = [];

    children.forEach(childId=>{
       const child = familyItems.find(x=>x.id===childId);

       if(!child){
           console.log("child id", childId, "is not found in the family!");
       }
       else{
        childrenItems.push(child);
       }
    })

    return childrenItems;
}

function findPartner (child: FamilyMember, familyItems: FamilyMember[]) : FamilyMember[]{
    
    let childrenItems: FamilyMember[] = [];
    const partner =  familyItems.find(x => x.id!==child.id && x.children.some(y=>y===child.children[0]));

    childrenItems.push(child);

    !!partner && childrenItems.push(partner);

    return childrenItems;
}

export function findRootParents (familyItems: FamilyMember[]) : FamilyMember[] {
    let noParents: FamilyMember[] = [];
    let rootParents: FamilyMember[] = [];

    familyItems.forEach(member=>{
        member.parents.length===0 && noParents.push(member);
    })

    noParents.forEach(memeber=>{
        if(memeber.children.length>0 && noParents.some(x=>
            x.id!=memeber.id && x.children.some(y=>y==memeber.children[0]))){
            rootParents.push(memeber);
        }
    })

    return rootParents;
}
