import React, { FC, memo, useState, useEffect } from 'react';
import Link from 'next/link';
import Categories from '../../Home/Categories';
import Image from 'next/image';
import { fetchCategories } from 'core/api/fetchCategories';
import { fetchUser } from 'core/api/fetchUser';
import usePublicData from 'hooks/usePublicData';

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
          <a className="dropdown-item" href="/admin">个人中心</a>
          <a className="dropdown-item" href="/user/logout">退出</a>
        </div>
      </li>
    );
  };

  const renderNoUserList = () => (
    <li className="nav-item">
      <Link href="/login" className="nav-link">登录</Link>
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

export async function getServerSideProps() {
  try {
    const fetchCategoryResult = await fetchCategories();
    const categories = await fetchCategoryResult.json();
    const fetchUserResult = await fetchUser();
    const user = await fetchUserResult.json();
    console.log(categories, user);
    return {
      props: {
        categories,
        user,
      }
    };
  } catch (error) {
    console.warn('catech', error);
    return {};
  }
};

export default memo(Header);
