import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, TouchableOpacity, TouchableHighlight, Text, Image, View, Button, ScrollView, SafeAreaView } from 'react-native';
import mkbg from './assets/mkbg.jpg';

type Props = {};
export default function App() {
  // 생성될 난수들의 개수를 고를 수 있게 만들자 -> 버튼기능과 버튼을 눌렀을 때 state를 저장해주는 기능 필요 -> 성공
  // 생성할 난수 숫자 버튼과 난수와 '번호저장'이 다른 줄이여서 같은 줄에 표시하는<span>과 같은 기능을 찾아보자 -> <Text>태그로 같이 묶으면 줄바꿈 없이 출력된다.
  //! 종료시 종료할지 물어보는 기능
  //! 저장버튼을 누르면 저장페이지에 난수가 저장되게 만들자 -> 저장탭 추가, 번호가 저장될 파일에 난수를 입력하고 조회하는 기능 필요
  //! (Advanced)앱 실행시 혹은 [조회]버튼을 눌렀을 때 홈페이지에 있는 당첨번호와 저장한 난수를 비교해 당첨된 난수가 있는지 체크해주는 기능 -> 인터넷 크롤링?
  const random = () => {
    let max: number =  Math.floor(45);
    let min: number =  Math.ceil(1);
    let output:string = String(Math.floor(Math.random() * (max - min + 1)) + min);
    return output.length !== 1 ? output : '0' + output;
  }
  
  //state부분
  const [selectedNum, setSelectedNum] = useState<number>(1);
  const changeNum: Function = (el: number) => setSelectedNum(el);
  const onPressPlus = () => setSelectedNum(selectedNum + 1);
  const onPressMinus = () => setSelectedNum(selectedNum - 1);

  const [saved, setSaved] = useState<string>('');
  const selectedSaved: Function = (el: string) => setSaved(el);

  //번호 생성 부분
  //!반복이 되지 않는다! - 렌더부분에다 적용하니 작동한다! 아마도 변수로 선언되어 다시 렌더링 될 때 갱신되지 않아서 반복되지 않는 것? 같다.
  // const randomGen:Function = () => {
  //   [...Array(selectedNum)].map((n, index) =>  {
  //     const generated:Function = () => random() + "/" + random() + "/" + random() + "/" + random() + "/" + random() + " + " + random();
  //     let genCopied:string = generated();
  //     return (
  //     <View key={index}>
  //       <Text style={{color: '#888', fontSize: 30}}>{genCopied}</Text>
  //       <TouchableOpacity
  //         onPress={() => {
  //           alert('저장되었습니다')
  //       }}
  //         style={{ backgroundColor: 'transparent' }}>
  //         <Text style={{color: '#888', fontSize: 25}}>저장</Text>
  //       </TouchableOpacity>
  //     </View>
  //   )
  //   })
  // }


  return (
    <SafeAreaView style={styles.container}>{/*ios에서 표시되는 화면에 띄우는 태그. 안드로이드에서는 의미 없다는 듯*/}
      <ScrollView style={styles.scrollView}>
        <Text style={{color: '#888', fontSize: 40}}>초간단 로또번호 생성기!</Text>
        
        <Text>
          <TouchableOpacity
            onPress={() => {
              changeNum(1);
          }}
            style={{ backgroundColor: 'transparent' }}>
            <Text style={{color: '#888', fontSize: 25}}>1개</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              changeNum(3);
          }}
            style={{ backgroundColor: 'transparent' }}>
            <Text style={{color: '#888', fontSize: 25}}>3개</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              changeNum(5);
          }}
            style={{ backgroundColor: 'transparent' }}>
            <Text style={{color: '#888', fontSize: 25}}>5개</Text>
          </TouchableOpacity>
        </Text>  
        <Text>
          <TouchableHighlight onPress={onPressPlus}>
            <View style={styles.button}>
              <Text style={{color: '#888', fontSize: 25}}>증가</Text>
            </View>
          </TouchableHighlight>
          
          <TouchableHighlight onPress={onPressMinus}>
            <View style={styles.button}>
              <Text style={{color: '#888', fontSize: 25}}>감소</Text>
            </View>
          </TouchableHighlight>
        </Text>
        <Image source={mkbg} style={{ width: 400, height: 400 }} /> 
        {/* <Text style={{color: '#888', fontSize: 30}}>{saved}</Text>

        <TouchableOpacity
          onPress={() => {
            alert('저장되었습니다')
        }}
          style={{ backgroundColor: 'transparent' }}>
          <Text style={{color: '#888', fontSize: 25}}>번호 저장</Text>
        </TouchableOpacity> */}
        
        {/* {randomGen()} */}

        {[...Array(selectedNum)].map((n, index) =>  {
        const generated:Function = () => random() + "/" + random() + "/" + random() + "/" + random() + "/" + random() + " + " + random();
        let genCopied:string = generated();
        return (
        <View key={index}>
          <Text style={{color: '#888', fontSize: 20}}>{genCopied}</Text>
          <TouchableOpacity
            onPress={() => {
              alert('저장되었습니다')
          }}
            style={{ backgroundColor: 'transparent' }}>
            <Text style={{color: '#888', fontSize: 25}}>번호저장</Text>
          </TouchableOpacity>
        </View>
      )
      })}

        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
