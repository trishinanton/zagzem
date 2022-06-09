import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {TrafficControl, YMaps} from "react-yandex-maps";

const useStyles = makeStyles(theme => ({
  root: {
    position: 'absolute',
    width: '100%',
    height: '100%'
  },
}))

const FilterMap = (props) => {

  const classes = useStyles()


  const change = React.useCallback(()=> {
  const villages = props.villages 
    const items = []
    for (let i=0;i<villages.length;i++) {
      const obj = {}
      obj.coords = villages[i].coords
      obj.name = villages[i].name
      obj.uname = villages[i].uname
      obj.bgs = villages[i].bgs
      obj.type = villages[i].type === 1 ? 'Коттеджный поселок' : 'Дачный поселок'
      items.push(obj)
  }

  window.ymaps.ready(function() {
    var myMap = new window.ymaps.Map("map", {
      center: [55.760088, 37.617638],
      zoom: 8,
      controls: [],
    })


    var blueCollection = new window.ymaps.GeoObjectCollection(null, {
      preset: 'islands#blueIcon'
    })

    for (var i = 0; i < items.length; i++) {
      const obj = items[i]


      var myPlacemark = new window.ymaps.Placemark(obj.coords, {
        hintContent: obj.name,
        balloonContent: `<img src=${obj.bgs[0]} width='100%' ><a href='/village/${obj.uname}'>${obj.type} ${obj.name}</a></img>`,
      })
      blueCollection.add(myPlacemark)
    }
    var zoomControl = new window.ymaps.control.ZoomControl({
      options: {
        size: "auto",
        float: 'right',
        position:{right:10, top: 200}
      }
    });

    let trafficControl = new window.ymaps.control.TrafficControl({
      options: {
        float: 'right',
        position:{right:90, top: 20}
      }
    })

    let rulerControl = new window.ymaps.control.RulerControl({
      options: {
         float: 'right',
        scaleLine: 'false',
        position:{right:190, top: 20}
      }
    })

    let locationControl = new window.ymaps.control.GeolocationControl({
      options: {
        float: 'right',
        position: {right:10, bottom: 150}
      }
    })


    // myMap.addControl(traffic);

    myMap.controls.add(zoomControl);
    myMap.controls.add(trafficControl);
    myMap.controls.add(rulerControl)
    myMap.controls.add(locationControl)
    // myMap.behaviors.disable('scrollZoom')
    myMap.geoObjects.add(blueCollection)

  })
  }, [props.villages])

  React.useEffect(() => {
    change()
  }, [change])

  return (
    <div id="map" className={classes.root}>
    </div>
  )



}

export default FilterMap
