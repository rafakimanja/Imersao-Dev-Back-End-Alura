import conectarAoBanco from '../config/dbConfig.js'

const conexao = await conectarAoBanco(process.env.URL_CONEXAO_BD)

export async function getTodosPosts(){
    const db = conexao.db("Imersao-Instabytes")
    const colecao = db.collection("Posts")
    return colecao.find().toArray()
}

export async function criarPost(novoPost) {
    const db = conexao.db("Imersao-Instabytes")
    const colecao = db.collection("Posts")
    return colecao.insertOne(novoPost)
}

export async function atualizarPost(id, novoPost) {
    const db = conexao.db("Imersao-Instabytes")
    const colecao = db.collection("Posts")
    const objID = ObjectId.createFromHexString(id)
    return colecao.updateOne({_id: newObjectId(objID)}, {$set: novoPost})
}