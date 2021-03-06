import React, {Component} from 'react';

//PropTypes를 이용해 ProfileCard 컴포넌트가 사용하는 속성을 지정함
import PropTypes from 'prop-types';

//immutability helper의 update함수 - 특정 컴포넌트의 state를 갱신(update)함.
import update from 'immutability-helper';

//TouchableHighlight 컴포넌트로 터치 기능을 처리함
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

const userImage = require('./user.png');

//컴포넌트를 만들기 위한 데이터
const data = [
  {
    image: userImage,
    name: 'John Doe',
    occupation: 'React Native Developer',
    description:
      'John is a really great Javascript developer. He loves using JS to build React Native applications for iOS and Android',
    showThumbnail: true,
  },
];

//ProfileCard 컴포넌트를 App 코드에서 분리함
const ProfileCard = (props) => {
  const {image, name, occupation, description, onPress, showThumbnail} = props;
  let containerStyles = [styles.cardContainer];

  //showThumbnail 값이 true면, ProfileCard 컴포넌트를 80%만큼(20% 크기로) 축소함
  if (showThumbnail) {
    containerStyles.push(styles.cardThumbnail);
  }

  return (
    <TouchableHighlight onPress={onPress}>
      <View style={[containerStyles]}>
        <View style={styles.cardImageContainer}>
          <Image style={styles.cardImage} source={image} />
        </View>
        <View>
          <Text style={styles.cardTitle}>{name}</Text>
        </View>
        <View style={styles.cardSubtitleContainer}>
          <Text style={styles.cardSubtitle}>{occupation}</Text>
        </View>
        <View>
          <Text style={styles.cardDescription}>{description}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

ProfileCard.propTypes = {
  image: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  showThumbnail: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default class App extends Component<{}> {
  constructor(props, context) {
    super(props, context);
    //Profile 컴포넌트의 상태는 상위 컴포넌트인 App에서 관리
    this.state = {
      data: data,
    };
  }

  //onPress이벤트를 처리하는 함수
  handleProfileCardPress = (index) => {
    const showThumbnail = !this.state.data[index].showThumbnail;

    this.setState({
      data: update(this.state.data, {
        [index]: {showThumbnail: {$set: showThumbnail}},
      }),
    });
  };

  render() {
    //Profile컴포넌트의 리스트(배열) 처리
    const list = this.state.data.map(function (item, index) {
      const {image, name, occupation, description, showThumbnail} = item;
      return (
        <ProfileCard
          key={'card-' + index}
          image={image}
          name={name}
          occupation={occupation}
          description={description}
          onPress={this.handleProfileCardPress.bind(this, index)}
          showThumbnail={showThumbnail}
        />
      );
    }, this);

    return (
      <View style={styles.container}>
        {/*모든 Profiles를 출력 */}
        {list}
      </View>
    );
  }
}

const profileCardColor = 'dodgerblue';

const styles = StyleSheet.create({
  cardThumbnail: {
    transform: [{scale: 0.2}],
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 3,
    borderStyle: 'solid',
    borderRadius: 20,
    backgroundColor: profileCardColor,
    width: 300,
    height: 400,
    ...Platform.select({
      //플랫폼에 따라 카드 컨테이너에 음영 넣기
      ios: {
        shadowColor: 'black',
        shadowOffset: {
          height: 10,
        },
        shadowOpacity: 1,
      },
      android: {
        elevation: 15,
      },
    }),
  },
  cardImageContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'black',
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 30,
    paddingTop: 15,
    ...Platform.select({
      //원형 이미지에 음영 넣기
      ios: {
        shadowColor: 'black',
        shadowOffset: {
          height: 10,
        },
        shadowOpacity: 1,
      },
      android: {
        borderWidth: 3,
        borderColor: 'black',
        elevation: 15,
      },
    }),
  },
  cardImage: {
    width: 80,
    height: 80,
  },
  cardTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 50,
    textShadowColor: 'black', // 음영 색상 지정
    textShadowOffset: {
      //음영의 offset 지정 오른쪽 하단으로 음영
      height: 2,
      width: 2,
    },
    textShadowRadius: 3, //음영의 반경
  },
  cardSubtitleContainer: {
    borderColor: 'black',
    borderWidth: 3,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
  },
  cardSubtitle: {
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  cardDescription: {
    fontStyle: 'italic',
    marginTop: 10,
    marginRight: 40,
    marginLeft: 40,
    marginBottom: 10,
  },
});
