import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';

import prisma from '../../lib/prismadb';

export async function POST(request: Request) {
	try {
		const body = await request.json();
		const { email, name, password } = body;
		console.log(email);

		const hashedPassword = await bcrypt.hash(password, 12);

		const user = await prisma.user.create({
			data: {
				email,
				name,
				hashedPassword,
			},
		});

		return NextResponse.json(user);
	} catch (error) {
		console.log(error);
	}
}
