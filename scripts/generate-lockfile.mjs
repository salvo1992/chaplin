import { execSync } from 'child_process'

try {
  console.log('Generating pnpm lockfile...')
  execSync('pnpm install --no-frozen-lockfile', {
    cwd: '/vercel/share/v0-project',
    stdio: 'inherit',
    timeout: 120000
  })
  console.log('Lockfile generated successfully!')
} catch (error) {
  console.error('Error:', error.message)
  process.exit(1)
}
