
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Task from './Components/Task';



export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Task</Text>
      
        <View style={styles.items}>
          {/* This is where the task will go! */}
          <img src={require('./assets/Images/PX426R.jpg')} className='logo' alt="" width="300" height="200"/>
          <Task text={'Buy Strawberry'}/>
          <img src={require('./assets/Images/banana.jpg')} className='logo' alt="" width="300" height="200"/>
          <Task text={'Buy Banana'}/>
          <img src={require('./assets/Images/apples.jpg')} className='logo' alt="" width="300" height="200"/>
          <Task text={'Buy Apples'}/>
          <img src={require('./assets/Images/grapes.jpg')} className='logo' alt="" width="300" height="200"/>
          <Task text={'Buy Grapes'}/>
          <img src={require('./assets/Images/Mango.jpg')} className='logo' alt="" width="300" height="200"/>
          <Task text={'Buy Mango'}/>
          <img src={require('./assets/Images/peaches.jpg')} className='logo' alt="" width="300" height="200"/>
          <Task text={'Buy Peaches'}/>


        </View>
      
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    

  },

  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30,
  },

});
