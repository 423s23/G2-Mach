import {StyleSheet, Text, View} from 'react-native';
import {symbolicate} from "react-native/Libraries/LogBox/Data/LogBoxSymbolication";
//
const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.header}>MACH</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    header: {
        position: "relative",
        marginTop: 50,
        fontSize: 50,
        color: '#6ccff6'
    }

});
export default Header;