'use client';

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import { ChakraProvider } from '@chakra-ui/react'


const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="jp">
      <body className={inter.className}>
        <main className={styles.main}>
          <ChakraProvider>
            {children}
          </ChakraProvider>
        </main>
      </body>
    </html>
  )
}
