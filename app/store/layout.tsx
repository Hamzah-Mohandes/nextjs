export default function StoreLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="bg-lime-900  text-white p-4 text-center">
                <h1 className="text-2xl font-bold ">Store</h1>
            </header>
            <main className="flex-1">
                {children}
            </main>
            <footer className="bg-lime-900 text-white p-4 text-center">
                <p>Footer</p>
            </footer>
        </div>
    )
}