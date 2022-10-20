import React, { useState } from 'react';
import {getFamilyItems} from '../../Services/FamilyService'
import FamilyTree from './FamilyTree';
import {findRootParents, TransferFamilyTree} from '../../Utils/FamilyHelpers'

interface IFamilyTreeProps {
}

function FamilyIndex(props: IFamilyTreeProps){

    const [familyItems, setFamilyItems] = useState(getFamilyItems());
    
    const rootParents = findRootParents(familyItems);
    const tree = TransferFamilyTree(familyItems, rootParents);

    return (
        <div>
            <div>
                <FamilyTree members={!!tree?[tree]:[]} />
            </div>
        </div>
        
    )
}

export default FamilyIndex