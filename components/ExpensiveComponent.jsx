const MemoizedComponent = React.memo(({ data }) => {
  // Your component logic
})

// For expensive calculations
const expensiveValue = useMemo(() => {
  return someExpensiveCalculation(props.data)
}, [props.data]) 