import { StyleSheet } from 'react-native';

export const DropdownStyle = StyleSheet.create({
    main: {
        alignContent: 'center',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'rgba(10,76,100,0.75)',
        marginHorizontal: 20,
        marginBottom: 10,
        // paddingVertical: 5
    },
    dropField: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 30,
        marginHorizontal: 10,
    },
    nameField: {
        fontSize: 14,
        color: 'grey',
    },
    flatList: {
        fontSize: 14,
        color: 'silver',
        marginHorizontal: 15,
        marginBottom: 7,
        paddingVertical: 5,
    },
    closeButton: {
        fontSize: 14,
        color: 'silver',
        marginHorizontal: 10,
        marginTop: 7,
        paddingVertical: 5,
    },
    whoPosts: {
        marginHorizontal: 25,
        color: 'grey',
        marginBottom: 5,
        fontWeight: 'bold',
    }
})
