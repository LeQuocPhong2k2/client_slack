import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IUser } from '../slice/user-slice'

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/users' }),
    endpoints: (builder) => ({
        getAllUsers: builder.query({
            query: () => '/users?_limit=5',
        }),
        getUserById: builder.query<IUser[],string>({
            query: (id) => `?id=${id}`,
          }),
    }),
})

export const { useGetUserByIdQuery } = userApi
export const { useGetAllUsersQuery } = userApi