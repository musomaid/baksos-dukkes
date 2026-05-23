import './globals.css';import { BottomNav } from '@/components/nav';
export default function RootLayout({children}:{children:React.ReactNode}){return <html><body><main className='max-w-md mx-auto p-4 pb-24 space-y-4'><header className='card'><h1 className='font-bold'>Baksos Pengobatan Dukkes</h1></header>{children}</main><BottomNav/></body></html>}
