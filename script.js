const input = document.getElementById("terminalInput");
const output = document.getElementById("terminalOutput");

const database = {
  "scarlet" : "CAPTAIN SCARLET<BR/> STATUS: TEMPORARILY DEAD  --  LOCATION: CLOUDBASE",
  "captain scarlet" : "CAPTAIN SCARLET<BR/> STATUS: TEMPORARILY DEAD  --  LOCATION: CLOUDBASE<BR/><BR/> PRIVATE MESSAGE: 72 HOURS AGO<BR/> 'SIG. I really appreciate that, Seymour. Goodnight.'",
  "blue": "CAPTAIN BLUE<BR/> STATUS: ON STANDBY  --  LOCATION: LONDON",
  "captain blue": "CAPTAIN BLUE<BR/> STATUS: ON STANDBY  --  LOCATION: LONDON<BR/><BR/> PRIVATE MESSAGE: 354 HOURS AGO<BR/> 'are you sure?'",
  "magenta": "CAPTAIN MAGENTA<BR/> STATUS: UNDERCOVER  --  LOCATION: LONDON",
  "captain magenta": "CAPTAIN MAGENTA<BR/> STATUS: UNDERCOVER  --  LOCATION: LONDON<BR/><BR/> PRIVATE MESSAGE: 15 HOURS AGO<BR/> 'IT'S WORKING! PERFECT! THANK YOU'",
  "captain grey": "NO DATA AVAILABLE<BR/><BR/> PRIVATE MESSAGE: 2 HOURS AGO<BR/> 'Are you seeing this? Please tell me you are seeing this. SPECTRUM IS RED!!'",
  "captain ochre": "NO DATA AVAILABLE<BR><BR> PRIVATE MESSAGE: 97 HOURS AGO<BR/> 'Ah I remember that! Yeah, I still can't believe they let me get away with it. Sorry about framing you but you took it like a champ anyways so :) thanks'",
  "destiny": "DESTINY ANGEL<BR/> STATUS: ON DUTY  --  LOCATION: LONDON",
  "harmony": "HARMONY ANGEL<BR/> STATUS: ON PATROL  --  LOCATION: LONDON",
  "symphony": "SYMPHONY ANGEL<BR/> STATUS: ON DUTY  --  LOCATION: INDIAN OCEAN",
  "rhapsody": "RHAPSODY ANGEL<BR/> STATUS: ON DUTY  --  LOCATION: INDIAN OCEAN",
  "melody": "MELODY ANGEL<BR/> STATUS: STANDBY  --  LOCATION: CLOUDBASE",
  "captain": "THE SPECTRUM CAPTAINS<BR/> PERSONNELS OF SPECTRUM WORKING AS PRIVATE SPECIAL FORCES. TYPICALLY GROUND FORCE HOWEVER OPERATION STYLES MAY VARY DEPENDANT ON SPECIALTIES.",
  "angel": "THE SPECTRUM ANGELS<BR/> PERSONNELS OF SPECTRUM THAT MAKE UP CLOUDBASE'S AIRFORCE FLEET.",
  "spectrum": "SPECTRUM: GLOBAL SECURITY ORGANISATION",
  "cloudbase": "CLOUDBASE: STRATOSPHERIC HQ OF SPECTRUM",
  "green": "LIEUTENANT GREEN > USER<BR/> STATUS: ON DUTY  -- LOCATION: CLOUDBASE<BR/> SEE 'ME' FOR FURTHER INFORMATION<BR/>",
  "me": "STATUS: ON DUTY  --  LOCATION: CLOUDBASE <BR/><BR/>LAST HEALTH LOGS:<BR/> - SLEEP ROOM > 31 HOURS AGO > DURATION 3 HOURS<BR/> - SLEEP ROOM > 56 HOURS AGO > DURATION 1.3 HOURS<BR/> - MEDBAY > 58 HOURS AGO > PRESCRIPTIONS PRINTED ON PAPER - SEE MEDBAY LOGS FOR RESULTS<BR/>",
  "medbay": "CLOUDBASE MEDBAY <BR/><BR/> STATUS: ACTIVE<BR/> PERSONNEL:<BR> - DOCTOR FAWN<BR/> - CAPTAIN SCARLET<BR/><BR/> SEE MEDBAY LOGS FOR CLASSIFIED INFORMATION.<BR/>",
  "medbay logs": "LOGS: PERMISSION DENIED",
  "sudo medbay logs": "[sudo] PASSWORD FOR LtG: ",
  "fawn": "DOCTOR FAWN<BR/> STATUS: ON DUTY  --  LOCATION: CLOUDBASE",
  "doctor fawn": "DOCTOR FAWN<BR/> STATUS: ON DUTY  --  LOCATION: CLOUDBASE MEDBAY<BR/><BR/> PRIVATE MESSAGE: 13 HOURS AGO<BR/> 'Seymour, get some real sleep in a real bed or I will show the Colonel the Sleep Room logs from the past week.'",
  "sleep room": "CLOUDBASE SLEEPROOM <BR/><BR/> STATUS: VACANT<BR/> PERSONNEL: NONE <BR/><BR/> SEE SLEEP ROOM LOGS FOR CLASSIFIED INFORMATION.<BR/>",
  "sleep room logs": "LOGS: PERMISSION DENIED",
  "sudo sleep room logs": "[sudo] PASSWORD FOR LtG: ",
  "sudo medbay logs": "[sudo] PASSWORD FOR LtG: ",
  "greenspassword": "MEDBAY LOGS HERE I NEED TO EDIT THIS PLEASE SOMEONE REMIND ME",
  "mysterons": "THREAT LEVEL: HIGHLY DANGEROUS  --  SEE 'DEF MYSTERONS' FOR FURTHER DESCRIPTION",
  "def mysterons": "THE MYSTERONS <BR/><BR/> SWORN ENEMIES OF EARTH. POSSESSING THE ABILITES TO RECREATE AN EXACT LIKENESS OF AN OBJECT OR PERSON.<BR/> APPEARANCE: UNKNOWN<BR/> BIOLOGY: MARTIAN<BR/> THREAT LEVEL: HIGH",
  "threat": "THIS IS THE VOICE OF THE MYSTERONS. WE KNOW YOU CAN HEAR US EARTHMEN..."
};

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const answer = input.value;
    const command = answer.trim().toLowerCase();

    output.innerHTML += `<p>&gt; LtG@Control2\$ ${answer}</p>`;

    if (database[command]) {
      var i = 0;
      var txt = output.innerHTML += `<p>${database[command]}</p>`;
      var speed = 50; /* The speed/duration of the effect in milliseconds */

      function typeWriter() {
        if (i < txt.length) {
          document.getElementById("demo").innerHTML += txt.charAt(i);
          i++;
          setTimeout(typeWriter, speed);
           
        }
      } 
    }
    else {
      output.innerHTML += `<p>NO DATA FOUND</p>`;
    }

    output.scrollTop = output.scrollHeight;
    input.value = "";
  }
});
