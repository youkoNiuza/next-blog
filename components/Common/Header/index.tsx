import React, { FC, memo, useState, useEffect } from 'react';
import Link from 'next/link';
import Categories from '../Categories';
import Image from 'next/image';

interface HeaderPropsType {
  user?: User;
  categories?: Category[];
}

const Header:React.FC<HeaderPropsType> = (props) => {
  const { user, categories } = props;
  const renderSearchBar = () => {
    return (
      <form className="form-inline my-2 my-lg-0 ml-5" method="get" action="/search">
        <input className="form-control mr-sm-2" name="keyword" type="search" placeholder="请输入关键词..." />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">搜索</button>
      </form>
    );
  };

  const renderUserLists = (user:User) => {
    return (
      <li className="nav-item dropdown" style={{marginRight: '2rem'}}>
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" data-toggle="dropdown">
          {user?.username}
        </a>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="https://www.qzzhai.top/admin">个人中心</a>
          <a className="dropdown-item" href="/user/logout">退出</a>
        </div>
      </li>
    );
  };

  const renderNoUserList = () => (
    <li className="nav-item">
      <Link href="/login"><a className="nav-link">登录</a></Link>
    </li>
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/admin">
        <Image src="/img/logo.jpeg" width="30px" height="30px" alt="Youko's blog" />
      </a>
      <button className="navbar-toggler" aria-label="dropdown-menu" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
        <span className="navbar-toggler-icon"></span>
      </button>
      <header className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link href="/" >
              <a className="nav-link" style={{fontWeight: 'bold', color: '#eee'}} >首页</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/list" >
              <a className="nav-link" style={{fontWeight: 'bold', color: '#eee'}} >全部类别</a>
            </Link>
          </li>
          <Categories categories={categories} />
        </ul>
        {renderSearchBar()}
        <ul className="navbar-nav ml-auto">
          {user ? renderUserLists(user) : renderNoUserList()}
        </ul>
      </header>
    </nav>
  );
};

export default memo(Header);
