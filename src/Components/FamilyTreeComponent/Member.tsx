import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import FamilyTreeModel from '../../Models/FamilyTreeModel';
import './Member.css';
import { css, cx } from '@emotion/css';

const verticalLine = css`
  content: '';
  position: absolute;
  top: 0;
  height: 40px;
  box-sizing: border-box;
`;

const node = css`
  flex: auto;
  margin: auto 10px;
  text-align: center;
  list-style-type: none;
  position: relative;
  padding: 20px 2px 0
    2px;
`;

const nodeLines = css`
  ::before,
  ::after {
    ${verticalLine};
    right: 50%;
    width: 50%;
    border-top: 10px solid
      green;
  }
  ::after {
    left: 50%;
    border-left: 10px solid
      green;
  }

  :only-of-type {
    padding: 0;
  }

  :first-of-type {
    ::before {
      border: 0 none;
    }
    ::after {
      border-radius: var(--tree-line-border-radius) 0 0 0;
    }
  }

  :last-of-type {
    ::before {
      border-right: 2px solid
        green;
      border-radius: 0 var(--tree-line-border-radius) 0 0;
    }
    ::after {
      border: 0 none;
    }
  }
`;

function Member(props: FamilyTreeModel) {

    return (
        <li className={cx(node, nodeLines)}>
            <div>
                <div style={{marginTop: `40px`}}></div>
                <Card className="MediaCardContainer" 
                    style={{
                        backgroundColor: props.gender ==="female"? "lightpink": "lightblue",
                        }}>
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {props.name}
                        </Typography>
                    </CardContent>
                </Card>

                {props.hasPartner && 
                    <Card className="MediaCardContainer" style={{
                        marginTop: "5px",
                        backgroundColor: props.partner?.gender ==="female"? "lightpink": "lightblue", 
                        }}>
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {props.partner?.name}
                            </Typography>
                        </CardContent>
                    </Card>}
            </div>
        </li>
    );
}

export default Member;