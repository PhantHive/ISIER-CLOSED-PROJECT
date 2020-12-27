module.exports = (client) => {
    let prompt = process.openStdin()
    prompt.addListener("data", info => {
        //.trim =>  renvoi le string (chaine de charactere) sans blanc au debut ou a la fin, le split / +/g permet de supprimer tout les espaces, meme occurent.
        //split method permet de convertir de string a array(tableau)
        let x = info.toString().trim().split(/ +/g);
        client.channels.get("754827231783682059").send(x.join()); //join permet de convertir l array a un string lors de l envoi dans le channel discord des infos  console
    });
}