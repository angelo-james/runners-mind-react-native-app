import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Content, Card, CardItem, Text } from 'native-base';
import { View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { Location, Permissions, TaskManager } from 'expo';
import TimeFormatter from 'minutes-seconds-milliseconds';
import { sendPost } from '../actions/userActions';
import haversine from 'haversine';

let coords = [];

TaskManager.defineTask('userLocation', async ({data: {locations}, error}) => 
  { 
    // let options = await TaskManager.getTaskOptionsAsync('userLocation')
    let { longitude, latitude } = locations[0].coords
    console.log(longitude, latitude, 'insidetask man')
    coords.push({
      long: longitude,
      lat: latitude
    });
  })

class RunScreen extends Component {
  state = {
    errorMessage: '',
    isTracking: true,
    displayStart: true,
    displayStop: false,
    distance: '0.00',
    mainTimer: null,
    isRuuning: false,
    mainTimerStart: null,
    postId: ''
  }

  componentDidMount() {
  }

  startRun = async (postId) => {
    this.setState({
      postId
    })
    try {
      let { status } = await Permissions.askAsync(Permissions.LOCATION)
      console.log(status)
      if (status !== 'granted') {
        this.setState({errorMessage: 'we need permissions'})
      }
      else {
        Location.startLocationUpdatesAsync('userLocation', {distanceInterval: 1, accuracy: Location.Accuracy.BestForNavigation, postId})
      }
    }
    catch(error) {
      console.log(error)
    }
  }

  
  stopRun = async () => {
    console.log(this.state, coords, 'inside stip rinf')

    Location.stopLocationUpdatesAsync('userLocation')
    try {
      await fetch('http://127.0.0.1:3800/coords', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          coords,
          postId: this.state.postId
        })
      })
    }
    catch(error) {
      console.log(error.message)
    }
    this.setState({
      distance: haversine(
        {latitude: coords[0].lat, longitude: coords[0].long}, 
        {latitude: coords[coords.length - 1].lat, longitude: coords[coords.length - 1].long}
      )
    })
    coords = [];

  }
  
  handleStartBtn = async () => {
    let { isRuuning, mainTimer} = this.state;
    
    if (isRuuning) {
      clearInterval(this.interval);
      this.setState({
        isRunning: false
      })
    }

    this.setState({
      mainTimerStart: new Date(),
      mainTimer: new Date(),
      isRunning: true
    })

    this.interval = setInterval(() => {
      this.setState({
        mainTimer: new Date() - this.state.mainTimerStart + mainTimer
      })
      
    }, 10)

    this.setState({
      displayStart: !this.state.displayStart,
      displayStop: !this.state.displayStop
    })
    try {
      let response = await fetch('http://127.0.0.1:3800/posts', {
        method: 'POST',
        body: JSON.stringify({
          "mainTimer": 0,
          "distance": 0,
          "coords": [],
          "likes": [],
          "comments": [],
          "userId": '5c3d3dd34567a41aa5c68b67'
        }),
        headers: { 
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        }
      })
      console.log(response, 'the runnn')
      let run = await response.json()
      this.startRun(run.data.postId)
    
    }
    catch(error) {
      console.log(error.message)
    }
  }

  handleStopBtn = () => {
    let { isRuuning, mainTimer} = this.state;
    
    if (!isRuuning) {
      clearInterval(this.interval);
      this.setState({
        isRunning: false,
        mainTimer: 0,
        mainTimerStart: null
      })
    }

    this.setState({
      displayStart: !this.state.displayStart,
      displayStop: !this.state.displayStop
    })
    this.stopRun()
    
  }

  render() {
    
    return (
      <View style={{flex: 1, paddingTop: 100}}>
        <Content>
          <Card>
            <CardItem
              style={styles.timer}
            >
              <Text
                style={{fontSize: 80}}
              >
                {TimeFormatter(this.state.mainTimer)}
              </Text>
              <Text
                style={{fontSize: 20}}
              >
                TIME
              </Text>
              <CardItem>
                <View style={styles.timer}>
                  <Text
                    style={{fontSize: 50, alignSelf: 'center'}}
                  >
                    {this.state.distance}
                  </Text>
                  <Text
                    style={{fontSize: 15, alignSelf: 'center'}}
                  >
                    DISTANCE TRAVELLED
                  </Text>
                </View>
              </CardItem>
            </CardItem>
            <CardItem style={styles.runButtonCtrl}>
              {
                !this.state.displayStop ? (null) : 
              <Icon
                onPress={() => this.handleStopBtn()}
                name='pause-circle-outline'
                color='red'
                size='200'
              >
              </Icon>
              }
              {
                !this.state.displayStart ? (null) :
                <Icon
                  onPress={() => this.handleStartBtn()}
                  name='play-circle-outline'
                  color='green'
                  size='200'
                >
              </Icon>
              }
            </CardItem>
          </Card>
        </Content>
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch => {
  return {
    sendPost: bindActionCreators(sendPost, dispatch)
  }
})

const mapStateToProps = (state, dispatch) => {
  return {
    ...state.user
  }
}

const styles = StyleSheet.create({
  runButtonCtrl: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  timer: {
    flex: 1,
    flexDirection: 'column',
    fontSize: 30,
    alignSelf: 'center'
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(RunScreen);