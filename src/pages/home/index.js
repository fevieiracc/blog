import React from "react";
import { View } from "react-native";
import Header from '../../components/header/index';
import Card from "../../components/card";
import { ScrollArea } from "./styles";

export default function Home({ navigation }) {
  return (
    <View>
      <Header type="Home" title="Orationes in Latin" />
      <ScrollArea>
        <Card
          onPress={(data) => navigation.navigate('Blog', data)}
          title={"Ave Maria"}
          subtitle={"Aprenda a rezar Ave Maria em latim."}
          imageurl={"https://santuariosantapaulina.org.br/wp-content/uploads/2017/01/1solenidademaria700.jpg"}
          content={"Ave Maria, gratia plena, Dominus tecum: benedicta tu in mulieribus et benedictus fructus ventris tui Iesu. peccatoribus, nunc et in hora mortis nostrae. Amen."}
        />
        <Card
          onPress={(data) => navigation.navigate('Blog', data)}
          title={"Pai Nosso"}
          subtitle={"Aprenda a rezar Pai Nosso em latim."}
          imageurl={"https://i.pinimg.com/originals/ae/ca/d4/aecad462835eaf8cb2c29bdeec9ac853.jpg"}
          content={"Pater noster, qui es in caelis: sanctificetur nomen tuum; adveniat regnum tuum; fiat voluntas tua, sicut in caelo et in terra. Panem nostrum quotidianum da nobis hodie, et dimitte nobis debita nostra, sicut et nos dimittimus debitoribus nostris; et ne nos inducas in tentationem; sed libera nos a malo. Amen."}
        />
        <Card
          onPress={(data) => navigation.navigate('Blog', data)}
          title={"Oração de São Bento"}
          subtitle={"Aprenda a rezar a oração de São Bento em latim."}
          imageurl={"https://i.pinimg.com/474x/26/7f/ce/267fce53b72c3a8bac11b55fffec0946.jpg"}
          content={"Crux Sacra Sit Mihi Lux! Non Draco Sit Mihi Dux! Vade Retro Satana! Non Suade Mihi Vana!"}
        />
      </ScrollArea>
    </View>
  );
}
