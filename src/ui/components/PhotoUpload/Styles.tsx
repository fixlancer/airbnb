import { StyleSheet, Dimensions, Platform } from 'react-native';
import { scale, moderateScale, verticalScale } from 'react-native-size-matters';
const { width, height } = Dimensions.get('screen');


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%',
    height: height,
    flex: 1,
    //#7E178E
  },

  newModalHeader: {
    width: '100%', height: 'auto', paddingBottom: 10, paddingHorizontal: 15,
    backgroundColor: '#fff',
  },

  modalHeader: {
    justifyContent: 'center', alignItems: 'center', width: '100%', height: 'auto', paddingBottom: 10, marginBottom: 10
  },

  modalHeader2: {
    paddingHorizontal: 15, paddingTop: 20, paddingBottom: 0,
  },



  modalLine: {
    height: 4, width: 30, borderRadius: 8, backgroundColor: '#ddd', marginTop: -10, marginBottom: 25, alignSelf: 'center'
  },

  lineBottom: {
    borderBottomColor: '#ddd',
    paddingVertical: 0,
    marginBottom: 0,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

    /**** PHOTO   */

    photoBg: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom:50,
    },
  
    photoAttach: {
      alignSelf: 'center', 
      alignItems:'center',
      flexDirection: 'row', justifyContent: 'center',
      backgroundColor: '#f9f9f9', 
      height: 70,
      width: '100%', marginHorizontal: 15,
      borderRadius: 15, marginBottom: 0, borderWidth: StyleSheet.hairlineWidth, 
      borderColor: '#ddd', borderStyle: 'dashed',
    },
  
    photoImg: {
      borderRadius: 8, backgroundColor: '#f2f2f2',
      width: (width - 40) / 2,
      height: (width - 40) / 2,
      alignItems:'center',
      alignContent: 'center',
      justifyContent: 'center',
    },
  
    attachMore: {
      position: 'absolute',
      width: 'auto',
      height: 'auto',
      paddingVertical:8,
      paddingHorizontal:10,
      bottom: Platform.OS === 'ios'? 60 : 20,
      justifyContent:'center',
      alignSelf:'center',
      zIndex:99,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      borderRadius:20, 
    },
  
    deleteBg: {
      position:'absolute',bottom:10, borderRadius:6, 
      padding:5, right:5, 
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    //  backgroundColor:'#fbd2d0'
    },
  
    /* END OF PHOTO  */

  midBg: {
    paddngTop: 0,
    paddingHorizontal: 0, width: '100%', height: '100%',
    backgroundColor: '#fff',
  },

  Row: {
    flexDirection: 'row',
  },

  RowB: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },


  textCenter: {
    textAlign: 'center',
  },

  textWhite: {
    color: '#fff',
  },

  textDark: {
    color: '#343434'
  },

  textPurple: {
    color: '#7E178E'
  },

  textGrey: {
    color: '#808080',
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
  },
  mb5: {
    marginBottom: 5,
  },

  mt5: {
    marginTop:5,
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



  /*** TEXT LABEL */

  extraLabel: {
    fontSize: moderateScale(20),
    textAlign: 'left',
    color: '#343434',
    fontFamily: 'Nunito-SemiBold',
  },

  moreLabel: {
    fontSize: moderateScale(13),
    textAlign: 'left',
    color: '#7E178E',
    fontFamily: 'Nunito-SemiBold',
    textDecorationLine: 'underline',
  },

  noLabel: {
    fontSize: moderateScale(12),
    textAlign: 'left',
    color: '#343434',
    fontFamily: 'Nunito-Regular',
    textDecorationLine: 'line-through'
  },

  mediumLabel: {
    fontSize: moderateScale(12),
    textAlign: 'center',
    fontFamily: 'Nunito-Regular',
    color: '#343434'
  },


  largeLabel: {
    fontSize: moderateScale(17),
    textAlign: 'left',
    color: '#343434',
    marginTop: 2,
    marginBottom: 0,
    fontFamily: 'Nunito-SemiBold',
  },

  largeLabel2: {
    fontSize: moderateScale(15),
    textAlign: 'left',
    color: '#343434',
    marginBottom: 15,
    fontFamily: 'Nunito-SemiBold',
  },

  userLabel: {
    fontSize: moderateScale(13),
    textAlign: 'left',
    color: '#343434',
    fontFamily: 'Nunito-SemiBold',
  },

  titleLabel: {
    fontSize: moderateScale(13),
    textAlign: 'left',
    color: '#343434',
    marginBottom: 2,
    fontFamily: 'Nunito-SemiBold',
  },

  subLabel: {
    fontSize: moderateScale(13),
    textAlign: 'left',
    color: '#343434',
    // marginTop:2,
    fontFamily: 'Nunito-Regular'
  },

  thinLabel: {
    fontSize: moderateScale(8),
    textAlign: 'left',
    color: '#808080',
    marginTop: 2,
    marginBottom: 5,
    fontFamily: 'Nunito-Regular',
  },

  tinyLabel: {
    fontSize: moderateScale(11),
    textAlign: 'left',
    color: '#808080',
    // marginTop:2,
    //  marginBottom:5,
    fontFamily: 'Nunito-Regular',
    // width: (width - 60) / 1,
  },


  tinyDark: {
    fontSize: moderateScale(11),
    textAlign: 'left',
    color: '#343434',
    fontFamily: 'Nunito-Regular',
    // width: (width - 60) / 1,
  },


  /** END OF TEXT LABEL */



  button: {
    backgroundColor: '#7E178E',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#7E178E',
    borderRadius: 10,
    marginTop: 0,
    width: 'auto',
    marginRight: 0,
    paddingVertical: 5,
    paddingHorizontal: 15,
    height: 'auto',
    justifyContent: 'center', alignItems: 'center',
  },

  submitButton: {
    backgroundColor: '#7E178E',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#7E178E',
    borderRadius: 10,
    marginTop: 0,
    width: 'auto',
    paddingVertical: 15,
    paddingHorizontal: 15,
    height: 'auto',
    justifyContent: 'center', alignItems: 'center',
  },

  buttonLabel: {
    fontSize: moderateScale(12),
    color: '#fff',
    textAlign: 'center',
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

})


export default styles;
