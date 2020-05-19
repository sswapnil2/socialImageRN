import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
// import Axios from 'axios';
import InstagramAuth from '../../components/InstagramAuth';

const INSTA_APP_ID = '2468468880076872';
const REDIRECT_URI = 'http://localhost:8000/social-auth/instagram/complete';
const SCOPE = ['user_profile', 'user_media'];

const HomePage = () => {
  const [visible, setVisible] = useState(false);

  const onClickInstaButton = () => {
    // Axios.get(
    //   `https://api.instagram.com/oauth/authorize?client_id=${INSTA_APP_ID} \
    //             &redirect_uri=${REDIRECT_URI} \
    // &scope=${SCOPE} \
    // &response_type=code \
    // `,
    // )
    //   .then(res => alert(JSON.stringify(res.data)))
    //   .catch(error => console.log(error));
    setVisible(true);
  };
  const onClickFacebookButton = () => {};

  return (
    <View>
      <InstagramAuth
        visible={visible}
        clientId={INSTA_APP_ID}
        redirectUrl={REDIRECT_URI}
        scopes={SCOPE}
      />
      <Text style={styles.text}>This is my Home Page</Text>
      <Button
        style={styles.button}
        title="instagram"
        onPress={onClickInstaButton}
      />
      <View />
      <Button
        style={styles.button}
        title="facebook"
        onPress={onClickFacebookButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    height: '50%',
    textAlign: 'center',
  },
  button: {
    height: 20,
    width: 40,
    padding: 5,
    marginBottom: 10,
  },
});

export default HomePage;
