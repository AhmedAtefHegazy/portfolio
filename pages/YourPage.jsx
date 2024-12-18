// Instead of regular import
import HeavyComponent from '../components/HeavyComponent'

// Use dynamic import
import dynamic from 'next/dynamic'
const HeavyComponent = dynamic(() => import('../components/HeavyComponent'), {
  loading: () => <p>Loading...</p>
}) 