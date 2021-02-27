import getLessons from "app/lessons/queries/getLessons"
import { invoke } from "blitz"
import { createContext, FC, useCallback, useContext, useEffect, useState } from "react"

interface LessonContextValue {
  lessons?: Array<any>
  hasMore?: Boolean
  fetchLessons?: () => Promise<{ lessons: any; hasMore: any }>
}

export const LessonContext = createContext<LessonContextValue>({})

interface LessonContextProviderProps {}

const LessonContextProvider: FC<LessonContextProviderProps> = ({ children }) => {
  const [_lessons, setLessons] = useState([])

  const fetchLessons = useCallback(async () => {
    // BUG: Here `lessons` has type `any`
    const { lessons } = await invoke(getLessons, {})
    setLessons(lessons)
    console.log("lessons", lessons)
    return lessons
  }, [])

  useEffect(() => {
    fetchLessons()
  }, [fetchLessons])

  return (
    <LessonContext.Provider value={{ lessons: _lessons, fetchLessons }}>
      {children}
    </LessonContext.Provider>
  )
}

export const useLessonContext = () => useContext(LessonContext)

export default LessonContextProvider
