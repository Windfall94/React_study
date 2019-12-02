import React, {Component} from 'react';
import { IconFont } from "../../statics/iconfont/iconfont";

import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button
} from './style';
/*
<SearchWrapper>
              <NavSearch>
                
              </NavSearch>
              <i className={ this.state.focused ? 'focused iconfont': 'iconfont'}>
                &#xe614;
              </i>
            </SearchWrapper>
*/

class Header extends Component {

  constructor(props) {
      super(props);
      this.state = {
          focused: false
      }
  }

  render() {
    return (
      <HeaderWrapper>
        <Logo />
          <Nav>
            <NavItem className='left active'>首页</NavItem>
            <NavItem className='left'>下载App</NavItem>
            <NavItem className='right'>登陆</NavItem>
            <NavItem className='right'>
              <IconFont/>
              <i className="iconfont">&#xe636;</i>
              
                
              
            </NavItem>

            
            
          </Nav> 
          <Addition>
            <Button className='register'>注册</Button>
            <Button className='writing'>
              <IconFont/>
              <i className="iconfont">&#xe615;</i>
              发布
            </Button>
          </Addition>
      </HeaderWrapper>
    )
  }

  handleInputFocus() {
    this.setState({
      focused: true
    })
  }

  handleInputBlur() {
    this.setState({
      focused: false
    })
  }

}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default Header;