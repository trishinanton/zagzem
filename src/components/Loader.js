import React, {useRef} from 'react'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'
import logo from '../img/logo.png';
import CircleType from 'circletype';

const Logo = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (prefers-reduced-motion: no-preference) {
    animation: rotate-logo-spin infinite 1s linear;
  }
  @keyframes rotate-logo-spin {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.2);
  }
`


const Loader = () => {
    // let target = useRef()
    //
    //
    // new CircleType(target.current).radius(384);
  return (
    <Grid container justifyContent='center' alignItems='center' style={{position:'fixed',height:'100vh',width:'100vw',top:'0'}}>
        <div style={{position:'relative'}}>
            {/*<div ref={target} style={{top:'-100px',position:'absolute',fontFamily: "Roboto,sans-serif", color: '#3c4b5a',fontSize: '1.5rem',fontWeight: '700'}}>Загородные Земли</div>*/}
            <Logo
                src={logo}
                style={{
                    width: '200px',
                    height: '200px'
                }}
            />
        </div>

    </Grid>
  )
}

export default Loader 
