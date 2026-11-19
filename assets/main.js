(function () {
  // Mock records (synthetic, seed 2026)
  var rows = [
    ["C-224906","Maria Alvarez","m.alvarez@example.com","Bronze","Charging dock $124.62","•••• 4242","Payments, Email, Analytics"],
    ["C-751673","Jamal Mensah","j.mensah@example.com","Platinum","Charging dock $88.30","•••• 4111","Payments, Shipping"],
    ["C-351589","Kenji Castillo","k.castillo@example.com","Gold","Charging dock $46.27","•••• 5556","Email, Support desk"],
    ["C-516512","Marcus Okafor","m.okafor@example.com","Bronze","Smartwatch band $87.79","•••• 5556","Payments, Analytics, Ads"],
    ["C-768695","Aisha Lindqvist","a.lindqvist@example.com","Gold","5G hotspot $217.08","•••• 5556","Shipping, Support desk"]
  ];
  var tbody = document.querySelector('#recTable tbody');
  var note = document.getElementById('modeNote');
  var bFull = document.getElementById('viewFull');
  var bSum = document.getElementById('viewSummary');
  function cell(text, masked) {
    var td = document.createElement('td');
    td.textContent = text;
    if (masked) td.className = 'masked';
    return td;
  }
  function render(summary) {
    tbody.innerHTML = '';
    rows.forEach(function (r, i) {
      var tr = document.createElement('tr');
      if (i === 0) tr.className = 'maria';
      var parts = r[1].split(' ');
      tr.appendChild(cell(r[0]));
      tr.appendChild(cell(summary ? parts[0] + ' ' + parts[1][0] + '.' : r[1], summary));
      tr.appendChild(cell(summary ? r[2][0] + '•••••@example.com' : r[2], summary));
      tr.appendChild(cell(r[3]));
      tr.appendChild(cell(summary ? r[4].replace(/ \$[\d.,]+$/, '') : r[4], summary));
      tr.appendChild(cell(summary ? 'Hidden' : r[5], summary));
      tr.appendChild(cell(r[6]));
      tbody.appendChild(tr);
    });
    bFull.setAttribute('aria-pressed', String(!summary));
    bSum.setAttribute('aria-pressed', String(summary));
    note.textContent = summary
      ? 'Summaries, not full records (Risk 3 fix): a support or marketing role sees only what the job needs.'
      : 'Everything an employee or vendor with full access can see today.';
  }
  bFull.addEventListener('click', function () { render(false); });
  bSum.addEventListener('click', function () { render(true); });
  render(false);

  // Heat map: rows likelihood 5..1, cols impact 1..5
  var placed = { '4-5': [1, 2], '4-4': [3], '3-4': [4, 5] };
  var heat = document.getElementById('heat');
  var lnames = { 5: '5', 4: '4', 3: '3', 2: '2', 1: '1' };
  for (var L = 5; L >= 1; L--) {
    var ax = document.createElement('div');
    ax.className = 'axis'; ax.textContent = lnames[L];
    heat.appendChild(ax);
    for (var I = 1; I <= 5; I++) {
      var s = L * I, c = document.createElement('div');
      c.className = 'cell ' + (s >= 15 ? 'c-high' : s >= 8 ? 'c-med' : 'c-low');
      var sc = document.createElement('span'); sc.className = 'sc'; sc.textContent = s; c.appendChild(sc);
      (placed[L + '-' + I] || []).forEach(function (n) {
        var ch = document.createElement('span'); ch.className = 'chip'; ch.textContent = n; c.appendChild(ch);
      });
      heat.appendChild(c);
    }
  }
  var corner = document.createElement('div'); corner.className = 'axis'; corner.textContent = 'L↑'; heat.appendChild(corner);
  for (var k = 1; k <= 5; k++) { var a = document.createElement('div'); a.className = 'axis'; a.textContent = k; heat.appendChild(a); }

  // Impact tabs
  var impacts = [
    ["Vendor leaks", "Fraud losses, legal expenses, fines and recovery costs.", "Customers may stop purchasing because they lose trust in the company.", "Exposed customer information can damage customer relationships."],
    ["Cyberattacks", "Fraud losses, security recovery costs, legal expenses and fines.", "Customers may lose account access or avoid making purchases.", "Customer information used for marketing could be stolen or exposed."],
    ["Excessive internal access", "Financial losses, legal expenses and possible fines.", "Customer records and purchasing information could be misused or exposed.", "Customer information could be shared without authorization."],
    ["Data misuse and privacy", "Regulatory fines, legal expenses and compliance costs.", "Customers may lose trust and become less likely to purchase.", "Campaigns could be affected by consent restrictions and privacy violations."],
    ["Data lost or unmanaged", "Data recovery costs, storage expenses and financial losses.", "Missing customer records could interrupt purchases and customer service.", "Outdated or missing information could affect marketing campaigns."]
  ];
  var tabs = document.getElementById('tabs'), panel = document.getElementById('impactPanel');
  var btns = impacts.map(function (r, i) {
    var b = document.createElement('button');
    b.type = 'button'; b.setAttribute('role', 'tab'); b.id = 'tab-' + i;
    b.setAttribute('aria-controls', 'impactPanel');
    b.textContent = (i + 1) + '. ' + r[0];
    b.addEventListener('click', function () { show(i); });
    b.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        var n = (i + (e.key === 'ArrowRight' ? 1 : -1) + impacts.length) % impacts.length;
        show(n); btns[n].focus(); e.preventDefault();
      }
    });
    tabs.appendChild(b);
    return b;
  });
  function show(i) {
    btns.forEach(function (b, j) { b.setAttribute('aria-selected', String(i === j)); b.tabIndex = i === j ? 0 : -1; });
    panel.setAttribute('aria-labelledby', 'tab-' + i);
    document.getElementById('impF').textContent = impacts[i][1];
    document.getElementById('impS').textContent = impacts[i][2];
    document.getElementById('impM').textContent = impacts[i][3];
  }
  show(0);

  // Respect reduced motion for the data-trail animation
  var svg = document.getElementById('trailSvg');
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches && svg.pauseAnimations) {
    svg.pauseAnimations();
  }
})();
