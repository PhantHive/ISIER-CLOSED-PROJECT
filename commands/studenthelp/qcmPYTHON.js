const Discord = require('discord.js');

module.exports =  {
    name:"pyCo",
    aliases: ["python", "pyco", "pyCO"],
    category:"studenthelp",
    description:"give few python knowledge",
    timeout: 240000,
    usage:"pyCo",
    run: async(client,message) => {
        const emoji = client.emojis.cache.find(emoji => emoji.name === "smirk_cat");
        message.channel.send(`Bienvenue dans le programme de revision de ce premier qcm ${emoji}\n\n
          __***I-Les Types***__\n\n
          **type int**: entier par exemple 10,25,38 etc\n
          **type string**: character ou chaine de charactere par exemple 'a' ou 'je veux manger'\n
          **type float**: nombre decimaux exemple 12.3\n
          **type bool**: en reference a notre chere algebre de bool exemple: true /false vrai/faux\n\n
          
          **__I-Les operateurs__**\n\n
          **\*\*** : il s'agit d'une puissance par exemple (2+2)**2 = 4**2 = 4*4 = 16\n
          **\*** : il peux avoir 2 utilites: multiplication ou bien concatenation de string par exemple "oh"*3 = "ohohoh"\n
          **+** : il peux avoir 2 utilites: addition ou concatenation par exemple: "a" +"b" = "ab"\n
          **/** : il sert a faire une division de type complete (3/2 = 1.5)\n
          **//** : il sert a faire une division entiere en gros recuperer juste la partie entiere (3//2 = 1)\n
          **%** : il sert a faire une division ou l'on souhaite recuperer que le reste par exemple 3/2 = 0.5\n\n
          
          **__III-L'indentation__** \n\n
          Il est important de noter que en python une indentation correspond a 4 espace (d'apres vos profs il est interdit d'utiliser les tabulations (touche tab de votre clavier)\n
          je tiens a vous rassurer n'importe quel bonne IDE a une tabulation par default de 4 espaces quand il s'agit de python (UTILISER PYCHARM LA BASE QUOI EVITEZ ANACONDA DE MES COUILLES)\n\n
          
          **__IV-NOMMAGE DE VOS FONCTIONS__**\n\n
          Sachez que vous allez etre amene a creer des fonctions, NON SERIEUX JAMMY??? du type :\n
           def maFONCTION():\n
           voir tutoriel /py1 ; donc le nommage de votre fonction est important. PAS D ESPACE, Si le nom est compose 2 possibilite: utiliser underscorde "_" (tiret du 8 comme dit les Jeunes) ou bien\n
           mettez une majuscule au mot qui suit exemple: jeSuis. EVITEZ EGALEMENT DE METTRE UNE LETTRE MAJUSCULE A LA PREMIERE LETTRE§!! ;) voila on devrait bien s'entendre ${emoji}\n\n
           
           **__V-LES COMMENTAIRES__**:\n\n
           
           2 possibilites pour faire des commentaires: le HASHTAG (alias diez) cette methode permet de faire un commentaire pour une seule ligne:\n
        `, "```py\n#CECI EST UN COMMENTAIRE EN PYTHON SUR UNE SEULE LIGNE WOOOOOW```",
            `\nla deuxieme methode permet de faire une sorte de \"block commentaire\" on utilisera donc 3 simple quote: **'** puis votre commentaire et vous refermez avec 3 simple quote de nouveau (marche aussi avec les 3 double quote **"** mais je trouve ca moins intelligent.\n\
            
            **__VI-Les BASES de nombres:__**:\n\n
            Je ne m'etalerait pas le sujet est un peu plus complexe que ce que l'on pourrait croire :p mais en gros si vous avez un code de ce type: \n
            0x42FF il'sagit d'un HexaCode. c'est de l'hexadecimal. on distingue 3 parties: **0** indique au compilateur que c'est un nombre; **x** indique que c'est la base 16: he**x**adecimal\n
            et enfin 42FF ce qui suit et notre nombre en hexadecimal. le 0 du debut sera toujours present et suivi de soit 'x' pour un hexadecimal, 'o' pour un octal, 'b' pour binaire etc\n\n
            
            **__VI-Variables en python: __**\n\n
            Tout d'abord CONGRATULATIONS pour avoir tout lu, c'est bientot la fin de ce guide QCM1 qui sera supprimer dans 7 jours.\n
            Python est un language de flemmard, bande de chanceux, qu'on vous souhaitez declarer une variable bah enfait elle s'autodeclare donc vous avez juste a lui donner un nom par exemple:\n
            `, "```py\na = 2546", `Ici **a** est le nom de votre variable qui est un entier (*int*): 2546\n\n
            
            **__VII-ALGO: __**\n\n
            Pusique askip on fait de l algorithmie mdrrrrrr (bon courage) petite revision: \n
            
            declarer une ***valeure entiere*** en algorithmie: **entier x**\n
            declarer une ***constante*** en algo: **NOM = \<votreValeur** exemple a = 12 ou a = "zoz"\n
            mettre une ***VALEUR*** dans une variable en algo: NOM <- votreValeur exemple NOM <- "zoz"\n
             A SAVOIR: vous pouvez mettre une CONSTANTE dans une VARIABLE mais PAS L INVERSE: maVariable <- maConstante\n
             Vous pouvez egalement mettre une variable dans une variable: maVariable <- mon autre variable\n\n
             
             Votre IPSA-BOT, merci de votre lecture. Vous pouvez contacter Zakaria en le tagant @phanthive..... si vous avez une question en rapport avec python ou l'algo (malheureusement je ne suis pas un monstre en algorithmie(par contre pour tout ce qui logique dans un code ca ne devrait pas me poser de probleme meme si je suis pas habituer a la syntaxe python)\n\n
             Bonne soiree :) `)
    }


};



