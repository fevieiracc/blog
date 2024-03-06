import styled from 'styled-components/native';

export const HeaderStyled = styled.View`
    display: flex;
    gap: 16px;
    height: 110px;
    padding: 32px;
    align-items: center;
    flex-direction: row;
    background: #F8F8F8;
    width: 100%
`;

export const TitleStyled = styled.Text`
    color: #161616;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 16px;
`;

export const SubtitleStyled = styled.Text`
    color: #464646;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
`;

export const TextRowStyled = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 12px;
    flex: 1 0 0;
`;