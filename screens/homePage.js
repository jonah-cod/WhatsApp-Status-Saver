import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";


const HomePage = () => {


	return (
		<View style={styles.topContainer}>
			<View style={styles.headerContainer}>
				<Text style={styles.headerText}>WhatsApp Status</Text>
                        <TouchableOpacity>
                        <FontAwesomeIcon icon={faEllipsisVertical} style={styles.headerIcon} size={20}/>
                        </TouchableOpacity>
			</View>
			<Text style={styles.tabText}>Status</Text>
			<View style={styles.underline}></View>
		</View>
	);
};

const styles = StyleSheet.create({
	topContainer: {
		backgroundColor: "#008069",
		paddingTop: 60,
		paddingHorizontal: 10,
	},
      headerContainer: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            
      },
	headerText: {
		color: "white",
		fontSize: 20,
		fontWeight: "bold",
            
	},

      headerIcon:{
            color: "white",
            
      },

	tabText: {
		color: "white",
		marginTop: 10,
		fontSize: 20,
	},
	underline: {
		height: 2,
		width: 70,
		backgroundColor: "white",
		marginStart: -5,
	},
});
export default HomePage;
