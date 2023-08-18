import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { Text, View, Image, StyleSheet } from "react-native";
import React, { useRef, useMemo, useImperativeHandle } from "react";
import { BlurView } from "expo-blur";
import { Pressable } from "react-native";
import { CustomTouchableOpacity } from "./CustomTouchableOpacity";

export const CustomBottomSheetModal = React.forwardRef((props, ref) => {
  const snapPoints = useMemo(() => ["48%"], []);
  const modalRef = useRef(null);

  const renderBackdrop = ({ style }) => (
    <BlurView intensity={10} style={[style, { flex: 1 }]}>
      <Pressable onPress={modalRef.current?.close} style={{ flex: 1 }} />
    </BlurView>
  );

  useImperativeHandle(
    ref,
    function () {
      return {
        open() {
          modalRef.current?.present();
        },
      };
    },
    []
  );

  return (
    <BottomSheetModal
      ref={modalRef}
      index={0}
      snapPoints={snapPoints}
      backdropComponent={renderBackdrop}
    >
      <View
        style={{
          backgroundColor: "#FFFFFF",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          gap:25
        }}
      >
        <View style={{ width: "30%", height: "30%" }}>
          <Image
            source={require("../assets/images/successImage.png")}
            resizeMode="contain"
            style={{ width: "100%", height: "100%" }}
          />
        </View>
        <Text style={styles.title}>Updated!</Text>
        <Text style={styles.subtitle}>Update Successfully.</Text>
        <CustomTouchableOpacity text="Okey"/>
      </View>
    </BottomSheetModal>
  );
});

const styles = StyleSheet.create({
  title: {
    fontFamily: "PlusJakartaSans-Bold",
    fontSize: 20,
    color: "#272A48",
  },
  subtitle: {
    fontFamily: "PlusJakartaSans-Medium",
    fontSize: 14,
    color: "#7F879E",
  },
});
