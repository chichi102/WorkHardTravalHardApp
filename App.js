import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Pressable, TouchableOpacity } from "react-native";
import styled, { ThemeProvider } from "styled-components/native";
import { theme } from "./theme";

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.bg};
  padding-horizontal: 20;
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 100;
`;

const HeaderText = styled.Text`
  color: ${({ theme }) => theme.white};
  font-size: 38;
  font-weight: 600;
`;

export default function App() {
  const [working, setWorking] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <StatusBar style="auto" />
        <Header>
          <Pressable>
            <HeaderText>Work</HeaderText>
          </Pressable>
          <HeaderText>Traval</HeaderText>
        </Header>
      </Container>
    </ThemeProvider>
  );
}
