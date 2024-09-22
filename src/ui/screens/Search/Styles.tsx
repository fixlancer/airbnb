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

  bgIcon: {
backgroundColor:'#fff',
width:30,
borderRadius:30,
padding:5,
borderWidth: StyleSheet.hairlineWidth,
borderColor:'#ddd',
height:30, justifyContent:'center',alignItems:'center',
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

bgFilter : {
height:'auto',
padding:5,
marginRight:10,
width:'auto',
justifyContent:'center',
borderWidth: StyleSheet.hairlineWidth,alignItems:'center',
borderColor:'#ddd',
borderRadius:20,
paddingLeft:10,
flexDirection:'row',
marginVertical:5,
},

mediumLabel: {
  fontSize: moderateScale(12),
  textAlign:'center',
  fontFamily: 'Nunito-Regular',
  color:'#343434'
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

  emptyCont: {
      height: 'auto',
      width:'100%',
      backgroundColor:'#fff',
      borderRadius:8,
      marginVertical:3,
      paddingHorizontal:9,
      paddingVertical:10,
      elevation:0,
  },
  cont: {
    height: 'auto',
    width:'100%',
    marginVertical:1.5,
    paddingHorizontal:6,
},

drop2: {
  width:120,
  borderWidth: StyleSheet.hairlineWidth, 
  borderColor: '#ddd',
  borderRadius:10,alignItems:'center',
  paddingHorizontal:5,
  height:40,
  marginTop:0,
  marginBottom:0,
},

drop: {
  width:'65%',
  borderWidth: StyleSheet.hairlineWidth, 
  borderColor: '#ddd',
  borderRadius:20,alignItems:'center',
  paddingHorizontal:15,
  height:40,
  marginTop:0,
  marginBottom:0,
},

text: {
  color:'#343434',
  alignSelf:'center',
  padding:10,
  paddingLeft:15,
  fontSize: moderateScale(12),
  width:'100%'
},

roundBg: {
backgroundColor:'#fff',
borderWidth:1,
borderColor:'#ddd',
marginRight:5,
justifyContent:'center',
alignItems:'center',
borderRadius:50,
width:40,
height:40,
},

bottomBar: {
  backgroundColor:'#fff',
  paddingBottom: Platform.OS === 'ios' ? 40 : 15,
borderTopColor:'#ddd',
borderTopWidth: StyleSheet.hairlineWidth,
},

button: {
backgroundColor: '#7E178E',
borderWidth: StyleSheet.hairlineWidth,
borderRadius:10,
marginTop:0,
width:'auto',
marginRight:10,
paddingVertical:10,
paddingHorizontal:20,
height:'auto',
justifyContent:'center',alignItems:'center',
  },

  submitButton: {
    backgroundColor: '#7E178E',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius:10,
    marginTop:0,
    width:'auto',
    paddingVertical:10,
    paddingHorizontal:15,
    height:'auto',
    justifyContent:'center',alignItems:'center',
      },

  buttonLabel: {
    fontSize: moderateScale(12),
    color:'#fff',
    textAlign:'center',
  },

    mainText: {
      color:'#343434',
      alignSelf:'center',
      padding:8,
      paddingLeft:5,
      fontSize: moderateScale(12),
      width:'100%'
    },

/** SLIDER CSS */

nRoot: {
width:8,
height:8,
borderLeftColor: 'transparent',
borderRightColor:'transparent',
borderTopColor:'#ddd',
borderLeftWidth:4,
borderRightWidth:4,
borderTopWidth:4
},

labelRoot: {
alignItems:'center',
padding:8,
backgroundColor:'#343434',
borderRadius:10,
},

root: {
  height: 4,
  backgroundColor: '#7E178E',
  borderRadius: 2,
},

rootRail: {
  flex: 1,
  height: 4,
  borderRadius: 2,
  backgroundColor: '#ddd',
},

rootLow: {
  width: THUMB_RADIUS_LOW * 2,
  height: THUMB_RADIUS_LOW * 2,
  borderRadius: THUMB_RADIUS_LOW,
  borderWidth: 2,
  borderColor: '#7E178E',
  backgroundColor: '#fff',
},

rootHigh: {
  width: THUMB_RADIUS_HIGH * 2,
  height: THUMB_RADIUS_HIGH * 2,
  borderRadius: THUMB_RADIUS_HIGH,
  borderWidth: 2,
  borderColor: '#7E178E',
  backgroundColor: '#ffffff',
},

  });



export default styles;
