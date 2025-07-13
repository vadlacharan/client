import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const CardOutlineDemo = () => {
  return (
    <Card className=' rounded-2xl  border-orange-400  max-w-md gap-0 backdrop-blur-2xl  bg-gradient-to-r from-orange-500 to-orange-700  '>
      <CardHeader>
        <CardTitle>Expense</CardTitle>
      </CardHeader>
      <CardContent>
        <div className=' font-bold text-font text-5xl '>8000.00</div>
      </CardContent>
    </Card>
  )
}

export default CardOutlineDemo
