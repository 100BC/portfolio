# Portfolio

This website was built with ReactJS to host personal information for potential employers.

## Getting Started

This project uses [yarn](https://classic.yarnpkg.com/en/)

Run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Linters & Formatter

```bash
# You can use VSCode ESLint, and StyleLint Extensions for automatic Linting

yarn eslint . --ext .js,.jsx,.ts,.tsx

yarn stylelint "styles/**/*.scss"
```

### Formatting

```bash
# auto fixes the files according to the rules

# can enable auto format for Prettier via VSCode Extensions
yarn prettier --write .

# Prettier will not reorder based on rules
yarn stylelint "styles/**/*.scss" --fix
```
