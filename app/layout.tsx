import type { Metadata } from 'next'

import '../styles/global.css'

export const metadata: Metadata = {
    title: 'Task Management Tool',
    description: 'A tool to manage your tasks',
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body>
                {children}
            </body>
        </html>
    )
}