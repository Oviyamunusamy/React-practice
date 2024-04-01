
import React, { useState, useEffect, useRef } from "react";
import "./decoration.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import logo_d from "./image 2.png";
import saleimage from "./image 3.png";
import kitchen1 from "./kitchen1.png";
import kitchen2 from "./kitchen2.png";
import kitchen3 from "./kitchen3.png";
import kitchen4 from "./kitchen4.png";
import kitchen5 from "./kitchen5.png";
import kitchen6 from "./kitchen6.png";
import kitchen7 from "./kitchen7.png";
import kitchen8 from "./kitchen8.png";
import kitchen9 from "./kitchen9.png";
import kitchen10 from "./kitchen10.png";
import kitchen11 from "./kitchen11.png";
import kitchen12 from "./kitchen12.png";
import kitchen13 from "./kitchen13.png";
import candle from "./candle image.png";
import standholder from "./stand holder.png";
import candleset from "./candle set.png";
import kitchencard from "./kitchen.png";
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
function Kitchen() {
  const [product, setproduct] = useState([
    {
      icon: <LeftOutlined />,
    },
    {
      image: `${kitchen8}`,
      dealbutton: "50% oFFER",
    },
    {
      image: `${kitchen9}`,
      dealbutton: "TOWEL",
    },
    {
      image: `${kitchen13}`,
      dealbutton: "DISPENSERS",
    },
    {
      image: `${kitchen11}`,
      dealbutton: "BRUSH HOLDER",
    },
    {
      icon: <RightOutlined />,
    },
  ]);
  const [subproduct, setsubproduct] = useState([
    {
      sub_image: `${kitchen1}`,
      name: "Leaf Bath",
      price: "$450",
    },
    {
      sub_image: `${kitchen2}`,
      name: "Blue Bath",
      price: "$700",
    },
    {
      sub_image: `${kitchen3}`,
      name: "Flower Bath",
      price: "$1350",
    },
    {
      sub_image: `${kitchen4}`,
      name: "Skyblue Ceramic Bath ",
      price: "$850",
    },
  ]);
  const [subproduct_1, setsubproduct_1] = useState([
    {
      sub_image_1: `${kitchen5}`,
      name: "Round Bath",
      price: "$740",
    },
    {
      sub_image_1: `${kitchen6}`,
      name: "Orange Bath",
      price: "$1300",
    },
    {
      sub_image_1: `${kitchen7}`,
      name: "White Bath",
      price: "$540",
    },
    {
      sub_image_1: `${kitchen8}`,
      name: "Pink stand",
      price: "$750",
    },
  ]);
  const [subproduct_2, setsubproduct_2] = useState([
    {
      sub_image_2: `${kitchen9}`,
      name: "Green Bath",
      price: "$1340",
    },
    {
      sub_image_2: `${kitchen10}`,
      name: "Black Bath",
      price: "$750",
    },
    {
      sub_image_2: `${kitchen11}`,
      name: "Darkblue Bath",
      price: "$860",
    },
    {
      sub_image_2: `${kitchen12}`,
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
              <Link to="/dining" className="paragraph">
                Dining
              </Link>
              <Link to="/bath" className="paragraph">
                Bath
              </Link>
              <Link to="/Kitchen" className="paragraph">
                Kitchen
              </Link>
              <Link to="/sale" className="paragraph">
                Sale
              </Link>
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
        <div className="offercard">
          {" "}
          <Image src={kitchencard} />
        </div>

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
            <p className="fliter_parah">
              Type <DownOutlined className="dropdown" />
            </p>
            <Divider />
            <p className="fliter_parah">
              Color <DownOutlined className="dropdown" />
            </p>
            <Divider />
            <p className="fliter_parah">
              Price <DownOutlined className="dropdown" />
            </p>
            <Divider />
            <p className="fliter_parah">
              Materials
              <DownOutlined className="dropdown" />
            </p>
            <Divider />
            <p className="fliter_parah">
              Shape <DownOutlined className="dropdown" />
            </p>
            <Divider />
            <p className="fliter_parah">
              Size <DownOutlined className="dropdown" />
            </p>
            <Divider />
          </div>

          <div className="subimage_container">
            <div className="row_1">
              {subproduct.map((i, index) => (
                <div className="sub_product_1" key={i}>
                  <div>
                    <img src={i.sub_image} className="subproduct_image"></img>
                    <Link to="/carddetail" className="subproduct_parah">
                      {i.name}
                    </Link>
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
                    <Link to="/carddetail" className="subproduct_parah">
                      {e.name}
                    </Link>
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
                    <Link to="/carddetail" className="subproduct_parah">
                      {p.name}
                    </Link>
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
export default Kitchen;
