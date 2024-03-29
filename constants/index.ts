import { InavLink } from '@/types';

export const navLink: InavLink[] = [
	{
		id: 1,
		url: '/',
		title: 'home',
	},
];

interface Ioptions {
	id: number;
	titles: string;
}

export const bookFilter: Ioptions[] = [
	{
		id: 1,
		titles: 'Novel',
	},
	{
		id: 2,
		titles: 'Story',
	},
	{
		id: 3,
		titles: 'Children',
	},
	{
		id: 4,
		titles: 'Education',
	},
	{
		id: 5,
		titles: 'Islamic',
	},
	{
		id: 5,
		titles: 'Motivetion',
	},
];

export const bookSort: Ioptions[] = [
	{
		id: 1,
		titles: 'Letest',
	},
	{
		id: 2,
		titles: 'Price-High-Low',
	},
	{
		id: 3,
		titles: 'Price-Low-High',
	},
	{
		id: 4,
		titles: 'A-Z',
	},
	{
		id: 5,
		titles: 'Z-A',
	},
];
export const shopping_guids: Ioptions[] = [
	{
		id: 1,
		titles: 'How to buy',
	},
	{
		id: 2,
		titles: 'Faq',
	},
	{
		id: 3,
		titles: 'Where is my order?',
	},
	{
		id: 4,
		titles: 'Return Policy',
	},
	{
		id: 5,
		titles: 'Payment',
	},
	{
		id: 6,
		titles: 'Shipment',
	},
];
export const Policies: Ioptions[] = [
	{
		id: 1,
		titles: 'Terms of Use',
	},
	{
		id: 2,
		titles: 'Privacy Policy',
	},
	{
		id: 3,
		titles: 'Happy Return Policy',
	},
	{
		id: 4,
		titles: 'Refund Policy',
	},
];
