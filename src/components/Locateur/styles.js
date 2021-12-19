import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
  image: {
    width: '100%',
    aspectRatio: 3 / 2,
    resizeMode: 'cover',
    borderRadius: 10,
  },

  bedrooms: {
    marginVertical: 10,
    color: '#5b5b5b',
  },
  description: {
    fontSize: 18,
    lineHeight: 26,
  },
  prices: {
    fontSize: 18,
    marginVertical: 10,
    textDecorationLine: 'underline',
  },

  price: {
    fontWeight: 'bold',
  },
  underPic: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 8,
    marginTop: 6,
  },

  editBtn: {
    marginBottom: 5,
  },
});

export default styles;
