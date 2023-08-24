import { Box, Text, Image, Heading, Container} from "@chakra-ui/react";

export default function Info() {
    return <> 
    <Box color="rgba(51, 51, 51)" marginTop={100} display="flex" flexDirection="column" ml={"310"} mr={"310"}>
        <Container>
        <Heading as="h2" size="lg" mt={8} mb={50} color="rgba(3, 69, 59)" textAlign="center">
            Только у нас вы найдете богатый ассортимент цветов
        </Heading>
        </Container>
        <Box display="flex">
        <Image src="/img/Main/Advantage/1.png" alt="Цветы" width={610} height={352}/>
        <Box display="flex" flexDirection="column" >
            <Container>
            Жизнь слишком коротка, чтобы ограничиваться такими праздниками как 8 марта, 14 февраля, день Матери и дни рождения! Наши любимые дамы заслуживают гораздо больше внимания, а аленький цветочек из нашего ассортимента поможет вам в этом Доставка цветов по Москве — ваше лучшее решение!
            Если вдруг у вас не получается подарить букет лично, наша гибкая система доставки поможет вам. Создание букета — не простое задание.
        </Container>
        </Box>
        </Box>
        <Box display="flex" pt={50} flexDirection="row-reverse">
        <Image src="/img/Main/Advantage/2.png" alt="Цветы" width={750} height={450}/>
        <Box display="flex" flexDirection="column" width={530} mr={50}>
        <Container>
            Для заказа необходимо учитывать ваши персональные отношения с адресатом, статус человека, возраст и это только малая часть критериев, по которым наши высококвалифицированные специалисты быстро, качественно и красиво соберут и оформят ваш заказ.
            Так, романтичным натурам подойдут букеты в нежной гамме с зелёными и розовыми оттенками. Истинным леди придутся по вкусу букеты с прямыми линиями и строгими формами. 
        </Container>
        </Box>
        </Box>
    </Box>
    </>;
}