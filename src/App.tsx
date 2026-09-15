import { Suspense } from "react"
import TechnologyStack from "./Components/TechnologyStack"
import FooterSection from "./FooterSection"
import Nav from "./Nav"
import type { technologyDataType } from "./Types/Types"
import Banner from "./Banner"

const TechnologysPromise = async (): Promise<technologyDataType[]> => {
  const res = await fetch('/data.json')
  const data = await res.json()
  return data;
}

function App() {

  return (
    <>
      <Nav></Nav>
      <Banner></Banner>
      <Suspense fallback={<h2 className="font-jakarta font-semibold lg:text-3xl text-xl text-slate-700 text-center">Loading...</h2>}>
        <TechnologyStack technologysPromise={TechnologysPromise()}></TechnologyStack>
      </Suspense>
      <FooterSection></FooterSection>
    </>
  )
}

export default App
