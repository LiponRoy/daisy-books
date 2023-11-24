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

export async function GET(
	req: Request,
	{ params }: { params: { slug: string } }
) {
	try {
		if (!params.slug) {
			return new NextResponse('book id is required', { status: 400 });
		}

		const product = await prisma.book.findUnique({
			where: {
				id: params.slug,
			},
		});

		return NextResponse.json(product);
	} catch (error) {
		console.log(error);
		return new NextResponse('Internal error', { status: 500 });
	}
}
