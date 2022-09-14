import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const greet = [
    '',
    'This game is called "Fast Bunny"',
    'The point is to tap the chosen squares as fast as you can',
    'Ready? You have 1 minute.',
  ];

  var [count, setCount] = useState(0);

  var [go, setGo] = useState(false);
  var [score, setScore] = useState(0);
  var [tap, setTap] = useState(0);
  var [box, setBox] = useState(0);
  
  const updateTap = () => setTap(() => {
    return tap;
  });
  const updateScore = () => setScore(() => {
    return score;
  });

  var alertIt = () => {
    updateTap();
    updateScore();
    alert("1 minute has passed!");
  };

  const goTrue = () =>
    setGo(() => {
      go = true;
      return go;
    });

  const goFalse = () =>
    setGo(() => {
      go = false;
      return go;
    });

  const incrementScore = () =>
    setScore(() => {
      score++;
      return score;
    });
  const resetScore = () =>
    setScore(() => {
      score = 0;
      return score;
    });

  const incrementTap = () =>
    setTap(() => {
      tap++;
      return tap;
    });

  const resetTap = () =>
    setTap(() => {
      tap = 0;
      return tap;
    });

  function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const random = () =>
    setBox(() => {
      if (go) {
        box = randomInt(1, 9);
      } else {
        noBox();
      }
      return box;
    });

  function random1() {
    if (box === 1) {
      incrementScore();
    }
    incrementTap();
    random();
  }

  function random2() {
    if (box === 2) {
      incrementScore();
    }
    incrementTap();
    random();
  }

  function random3() {
    if (box === 3) {
      incrementScore();
    }
    incrementTap();
    random();
  }

  function random4() {
    if (box === 4) {
      incrementScore();
    }
    incrementTap();
    random();
  }

  function random5() {
    if (box === 5) {
      incrementScore();
    }
    incrementTap();
    random();
  }

  function random6() {
    if (box === 6) {
      incrementScore();
    }
    incrementTap();
    random();
  }

  function random7() {
    if (box === 7) {
      incrementScore();
    }
    incrementTap();
    random();
  }

  function random8() {
    if (box === 8) {
      incrementScore();
    }
    incrementTap();
    random();
  }

  function random9() {
    if (box === 9) {
      incrementScore();
    }
    incrementTap();
    random();
  }

  const noBox = () =>
    setBox(() => {
      box = 0;
      return box;
    });

  const increment = () =>
    setCount(() => {
      count++;
      if (count === 4) {
        count = 0;
        goTrue();
        setTimeout(alertIt, 60000);
        random();
        resetTap();
        resetScore();
      }
      return count;
    });

  const backToZero = () =>
    setCount(() => {
      count = 0;
      goFalse();
      noBox();
      resetScore();
      resetTap();
      return count;
    });

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.box}
        activeOpacity={0.6}
        onPress={increment}
        onLongPress={backToZero}
      >
        <Text style={styles.txt}>Fast Bunny</Text>
      </TouchableOpacity>
      <Text style={styles.answer}>{greet[count]}</Text>
      <View style={styles.bigBox}>
        <View style={styles.upBox}>
          <TouchableOpacity
            style={[
              styles.upLeft,
              { backgroundColor: box === 1 ? 'black' : 'blue' },
            ]}
            onPress={random1}
          />
          <TouchableOpacity
            style={[
              styles.upMiddle,
              { backgroundColor: box === 2 ? 'black' : 'blue' },
            ]}
            onPress={random2}
          />
          <TouchableOpacity
            style={[
              styles.upRight,
              { backgroundColor: box === 3 ? 'black' : 'blue' },
            ]}
            onPress={random3}
          />
        </View>
        <View style={styles.midBox}>
          <TouchableOpacity
            style={[
              styles.midLeft,
              { backgroundColor: box === 4 ? 'black' : 'blue' },
            ]}
            onPress={random4}
          >
            <Text style={styles.scoreStyle}>Tap: {tap}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.midMiddle,
              { backgroundColor: box === 5 ? 'black' : 'blue' },
            ]}
            onPress={random5}
          >
            <Text style={styles.scoreStyle}>{score}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.midRight,
              { backgroundColor: box === 6 ? 'black' : 'blue' },
            ]}
            onPress={random6}
          >
            <Text style={styles.scoreStyle}>Missed: {tap - score}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.botBox}>
          <TouchableOpacity
            style={[
              styles.botLeft,
              { backgroundColor: box === 7 ? 'black' : 'blue' },
            ]}
            onPress={random7}
          />
          <TouchableOpacity
            style={[
              styles.botMiddle,
              { backgroundColor: box === 8 ? 'black' : 'blue' },
            ]}
            onPress={random8}
          />
          <TouchableOpacity
            style={[
              styles.botRight,
              { backgroundColor: box === 9 ? 'black' : 'blue' },
            ]}
            onPress={random9}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#008',
  },
  box: {
    top: 26,
    width: '75%',
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 80,
    shadowColor: '#000',
    shadowOpacity: 1.0,
    elevation: 20,
  },
  txt: {
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
  },
  answer: {
    padding: 5,
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 24,
    color: '#aaa',
    top: 40,
  },
  bigBox: {
    top: 90,
    height: '60%',
    width: '90%',
    borderRadius: 20,
    backgroundColor: 'black',
    flexDirection: 'column',
  },
  upBox: {
    height: '33%',
    padding: 0,
    flex: 1,
    flexDirection: 'row',
    marginBottom: 2,
    backgroundColor: 'black',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  midBox: {
    height: '33%',
    padding: 0,
    flex: 1,
    flexDirection: 'row',
    marginTop: 2,
    marginBottom: 2,
    backgroundColor: 'black',
  },
  botBox: {
    height: '33%',
    padding: 0,
    flex: 1,
    flexDirection: 'row',
    marginTop: 2,
    backgroundColor: 'black',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  upLeft: {
    width: '33%',
    height: '100%',
    marginRight: 2,
    backgroundColor: 'blue',
    borderTopLeftRadius: 20,
  },
  midLeft: {
    width: '33%',
    height: '100%',
    marginRight: 2,
    backgroundColor: 'blue',
    justifyContent: 'center',
  },
  botLeft: {
    width: '33%',
    height: '100%',
    marginRight: 2,
    backgroundColor: 'blue',
    borderBottomLeftRadius: 20,
  },
  upMiddle: {
    width: '33%',
    height: '100%',
    marginRight: 2,
    marginLeft: 2,
    backgroundColor: 'blue',
  },
  midMiddle: {
    width: '33%',
    height: '100%',
    marginRight: 2,
    marginLeft: 2,
    backgroundColor: 'blue',
    justifyContent: 'center',
  },
  botMiddle: {
    width: '33%',
    height: '100%',
    marginRight: 2,
    marginLeft: 2,
    backgroundColor: 'blue',
  },
  upRight: {
    width: '33%',
    height: '100%',
    marginLeft: 2,
    backgroundColor: 'blue',
    borderTopRightRadius: 20,
  },
  midRight: {
    width: '33%',
    height: '100%',
    marginLeft: 2,
    backgroundColor: 'blue',
    justifyContent: 'center',
  },
  botRight: {
    width: '33%',
    height: '100%',
    marginLeft: 2,
    backgroundColor: 'blue',
    borderBottomRightRadius: 20,
  },
  scoreStyle: {
    margin: 0,
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 26,
    color: 'white',
  },
});
