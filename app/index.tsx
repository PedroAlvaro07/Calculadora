import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Col, Grid, Row } from "react-native-easy-grid";
import { useState } from "react";

export default function HomeScreen() {

  const botoes = [
    ["7", "8", "9", "/", "*"],
    ["4", "5", "6", "-", "+"],
    ["1", "2", "3", "√", "C"],
    [".", "0", "=", "<-"]
  ]
  
  const [display, setDisplay] = useState("");
  const [expressao, setExpressao] = useState("");

  function limparDisplay() {
    setDisplay("");
    setExpressao("");
  }

  function deletarUltimo() {
    setDisplay(display.slice(0, -1));

  }

  function calcular(valor: string) {

    switch(valor) {

      case "C":
        limparDisplay();
        return;

      case "<-":
        deletarUltimo();
        return;

      case "+":
      case "-":
      case "*":
      case "/":
        if (display === "") return;

        //bagulho chato esse prev
        setExpressao(prev => prev + display + valor);
        setDisplay("");
        return;

      case "√":
        if (display === "") return;

        const resultadoRaiz = Math.sqrt(Number(display));
        setDisplay(String(resultadoRaiz));
        return;

      case "=":
        if (display === "" && expressao === "") return;

        
        const resultado = eval(expressao + display);
        setDisplay(String(resultado));
        setExpressao(expressao + "=" + resultado); 
    
        return;

      default:
        setDisplay(prev => prev + valor);
    }
}


  return (
    <View style={styles.container}>
      
      <View style={styles.expressaoDisplay}>
        <Text numberOfLines={2} style={styles.expressaoText}>{expressao || "0"}</Text>
      </View>
      <View style={styles.display}>      
        <Text numberOfLines={2} style={styles.displayText}>{display || "0"}</Text>
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
    width: "35%",
    backgroundColor:"red", 
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: 10,
    borderRadius: 2
  },
  displayText: {
    fontSize: 40,
    color: "#000000",
    textAlign: "right",
  },
  expressaoDisplay: {
    width: "35%",
    height: 50,
    backgroundColor:"#cfc1c1", 
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: 10,  
    margin: 2,
    borderRadius: 2,
  },
  expressaoText: {
    fontSize: 20,
    color: "#000000",
    textAlign: "right",
  },
  gridBox: {
    width: "35%",
    aspectRatio: 0.9,
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