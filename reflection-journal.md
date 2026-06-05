
# CLASS 01

## Theory

### Questionn 1


### Question 2

Traditional HTTP/1.1 and HTTP/2 run over Transmission Control Protocol (TCP). TCP guarantees ordered delivery, if one packet is lost, everything waits for it to be retransmitted.  On a bad mobile connection one dropped packet can freeze your entire page.

HTTP/3 use Quick UDP Internet connections (QUIC)
QUIC (which HTTP/3 uses) is built on User (Data Protocol) UDP instead. It handles multiple independent streams — so a lost packet will make that stream stand still, not everything else.

Why it matters in 2026: With users on mobile networks,or Wi-Fi, QUIC means faster, more resilient connections. Streaming video, real-time apps, and large websites all benefit significantly with lo or No delay and it ensures better experience.

### Question 3 

**A Website Not Using Semantic HTML**
mozila.org is an example of website that dosen't use semantic HTML properly. I'm able to know using dev tools.

In a website that dosen't use semantic HTML properly most content is wrapped in generic div and table tags rather than nav article section
Headings are not structured in a logical h1,h2,h3 hierarchy
Links lack descriptive aria-label attributes.A screen reader would just read "click here"
Poor screen reader compatibility: navigating by headings or regions gives a confusing, flat experience


## Product Thinking


### Question 1
Using article header, and aside directly helps search engines understand what the content is, not just that content exists.

header : signals the title, author, and publish date of a recipe, Google extracts this for rich snippets (showing the recipe name and author directly in search results)

article : tells crawlers "this is a self-contained piece of content" — Google weights this content more heavily as a primary resource, not just sidebar noise

aside : marks related content (e.g., "You might also like…") as supplementary — preventing Google from treating promotional links as core content, keeping the main recipe content's ranking signal clean

Concretely: a recipe wrapped in article with an h1 inside a header is far more likely to earn a Google Featured Snippet or Recipe Card than the same content in div class="box". More traffic, directly from semantic structure.

### Question 2



# CLASS 02 

## Theory

### 1. When to use em & i

**em:** it ensures semantic emphasis, it signals that the stressed word changes the meaning of the sentence. Screen readers may actually change their tone. `<p>You should <em>never show your password</em> .</p>`


**i**: it is purely visual italics with no semantic weight, it is mostly used for things like technical terms,

`<p>This style is called<i>italics</i>.</p>`

**2.HTML elements that are treated specially by screen readers**

**button:** Button is announced as "button!", it will be focused on by default and also activates on "Enter".

**nav:** nav is serves as a landmark role. Users can jump directly to it via shortcut

**label:** Label is linked to its input by "for". The id must be the same . it is read aloud before the field.

#### 3. When to use aria-label and when to fix HTML

Use aria-label when HTML only can't provide a visible label. 
**Example:** an icon only button

Fix HTML when a visible label already exist. 
Fix HTML if you're using aria-label to patch missing semantics that real HTML could provide.


## Accesibility Reflection

Some icons-buttons in some websites are not labelled .



## PRODUCT THINKING

### structuring h1,h2,h3 in HTML

`<h1>  Payments API Reference </h1>`
  `<h2>  Authentication </h2>`
  `
    `<h3>  POST /charges </h3>`

# CLASS 03 

## Theory ##

### Question 1 :
Step 1: Convert to webp format
Step 2: Resize the Image for actual display dimension. 
step 3: Generate Multiple screen sizes with "srcset"  
Deliver the right size per screen using srcset and sizes attributes.
step 4: compress the file of the image 
step 4: Add loading = lazy 


### Question 2:

srcset is an HTML attribute on "img" that lets you offer the browser multiple image versions. The browser picks the most appropriate one based on the device's screen width.
**Example:**

`< img
  src="hero-800.webp"
  srcset="hero-1.webp 480w, hero-2.webp 800w, hero-3.webp 1280w"
  sizes="(max-width: 600px) 100%, 50%"
  alt="Hero image"
/>`

Use it Any time the same image is displayed at different sizes across devices 

### Question 3:

When you click a link that opens in a new tab, the new tab can actually control the original tab, the one you came from. A  website opened this way can silently redirect your original tab to a fake login page. 
You switch back, see what looks like your bank or email, and type in your password, which goes straight to the attacker.

rel="noopener" cuts the connection. The new tab has no access.

## Engineering Thinking

1. Format: Convert all images to webp, and use `< picture >` tags.
2. Responsive sizing with srcset: Serve small (350px), medium (600px), and large (1200px) versions — browser picks the right one.
3. Lazy loading: Apply loading="lazy" to all images not in the initial viewport. This defers network requests until the user scrolls near them.
4. CDN delivery: Host all product images on a CDN. This reduces latency globally and enables edge caching.


# CLASS 04   

https://meet.google.com/oma-gyme-gik


## Theory 

### Question 1

**Client-Side Only:** 
The browser catches the error instantly before any network request. The user sees an inline error like "Please enter a valid email" immediately after submitting. Fast feedback, but not secure, anyone can disable JavaScript or manipulate the DOM to bypass it.

**Server-Side Only:**
The form submits, a full round-trip HTTP request is made, the server validates, then sends back a response possibly a new page. The user waits for the round-trip before seeing any error. Secure but slow — bad UX for simple mistakes.

**Why you need both:**
Client-side = UX speed (instant feedback, no wasted requests)
Server-side = security & integrity (client code can always be bypassed)

### Question 2 

**autocomplete** 
autocomplete is a features that predicts the rest of a word or data as a user is typing allowing them to complete input without typing it in full.

**5 different values & when to use them.**

**off:**
Sensitive fields like OTPs or security codes you don't want cached 
**name:**
Full name fields on registration/checkout forms
**email:**
Login or newsletter signup email inputs 
**current-password:**
Login password field  lets the browser/password manager autofill 
**new-password:**
Registration/change-password field — tells the browser to suggest a strong password instead of autofilling an old one


## Product Thinking 

### Question 1

**Progress Saving:**
Save each completed steps data to localStorage as the user input them.
On page load, check localStorage and restore progress automatically.
**Validation Strategy:**
Validate each step before allowing progression so that data saved per step is already clean. On reconnection, re-validate step 4 server-side before final submission
**Error Messaging:**
Detect navigator.onLine and the offline event
Show a non-blocking banner: "You're offline. Your progress has been saved. We'll resume when you reconnect."
On reconnect , auto-hide the banner and re-enable submission.

### Question 2

**Native `<select>` vs Custom Dropdown**

Use native `<select>` when:
**Accessibility:** If accessibility is critical,  native select is keyboard-navigable and screen-reader friendly.
**Mobile UX matters:** iOS/Android use their native pickers (wheel/sheet), which users find familiar and easys
**Edge cases to watch:** Custom dropdowns often break on mobile zoom, fail with screen readers if ARIA is wrong.


## Engineer best Practice 
`<label for = "psw"> Password: <label>`
`<input type = "pasword" id = "psw" name = "password" min-length = "8" required  >`



# CLASS 05

## Theory

###  Question 1 


###  Question 2
**which CSS wins?**
.header nav ul li a
nav a.active
.nav-links a

.header nav ul li a : wins because it has most element selectors.

###  Question 3

The cascade is what the  CSS uses to decide which rule wins when multiple rules target the same element. It considers Origin, Specifity, Source Order

**Examole:**
a { color: blue; }
nav a { color: black; }
nav a { color: red; } 

the last line wins!


## Engineering Thinking

###  Question 1 

padding: 10px Makes Element Wider
**Why & Fix**
By default, CSS uses box-sizing: content-box. This means width applies to the content only, and padding is added on top of that width.

with border-box, the width includes padding and border, so the element stays exactly the size you declared.



# CLASS 06

## Theory

### Questuion 1

**flex-basis:** The starting size of an item before free space is distributedassigned **flex-grow:** How much an item expands to fill extra space
**flex-shrin:** How much an item shrinks when space is tight

### Questuion 2

align-items: stretch, stops working when the flex item has a fix height or width.


# CLASS 07

## Theory


### Questuion 1
 
**when to choose CSS grid over Flex box**

Flexbox is one-dimensional (row OR column).
Grid is two-dimensional (rows AND columns simultaneously). 
Choose Grid when:
**Full Page Layouts:**
When you need to define the entire page structure (header, sidebar, main, footer) all at once. Grid lets you place elements precisely across both axes without nesting multiple flex containers.
**Card/Gallery Grids:**
When you want items to align in both rows and columns, like a photo gallery or product card grid. With Flexbox, rows don't react with each other, so columns can't stay aligned. Grid enforces that alignment automatically.
**Overlapping Elements:**
When elements need to overlap or occupy the same grid cell e.g; a text overlay on an image, or a complex magazine-style layout. Flexbox has no concept of overlapping, Grid's grid-column makes this straightforward.


### Questuion 2

**grid-template-areas & grid-template-column**

grid-template-areas:
It let's you name regions of your layout visually in CSS
grid-template-areas:
  "header  header  header"
  "sidebar main    main"
  "footer  footer  footer";
  Then assign elements to those names:
  header { grid-area: header; }
  aside  { grid-area: sidebar; }
  main   { grid-area: main; }

grid-template-columns:
It defines the number and size of columns only, it's structural but not semantic
Example: grid-template-columns: 200px 1fr 1fr;
You then place items using line numbers, which can get hard to read.

**When to use grid-template-areas over grid-template-columns:**

1. Building a named page layout (header, sidebar, etc.)
2. Responsive redesign (just redefine areas in media queries)
3. Equal-width columns with no semantic meaning


# CLASS 08

## Theory 

### Question 1

**Utility first in Tailwind**
Utility first means every class does one thing, text-center centers text, mt-4 adds margin-top. You style elements by creating these small single-purpose classes directly in your HTML rather than writing custom CSS.


## Product Thinking 

**readability:**
The "ugliness" is actually information density, not noise. When you read `<button class="bg-blue-600 text-white px-4 py-2 ">`, you know exactly what this button looks like without opening a single other file. Compare that to `<button class="btn-primary">`. Now you have to go find .btn-primary in a stylesheet,The "ugly" version is actually more readable in context. Readability isn't just about line length; it's about how fast you build a mental model.

**maintainability:**
Traditional CSS creates what's called the append-only stylesheet problem, developers are afraid to delete or change a class because it might be used somewhere else. With Tailwind, styles are used directly, so deleting an element deletes its styles automatically. No side-effect anxiety.

**consistency:**
This is where Tailwind genuinely wins over hand-written CSS.  text-sm is always 14px, space-y-4 is always 1rem — the UI stays consistent by default. With custom CSS, one developer writes margin: 12px, another writes margin: 0.75rem, and a third writes margin: 13px because they estimated it with their natural eyes.

**performance:**
Most Tailwind projects ship smaller stylesheets than traditionally written ones. The browser also benefits because there's no cascade complexity from deeply nested selectors.


# CLASS 09

## Theory

### Questuion 1

**Tailwind CSS Breakpoint System**

Tailwind CSS breakpoints are defined as minimum widths, meaning a utility applies from that screen size and above.

**md:**
md: replace media queries and work on screens 768px and above.

**custom breakpoint for 1200px**
`<p class="xl:text-lg">Hello</p>`



### Questuion 2
**Arbitrary Values**
Arbitrary values let you use any CSS value that isn't in Tailwind CSS default style, by wrapping it in square brackets [].


Use Arbitary Values when declaring One-off, unique values
Extend config when Value is reused across the project.












# CLASS 10


## Theory

###  Question 1 

**let:** is a Java Script variables that has a block scope and can be reassigned. let is hoisted but not initialized

**const:** const is a Java Script variable that can't be reassigned. Example; const name = 'Awwal'
name can't be assigned to other variables again.
 const is also hoisted but not initialized.

const only locks the binding and not the value itself. So this helps it not to prevent mutuation. Objects and Arrays are stored by reference, so their contents can still change.

**var** is a function scope and it's outdated in java scripts nowadays , although it can be reassigned but it's absolutely outdated.

### Question 2

**Temporal Dead Zone**

The TDZ is the period between when a let or const variable is hoisted and when it is actually initialized in the code.
**Example:**
function getDiscount(price) {
  console.log(discount);  // this particular line is too early and it will log out error
  let discount = price * 0.1;
  return price - discount;
}


## PRODUCT THINKING

 **Display Value:** 
        let should be use, because it changes every time user presses a key.

**operator:**
        let should be used, because it updates when the user selects a new operator.

**previous operand** 
        let should be used also, because it get replaced after each operation.




