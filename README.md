### redux-stopwatch-demo

Demo [here](https://ari-stripe.github.io/redux-stopwatch-demo/)!

This demo stopwatch app uses react with redux in a non-traditional way.
A lot of redux boilerplate has been removed in favor of a simple
`setState` that updates a single state tree. How `setState` works
should be obvious if you already know react. `setState` is like
`React.Component#setState` with the exception that state is held in a
single tree instead of spread across components.
