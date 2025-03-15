import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const Layout = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
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

      <Text style={styles.title}>Gênero Musical</Text>

      <View style={styles.box1}>
        <Image
          source={{
            uri: 'https://monkeybuzz.com.br/wp-content/uploads/2014/10/pink_floyd.jpg',
          }}
          style={styles.image1}
        />
        <Text style={styles.artista}>Rock Progressivo</Text>
        <Text style={styles.genero}>
          É um amplo gênero de rock que se desenvolveu no Reino Unido e nos Estados Unidos em meados da década de 1960. Tem a influência de diversos gêneros musicais, como Hard Rock, Blues, Rock Psicodélico, Blues-Rock e Free Jazz, uma de suas características mais marcantes é a duração das músicas, que podem passar dos 20 minutos.
        </Text>
      </View>

      <Text style={styles.title}>Bandas</Text>

      <View style={styles.boxLista}>
        <Image
          source={{
            uri: 'https://static.wixstatic.com/media/1f8274_f161fa2c614048d592d91669c10ee337~mv2.jpg/v1/fill/w_980,h_980,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/1f8274_f161fa2c614048d592d91669c10ee337~mv2.jpg',
          }}
          style={styles.imageLista}
        />
        <View style={styles.textContainer}>
          <Text style={styles.artista}>Pink Floyd</Text>
          <Text style={styles.genero}>Reino Unido - 1965</Text>
        </View>
      </View>

      <View style={styles.boxLista}>
        <Image
          source={{
            uri: 'https://images.alphacoders.com/437/437958.jpg',
          }}
          style={styles.imageLista}
        />
        <View style={styles.textContainer}>
          <Text style={styles.artista}>Rush</Text>
          <Text style={styles.genero}>Canadá - 1968</Text>
        </View>
      </View>

      <View style={styles.boxLista}>
        <Image
          source={{
            uri: 'https://sfae.blob.core.windows.net/media/ecommercesite/media/sfae/sfae.artwork/107_1.jpg',
          }}
          style={styles.imageLista}
        />
        <View style={styles.textContainer}>
          <Text style={styles.artista}>Yes</Text>
          <Text style={styles.genero}>Reino Unido - 1968</Text>
        </View>
      </View>

      <View style={styles.boxLista}>
        <Image
          source={{
            uri: 'https://cdn.shopify.com/s/files/1/0069/3465/9162/files/King-Crimson-hero-banner-241027-1535.webp',
          }}
          style={styles.imageLista}
        />
        <View style={styles.textContainer}>
          <Text style={styles.artista}>King Crimson</Text>
          <Text style={styles.genero}>Reino Unido - 1968</Text>
        </View>
      </View>

      <View style={styles.boxLista}>
        <Image
          source={{
            uri: 'https://i.pinimg.com/736x/17/67/aa/1767aa2fdfab5d87139bcf62b742f48e.jpg',
          }}
          style={styles.imageLista}
        />
        <View style={styles.textContainer}>
          <Text style={styles.artista}>Genesis</Text>
          <Text style={styles.genero}>Reino Unido - 1967</Text>
        </View>
      </View>

      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
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

  box1: {
    width: 400,
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

  image1: {
    width: '100%',
    height: '50%',
    borderRadius: 10,
    marginBottom: 15,
  },

  boxLista: {
    width: 400,
    height: 100,
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
    flexDirection: 'row', // Organiza a imagem e texto horizontalmente
    alignItems: 'center', // Alinha a imagem e o texto verticalmente
  },

  imageLista: {
    width: 60,
    height: 60,
    borderRadius: 30, 
    marginRight: 10,
  },

  textContainer: {
    justifyContent: 'center', 
  },
});

export default Layout;
