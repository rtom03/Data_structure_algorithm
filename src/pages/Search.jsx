import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../@/components/ui/tabs"


const Searching = () => {
  return (
    <div>
      <h1 className='font-bold text-base text-dataGray'>Search Algorithm</h1>
      <Tabs defaultValue="account" className="w-[1400px]">
        <TabsList className="flex justify-between">
          <TabsTrigger value="polymorphism">Polymorphism</TabsTrigger>
          <TabsTrigger value="inheritance">Inheritance</TabsTrigger>
          <TabsTrigger value="recursion">Recursion</TabsTrigger>
          <TabsTrigger value="divide">Divide & Conquer</TabsTrigger>

        </TabsList>
        <TabsContent value="polymorphism">Make changes to your account here.</TabsContent>
        <TabsContent value="inheritance">Inheritance</TabsContent>
        <TabsContent value="recursion">Recursion</TabsContent>
        <TabsContent value="divide">Divide & Conquer</TabsContent>

      </Tabs>
    </div>
  )
}

export default Searching
