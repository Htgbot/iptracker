function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

function trackIP() {
  const ip = document.getElementById('ipInput').value.trim();
  const output = document.getElementById('output');
  output.innerHTML = 'Loading...';

  const endpoint = `https://harry.lkdevs.com/api/checkip.php?ip=${encodeURIComponent(ip)}`;

  fetch(endpoint)
    .then(res => res.json())
    .then(data => {
      if (!data.success) throw new Error('Invalid IP');
      output.innerHTML = `
        <div class="result-box">
          <p><strong>IP:</strong> ${data.ip}</p>
          <p><strong>Type:</strong> ${data.type}</p>
          <p><strong>Continent:</strong> ${data.continent} (${data.continent_code})</p>
          <p><strong>Country:</strong> ${data.country} (${data.country_code}) <img src="${data.country_flag}" width="20"/></p>
          <p><strong>Capital:</strong> ${data.country_capital}</p>
          <p><strong>Phone Code:</strong> ${data.country_phone}</p>
          <p><strong>Neighbours:</strong> ${data.country_neighbours}</p>
          <p><strong>Region:</strong> ${data.region}</p>
          <p><strong>City:</strong> ${data.city}</p>
          <p><strong>Latitude:</strong> ${data.latitude}</p>
          <p><strong>Longitude:</strong> ${data.longitude}</p>
          <p><strong>ASN:</strong> ${data.asn}</p>
          <p><strong>Org:</strong> ${data.org}</p>
          <p><strong>ISP:</strong> ${data.isp}</p>
          <p><strong>Timezone:</strong> ${data.timezone} (${data.timezone_name})</p>
          <p><strong>GMT:</strong> ${data.timezone_gmt} (DST Offset: ${data.timezone_dstOffset}, GMT Offset: ${data.timezone_gmtOffset})</p>
          <p><strong>Currency:</strong> ${data.currency} (${data.currency_code}) - ${data.currency_symbol} | Rate: ${data.currency_rates} | Plural: ${data.currency_plural}</p>
          <iframe src="https://www.google.com/maps?q=${data.latitude},${data.longitude}&output=embed"></iframe>
        </div>
      `;
    })
    .catch(() => {
      output.innerHTML = `
        <div class="error-box">
          <h3>Oops! Something went wrong.</h3>
          <p>Failed to fetch. Try again.</p>
        </div>
      `;
    });
}
