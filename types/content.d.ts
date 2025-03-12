declare module '#imports' {
  interface ContentDocument {
    title?: string
    description?: string
    _id: string
  }

  export function queryCollection(name: string): {
    path: (path: string) => {
      first: () => Promise<ContentDocument>
    }
  }
} 