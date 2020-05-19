import React from 'react';

import {Modal, KeyboardAvoidingView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {WebView} from 'react-native-webview';

export default function InstagramAuth(props) {
  if (!props.visible) {
    return null;
  }

  const _onNavigationStateChange = event => {
    console.log(event);
  };

  const _onMessage = e => {
    console.log(e);
  };

  const {clientId, redirectUrl, scopes} = props;
  return (
    <Modal visible={props.visible}>
      <WebView
        source={{
          uri: `https://api.instagram.com/oauth/authorize/?client_id=${clientId}&redirect_uri=${redirectUrl}&response_type=token&scope=${scopes.join(
            ',',
          )}`,
        }}
        scalesPageToFit
        startInLoadingState
        onNavigationStateChange={_onNavigationStateChange}
        onError={_onNavigationStateChange}
        // onLoadEnd={this._onLoadEnd.bind(this)}
        onMessage={_onMessage}
      />
    </Modal>
  );
}
