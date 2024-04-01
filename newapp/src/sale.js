import React, { useState, useEffect, useRef } from "react";
import "./decoration.css";
import { BrowserRouter , Route, Routes, Link } from 'react-router-dom';
import logo_d from "./image 2.png";
import saleimage from "./image 3.png";
import candle from "./candle image.png";
import standholder from "./stand holder.png";
import candleset from "./candle set.png";
import dinner2 from "./dinner2.png";
import bathimage5 from "./bath image 5.png";
import kitchen4 from "./kitchen4.png";
import kitchen11 from "./kitchen11.png";
import kitchen12 from "./kitchen12.png";
import kitchen13 from "./kitchen13.png";
import dinner8 from "./dinner8.png";
import dinner9 from "./dinner9.png";
import dinner10 from "./dinner10.png";
import dinner11 from "./dinner11.png";
import dinner12 from "./dinner12.png";
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
function Bath() {
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
      image: `${dinner2}`,
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
      sub_image: `${kitchen4}`,
      name: "Leaf Bath",
      price: "$450",
    },
    {
      sub_image: `${standholder}`,
      name: "Blue Bath",
      price: "$700",
    },
    {
      sub_image: `${dinner9}`,
      name: "Flower Bath",
      price: "$1350",
    },
    {
      sub_image: `${kitchen11}`,
      name: "Skyblue Ceramic Bath ",
      price: "$850",
    },
  ]);
  const [subproduct_1, setsubproduct_1] = useState([
    {
      sub_image_1: `${bathimage5}`,
      name: "Round Bath",
      price: "$740",
    },
    {
      sub_image_1: `${kitchen13}`,
      name: "Orange Bath",
      price: "$1300",
    },
    {
      sub_image_1: `${dinner8}`,
      name: "White Bath",
      price: "$540",
    },
    {
      sub_image_1: `${kitchen12}`,
      name: "Pink stand",
      price: "$750",
    },
  ]);
  const [subproduct_2, setsubproduct_2] = useState([
    {
      sub_image_2: `${dinner10}`,
      name: "Green Bath",
      price: "$1340",
    },
    {
      sub_image_2: `${dinner12}`,
      name: "Black Bath",
      price: "$750",
    },
    {
      sub_image_2: `${dinner11}`,
      name: "Darkblue Bath",
      price: "$860",
    },
    {
      sub_image_2: `${saleimage}`,
      name: "Skyblue Set",
      price: "$1000",
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
              <Link to="/decoration" className="paragraph">Bath</Link> 
              <Link to="/Kitchen" className="paragraph">Kitchen</Link> 
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
        {/* <div className="offercard">  <Image src={bathcard} /></div> */}
       
        <div className="product_container">
          {product.map((e, index) => (
            <div className="product" key={e}>
            <img src={e.image} className="product_image"></img>
                  <div className="icon_outlined">{e.icon}</div> 
              <p className="product_parah">{e.dealbutton}</p>
             
            </div>
           
          ))}
          
        </div>
        
        <div className="thired_container">
        <div className="filter_container">
            <h4 className="fliter_head">Filter</h4>
            <p className="fliter_parah">Type <DownOutlined  className="dropdown"/></p>
            <Divider/>
            <p className="fliter_parah">Color <DownOutlined  className="dropdown"/></p>
            <Divider/>
            <p className="fliter_parah">Price <DownOutlined  className="dropdown"/></p>
            <Divider/>
            <p className="fliter_parah">Materials<DownOutlined  className="dropdown"/></p>
            <Divider/>
            <p className="fliter_parah">Shape <DownOutlined  className="dropdown"/></p>
            <Divider/>
            <p className="fliter_parah">Size <DownOutlined  className="dropdown"/></p>
            <Divider/>
        </div>
        
        <div className="subimage_container">
            <div className="row_1">
              {subproduct.map((i, index) => (
                <div className="sub_product_1" key={i}>
                  <div>
                    <img src={i.sub_image} className="subproduct_image"></img>
                    <p className="subproduct_parah">{i.name}</p>
                    <p className="subproduct_parah">{i.price}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="row_1">
              {subproduct_1.map((e, index) => (
                <div className="sub_product_1" key={e}>
                  <div>
                    <img src={e.sub_image_1} className="subproduct_image"></img>
                    <p className="subproduct_parah">{e.name}</p>
                    <p className="subproduct_parah">{e.price}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="row_1">
              {subproduct_2.map((p, index) => (
                <div className="sub_product_1" key={p}>
                  <div>
                    <img src={p.sub_image_2} className="subproduct_image"></img>
                    <p className="subproduct_parah">{p.name}</p>
                    <p className="subproduct_parah">{p.price}</p>
                  </div>
                </div>
              ))}
            </div>
        </div>
      </div>
    </div>
    </>
  );
}
export default Bath;
