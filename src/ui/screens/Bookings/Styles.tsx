import {StyleSheet, Dimensions, Platform} from 'react-native';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters';
const {width, height} = Dimensions.get('screen');

const THUMB_RADIUS_LOW = 12;
const THUMB_RADIUS_HIGH = 16;

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
   width:'100%', height: 'auto', paddingTop:20, paddingBottom:0, marginBottom:10, paddingHorizontal:15,
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


  bgWhite: {
    backgroundColor:'#fff',
  },


  bgScroll: {
    width:'100%', height:'100%', backgroundColor:'#fff',
  //  borderTopLeftRadius:30, borderTopRightRadius: 30,

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

  lineDark: {
    backgroundColor: '#ddd',
    height: StyleSheet.hairlineWidth,
    width: '100%'
  },

  
  left15: {
    left: moderateScale(15)
  },



    
  
  lineBottomDark: {
    borderBottomColor: '#222',
    borderBottomWidth: 2,
  //  borderColor: theme.dark ? '#fff' : '#222',
  },

  lineBottomTransparent: {
    borderBottomColor: 'transparent',
    borderBottomWidth: 2,
  },

  tabLineAuto: {
    width: 'auto',
    justifyContent: 'center', alignItems: 'center',
    height: moderateScale(32),
  },

  flexWrap: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },


  loader: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },

  iosBar: {
    paddingBottom: Platform.OS === 'ios' ? 40 : 16,
  },


  
     /*** END OF MARGIN & PADDING */

    /* FONT WEIGHT */
    fontRegular: {
      fontFamily: 'Nunito-Regular',
    },

    fontSemi: {
      fontFamily: 'Nunito-SemiBold',
    },

    fontLight: {
      fontFamily: 'Nunito-Light',
    },


    fontBold: {
      fontWeight: 'bold'
    },

    font100: {
      fontWeight: '100'
    },



    /** TEXT SIZE */


    fontSize13: {
      fontSize: moderateScale(13),
    },




    /** ABSOLUTE POSITION **/

    absolute: {
      position: 'absolute',
      zIndex: 99,
    },

    bottom4: {
      bottom: moderateScale(4),
    },

    bottom8: {
      bottom: moderateScale(8),
    },

    bottom12: {
      bottom: moderateScale(12),
    },

    bottom16: {
      bottom: moderateScale(16),
    },

    bottom20: {
      bottom: moderateScale(20),
    },

    bottomIOS: {
      bottom: Platform.OS === 'ios' ? moderateScale(40) : moderateScale(10),
    },



    /** OPACITY **/

    opacity05: {
      opacity: 0.5,
    },

    opacity06: {
      opacity: 0.6,
    },

    opacity07: {
      opacity: 0.7,
    },

    opacity08: {
      opacity: 0.8,
    },

    opacity09: {
      opacity: 0.9,
    },

    opacity1: {
      opacity: 1,
    },


    /** END OPACITY **/


    
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

  mr20: {
    marginRight: 20
  },


  mb10: {
    marginBottom: 10,
  },

  mb5: {
    marginBottom: 5,
  },

  mt5: {
    marginTop:5,
  },

  mr10: {
    marginRight: 10
  },

  mr5: {
    marginRight: 5
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
  pb8: {
    paddingBottom: 8,
  },
  ph15: {
    paddingHorizontal: 15
  },
  ph5: {
    paddingHorizontal:5,
  },

  pt10: {
    paddingTop: 10,
  },

  pt15: {
    paddingTop: 15,
  },

  pt20: {
    paddingTop: 20,
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
  marginTop:5,
  fontFamily: 'Nunito-SemiBold',
  textDecorationLine:'underline',
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

secTitle: {
  height:'auto', width:'100%', paddingBottom:15, backgroundColor:'#fff'
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



  });



export default styles;
