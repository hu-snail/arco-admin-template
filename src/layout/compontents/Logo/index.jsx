import React from 'react';
import logo from '@/assets/logo/logo.svg';
import './style.less';

export default function LogoCompontent() {
  return (
    <div className="logo-wrap">
      <img src={logo} width="30px" />
      <h1 className="logo-title">Arco Admin</h1>
    </div>
  );
}
