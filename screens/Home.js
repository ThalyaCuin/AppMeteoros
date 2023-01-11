import React, { Component } from 'react';
import { Text, View } from 'react-native';

/*Vamos criar uma classe chamada HomeScreen para
estender o componente da tela inicial e exportá-lo de
forma que possa ser usado em diferentes telas.*/

export default class HomeScreen extends Component {

/*Dentro do componente HomeScreen, teremos a função
render().
Dentro da função render(), teremos a função return().
Dentro da função return() usando os componentes View e
Text, exibiremos o texto de Home Screen.
Também adicionaremos estilos ao componente View
usando estilos embutidos.*/

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>Tela Inicial!</Text>
            </View>
        )
    }
}