import { StyleSheet, Image, Pressable, ViewStyle, StyleProp } from 'react-native';
import React from 'react';

interface PropsTopicButton {
  imageURI: { uri: string }; 
  style?: StyleProp<ViewStyle>
}

const [select, setSelect] = useState(true)

const onPress = () => {
  if (select) {
    setSelect(false)
  }
  else {
    setSelect(false)
  }
}


const TopicButtons: React.FC<PropsTopicButton> = (props) => {
  return (
    <Pressable>
      <Image source={props.imageURI}/> 
    </Pressable>
  );
};


export default TopicButtons;
