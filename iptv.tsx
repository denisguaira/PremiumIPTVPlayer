// app/iptv.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function IPTVScreen() {
  const [url, setUrl] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>IPTV Setup</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter M3U or Xtream URL"
        value={url}
        onChangeText={setUrl}
      />
      <Button title="Connect" onPress={() => alert('Connecting to: ' + url)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, padding:20, justifyContent:'center' },
  title: { fontSize:22, marginBottom:12, textAlign:'center' },
  input: { borderWidth:1, borderColor:'#ccc', padding:12, borderRadius:8, marginBottom:12 },
});
