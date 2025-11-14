document
  .querySelector("#HotSpot_hale")
  ?.addEventListener("click", updateInfoboxhale);
document
  .querySelector("#HotSpot_snor")
  ?.addEventListener("click", updateInfoboxsnor);
document
  .querySelector("#HotSpot_kodben")
  ?.addEventListener("click", updateInfoboxkodben);

function updateInfoboxhale() {
  console.log("updateInfoboxSnor");
  // document.querySelector("#efficiency").textContent = "Her er information"
  // document.querySelector("#requirement").textContent = "Her er information"

  document.querySelector(".info-text .placeholder").textContent =
    "General information om hundens pleje og trivsel";
  document.querySelector("#efficiency").innerHTML =
    "<h2>Pleje og trivsel</h2><p>En hunds trivsel handler både om det fysiske og det mentale velbefindende. For at din hund kan leve et sundt og lykkeligt liv, kræver det regelmæssig pleje og opmærksomhed.</p>";
  document.querySelector("#requirement").textContent =
    "Når du tager hånd om hundens pleje og trivsel, forebygger du mange problemer og styrker samtidig jeres bånd. En hund, der føler sig sund, tryg og elsket, bliver som regel også mere lydig og harmonisk.";
}

function updateInfoboxsnor() {
  document.querySelector(".info-text .placeholder").textContent =
    "General information om træning af hund";
  document.querySelector("#efficiency").innerHTML =
    "<h2>Træning</h2><p> Hundetræning er meget mere end at lære hunden at “sidde pænt” eller “gå pænt i snor”. Det handler om kommunikation, forståelse og tillid mellem dig og din hund. En god træning gør hverdagen lettere og styrker jeres relation, fordi hunden lærer at aflæse dig, og du lærer at forstå dens signaler.</p>";
  document.querySelector("#requirement").textContent =
    "Tålmodighed: Læring tager tid – undgå at presse hunden.";
}

function updateInfoboxkodben() {
  document.querySelector(".info-text .placeholder").textContent =
    "General information om det ansvar, der følger med, at få en hund";
  document.querySelector("#efficiency").innerHTML =
    "<h2>Ansvar</h2><p>At have en hund er en stor glæde – men også et stort ansvar. En hund er et levende væsen, der er helt afhængig af dig for at få et trygt og sundt liv. Du har ansvar for dens velfærd, sundhed og opdragelse hver eneste dag.</p>";
  document.querySelector("#requirement").textContent =
    "En hund kræver tid, tålmodighed og konsekvens – den kan ikke selv vælge, og derfor hviler hele ansvaret på dig som ejer. Til gengæld får du en loyal ven.";
}
