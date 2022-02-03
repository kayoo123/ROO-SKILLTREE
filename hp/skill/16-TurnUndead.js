document.write(`
    <h1><img src="img/16.gif" alt="TurnUndead" style="width:40px;height:40px;display:inline;">&nbsp; Turn Undead</h1>
    <fieldset><legend>[Magic Spell] [Holy]</legend>
        <p> 
            Cleanses the Undead monsters. <br />
            It has a <b>2/4/6/8/10/12/14/16/18/20</b> % base chance to kill the target instantly. <br />
            If the target survives, deal 50% Holy Magic damage to them.
        </p>
        <small>
            Applies to Undead monsters only. <br />
            The actual probability is subject to LUK and INT. <br />
            Instant kill effect doesn't apply to Boss-type monsters.
        </small>
        <hr>
        <p> 
            <table>
                <tr>
                    <td>Cast Time:</td>
                    <td>(0.20s + XXs)</td>
                </tr>
                <tr>
                    <td>Cooldown:</td>
                    <td>Neutral</td>
                </tr>
                <tr>
                    <td>SP Cost:</td>
                    <td>10/12/14/16/18/20/22/24/26/28/30</td>
                </tr>
                <tr>
                    <td>Global Recovery:</td>
                    <td>2.0s</td>
                </tr>
            </table>
        </p>
    </fieldset>
    <p style="color:#FF0000";>
        Prerequisite skill: Priest Resurrection Lv.1
    </p>
`);
