import { StyleSheet } from 'react-native';

export const AddPostStyle = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#000a15'
    },
    background: {
        marginTop: 20,
        backgroundColor: 'rgba(0,43,58,0.75)',
        marginHorizontal: 20,
        marginBottom: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'rgba(10,76,100,0.75)'
    },
    mainInput: {
        marginHorizontal: 20,
        marginTop: 10
    },
    addPostTitle: {
        height: 30,
        borderWidth: 1,
        borderColor: 'rgba(10,76,100,0.75)',
        borderRadius: 5,
        fontSize: 14,
        color: 'silver',
        textDecorationColor: 'white',
        marginBottom: 8,
        paddingHorizontal: 10
    },
    addPostContent: {
        height: 230,
        borderWidth: 1,
        borderColor: 'rgba(10,76,100,0.75)',
        borderRadius: 5,
        fontSize: 14,
        color: 'silver',
        textDecorationColor: 'white',
        marginBottom: 15,
        paddingHorizontal: 10
    },
    bothBottom: {
        flexDirection: 'row',
    },
    addPostButton: {
        alignSelf: 'flex-end',
        height: 30,
        width: 80,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'rgba(53,143,175,0.75)',
        backgroundColor: 'rgba(10,76,100,0.75)',
        marginHorizontal: 35,
        marginTop: 15,
        marginBottom: 5,
    },
    postButton: {
        alignSelf: 'flex-end',
        height: 30,
        width: 80,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'rgba(53,143,175,0.75)',
        backgroundColor: 'rgba(10,76,100,0.75)',
        marginHorizontal: 105,
        marginTop: 5,
        marginBottom: 15,
    },
    closeButton: {
        alignSelf: 'flex-start',
        height: 30,
        width: 80,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'rgba(53,143,175,0.75)',
        backgroundColor: 'rgba(10,76,100,0.75)',
        marginHorizontal: 35,
        marginTop: 5,
        marginBottom: 15,
    },
    fontButton: {
        color: 'silver',
        fontWeight: 'bold'
    },
    line: {
        borderBottomWidth: 2,
        borderColor: 'rgba(1,15,19,0.75)',
        marginHorizontal: 30,
        marginBottom: 8,
        borderRadius: 2,
    },
    textEnter: {
        color: 'grey',
        margin: 5,
        fontWeight: 'bold',
    }
});
