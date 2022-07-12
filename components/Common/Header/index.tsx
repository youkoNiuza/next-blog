import React, { FC, memo } from 'react';
import Link from 'next/link';
import Categories from '../../Home/Categories';
import Image from 'next/image';

interface HeaderPropsType {
  user?: User;
  categories: Category[];
}

const Header:(props:HeaderPropsType) => JSX.Element = ({user, categories}) => {
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
          {user.username}
        </a>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="/admin">个人中心</a>
          <a className="dropdown-item" href="/user/logout">退出</a>
        </div>
      </li>
    );
  };

  const renderNoUserList = () => (
    <li className="nav-item">
      <a href="/login" className="nav-link">登录</a>
    </li>
  );

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/admin">
        <Image src="/img/logo.jpeg" width="30" height="30" alt="Youko's blog" />
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link href="/" >
              <a className="nav-link" style={{fontWeight: 'bold', color: '#eee'}} >首页</a>
            </Link>
          </li>
          <Categories categories={categories} />
        </ul>
        {renderSearchBar()}
        <ul className="navbar-nav ml-auto">
          {user ? renderUserLists(user) : renderNoUserList()}
        </ul>
      </div>
    </nav>
  );
};

export default memo(Header);
