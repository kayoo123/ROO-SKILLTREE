document.write(`
    <h1><img src="img/3.gif" alt="Heal" style="width:50px;height:50px;display:inline;">&nbsp; Heal</h1>
    <fieldset><legend>[Support] [Holy]</legend>
        <p> 
            Restores HP equals <b>(base Level + INT) * 0.6  * Skill Level + (0.5 + Skill Level /20) * Magic ATK + 25/30/35/40/45/50/55/60/65/70</b> to friendly targets and yourself.
        </p>
        <small>
            Your healing effect and the target's healing receiving effect will affect healing amount. <br />
            30% of your Magic damage bonus will convert to healing bonuses and deal damage against Undead monsters / Valid targets, including allied targets and monsters.
        </small>
        <hr>
        <p> 
            <table>
                <tr>
                    <td>Cast Time:</td>
                    <td>Neutral</td>
                </tr>
                <tr>
                    <td>Cooldown:</td>
                    <td>1.0s</td>
                </tr>
                <tr>
                    <td>SP Cost:</td>
                    <td>13/16/19/22/25/28/31/34/37/40</td>
                </tr>
                <tr>
                    <td>Global Recovery:</td>
                    <td>1.0s</td>
                </tr>
            </table>
        </p>
    </fieldset>
`);