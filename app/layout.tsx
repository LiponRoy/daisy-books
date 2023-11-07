import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components'
import { Toaster } from "react-hot-toast";
import RegisterModal from '@/components/modals/RegisterModal';
import LoginModal from '@/components/modals/LoginModal';
import getCurrentUser from './actions/getCurrentUser';
import PostBookModal from '@/components/modals/PostBookModal';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
	const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={inter.className}>
        <RegisterModal />
        <LoginModal/>
        <PostBookModal/>
        <Navbar currentUser={currentUser} />
        <Toaster />
        {children}
      </body>
    </html>
  )
}
