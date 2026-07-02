function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6NVH0CQWSiH":
        Script1();
        break;
      case "5izovnJGTpH":
        Script2();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  var player = GetPlayer();
var varCount = 0;

if(player.GetVar("AdministerO2")){
varCount++; 
player.SetVar("O2Feedback", "You should not administer oxygen at this stage.")
}else {
player.SetVar("O2Feedback", "")
}

if(player.GetVar("Bolus")){ varCount++; }
if(player.GetVar("CallSeniorHelp")){ varCount++; }
if(player.GetVar("FullBloods")){ varCount++; }
if(player.GetVar("InsertCannula")){ varCount++; }
if(player.GetVar("Intubate")){ varCount++; }
if(player.GetVar("KeepNPO")){ varCount++; }

player.SetVar("varCountSL", varCount);

}

window.Script2 = function()
{
  var player = GetPlayer();
var varBloodCount = 0;

if(player.GetVar("s4Coag")){ varBloodCount++; }
if(player.GetVar("s4FBC")){ varBloodCount++; }
if(player.GetVar("s4GroupAndCrossmatch")){ varBloodCount++; }
if(player.GetVar("s4HbA1C")){ varBloodCount++; }
if(player.GetVar("s4LFTS")){ varBloodCount++; }
if(player.GetVar("s4TFT")){ varBloodCount++; }
if(player.GetVar("s4UnE")){ varBloodCount++; }
if(player.GetVar("s4VitD")){ varBloodCount++; }

player.SetVar("varBloodCountSL", varBloodCount);


}

};
