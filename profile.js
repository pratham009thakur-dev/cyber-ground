const data = {
  name: "Ghost Rider",
  email: "pratham9thakur@gmail.com",
  joined: "July 2023",
  cyberId: "CG-2023-Ghost",
  avatar: "https://via.placeholder.com/150",
  gameInterests: ["BGMI", "Clash of Clans", "Asphalt Unite Legends"],
  communities: ["BGMI", "Clash of Clans"],
  achievements: ["Top 1% Global FPS Rank", "Community Leader (Console Kings)"],
  rankings: { global: 11, india: 1 },
  friends: 42,
  social: {
    discord: "pratham#2025",
    youtube: "/prathamgaming"
  }
};

// ========== Avatar Upload Preview ==========
document.getElementById('avatar-upload').addEventListener('change', (event) => {
  const reader = new FileReader();
  reader.onload = () => {
    document.getElementById('profile-avatar').style.backgroundImage = `url('${reader.result}')`;
  };
  reader.readAsDataURL(event.target.files[0]);
});

// ========== Populate Profile Info ==========
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('username').innerText = data.name;
  document.getElementById('user-email').innerText = data.email;
  document.getElementById('user-joined').innerText = "Joined " + data.joined;
  document.getElementById('cyber-id').innerText = "Cyber ID: " + data.cyberId;

  // Fill dynamic sections
  const dynamic = document.getElementById('dynamic-sections');
  dynamic.innerHTML = `
    <div class="section">
      <h2>Game Interests</h2>
      <ul>${data.gameInterests.map(item => `<li>${item}</li>`).join('')}</ul>
    </div>

    <div class="section">
      <h2>Communities</h2>
      <ul>${data.communities.map(item => `<li>${item}</li>`).join('')}</ul>
    </div>

    <div class="section">
      <h2>Achievements 🏆</h2>
      <ul>${data.achievements.map(item => `<li>${item}</li>`).join('')}</ul>
    </div>

    <div class="section">
      <h2>Rankings</h2>
      <div class="highlight-box">Global Rank: <strong>${data.rankings.global}</strong></div>
      <div class="highlight-box">India Rank: <strong>${data.rankings.india}</strong></div>
    </div>

    <div class="section">
      <h2>Friends</h2>
      <div class="highlight-box">${data.friends} Friends</div>
    </div>

    <div class="section">
      <h2>Social Links</h2>
      <p>Discord: ${data.social.discord}</p>
      <p>YouTube: ${data.social.youtube}</p>
    </div>
  `;
});

// ========== Edit Profile Logic ==========

// Open Modal with pre-filled data
document.querySelector('.edit-btn').addEventListener('click', () => {
  document.getElementById('edit-name').value = data.name;
  document.getElementById('edit-email').value = data.email;
  document.getElementById('edit-interests').value = data.gameInterests.join(', ');
  document.getElementById('edit-communities').value = data.communities.join(', ');
  document.getElementById('editModal').style.display = 'flex';
});

function closeEdit() {
  document.getElementById('editModal').style.display = 'none';
}

function saveProfile() {
  data.name = document.getElementById('edit-name').value;
  data.email = document.getElementById('edit-email').value;
  data.gameInterests = document.getElementById('edit-interests').value.split(',').map(e => e.trim());
  data.communities = document.getElementById('edit-communities').value.split(',').map(e => e.trim());

  // Update the UI
  document.getElementById('username').innerText = data.name;
  document.getElementById('user-email').innerText = data.email;

  const dynamic = document.getElementById('dynamic-sections');
  dynamic.innerHTML = `
    <div class="section">
      <h2>Game Interests</h2>
      <ul>${data.gameInterests.map(item => `<li>${item}</li>`).join('')}</ul>
    </div>

    <div class="section">
      <h2>Communities</h2>
      <ul>${data.communities.map(item => `<li>${item}</li>`).join('')}</ul>
    </div>

    <div class="section">
      <h2>Achievements 🏆</h2>
      <ul>${data.achievements.map(item => `<li>${item}</li>`).join('')}</ul>
    </div>

    <div class="section">
      <h2>Rankings</h2>
      <div class="highlight-box">Global Rank: <strong>${data.rankings.global}</strong></div>
      <div class="highlight-box">India Rank: <strong>${data.rankings.india}</strong></div>
    </div>

    <div class="section">
      <h2>Friends</h2>
      <div class="highlight-box">${data.friends} Friends</div>
    </div>

    <div class="section">
      <h2>Social Links</h2>
      <p>Discord: ${data.social.discord}</p>
      <p>YouTube: ${data.social.youtube}</p>
    </div>
  `;

  closeEdit();
}
