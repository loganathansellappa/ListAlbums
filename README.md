### Objective

finn GmbH is branching into the music business and needs a new website. Build it using TypeScript and any framework.

### Brief

In a fictional world, finn GmbH is branching into the music business and we need a new a website. This website needs to display the top 100 songs based on the iTunes API. This code challenge allows you to choose your own path and lets you flaunt your creative panache and technical skills along the way.

### Tasks

- Implement assignment using:
  - Language: **TypeScript**
  - Framework: **any framework**
- Show top 100 albums based on the json feed here: `https://itunes.apple.com/us/rss/topalbums/limit=100/json`
- Cross browser support (or graceful degradation)
- A clean modern look and responsive design
- A good user experience
- Use a CSS Framework (Bootstrap, Foundation, Pure, etc.…)
- Allow the top 100 to be searchable
- Surprise us! Add a feature that you think would work well here (for instance, advanced search, integration with other API, a "Favorite" functionality)
  - Describe the feature in separate markdown file

### Deliverables

Make sure to include all source code in the repository.

### Evaluation Criteria

- **TypeScript** best practices
- We're looking for you to produce working code, with enough room to demonstrate how to structure components in a small program.
- Show us your work through your commit history
- Completeness: did you complete the features?
- Correctness: does the functionality act in sensible, thought-out ways?
- Maintainability: is it written in a clean, maintainable way?
- Testing: is the system adequately tested?

### CodeSubmit

Please organize, design, test and document your code as if it were going into production - then push your changes to the master branch. After you have pushed your code, you may submit the assignment on the assignment page.

All the best and happy coding,

The finn GmbH Team



--------------------------------------------------------------------------------------------------------------------------------------------------------------
# The Music Library App


## Available Features

| Feature                    |
|----------------------------|
| List top 100 Albums        |
| Search Album by title/name |


## Api Used
- `https://itunes.apple.com/us/rss/topalbums/limit=100/json`

## Tech

- [Node] - 16.14.2
- [Yarn] - 1.22.18
- [React] - 18.2.0
- [Vite] - 3.0.7
- [Jest] - 28.0.8
- [ReduxjsToolKit] - 1.8.2

## Installation

Install the dependencies and devDependencies and start the server.

```sh
cd frontend-engineering-standard-srhlkx
yarn install
yarn dev
```


## Run Tests
```sh
cd frontend-engineering-standard-srhlkx
yarn test
```

## Demo
[Demo Video](./DemoVideo/DemoVideo.mp4)

## Note

- This whole app can be written as single component, for readability & understanding  the Router/redux/multiple components were added