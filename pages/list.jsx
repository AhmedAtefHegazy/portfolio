import { useState, useEffect } from 'react'

const ListPage = () => {
  const [items, setItems] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    fetchItems(page, 10) // 10 items per page
  }, [page])

  const fetchItems = async (pageNum, pageSize) => {
    try {
      // Your fetch logic here
      // const response = await fetch(`/api/items?page=${pageNum}&pageSize=${pageSize}`)
      // const data = await response.json()
      // setItems(prev => [...prev, ...data])
    } catch (error) {
      console.error('Error fetching items:', error)
    }
  }

  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          {/* Render your item */}
        </div>
      ))}
    </div>
  )
}

export default ListPage