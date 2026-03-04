import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Col, Grid, Row } from "react-native-easy-grid";
import { useState } from "react";

export default function HomeScreen() {

  const botoes = [
    ["7", "8", "9", "/", "*"],
    ["4", "5", "6", "-", "+"],
    ["1", "2", "3", "√", "mod"],
    [".", "0", "=", "<-", "C"]
  ]
  
  const [display, setDisplay] = useState("");
  const [numero, setNumero] = useState(0);
  const [operador, setOperador] = useState("");
  


  function limparDisplay() {
    setDisplay("");
  }

  function deletarUltimo() {
    setDisplay(display.slice(0, -1));
  }

  function calcular(valor: string) {

    //limpamtudo
    if(valor === "C"){
      limparDisplay();
      return;
    }
    
    //deleta um em um
    if(valor === "<-"){ 
      deletarUltimo();
      return;
    }

    //escreve numero no display
    if(!isNaN(Number(valor)) || valor === "."){
      setDisplay(display + valor);
      return;
    }

    if(valor === "+" || valor === "-" || valor === "*" || valor === "/" || valor === "mod"){
      setNumero(Number(display));
      setOperador(valor);
      setDisplay("");
    }


  }


  return (
    <View style={styles.container}>
      
      <View style={styles.display}>
        <Text style={styles.displayText}>{display || "0"}</Text>
      </View>

    
      <View style={styles.gridBox}>
        <Grid>
          {botoes.map((linha, index) => (
            <Row key={index}>
              {linha.map((botao) => (
                <Col key={botao}>
                  <TouchableOpacity style={styles.botao} onPress={() => calcular(botao)}>
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