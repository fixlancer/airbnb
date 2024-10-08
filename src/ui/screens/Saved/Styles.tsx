import {StyleSheet, Dimensions, Platform} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters';
const {width, height} = Dimensions.get('screen');


const styles = StyleSheet.create({
  container: {
  backgroundColor: '#fff',
  width: '100%',
  height: height,
  flex:1,
  //#7E178E
  },
 
  header: {
    height:'auto',
    width:'100%',
    paddingTop:20,
    paddingHorizontal:15,
    backgroundColor:'transparent',
   // borderBottomColor:'#ddd',
   // borderBottomWidth: StyleSheet.hairlineWidth,
  },


  lineBottom : {
    borderBottomColor:'#ddd',
    paddingVertical:10,
    marginBottom:10,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },


  newModalHeader : {
   width:'100%', height: 'auto', paddingTop:20, paddingBottom:10, marginBottom:10, paddingHorizontal:15, backgroundColor: '#fff',
  },

  modalHeader: {
    justifyContent:'center', alignItems:'center',  width:'100%', height:'auto', paddingBottom:10, marginBottom:10
  },

  modalHeader2: {
    paddingHorizontal: 15, paddingTop: 20, paddingBottom: 0 ,
  },


  modalLine: {
    height:4, width: 30, borderRadius: 8, backgroundColor: '#ddd', marginTop:10, marginBottom:15, alignSelf:'center'
  },


  bgScroll: {
    width:'100%', height:'100%', backgroundColor:'#fff',
  //  borderTopLeftRadius:30, borderTopRightRadius: 30,

  },

  iosBar: {
    paddingBottom: Platform.OS === 'ios' ? 40 : 16,
  },

  
  bgCurve: {
    width:'100%', height:15, borderTopLeftRadius:30, borderTopRightRadius: 30,
  },

  midBg: {
    paddngTop:0, 
    paddingHorizontal: 0, width: '100%', height: '100%',
    backgroundColor: '#fff',
  },


  Row: {
    flexDirection:'row',
  },
  
  RowB: {
    flexDirection:'row',
    justifyContent:'space-between',
  }, 


  textCenter : {
    textAlign:'center',
  },
  
  textWhite : {
    color: '#fff',
  },

  textDark: {
    color: '#343434'
  },

  textGrey: {  
  color:'#808080',
  },

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

mb15:{
  marginBottom:15,
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



/*** TEXT LABEL */

extraLabel:  {
  fontSize: moderateScale(20),
  textAlign:'left',
  color:'#343434',
  fontFamily: 'Nunito-SemiBold',
}, 

moreLabel: {
  fontSize: moderateScale(13),
  textAlign:'left',
  color:'#7E178E',
  fontFamily: 'Nunito-SemiBold',
  textDecorationLine:'underline',
},

noLabel: {
  fontSize: moderateScale(12),
  textAlign:'left',
  color:'#343434',
  fontFamily: 'Nunito-Regular',
  textDecorationLine:'line-through'
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

userLabel: {
  fontSize: moderateScale(13),
  textAlign:'left',
  color:'#343434',
  fontFamily: 'Nunito-SemiBold',
},

titleLabel: {
  fontSize: moderateScale(13),
  textAlign:'left',
  color:'#343434',
  marginBottom:2,
  fontFamily: 'Nunito-SemiBold',
},

subLabel: {
  fontSize: moderateScale(13),
  textAlign:'left',
  color:'#343434',
  marginTop:2,
  fontFamily: 'Nunito-Regular'
},

thinLabel: {
  fontSize: moderateScale(8),
  textAlign:'left',
  color:'#808080',
  marginTop:2,
  marginBottom:5,
  fontFamily: 'Nunito-Regular',
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


tinyDark: {
  fontSize: moderateScale(12),
  textAlign:'left',
  color:'#343434',
  fontFamily: 'Nunito-Regular',
  width: (width - 60) / 1,
},


/** END OF TEXT LABEL */


calBg: {
  width: 'auto', height: 'auto', marginRight: 15, backgroundColor: '#fff',
},

calBg2: {
  width: 'auto', height: 'auto', marginRight: 8, backgroundColor: '#ddd', borderRadius: 30, paddingVertical: 3, paddingHorizontal: 4,
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
})


export default styles;
