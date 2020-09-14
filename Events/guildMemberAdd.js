const { MessageAttachment } = require('discord.js')
const Canvas = require('canvas')
//https://imgur.com/c67FNra.png

const applyText = (canvas, text) => {
const ctx = canvas.getContext('2d');

	// Declare a base size of the font
	let fontSize = 65;
  
	do {
		// Assign the font to the context and decrement it so it can be measured again
		ctx.font = `italic bold ${fontSize -= 10}px Tahoma`;
		// Compare pixel width of the text to the canvas minus the approximate avatar size
	} while (ctx.measureText(text).width > canvas.width - 300);

	// Return the result to use in the actual canvas
	return ctx.font;
};

module.exports = async (client, member, message) => {

    
      const canvas = Canvas.createCanvas(800, 450);
      const ctx = canvas.getContext('2d');
  
      const background = await Canvas.loadImage('./image/boeing.jpg');
      ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  
      ctx.strokeStyle = 'red';
	    ctx.strokeRect(8, 11, 780, 430);
      
      ctx.font = 'italic bold 65px Tahoma ';
	  ctx.fillStyle = '#ffffff';
      ctx.strokeStyle= "black"
      ctx.lineWidth = 5;
      ctx.shadowColor="black";
      ctx.shadowBlur=15;
      ctx.strokeText('Bienvenue à toi,', 85, 320);
      ctx.fillText('Bienvenue à toi,', 85, 320);
    
      // Select the font size and type from one of the natively available fonts
      ctx.font = applyText(canvas, `${member.displayName}!`);
      // Select the style that will be used to fill the text in
      ctx.fillStyle = '#ff8100';
       // Actually fill the text with a solid color
      ctx.strokeStyle= "black"
      ctx.lineWidth = 2;
      ctx.shadowColor="black";
      ctx.shadowBlur=20;
      ctx.strokeText(`${member.user.tag}`, 145, 380)
      ctx.fillText(`${member.user.tag}`, 145, 380);

      ctx.font = 'italic  25px Tahoma ';
	  ctx.fillStyle = '#000000';
      ctx.strokeStyle= "black"
      ctx.lineWidth = 2;
      ctx.shadowColor="white";
      ctx.shadowBlur=15;
      ctx.strokeText('Information en message privé', 355, 420);
      ctx.fillText('Information en message privé', 355, 420);

      ctx.font = 'italic  30px Tahoma ';
	  ctx.fillStyle = '#000000';
      ctx.strokeStyle= "black"
      ctx.lineWidth = 3;
      ctx.shadowColor="white";
      ctx.shadowBlur=5;
      ctx.strokeText(`${member.guild.memberCount} members`, 30, 55);
      ctx.fillText(`${member.guild.memberCount} members`, 30, 55);
  
      ctx.beginPath();
      ctx.strokeStyle= "red";
      ctx.lineWidth = 15;
      ctx.arc(400, 140, 100, 0, Math.PI * 2, true);
      ctx.stroke();
      ctx.closePath();
      ctx.clip();
      

      const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
      ctx.drawImage(avatar, 300, 40, 200, 200);
      const attachment = new MessageAttachment(canvas.toBuffer(), 'welcome-image.png');
  
      client.channels.cache.get('614453860831854643').send(attachment).then(
          member.createDM().then(
              channel => {
                  channel.send(`Salut, bienvenue sur le discord  **${member.guild.name}** 😉\n` +
                      '\n' +
                      'Pour avoir accès à l\'intégralité du serveur accepte le réglement ici ---> <#755084204353781910> \n' +
                      '\n' +
                      '                                                 ●¸.•*¨Ƹ̵̡Ӝ̵̨̄Ʒ¨*•.¸●\n' +
                      '\n' 
                    );

          }).catch(console.error))
     
};