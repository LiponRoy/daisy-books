import prisma from '@/app/lib/prismadb';
import { NextResponse } from 'next/server';

export async function main() {
	try {
		await prisma.$connect();
	} catch (error) {
		return Error('Mongodb connect Unsuccessful');
	} finally {
	}
}

export const GET = async (req: Request, res: NextResponse) => {
	try {
		const posts = await prisma.book.findMany();
		return NextResponse.json(posts);
	} catch (error) {
		return NextResponse.json({ message: 'Error', error }, { status: 500 });
	} finally {
		await prisma.$disconnect();
	}
};

export const POST = async (req: Request, res: NextResponse) => {
	try {
		const { name, description, imageSrc } = await req.json();
		await main();
		const posted = await prisma.book.create({
			data: { name, description, imageSrc },
		});
		return NextResponse.json(
			{ message: 'Book has Posted Successfully', posted },
			{ status: 200 }
		);
	} catch (error) {
		return NextResponse.json({ message: 'Error', error }, { status: 500 });
	} finally {
		await prisma.$disconnect();
	}
};
