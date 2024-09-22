import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

import { scale, moderateScale, verticalScale } from 'react-native-size-matters';
const styles = StyleSheet.create({

  img: {
    width: '100%',
    height: moderateScale(140),
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    justifyContent: 'center',
    alignSelf:'center',
    marginBottom:15,
    zIndex:-1,
    },

    img2: {
      width: moderateScale(60),
      height: moderateScale(40),
      borderRadius: 5,
      justifyContent: 'center',
      alignSelf:'center',
      },

    Row: {
        flexDirection:'row',
      },
      
      RowB: {
        flexDirection:'row',
        justifyContent:'space-between',
      }, 
  
      bookBox: {
        width:'100%',
        height:'auto',
        backgroundColor:'#fff',
        borderRadius:10,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#ddd'
      },

      lineBottom : {
        borderBottomColor:'#ddd',
        paddingVertical:0,
      //  marginBottom:15,
        paddingBottom:15,
        borderBottomWidth: StyleSheet.hairlineWidth,
      },

      chatBottom : {
        borderTopColor:'#ddd',
        paddingVertical:0,
      //  marginBottom:15,
        paddingBottom:0,
        borderTopWidth: StyleSheet.hairlineWidth,
      },
      
      textLeft: {
        textAlign:'left',
      },

      textWhite:{
        color:'#fff',
      },
   
      notifBg: {
        position:'absolute', zIndex:999, top:5, right:5,
        paddingVertical:3,
        borderRadius:15, paddingHorizontal:8, backgroundColor:'#d40b27'
      },

      stats: {
        position:'absolute', left:5, top:5,
        backgroundColor:'#fff',
        borderRadius:5,
        paddingVertical:3,
        paddingHorizontal:7,
      },

      
      stats2: {
        position:'absolute', left:20, top:5,
        backgroundColor:'#343434',
        borderRadius:5,
        paddingVertical:3,
        paddingHorizontal:7,
      },


      textCenter : {
        textAlign:'center',
      },
    
      textDark: {
        color: '#343434'
      },
    
      point: {
        height:45, width:'auto', marginRight:15, marginTop:5, borderLeftColor:'#ddd',
        borderLeftWidth:2,  
    },

    divider: {
      height: 'auto', width: 1, backgroundColor: '#ddd', marginTop:10, marginleft:15, marginRight:15,
    },


/*** TEXT LABEL */

extraLabel:  {
  fontSize: moderateScale(20),
  textAlign:'left',
  color:'#343434',
  fontFamily: 'Nunito-SemiBold',
}, 

mediumLabel: {
  fontSize: moderateScale(12),
  textAlign:'left',
  fontFamily: 'Nunito-Regular',
  color:'#808080'
},


largeLabel: {
  fontSize: moderateScale(17),
  textAlign:'left',
  color:'#343434',
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

statsLabel: {
  fontSize: moderateScale(12),
  textAlign:'left',
  color:'#343434',
  fontFamily: 'Nunito-SemiBold',
},

notif: {
  fontSize: moderateScale(12),
  textAlign:'left',
  color:'#fff',
  fontFamily: 'Nunito-SemiBold',
},

/** END OF TEXT LABEL */


/*PADDING & MARGN **/

  mb40: {
    marginBottom:40,
    width:'100%',
},

mb45: {
  marginBottom:45,
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

  newPH: {
    width:width - 68
  },

  pt40: {
marginTop:40,
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
  pb10: {
    paddingBottom:10,
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

pl5: {
  paddingLeft: 5,
},
/* END OF PADDING **/


});

export default styles;
