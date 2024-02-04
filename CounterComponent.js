import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

const CounterComponent = ({ count, increment, decrement }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.countText}>Count: {count}</Text>
      <Button title="Increment" onPress={increment} />
      <Button title="Decrement" onPress={decrement} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  countText: {
    fontSize: 20,
    marginBottom: 20,
  },
});

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: 'INCREMENTZ' }),
    decrement: () => dispatch({ type: 'DECREMENT' }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent);
