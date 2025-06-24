'use client'
import dynamic from 'next/dynamic'

// Dynamically import the client component with searchParams
const SupplicationsPageClient = dynamic(
  () => import('./SupplicationsPageClient'),
  {
    ssr: false,
  }
)

export default function Page() {
  return <SupplicationsPageClient />
}
