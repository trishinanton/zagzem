import React, {Component} from 'react'
import {YMaps, Map, Placemark, ZoomControl, TrafficControl, RulerControl, GeolocationControl} from 'react-yandex-maps'
import PropTypes from 'prop-types'

class MyMap extends Component {
    static propTypes = {
        centerMap: PropTypes.array
    }

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        let centerMap = this.props.centerMap || [55.75, 37.57]
        return (
            <YMaps>
                <Map
                    state={{

                        center: centerMap,
                        zoom: 9,
                        // behaviors: ["disable('scrollZoom')"],
                        zoomControl: true,
                        controls: [],
                        options: {
                            size: "small"
                        }
                    }}
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                    }}
                >
                    <TrafficControl options={{ float: 'right' }} />
                    <RulerControl options={{ float: 'right' ,position:{right:110, top: 10}, scaleLine: 'false'}} />
                    <ZoomControl options={{ float: 'right' , size: "small", position:{right:10, top: 200}}} />
                    <GeolocationControl options={{ float: 'right', position: {right:10, bottom: 150} }} />
                    <Placemark
                        geometry={centerMap}
                    />
                </Map>
            </YMaps>
        )
    }
}

export {MyMap}
