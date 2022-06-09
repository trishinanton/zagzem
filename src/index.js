import React from 'react'
import ReactDOM from 'react-dom'
import './fonts.css'
import './index.css'
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
// import villages from './villages'
import App from './App'
import { AppStateProvider } from './AppState'
import { createTheme } from "@material-ui/core/styles"
import { ThemeProvider } from "@material-ui/styles"
import transplit from "./helpers/transplit";
import uuid from "react-uuid";
import {BrowserRouter} from "react-router-dom";


export const villages = []
// let url = 'http://poselki/wp-json/wp/v2/poselki';
// let url = 'https://good-production.ru/projects-in-work/zagzem/wp-json/wp/v2/poselki?per_page=100';
// let url = 'https://zagzem.ru/zagzem-back/wp-json/wp/v2/poselki?per_page=100';
const url = 'https://skgrouptrans.ru/gp-wp-projects/wp-json/wp/v2/poselki?per_page=100';


let theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#0197fd',
    },
    secondary: {
      main: '#53a321',
    }
  },
  shape: {
    borderRadius: '15px',
  },
})



getDataFromWp(url)

function deleteEmptyString(obj){
  let result = {}
  let arr = Object.entries(obj).filter(el => el[1] !== "")

  for( let i = 0; i < arr.length; i++) {
    result[arr[i][0]] = arr[i][1]
  }

  return result
}

function deleteFalseFromObj(obj) {
  let result = {}
  let arr = Object.entries(obj).filter(el => el[1] !== false)

  for( let i = 0; i < arr.length; i++) {
    result[arr[i][0]] = arr[i][1]
  }

  return result
}

function changeObjInNumber(obj) {
  let arr = Object.entries(obj)
      .filter(elem => elem[1] === true)[0]
      return arr !== undefined ? +arr[0] : 0
}

async function getDataFromWp(url) {
  try {
    let response = await fetch(url);
    if(response.ok) {
      let arrFromWp = await response.json()
      arrFromWp.forEach(el => villages.push({
        ...el.acf,
        uid: uuid(),
        uname: transplit(el.acf.name),
        area: el.acf.new_area ? el.acf.new_area : el.acf.area || null,
        road: el.acf.new_road ? el.acf.new_road : el.acf.road,
        fromMkad: +el.acf.fromMkad,
        totalLands: +el.acf.totalLands,
        price: +el.acf.price,
        communications: deleteEmptyString(el.acf.communications),
        infrastructure: deleteEmptyString(el.acf.infrastructure),
        coords: [el.acf.coords.latitude, el.acf.coords.longitude],
        bgs: Object.values( deleteFalseFromObj(el.acf.bgs) ),
        descr: [el.acf.descr],
        roadTo: changeObjInNumber(el.acf.roadTo),
        roadIn: changeObjInNumber(el.acf.roadIn),
        type: changeObjInNumber(el.acf.type),
        permittedUse: Object.entries(el.acf.permittedUse).filter(elem => elem[1] === true)[0] ,
        priceLands: Object.values(el.acf.priceLands).map(e => +e),
        sideOfMkad: changeObjInNumber(el.acf.sideOfMkad)
      }))
      let a = villages

      const app = (
          <BrowserRouter basename={process.env.BASE_URL}>
            <ThemeProvider theme={theme}>
              <AppStateProvider>
                <App villages={villages} />
              </AppStateProvider>
            </ThemeProvider>
          </BrowserRouter>
      );

      ReactDOM.render(app, document.getElementById('root'));

    } else {
      throw new Error(`Could not fetch ${url}`)
    }
  } catch (e) {
    console.log(e);

  }
}

serviceWorkerRegistration.register();



