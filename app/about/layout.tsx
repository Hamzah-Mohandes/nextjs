import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "About",
    description: "About page",
    keywords: ["nextjs", "react", "typescript"],
    authors: [{ name: "Hamzah" }],
    icons: {
        icon: "/next.svg",
        shortcut: "/next.svg",
    },
};

export default function AboutLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex flex-col min-h-screen">
            <header className="bg-re-900 text-white p-4 text-center">
                <h1>header</h1>
            </header>
            {children}

            <footer className="bg-red-900 text-white p-4 text-center fixed bottom-0 w-full">
                <p>footer</p>
            </footer>
        </div>
    )
}