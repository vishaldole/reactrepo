// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello World from React"
// );
// console.log(heading); // object
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

/**
 *
 * <div id="parent">
 *      <div id="child">
 *          <h1>Im h1 tag</h1>
 *      </div>
 * </div>
 *
 *
 *
 */

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "Im h1 tag")
//   )
// );

// console.log(parent);
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);

/**
 *
 * <div id="parent">
 *      <div id="child">
 *          <h1>Im h1 tag</h1>
 *          <h2>Im h2 tag</h2>
 *
 *      </div>
 * </div>
 *
 *
 *
 */

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "Im h1 tag"),
//     React.createElement("h2", {}, "Im h2 tag"),
//   ])  // create an array of children
// );

// console.log(parent);
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);

/**
 *
 * <div id="parent">
 *      <div id="child">
 *          <h1>Im h1 tag</h1>
 *          <h2>Im h2 tag</h2>
 *
 *      </div>
 *      <div id="child2">
 *          <h1>Im h1 tag</h1>
 *          <h2>Im h2 tag</h2>
 *
 *      </div>
 * </div>
 *
 *
 *
 */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Im h1 tag"),
    React.createElement("h2", {}, "Im h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Im h1 tag"),
    React.createElement("h2", {}, "Im h2 tag"),
  ]),
]);  // to avoid this ugly way , we have JSX

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
