import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import BottomButton from '../../../components/BottomButton';
import {LongButton} from '../../../components/Botton';
import RowView from '../../../components/RowView';
import {NormalBoldLabel} from '../../../components/Label';
import WhiteSafeAreaView from '../../../components/WhiteSafeAreaView';

const {height, width} = Dimensions.get('window');

const vh = height / 100;
const vw = width / 100;

const Circle = ({isOrange}) => {
  return (
    <View
      style={{
        backgroundColor: isOrange ? '#FD7F36' : '#c4c4c4',
        width: isOrange ? 10 : 7,
        height: isOrange ? 10 : 7,
        borderRadius: isOrange ? 5 : 3.5,
        marginHorizontal: 10,
      }}
    />
  );
};

export default function Pinchg({navigation}) {
  const [pwd, onChangePwd] = useState('');
  const [test, setTest] = useState('0000000');
  const [firstSuccess, setFirstSuccess] = useState(false);

  const onPasswordCheck = e => {
    if (pwd === test) {
      if (firstSuccess) {
        navigation.goBack();
        Alert.alert('변경이 완료되었습니다.');
      } else {
        setFirstSuccess(true);
        onChangePwd('');
      }
      // props.navigation.navigate('Pinchg');
      console.log(test);
      console.log(pwd);
    } else {
      console.log(test);
      console.log(pwd);
    }
  };

  const press_enter = e => {
    console.log(e.key);
  };

  return (
    <WhiteSafeAreaView>
      <View style={{flex: 1, alignItems: 'center', paddingTop: 90}}>
        {/*<View style={{marginTop: height * 0.1}}>*/}
        <NormalBoldLabel
          text={
            firstSuccess ? '다시 한 번 입력 하세요' : 'PIN 번호를 입력 하세요'
          }
        />
        <RowView style={styles.pinchg_pwd}>
          {[1, 2, 3, 4, 5, 6, 7].map((num, i) => (
            <Circle key={i} isOrange={pwd.length >= num} />
          ))}
        </RowView>
        <TextInput
          style={{width: width * 0.6, color: 'transparent', marginTop: -32}}
          value={pwd}
          onChangeText={onChangePwd}
          maxLength={7}
          secureTextEntry={true}
          keyboardType={'number-pad'}
          caretHidden={true}
          onSubmitEditing={onPasswordCheck}
          // onKeyPress={press_enter}
          // onKeyPress 비밀번호 확인 작업
        />

        {/* <LongButton
        text={'확인'}
        tcStyle={{position: 'absolute', top: 600, paddingTop: 13}}
      /> */}
        {/* <TouchableOpacity onPress={confirm_pwd}>
          <Image
            source={require('../../../assets/images/confirm_button.png')}
            style={{
              width: width * 0.7,
              height: height * 0.1,
              resizeMode: 'contain',
            }}
          />
        </TouchableOpacity> */}
      </View>
      <BottomButton onPress={onPasswordCheck} text={'확인'} />
    </WhiteSafeAreaView>
  );
}

const styles = StyleSheet.create({
  pinchg_container: {
    // width: width,
    // height: height,
    // backgroundColor: 'white',
  },
  pinchg_pwd: {
    marginTop: 32,
    // marginTop: height * 0.04,
    width: width * 0.5,
    justifyContent: 'center',
    // justifyContent: 'space-between',
    color: 'white',
  },
});
