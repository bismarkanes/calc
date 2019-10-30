import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

class ButtonCalc extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    let value = this.props.label

    return (
      <View style={{ justifyContent: 'center', alignItems: 'center', ...this.props.style }}>
        <TouchableOpacity onPress={() => { this.props.onPress(value)} } style={{ backgroundColor: this.props.backgroundColor, width: 70, height: 70, borderRadius: 25, justifyContent: 'center', alignItems: 'center', ...this.props.buttonStyle }}>
          <Text style={this.props.labelStyle}>{this.props.label}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

ButtonCalc.propTypes = {
  label: PropTypes.string,
  labelStyle: PropTypes.object,
  style: PropTypes.object,
  onPress: PropTypes.func,
  backgroundColor: PropTypes.string,
  buttonStyle: PropTypes.object,
}

ButtonCalc.defaultProps = {
  label: '',
  labelStyle: {},
  style: {},
  onPress: () => null,
  backgroundColor: 'grey',
  buttonStyle: {},
}

export default ButtonCalc
