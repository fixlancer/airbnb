import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import Home from '../ui/screens/Home/Home';
import Dashboard from '../ui/screens/Dashboard/Index';
import Saved from '../ui/screens/Saved/Index';
import Search from '../ui/screens/Search/Index';
import ModalSearch from '../ui/screens/ModalSearch/Index';
import Listing from '../ui/screens/Listing/Index';
import OrderBooking from '../ui/components/OrderBooking/OrderBooking';
import BookingChat from '../ui/screens/BookingChat/Index';
import OrderConfirmation from '../ui/components/OrderBooking/OrderConfirmation';
import Bookings from '../ui/screens/Bookings/Index';

import EditListing from '../ui/screens/OwnerListings/EditListing';
import NewListing from '../ui/screens/OwnerListings/NewListing';
import OwnerListings from '../ui/screens/OwnerListings/Index';
import Calendar from '../ui/screens/OwnerListings/Calendar';
import VerifyPhone from '../ui/components/SignIn/VerifyPhone';



// const Stack = createNativeStackNavigator();
const Stack = createStackNavigator();

const RoutesGuest = ({}) => {
  return (
    <Stack.Navigator
      // initialRouteName="SplashScreen"
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>

      <Stack.Group>
      <Stack.Screen name="Home" component={Home} />	  
      <Stack.Screen name="Dashboard" component={Dashboard} />	
       
      <Stack.Screen name='OwnerListings' component={OwnerListings} />
      
      <Stack.Screen name="NewListing" component={NewListing} />	
      <Stack.Screen name="EditListing" component={EditListing} />	
      <Stack.Screen name="Bookings" component={Bookings} />	
      <Stack.Screen name="OrderConfirmation" component={OrderConfirmation} />	
      
      <Stack.Screen name='Search' component={Search} />
      <Stack.Screen name="VerifyPhone" component={VerifyPhone} />	

      </Stack.Group>


      <Stack.Group screenOptions={{ presentation: 'modal' }}>
      
      <Stack.Screen name="Calendar" component={Calendar} /> 
      <Stack.Screen name="BookingChat" component={BookingChat} /> 
      
      
      <Stack.Screen name="OrderBooking" component={OrderBooking} />    
      <Stack.Screen name="Listing" component={Listing} />
      <Stack.Screen name="ModalSearch" component={ModalSearch} />
      <Stack.Screen name="Saved" component={Saved} />

      </Stack.Group>

    </Stack.Navigator>
  );
};
export default RoutesGuest;