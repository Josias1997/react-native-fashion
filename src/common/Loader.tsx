import React from 'react';

import { ActivityIndicator, View, Modal } from "react-native";

interface ComponentProps {}

const Loader = ({ visible, loadingMessage }) => {
	return (
		<Modal visible={visible} transparent>
			<View style={{
				flex: 1,
				backgroundColor: "rgba(0, 0, 0, 0.7)",
				aligntItems: "center",
				justifyContent: "center"
			}}>
				<ActivityIndicator size="large" color="white" />
			</View>
		</Modal>
	)
};

export default Loader;