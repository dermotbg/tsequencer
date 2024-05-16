import { createFileRoute } from '@tanstack/react-router'
import Tutorial from '../components/Tutorial'

export const Route = createFileRoute('/tutorial')({
  component: () => <Tutorial />
})