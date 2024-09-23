import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
import { scale, moderateScale, verticalScale } from 'react-native-size-matters';
const styles = StyleSheet.create({


    Row: {
        flexDirection:'row',
      },
      
      RowB: {
        flexDirection:'row',
        justifyContent:'space-between',
      }, 
  
      alignCenter: {
        justifyContent:'center', alignItems:'center'
      },

      textLeft: {
        textAlign:'left',
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


/*** TEXT LABEL */

tinyLabel: {
  fontSize: moderateScale(12),
  textAlign:'center',
  color:'#808080',
  fontFamily: 'Nunito-Regular',
},

largeLabel:  {
  fontSize: moderateScale(15),
  textAlign:'center',
  color:'#343434',
  fontFamily: 'Nunito-Medium',
}, 

tinyDark: {
  fontSize: moderateScale(12),
  textAlign:'center',
  color:'#343434',
  fontFamily: 'Nunito-Regular',
},


lineBottomLight: {
  borderBottomColor: '#f2f2f2',
  borderBottomWidth: StyleSheet.hairlineWidth,
},

lineBottomDark: {
  borderBottomColor: '#ddd',
  borderBottomWidth: StyleSheet.hairlineWidth,
},


lineLight: {
  backgroundColor: '#f2f2f2',
  height: StyleSheet.hairlineWidth,
  width: '100%'
},

lineDark: {
  backgroundColor: '#ddd',
  height: StyleSheet.hairlineWidth,
  width: '100%'
},

borderWidthLight: {
  borderWidth: StyleSheet.hairlineWidth,
  borderColor: '#f2f2f2',
},

borderWidthDark: {
  borderWidth: StyleSheet.hairlineWidth,
  borderColor: '#ddd',
},

borderDark: {
  borderWidth: StyleSheet.hairlineWidth,
  borderColor: '#b0b0b0',
},

bgScroll: {
  width: '100%', height: '100%', backgroundColor: '#fff',
  //  borderTopLeftRadius:30, borderTopRightRadius: 30,

},

bgCurve: {
  width: '100%', height: 15, borderTopLeftRadius: 30, borderTopRightRadius: 30,
},


bgGrey: {
  backgroundColor: '#f3f5f9',
},

bgGreen: {
  backgroundColor: '#1cc88a',
},

bgWhite: {
  backgroundColor: '#fff',
},

bgLightGrey: {

  backgroundColor: '#fafafa',
},



flex0: {
  flex: 0
},

flex1: {
  flex:1
},

alignSelf: {
  alignSelf:'auto'
},



textRight: {
  textAlign: 'right',
},


textRed: {
  color: '#ff0000',
},

textGreen: {
  color: '#1cc88a',
},



/*PADDING & MARGN **/

p20: {
padding: 20
},

p16: {
padding: 16
},


p12: {
padding: 12
},

p8: {
padding: 8
},

p4: {
padding: 4
},


mb40: {
marginBottom: 40,
},

mb32: {
marginBottom: 32,
},

mb28: {
marginBottom: 28,
},

mb24: {
marginBottom: 24,
},

mb20: {
marginBottom: 20,
},

mb16: {
marginBottom: 16,
},

mb12: {
marginBottom: 12,
},

mb8: {
marginBottom: 8,
},

mb4: {
marginBottom: 4,
},


mt32: {
marginTop: 32,
},
mt28: {
marginTop: 28,
},

mt24: {
marginTop: 24,
},

mt20: {
marginTop: 20,
},
mt16: {
marginTop: 16,
},
mt12: {
marginTop: 12,
},
mt8: {
marginTop: 8,
},

mt4: {
marginTop: 4,
},

mt2: {
marginTop: 2,
},

mv24: {
marginVertical: 24,
},
mv20: {
marginVertical: 20,
},
mv16: {
marginVertical: 16,
},
mv12: {
marginVertical: 12,
},
mv8: {
marginVertical: 8,
},
mv4: {
marginVertical: 4,
},



pt32: {
paddingTop: 32,
},

pt20: {
paddingTop: 20,
},

pt16: {
paddingTop: 16,
},

pt12: {
paddingTop: 12,
},

pt8: {
paddingTop: 8,
},
pt4: {
paddingTop: 4,
},


pv24: {
paddingVertical: 24,
},
pv20: {
paddingVertical: 20,
},
pv16: {
paddingVertical: 16,
},
pv12: {
paddingVertical: 12,
},
pv8: {
paddingVertical: 8,
},
pv4: {
paddingVertical: 4,
},


newPH: {
width: width - 68
},

pb32: {
paddingBottom: 32,
},

pb20: {
paddingBottom: 20,
},

pb16: {
paddingBottom: 16,
},

pb12: {
paddingBottom: 12,
},

pb8: {
paddingBottom: 8,
},

pb4: {
paddingBottom: 4,
},

pb2: {
paddingBottom: 2,
},


ph40: {
paddingHorizontal: 40
},

ph32: {
paddingHorizontal: 32
},

ph20: {
paddingHorizontal: 20
},

ph16: {
paddingHorizontal: 16
},

ph12: {
paddingHorizontal: 12
},

ph8: {
paddingHorizontal: 8
},

ph4: {
paddingHorizontal: 4
},

pl32: {
paddingLeft: 32,
},

pl28: {
paddingLeft: 28,
},

pl24: {
paddingLeft: 24,
},

pl20: {
paddingLeft: 20,
},

pl16: {
paddingLeft: 16,
},

pl12: {
paddingLeft: 12,
},

pl8: {
paddingLeft: 8,
},

pl4: {
paddingLeft: 4,
},


ml4: {
marginLeft: 4
},

ml8: {
marginLeft: 8
},

ml12: {
marginLeft: 12
},

ml16: {
marginLeft: 16,
},

ml20: {
marginLeft: 20
},

ml32: {
marginLeft: 32,
},

mr4: {
marginRight: 4
},

mr8: {
marginRight: 8
},

mr12: {
marginRight: 12
},

mr16: {
marginRight: 16,
},

mr20: {
marginRight: 20
},

mr32: {
marginRight: 32,
},

mh4: {
marginHorizontal: 4,
},

mh8: {
marginHorizontal: 8,
},

mh10: {
marginHorizontal: 10,
},

mh12: {
marginHorizontal: 12,
},

mh16: {
marginHorizontal: 16,
},


/* END OF PADDING **/




/* BORDERS */

b5: {
  borderRadius: 5,
},
b8: {
  borderRadius: 10,
},
b20: {
  borderRadius: 20,
},
b30: {
  borderRadius: 30,
},



/*** END OF MARGIN & PADDING */

/* FONT WEIGHT */
fontLight: {
  fontFamily: 'Nunito-Light',
},
fontRegular: {
  fontFamily: 'Nunito-Regular',
},

fontSemi: {
  fontFamily: 'Nunito-SemiBold',
},

fontBold: {
  fontWeight: 'bold'
},

font100: {
  fontWeight: '100'
},



/** TEXT SIZE */


fontSize8: {
  fontSize: moderateScale(8),
},

fontSize9: {
  fontSize: moderateScale(9),
},

fontSize10: {
  fontSize: moderateScale(10),
},

fontSize11: {
  fontSize: moderateScale(11),
},

fontSize12: {
  fontSize: moderateScale(12),
},

fontSize13: {
  fontSize: moderateScale(13),
},

fontSize14: {
  fontSize: moderateScale(14),
},

fontSize15: {
  fontSize: moderateScale(15),
},

fontSize17: {
  fontSize: moderateScale(17),
},
fontSize20: {
  fontSize: moderateScale(20),
},

fontSize22: {
  fontSize: moderateScale(22),
},

fontSize23: {
  fontSize: moderateScale(23),
},

fontSize24: {
  fontSize: moderateScale(24),
},

fontSize25: {
  fontSize: moderateScale(25),
},

circleBg: {
  width: moderateScale(60),
  height: moderateScale(60),
  padding: 0,
  marginHorizontal: 1,
  justifyContent: 'center',   
  alignItems:'center',
  borderRadius: 100,
  borderWidth: StyleSheet.hairlineWidth,
  borderColor: '#343434',
},


btn : {
  backgroundColor:'#f9f9f9', borderRadius:10, padding:8,
  borderWidth: StyleSheet.hairlineWidth,
  width:'auto',
  justifyContent:'center',
  alignItems:'center',
  borderColor:'#ddd',
}

});

export default styles;
