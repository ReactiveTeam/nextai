// update license year and version
var fs = require('fs')
module.exports = function() {
  var year = (new Date).getFullYear()
  var version = require('./package.json').version
  // LICENSE
  var license = fs.readFileSync('LICENSE', 'utf-8')
  .replace(/\(c\) ([0-9]+)/, `(c) ${year}`)
  .replace(/NEXTAI \(v(.*)\)/, `NEXTAI (v${version})`)
  fs.writeFileSync('LICENSE', license)
  // bower.json
  var bower = fs.readFileSync('bower.json', 'utf-8')
  .replace(/\"version\": \"(.*)\",/, `"version": "${version}",`)
  fs.writeFileSync('bower.json', bower)
  // README.md
  var readme = fs.readFileSync('README.md', 'utf-8')
  .replace(/ajax\/libs\/nextai\/(.*)\/nextai.js/, `ajax/libs/nextai/${version}/nextai.js`)
  fs.writeFileSync('README.md', readme)
  // return license for dist banner
  return license
}
