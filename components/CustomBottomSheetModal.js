import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { Text, View } from "react-native";
import React, {
  useRef,
  useMemo,
  useCallback,
  useImperativeHandle,
} from "react";
import { BlurView } from "expo-blur";
import { Pressable } from "react-native";

export const CustomBottomSheetModal = React.forwardRef((props, ref) => {
  const snapPoints = useMemo(() => ["48%"], []);
  const modalRef = useRef(null);

  const renderBackdrop = 
    ({ style }) => (
      <BlurView intensity={10} style={[style, { flex: 1 }]}>
        <Pressable onPress={modalRef.current?.close} style={{ flex: 1 }} />
      </BlurView>
    )
  

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
      <View style={{ backgroundColor: "white", flex: 1 }}>
        <Text>selam</Text>
      </View>
    </BottomSheetModal>
  );
});
