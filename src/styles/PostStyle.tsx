import { StyleSheet } from 'react-native';

export const PostStyle = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#000a15',
    },
    mainTitle: {
        marginHorizontal: 20,
        marginVertical: 15,
        borderWidth: 2,
        borderColor: 'rgba(10,76,100,0.75)',
        borderRadius: 10,
        backgroundColor: 'rgba(0,43,58,0.75)',
        color: 'silver',
    },
    postTitle: {
        marginBottom: 10,
        marginHorizontal: 30,
        // alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'silver',
    },
    postContent: {
        marginHorizontal: 10,
        marginBottom: 10,
        fontSize: 16,
        color: 'silver',
    },
});
