const resolvers = {
    Query: {
        hello: (_,args)=> `hola ${args.name}`,
        fecha: ()=> "hoy"
    }
}

module.exports = resolvers