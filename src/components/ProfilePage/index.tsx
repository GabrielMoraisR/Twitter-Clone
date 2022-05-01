import React from 'react';
 
import Feed from '../Feed';


import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Gabriel de Morais</h1>
        <h2>@gabrielmorais</h2>

        <p>
          Developer FullStack
        </p>

        <ul>
          <li>
            <LocationIcon />
            São Bernardo do Campo, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 23 de setembro de 1999.
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>3005</strong>
          </span>
          <span>
            <strong>7506 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>
      <Feed />
    </Container>
  );
};

export default ProfilePage;