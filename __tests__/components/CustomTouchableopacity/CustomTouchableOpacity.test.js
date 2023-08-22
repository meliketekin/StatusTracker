import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import { CustomTouchableOpacity } from "../../../components/CustomTouchableOpacity";

describe("Custom Touchable Opacity tests", () => {
  it("should match with snapshot", () => {
    const button = render(<CustomTouchableOpacity />);
    expect(button).toMatchSnapshot();
  });
  it("should render button text successfully", () => {
    const text = "button";
    const button = render(<CustomTouchableOpacity text={text} />);
    const buttonText = button.getByTestId("buttonText").children[0];
    expect(buttonText).toBe(text);
  });
  it("should trigger onPress when button is pressed", () => {
    const onPress = jest.fn();
    const button = render(<CustomTouchableOpacity onPress={onPress} />);
    const buttonComp = button.getByTestId("button");
    fireEvent.press(buttonComp);
    expect(onPress).toHaveBeenCalled();
  });
  it("should have container style when it has containerStyle props", () => {
    const containerStyle = { backgroundColor: "black" };
    const button = render(
      <CustomTouchableOpacity containerStyle={containerStyle} />
    );
    const buttonCompStyle = button.getByTestId("button").props.style;
    expect(buttonCompStyle).toEqual(expect.objectContaining(containerStyle));
    // expect(buttonCompStyle).toContain(containerStyle);
  });
  it("should have text style when it has textStyle props", () => {
    const textStyle = { color: "red" };
    const button = render(<CustomTouchableOpacity textStyle={textStyle} />);
    const buttonTextStyle = button.getByTestId("buttonText").props.style;
    // expect(buttonTextStyle).toEqual(expect.objectContaining(textStyle)); ???
    expect(buttonTextStyle).toContain(textStyle);
  });
});
