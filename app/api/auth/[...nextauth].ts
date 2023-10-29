import NextAuth, { AuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import CredentialsProvider from 'next-auth/providers/credentials';
import prisma from '../../lib/prismadb';
import bcrypt from 'bcrypt';

export const authOption: AuthOptions = {
	adapter: PrismaAdapter(prisma),
	providers: [
		CredentialsProvider({
			name: 'credentials',
			credentials: {
				email: { label: 'email', type: 'text', placeholder: 'email' },
				password: { label: 'password', type: 'password' },
			},
			async authorize(credentials) {
				if (!credentials?.email || !credentials.password) {
					throw new Error('Invalid email or password');
				}
				const user = await prisma.user.findUnique({
					where: {
						email: credentials.email,
					},
				});
				if (!user || !user?.hashedPassword) {
					throw new Error('Invalid email or password');
				}

				const isCorrectPassword = await bcrypt.compare(
					credentials.password,
					user.hashedPassword
				);
				if (!isCorrectPassword) {
					throw new Error('Invalid email or password');
				}
				return user;
			},
		}),
	],
	pages: {
		signIn: '/login',
	},
	debug: process.env.NODE_ENV === 'development',
	session: {
		strategy: 'jwt',
	},
	secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOption);
