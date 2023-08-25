import { useSession, signIn, signOut } from 'next-auth/react';
import { Box, Text, Button, Image} from '@chakra-ui/react';

export default function Home() {
	const { data: session } = useSession();
	if (session && session.user) {
		console.log('user=', session.user);
		console.log('session=', session);
		return <>
			<Box mt={"10"} display={"flex"} alignItems={"center"} flexDirection={"column"}>
				Вы вошли как {session.user?.email} <br />
				{session?.user?.image && <Image src={session?.user?.image} alt='avatar' width={50} height={50}></Image>}
				{session?.user?.name}
				<hr></hr>
				<Button onClick={() => signOut()} width={290} mx="auto" backgroundColor="rgba(0, 85, 78)">Покинуть аккаунт</Button>
			</Box>
		</>;
	}
	return <>
		<Box display={"flex"} alignItems={"center"} flexDirection={"column"}>
			<Text mt={"20"}>Вы ещё не вошли </Text>
			<Button onClick={() => signIn()} width={290} mx="auto" backgroundColor="rgba(0, 85, 78)">Войдите в аккаунт</Button>
		</Box>
	</>;
}
