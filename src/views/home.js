import React, {useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

import {
  ChevronDown,
  MenuText,
  MenuImgGroup,
  MenuItem,
  MenuGroup,
  MenuRow,
  Header,
  Paragraph,
  Information,
  GroupValue,
  UserAvatar,
  InformationText,
  GroupChevron,
  Card,
} from './style';

export function Home() {
  const countValue = '300.00';
  const [showCountValue, setShowCountValue] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const menuItems = [
    'Transferências',
    'Pagamentos',
    'Investimentos',
    'Transferências',
    'Pagamentos',
    'Investimentos',
    'Transferências',
    'Pagamentos',
    'Investimentos',
  ];

  return (
    <>
      <ScrollView>
        <Header>
          <View>
            <Paragraph fontSize="18px" color="white">
              Saldo em conta
            </Paragraph>
            <GroupValue>
              {showCountValue ? (
                <Paragraph fontSize="18px" color="white">
                  R$ {countValue}{' '}
                </Paragraph>
              ) : (
                <Paragraph fontSize="18px" color="white" />
              )}
              <TouchableOpacity
                onPress={() => {
                  setShowCountValue(!showCountValue);
                }}>
                <Image source={require('../assets/images/eye.png')} />
              </TouchableOpacity>
            </GroupValue>
            <Paragraph fontSize="14px" color="white">
              Atualizado neste momento
            </Paragraph>
          </View>
          <View>
            <UserAvatar source={require('../assets/images/pic.jpg')} />
          </View>
        </Header>
        <MenuGroup>
          <MenuRow teste={showMenu}>
            {menuItems.map((element, index) => (
              <MenuItem key={index}>
                <MenuImgGroup>
                  <Image source={require('../assets/images/eye.png')} />
                </MenuImgGroup>
                <MenuText>{element}</MenuText>
              </MenuItem>
            ))}
          </MenuRow>
          <GroupChevron>
            <ChevronDown
              teste={showMenu}
              onPress={() => {
                setShowMenu(!showMenu);
              }}>
              <Image source={require('../assets/images/chevron-down.png')} />
            </ChevronDown>
          </GroupChevron>
        </MenuGroup>
        <Information>
          <Image source={require('../assets/images/eye.png')} />
          <InformationText>
            <Paragraph fontSize="18px" color="#db772c">
              Plano Odonto pra sorrir! ;)
            </Paragraph>
            <Paragraph fontSize="16px" color="#6b6e7f">
              Ampla cobertura pra você e toda família.
            </Paragraph>
            <Paragraph fontSize="16px" color="#6b6e7f">
              Carência a partir de 24h.
            </Paragraph>
          </InformationText>
        </Information>
      </ScrollView>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <Card />
        <Card />
        <Card />
        <Card />
      </ScrollView>
    </>
  );
}
