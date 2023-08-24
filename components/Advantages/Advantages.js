
import { Box, Heading, Text, Image, Grid, Container } from "@chakra-ui/react";
import Info from '../Info/Info.js'

export default function Advantages() {
  return <>
    <Box color="rgba(235, 235, 235)" marginTop={100}>
      <Box backgroundColor="rgba(3, 69, 59)" min-height={616} >
        <Box>
          <Heading as="h2" fontSize={36} paddingTop={100} textAlign="center">
            C нами выгодно
          </Heading>
        </Box>
        <Grid templateColumns="repeat(3, 1fr)" gap={10} marginTop={31} marginLeft={316} marginRight={316} justifyContent="center" textAlign="center" paddingBottom={100}>
          <Box >
            <Image src="/img/Main/Advantage/Component 13.png" alt="Оплата на сайте" display="block" margin="0 auto"/>
            <Text>Оплата на сайте</Text>
            <Text>Оплатить заказ можно наличными, либо банковской картой или через систему ЕРИП</Text>
          </Box>
          <Box>
            <Image src="/img/Main/Advantage/Component 13 (1).png" alt="Быстрая доставка" display="block" margin="0 auto"/>
            <Container>
            <Text>Быстрая доставка</Text>
            <Text>Мы доставляем ваши заказы в любой день по предварительному согласованию</Text>
            </Container>
          </Box>
          <Box>
            <Image src="/img/Main/Advantage/Component 13 (2).png" alt="Доставим в любую точку Москвы" display="block" margin="0 auto"/>
            <Container>
            <Text>Доставим в любую точку Москвы</Text>
            <Text>Доставка по Москве осуществляется в течении рабочего дня, максимум суток в зависимости от получения нами заказа</Text>
            </Container>
          </Box>
          <Box>
            <Image src="/img/Main/Advantage/Group.png" alt="Только свежие цветы" display="block" margin="0 auto"/>
            <Container>
            <Text>Только свежие цветы</Text>
            <Text>Наш магазин может похвастаться не только огромным выбором композиций, но и ежедневными поставками со всего мира</Text>
            </Container>
          </Box>
          <Box>
            <Image src="/img/Main/Advantage/Component 13 (3).png" alt="10 лет на рынке продажи цветов" display="block" margin="0 auto" />
            <Container>
            <Text>10 лет на рынке продажи цветов</Text>
            <Text>Более 10 лет мы доставляем букеты вашим близким в любые уголки нашей страны и мира, где бы они ни находились</Text>
            </Container>
          </Box>
          <Box>
            <Image src="/img/Main/Advantage/Component 13 (4).png" alt="Сервисная служба 24/7" display="block" margin="0 auto"/>
            <Container>
            <Text>Сервисная служба 24/7</Text>
            <Text>Служба поддержки работает круглосуточно, и готова 24/7 ответить на любые вопросы</Text>
            </Container>
          </Box>
        </Grid>
        </Box>
      </Box>
    <Info />
  </>;
}