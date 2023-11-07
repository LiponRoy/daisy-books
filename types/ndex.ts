import { MouseEventHandler } from 'react';
import {User } from "@prisma/client";


export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerified"
> & {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
};

export interface InavLink {
	id: number;
	url: string;
	title: string;
}
