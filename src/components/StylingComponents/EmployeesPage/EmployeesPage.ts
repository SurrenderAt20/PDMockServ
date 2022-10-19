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
    
const GridIconOne = styled(Grid3x3GapFill)<{isActive: boolean}>`
    display: flex;
    align-items: center;
    margin: 25px;
    margin-top: 3.5rem;
    color: ${props => props.isActive ? 'red' : 'black'}
`;

const GridIconTwo = styled(List) <{isActive: boolean}>`
    display: flex;
    align-items: center;
    margin: 25px;
    margin-top: 3.5rem;
    color: ${props => props.isActive ? 'red' : 'black'}
`;

const Headline = styled.h4 <{isActiveHeadline: boolean}>`
    font-weight: ${props => props.isActiveHeadline ? 'bold' : 'normal'}
`;

export {FilterGrid, GridIconOne, GridIconTwo, IconContainer, Headline}