import React, {useEffect, useState} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import TargetForm from './TargetForm'
import IconButton from './IconButton'
import IconButtonTC from "./IconButtonTC";
import { MyMap } from './MyMap'
import IndicatorDots from './IndicatorDots'
import CarouselButtons from './CarouselButtons'
import Carousel from 're-carousel'
import Dialog from '@material-ui/core/Dialog'
import CallbackPlanForm from './CallbackPlanForm'

import testImage from '../img/images/villaLabel.png'
import CallbackFormPopUp from "./CallbackFormPopUp";
import Slide from "@material-ui/core/Slide";
import {useLocation} from "react-router-dom";

import ImageZoom from "react-image-zooom";
import { isImage } from "../helpers/isImage";

const useStyles = makeStyles((theme) => ({
    name: {
        transition: 'all 0.3s ease-out',

    },
    header: {
        width: '100%',
        margin: '0 0px 40px 0px',
    },
    subInfo: {
        width: '100%',
        margin: '30px 0px 15px 0px',
        padding: '5px',
        borderRadius: '15px',
    },
    btns: {
        margin: '30px 0px 30px 0px',
    },
    descrBlock: {
        margin: '30px 0px 30px 0px',
        background: 'none',
        borderRadius: '15px',
    },
    descrImg: {
        width: '100%',
        height: '100%',
        backgroundImage: `url(${testImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'contain'
    },
    targetBlock: {
        margin: '30px 0px 30px 0px',
        background: 'none',
        borderRadius: '15px',
    },
    mapSection: {
        position:'relative',
        margin: '30px 0px 30px 0px',
        background: '#fff',
        borderRadius: '15px',
        minHeight: '780px',
        overflow: 'hidden',
        [theme.breakpoints.up('md')]: {
            minHeight: '460px',
        },
    },
    btn: (props => ({
        background: '#FFF',
        color: '#0197fd',
        transition: 'all ease .45s',
        cursor: 'pointer',
        borderRadius: '15px',
        boxShadow: 'inset 0 0 0 1px #0197fd',
        padding: '20px 20px',
        margin: '5px 15px',
        textAlign: 'center',
        '&:hover': {
            background: '#0197fd',
            color: '#fff',
        },
    })),
    infoMapBlock: {
        position: 'relative',
        width: 'calc(100% - 10px)',
        height: '60px',
        margin: '0px 0px 30px 10px',
    },
    infoBlock: {
        position: 'relative',
        width: 'calc(100% - 10px)',
        height: '60px',
        background: '#fff',
        borderRadius: '15px',
        margin: '5px',
    },
    infoIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: '10px',
        top: '0',
        width: '40px',
        height: '100%',
    },
    infoValue: {
        display: 'flex',
        alignItems: 'center',
        position: 'absolute',
        left: '60px',
        top: '0',
        width: 'calc(100% - 70px)',
        height: '100%',
    },
    wrapperInfo: {
        marginLeft: '0px',
        borderRadius: '15px',
        background: '#fff',
        [theme.breakpoints.up('md')]: {
            marginLeft: '15px',
        }
    },
    mapInfo: {
        position: 'absolute',
        padding: '30px 15px',
        margin: '15px',
        borderRadius: '15px',
        background: '#fff',
    },
    descrSection: {
        width: 'calc(100% - 30px)',
        margin: '15px',
        minHeight: '300px',
        background: '#fff',
        borderRadius: '15px',
        padding: '40px 25px',
    },
    genplan: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: '10px',
    },
    iframe: {
        width: "100%",
        height: "30rem",
        borderRadius: "5px",
        borderWidth: '0',
    }
}));

const ItemMapInfo = ({ name, value }) => {
    const classes = useStyles()
    return (
        <div className={classes.infoMapBlock}>
            <h5 style={{margin:'5px 0'}}>{name}</h5>
            <h4 style={{margin:'0'}}>{value}</h4>
        </div>
    )
}

export default function Page (props){
    console.log('newPage render',props.village)
    const village = props.village
    const [showGenplan, setShowGenplan] = React.useState(false)
    const [showSendPlan, setShowSendPlan] = React.useState(false)
    const [showForm, setShowForm] = React.useState(false)
    // console.log('village.permittedUse', village.permittedUse)

    const waysToGetList = []
    const communications = village.communications
    const nature = village.nature
    const infrastructure = village.infrastructure
    const waysToGet = village.waysToGet
    const descr = village.descr
    const coords = village.coords || [0,0]
    const bgs = village.bgs
    const plan = village.plan
    const planPartners = village.plan_partners
    const safety = village.safety
    const roadIn = village.roadIn
    const roadTo = village.roadTo


    const planImg = plan || planPartners

    const isImageData = isImage(planImg)

    const classes = useStyles({planImg})

    let infoCoords = []
    if (coords) {
        infoCoords = coords
    }

    const infoDescr = []
    if (descr) {
        for (let i=0;i<descr.length;i++) {
            infoDescr.push(
                <p key={'dscr'+i} className={classes.textDescr}>
                    {descr[i]}
                </p>
            )
        }
    }

    let kk = []
    let nn = []
    let rr = []
    let ww = []
    if (communications) {
        kk = Object.keys(communications)
    }
    if (nature) {
        nn = Object.keys(nature)
    }
    if (infrastructure) {
        rr = Object.keys(infrastructure)
    }
    if (waysToGet) {
        ww = Object.keys(waysToGet)
    }

    for (let i=0;i<ww.length;i++) {
        const key = ww[i]
        const value = waysToGet[key] || ''
        if (key === '1') {
            waysToGetList.push(
                <Grid key={key+i+'wtg'} item xs={12} md={4} >
                    <IconButtonTC
                        iconName='car'
                        color='#0197fd'
                        selected={true}
                        value={'На автомобиле: ' + value}
                    />
                </Grid>
            )
        }
        if (key === '2') {
            waysToGetList.push(
                <Grid key={key+i+'wtg'} item xs={12} md={4}>
                    <IconButtonTC
                        iconName='bus'
                        color='#8a6eac'
                        selected={true}
                        value={'На общественном транспорте: ' + value}
                    />
                </Grid>
            )
        }
        if (key === '3') {
            waysToGetList.push(
                <Grid key={key+i+'wtg'} item xs={12} md={4}>
                    <IconButtonTC
                        iconName='train'
                        color='#06b26b'
                        selected={true}
                        value={'На электричке: ' + value}
                    />
                </Grid>
            )
        }
    }

    const infoList = []
    const infoListInfrastructure = []
    const infoListNature = []
    const infoListRoad = []
    const infoListSafety = []

    infoList.push(
        <IconButton
            key='cSXmmn'
            iconName='mapPlace'
            color='#0197fd'
            selected={true}
            value={village.permittedUse[0] === '1' ? 'Вид земель: ИЖС' : 'Вид земель: Дачное строительство'}
        />
    )

    if (roadTo === 1) {
        infoListRoad.push(
            <IconButton
                key='road_to_asphalt'
                iconName='asphalt'
                color='#6aa3a5'
                selected={true}
                handler={()=>{}}
                value='До поселка асфальтированная дорога'
            />
        )
    }
    if (roadTo === 3) {
        infoListRoad.push(
            <IconButton
                key='road_to_asphaltKroshka'
                iconName='asphaltKroshka'
                color='#4a7aff'
                selected={true}
                value='До поселка дорога из асф.крошки'
            />
        )
    }
    if (roadTo === 6) {
        infoListRoad.push(
            <IconButton
                key='road_to_betonPlit'
                iconName='betonPlit'
                color='#ff5b5a'
                selected={true}
                value='До поселка дорога из бетонных плит'
            />
        )
    }
    if (roadTo === 5) {
        infoListRoad.push(
            <IconButton
                key='road_to_5'
                iconName='bitiyKirpich'
                color='#ffce01'
                selected={true}
                value='До поселка дорога из битого кирпича'
            />
        )
    }
    if (roadTo === 4) {
        infoListRoad.push(
            <IconButton
                key='road_to_4'
                iconName='gruntovka'
                color='#06b26b'
                selected={true}
                value='До поселка грунтовая дорога'
            />
        )
    }
    if (roadTo === 2) {
        infoListRoad.push(
            <IconButton
                key='road_to_2'
                iconName='sheben'
                color='#8a6eac'
                selected={true}
                value='До поселка дорога из щебня'
            />
        )
    }

    if (roadIn === 1) {
        infoListRoad.push(
            <IconButton
                key='road_in_1'
                iconName='asphalt'
                color='#6aa3a5'
                selected={true}
                value='В поселке асфальтированная дорога'
            />
        )
    }
    if (roadIn === 3) {
        infoListRoad.push(
            <IconButton
                key='road_in_3'
                iconName='asphaltKroshka'
                color='#4a7aff'
                selected={true}
                value='В поселке дорога из асф. крошки'
            />
        )
    }
    if (roadIn === 6) {
        infoListRoad.push(
            <IconButton
                key='road_in_6'
                iconName='betonPlit'
                color='#ff5b5a'
                selected={true}
                value='В поселке дорога из бетонных плит'
            />
        )
    }
    if (roadIn === 5) {
        infoListRoad.push(
            <IconButton
                key='road_in_5'
                iconName='bitiyKirpich'
                color='#ffce01'
                selected={true}
                value='В поселке дорога из битого кирпича'
            />
        )
    }
    if (roadIn === 4) {
        infoListRoad.push(
            <IconButton
                key='road_in_4'
                iconName='gruntovka'
                color='#06b26b'
                selected={true}
                value='В поселке грунтовая дорога'
            />
        )
    }
    if (roadIn === 2) {
        infoListRoad.push(
            <IconButton
                key='road_in_2'
                iconName='sheben'
                color='#8a6eac'
                selected={true}
                value='В поселке дорога из щебня'
            />
        )
    }

    for (let i=0;i<kk.length;i++) {
        const key = kk[i]
        const value = communications[key] || ''
        if (key === '1') {
            infoList.push(
                <IconButton
                    key={key+i+'cmmn'}
                    iconName='svet'
                    color='#ffce01'
                    selected={true}
                    handler={()=>{}}
                    value={'Электрофикация '+value}
                />
            )
        }
        if (key === '2') {
            infoList.push(
                <IconButton
                    key={key+i+'cmmn'}
                    iconName='water'
                    color='#4a7aff'
                    selected={true}
                    handler={()=>{}}
                    value={value}
                />
            )
        }
        if (key === '3') {
            infoList.push(
                <IconButton
                    key={key+i+'cmmn'}
                    iconName='gas'
                    color='#ff5b5a'
                    selected={true}
                    handler={()=>{}}
                    value={value}
                />
            )
        }
        if (key === '4') {
            infoList.push(
                <IconButton
                    key={key+i+'cmmn'}
                    iconName='checkpoint'
                    color='#ff5acc'
                    selected={true}
                    handler={()=>{}}
                    value={value}
                />
            )
        }
        if (key === '5') {
            infoList.push(
                <IconButton
                    key={key+i+'cmmn'}
                    iconName='playground'
                    color='#5a5fff'
                    selected={true}
                    handler={()=>{}}
                    value={value}
                />
            )
        }
        if (key === '6') {
            infoList.push(
                <IconButton
                    key={key+i+'cmmn'}
                    iconName='lighting'
                    color='#5abbff'
                    selected={true}
                    handler={()=>{}}
                    value={value}
                />
            )
        }
        if (key === '7') {
            infoList.push(
                <IconButton
                    key={key+i+'cmmn'}
                    iconName='sportsGround'
                    color='#5aff7d'
                    selected={true}
                    handler={()=>{}}
                    value={value}
                />
            )
        }
        if (key === '8') {
            infoList.push(
                <IconButton
                    key={key+i+'cmmn'}
                    iconName='canalization'
                    color='#ff9e5a'
                    selected={true}
                    handler={()=>{}}
                    value={value}
                />
            )
        }
    }

    for (let i=0;i<rr.length;i++) {
        const key = rr[i]
        const value = infrastructure[key] || ''
        if (key === '1') {
            infoListInfrastructure.push(
                <IconButton
                    key={key+i+'nfrs'}
                    iconName='cart'
                    color='#8a6eac'
                    selected={true}
                    handler={()=>{}}
                    value={'Продукты в '+value}
                />
            )
        }
        if (key === '3') {
            infoListInfrastructure.push(
                <IconButton
                    key={key+i+'nfrs'}
                    iconName='school'
                    color='#f7173a'
                    selected={true}
                    handler={()=>{}}
                    value={'Школа в '+value}
                />
            )
        }
        if (key === '4') {
            infoListInfrastructure.push(
                <IconButton
                    key={key+i+'nfrs'}
                    iconName='detsad'
                    color='#4a7aff'
                    selected={true}
                    handler={()=>{}}
                    value={'Детский сад в '+value}
                />
            )
        }
        if (key === '5') {
            infoListInfrastructure.push(
                <IconButton
                    key={key+i+'nfrs'}
                    iconName='hospital'
                    color='#06b26b'
                    selected={true}
                    handler={()=>{}}
                    value={'Больница в '+value}
                />
            )
        }
    }

    if (safety) {
        for (let i=0;i<safety.length;i++) {
            const key = safety[i]
            if (key === '1') {
                infoListSafety.push(
                    <IconButton
                        key={key+'sasc'}
                        iconName='zabor'
                        color='#6aa3a5'
                        selected={true}
                        handler={()=>{}}
                        value='Поселок огорожен'
                    />
                )
            }
            if (key === '2') {
                infoListSafety.push(
                    <IconButton
                        key={key+'sasc'}
                        iconName='security'
                        color='#ff5b5a'
                        selected={true}
                        handler={()=>{}}
                        value='Есть охрана'
                    />
                )
            }
        }
    }

    for (let i=0;i<nn.length;i++) {
        const key = nn[i]
        const value = nature[key] || ''
        if (key === '1') {
            infoListNature.push(
                <IconButton
                    key={key+i+'ntr'}
                    iconName='vodoem'
                    color='#5277f5'
                    selected={true}
                    handler={()=>{}}
                    value={value}
                />
            )
        }
        if (key === '2') {
            infoListNature.push(
                <IconButton
                    key={key+i+'ntr'}
                    iconName='tree'
                    color='#06b26b'
                    selected={true}
                    handler={()=>{}}
                    value={value}
                />
            )
        }
        if (key === '3') {
            infoListNature.push(
                <IconButton
                    key={key+i+'ntr'}
                    iconName='tree'
                    color='#ffce01'
                    selected={true}
                    handler={()=>{}}
                    value={value}
                />
            )
        }
    }

    let nearSettlementName = ''
    let nearSettlementDist = ''
    let nearTownName = ''
    let nearTownDist = ''
    let nearRailwayName = ''
    let nearRailwayDist = ''
    if (village.nearSettlement) {
        nearSettlementName = village.nearSettlement.name
        nearSettlementDist = village.nearSettlement.distance
    }
    if (village.nearTown) {
        nearTownName = village.nearTown.name
        nearTownDist = village.nearTown.distance
    }
    if (village.nearRailway) {
        nearRailwayName = village.nearRailway.name
        nearRailwayDist = village.nearRailway.distance
    }

    let rosreestrLink = ''
    if (village.rosreestr) {
        rosreestrLink = village.rosreestr
    }

    const slides = []

    if (bgs){
        for (let i=0;i<bgs.length;i++) {
            slides.push(
                <div
                    key={'bgil'+i}
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        backgroundImage: `url(${bgs[i]})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                    }}
                />
            )
        }
    }

    useEffect(()=>{
        document.getElementById('description-page').innerHTML=`${infoDescr[0].props.children}`
    },[props])

    const {pathname} = useLocation()
    console.log('pathnew', pathname)
    const [url, setUrl] = useState('');

    useEffect(()  => {
        setUrl(pathname)
    }, [pathname])
    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
    });

    function spaceInNumber(n) {
        n += "";
        n = new Array(4 - n.length % 3).join("U") + n;
        return n.replace(/([0-9U]{3})/g, "$1 ").replace(/U/g, "");
    }

    return (
        <>
            <Dialog
                open={showForm}
                fullWidth={true}
                maxWidth='sm'
                // TransitionComponent={Transition}
                onClose={() => {
                    setShowForm(false)
                }}
            >
                <CallbackFormPopUp />
            </Dialog>

            <Container maxWidth='lg'>
                <div className={classes.header}>
                    <Grid container alignItems='center'>
                        <h3 className={classes.name} style={{padding:'25px 0 15px 0'}}>{village.type === 1 ? 'Коттеджный поселок ' + village.name : 'Дачный поселок ' + village.name}</h3>
                    </Grid>
                    <Grid container alignItems='center'>
                        <Grid item xs={12} md={4}>
                            <h4 style={{padding:'10px 0'}}>Участков <span style={{color:'#0197fd'}}>{village.totalLands}</span></h4>
                            <h4 style={{padding:'10px 0'}}>В продаже <span style={{color:'#0197fd'}}>{village.leftLands}</span></h4>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <h4 style={{padding:'10px 0'}}>{village.area} р-он</h4>
                            <h4 style={{padding:'10px 0'}}>{village.road}</h4>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <h4 style={{padding:'10px 0'}}><span style={{color:'#0197fd'}}>{village.fromMkad}</span> км. от МКАД</h4>
                            <h4 style={{padding:'10px 0'}}>От <span style={{color:'#0197fd'}}>{spaceInNumber(village.price)}</span> руб/сотка</h4>
                        </Grid>
                    </Grid>
                </div>
            </Container>

            <Container maxWidth='lg'>
                <Grid container>
                    <Grid item xs={12} md={8}>
                        <div style={{height:'440px',borderRadius:'15px',overflow:'hidden'}}>
                            <Carousel loop auto widgets={[IndicatorDots, CarouselButtons]}>
                                {slides}
                            </Carousel>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <div className={classes.wrapperInfo}>
                            {infoList}
                        </div>
                        <div style={{margin:'30px 15px'}}>
                            <center>


                                <button onClick={()=> setShowForm(true)} className='main-button'>
                                    Записаться на просмотр
                                </button>


                            </center>
                        </div>
                    </Grid>
                </Grid>
            </Container>

            <Container maxWidth='lg'>
                <h4 style={{padding:'15px 0'}}>Координаты GPS: <span style={{color:'#0197fd'}}>{coords[0]}, {coords[1]}</span></h4>
            </Container>

            <Container maxWidth='lg'>
                <div className={classes.btns}>
                    <Grid container>
                        <Grid item xs={12} md={4}>
                            {
                                planImg && <button className='main-button' style={{
                                    width: '94%',
                                    fontSize: '99%',
                                    fontWeight: 'bold',
                                    margin: '10px 5%'
                                }}
                                                   onClick={() => setShowGenplan(true)}
                                >
                                    Планировка поселка
                                </button>
                            }
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <button className='main-button' style={{width:'94%',fontSize:'99%',fontWeight:'bold', margin:'10px 5%'}}
                                    onClick={()=>{window.open(rosreestrLink, '_blank')}}
                            >
                                Кадастровая карта
                            </button>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <button className='main-button' style={{width:'94%',fontSize:'99%',fontWeight:'bold', margin:'10px 5%'}}
                                    onClick={()=>setShowSendPlan(true)}
                            >
                                Отправить планировку на email
                            </button>
                        </Grid>
                    </Grid>
                </div>
            </Container>

            <Container maxWidth='lg'>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <div className={classes.wrapperInfo}>
                            <h4 style={{padding:'15px'}}>Дороги</h4>
                            {infoListRoad}
                        </div>
                    </Grid>
                    {infoListSafety.length < 1 ? '' :
                        <Grid item xs={12} md={6}>
                            <div className={classes.wrapperInfo}>
                                <h4 style={{padding:'15px'}}>Безопасность</h4>
                                {infoListSafety}
                            </div>
                        </Grid>
                    }
                    <Grid item xs={12} md={6}>
                        <div className={classes.wrapperInfo}>
                            <h4 style={{padding:'15px'}}>Природа</h4>
                            {infoListNature}
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className={classes.wrapperInfo}>
                            <h4 style={{padding:'15px'}}>Инфраструктура</h4>
                            {infoListInfrastructure}
                        </div>
                    </Grid>
                </Grid>
            </Container>

            <Container maxWidth='lg'>
                <div className={classes.descrBlock}>
                    <Grid container>
                        <Grid item xs={12}>
                            <h3 style={{padding:'25px 0 15px 0'}}>Описание поселка</h3>
                        </Grid>
                        <Grid item xs={12} md={5}>
                            <div className={classes.descrImg} />
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <div className={classes.descrSection}>
                                <span id={'description-page'}> </span>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </Container>

            <Container maxWidth='lg'>
                <h3 style={{padding:'25px 0 15px 0'}}>Как добраться</h3>
                <div className={classes.mapSection}>
                    <Grid container>
                        <MyMap
                            centerMap={infoCoords}
                        />
                        <Grid item xs={12} md={4}>
                            <div className={classes.mapInfo}>
                                <ItemMapInfo
                                    name='Ближайший населенный пункт'
                                    value={nearSettlementName + ' - ' + nearSettlementDist}
                                />
                                <ItemMapInfo
                                    name='Ближайший город'
                                    value={nearTownName + ' - ' + nearTownDist}
                                />
                                <ItemMapInfo
                                    name='Ближайшая ж/д станция'
                                    value={nearRailwayName + ' - ' + nearRailwayDist}
                                />
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </Container>

            <Container maxWidth='lg' style={{margin: '40px auto'}}>
                <div className={classes.subInfo}>
                    <Grid container justifyContent='space-around'>
                        {waysToGetList}
                    </Grid>
                </div>
            </Container>

            <Container maxWidth='lg'>
                <div id='target-block' className={classes.targetBlock}>
                    <TargetForm selectedVillage={village.name} />
                </div>
            </Container>

            {

                planImg && <Dialog
                    fullWidth={true}
                    maxWidth='xl'
                    open={showGenplan}
                    onClose={() => setShowGenplan(false)}
                >

                    <div className={classes.genplan}>
                        {
                            isImageData
                                ? <ImageZoom src={planImg} alt="Genplan village" zoom={200}/>
                                : <iframe className={classes.iframe} src={planImg}/>
                        }
                    </div>
                </Dialog>

            }

            <Dialog
                fullWidth={true}
                maxWidth='sm'
                open={showSendPlan}
                onClose={()=>setShowSendPlan(false)}
            >
                <CallbackPlanForm village={village.name}/>
            </Dialog>
        </>
    )
}
