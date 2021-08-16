import React from "react";
import styled from "styled-components";

const Grid = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: auto auto;
  border: 4px solid #fff;

  @media (max-width: 576px) {
    display: block;
  }
`;

const Column = styled.div`
  color: #fff;
  background-color: #97a3ad;
  border-right: ${({index})=>index === 1 && '4px solid #fff'}
`;

const ItemWrap = styled.div`
min-height: 300px;
`

const Item = styled.div`
  color: ${({index})=>index%2==0?'#868687':'#fff'};
  background: ${({index})=>index%2==0?'#d9dadb':'#989a9c'};
  padding: 8px 8px 8px 16px;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
`;

const CloseBtn = styled.span`
color: ${({index})=>index%2==0?'#989a9c':'#FFF'};
padding: 0px 6px;
border: 2px solid ${({index})=>index%2===0?'#989a9c':'#FFF'};
font-size: 14px;
font-weight: 500;
`;

const ColHeader = styled.div`
  color: #fff;
  padding: 12px 8px;
  text-align: center;
  background: linear-gradient(180deg, rgba(162,162,164,1) 0%, rgba(54,78,83,1) 100%);
`;


function ItemColumns({col1,col2,filter,removeItem}) {
  return (
    <Grid>
      <Column index={1}>
        <ColHeader>COLUMN 1</ColHeader>
        <ItemWrap>
        {col1.filter(item=>item.search(filter)!==-1).map((row,index) => (
          <Item index={index}>{row} 
          <CloseBtn onClick={()=>removeItem('column1',index)} index={index}>x</CloseBtn>
          </Item>
        ))}
        </ItemWrap>
      </Column>
      <Column>
        <ColHeader>COLUMN 2</ColHeader>
        <ItemWrap>
        {col2.filter(item=>item.search(filter)!==-1).map((row,index) => (
          <Item index={index}>
            <span>{row}</span>
          <CloseBtn onClick={()=>removeItem('column2',index)} index={index}>x</CloseBtn>
          </Item>
        ))}
        </ItemWrap>
      </Column>
    </Grid>
  );
}

export default ItemColumns;
