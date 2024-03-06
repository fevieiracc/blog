import React from 'react';
import { NewspaperIcon, ArrowLeftCircleIcon } from 'react-native-heroicons/outline';
import { HeaderStyled , TextRowStyled } from './styles';
import { TouchableOpacity } from 'react-native';
import { Heading, SubHeading } from '../../fonts'; 


export default function Header({ type, title, subtitle, navigation }) {
    let icon;
    let showSubtitle = true;

    if (type === 'Home') {
        icon = <NewspaperIcon size={40} />;
        showSubtitle = false;
    } else if (type === 'Blog') {
        icon = (
            <TouchableOpacity onPress={ () => navigation.navigate('Home')}>
                <ArrowLeftCircleIcon size={40} />
            </TouchableOpacity>
        );
    }

    return (
        <HeaderStyled>
            {icon}
            <TextRowStyled>
                <Heading content={title} />
                {showSubtitle && <SubHeading content={subtitle} />}
            </TextRowStyled>
        </HeaderStyled>
    );
}
