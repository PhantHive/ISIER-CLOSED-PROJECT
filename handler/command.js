const { readdirSync } = require("fs");

const ascii = require("ascii-table");

let table = new ascii("Commands"); //creation de la table ascii qui contiendras la liste de nos commandes
table.setHeading("Command", "Loaded commands");

module.exports = (client) => {

    readdirSync('./Commands/').forEach(dir => {
        //la constante commands correspond a chacune des commandes, donc chaque fichier .js contenu dans chaque repertoir contenu dans Commands
        const commands = readdirSync(`./Commands/${dir}/`).filter(file => file.endsWith(".js"));

        //pour chaque commande .js individuelle de l enssemble des commandes .js
        for (let file of commands) {
            let pull = require(`../Commands/${dir}/${file}`);

            //on associe maintenant un nom a une information envoyee (pull); nom associe: pull.name

            if(pull.name) { //si il y a un nom associe alors
                client.commands.set(pull.name, pull); //on associe une commande a un nom qui sera alors compris par le client.
                table.addRow(file, '✅') //on affiche la commande dans la table creer avant, qui affichera donc dans la console sous un joli tableau le nom du fichier commande fonctionnel
            }

            else { //sinon le fichier a pas charger car il manque un nom, il ne peux donc etre compris par le client
                table.addRow(file, '❌: Name missing');
                continue; //mais on ne stop pas le bon fonctionnement du bot pour autant
            }

            //ajoute des alias est important, cela permet d'executer une commande avec d'autre noms que celui de base, il est important que les alias soit mis dans un tableau
            //lors de la creation de nos commandes, pour pouvoir separer les differents alias possible et pouvoir ecrire la condition suivant:
            if (pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => client.aliases.set(alias, pull.name)); //si nos alias sont bien ecrits  et dispo
            //alors on associe les alias au nom (pull.name)
        }

    });
    console.log(table.toString());

}