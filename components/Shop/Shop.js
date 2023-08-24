import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Heading, Text, Image, Container} from "@chakra-ui/react";

export default function Shop() {
  return <>
    <Box ml={310} mr={310}>
      <Box>
        <Breadcrumb mt={30}>
          <BreadcrumbItem>
            <BreadcrumbLink href="main">Главная</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="about">О магазине</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
      <Heading fontSize="36" color="rgba(3, 69, 59)" mt="30">О магазине</Heading>
      <Text fontSize="24" mt={30} color="rgba(3, 69, 59)">Магазин Gvozdika.by обеспечит <br />доставку цветов по любому поводу</Text>
      <Box color="rgba(51, 51, 51)" display="flex" mt="10" flexDirection="column">
        <Box display="flex" flexDirection="row-reverse">
          <Image src="/img/AboutShop/2.jpg" alt="Цветы" width={640} height={605} />
          <Box display="flex" flexDirection="column">
            <Container mr={130}>
              В случае предварительного заказа мы гарантируем большой выбор срезанных и горшечных растений. В нашем магазине вас ждут профессиональные флористы, которые помогут выбрать букет, соответствующий Вашим пожеланиям и событию.
              Мы поможем вам в оформлении любого торжества, свадьбы или корпоративного вечера композициями из живых цветов и воздушных шаров. Вы можете приложить к букету записку с пожеланиями или же остаться анонимными.
              Мы заботимся о Вашем комфорте, поэтому заказывая у нас доставку цветов напрямую к адресату, вы можете получить СМС-оповещение о доставке, а также узнать реакцию получателя.
            </Container>
          </Box>
        </Box>
        <Box display="flex" mt={124}>
          <Image src="/img/AboutShop/1.jpg" alt="Цветы" width={530} height={420} mr={144}/>
          <Box display="flex" flexDirection="column" ml={50}>
            <Container>
            Мы выполняем свою работу качественно и красиво. 
Наша команда, работает только на положительный результат, опыт который мы приобрели, делает
наши услуги выгодными и подходящими, для любого заказчика.
В нашем каталоге представлено более 600 наименований товаров. Количество наших клиентов продолжает расти, и мы делаем все, чтобы оправдать ваше доверие. 
Спасибо, что выбрали нас!
            </Container>
          </Box>
        </Box>
      </Box>
    </Box>
  </>
}