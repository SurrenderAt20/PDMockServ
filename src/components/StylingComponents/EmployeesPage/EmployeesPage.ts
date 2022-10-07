import styled from "styled-components";
import {Grid3x3GapFill} from '@styled-icons/bootstrap/Grid3x3GapFill'
import {List} from '@styled-icons/bootstrap/List'

const FilterGrid = styled.div`
    display: flex;
    align-items: center;
    margin: 1rem;
    justify-content: space-between;
    `;

const IconContainer = styled.div`
    display: flex
`;
    
const GridIconOne = styled(Grid3x3GapFill)`
    display: flex;
    align-items: center;
    margin: 25px;
    margin-top: 3.5rem;

    & :target {
        color: red;
      }
`;

const GridIconTwo = styled(List)`
    display: flex;
    align-items: center;
    margin: 25px;
    margin-top: 3.5rem;

    &:active {
        color: red;
    }
`;





export {FilterGrid, GridIconOne, GridIconTwo, IconContainer}