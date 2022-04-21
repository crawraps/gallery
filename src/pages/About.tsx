import React from 'react'
import styled from 'styled-components'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

type link = {
  name: string
  url: string
}
interface links {
  [key: string]: link
}

export default function About(): JSX.Element {
  const links: links = {
    js: {
      name: 'JavaScript',
      url: 'https://en.wikipedia.org/wiki/JavaScript',
    },
    ts: {
      name: 'TypeScript',
      url: 'https://www.typescriptlang.org/',
    },
    react: {
      name: 'React',
      url: 'https://reactjs.org/',
    },
    router: {
      name: 'React Router Dom',
      url: 'https://reactrouter.com/',
    },
    redux: {
      name: 'Redux',
      url: 'https://react-redux.js.org/',
    },
    styled: {
      name: 'Styled components',
      url: 'https://styled-components.com/',
    },
    motion: {
      name: 'Framer motion',
      url: 'https://www.framer.com/motion/',
    },
    mui: {
      name: 'Material UI',
      url: 'https://mui.com',
    },
    bootstrap: {
      name: 'React bootstrap',
      url: 'https://react-bootstrap.github.io/',
    },
    vue: {
      name: 'VueJS',
      url: 'https://vuejs.org/',
    },
    next: {
      name: 'NextJS',
      url: 'https://nextjs.org/',
    },
    gatsby: {
      name: 'GatsbyJS',
      url: 'https://www.gatsbyjs.com/',
    },
    linux: {
      name: 'Linux',
      url: 'https://en.wikipedia.org/wiki/Linux',
    },
    python: {
      name: 'Python',
      url: 'https://www.python.org/',
    },
    windows: {
      name: 'Windows',
      url: 'https://www.microsoft.com/en-us/windows',
    },
  }

  const mainText = `Меня зовут Сайфуллоев Карим и я хочу стать полноценным frontend разработчиком. Я изучаю /js/ и пишу на нем около двух лет, а с недавнего времени (около полугода назад) перешел на /ts/ и, честно сказать, он мне нравится гораздо больше. Далее расскажу о своих навыках и опыте, а в конце немного подробнее о себе.`
  const skillsTextP1 = `В разработке я применяю разные технологии, но в основном пишу на /react/. В месте с ним я часто использую такие библиотеки как /router/, /redux/ (как глобальное хранилище данных), /styled/ (чтобы писать стили прямо в компонентах), /motion/ (чтобы делать классные анимации и переходы). Мне нравится писать стили и создавать айдентику самому, поэтому обычно я не использую UI библиотеки, но применял некоторые из них. Например я включал в свои проекты /mui/ и /bootstrap/. Так же я немного работал на /vue/, но я заметил, что на /react/'е мне писать комфортнее. С его помощью я, кстати, имел честь поработать на /next/ и /gatsby/.`
  const skillsTextP2 = `Если говорить не о frontend'e, то я немного работал на /python/. В основном на нем я писал простенькие программы. Например, я нашел одну интересную нейросеть, с помощью которой можно обрабатывать изображения, и прикрутил ее к телеграм боту, чтобы у меня была возможность обрабатывать свои фотографии "на лету".`
  const skillsTextP3 = `Основной операционной системой для меня давно стал /linux/. Мне было интересно изучить подробнее работу операционных систем, поэтому я решил установить его и поиграться с ним. После того как я разобрался с ним, смог сконфигурировать его под свои нужды, я понял, что на /windows/ я не вернусь. Меня зацепила его гибкая настройка и мысль о том, сколько нового я смогу узнать, начав использовать его в качестве моей основной операционной системы.`

  return (
    <StyledContainer>
      <Row>
        <Col xs={1} />
        <Col xs={10}>
          <Title>Обо мне</Title>

          <Subtitle>Главное</Subtitle>
          <Paragraph>{formatText(mainText, links)}</Paragraph>

          <Subtitle>Навыки</Subtitle>
          <Paragraph>{formatText(skillsTextP1, links)}</Paragraph>
          <Paragraph>{formatText(skillsTextP2, links)}</Paragraph>
          <Paragraph>{formatText(skillsTextP3, links)}</Paragraph>
        </Col>
        <Col xs={1} />
      </Row>
    </StyledContainer>
  )
}

const StyledContainer = styled(Container)`
  margin-top: 80px;
  font-family: 'Roboto', sans-serif;
`
const Title = styled.h1`
  font-weight: 600;
`
const Subtitle = styled.h2`
  margin: 1em 0 0.4em 0;
  padding-left: 10px;
  font-weight: 400;
`
const Paragraph = styled.p`
  padding-left: 20px;
  font-weight: 400;
`
const BoldLink = styled.a`
   {
    font-weight: 600;
    text-decoration: none;
    color: black;

    &:hover {
      color: #85929e;
    }
  }
`
const Bold = styled.span`
  font-weight: 600;
  color: black;
`

function formatText(plainText: string, links: links): Array<string | JSX.Element> {
  let arr = plainText.split('/')
  let res = []
  for (let elem of arr) {
    if (links[elem]) {
      res.push(
        <BoldLink href={links[elem].url} target='_blank'>
          {links[elem].name}
        </BoldLink>
      )
    } else {
      res.push(elem)
    }
  }

  return res
}

// Ideas:
// en/ru
// flying keywords
// click on keyword navigate to projects having this keyword
// different colors for different "keyword family"
