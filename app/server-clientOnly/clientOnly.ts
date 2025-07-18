import "client-only";

export function justForClient() { // nur in 'use client' kann man in client component benutzen
    console.log("This is a client-only function");
}

// die clientOnly.ts Datei ist eine client component und nur man kann in client component benutzen
