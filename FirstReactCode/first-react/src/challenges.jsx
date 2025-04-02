/* 
Challenge - recreate the above line of code in vanilla JS by creating and
appending an h1 to our div#root (without using innerHTML).

- Create a new h1 element (createElement)
- Give it some textContent
- Give it a class name of "header"
- append it as a child (using `appendChild`) of the div#root

Don't use innerHTML to accomplish any of this. (Imperative coding)
    
*/

const h1 = document.createElement("h1");
h1.className = "header";
h1.textContent = "Vite + React";

document.getElementById("root").appendChild(h1);

/**
 * Challenge: set up a new React app from scratch!
 * Hints:
 * 1. Need to import the method to create a new root 
 *    from the "react-dom/client" package)
 * 2. Use that root to render some JSX. For now, just render
 *    an h1 element that says anything you want.
 */

import { createRoot } from "react-dom/client"

const root = createRoot(document.getElementById("root"))

root.render(
    <h1>Hello World!</h1>
)

/**
 * Challenge (part 1):
 * Create a custom "Page" component
 * 
 * It should return an ordered list with the reasons why you're
 * excited to be learning React :)
 * 
 * Render the Page component.
 */

//import { createRoot } from "react-dom/client"
//const root = createRoot(document.getElementById("root"))

function Page() {       
    const ol1 = <ol>
                    <li>Get better at web dev</li>
                    <li>Better career options</li>
                    <li>Self improvement</li>
                </ol>
                
    return ol1
}

root.render(
    <Page></Page>
)

/**
Challenge: 

Part 2: 
- Add a `<header>` element with an `<img />` element with the image of the 
  React logo inside (src="react-logo.png") and make sure to set the 
  width to something more manageable so it doesn't take up the whole screen.
  Also, as always, you should include some alt text on the image.
- Add an `<h1>` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list, then wrap
  the `<h1>` and `<ol>` inside a `<main>` element to keep our semantic
  structure flowing well.
- Add a `<footer>` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."
 */

function Page() {       
    return (    
        <main>
            <header>
                <img src="react-logo.png" width={40} alt="React Logo"/>                   
            </header>
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>React is a popular library, so I will be able to
                fit in with all the coolest devs out there! 😎</li>
                <li>I am more likely to get a job as a front end developer
                if I know React</li>
            </ol>
            <footer>© 2025 Hasbun development. All rights reserved.</footer>
        </main>
    )
}

root.render(
    <Page />
)

/** Mini Challenge:
 * 
 * Move the `header` element from the Page component into 
 * its own component called "Header"
 * 
 * Then render an instance of the Header component inside
 * the Page component where the `header` used to be.
 * 
 */

function Header() {
    return (
        <header>
            <img src="react-logo.png" width={40} alt="React Logo"/>                   
        </header>
    )
}

function Page() {       
    return (    
        <main>
            <Header />
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>React is a popular library, so I will be able to
                fit in with all the coolest devs out there! 😎</li>
                <li>I am more likely to get a job as a front end developer
                if I know React</li>
            </ol>
            <footer>© 2025 Hasbun development. All rights reserved.</footer>
        </main>
    )
}

root.render(
    <Page />
)

/** Challenge: 
 * Move the `main` element into its own component called "MainContent" 
 * and render that component inside the Page component.
 * 
 * Do the same with the `footer` element, moving it into a new
 * component called "Footer"
*/

function Header() {
    return (
        <header>
            <img src="react-logo.png" width={40} alt="React Logo"/>                   
        </header>
    )
}

function Page() {       
    return (    
        <main>
            <Header />
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>React is a popular library, so I will be able to
                fit in with all the coolest devs out there! 😎</li>
                <li>I am more likely to get a job as a front end developer
                if I know React</li>
            </ol>
            <footer>© 2025 Hasbun development. All rights reserved.</footer>
        </main>
    )
}

root.render(
    <Page />
)


