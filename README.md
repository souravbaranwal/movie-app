## Movie App

A React Native application that allows users to browse movies from TMDB using the provided APIs.

## Development Setup

1. Configure your machine for React Native development by following the [official documentation](https://reactnative.dev/docs/environment-setup).

2. Clone the repo.

```bash
git clone 'https://github.com/souravbaranwal/movie-app.git'
```

3. Navigate to the project directory.

```bash
cd 'MovieApp'
```

4. Install project dependencies.

```bash
yarn
```

5. Install iOS dependencies.

```bash
  npx pod-install
```

## Running the app

1. To run the Android or iOS version of the app.

```
yarn <platform>
```

| param      | values           |
| ---------- | ---------------- |
| `platform` | `ios`, `android` |

## Technologies used

```
React
React Native
Redux
Redux Toolkit
React Query
```

## Features Implemented

1. Tabbed interface to switch between the different movie lists (Now Playing, Popular, Top Rated, Upcoming & Favorites).
2. Each list consists of movie cards which is displaying details of the movie (poster, title, release date, average rating). It also has an heart icon which displays if the movie is marked favorite or not.
3. Tapping a movie card leads to movie details screen which shows movie details (backdrop poster,poster, title, release date, average rating, description). The screen also has a favorite button which can be used to favorite or unfavorite the movie. On completion of the action a toast message is displayed and the changes can be seen on the favorites tab.
4. Every screen has a search input and the movies can be searched from there.
5. The movie list is using react query's useInfiniteQuery hook for infinite scrolling.
6. The movie card in the list is having enter animation with staggering effect.

## Important links

[Demo]()
