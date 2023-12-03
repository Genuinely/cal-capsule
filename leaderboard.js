function renderLeaderboard(data) {
    // Sort the data by hours in descending order
    const sortedData = data.slice().sort((a, b) => b.hours - a.hours);
  
    // Get the container element
    const leaderboardContainer = document.getElementById("leaderboard");
  
    // Clear any existing content
    leaderboardContainer.innerHTML = "";
  
    // Create and append Bootstrap-styled leaderboard items
    sortedData.forEach((entry, index) => {
      const listItem = document.createElement("li");
      listItem.className = "list-group-item";
      listItem.innerHTML = `<span class="badge badge-primary badge-pill">${index + 1}</span> ${entry.person}: ${entry.hours} hours`;
      leaderboardContainer.appendChild(listItem);
    });
  }