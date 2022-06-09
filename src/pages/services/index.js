import React from 'react'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Chooser from "../../components/Chooser";
import FilterListIcon from "@material-ui/icons/FilterList";
import Filter from "../../components/Filter";
import {SimpleAccordion} from "./SimpleAccordion";
import zemlyaIf from '../../img/images/zemlya_if.png';
import agenstvo from '../../img/images/agenstvo.png'
import CallbackFormPopUp from "../../components/CallbackFormPopUp";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import {makeStyles} from "@material-ui/core/styles";
import './index.css';


const useStyles = makeStyles((theme) => ({
    land: {
        flexDirection: 'column',
        [theme.breakpoints.up('md')]: {

        }
    }
}))


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


class ServicesPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        showFilter: false,
        showDialog: false
    }
  }


  componentDidMount() {
    window.scrollTo(0, 0)
  }

  componentWillUnmount() {
  }

  setShowDialog = () => {
      this.setState({showDialog: true})
  }
  setCloseDialog = () => {
      this.setState({showDialog: false})
  }

  setShowFilter = () => {
        this.setState({ showFilter: true })
  }

  setHideFilter = () => {
        this.setState({ showFilter: false })
  }
  render() {
    return (
      <React.Fragment>
          <Dialog
              open={this.state.showDialog}
              fullWidth={true}
              maxWidth='sm'
              TransitionComponent={Transition}
              onClose={() => {
                  this.setCloseDialog()
              }}
          >
              <CallbackFormPopUp />
          </Dialog>
      <Container maxWidth="lg">
          {this.state.showFilter === true ? <Filter hidden={this.setHideFilter} expanded={true} /> : ''}
        <Box my={2}>
            <h2 className='title' style={{marginBottom: '22px', marginTop: '40px'}}>МЫ - <span style={{color: '#01eb88'}}>«Загородные земли»</span></h2>
            <h4 className='description'>И мы предлагаем открытое сотрудничество!</h4>
            <h4 style={{marginBottom: '40px'}}>Мы оказываем <span style={{color: '#01eb88'}}>услуги по созданию и реализации коттеджных и дачных поселков:</span></h4>
        </Box>

          <div className='land'>
              <div className='land_img'>
                  <img src={zemlyaIf} alt=""/>
              </div>
              <Box>
                  <h3 className='title_land' style={{
                      textAlign:'left',
                      color: '#3C4B5A',
                      fontFamily: 'Roboto, sans-serif',
                      fontWeight: '900',
                      marginBottom: '40px'
                  }}>Если у тебя есть земля, <span className='title_span' style={{color: '#01eb88'}}>МЫ:</span></h3>

                  <SimpleAccordion/>
              </Box>
          </div>

        <div className='agency'>
            <Box my={2}>
                <h3 style={{
                    textAlign:'left',
                    color: '#3C4B5A',
                    fontFamily: 'Roboto, sans-serif',
                    fontWeight: '900',
                    marginBottom: '40px'
                }}>Если у тебя<span style={{color: '#01eb88'}}> агентство недвижимости</span><br className='br'/> или <span style={{color: '#01eb88'}}>ты частный риелтор:</span></h3>

                <Box m={2}>
                    <h4 style={{color: 'black', fontWeight:'800'}}>Мы ждем от тебя:</h4>
                    <h5>Поиск клиента самостоятельно и ведение его любым удобным способом.</h5>
                </Box>

                <Box m={2}>
                    <h4 style={{color: 'black'}}>Мы предоставим тебе:</h4>
                    <h5>&mdash; Юридическое сопровождение сделки</h5>
                    <h5>&mdash; Офис для подписания договоров</h5>
                    <h5>&mdash; Информацию о последних новостях в поселке</h5>
                    <h5>&mdash; Проведем показы в наших поселках</h5>
                    <h5>&mdash; Проведем БЕСПЛАТНОЕ обучение, для тебя или твоих агентов</h5>
                    <h5>&mdash; Предоставим доступ к Базе знаний</h5>
                </Box>
            </Box>
            <div className='agency_img'>
                <img src={agenstvo} alt=""/>
            </div>
        </div>
            <div style={{display:'flex',justifyContent:'center'}}>
                <button style={{width: '350px'}} className='main-button main-button-large'
                        onClick={()=>this.setShowDialog()}
                >
                    Написать нам
                </button>
            </div>


          <Container maxWidth='lg' >
              <Chooser />
          </Container>
          <div className='filter-button' onClick={this.setShowFilter}>
              <h5 style={{position: 'absolute', top: '-30px'}}>Подобрать</h5>
              <FilterListIcon style={{width:'55px',height:'55px',color:'#FFF'}} />
          </div>
      </Container>
      </React.Fragment>
    )
  }
}

export default ServicesPage
