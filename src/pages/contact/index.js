import React from 'react'
import ContactForm from '../../components/ContactForm'
import Container from '@material-ui/core/Container'
import Chooser from "../../components/Chooser";
import Filter from "../../components/Filter";
import FilterListIcon from "@material-ui/icons/FilterList";
import CallbackForm from "../../components/CallbackForm";
import CallbackFormContact from "../../components/CallbackFormContact";

class ContactPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showFilter: false,
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  componentWillUnmount() {
  }

  setShowFilter = () => {
    this.setState({ showFilter: true })
  }

  setHideFilter = () => {
    this.setState({ showFilter: false })
  }

  render() {
      console.log('contact')
    return (
      <Container maxWidth='lg'>
        <CallbackFormContact />
        {this.state.showFilter === true ? <Filter hidden={this.setHideFilter} expanded={true} /> : ''}
        <div className='fullScreen'>
          <ContactForm />
        </div>
        <Container maxWidth='lg' >
          <Chooser />
        </Container>
        <div className='filter-button' onClick={this.setShowFilter}>
          <h5 style={{position: 'absolute', top: '-30px'}}>Подобрать</h5>
          <FilterListIcon style={{width:'55px',height:'55px',color:'#FFF'}} />
        </div>
      </Container>
    )
  }
}

export default ContactPage
