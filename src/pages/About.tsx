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
      name: 'Styled Components',
      url: 'https://styled-components.com/',
    },
    motion: {
      name: 'Framer Motion',
      url: 'https://www.framer.com/motion/',
    },
    mui: {
      name: 'Material UI',
      url: 'https://mui.com',
    },
    bootstrap: {
      name: 'React Bootstrap',
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
    github: {
      name: 'Github',
      url: 'https://github.com/',
    },
    html: {
      name: 'HTML',
      url: 'https://ru.wikipedia.org/wiki/HTML',
    },
    css: {
      name: 'CSS',
      url: 'https://en.wikipedia.org/wiki/CSS',
    },
    sass: {
      name: 'SASS',
      url: 'https://sass-lang.com/',
    },
    crawraps: {
      name: 'гите',
      url: 'https://github.com/crawraps',
    },
  }

  const mainText = `Меня зовут Сайфуллоев Карим и я хочу стать полноценным frontend разработчиком. Я изучаю /js/ и пишу на нем около двух лет, а с недавнего времени (около полугода назад) перешел на /ts/ и, честно сказать, он мне нравится гораздо больше. Далее расскажу о своих навыках и опыте, а в конце немного подробнее о себе.`
  const skillsTextP1 = `В разработке я применяю разные технологии, но в основном пишу на /react/. В месте с ним я часто использую /router/, /redux/, /styled/, /motion/. Мне нравится писать стили и создавать айдентику самому, поэтому обычно я не использую UI библиотеки, но применял некоторые из них. Например, я включал в свои проекты /mui/ и /bootstrap/. Так же я немного работал на /vue/, но все же на /react/'е мне писать комфортнее. С его помощью я, кстати, имел честь поработать на /next/ и /gatsby/. Также я пользовался /css/ препроцессором /sass/, но сейчас работаю с помощью /styled/, и несмотря на это, полученные знания помогают мне как раз при использовании /styled/.`
  const skillsTextP2 = `Если говорить не о frontend'e, то я немного работал на /python/. В основном на нем я писал простенькие программы. Например, я нашел одну интересную нейросеть, с помощью которой можно обрабатывать изображения, и прикрутил ее к телеграм боту, чтобы у меня была возможность обрабатывать свои фотографии "на лету".`
  const experienceText = `Я имею некоторый опыт в разработке web приложений, но, к сожалению, он пока только некоммерческий. На моем /crawraps/ вы можете посмотреть мои pet-проекты. Очевидно, там лежит не все, что я когда-либо писал, некоторые мои проекты находятся на забытых винчестерах. Сейчас я понимаю, что готов и хочу работать над полноценными коммерческими проектами, работать в комманде профессионалов.`
  const aboutTextP1 = `Погружаться в мир компьютерных технологий я начал года 4 назад. По прошествии примерно двух лет, узнав больше об IT, я решил, что хочу развиваться во frontend'е. Мне понравилась идея о том, что я могу создать собсвенными руками что-то функциональное и красивое. Конечно, тогда я еще не знал всех тонкостей, но уже писал свои сайты, используя только /js/, /html/ и /css/. В процессе я находил новые технологии, и мой интерес к этой сфере рос все с большей силой. Я узнал о /css/ препроцессорах, /js/ фреймворках, системах сборки и о /github/'е. Следующие два года я полноценно погружался во frontend и к нынешнему моменту я понял, что уже уверенно чувствую себя в программировании и хочу превратить мое хобби в работу, что позволит мне развиваться и познавать разные тонкости быстрее`
  const aboutTextP2 = `Основной операционной системой для меня давно стал /linux/. Мне было интересно изучить подробнее работу операционных систем, поэтому я решил установить его и поиграться с ним. После того как я разобрался, я смог сконфигурировать его под свои нужды. Я понял, что на /windows/ я уже не вернусь, потому что консоль стала моим лучшим другом. Меня зацепила возможность гибкой настройки и мысль о том, сколько нового я смогу узнать, используя его в качестве основной операционной системы.`
  const aboutTextP3 = `Мой интерес к программированию побудил меня поступить в один из лучших, как я думал на то время, технических вузов страны МГТУ им. Баумана. И сейчас я нахожусь в активном поиске работы.`
  const aboutTextP4 = `Так что если вы дочитали до этого момента, то я осмелюсь предположить, что моя кандидатура вас заинтересовала, и так как вы потратили несколько минут на прочтение всей этой информации, я надеюсь, вы пригласите меня на собеседование или пришлете тестовое задание. Спасибо ♥`

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

          <Subtitle>Опыт работы</Subtitle>
          <Paragraph>{formatText(experienceText, links)}</Paragraph>

          <Subtitle>Подробнее о себе</Subtitle>
          <Paragraph>{formatText(aboutTextP1, links)}</Paragraph>
          <Paragraph>{formatText(aboutTextP2, links)}</Paragraph>
          <Paragraph>{formatText(aboutTextP3, links)}</Paragraph>
          <Paragraph>{formatText(aboutTextP4, links)}</Paragraph>
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
