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
		titles: 'children',
	},
	{
		id: 2,
		titles: 'Novel',
	},
	{
		id: 3,
		titles: 'Biography',
	},
	{
		id: 4,
		titles: 'Horror',
	},
	{
		id: 5,
		titles: 'Thriller',
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
