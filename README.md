# Komunalka Kharkiv

Web portal and desktop application for submitting utility meter readings in Kharkiv.

## Development

### Prerequisites
- Node.js 18.17 or later
- Windows 10/11

### Setup

1. Clone the repository:
   ```powershell
   git clone https://github.com/Alexey-Borzenkov/komunalka-kharkiv.git
   cd komunalka-kharkiv
   ```

2. Install dependencies:
   ```powershell
   npm install
   ```

3. Start development server:
   ```powershell
   npm run dev
   ```

Visit `http://localhost:3000` to view the application.

## Deployment

The application is automatically deployed to GitHub Pages when changes are pushed to the main branch.

### Manual Deployment

1. Build the application:
   ```powershell
   npm run build
   ```

2. The static files will be generated in the `out` directory.

3. Push changes to GitHub:
   ```powershell
   git add .
   git commit -m "Your commit message"
   git push
   ```

The GitHub Actions workflow will automatically deploy the changes to:
https://alexey-borzenkov.github.io/komunalka-kharkiv/

## License

MIT License
