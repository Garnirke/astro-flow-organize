
# AstroNote

AstroNote is a modern productivity app that helps individuals and teams organize notes, tasks, and schedules in one place. Designed with a clean, futuristic UI and soft purple accents, AstroNote empowers you to think better and collaborate smarter.

## ✨ Purpose

AstroNote brings together notes, tasks, schedules, and collaboration in a single platform. Effortlessly manage personal and team workflows with folders, tags, voice memos, media organization, and robust permissions.

## 🚀 Features

- **Organize effortlessly:** Folder & tag management, iOS-inspired lists  
- **Notes, voice memos, images:** Keep everything in one place  
- **Smart collaboration:** Team permissions, task assignments, comments  
- **Secure:** Global security, 3D spinning globe visualization, API & data protection  
- **Mobile friendly:** Responsive UI, mobile mockups  
- **Minimalist analytics dashboard**

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- npm v9+ or yarn/pnpm

### Setup

Clone the repository:
```sh
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
```

Install dependencies:
```sh
npm install
# or yarn install
```

Start the development server:
```sh
npm run dev
# or yarn dev
```

### Build for production

```sh
npm run build
npm run preview
```

### Running Tests

Unit and integration tests are powered by [Vitest](https://vitest.dev/):

```sh
npm run test
```

## 🧪 Testing Guidelines

- All tests live in the `src/__tests__` directory and use the `.test.ts(x)` naming convention.
- Use [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for component behavior.
- Place integration/end-to-end tests in `src/__tests__/integration`, if needed.

## 🤝 Contributing

Thank you for considering contributing! To help us maintain high quality, follow these simple guidelines:

1. Fork this repo and create a feature branch.
2. Write/modify code following our style and structure.
3. Include tests if applicable.
4. Run `npm run test` and ensure all checks pass.
5. Open a pull request with clear description and any relevant screenshots.

#### Issue and PR templates

We encourage detailed [issues](#) (bug reports/feature requests) and pull requests. Please fill out the provided template for clarity.

## 📖 Usage

After registration/login, access the dashboard to create folders, write notes, record voice memos, or assign tasks. See the demo for team workflows.

- To switch between personal and team views, use the sidebar folder navigation.
- Click "New Note" to create rich text notes or attach media/voice.

## ⚡ Roadmap

- [x] Landing page and marketing site
- [x] Core dashboard: notes, folders, tasks, analytics
- [ ] Real-time team collaboration
- [ ] Calendar integration & smart reminders
- [ ] Mobile app (iOS/Android)
- [ ] Plugin/API marketplace

## 💡 Accessibility

AstroNote is designed to meet accessibility standards (WCAG 2.1). Please open an issue if you encounter barriers.

## 🛡️ Security

- Uses Supabase for authentication and backend – keys are managed through environment variables.
- Follows best practices: never commit sensitive credentials.  
- For further improvements: implement granular API tokens, review 3rd-party dependencies, and enable HTTPS in production.

## 🌎 Community

Join our Discord community at [https://discord.gg/lovable](https://discord.gg/lovable)  
Have a feature idea? Open an [issue](#)!

---

## License

MIT

