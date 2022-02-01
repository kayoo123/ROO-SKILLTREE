document.write(`
    <h1><img src="img/3.gif" alt="Heal" style="width:50px;height:50px;display:inline;">&nbsp; Heal</h1>
    <fieldset><legend>[Support] [Holy]</legend>
        <p> 
            Restores HP equals <b>(base Level + INT) * 0.6  * Skill Level + (0.5 + Skill Level /20) * Magic ATK + 70</b> to friendly targets and yourself.
        </p>
        <small>
            Your healing effect and the target's healing receiving effect will affect healing amount. <br />
            30% of your Magic damage bonus will convert to healing bonuses and deal damage against Undead monsters / Valid targets, including allied targets and monsters.
        </small>
        <hr>
        <p> 
            - Cast Time: (0,20s + XXs) <br />
            - Cooldown: Neutral <br />
            - SP Cost: 11 <br />
            - Global Recovery: 0.5s
        </p>
    </fieldset>
`);