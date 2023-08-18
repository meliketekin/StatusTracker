import React, { useRef, useEffect, useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Animated,
  Easing,
  TouchableOpacity,
} from "react-native";

export const CustomTextInput = (props) => {
  const transY = useRef(new Animated.Value(0));
  const transX = useRef(new Animated.Value(0));
  const scale = useRef(new Animated.Value(1));
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const isDropDown = props.isFocused && props.value.length > 0;
    if (isDropDown || isFocused) {
      handleFocus();
    }
  }, [props.isFocused, props.value, isFocused]);

  const handleFocus = () => {
    Animated.parallel([
      Animated.timing(transY.current, {
        toValue: -12,
        duration: 200,
        useNativeDriver: true,
        easing: Easing.ease,
      }),
      Animated.timing(scale.current, {
        toValue: 0.9,
        duration: 200,
        useNativeDriver: true,
        easing: Easing.ease,
      }),
      Animated.timing(transX.current, {
        toValue: -3,
        duration: 200,
        useNativeDriver: true,
        easing: Easing.ease,
      }),
    ]).start();
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (props.value.length > 0) return;
    Animated.parallel([
      Animated.timing(transY.current, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
        easing: Easing.ease,
      }),
      Animated.timing(scale.current, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
        easing: Easing.ease,
      }),
      Animated.timing(transX.current, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
        easing: Easing.ease,
      }),
    ]).start();
  };
  return (
    <View style={[styles.inputContainer, props.containerStyle]}>
      <Animated.View
        style={[
          styles.labelContainer,
          {
            transform: [
              { translateY: transY.current },
              { translateX: transX.current },
            ],
          },
        ]}
      >
        <Animated.Text
          style={[styles.label, { transform: [{ scale: scale.current }] }]}
        >
          {props.placeholder}
        </Animated.Text>
      </Animated.View>
      <TextInput
        value={props.value}
        style={styles.input}
        onFocus={() =>  setIsFocused(true)}
        onBlur={handleBlur}
        onChangeText={props.onChangeText}
        secureTextEntry={props.secureTextEntry}
        editable={props.isEditable}
      />
      {props.renderRightIcon && (
        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={props.onPressRightIcon}
        >
          {props.renderRightIcon}
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#EAEBEC",
    borderRadius: 15,
    justifyContent: "center",
    paddingVertical: 5,
  },
  input: {
    fontFamily: "PlusJakartaSans-SemiBold",
    fontSize: 14,
    color: "#272A48",
    padding: 30,
    paddingLeft: 18,
    paddingTop: 25,
    paddingBottom: 10,
  },
  labelContainer: {
    position: "absolute",
    padding: 18,
  },
  label: {
    fontFamily: "PlusJakartaSans-Regular",
    fontSize: 14,
    color: "#28282866",
  },
  eyeIcon: {
    position: "absolute",
    padding: 18,
    right: 0,
  },
});
