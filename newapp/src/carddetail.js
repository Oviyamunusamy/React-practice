import React, { useState, useEffect, useRef } from "react";
import "./decoration.css";
import { BrowserRouter , Route, Routes, Link } from 'react-router-dom';
import logo_d from "./image 2.png";
import saleimage from "./image 3.png";
import candle from "./candle image.png";
import standholder from "./stand holder.png";
import candleset from "./candle set.png";
import offercard from "./offer card .jpg";
import { Image, Button, Dropdown, Flex, Divider } from "antd";
import {
  SearchOutlined,
  HeartOutlined,
  UserOutlined,
  ShoppingOutlined,
  DownOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
function Landing() {
  const [product, setproduct] = useState([
    {
      icon:<LeftOutlined />
    },
    {
      image: `${saleimage}`,
      dealbutton: "SALE",
    },
    {
      image: `${candle}`,
      dealbutton: "CANDLES",
    },
    {
      image: `${standholder}`,
      dealbutton: "STANDS & HOLDERS",
    },
    {
      image: `${candleset}`,
      dealbutton: "CANDLES SET",
    },
    {
      icon:<RightOutlined />
    },
  ]);
  const [subproduct, setsubproduct] = useState([
    
    {
      sub_image: `${saleimage}`,
      name:"candle stand",
      price:"$1200",
      
    },
    {
        sub_image: `${candle}`,
      name:"candle stand",
      price:"$1200",
    },
    {
        sub_image: `${standholder}`,
      name:"candle stand",
      price:"$1200",
    },
    {
        sub_image: `${candleset}`,
      name:"candle stand",
      price:"$1200",
      
    },
   
  ]);
  return (
    <>
      <div className="decoration_fullcontainer">
        <div className="headerbox_container">
          <div className="dec_logo_container">
            <Image src={logo_d} />
          </div>

          <div className="nav_details">
            <Flex gap="large">
              
              <Link to="/dining" className="paragraph">Dining</Link> 
              <Link to="/bath" className="paragraph">Bath</Link> 
              <Link to="/kitchen" className="paragraph">Kitchen</Link> 
              <Link to="/sale" className="paragraph">Sale</Link> 
              
              
            </Flex>
          </div>
          <div className="icons">
            <Flex gap="large">
              <SearchOutlined />
              <HeartOutlined />
              <UserOutlined />
              <ShoppingOutlined />
            </Flex>
          </div>
        </div>
       </div>
        
    
    </>
  );
}
export default Landing;
