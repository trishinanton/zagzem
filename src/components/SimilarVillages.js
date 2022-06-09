import React from 'react';
import AppState from '../AppState'
import Grid from '@material-ui/core/Grid'
import ReviewCard from './ReviewCard'

const SimilarVillages = ({uid, road, price, ...props}) => {
  const context = React.useContext(AppState)

  // const filteredVillages = context.filteredVillages
  let filteredVillages = context.filteredVillages.filter(el => el.road === road && el.price >= (price - price*0.2) && el.price <= (price + price*0.2))
console.log(filteredVillages)
  const newArr = []
  for (let i=0;i<filteredVillages.length;i++) {
    if (newArr.length < 3) {
    if (uid !== filteredVillages[i].uid) {
      newArr.push(
        <Grid item
          key={'IpL'+filteredVillages[i].uname+i}
          xs={12}
          sm={6}
          md={4}
        > 
          <ReviewCard
            type={filteredVillages[i].type}
            uname={filteredVillages[i].uname}
            name={filteredVillages[i].name}
            bgs={filteredVillages[i].bgs}
            road={filteredVillages[i].road}
            fromMkad={filteredVillages[i].fromMkad}
            price={filteredVillages[i].price}
            leftLands={filteredVillages[i].leftLands}
            priceLands={filteredVillages[i].priceLands}
            sideOfMkad={filteredVillages[i].sideOfMkad}
            communications={filteredVillages[i].communications}
          />
        </Grid>
      )
    }
    }
  }
  {if (filteredVillages.length < 2) {
    return ''
  }else {
    return (
        <>
          <h3 style={{padding:'25px 0 15px 15px'}}>Если вы смотрите этот поселок, то вам подойдут:</h3>
          <Grid container spacing={3} style={{justifyContent:'center'}}>
            {/*<div style={{display:'flex', flexDirection:'row', justifyContent:'space-evenly'}}>*/}
            {newArr}
            {/*</div>*/}

          </Grid>
        </>

    )
  }}

}

export default SimilarVillages
