const { execSync } = require('child_process')

function grabVersionFromGit() {
  const cmd = 'git describe --tags --abbrev=0'
  try {
    const version = execSync(cmd)
    return version.toString().replace('\n', '')
  } catch (e) {
    return `0.0.0`
  }
}

console.log(grabVersionFromGit())
