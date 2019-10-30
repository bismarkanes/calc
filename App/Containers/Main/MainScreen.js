import React from 'react'
import { Text, View, ActivityIndicator, SafeAreaView } from 'react-native'
import { connect } from 'react-redux'
// import ExampleActions from 'App/Stores/Example/Actions'
import Style from './MainScreenStyle'
import ButtonCalc from '../../Components/ButtonCalc'
import { Scales } from '../../Utils/Scales'

class MainScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      textValue: '',
    }

    this.onButtonPress = this.onButtonPress.bind(this)
    this.onCalculate = this.onCalculate.bind(this)
    this.onTextPress = this.onTextPress.bind(this)
  }

  onCalculate() {
    let textValue = this.state.textValue
    textValue = textValue.replace(/x/g, '*')
    textValue = textValue.replace(/÷/g, '/')
    textValue = textValue.replace(/%/g, '/100')

    this.setState({
      textValue: eval(textValue),
    })
  }

  onTextPress() {
    let textValue = this.state.textValue

    if (textValue.length > 0) {
      textValue = textValue.substring(0, textValue.length - 1)

      this.setState({
        textValue,
      })
    }
  }

  onButtonPress(value) {
    let textValue = this.state.textValue

    textValue = textValue + value

    this.setState({
      textValue,
    })
  }

  render() {
    const buttonContainer = {
      marginBottom: 10,
      flexDirection: 'row',
    }

    const labelTopStyle = {
      color: 'black',
      fontSize: 25,
    }

    const labelNumberStyle = {
      color: 'white',
      fontSize: 25,
    }

    const labelNumberBackgroundColor = '#383838'
    const labelTopBackgroundColor = '#cacaca'
    const labelRightBackgroundColor = 'darkorange'

    return (
      <SafeAreaView style={Style.container}>
        <View style={{ flex: 1, padding: Scales(10), }}>
          <View style={{ flex: 1, justifyContent: 'flex-end', }}>
            <View style={{ marginBottom: Scales(20), }}>
              <Text onPress={this.onTextPress} style={{ color: 'white', textAlign: 'right', fontSize: Scales(48), }}>{this.state.textValue ? this.state.textValue : 0}</Text>
            </View>

            <View style={buttonContainer}>
              {/* level 1 */}
              <ButtonCalc
                style={{ flex: 1 / 4, }}
                labelStyle={labelTopStyle}
                label="AC"
                backgroundColor={labelTopBackgroundColor}
                onPress={() => {
                  this.setState({
                    textValue: '',
                  })
                }}
              />

              <ButtonCalc
                style={{ flex: 1 / 4, }}
                labelStyle={labelTopStyle}
                label="+/-"
                backgroundColor={labelTopBackgroundColor}
              />

              <ButtonCalc
                style={{ flex: 1 / 4, }}
                labelStyle={labelTopStyle}
                label="%"
                backgroundColor={labelTopBackgroundColor}
                onPress={this.onButtonPress}
              />

              <ButtonCalc
                style={{ flex: 1 / 4, }}
                labelStyle={labelNumberStyle}
                label="÷"
                backgroundColor={labelRightBackgroundColor}
                onPress={this.onButtonPress}
              />
            </View>


            <View style={buttonContainer}>
              {/* level 2 */}
              <ButtonCalc
                style={{ flex: 1 / 4, }}
                labelStyle={labelNumberStyle}
                label="7"
                backgroundColor={labelNumberBackgroundColor}
                onPress={this.onButtonPress}
              />

              <ButtonCalc
                style={{ flex: 1 / 4, }}
                labelStyle={labelNumberStyle}
                label="8"
                backgroundColor={labelNumberBackgroundColor}
                onPress={this.onButtonPress}
              />

              <ButtonCalc
                style={{ flex: 1 / 4, }}
                labelStyle={labelNumberStyle}
                label="9"
                backgroundColor={labelNumberBackgroundColor}
                onPress={this.onButtonPress}
              />

              <ButtonCalc
                style={{ flex: 1 / 4, }}
                labelStyle={labelNumberStyle}
                label="x"
                backgroundColor={labelRightBackgroundColor}
                onPress={this.onButtonPress}
              />
            </View>


            <View style={buttonContainer}>
              {/* level 3 */}
              <ButtonCalc
                style={{ flex: 1 / 4, }}
                labelStyle={labelNumberStyle}
                label="4"
                backgroundColor={labelNumberBackgroundColor}
                onPress={this.onButtonPress}
              />

              <ButtonCalc
                style={{ flex: 1 / 4, }}
                labelStyle={labelNumberStyle}
                label="5"
                backgroundColor={labelNumberBackgroundColor}
                onPress={this.onButtonPress}
              />

              <ButtonCalc
                style={{ flex: 1 / 4, }}
                labelStyle={labelNumberStyle}
                label="6"
                backgroundColor={labelNumberBackgroundColor}
                onPress={this.onButtonPress}
              />

              <ButtonCalc
                style={{ flex: 1 / 4, }}
                labelStyle={labelNumberStyle}
                label="-"
                backgroundColor={labelRightBackgroundColor}
                onPress={this.onButtonPress}
              />
            </View>


            <View style={buttonContainer}>
              {/* level 4 */}
              <ButtonCalc
                style={{ flex: 1 / 4, }}
                labelStyle={labelNumberStyle}
                label="1"
                backgroundColor={labelNumberBackgroundColor}
                onPress={this.onButtonPress}
              />

              <ButtonCalc
                style={{ flex: 1 / 4, }}
                labelStyle={labelNumberStyle}
                label="2"
                backgroundColor={labelNumberBackgroundColor}
                onPress={this.onButtonPress}
              />

              <ButtonCalc
                style={{ flex: 1 / 4, }}
                labelStyle={labelNumberStyle}
                label="3"
                backgroundColor={labelNumberBackgroundColor}
                onPress={this.onButtonPress}
              />

              <ButtonCalc
                style={{ flex: 1 / 4, }}
                labelStyle={labelNumberStyle}
                label="+"
                backgroundColor={labelRightBackgroundColor}
                onPress={this.onButtonPress}
              />
            </View>

            <View style={buttonContainer}>
              {/* level 4 */}
              <ButtonCalc
                style={{ flex: 1 / 2, }}
                buttonStyle={{ width: 140, alignItems: 'flex-start', paddingLeft: 140 / 6, }}
                labelStyle={labelNumberStyle}
                label="0"
                backgroundColor={labelNumberBackgroundColor}
                onPress={this.onButtonPress}
              />

              <ButtonCalc
                style={{ flex: 1 / 4, }}
                labelStyle={labelNumberStyle}
                label="."
                backgroundColor={labelNumberBackgroundColor}
                onPress={this.onButtonPress}
              />

              <ButtonCalc
                style={{ flex: 1 / 4, }}
                labelStyle={labelNumberStyle}
                label="="
                backgroundColor={labelRightBackgroundColor}
                onPress={this.onCalculate}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    )
  }
}

MainScreen.propTypes = {}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainScreen)
