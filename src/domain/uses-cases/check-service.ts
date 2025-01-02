export interface CheckServiceUseCases {
    start : (url:string)=> Promise <boolean>
}


export class CheckService implements CheckServiceUseCases {
    public async start ( url:string ){
        try {
            const res = await fetch(url)
            if(!res.ok){
                throw new Error('UPs, algo salio muy mal')
            }
            const fecha = new Date()
            console.log(url,"Servidor esta Ok!",fecha)
            return true
        } catch (error) {
            console.log("Servidor Caido!",error.message)
            return false
        }
    }
}