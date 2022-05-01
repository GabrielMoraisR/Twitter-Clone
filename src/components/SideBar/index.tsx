import React from 'react';

import { Container, SearchWrapper, SearchInput, SearchIcon, Body } from './styles';

import List from '../List';
import Follow from '../Follow';
import News from '../News';

const SideBar: React.FC = () => {
  return (
    <Container>
        <SearchWrapper>
            <SearchInput placeholder="Buscar no Twitter"/>
            <SearchIcon/>
        </SearchWrapper>
        <Body>
            <List
              title="Talvez você curta"
              elements ={[
                <Follow name ="Jeff Bezos"
                nickname="@JeffBezos"
                />,
                <Follow name ="Elon Musk"
                nickname="@elonmusk"
                />,
                <Follow name ="SpaceX"
                nickname="@SpaceX"
                />
              ]}
            />
            <List
              title="O que está acontecendo"
              elements ={[
                <News/>,
                <News/>,
                <News/>
              ]}
            />
        </Body>
    </Container>
  );
}

export default SideBar;