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
		const id = req.url.split('/book/')[1];
		await main();
		const post = await prisma.book.findFirst({ where: { id } });
		if (!post)
			return NextResponse.json({ message: 'Not Found' }, { status: 404 });
		return NextResponse.json({ message: 'Success', post }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ message: 'Error', error }, { status: 500 });
	} finally {
		await prisma.$disconnect();
	}
};
