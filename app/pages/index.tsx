import Layout from "app/core/layouts/Layout"
import LessonContextProvider, { useLessonContext } from "app/lessons/components/LessonContext"
import { BlitzPage } from "blitz"
import { Suspense } from "react"

const Home: BlitzPage = () => {
  const { lessons } = useLessonContext()

  return (
    <div className="container">
      <div> Lesson count: {lessons?.length || "0"} </div>{" "}
    </div>
  )
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => (
  <Suspense fallback={<div> Loading ... </div>}>
    <LessonContextProvider>
      <Layout title="Home">{page}</Layout>
    </LessonContextProvider>
  </Suspense>
)

export default Home
