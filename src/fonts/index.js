import { HeadingStyled, SubHeadingStyled, ParagraphStyled } from './styles';

export function Heading({ content }) {
    return <HeadingStyled>{content}</HeadingStyled>;
}

export function SubHeading({ content }) {
    return <SubHeadingStyled>{content}</SubHeadingStyled>;
}

export function Paragraph({ content, color}) {
    return <ParagraphStyled>{content}</ParagraphStyled>;
}
