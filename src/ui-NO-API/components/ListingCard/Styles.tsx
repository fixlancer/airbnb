import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

import { scale, moderateScale, verticalScale } from 'react-native-size-matters';
const styles = StyleSheet.create({

  img: {
    width: '100%',
    height: moderateScale(170),
//    borderRadius:20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    justifyContent: 'center',
    alignSelf:'center',
    marginBottom:15,
    zIndex:-1,
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
        borderRadius:15,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#f2f2f2'
      },

      lineBottom : {
        borderBottomColor:'#ddd',
        paddingVertical:0,
      //  marginBottom:15,
        paddingBottom:10,
        borderBottomWidth: StyleSheet.hairlineWidth,
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

          
  opacityBg: {
    position: 'absolute',
    width: 'auto',
    maxWidth: (width - 80) / 1,
    height: 'auto',
    paddingVertical:8,
    paddingHorizontal:10,
    bottom: 20,
    zIndex:99,
    left:25,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius:20, 
},

opacityBg2: {
  position: 'absolute',
  width: 'auto',
  maxWidth: (width - 80) / 1,
  height: 'auto',
  paddingVertical:4,
  paddingHorizontal:10,
  bottom: 20,
  zIndex:99,
  right:10,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  borderRadius:20, 
},


/*** LABEL  ****/

  priceLabel: {
    fontSize: moderateScale(11),
    textAlign:'center',
    color:'#fff',
    fontFamily: 'Nunito-Regular',
  },

  subLabel: {
    fontSize: moderateScale(11),
    textAlign:'left',
    color:'#343434',
    fontFamily: 'Nunito-Regular',
  },

  titleLabel: {
    fontSize: moderateScale(15),
    textAlign:'left',
    color:'#343434',
    fontFamily: 'Nunito-SemiBold',
  },


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

  ph10: {
    paddingHorizontal:10
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

btn : {
  backgroundColor:'#f9f9f9', borderRadius:10, padding:8,
  borderWidth: StyleSheet.hairlineWidth,
  borderColor:'#ddd',
}

});

export default styles;
