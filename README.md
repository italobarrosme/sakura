<p align="center">
  <a href="" rel="noopener">
 <img width=90px height=90px src="./public/logo.png" alt="logo"></a>
</p>

<h3 align="center">NEXTJS Boilerplate</h3>

## 📝 Table of Contents

- [What does have?](#doeshave)
- [Structured](#structured)
- [Getting Started](#getting_started)

## 📦 What does the project have? <a name="doeshave">

- The project uses Next.js version 14 and the App Router.
- For tests [Vitest](https://vitest.dev/guide/) are implemented using @testing-library
- For storage, [zustend](https://next-auth.js.org/) is used, with the "loading" component as an example of usage.
- For Auth [Nextauth](https://next-auth.js.org/), provider google like example
- Prettier eslint and lintstaged for organization code

- Husky has also been implemented for:
  Commitlint
  Pre-commit with lint-staged and Prettier
  Pre-push running lint-staged tests and build
  Vitest tests are implemented using @testing-library.

- The next-config includes PWA configurations.
- Image permissions are set up, for example, for Google authentication.

- [usehook-ts](https://usehooks-ts.com/) is also installed.
- For visual designer using [tailwind](https://tailwindcss.com/docs/width)

#### 🖌️ Tailwind config has been implemented with this preset:

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,,scss}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      mono: ['Fira Code'],
    },
    extend: {
      colors: {
        brand: {
          dark: '#030826',
          light: '#fffef3',
          primary: '#F27141',
          secondary: '#F28B30',
          soft: '#F28D77',
          accent: '#F24C27',
        },
        transparent: 'transparent',
      },
      backgroundImage: {
        'effect-granula': "url('/effectgranula.png')",
      },
      minHeight: {
        'screen-nav': 'calc(100vh - 5rem)',
      },
    },
  },
}
```

## 🔦 Instructions for installing the boilerplate.

```
npx create-next-app@latest -e https://github.com/italobarrosme/nezuko
```

Run

```
npm run dev
```

.env

```
NODE_ENV=production
API_URL='',
JWT_SECRET='',
NEXTAUTH_URL=http://localhost:3000

GOOGLE_CLIENT_ID=''
GOOGLE_CLIENT_SECRET='
NEXTAUTH_SECRET=''
```
