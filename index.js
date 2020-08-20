const { Plugin } = require('powercord/entities');

const url_base = "https://latex.codecogs.com/png.latex?";
const preamble = "\\dpi{300} \\fn_cs \\tiny \\color[RGB]{114, 137, 218}";
const command = 'latex'

module.exports = class LatexToImage extends Plugin {
  startPlugin() {
    powercord.api.commands.registerCommand({
      command,
      description: 'Sends an image link to the compiled LaTeX code',
      usage: '{c} [ latex input ]',
      executor: (args) => ({
        send: true,
        result:
          url_base + escape(preamble + args.join(' ')).replace(/\+/g, '&plus;'),
      }),
    })
  }

  pluginWillUnload() {
    powercord.api.commands.unregisterCommand(command)
  }
};
