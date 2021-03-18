import React, { useState, useContext } from "react";
import { Image, Header, Overlay, ListItem } from "react-native-elements";
import { StyleSheet, Text, View, Dimensions, Platform } from "react-native";
import Logo from "../../assets/Kohler-hfb-divider.png";
import InstallContext from "../context/installContext";

export default function HFBHeader({ navigation }) {
  const [visible, setVisible] = useState(false);
  const {
    projectType,
    installStory,
    typeOfHome,
    workspaceLocation,
    bathroomLocation,
    onlyBathroom,
    waterShutOff,
    hasBasement,
    basementCondition,
    isPermitRequired,
    hoa,
  } = useContext(InstallContext);

  const toggleOverlay = () => {
    setVisible(!visible);
  };
  return (
    <>
      <Header
        leftComponent={{
          icon: "menu",
          color: "#fff",
          onPress: () => navigation.openDrawer(),
          style: { textAlignVertical: "center" },
          size: 30,
        }}
        centerComponent={
          <Image
            source={Logo}
            style={
              Platform.isPad
                ? {
                    width: 200,
                    height: 80,
                    resizeMode: "contain",
                  }
                : {
                    width: 200,
                    height: 40,
                    resizeMode: "contain",
                  }
            }
            onPress={() => navigation.navigate("Home")}
          />
        }
        rightComponent={{
          icon: "receipt",
          color: "#fff",
          onPress: toggleOverlay,
          style: { textAlignVertical: "center" },
          size: 30,
        }}
        backgroundColor="#7a7a7a"
        statusBarProps={{ barStyle: "light-content" }}
      />
      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <View style={Platform.isPad ? styles.tabletOverlay : styles.overlay}>
          <Text
            style={{
              fontSize: 24,
              alignSelf: "center",
            }}
          >
            Current Install Details
          </Text>
          {projectType !== "" && projectType !== null && (
            <ListItem bottomDivider topDivider>
              <ListItem.Content style={styles.insideRow}>
                <View style={styles.left}>
                  <Text>Project Type: </Text>
                </View>
                <View style={styles.right}>
                  <Text>{projectType}</Text>
                </View>
              </ListItem.Content>
            </ListItem>
          )}
          {installStory !== "" && installStory !== null && (
            <ListItem bottomDivider topDivider>
              <ListItem.Content style={styles.insideRow}>
                <View style={styles.left}>
                  <Text>Install story: </Text>
                </View>
                <View style={styles.right}>
                  <Text>{installStory}</Text>
                </View>
              </ListItem.Content>
            </ListItem>
          )}
          {typeOfHome !== "" && typeOfHome !== null && (
            <ListItem bottomDivider topDivider>
              <ListItem.Content style={styles.insideRow}>
                <View style={styles.left}>
                  <Text>Home Type: </Text>
                </View>
                <View style={styles.right}>
                  <Text>{typeOfHome}</Text>
                </View>
              </ListItem.Content>
            </ListItem>
          )}
          {workspaceLocation !== "" && (
            <ListItem bottomDivider topDivider>
              <ListItem.Content style={styles.insideRow}>
                <View style={styles.left}>
                  <Text>Workspace Location: </Text>
                </View>
                <View style={styles.right}>
                  <Text>{workspaceLocation}</Text>
                </View>
              </ListItem.Content>
            </ListItem>
          )}
          {bathroomLocation !== "" && (
            <ListItem bottomDivider topDivider>
              <ListItem.Content style={styles.insideRow}>
                <View style={styles.left}>
                  <Text>Bathroom Location: </Text>
                </View>
                <View style={styles.right}>
                  <Text>{bathroomLocation}</Text>
                </View>
              </ListItem.Content>
            </ListItem>
          )}
          {onlyBathroom !== "" && onlyBathroom !== null && (
            <ListItem bottomDivider topDivider>
              <ListItem.Content style={styles.insideRow}>
                <View style={styles.left}>
                  <Text>Is this their only bathroom? </Text>
                </View>
                <View style={styles.right}>
                  <Text>{onlyBathroom}</Text>
                </View>
              </ListItem.Content>
            </ListItem>
          )}
          {waterShutOff !== "" && waterShutOff !== null && (
            <ListItem bottomDivider topDivider>
              <ListItem.Content style={styles.insideRow}>
                <View style={styles.left}>
                  <Text>Water shut off: </Text>
                </View>
                <View style={styles.right}>
                  <Text>{waterShutOff}</Text>
                </View>
              </ListItem.Content>
            </ListItem>
          )}
          {typeof hasBasement === "boolean" && (
            <ListItem bottomDivider topDivider>
              <ListItem.Content style={styles.insideRow}>
                <View style={styles.left}>
                  <Text>Home has basement? </Text>
                </View>
                <View style={styles.right}>
                  <Text>{hasBasement ? "Yes" : "No"}</Text>
                </View>
              </ListItem.Content>
            </ListItem>
          )}
          {basementCondition !== "" && basementCondition !== null && (
            <ListItem bottomDivider topDivider>
              <ListItem.Content style={styles.insideRow}>
                <View style={styles.left}>
                  <Text>Basement condition? </Text>
                </View>
                <View style={styles.right}>
                  <Text>{basementCondition}</Text>
                </View>
              </ListItem.Content>
            </ListItem>
          )}
          {isPermitRequired !== "" && isPermitRequired !== null && (
            <ListItem bottomDivider topDivider>
              <ListItem.Content style={styles.insideRow}>
                <View style={styles.left}>
                  <Text>Is a permit required? </Text>
                </View>
                <View style={styles.right}>
                  <Text>{isPermitRequired}</Text>
                </View>
              </ListItem.Content>
            </ListItem>
          )}
          {hoa !== "" && hoa !== undefined && (
            <ListItem bottomDivider topDivider>
              <ListItem.Content style={styles.insideRow}>
                <View style={styles.left}>
                  <Text>HOA? </Text>
                </View>
                <View style={styles.right}>
                  <Text>{hoa === true ? "Yes" : "No"}</Text>
                </View>
              </ListItem.Content>
            </ListItem>
          )}
        </View>
      </Overlay>
    </>
  );
}

const styles = StyleSheet.create({
  overlay: {
    width: Dimensions.get("screen").width - 60,
    height: "70%",
    padding: 10,
  },
  tabletOverlay: {
    width: Dimensions.get("screen").width * 0.6,
    height: "70%",
    padding: 10,
  },
  insideRow: {
    flexDirection: "row",
    alignContent: "space-between",
    width: Dimensions.get("screen").width,
  },
  left: {
    width: 100,
    flex: 1,
    justifyContent: "center",
  },
  right: {
    width: 100,
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
  },
});
