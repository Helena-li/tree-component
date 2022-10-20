import FamilyTreeModel from "../../Models/FamilyTreeModel";
import Member from "./Member";
import { css, cx } from '@emotion/css';

interface IFamily {
    members: FamilyTreeModel[] ;
}

const treeNode = css`
    padding-inline-start: 0;
    margin: 0;
    display: flex;

    --line-height: 40px;
    --line-width: 1px;
    --line-color: black;
    --line-border-radius: 1px;
    --line-style: solid;
    --node-padding: 5px;

    --tree-line-height: var(--line-height, 20px);
    --tree-line-width: var(--line-width, 1px);
    --tree-line-color: var(--line-color, black);
    --tree-line-border-radius: var(--line-border-radius, 5px);
    --tree-node-line-style: var(--line-style, solid);
    --tree-node-padding: var(--node-padding, 5px);
`;

function FamilyTree(props: IFamily) {

    const {members} = props;

    const tree = !!members[0] && props.members.map((member, i) => {
        return <div key={i}>
            <div key={member.id} className="member">
                <ul className={cx(treeNode)}>
                    <Member {...member} />
                </ul>
                {member.children.length>0 && <FamilyTree members={member.children} />}
            </div>
        </div>
        
    })

    return (
        <div style={{display:"flex", justifyContent:"center"}}>
            {tree}
        </div>
    );
}

export default FamilyTree;