import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

import { scale, moderateScale, verticalScale } from 'react-native-size-matters';
const styles = StyleSheet.create({

  
  textCenter: {
    textAlign: 'center',
  },

/*** TEXT LABEL */

subLabel: {
  fontSize: moderateScale(10),
  textAlign:'left',
  color:'#343434',
  marginTop:2,
  fontFamily: 'Nunito-Regular'
},


/** END OF TEXT LABEL */


/*PADDING & MARGN **/

  mb40: {
    marginBottom:40,
},

mb30: {
  marginBottom:30,
},

mb20: {
  marginBottom:20,
},

mb10: {
    marginBottom:10,
},
  pt15: {
    paddingTop:15,
  },

  newPH: {
    width:width - 68
  },

  pt30: {
paddingTop:30,
  },

  pt5: {
paddingTop:5
  },
  pb5: {
    paddingBottom:5,
  },
  ph15: {
    paddingHorizontal:15
},

ph25: {
paddingHorizontal:25,
},

pt10: {
  paddingTop:10,
},

pl15: {
  paddingLeft:15,
},

pl10: {
  paddingLeft: 10,
},

/* END OF PADDING **/


});

export default styles;
