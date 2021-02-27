import db from "./index"

//import db from "db"

/*
 * This seed function is executed when you run `blitz db seed`.
 *
 * Probably you want to use a library like https://chancejs.com
 * or https://github.com/Marak/Faker.js to easily generate
 * realistic data.
 */
const seed = async () => {
  await db.lesson.create({
    data: {
      teacher: { create: { name: "Ava Adams" } },
      StudentLesson: {
        create: {
          student: { create: { name: "Betsy Beekeeper" } },
        },
      },
    },
  })
}

export default seed
