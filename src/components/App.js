import React, { Component, useState } from "react";
import styled from "styled-components";
import ItemColumn from "./ItemColumn";

const Box = styled.div`
  margin: 50px;
  background-color: #97a3ad;
  min-height: 100vh;
  font-family: "Merriweather", serif;

  @media (max-width: 768px) {
    display: block;
    margin: 24px;
    min-height: 80vh;
  }

  @media (max-width: 576px) {
    margin: 0px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  padding: 60px 120px;

  @media (max-width: 1024px) {
    padding: 24px;
  }
`;

const Head = styled.div`
  font-size: 36px;
  font-weight: 500;
  color: #fff;
`;

const Description = styled.p`
  color: #03fcec;
  line-height: 22px;
  font-size: 14px;
`;

const Item = styled.div``;

const Select = styled.select`
  width: 100%;
  height: 35px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border: none;
  margin-left: 10px;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

const ItemContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 20px;

  @media (max-width: 768px) {
    display: block;
  }
`;

const ItemLeftwrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 20px;
  width: -webkit-fill-available;
  min-height: 350px;
`;

const ItemTop = styled.div`
  display: flex;
  flex-direction: column;
`;

const SearchWrap = styled.div`
  position: relative;
  img {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 68%;
    left: 92%;
    transform: translate(-50%, -50%);
    filter: brightness(0) invert(1);
  }
`;

const Label = styled.label`
  margin-bottom: 8px;
  font-weight: 700;
  font-size: 14px;
  color: #fff;
`;
const StyledInput = styled.input`
  background: #949ea6;
  color: white;

  border: 2px solid #fff;
  ::placeholder {
    color: white;
  }
`;

const TextInput = styled(StyledInput)`
  padding: 12px 8px;
  margin-bottom: 20px;
`;
const SearchInput = styled(StyledInput)`
  padding: 12px 8px;
  width: -webkit-fill-available;
  margin-top: 8px;
`;

const DropDown = styled.select`
  padding: 12px 8px;
  background: #949ea6;
  color: #fff;
  border: 2px solid #fff;
`;
const Button = styled(StyledInput)`
  background: none;
  margin-bottom: 12px;
  padding: 15px 8px;
  width: -webkit-fill-available;
  margin-bottom: 36px;
`;
const ItemBottom = styled.div``;

const ItemRightwrap = styled.div`
  width: -webkit-fill-available;
`;

const ItemHead = styled.div`
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  width: -webkit-fill-available;
  padding: 5px 0px;
  text-align: center;

  background: linear-gradient(
    180deg,
    rgba(162, 162, 164, 1) 0%,
    rgba(54, 78, 83, 1) 100%
  );
`;

export default function App() {
  const [item1, setItem1] = useState([]);
  const [item2, setItem2] = useState([]);
  const [colType, setColType] = useState("Choose");
  const [filter, setFilter] = useState("");
  const [newItem, setNewitem] = useState("");

  const handleSubmit = (event) => {
    if (colType === "column1") {
      setItem1([...item1, newItem]);
    } else if (colType === "column2") {
      setItem2([...item2, newItem]);
    }
    setNewitem("");
    event.preventDefault();
  };

  const handleChange = (event) => {
    setNewitem(event.target.value);
  };

  const handleSelect = (event) => {
    setColType(event.target.value);
  };

  const handleSearch = (event) => {
    setFilter(event.target.value);
  };

  const handleRemove = (colType, index) => {
    if (colType === "column1") {
      if (index > -1) {
        setItem1(item1.filter((item, itemIndex) => itemIndex !== index));
      }
    } else if (colType === "column2") {
      if (index > -1) {
        setItem2(item2.filter((item, itemIndex) => itemIndex !== index));
      }
    }
  };
  return (
    <Box>
      <Content>
        <Head>Marvelous!</Head>
        <Description>
          Lorem Ipsum is simple dummy text of the printing <br /> and
          typesetting industry. Lorem Ipsum has been <br /> the industry's
          standard dummy text ever since.
        </Description>
        <Item>
          <ItemHead>ADD AN ITEM</ItemHead>
          <ItemContent>
            <form onSubmit={handleSubmit}>
              <ItemLeftwrap>
                <ItemTop>
                  <TextInput
                    type="text"
                    placeholder="ENTER ITEM"
                    onChange={handleChange}
                    value={newItem}
                    required
                  />
                  <DropDown
                    name="Column select"
                    id="colSelect"
                    onChange={handleSelect}
                  >
                    <option value="choose">CHOOSE COLUMN</option>
                    <option value="column1">COLUMN 1</option>
                    <option value="column2">COLUMN 2</option>
                  </DropDown>
                </ItemTop>
                <ItemBottom>
                  <Button type="submit" value="ADD ITEM" />
                  <SearchWrap>
                    <Label>SEARCH AN ITEM</Label>
                    <SearchInput
                      type="text"
                      placeholder="SEARCH"
                      onChange={handleSearch}
                    />
                    <img src="search.png" alt="" />
                  </SearchWrap>
                </ItemBottom>
              </ItemLeftwrap>
            </form>
            <ItemRightwrap>
              <ItemColumn
                col1={item1}
                col2={item2}
                filter={filter}
                removeItem={handleRemove}
              />
            </ItemRightwrap>
          </ItemContent>
        </Item>
      </Content>
    </Box>
  );
}
