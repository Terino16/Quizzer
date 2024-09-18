"use client"
import { SessionProvider } from 'next-auth/react';

import React from 'react'
import { ThemeProvider as NextThemesProvider } from "next-themes";

type Props = {
    children:React.ReactNode;
}

const Providers = ({children}: Props) => {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
    <SessionProvider>{children}</SessionProvider>
    </NextThemesProvider>
  )
}

export default Providers