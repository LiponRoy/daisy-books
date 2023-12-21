import { NextResponse } from 'next/server';

export const POST = async (req: Request, res: NextResponse) => {
	try {
		const {
	  firstName,
      lastName,
      phone,
      email,
      currency,
      price,
      address
		} = await req.json();
	
console.log(firstName)
		// return NextResponse.json(
		// 	// { message: 'Book has Posted Successfully', posted },
		// 	{ message: 'Book has Posted Successfully'},
		// 	{ status: 200 }
		// );
	} catch (error) {
		return NextResponse.json({ message: 'Error', error }, { status: 500 });
	} finally {
		// await prisma.$disconnect();
	}
};
