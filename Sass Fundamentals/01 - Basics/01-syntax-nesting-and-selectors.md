# Syntax, nesting and selectors

## Syntax

We can face two different file extensions that are valid for Sass. The **.scss** and the **.sass** files.

The difference between them is basically the syntax, **.scss** syntax is more *.css* like:

```scss
// styles.scss
.foo {
    color: red;
    font-size: 1rem;
}
```

```scss
// styles.sass
.foo 
    color: red;
    font-size: 1rem;

```
## Nesting and scoping

One cool feature that *sass* offers over vanilla css is **the nesting our styles rules** to limit its scope:

```css
/* styles.css */
.container {
    max-width: 600px;
    width: 100%;
    margin: auto;
    background: blue;
}

.container .main {
    margin-left: 220px;
    min-height: 100vh;
    border-left: 2px solid red;
}

.container .sidebar, 
.container .main {
    padding: 10px
}

.container .sidebar {
    width: 200px;
    float: left;
}
```

```scss
// styles.scss
.container {
    max-width: 600px;
    width: 100%;
    margin: auto;
    background: blue;

    .sidebar,
    .main {
        padding: 10px
    }

    .main {
        margin-left: 220px;
        min-height: 100vh;
        border-left: 2px solid red;
    }

    .sidebar {
        width: 200px;
        float: left;
    }
}
```

## Selectors

Using nested styles stills allowing us to use all selectors that *css* has:

```css
/* styles.css */
.container .main-content {
    ...
}

.main-content > span {
    ...
}
```

```scss
// styles.scss
.container {
    .main-content {
        ...
    }
}

.main-content { 
    > span {
        ...
    }
}
```

But *sass* also offers a **Parent selector (&)** that is often useful in situations where adding a secondary class change styles:

```html
<div class="container right-nav">
    ...
</div>
```

```css
/* styles.css */
.container.right-nav {
    ...
}
```

```scss
// styles.scss
.container {
    &.right-nav {
        ...
    }
}
```
