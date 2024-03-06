import React from "react";
import { View, Image } from "react-native";
import Header from '../../components/header/index';
import { ContentView } from "./styles";
import { Paragraph } from "../../fonts";

export default function Blog({ route, navigation }) {
    const { imageurl, title, subtitle, content } = route.params;

    return (
      <View>
        <Header type="Blog" title={title} subtitle={subtitle} navigation={navigation} />
        <Image
          source={{ uri: imageurl }}
          style={{ height: 200, alignSelf: 'stretch', flexShrink: 0 }} />
        <ContentView>
          <Paragraph content={content} />
        </ContentView>
      </View>
    );
}
