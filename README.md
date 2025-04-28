

# Markdown Previewer

This is one of the five projects required to complete the **freeCodeCamp Front End Development Libraries Certification**.

The goal of this project is to build a Markdown editor and previewer that converts user-input Markdown text into rendered HTML in real-time, following the [CommonMark](https://commonmark.org/) specification with support for line breaks.

---

## Project Features

- Live preview of Markdown text as you type.
- Supports headers, links, code blocks, lists, bold, italic, blockquotes, images, and more.
- Follows CommonMark and GitHub Flavored Markdown standards.
- Responsive and user-friendly interface.
- Built using **React** and styled with **Bootstrap** and custom CSS.

---

## Built With

- [React](https://react.dev/)
- [Bootstrap](https://getbootstrap.com/)
- [Marked](https://marked.js.org/) (for parsing Markdown)
- [DOMPurify](https://github.com/cure53/DOMPurify) (for sanitizing HTML)

---

## Getting Started

To run the project locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/markdown-previewer.git
   cd markdown-previewer
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

---

## User Stories (from freeCodeCamp)

- I can see a `textarea` element with an `id="editor"`.
- I can see an element with an `id="preview"`.
- When I enter text into the `textarea`, the `#preview` element is updated as I type.
- When I enter GitHub-flavored Markdown into the `textarea`, the text is rendered correctly into HTML.
- I can see the Markdown syntax correctly interpreted for:
  - Headers
  - Paragraphs
  - Links
  - Inline code
  - Code blocks
  - Lists
  - Blockquotes
  - Bold and italic text
  - Images
- My Markdown previewer interprets carriage returns and renders them as `<br>` (line break) elements.

---


## Live Demo

You can view a live version of the project here:  
**[Live Demo Link](http://markdown-previewer-app-tau.vercel.app)**

---

## Acknowledgments

- Thanks to [freeCodeCamp](https://www.freecodecamp.org/) for providing the project specifications.
- Special thanks to the creators of **Marked** and **DOMPurify** libraries.

