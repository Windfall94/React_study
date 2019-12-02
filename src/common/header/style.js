import styled from 'styled-components';

import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
  position: relative;
  height: 71px;
  #background: red;
  border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a.attrs({
  href: "/"
})`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 71px;
  height: 71px;
  background: url(${logoPic});
  background-sizing: contain;
`;

export const Nav = styled.div`
  width: 960px;
  height: 100%;
  padding-right: 70px;
  box-sizing: border-box;
  margin: 0 auto;
  
`;

export const NavItem = styled.div`
line-height: 71px;
padding: 0 16px;
font-size: 17px;
color: #333;
  &.left {
    float: left;
  }

  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`;

export const NavSearch = styled.input.attrs({
  placeholder: 'Search'
})`
  width: 160px;
  background: #eee;
  font-size: 18px;
  height: 38px;
  padding: 0 30px 0 20px;
  margin-top: 16px;
  margin-left: 20px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  color: #777;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 200px;
    .iconfont
  }
`;

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 71px;
`;

export const Button = styled.div`
  float: right;
  margin-top: 16px;
  margin-right: 20px;
  padding: 0 30px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  font: 15px;
  &.register {
    color: #ec6149;
  }
  &.writing {
    color: #ffffff;
    background: #ec6149;
  }
`;