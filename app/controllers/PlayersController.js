import { AppState } from "../AppState.js"


function _drawPlayers(){
    const Players = AppState.Players
    let content = ''
    Players.forEach(player => content += player.playerCard)
    setHTML('Players', content)
    // apparently setHTML is not a command(?) according to my error message. All TAs are in a meeting so I don't know what to do to fix this. About to throw in the towel and call it a day, having not learned anything aside from new techniques to pull my hair out
}

export class PlayersController {
    constructor(){
        _drawPlayers()
}}