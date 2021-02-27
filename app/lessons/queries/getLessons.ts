import { paginate, resolver } from "blitz"
import db, { Prisma } from "db"

interface GetLessonsInput
  extends Pick<Prisma.LessonFindManyArgs, "where" | "orderBy" | "skip" | "take"> {}

export default resolver.pipe(async ({ where, orderBy, skip = 0, take = 100 }: GetLessonsInput) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const { items: lessons, hasMore, nextPage, count } = await paginate({
    skip,
    take,
    count: () => db.lesson.count({ where }),
    query: (paginateArgs) => db.lesson.findMany({ ...paginateArgs, where, orderBy }),
  })

  // BUG: Here `lessons` has type `Lesson[]`
  return {
    lessons,
    nextPage,
    hasMore,
    count,
  }
})
