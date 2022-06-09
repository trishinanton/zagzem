import React from "react"
import PhoneInput from 'react-phone-number-input'
//import 'react-phone-number-input/style.css'
import './InputPhone.css'
import {makeStyles} from "@material-ui/styles";

class InputPhone extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    const value = this.props.value

    return (
      <React.Fragment>
      <PhoneInput
        defaultCountry="RU"
        placeholder="Введите номер телефона *"
        value={value}
        onChange={this.props.setValue}
        style={{
          marginTop:'15px',
          height:'4em',
          // width: '365px'
        }}
      />
      </React.Fragment>
    )
  }
}

export default InputPhone
