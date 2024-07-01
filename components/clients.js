import React, { useState } from "react";
import { View, StyleSheet } from 'react-native';
import { Card, Avatar, Button, Text, Title, Paragraph, Searchbar, Portal, Modal, Provider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function reservation() {

    const [visible, setVisible] = useState(false);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    return (
        <Provider>
            <View>
                <Portal>
                    <Modal visible={visible}>
                        <Text>this is Modal</Text>
                        <Button onPress={hideModal}>Annuler</Button>
                        <Button>Enregistrer</Button>
                    </Modal>
                </Portal>
                <View style={Styles.header}>
                    <Button icon="account-plus" mode="contained" color="FF9800" onPress={showModal}>Nouveau</Button>
                    <Searchbar placeholder="Rechercher.." icon="magnify" />
                    <Portal>
                        <Modal visible={visible}>
                            <Text>this is Modal</Text>
                            <Button onPress={hideModal}>Annuler</Button>
                            <Button>Enregistrer</Button>
                        </Modal>
                    </Portal>
                </View>
                <Text style={Styles.TitreListe}>Liste des Clients</Text>
                <Card style={Styles.Listes}>
                    <Card.Content style={Styles.CardContent}>
                        <Avatar.Icon size={50} icon="account" style={Styles.Avatar} />
                        <View style={Styles.Apropos}>
                            <View>
                                <Title style={Styles.Nom}>RAKOTO Jhon</Title>
                                <Paragraph style={Styles.Mail}>Software Engineer</Paragraph>
                            </View>
                            <Icon name="dots-vertical" size={25} />
                        </View>
                    </Card.Content>
                </Card>
            </View>
        </Provider>
    );
}

const Styles = StyleSheet.create({
    header: {
        margin: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    TitreListe: {
        marginTop: 0,
        marginLeft: 15,
        fontSize: 20,
    },
    Listes: {
        height: 75,
        margin: 10,
    },
    CardContent: {
        padding: 20,
        flexDirection: 'row',
    },
    Apropos: {
        marginLeft: 15,
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})