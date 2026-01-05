import args from 'args'

args.option('register', 'Register the app on your context menu')
args.option('unregister', "Removes the app from your context menu")
const flags = args.parse(process.argv)

if(flags.register) {
  register()
  process.exit(0)
}

if(flags.unregister) {
  unregister()
  process.exit(0)
}

console.error('No options were supplied. Please check --help to see available commands.')
process.exit(1)

function register() {

  console.log('Registered')
}

function unregister() {

}
