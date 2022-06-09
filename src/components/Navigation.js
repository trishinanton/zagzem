import React from 'react';
import Container from '@material-ui/core/Container';
import {useLocation} from "react-router-dom";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { Link } from 'react-router-dom'
import AppState from "../AppState";

const Navigation = () => {
  const context = React.useContext(AppState)
  const location = useLocation();

  const pathname = location.pathname
  const data = []

  if (pathname !== '/') {
    data.push(
      <Link key='nt1' to='/' className='breadcrumbs-link'><h5>Главная</h5></Link>
    )
  }
  if (pathname === '/villages') {
    data.push(
      <div key='nt2' className='breadcrumbs-link'><h5>Поселки</h5></div>
    )
  }
  if (pathname === '/services') {
    data.push(
      <div key='nt2' className='breadcrumbs-link'><h5>Услуги</h5></div>
    )
  }
  if (pathname === '/contact') {
    data.push(
      <div key='nt2' className='breadcrumbs-link'><h5>Контакты</h5></div>
    )
  }
  if (pathname.substr(0,9) === '/village/') {
    let path = pathname.replace('/village/','')
    let village = context.filteredVillages.filter(el => el.uname === path)
    data.push(
      <Link key='nt2' to='/villages' className='breadcrumbs-link'><h5>Поселки</h5></Link>
    )
    data.push(
      <div key='nt3' className='breadcrumbs-link'><h5>{village[0].name}</h5></div>
    )
  }

  return (
    <div className='breadcrumbs'>
      <Container maxWidth='lg'>
        <Breadcrumbs>
          {data} 
        </Breadcrumbs>
      </Container>
    </div>
  )
}

export default Navigation
