import React from 'react';
import Icon  from 'react-native-vector-icons/MaterialIcons'

import { Animated } from 'react-native'
import { PanGestureHandler, State} from 'react-native-gesture-handler'

import Header from  '~/components/Header';
import Tabs from '~/components/Tabs'
import Menu from '~/components/Menu'

import { Container, Content, Card, CardHeader, CardContent, CardFooter, Title, Description, Annotation } from './styles';

export default function Main(){
  const translateY = new Animated.Value(0);

  const AnimatedEvent = Animated.event(
    [
      {
        nativeEvent:{
          translateY: translateY,
        }
      }
    ],
    { useNativeDriver: true},
  )
  function onHandlerStateChange(event){

  }

  return (
    <Container>
      <Header />
      <Content>
        <Menu />
        
        <PanGestureHandler
        onGestureEvent={AnimatedEvent}
        onHandlerStateChange={onHandlerStateChange}
        >
        <Card>
          <CardHeader>
            <Icon name="attach-money" size={28} color="#666" />
            <Icon name="visibility-off" size={28} color="#666" />
          </CardHeader>
          <CardContent>
            <Title> Saldo disponível </Title>
            <Description>R$ 197.611,65</Description>
          </CardContent>
          <CardFooter>
            <Annotation>
              Transferência de R$ 20,00 recebida de Allan Oliveira, hoje as 08:00h
            </Annotation>
          </CardFooter>
        </Card>
        </PanGestureHandler>

      </Content>

      <Tabs />
    </Container>
  );
}