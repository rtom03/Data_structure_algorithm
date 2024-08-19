import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../@/components/ui/tabs"


const Sort = () => {
  return (
    <div>
      <h1 className='font-bold text-base text-dataGray'>Sort Algorithm</h1>
      <Tabs defaultValue="account" className="w-[1400px]">
        <TabsList className="flex justify-between">
          <TabsTrigger value="mergesort">MergeSort</TabsTrigger>
          <TabsTrigger value="quicksort">QuickSort</TabsTrigger>
          <TabsTrigger value="radixsort">RadixSort</TabsTrigger>
          <TabsTrigger value="bubble">BubbleSort</TabsTrigger>

        </TabsList>
        <TabsContent value="mergesort">Make changes to your account here.</TabsContent>
        <TabsContent value="quicksort">quicksort</TabsContent>
        <TabsContent value="radixsort">radixsort</TabsContent>
        <TabsContent value="bubble">bubble & Conquer</TabsContent>

      </Tabs>
    </div>
  )
}

export default Sort
