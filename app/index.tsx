import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Col, Grid, Row } from "react-native-easy-grid";

export default function HomeScreen() {

  const botoes = [
    ["<-"],
    ["7", "8", "9", "/", "*"],
    ["4", "5", "6", "-", "+"],
    ["1", "2", "3", "√", "C"],
    [".", "0", "="]
  ]
  
  return (
    <View style={styles.container}>
      

     
      <View style={styles.display}>
        <Text style={styles.displayText}>0</Text>
      </View>

    
      <View style={styles.gridBox}>
        <Grid>
          {botoes.map((linha, index) => (
            <Row key={index}>
              {linha.map((botao) => (
                <Col key={botao}>
                  <TouchableOpacity style={styles.botao}>
                    <Text style={styles.botaoText}>{botao}</Text>
                  </TouchableOpacity>
                </Col>
              ))}
            </Row>
          ))}
        </Grid>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff", 
    padding: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  display: {
    width: "25%",
    backgroundColor:"red", 
    justifyContent: "center",
    alignItems: "flex-end",
    borderRadius: 5,
    paddingRight: 10,
    
  },
  displayText: {
    fontSize: 40,
    color: "#000000",
  },
  gridBox: {
    width: "25%",
    aspectRatio: 1,
    alignSelf: "center",
  },
  botao: {
    flex: 1,
    backgroundColor: "#cbcbd1",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    margin: 2,
  },
  botaoText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});