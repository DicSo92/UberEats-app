import React, {Component} from 'react';
import {View, FlatList, Image, ImageBackground, StyleSheet} from 'react-native';
import {Container, Header, Content, Footer, FooterTab, Button, Item, Input, Icon, Text, Card, CardItem} from 'native-base';

class App extends Component {
    render() {
        return (
            <Container>
                <Header searchBar rounded>
                    <Item>
                        <Icon name="search"/>
                        <Input placeholder="Search"/>
                        <Icon name="people"/>
                    </Item>
                    <Button transparent>
                        <Text>Search</Text>
                    </Button>
                </Header>

                {/*<Content style={styles.contentContainer}>*/}
                <FlatList style={styles.list}
                          contentContainerStyle={styles.listContainer}
                          data={categories}
                          horizontal={false}
                          numColumns={2}
                          keyExtractor={(item) => {
                              return item.id;
                          }}
                          ItemSeparatorComponent={() => {
                              return (
                                  <View style={styles.separator}/>
                              );
                          }}
                          renderItem={(category, index) => {
                              return (
                                  <Card style={styles.card} key={index}>
                                      <CardItem style={styles.cardItem}>
                                          <ImageBackground source={{uri: category.item.url}} style={styles.image}>
                                              <View style={styles.overlay}>
                                                  <Text style={styles.categoryText}>{category.item.name}</Text>
                                              </View>
                                          </ImageBackground>
                                      </CardItem>
                                  </Card>
                              );
                          }}/>
                {/*</Content>*/}

                <Footer>
                    <FooterTab>
                        <Button full>
                            <Text>Footer</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        )
            ;
    }
}

const imgHeight = 150
const styles = StyleSheet.create({
    list: {
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    listContainer: {
        alignItems: 'center',
    },
    separator: {
        marginTop: 10,
    },
    card: {
        flexBasis: '50%',
        marginRight: 5, marginLeft: 5, marginTop: 0, marginBottom: 0,
        position: 'relative',
        justifyContent: 'center',
    },
    cardItem: {
        paddingRight: 0, paddingLeft: 0, paddingTop: 0, paddingBottom: 0
    },
    image: {
        height: imgHeight,
        width: null,
        flex: 1,
        resizeMode: "cover",
    },
    categoryText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
    },

    overlay: {
        // backgroundColor: "#000000a0",
        backgroundColor: 'rgba(0,0,0,0.35)',
        height: imgHeight,
        justifyContent: "center"
    },
});

const categories = [
    {
        "id": 1,
        "name": "Pure veg",
        "url": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/tomato-mascarpone-risotto-b090efa.jpg"
    },
    {
        "id": 2,
        "name": "Pice-bows",
        "url": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/gammon_0-0b58d89.jpg"
    },
    {
        "id": 3,
        "name": "Indonesian",
        "url": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/bbcgfo-1119_familychristmas-jammydodgers_33579-01f5b8f.jpg"
    },
    {
        "id": 4,
        "name": "Pure veg",
        "url": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/tomato-mascarpone-risotto-b090efa.jpg"
    },
    {
        "id": 5,
        "name": "Pice-bows",
        "url": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/gammon_0-0b58d89.jpg"
    },
    {
        "id": 6,
        "name": "Indonesian",
        "url": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/bbcgfo-1119_familychristmas-jammydodgers_33579-01f5b8f.jpg"
    },
    {
        "id": 7,
        "name": "British",
        "url": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/bbcgfo-1119_familychristmas-jammydodgers_33579-01f5b8f.jpg"
    },
    {
        "id": 8,
        "name": "Pure veg",
        "url": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/tomato-mascarpone-risotto-b090efa.jpg"
    },
    {
        "id": 9,
        "name": "Pice-bows",
        "url": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/gammon_0-0b58d89.jpg"
    },
    {
        "id": 10,
        "name": "Indonesian",
        "url": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/bbcgfo-1119_familychristmas-jammydodgers_33579-01f5b8f.jpg"
    },
    {
        "id": 11,
        "name": "British",
        "url": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/bbcgfo-1119_familychristmas-jammydodgers_33579-01f5b8f.jpg"
    },
    {
        "id": 12,
        "name": "Pure veg",
        "url": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/tomato-mascarpone-risotto-b090efa.jpg"
    },
    {
        "id": 13,
        "name": "Pice-bows",
        "url": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/gammon_0-0b58d89.jpg"
    },
    {
        "id": 14,
        "name": "Indonesian",
        "url": "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/bbcgfo-1119_familychristmas-jammydodgers_33579-01f5b8f.jpg"
    },
]

export default App;
