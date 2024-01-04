import React, { useState } from "react";

import logofull from '../../img/logoFull.svg';

import styled from "styled-components";
import "./header.css";
import {
  faBars,
  faTimes,

} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

const Menu = styled.div`
  display: ${(props) => (props.isopen ? "block" : "none")};
  position: absolute;
  top: 0;
  right: 0;
  height: 400px;
  width: 250px;
  background: var(--color2);
  padding: 20px;
  border: 1px solid var(--color3);
  z-index: 1;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 10px;
    text-align: center;
  }

  a {
    text-decoration: none;
    color: var(--color1);
    font-size: 18px;

    &:hover {
      color: var(--color3);
    }
  }
`;

const MenuItem = styled.a`
  display: block;
  cursor: pointer;
  font-size: 16px;
  margin-bottom: 15px;
`;

const BurgerSubMenu = styled.ul`
  display: ${(props) => (props.isopen ? "block" : "none")};
  position: relative;
  width: 100%;
  transition: 0.5;
  padding: 0;

  background-color: var(--color2);
  border: 1px solid var(--color3);
  border-left: none;
  border-right: none;

  li {
    padding: 5px 10px;
    border-radius: 4px;
    transition: background-color 0.3s;
    cursor: pointer;

    &:hover {
      background-color: #f0f0f0;
    }
  }
`;

const menus = [
  {
    name: "우리술 소개",
    href: "/category1",
    subMenus: [
      { name: "전통주란?", href: "/category1" },
      { name: "우리술의 종류", href: "/category1/Hk2" },
      {
        name: "나만의 술 찾기", href: "https://thesool.com/aiSommelier/main.html",
        openInNewTab: true,
      },
    ],
  },
  {
    name: "우리술 소식",
    href: "/category2",
    subMenus: [
      { name: "공지사항/이벤트", href: "/category2/" },

    ],
  },
  {
    name: "우리술 구매처",
    href: "/category3",
    subMenus: [
      { name: "전통주 전문주점", href: "/category3" },
      { name: "오프라인 판매처", href: "/category3/offline" },
      { name: "온라인 판매처", href: "/category3/online" },
    ],
  },
  {
    name: "찾아가는 양조장",
    href: "/category4",
    subMenus: [
      { name: "양조장 전체지도", href: "/category4" }

    ],
  },
  {
    name: "우리술 지도",
    href: "/",
    subMenus: [
      {
        name: "양조장",
        href: "https://www.google.com/maps/@/data=!3m1!4b1!4m3!11m2!2sC9Ir2t0tTKaniRITKZFyIg!3e3?entry=ttu",
        openInNewTab: true,
      },
      {
        name: "전통주 판매처",
        href: "https://www.google.com/maps/@/data=!3m1!4b1!4m3!11m2!2shTJEq4uERViSwjfFZoC2rw!3e3?entry=tts&shorturl=1",
        openInNewTab: true,
      },
      {
        name: "전통주점",
        href: "https://www.google.com/maps/@/data=!3m1!4b1!4m3!11m2!2sEkPo4ZROT-WNn4mRM2NXuA!3e3?entry=tts&shorturl=1",
        openInNewTab: true,
      },
    ],
  },
];

const MainMenu = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 0 20px;
  align-items: center;
  position: relative;
`;

const MainMenuItem = styled.div`
  cursor: pointer;
  color: var(--color1);
  padding: 10px;
  gap: 10px;
  width: 120px;
  top: 100%;
  transition: background-color 0.3s;
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: 999;

  &:hover {
    color: var(--color3);
  }
  @media (max-width: 767px) {
    display: none;
  }
`;

const SubMenu = styled.ul`
  display: ${(props) => (props.isvisible ? "block" : "none")};
  position: absolute;
  top: 100%;

  background-color: #fff;
  color: var(--color1);
  padding: 0;
  gap: 10px;

  align-items: center;
  flex-direction: column;
  line-height: 50px;
  width: 150px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);

  li {
    padding: 5px 10px;
    border-radius: 4px;
    transition: background-color 0.3s;
    cursor: pointer;

    &:hover {
      background-color: #f0f0f0;
    }
  }
`;

function Header() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [isshow, setisshow] = useState(false);
  const [isopen, setisopen] = useState(false);

  const BurgerMenu = ({ isopen, menus }) => {
    return (
      <Menu isopen={isopen}>
        <FontAwesomeIcon icon={faTimes} size="lg" style={{ color: 'var(--color1)' }} />{" "}

        {" "}
        {menus.map((menu, index) => (
          <MenuItem
            key={index}
            onMouseEnter={() => handleMenuEnter(index)}
            onMouseLeave={handleMenuLeave}
          >
            {menu.name}
            <BurgerSubMenu isopen={activeMenu === index}>
              {menu.subMenus.map((subMenu, subIndex) => (
                <li
                  key={subIndex}
                  onMouseEnter={() => handleSubMenuEnter(subIndex)}
                  onMouseLeave={handleSubMenuLeave}
                >
                  <Link
                    to={subMenu.href}
                    target={subMenu.openInNewTab ? "_blank" : "_self"}
                  >
                    {subMenu.name}
                  </Link>
                </li>
              ))}
            </BurgerSubMenu>
          </MenuItem>
        ))}
      </Menu>
    );
  };

  const isMobile = useMediaQuery({ maxWidth: 767 });


  const toggleBurgerMenu = () => {
    setisopen(!isopen);
  };

  const handleMenuEnter = (index) => {
    setActiveMenu(index);
  };

  const handleMenuLeave = () => {
    setActiveMenu(null);
  };

  const handleSubMenuEnter = (subIndex) => {
    setActiveSubMenu(subIndex);
  };

  const handleSubMenuLeave = () => { };

  return (
    <header className="hheader">
      <nav className="hnav">
        <div className="logo">
          <Link to="/">
            
              <img src={logofull} />
            
          </Link>
        </div>
        <div>
          <MainMenu show={isshow}>
            {menus.map((menu, index) => (
              <MainMenuItem
                key={index}
                onMouseEnter={() => handleMenuEnter(index)}
                onMouseLeave={handleMenuLeave}
              >
                <Link
                  to={menu.href}
                  target={menu.openInNewTab ? "_blank" : "_self"}
                >
                  {menu.name}
                </Link>
                <SubMenu isvisible={activeMenu === index}>
                  {menu.subMenus.map((subMenu, subIndex) => (
                    <li
                      key={subIndex}
                      onMouseEnter={() => handleSubMenuEnter(subIndex)}
                      onMouseLeave={handleSubMenuLeave}
                    >
                      <Link
                        to={subMenu.href}
                        target={subMenu.openInNewTab ? "_blank" : "_self"}
                      >
                        {subMenu.name}
                      </Link>
                    </li>
                  ))}
                </SubMenu>
              </MainMenuItem>
            ))}
          </MainMenu>
        </div>
        {isMobile && (
          <div id="bmenu" onClick={toggleBurgerMenu}>
            <FontAwesomeIcon
              icon={isopen ? faTimes : faBars}
              style={{ fontSize: "2em", color: "var(--color1)" }}
            />

            <BurgerMenu
              isopen={isopen}
              menus={menus}
              onClose={toggleBurgerMenu}
            ></BurgerMenu>
          </div>
        )}
      </nav>
    </header>
  );
}
export default Header;
