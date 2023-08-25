import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from "next-auth/providers/google"
import { JWT } from 'next-auth/jwt';
import { secret } from 'next-auth/jwt';

export const authOptions = {
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET
		}),
		
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
			  userphone: { label: 'Телефон', type: 'text', placeholder: 'Введите телефон' },
			  useremail: { label: 'или Электронная почта', type: 'text', placeholder: 'Введите электронную почту' },
			  password: { label: 'Пароль', type: 'password' }
			},
			async authorize(credentials) {
			  try {
				const response = await fetch('http://localhost:3001/users');
				const users = await response.json();
				

				const user = users.find((user) => {
				  return (
					(credentials.userphone && user.phone === credentials.userphone) ||
					(credentials.useremail && user.email === credentials.useremail)
				  );
				});
				
				if (user && user.password === credentials.password) {
				  return { id: user.id, name: user.fullName, email: user.email };
				} else {
				  return null;
				}
			  } catch (error) {
				console.error(error);
				return null;
			  }
			}
		  })
		],
		
};


const resf = NextAuth(authOptions);
export default (...params) => {
	const [req] = params;
	console.log('pages/api/auth/[...nextauth].js ');
	console.log('>> ', req.method, ' запрос на', req.url, req.query);
	return resf(...params);
};