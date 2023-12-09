import { IBook } from '@/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const bookApi = createApi({
	reducerPath: 'bookApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://daisy-books.vercel.app',
	}),
	tagTypes: ['book_tag'],

	endpoints: (builder) => ({
		getBooks: builder?.query<IBook[], void>({
			query: () => '/api/book',
			transformResponse: (res: any) => res.reverse(),
			providesTags: ['book_tag'],
		}),
		bookDetail: builder.query<IBook, string>({
			query: (_id) => `/api/book/${_id}`,
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
export const { useGetBooksQuery, useCreateBookMutation, useBookDetailQuery } =
	bookApi;
