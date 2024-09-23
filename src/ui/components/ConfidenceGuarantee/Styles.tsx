import {StyleSheet, Dimensions, Platform} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters';
const {width, height} = Dimensions.get('screen');

const THUMB_RADIUS_LOW = 12;
const THUMB_RADIUS_HIGH = 16;

const styles = StyleSheet.create({
  container: {
  backgroundColor: '#f3f5f9',
  width: width,
  height: height,
  flex:1,
  },
 

  header: {
    height:'auto',
    width:'100%',
    paddingTop:20,
    paddingHorizontal:10,
    backgroundColor:'#fff',
    borderBottomColor:'#ddd',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

  modalHeader: {

    paddingHorizontal: 15, paddingTop: 20, paddingBottom: 15 ,
  marginBottom:10,
  },

  Row: {
    flexDirection:'row',
  },
  
  RowB: {
    flexDirection:'row',
    justifyContent:'space-between',
  }, 


  mb40: {
    marginBottom:40,
    width:'100%',
},

mb30: {
  marginBottom:30,
  width:'100%',
},

mb20: {
  marginBottom:20,
  width:'100%',
},

mb10: {
    marginBottom:10,
    width:'100%',
},
  pt15: {
    paddingTop:15,
  },

  ph15: {
    paddingHorizontal:15
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



largeLabel: {
  fontSize: moderateScale(17),
  textAlign:'left',
  color:'#343434',
  marginTop:2,
  marginBottom:0,
  fontFamily: 'Nunito-SemiBold',
},

largeLabel2: {
  fontSize: moderateScale(15),
  textAlign:'left',
  color:'#343434',
  marginBottom:15,
  fontFamily: 'Nunito-SemiBold',
},



titleLabel: {
  fontSize: moderateScale(13),
  textAlign:'left',
  color:'#343434',
  marginBottom:10,
  fontFamily: 'Nunito-SemiBold',
},

subLabel: {
  fontSize: moderateScale(13),
  textAlign:'left',
  color:'#343434',
  marginTop:1,
  fontFamily: 'Nunito-Regular'
},

tinyLabel: {
  fontSize: moderateScale(12),
  textAlign:'left',
  color:'#808080',
  marginTop:2,
  marginBottom:5,
  fontFamily: 'Nunito-Regular',
  width: (width - 60) / 1,
},




  });



export default styles;
