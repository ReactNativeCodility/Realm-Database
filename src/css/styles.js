import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    textHeader: {
        fontSize: 35,
        textAlign: 'center',
        margin: 10,
        color: '#2471A3'
    },
    MainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
    },
    TextInputStyle:{
        borderWidth: 1,
        borderColor: '#2471A3',
        width: '100%',
        height: 40,
        borderRadius: 10,
        marginBottom: 10,
        textAlign: 'center',
    },
    button: {
        width: '100%',
        height: 40,
        padding: 10,
        backgroundColor: '#2471A3',
        borderRadius: 7,
        marginTop: 12
    },
    TextStyle: {
        color: '#fff',
        textAlign: 'center',
    }
});