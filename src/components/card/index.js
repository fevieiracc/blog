import { TouchableOpacity } from "react-native";
import { Heading, SubHeading } from "../../fonts";
import { TextRowStyled, CardStyled } from "./styles";
import { Image } from 'react-native';

export default function Card({ title, subtitle, imageurl, content, onPress }) {
    return (
        <TouchableOpacity onPress={() => onPress({ title, subtitle, imageurl, content })}>
            <CardStyled>
                <Image
                    source={{ uri: imageurl }}
                    style={{ height: 160, width: '100%' }} />
                <TextRowStyled>
                    <Heading content={title}/>
                    <SubHeading content={subtitle}/>
                </TextRowStyled>
            </CardStyled>
        </TouchableOpacity>
    );
}
