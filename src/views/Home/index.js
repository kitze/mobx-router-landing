import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';

//styled-components
import {Home, Main, Title, Subtitle, Links, Link, Content, GithubIcon} from './styles';
import NetworkAnimation from 'components/NetworkAnimation';

//components
import Ink from 'react-ink';

@inject('store')
@observer
class HomeView extends Component {

  render() {

    return (
      <Home>
        <Main>
          <NetworkAnimation/>
          <Content>
            <Title>
              mobx-router
            </Title>

            <Subtitle>
              a simpler way to do routing in React + MobX
            </Subtitle>

            <Links>

              <Link size="small" href="http://mobx-router-example.netlify.com/" target="_blank">
                <Ink duration={3000}/>
                Demo
              </Link>

              <Link href="https://github.com/kitze/mobx-router" target="_blank">
                <GithubIcon name="github"/>
                <span> Get Started </span>
              </Link>

              <Link size="small" href="https://github.com/kitze/mobx-router-example" target="_blank">
                <Ink duration={3000}/>
                Example
              </Link>

            </Links>

          </Content>
        </Main>
      </Home>
    )
  }
}

export default HomeView;
