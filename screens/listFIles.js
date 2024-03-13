import {
	View,
	Text,
	StyleSheet,
	Image,
	ScrollView,
	Dimensions,
	RefreshControl,
	TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { StorageAccessFramework, getInfoAsync } from "expo-file-system";
import ViewPopup from "../components/viewPopup";

const { height, width } = Dimensions.get("screen");
const ListFIles = () => {
	const [statusFiles, setStatusFiles] = useState([]);
	const [refreshing, setRefreshing] = useState(false);
	const [selected, setSelected] = useState(null);
	const handleFilesRead = async () => {
		const permissions =
			await StorageAccessFramework.requestDirectoryPermissionsAsync();

		if (permissions.granted) {
			try {
				let uri = permissions.directoryUri;
				let files = await StorageAccessFramework.readDirectoryAsync(
					uri
				);

				setStatusFiles(files);
			} catch (error) {
				console.log(error);
			}
		}
	};
	useEffect(() => {
		handleFilesRead();
	}, []);

	const handleRefresh = () => {
		setRefreshing(true);
		handleFilesRead();
	};

	const handlePress = (statusURI)=> {
		setSelected(statusURI);
	}

	return (
		<View style={styles.filesContainer}>
			{selected && <ViewPopup selected={selected} setSelected={setSelected}/>}
			<ScrollView
				style={styles.scroll}
				refreshControl={
					<RefreshControl
						refreshing={refreshing}
						onRefresh={handleRefresh}
					/>
				}>
				<View style={styles.statusContainer}>
					{statusFiles.length
						? statusFiles.map((statusUri) => (
								<TouchableOpacity key={statusUri} onPress={()=>handlePress(statusUri)}>
									<Image
										
										style={styles.status}
										source={{ uri: statusUri }}
									/>
								</TouchableOpacity>
						  ))
						: ""}
				</View>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	filesContainer: {
		width: width,
		minHeight: height,
		position: "relative",
	},
	scroll: {
		width: "100%",
		paddingVertical: 10,
		paddingHorizontal: 10,
	},
	statusContainer: {
		flexDirection: "row",
		flexWrap: "wrap",
		gap: 10,
		width: "100%",
	},
	status: {
		width: 60,
		height: 70,
	},
});

export default ListFIles;
