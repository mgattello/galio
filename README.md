# Galio Framework - Test

Galio is a UI framework for react-native application. This project is created to test the components.

## Installation

If you don't have expo install:

```bash
npm install -g expo-cli
```

to run the project:

```bash
expo start
```

## PRO on using Galio

- Allows you to speed up the development of a mobile application with some interesting component, without building them from scratch.
- Custom themes let you play with the style giving you the freedom to change the default values.
- To consume Galio's React Context you need to use the HoC withGalio, and pass your component to it. Wrapping your app and the styles while exporting the component.
- Although the animation of the DeckSwiper is not fluent and could be improved, is a nice feature overall.
- Nice reference table for Colors, Sizes etc...
- The Card component is well done.
- The Galio community seems to be active and respond to people when needed.

## CONS

- The documentation could be improved, is not always clear. It might help to know the specifications of the Components in advance, especially when using FlatList such as in the Accordion.
- Abstracting the View in Galio force you to use the View's framework instead of the react-native one. This could lead to some issue if you already have personalised components in place.
- DeckSwiper animation.
- Custom components must be wrapped in a GalioProvider with the customTheme object as a prop, if you want to override the default style.
- Slider component needs some style workaround to render properly.
- Navbar is pointless. Is a blank component with no style. Could at least give you some pre-built style such as the Card.
- No Charts are provided for now, but it seems that will be provided soon together with 60+ elements.

## Final evaluation

For a react-native UI framework, Galio gives you the basic components you might need when building an app. It's free and Open Source but is designed to give you a simple styling-tool more than let you save lots of time in using pre-built components. I wouldn't recommend to Developers, who don't want to spend to much time in styling and be bother with UI and animations. Instead for them would be better to use React native Elements, more mature and solid.
