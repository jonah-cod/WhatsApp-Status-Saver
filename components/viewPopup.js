import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Button,
	Image,
} from "react-native";
import { ResizeMode, Video } from "expo-av";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const ViewPopup = ({ selected, setSelected }) => {
      const [status, setStatus] = useState({})
	const statusExtension = selected.substring(selected.length - 3);
	const statusType = statusExtension == "jpg" ? "image" : "video";
	
      useEffect(() => {
        
      }, [selected])
      
	return (
		<View style={styles.popupContainer}>
			<View style={styles.close}>
				<TouchableOpacity
					onPress={() => {
						setSelected(null);
					}}>
					<FontAwesomeIcon
						icon={faClose}
						size={20}
						color="red"
					/>
				</TouchableOpacity>
			</View>
			<View style={styles.statusView}>
				{statusType && statusType === "video" && (
					<Video
						source={{ uri: selected }}
						onPlaybackStatusUpdate={status=>setStatus(()=>status)}
                                    shouldPlay={true}
                                    style={styles.statusViewVideo}
                                    resizeMode={ResizeMode.COVER}
					/>
				)}

				{statusType && statusType === "image" && (
					<Image
						source={{ uri: selected }}
						style={styles.statusViewImage}
					/>
				)}
			</View>
			<View style={styles.saver}>
				<TouchableOpacity>
					<Button title="save">save</Button>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	popupContainer: {
		position: "absolute",
		zIndex: 100,
		width: "80%",
		height: "80%",
		backgroundColor: "white",
		transformOrigin: "50%, 50%",
		alignSelf: "center",
		marginTop: 10,
		borderRadius: 5,

		justifyContent: "space-between",
	},
	close: {
		alignSelf: "flex-end",
		padding: 10,
	},
	statusView: {
		width: "100%",
		height: "80%",
		paddingHorizontal: 10,
	},
	statusViewImage: {
		width: "100%",
		height: "100%",
		objectFit: "contain",
	},
      statusViewVideo:{
            width: "100%",
		height: "100%",
      },
	saver: {
		width: 100,
		alignSelf: "flex-end",
		margin: 10,
	},
});

export default ViewPopup;
