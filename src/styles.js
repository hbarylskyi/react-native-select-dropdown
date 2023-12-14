import {StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  rowRevese: {
    flexDirection: 'row-reverse',
  },
  dropdownButton: {
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#EFEFEF',
    width: width / 2,
    height: 50,
    paddingHorizontal: 8,
    overflow: 'hidden',
  },
  dropdownButtonText: {
    fontSize: 18,
    color: '#000000',
    textAlign: 'center',
    marginHorizontal: 8,
  },
  dropdownCustomizedButtonParent: {
    overflow: 'hidden',
  },
  //////////////////////////////////////
  dropdownRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdownRowText: {
    fontSize: 18,
    color: '#000000',
    textAlign: 'center',
    marginHorizontal: 8,
  },
  dropdownCustomizedRowParent: {
    overflow: 'hidden',
  },
});

export default styles;
