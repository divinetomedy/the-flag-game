const COUNTRIES = [
  { name: "Afghanistan", iso: "af", code: "AFG" },
  { name: "Albania", iso: "al", code: "ALB" },
  { name: "Algeria", iso: "dz", code: "ALG" },
  { name: "Andorra", iso: "ad", code: "AND" },
  { name: "Angola", iso: "ao", code: "ANG" },
  { name: "Antigua and Barbuda", iso: "ag", code: "ATG", aliases: ["Antigua"] },
  { name: "Argentina", iso: "ar", code: "ARG" },
  { name: "Armenia", iso: "am", code: "ARM" },
  { name: "Australia", iso: "au", code: "AUS" },
  { name: "Austria", iso: "at", code: "AUT" },
  { name: "Azerbaijan", iso: "az", code: "AZE" },
  { name: "Bahamas", iso: "bs", code: "BAH", aliases: ["The Bahamas"] },
  { name: "Bahrain", iso: "bh", code: "BHR" },
  { name: "Bangladesh", iso: "bd", code: "BAN" },
  { name: "Barbados", iso: "bb", code: "BRB" },
  { name: "Belarus", iso: "by", code: "BLR" },
  { name: "Belgium", iso: "be", code: "BEL" },
  { name: "Belize", iso: "bz", code: "BLZ" },
  { name: "Benin", iso: "bj", code: "BEN" },
  { name: "Bhutan", iso: "bt", code: "BHU" },
  { name: "Bolivia", iso: "bo", code: "BOL" },
  { name: "Bosnia and Herzegovina", iso: "ba", code: "BIH", aliases: ["Bosnia"] },
  { name: "Botswana", iso: "bw", code: "BOT" },
  { name: "Brazil", iso: "br", code: "BRA" },
  { name: "Brunei", iso: "bn", code: "BRU" },
  { name: "Bulgaria", iso: "bg", code: "BUL" },
  { name: "Burkina Faso", iso: "bf", code: "BFA" },
  { name: "Burundi", iso: "bi", code: "BDI" },
  { name: "Cabo Verde", iso: "cv", code: "CPV", aliases: ["Cape Verde"] },
  { name: "Cambodia", iso: "kh", code: "CAM" },
  { name: "Cameroon", iso: "cm", code: "CMR" },
  { name: "Canada", iso: "ca", code: "CAN" },
  { name: "Central African Republic", iso: "cf", code: "CTA" },
  { name: "Chad", iso: "td", code: "CHA" },
  { name: "Chile", iso: "cl", code: "CHI" },
  { name: "China", iso: "cn", code: "CHN" },
  { name: "Colombia", iso: "co", code: "COL" },
  { name: "Comoros", iso: "km", code: "COM" },
  { name: "Congo", iso: "cg", code: "CGO", aliases: ["Republic of the Congo"] },
  { name: "DR Congo", iso: "cd", code: "COD", aliases: ["Democratic Republic of the Congo", "Democratic Republic of Congo"] },
  { name: "Costa Rica", iso: "cr", code: "CRC" },
  { name: "Cote d'Ivoire", iso: "ci", code: "CIV", aliases: ["Ivory Coast", "Cote d Ivoire"] },
  { name: "Croatia", iso: "hr", code: "CRO" },
  { name: "Cuba", iso: "cu", code: "CUB" },
  { name: "Curacao", iso: "cw", code: "CUW" },
  { name: "Cyprus", iso: "cy", code: "CYP" },
  { name: "Czech Republic", iso: "cz", code: "CZE", aliases: ["Czechia"] },
  { name: "Denmark", iso: "dk", code: "DEN" },
  { name: "Djibouti", iso: "dj", code: "DJI" },
  { name: "Dominica", iso: "dm", code: "DMA" },
  { name: "Dominican Republic", iso: "do", code: "DOM" },
  { name: "Ecuador", iso: "ec", code: "ECU" },
  { name: "Egypt", iso: "eg", code: "EGY" },
  { name: "El Salvador", iso: "sv", code: "SLV" },
  { name: "England", iso: "gb-eng", code: "ENG" },
  { name: "Equatorial Guinea", iso: "gq", code: "EQG" },
  { name: "Eritrea", iso: "er", code: "ERI" },
  { name: "Estonia", iso: "ee", code: "EST" },
  { name: "Eswatini", iso: "sz", code: "SWZ", aliases: ["Swaziland"] },
  { name: "Ethiopia", iso: "et", code: "ETH" },
  { name: "Fiji", iso: "fj", code: "FIJ" },
  { name: "Finland", iso: "fi", code: "FIN" },
  { name: "France", iso: "fr", code: "FRA" },
  { name: "Gabon", iso: "ga", code: "GAB" },
  { name: "Gambia", iso: "gm", code: "GAM", aliases: ["The Gambia"] },
  { name: "Georgia", iso: "ge", code: "GEO" },
  { name: "Germany", iso: "de", code: "GER" },
  { name: "Ghana", iso: "gh", code: "GHA" },
  { name: "Greece", iso: "gr", code: "GRE" },
  { name: "Grenada", iso: "gd", code: "GRN" },
  { name: "Guatemala", iso: "gt", code: "GUA" },
  { name: "Guinea", iso: "gn", code: "GUI" },
  { name: "Guinea-Bissau", iso: "gw", code: "GNB", aliases: ["Guinea Bissau"] },
  { name: "Guyana", iso: "gy", code: "GUY" },
  { name: "Haiti", iso: "ht", code: "HAI" },
  { name: "Honduras", iso: "hn", code: "HON" },
  { name: "Hungary", iso: "hu", code: "HUN" },
  { name: "Iceland", iso: "is", code: "ISL" },
  { name: "India", iso: "in", code: "IND" },
  { name: "Indonesia", iso: "id", code: "IDN" },
  { name: "Iran", iso: "ir", code: "IRN" },
  { name: "Iraq", iso: "iq", code: "IRQ" },
  { name: "Ireland", iso: "ie", code: "IRL", aliases: ["Republic of Ireland"] },
  { name: "Israel", iso: "il", code: "ISR" },
  { name: "Italy", iso: "it", code: "ITA" },
  { name: "Jamaica", iso: "jm", code: "JAM" },
  { name: "Japan", iso: "jp", code: "JPN" },
  { name: "Jordan", iso: "jo", code: "JOR" },
  { name: "Kazakhstan", iso: "kz", code: "KAZ" },
  { name: "Kenya", iso: "ke", code: "KEN" },
  { name: "Kiribati", iso: "ki", code: "KIR" },
  { name: "Kosovo", iso: "xk", code: "KVX" },
  { name: "Kuwait", iso: "kw", code: "KUW" },
  { name: "Kyrgyzstan", iso: "kg", code: "KGZ" },
  { name: "Laos", iso: "la", code: "LAO" },
  { name: "Latvia", iso: "lv", code: "LVA" },
  { name: "Lebanon", iso: "lb", code: "LIB" },
  { name: "Lesotho", iso: "ls", code: "LES" },
  { name: "Liberia", iso: "lr", code: "LBR" },
  { name: "Libya", iso: "ly", code: "LBY" },
  { name: "Liechtenstein", iso: "li", code: "LIE" },
  { name: "Lithuania", iso: "lt", code: "LTU" },
  { name: "Luxembourg", iso: "lu", code: "LUX" },
  { name: "Madagascar", iso: "mg", code: "MAD" },
  { name: "Malawi", iso: "mw", code: "MWI" },
  { name: "Malaysia", iso: "my", code: "MAS" },
  { name: "Maldives", iso: "mv", code: "MDV" },
  { name: "Mali", iso: "ml", code: "MLI" },
  { name: "Malta", iso: "mt", code: "MLT" },
  { name: "Marshall Islands", iso: "mh", code: "MHL" },
  { name: "Mauritania", iso: "mr", code: "MTN" },
  { name: "Mauritius", iso: "mu", code: "MRI" },
  { name: "Mexico", iso: "mx", code: "MEX" },
  { name: "Micronesia", iso: "fm", code: "FSM" },
  { name: "Moldova", iso: "md", code: "MDA" },
  { name: "Monaco", iso: "mc", code: "MON" },
  { name: "Mongolia", iso: "mn", code: "MNG" },
  { name: "Montenegro", iso: "me", code: "MNE" },
  { name: "Morocco", iso: "ma", code: "MAR" },
  { name: "Mozambique", iso: "mz", code: "MOZ" },
  { name: "Myanmar", iso: "mm", code: "MYA", aliases: ["Burma"] },
  { name: "Namibia", iso: "na", code: "NAM" },
  { name: "Nauru", iso: "nr", code: "NRU" },
  { name: "Nepal", iso: "np", code: "NEP" },
  { name: "Netherlands", iso: "nl", code: "NED", aliases: ["Holland"] },
  { name: "New Zealand", iso: "nz", code: "NZL" },
  { name: "Nicaragua", iso: "ni", code: "NCA" },
  { name: "Niger", iso: "ne", code: "NIG" },
  { name: "Nigeria", iso: "ng", code: "NGA" },
  { name: "North Korea", iso: "kp", code: "PRK", aliases: ["Korea DPR", "DPR Korea"] },
  { name: "North Macedonia", iso: "mk", code: "MKD", aliases: ["Macedonia"] },
  { name: "Norway", iso: "no", code: "NOR" },
  { name: "Oman", iso: "om", code: "OMA" },
  { name: "Pakistan", iso: "pk", code: "PAK" },
  { name: "Palau", iso: "pw", code: "PLW" },
  { name: "Palestine", iso: "ps", code: "PLE" },
  { name: "Panama", iso: "pa", code: "PAN" },
  { name: "Papua New Guinea", iso: "pg", code: "PNG" },
  { name: "Paraguay", iso: "py", code: "PAR" },
  { name: "Peru", iso: "pe", code: "PER" },
  { name: "Philippines", iso: "ph", code: "PHI" },
  { name: "Poland", iso: "pl", code: "POL" },
  { name: "Portugal", iso: "pt", code: "POR" },
  { name: "Qatar", iso: "qa", code: "QAT" },
  { name: "Romania", iso: "ro", code: "ROU" },
  { name: "Russia", iso: "ru", code: "RUS" },
  { name: "Rwanda", iso: "rw", code: "RWA" },
  { name: "Saint Kitts and Nevis", iso: "kn", code: "SKN", aliases: ["St Kitts and Nevis"] },
  { name: "Saint Lucia", iso: "lc", code: "LCA", aliases: ["St Lucia"] },
  { name: "Saint Vincent and the Grenadines", iso: "vc", code: "VIN", aliases: ["St Vincent and the Grenadines"] },
  { name: "Samoa", iso: "ws", code: "SAM" },
  { name: "San Marino", iso: "sm", code: "SMR" },
  { name: "Sao Tome and Principe", iso: "st", code: "STP" },
  { name: "Saudi Arabia", iso: "sa", code: "KSA" },
  { name: "Scotland", iso: "gb-sct", code: "SCO" },
  { name: "Senegal", iso: "sn", code: "SEN" },
  { name: "Serbia", iso: "rs", code: "SRB" },
  { name: "Seychelles", iso: "sc", code: "SEY" },
  { name: "Sierra Leone", iso: "sl", code: "SLE" },
  { name: "Singapore", iso: "sg", code: "SGP" },
  { name: "Slovakia", iso: "sk", code: "SVK" },
  { name: "Slovenia", iso: "si", code: "SVN" },
  { name: "Solomon Islands", iso: "sb", code: "SOL" },
  { name: "Somalia", iso: "so", code: "SOM" },
  { name: "South Africa", iso: "za", code: "RSA" },
  { name: "South Korea", iso: "kr", code: "KOR", aliases: ["Korea Republic"] },
  { name: "South Sudan", iso: "ss", code: "SSD" },
  { name: "Spain", iso: "es", code: "ESP" },
  { name: "Sri Lanka", iso: "lk", code: "SRI" },
  { name: "Sudan", iso: "sd", code: "SDN" },
  { name: "Suriname", iso: "sr", code: "SUR" },
  { name: "Sweden", iso: "se", code: "SWE" },
  { name: "Switzerland", iso: "ch", code: "SUI" },
  { name: "Syria", iso: "sy", code: "SYR" },
  { name: "Taiwan", iso: "tw", code: "TPE", aliases: ["Chinese Taipei"] },
  { name: "Tajikistan", iso: "tj", code: "TJK" },
  { name: "Tanzania", iso: "tz", code: "TAN" },
  { name: "Thailand", iso: "th", code: "THA" },
  { name: "Timor-Leste", iso: "tl", code: "TLS", aliases: ["East Timor", "Timor Leste"] },
  { name: "Togo", iso: "tg", code: "TOG" },
  { name: "Tonga", iso: "to", code: "TGA" },
  { name: "Trinidad and Tobago", iso: "tt", code: "TRI" },
  { name: "Tunisia", iso: "tn", code: "TUN" },
  { name: "Turkey", iso: "tr", code: "TUR", aliases: ["Turkiye"] },
  { name: "Turkmenistan", iso: "tm", code: "TKM" },
  { name: "Tuvalu", iso: "tv", code: "TUV" },
  { name: "Uganda", iso: "ug", code: "UGA" },
  { name: "Ukraine", iso: "ua", code: "UKR" },
  { name: "United Arab Emirates", iso: "ae", code: "UAE", aliases: ["UAE"] },
  { name: "United Kingdom", iso: "gb", code: "GBR", aliases: ["Great Britain", "Britain"] },
  { name: "United States", iso: "us", code: "USA", aliases: ["United States of America", "USA", "US", "America"] },
  { name: "Uruguay", iso: "uy", code: "URU" },
  { name: "Uzbekistan", iso: "uz", code: "UZB" },
  { name: "Vanuatu", iso: "vu", code: "VAN" },
  { name: "Vatican City", iso: "va", code: "VAT", aliases: ["Holy See", "Vatican"] },
  { name: "Venezuela", iso: "ve", code: "VEN" },
  { name: "Vietnam", iso: "vn", code: "VIE" },
  { name: "Yemen", iso: "ye", code: "YEM" },
  { name: "Zambia", iso: "zm", code: "ZAM" },
  { name: "Zimbabwe", iso: "zw", code: "ZIM" },
];

const WORLD_CUP_CODES = new Set([
  "ALG", "ARG", "AUS", "AUT", "BEL", "BIH", "BRA", "CAN", "CIV", "COD", "COL", "CPV",
  "CRO", "CZE", "CUW", "ECU", "EGY", "ENG", "FRA", "GER", "GHA", "HAI", "IRN", "IRQ",
  "JPN", "JOR", "KOR", "KSA", "MAR", "MEX", "NED", "NOR", "NZL", "PAN", "PAR", "POR",
  "QAT", "RSA", "SCO", "SEN", "ESP", "SUI", "SWE", "TUN", "TUR", "URU", "USA", "UZB",
]);

const rows = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
  ["Clear", "Space", "Enter"],
];

const FLAG_CACHE_NAME = "flag-game-flags-v1";

const els = {
  resolvedName: document.querySelector("#resolvedName"),
  flagImage: document.querySelector("#flagImage"),
  hintBadge: document.querySelector("#hintBadge"),
  hintMain: document.querySelector("#hintMain"),
  hintSub: document.querySelector("#hintSub"),
  celebrationCanvas: document.querySelector("#celebrationCanvas"),
  settingsButton: document.querySelector("#settingsButton"),
  settingsPanel: document.querySelector("#settingsPanel"),
  showAllButton: document.querySelector("#showAllButton"),
  settingsResetButton: document.querySelector("#settingsResetButton"),
  allCountriesOverlay: document.querySelector("#allCountriesOverlay"),
  allCountriesList: document.querySelector("#allCountriesList"),
  allCountriesCloseButton: document.querySelector("#allCountriesCloseButton"),
  countryModeInputs: document.querySelectorAll("input[name='countryMode']"),
  backButton: document.querySelector("#backButton"),
  scoreButton: document.querySelector("#scoreButton"),
  hintButton: document.querySelector("#hintButton"),
  skipButton: document.querySelector("#skipButton"),
  keyboard: document.querySelector("#keyboard"),
  wrongOverlay: document.querySelector("#wrongOverlay"),
  showButton: document.querySelector("#showButton"),
  againButton: document.querySelector("#againButton"),
};

let deck = [];
let current = null;
let history = [];
let guess = "";
let right = 0;
let wrong = 0;
let answerTimer = 0;
let hintTimer = 0;
let hintLevel = 0;
let celebrationFrame = 0;
let audioContext = null;
let settings = {
  countryMode: "worldCup",
};

const preparedCountries = COUNTRIES.map((country) => ({
  ...country,
  worldCup: WORLD_CUP_CODES.has(country.code),
  tokens: buildTokens(country),
}));

function buildTokens(country) {
  return [country.name, country.code, ...(country.aliases || [])]
    .filter(Boolean)
    .map(normalize);
}

function normalize(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]/g, "");
}

function shuffle(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const next = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[next]] = [copy[next], copy[index]];
  }
  return copy;
}

function refillDeck() {
  deck = shuffle(activeCountries());
}

function activeCountries() {
  if (settings.countryMode === "worldCup") {
    return preparedCountries.filter((country) => country.worldCup);
  }

  return preparedCountries;
}

function changeCountryMode(mode) {
  if (settings.countryMode === mode) return;
  settings.countryMode = mode;
  deck = [];
  history = [];
  current = null;
  clearGuess();
  nextCountry();
  if (isAllCountriesOpen()) renderAllCountries();
}

function nextCountry() {
  if (current) {
    history.push(current);
    if (history.length > 40) history.shift();
  }

  if (!deck.length) refillDeck();
  current = deck.shift();
  guess = "";
  hintLevel = 0;
  updateHintButton();
  hideAnswer();
  hideHint();
  updateResolver();
  updateEnterKeys();
  loadFlag();
}

function previousCountry() {
  if (!history.length) {
    guess = "";
    updateResolver();
    updateEnterKeys();
    return;
  }

  if (current) deck.unshift(current);
  current = history.pop();
  guess = "";
  hintLevel = 0;
  updateHintButton();
  hideAnswer();
  hideHint();
  updateResolver();
  updateEnterKeys();
  loadFlag();
}

function loadFlag() {
  els.flagImage.classList.remove("is-loaded");
  els.flagImage.alt = "Mystery country flag";
  els.flagImage.src = flagUrl(current);
}

function flagUrl(country) {
  return `https://flagcdn.com/${country.iso}.svg`;
}

function resolveGuess(value, allowPrefix = true) {
  const normalized = normalize(value);
  if (!normalized) return { country: null, status: "empty" };

  const byName = (left, right) => left.name.localeCompare(right.name);
  const byPrefixRankThenName = (left, right) => (
    prefixRank(left, normalized) - prefixRank(right, normalized) || byName(left, right)
  );
  const countries = activeCountries();
  const exactNameMatches = countries.filter((country) => {
    const names = [country.name, ...(country.aliases || [])].map(normalize);
    return names.includes(normalized);
  }).sort(byName);
  const exactCodeMatches = countries.filter((country) => (
    normalize(country.code) === normalized
  )).sort(byName);

  if (exactNameMatches.length) {
    return { country: exactNameMatches[0], status: "exact" };
  }

  const codeOnly = exactCodeMatches.filter((country) => !exactNameMatches.includes(country));
  if (codeOnly.length) {
    return { country: codeOnly[0], status: "exact" };
  }

  if (!allowPrefix) return { country: null, status: "none" };

  const prefixMatches = countries.filter((country) => (
    country.tokens.some((token) => token.startsWith(normalized))
  )).sort(byPrefixRankThenName);

  if (prefixMatches.length) {
    return { country: prefixMatches[0], status: "prefix" };
  }

  return { country: null, status: "none" };
}

function prefixRank(country, normalized) {
  if (normalize(country.name).startsWith(normalized)) return 0;
  if ((country.aliases || []).some((alias) => normalize(alias).startsWith(normalized))) return 1;
  if (normalize(country.code).startsWith(normalized)) return 2;
  return 3;
}

function updateResolver(textOverride = null, muted = false) {
  if (textOverride !== null) {
    els.resolvedName.textContent = textOverride;
    els.resolvedName.classList.toggle("muted", muted);
    fitResolverText();
    return;
  }

  if (!guess) {
    els.resolvedName.textContent = "";
    els.resolvedName.classList.remove("muted");
    fitResolverText();
    return;
  }

  const result = resolveGuess(guess, true);
  els.resolvedName.classList.toggle("muted", result.status !== "exact" && result.status !== "prefix");

  if (result.country) {
    els.resolvedName.textContent = result.country.name;
  } else if (result.status === "ambiguous") {
    els.resolvedName.textContent = "Keep typing";
  } else {
    els.resolvedName.textContent = "No match";
  }
  fitResolverText();
}

function fitResolverText() {
  const element = els.resolvedName;
  element.style.fontSize = "18px";

  if (!element.textContent) return;

  let size = 18;
  while (element.scrollWidth > element.clientWidth && size > 11) {
    size -= 1;
    element.style.fontSize = `${size}px`;
  }
}

function typeCharacter(character) {
  if (isInputBlocked()) return;
  window.clearTimeout(answerTimer);
  guess += character;
  updateResolver();
  updateEnterKeys();
}

function backspace() {
  if (isInputBlocked()) return;
  guess = guess.slice(0, -1);
  updateResolver();
  updateEnterKeys();
}

function clearGuess() {
  guess = "";
  updateResolver();
  updateEnterKeys();
}

function submitGuess() {
  if (!guess.trim() || isInputBlocked()) return;
  const result = resolveGuess(guess, true);

  if (result.country && result.country.code === current.code) {
    right += 1;
    updateScore();
    clearGuess();
    celebrateThenAdvance();
    return;
  }

  wrong += 1;
  updateScore();
  playBong();
  els.wrongOverlay.hidden = false;
}

function skipCountry() {
  nextCountry();
}

function showAnswer() {
  els.wrongOverlay.hidden = true;
  clearGuess();
  revealAnswer(3000);
}

function guessAgain() {
  els.wrongOverlay.hidden = true;
  clearGuess();
}

function revealAnswer(duration) {
  window.clearTimeout(answerTimer);
  updateResolver(current.name, false);
  answerTimer = window.setTimeout(() => {
    if (!guess) updateResolver();
  }, duration);
}

function hideAnswer() {
  window.clearTimeout(answerTimer);
}

function showHint() {
  window.clearTimeout(hintTimer);
  hintLevel = Math.min(hintLevel + 1, 4);
  updateHintButton();
  const hint = hintText();
  els.hintMain.textContent = hint.main;
  els.hintSub.textContent = hint.sub;
  els.hintBadge.classList.toggle("is-full-name", hintLevel >= 4);
  els.hintBadge.setAttribute("aria-hidden", "false");
  els.hintBadge.classList.add("is-visible");
  hintTimer = window.setTimeout(hideHint, 1000);
}

function hideHint() {
  window.clearTimeout(hintTimer);
  els.hintBadge.classList.remove("is-visible");
  els.hintBadge.classList.remove("is-full-name");
  els.hintBadge.setAttribute("aria-hidden", "true");
}

function updateScore() {
  els.scoreButton.textContent = `${right}/${right + wrong}`;
  els.scoreButton.setAttribute("aria-label", `Score ${right} right out of ${right + wrong}`);
}

function resetScore() {
  right = 0;
  wrong = 0;
  updateScore();
}

function startNewGame() {
  resetScore();
  deck = [];
  history = [];
  current = null;
  guess = "";
  hintLevel = 0;
  updateHintButton();
  hideAnswer();
  hideHint();
  closeSettings();
  nextCountry();
}

function hintText() {
  if (hintLevel === 1) {
    return {
      main: current.name.slice(0, 1).toUpperCase(),
      sub: "",
    };
  }

  if (hintLevel === 2) {
    return {
      main: twoLetterCode(current),
      sub: "Flag Code",
    };
  }

  if (hintLevel === 3) {
    return {
      main: current.code,
      sub: "FIFA Code",
    };
  }

  return {
    main: current.name,
    sub: "",
  };
}

function updateHintButton() {
  const labels = ["Hint 1", "Hint 2", "Hint 3", "Hint X", "Hint X"];
  els.hintButton.textContent = labels[hintLevel];
}

function twoLetterCode(country) {
  return /^[a-z]{2}$/.test(country.iso) ? country.iso.toUpperCase() : country.code.slice(0, 2);
}

function sortedActiveCountries() {
  return [...activeCountries()].sort((left, right) => left.name.localeCompare(right.name));
}

function isSettingsOpen() {
  return els.settingsPanel.hidden === false;
}

function isAllCountriesOpen() {
  return els.allCountriesOverlay.hidden === false;
}

function isInputBlocked() {
  return els.wrongOverlay.hidden === false || isSettingsOpen() || isAllCountriesOpen();
}

function openSettings() {
  els.settingsPanel.hidden = false;
  els.settingsButton.setAttribute("aria-expanded", "true");
}

function closeSettings() {
  els.settingsPanel.hidden = true;
  els.settingsButton.setAttribute("aria-expanded", "false");
}

function toggleSettings() {
  if (isSettingsOpen()) {
    closeSettings();
  } else {
    openSettings();
  }
}

function showAllCountries() {
  closeSettings();
  renderAllCountries();
  els.allCountriesOverlay.hidden = false;
}

function closeAllCountries() {
  els.allCountriesOverlay.hidden = true;
}

function renderAllCountries() {
  const fragment = document.createDocumentFragment();

  sortedActiveCountries().forEach((country) => {
    const row = document.createElement("article");
    row.className = "country-row";

    const flagCell = document.createElement("div");
    flagCell.className = "country-row-flag";

    const flag = document.createElement("img");
    flag.loading = "lazy";
    flag.alt = `${country.name} flag`;
    flag.src = flagUrl(country);
    flagCell.append(flag);

    const infoCell = document.createElement("div");
    infoCell.className = "country-row-info";

    const name = document.createElement("div");
    name.className = "country-row-name";
    name.textContent = country.name;

    const codes = document.createElement("div");
    codes.className = "country-row-codes";
    codes.textContent = `${twoLetterCode(country)} / ${country.code}`;

    infoCell.append(name, codes);
    row.append(flagCell, infoCell);
    fragment.append(row);
  });

  els.allCountriesList.replaceChildren(fragment);
}

function updateEnterKeys() {
  document.querySelectorAll(".key.enter").forEach((key) => {
    key.classList.toggle("is-active", guess.length > 0);
  });
}

function buildKeyboard() {
  rows.forEach((row) => {
    const rowEl = document.createElement("div");
    rowEl.className = "key-row";

    row.forEach((label) => {
      const key = document.createElement("button");
      key.type = "button";
      key.className = "key";
      key.dataset.key = label;

      if (label === "Backspace") {
        key.textContent = "Del";
        key.classList.add("wide");
      } else if (label === "Space") {
        key.textContent = "Space";
        key.classList.add("wide");
      } else if (label === "Clear") {
        key.textContent = "Clear";
        key.classList.add("wide");
      } else if (label === "Enter") {
        key.textContent = "Enter";
        key.classList.add("wide", "enter");
      } else {
        key.textContent = label;
      }

      key.addEventListener("click", () => handleVirtualKey(label));
      rowEl.append(key);
    });

    els.keyboard.append(rowEl);
  });
}

function handleVirtualKey(key) {
  if (isSettingsOpen() || isAllCountriesOpen()) return;
  ensureAudioContext();
  if (/^[A-Z]$/.test(key)) typeCharacter(key);
  if (key === "Space") typeCharacter(" ");
  if (key === "Backspace") backspace();
  if (key === "Clear") clearGuess();
  if (key === "Enter") submitGuess();
}

function handlePhysicalKey(event) {
  if (event.metaKey || event.ctrlKey || event.altKey) return;
  ensureAudioContext();

  if (isAllCountriesOpen()) {
    if (event.key === "Escape") {
      event.preventDefault();
      closeAllCountries();
    }
    return;
  }

  if (isSettingsOpen()) {
    if (event.key === "Escape") {
      event.preventDefault();
      closeSettings();
    }
    return;
  }

  if (els.wrongOverlay.hidden === false && event.key === "Enter") {
    event.preventDefault();
    guessAgain();
    return;
  }

  if (/^[a-zA-Z]$/.test(event.key)) {
    event.preventDefault();
    typeCharacter(event.key);
  } else if (event.key === " " || event.key === "-" || event.key === "'") {
    event.preventDefault();
    typeCharacter(event.key);
  } else if (event.key === "Backspace") {
    event.preventDefault();
    backspace();
  } else if (event.key === "Escape") {
    event.preventDefault();
    clearGuess();
  } else if (event.key === "Enter") {
    event.preventDefault();
    submitGuess();
  }
}

function ensureAudioContext() {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }

  if (audioContext.state === "suspended") {
    audioContext.resume();
  }
}

function playBong() {
  ensureAudioContext();
  const now = audioContext.currentTime;
  const master = audioContext.createGain();
  const compressor = audioContext.createDynamicsCompressor();
  const partials = [
    { frequency: 58, gain: 1.2, detune: -6 },
    { frequency: 87, gain: 0.68, detune: 8 },
    { frequency: 132, gain: 0.42, detune: -11 },
    { frequency: 211, gain: 0.26, detune: 14 },
    { frequency: 319, gain: 0.16, detune: -18 },
  ];

  master.gain.setValueAtTime(0.0001, now);
  master.gain.exponentialRampToValueAtTime(1.45, now + 0.035);
  master.gain.exponentialRampToValueAtTime(0.0001, now + 2.2);
  compressor.threshold.setValueAtTime(-18, now);
  compressor.knee.setValueAtTime(24, now);
  compressor.ratio.setValueAtTime(8, now);
  compressor.attack.setValueAtTime(0.004, now);
  compressor.release.setValueAtTime(0.4, now);

  partials.forEach((partial) => {
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();

    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(partial.frequency, now);
    oscillator.frequency.exponentialRampToValueAtTime(partial.frequency * 0.82, now + 1.1);
    oscillator.detune.setValueAtTime(partial.detune, now);
    gain.gain.setValueAtTime(partial.gain, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.05);

    oscillator.connect(gain);
    gain.connect(master);
    oscillator.start(now);
    oscillator.stop(now + 2.25);
  });

  master.connect(compressor);
  compressor.connect(audioContext.destination);
}

function celebrateThenAdvance() {
  const canvas = els.celebrationCanvas;
  const context = canvas.getContext("2d");
  const bounds = canvas.getBoundingClientRect();
  const ratio = window.devicePixelRatio || 1;
  canvas.width = Math.max(1, Math.floor(bounds.width * ratio));
  canvas.height = Math.max(1, Math.floor(bounds.height * ratio));
  context.setTransform(ratio, 0, 0, ratio, 0, 0);

  const colors = ["#1769ff", "#00a86b", "#ffbe0b", "#f72585", "#fb5607", "#7c3aed"];
  const particles = [];
  const fireworks = [];
  const start = performance.now();
  const duration = 2500;

  for (let i = 0; i < 150; i += 1) {
    particles.push({
      x: Math.random() * bounds.width,
      y: -20 - Math.random() * bounds.height * 0.4,
      vx: -2 + Math.random() * 4,
      vy: 3 + Math.random() * 5,
      size: 5 + Math.random() * 7,
      spin: Math.random() * Math.PI,
      color: colors[Math.floor(Math.random() * colors.length)],
    });
  }

  for (let burst = 0; burst < 5; burst += 1) {
    const x = bounds.width * (0.18 + Math.random() * 0.64);
    const y = bounds.height * (0.18 + Math.random() * 0.36);
    for (let ray = 0; ray < 34; ray += 1) {
      const angle = (Math.PI * 2 * ray) / 34;
      const speed = 1.6 + Math.random() * 2.7;
      fireworks.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 1,
        delay: burst * 260,
        color: colors[(ray + burst) % colors.length],
      });
    }
  }

  cancelAnimationFrame(celebrationFrame);

  function draw(now) {
    const elapsed = now - start;
    context.clearRect(0, 0, bounds.width, bounds.height);

    particles.forEach((particle) => {
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.vy += 0.035;
      particle.spin += 0.13;

      context.save();
      context.translate(particle.x, particle.y);
      context.rotate(particle.spin);
      context.fillStyle = particle.color;
      context.fillRect(-particle.size / 2, -particle.size / 4, particle.size, particle.size / 2);
      context.restore();
    });

    fireworks.forEach((firework) => {
      if (elapsed < firework.delay) return;
      const local = (elapsed - firework.delay) / 1000;
      firework.x += firework.vx;
      firework.y += firework.vy;
      firework.vy += 0.025;
      firework.life = Math.max(0, 1 - local / 1.2);

      context.globalAlpha = firework.life;
      context.fillStyle = firework.color;
      context.beginPath();
      context.arc(firework.x, firework.y, 3, 0, Math.PI * 2);
      context.fill();
      context.globalAlpha = 1;
    });

    if (elapsed < duration) {
      celebrationFrame = requestAnimationFrame(draw);
    } else {
      context.clearRect(0, 0, bounds.width, bounds.height);
      nextCountry();
    }
  }

  celebrationFrame = requestAnimationFrame(draw);
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator) || window.location.protocol === "file:") return;

  const localHosts = new Set(["localhost", "127.0.0.1", "::1"]);
  if (localHosts.has(window.location.hostname)) {
    navigator.serviceWorker.getRegistrations()
      .then((registrations) => registrations.forEach((registration) => registration.unregister()))
      .catch(() => {});

    if ("caches" in window) {
      caches.keys()
        .then((keys) => keys
          .filter((key) => key.startsWith("flag-game-"))
          .forEach((key) => caches.delete(key)))
        .catch(() => {});
    }
    return;
  }

  navigator.serviceWorker.register("sw.js").catch(() => {});
}

function warmFlagCache() {
  if (!shouldWarmCaches() || !("caches" in window)) return;

  const orderedCountries = [
    ...activeCountries(),
    ...preparedCountries.filter((country) => !activeCountries().some((active) => active.code === country.code)),
  ];
  const seen = new Set();
  const urls = orderedCountries
    .map(flagUrl)
    .filter((url) => {
      if (seen.has(url)) return false;
      seen.add(url);
      return true;
    });

  const start = () => {
    caches.open(FLAG_CACHE_NAME)
      .then((cache) => cacheFlagBatch(cache, urls, 0))
      .catch(() => {});
  };

  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(start, { timeout: 2500 });
  } else {
    window.setTimeout(start, 1200);
  }
}

function shouldWarmCaches() {
  const localHosts = new Set(["localhost", "127.0.0.1", "::1"]);
  return window.location.protocol === "https:" && !localHosts.has(window.location.hostname);
}

function cacheFlagBatch(cache, urls, index) {
  const batch = urls.slice(index, index + 8);
  if (!batch.length) return Promise.resolve();

  return Promise.all(batch.map((url) => cacheFlag(cache, url)))
    .then(() => new Promise((resolve) => {
      window.setTimeout(resolve, 120);
    }))
    .then(() => cacheFlagBatch(cache, urls, index + batch.length));
}

function cacheFlag(cache, url) {
  return cache.match(url).then((cached) => {
    if (cached) return undefined;

    return fetch(url, { mode: "no-cors", cache: "force-cache" })
      .then((response) => cache.put(url, response))
      .catch(() => undefined);
  });
}

els.flagImage.addEventListener("load", () => {
  els.flagImage.classList.add("is-loaded");
});

els.settingsButton.addEventListener("click", toggleSettings);
els.settingsPanel.addEventListener("click", (event) => {
  event.stopPropagation();
});
document.addEventListener("click", (event) => {
  if (!isSettingsOpen()) return;
  if (els.settingsPanel.contains(event.target) || els.settingsButton.contains(event.target)) return;
  closeSettings();
});
els.countryModeInputs.forEach((input) => {
  input.addEventListener("change", () => {
    if (input.checked) changeCountryMode(input.value);
  });
});
els.showAllButton.addEventListener("click", showAllCountries);
els.settingsResetButton.addEventListener("click", startNewGame);
els.allCountriesCloseButton.addEventListener("click", closeAllCountries);
els.backButton.addEventListener("click", previousCountry);
els.hintButton.addEventListener("click", showHint);
els.skipButton.addEventListener("click", skipCountry);
els.showButton.addEventListener("click", showAnswer);
els.againButton.addEventListener("click", guessAgain);
window.addEventListener("keydown", handlePhysicalKey);
window.addEventListener("resize", fitResolverText);

buildKeyboard();
updateScore();
updateHintButton();
refillDeck();
nextCountry();
registerServiceWorker();
warmFlagCache();
