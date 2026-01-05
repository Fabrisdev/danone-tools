import args from 'args'

args.option('register', 'Register the app on your context menu')
const flags = args.parse(process.argv)
if(flags.register) {
  register()
  process.exit(0)
}

function register() {

}