import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font'; // 

const Layout = () => {
 

  return (
    <View style={styles.container}>
     
      <Text style={styles.title}>Artistas</Text>

      <View style={styles.box}>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/6/68/The_Smiths_%281984_Sire_publicity_photo%29_002.jpg',
          }}
          style={styles.image}
        />
        <Text style={styles.artista}>The Smiths</Text>
        <Text style={styles.genero}>Rock</Text>
        <Text style={styles.pais}>Reino Unido</Text>
      </View>

    
      <View style={styles.box}>
        <Image
          source={{
            uri: 'https://i0.wp.com/blog.bileskydiscos.com.br/wp-content/uploads/2016/10/Os-Mutantes_10316.jpg?fit=500%2C333&ssl=1',
          }}
          style={styles.image}
        />
        <Text style={styles.artista}>Os Mutantes</Text>
        <Text style={styles.genero}>Rock Psicodélico</Text>
        <Text style={styles.pais}>Brasil</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#9404d6',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#e3cbf7',
    fontFamily: 'InterBlack', 
  },
  box: {
    width: 300,
    height: 350,
    padding: 15,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#170129',
    borderRadius: 15,
    backgroundColor: '#250136',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '50%',
    borderRadius: 10,
    marginBottom: 15,
  },
  artista: {
    color: '#e3cbf7',
    fontFamily: 'InterBlack',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'start',
  },
  genero: {
    color: '#e3cbf7',
    fontFamily: 'InterBlack',
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'center',
  },
  pais: {
    color: '#e3cbf7',
    fontFamily: 'InterBlack',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Layout;
