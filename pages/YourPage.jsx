import dynamic from 'next/dynamic'

// Remove the regular import and only use dynamic import
const HeavyComponent = dynamic(() => import('../components/HeavyComponent'), {
  loading: () => <p>Loading...</p>
})

const YourPage = () => {
  return (
    <div>
      <HeavyComponent />
    </div>
  )
}

export default YourPage