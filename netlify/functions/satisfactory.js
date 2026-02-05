const Gamedig = require("gamedig");

exports.handler = async () => {
  const start = Date.now();

  try {
    const state = await Gamedig.query({
      type: "satisfactory",
      host: "46.59.68.35",
      port: 8888
    });

    const ping = Date.now() - start;

    return {
      statusCode: 200,
      body: JSON.stringify({
        online: true,
        name: state.name,
        map: state.map,
        players: state.players.length,
        maxPlayers: state.maxplayers,
        playerList: state.players,
        ping: ping,
        uptime: state.raw?.rules?.UPTIME || null
      })
    };
  } catch (err) {
    return {
      statusCode: 200,
      body: JSON.stringify({
        online: false
      })
    };
  }
};
