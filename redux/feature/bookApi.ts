import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface IBook {
	id: string;
	title: string;
	author: string;
	category: string;
	publicationDate: string;
	numberOfPages: Number;
	language: string;
	description: string;
	imageSrc: string;
}

export const bookApi = createApi({
	reducerPath: 'bookApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:3000',
	}),
	tagTypes: ['book_tag'],

	endpoints: (builder) => ({
		getBooks: builder.query<IBook[], void>({
			query: () => '/api/book',
			transformResponse: (res: any) => res.reverse(),
			providesTags: ['book_tag'],
		}),
		createBook: builder.mutation({
			query: (book) => ({
				url: '/api/book',
				method: 'POST',
				body: book,
			}),
			invalidatesTags: ['book_tag'],
		}),
	}),
});

// Export hooks for usage in components
export const { useGetBooksQuery, useCreateBookMutation } = bookApi;
