import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Picker
} from 'react-native'
import { Feather as Icon } from '@expo/vector-icons'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'


interface IBGEUfRes {
  sigla: string
  nome: string
}

const Home = () => {
  const navigation = useNavigation()

  const [uf, setUf] = useState('')
  const [city, setCity] = useState('')
  const [ufIBGE, setUfIBGE] = useState<IBGEUfRes[]>([])

  function handleNavigateToPoints() {
    navigation.navigate('Points', {
      uf,
      city
    })
  }

  function handleSelectUF(uf: Picker) {
    setUf(String(uf))
  }

  useEffect(() => {
    axios.get<IBGEUfRes[]>("https://servicodados.ibge.gov.br/api/v1/localidades/estados").then(res => {
      const ufInitials = res.data
      setUfIBGE(ufInitials)
    })
  }, [])

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ImageBackground
        source={require("../../assets/home-background.png")}
        style={styles.container}
        imageStyle={{
          width: 274,
          height: 368
        }}
      >
        <View style={styles.main}>
          <Image source={require("../../assets/logo.png")} />
          <View>
            <Text style={styles.title}>Seu marketplace de coleta de resíduos</Text>
            <Text style={styles.description}>Ajudamos pessoas a encontrarem posntos de coleta de forma eficiente.</Text>
          </View>
        </View>
        <View style={styles.footer}>
          <View style={styles.pickerWrapper}>
            <Icon
              name="chevron-down"
              style={styles.pickerIcon}
            />
            <Picker
              selectedValue={uf}
              style={[uf !== '' ? { color: "#000" } : { color: "#ccc" }, styles.pickerContent]}
              onValueChange={handleSelectUF}

            >

              <Picker.Item label='Selecione uma UF' value='0' />
              {ufIBGE.map(uf => (
                <Picker.Item key={uf.sigla} label={uf.nome} value={uf.sigla} />
              ))}
            </Picker>
          </View>


          <TextInput
            style={styles.input}
            placeholder='Digite a cidade'
            autoCapitalize="words"
            autoCorrect={false}
            value={city}
            onChangeText={setCity}
          />
          <RectButton style={styles.button} onPress={handleNavigateToPoints}>
            <View style={styles.buttonIcon}>
              <Text>
                <Icon name="arrow-right" color="#FFF" size={24} />
              </Text>
            </View>
            <Text style={styles.buttonText}>
              Entrar
            </Text>
          </RectButton>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32
  },

  main: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    color: '#322153',
    fontSize: 32,
    fontFamily: 'Ubuntu_700Bold',
    maxWidth: 260,
    marginTop: 64,
  },

  description: {
    color: '#6C6C80',
    fontSize: 16,
    marginTop: 16,
    fontFamily: 'Roboto_400Regular',
    maxWidth: 260,
    lineHeight: 24,
  },

  footer: {},

  pickerWrapper: {
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 8,
    paddingHorizontal: 24,
    justifyContent: 'center',
  },

  pickerIcon: {
    color: '#34CB79',
    position: "absolute",
    justifyContent: 'center',
    right: 20,
    fontSize: 30
  },

  pickerContent: {
    backgroundColor: "transparent",
  },

  input: {
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 8,
    paddingHorizontal: 24,
    fontSize: 16,
  },

  button: {
    backgroundColor: '#34CB79',
    height: 60,
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 8,
  },

  buttonIcon: {
    height: 60,
    width: 60,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#FFF',
    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
  }
});

export default Home
