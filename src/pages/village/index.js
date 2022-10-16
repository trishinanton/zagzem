import React, {useContext, useEffect, useState} from 'react'
import AppState from '../../AppState'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Page from '../../components/Page'
import SimilarVillages from '../../components/SimilarVillages'
import {useLocation} from "react-router-dom";

export const VillagePage = () => {
    const context = useContext(AppState)
    const path = useLocation()

    const uname = path.pathname.substr(9)
    const [village, setVillage] = useState({})
    const villages = context.villages

    useEffect(() => {
        window.scrollTo(0, 0)

        for (let i = 0; i < villages.length; i++) {
            if (villages[i].uname === uname) {
                setVillage(villages[i])
            }
        }
        context.selectedVillage = village.name

    }, [path])

    return (<>
        {Object.keys(village).length && <>
            <Page village={village}/>
            <Container maxWidth='lg'
                       style={{
                           padding: '15px 0'
                       }}
            >
                <Box m={2}>
                    <SimilarVillages uid={village.uid}
                                     road={village.road} price={village.price}/>
                </Box>
            </Container>
        </>}
    </>)

}

export default VillagePage
