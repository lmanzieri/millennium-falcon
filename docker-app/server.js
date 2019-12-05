var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Millenium Falcon\n' +
  '@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n' +
  '@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&*/&&&%*.@/#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n' +
  '@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%#&&###,,,,(/*//(**@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n' +
  '@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@.&@@&%#(/####(#,.(##,,,,,,,(*(/////*(,@@@@@@@@@@@@@@@@@@@@@@@@@@@\n' +
  '@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#*/%%%%%%##%%%((,,(&/,,,,,,,,,,,////*...**//%%%%%%#@@@@@@@@@@@@@@@@@@@@\n' +
  '@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@(.#%/, ..../#(##%%#*,,,,,,,,,,,,(#%##(#%*/(*****/*(/%%%%%%%%#@@@@@@@@@@@@@@@@@@\n' +
  '@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&(##**(/,..##&&(#(/((%&&&&&/#%%%%%%%%%(######%/.((/(((*(/%%%%%%%%%%/@@@@@@@@@@@@@@@@@\n' +
  '@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&(*,( ./(.,*/#&&&&&&##(##./(&&/*%%(%##%%%%%%%%%%%%%#(#(///*(%%%%%%%%%%%%&&*/@@@@@@@@@@@@@@\n' +
  '@@@@@@@@@@@@@@@@@@@@@@@@@##,,*#%/...,/((##((&&&&&&&#*,,#**((%%%%%%(#%#(%%%%%%%%%%%%%%%%%%%%%%%%%%%%(&&&&&#@@@@@@@@@@@@@\n' +
  '@@@@@@@@@@@@@@@@@@@@.*#*/,...//((%%%#(%*#%&&&&&&&%.*/*((%%%%#%%%%%(#%%(#%#(%%%%%%%%%%%%%%%(#%%%%%%&&&&&&#(%&@@@@@@@@@@@\n' +
  '@@@@@@@@@@@@@@@@@&#(,%%%(%%%%(#(#%(#&&#&*,****/#%%%((%%%%#%#(%(#((%%%%%(#%%(%%(%#((%%%%%(%%#(. (&.....&&##(%&&@@@@@@@@@\n' +
  '@@@@@@@@@@@@@@%#(,%%%%/,,(%#%%#%#%(&(,,,,,%%%%%%%%%%%(%&#(%%#(%%(%#(#(#%%%%((%%(%#(%%%%%%%%%(((&&#&&&&&&&&&&(&%@@@@@@@@\n' +
  '@@@@@@@@@@@.(**%*%%(/((/###&&&(%,,,,,,.(((((((%%%%%%%%%%%(%&&&(#****#(%#(#%%%%%%%%%%%%(%%(,,,,/&&&&&%......&&&#&%@@@@@@\n' +
  '@@@@@@@@%%(.%%%//(/.,(#.*&##,,,,,,,,..((((((/%%%%%%%%%%%%%%%%#&&&&((#%%%#(#%%%##%%%#(%%%%%(&&&&&&&&&&&%(#%&&&&&&%&#@@@@\n' +
  '@@@@@&#%%%%%%%%/,*%&&(%*,,,,,,,,,/..(((((((#%%(*.......(%%%%%%%###&%%#&%((%%%#(%#%%%%%%%/////*(#&&&&&&&&&&&&&&&&&%&&#@@\n' +
  '@@@@@@#%%%%%##/%*/%,,,,,,,,,,,**.,((((((((/#%#(,........%%(*******#%(&%%&%&&&#(%%%(%/*/**////#######((%&&&&&&&&*  (%&&#\n' +
  '@@@@@%%%%%#&##(,,,,,,,,,,,,/%..(((((((((/#%%%%%%*(#%%%%*****,(%%%%%%%%%%(#&&&&&&&&//////&@@@@@&(###########((%&&*/&(%%%\n' +
  '@@@@%%%%%%%&#(&,,,,,,,,,*%/.,((((((((((#%%%%%%%%%%%%%%%%%%%%%%%#,%%%(#&&&%,..*%%#%#/@@@@@@@@@@@@@@@@#(#####(/*###%%%%.(\n' +
  '@@@%%%%%%%#&&&&(,,,,,,#%,.*(((((((((((%%%%%%%%*/(%%%%%%%%%%(%%,...%&&&&&&&&&&&&&&&&&%#%@@@@@@@@@@@@@@@@@&(##/#####%..%%\n' +
  '@@@(%%%*%&&&&&&&#,,%%%/*%&&&%/((((((/%%%%%%%%%%%%%%%%%%%#((#%&&((&&&&&&%#%&&&&&&&&&&&&&&&&&&%#&@@@@@@@@@@@@@@@#(#/%#%@@\n' +
  '@@@@***%%#&&&&&&&#%%*&&&&%####(##/(#%%%%%%%%%%%%#(#%&&&%......&&&&&&& .....,&&&&&&&&&&&&&&&&#    ((&@@@@@@@@@@@@@@@@@@@\n' +
  '@@@@@**#(#%%&&&&&&(&&&&#&##&%...,..%*,*/(#####/%((%%%%&&&#####(&&&&&&&&#(#&&&&&&&&&&&&&&&&&&&&%(%%%%@@@@@@@@@@@@@@@@@@@\n' +
  '@@@@@#(%(%#%&&&&(&&&&&(%%&/.(/....,.#/*....**%%%####%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%#%%(..#@@@@@@@@@@@@@@@@@@\n' +
  '@@@@@@@@#(%%(&&&&&&&&#%&#.#(...#.,#.,(/.,..**,%#%%##%%%%%%##%%%%%%%(###%#%%%%%/(((((((%%%%%%%%%%%.%%#@@@@@@@@@@@@@@@@@@\n' +
  '@@@@@@@@@@#%%&&&#&&&&##%. ,..,%.(.*,*,. ....*,/######%%%%%%%(%%%%%%######%%%%%%%%%%%%%%%%%%%%%%(%#@@@@@@@@@@@@@@@@@@@@@\n' +
  '@@@@@@@@@@@@%@@@@@%&&&%&&&&&&%*%.,....%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n' +
  '@@@@@@@@@@@@@@@@@@@@@%%%&&&&&&&#&&%,/&%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n' +
  '@@@@@@@@@@@@@@@@@@@@@@@@@%%&&&&&&%#&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n' +
  '@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@')
})

app.listen(8080)
console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n' +
  '@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&*/&&&%*.@/#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n' +
  '@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@%#&&###,,,,(/*//(**@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n' +
  '@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@.&@@&%#(/####(#,.(##,,,,,,,(*(/////*(,@@@@@@@@@@@@@@@@@@@@@@@@@@@\n' +
  '@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#*/%%%%%%##%%%((,,(&/,,,,,,,,,,,////*...**//%%%%%%#@@@@@@@@@@@@@@@@@@@@\n' +
  '@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@(.#%/, ..../#(##%%#*,,,,,,,,,,,,(#%##(#%*/(*****/*(/%%%%%%%%#@@@@@@@@@@@@@@@@@@\n' +
  '@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&(##**(/,..##&&(#(/((%&&&&&/#%%%%%%%%%(######%/.((/(((*(/%%%%%%%%%%/@@@@@@@@@@@@@@@@@\n' +
  '@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&(*,( ./(.,*/#&&&&&&##(##./(&&/*%%(%##%%%%%%%%%%%%%#(#(///*(%%%%%%%%%%%%&&*/@@@@@@@@@@@@@@\n' +
  '@@@@@@@@@@@@@@@@@@@@@@@@@##,,*#%/...,/((##((&&&&&&&#*,,#**((%%%%%%(#%#(%%%%%%%%%%%%%%%%%%%%%%%%%%%%(&&&&&#@@@@@@@@@@@@@\n' +
  '@@@@@@@@@@@@@@@@@@@@.*#*/,...//((%%%#(%*#%&&&&&&&%.*/*((%%%%#%%%%%(#%%(#%#(%%%%%%%%%%%%%%%(#%%%%%%&&&&&&#(%&@@@@@@@@@@@\n' +
  '@@@@@@@@@@@@@@@@@&#(,%%%(%%%%(#(#%(#&&#&*,****/#%%%((%%%%#%#(%(#((%%%%%(#%%(%%(%#((%%%%%(%%#(. (&.....&&##(%&&@@@@@@@@@\n' +
  '@@@@@@@@@@@@@@%#(,%%%%/,,(%#%%#%#%(&(,,,,,%%%%%%%%%%%(%&#(%%#(%%(%#(#(#%%%%((%%(%#(%%%%%%%%%(((&&#&&&&&&&&&&(&%@@@@@@@@\n' +
  '@@@@@@@@@@@.(**%*%%(/((/###&&&(%,,,,,,.(((((((%%%%%%%%%%%(%&&&(#****#(%#(#%%%%%%%%%%%%(%%(,,,,/&&&&&%......&&&#&%@@@@@@\n' +
  '@@@@@@@@%%(.%%%//(/.,(#.*&##,,,,,,,,..((((((/%%%%%%%%%%%%%%%%#&&&&((#%%%#(#%%%##%%%#(%%%%%(&&&&&&&&&&&%(#%&&&&&&%&#@@@@\n' +
  '@@@@@&#%%%%%%%%/,*%&&(%*,,,,,,,,,/..(((((((#%%(*.......(%%%%%%%###&%%#&%((%%%#(%#%%%%%%%/////*(#&&&&&&&&&&&&&&&&&%&&#@@\n' +
  '@@@@@@#%%%%%##/%*/%,,,,,,,,,,,**.,((((((((/#%#(,........%%(*******#%(&%%&%&&&#(%%%(%/*/**////#######((%&&&&&&&&*  (%&&#\n' +
  '@@@@@%%%%%#&##(,,,,,,,,,,,,/%..(((((((((/#%%%%%%*(#%%%%*****,(%%%%%%%%%%(#&&&&&&&&//////&@@@@@&(###########((%&&*/&(%%%\n' +
  '@@@@%%%%%%%&#(&,,,,,,,,,*%/.,((((((((((#%%%%%%%%%%%%%%%%%%%%%%%#,%%%(#&&&%,..*%%#%#/@@@@@@@@@@@@@@@@#(#####(/*###%%%%.(\n' +
  '@@@%%%%%%%#&&&&(,,,,,,#%,.*(((((((((((%%%%%%%%*/(%%%%%%%%%%(%%,...%&&&&&&&&&&&&&&&&&%#%@@@@@@@@@@@@@@@@@&(##/#####%..%%\n' +
  '@@@(%%%*%&&&&&&&#,,%%%/*%&&&%/((((((/%%%%%%%%%%%%%%%%%%%#((#%&&((&&&&&&%#%&&&&&&&&&&&&&&&&&&%#&@@@@@@@@@@@@@@@#(#/%#%@@\n' +
  '@@@@***%%#&&&&&&&#%%*&&&&%####(##/(#%%%%%%%%%%%%#(#%&&&%......&&&&&&& .....,&&&&&&&&&&&&&&&&#    ((&@@@@@@@@@@@@@@@@@@@\n' +
  '@@@@@**#(#%%&&&&&&(&&&&#&##&%...,..%*,*/(#####/%((%%%%&&&#####(&&&&&&&&#(#&&&&&&&&&&&&&&&&&&&&%(%%%%@@@@@@@@@@@@@@@@@@@\n' +
  '@@@@@#(%(%#%&&&&(&&&&&(%%&/.(/....,.#/*....**%%%####%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%#%%(..#@@@@@@@@@@@@@@@@@@\n' +
  '@@@@@@@@#(%%(&&&&&&&&#%&#.#(...#.,#.,(/.,..**,%#%%##%%%%%%##%%%%%%%(###%#%%%%%/(((((((%%%%%%%%%%%.%%#@@@@@@@@@@@@@@@@@@\n' +
  '@@@@@@@@@@#%%&&&#&&&&##%. ,..,%.(.*,*,. ....*,/######%%%%%%%(%%%%%%######%%%%%%%%%%%%%%%%%%%%%%(%#@@@@@@@@@@@@@@@@@@@@@\n' +
  '@@@@@@@@@@@@%@@@@@%&&&%&&&&&&%*%.,....%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n' +
  '@@@@@@@@@@@@@@@@@@@@@%%%&&&&&&&#&&%,/&%@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n' +
  '@@@@@@@@@@@@@@@@@@@@@@@@@%%&&&&&&%#&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n' +
  '@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@')