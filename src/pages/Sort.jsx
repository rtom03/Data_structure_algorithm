import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../@/components/ui/tabs"

const Sort = () => {

  function merge(arr1, arr2) {
    let output = []
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        output.push(arr1[i])
        i++;
      } else {
        output.push(arr2[j])
        j++
      }
    }
    while (i < arr1[i]) {
      output.push(arr1[i])
      i++
    }
    while (j < arr2[j]) {
      output.push(arr2[j])
      j++
    }
    return output;
  }

  const res = merge([2, 4, 6, 8], [1, 3, 5, 7])
  console.log(res)
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
