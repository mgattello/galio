import React from 'react'
import { StyleSheet } from 'react-native'
import { 
    Accordion,
    Block,
    Button,
    Card,
    Text,
    withGalio,
    GalioProvider,
    Checkbox
} from 'galio-framework'

const Introduction = () => {

    const customTheme = {
        SIZES: { BASE: 18, },
        // this will overwrite the Galio SIZES BASE value 16
        COLORS: { PRIMARY: 'red' }
        // this will overwrite the Galio COLORS PRIMARY color #B23AFC
    }

    return (
        <GalioProvider theme={customTheme}>
            <Text h4>Get started with Galio</Text>

            <Text p muted style={{margin: 20}}>Accordion and Block</Text>
            <Block style={{height: 200, margin: 15 }}>
                <Accordion dataArray={data} />
            </Block>

            <Text p muted style={{margin: 20}}>Buttons</Text>
            <Button round uppercase>primary</Button>
            <Button color="info" round uppercase>info</Button>
            <Button color="success" round uppercase>success</Button>
            <Button color="warning" round uppercase>warning</Button>
            <Button 
                onlyIcon 
                icon="tags"
                iconFamily="antdesign"
                iconSize={30}
                color="#50C7C7"
                iconColor="#fff"
                style={{ width: 40, height: 40 }}
            ></Button>
            <Button 
            round
            color="warning"
            style={{ width: 40, height: 40 }}
            loading
            ></Button>

            <Text p muted style={{margin: 20}}>Card</Text>
            <Card 
                flex
                style={styles.card}
                title="Christopher Moon"
                caption="139 minutes ago"
                location="Los Angeles, CA"
                style={{width: 350}}
                avatar="http://i.pravatar.cc/100?id=skater"
                image="https://images.unsplash.com/photo-1497802176320-541c8e8de98d?&w=1600&h=900&fit=crop&crop=entropy&q=300"
            />

            <Text p muted style={{margin: 20}}>Checkbox</Text>

            <Checkbox color="primary" flexDirection="row-reverse" label="row-reverse checkbox" />
            <Checkbox color="info" initialValue={true} label="initialValue set to true" />
            <Checkbox 
                color="error"
                initialValue={true}
                iconName="car"
                iconFamily="font-awesome"
                color="#50C7C7"
                iconColor="#fff"
                label="different icon"
            />
            <Checkbox color="warning" labelStyle={{ color: '#FF9C09' }} label="labelStyle used here" />
        </GalioProvider>
    )
}
// Data for the accordion.
const data = [
    {
      title: "Let's have some fun",
      content: "This is going to be fun!",
      icon: {
        name: "keyboard-arrow-up",
        family: "material",
        size: 18
      }
    },
    {
      title: "Is it fun?",
      content: "yeah"
    },
    {
      title: "Is it fun?",
      content: "nah"
    },
    {
      title: "Is it fun?",
      content: "...."
    },
]


const styles = theme => StyleSheet.create({
    container: {
      flex: 1,
      // Example.
      backgroundColor: theme.COLORS.FACEBOOK
    }
});

export default withGalio(Introduction, styles)