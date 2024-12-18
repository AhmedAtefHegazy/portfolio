const [items, setItems] = useState([])
const [page, setPage] = useState(1)

// Fetch only what you need
useEffect(() => {
  fetchItems(page, 10) // 10 items per page
}, [page]) 