import styled from 'styled-components';

export const ChevronDown = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  transform: ${props => (props.teste ? 'rotate(180deg)' : 'rotate(0deg)')};
`;
export const GroupChevron = styled.View`
  background-color: #f5f7fa;
`;

export const MenuText = styled.Text`
  font-size: 12px;
  margin-top: 15px;
`;

export const MenuImgGroup = styled.View`
  background-color: #f5f7fa;
  border-radius: 50px;
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: center;
`;

export const MenuItem = styled.View`
  background-color: white;
  border-radius: 8px;
  width: 30%;
  padding: 14px;
  align-items: center;
  justify-content: flex-start;
  margin: 4px;
  margin-bottom: 30px;
  margin-top: -20px;
`;

export const MenuGroup = styled.View`
  background-color: #f5f7fa;
`;
export const MenuRow = styled.View`
  padding-right: 20px;
  padding-left: 20px;
  height: ${props => (props.teste ? 'auto' : '105px')};
  flex: 1;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Header = styled.View`
  text-align: center;
  background-color: #ff500f;
  height: 140px;
  padding: 20px;
  color: white;
  flex: 1;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Paragraph = styled.Text`
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
`;

export const GroupValue = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 180px;
  height: 35px;
`;

export const UserAvatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;

export const Information = styled.View`
  background-color: #e7e7ef;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px 20px;
`;

export const InformationText = styled.View`
  margin-left: 20px;
  flex: 1;
`;

export const Card = styled.View`
  width: 200px;
  height: 200px;
  background-color: red;
  margin: 20px;
`;
