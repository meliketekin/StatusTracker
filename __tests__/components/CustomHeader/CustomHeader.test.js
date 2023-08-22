import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import { CustomHeader } from "../../../components/CustomHeader";

describe("Custom Header tests", () => {
  it("should match with snapshot", () => {
    const header = render(<CustomHeader />);
    expect(header).toMatchSnapshot();
  });
  it("should render title successfully", () => {
    const text = "Header";
    const header = render(<CustomHeader text={text} />);
    const headerTitle = header.getByTestId("headerTitle").children[0];
    expect(headerTitle).toBe(text);
  });
  it("triggers onPress when the back button is pressed", () => {
    const onPress = jest.fn();
    const header = render(<CustomHeader hasGoBack={true} onPress={onPress} />);
    const headerBackButton = header.getByTestId("headerBackButton");
    fireEvent.press(headerBackButton);
    expect(onPress).toHaveBeenCalled();
  });
  it("should not display back button when hasGoBack prop is false", () => {
    const header = render(<CustomHeader hasGoBack={false} />);
    const headerBackButton = header.queryByTestId("headerBackButton");
    expect(headerBackButton).toBeNull();
  });
});
