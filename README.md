[![Blitz.js](https://raw.githubusercontent.com/blitz-js/art/master/github-cover-photo.png)](https://blitzjs.com)

This is a [Blitz.js](https://github.com/blitz-js/blitz) app.

# **Invoke any error blitz**

Originally asked in discord: https://discord.com/channels/802917734999523368/814627766694838293/814822759519354892.

This repo is a demonstration that when using `invoke(query)`, the type of `Promise<any>` is returned rather than the type the query returns.

There is a basic schema and seed file available.
There are two comments starting with `// BUG` to highlight where the issues are.
Mainly inside `app/lessons/components/LessonContext`

## Reason I am trying to do this

I am trying to display a list of items to `react-select/async`, which requires a type of `Promise<{ label: string; value: string;}>` to be returned from a function.
Our need to debounce the input adds an extra layer of complexity.
