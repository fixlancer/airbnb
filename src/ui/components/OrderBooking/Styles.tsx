import {StyleSheet, Dimensions, Platform} from 'react-native';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters';
const {width, height} = Dimensions.get('screen');


const styles = StyleSheet.create({
  container: {
  backgroundColor: '#FFF',
  width: '100%',
  height: height,
  flex:1,
  },
 
  header: {
    height:'auto',
    width:'100%',
    paddingTop:20,
    paddingBottom:10,
    paddingHorizontal:10,
    backgroundColor:'transparent',
   // borderBottomColor:'#ddd',
   // borderBottomWidth: StyleSheet.hairlineWidth,
  },

  lineBottom : {
    borderBottomColor:'#ddd',
    paddingVertical:0,
    marginBottom:15,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },


  modalHeader: {
    justifyContent:'center', alignItems:'center',  width:'100%', height:'auto', paddingBottom:10, marginBottom:10
  },

  modalLine: {
    height: 4, width: 30, borderRadius: 8, backgroundColor: '#ddd', marginTop: -10, marginBottom: 25, alignSelf: 'center'
  },

  midBg: {
    paddngTop:0, 
    paddingHorizontal: 0, width: '100%', height: '100%',
    backgroundColor: '#fff',
  },

    img: {
      width: moderateScale(110),
      height:  moderateScale(120),
      marginRight:15,
      borderRadius:10,
      },

    bgOverlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.4)', borderRadius:40,
      paddingHorizontal: 0, 
      height:moderateScale(30), 
      width:moderateScale(30),
      justifyContent:'center', 
      alignItems:'center'
    },

    bgLay: {
      backgroundColor:'rgba(0, 0, 0, 0.4)',
      paddingHorizontal: 0, 
      borderRadius:40,
      height:moderateScale(30), 
      width:moderateScale(30),
      justifyContent:'center', 
      alignItems:'center'
    },

  Row: {
    flexDirection:'row',
  },
  
  RowB: {
    flexDirection:'row',
    justifyContent:'space-between',
  }, 

  bgOver: {
borderWidth: StyleSheet.hairlineWidth,
borderColor:'#ddd',
paddingHorizontal:5,
alignItems:'center',
justifyContent:'center',
borderRadius:5,
  },

  bgItem : {
    height:'auto',
    paddingVertical:10,
    marginRight:0,
    width:'auto',
    paddingHorizontal:10,
    justifyContent:'center',
   // borderRightWidth: StyleSheet.hairlineWidth,
   alignItems:'center',
   // borderRightColor:'#ddd',
    borderRadius:0,
    },


    textCenter: {
      textAlign: 'center',
    },
  
  
    alignCenter: {
      justifyContent: 'center', alignItems: 'center'
    },
  
    /*PADDING & MARGN **/
  
    mb40: {
      marginBottom: 40,
    },
  
    mb30: {
      marginBottom: 30,
    },
  
    mb20: {
      marginBottom: 20,
    },
  
    mb15: {
      marginBottom: 15,
    },
    mb10: {
      marginBottom: 10,
      width:'100%',
    },
    mb5: {
      marginBottom: 5,
    },
    pt15: {
      paddingTop: 15,
    },
  
    newPH: {
      width: width - 68
    },
  
    pt30: {
      paddingTop: 30,
    },
  
    pt5: {
      paddingTop: 5
    },
    pb5: {
      paddingBottom: 5,
    },
    ph15: {
      paddingHorizontal: 15
    },
    pt10: {
      paddingTop: 10,
    },
  
    pl15: {
      paddingLeft: 15,
    },
  
    pl10: {
      paddingLeft: 10,
    },
  
    pl5: {
      paddingLeft: 5,
    },
  
    mr5: {
      marginRight: 5
    },
  
    mr10: {
      marginRight: 10
    },
  
    mr15: {
      marginRight: 15,
    },
  
    mr20: {
      marginRight: 20
    },
  
    /* END OF PADDING **/
  
  

reviewBox: {
backgroundColor:'#fff',
borderRadius:10,
borderWidth:StyleSheet.hairlineWidth,
borderColor:'#ddd',
paddingVertical:10,
},

bb: {
marginBottom:0,
paddingVertical:30,
borderBottomColor:'#f5f4f3',
borderBottomWidth:5,
},

bb2: {
  marginBottom:0,
  paddingVertical:30,
  borderBottomColor:'#f5f4f3',
  borderBottomWidth:5,
  backgroundColor:'#f9f9f9'
  },

bgDark: {
backgroundColor:'#343434',
width:'100%',
paddingVertical:5,
height:'auto',
minHeight:50,
marginBottom:-10,
},


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
  marginTop:5,
  fontFamily: 'Nunito-SemiBold',
  textDecorationLine:'underline',
},

tinyMoreLabel: {
  fontSize: moderateScale(12),
  textAlign:'left',
  color:'#343434',
  fontFamily: 'Nunito-SemiBold',
 // textDecorationLine:'underline',
},

noLabel: {
  fontSize: moderateScale(13),
  textAlign:'left',
  color:'#343434',
  marginTop:2,
  fontFamily: 'Nunito-Regular',
  textDecorationLine:'line-through'
},

mediumLabel: {
  fontSize: moderateScale(11),
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
  fontFamily: 'Nunito-SemiBold',
},

userLabel: {
  fontSize: moderateScale(13),
  textAlign:'left',
  color:'#343434',
  fontFamily: 'Nunito-SemiBold',
},

titleLabel: {
  fontSize: moderateScale(14),
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
  fontSize: moderateScale(9),
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
  loader: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    opacity: 0.5,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center'
  },


  });



export default styles;
