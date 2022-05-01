import React from 'react';

import { Container, Retweeted,Dot, Body, Avatar, Content, Header, Description,ImageContent,Status,CommentIcon,RetweetIcon, LikeIcon, Icons } from './styles';

const Tweet: React.FC = () => {
  return (
      <Container>
          <Retweeted>
              Você retweetou
          </Retweeted>
          <Body>
              <Avatar/>
              <Content>
                  <Header>
                      <strong>Elon Musk</strong>
                      <span>@elonmusk</span>
                      <Dot/>
                      <time>01 de maio</time>
                  </Header>
                <Description>Elon Buys Twitter</Description>
                <ImageContent/>
                <Icons>
                    <Status>
                        <CommentIcon/>
                        29
                    </Status>
                    <Status>
                        <RetweetIcon/>
                        96
                    </Status>
                    <Status>
                        <LikeIcon/>
                        792
                    </Status>
                </Icons>
              </Content>
          </Body>
      </Container>
  );
}

export default Tweet;